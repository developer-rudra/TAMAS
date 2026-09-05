import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useMissionStore } from '../../store/useMissionStore';
import { 
  RotateCw, 
  ZoomIn, 
  Move, 
  Home, 
  Sparkles,
  Compass
} from 'lucide-react';

export interface BuoyComponentInfo {
  id: string;
  name: string;
  category: string;
  material: string;
  functionDesc: string;
  status: string;
  metrics: Record<string, string | number>;
  hotspotMappingId: 'core_avionics' | 'power_reservoir' | 'pte_suspension' | 'sensor_suite';
}

interface MarineBuoy3DProps {
  onComponentSelect?: (component: BuoyComponentInfo) => void;
  selectedComponentId?: string | null;
}

export const MarineBuoy3D: React.FC<MarineBuoy3DProps> = ({ 
  onComponentSelect,
  selectedComponentId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentPacket, setSelectedHotspotId } = useMissionStore();

  // Floating controls state
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  // References for Three.js instance
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const buoyGroupRef = useRef<THREE.Group | null>(null);
  const oceanMeshRef = useRef<THREE.Mesh | null>(null);
  const interactivePartsRef = useRef<{ mesh: THREE.Mesh; info: BuoyComponentInfo }[]>([]);
  const hoveredMeshRef = useRef<THREE.Mesh | null>(null);

  // Default camera target & position for isometric view matching reference image
  const defaultCameraPos = new THREE.Vector3(0.0, 1.2, 7.8);
  const defaultTarget = new THREE.Vector3(0.0, -0.6, 0.0);

  // Component Catalog for Selected Component Details
  const componentCatalog: Record<string, BuoyComponentInfo> = {
    radome: {
      id: 'radome',
      name: 'PTFE Coated Fiberglass Radome',
      category: 'Above-Water Fairing & Telemetry',
      material: 'PTFE-Coated Marine Fiberglass',
      functionDesc: 'Conical aerodynamic radome shaped at >60° pitch for ice shedding, protecting INSAT and NavIC antennas.',
      status: 'Operational',
      metrics: {
        'Cone Pitch': '62.4° (Ice-Repellent)',
        'RF Transmissivity': '98.6%',
        'Ice Accretion': '0.0 mm (Shedding Pass)',
        'Health': '99.1%'
      },
      hotspotMappingId: 'core_avionics'
    },
    anemometer: {
      id: 'anemometer',
      name: 'Ultrasonic Anemometer & Mast',
      category: 'Surface Meteorological Array',
      material: '316L Stainless Steel & Acoustic Ceramic',
      functionDesc: 'Four-transducer acoustic resonance wind vector analyzer with barometric and temperature MEMS dies.',
      status: 'Active (4/4 Firing)',
      metrics: {
        'Wind Speed': `${currentPacket.sensors.windSpeedKnots} kts`,
        'Wind Direction': `${currentPacket.sensors.windDirectionDeg}°`,
        'Barometer': `${currentPacket.sensors.barometricPressureHpa} hPa`,
        'Air Temp': `${currentPacket.sensors.ambientSupercooledTempC}°C`
      },
      hotspotMappingId: 'sensor_suite'
    },
    collar: {
      id: 'collar',
      name: 'Polyurea-Armored Buoyancy Collar',
      category: 'Flotation & Waterline Stabilizer',
      material: 'Closed-Cell Marine Foam with Polyurea Armor',
      functionDesc: 'Safety orange buoyancy collar provides 120 kg net buoyancy and wave dampening at mean sea level.',
      status: 'Nominal Flotation',
      metrics: {
        'Net Reserve Buoyancy': '124.5 kg',
        'Collar Outer Ø': '0.98 m',
        'Waterline Draft': '0.0 m (MSL)',
        'Armor Coating': '3.2mm Polyurea Skin'
      },
      hotspotMappingId: 'pte_suspension'
    },
    battery: {
      id: 'battery',
      name: 'Power Reservoir',
      category: 'Primary Energy Storage',
      material: 'LiSOCl2 Bobbin Cells & HLC 1550',
      functionDesc: 'Dual 3.6V LiSOCl2 primary battery matrix buffered by Hybrid Layer Capacitor (HLC 1550) for 4.8 kbps bursts.',
      status: 'READY',
      metrics: {
        'Battery Level': `${Math.round(currentPacket.power.hlcChargePercentage)}%`,
        'Voltage': `${currentPacket.power.lisocl2CellVoltage} V`,
        'Temperature': '29.1 °C',
        'Status': 'READY',
        'Health': '98.2%'
      },
      hotspotMappingId: 'power_reservoir'
    },
    pte_bellows: {
      id: 'pte_bellows',
      name: 'PTE Chamber & Flexible Bellows',
      category: 'Pressure-Equalized Enclosure',
      material: 'FVMQ Fluorosilicone & 20 cSt PDMS Fluid',
      functionDesc: 'Equalizes pressure at depth using dynamic bellows breathing lung, preventing void collapse.',
      status: 'Pressure Equalized',
      metrics: {
        'PDMS Fluid Pressure': `${currentPacket.pte.pdmsFluidPressureBar} bar`,
        'Void Saturation': '100.0% (Zero-Void)',
        'Bellows Displacement': `${currentPacket.pte.fvmqBellowsDisplacementMm} mm`,
        'Status': 'Hermetic Pass'
      },
      hotspotMappingId: 'pte_suspension'
    },
    spar: {
      id: 'spar',
      name: 'Main Submerged Spar Column (13.7:1 Draft)',
      category: 'Hydrodynamic Hull & Ballast Column',
      material: 'Thick Marine Fiberglass Composite',
      functionDesc: 'Slender cylindrical spar acts as mechanical wave low-pass filter, minimizing heave in heavy swells.',
      status: 'Structural Pass',
      metrics: {
        'Draft Ratio': '13.7:1 Slender Ratio',
        'Submerged Length': '4.1 m',
        'Outer Diameter': '0.24 m',
        'Sacrificial Anodes': '3x Zinc Ring Active'
      },
      hotspotMappingId: 'pte_suspension'
    },
    ctd_sonde: {
      id: 'ctd_sonde',
      name: 'Sensor Array (I-PDMS 1000m-Rated Sonde)',
      category: 'Oceanographic Benthic Sensor',
      material: 'Titanium & Toroidal Conductivity Cell',
      functionDesc: 'RS485 micro-CTD sonde measuring water temperature, conductivity/salinity, and hydrostatic pressure.',
      status: 'Operational',
      metrics: {
        'Temperature': `${currentPacket.sensors.waterTempC} °C`,
        'Depth': '18.6 m',
        'Pressure': '2.1 bar',
        'Conductivity': 'Normal'
      },
      hotspotMappingId: 'sensor_suite'
    },
    benthic_cage: {
      id: 'benthic_cage',
      name: 'Benthic Protective Titanium Cage',
      category: 'Base Ballast & Impact Guard',
      material: 'Titanium Grade 5 Tubular Structure',
      functionDesc: 'Rugged cage protecting the CTD sensors against underwater ice debris, sea bottom collision, and grounding.',
      status: 'Hermetic / Secure',
      metrics: {
        'Impact Rating': '12.5 kJ Yield',
        'Depth Rating': '1000 m Hydrostatic',
        'Ballast Mass': '32.0 kg Lead Base',
        'Acoustic Release': 'Standby Arm'
      },
      hotspotMappingId: 'sensor_suite'
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // SCENE
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Rich dual-zone marine atmosphere (Sky above, deep ocean below)
    scene.background = new THREE.Color(0x13202a);
    scene.fog = new THREE.FogExp2(0x0e1b24, 0.045);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.copy(defaultCameraPos);
    camera.lookAt(defaultTarget);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    containerRef.current.replaceChildren(renderer.domElement);

    // ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.target.copy(defaultTarget);
    controls.minDistance = 3.2;
    controls.maxDistance = 16.0;
    controls.maxPolarAngle = Math.PI - 0.05;
    controls.minPolarAngle = 0.1;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.8;
    controlsRef.current = controls;

    controls.addEventListener('start', () => {
      controls.autoRotate = false;
    });

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x2d4352, 1.9);
    scene.add(ambientLight);

    // Main sun key light
    const sunLight = new THREE.DirectionalLight(0xf1f5f9, 2.6);
    sunLight.position.set(5, 10, 7);
    sunLight.castShadow = true;
    scene.add(sunLight);

    // Underwater deep-blue bounce fill
    const waterBounce = new THREE.DirectionalLight(0x1d4e6d, 1.4);
    waterBounce.position.set(-5, -4, -4);
    scene.add(waterBounce);

    // Soft rim specular
    const rimLight = new THREE.DirectionalLight(0x4fa3b8, 1.1);
    rimLight.position.set(0, 4, -8);
    scene.add(rimLight);

    // -------------------------------------------------------------
    // REALISTIC OCEAN WATERLINE SURFACE PLANE (Intersecting Buoy at Y = 0)
    // -------------------------------------------------------------
    const oceanGeo = new THREE.PlaneGeometry(18, 18, 64, 64);
    
    // Procedural wave displacement vertex deformation
    const posAttr = oceanGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const u = posAttr.getX(i);
      const v = posAttr.getY(i);
      const dist = Math.sqrt(u * u + v * v);
      // Gentle surface wave swells
      const zWave = 0.08 * Math.sin(u * 1.8 + v * 1.2) + 0.04 * Math.cos(u * 2.8 - v * 2.2);
      posAttr.setZ(i, zWave);
    }
    oceanGeo.computeVertexNormals();

    const oceanMat = new THREE.MeshStandardMaterial({
      color: 0x13384c,
      roughness: 0.18,
      metalness: 0.75,
      transparent: true,
      opacity: 0.82,
      side: THREE.DoubleSide
    });
    const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
    oceanMesh.rotation.x = -Math.PI / 2;
    oceanMesh.position.y = 0.0;
    scene.add(oceanMesh);
    oceanMeshRef.current = oceanMesh;

    // SUBTLE UNDERWATER SEAFLOOR GRID (Y = -4.9)
    const floorGrid = new THREE.GridHelper(10, 20, 0x3d5a68, 0x1a2c38);
    floorGrid.position.y = -4.95;
    scene.add(floorGrid);

    // FLOATING UNDERWATER PARTICLES (Marine Snow)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3 + 0] = (Math.random() - 0.5) * 8.0;
      particlePositions[i * 3 + 1] = -0.2 - Math.random() * 4.6; // Underwater section
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8.0;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x4fa3b8,
      size: 0.035,
      transparent: true,
      opacity: 0.5
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // -------------------------------------------------------------
    // 3D MARINE SPAR-BUOY MODEL (Matching Reference Design)
    // -------------------------------------------------------------
    const buoyGroup = new THREE.Group();
    buoyGroupRef.current = buoyGroup;
    scene.add(buoyGroup);

    const interactiveList: { mesh: THREE.Mesh; info: BuoyComponentInfo }[] = [];

    // Materials
    const radomeMat = new THREE.MeshStandardMaterial({ color: 0xededed, roughness: 0.28, metalness: 0.08 });
    const mastSSMat = new THREE.MeshStandardMaterial({ color: 0x94a9b8, roughness: 0.22, metalness: 0.85 });
    // Marine Safety Orange (#E87522)
    const collarOrangeMat = new THREE.MeshStandardMaterial({ color: 0xe87522, roughness: 0.38, metalness: 0.1 });
    const sparDarkMat = new THREE.MeshStandardMaterial({ color: 0x2b3844, roughness: 0.35, metalness: 0.55 });
    const titaniumMat = new THREE.MeshStandardMaterial({ color: 0x546675, roughness: 0.25, metalness: 0.88 });
    const rubberTrimMat = new THREE.MeshStandardMaterial({ color: 0x182026, roughness: 0.7, metalness: 0.1 });

    // 1. APEX CONICAL FIBERGLASS RADOME (Above Water)
    // Y: 1.45 to 2.30
    const radomeGeo = new THREE.ConeGeometry(0.23, 0.85, 36);
    const radomeMesh = new THREE.Mesh(radomeGeo, radomeMat);
    radomeMesh.position.y = 1.88;
    radomeMesh.castShadow = true;
    radomeMesh.userData = { id: 'radome', info: componentCatalog.radome };
    buoyGroup.add(radomeMesh);
    interactiveList.push({ mesh: radomeMesh, info: componentCatalog.radome });

    // Grounding tip pin
    const tipGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.16, 12);
    const tipMesh = new THREE.Mesh(tipGeo, mastSSMat);
    tipMesh.position.y = 2.38;
    buoyGroup.add(tipMesh);

    // 2. ULTRASONIC ANEMOMETER MAST & WINDOW (Above Water)
    // Central mast
    const mastGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.24, 24);
    const mastMesh = new THREE.Mesh(mastGeo, mastSSMat);
    mastMesh.position.y = 1.35;
    mastMesh.userData = { id: 'anemometer', info: componentCatalog.anemometer };
    buoyGroup.add(mastMesh);
    interactiveList.push({ mesh: mastMesh, info: componentCatalog.anemometer });

    // 4 vertical acoustic transducer pillars
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const pilGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.22, 12);
      const pilMesh = new THREE.Mesh(pilGeo, mastSSMat);
      pilMesh.position.set(Math.cos(angle) * 0.15, 1.35, Math.sin(angle) * 0.15);
      buoyGroup.add(pilMesh);
    }

    // Weather MEMS trunk (tapered housing below anemometer)
    const memsGeo = new THREE.CylinderGeometry(0.18, 0.25, 0.65, 36);
    const memsMesh = new THREE.Mesh(memsGeo, radomeMat.clone());
    memsMesh.position.y = 0.90;
    memsMesh.castShadow = true;
    memsMesh.userData = { id: 'anemometer', info: componentCatalog.anemometer };
    buoyGroup.add(memsMesh);
    interactiveList.push({ mesh: memsMesh, info: componentCatalog.anemometer });

    // 3. POLYUREA-ARMORED MARINE FOAM BUOYANCY COLLAR (Right at Waterline Y = 0)
    // Sits from Y = -0.15 to +0.45
    const collarGeo = new THREE.CylinderGeometry(0.50, 0.50, 0.60, 40);
    const collarMesh = new THREE.Mesh(collarGeo, collarOrangeMat);
    collarMesh.position.y = 0.22;
    collarMesh.castShadow = true;
    collarMesh.receiveShadow = true;
    collarMesh.userData = { id: 'collar', info: componentCatalog.collar };
    buoyGroup.add(collarMesh);
    interactiveList.push({ mesh: collarMesh, info: componentCatalog.collar });

    // Black Rubber Trim / Bumper Rim around collar
    const bumperGeo = new THREE.TorusGeometry(0.51, 0.026, 16, 48);
    const bumperMesh = new THREE.Mesh(bumperGeo, rubberTrimMat);
    bumperMesh.rotation.x = Math.PI / 2;
    bumperMesh.position.y = 0.22;
    buoyGroup.add(bumperMesh);

    // 4. SUBMERGED PTE CHAMBER & BELLOWS (Underwater Y = -0.2 to -0.6)
    const pteGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.45, 32);
    const pteMesh = new THREE.Mesh(pteGeo, sparDarkMat.clone());
    pteMesh.position.y = -0.28;
    pteMesh.userData = { id: 'pte_bellows', info: componentCatalog.pte_bellows };
    buoyGroup.add(pteMesh);
    interactiveList.push({ mesh: pteMesh, info: componentCatalog.pte_bellows });

    // FVMQ Flexible Bellows ring
    const bellowsGeo = new THREE.TorusGeometry(0.255, 0.03, 16, 32);
    const bellowsMat = new THREE.MeshStandardMaterial({ color: 0x4fa3b8, roughness: 0.5, metalness: 0.3 });
    const bellowsMesh = new THREE.Mesh(bellowsGeo, bellowsMat);
    bellowsMesh.rotation.x = Math.PI / 2;
    bellowsMesh.position.y = -0.42;
    bellowsMesh.userData = { id: 'pte_bellows', info: componentCatalog.pte_bellows };
    buoyGroup.add(bellowsMesh);
    interactiveList.push({ mesh: bellowsMesh, info: componentCatalog.pte_bellows });

    // 5. BATTERY & AVIONICS SECTION (Underwater Y = -0.6 to -1.3)
    const battGeo = new THREE.CylinderGeometry(0.20, 0.20, 0.65, 32);
    const battMat = new THREE.MeshStandardMaterial({ color: 0x334454, roughness: 0.3, metalness: 0.6 });
    const battMesh = new THREE.Mesh(battGeo, battMat);
    battMesh.position.y = -0.80;
    battMesh.userData = { id: 'battery', info: componentCatalog.battery };
    buoyGroup.add(battMesh);
    interactiveList.push({ mesh: battMesh, info: componentCatalog.battery });

    // 6. MAIN SUBMERGED SPAR TUBE (13.7:1 Draft Ratio) (Underwater Y = -1.1 to -3.8)
    const sparGeo = new THREE.CylinderGeometry(0.125, 0.125, 2.65, 32);
    const sparMesh = new THREE.Mesh(sparGeo, sparDarkMat);
    sparMesh.position.y = -2.35;
    sparMesh.castShadow = true;
    sparMesh.userData = { id: 'spar', info: componentCatalog.spar };
    buoyGroup.add(sparMesh);
    interactiveList.push({ mesh: sparMesh, info: componentCatalog.spar });

    // Sacrificial Zinc Anodes along the spar
    [-1.5, -2.3, -3.1].forEach((anodeY) => {
      const zincGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.08, 24);
      const zincMat = new THREE.MeshStandardMaterial({ color: 0x8a9ea8, metalness: 0.85, roughness: 0.2 });
      const zincMesh = new THREE.Mesh(zincGeo, zincMat);
      zincMesh.position.y = anodeY;
      buoyGroup.add(zincMesh);
    });

    // 7. MICRO-CTD SONDE SECTION (Underwater Y = -3.7 to -4.1)
    const sondeGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.45, 24);
    const sondeMat = new THREE.MeshStandardMaterial({ color: 0x4fa3b8, metalness: 0.8, roughness: 0.2 });
    const sondeMesh = new THREE.Mesh(sondeGeo, sondeMat);
    sondeMesh.position.y = -3.85;
    sondeMesh.userData = { id: 'ctd_sonde', info: componentCatalog.ctd_sonde };
    buoyGroup.add(sondeMesh);
    interactiveList.push({ mesh: sondeMesh, info: componentCatalog.ctd_sonde });

    // Conductivity Toroid tip
    const cellGeo = new THREE.TorusGeometry(0.042, 0.012, 12, 24);
    const cellMat = new THREE.MeshStandardMaterial({ color: 0x52b788, roughness: 0.2, metalness: 0.7 });
    const condCell = new THREE.Mesh(cellGeo, cellMat);
    condCell.rotation.x = Math.PI / 2;
    condCell.position.y = -4.08;
    buoyGroup.add(condCell);

    // 8. BENTHIC PROTECTIVE TITANIUM CAGE (Underwater Y = -3.7 to -4.6)
    const cageTopRingGeo = new THREE.TorusGeometry(0.28, 0.018, 12, 32);
    const cageTopRing = new THREE.Mesh(cageTopRingGeo, titaniumMat);
    cageTopRing.rotation.x = Math.PI / 2;
    cageTopRing.position.y = -3.70;
    cageTopRing.userData = { id: 'benthic_cage', info: componentCatalog.benthic_cage };
    buoyGroup.add(cageTopRing);
    interactiveList.push({ mesh: cageTopRing, info: componentCatalog.benthic_cage });

    const cageBottomRingGeo = new THREE.TorusGeometry(0.34, 0.022, 12, 36);
    const cageBottomRing = new THREE.Mesh(cageBottomRingGeo, titaniumMat);
    cageBottomRing.rotation.x = Math.PI / 2;
    cageBottomRing.position.y = -4.55;
    cageBottomRing.userData = { id: 'benthic_cage', info: componentCatalog.benthic_cage };
    buoyGroup.add(cageBottomRing);
    interactiveList.push({ mesh: cageBottomRing, info: componentCatalog.benthic_cage });

    // 6 Curved Titanium Legs
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const topX = Math.cos(angle) * 0.28;
      const topZ = Math.sin(angle) * 0.28;
      const botX = Math.cos(angle) * 0.34;
      const botZ = Math.sin(angle) * 0.34;

      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(topX, -3.70, topZ),
        new THREE.Vector3(topX * 1.15, -4.15, topZ * 1.15),
        new THREE.Vector3(botX, -4.55, botZ)
      ]);

      const tubeGeo = new THREE.TubeGeometry(curve, 16, 0.014, 8, false);
      const legMesh = new THREE.Mesh(tubeGeo, titaniumMat);
      legMesh.userData = { id: 'benthic_cage', info: componentCatalog.benthic_cage };
      buoyGroup.add(legMesh);
      interactiveList.push({ mesh: legMesh, info: componentCatalog.benthic_cage });
    }

    // Lead ballast bottom weight
    const ballastGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.12, 24);
    const ballastMesh = new THREE.Mesh(ballastGeo, sparDarkMat);
    ballastMesh.position.y = -4.52;
    buoyGroup.add(ballastMesh);

    interactivePartsRef.current = interactiveList;

    // -------------------------------------------------------------
    // RAYCASTING FOR INTERACTION
    // -------------------------------------------------------------
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const getIntersectedComponent = (event: MouseEvent) => {
      if (!containerRef.current || !cameraRef.current) return null;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current);
      const targets = interactivePartsRef.current.map(p => p.mesh);
      const intersects = raycaster.intersectObjects(targets, false);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const found = interactivePartsRef.current.find(p => p.mesh === hitMesh);
        return found || null;
      }
      return null;
    };

    const onPointerMove = (event: MouseEvent) => {
      const hit = getIntersectedComponent(event);
      if (hit) {
        setHoveredComponent(hit.info.name);
        containerRef.current!.style.cursor = 'pointer';

        if (hoveredMeshRef.current && hoveredMeshRef.current !== hit.mesh) {
          const prevMat = hoveredMeshRef.current.material as THREE.MeshStandardMaterial;
          if (prevMat && prevMat.emissive) prevMat.emissive.setHex(0x000000);
        }
        hoveredMeshRef.current = hit.mesh;
        const curMat = hit.mesh.material as THREE.MeshStandardMaterial;
        if (curMat && curMat.emissive) {
          curMat.emissive.setHex(0x1a3344);
        }
      } else {
        setHoveredComponent(null);
        containerRef.current!.style.cursor = 'default';
        if (hoveredMeshRef.current) {
          const prevMat = hoveredMeshRef.current.material as THREE.MeshStandardMaterial;
          if (prevMat && prevMat.emissive) prevMat.emissive.setHex(0x000000);
          hoveredMeshRef.current = null;
        }
      }
    };

    const onPointerClick = (event: MouseEvent) => {
      const hit = getIntersectedComponent(event);
      if (hit) {
        if (onComponentSelect) onComponentSelect(hit.info);
        if (setSelectedHotspotId) setSelectedHotspotId(hit.info.hotspotMappingId);
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousemove', onPointerMove);
    dom.addEventListener('click', onPointerClick);

    // -------------------------------------------------------------
    // ANIMATION LOOP (Realistic Waterline Waves & 60 FPS)
    // -------------------------------------------------------------
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Controls update
      controls.update();

      // Gentle animated ocean surface wave displacement
      if (oceanMeshRef.current) {
        const pos = oceanMeshRef.current.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const u = pos.getX(i);
          const v = pos.getY(i);
          const waveZ = 0.07 * Math.sin(u * 1.8 + elapsedTime * 1.5) + 0.04 * Math.cos(v * 2.2 + elapsedTime * 1.2);
          pos.setZ(i, waveZ);
        }
        pos.needsUpdate = true;
      }

      // Subtle buoy heave/pitch dampening
      if (buoyGroupRef.current) {
        buoyGroupRef.current.position.y = 0.04 * Math.sin(elapsedTime * 1.4);
        buoyGroupRef.current.rotation.z = 0.015 * Math.sin(elapsedTime * 0.9);
      }

      renderer.render(scene, camera);
    };

    animate();

    // RESIZE OBSERVER
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW && newH && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = newW / newH;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newW, newH);
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(animationId);
      dom.removeEventListener('mousemove', onPointerMove);
      dom.removeEventListener('click', onPointerClick);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  // Update autoRotate
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  // Reset View handler
  const handleResetView = useCallback(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.position.copy(defaultCameraPos);
    controlsRef.current.target.copy(defaultTarget);
    controlsRef.current.update();
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] sm:min-h-[480px] flex flex-col justify-between overflow-hidden select-none">
      
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* FLOATING LEFT CONTROLS TOOLBAR (Matching Reference Image) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center space-y-2 bg-[#1A2834]/80 backdrop-blur-md p-1.5 rounded-xl border border-tamas-border/60 shadow-lg text-xs">
        
        {/* Rotate Button */}
        <button
          title="Click and drag with left mouse to rotate"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] text-tamas-info transition-colors border border-tamas-border/40"
        >
          <RotateCw className="w-4 h-4 text-tamas-info" />
          <span className="text-[9px] font-medium text-tamas-textMuted mt-0.5">Rotate</span>
        </button>

        {/* Zoom Button */}
        <button
          title="Scroll mouse wheel to zoom in/out"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] text-tamas-textMuted hover:text-white transition-colors border border-tamas-border/40"
        >
          <ZoomIn className="w-4 h-4" />
          <span className="text-[9px] font-medium text-tamas-textMuted mt-0.5">Zoom</span>
        </button>

        {/* Pan Button */}
        <button
          title="Drag with right mouse button to pan"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] text-tamas-textMuted hover:text-white transition-colors border border-tamas-border/40"
        >
          <Move className="w-4 h-4" />
          <span className="text-[9px] font-medium text-tamas-textMuted mt-0.5">Pan</span>
        </button>

        {/* Reset View Button */}
        <button
          onClick={handleResetView}
          title="Reset camera view to default perspective"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] text-tamas-textMuted hover:text-white transition-colors border border-tamas-border/40"
        >
          <Home className="w-4 h-4" />
          <span className="text-[9px] font-medium text-tamas-textMuted mt-0.5">Reset View</span>
        </button>

        {/* Auto Rotate Toggle */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          title="Toggle Auto Rotation ON/OFF"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] transition-colors border border-tamas-border/40"
        >
          <span className="text-[9px] font-medium text-tamas-textMuted">Auto</span>
          <span className="text-[9px] font-medium text-tamas-textMuted">Rotate</span>
          <span className={`text-[10px] font-bold mt-0.5 ${autoRotate ? 'text-tamas-info' : 'text-tamas-textMuted/60'}`}>
            {autoRotate ? 'ON' : 'OFF'}
          </span>
        </button>

      </div>

      {/* FLOATING NAUTICAL COMPASS ROSE (Bottom Right, matching Reference Image) */}
      <div className="absolute right-5 bottom-5 z-20 pointer-events-none flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-tamas-border/60 bg-[#1A2834]/60 backdrop-blur-sm">
        <div className="absolute inset-1.5 rounded-full border border-dashed border-tamas-border/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-tamas-border/30" />
          <div className="h-full w-px bg-tamas-border/30 absolute" />
        </div>
        
        {/* Cardinal Points */}
        <span className="absolute top-1 text-[9px] font-bold text-tamas-info font-mono">N</span>
        <span className="absolute right-1 text-[9px] font-bold text-tamas-textMuted font-mono">E</span>
        <span className="absolute bottom-1 text-[9px] font-bold text-tamas-textMuted font-mono">S</span>
        <span className="absolute left-1 text-[9px] font-bold text-tamas-textMuted font-mono">W</span>

        {/* Compass Needle */}
        <div className="w-1 h-7 bg-gradient-to-t from-tamas-border to-tamas-orange rounded-full transform rotate-45 shadow-sm" />
      </div>

      {/* Hovered Component Floating Tag */}
      {hoveredComponent && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-tamas-card/90 backdrop-blur-md border border-tamas-info/50 text-tamas-info text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md animate-fade-in pointer-events-none">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Click to Inspect: {hoveredComponent}</span>
        </div>
      )}

    </div>
  );
};
