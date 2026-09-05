import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useMissionStore } from '../../store/useMissionStore';
import { SubsystemStatus } from '../../types/telemetry';
import { Eye, Info, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

export const SparBuoy3DViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentPacket, selectedHotspotId, setSelectedHotspotId, subsystems } = useMissionStore();

  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [showWaterPlane, setShowWaterPlane] = useState<boolean>(true);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const buoyGroupRef = useRef<THREE.Group | null>(null);
  const hotspotMeshesRef = useRef<{ id: SubsystemStatus['id']; mesh: THREE.Mesh; label: string }[]>([]);
  const isDraggingRef = useRef<boolean>(false);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cameraOrbitRef = useRef<{ theta: number; phi: number; radius: number }>({
    theta: 0.8,
    phi: 1.35,
    radius: 9.5
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x070a0f);
    scene.fog = new THREE.FogExp2(0x070a0f, 0.04);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCameraPosition();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    containerRef.current.replaceChildren(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x334466, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x00f0ff, 2.0);
    sunLight.position.set(6, 12, 8);
    scene.add(sunLight);

    const warmFill = new THREE.DirectionalLight(0xffb020, 0.8);
    warmFill.position.set(-8, -4, -6);
    scene.add(warmFill);

    // Grid Floor / Reference Datum
    const grid = new THREE.GridHelper(12, 24, 0x00f0ff, 0x141e2e);
    grid.position.y = -4.5;
    scene.add(grid);

    // Water Surface Plane (translucent Antarctic sea)
    const waterGeo = new THREE.PlaneGeometry(16, 16, 32, 32);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0c2738,
      transparent: true,
      opacity: 0.65,
      roughness: 0.15,
      metalness: 0.8,
      side: THREE.DoubleSide
    });
    const waterPlane = new THREE.Mesh(waterGeo, waterMat);
    waterPlane.rotation.x = -Math.PI / 2;
    waterPlane.position.y = 0; // Waterline (MSL)
    waterPlane.name = 'waterPlane';
    scene.add(waterPlane);

    // BUILD 7-METER JAVELIN SPAR-BUOY MODEL
    const buoyGroup = new THREE.Group();
    buoyGroupRef.current = buoyGroup;
    scene.add(buoyGroup);

    // 1. Apex Conical Radome (>60° pitch, height ~0.7m, base radius ~0.24m)
    // Positioned above water (+0.5 to +1.2m)
    const radomeGeo = new THREE.ConeGeometry(0.24, 0.7, 24);
    const radomeMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.3,
      metalness: 0.2
    });
    const radome = new THREE.Mesh(radomeGeo, radomeMat);
    radome.position.y = 1.15;
    buoyGroup.add(radome);

    // Summit Mast & Ultrasonic Anemometer Head
    const mastGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 16);
    const mastMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, metalness: 0.9, roughness: 0.1 });
    const mast = new THREE.Mesh(mastGeo, mastMat);
    mast.position.y = 1.65;
    buoyGroup.add(mast);

    const anemometerHeadGeo = new THREE.TorusGeometry(0.08, 0.015, 12, 24);
    const anemometerHead = new THREE.Mesh(anemometerHeadGeo, mastMat);
    anemometerHead.rotation.x = Math.PI / 2;
    anemometerHead.position.y = 1.85;
    buoyGroup.add(anemometerHead);

    // 2. High-Visibility Buoyancy Collar (~0.5m thick, expanded diameter ~0.8m)
    // Sits at waterline (-0.2m to +0.3m)
    const collarGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.55, 32);
    const collarMat = new THREE.MeshStandardMaterial({
      color: 0xff5500, // Safety fluorescent maritime orange
      roughness: 0.4,
      metalness: 0.1
    });
    const collar = new THREE.Mesh(collarGeo, collarMat);
    collar.position.y = 0.1;
    buoyGroup.add(collar);

    // SOLAS Retroreflective bands around collar
    const bandGeo = new THREE.CylinderGeometry(0.425, 0.425, 0.08, 32);
    const bandMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.5 });
    const bandTop = new THREE.Mesh(bandGeo, bandMat);
    bandTop.position.y = 0.22;
    const bandBottom = new THREE.Mesh(bandGeo, bandMat);
    bandBottom.position.y = -0.05;
    buoyGroup.add(bandTop);
    buoyGroup.add(bandBottom);

    // 3. Submerged Spar Column (4.1m slender pressure hull, diameter ~0.24m)
    // Sits from -0.2m down to -4.3m
    const sparGeo = new THREE.CylinderGeometry(0.12, 0.12, 4.1, 24);
    const sparMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.35,
      metalness: 0.7
    });
    const spar = new THREE.Mesh(sparGeo, sparMat);
    spar.position.y = -2.15;
    buoyGroup.add(spar);

    // Sacrificial Zinc Anodes along the spar
    const zincMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
    [-1.2, -2.5, -3.8].forEach(yPos => {
      const ringGeo = new THREE.CylinderGeometry(0.135, 0.135, 0.08, 16);
      const zincRing = new THREE.Mesh(ringGeo, zincMat);
      zincRing.position.y = yPos;
      buoyGroup.add(zincRing);
    });

    // 4. Benthic CTD Cage & Ballast Base (~0.9m at bottom: -4.3m to -5.2m)
    const cageRingGeo = new THREE.TorusGeometry(0.26, 0.02, 12, 24);
    const cageMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.85, roughness: 0.2 });
    
    const cageRing1 = new THREE.Mesh(cageRingGeo, cageMat);
    cageRing1.rotation.x = Math.PI / 2;
    cageRing1.position.y = -4.3;
    const cageRing2 = new THREE.Mesh(cageRingGeo, cageMat);
    cageRing2.rotation.x = Math.PI / 2;
    cageRing2.position.y = -5.1;
    buoyGroup.add(cageRing1);
    buoyGroup.add(cageRing2);

    // Vertical protective bars of CTD cage
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const barGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.8, 8);
      const bar = new THREE.Mesh(barGeo, cageMat);
      bar.position.set(Math.cos(angle) * 0.26, -4.7, Math.sin(angle) * 0.26);
      buoyGroup.add(bar);
    }

    // Micro-CTD Sensor Sonde inside cage
    const sondeGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.5, 16);
    const sondeMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, metalness: 0.9, roughness: 0.1 });
    const sonde = new THREE.Mesh(sondeGeo, sondeMat);
    sonde.position.y = -4.7;
    buoyGroup.add(sonde);

    // INTERACTIVE 3D HOTSPOT DIODES
    const hotspots: { id: SubsystemStatus['id']; mesh: THREE.Mesh; label: string; y: number }[] = [
      { id: 'sensor_suite', mesh: null as any, label: 'Ultrasonic Anemometer & Summit MEMS', y: 1.75 },
      { id: 'core_avionics', mesh: null as any, label: 'Core Avionics (THEJAS32 RISC-V / NavIC / DRT)', y: 0.95 },
      { id: 'power_reservoir', mesh: null as any, label: 'Power Reservoir (LiSOCl2 & HLC 1550)', y: -1.2 },
      { id: 'pte_suspension', mesh: null as any, label: 'PTE PDMS Silicone & FVMQ Lung Bellows', y: -2.8 },
      { id: 'sensor_suite', mesh: null as any, label: 'Benthic Micro-CTD Sonde (RS485)', y: -4.7 }
    ];

    const hotspotMeshes: { id: SubsystemStatus['id']; mesh: THREE.Mesh; label: string }[] = [];

    hotspots.forEach(item => {
      const diodeGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const diodeMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: false
      });
      const diodeMesh = new THREE.Mesh(diodeGeo, diodeMat);
      diodeMesh.position.set(0.28, item.y, 0);

      // Glowing aura ring around diode
      const ringGeo = new THREE.RingGeometry(0.12, 0.16, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
      });
      const auraRing = new THREE.Mesh(ringGeo, ringMat);
      auraRing.rotation.y = Math.PI / 2;
      diodeMesh.add(auraRing);

      diodeMesh.userData = { id: item.id, label: item.label };
      buoyGroup.add(diodeMesh);
      hotspotMeshes.push({ id: item.id, mesh: diodeMesh, label: item.label });
    });

    hotspotMeshesRef.current = hotspotMeshes;

    // Animation Loop
    let animFrameId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animFrameId = requestAnimationFrame(render);
      const elapsedTime = clock.getElapsedTime();

      // Pulsing hotspot diode rings
      hotspotMeshesRef.current.forEach(({ mesh }) => {
        const ring = mesh.children[0] as THREE.Mesh;
        if (ring) {
          const scale = 1.0 + 0.3 * Math.sin(elapsedTime * 4.0);
          ring.scale.set(scale, scale, scale);
        }
      });

      // Subtle water gentle wave vertex displacement
      if (waterPlane) {
        waterPlane.position.y = 0.05 * Math.sin(elapsedTime * 1.5);
      }

      renderer.render(scene, camera);
    };

    render();

    // Mouse Drag Interaction for Orbiting
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Raycasting for hover
      if (containerRef.current && cameraRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), cameraRef.current);

        const clickableMeshes = hotspotMeshesRef.current.map(h => h.mesh);
        const intersects = raycaster.intersectObjects(clickableMeshes);

        if (intersects.length > 0) {
          const hit = intersects[0].object;
          setHoveredHotspot(hit.userData.label);
          containerRef.current.style.cursor = 'pointer';
        } else {
          setHoveredHotspot(null);
          containerRef.current.style.cursor = isDraggingRef.current ? 'grabbing' : 'grab';
        }
      }

      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - mousePosRef.current.x;
      const deltaY = e.clientY - mousePosRef.current.y;

      cameraOrbitRef.current.theta -= deltaX * 0.008;
      cameraOrbitRef.current.phi = Math.max(0.2, Math.min(Math.PI - 0.2, cameraOrbitRef.current.phi - deltaY * 0.008));

      updateCameraPosition();
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraOrbitRef.current.radius = Math.max(4.0, Math.min(16.0, cameraOrbitRef.current.radius + e.deltaY * 0.01));
      updateCameraPosition();
    };

    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current || !cameraRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), cameraRef.current);

      const clickableMeshes = hotspotMeshesRef.current.map(h => h.mesh);
      const intersects = raycaster.intersectObjects(clickableMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        setSelectedHotspotId(hit.userData.id);
      }
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElem.addEventListener('wheel', handleWheel, { passive: false });
    domElem.addEventListener('click', handleClick);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElem.removeEventListener('wheel', handleWheel);
      domElem.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  function updateCameraPosition() {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraOrbitRef.current;
    const x = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi) - 1.2; // target around center of buoyancy
    const z = radius * Math.sin(phi) * Math.cos(theta);

    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(0, -1.8, 0);
  }

  // Update Dynamic 6-DoF Attitude Tilt in real-time
  useEffect(() => {
    if (!buoyGroupRef.current) return;

    // Pitch (rotation around X) and Roll (rotation around Z) converted to radians
    const pitchRad = (currentPacket.gyro.pitch * Math.PI) / 180;
    const rollRad = (currentPacket.gyro.roll * Math.PI) / 180;

    // Smoothly apply live attitude
    buoyGroupRef.current.rotation.x = pitchRad;
    buoyGroupRef.current.rotation.z = rollRad;
    buoyGroupRef.current.position.y = (currentPacket.gyro.heaveAcceleration || 0) * 0.15;
  }, [currentPacket.gyro.pitch, currentPacket.gyro.roll, currentPacket.gyro.heaveAcceleration]);

  // Update Hotspot Diode Colors based on selection & state
  useEffect(() => {
    hotspotMeshesRef.current.forEach(({ id, mesh }) => {
      const mat = mesh.material as THREE.MeshBasicMaterial;
      const ringMat = (mesh.children[0] as THREE.Mesh).material as THREE.MeshBasicMaterial;
      
      const sub = subsystems.find(s => s.id === id);
      const isSelected = selectedHotspotId === id;

      let col = 0x00f0ff;
      if (sub?.state === 'FAIL' || currentPacket.gyro.isDistressTilt) {
        col = 0xff2e54;
      } else if (isSelected) {
        col = 0xffb020;
      }

      mat.color.setHex(col);
      ringMat.color.setHex(col);
    });
  }, [selectedHotspotId, subsystems, currentPacket.gyro.isDistressTilt]);

  const resetCamera = () => {
    cameraOrbitRef.current = { theta: 0.8, phi: 1.35, radius: 9.5 };
    updateCameraPosition();
  };

  return (
    <div className="relative w-full h-[520px] rounded-xl overflow-hidden hud-glass border border-cyan-500/30">
      
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="w-full h-full cursor-grab" />

      {/* Top Left: 3D Telemetry Readouts */}
      <div className="absolute top-3 left-3 pointer-events-none font-mono text-xs space-y-1">
        <div className="flex items-center space-x-2 bg-void-900/80 backdrop-blur-sm border border-cyan-500/30 px-2.5 py-1 rounded">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 font-semibold tracking-wider">3D JAVELIN PROFILE (7.0M SPAR)</span>
        </div>
        <div className="text-[11px] text-slate-400 bg-void-900/80 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded space-y-0.5">
          <div>Apex: Conical Radome (&gt;60° pitch, 0.7m)</div>
          <div>Waterline: Buoyancy Collar (0.55m, Ø0.8m)</div>
          <div>Submerged Spar: 4.1m (Zn Anodes, PTE Enclosure)</div>
          <div>Benthic Base: 0.9m CTD Cage Sonde</div>
        </div>
      </div>

      {/* Top Right: View Controls */}
      <div className="absolute top-3 right-3 flex items-center space-x-2">
        <button
          onClick={resetCamera}
          title="Reset 3D Camera View"
          className="p-1.5 rounded bg-void-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Center: Hovered Hotspot Tooltip */}
      {hoveredHotspot && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-void-900/90 backdrop-blur-md border border-cyan-400/60 shadow-cyan-glow text-cyan-200 text-xs font-mono px-3 py-1.5 rounded-full flex items-center space-x-2 animate-fade-in pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
          <span>Click to Inspect: {hoveredHotspot}</span>
        </div>
      )}

      {/* Bottom Left: Live 6-DoF Tilt Orientation Overlay */}
      <div className="absolute bottom-3 left-3 bg-void-900/85 backdrop-blur-sm border border-cyan-500/20 p-2.5 rounded-lg font-mono text-[11px] space-y-1">
        <div className="text-slate-400 flex items-center justify-between space-x-3">
          <span>PITCH / ROLL:</span>
          <span className="text-cyan-300 font-bold">{currentPacket.gyro.pitch}° / {currentPacket.gyro.roll}°</span>
        </div>
        <div className="text-slate-400 flex items-center justify-between space-x-3">
          <span>COMBINED TILT:</span>
          <span className={`font-bold ${currentPacket.gyro.isDistressTilt ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
            {currentPacket.gyro.tiltAngle}°
          </span>
        </div>
        <div className="text-slate-400 flex items-center justify-between space-x-3">
          <span>BALLAST HEAVE:</span>
          <span className="text-slate-200">{(currentPacket.gyro.heaveAcceleration || 0).toFixed(2)} m/s²</span>
        </div>
      </div>

      {/* Bottom Right: Interactive Hotspots Legend */}
      <div className="absolute bottom-3 right-3 bg-void-900/85 backdrop-blur-sm border border-slate-800 p-2 rounded-lg font-mono text-[10px] text-slate-400 space-y-1">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
          <span>Cyan: Nominal Pass</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-cyber-amber" />
          <span>Amber: Inspected Subsystem</span>
        </div>
      </div>

    </div>
  );
};
