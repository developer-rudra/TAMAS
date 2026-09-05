var ov=Object.defineProperty;var lv=(t,e,n)=>e in t?ov(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ke=(t,e,n)=>lv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Wm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xm={exports:{}},nc={},Ym={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),cv=Symbol.for("react.portal"),uv=Symbol.for("react.fragment"),dv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),fv=Symbol.for("react.provider"),pv=Symbol.for("react.context"),mv=Symbol.for("react.forward_ref"),gv=Symbol.for("react.suspense"),xv=Symbol.for("react.memo"),vv=Symbol.for("react.lazy"),Sf=Symbol.iterator;function _v(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Km={};function qs(t,e,n){this.props=t,this.context=e,this.refs=Km,this.updater=n||$m}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zm(){}Zm.prototype=qs.prototype;function ch(t,e,n){this.props=t,this.context=e,this.refs=Km,this.updater=n||$m}var uh=ch.prototype=new Zm;uh.constructor=ch;qm(uh,qs.prototype);uh.isPureReactComponent=!0;var Mf=Array.isArray,Jm=Object.prototype.hasOwnProperty,dh={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Jm.call(e,i)&&!Qm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Qa,type:t,key:s,ref:a,props:r,_owner:dh.current}}function yv(t,e){return{$$typeof:Qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qa}function Sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ef=/\/+/g;function Tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sv(""+t.key):e.toString(36)}function rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Qa:case cv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Tc(a,0):i,Mf(r)?(n="",t!=null&&(n=t.replace(Ef,"$&/")+"/"),rl(r,e,n,"",function(c){return c})):r!=null&&(hh(r)&&(r=yv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ef,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Mf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Tc(s,o);a+=rl(s,e,n,l,r)}else if(l=_v(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Tc(s,o++),a+=rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(t,e,n){if(t==null)return t;var i=[],r=0;return rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Mv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},sl={transition:null},Ev={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:sl,ReactCurrentOwner:dh};function t0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=qs;Xe.Fragment=uv;Xe.Profiler=hv;Xe.PureComponent=ch;Xe.StrictMode=dv;Xe.Suspense=gv;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev;Xe.act=t0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=qm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=dh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Jm.call(e,l)&&!Qm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Qa,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:pv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fv,_context:t},t.Consumer=t};Xe.createElement=e0;Xe.createFactory=function(t){var e=e0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:mv,render:t}};Xe.isValidElement=hh;Xe.lazy=function(t){return{$$typeof:vv,_payload:{_status:-1,_result:t},_init:Mv}};Xe.memo=function(t,e){return{$$typeof:xv,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=sl.transition;sl.transition={};try{t()}finally{sl.transition=e}};Xe.unstable_act=t0;Xe.useCallback=function(t,e){return nn.current.useCallback(t,e)};Xe.useContext=function(t){return nn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return nn.current.useEffect(t,e)};Xe.useId=function(){return nn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return nn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Xe.useRef=function(t){return nn.current.useRef(t)};Xe.useState=function(t){return nn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return nn.current.useTransition()};Xe.version="18.3.1";Ym.exports=Xe;var Ge=Ym.exports;const n0=Wm(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv=Ge,Tv=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Av=Object.prototype.hasOwnProperty,Cv=wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rv={key:!0,ref:!0,__self:!0,__source:!0};function i0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Av.call(e,i)&&!Rv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Tv,type:t,key:s,ref:a,props:r,_owner:Cv.current}}nc.Fragment=bv;nc.jsx=i0;nc.jsxs=i0;Xm.exports=nc;var u=Xm.exports,Du={},r0={exports:{}},Cn={},s0={exports:{}},a0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,$){var Q=I.length;I.push($);e:for(;0<Q;){var oe=Q-1>>>1,ye=I[oe];if(0<r(ye,$))I[oe]=$,I[Q]=ye,Q=oe;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var $=I[0],Q=I.pop();if(Q!==$){I[0]=Q;e:for(var oe=0,ye=I.length,Ye=ye>>>1;oe<Ye;){var G=2*(oe+1)-1,q=I[G],le=G+1,de=I[le];if(0>r(q,Q))le<ye&&0>r(de,q)?(I[oe]=de,I[le]=Q,oe=le):(I[oe]=q,I[G]=Q,oe=G);else if(le<ye&&0>r(de,Q))I[oe]=de,I[le]=Q,oe=le;else break e}}return $}function r(I,$){var Q=I.sortIndex-$.sortIndex;return Q!==0?Q:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,f=3,m=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=I)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function M(I){if(y=!1,g(I),!v)if(n(l)!==null)v=!0,j(R);else{var $=n(c);$!==null&&Z(M,$.startTime-I)}}function R(I,$){v=!1,y&&(y=!1,d(C),C=-1),m=!0;var Q=f;try{for(g($),p=n(l);p!==null&&(!(p.expirationTime>$)||I&&!N());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,f=p.priorityLevel;var ye=oe(p.expirationTime<=$);$=t.unstable_now(),typeof ye=="function"?p.callback=ye:p===n(l)&&i(l),g($)}else i(l);p=n(l)}if(p!==null)var Ye=!0;else{var G=n(c);G!==null&&Z(M,G.startTime-$),Ye=!1}return Ye}finally{p=null,f=Q,m=!1}}var A=!1,b=null,C=-1,T=5,S=-1;function N(){return!(t.unstable_now()-S<T)}function k(){if(b!==null){var I=t.unstable_now();S=I;var $=!0;try{$=b(!0,I)}finally{$?B():(A=!1,b=null)}}else A=!1}var B;if(typeof _=="function")B=function(){_(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,X=W.port2;W.port1.onmessage=k,B=function(){X.postMessage(null)}}else B=function(){x(k,0)};function j(I){b=I,A||(A=!0,B())}function Z(I,$){C=x(function(){I(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,j(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var Q=f;f=$;try{return I()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=f;f=I;try{return $()}finally{f=Q}},t.unstable_scheduleCallback=function(I,$,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,I){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Q+ye,I={id:h++,callback:$,priorityLevel:I,startTime:Q,expirationTime:ye,sortIndex:-1},Q>oe?(I.sortIndex=Q,e(c,I),n(l)===null&&I===n(c)&&(y?(d(C),C=-1):y=!0,Z(M,Q-oe))):(I.sortIndex=ye,e(l,I),v||m||(v=!0,j(R))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var $=f;return function(){var Q=f;f=$;try{return I.apply(this,arguments)}finally{f=Q}}}})(a0);s0.exports=a0;var Pv=s0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=Ge,An=Pv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o0=new Set,Ua={};function Vr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Ua[t]=e,t=0;t<e.length;t++)o0.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,Dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wf={},Tf={};function Lv(t){return Lu.call(Tf,t)?!0:Lu.call(wf,t)?!1:Dv.test(t)?Tf[t]=!0:(wf[t]=!0,!1)}function Iv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uv(t,e,n,i){if(e===null||typeof e>"u"||Iv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fh,ph);Xt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fh,ph);Xt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fh,ph);Xt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function mh(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uv(e,n,r,i)&&(n=null),i||r===null?Lv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),hs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),xh=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),bf=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=bf&&t[bf]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,bc;function xa(t){if(bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||""}return`
`+bc+t}var Ac=!1;function Cc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xa(t):""}function Ov(t){switch(t.tag){case 5:return xa(t.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function Fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case hs:return"Portal";case Iu:return"Profiler";case gh:return"StrictMode";case Uu:return"Suspense";case Ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c0:return(t.displayName||"Context")+".Consumer";case l0:return(t._context.displayName||"Context")+".Provider";case xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vh:return e=t.displayName||null,e!==null?e:Fu(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Fu(t(e))}catch{}}return null}function Fv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fu(e);case 8:return e===gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function d0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kv(t){var e=d0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mo(t){t._valueTracker||(t._valueTracker=kv(t))}function h0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=d0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Af(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f0(t,e){e=e.checked,e!=null&&mh(t,"checked",e,!1)}function Bu(t,e){f0(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var va=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(va(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function p0(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Pf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,g0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bv=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(t){Bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ea[e]=Ea[t]})});function x0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ea.hasOwnProperty(t)&&Ea[t]?(""+e).trim():e+"px"}function v0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var zv=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(zv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wu=null;function _h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xu=null,As=null,Cs=null;function Nf(t){if(t=no(t)){if(typeof Xu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=oc(e),Xu(t.stateNode,t.type,e))}}function _0(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function y0(){if(As){var t=As,e=Cs;if(Cs=As=null,Nf(t),e)for(t=0;t<e.length;t++)Nf(e[t])}}function S0(t,e){return t(e)}function M0(){}var Rc=!1;function E0(t,e,n){if(Rc)return t(e,n);Rc=!0;try{return S0(t,e,n)}finally{Rc=!1,(As!==null||Cs!==null)&&(M0(),y0())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var i=oc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Yu=!1;if(bi)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Yu=!1}function Hv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var wa=!1,Tl=null,bl=!1,$u=null,Vv={onError:function(t){wa=!0,Tl=t}};function jv(t,e,n,i,r,s,a,o,l){wa=!1,Tl=null,Hv.apply(Vv,arguments)}function Gv(t,e,n,i,r,s,a,o,l){if(jv.apply(this,arguments),wa){if(wa){var c=Tl;wa=!1,Tl=null}else throw Error(ne(198));bl||(bl=!0,$u=c)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Df(t){if(jr(t)!==t)throw Error(ne(188))}function Wv(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Df(r),t;if(s===i)return Df(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function T0(t){return t=Wv(t),t!==null?b0(t):null}function b0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b0(t);if(e!==null)return e;t=t.sibling}return null}var A0=An.unstable_scheduleCallback,Lf=An.unstable_cancelCallback,Xv=An.unstable_shouldYield,Yv=An.unstable_requestPaint,bt=An.unstable_now,$v=An.unstable_getCurrentPriorityLevel,yh=An.unstable_ImmediatePriority,C0=An.unstable_UserBlockingPriority,Al=An.unstable_NormalPriority,qv=An.unstable_LowPriority,R0=An.unstable_IdlePriority,ic=null,ci=null;function Kv(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:Qv,Zv=Math.log,Jv=Math.LN2;function Qv(t){return t>>>=0,t===0?32:31-(Zv(t)/Jv|0)|0}var xo=64,vo=4194304;function _a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=_a(o):(s&=a,s!==0&&(i=_a(s)))}else a=n&~r,a!==0?i=_a(a):s!==0&&(i=_a(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function e_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=e_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P0(){var t=xo;return xo<<=1,!(xo&4194240)&&(xo=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function n_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function N0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D0,Mh,L0,I0,U0,Ku=!1,_o=[],Ki=null,Zi=null,Ji=null,ka=new Map,Ba=new Map,Wi=[],i_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function If(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=no(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function r_(t,e,n,i,r){switch(e){case"focusin":return Ki=ra(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=ra(Zi,t,e,n,i,r),!0;case"mouseover":return Ji=ra(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ka.set(s,ra(ka.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ba.set(s,ra(Ba.get(s)||null,t,e,n,i,r)),!0}return!1}function O0(t){var e=Ar(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=w0(n),e!==null){t.blockedOn=e,U0(t.priority,function(){L0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wu=i,n.target.dispatchEvent(i),Wu=null}else return e=no(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Uf(t,e,n){al(t)&&n.delete(e)}function s_(){Ku=!1,Ki!==null&&al(Ki)&&(Ki=null),Zi!==null&&al(Zi)&&(Zi=null),Ji!==null&&al(Ji)&&(Ji=null),ka.forEach(Uf),Ba.forEach(Uf)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Ku||(Ku=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,s_)))}function za(t){function e(r){return sa(r,t)}if(0<_o.length){sa(_o[0],t);for(var n=1;n<_o.length;n++){var i=_o[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&sa(Ki,t),Zi!==null&&sa(Zi,t),Ji!==null&&sa(Ji,t),ka.forEach(e),Ba.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)O0(n),n.blockedOn===null&&Wi.shift()}var Rs=Ni.ReactCurrentBatchConfig,Rl=!0;function a_(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=1,Eh(t,e,n,i)}finally{rt=r,Rs.transition=s}}function o_(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=4,Eh(t,e,n,i)}finally{rt=r,Rs.transition=s}}function Eh(t,e,n,i){if(Rl){var r=Zu(t,e,n,i);if(r===null)zc(t,e,i,Pl,n),If(t,i);else if(r_(r,t,e,n,i))i.stopPropagation();else if(If(t,i),e&4&&-1<i_.indexOf(t)){for(;r!==null;){var s=no(r);if(s!==null&&D0(s),s=Zu(t,e,n,i),s===null&&zc(t,e,i,Pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zc(t,e,i,null,n)}}var Pl=null;function Zu(t,e,n,i){if(Pl=null,t=_h(i),t=Ar(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function F0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case yh:return 1;case C0:return 4;case Al:case qv:return 16;case R0:return 536870912;default:return 16}default:return 16}}var $i=null,wh=null,ol=null;function k0(){if(ol)return ol;var t,e=wh,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ol=r.slice(t,1<i?1-i:void 0)}function ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function Of(){return!1}function Rn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yo:Of,this.isPropagationStopped=Of,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=Rn(Ks),to=vt({},Ks,{view:0,detail:0}),l_=Rn(to),Nc,Dc,aa,rc=vt({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Nc=t.screenX-aa.screenX,Dc=t.screenY-aa.screenY):Dc=Nc=0,aa=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Ff=Rn(rc),c_=vt({},rc,{dataTransfer:0}),u_=Rn(c_),d_=vt({},to,{relatedTarget:0}),Lc=Rn(d_),h_=vt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),f_=Rn(h_),p_=vt({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m_=Rn(p_),g_=vt({},Ks,{data:0}),kf=Rn(g_),x_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},__={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=__[t])?!!e[t]:!1}function bh(){return y_}var S_=vt({},to,{key:function(t){if(t.key){var e=x_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bh,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M_=Rn(S_),E_=vt({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Rn(E_),w_=vt({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bh}),T_=Rn(w_),b_=vt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),A_=Rn(b_),C_=vt({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R_=Rn(C_),P_=[9,13,27,32],Ah=bi&&"CompositionEvent"in window,Ta=null;bi&&"documentMode"in document&&(Ta=document.documentMode);var N_=bi&&"TextEvent"in window&&!Ta,B0=bi&&(!Ah||Ta&&8<Ta&&11>=Ta),zf=" ",Hf=!1;function z0(t,e){switch(t){case"keyup":return P_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function D_(t,e){switch(t){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(Hf=!0,zf);case"textInput":return t=e.data,t===zf&&Hf?null:t;default:return null}}function L_(t,e){if(ps)return t==="compositionend"||!Ah&&z0(t,e)?(t=k0(),ol=wh=$i=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var I_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I_[t.type]:e==="textarea"}function V0(t,e,n,i){_0(i),e=Nl(e,"onChange"),0<e.length&&(n=new Th("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ba=null,Ha=null;function U_(t){Q0(t,0)}function sc(t){var e=xs(t);if(h0(e))return t}function O_(t,e){if(t==="change")return e}var j0=!1;if(bi){var Ic;if(bi){var Uc="oninput"in document;if(!Uc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),Uc=typeof jf.oninput=="function"}Ic=Uc}else Ic=!1;j0=Ic&&(!document.documentMode||9<document.documentMode)}function Gf(){ba&&(ba.detachEvent("onpropertychange",G0),Ha=ba=null)}function G0(t){if(t.propertyName==="value"&&sc(Ha)){var e=[];V0(e,Ha,t,_h(t)),E0(U_,e)}}function F_(t,e,n){t==="focusin"?(Gf(),ba=e,Ha=n,ba.attachEvent("onpropertychange",G0)):t==="focusout"&&Gf()}function k_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Ha)}function B_(t,e){if(t==="click")return sc(e)}function z_(t,e){if(t==="input"||t==="change")return sc(e)}function H_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:H_;function Va(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lu.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,e){var n=Wf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wf(n)}}function W0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X0(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function V_(t){var e=X0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&W0(n.ownerDocument.documentElement,n)){if(i!==null&&Ch(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xf(n,s);var a=Xf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j_=bi&&"documentMode"in document&&11>=document.documentMode,ms=null,Ju=null,Aa=null,Qu=!1;function Yf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||ms==null||ms!==wl(i)||(i=ms,"selectionStart"in i&&Ch(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Aa&&Va(Aa,i)||(Aa=i,i=Nl(Ju,"onSelect"),0<i.length&&(e=new Th("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function So(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Oc={},Y0={};bi&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function ac(t){if(Oc[t])return Oc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y0)return Oc[t]=e[n];return t}var $0=ac("animationend"),q0=ac("animationiteration"),K0=ac("animationstart"),Z0=ac("transitionend"),J0=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){J0.set(t,e),Vr(e,[t])}for(var Fc=0;Fc<$f.length;Fc++){var kc=$f[Fc],G_=kc.toLowerCase(),W_=kc[0].toUpperCase()+kc.slice(1);ur(G_,"on"+W_)}ur($0,"onAnimationEnd");ur(q0,"onAnimationIteration");ur(K0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Z0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function qf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Gv(i,e,void 0,t),t.currentTarget=null}function Q0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;qf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;qf(r,o,c),s=l}}}if(bl)throw t=$u,bl=!1,$u=null,t}function dt(t,e){var n=e[rd];n===void 0&&(n=e[rd]=new Set);var i=t+"__bubble";n.has(i)||(eg(e,t,2,!1),n.add(i))}function Bc(t,e,n){var i=0;e&&(i|=4),eg(n,t,i,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[Mo]){t[Mo]=!0,o0.forEach(function(n){n!=="selectionchange"&&(X_.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,Bc("selectionchange",!1,e))}}function eg(t,e,n,i){switch(F0(e)){case 1:var r=a_;break;case 4:r=o_;break;default:r=Eh}n=r.bind(null,e,n,t),r=void 0,!Yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ar(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}E0(function(){var c=s,h=_h(n),p=[];e:{var f=J0.get(t);if(f!==void 0){var m=Th,v=t;switch(t){case"keypress":if(ll(n)===0)break e;case"keydown":case"keyup":m=M_;break;case"focusin":v="focus",m=Lc;break;case"focusout":v="blur",m=Lc;break;case"beforeblur":case"afterblur":m=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=u_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=T_;break;case $0:case q0:case K0:m=f_;break;case Z0:m=A_;break;case"scroll":m=l_;break;case"wheel":m=R_;break;case"copy":case"cut":case"paste":m=m_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Bf}var y=(e&4)!==0,x=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,d!==null&&(M=Fa(_,d),M!=null&&y.push(Ga(_,M,g)))),x)break;_=_.return}0<y.length&&(f=new m(f,v,null,n,h),p.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Wu&&(v=n.relatedTarget||n.fromElement)&&(Ar(v)||v[Ai]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Ar(v):null,v!==null&&(x=jr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(y=Ff,M="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Bf,M="onPointerLeave",d="onPointerEnter",_="pointer"),x=m==null?f:xs(m),g=v==null?f:xs(v),f=new y(M,_+"leave",m,n,h),f.target=x,f.relatedTarget=g,M=null,Ar(h)===c&&(y=new y(d,_+"enter",v,n,h),y.target=g,y.relatedTarget=x,M=y),x=M,m&&v)t:{for(y=m,d=v,_=0,g=y;g;g=$r(g))_++;for(g=0,M=d;M;M=$r(M))g++;for(;0<_-g;)y=$r(y),_--;for(;0<g-_;)d=$r(d),g--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=$r(y),d=$r(d)}y=null}else y=null;m!==null&&Kf(p,f,m,y,!1),v!==null&&x!==null&&Kf(p,x,v,y,!0)}}e:{if(f=c?xs(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var R=O_;else if(Vf(f))if(j0)R=z_;else{R=k_;var A=F_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=B_);if(R&&(R=R(t,c))){V0(p,R,n,h);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&zu(f,"number",f.value)}switch(A=c?xs(c):window,t){case"focusin":(Vf(A)||A.contentEditable==="true")&&(ms=A,Ju=c,Aa=null);break;case"focusout":Aa=Ju=ms=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Yf(p,n,h);break;case"selectionchange":if(j_)break;case"keydown":case"keyup":Yf(p,n,h)}var b;if(Ah)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ps?z0(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(B0&&n.locale!=="ko"&&(ps||C!=="onCompositionStart"?C==="onCompositionEnd"&&ps&&(b=k0()):($i=h,wh="value"in $i?$i.value:$i.textContent,ps=!0)),A=Nl(c,C),0<A.length&&(C=new kf(C,t,null,n,h),p.push({event:C,listeners:A}),b?C.data=b:(b=H0(n),b!==null&&(C.data=b)))),(b=N_?D_(t,n):L_(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(h=new kf("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=b))}Q0(p,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fa(t,n),s!=null&&i.unshift(Ga(t,s,r)),s=Fa(t,e),s!=null&&i.push(Ga(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Fa(n,s),l!=null&&a.unshift(Ga(n,l,o))):r||(l=Fa(n,s),l!=null&&a.push(Ga(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Y_=/\r\n?/g,$_=/\u0000|\uFFFD/g;function Zf(t){return(typeof t=="string"?t:""+t).replace(Y_,`
`).replace($_,"")}function Eo(t,e,n){if(e=Zf(e),Zf(t)!==e&&n)throw Error(ne(425))}function Dl(){}var ed=null,td=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,K_=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(t){return Jf.resolve(null).then(t).catch(Z_)}:id;function Z_(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);za(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ai="__reactFiber$"+Zs,Wa="__reactProps$"+Zs,Ai="__reactContainer$"+Zs,rd="__reactEvents$"+Zs,J_="__reactListeners$"+Zs,Q_="__reactHandles$"+Zs;function Ar(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qf(t);t!==null;){if(n=t[ai])return n;t=Qf(t)}return e}t=n,n=t.parentNode}return null}function no(t){return t=t[ai]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function oc(t){return t[Wa]||null}var sd=[],vs=-1;function dr(t){return{current:t}}function ft(t){0>vs||(t.current=sd[vs],sd[vs]=null,vs--)}function ct(t,e){vs++,sd[vs]=t.current,t.current=e}var or={},Jt=dr(or),un=dr(!1),Ir=or;function Fs(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function Ll(){ft(un),ft(Jt)}function ep(t,e,n){if(Jt.current!==or)throw Error(ne(168));ct(Jt,e),ct(un,n)}function tg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Fv(t)||"Unknown",r));return vt({},n,i)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Ir=Jt.current,ct(Jt,t),ct(un,un.current),!0}function tp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=tg(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,ft(un),ft(Jt),ct(Jt,t)):ft(un),ct(un,n)}var yi=null,lc=!1,Vc=!1;function ng(t){yi===null?yi=[t]:yi.push(t)}function ey(t){lc=!0,ng(t)}function hr(){if(!Vc&&yi!==null){Vc=!0;var t=0,e=rt;try{var n=yi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,lc=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),A0(yh,hr),r}finally{rt=e,Vc=!1}}return null}var _s=[],ys=0,Ul=null,Ol=0,Ln=[],In=0,Ur=null,Si=1,Mi="";function Sr(t,e){_s[ys++]=Ol,_s[ys++]=Ul,Ul=t,Ol=e}function ig(t,e,n){Ln[In++]=Si,Ln[In++]=Mi,Ln[In++]=Ur,Ur=t;var i=Si;t=Mi;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Si=1<<32-Zn(e)+r|n<<r|i,Mi=s+t}else Si=1<<s|n<<r|i,Mi=t}function Rh(t){t.return!==null&&(Sr(t,1),ig(t,1,0))}function Ph(t){for(;t===Ul;)Ul=_s[--ys],_s[ys]=null,Ol=_s[--ys],_s[ys]=null;for(;t===Ur;)Ur=Ln[--In],Ln[In]=null,Mi=Ln[--In],Ln[In]=null,Si=Ln[--In],Ln[In]=null}var bn=null,Tn=null,mt=!1,$n=null;function rg(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Tn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Tn=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function od(t){if(mt){var e=Tn;if(e){var n=e;if(!np(t,e)){if(ad(t))throw Error(ne(418));e=Qi(n.nextSibling);var i=bn;e&&np(t,e)?rg(i,n):(t.flags=t.flags&-4097|2,mt=!1,bn=t)}}else{if(ad(t))throw Error(ne(418));t.flags=t.flags&-4097|2,mt=!1,bn=t}}}function ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function wo(t){if(t!==bn)return!1;if(!mt)return ip(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=Tn)){if(ad(t))throw sg(),Error(ne(418));for(;e;)rg(t,e),e=Qi(e.nextSibling)}if(ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=bn?Qi(t.stateNode.nextSibling):null;return!0}function sg(){for(var t=Tn;t;)t=Qi(t.nextSibling)}function ks(){Tn=bn=null,mt=!1}function Nh(t){$n===null?$n=[t]:$n.push(t)}var ty=Ni.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function To(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rp(t){var e=t._init;return e(t._payload)}function ag(t){function e(d,_){if(t){var g=d.deletions;g===null?(d.deletions=[_],d.flags|=16):g.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=ir(d,_),d.index=0,d.sibling=null,d}function s(d,_,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<_?(d.flags|=2,_):g):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,g,M){return _===null||_.tag!==6?(_=qc(g,d.mode,M),_.return=d,_):(_=r(_,g),_.return=d,_)}function l(d,_,g,M){var R=g.type;return R===fs?h(d,_,g.props.children,M,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vi&&rp(R)===_.type)?(M=r(_,g.props),M.ref=oa(d,_,g),M.return=d,M):(M=ml(g.type,g.key,g.props,null,d.mode,M),M.ref=oa(d,_,g),M.return=d,M)}function c(d,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Kc(g,d.mode,M),_.return=d,_):(_=r(_,g.children||[]),_.return=d,_)}function h(d,_,g,M,R){return _===null||_.tag!==7?(_=Lr(g,d.mode,M,R),_.return=d,_):(_=r(_,g),_.return=d,_)}function p(d,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=qc(""+_,d.mode,g),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case po:return g=ml(_.type,_.key,_.props,null,d.mode,g),g.ref=oa(d,null,_),g.return=d,g;case hs:return _=Kc(_,d.mode,g),_.return=d,_;case Vi:var M=_._init;return p(d,M(_._payload),g)}if(va(_)||na(_))return _=Lr(_,d.mode,g,null),_.return=d,_;To(d,_)}return null}function f(d,_,g,M){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:o(d,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case po:return g.key===R?l(d,_,g,M):null;case hs:return g.key===R?c(d,_,g,M):null;case Vi:return R=g._init,f(d,_,R(g._payload),M)}if(va(g)||na(g))return R!==null?null:h(d,_,g,M,null);To(d,g)}return null}function m(d,_,g,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(g)||null,o(_,d,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case po:return d=d.get(M.key===null?g:M.key)||null,l(_,d,M,R);case hs:return d=d.get(M.key===null?g:M.key)||null,c(_,d,M,R);case Vi:var A=M._init;return m(d,_,g,A(M._payload),R)}if(va(M)||na(M))return d=d.get(g)||null,h(_,d,M,R,null);To(_,M)}return null}function v(d,_,g,M){for(var R=null,A=null,b=_,C=_=0,T=null;b!==null&&C<g.length;C++){b.index>C?(T=b,b=null):T=b.sibling;var S=f(d,b,g[C],M);if(S===null){b===null&&(b=T);break}t&&b&&S.alternate===null&&e(d,b),_=s(S,_,C),A===null?R=S:A.sibling=S,A=S,b=T}if(C===g.length)return n(d,b),mt&&Sr(d,C),R;if(b===null){for(;C<g.length;C++)b=p(d,g[C],M),b!==null&&(_=s(b,_,C),A===null?R=b:A.sibling=b,A=b);return mt&&Sr(d,C),R}for(b=i(d,b);C<g.length;C++)T=m(b,d,C,g[C],M),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?C:T.key),_=s(T,_,C),A===null?R=T:A.sibling=T,A=T);return t&&b.forEach(function(N){return e(d,N)}),mt&&Sr(d,C),R}function y(d,_,g,M){var R=na(g);if(typeof R!="function")throw Error(ne(150));if(g=R.call(g),g==null)throw Error(ne(151));for(var A=R=null,b=_,C=_=0,T=null,S=g.next();b!==null&&!S.done;C++,S=g.next()){b.index>C?(T=b,b=null):T=b.sibling;var N=f(d,b,S.value,M);if(N===null){b===null&&(b=T);break}t&&b&&N.alternate===null&&e(d,b),_=s(N,_,C),A===null?R=N:A.sibling=N,A=N,b=T}if(S.done)return n(d,b),mt&&Sr(d,C),R;if(b===null){for(;!S.done;C++,S=g.next())S=p(d,S.value,M),S!==null&&(_=s(S,_,C),A===null?R=S:A.sibling=S,A=S);return mt&&Sr(d,C),R}for(b=i(d,b);!S.done;C++,S=g.next())S=m(b,d,C,S.value,M),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?C:S.key),_=s(S,_,C),A===null?R=S:A.sibling=S,A=S);return t&&b.forEach(function(k){return e(d,k)}),mt&&Sr(d,C),R}function x(d,_,g,M){if(typeof g=="object"&&g!==null&&g.type===fs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case po:e:{for(var R=g.key,A=_;A!==null;){if(A.key===R){if(R=g.type,R===fs){if(A.tag===7){n(d,A.sibling),_=r(A,g.props.children),_.return=d,d=_;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vi&&rp(R)===A.type){n(d,A.sibling),_=r(A,g.props),_.ref=oa(d,A,g),_.return=d,d=_;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===fs?(_=Lr(g.props.children,d.mode,M,g.key),_.return=d,d=_):(M=ml(g.type,g.key,g.props,null,d.mode,M),M.ref=oa(d,_,g),M.return=d,d=M)}return a(d);case hs:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(d,_.sibling),_=r(_,g.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Kc(g,d.mode,M),_.return=d,d=_}return a(d);case Vi:return A=g._init,x(d,_,A(g._payload),M)}if(va(g))return v(d,_,g,M);if(na(g))return y(d,_,g,M);To(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,g),_.return=d,d=_):(n(d,_),_=qc(g,d.mode,M),_.return=d,d=_),a(d)):n(d,_)}return x}var Bs=ag(!0),og=ag(!1),Fl=dr(null),kl=null,Ss=null,Dh=null;function Lh(){Dh=Ss=kl=null}function Ih(t){var e=Fl.current;ft(Fl),t._currentValue=e}function ld(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){kl=t,Dh=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(Dh!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(kl===null)throw Error(ne(308));Ss=t,kl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Cr=null;function Uh(t){Cr===null?Cr=[t]:Cr.push(t)}function lg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Uh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function Oh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Uh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}function sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(f=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(m,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(m,p,f):v,f==null)break e;p=vt({},p,f);break e;case 2:ji=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=a,t.lanes=a,t.memoizedState=p}}function ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var io={},ui=dr(io),Xa=dr(io),Ya=dr(io);function Rr(t){if(t===io)throw Error(ne(174));return t}function Fh(t,e){switch(ct(Ya,e),ct(Xa,t),ct(ui,io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vu(e,t)}ft(ui),ct(ui,e)}function zs(){ft(ui),ft(Xa),ft(Ya)}function ug(t){Rr(Ya.current);var e=Rr(ui.current),n=Vu(e,t.type);e!==n&&(ct(Xa,t),ct(ui,n))}function kh(t){Xa.current===t&&(ft(ui),ft(Xa))}var gt=dr(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function Bh(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var ul=Ni.ReactCurrentDispatcher,Gc=Ni.ReactCurrentBatchConfig,Or=0,xt=null,Lt=null,Bt=null,Hl=!1,Ca=!1,$a=0,ny=0;function Yt(){throw Error(ne(321))}function zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function Hh(t,e,n,i,r,s){if(Or=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?ay:oy,t=n(i,r),Ca){s=0;do{if(Ca=!1,$a=0,25<=s)throw Error(ne(301));s+=1,Bt=Lt=null,e.updateQueue=null,ul.current=ly,t=n(i,r)}while(Ca)}if(ul.current=Vl,e=Lt!==null&&Lt.next!==null,Or=0,Bt=Lt=xt=null,Hl=!1,e)throw Error(ne(300));return t}function Vh(){var t=$a!==0;return $a=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?xt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function zn(){if(Lt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Bt===null?xt.memoizedState:Bt.next;if(e!==null)Bt=e,Lt=t;else{if(t===null)throw Error(ne(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Bt===null?xt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function qa(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Or&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,xt.lanes|=h,Fr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ei(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ei(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function dg(){}function hg(t,e){var n=xt,i=zn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,jh(mg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Ka(9,pg.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ne(349));Or&30||fg(n,e,r)}return r}function fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pg(t,e,n,i){e.value=n,e.getSnapshot=i,gg(e)&&xg(t)}function mg(t,e,n){return n(function(){gg(e)&&xg(t)})}function gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function xg(t){var e=Ci(t,1);e!==null&&Jn(e,t,1,-1)}function op(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=sy.bind(null,xt,t),[e.memoizedState,t]}function Ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function vg(){return zn().memoizedState}function dl(t,e,n,i){var r=ii();xt.flags|=t,r.memoizedState=Ka(1|e,n,void 0,i===void 0?null:i)}function cc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var a=Lt.memoizedState;if(s=a.destroy,i!==null&&zh(i,a.deps)){r.memoizedState=Ka(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Ka(1|e,n,s,i)}function lp(t,e){return dl(8390656,8,t,e)}function jh(t,e){return cc(2048,8,t,e)}function _g(t,e){return cc(4,2,t,e)}function yg(t,e){return cc(4,4,t,e)}function Sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mg(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,Sg.bind(null,e,t),n)}function Gh(){}function Eg(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wg(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Tg(t,e,n){return Or&21?(ei(n,e)||(n=P0(),xt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function iy(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Gc.transition;Gc.transition={};try{t(!1),e()}finally{rt=n,Gc.transition=i}}function bg(){return zn().memoizedState}function ry(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ag(t))Cg(e,n);else if(n=lg(t,e,n,i),n!==null){var r=tn();Jn(n,t,i,r),Rg(n,e,i)}}function sy(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ag(t))Cg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ei(o,a)){var l=e.interleaved;l===null?(r.next=r,Uh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=lg(t,e,r,i),n!==null&&(r=tn(),Jn(n,t,i,r),Rg(n,e,i))}}function Ag(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function Cg(t,e){Ca=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}var Vl={readContext:Bn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},ay={readContext:Bn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dl(4194308,4,Sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return dl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ry.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:op,useDebugValue:Gh,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=op(!1),e=t[0];return t=iy.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=ii();if(mt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),zt===null)throw Error(ne(349));Or&30||fg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lp(mg.bind(null,i,s,t),[t]),i.flags|=2048,Ka(9,pg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=zt.identifierPrefix;if(mt){var n=Mi,i=Si;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ny++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oy={readContext:Bn,useCallback:Eg,useContext:Bn,useEffect:jh,useImperativeHandle:Mg,useInsertionEffect:_g,useLayoutEffect:yg,useMemo:wg,useReducer:Wc,useRef:vg,useState:function(){return Wc(qa)},useDebugValue:Gh,useDeferredValue:function(t){var e=zn();return Tg(e,Lt.memoizedState,t)},useTransition:function(){var t=Wc(qa)[0],e=zn().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:hg,useId:bg,unstable_isNewReconciler:!1},ly={readContext:Bn,useCallback:Eg,useContext:Bn,useEffect:jh,useImperativeHandle:Mg,useInsertionEffect:_g,useLayoutEffect:yg,useMemo:wg,useReducer:Xc,useRef:vg,useState:function(){return Xc(qa)},useDebugValue:Gh,useDeferredValue:function(t){var e=zn();return Lt===null?e.memoizedState=t:Tg(e,Lt.memoizedState,t)},useTransition:function(){var t=Xc(qa)[0],e=zn().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:hg,useId:bg,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=nr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Jn(e,t,r,i),cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=nr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Jn(e,t,r,i),cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=nr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Jn(e,t,i,n),cl(e,t,i))}};function cp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Va(n,i)||!Va(r,s):!0}function Pg(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=dn(e)?Ir:Jt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function up(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function ud(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Oh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=dn(e)?Ir:Jt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),Bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cy=typeof WeakMap=="function"?WeakMap:Map;function Ng(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gl||(Gl=!0,Sd=i),dd(t,e)},n}function Dg(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new cy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ey.bind(null,t,e,n),e.then(t,t))}function hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var uy=Ni.ReactCurrentOwner,cn=!1;function en(t,e,n,i){e.child=t===null?og(e,null,n,i):Bs(e,t.child,n,i)}function pp(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=Hh(t,e,n,i,s,r),n=Vh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(mt&&n&&Rh(e),e.flags|=1,en(t,e,i,r),e.child)}function mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lg(t,e,s,i,r)):(t=ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Va,n(a,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function Lg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Va(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return hd(t,e,n,i,r)}function Ig(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Es,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Es,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Es,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Es,wn),wn|=i;return en(t,e,r,n),e.child}function Ug(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,i,r){var s=dn(n)?Ir:Jt.current;return s=Fs(e,s),Ps(e,r),n=Hh(t,e,n,i,s,r),i=Vh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(mt&&i&&Rh(e),e.flags|=1,en(t,e,n,r),e.child)}function gp(t,e,n,i,r){if(dn(n)){var s=!0;Il(e)}else s=!1;if(Ps(e,r),e.stateNode===null)hl(t,e),Pg(e,n,i),ud(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=dn(n)?Ir:Jt.current,c=Fs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&up(e,a,i,c),ji=!1;var f=e.memoizedState;a.state=f,Bl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||un.current||ji?(typeof h=="function"&&(cd(e,n,h,i),l=e.memoizedState),(o=ji||cp(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,cg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Xn(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=dn(n)?Ir:Jt.current,l=Fs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&up(e,a,i,l),ji=!1,f=e.memoizedState,a.state=f,Bl(e,i,a,r);var v=e.memoizedState;o!==p||f!==v||un.current||ji?(typeof m=="function"&&(cd(e,n,m,i),v=e.memoizedState),(c=ji||cp(e,n,c,i,f,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return fd(t,e,n,i,s,r)}function fd(t,e,n,i,r,s){Ug(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&tp(e,n,!1),Ri(t,e,s);i=e.stateNode,uy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&tp(e,n,!0),e.child}function Og(t){var e=t.stateNode;e.pendingContext?ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ep(t,e.context,!1),Fh(t,e.containerInfo)}function xp(t,e,n,i,r){return ks(),Nh(r),e.flags|=256,en(t,e,n,i),e.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fg(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(gt,r&1),t===null)return od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=fc(a,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=md(n),e.memoizedState=pd,t):Wh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return dy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ir(o,s):(s=Lr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?md(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=pd,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wh(t,e){return e=fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,i){return i!==null&&Nh(i),Bs(e,t.child,null,n),t=Wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Yc(Error(ne(422))),bo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fc({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,a),e.child.memoizedState=md(a),e.memoizedState=pd,s);if(!(e.mode&1))return bo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Yc(s,i,void 0),bo(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Jn(i,t,r,-1))}return Zh(),i=Yc(Error(ne(421))),bo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=Qi(r.nextSibling),bn=e,mt=!0,$n=null,t!==null&&(Ln[In++]=Si,Ln[In++]=Mi,Ln[In++]=Ur,Si=t.id,Mi=t.overflow,Ur=e),e=Wh(e,i.children),e.flags|=4096,e)}function vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ld(t.return,e,n)}function $c(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function kg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vp(t,n,e);else if(t.tag===19)vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$c(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hy(t,e,n){switch(e.tag){case 3:Og(e),ks();break;case 5:ug(e);break;case 1:dn(e.type)&&Il(e);break;case 4:Fh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Fg(t,e,n):(ct(gt,gt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ct(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return kg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ig(t,e,n)}return Ri(t,e,n)}var Bg,gd,zg,Hg;Bg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(ui.current);var s=null;switch(n){case"input":r=ku(t,r),i=ku(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Hu(t,r),i=Hu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Dl)}ju(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hg=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function fy(t,e,n){var i=e.pendingProps;switch(Ph(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return dn(e.type)&&Ll(),$t(e),null;case 3:return i=e.stateNode,zs(),ft(un),ft(Jt),Bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(wd($n),$n=null))),gd(t,e),$t(e),null;case 5:kh(e);var r=Rr(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return $t(e),null}if(t=Rr(ui.current),wo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<ya.length;r++)dt(ya[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Af(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Rf(i,s),dt("invalid",i)}ju(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",""+o]):Ua.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":mo(i),Cf(i,s,!0);break;case"textarea":mo(i),Pf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ai]=e,t[Wa]=i,Bg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Gu(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ya.length;r++)dt(ya[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":Af(t,i),r=ku(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Rf(t,i),r=Hu(t,i),dt("invalid",t);break;default:r=i}ju(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?v0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oa(t,l):typeof l=="number"&&Oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&mh(t,s,l,a))}switch(n){case"input":mo(t),Cf(t,i,!1);break;case"textarea":mo(t),Pf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)Hg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Rr(Ya.current),Rr(ui.current),wo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:Eo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return $t(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Tn!==null&&e.mode&1&&!(e.flags&128))sg(),ks(),e.flags|=98560,s=!1;else if(s=wo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ai]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else $n!==null&&(wd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Ut===0&&(Ut=3):Zh())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return zs(),gd(t,e),t===null&&ja(e.stateNode.containerInfo),$t(e),null;case 10:return Ih(e.type._context),$t(e),null;case 17:return dn(e.type)&&Ll(),$t(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)la(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=zl(t),a!==null){for(e.flags|=128,la(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Vs&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=zl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return $t(e),null}else 2*bt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=gt.current,ct(gt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function py(t,e){switch(Ph(e),e.tag){case 1:return dn(e.type)&&Ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),ft(un),ft(Jt),Bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kh(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return zs(),null;case 10:return Ih(e.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var Ao=!1,Zt=!1,my=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var _p=!1;function gy(t,e){if(ed=Rl,t=X0(),Ch(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:t,selectionRange:n},Rl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Xn(e.type,y),x);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=_p,_p=!1,v}function Ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vg(t){var e=t.alternate;e!==null&&(t.alternate=null,Vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[Wa],delete e[rd],delete e[J_],delete e[Q_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jg(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var jt=null,Yn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)Gg(t,e,n),n=n.sibling}function Gg(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:Zt||Ms(n,e);case 6:var i=jt,r=Yn;jt=null,Ui(t,e,n),jt=i,Yn=r,jt!==null&&(Yn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Yn?(t=jt,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),za(t)):Hc(jt,n.stateNode));break;case 4:i=jt,r=Yn,jt=n.stateNode.containerInfo,Yn=!0,Ui(t,e,n),jt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&xd(n,e,a),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Zt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Ui(t,e,n),Zt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function Sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new my),e.forEach(function(i){var r=Ty.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,Yn=!1;break e;case 3:jt=o.stateNode.containerInfo,Yn=!0;break e;case 4:jt=o.stateNode.containerInfo,Yn=!0;break e}o=o.return}if(jt===null)throw Error(ne(160));Gg(s,a,r),jt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wg(e,t),e=e.sibling}function Wg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ni(t),i&4){try{Ra(3,t,t.return),dc(3,t)}catch(y){Tt(t,t.return,y)}try{Ra(5,t,t.return)}catch(y){Tt(t,t.return,y)}}break;case 1:Vn(e,t),ni(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(Vn(e,t),ni(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Oa(r,"")}catch(y){Tt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&f0(r,s),Gu(o,a);var c=Gu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?v0(r,p):h==="dangerouslySetInnerHTML"?g0(r,p):h==="children"?Oa(r,p):mh(r,h,p,c)}switch(o){case"input":Bu(r,s);break;case"textarea":p0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?bs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wa]=s}catch(y){Tt(t,t.return,y)}}break;case 6:if(Vn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Tt(t,t.return,y)}}break;case 3:if(Vn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(y){Tt(t,t.return,y)}break;case 4:Vn(e,t),ni(t);break;case 13:Vn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($h=bt())),i&4&&Sp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||h,Vn(e,t),Zt=c):Vn(e,t),ni(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ge=t,h=t.child;h!==null;){for(p=ge=h;ge!==null;){switch(f=ge,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ra(4,f,f.return);break;case 1:Ms(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Tt(i,n,y)}}break;case 5:Ms(f,f.return);break;case 22:if(f.memoizedState!==null){Ep(p);continue}}m!==null?(m.return=f,ge=m):Ep(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=x0("display",a))}catch(y){Tt(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){Tt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vn(e,t),ni(t),i&4&&Sp(t);break;case 21:break;default:Vn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oa(r,""),i.flags&=-33);var s=yp(t);yd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=yp(t);_d(t,o,a);break;default:throw Error(ne(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xy(t,e,n){ge=t,Xg(t)}function Xg(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ao;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=Ao;var c=Zt;if(Ao=a,(Zt=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?wp(r):l!==null?(l.return=a,ge=l):wp(r);for(;s!==null;)ge=s,Xg(s),s=s.sibling;ge=r,Ao=o,Zt=c}Mp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Mp(t)}}function Mp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ap(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ap(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&za(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Zt||e.flags&512&&vd(e)}catch(f){Tt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Ep(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function wp(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{vd(e)}catch(l){Tt(e,s,l)}break;case 5:var a=e.return;try{vd(e)}catch(l){Tt(e,a,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var vy=Math.ceil,jl=Ni.ReactCurrentDispatcher,Xh=Ni.ReactCurrentOwner,kn=Ni.ReactCurrentBatchConfig,Ze=0,zt=null,Pt=null,Wt=0,wn=0,Es=dr(0),Ut=0,Za=null,Fr=0,hc=0,Yh=0,Pa=null,ln=null,$h=0,Vs=1/0,_i=null,Gl=!1,Sd=null,tr=null,Co=!1,qi=null,Wl=0,Na=0,Md=null,fl=-1,pl=0;function tn(){return Ze&6?bt():fl!==-1?fl:fl=bt()}function nr(t){return t.mode&1?Ze&2&&Wt!==0?Wt&-Wt:ty.transition!==null?(pl===0&&(pl=P0()),pl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:F0(t.type)),t):1}function Jn(t,e,n,i){if(50<Na)throw Na=0,Md=null,Error(ne(185));eo(t,n,i),(!(Ze&2)||t!==zt)&&(t===zt&&(!(Ze&2)&&(hc|=n),Ut===4&&Xi(t,Wt)),hn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Vs=bt()+500,lc&&hr()))}function hn(t,e){var n=t.callbackNode;t_(t,e);var i=Cl(t,t===zt?Wt:0);if(i===0)n!==null&&Lf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lf(n),e===1)t.tag===0?ey(Tp.bind(null,t)):ng(Tp.bind(null,t)),K_(function(){!(Ze&6)&&hr()}),n=null;else{switch(N0(i)){case 1:n=yh;break;case 4:n=C0;break;case 16:n=Al;break;case 536870912:n=R0;break;default:n=Al}n=ex(n,Yg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yg(t,e){if(fl=-1,pl=0,Ze&6)throw Error(ne(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=Cl(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xl(t,i);else{e=i;var r=Ze;Ze|=2;var s=qg();(zt!==t||Wt!==e)&&(_i=null,Vs=bt()+500,Dr(t,e));do try{Sy();break}catch(o){$g(t,o)}while(!0);Lh(),jl.current=s,Ze=r,Pt!==null?e=0:(zt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=qu(t),r!==0&&(i=r,e=Ed(t,r))),e===1)throw n=Za,Dr(t,0),Xi(t,i),hn(t,bt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!_y(r)&&(e=Xl(t,i),e===2&&(s=qu(t),s!==0&&(i=s,e=Ed(t,s))),e===1))throw n=Za,Dr(t,0),Xi(t,i),hn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Mr(t,ln,_i);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=$h+500-bt(),10<e)){if(Cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=id(Mr.bind(null,t,ln,_i),e);break}Mr(t,ln,_i);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vy(i/1960))-i,10<i){t.timeoutHandle=id(Mr.bind(null,t,ln,_i),i);break}Mr(t,ln,_i);break;case 5:Mr(t,ln,_i);break;default:throw Error(ne(329))}}}return hn(t,bt()),t.callbackNode===n?Yg.bind(null,t):null}function Ed(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=ln,ln=n,e!==null&&wd(e)),t}function wd(t){ln===null?ln=t:ln.push.apply(ln,t)}function _y(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Yh,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Tp(t){if(Ze&6)throw Error(ne(327));Ns();var e=Cl(t,0);if(!(e&1))return hn(t,bt()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var i=qu(t);i!==0&&(e=i,n=Ed(t,i))}if(n===1)throw n=Za,Dr(t,0),Xi(t,e),hn(t,bt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,ln,_i),hn(t,bt()),null}function qh(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Vs=bt()+500,lc&&hr())}}function kr(t){qi!==null&&qi.tag===0&&!(Ze&6)&&Ns();var e=Ze;Ze|=1;var n=kn.transition,i=rt;try{if(kn.transition=null,rt=1,t)return t()}finally{rt=i,kn.transition=n,Ze=e,!(Ze&6)&&hr()}}function Kh(){wn=Es.current,ft(Es)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q_(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Ph(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ll();break;case 3:zs(),ft(un),ft(Jt),Bh();break;case 5:kh(i);break;case 4:zs();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:Ih(i.type._context);break;case 22:case 23:Kh()}n=n.return}if(zt=t,Pt=t=ir(t.current,null),Wt=wn=e,Ut=0,Za=null,Yh=hc=Fr=0,ln=Pa=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Cr=null}return t}function $g(t,e){do{var n=Pt;try{if(Lh(),ul.current=Vl,Hl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hl=!1}if(Or=0,Bt=Lt=xt=null,Ca=!1,$a=0,Xh.current=null,n===null||n.return===null){Ut=1,Za=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=hp(a);if(m!==null){m.flags&=-257,fp(m,a,o,s,e),m.mode&1&&dp(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){dp(s,c,e),Zh();break e}l=Error(ne(426))}}else if(mt&&o.mode&1){var x=hp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),fp(x,a,o,s,e),Nh(Hs(l,o));break e}}s=l=Hs(l,o),Ut!==4&&(Ut=2),Pa===null?Pa=[s]:Pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Ng(s,l,e);sp(s,d);break e;case 1:o=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tr===null||!tr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Dg(s,o,e);sp(s,M);break e}}s=s.return}while(s!==null)}Zg(n)}catch(R){e=R,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function qg(){var t=jl.current;return jl.current=Vl,t===null?Vl:t}function Zh(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(Fr&268435455)&&!(hc&268435455)||Xi(zt,Wt)}function Xl(t,e){var n=Ze;Ze|=2;var i=qg();(zt!==t||Wt!==e)&&(_i=null,Dr(t,e));do try{yy();break}catch(r){$g(t,r)}while(!0);if(Lh(),Ze=n,jl.current=i,Pt!==null)throw Error(ne(261));return zt=null,Wt=0,Ut}function yy(){for(;Pt!==null;)Kg(Pt)}function Sy(){for(;Pt!==null&&!Xv();)Kg(Pt)}function Kg(t){var e=Qg(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Zg(t):Pt=e,Xh.current=null}function Zg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=py(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Pt=null;return}}else if(n=fy(n,e,wn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Mr(t,e,n){var i=rt,r=kn.transition;try{kn.transition=null,rt=1,My(t,e,n,i)}finally{kn.transition=r,rt=i}return null}function My(t,e,n,i){do Ns();while(qi!==null);if(Ze&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(n_(t,s),t===zt&&(Pt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,ex(Al,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=rt;rt=1;var o=Ze;Ze|=4,Xh.current=null,gy(t,n),Wg(n,t),V_(td),Rl=!!ed,td=ed=null,t.current=n,xy(n),Yv(),Ze=o,rt=a,kn.transition=s}else t.current=n;if(Co&&(Co=!1,qi=t,Wl=r),s=t.pendingLanes,s===0&&(tr=null),Kv(n.stateNode),hn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gl)throw Gl=!1,t=Sd,Sd=null,t;return Wl&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===Md?Na++:(Na=0,Md=t):Na=0,hr(),null}function Ns(){if(qi!==null){var t=N0(Wl),e=kn.transition,n=rt;try{if(kn.transition=null,rt=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Wl=0,Ze&6)throw Error(ne(331));var r=Ze;for(Ze|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var h=ge;switch(h.tag){case 0:case 11:case 15:Ra(8,h,s)}var p=h.child;if(p!==null)p.return=h,ge=p;else for(;ge!==null;){h=ge;var f=h.sibling,m=h.return;if(Vg(h),h===c){ge=null;break}if(f!==null){f.return=m,ge=f;break}ge=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ge=d;break e}ge=s.return}}var _=t.current;for(ge=_;ge!==null;){a=ge;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,ge=g;else e:for(a=_;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:dc(9,o)}}catch(R){Tt(o,o.return,R)}if(o===a){ge=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,ge=M;break e}ge=o.return}}if(Ze=r,hr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(ic,t)}catch{}i=!0}return i}finally{rt=n,kn.transition=e}}return!1}function bp(t,e,n){e=Hs(n,e),e=Ng(t,e,1),t=er(t,e,1),e=tn(),t!==null&&(eo(t,1,e),hn(t,e))}function Tt(t,e,n){if(t.tag===3)bp(t,t,n);else for(;e!==null;){if(e.tag===3){bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Hs(n,t),t=Dg(e,t,1),e=er(e,t,1),t=tn(),e!==null&&(eo(e,1,t),hn(e,t));break}}e=e.return}}function Ey(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>bt()-$h?Dr(t,0):Yh|=n),hn(t,e)}function Jg(t,e){e===0&&(t.mode&1?(e=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):e=1);var n=tn();t=Ci(t,e),t!==null&&(eo(t,e,n),hn(t,n))}function wy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jg(t,n)}function Ty(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Jg(t,n)}var Qg;Qg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,hy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,mt&&e.flags&1048576&&ig(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hl(t,e),t=e.pendingProps;var r=Fs(e,Jt.current);Ps(e,n),r=Hh(null,e,i,t,r,n);var s=Vh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,Il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Oh(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,ud(e,i,t,n),e=fd(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Rh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ay(i),t=Xn(i,t),r){case 0:e=hd(null,e,i,t,n);break e;case 1:e=gp(null,e,i,t,n);break e;case 11:e=pp(null,e,i,t,n);break e;case 14:e=mp(null,e,i,Xn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),hd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),gp(t,e,i,r,n);case 3:e:{if(Og(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cg(t,e),Bl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ne(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ne(424)),e),e=xp(t,e,i,n,r);break e}else for(Tn=Qi(e.stateNode.containerInfo.firstChild),bn=e,mt=!0,$n=null,n=og(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Ri(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return ug(e),t===null&&od(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,nd(i,r)?a=null:s!==null&&nd(i,s)&&(e.flags|=32),Ug(t,e),en(t,e,a,n),e.child;case 6:return t===null&&od(e),null;case 13:return Fg(t,e,n);case 4:return Fh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),pp(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(Fl,i._currentValue),i._currentValue=a,s!==null)if(ei(s.value,a)){if(s.children===r.children&&!un.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ld(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ld(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=Bn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),mp(t,e,i,r,n);case 15:return Lg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),hl(t,e),e.tag=1,dn(i)?(t=!0,Il(e)):t=!1,Ps(e,n),Pg(e,i,r),ud(e,i,r,n),fd(null,e,i,!0,t,n);case 19:return kg(t,e,n);case 22:return Ig(t,e,n)}throw Error(ne(156,e.tag))};function ex(t,e){return A0(t,e)}function by(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new by(t,e,n,i)}function Jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ay(t){if(typeof t=="function")return Jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xh)return 11;if(t===vh)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ml(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Jh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case fs:return Lr(n.children,r,s,e);case gh:a=8,r|=8;break;case Iu:return t=On(12,n,e,r|2),t.elementType=Iu,t.lanes=s,t;case Uu:return t=On(13,n,e,r),t.elementType=Uu,t.lanes=s,t;case Ou:return t=On(19,n,e,r),t.elementType=Ou,t.lanes=s,t;case u0:return fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case l0:a=10;break e;case c0:a=9;break e;case xh:a=11;break e;case vh:a=14;break e;case Vi:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function fc(t,e,n,i){return t=On(22,t,i,e),t.elementType=u0,t.lanes=n,t.stateNode={isHidden:!1},t}function qc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Kc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qh(t,e,n,i,r,s,a,o,l){return t=new Cy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oh(s),t}function Ry(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function tx(t){if(!t)return or;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(dn(n))return tg(t,n,e)}return e}function nx(t,e,n,i,r,s,a,o,l){return t=Qh(n,i,!0,t,r,s,a,o,l),t.context=tx(null),n=t.current,i=tn(),r=nr(n),s=Ti(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,eo(t,r,i),hn(t,i),t}function pc(t,e,n,i){var r=e.current,s=tn(),a=nr(r);return n=tx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,a),t!==null&&(Jn(t,r,a,s),cl(t,r,a)),a}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ap(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ef(t,e){Ap(t,e),(t=t.alternate)&&Ap(t,e)}function Py(){return null}var ix=typeof reportError=="function"?reportError:function(t){console.error(t)};function tf(t){this._internalRoot=t}mc.prototype.render=tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));pc(t,e,null,null)};mc.prototype.unmount=tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){pc(null,t,null,null)}),e[Ai]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=I0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&O0(t)}};function nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function Ny(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yl(a);s.call(c)}}var a=nx(e,i,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=a,t[Ai]=a.current,ja(t.nodeType===8?t.parentNode:t),kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Yl(l);o.call(c)}}var l=Qh(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=l,t[Ai]=l.current,ja(t.nodeType===8?t.parentNode:t),kr(function(){pc(e,l,n,i)}),l}function xc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Yl(a);o.call(l)}}pc(e,a,t,r)}else a=Ny(n,e,t,r,i);return Yl(a)}D0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_a(e.pendingLanes);n!==0&&(Sh(e,n|1),hn(e,bt()),!(Ze&6)&&(Vs=bt()+500,hr()))}break;case 13:kr(function(){var i=Ci(t,1);if(i!==null){var r=tn();Jn(i,t,1,r)}}),ef(t,1)}};Mh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=tn();Jn(e,t,134217728,n)}ef(t,134217728)}};L0=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=tn();Jn(n,t,e,i)}ef(t,e)}};I0=function(){return rt};U0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Xu=function(t,e,n){switch(e){case"input":if(Bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=oc(i);if(!r)throw Error(ne(90));h0(i),Bu(i,r)}}}break;case"textarea":p0(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};S0=qh;M0=kr;var Dy={usingClientEntryPoint:!1,Events:[no,xs,oc,_0,y0,qh]},ca={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ly={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T0(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{ic=Ro.inject(Ly),ci=Ro}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(e))throw Error(ne(200));return Ry(t,e,null,n)};Cn.createRoot=function(t,e){if(!nf(t))throw Error(ne(299));var n=!1,i="",r=ix;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qh(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,ja(t.nodeType===8?t.parentNode:t),new tf(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=T0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return kr(t)};Cn.hydrate=function(t,e,n){if(!gc(e))throw Error(ne(200));return xc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!nf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=ix;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=nx(e,null,t,1,n??null,r,!1,s,a),t[Ai]=e.current,ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mc(e)};Cn.render=function(t,e,n){if(!gc(e))throw Error(ne(200));return xc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!gc(t))throw Error(ne(40));return t._reactRootContainer?(kr(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Cn.unstable_batchedUpdates=qh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return xc(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(t){console.error(t)}}rx(),r0.exports=Cn;var Iy=r0.exports,Rp=Iy;Du.createRoot=Rp.createRoot,Du.hydrateRoot=Rp.hydrateRoot;const Uy={},Pp=t=>{let e;const n=new Set,i=(h,p)=>{const f=typeof h=="function"?h(e):h;if(!Object.is(f,e)){const m=e;e=p??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(v=>v(e,m))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(Uy?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Oy=t=>t?Pp(t):Pp;var sx={exports:{}},ax={},ox={exports:{}},lx={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Ge;function Fy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ky=typeof Object.is=="function"?Object.is:Fy,By=js.useState,zy=js.useEffect,Hy=js.useLayoutEffect,Vy=js.useDebugValue;function jy(t,e){var n=e(),i=By({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Hy(function(){r.value=n,r.getSnapshot=e,Zc(r)&&s({inst:r})},[t,n,e]),zy(function(){return Zc(r)&&s({inst:r}),t(function(){Zc(r)&&s({inst:r})})},[t]),Vy(n),n}function Zc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ky(t,n)}catch{return!0}}function Gy(t,e){return e()}var Wy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Gy:jy;lx.useSyncExternalStore=js.useSyncExternalStore!==void 0?js.useSyncExternalStore:Wy;ox.exports=lx;var Xy=ox.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc=Ge,Yy=Xy;function $y(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qy=typeof Object.is=="function"?Object.is:$y,Ky=Yy.useSyncExternalStore,Zy=vc.useRef,Jy=vc.useEffect,Qy=vc.useMemo,e1=vc.useDebugValue;ax.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Zy(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Qy(function(){function l(m){if(!c){if(c=!0,h=m,m=i(m),r!==void 0&&a.hasValue){var v=a.value;if(r(v,m))return p=v}return p=m}if(v=p,qy(h,m))return v;var y=i(m);return r!==void 0&&r(v,y)?(h=m,v):(h=m,p=y)}var c=!1,h,p,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,i,r]);var o=Ky(t,s[0],s[1]);return Jy(function(){a.hasValue=!0,a.value=o},[o]),e1(o),o};sx.exports=ax;var t1=sx.exports;const n1=Wm(t1),cx={},{useDebugValue:i1}=n0,{useSyncExternalStoreWithSelector:r1}=n1;let Np=!1;const s1=t=>t;function a1(t,e=s1,n){(cx?"production":void 0)!=="production"&&n&&!Np&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Np=!0);const i=r1(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return i1(i),i}const Dp=t=>{(cx?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Oy(t):t,n=(i,r)=>a1(e,i,r);return Object.assign(n,e),n},o1=t=>t?Dp(t):Dp;class l1{constructor(){Ke(this,"packetCounter",1042);Ke(this,"simTime",0);Ke(this,"speedMultiplier",1);Ke(this,"isPaused",!1);Ke(this,"latitude",-59.845);Ke(this,"longitude",68.421);Ke(this,"altitude",.85);Ke(this,"pitch",6.2);Ke(this,"roll",-4.8);Ke(this,"yaw",124.5);Ke(this,"heave",.15);Ke(this,"forcedTiltAnomaly",!1);Ke(this,"sustainedTiltCounter",0);Ke(this,"lisocl2Voltage",3.642);Ke(this,"hlcVoltage",3.615);Ke(this,"hlcCharge",98.6);Ke(this,"isBurstTransmitting",!1);Ke(this,"windSpeedKnots",26.4);Ke(this,"windDirectionDeg",285);Ke(this,"barometricPressureHpa",982.4);Ke(this,"airTempC",-9.8);Ke(this,"waterTempC",-1.14);Ke(this,"salinityPsu",34.18);Ke(this,"pdmsPressureBar",1.042);Ke(this,"bellowsMm",12.8);Ke(this,"vessel",{name:"ORV Sagar Nidhi",callsign:"VTFX",latitude:-59.782,longitude:68.31,heading:142,speedKnots:11.5});Ke(this,"ctdProfileData",[]);this.generateInitialCTDProfile()}setSpeed(e){this.speedMultiplier=e,this.isPaused=e===0}togglePause(){return this.isPaused=!this.isPaused,this.isPaused}getIsPaused(){return this.isPaused}setForcedTiltAnomaly(e){this.forcedTiltAnomaly=e,e||(this.sustainedTiltCounter=0)}getForcedTiltAnomaly(){return this.forcedTiltAnomaly}toggleGeofencePosition(){this.latitude>-60?this.latitude=-60.185:this.latitude=-59.815}setLatitude(e){this.latitude=e}getVessel(){return this.vessel}generateInitialCTDProfile(){const e=[];[0,10,25,50,75,100,150,200,250,300,350,400,450,500].forEach(i=>{let r=0,s=0;if(i<=80)r=-1.2+i/80*-.6,s=33.92+i/80*.25;else if(i<=200){const a=(i-80)/120;r=-1.8+a*2.2,s=34.17+a*.45}else{const a=(i-200)/300;r=.4+a*1.4,s=34.62+a*.16}e.push({depth:i,temp:parseFloat(r.toFixed(3)),salinity:parseFloat(s.toFixed(3)),timestamp:new Date().toISOString()})}),this.ctdProfileData=e}getCTDProfile(){return this.ctdProfileData}tick(){if(!this.isPaused){this.simTime+=1*this.speedMultiplier,this.packetCounter++;const h=.8+.3*Math.sin(this.simTime*.02),p=(80+15*Math.sin(this.simTime*.01))*(Math.PI/180),f=Math.cos(p)*h*(1/3600)*(1/60),m=Math.sin(p)*h*(1/3600)*(1/(60*Math.cos(this.latitude*Math.PI/180)));this.latitude+=f*this.speedMultiplier,this.longitude+=m*this.speedMultiplier;const v=Math.cos(this.vessel.heading*Math.PI/180)*(this.vessel.speedKnots/3600)*(1/60),y=Math.sin(this.vessel.heading*Math.PI/180)*(this.vessel.speedKnots/3600)*(1/(60*Math.cos(this.vessel.latitude*Math.PI/180)));if(this.vessel.latitude+=v*this.speedMultiplier,this.vessel.longitude+=y*this.speedMultiplier,this.forcedTiltAnomaly)this.pitch=64.5+4.2*Math.sin(this.simTime*1.5),this.roll=-28+3.8*Math.cos(this.simTime*1.2),this.heave=-1.85+.4*Math.sin(this.simTime*.8),this.sustainedTiltCounter+=1*this.speedMultiplier;else{const x=this.simTime*(2*Math.PI/8.5),d=this.simTime*(2*Math.PI/3.4);this.pitch=5.5*Math.sin(x)+2.2*Math.sin(d),this.roll=7*Math.cos(x+.8)+1.8*Math.cos(d),this.yaw=(this.yaw+.15*Math.sin(x*.5)+360)%360,this.heave=.45*Math.sin(x),this.sustainedTiltCounter=0}this.windSpeedKnots=26+6.5*Math.sin(this.simTime*.05)+(Math.random()-.5)*1.2,this.windDirectionDeg=Math.round((280+15*Math.sin(this.simTime*.02)+360)%360),this.barometricPressureHpa=981.5+2*Math.sin(this.simTime*.01)+(Math.random()-.5)*.1,this.airTempC=-9.5+1.2*Math.sin(this.simTime*.015),this.waterTempC=-1.14+.08*Math.sin(this.simTime*.03),this.salinityPsu=34.18+.04*Math.sin(this.simTime*.025),this.pdmsPressureBar=1.04+.005*Math.sin(this.simTime*.08),this.bellowsMm=12.5+1.5*Math.sin(this.simTime*.1),this.isBurstTransmitting=Math.floor(this.simTime)%15===0,this.isBurstTransmitting?(this.hlcCharge=94.2,this.hlcVoltage=3.56,this.lisocl2Voltage=3.61):(this.hlcCharge=Math.min(99.4,this.hlcCharge+.4*this.speedMultiplier),this.hlcVoltage=Math.min(3.62,this.hlcVoltage+.006*this.speedMultiplier),this.lisocl2Voltage=Math.min(3.645,this.lisocl2Voltage+.003*this.speedMultiplier))}const e=Math.sqrt(this.pitch*this.pitch+this.roll*this.roll),n=e>60,i=n&&this.sustainedTiltCounter>=2,r=this.latitude<=-60,s=i?"SASR_DISTRESS":r?"ARGOS_POLAR":"INSAT_DRT",a=i?406.05:r?401.65:402.75,o=this.encodeRawHexPacket(i),l=this.decodeHexFields(o),c=new Date().toISOString();return{packetSequence:this.packetCounter,timestamp:c,navic:{latitude:parseFloat(this.latitude.toFixed(5)),longitude:parseFloat(this.longitude.toFixed(5)),altitude:parseFloat(this.altitude.toFixed(2)),fixType:"3D-NavIC",satellitesTracked:9,hdop:.85,timestamp:c},gyro:{pitch:parseFloat(this.pitch.toFixed(2)),roll:parseFloat(this.roll.toFixed(2)),yaw:parseFloat(this.yaw.toFixed(1)),heaveAcceleration:parseFloat((this.heave*2.8).toFixed(2)),angularVelocity:parseFloat((Math.abs(this.pitch)*.45).toFixed(2)),tiltAngle:parseFloat(e.toFixed(2)),isDistressTilt:n,sustainedTiltSeconds:parseFloat(this.sustainedTiltCounter.toFixed(1))},power:{lisocl2CellVoltage:parseFloat(this.lisocl2Voltage.toFixed(3)),hlcVoltage:parseFloat(this.hlcVoltage.toFixed(3)),hlcChargePercentage:parseFloat(this.hlcCharge.toFixed(1)),esrMilliohms:118,pulseBurstsRemaining:4892,currentDrawMilliamps:this.isBurstTransmitting?1850:2.4,passivationIndex:this.lisocl2Voltage>3.62?"NOMINAL":"MILD"},pte:{pdmsFluidPressureBar:parseFloat(this.pdmsPressureBar.toFixed(3)),zeroVoidSaturationPct:100,fvmqBellowsDisplacementMm:parseFloat(this.bellowsMm.toFixed(2)),bellowsFlexibilityPct:96.5,internalTempC:parseFloat((this.waterTempC+.3).toFixed(2)),sealIntegrity:"HERMETIC_PASS"},sensors:{windSpeedKnots:parseFloat(this.windSpeedKnots.toFixed(1)),windSpeedMs:parseFloat((this.windSpeedKnots*.514444).toFixed(2)),windDirectionDeg:this.windDirectionDeg,transducersActive:4,barometricPressureHpa:parseFloat(this.barometricPressureHpa.toFixed(2)),ambientSupercooledTempC:parseFloat(this.airTempC.toFixed(2)),relativeHumidityPct:88.4,waterTempC:parseFloat(this.waterTempC.toFixed(3)),conductivityMsm:29.42,salinityPsu:parseFloat(this.salinityPsu.toFixed(3)),depthMeters:7.12,soundVelocityMs:1445.6},uplink:{mode:s,frequencyMhz:a,carrierLocked:!0,signalSnrDb:r?14.8:17.2,rssiDbm:r?-98:-92,linkMarginDb:r?11.4:14.6,geofenceStatus:r?"SOUTH_60S_ARGOS":"NORTH_60S_INSAT"},distress:{sasrActive:i,frequencyMhz:406.05,inmccAlertDispatched:i,overrideTime:i?c:void 0,lastValidFix:{latitude:parseFloat(this.latitude.toFixed(5)),longitude:parseFloat(this.longitude.toFixed(5)),altitude:.85,fixType:"3D-NavIC",satellitesTracked:9,hdop:.85,timestamp:c},triggerReason:i?"SUSTAINED TILT > 60° (ICE OVERRIDE DETECTED)":void 0,overrideTiltAngle:i?parseFloat(e.toFixed(2)):void 0},rawHex:o,decodedFieldsMap:l}}calculateRadarContact(){const e=this.vessel.latitude*(Math.PI/180),n=this.vessel.longitude*(Math.PI/180),i=this.latitude*(Math.PI/180),r=this.longitude*(Math.PI/180),s=i-e,a=r-n,o=Math.sin(s/2)*Math.sin(s/2)+Math.cos(e)*Math.cos(i)*Math.sin(a/2)*Math.sin(a/2),c=6371*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))),h=c/1.852,p=Math.sin(a)*Math.cos(i),f=Math.cos(e)*Math.sin(i)-Math.sin(e)*Math.cos(i)*Math.cos(a);let m=Math.atan2(p,f)*(180/Math.PI);m=(m+360)%360;let v=(m-this.vessel.heading+360)%360;const y=Math.max(1,this.vessel.speedKnots),x=h/y*60,d=h*Math.sin(Math.abs(v)*(Math.PI/180));return{rangeKm:parseFloat(c.toFixed(2)),rangeNm:parseFloat(h.toFixed(2)),trueBearingDeg:Math.round(m),relativeBearingDeg:Math.round(v),cpaNm:parseFloat(Math.abs(d).toFixed(2)),etiMinutes:Math.round(x)}}encodeRawHexPacket(e){const n=new Uint8Array(32);n[0]=84,n[1]=65,n[2]=77,n[3]=e?127:1;const i=Math.floor(Date.now()/1e3);n[4]=i>>24&255,n[5]=i>>16&255,n[6]=i>>8&255,n[7]=i&255;const r=Math.round(this.latitude*1e5);n[8]=r>>24&255,n[9]=r>>16&255,n[10]=r>>8&255,n[11]=r&255;const s=Math.round(this.longitude*1e5);n[12]=s>>24&255,n[13]=s>>16&255,n[14]=s>>8&255,n[15]=s&255;const a=Math.round(this.lisocl2Voltage*1e3);n[16]=a>>8&255,n[17]=a&255;const o=Math.round(this.hlcVoltage*1e3);n[18]=o>>8&255,n[19]=o&255,n[20]=Math.round(this.pitch)&255,n[21]=Math.round(this.roll)&255;const l=Math.round(this.barometricPressureHpa*10);n[22]=l>>8&255,n[23]=l&255;const c=Math.round(this.airTempC*100);n[24]=c>>8&255,n[25]=c&255;const h=Math.min(255,Math.round(this.windSpeedKnots*2)),p=Math.round(this.windDirectionDeg/2);n[26]=h&255,n[27]=p&255;const f=Math.round(this.waterTempC*100),m=Math.round((this.salinityPsu-30)*100);n[28]=f>>8&255,n[29]=m&255;const v=this.calculateCrc16(n.subarray(0,30));return n[30]=v>>8&255,n[31]=v&255,Array.from(n).map(y=>y.toString(16).padStart(2,"0").toUpperCase()).join(" ")}decodeHexFields(e){const n=e.replace(/\s+/g,""),i=[];for(let C=0;C<n.length;C+=2)i.push(parseInt(n.substring(C,C+2),16)||0);if(i.length<32)return[];const r=i[3]===127,s=i[4]<<24|i[5]<<16|i[6]<<8|i[7],o=((i[8]<<24|i[9]<<16|i[10]<<8|i[11])/1e5).toFixed(5),c=((i[12]<<24|i[13]<<16|i[14]<<8|i[15])/1e5).toFixed(5),h=i[16]<<8|i[17],p=i[18]<<8|i[19],f=i[20]<<24>>24,m=i[21]<<24>>24,v=((i[22]<<8|i[23])/10).toFixed(1),d=(((i[24]<<8|i[25])<<16>>16)/100).toFixed(2),_=(i[26]/2).toFixed(1),g=i[27]*2,R=((i[28]<<24>>24)/10).toFixed(2),A=(30+i[29]/100).toFixed(2),b=i[30].toString(16).padStart(2,"0")+i[31].toString(16).padStart(2,"0");return[{name:"Sync Header & Status",bytes:"00-03",startByte:0,endByte:3,hexValue:i.slice(0,4).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:r?"EMERGENCY OVERRIDE (SAS&R 406.05 MHz)":"TAMAS PROTOCOL v1.0 (NOMINAL)",colorClass:r?"text-red-400 border-red-500/40 bg-red-950/30":"text-cyan-400 border-cyan-500/40 bg-cyan-950/30"},{name:"Timestamp Epoch",bytes:"04-07",startByte:4,endByte:7,hexValue:i.slice(4,8).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:new Date(s*1e3).toUTCString(),unit:"UTC",colorClass:"text-blue-400 border-blue-500/40 bg-blue-950/30"},{name:"NavIC Coordinates",bytes:"08-15",startByte:8,endByte:15,hexValue:i.slice(8,16).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:`${o}°S, ${c}°E`,unit:"WGS84 / NavIC",colorClass:"text-emerald-400 border-emerald-500/40 bg-emerald-950/30"},{name:"Power System (LiSOCl2 & HLC)",bytes:"16-19",startByte:16,endByte:19,hexValue:i.slice(16,20).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:`LiSOCl2: ${(h/1e3).toFixed(3)}V | HLC: ${(p/1e3).toFixed(3)}V`,unit:"Volts",colorClass:"text-amber-400 border-amber-500/40 bg-amber-950/30"},{name:"6-DoF Gyro Attitude",bytes:"20-21",startByte:20,endByte:21,hexValue:i.slice(20,22).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:`Pitch: ${f}° | Roll: ${m}° (Total Tilt: ${Math.round(Math.sqrt(f*f+m*m))}°)`,unit:"Degrees",colorClass:Math.sqrt(f*f+m*m)>60?"text-red-400 border-red-500/40 bg-red-950/30":"text-purple-400 border-purple-500/40 bg-purple-950/30"},{name:"Atmospheric Baro & Air Temp",bytes:"22-25",startByte:22,endByte:25,hexValue:i.slice(22,26).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:`Baro: ${v} hPa | Air Temp: ${d}°C`,unit:"MEMS Dual-Die",colorClass:"text-teal-400 border-teal-500/40 bg-teal-950/30"},{name:"Ultrasonic Anemometer",bytes:"26-27",startByte:26,endByte:27,hexValue:i.slice(26,28).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:`${_} kts @ ${g}°`,unit:"Polar Sonic",colorClass:"text-sky-400 border-sky-500/40 bg-sky-950/30"},{name:"Micro-CTD Sonde (7m Base)",bytes:"28-29",startByte:28,endByte:29,hexValue:i.slice(28,30).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:`Water Temp: ${R}°C | Salinity: ${A} PSU`,unit:"RS485 Sonde",colorClass:"text-indigo-400 border-indigo-500/40 bg-indigo-950/30"},{name:"CRC-16-CCITT Checksum",bytes:"30-31",startByte:30,endByte:31,hexValue:i.slice(30,32).map(C=>C.toString(16).padStart(2,"0").toUpperCase()).join(" "),interpretedValue:`0x${b.toUpperCase()} (VALID INTEGRITY)`,unit:"CRC-16",colorClass:"text-slate-300 border-slate-600/40 bg-slate-900/30"}]}calculateCrc16(e){let n=65535;for(let i=0;i<e.length;i++){n^=e[i]<<8;for(let r=0;r<8;r++)n&32768?n=(n<<1^4129)&65535:n=n<<1&65535}return n}}const Sn=new l1;class c1{constructor(){Ke(this,"ctx",null);Ke(this,"isMuted",!1);Ke(this,"distressOscillator",null);Ke(this,"distressGain",null);Ke(this,"distressInterval",null)}initContext(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(e){this.isMuted=e,e&&this.stopDistressAlarm()}getIsMuted(){return this.isMuted}playRadarPing(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(1480,e),n.frequency.exponentialRampToValueAtTime(740,e+.18),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.25),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.25)}catch{}}playHexBurst(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(2200,e),n.frequency.setValueAtTime(3100,e+.02),n.frequency.setValueAtTime(1800,e+.04),i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.06),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.07)}catch{}}playTactileClick(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.setValueAtTime(600,e),n.frequency.exponentialRampToValueAtTime(150,e+.03),i.gain.setValueAtTime(.08,e),i.gain.exponentialRampToValueAtTime(.001,e+.03),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.04)}catch{}}playAuthorizeDrop(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(320,e+.2),i.type="sine",i.frequency.setValueAtTime(880,e+.15),i.frequency.setValueAtTime(1320,e+.35),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(r),i.connect(r),r.connect(this.ctx.destination),n.start(e),n.stop(e+.5),i.start(e+.15),i.stop(e+.5)}catch{}}startDistressAlarm(){if(!(this.isMuted||this.distressInterval))try{if(this.initContext(),!this.ctx)return;let e=!0;const n=()=>{if(!this.ctx||this.isMuted)return;const i=this.ctx.currentTime,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(e?960:720,i),s.gain.setValueAtTime(.15,i),s.gain.exponentialRampToValueAtTime(.01,i+.28),r.connect(s),s.connect(this.ctx.destination),r.start(i),r.stop(i+.28),e=!e};n(),this.distressInterval=setInterval(n,350)}catch{}}stopDistressAlarm(){this.distressInterval&&(clearInterval(this.distressInterval),this.distressInterval=null)}}const wt=new c1,u1=[{id:"core_avionics",name:"Core Avionics Architecture",category:"Avionics & Relays",state:"PASS",details:"THEJAS32 32-bit RISC-V SoC (RV32IM @ 100MHz), Dual NavIC GNSS receiver, ISRO INSAT DRT 402.75 MHz transmitter, ARGOS polar LEO transceiver.",metrics:{"CPU Core":"THEJAS32 RISC-V (100 MHz)","CRC Flash Integrity":"PASS (0x9A4F)","NavIC TCXO Drift":"0.18 ppm","INSAT DRT RF Power":"4.8 W (+36.8 dBm)","Argos LEO Uplink":"STANDBY / PASS READY"}},{id:"power_reservoir",name:"Power Reservoir & Passivation",category:"Primary Energy Storage",state:"PASS",details:"Dual 3.6V Primary LiSOCl2 bobbin cells with Hybrid Layer Capacitor (HLC 1550) pulse discharge buffer. Zero internal shorts detected.",metrics:{"LiSOCl2 Bus":"3.642 V","HLC 1550 TMV":"3.615 V","Capacitor Charge":"98.6%","ESR Impedance":"118 mΩ","Passivation State":"NOMINAL (DE-PASSIVATED)"}},{id:"pte_suspension",name:"PTE Suspension & Silicone Bellows",category:"Pressure-Tolerant Enclosure",state:"PASS",details:'Pressure-Tolerant Electronics (PTE) immersed in dielectric PDMS silicone oil. Dynamic FVMQ fluorosilicone "lung" bellows compensates for ocean pressure.',metrics:{"PDMS Oil Pressure":"1.042 bar","Zero-Void Saturation":"100.0%","Bellows Displacement":"12.8 mm","FVMQ Elasticity":"96.5% NOMINAL","Hermetic Seal":"HERMETIC PASS"}},{id:"sensor_suite",name:"Polar Marine & Atmospheric Suite",category:"Sensor Arrays",state:"PASS",details:"Acoustic resonance ultrasonic anemometer (wind velocity/heading), atmospheric dual-die barometric MEMS, RS485 benthic micro-CTD sonde at 7m spar base.",metrics:{"Anemometer Transducers":"4 / 4 ACTIVE","Barometric Transducer":"MS5837 DUAL (0.01 hPa)","Micro-CTD RS485 Sonde":"ONLINE (7.1m base)","Conductivity Cell Cal":"CALIBRATED VALID","Acoustic Range Pinger":"STANDBY"}}],mn=o1((t,e)=>{const n=Sn.tick(),i=Sn.calculateRadarContact(),r=Sn.getVessel(),s=Sn.getCTDProfile();return{activeRole:"sar",setActiveRole:a=>{wt.playTactileClick(),t({activeRole:a})},activeNavTab:"monitoring",setActiveNavTab:a=>{wt.playTactileClick(),t({activeNavTab:a})},activeAnalyticsTab:"temp",setActiveAnalyticsTab:a=>{wt.playTactileClick(),t({activeAnalyticsTab:a})},currentPacket:n,packetHistory:[n],radarContact:i,vessel:r,ctdProfile:s,subsystems:u1,selectedHotspotId:null,setSelectedHotspotId:a=>{wt.playTactileClick(),t({selectedHotspotId:a})},dropSafetyCoverOpen:!1,dropAuthorized:!1,dropTimestamp:null,toggleSafetyCover:()=>{wt.playTactileClick(),t(a=>({dropSafetyCoverOpen:!a.dropSafetyCoverOpen}))},authorizeDrop:()=>{const{dropSafetyCoverOpen:a,dropAuthorized:o}=e();!a||o||(wt.playAuthorizeDrop(),t({dropAuthorized:!0,dropTimestamp:new Date().toISOString()}))},emergencyModalOpen:!1,dismissDistressModal:()=>{wt.playTactileClick(),t({emergencyModalOpen:!1})},openDistressModal:()=>{t({emergencyModalOpen:!0})},disarmDistressAnomaly:()=>{Sn.setForcedTiltAnomaly(!1),wt.stopDistressAlarm(),wt.playTactileClick(),t({emergencyModalOpen:!1})},simulationSpeed:1,isPaused:!1,setSimulationSpeed:a=>{Sn.setSpeed(a),wt.playTactileClick(),t({simulationSpeed:a,isPaused:a===0})},togglePause:()=>{const a=Sn.togglePause();wt.playTactileClick(),t({isPaused:a})},triggerIcebergAnomaly:a=>{Sn.setForcedTiltAnomaly(a),wt.playTactileClick(),a?(wt.startDistressAlarm(),t({emergencyModalOpen:!0})):wt.stopDistressAlarm()},toggleGeofencePosition:()=>{Sn.toggleGeofencePosition(),wt.playTactileClick()},customHexInput:"",setCustomHexInput:a=>t({customHexInput:a}),injectCustomHex:a=>{try{return Sn.decodeHexFields(a).length>=8?(wt.playHexBurst(),!0):!1}catch{return!1}},audioMuted:!1,toggleAudioMute:()=>{const a=!e().audioMuted;wt.setMuted(a),t({audioMuted:a})},tick:()=>{const a=Sn.tick(),o=Sn.calculateRadarContact(),l=Sn.getVessel();a.distress.sasrActive&&!e().audioMuted?wt.startDistressAlarm():a.distress.sasrActive||wt.stopDistressAlarm(),a.distress.sasrActive&&!e().emergencyModalOpen&&a.gyro.sustainedTiltSeconds>=2&&t({emergencyModalOpen:!0}),t(c=>{const h=[...c.packetHistory,a];return h.length>80&&h.shift(),{currentPacket:a,packetHistory:h,radarContact:o,vessel:l}})}}});/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ux=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=Ge.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Ge.createElement("svg",{ref:l,...h1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:ux("lucide",r),...o},[...a.map(([c,h])=>Ge.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(t,e)=>{const n=Ge.forwardRef(({className:i,...r},s)=>Ge.createElement(f1,{ref:s,iconNode:e,className:ux(`lucide-${d1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=Ce("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=Ce("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Ce("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Ce("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Ce("CircleArrowDown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=Ce("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Ce("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Ce("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Ce("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Ce("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Ce("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Ce("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Ce("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Ce("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Ce("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Ce("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Ce("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Ce("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=Ce("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Ce("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Ce("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Ce("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=Ce("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Ce("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Ce("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Ce("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Ce("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Ce("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Ce("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=Ce("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=Ce("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Ce("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Ce("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=Ce("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Ce("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=Ce("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Ce("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=Ce("ThermometerSnowflake",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Ce("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=Ce("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=Ce("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=Ce("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=Ce("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Ce("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=Ce("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=Ce("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=Ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=Ce("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Z1=()=>{const{activeNavTab:t,setActiveNavTab:e,currentPacket:n,isPaused:i,simulationSpeed:r,togglePause:s,setSimulationSpeed:a,audioMuted:o,toggleAudioMute:l}=mn(),[c,h]=Ge.useState("22:54:31 UTC"),[p,f]=Ge.useState("25 Apr 2026");Ge.useEffect(()=>{const v=()=>{const x=new Date,d=x.toISOString().slice(11,19)+" UTC",_=x.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});h(d),f(_)};v();const y=setInterval(v,1e3);return()=>clearInterval(y)},[]);const m=n.distress.sasrActive;return u.jsx("header",{className:"bg-tamas-bg border-b border-tamas-border/70 px-5 pt-3 pb-0 select-none",children:u.jsxs("div",{className:"max-w-[1920px] mx-auto space-y-2.5",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center space-x-3.5",children:[u.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-lg bg-tamas-card border border-tamas-border text-tamas-info shadow-sm",children:u.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"#4FA3B8"}),u.jsx("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"})]})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx("h1",{className:"font-extrabold text-lg tracking-widest text-tamas-text font-sans",children:"T.A.M.A.S."}),u.jsxs("div",{className:`flex items-center space-x-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium ${m?"bg-tamas-critical/15 text-tamas-critical border border-tamas-critical/40 animate-pulse":"tamas-tag-green"}`,children:[u.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${m?"bg-tamas-critical":"bg-tamas-operational"}`}),u.jsx("span",{className:"font-semibold text-[11px] tracking-wide",children:m?"EMERGENCY TAKEOVER":"SYSTEM ONLINE"})]})]}),u.jsx("p",{className:"text-[11px] text-tamas-textMuted tracking-normal",children:"Tactical Autonomous Marine Analysis System"})]})]}),u.jsxs("div",{className:"flex items-center space-x-6 text-xs text-tamas-textMuted",children:[u.jsxs("div",{className:"hidden sm:block text-right",children:[u.jsx("span",{className:"text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block",children:"MISSION STATUS"}),u.jsx("span",{className:"text-xs font-semibold text-tamas-text",children:"Monitoring Mission"})]}),u.jsxs("div",{className:"hidden md:block text-right",children:[u.jsx("span",{className:"text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block",children:"LAST UPDATED"}),u.jsx("span",{className:"text-xs font-mono font-medium text-tamas-text",children:c}),u.jsx("span",{className:"text-[10px] text-tamas-textMuted block font-mono",children:p})]}),u.jsxs("div",{className:"hidden lg:block text-right",children:[u.jsx("span",{className:"text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block",children:"CONNECTION"}),u.jsxs("div",{className:"flex items-center justify-end space-x-1.5 text-xs font-medium text-tamas-operational",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-tamas-operational"}),u.jsx("span",{children:"Connected"}),u.jsx(H1,{className:"w-3.5 h-3.5 text-tamas-operational inline ml-0.5"})]})]}),u.jsxs("div",{className:"flex items-center bg-tamas-card px-2 py-1 rounded-lg border border-tamas-border space-x-1 text-xs",children:[u.jsx("button",{onClick:s,title:i?"Resume Simulation":"Pause Simulation",className:`p-1 rounded hover:bg-tamas-bg ${i?"text-tamas-warning":"text-tamas-textMuted hover:text-white"}`,children:i?u.jsx(I1,{className:"w-3 h-3"}):u.jsx(L1,{className:"w-3 h-3"})}),u.jsx("button",{onClick:()=>a(1),className:`px-1.5 py-0.5 rounded text-[10px] font-mono ${r===1&&!i?"bg-tamas-bg text-tamas-info font-bold":"text-tamas-textMuted"}`,children:"1x"}),u.jsxs("button",{onClick:()=>a(5),className:`flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono ${r===5&&!i?"bg-tamas-bg text-tamas-info font-bold":"text-tamas-textMuted"}`,children:[u.jsx(M1,{className:"w-2.5 h-2.5 mr-0.5"}),u.jsx("span",{children:"5x"})]}),u.jsx("button",{onClick:l,title:o?"Unmute Audio":"Mute Audio",className:"p-1 rounded text-tamas-textMuted hover:text-white",children:o?u.jsx(Y1,{className:"w-3 h-3"}):u.jsx(X1,{className:"w-3 h-3 text-tamas-info"})})]}),u.jsxs("div",{className:"flex items-center space-x-2 text-tamas-textMuted",children:[u.jsx("button",{className:"p-1.5 rounded-md hover:bg-tamas-card hover:text-white transition-colors",children:u.jsx(g1,{className:"w-4 h-4"})}),u.jsx("button",{className:"p-1.5 rounded-md hover:bg-tamas-card hover:text-white transition-colors",children:u.jsx(F1,{className:"w-4 h-4"})}),u.jsx("button",{className:"p-1.5 rounded-md hover:bg-tamas-card hover:text-white transition-colors",children:u.jsx(N1,{className:"w-4 h-4"})})]})]})]}),u.jsx("nav",{className:"flex items-center space-x-7 pt-1 text-xs",children:[{id:"monitoring",label:"Live Monitoring"},{id:"device",label:"Device Overview"},{id:"ocean",label:"Ocean Data"},{id:"alerts",label:"Alerts"}].map(v=>{const y=t===v.id;return u.jsxs("button",{onClick:()=>e(v.id),className:`pb-2.5 px-0.5 font-medium transition-all relative ${y?"text-tamas-info font-semibold":"text-tamas-textMuted hover:text-tamas-text"}`,children:[u.jsx("span",{children:v.label}),y&&u.jsx("span",{className:"absolute bottom-0 inset-x-0 h-0.5 bg-tamas-info rounded-full shadow-sm"})]},v.id)})})]})})},J1=()=>{const{emergencyModalOpen:t,dismissDistressModal:e,disarmDistressAnomaly:n,currentPacket:i,packetHistory:r}=mn();if(!t)return null;const s=i.gyro.tiltAngle,a=i.distress.lastValidFix||i.navic,o=r.slice(-6).reverse();return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in",children:u.jsxs("div",{className:"relative w-full max-w-4xl bg-void-950 border-2 border-red-600 rounded-xl shadow-crimson-glow overflow-hidden font-mono",children:[u.jsxs("div",{className:"bg-red-950/90 border-b border-red-600/60 px-6 py-4 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"flex items-center justify-center w-10 h-10 rounded-lg bg-red-600/30 border border-red-500 animate-pulse",children:u.jsx(fx,{className:"w-6 h-6 text-red-400"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-red-100 tracking-wider",children:"AUTONOMOUS SAS&R EMERGENCY TAKEOVER ACTIVE"}),u.jsx("p",{className:"text-xs text-red-300",children:"INMCC (Indian National Mission Control Centre) COSPAS-SARSAT BEACON TRIGGERED"})]})]}),u.jsx("button",{onClick:e,className:"p-1.5 rounded-lg bg-red-900/40 text-red-300 hover:text-white hover:bg-red-800 transition-colors",children:u.jsx(q1,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"p-6 space-y-6 max-h-[80vh] overflow-y-auto",children:[u.jsxs("div",{className:"p-4 rounded-lg bg-red-900/30 border border-red-500/50 flex items-start space-x-3",children:[u.jsx(px,{className:"w-5 h-5 text-red-400 mt-0.5 animate-pulse"}),u.jsxs("div",{className:"text-xs space-y-1",children:[u.jsx("p",{className:"font-semibold text-red-200",children:"CRITICAL THRESHOLD VIOLATION: STRUCTURAL TILT EXCEEDED 60° OFF VERTICAL AXIS"}),u.jsx("p",{className:"text-red-300/80",children:"T.A.M.A.S. THEJAS32 RISC-V SoC automated override has tripped the 406.05 MHz UHF distress beacon. Emergency packet burst transmitting at 5W ERP with NavIC geolocational coordinates."})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{className:"p-4 rounded-lg bg-slate-900/60 border border-red-500/30 space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[u.jsxs("span",{className:"text-xs text-slate-400 font-medium flex items-center space-x-1.5",children:[u.jsx(mx,{className:"w-3.5 h-3.5 text-red-400"}),u.jsx("span",{children:"6-DoF GYRO TILT STATUS"})]}),u.jsx("span",{className:"text-xs text-red-400 font-bold",children:"CRITICAL CUTOFF: >60°"})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center pt-1",children:[u.jsxs("div",{className:"p-2.5 rounded bg-slate-950/80 border border-slate-800",children:[u.jsx("div",{className:"text-[10px] text-slate-400",children:"PITCH"}),u.jsxs("div",{className:"text-base font-bold text-red-300",children:[i.gyro.pitch,"°"]})]}),u.jsxs("div",{className:"p-2.5 rounded bg-slate-950/80 border border-slate-800",children:[u.jsx("div",{className:"text-[10px] text-slate-400",children:"ROLL"}),u.jsxs("div",{className:"text-base font-bold text-red-300",children:[i.gyro.roll,"°"]})]}),u.jsxs("div",{className:"p-2.5 rounded bg-slate-950/80 border border-red-500/40 bg-red-950/30",children:[u.jsx("div",{className:"text-[10px] text-red-400 font-semibold",children:"TOTAL TILT"}),u.jsxs("div",{className:"text-lg font-bold text-red-200",children:[s,"°"]})]})]}),u.jsxs("div",{className:"text-xs space-y-1 text-slate-400 pt-2 border-t border-slate-800",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Angular Velocity:"}),u.jsxs("span",{className:"text-slate-200",children:[i.gyro.angularVelocity," deg/s"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Heave Acceleration:"}),u.jsxs("span",{className:"text-slate-200",children:[i.gyro.heaveAcceleration," m/s²"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Sustained Duration:"}),u.jsxs("span",{className:"text-red-300 font-bold",children:[i.gyro.sustainedTiltSeconds," seconds"]})]})]})]}),u.jsxs("div",{className:"p-4 rounded-lg bg-slate-900/60 border border-red-500/30 space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[u.jsxs("span",{className:"text-xs text-slate-400 font-medium flex items-center space-x-1.5",children:[u.jsx(R1,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"LAST VALID NavIC GNSS FIX"})]}),u.jsx("span",{className:"text-xs text-emerald-400 font-bold",children:"LOCKED FIX"})]}),u.jsxs("div",{className:"space-y-2 pt-1 text-xs",children:[u.jsxs("div",{className:"p-2.5 rounded bg-slate-950/80 border border-slate-800 flex justify-between",children:[u.jsx("span",{className:"text-slate-400",children:"Latitude:"}),u.jsxs("span",{className:"font-bold text-cyan-300",children:[Math.abs(a.latitude),"° S"]})]}),u.jsxs("div",{className:"p-2.5 rounded bg-slate-950/80 border border-slate-800 flex justify-between",children:[u.jsx("span",{className:"text-slate-400",children:"Longitude:"}),u.jsxs("span",{className:"font-bold text-cyan-300",children:[Math.abs(a.longitude),"° E"]})]}),u.jsxs("div",{className:"flex justify-between text-slate-400 px-1",children:[u.jsx("span",{children:"Satellites Tracked:"}),u.jsxs("span",{className:"text-slate-200",children:[a.satellitesTracked," (NavIC Constellation)"]})]}),u.jsxs("div",{className:"flex justify-between text-slate-400 px-1",children:[u.jsx("span",{children:"INMCC Beacon Channel:"}),u.jsx("span",{className:"text-red-300 font-semibold",children:"406.05 MHz Channel B"})]})]})]})]}),u.jsxs("div",{className:"p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[u.jsxs("span",{className:"text-xs text-slate-300 font-medium flex items-center space-x-1.5",children:[u.jsx(w1,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"FORENSIC TELEMETRY TIMELINE (PRE-OVERRIDE BUFFER)"})]}),u.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"100Hz RING BUFFER CAPTURE"})]}),u.jsx("div",{className:"space-y-1.5 overflow-x-auto",children:u.jsxs("table",{className:"w-full text-[11px] text-left",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"text-slate-500 border-b border-slate-800",children:[u.jsx("th",{className:"pb-1.5",children:"TIME"}),u.jsx("th",{className:"pb-1.5",children:"PITCH"}),u.jsx("th",{className:"pb-1.5",children:"ROLL"}),u.jsx("th",{className:"pb-1.5",children:"TOTAL TILT"}),u.jsx("th",{className:"pb-1.5",children:"PRESSURE"}),u.jsx("th",{className:"pb-1.5",children:"BATTERY"}),u.jsx("th",{className:"pb-1.5",children:"STATUS"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:o.map((l,c)=>u.jsxs("tr",{className:l.gyro.isDistressTilt?"text-red-300 bg-red-950/20":"",children:[u.jsx("td",{className:"py-1 font-mono text-slate-400",children:l.timestamp.split("T")[1].slice(0,8)}),u.jsxs("td",{className:"py-1",children:[l.gyro.pitch,"°"]}),u.jsxs("td",{className:"py-1",children:[l.gyro.roll,"°"]}),u.jsxs("td",{className:`py-1 font-bold ${l.gyro.isDistressTilt?"text-red-400":"text-slate-200"}`,children:[l.gyro.tiltAngle,"°"]}),u.jsxs("td",{className:"py-1",children:[l.sensors.barometricPressureHpa," hPa"]}),u.jsxs("td",{className:"py-1",children:[l.power.lisocl2CellVoltage,"V"]}),u.jsx("td",{className:"py-1",children:l.gyro.isDistressTilt?u.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-red-600/30 text-red-300 border border-red-500/40 font-bold",children:"OVERRIDE"}):u.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-emerald-600/20 text-emerald-300",children:"NOMINAL"})})]},c))})]})})]})]}),u.jsxs("div",{className:"bg-slate-950 border-t border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-3",children:[u.jsxs("div",{className:"text-xs text-slate-500",children:["SAR Recovery Frequency: ",u.jsx("span",{className:"text-slate-300",children:"121.5 MHz VHF Homing + 406.05 MHz INMCC"})]}),u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wide border border-slate-700 transition-colors",children:"DISARM TEST ANOMALY (RESET NOMINAL)"}),u.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-wide shadow-lg transition-colors",children:"ACKNOWLEDGE & MONITOR"})]})]})]})})},Q1=()=>{const{subsystems:t,selectedHotspotId:e,setSelectedHotspotId:n,currentPacket:i}=mn(),r=i.distress.sasrActive,s=[{id:"core_avionics",title:"Core Avionics",statusText:r?"Distress Override":"Operational",icon:u.jsx(S1,{className:"w-4 h-4 text-tamas-info"}),isOk:!r,hotspotId:"core_avionics"},{id:"sensor_suite",title:"Sensor Array",statusText:"All Sensors Connected",icon:u.jsxs("svg",{className:"w-4 h-4 text-tamas-info",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M12 2a10 10 0 0 0-10 10c0 4.4 2.9 8.2 7 9.5M12 6a6 6 0 0 0-6 6c0 2.6 1.7 4.9 4.2 5.7M12 10a2 2 0 0 0-2 2"}),u.jsx("path",{d:"M12 2a10 10 0 0 1 10 10c0 4.4-2.9 8.2-7 9.5M12 6a6 6 0 0 1 6 6c0 2.6-1.7 4.9-4.2 5.7M12 10a2 2 0 0 1 2 2"})]}),isOk:!0,hotspotId:"sensor_suite"},{id:"power_reservoir",title:"Power System",statusText:"82% Available",icon:u.jsx(m1,{className:"w-4 h-4 text-tamas-info"}),isOk:!0,hotspotId:"power_reservoir"},{id:"telemetry",title:"Telemetry",statusText:"Connected",icon:u.jsx($1,{className:"w-4 h-4 text-tamas-info"}),isOk:!0,hotspotId:"core_avionics"},{id:"pte_suspension",title:"PTE Suspension & Hub",statusText:"Stable",icon:u.jsx(k1,{className:"w-4 h-4 text-tamas-info"}),isOk:!0,hotspotId:"pte_suspension"},{id:"uplink",title:"Telemetry Uplink",statusText:"Data Flowing",icon:u.jsx(W1,{className:"w-4 h-4 text-tamas-info"}),isOk:!0,hotspotId:"core_avionics"}];return u.jsxs("div",{className:"space-y-3.5 flex flex-col h-full select-none",children:[u.jsxs("div",{className:"tamas-card p-4 sm:p-5 flex-1 space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-tamas-border/60 pb-3",children:[u.jsx("h2",{className:"text-sm font-bold tracking-wider text-tamas-text uppercase",children:"SYSTEM HEALTH"}),u.jsx("span",{className:"text-[11px] px-2.5 py-0.5 rounded-full tamas-tag-green font-semibold",children:"ALL SYSTEMS NOMINAL"})]}),u.jsx("div",{className:"space-y-1.5",children:s.map(a=>{const o=e===a.hotspotId;return u.jsxs("button",{onClick:()=>n(a.hotspotId),className:`w-full p-2.5 rounded-lg flex items-center justify-between text-left transition-all border ${o?"bg-[#263847] border-tamas-info/50 shadow-sm":"bg-[#1A2733] border-transparent hover:border-tamas-border/60 hover:bg-[#202E3C]"}`,children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-lg bg-[#202F3B] border border-tamas-border/60 text-tamas-info",children:a.icon}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-semibold text-tamas-text block",children:a.title}),u.jsx("span",{className:`text-[11px] font-medium block ${a.isOk?"text-tamas-operational":"text-tamas-critical"}`,children:a.statusText})]})]}),u.jsx("div",{className:"flex items-center space-x-2",children:u.jsx("span",{className:`w-2 h-2 rounded-full ${a.isOk?"bg-tamas-operational":"bg-tamas-critical animate-pulse"}`})})]},a.id)})}),u.jsx("button",{className:"w-full py-2 rounded-lg bg-[#1A2733] hover:bg-[#243442] border border-tamas-border/50 text-xs font-semibold text-tamas-text transition-colors text-center mt-2 block",children:"View All Systems"})]}),u.jsxs("div",{className:"tamas-card p-4 space-y-2.5",children:[u.jsx("h3",{className:"text-xs font-bold text-tamas-text uppercase tracking-wider border-b border-tamas-border/60 pb-2",children:"SYSTEM SUMMARY"}),u.jsxs("div",{className:"space-y-1.5 text-xs font-mono",children:[u.jsxs("div",{className:"flex justify-between items-center text-tamas-textMuted",children:[u.jsx("span",{className:"font-sans text-[11px]",children:"Operational Uptime"}),u.jsx("span",{className:"font-bold text-tamas-text",children:"34d 16h 22m"})]}),u.jsxs("div",{className:"flex justify-between items-center text-tamas-textMuted",children:[u.jsx("span",{className:"font-sans text-[11px]",children:"Primary Battery"}),u.jsx("span",{className:"font-bold text-tamas-text",children:"3.63 V"})]}),u.jsxs("div",{className:"flex justify-between items-center text-tamas-textMuted",children:[u.jsx("span",{className:"font-sans text-[11px]",children:"Hull Seal"}),u.jsx("span",{className:"font-bold text-tamas-operational",children:"Hermetic PASS"})]}),u.jsxs("div",{className:"flex justify-between items-center text-tamas-textMuted",children:[u.jsx("span",{className:"font-sans text-[11px]",children:"System Integrity"}),u.jsx("span",{className:"font-bold text-tamas-text",children:"98.2%"})]}),u.jsxs("div",{className:"flex justify-between items-center text-tamas-textMuted pt-1 border-t border-tamas-border/30",children:[u.jsx("span",{className:"font-sans text-[11px] text-tamas-warning",children:"Active Alerts"}),u.jsx("span",{className:"font-bold text-tamas-warning",children:"1"})]})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="168",Ds={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eS=0,Lp=1,tS=2,yx=1,Sx=2,vi=3,lr=0,fn=1,oi=2,rr=0,Ls=1,Ip=2,Up=3,Op=4,nS=5,wr=100,iS=101,rS=102,sS=103,aS=104,oS=200,lS=201,cS=202,uS=203,Ad=204,Cd=205,dS=206,hS=207,fS=208,pS=209,mS=210,gS=211,xS=212,vS=213,_S=214,yS=0,SS=1,MS=2,$l=3,ES=4,wS=5,TS=6,bS=7,Mx=0,AS=1,CS=2,sr=0,RS=1,PS=2,NS=3,DS=4,LS=5,IS=6,US=7,Ex=300,Gs=301,Ws=302,Rd=303,Pd=304,_c=306,Nd=1e3,Pr=1001,Dd=1002,Fn=1003,OS=1004,Po=1005,qn=1006,Jc=1007,Nr=1008,Pi=1009,wx=1010,Tx=1011,Ja=1012,sf=1013,Br=1014,Ei=1015,ro=1016,af=1017,of=1018,Xs=1020,bx=35902,Ax=1021,Cx=1022,Kn=1023,Rx=1024,Px=1025,Is=1026,Ys=1027,Nx=1028,lf=1029,Dx=1030,cf=1031,uf=1033,xl=33776,vl=33777,_l=33778,yl=33779,Ld=35840,Id=35841,Ud=35842,Od=35843,Fd=36196,kd=37492,Bd=37496,zd=37808,Hd=37809,Vd=37810,jd=37811,Gd=37812,Wd=37813,Xd=37814,Yd=37815,$d=37816,qd=37817,Kd=37818,Zd=37819,Jd=37820,Qd=37821,Sl=36492,eh=36494,th=36495,Lx=36283,nh=36284,ih=36285,rh=36286,FS=3200,kS=3201,Ix=0,BS=1,Yi="",ri="srgb",fr="srgb-linear",df="display-p3",yc="display-p3-linear",ql="linear",ht="srgb",Kl="rec709",Zl="p3",qr=7680,Fp=519,zS=512,HS=513,VS=514,Ux=515,jS=516,GS=517,WS=518,XS=519,kp=35044,Bp="300 es",wi=2e3,Jl=2001;class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ml=Math.PI/180,sh=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function YS(t,e){return(t%e+e)%e}function Qc(t,e,n){return(1-n)*t+n*e}function ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const $S={DEG2RAD:Ml};class xe{constructor(e=0,n=0){xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],v=i[8],y=r[0],x=r[3],d=r[6],_=r[1],g=r[4],M=r[7],R=r[2],A=r[5],b=r[8];return s[0]=a*y+o*_+l*R,s[3]=a*x+o*g+l*A,s[6]=a*d+o*M+l*b,s[1]=c*y+h*_+p*R,s[4]=c*x+h*g+p*A,s[7]=c*d+h*M+p*b,s[2]=f*y+m*_+v*R,s[5]=f*x+m*g+v*A,s[8]=f*d+m*M+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,m=c*s-a*l,v=n*p+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=p*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(eu.makeScale(e,n)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eu=new ze;function Ox(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qS(){const t=Ql("canvas");return t.style.display="block",t}const zp={};function Da(t){t in zp||(zp[t]=!0,console.warn(t))}function KS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Hp=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vp=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[fr]:{transfer:ql,primaries:Kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ri]:{transfer:ht,primaries:Kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yc]:{transfer:ql,primaries:Zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Vp),fromReference:t=>t.applyMatrix3(Hp)},[df]:{transfer:ht,primaries:Zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Vp),fromReference:t=>t.applyMatrix3(Hp).convertLinearToSRGB()}},ZS=new Set([fr,yc]),it={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ZS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=da[e].toReference,r=da[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return da[t].primaries},getTransfer:function(t){return t===Yi?ql:da[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(da[e].luminanceCoefficients)}};function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class JS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=Ql("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Us(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QS=0;class Fx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(nu(r[a].image)):s.push(nu(r[a]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?JS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;class pn extends Gr{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Pr,r=Pr,s=qn,a=Nr,o=Kn,l=Pi,c=pn.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=so(),this.name="",this.source=new Fx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Ex;pn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],v=l[9],y=l[2],x=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(v+x)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,R=(d+1)/2,A=(h+f)/4,b=(p+y)/4,C=(v+x)/4;return g>M&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=b/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=C/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=C/s),this.set(i,r,s,n),this}let _=Math.sqrt((x-v)*(x-v)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(x-v)/_,this.y=(p-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends Gr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends tM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class kx extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(p!==y||l!==f||c!==m||h!==v){let x=1-o;const d=l*f+c*m+h*v+p*y,_=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const R=Math.sqrt(g),A=Math.atan2(R,d*_);x=Math.sin(x*A)/R,o=Math.sin(o*A)/R}const M=o*_;if(l=l*x+f*M,c=c*x+m*M,h=h*x+v*M,p=p*x+y*M,x===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=R,c*=R,h*=R,p*=R}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*p+l*m-c*f,e[n+1]=l*v+h*f+c*p-o*m,e[n+2]=c*v+h*m+o*f-l*p,e[n+3]=h*v-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"YXZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"ZXY":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"ZYX":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"YZX":this._x=f*h*p+c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p-f*m*v;break;case"XZY":this._x=f*h*p-c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new L,jp=new Hr;class ao{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Do.subVectors(this.max,ha),Zr.subVectors(e.a,ha),Jr.subVectors(e.b,ha),Qr.subVectors(e.c,ha),Oi.subVectors(Jr,Zr),Fi.subVectors(Qr,Jr),mr.subVectors(Zr,Qr);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-mr.z,mr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,mr.z,0,-mr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-mr.y,mr.x,0];return!ru(n,Zr,Jr,Qr,Do)||(n=[1,0,0,0,1,0,0,0,1],!ru(n,Zr,Jr,Qr,Do))?!1:(Lo.crossVectors(Oi,Fi),n=[Lo.x,Lo.y,Lo.z],ru(n,Zr,Jr,Qr,Do))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new L,new L,new L,new L,new L,new L,new L,new L],jn=new L,No=new ao,Zr=new L,Jr=new L,Qr=new L,Oi=new L,Fi=new L,mr=new L,ha=new L,Do=new L,Lo=new L,gr=new L;function ru(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){gr.fromArray(t,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const iM=new ao,fa=new L,su=new L;class oo{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const n=fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(su)),this.expandByPoint(fa.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new L,au=new L,Io=new L,ki=new L,ou=new L,Uo=new L,lu=new L;class lo{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),Io.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Io),o=ki.dot(this.direction),l=-ki.dot(Io),c=ki.lengthSq(),h=Math.abs(1-a*a);let p,f,m,v;if(h>0)if(p=a*l-o,f=a*o-l,v=s*h,p>=0)if(f>=-v)if(f<=v){const y=1/h;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(au).addScaledVector(Io,f),m}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){ou.subVectors(n,e),Uo.subVectors(i,e),lu.crossVectors(ou,Uo);let a=this.direction.dot(lu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(Uo.crossVectors(ki,Uo));if(l<0)return null;const c=o*this.direction.dot(ou.cross(ki));if(c<0||l+c>a)return null;const h=-o*ki.dot(lu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,o,l,c,h,p,f,m,v,y,x){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,f,m,v,y,x)}set(e,n,i,r,s,a,o,l,c,h,p,f,m,v,y,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=v,d[11]=y,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,v=o*h,y=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+v*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,v=c*h,y=c*p;n[0]=f+y*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,v=c*h,y=c*p;n[0]=f-y*o,n[4]=-a*p,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,v=o*h,y=o*p;n[0]=l*h,n[4]=v*c-m,n[8]=f*c+y,n[1]=l*p,n[5]=y*c+f,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,y=o*c;n[0]=l*h,n[4]=y-f*p,n[8]=v*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*p+v,n[10]=f-y*p}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,y=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+y,n[5]=a*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=o*h,n[10]=y*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,sM)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Bi.crossVectors(i,Mn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Bi.crossVectors(i,Mn)),Bi.normalize(),Oo.crossVectors(Mn,Bi),r[0]=Bi.x,r[4]=Oo.x,r[8]=Mn.x,r[1]=Bi.y,r[5]=Oo.y,r[9]=Mn.y,r[2]=Bi.z,r[6]=Oo.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],v=i[2],y=i[6],x=i[10],d=i[14],_=i[3],g=i[7],M=i[11],R=i[15],A=r[0],b=r[4],C=r[8],T=r[12],S=r[1],N=r[5],k=r[9],B=r[13],W=r[2],X=r[6],j=r[10],Z=r[14],I=r[3],$=r[7],Q=r[11],oe=r[15];return s[0]=a*A+o*S+l*W+c*I,s[4]=a*b+o*N+l*X+c*$,s[8]=a*C+o*k+l*j+c*Q,s[12]=a*T+o*B+l*Z+c*oe,s[1]=h*A+p*S+f*W+m*I,s[5]=h*b+p*N+f*X+m*$,s[9]=h*C+p*k+f*j+m*Q,s[13]=h*T+p*B+f*Z+m*oe,s[2]=v*A+y*S+x*W+d*I,s[6]=v*b+y*N+x*X+d*$,s[10]=v*C+y*k+x*j+d*Q,s[14]=v*T+y*B+x*Z+d*oe,s[3]=_*A+g*S+M*W+R*I,s[7]=_*b+g*N+M*X+R*$,s[11]=_*C+g*k+M*j+R*Q,s[15]=_*T+g*B+M*Z+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],v=e[3],y=e[7],x=e[11],d=e[15];return v*(+s*l*p-r*c*p-s*o*f+i*c*f+r*o*m-i*l*m)+y*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+x*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*h-i*c*h)+d*(-r*o*h-n*l*p+n*o*f+r*a*p-i*a*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],v=e[12],y=e[13],x=e[14],d=e[15],_=p*x*c-y*f*c+y*l*m-o*x*m-p*l*d+o*f*d,g=v*f*c-h*x*c-v*l*m+a*x*m+h*l*d-a*f*d,M=h*y*c-v*p*c+v*o*m-a*y*m-h*o*d+a*p*d,R=v*p*l-h*y*l-v*o*f+a*y*f+h*o*x-a*p*x,A=n*_+i*g+r*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=_*b,e[1]=(y*f*s-p*x*s-y*r*m+i*x*m+p*r*d-i*f*d)*b,e[2]=(o*x*s-y*l*s+y*r*c-i*x*c-o*r*d+i*l*d)*b,e[3]=(p*l*s-o*f*s-p*r*c+i*f*c+o*r*m-i*l*m)*b,e[4]=g*b,e[5]=(h*x*s-v*f*s+v*r*m-n*x*m-h*r*d+n*f*d)*b,e[6]=(v*l*s-a*x*s-v*r*c+n*x*c+a*r*d-n*l*d)*b,e[7]=(a*f*s-h*l*s+h*r*c-n*f*c-a*r*m+n*l*m)*b,e[8]=M*b,e[9]=(v*p*s-h*y*s-v*i*m+n*y*m+h*i*d-n*p*d)*b,e[10]=(a*y*s-v*o*s+v*i*c-n*y*c-a*i*d+n*o*d)*b,e[11]=(h*o*s-a*p*s-h*i*c+n*p*c+a*i*m-n*o*m)*b,e[12]=R*b,e[13]=(h*y*r-v*p*r+v*i*f-n*y*f-h*i*x+n*p*x)*b,e[14]=(v*o*r-a*y*r-v*i*l+n*y*l+a*i*x-n*o*x)*b,e[15]=(a*p*r-h*o*r+h*i*l-n*p*l-a*i*f+n*o*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,f=s*c,m=s*h,v=s*p,y=a*h,x=a*p,d=o*p,_=l*c,g=l*h,M=l*p,R=i.x,A=i.y,b=i.z;return r[0]=(1-(y+d))*R,r[1]=(m+M)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(f+d))*A,r[6]=(x+_)*A,r[7]=0,r[8]=(v+g)*b,r[9]=(x-_)*b,r[10]=(1-(f+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=es.set(r[0],r[1],r[2]).length();const a=es.set(r[4],r[5],r[6]).length(),o=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,h=1/a,p=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=p,Gn.elements[9]*=p,Gn.elements[10]*=p,n.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=wi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,v;if(o===wi)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Jl)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=wi){const l=this.elements,c=1/(n-e),h=1/(i-r),p=1/(a-s),f=(n+e)*c,m=(i+r)*h;let v,y;if(o===wi)v=(a+s)*p,y=-2*p;else if(o===Jl)v=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new L,Gn=new pt,rM=new L(0,0,0),sM=new L(1,1,1),Bi=new L,Oo=new L,Mn=new L,Gp=new pt,Wp=new Hr;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aM=0;const Xp=new L,ts=new Hr,mi=new pt,Fo=new L,pa=new L,oM=new L,lM=new Hr,Yp=new L(1,0,0),$p=new L(0,1,0),qp=new L(0,0,1),Kp={type:"added"},cM={type:"removed"},ns={type:"childadded",child:null},cu={type:"childremoved",child:null};class Ht extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new L,n=new di,i=new Hr,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new ze}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Yp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,n){return Xp.copy(e).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fo.copy(e):Fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(pa,Fo,this.up):mi.lookAt(Fo,pa,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(mi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kp),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cM),cu.child=e,this.dispatchEvent(cu),cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kp),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new L(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new L,gi=new L,uu=new L,xi=new L,is=new L,rs=new L,Zp=new L,du=new L,hu=new L,fu=new L;class li{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),gi.subVectors(i,n),uu.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(gi),l=Wn.dot(uu),c=gi.dot(gi),h=gi.dot(uu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),gi.subVectors(e,n),Wn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Wn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),du.subVectors(e,i);const l=is.dot(du),c=rs.dot(du);if(l<=0&&c<=0)return n.copy(i);hu.subVectors(e,r);const h=is.dot(hu),p=rs.dot(hu);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(is,a);fu.subVectors(e,s);const m=is.dot(fu),v=rs.dot(fu);if(v>=0&&m<=v)return n.copy(s);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(rs,o);const x=h*v-m*p;if(x<=0&&p-h>=0&&m-v>=0)return Zp.subVectors(s,r),o=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(Zp,o);const d=1/(x+y+f);return a=y*d,o=f*d,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=YS(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=pu(a,s,e+1/3),this.g=pu(a,s,e),this.b=pu(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=ri){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const i=Bx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=tu(e.r),this.g=tu(e.g),this.b=tu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return it.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Gt(Kt.r*255,0,255))*65536+Math.round(Gt(Kt.g*255,0,255))*256+Math.round(Gt(Kt.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=ri){it.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(ko);const i=Qc(zi.h,ko.h,n),r=Qc(zi.s,ko.s,n),s=Qc(zi.l,ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new We;We.NAMES=Bx;let uM=0;class Wr extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Ls,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zx extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new L,Bo=new xe;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Da("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bo.fromBufferAttribute(this,n),Bo.applyMatrix3(e),this.setXY(n,Bo.x,Bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ua(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ua(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ua(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ua(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ua(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kp&&(e.usage=this.usage),e}}class Hx extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vx extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nt extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let dM=0;const Nn=new pt,mu=new Ht,ss=new L,En=new ao,ma=new ao,kt=new L;class gn extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?Vx:Hx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(En.min,ma.min),En.expandByPoint(kt),kt.addVectors(En.max,ma.max),En.expandByPoint(kt)):(En.expandByPoint(ma.min),En.expandByPoint(ma.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),kt.add(ss)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new L,l[C]=new L;const c=new L,h=new L,p=new L,f=new xe,m=new xe,v=new xe,y=new L,x=new L;function d(C,T,S){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,S),f.fromBufferAttribute(s,C),m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,S),h.sub(c),p.sub(c),m.sub(f),v.sub(f);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(N),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(N),o[C].add(y),o[T].add(y),o[S].add(y),l[C].add(x),l[T].add(x),l[S].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,T=_.length;C<T;++C){const S=_[C],N=S.start,k=S.count;for(let B=N,W=N+k;B<W;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const g=new L,M=new L,R=new L,A=new L;function b(C){R.fromBufferAttribute(r,C),A.copy(R);const T=o[C];g.copy(T),g.sub(R.multiplyScalar(R.dot(T))).normalize(),M.crossVectors(A,T);const N=M.dot(l[C])<0?-1:1;a.setXYZW(C,g.x,g.y,g.z,N)}for(let C=0,T=_.length;C<T;++C){const S=_[C],N=S.start,k=S.count;for(let B=N,W=N+k;B<W;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,p=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),y=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let y=0,x=l.length;y<x;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let d=0;d<h;d++)f[v++]=c[m++]}return new Qn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jp=new pt,xr=new lo,zo=new oo,Qp=new L,as=new L,os=new L,ls=new L,gu=new L,Ho=new L,Vo=new xe,jo=new xe,Go=new xe,em=new L,tm=new L,nm=new L,Wo=new L,Xo=new L;class at extends Ht{constructor(e=new gn,n=new zx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ho.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(gu.fromBufferAttribute(p,e),a?Ho.addScaledVector(gu,h):Ho.addScaledVector(gu.sub(n),h))}n.add(Ho)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(zo.containsPoint(xr.origin)===!1&&(xr.intersectSphere(zo,Qp)===null||xr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Jp.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Jp),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const x=f[v],d=a[x.materialIndex],_=Math.max(x.start,m.start),g=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let M=_,R=g;M<R;M+=3){const A=o.getX(M),b=o.getX(M+1),C=o.getX(M+2);r=Yo(this,d,e,i,c,h,p,A,b,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let x=v,d=y;x<d;x+=3){const _=o.getX(x),g=o.getX(x+1),M=o.getX(x+2);r=Yo(this,a,e,i,c,h,p,_,g,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const x=f[v],d=a[x.materialIndex],_=Math.max(x.start,m.start),g=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=_,R=g;M<R;M+=3){const A=M,b=M+1,C=M+2;r=Yo(this,d,e,i,c,h,p,A,b,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let x=v,d=y;x<d;x+=3){const _=x,g=x+1,M=x+2;r=Yo(this,a,e,i,c,h,p,_,g,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function hM(t,e,n,i,r,s,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;Xo.copy(o),Xo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Xo);return c<n.near||c>n.far?null:{distance:c,point:Xo.clone(),object:t}}function Yo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,as),t.getVertexPosition(l,os),t.getVertexPosition(c,ls);const h=hM(t,e,n,i,as,os,ls,Wo);if(h){r&&(Vo.fromBufferAttribute(r,o),jo.fromBufferAttribute(r,l),Go.fromBufferAttribute(r,c),h.uv=li.getInterpolation(Wo,as,os,ls,Vo,jo,Go,new xe)),s&&(Vo.fromBufferAttribute(s,o),jo.fromBufferAttribute(s,l),Go.fromBufferAttribute(s,c),h.uv1=li.getInterpolation(Wo,as,os,ls,Vo,jo,Go,new xe)),a&&(em.fromBufferAttribute(a,o),tm.fromBufferAttribute(a,l),nm.fromBufferAttribute(a,c),h.normal=li.getInterpolation(Wo,as,os,ls,em,tm,nm,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new L,materialIndex:0};li.getNormal(as,os,ls,p.normal),h.face=p}return h}class co extends gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(p,2));function v(y,x,d,_,g,M,R,A,b,C,T){const S=M/b,N=R/C,k=M/2,B=R/2,W=A/2,X=b+1,j=C+1;let Z=0,I=0;const $=new L;for(let Q=0;Q<j;Q++){const oe=Q*N-B;for(let ye=0;ye<X;ye++){const Ye=ye*S-k;$[y]=Ye*_,$[x]=oe*g,$[d]=W,c.push($.x,$.y,$.z),$[y]=0,$[x]=0,$[d]=A>0?1:-1,h.push($.x,$.y,$.z),p.push(ye/b),p.push(1-Q/C),Z+=1}}for(let Q=0;Q<C;Q++)for(let oe=0;oe<b;oe++){const ye=f+oe+X*Q,Ye=f+oe+X*(Q+1),G=f+(oe+1)+X*(Q+1),q=f+(oe+1)+X*Q;l.push(ye,Ye,q),l.push(Ye,G,q),I+=6}o.addGroup(m,I,T),m+=I,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function fM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const pM={clone:$s,merge:Qt};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Gx extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new L,im=new xe,rm=new xe;class Un extends Gx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sh*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ml*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class xM extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new Un(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new Un(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new Un(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new Un(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new Un(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Wx extends pn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new co(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:rr});s.uniforms.tEquirect.value=n;const a=new at(r,s),o=n.minFilter;return n.minFilter===Nr&&(n.minFilter=qn),new xM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const xu=new L,_M=new L,yM=new ze;class Gi{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xu.subVectors(i,n).cross(_M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yM.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new oo,$o=new L;class ff{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,a=new Gi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],p=r[6],f=r[7],m=r[8],v=r[9],y=r[10],x=r[11],d=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,x-m,M-d).normalize(),i[1].setComponents(l+s,f+c,x+m,M+d).normalize(),i[2].setComponents(l+a,f+h,x+v,M+_).normalize(),i[3].setComponents(l-a,f-h,x-v,M-_).normalize(),i[4].setComponents(l-o,f-p,x-y,M-g).normalize(),n===wi)i[5].setComponents(l+o,f+p,x+y,M+g).normalize();else if(n===Jl)i[5].setComponents(o,p,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($o.x=r.normal.x>0?e.max.x:e.min.x,$o.y=r.normal.y>0?e.max.y:e.min.y,$o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SM(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,o),p.count===-1&&f.length===0&&t.bufferSubData(c,0,h),f.length!==0){for(let m=0,v=f.length;m<v;m++){const y=f[m];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(c,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class uo extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=n/l,m=[],v=[],y=[],x=[];for(let d=0;d<h;d++){const _=d*f-a;for(let g=0;g<c;g++){const M=g*p-s;v.push(M,-_,0),y.push(0,0,1),x.push(g/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const g=_+c*d,M=_+c*(d+1),R=_+1+c*(d+1),A=_+1+c*d;m.push(g,M,A),m.push(M,R,A)}this.setIndex(m),this.setAttribute("position",new Nt(v,3)),this.setAttribute("normal",new Nt(y,3)),this.setAttribute("uv",new Nt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var MM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,z2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:MM,alphahash_pars_fragment:EM,alphamap_fragment:wM,alphamap_pars_fragment:TM,alphatest_fragment:bM,alphatest_pars_fragment:AM,aomap_fragment:CM,aomap_pars_fragment:RM,batching_pars_vertex:PM,batching_vertex:NM,begin_vertex:DM,beginnormal_vertex:LM,bsdfs:IM,iridescence_fragment:UM,bumpmap_pars_fragment:OM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:zM,color_fragment:HM,color_pars_fragment:VM,color_pars_vertex:jM,color_vertex:GM,common:WM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:YM,displacementmap_pars_vertex:$M,displacementmap_vertex:qM,emissivemap_fragment:KM,emissivemap_pars_fragment:ZM,colorspace_fragment:JM,colorspace_pars_fragment:QM,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:pE,envmap_vertex:rE,fog_vertex:sE,fog_pars_vertex:aE,fog_fragment:oE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:hE,lights_pars_begin:fE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:xE,lights_phong_pars_fragment:vE,lights_physical_fragment:_E,lights_physical_pars_fragment:yE,lights_fragment_begin:SE,lights_fragment_maps:ME,lights_fragment_end:EE,logdepthbuf_fragment:wE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:AE,map_fragment:CE,map_pars_fragment:RE,map_particle_fragment:PE,map_particle_pars_fragment:NE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:LE,morphinstance_vertex:IE,morphcolor_vertex:UE,morphnormal_vertex:OE,morphtarget_pars_vertex:FE,morphtarget_vertex:kE,normal_fragment_begin:BE,normal_fragment_maps:zE,normal_pars_fragment:HE,normal_pars_vertex:VE,normal_vertex:jE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:WE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:YE,iridescence_pars_fragment:$E,opaque_fragment:qE,packing:KE,premultiplied_alpha_fragment:ZE,project_vertex:JE,dithering_fragment:QE,dithering_pars_fragment:e2,roughnessmap_fragment:t2,roughnessmap_pars_fragment:n2,shadowmap_pars_fragment:i2,shadowmap_pars_vertex:r2,shadowmap_vertex:s2,shadowmask_pars_fragment:a2,skinbase_vertex:o2,skinning_pars_vertex:l2,skinning_vertex:c2,skinnormal_vertex:u2,specularmap_fragment:d2,specularmap_pars_fragment:h2,tonemapping_fragment:f2,tonemapping_pars_fragment:p2,transmission_fragment:m2,transmission_pars_fragment:g2,uv_pars_fragment:x2,uv_pars_vertex:v2,uv_vertex:_2,worldpos_vertex:y2,background_vert:S2,background_frag:M2,backgroundCube_vert:E2,backgroundCube_frag:w2,cube_vert:T2,cube_frag:b2,depth_vert:A2,depth_frag:C2,distanceRGBA_vert:R2,distanceRGBA_frag:P2,equirect_vert:N2,equirect_frag:D2,linedashed_vert:L2,linedashed_frag:I2,meshbasic_vert:U2,meshbasic_frag:O2,meshlambert_vert:F2,meshlambert_frag:k2,meshmatcap_vert:B2,meshmatcap_frag:z2,meshnormal_vert:H2,meshnormal_frag:V2,meshphong_vert:j2,meshphong_frag:G2,meshphysical_vert:W2,meshphysical_frag:X2,meshtoon_vert:Y2,meshtoon_frag:$2,points_vert:q2,points_frag:K2,shadow_vert:Z2,shadow_frag:J2,sprite_vert:Q2,sprite_frag:ew},ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},si={basic:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Qt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Qt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Qt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Qt([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Qt([ce.lights,ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};si.physical={uniforms:Qt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const qo={r:0,b:0,g:0},_r=new di,tw=new pt;function nw(t,e,n,i,r,s,a){const o=new We(0);let l=s===!0?0:1,c,h,p=null,f=0,m=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const M=v(_);M===null?d(o,l):M&&M.isColor&&(d(M,1),g=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===_c)?(h===void 0&&(h=new at(new co(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:$s(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),_r.copy(g.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tw.makeRotationFromEuler(_r)),h.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,(p!==M||f!==M.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=M,f=M.version,m=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new at(new uo(2,2),new cr({name:"BackgroundMaterial",uniforms:$s(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||f!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,f=M.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,g){_.getRGB(qo,jx(t)),i.buffers.color.setClear(qo.r,qo.g,qo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(_,g=1){o.set(_),l=g,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:y,addToRenderList:x}}function iw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,N,k,B,W){let X=!1;const j=p(B,k,N);s!==j&&(s=j,c(s.object)),X=m(S,B,k,W),X&&v(S,B,k,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(S,N,k,B),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function p(S,N,k){const B=k.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let X=W[N.id];X===void 0&&(X={},W[N.id]=X);let j=X[B];return j===void 0&&(j=f(l()),X[B]=j),j}function f(S){const N=[],k=[],B=[];for(let W=0;W<n;W++)N[W]=0,k[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:B,object:S,attributes:{},index:null}}function m(S,N,k,B){const W=s.attributes,X=N.attributes;let j=0;const Z=k.getAttributes();for(const I in Z)if(Z[I].location>=0){const Q=W[I];let oe=X[I];if(oe===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function v(S,N,k,B){const W={},X=N.attributes;let j=0;const Z=k.getAttributes();for(const I in Z)if(Z[I].location>=0){let Q=X[I];Q===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),W[I]=oe,j++}s.attributes=W,s.attributesNum=j,s.index=B}function y(){const S=s.newAttributes;for(let N=0,k=S.length;N<k;N++)S[N]=0}function x(S){d(S,0)}function d(S,N){const k=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;k[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),W[S]!==N&&(t.vertexAttribDivisor(S,N),W[S]=N)}function _(){const S=s.newAttributes,N=s.enabledAttributes;for(let k=0,B=N.length;k<B;k++)N[k]!==S[k]&&(t.disableVertexAttribArray(k),N[k]=0)}function g(S,N,k,B,W,X,j){j===!0?t.vertexAttribIPointer(S,N,k,W,X):t.vertexAttribPointer(S,N,k,B,W,X)}function M(S,N,k,B){y();const W=B.attributes,X=k.getAttributes(),j=N.defaultAttributeValues;for(const Z in X){const I=X[Z];if(I.location>=0){let $=W[Z];if($===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const Q=$.normalized,oe=$.itemSize,ye=e.get($);if(ye===void 0)continue;const Ye=ye.buffer,G=ye.type,q=ye.bytesPerElement,le=G===t.INT||G===t.UNSIGNED_INT||$.gpuType===sf;if($.isInterleavedBufferAttribute){const de=$.data,Te=de.stride,Ie=$.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<I.locationSize;Oe++)d(I.location+Oe,de.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<I.locationSize;Oe++)x(I.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let Oe=0;Oe<I.locationSize;Oe++)g(I.location+Oe,oe/I.locationSize,G,Q,Te*q,(Ie+oe/I.locationSize*Oe)*q,le)}else{if($.isInstancedBufferAttribute){for(let de=0;de<I.locationSize;de++)d(I.location+de,$.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<I.locationSize;de++)x(I.location+de);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let de=0;de<I.locationSize;de++)g(I.location+de,oe/I.locationSize,G,Q,oe*q,oe/I.locationSize*de*q,le)}}else if(j!==void 0){const Q=j[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(I.location,Q);break;case 3:t.vertexAttrib3fv(I.location,Q);break;case 4:t.vertexAttrib4fv(I.location,Q);break;default:t.vertexAttrib1fv(I.location,Q)}}}}_()}function R(){C();for(const S in i){const N=i[S];for(const k in N){const B=N[k];for(const W in B)h(B[W].object),delete B[W];delete N[k]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const k in N){const B=N[k];for(const W in B)h(B[W].object),delete B[W];delete N[k]}delete i[S.id]}function b(S){for(const N in i){const k=i[N];if(k[S.id]===void 0)continue;const B=k[S.id];for(const W in B)h(B[W].object),delete B[W];delete k[S.id]}}function C(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:x,disableUnusedAttributes:_}}function rw(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,p){p!==0&&(t.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function o(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let m=0;for(let v=0;v<p;v++)m+=h[v];n.update(m,i,1)}function l(c,h,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,p);let v=0;for(let y=0;y<p;y++)v+=h[y];for(let y=0;y<f.length;y++)n.update(v,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Kn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ei&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:M,maxSamples:R}}function aw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Gi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,y=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!r||v===null||v.length===0||s&&!x)s?h(null):c();else{const _=s?0:i,g=_*4;let M=d.clippingState||null;l.value=M,M=h(v,f,g,m);for(let R=0;R!==g;++R)M[R]=n[R];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,v){const y=p!==null?p.length:0;let x=null;if(y!==0){if(x=l.value,v!==!0||x===null){const d=m+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(x===null||x.length<d)&&(x=new Float32Array(d));for(let g=0,M=m;g!==y;++g,M+=4)a.copy(p[g]).applyMatrix4(_,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function ow(t){let e=new WeakMap;function n(a,o){return o===Rd?a.mapping=Gs:o===Pd&&(a.mapping=Ws),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rd||o===Pd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yx extends Gx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,sm=[.125,.215,.35,.446,.526,.582],Tr=20,vu=new Yx,am=new We;let _u=null,yu=0,Su=0,Mu=!1;const Er=(1+Math.sqrt(5))/2,ds=1/Er,om=[new L(-Er,ds,0),new L(Er,ds,0),new L(-ds,0,Er),new L(ds,0,Er),new L(0,Er,-ds),new L(0,Er,ds),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class lm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,yu,Su),this._renderer.xr.enabled=Mu,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ro,format:Kn,colorSpace:fr,depthBuffer:!1},r=cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lw(s)),this._blurMaterial=cw(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,vu)}_sceneToCubeUV(e,n,i,r){const o=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(am),h.toneMapping=sr,h.autoClear=!1;const m=new zx({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new at(new co,m);let y=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,y=!0):(m.color.copy(am),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const g=this._cubeSize;Ko(r,_*g,d>2?g:0,g,g),h.setRenderTarget(r),y&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ko(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,vu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=om[(r-s-1)%om.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new at(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Tr-1),y=s/v,x=isFinite(s)?1+Math.floor(h*y):Tr;x>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Tr}`);const d=[];let _=0;for(let b=0;b<Tr;++b){const C=b/y,T=Math.exp(-C*C/2);d.push(T),b===0?_+=T:b<x&&(_+=2*T)}for(let b=0;b<d.length;b++)d[b]=d[b]/_;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const M=this._sizeLods[r],R=3*M*(r>g-Ts?r-g+Ts:0),A=4*(this._cubeSize-M);Ko(n,R,A,3*M,2*M),l.setRenderTarget(n),l.render(p,vu)}}function lw(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+sm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ts?l=sm[a-t+Ts-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,y=3,x=2,d=1,_=new Float32Array(y*v*m),g=new Float32Array(x*v*m),M=new Float32Array(d*v*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,C=A>2?0:-1,T=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];_.set(T,y*v*A),g.set(f,x*v*A);const S=[A,A,A,A,A,A];M.set(S,d*v*A)}const R=new gn;R.setAttribute("position",new Qn(_,y)),R.setAttribute("uv",new Qn(g,x)),R.setAttribute("faceIndex",new Qn(M,d)),e.push(R),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function cm(t,e,n){const i=new zr(t,e,n);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ko(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cw(t,e,n){const i=new Float32Array(Tr),r=new L(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function um(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function dm(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function pf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rd||l===Pd,h=l===Gs||l===Ws;if(c||h){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new lm(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new lm(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function dw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Da("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hw(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let x=0,d=y.length;x<d;x++)e.remove(y[x])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const y=m[v];for(let x=0,d=y.length;x<d;x++)e.update(y[x],t.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,v=p.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let g=0,M=_.length;g<M;g+=3){const R=_[g+0],A=_[g+1],b=_[g+2];f.push(R,A,A,b,b,R)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const R=g+0,A=g+1,b=g+2;f.push(R,A,A,b,b,R)}}else return;const x=new(Ox(f)?Vx:Hx)(f,1);x.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,x)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function fw(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,f*a,v),n.update(m,i,v))}function h(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,v);let x=0;for(let d=0;d<v;d++)x+=m[d];n.update(x,i,1)}function p(f,m,v,y){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],y[d]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,y,0,v);let d=0;for(let _=0;_<v;_++)d+=m[_];for(let _=0;_<y.length;_++)n.update(d,i,y[_])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function pw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mw(t,e,n){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),x===!0&&(M=3);let R=o.attributes.position.count*M,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*A*4*p),C=new kx(b,R,A,p);C.type=Ei,C.needsUpdate=!0;const T=M*4;for(let N=0;N<p;N++){const k=d[N],B=_[N],W=g[N],X=R*A*4*N;for(let j=0;j<k.count;j++){const Z=j*T;v===!0&&(r.fromBufferAttribute(k,j),b[X+Z+0]=r.x,b[X+Z+1]=r.y,b[X+Z+2]=r.z,b[X+Z+3]=0),y===!0&&(r.fromBufferAttribute(B,j),b[X+Z+4]=r.x,b[X+Z+5]=r.y,b[X+Z+6]=r.z,b[X+Z+7]=0),x===!0&&(r.fromBufferAttribute(W,j),b[X+Z+8]=r.x,b[X+Z+9]=r.y,b[X+Z+10]=r.z,b[X+Z+11]=W.itemSize===4?r.w:1)}}f={count:p,texture:C,size:new xe(R,A)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let x=0;x<c.length;x++)v+=c[x];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function gw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class $x extends pn{constructor(e,n,i,r,s,a,o,l,c,h=Is){if(h!==Is&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Is&&(i=Br),i===void 0&&h===Ys&&(i=Xs),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qx=new pn,hm=new $x(1,1),Kx=new kx,Zx=new nM,Jx=new Wx,fm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),xm=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=fm[r];if(s===void 0&&(s=new Float32Array(r),fm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sc(t,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),Ft(n,i)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;gm.set(i),t.uniformMatrix3fv(this.addr,!1,gm),Ft(n,i)}}function Ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;mm.set(i),t.uniformMatrix4fv(this.addr,!1,mm),Ft(n,i)}}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function Cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(hm.compareFunction=Ux,s=hm):s=qx,n.setTexture2D(e||s,r)}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Zx,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jx,r)}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Kx,r)}function Ow(t){switch(t){case 5126:return xw;case 35664:return vw;case 35665:return _w;case 35666:return yw;case 35674:return Sw;case 35675:return Mw;case 35676:return Ew;case 5124:case 35670:return ww;case 35667:case 35671:return Tw;case 35668:case 35672:return bw;case 35669:case 35673:return Aw;case 5125:return Cw;case 36294:return Rw;case 36295:return Pw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Uw}}function Fw(t,e){t.uniform1fv(this.addr,e)}function kw(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function Bw(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function zw(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function Hw(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Vw(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jw(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Gw(t,e){t.uniform1iv(this.addr,e)}function Ww(t,e){t.uniform2iv(this.addr,e)}function Xw(t,e){t.uniform3iv(this.addr,e)}function Yw(t,e){t.uniform4iv(this.addr,e)}function $w(t,e){t.uniform1uiv(this.addr,e)}function qw(t,e){t.uniform2uiv(this.addr,e)}function Kw(t,e){t.uniform3uiv(this.addr,e)}function Zw(t,e){t.uniform4uiv(this.addr,e)}function Jw(t,e,n){const i=this.cache,r=e.length,s=Sc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||qx,s[a])}function Qw(t,e,n){const i=this.cache,r=e.length,s=Sc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Zx,s[a])}function eT(t,e,n){const i=this.cache,r=e.length,s=Sc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Jx,s[a])}function tT(t,e,n){const i=this.cache,r=e.length,s=Sc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Kx,s[a])}function nT(t){switch(t){case 5126:return Fw;case 35664:return kw;case 35665:return Bw;case 35666:return zw;case 35674:return Hw;case 35675:return Vw;case 35676:return jw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return Yw;case 5125:return $w;case 36294:return qw;case 36295:return Kw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ow(n.type)}}class rT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nT(n.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function vm(t,e){t.seq.push(e),t.map[e.id]=e}function aT(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),a=Eu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vm(n,c===void 0?new iT(o,t,e):new rT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new sT(o),vm(n,p)),n=p}}}class El{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);aT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function _m(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oT=37297;let lT=0;function cT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function uT(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Zl&&n===Kl?i="LinearDisplayP3ToLinearSRGB":e===Kl&&n===Zl&&(i="LinearSRGBToLinearDisplayP3"),t){case fr:case yc:return[i,"LinearTransferOETF"];case ri:case df:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+cT(t.getShaderSource(e),a)}else return r}function dT(t,e){const n=uT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hT(t,e){let n;switch(e){case RS:n="Linear";break;case PS:n="Reinhard";break;case NS:n="Cineon";break;case DS:n="ACESFilmic";break;case IS:n="AgX";break;case US:n="Neutral";break;case LS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zo=new L;function fT(){it.getLuminanceCoefficients(Zo);const t=Zo.x.toFixed(4),e=Zo.y.toFixed(4),n=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function mT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Sa(t){return t!==""}function Sm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(t){return t.replace(xT,_T)}const vT=new Map;function _T(t,e){let n=Be[e];if(n===void 0){const i=vT.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ah(n)}const yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(t){return t.replace(yT,ST)}function ST(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function ET(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function TT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Mx:e="ENVMAP_BLENDING_MULTIPLY";break;case AS:e="ENVMAP_BLENDING_MIX";break;case CS:e="ENVMAP_BLENDING_ADD";break}return e}function bT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=MT(n),c=ET(n),h=wT(n),p=TT(n),f=bT(n),m=pT(n),v=mT(s),y=r.createProgram();let x,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Sa).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Sa).join(`
`),d.length>0&&(d+=`
`)):(x=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),d=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Be.tonemapping_pars_fragment:"",n.toneMapping!==sr?hT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,dT("linearToOutputTexel",n.outputColorSpace),fT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sa).join(`
`)),a=ah(a),a=Sm(a,n),a=Mm(a,n),o=ah(o),o=Sm(o,n),o=Mm(o,n),a=Em(a),o=Em(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===Bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=_+x+a,M=_+d+o,R=_m(r,r.VERTEX_SHADER,g),A=_m(r,r.FRAGMENT_SHADER,M);r.attachShader(y,R),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(N){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(A).trim();let X=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,A);else{const Z=ym(r,R,"vertex"),I=ym(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+Z+`
`+I)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(j=!1);j&&(N.diagnostics={runnable:X,programLog:k,vertexShader:{log:B,prefix:x},fragmentShader:{log:W,prefix:d}})}r.deleteShader(R),r.deleteShader(A),C=new El(r,y),T=gT(r,y)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,oT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=A,this}let CT=0;class RT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new PT(e),n.set(e,i)),i}}class PT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function NT(t,e,n,i,r,s,a){const o=new hf,l=new RT,c=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function x(T,S,N,k,B){const W=k.fog,X=B.geometry,j=T.isMeshStandardMaterial?k.environment:null,Z=(T.isMeshStandardMaterial?n:e).get(T.envMap||j),I=Z&&Z.mapping===_c?Z.image.height:null,$=v[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=Q!==void 0?Q.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Ye,G,q,le;if($){const qe=si[$];Ye=qe.vertexShader,G=qe.fragmentShader}else Ye=T.vertexShader,G=T.fragmentShader,l.update(T),q=l.getVertexShaderID(T),le=l.getFragmentShaderID(T);const de=t.getRenderTarget(),Te=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,Oe=!!T.map,lt=!!T.matcap,D=!!Z,_t=!!T.aoMap,$e=!!T.lightMap,Qe=!!T.bumpMap,Se=!!T.normalMap,yt=!!T.displacementMap,be=!!T.emissiveMap,Ue=!!T.metalnessMap,P=!!T.roughnessMap,E=T.anisotropy>0,H=T.clearcoat>0,J=T.dispersion>0,te=T.iridescence>0,ee=T.sheen>0,Ee=T.transmission>0,ue=E&&!!T.anisotropyMap,me=H&&!!T.clearcoatMap,Ne=H&&!!T.clearcoatNormalMap,ie=H&&!!T.clearcoatRoughnessMap,pe=te&&!!T.iridescenceMap,He=te&&!!T.iridescenceThicknessMap,Re=ee&&!!T.sheenColorMap,he=ee&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Fe=!!T.specularColorMap,st=!!T.specularIntensityMap,U=Ee&&!!T.transmissionMap,re=Ee&&!!T.thicknessMap,Y=!!T.gradientMap,K=!!T.alphaMap,se=T.alphaTest>0,Ae=!!T.alphaHash,Ve=!!T.extensions;let St=sr;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(St=t.toneMapping);const At={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:Ye,fragmentShader:G,defines:T.defines,customVertexShaderID:q,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:Te,instancingColor:Te&&B.instanceColor!==null,instancingMorph:Te&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:fr,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:lt,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:I,aoMap:_t,lightMap:$e,bumpMap:Qe,normalMap:Se,displacementMap:f&&yt,emissiveMap:be,normalMapObjectSpace:Se&&T.normalMapType===BS,normalMapTangentSpace:Se&&T.normalMapType===Ix,metalnessMap:Ue,roughnessMap:P,anisotropy:E,anisotropyMap:ue,clearcoat:H,clearcoatMap:me,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ie,dispersion:J,iridescence:te,iridescenceMap:pe,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:Re,sheenRoughnessMap:he,specularMap:Le,specularColorMap:Fe,specularIntensityMap:st,transmission:Ee,transmissionMap:U,thicknessMap:re,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Ls&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:se,alphaHash:Ae,combine:T.combine,mapUv:Oe&&y(T.map.channel),aoMapUv:_t&&y(T.aoMap.channel),lightMapUv:$e&&y(T.lightMap.channel),bumpMapUv:Qe&&y(T.bumpMap.channel),normalMapUv:Se&&y(T.normalMap.channel),displacementMapUv:yt&&y(T.displacementMap.channel),emissiveMapUv:be&&y(T.emissiveMap.channel),metalnessMapUv:Ue&&y(T.metalnessMap.channel),roughnessMapUv:P&&y(T.roughnessMap.channel),anisotropyMapUv:ue&&y(T.anisotropyMap.channel),clearcoatMapUv:me&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:He&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:he&&y(T.sheenRoughnessMap.channel),specularMapUv:Le&&y(T.specularMap.channel),specularColorMapUv:Fe&&y(T.specularColorMap.channel),specularIntensityMapUv:st&&y(T.specularIntensityMap.channel),transmissionMapUv:U&&y(T.transmissionMap.channel),thicknessMapUv:re&&y(T.thicknessMap.channel),alphaMapUv:K&&y(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Se||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Oe||K),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&it.getTransfer(T.map.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===oi,flipSided:T.side===fn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)S.push(N),S.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(_(S,T),g(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function g(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),T.push(o.mask)}function M(T){const S=v[T.type];let N;if(S){const k=si[S];N=pM.clone(k.uniforms)}else N=T.uniforms;return N}function R(T,S){let N;for(let k=0,B=h.length;k<B;k++){const W=h[k];if(W.cacheKey===S){N=W,++N.usedTimes;break}}return N===void 0&&(N=new AT(t,S,T,s),h.push(N)),N}function A(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function C(){l.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:M,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:C}}function DT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function LT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,m,v,y,x){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:y,group:x},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=p.renderOrder,d.z=y,d.group=x),e++,d}function o(p,f,m,v,y,x){const d=a(p,f,m,v,y,x);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(p,f,m,v,y,x){const d=a(p,f,m,v,y,x);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,f){n.length>1&&n.sort(p||LT),i.length>1&&i.sort(f||Tm),r.length>1&&r.sort(f||Tm)}function h(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function IT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new bm,t.set(i,[a])):r>=s.length?(a=new bm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function UT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new We};break;case"SpotLight":n={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function OT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FT=0;function kT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BT(t){const e=new UT,n=OT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new pt,a=new pt;function o(c){let h=0,p=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,v=0,y=0,x=0,d=0,_=0,g=0,M=0,R=0,A=0,b=0;c.sort(kT);for(let T=0,S=c.length;T<S;T++){const N=c[T],k=N.color,B=N.intensity,W=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=k.r*B,p+=k.g*B,f+=k.b*B;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],B);b++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Z=N.shadow,I=n.get(N);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=N.shadow.matrix,_++}i.directional[m]=j,m++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(B),j.distance=W,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[y]=j;const Z=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,Z.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[y]=Z.matrix,N.castShadow){const I=n.get(N);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=X,M++}y++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(k).multiplyScalar(B),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=j,x++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const Z=N.shadow,I=n.get(N);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=X,i.pointShadowMatrix[v]=N.shadow.matrix,g++}i.point[v]=j,v++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(B),j.groundColor.copy(N.groundColor).multiplyScalar(B),i.hemi[d]=j,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==m||C.pointLength!==v||C.spotLength!==y||C.rectAreaLength!==x||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==g||C.numSpotShadows!==M||C.numSpotMaps!==R||C.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=x,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,C.directionalLength=m,C.pointLength=v,C.spotLength=y,C.rectAreaLength=x,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=g,C.numSpotShadows=M,C.numSpotMaps=R,C.numLightProbes=b,i.version=FT++)}function l(c,h){let p=0,f=0,m=0,v=0,y=0;const x=h.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const g=c[d];if(g.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),p++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),m++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(g.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(g.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(x),f++}else if(g.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(x),y++}}}return{setup:o,setupView:l,state:i}}function Am(t){const e=new BT(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function zT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Am(t),e.set(r,[o])):s>=a.length?(o=new Am(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class HT extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VT extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WT(t,e,n){let i=new ff;const r=new xe,s=new xe,a=new It,o=new HT({depthPacking:kS}),l=new VT,c={},h=n.maxTextureSize,p={[lr]:fn,[fn]:lr,[oi]:oi},f=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:jT,fragmentShader:GT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new gn;v.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(v,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yx;let d=this.type;this.render=function(A,b,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),k=t.state;k.setBlending(rr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=d!==vi&&this.type===vi,W=d===vi&&this.type!==vi;for(let X=0,j=A.length;X<j;X++){const Z=A[X],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const $=I.getFrameExtents();if(r.multiply($),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,I.mapSize.y=s.y)),I.map===null||B===!0||W===!0){const oe=this.type!==vi?{minFilter:Fn,magFilter:Fn}:{};I.map!==null&&I.map.dispose(),I.map=new zr(r.x,r.y,oe),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Q=I.getViewportCount();for(let oe=0;oe<Q;oe++){const ye=I.getViewport(oe);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),k.viewport(a),I.updateMatrices(Z,oe),i=I.getFrustum(),M(b,C,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===vi&&_(I,C),I.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(T,S,N)};function _(A,b){const C=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,C,f,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,C,m,y,null)}function g(A,b,C,T){let S=null;const N=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)S=N;else if(S=C.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=S.uuid,B=b.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let X=W[B];X===void 0&&(X=S.clone(),W[B]=X,b.addEventListener("dispose",R)),S=X}if(S.visible=b.visible,S.wireframe=b.wireframe,T===vi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:p[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=t.properties.get(S);k.light=C}return S}function M(A,b,C,T,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const X=B.groups;for(let j=0,Z=X.length;j<Z;j++){const I=X[j],$=W[I.materialIndex];if($&&$.visible){const Q=g(A,$,T,S);A.onBeforeShadow(t,A,b,C,B,Q,I),t.renderBufferDirect(C,null,B,Q,A,I),A.onAfterShadow(t,A,b,C,B,Q,I)}}}else if(W.visible){const X=g(A,W,T,S);A.onBeforeShadow(t,A,b,C,B,X,null),t.renderBufferDirect(C,null,B,X,A,null),A.onAfterShadow(t,A,b,C,B,X,null)}}const k=A.children;for(let B=0,W=k.length;B<W;B++)M(k[B],b,C,T,S)}function R(A){A.target.removeEventListener("dispose",R);for(const C in c){const T=c[C],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function XT(t){function e(){let U=!1;const re=new It;let Y=null;const K=new It(0,0,0,0);return{setMask:function(se){Y!==se&&!U&&(t.colorMask(se,se,se,se),Y=se)},setLocked:function(se){U=se},setClear:function(se,Ae,Ve,St,At){At===!0&&(se*=St,Ae*=St,Ve*=St),re.set(se,Ae,Ve,St),K.equals(re)===!1&&(t.clearColor(se,Ae,Ve,St),K.copy(re))},reset:function(){U=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let U=!1,re=null,Y=null,K=null;return{setTest:function(se){se?le(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(se){re!==se&&!U&&(t.depthMask(se),re=se)},setFunc:function(se){if(Y!==se){switch(se){case yS:t.depthFunc(t.NEVER);break;case SS:t.depthFunc(t.ALWAYS);break;case MS:t.depthFunc(t.LESS);break;case $l:t.depthFunc(t.LEQUAL);break;case ES:t.depthFunc(t.EQUAL);break;case wS:t.depthFunc(t.GEQUAL);break;case TS:t.depthFunc(t.GREATER);break;case bS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=se}},setLocked:function(se){U=se},setClear:function(se){K!==se&&(t.clearDepth(se),K=se)},reset:function(){U=!1,re=null,Y=null,K=null}}}function i(){let U=!1,re=null,Y=null,K=null,se=null,Ae=null,Ve=null,St=null,At=null;return{setTest:function(qe){U||(qe?le(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(qe){re!==qe&&!U&&(t.stencilMask(qe),re=qe)},setFunc:function(qe,xn,vn){(Y!==qe||K!==xn||se!==vn)&&(t.stencilFunc(qe,xn,vn),Y=qe,K=xn,se=vn)},setOp:function(qe,xn,vn){(Ae!==qe||Ve!==xn||St!==vn)&&(t.stencilOp(qe,xn,vn),Ae=qe,Ve=xn,St=vn)},setLocked:function(qe){U=qe},setClear:function(qe){At!==qe&&(t.clearStencil(qe),At=qe)},reset:function(){U=!1,re=null,Y=null,K=null,se=null,Ae=null,Ve=null,St=null,At=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},p=new WeakMap,f=[],m=null,v=!1,y=null,x=null,d=null,_=null,g=null,M=null,R=null,A=new We(0,0,0),b=0,C=!1,T=null,S=null,N=null,k=null,B=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=j>=2);let I=null,$={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ye=new It().fromArray(Q),Ye=new It().fromArray(oe);function G(U,re,Y,K){const se=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(U,Ae),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<Y;Ve++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(re+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return Ae}const q={};q[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(t.DEPTH_TEST),s.setFunc($l),Qe(!1),Se(Lp),le(t.CULL_FACE),_t(rr);function le(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function de(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Te(U,re){return h[U]!==re?(t.bindFramebuffer(U,re),h[U]=re,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=re),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(U,re){let Y=f,K=!1;if(U){Y=p.get(re),Y===void 0&&(Y=[],p.set(re,Y));const se=U.textures;if(Y.length!==se.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,Ve=se.length;Ae<Ve;Ae++)Y[Ae]=t.COLOR_ATTACHMENT0+Ae;Y.length=se.length,K=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,K=!0);K&&t.drawBuffers(Y)}function Oe(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const lt={[wr]:t.FUNC_ADD,[iS]:t.FUNC_SUBTRACT,[rS]:t.FUNC_REVERSE_SUBTRACT};lt[sS]=t.MIN,lt[aS]=t.MAX;const D={[oS]:t.ZERO,[lS]:t.ONE,[cS]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[mS]:t.SRC_ALPHA_SATURATE,[fS]:t.DST_COLOR,[dS]:t.DST_ALPHA,[uS]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[pS]:t.ONE_MINUS_DST_COLOR,[hS]:t.ONE_MINUS_DST_ALPHA,[gS]:t.CONSTANT_COLOR,[xS]:t.ONE_MINUS_CONSTANT_COLOR,[vS]:t.CONSTANT_ALPHA,[_S]:t.ONE_MINUS_CONSTANT_ALPHA};function _t(U,re,Y,K,se,Ae,Ve,St,At,qe){if(U===rr){v===!0&&(de(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),U!==nS){if(U!==y||qe!==C){if((x!==wr||g!==wr)&&(t.blendEquation(t.FUNC_ADD),x=wr,g=wr),qe)switch(U){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ip:t.blendFunc(t.ONE,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ip:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Op:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,_=null,M=null,R=null,A.set(0,0,0),b=0,y=U,C=qe}return}se=se||re,Ae=Ae||Y,Ve=Ve||K,(re!==x||se!==g)&&(t.blendEquationSeparate(lt[re],lt[se]),x=re,g=se),(Y!==d||K!==_||Ae!==M||Ve!==R)&&(t.blendFuncSeparate(D[Y],D[K],D[Ae],D[Ve]),d=Y,_=K,M=Ae,R=Ve),(St.equals(A)===!1||At!==b)&&(t.blendColor(St.r,St.g,St.b,At),A.copy(St),b=At),y=U,C=!1}function $e(U,re){U.side===oi?de(t.CULL_FACE):le(t.CULL_FACE);let Y=U.side===fn;re&&(Y=!Y),Qe(Y),U.blending===Ls&&U.transparent===!1?_t(rr):_t(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(U){T!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),T=U)}function Se(U){U!==eS?(le(t.CULL_FACE),U!==S&&(U===Lp?t.cullFace(t.BACK):U===tS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),S=U}function yt(U){U!==N&&(X&&t.lineWidth(U),N=U)}function be(U,re,Y){U?(le(t.POLYGON_OFFSET_FILL),(k!==re||B!==Y)&&(t.polygonOffset(re,Y),k=re,B=Y)):de(t.POLYGON_OFFSET_FILL)}function Ue(U){U?le(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function P(U){U===void 0&&(U=t.TEXTURE0+W-1),I!==U&&(t.activeTexture(U),I=U)}function E(U,re,Y){Y===void 0&&(I===null?Y=t.TEXTURE0+W-1:Y=I);let K=$[Y];K===void 0&&(K={type:void 0,texture:void 0},$[Y]=K),(K.type!==U||K.texture!==re)&&(I!==Y&&(t.activeTexture(Y),I=Y),t.bindTexture(U,re||q[U]),K.type=U,K.texture=re)}function H(){const U=$[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){ye.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ye.copy(U))}function he(U){Ye.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ye.copy(U))}function Le(U,re){let Y=l.get(re);Y===void 0&&(Y=new WeakMap,l.set(re,Y));let K=Y.get(U);K===void 0&&(K=t.getUniformBlockIndex(re,U.name),Y.set(U,K))}function Fe(U,re){const K=l.get(re).get(U);o.get(re)!==K&&(t.uniformBlockBinding(re,K,U.__bindingPointIndex),o.set(re,K))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,$={},h={},p=new WeakMap,f=[],m=null,v=!1,y=null,x=null,d=null,_=null,g=null,M=null,R=null,A=new We(0,0,0),b=0,C=!1,T=null,S=null,N=null,k=null,B=null,ye.set(0,0,t.canvas.width,t.canvas.height),Ye.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:le,disable:de,bindFramebuffer:Te,drawBuffers:Ie,useProgram:Oe,setBlending:_t,setMaterial:$e,setFlipSided:Qe,setCullFace:Se,setLineWidth:yt,setPolygonOffset:be,setScissorTest:Ue,activeTexture:P,bindTexture:E,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:pe,texImage3D:He,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:Ne,texStorage3D:ie,texSubImage2D:ee,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:Re,viewport:he,reset:st}}function Cm(t,e,n,i){const r=YT(i);switch(n){case Ax:return t*e;case Rx:return t*e;case Px:return t*e*2;case Nx:return t*e/r.components*r.byteLength;case lf:return t*e/r.components*r.byteLength;case Dx:return t*e*2/r.components*r.byteLength;case cf:return t*e*2/r.components*r.byteLength;case Cx:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case uf:return t*e*4/r.components*r.byteLength;case xl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _l:case yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:case Od:return Math.max(t,16)*Math.max(e,8)/4;case Ld:case Ud:return Math.max(t,8)*Math.max(e,8)/2;case Fd:case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sl:case eh:case th:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Lx:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ih:case rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YT(t){switch(t){case Pi:case wx:return{byteLength:1,components:1};case Ja:case Tx:case ro:return{byteLength:2,components:1};case af:case of:return{byteLength:2,components:4};case Br:case sf:case Ei:return{byteLength:4,components:1};case bx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function $T(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return m?new OffscreenCanvas(P,E):Ql("canvas")}function y(P,E,H){let J=1;const te=Ue(P);if((te.width>H||te.height>H)&&(J=H/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(J*te.width),Ee=Math.floor(J*te.height);p===void 0&&(p=v(ee,Ee));const ue=E?v(ee,Ee):p;return ue.width=ee,ue.height=Ee,ue.getContext("2d").drawImage(P,0,0,ee,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+Ee+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function x(P){return P.generateMipmaps&&P.minFilter!==Fn&&P.minFilter!==qn}function d(P){t.generateMipmap(P)}function _(P,E,H,J,te=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=E;if(E===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),E===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),E===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const Ee=te?ql:it.getTransfer(J);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=Ee===ht?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function g(P,E){let H;return P?E===null||E===Br||E===Xs?H=t.DEPTH24_STENCIL8:E===Ei?H=t.DEPTH32F_STENCIL8:E===Ja&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Br||E===Xs?H=t.DEPTH_COMPONENT24:E===Ei?H=t.DEPTH_COMPONENT32F:E===Ja&&(H=t.DEPTH_COMPONENT16),H}function M(P,E){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fn&&P.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){const E=P.target;E.removeEventListener("dispose",R),b(E),E.isVideoTexture&&h.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),T(E)}function b(P){const E=i.get(P);if(E.__webglInit===void 0)return;const H=P.source,J=f.get(H);if(J){const te=J[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(P),Object.keys(J).length===0&&f.delete(H)}i.remove(P)}function C(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const H=P.source,J=f.get(H);delete J[E.__cacheKey],a.memory.textures--}function T(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let te=0;te<E.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[J][te]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=P.textures;for(let J=0,te=H.length;J<te;J++){const ee=i.get(H[J]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(H[J])}i.remove(P)}let S=0;function N(){S=0}function k(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function B(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function W(P,E){const H=i.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(H,P,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function X(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ye(H,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function j(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ye(H,P,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function Z(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){G(H,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const I={[Nd]:t.REPEAT,[Pr]:t.CLAMP_TO_EDGE,[Dd]:t.MIRRORED_REPEAT},$={[Fn]:t.NEAREST,[OS]:t.NEAREST_MIPMAP_NEAREST,[Po]:t.NEAREST_MIPMAP_LINEAR,[qn]:t.LINEAR,[Jc]:t.LINEAR_MIPMAP_NEAREST,[Nr]:t.LINEAR_MIPMAP_LINEAR},Q={[zS]:t.NEVER,[XS]:t.ALWAYS,[HS]:t.LESS,[Ux]:t.LEQUAL,[VS]:t.EQUAL,[WS]:t.GEQUAL,[jS]:t.GREATER,[GS]:t.NOTEQUAL};function oe(P,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===qn||E.magFilter===Jc||E.magFilter===Po||E.magFilter===Nr||E.minFilter===qn||E.minFilter===Jc||E.minFilter===Po||E.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,I[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,I[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,I[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==Po&&E.minFilter!==Nr||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));const J=E.source;let te=f.get(J);te===void 0&&(te={},f.set(J,te));const ee=B(E);if(ee!==P.__cacheKey){te[ee]===void 0&&(te[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[ee].usedTimes++;const Ee=te[P.__cacheKey];Ee!==void 0&&(te[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(E)),P.__cacheKey=ee,P.__webglTexture=te[ee].texture}return H}function Ye(P,E,H){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const te=ye(P,E),ee=E.source;n.bindTexture(J,P.__webglTexture,t.TEXTURE0+H);const Ee=i.get(ee);if(ee.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const ue=it.getPrimaries(it.workingColorSpace),me=E.colorSpace===Yi?null:it.getPrimaries(E.colorSpace),Ne=E.colorSpace===Yi||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ie=y(E.image,!1,r.maxTextureSize);ie=be(E,ie);const pe=s.convert(E.format,E.colorSpace),He=s.convert(E.type);let Re=_(E.internalFormat,pe,He,E.colorSpace,E.isVideoTexture);oe(J,E);let he;const Le=E.mipmaps,Fe=E.isVideoTexture!==!0,st=Ee.__version===void 0||te===!0,U=ee.dataReady,re=M(E,ie);if(E.isDepthTexture)Re=g(E.format===Ys,E.type),st&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,pe,He,null));else if(E.isDataTexture)if(Le.length>0){Fe&&st&&n.texStorage2D(t.TEXTURE_2D,re,Re,Le[0].width,Le[0].height);for(let Y=0,K=Le.length;Y<K;Y++)he=Le[Y],Fe?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,he.width,he.height,pe,He,he.data):n.texImage2D(t.TEXTURE_2D,Y,Re,he.width,he.height,0,pe,He,he.data);E.generateMipmaps=!1}else Fe?(st&&n.texStorage2D(t.TEXTURE_2D,re,Re,ie.width,ie.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,pe,He,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,pe,He,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Re,Le[0].width,Le[0].height,ie.depth);for(let Y=0,K=Le.length;Y<K;Y++)if(he=Le[Y],E.format!==Kn)if(pe!==null)if(Fe){if(U)if(E.layerUpdates.size>0){const se=Cm(he.width,he.height,E.format,E.type);for(const Ae of E.layerUpdates){const Ve=he.data.subarray(Ae*se/he.data.BYTES_PER_ELEMENT,(Ae+1)*se/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,Ae,he.width,he.height,1,pe,Ve,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,he.width,he.height,ie.depth,pe,he.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Re,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,he.width,he.height,ie.depth,pe,He,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Re,he.width,he.height,ie.depth,0,pe,He,he.data)}else{Fe&&st&&n.texStorage2D(t.TEXTURE_2D,re,Re,Le[0].width,Le[0].height);for(let Y=0,K=Le.length;Y<K;Y++)he=Le[Y],E.format!==Kn?pe!==null?Fe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,he.width,he.height,pe,he.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Re,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,he.width,he.height,pe,He,he.data):n.texImage2D(t.TEXTURE_2D,Y,Re,he.width,he.height,0,pe,He,he.data)}else if(E.isDataArrayTexture)if(Fe){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Re,ie.width,ie.height,ie.depth),U)if(E.layerUpdates.size>0){const Y=Cm(ie.width,ie.height,E.format,E.type);for(const K of E.layerUpdates){const se=ie.data.subarray(K*Y/ie.data.BYTES_PER_ELEMENT,(K+1)*Y/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,pe,He,se)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,He,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,pe,He,ie.data);else if(E.isData3DTexture)Fe?(st&&n.texStorage3D(t.TEXTURE_3D,re,Re,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,He,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,pe,He,ie.data);else if(E.isFramebufferTexture){if(st)if(Fe)n.texStorage2D(t.TEXTURE_2D,re,Re,ie.width,ie.height);else{let Y=ie.width,K=ie.height;for(let se=0;se<re;se++)n.texImage2D(t.TEXTURE_2D,se,Re,Y,K,0,pe,He,null),Y>>=1,K>>=1}}else if(Le.length>0){if(Fe&&st){const Y=Ue(Le[0]);n.texStorage2D(t.TEXTURE_2D,re,Re,Y.width,Y.height)}for(let Y=0,K=Le.length;Y<K;Y++)he=Le[Y],Fe?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,pe,He,he):n.texImage2D(t.TEXTURE_2D,Y,Re,pe,He,he);E.generateMipmaps=!1}else if(Fe){if(st){const Y=Ue(ie);n.texStorage2D(t.TEXTURE_2D,re,Re,Y.width,Y.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,He,ie)}else n.texImage2D(t.TEXTURE_2D,0,Re,pe,He,ie);x(E)&&d(J),Ee.__version=ee.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function G(P,E,H){if(E.image.length!==6)return;const J=ye(P,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const ee=i.get(te);if(te.version!==ee.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const Ee=it.getPrimaries(it.workingColorSpace),ue=E.colorSpace===Yi?null:it.getPrimaries(E.colorSpace),me=E.colorSpace===Yi||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!Ne&&!ie?pe[K]=y(E.image[K],!0,r.maxCubemapSize):pe[K]=ie?E.image[K].image:E.image[K],pe[K]=be(E,pe[K]);const He=pe[0],Re=s.convert(E.format,E.colorSpace),he=s.convert(E.type),Le=_(E.internalFormat,Re,he,E.colorSpace),Fe=E.isVideoTexture!==!0,st=ee.__version===void 0||J===!0,U=te.dataReady;let re=M(E,He);oe(t.TEXTURE_CUBE_MAP,E);let Y;if(Ne){Fe&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Le,He.width,He.height);for(let K=0;K<6;K++){Y=pe[K].mipmaps;for(let se=0;se<Y.length;se++){const Ae=Y[se];E.format!==Kn?Re!==null?Fe?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Le,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Ae.width,Ae.height,Re,he,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Le,Ae.width,Ae.height,0,Re,he,Ae.data)}}}else{if(Y=E.mipmaps,Fe&&st){Y.length>0&&re++;const K=Ue(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Le,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,Re,he,pe[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,pe[K].width,pe[K].height,0,Re,he,pe[K].data);for(let se=0;se<Y.length;se++){const Ve=Y[se].image[K].image;Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,Ve.width,Ve.height,Re,he,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Le,Ve.width,Ve.height,0,Re,he,Ve.data)}}else{Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,he,pe[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,Re,he,pe[K]);for(let se=0;se<Y.length;se++){const Ae=Y[se];Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,Re,he,Ae.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Le,Re,he,Ae.image[K])}}}x(E)&&d(t.TEXTURE_CUBE_MAP),ee.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,H,J,te,ee){const Ee=s.convert(H.format,H.colorSpace),ue=s.convert(H.type),me=_(H.internalFormat,Ee,ue,H.colorSpace);if(!i.get(E).__hasExternalTextures){const ie=Math.max(1,E.width>>ee),pe=Math.max(1,E.height>>ee);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ee,me,ie,pe,E.depth,0,Ee,ue,null):n.texImage2D(te,ee,me,ie,pe,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Se(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,te,i.get(H).__webglTexture,0,Qe(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,te,i.get(H).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const J=E.depthTexture,te=J&&J.isDepthTexture?J.type:null,ee=g(E.stencilBuffer,te),Ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Qe(E);Se(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ee,E.width,E.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,P)}else{const J=E.textures;for(let te=0;te<J.length;te++){const ee=J[te],Ee=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),me=_(ee.internalFormat,Ee,ue,ee.colorSpace),Ne=Qe(E);H&&Se(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,me,E.width,E.height):Se(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,te=Qe(E);if(E.depthTexture.format===Is)Se(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===Ys)Se(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Te(P){const E=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=J}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,P)}else if(H){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),le(E.__webglDepthbuffer[J],P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(P,E,H){const J=i.get(P);E!==void 0&&q(J.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Te(P)}function Oe(P){const E=P.texture,H=i.get(P),J=i.get(E);P.addEventListener("dispose",A);const te=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,a.memory.textures++),ee){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let me=0;me<E.mipmaps.length;me++)H.__webglFramebuffer[ue][me]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,me=te.length;ue<me;ue++){const Ne=i.get(te[ue]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Se(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const me=te[ue];H.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const Ne=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),pe=_(me.internalFormat,Ne,ie,me.colorSpace,P.isXRRenderTarget===!0),He=Qe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,pe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),le(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),oe(t.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)q(H.__webglFramebuffer[ue][me],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else q(H.__webglFramebuffer[ue],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,me=te.length;ue<me;ue++){const Ne=te[ue],ie=i.get(Ne);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),oe(t.TEXTURE_2D,Ne),q(H.__webglFramebuffer,P,Ne,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),x(Ne)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,J.__webglTexture),oe(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)q(H.__webglFramebuffer[me],P,E,t.COLOR_ATTACHMENT0,ue,me);else q(H.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,ue,0);x(E)&&d(ue),n.unbindTexture()}P.depthBuffer&&Te(P)}function lt(P){const E=P.textures;for(let H=0,J=E.length;H<J;H++){const te=E[H];if(x(te)){const ee=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(te).__webglTexture;n.bindTexture(ee,Ee),d(ee),n.unbindTexture()}}}const D=[],_t=[];function $e(P){if(P.samples>0){if(Se(P)===!1){const E=P.textures,H=P.width,J=P.height;let te=t.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(P),ue=E.length>1;if(ue)for(let me=0;me<E.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<E.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ne=i.get(E[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,H,J,0,0,H,J,te,t.NEAREST),l===!0&&(D.length=0,_t.length=0,D.push(t.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(ee),_t.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_t)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<E.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ne=i.get(E[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Qe(P){return Math.min(r.maxSamples,P.samples)}function Se(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(P){const E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function be(P,E){const H=P.colorSpace,J=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==fr&&H!==Yi&&(it.getTransfer(H)===ht?(J!==Kn||te!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=Ie,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Se}function qT(t,e){function n(i,r=Yi){let s;const a=it.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===af)return t.UNSIGNED_SHORT_4_4_4_4;if(i===of)return t.UNSIGNED_SHORT_5_5_5_1;if(i===bx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===wx)return t.BYTE;if(i===Tx)return t.SHORT;if(i===Ja)return t.UNSIGNED_SHORT;if(i===sf)return t.INT;if(i===Br)return t.UNSIGNED_INT;if(i===Ei)return t.FLOAT;if(i===ro)return t.HALF_FLOAT;if(i===Ax)return t.ALPHA;if(i===Cx)return t.RGB;if(i===Kn)return t.RGBA;if(i===Rx)return t.LUMINANCE;if(i===Px)return t.LUMINANCE_ALPHA;if(i===Is)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===Nx)return t.RED;if(i===lf)return t.RED_INTEGER;if(i===Dx)return t.RG;if(i===cf)return t.RG_INTEGER;if(i===uf)return t.RGBA_INTEGER;if(i===xl||i===vl||i===_l||i===yl)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ld||i===Id||i===Ud||i===Od)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ld)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Id)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ud)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fd||i===kd||i===Bd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fd||i===kd)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zd||i===Hd||i===Vd||i===jd||i===Gd||i===Wd||i===Xd||i===Yd||i===$d||i===qd||i===Kd||i===Zd||i===Jd||i===Qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$d)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===eh||i===th)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sl)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lx||i===nh||i===ih||i===rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ih)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class KT extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ma extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZT={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const x=n.getJointPose(y,i),d=this._getHandJoint(c,y);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ZT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const JT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new pn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cr({vertexShader:JT,fragmentShader:QT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tb extends Gr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,v=null;const y=new eb,x=n.getContextAttributes();let d=null,_=null;const g=[],M=[],R=new xe;let A=null;const b=new Un;b.layers.enable(1),b.viewport=new It;const C=new Un;C.layers.enable(2),C.viewport=new It;const T=[b,C],S=new KT;S.layers.enable(1),S.layers.enable(2);let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let q=g[G];return q===void 0&&(q=new wu,g[G]=q),q.getTargetRaySpace()},this.getControllerGrip=function(G){let q=g[G];return q===void 0&&(q=new wu,g[G]=q),q.getGripSpace()},this.getHand=function(G){let q=g[G];return q===void 0&&(q=new wu,g[G]=q),q.getHandSpace()};function B(G){const q=M.indexOf(G.inputSource);if(q===-1)return;const le=g[q];le!==void 0&&(le.update(G.inputSource,G.frame,c||a),le.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",X);for(let G=0;G<g.length;G++){const q=M[G];q!==null&&(M[G]=null,g[G].disconnect(q))}N=null,k=null,y.reset(),e.setRenderTarget(d),m=null,f=null,p=null,r=null,_=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const q={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new zr(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,le=null,de=null;x.depth&&(de=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=x.stencil?Ys:Is,le=x.stencil?Xs:Br);const Te={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new zr(f.textureWidth,f.textureHeight,{format:Kn,type:Pi,depthTexture:new $x(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(G){for(let q=0;q<G.removed.length;q++){const le=G.removed[q],de=M.indexOf(le);de>=0&&(M[de]=null,g[de].disconnect(le))}for(let q=0;q<G.added.length;q++){const le=G.added[q];let de=M.indexOf(le);if(de===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=M.length){M.push(le),de=Ie;break}else if(M[Ie]===null){M[Ie]=le,de=Ie;break}if(de===-1)break}const Te=g[de];Te&&Te.connect(le)}}const j=new L,Z=new L;function I(G,q,le){j.setFromMatrixPosition(q.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const de=j.distanceTo(Z),Te=q.projectionMatrix.elements,Ie=le.projectionMatrix.elements,Oe=Te[14]/(Te[10]-1),lt=Te[14]/(Te[10]+1),D=(Te[9]+1)/Te[5],_t=(Te[9]-1)/Te[5],$e=(Te[8]-1)/Te[0],Qe=(Ie[8]+1)/Ie[0],Se=Oe*$e,yt=Oe*Qe,be=de/(-$e+Qe),Ue=be*-$e;if(q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ue),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Te[10]===-1)G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const P=Oe+be,E=lt+be,H=Se-Ue,J=yt+(de-Ue),te=D*lt/E*P,ee=_t*lt/E*P;G.projectionMatrix.makePerspective(H,J,te,ee,P,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function $(G,q){q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let q=G.near,le=G.far;y.texture!==null&&(y.depthNear>0&&(q=y.depthNear),y.depthFar>0&&(le=y.depthFar)),S.near=C.near=b.near=q,S.far=C.far=b.far=le,(N!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,k=S.far);const de=G.parent,Te=S.cameras;$(S,de);for(let Ie=0;Ie<Te.length;Ie++)$(Te[Ie],de);Te.length===2?I(S,b,C):S.projectionMatrix.copy(b.projectionMatrix),Q(G,S,de)};function Q(G,q,le){le===null?G.matrix.copy(q.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply(q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=sh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function ye(G,q){if(h=q.getViewerPose(c||a),v=q,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let de=!1;le.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let Ie=0;Ie<le.length;Ie++){const Oe=le[Ie];let lt=null;if(m!==null)lt=m.getViewport(Oe);else{const _t=p.getViewSubImage(f,Oe);lt=_t.viewport,Ie===0&&(e.setRenderTargetTextures(_,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(_))}let D=T[Ie];D===void 0&&(D=new Un,D.layers.enable(Ie),D.viewport=new It,T[Ie]=D),D.matrix.fromArray(Oe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Oe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(lt.x,lt.y,lt.width,lt.height),Ie===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(D)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=p.getDepthInformation(le[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let le=0;le<g.length;le++){const de=M[le],Te=g[le];de!==null&&Te!==void 0&&Te.update(de,q,c||a)}oe&&oe(G,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),v=null}const Ye=new Xx;Ye.setAnimationLoop(ye),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const yr=new di,nb=new pt;function ib(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,jx(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,_,g,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&m(x,d,M)):d.isMeshMatcapMaterial?(s(x,d),v(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),y(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,_,g):d.isSpriteMaterial?c(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===fn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===fn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const _=e.get(d),g=_.envMap,M=_.envMapRotation;g&&(x.envMap.value=g,yr.copy(M),yr.x*=-1,yr.y*=-1,yr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),x.envMapRotation.value.setFromMatrix4(nb.makeRotationFromEuler(yr)),x.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,_,g){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*_,x.scale.value=g*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function c(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,_){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,d){d.matcap&&(x.matcap.value=d.matcap)}function y(x,d){const _=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=r[_.id];M===void 0&&(v(_),M=h(_),r[_.id]=M,_.addEventListener("dispose",x));const R=g.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function h(_){const g=p();_.__bindingPointIndex=g;const M=t.createBuffer(),R=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function p(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=r[_.id],M=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,b=M.length;A<b;A++){const C=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,S=C.length;T<S;T++){const N=C[T];if(m(N,A,T,R)===!0){const k=N.__offset,B=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let X=0;X<B.length;X++){const j=B[X],Z=y(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,k+W,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,M,R){const A=_.value,b=g+"_"+M;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const C=R[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function v(_){const g=_.uniforms;let M=0;const R=16;for(let b=0,C=g.length;b<C;b++){const T=Array.isArray(g[b])?g[b]:[g[b]];for(let S=0,N=T.length;S<N;S++){const k=T[S],B=Array.isArray(k.value)?k.value:[k.value];for(let W=0,X=B.length;W<X;W++){const j=B[W],Z=y(j),I=M%R,$=I%Z.boundary,Q=I+$;M+=$,Q!==0&&R-Q<Z.storage&&(M+=R-Q),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Z.storage}}}const A=M%R;return A>0&&(M+=R-A),_.__size=M,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function x(_){const g=_.target;g.removeEventListener("dispose",x);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class sb{constructor(e={}){const{canvas:n=qS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,x=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=sr,this.toneMappingExposure=1;const g=this;let M=!1,R=0,A=0,b=null,C=-1,T=null;const S=new It,N=new It;let k=null;const B=new We(0);let W=0,X=n.width,j=n.height,Z=1,I=null,$=null;const Q=new It(0,0,X,j),oe=new It(0,0,X,j);let ye=!1;const Ye=new ff;let G=!1,q=!1;const le=new pt,de=new L,Te=new It,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function lt(){return b===null?Z:1}let D=i;function _t(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",se,!1),D===null){const O="webgl2";if(D=_t(O,w),D===null)throw _t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $e,Qe,Se,yt,be,Ue,P,E,H,J,te,ee,Ee,ue,me,Ne,ie,pe,He,Re,he,Le,Fe,st;function U(){$e=new dw(D),$e.init(),Le=new qT(D,$e),Qe=new sw(D,$e,e,Le),Se=new XT(D),yt=new pw(D),be=new DT,Ue=new $T(D,$e,Se,be,Qe,Le,yt),P=new ow(g),E=new uw(g),H=new SM(D),Fe=new iw(D,H),J=new hw(D,H,yt,Fe),te=new gw(D,J,H,yt),He=new mw(D,Qe,Ue),Ne=new aw(be),ee=new NT(g,P,E,$e,Qe,Fe,Ne),Ee=new ib(g,be),ue=new IT,me=new zT($e),pe=new nw(g,P,E,Se,te,f,l),ie=new WT(g,te,Qe),st=new rb(D,yt,Qe,Se),Re=new rw(D,$e,yt),he=new fw(D,$e,yt),yt.programs=ee.programs,g.capabilities=Qe,g.extensions=$e,g.properties=be,g.renderLists=ue,g.shadowMap=ie,g.state=Se,g.info=yt}U();const re=new tb(g,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(X,j,!1))},this.getSize=function(w){return w.set(X,j)},this.setSize=function(w,O,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,j=O,n.width=Math.floor(w*Z),n.height=Math.floor(O*Z),z===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*Z,j*Z).floor()},this.setDrawingBufferSize=function(w,O,z){X=w,j=O,Z=z,n.width=Math.floor(w*z),n.height=Math.floor(O*z),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,O,z,V){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,O,z,V),Se.viewport(S.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,O,z,V){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,O,z,V),Se.scissor(N.copy(oe).multiplyScalar(Z).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){Se.setScissorTest(ye=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(w=!0,O=!0,z=!0){let V=0;if(w){let F=!1;if(b!==null){const ae=b.texture.format;F=ae===uf||ae===cf||ae===lf}if(F){const ae=b.texture.type,fe=ae===Pi||ae===Br||ae===Ja||ae===Xs||ae===af||ae===of,ve=pe.getClearColor(),_e=pe.getClearAlpha(),Pe=ve.r,De=ve.g,Me=ve.b;fe?(m[0]=Pe,m[1]=De,m[2]=Me,m[3]=_e,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Pe,v[1]=De,v[2]=Me,v[3]=_e,D.clearBufferiv(D.COLOR,0,v))}else V|=D.COLOR_BUFFER_BIT}O&&(V|=D.DEPTH_BUFFER_BIT),z&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),me.dispose(),be.dispose(),P.dispose(),E.dispose(),te.dispose(),Fe.dispose(),st.dispose(),ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",vn),re.removeEventListener("sessionend",Qs),ti.stop()};function Y(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=yt.autoReset,O=ie.enabled,z=ie.autoUpdate,V=ie.needsUpdate,F=ie.type;U(),yt.autoReset=w,ie.enabled=O,ie.autoUpdate=z,ie.needsUpdate=V,ie.type=F}function se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ae(w){const O=w.target;O.removeEventListener("dispose",Ae),Ve(O)}function Ve(w){St(w),be.remove(w)}function St(w){const O=be.get(w).programs;O!==void 0&&(O.forEach(function(z){ee.releaseProgram(z)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,z,V,F,ae){O===null&&(O=Ie);const fe=F.isMesh&&F.matrixWorld.determinant()<0,ve=ut(w,O,z,V,F);Se.setMaterial(V,fe);let _e=z.index,Pe=1;if(V.wireframe===!0){if(_e=J.getWireframeAttribute(z),_e===void 0)return;Pe=2}const De=z.drawRange,Me=z.attributes.position;let et=De.start*Pe,Mt=(De.start+De.count)*Pe;ae!==null&&(et=Math.max(et,ae.start*Pe),Mt=Math.min(Mt,(ae.start+ae.count)*Pe)),_e!==null?(et=Math.max(et,0),Mt=Math.min(Mt,_e.count)):Me!=null&&(et=Math.max(et,0),Mt=Math.min(Mt,Me.count));const Et=Mt-et;if(Et<0||Et===1/0)return;Fe.setup(F,V,ve,z,_e);let _n,tt=Re;if(_e!==null&&(_n=H.get(_e),tt=he,tt.setIndex(_n)),F.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*lt()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(F.isLine){let we=V.linewidth;we===void 0&&(we=1),Se.setLineWidth(we*lt()),F.isLineSegments?tt.setMode(D.LINES):F.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else F.isPoints?tt.setMode(D.POINTS):F.isSprite&&tt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,Vt=F._multiDrawCounts,nt=F._multiDrawCount,Hn=_e?H.get(_e).bytesPerElement:1,Yr=be.get(V).currentProgram.getUniforms();for(let yn=0;yn<nt;yn++)Yr.setValue(D,"_gl_DrawID",yn),tt.render(we[yn]/Hn,Vt[yn])}else if(F.isInstancedMesh)tt.renderInstances(et,Et,F.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vt=Math.min(z.instanceCount,we);tt.renderInstances(et,Et,Vt)}else tt.render(et,Et)};function At(w,O,z){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,ke(w,O,z),w.side=lr,w.needsUpdate=!0,ke(w,O,z),w.side=oi):ke(w,O,z)}this.compile=function(w,O,z=null){z===null&&(z=w),x=me.get(z),x.init(O),_.push(x),z.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(x.pushLight(F),F.castShadow&&x.pushShadow(F))}),w!==z&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(x.pushLight(F),F.castShadow&&x.pushShadow(F))}),x.setupLights();const V=new Set;return w.traverse(function(F){const ae=F.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){const ve=ae[fe];At(ve,z,F),V.add(ve)}else At(ae,z,F),V.add(ae)}),_.pop(),x=null,V},this.compileAsync=function(w,O,z=null){const V=this.compile(w,O,z);return new Promise(F=>{function ae(){if(V.forEach(function(fe){be.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){F(w);return}setTimeout(ae,10)}$e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let qe=null;function xn(w){qe&&qe(w)}function vn(){ti.stop()}function Qs(){ti.start()}const ti=new Xx;ti.setAnimationLoop(xn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(w){qe=w,re.setAnimationLoop(w),w===null?ti.stop():ti.start()},re.addEventListener("sessionstart",vn),re.addEventListener("sessionend",Qs),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,O,b),x=me.get(w,_.length),x.init(O),_.push(x),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ye.setFromProjectionMatrix(le),q=this.localClippingEnabled,G=Ne.init(this.clippingPlanes,q),y=ue.get(w,d.length),y.init(),d.push(y),re.enabled===!0&&re.isPresenting===!0){const ae=g.xr.getDepthSensingMesh();ae!==null&&Li(ae,O,-1/0,g.sortObjects)}Li(w,O,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(I,$),Oe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Oe&&pe.addToRenderList(y,w),this.info.render.frame++,G===!0&&Ne.beginShadows();const z=x.state.shadowsArray;ie.render(z,w,O),G===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=y.opaque,F=y.transmissive;if(x.setupLights(),O.isArrayCamera){const ae=O.cameras;if(F.length>0)for(let fe=0,ve=ae.length;fe<ve;fe++){const _e=ae[fe];ho(V,F,w,_e)}Oe&&pe.render(w);for(let fe=0,ve=ae.length;fe<ve;fe++){const _e=ae[fe];ea(y,w,_e,_e.viewport)}}else F.length>0&&ho(V,F,w,O),Oe&&pe.render(w),ea(y,w,O);b!==null&&(Ue.updateMultisampleRenderTarget(b),Ue.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(g,w,O),Fe.resetDefaultState(),C=-1,T=null,_.pop(),_.length>0?(x=_[_.length-1],G===!0&&Ne.setGlobalState(g.clippingPlanes,x.state.camera)):x=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Li(w,O,z,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ye.intersectsSprite(w)){V&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const fe=te.update(w),ve=w.material;ve.visible&&y.push(w,fe,ve,z,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ye.intersectsObject(w))){const fe=te.update(w),ve=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Te.copy(fe.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(ve)){const _e=fe.groups;for(let Pe=0,De=_e.length;Pe<De;Pe++){const Me=_e[Pe],et=ve[Me.materialIndex];et&&et.visible&&y.push(w,fe,et,z,Te.z,Me)}}else ve.visible&&y.push(w,fe,ve,z,Te.z,null)}}const ae=w.children;for(let fe=0,ve=ae.length;fe<ve;fe++)Li(ae[fe],O,z,V)}function ea(w,O,z,V){const F=w.opaque,ae=w.transmissive,fe=w.transparent;x.setupLightsView(z),G===!0&&Ne.setGlobalState(g.clippingPlanes,z),V&&Se.viewport(S.copy(V)),F.length>0&&pr(F,O,z),ae.length>0&&pr(ae,O,z),fe.length>0&&pr(fe,O,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ho(w,O,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[V.id]===void 0&&(x.state.transmissionRenderTarget[V.id]=new zr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?ro:Pi,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ae=x.state.transmissionRenderTarget[V.id],fe=V.viewport||S;ae.setSize(fe.z,fe.w);const ve=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(B),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),Oe&&pe.render(z);const _e=g.toneMapping;g.toneMapping=sr;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),x.setupLightsView(V),G===!0&&Ne.setGlobalState(g.clippingPlanes,V),pr(w,z,V),Ue.updateMultisampleRenderTarget(ae),Ue.updateRenderTargetMipmap(ae),$e.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Me=0,et=O.length;Me<et;Me++){const Mt=O[Me],Et=Mt.object,_n=Mt.geometry,tt=Mt.material,we=Mt.group;if(tt.side===oi&&Et.layers.test(V.layers)){const Vt=tt.side;tt.side=fn,tt.needsUpdate=!0,ta(Et,z,V,_n,tt,we),tt.side=Vt,tt.needsUpdate=!0,De=!0}}De===!0&&(Ue.updateMultisampleRenderTarget(ae),Ue.updateRenderTargetMipmap(ae))}g.setRenderTarget(ve),g.setClearColor(B,W),Pe!==void 0&&(V.viewport=Pe),g.toneMapping=_e}function pr(w,O,z){const V=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ae=w.length;F<ae;F++){const fe=w[F],ve=fe.object,_e=fe.geometry,Pe=V===null?fe.material:V,De=fe.group;ve.layers.test(z.layers)&&ta(ve,O,z,_e,Pe,De)}}function ta(w,O,z,V,F,ae){w.onBeforeRender(g,O,z,V,F,ae),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(g,O,z,V,w,ae),F.transparent===!0&&F.side===oi&&F.forceSinglePass===!1?(F.side=fn,F.needsUpdate=!0,g.renderBufferDirect(z,O,V,F,w,ae),F.side=lr,F.needsUpdate=!0,g.renderBufferDirect(z,O,V,F,w,ae),F.side=oi):g.renderBufferDirect(z,O,V,F,w,ae),w.onAfterRender(g,O,z,V,F,ae)}function ke(w,O,z){O.isScene!==!0&&(O=Ie);const V=be.get(w),F=x.state.lights,ae=x.state.shadowsArray,fe=F.state.version,ve=ee.getParameters(w,F.state,ae,O,z),_e=ee.getProgramCacheKey(ve);let Pe=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?E:P).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Ae),Pe=new Map,V.programs=Pe);let De=Pe.get(_e);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===fe)return Je(w,ve),De}else ve.uniforms=ee.getUniforms(w),w.onBeforeCompile(ve,g),De=ee.acquireProgram(ve,_e),Pe.set(_e,De),V.uniforms=ve.uniforms;const Me=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=Ne.uniform),Je(w,ve),V.needsLights=Xr(w),V.lightsStateVersion=fe,V.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=De,V.uniformsList=null,De}function je(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=El.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Je(w,O){const z=be.get(w);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function ut(w,O,z,V,F){O.isScene!==!0&&(O=Ie),Ue.resetTextureUnits();const ae=O.fog,fe=V.isMeshStandardMaterial?O.environment:null,ve=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:fr,_e=(V.isMeshStandardMaterial?E:P).get(V.envMap||fe),Pe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,Mt=!!z.morphAttributes.color;let Et=sr;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Et=g.toneMapping);const _n=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=_n!==void 0?_n.length:0,we=be.get(V),Vt=x.state.lights;if(G===!0&&(q===!0||w!==T)){const Pn=w===T&&V.id===C;Ne.setState(V,w,Pn)}let nt=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Vt.state.version||we.outputColorSpace!==ve||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==_e||V.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ne.numPlanes||we.numIntersection!==Ne.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==De||we.morphTargets!==Me||we.morphNormals!==et||we.morphColors!==Mt||we.toneMapping!==Et||we.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,we.__version=V.version);let Hn=we.currentProgram;nt===!0&&(Hn=ke(V,O,F));let Yr=!1,yn=!1,Mc=!1;const Ct=Hn.getUniforms(),Ii=we.uniforms;if(Se.useProgram(Hn.program)&&(Yr=!0,yn=!0,Mc=!0),V.id!==C&&(C=V.id,yn=!0),Yr||T!==w){Ct.setValue(D,"projectionMatrix",w.projectionMatrix),Ct.setValue(D,"viewMatrix",w.matrixWorldInverse);const Pn=Ct.map.cameraPosition;Pn!==void 0&&Pn.setValue(D,de.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&Ct.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ct.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,yn=!0,Mc=!0)}if(F.isSkinnedMesh){Ct.setOptional(D,F,"bindMatrix"),Ct.setOptional(D,F,"bindMatrixInverse");const Pn=F.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Ct.setValue(D,"boneTexture",Pn.boneTexture,Ue))}F.isBatchedMesh&&(Ct.setOptional(D,F,"batchingTexture"),Ct.setValue(D,"batchingTexture",F._matricesTexture,Ue),Ct.setOptional(D,F,"batchingIdTexture"),Ct.setValue(D,"batchingIdTexture",F._indirectTexture,Ue),Ct.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Ct.setValue(D,"batchingColorTexture",F._colorsTexture,Ue));const Ec=z.morphAttributes;if((Ec.position!==void 0||Ec.normal!==void 0||Ec.color!==void 0)&&He.update(F,z,Hn),(yn||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,Ct.setValue(D,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ii.envMap.value=_e,Ii.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Ii.envMapIntensity.value=O.environmentIntensity),yn&&(Ct.setValue(D,"toneMappingExposure",g.toneMappingExposure),we.needsLights&&hi(Ii,Mc),ae&&V.fog===!0&&Ee.refreshFogUniforms(Ii,ae),Ee.refreshMaterialUniforms(Ii,V,Z,j,x.state.transmissionRenderTarget[w.id]),El.upload(D,je(we),Ii,Ue)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(El.upload(D,je(we),Ii,Ue),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ct.setValue(D,"center",F.center),Ct.setValue(D,"modelViewMatrix",F.modelViewMatrix),Ct.setValue(D,"normalMatrix",F.normalMatrix),Ct.setValue(D,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Pn=V.uniformsGroups;for(let wc=0,av=Pn.length;wc<av;wc++){const yf=Pn[wc];st.update(yf,Hn),st.bind(yf,Hn)}}return Hn}function hi(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Xr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,O,z){be.get(w.texture).__webglTexture=O,be.get(w.depthTexture).__webglTexture=z;const V=be.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const z=be.get(w);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,z=0){b=w,R=O,A=z;let V=!0,F=null,ae=!1,fe=!1;if(w){const _e=be.get(w);if(_e.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(_e.__webglFramebuffer===void 0)Ue.setupRenderTarget(w);else if(_e.__hasExternalTextures)Ue.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Me=w.depthTexture;if(_e.__boundDepthTexture!==Me){if(Me!==null&&be.has(Me)&&(w.width!==Me.image.width||w.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const De=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[O])?F=De[O][z]:F=De[O],ae=!0):w.samples>0&&Ue.useMultisampledRTT(w)===!1?F=be.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[z]:F=De,S.copy(w.viewport),N.copy(w.scissor),k=w.scissorTest}else S.copy(Q).multiplyScalar(Z).floor(),N.copy(oe).multiplyScalar(Z).floor(),k=ye;if(Se.bindFramebuffer(D.FRAMEBUFFER,F)&&V&&Se.drawBuffers(w,F),Se.viewport(S),Se.scissor(N),Se.setScissorTest(k),ae){const _e=be.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,z)}else if(fe){const _e=be.get(w.texture),Pe=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,z||0,Pe)}C=-1},this.readRenderTargetPixels=function(w,O,z,V,F,ae,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Se.bindFramebuffer(D.FRAMEBUFFER,ve);try{const _e=w.texture,Pe=_e.format,De=_e.type;if(!Qe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&z>=0&&z<=w.height-F&&D.readPixels(O,z,V,F,Le.convert(Pe),Le.convert(De),ae)}finally{const _e=b!==null?be.get(b).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(w,O,z,V,F,ae,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Se.bindFramebuffer(D.FRAMEBUFFER,ve);try{const _e=w.texture,Pe=_e.format,De=_e.type;if(!Qe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-V&&z>=0&&z<=w.height-F){const Me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(O,z,V,F,Le.convert(Pe),Le.convert(De),0),D.flush();const et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await KS(D,et,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae)}finally{D.deleteBuffer(Me),D.deleteSync(et)}return ae}}finally{const _e=b!==null?be.get(b).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(w,O=null,z=0){w.isTexture!==!0&&(Da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-z),F=Math.floor(w.image.width*V),ae=Math.floor(w.image.height*V),fe=O!==null?O.x:0,ve=O!==null?O.y:0;Ue.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,fe,ve,F,ae),Se.unbindTexture()},this.copyTextureToTexture=function(w,O,z=null,V=null,F=0){w.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,z=null);let ae,fe,ve,_e,Pe,De;z!==null?(ae=z.max.x-z.min.x,fe=z.max.y-z.min.y,ve=z.min.x,_e=z.min.y):(ae=w.image.width,fe=w.image.height,ve=0,_e=0),V!==null?(Pe=V.x,De=V.y):(Pe=0,De=0);const Me=Le.convert(O.format),et=Le.convert(O.type);Ue.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Mt=D.getParameter(D.UNPACK_ROW_LENGTH),Et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),_n=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),we=D.getParameter(D.UNPACK_SKIP_IMAGES),Vt=w.isCompressedTexture?w.mipmaps[F]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,_e),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Pe,De,ae,fe,Me,et,Vt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Pe,De,Vt.width,Vt.height,Me,Vt.data):D.texSubImage2D(D.TEXTURE_2D,F,Pe,De,ae,fe,Me,et,Vt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_n),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we),F===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,O,z=null,V=null,F=0){w.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0);let ae,fe,ve,_e,Pe,De,Me,et,Mt;const Et=w.isCompressedTexture?w.mipmaps[F]:w.image;z!==null?(ae=z.max.x-z.min.x,fe=z.max.y-z.min.y,ve=z.max.z-z.min.z,_e=z.min.x,Pe=z.min.y,De=z.min.z):(ae=Et.width,fe=Et.height,ve=Et.depth,_e=0,Pe=0,De=0),V!==null?(Me=V.x,et=V.y,Mt=V.z):(Me=0,et=0,Mt=0);const _n=Le.convert(O.format),tt=Le.convert(O.type);let we;if(O.isData3DTexture)Ue.setTexture3D(O,0),we=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Ue.setTexture2DArray(O,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Vt=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Yr=D.getParameter(D.UNPACK_SKIP_ROWS),yn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(we,F,Me,et,Mt,ae,fe,ve,_n,tt,Et.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(we,F,Me,et,Mt,ae,fe,ve,_n,Et.data):D.texSubImage3D(we,F,Me,et,Mt,ae,fe,ve,_n,tt,Et),D.pixelStorei(D.UNPACK_ROW_LENGTH,Vt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yn),F===0&&O.generateMipmaps&&D.generateMipmap(we),Se.unbindTexture()},this.initRenderTarget=function(w){be.get(w).__webglFramebuffer===void 0&&Ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ue.setTextureCube(w,0):w.isData3DTexture?Ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ue.setTexture2DArray(w,0):Ue.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,Se.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===df?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===yc?"display-p3":"srgb"}}class mf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=n}clone(){return new mf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ab extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qx extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ec=new L,tc=new L,Rm=new pt,ga=new lo,Jo=new oo,Tu=new L,Pm=new L;class ob extends Ht{constructor(e=new gn,n=new Qx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ec.fromBufferAttribute(n,r-1),tc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;Rm.copy(r).invert(),ga.copy(e.ray).applyMatrix4(Rm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=m,x=v-1;y<x;y+=c){const d=h.getX(y),_=h.getX(y+1),g=Qo(this,e,ga,l,d,_);g&&n.push(g)}if(this.isLineLoop){const y=h.getX(v-1),x=h.getX(m),d=Qo(this,e,ga,l,y,x);d&&n.push(d)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let y=m,x=v-1;y<x;y+=c){const d=Qo(this,e,ga,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=Qo(this,e,ga,l,v-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(ec.fromBufferAttribute(a,r),tc.fromBufferAttribute(a,s),n.distanceSqToSegment(ec,tc,Tu,Pm)>i)return;Tu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Tu);if(!(l<e.near||l>e.far))return{distance:l,point:Pm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Nm=new L,Dm=new L;class lb extends ob{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Nm.fromBufferAttribute(n,r),Dm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Nm.distanceTo(Dm);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ev extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lm=new pt,oh=new lo,el=new oo,tl=new L;class cb extends Ht{constructor(e=new gn,n=new ev){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Lm.copy(r).invert(),oh.copy(e.ray).applyMatrix4(Lm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=f,y=m;v<y;v++){const x=c.getX(v);tl.fromBufferAttribute(p,x),Im(tl,x,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let v=f,y=m;v<y;v++)tl.fromBufferAttribute(p,v),Im(tl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Im(t,e,n,i,r,s,a){const o=oh.distanceSqToPoint(t);if(o<n){const l=new L;oh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,m=(a-h)/f;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new xe:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new L,r=[],s=[],a=[],o=new L,l=new pt;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Gt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Gt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tv extends Di{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new xe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*p+this.aX,c=f*p+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ub extends tv{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function gf(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,p){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;f*=h,m*=h,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const nl=new L,bu=new gf,Au=new gf,Cu=new gf;class nv extends Di{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(nl.subVectors(r[0],r[1]).add(r[0]),c=nl);const p=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(nl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=nl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(p),m),y=Math.pow(p.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(h),m);y<1e-4&&(y=1),v<1e-4&&(v=y),x<1e-4&&(x=y),bu.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,v,y,x),Au.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,v,y,x),Cu.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,v,y,x)}else this.curveType==="catmullrom"&&(bu.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),Au.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),Cu.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return i.set(bu.calc(l),Au.calc(l),Cu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Um(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function db(t,e){const n=1-t;return n*n*e}function hb(t,e){return 2*(1-t)*t*e}function fb(t,e){return t*t*e}function La(t,e,n,i){return db(t,e)+hb(t,n)+fb(t,i)}function pb(t,e){const n=1-t;return n*n*n*e}function mb(t,e){const n=1-t;return 3*n*n*t*e}function gb(t,e){return 3*(1-t)*t*t*e}function xb(t,e){return t*t*t*e}function Ia(t,e,n,i,r){return pb(t,e)+mb(t,n)+gb(t,i)+xb(t,r)}class vb extends Di{constructor(e=new xe,n=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new xe){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ia(e,r.x,s.x,a.x,o.x),Ia(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _b extends Di{constructor(e=new L,n=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new L){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ia(e,r.x,s.x,a.x,o.x),Ia(e,r.y,s.y,a.y,o.y),Ia(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yb extends Di{constructor(e=new xe,n=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new xe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new xe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sb extends Di{constructor(e=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new L){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mb extends Di{constructor(e=new xe,n=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new xe){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(La(e,r.x,s.x,a.x),La(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iv extends Di{constructor(e=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new L){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(La(e,r.x,s.x,a.x),La(e,r.y,s.y,a.y),La(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eb extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new xe){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(Um(o,l.x,c.x,h.x,p.x),Um(o,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new xe().fromArray(r))}return this}}var wb=Object.freeze({__proto__:null,ArcCurve:ub,CatmullRomCurve3:nv,CubicBezierCurve:vb,CubicBezierCurve3:_b,EllipseCurve:tv,LineCurve:yb,LineCurve3:Sb,QuadraticBezierCurve:Mb,QuadraticBezierCurve3:iv,SplineCurve:Eb});class on extends gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let v=0;const y=[],x=i/2;let d=0;_(),a===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(m,2));function _(){const M=new L,R=new L;let A=0;const b=(n-e)/i;for(let C=0;C<=s;C++){const T=[],S=C/s,N=S*(n-e)+e;for(let k=0;k<=r;k++){const B=k/r,W=B*l+o,X=Math.sin(W),j=Math.cos(W);R.x=N*X,R.y=-S*i+x,R.z=N*j,p.push(R.x,R.y,R.z),M.set(X,b,j).normalize(),f.push(M.x,M.y,M.z),m.push(B,1-S),T.push(v++)}y.push(T)}for(let C=0;C<r;C++)for(let T=0;T<s;T++){const S=y[T][C],N=y[T+1][C],k=y[T+1][C+1],B=y[T][C+1];h.push(S,N,B),h.push(N,k,B),A+=6}c.addGroup(d,A,0),d+=A}function g(M){const R=v,A=new xe,b=new L;let C=0;const T=M===!0?e:n,S=M===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,x*S,0),f.push(0,S,0),m.push(.5,.5),v++;const N=v;for(let k=0;k<=r;k++){const W=k/r*l+o,X=Math.cos(W),j=Math.sin(W);b.x=T*j,b.y=x*S,b.z=T*X,p.push(b.x,b.y,b.z),f.push(0,S,0),A.x=X*.5+.5,A.y=j*.5*S+.5,m.push(A.x,A.y),v++}for(let k=0;k<r;k++){const B=R+k,W=N+k;M===!0?h.push(W,W+1,B):h.push(W+1,W,B),C+=3}c.addGroup(d,C,M===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xf extends on{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class br extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new L,p=new L,f=new L;for(let m=0;m<=i;m++)for(let v=0;v<=r;v++){const y=v/r*s,x=m/i*Math.PI*2;p.x=(e+n*Math.cos(x))*Math.cos(y),p.y=(e+n*Math.cos(x))*Math.sin(y),p.z=n*Math.sin(x),o.push(p.x,p.y,p.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(p,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=r;v++){const y=(r+1)*m+v-1,x=(r+1)*(m-1)+v-1,d=(r+1)*(m-1)+v,_=(r+1)*m+v;a.push(y,x,_),a.push(x,d,_)}this.setIndex(a),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vf extends gn{constructor(e=new iv(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new xe;let h=new L;const p=[],f=[],m=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(m,2));function y(){for(let g=0;g<n;g++)x(g);x(s===!1?n:0),_(),d()}function x(g){h=e.getPointAt(g/n,h);const M=a.normals[g],R=a.binormals[g];for(let A=0;A<=r;A++){const b=A/r*Math.PI*2,C=Math.sin(b),T=-Math.cos(b);l.x=T*M.x+C*R.x,l.y=T*M.y+C*R.y,l.z=T*M.z+C*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let g=1;g<=n;g++)for(let M=1;M<=r;M++){const R=(r+1)*(g-1)+(M-1),A=(r+1)*g+(M-1),b=(r+1)*g+M,C=(r+1)*(g-1)+M;v.push(R,A,C),v.push(A,b,C)}}function _(){for(let g=0;g<=n;g++)for(let M=0;M<=r;M++)c.x=g/n,c.y=M/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new vf(new wb[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Dn extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ix,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rv extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ru=new pt,Om=new L,Fm=new L;class Tb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ff,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Om.setFromMatrixPosition(e.matrixWorld),n.position.copy(Om),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bb extends Tb{constructor(){super(new Yx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pu extends rv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new bb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ab extends rv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=km(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=km();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function km(){return(typeof performance>"u"?Date:performance).now()}const Bm=new pt;class Rb{constructor(e,n,i=0,r=1/0){this.ray=new lo(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new hf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Bm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bm),this}intersectObject(e,n=!0,i=[]){return lh(e,this,i,n),i.sort(zm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)lh(e[r],this,i,n);return i.sort(zm),i}}function zm(t,e){return t.distance-e.distance}function lh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)lh(s[a],e,n,!0)}}class Hm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pb extends lb{constructor(e=10,n=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let f=0,m=0,v=-o;f<=n;f++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const y=f===s?i:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const h=new gn;h.setAttribute("position",new Nt(l,3)),h.setAttribute("color",new Nt(c,3));const p=new Qx({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nb extends Gr{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);const Vm={type:"change"},_f={type:"start"},sv={type:"end"},il=new lo,jm=new Gi,Db=Math.cos(70*$S.DEG2RAD),Dt=new L,an=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nu=1e-6;class Lb extends Nb{constructor(e,n=null){super(e,n),this.state=ot.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Hr,this._lastTargetPosition=new L,this._quat=new Hr().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hm,this._sphericalDelta=new Hm,this._scale=1,this._panOffset=new L,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new L,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ub.bind(this),this._onPointerDown=Ib.bind(this),this._onPointerUp=Ob.bind(this),this._onContextMenu=jb.bind(this),this._onMouseWheel=Bb.bind(this),this._onKeyDown=zb.bind(this),this._onTouchStart=Hb.bind(this),this._onTouchMove=Vb.bind(this),this._onMouseDown=Fb.bind(this),this._onMouseMove=kb.bind(this),this._interceptControlDown=Gb.bind(this),this._interceptControlUp=Wb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vm),this.update(),this.state=ot.NONE}update(e=null){const n=this.object.position;Dt.copy(n).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),r<-Math.PI?r+=an:r>Math.PI&&(r-=an),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Dt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(il.origin.copy(this.object.position),il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(il.direction))<Db?this.object.lookAt(this.target):(jm.setFromNormalAndCoplanarPoint(this.object.up,this.target),il.intersectPlane(jm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nu||this._lastTargetPosition.distanceToSquared(this.target)>Nu?(this.dispatchEvent(Vm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Dt.setFromMatrixColumn(n,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,n){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(n,1):(Dt.setFromMatrixColumn(n,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(an*this._rotateDelta.x/n.clientHeight),this._rotateUp(an*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(an*this._rotateDelta.x/n.clientHeight),this._rotateUp(an*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new xe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ib(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function Ub(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Ob(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sv),this.state=ot.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Fb(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ot.DOLLY;break;case Ds.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ot.ROTATE}break;case Ds.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(_f)}function kb(t){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Bb(t){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(t.preventDefault(),this.dispatchEvent(_f),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(sv))}function zb(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function Hb(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ot.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ot.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(_f)}function Vb(t){switch(this._trackPointer(t),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ot.NONE}}function jb(t){this.enabled!==!1&&t.preventDefault()}function Gb(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wb(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Xb=({onComponentSelect:t,selectedComponentId:e})=>{const n=Ge.useRef(null),{currentPacket:i,setSelectedHotspotId:r}=mn(),[s,a]=Ge.useState(!0),[o,l]=Ge.useState(null),c=Ge.useRef(null),h=Ge.useRef(null),p=Ge.useRef(null),f=Ge.useRef(null),m=Ge.useRef(null),v=Ge.useRef(null),y=Ge.useRef([]),x=Ge.useRef(null),d=new L(0,1.2,7.8),_=new L(0,-.6,0),g={radome:{id:"radome",name:"PTFE Coated Fiberglass Radome",category:"Above-Water Fairing & Telemetry",material:"PTFE-Coated Marine Fiberglass",functionDesc:"Conical aerodynamic radome shaped at >60° pitch for ice shedding, protecting INSAT and NavIC antennas.",status:"Operational",metrics:{"Cone Pitch":"62.4° (Ice-Repellent)","RF Transmissivity":"98.6%","Ice Accretion":"0.0 mm (Shedding Pass)",Health:"99.1%"},hotspotMappingId:"core_avionics"},anemometer:{id:"anemometer",name:"Ultrasonic Anemometer & Mast",category:"Surface Meteorological Array",material:"316L Stainless Steel & Acoustic Ceramic",functionDesc:"Four-transducer acoustic resonance wind vector analyzer with barometric and temperature MEMS dies.",status:"Active (4/4 Firing)",metrics:{"Wind Speed":`${i.sensors.windSpeedKnots} kts`,"Wind Direction":`${i.sensors.windDirectionDeg}°`,Barometer:`${i.sensors.barometricPressureHpa} hPa`,"Air Temp":`${i.sensors.ambientSupercooledTempC}°C`},hotspotMappingId:"sensor_suite"},collar:{id:"collar",name:"Polyurea-Armored Buoyancy Collar",category:"Flotation & Waterline Stabilizer",material:"Closed-Cell Marine Foam with Polyurea Armor",functionDesc:"Safety orange buoyancy collar provides 120 kg net buoyancy and wave dampening at mean sea level.",status:"Nominal Flotation",metrics:{"Net Reserve Buoyancy":"124.5 kg","Collar Outer Ø":"0.98 m","Waterline Draft":"0.0 m (MSL)","Armor Coating":"3.2mm Polyurea Skin"},hotspotMappingId:"pte_suspension"},battery:{id:"battery",name:"Power Reservoir",category:"Primary Energy Storage",material:"LiSOCl2 Bobbin Cells & HLC 1550",functionDesc:"Dual 3.6V LiSOCl2 primary battery matrix buffered by Hybrid Layer Capacitor (HLC 1550) for 4.8 kbps bursts.",status:"READY",metrics:{"Battery Level":`${Math.round(i.power.hlcChargePercentage)}%`,Voltage:`${i.power.lisocl2CellVoltage} V`,Temperature:"29.1 °C",Status:"READY",Health:"98.2%"},hotspotMappingId:"power_reservoir"},pte_bellows:{id:"pte_bellows",name:"PTE Chamber & Flexible Bellows",category:"Pressure-Equalized Enclosure",material:"FVMQ Fluorosilicone & 20 cSt PDMS Fluid",functionDesc:"Equalizes pressure at depth using dynamic bellows breathing lung, preventing void collapse.",status:"Pressure Equalized",metrics:{"PDMS Fluid Pressure":`${i.pte.pdmsFluidPressureBar} bar`,"Void Saturation":"100.0% (Zero-Void)","Bellows Displacement":`${i.pte.fvmqBellowsDisplacementMm} mm`,Status:"Hermetic Pass"},hotspotMappingId:"pte_suspension"},spar:{id:"spar",name:"Main Submerged Spar Column (13.7:1 Draft)",category:"Hydrodynamic Hull & Ballast Column",material:"Thick Marine Fiberglass Composite",functionDesc:"Slender cylindrical spar acts as mechanical wave low-pass filter, minimizing heave in heavy swells.",status:"Structural Pass",metrics:{"Draft Ratio":"13.7:1 Slender Ratio","Submerged Length":"4.1 m","Outer Diameter":"0.24 m","Sacrificial Anodes":"3x Zinc Ring Active"},hotspotMappingId:"pte_suspension"},ctd_sonde:{id:"ctd_sonde",name:"Sensor Array (I-PDMS 1000m-Rated Sonde)",category:"Oceanographic Benthic Sensor",material:"Titanium & Toroidal Conductivity Cell",functionDesc:"RS485 micro-CTD sonde measuring water temperature, conductivity/salinity, and hydrostatic pressure.",status:"Operational",metrics:{Temperature:`${i.sensors.waterTempC} °C`,Depth:"18.6 m",Pressure:"2.1 bar",Conductivity:"Normal"},hotspotMappingId:"sensor_suite"},benthic_cage:{id:"benthic_cage",name:"Benthic Protective Titanium Cage",category:"Base Ballast & Impact Guard",material:"Titanium Grade 5 Tubular Structure",functionDesc:"Rugged cage protecting the CTD sensors against underwater ice debris, sea bottom collision, and grounding.",status:"Hermetic / Secure",metrics:{"Impact Rating":"12.5 kJ Yield","Depth Rating":"1000 m Hydrostatic","Ballast Mass":"32.0 kg Lead Base","Acoustic Release":"Standby Arm"},hotspotMappingId:"sensor_suite"}};Ge.useEffect(()=>{if(!n.current)return;const R=n.current.clientWidth,A=n.current.clientHeight,b=new ab;c.current=b,b.background=new We(1253418),b.fog=new mf(924452,.045);const C=new Un(40,R/A,.1,100);C.position.copy(d),C.lookAt(_),h.current=C;const T=new sb({antialias:!0,alpha:!0});T.setSize(R,A),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,T.shadowMap.type=Sx,p.current=T,n.current.replaceChildren(T.domElement);const S=new Lb(C,T.domElement);S.enableDamping=!0,S.dampingFactor=.06,S.target.copy(_),S.minDistance=3.2,S.maxDistance=16,S.maxPolarAngle=Math.PI-.05,S.minPolarAngle=.1,S.autoRotate=s,S.autoRotateSpeed=.8,f.current=S,S.addEventListener("start",()=>{S.autoRotate=!1});const N=new Ab(2966354,1.9);b.add(N);const k=new Pu(15857145,2.6);k.position.set(5,10,7),k.castShadow=!0,b.add(k);const B=new Pu(1920621,1.4);B.position.set(-5,-4,-4),b.add(B);const W=new Pu(5219256,1.1);W.position.set(0,4,-8),b.add(W);const X=new uo(18,18,64,64),j=X.attributes.position;for(let ke=0;ke<j.count;ke++){const je=j.getX(ke),Je=j.getY(ke),ut=.08*Math.sin(je*1.8+Je*1.2)+.04*Math.cos(je*2.8-Je*2.2);j.setZ(ke,ut)}X.computeVertexNormals();const Z=new Dn({color:1259596,roughness:.18,metalness:.75,transparent:!0,opacity:.82,side:oi}),I=new at(X,Z);I.rotation.x=-Math.PI/2,I.position.y=0,b.add(I),v.current=I;const $=new Pb(10,20,4020840,1715256);$.position.y=-4.95,b.add($);const Q=120,oe=new gn,ye=new Float32Array(Q*3);for(let ke=0;ke<Q;ke++)ye[ke*3+0]=(Math.random()-.5)*8,ye[ke*3+1]=-.2-Math.random()*4.6,ye[ke*3+2]=(Math.random()-.5)*8;oe.setAttribute("position",new Qn(ye,3));const Ye=new ev({color:5219256,size:.035,transparent:!0,opacity:.5}),G=new cb(oe,Ye);b.add(G);const q=new Ma;m.current=q,b.add(q);const le=[],de=new Dn({color:15592941,roughness:.28,metalness:.08}),Te=new Dn({color:9742776,roughness:.22,metalness:.85}),Ie=new Dn({color:15234338,roughness:.38,metalness:.1}),Oe=new Dn({color:2832452,roughness:.35,metalness:.55}),lt=new Dn({color:5531253,roughness:.25,metalness:.88}),D=new Dn({color:1581094,roughness:.7,metalness:.1}),_t=new xf(.23,.85,36),$e=new at(_t,de);$e.position.y=1.88,$e.castShadow=!0,$e.userData={id:"radome",info:g.radome},q.add($e),le.push({mesh:$e,info:g.radome});const Qe=new on(.007,.007,.16,12),Se=new at(Qe,Te);Se.position.y=2.38,q.add(Se);const yt=new on(.065,.065,.24,24),be=new at(yt,Te);be.position.y=1.35,be.userData={id:"anemometer",info:g.anemometer},q.add(be),le.push({mesh:be,info:g.anemometer});for(let ke=0;ke<4;ke++){const je=ke/4*Math.PI*2,Je=new on(.012,.012,.22,12),ut=new at(Je,Te);ut.position.set(Math.cos(je)*.15,1.35,Math.sin(je)*.15),q.add(ut)}const Ue=new on(.18,.25,.65,36),P=new at(Ue,de.clone());P.position.y=.9,P.castShadow=!0,P.userData={id:"anemometer",info:g.anemometer},q.add(P),le.push({mesh:P,info:g.anemometer});const E=new on(.5,.5,.6,40),H=new at(E,Ie);H.position.y=.22,H.castShadow=!0,H.receiveShadow=!0,H.userData={id:"collar",info:g.collar},q.add(H),le.push({mesh:H,info:g.collar});const J=new br(.51,.026,16,48),te=new at(J,D);te.rotation.x=Math.PI/2,te.position.y=.22,q.add(te);const ee=new on(.24,.24,.45,32),Ee=new at(ee,Oe.clone());Ee.position.y=-.28,Ee.userData={id:"pte_bellows",info:g.pte_bellows},q.add(Ee),le.push({mesh:Ee,info:g.pte_bellows});const ue=new br(.255,.03,16,32),me=new Dn({color:5219256,roughness:.5,metalness:.3}),Ne=new at(ue,me);Ne.rotation.x=Math.PI/2,Ne.position.y=-.42,Ne.userData={id:"pte_bellows",info:g.pte_bellows},q.add(Ne),le.push({mesh:Ne,info:g.pte_bellows});const ie=new on(.2,.2,.65,32),pe=new Dn({color:3359828,roughness:.3,metalness:.6}),He=new at(ie,pe);He.position.y=-.8,He.userData={id:"battery",info:g.battery},q.add(He),le.push({mesh:He,info:g.battery});const Re=new on(.125,.125,2.65,32),he=new at(Re,Oe);he.position.y=-2.35,he.castShadow=!0,he.userData={id:"spar",info:g.spar},q.add(he),le.push({mesh:he,info:g.spar}),[-1.5,-2.3,-3.1].forEach(ke=>{const je=new on(.14,.14,.08,24),Je=new Dn({color:9084584,metalness:.85,roughness:.2}),ut=new at(je,Je);ut.position.y=ke,q.add(ut)});const Le=new on(.065,.065,.45,24),Fe=new Dn({color:5219256,metalness:.8,roughness:.2}),st=new at(Le,Fe);st.position.y=-3.85,st.userData={id:"ctd_sonde",info:g.ctd_sonde},q.add(st),le.push({mesh:st,info:g.ctd_sonde});const U=new br(.042,.012,12,24),re=new Dn({color:5420936,roughness:.2,metalness:.7}),Y=new at(U,re);Y.rotation.x=Math.PI/2,Y.position.y=-4.08,q.add(Y);const K=new br(.28,.018,12,32),se=new at(K,lt);se.rotation.x=Math.PI/2,se.position.y=-3.7,se.userData={id:"benthic_cage",info:g.benthic_cage},q.add(se),le.push({mesh:se,info:g.benthic_cage});const Ae=new br(.34,.022,12,36),Ve=new at(Ae,lt);Ve.rotation.x=Math.PI/2,Ve.position.y=-4.55,Ve.userData={id:"benthic_cage",info:g.benthic_cage},q.add(Ve),le.push({mesh:Ve,info:g.benthic_cage});for(let ke=0;ke<6;ke++){const je=ke/6*Math.PI*2,Je=Math.cos(je)*.28,ut=Math.sin(je)*.28,hi=Math.cos(je)*.34,Xr=Math.sin(je)*.34,w=new nv([new L(Je,-3.7,ut),new L(Je*1.15,-4.15,ut*1.15),new L(hi,-4.55,Xr)]),O=new vf(w,16,.014,8,!1),z=new at(O,lt);z.userData={id:"benthic_cage",info:g.benthic_cage},q.add(z),le.push({mesh:z,info:g.benthic_cage})}const St=new on(.18,.22,.12,24),At=new at(St,Oe);At.position.y=-4.52,q.add(At),y.current=le;const qe=new Rb,xn=new xe,vn=ke=>{if(!n.current||!h.current)return null;const je=n.current.getBoundingClientRect();xn.x=(ke.clientX-je.left)/je.width*2-1,xn.y=-((ke.clientY-je.top)/je.height)*2+1,qe.setFromCamera(xn,h.current);const Je=y.current.map(hi=>hi.mesh),ut=qe.intersectObjects(Je,!1);if(ut.length>0){const hi=ut[0].object;return y.current.find(w=>w.mesh===hi)||null}return null},Qs=ke=>{const je=vn(ke);if(je){if(l(je.info.name),n.current.style.cursor="pointer",x.current&&x.current!==je.mesh){const ut=x.current.material;ut&&ut.emissive&&ut.emissive.setHex(0)}x.current=je.mesh;const Je=je.mesh.material;Je&&Je.emissive&&Je.emissive.setHex(1717060)}else if(l(null),n.current.style.cursor="default",x.current){const Je=x.current.material;Je&&Je.emissive&&Je.emissive.setHex(0),x.current=null}},ti=ke=>{const je=vn(ke);je&&(t&&t(je.info),r&&r(je.info.hotspotMappingId))},Li=T.domElement;Li.addEventListener("mousemove",Qs),Li.addEventListener("click",ti);let ea;const ho=new Cb,pr=()=>{ea=requestAnimationFrame(pr);const ke=ho.getElapsedTime();if(S.update(),v.current){const je=v.current.geometry.attributes.position;for(let Je=0;Je<je.count;Je++){const ut=je.getX(Je),hi=je.getY(Je),Xr=.07*Math.sin(ut*1.8+ke*1.5)+.04*Math.cos(hi*2.2+ke*1.2);je.setZ(Je,Xr)}je.needsUpdate=!0}m.current&&(m.current.position.y=.04*Math.sin(ke*1.4),m.current.rotation.z=.015*Math.sin(ke*.9)),T.render(b,C)};pr();const ta=new ResizeObserver(ke=>{for(let je of ke){const{width:Je,height:ut}=je.contentRect;Je&&ut&&h.current&&p.current&&(h.current.aspect=Je/ut,h.current.updateProjectionMatrix(),p.current.setSize(Je,ut))}});return ta.observe(n.current),()=>{cancelAnimationFrame(ea),Li.removeEventListener("mousemove",Qs),Li.removeEventListener("click",ti),ta.disconnect(),T.dispose()}},[]),Ge.useEffect(()=>{f.current&&(f.current.autoRotate=s)},[s]);const M=Ge.useCallback(()=>{!h.current||!f.current||(h.current.position.copy(d),f.current.target.copy(_),f.current.update())},[]);return u.jsxs("div",{className:"relative w-full h-full min-h-[420px] sm:min-h-[480px] flex flex-col justify-between overflow-hidden select-none",children:[u.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full"}),u.jsxs("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center space-y-2 bg-[#1A2834]/80 backdrop-blur-md p-1.5 rounded-xl border border-tamas-border/60 shadow-lg text-xs",children:[u.jsxs("button",{title:"Click and drag with left mouse to rotate",className:"flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] text-tamas-info transition-colors border border-tamas-border/40",children:[u.jsx(mx,{className:"w-4 h-4 text-tamas-info"}),u.jsx("span",{className:"text-[9px] font-medium text-tamas-textMuted mt-0.5",children:"Rotate"})]}),u.jsxs("button",{title:"Scroll mouse wheel to zoom in/out",className:"flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] text-tamas-textMuted hover:text-white transition-colors border border-tamas-border/40",children:[u.jsx(K1,{className:"w-4 h-4"}),u.jsx("span",{className:"text-[9px] font-medium text-tamas-textMuted mt-0.5",children:"Zoom"})]}),u.jsxs("button",{title:"Drag with right mouse button to pan",className:"flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] text-tamas-textMuted hover:text-white transition-colors border border-tamas-border/40",children:[u.jsx(D1,{className:"w-4 h-4"}),u.jsx("span",{className:"text-[9px] font-medium text-tamas-textMuted mt-0.5",children:"Pan"})]}),u.jsxs("button",{onClick:M,title:"Reset camera view to default perspective",className:"flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] text-tamas-textMuted hover:text-white transition-colors border border-tamas-border/40",children:[u.jsx(b1,{className:"w-4 h-4"}),u.jsx("span",{className:"text-[9px] font-medium text-tamas-textMuted mt-0.5",children:"Reset View"})]}),u.jsxs("button",{onClick:()=>a(!s),title:"Toggle Auto Rotation ON/OFF",className:"flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#202F3B]/80 hover:bg-[#283C4B] transition-colors border border-tamas-border/40",children:[u.jsx("span",{className:"text-[9px] font-medium text-tamas-textMuted",children:"Auto"}),u.jsx("span",{className:"text-[9px] font-medium text-tamas-textMuted",children:"Rotate"}),u.jsx("span",{className:`text-[10px] font-bold mt-0.5 ${s?"text-tamas-info":"text-tamas-textMuted/60"}`,children:s?"ON":"OFF"})]})]}),u.jsxs("div",{className:"absolute right-5 bottom-5 z-20 pointer-events-none flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-tamas-border/60 bg-[#1A2834]/60 backdrop-blur-sm",children:[u.jsx("div",{className:"absolute inset-1.5 rounded-full border border-dashed border-tamas-border/40"}),u.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[u.jsx("div",{className:"w-full h-px bg-tamas-border/30"}),u.jsx("div",{className:"h-full w-px bg-tamas-border/30 absolute"})]}),u.jsx("span",{className:"absolute top-1 text-[9px] font-bold text-tamas-info font-mono",children:"N"}),u.jsx("span",{className:"absolute right-1 text-[9px] font-bold text-tamas-textMuted font-mono",children:"E"}),u.jsx("span",{className:"absolute bottom-1 text-[9px] font-bold text-tamas-textMuted font-mono",children:"S"}),u.jsx("span",{className:"absolute left-1 text-[9px] font-bold text-tamas-textMuted font-mono",children:"W"}),u.jsx("div",{className:"w-1 h-7 bg-gradient-to-t from-tamas-border to-tamas-orange rounded-full transform rotate-45 shadow-sm"})]}),o&&u.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-tamas-card/90 backdrop-blur-md border border-tamas-info/50 text-tamas-info text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md animate-fade-in pointer-events-none",children:[u.jsx(gx,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Click to Inspect: ",o]})]})]})},Gm=()=>{const{currentPacket:t,setSelectedHotspotId:e}=mn(),[n,i]=Ge.useState({id:"battery",name:"Power Reservoir",category:"Primary Energy Storage",material:"LiSOCl2 Bobbin Cells & HLC 1550",functionDesc:"Dual 3.6V LiSOCl2 primary battery matrix buffered by Hybrid Layer Capacitor (HLC 1550) for 4.8 kbps bursts.",status:"READY",metrics:{"Battery Level":"82%",Voltage:"3.62 V",Temperature:"29.1 °C",Status:"READY",Health:"98.2%"},hotspotMappingId:"power_reservoir"}),r=s=>{i(s),e&&e(s.hotspotMappingId)};return u.jsxs("div",{className:"space-y-3.5 flex flex-col h-full select-none",children:[u.jsxs("div",{className:"tamas-card p-4 sm:p-5 flex flex-col flex-1 relative overflow-hidden",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-2",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-sm font-bold tracking-wider text-tamas-text uppercase",children:"DEVICE OVERVIEW"}),u.jsx("p",{className:"text-xs text-tamas-textMuted",children:"7.0m Autonomous Spar-Buoy"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-tamas-cardLight border border-tamas-border text-xs text-tamas-textMuted hover:text-tamas-text transition-colors cursor-pointer",children:[u.jsx(A1,{className:"w-3.5 h-3.5 text-tamas-info"}),u.jsx("span",{children:"Component Info"})]})]}),u.jsx("div",{className:"flex-1 w-full rounded-lg overflow-hidden relative",children:u.jsx(Xb,{onComponentSelect:r,selectedComponentId:n.id})})]}),u.jsxs("div",{className:"tamas-card p-4",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3 border-b border-tamas-border/40 pb-2",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("span",{className:"text-[11px] font-bold text-tamas-textMuted tracking-wider uppercase",children:"SELECTED COMPONENT"}),u.jsx("span",{className:"text-sm font-bold text-tamas-text",children:n.name})]}),u.jsx("div",{className:"w-5 h-5 rounded-full border border-tamas-orange/60 flex items-center justify-center",children:u.jsx("div",{className:"w-2 h-2 rounded-full bg-tamas-orange"})})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-3 items-center text-xs",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-tamas-textMuted block uppercase",children:"Battery Level"}),u.jsx("span",{className:"text-base font-bold text-tamas-text block mt-0.5",children:"82%"}),u.jsx("div",{className:"w-full h-1 bg-[#1A2834] rounded-full mt-1.5 overflow-hidden border border-tamas-border/40",children:u.jsx("div",{className:"h-full bg-tamas-operational rounded-full w-[82%]"})})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-tamas-textMuted block uppercase",children:"Voltage"}),u.jsx("span",{className:"text-base font-bold text-tamas-text block mt-0.5 font-mono",children:"3.62 V"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-tamas-textMuted block uppercase",children:"Temperature"}),u.jsx("span",{className:"text-base font-bold text-tamas-text block mt-0.5 font-mono",children:"29.1 °C"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-tamas-textMuted block uppercase",children:"Status"}),u.jsx("span",{className:"text-base font-bold text-tamas-operational block mt-0.5",children:"READY"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-tamas-textMuted block uppercase",children:"Health"}),u.jsx("span",{className:"text-base font-bold text-tamas-text block mt-0.5 font-mono",children:"98.2%"})]})]})]})]})},Yb=()=>{const{currentPacket:t,radarContact:e,vessel:n,openDistressModal:i,triggerIcebergAnomaly:r}=mn(),s=Ge.useRef(null);return Ge.useEffect(()=>{const a=s.current;if(!a)return;const o=a.getContext("2d");if(!o)return;let l,c=0;const h=()=>{const p=a.width,f=a.height,m=p/2,v=f/2,y=Math.min(p,f)/2-8;o.clearRect(0,0,p,f),o.beginPath(),o.arc(m,v,y,0,Math.PI*2),o.fillStyle="#18242D",o.fill(),o.strokeStyle="#3D5A68",o.lineWidth=1,o.stroke(),[.33,.66,1].forEach(R=>{o.beginPath(),o.arc(m,v,y*R,0,Math.PI*2),o.strokeStyle="rgba(61, 90, 104, 0.5)",o.lineWidth=1,o.stroke()}),o.beginPath(),o.moveTo(m-y,v),o.lineTo(m+y,v),o.moveTo(m,v-y),o.lineTo(m,v+y),o.strokeStyle="rgba(61, 90, 104, 0.5)",o.lineWidth=1,o.stroke(),c=(c+.02)%(Math.PI*2);const x=o.createRadialGradient(m,v,0,m,v,y);x.addColorStop(0,"rgba(79, 163, 184, 0.2)"),x.addColorStop(1,"rgba(79, 163, 184, 0.0)"),o.save(),o.beginPath(),o.moveTo(m,v),o.arc(m,v,y,c-.45,c),o.closePath(),o.fillStyle=x,o.fill(),o.restore(),o.beginPath(),o.moveTo(m,v),o.lineTo(m+y*Math.cos(c),v+y*Math.sin(c)),o.strokeStyle="#4FA3B8",o.lineWidth=1.2,o.stroke();const d=m+y*.45*Math.cos(-Math.PI/4),_=v+y*.45*Math.sin(-Math.PI/4);o.beginPath(),o.arc(d,_,3.5,0,Math.PI*2),o.fillStyle="#52B788",o.shadowColor="#52B788",o.shadowBlur=6,o.fill(),o.shadowBlur=0;const g=m+y*.7*Math.cos(-Math.PI/3.6),M=v+y*.7*Math.sin(-Math.PI/3.6);o.beginPath(),o.arc(g,M,2.5,0,Math.PI*2),o.fillStyle="#4FA3B8",o.fill(),o.beginPath(),o.arc(m,v,2.5,0,Math.PI*2),o.fillStyle="#E8EDF0",o.fill(),l=requestAnimationFrame(h)};return h(),()=>cancelAnimationFrame(l)},[]),u.jsxs("div",{className:"space-y-3.5 flex flex-col h-full select-none",children:[u.jsxs("div",{className:"tamas-card p-4 space-y-2.5",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-tamas-border/60 pb-2",children:[u.jsx("h2",{className:"text-xs font-bold tracking-wider text-tamas-text uppercase",children:"LIVE OCEAN DATA"}),u.jsx("span",{className:"text-[11px] text-tamas-textMuted",children:"Southern Ocean Sector"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[u.jsxs("div",{className:"p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-md bg-[#202F3B] text-tamas-info",children:u.jsx(xx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block",children:"TEMPERATURE"}),u.jsx("span",{className:"text-base font-extrabold text-tamas-text font-mono block",children:"26.4 °C"})]})]}),u.jsxs("div",{className:"p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-md bg-[#202F3B] text-tamas-info",children:u.jsx(v1,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block",children:"DEPTH"}),u.jsx("span",{className:"text-base font-extrabold text-tamas-text font-mono block",children:"18.6 m"})]})]}),u.jsxs("div",{className:"p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-md bg-[#202F3B] text-tamas-info",children:u.jsx(vx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block",children:"WAVE HEIGHT"}),u.jsx("span",{className:"text-base font-extrabold text-tamas-text font-mono block",children:"1.2 m"})]})]}),u.jsxs("div",{className:"p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-md bg-[#202F3B] text-tamas-info",children:u.jsx(_x,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block",children:"WIND SPEED"}),u.jsx("span",{className:"text-base font-extrabold text-tamas-text font-mono block",children:"24.3 kts"})]})]}),u.jsxs("div",{className:"p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-md bg-[#202F3B] text-tamas-info",children:u.jsx(hx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block",children:"PRESSURE"}),u.jsx("span",{className:"text-base font-extrabold text-tamas-text font-mono block",children:"2.1 bar"})]})]}),u.jsxs("div",{className:"p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-md bg-[#202F3B] text-tamas-info",children:u.jsx(dx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block",children:"CONDUCTIVITY"}),u.jsx("span",{className:"text-base font-extrabold text-tamas-text font-mono block",children:"Normal"})]})]})]})]}),u.jsxs("div",{className:"tamas-card p-4 space-y-2.5",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-tamas-border/60 pb-2",children:[u.jsx("h2",{className:"text-xs font-bold tracking-wider text-tamas-text uppercase",children:"TACTICAL RECOVERY RADAR"}),u.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full tamas-tag-green font-semibold",children:"Target Detected"})]}),u.jsxs("div",{className:"flex items-center space-x-3.5",children:[u.jsx("div",{className:"w-24 h-24 flex-shrink-0",children:u.jsx("canvas",{ref:s,width:140,height:140,className:"w-full h-full rounded-full border border-tamas-border/60"})}),u.jsxs("div",{className:"flex-1 space-y-1 text-xs",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-[11px] text-tamas-textMuted",children:"Distance"}),u.jsx("span",{className:"text-xs font-bold text-tamas-text font-mono",children:"5.2 km"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-[11px] text-tamas-textMuted",children:"Direction"}),u.jsx("span",{className:"text-xs font-bold text-tamas-text font-mono",children:"NE (45°)"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-[11px] text-tamas-textMuted",children:"Vessel"}),u.jsx("span",{className:"text-xs font-semibold text-tamas-text",children:"Unknown"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-[11px] text-tamas-textMuted",children:"Last Update"}),u.jsx("span",{className:"text-xs font-mono text-tamas-text",children:"2 sec ago"})]}),u.jsxs("button",{className:"w-full mt-2 py-1 rounded bg-[#1A2733] hover:bg-[#243442] border border-tamas-border/50 text-[11px] font-medium text-tamas-text flex items-center justify-center space-x-1 transition-colors",children:[u.jsx(P1,{className:"w-3 h-3 text-tamas-info"}),u.jsx("span",{children:"Expand Radar"})]})]})]})]}),u.jsxs("div",{className:"tamas-card p-4 space-y-2.5 flex-1",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-tamas-border/60 pb-2",children:[u.jsx("h2",{className:"text-xs font-bold tracking-wider text-tamas-text uppercase",children:"ALERTS"}),u.jsx("button",{className:"text-[11px] text-tamas-info hover:underline font-medium",children:"View All"})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-[#1A2733] border border-tamas-warning/40 space-y-2",children:[u.jsxs("div",{className:"flex items-start space-x-2",children:[u.jsx(bd,{className:"w-4 h-4 text-tamas-warning mt-0.5 flex-shrink-0"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-bold text-tamas-warning block",children:"Simulation Anomaly Detected"}),u.jsx("p",{className:"text-[11px] text-tamas-textMuted mt-0.5",children:"Critical signal inconsistency detected."})]})]}),u.jsxs("div",{className:"flex items-center space-x-3 text-[10px] text-tamas-textMuted pt-0.5 font-mono",children:[u.jsxs("span",{children:["Severity: ",u.jsx("strong",{className:"text-tamas-warning",children:"High"})]}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"2 min ago"})]}),u.jsxs("div",{className:"flex items-center space-x-2 pt-1",children:[u.jsx("button",{onClick:i,className:"flex-1 py-1.5 rounded-md bg-[#202F3B] hover:bg-[#263745] border border-tamas-border/60 text-xs font-semibold text-tamas-text transition-colors text-center",children:"View Details"}),u.jsx("button",{onClick:()=>r(!1),className:"flex-1 py-1.5 rounded-md bg-tamas-orange hover:bg-orange-600 text-white text-xs font-bold tracking-wide transition-colors text-center shadow-sm",children:"Run Diagnostic"})]})]})]})]})},$b=()=>{const{packetHistory:t,currentPacket:e,activeAnalyticsTab:n,setActiveAnalyticsTab:i}=mn(),r=t.slice(-48),s=[{id:"temp",label:"Temperature"},{id:"depth",label:"Depth"},{id:"pressure",label:"Pressure"},{id:"battery",label:"Battery"},{id:"wave",label:"Wave Activity"}];let a=[],o="°C",l="Temperature (°C)",c="26.4 °C",h=["28","26","24","22","20"],p=20,f=28;switch(n){case"temp":a=r.length>0?r.map(b=>25.8+(b.sensors.waterTempC+1.14)*.4+Math.sin(b.packetSequence*.3)*.8):[26.4],o="°C",l="Temperature (°C)",c="26.4 °C",h=["28","26","24","22","20"],p=20,f=28;break;case"depth":a=r.length>0?r.map(b=>18+Math.sin(b.packetSequence*.2)*1.2):[18.6],o="m",l="Depth (m)",c="18.6 m",h=["22","20","18","16","14"],p=14,f=22;break;case"pressure":a=r.length>0?r.map(b=>2+Math.sin(b.packetSequence*.25)*.2):[2.1],o="bar",l="Pressure (bar)",c="2.1 bar",h=["2.4","2.2","2.0","1.8","1.6"],p=1.6,f=2.4;break;case"battery":a=r.length>0?r.map(b=>b.power.lisocl2CellVoltage):[3.62],o="V",l="Voltage (V)",c=`${e.power.lisocl2CellVoltage} V`,h=["3.8","3.7","3.6","3.5","3.4"],p=3.4,f=3.8;break;case"wave":a=r.length>0?r.map(b=>1+Math.abs(b.gyro.pitch)*.04):[1.2],o="m",l="Wave Height (m)",c="1.2 m",h=["2.0","1.6","1.2","0.8","0.4"],p=.4,f=2;break}const m=840,v=150,y={top:16,right:24,bottom:24,left:36},x=m-y.left-y.right,d=v-y.top-y.bottom,_=a.length>=24?a:Array.from({length:24},(b,C)=>p+(f-p)*(.45+.25*Math.sin(C*.4)+.15*Math.cos(C*.8))),g=b=>y.left+b/Math.max(1,_.length-1)*x,M=b=>y.top+d-Math.max(0,Math.min(1,(b-p)/(f-p)))*d,R=_.map((b,C)=>`${C===0?"M":"L"} ${g(C).toFixed(1)} ${M(b).toFixed(1)}`).join(" "),A=["21:45","21:50","21:55","22:00","22:05","22:10","22:15","22:20","22:25","22:30","22:35","22:40"];return u.jsxs("div",{className:"tamas-card p-4 sm:p-5 flex flex-col justify-between h-full select-none",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-tamas-border/60 pb-3",children:[u.jsxs("div",{className:"flex items-center flex-wrap gap-4",children:[u.jsx("h2",{className:"text-xs font-bold tracking-wider text-tamas-text uppercase",children:"SENSOR ANALYTICS"}),u.jsx("div",{className:"flex items-center bg-[#1A2834] p-0.5 rounded-lg border border-tamas-border/60 space-x-1 text-xs",children:s.map(b=>{const C=n===b.id;return u.jsx("button",{onClick:()=>i(b.id),className:`px-3 py-1 rounded-md text-xs font-medium transition-all ${C?"bg-[#263745] text-tamas-info border border-tamas-info/40 font-semibold":"text-tamas-textMuted hover:text-tamas-text"}`,children:b.label},b.id)})})]}),u.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono",children:[u.jsx("span",{className:"w-3 h-0.5 bg-tamas-info"}),u.jsx("span",{className:"text-tamas-textMuted",children:l}),u.jsx("span",{className:"font-bold text-tamas-info",children:c})]})]}),u.jsx("div",{className:"w-full pt-2",children:u.jsxs("svg",{viewBox:`0 0 ${m} ${v}`,className:"w-full h-auto overflow-visible select-none",children:[u.jsx("text",{x:y.left-18,y:y.top-4,fill:"#9AA9B5",fontSize:"10",fontFamily:"Inter",children:o}),h.map((b,C)=>{const T=y.top+C/(h.length-1)*d;return u.jsxs("g",{children:[u.jsx("line",{x1:y.left,y1:T,x2:y.left+x,y2:T,stroke:"#283947",strokeDasharray:"3,3"}),u.jsx("text",{x:y.left-10,y:T+3.5,textAnchor:"end",fill:"#9AA9B5",fontSize:"10",fontFamily:"JetBrains Mono",children:b})]},C)}),u.jsx("path",{d:R,fill:"none",stroke:"#4FA3B8",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),_.length>0&&u.jsx("circle",{cx:g(_.length-1),cy:M(_[_.length-1]),r:"4",fill:"#4FA3B8",stroke:"#18242D",strokeWidth:"2"}),A.map((b,C)=>{const T=y.left+C/(A.length-1)*x;return u.jsx("text",{x:T,y:y.top+d+16,textAnchor:"middle",fill:"#9AA9B5",fontSize:"9",fontFamily:"JetBrains Mono",children:b},C)})]})})]})},qb=()=>{const{dropSafetyCoverOpen:t,dropAuthorized:e,dropTimestamp:n,toggleSafetyCover:i,authorizeDrop:r}=mn(),s=[{label:"Core Avionics",status:"OK"},{label:"Sensor Suite",status:"OK"},{label:"Power Reservoir",status:"OK"},{label:"Telemetry Connection",status:"OK"}];return u.jsxs("div",{className:"tamas-card p-4 sm:p-5 flex flex-col justify-between h-full select-none",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-2",children:[u.jsx("h2",{className:"text-xs font-bold tracking-wider text-tamas-text uppercase",children:"PRE-DROP CHECKLIST"}),u.jsx("span",{className:"text-[11px] px-2.5 py-0.5 rounded-full tamas-tag-green font-semibold font-mono",children:"4/4 PASSED"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-12 gap-4 items-center flex-1",children:[u.jsx("div",{className:"sm:col-span-7 space-y-1.5 text-xs",children:s.map((a,o)=>u.jsxs("div",{className:"flex items-center justify-between p-1.5 px-2.5 rounded bg-[#1A2733] border border-tamas-border/40",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(V1,{className:"w-3.5 h-3.5 text-tamas-operational"}),u.jsx("span",{className:"text-tamas-text font-medium",children:a.label})]}),u.jsx("span",{className:"text-tamas-operational font-bold font-mono text-[11px]",children:a.status})]},o))}),u.jsxs("div",{className:"sm:col-span-5 flex flex-col justify-center space-y-2 border-l border-tamas-border/40 pl-0 sm:pl-4",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(z1,{className:"w-4 h-4 text-tamas-info"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-bold text-tamas-text block",children:"AUTHORIZE DROP"}),u.jsx("p",{className:"text-[10px] text-tamas-textMuted",children:"All systems ready for deployment."})]})]}),u.jsx("button",{onClick:()=>{!t&&!e&&i(),r()},className:`w-full py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 uppercase tracking-wider transition-all shadow-sm ${e?"bg-tamas-operational text-white cursor-default":"bg-tamas-orange hover:bg-orange-600 text-white cursor-pointer active:scale-95"}`,children:e?u.jsxs(u.Fragment,{children:[u.jsx(gl,{className:"w-4 h-4"}),u.jsx("span",{children:"DROP AUTHORIZED"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Td,{className:"w-4 h-4"}),u.jsx("span",{children:"AUTHORIZE DROP"})]})}),e&&u.jsxs("span",{className:"text-[10px] text-tamas-operational text-center font-mono block",children:["Sealed: ",n==null?void 0:n.split("T")[1].slice(0,8)," UTC"]})]})]})]})},Kb=()=>{const{currentPacket:t,dropSafetyCoverOpen:e,dropAuthorized:n,dropTimestamp:i,toggleSafetyCover:r,authorizeDrop:s,disarmDistressAnomaly:a,openDistressModal:o,triggerIcebergAnomaly:l}=mn(),c=t.distress.sasrActive,h=t.gyro.tiltAngle>40&&!c;return u.jsxs("div",{className:"space-y-6 font-sans",children:[u.jsxs("div",{className:"ocean-card rounded-xl p-5 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-ocean-700/80 pb-3",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx(bd,{className:`w-5 h-5 ${c?"text-marine-red":h?"text-marine-amber":"text-marine-teal"}`}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-sm font-bold tracking-wider text-slate-100 uppercase",children:"ACTIVE ALERTS & ANOMALY MANAGER"}),u.jsx("p",{className:"text-xs text-slate-400",children:"Continuous automated threshold analysis and safety telemetry"})]})]}),u.jsx("span",{className:`text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold border ${c?"bg-marine-red/15 text-marine-red border-marine-red/30":h?"bg-marine-amber/15 text-marine-amber border-marine-amber/30":"bg-marine-emerald/15 text-marine-emerald border-marine-emerald/30"}`,children:c?"1 CRITICAL":h?"1 WARNING":"0 ACTIVE ALERTS"})]}),c?u.jsxs("div",{className:"p-4 rounded-xl bg-marine-red/10 border border-marine-red/40 space-y-3",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(fx,{className:"w-5 h-5 text-marine-red"}),u.jsx("span",{className:"font-bold text-sm text-slate-100",children:"CRITICAL STRUCTURAL OVERRIDE: TILT > 60° (ICE SUBDUCTION)"})]}),u.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-marine-red text-white font-bold font-mono",children:"SEVERITY: CRITICAL"})]}),u.jsxs("p",{className:"text-xs text-slate-300",children:["Structural tilt exceeded the vertical limit for sustained duration (",t.gyro.sustainedTiltSeconds,"s). Autonomous SAS&R 406.05 MHz emergency beacon transmitting to INMCC Bangalore."]}),u.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-marine-red/20 text-xs",children:[u.jsxs("span",{className:"text-slate-400 flex items-center space-x-1 font-mono",children:[u.jsx(_1,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Detected: Just now"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("button",{onClick:o,className:"px-3 py-1.5 rounded-lg bg-marine-red hover:bg-red-600 text-white font-semibold transition-colors shadow-sm",children:"VIEW FORENSIC DETAILS"}),u.jsx("button",{onClick:a,className:"px-3 py-1.5 rounded-lg bg-ocean-800 hover:bg-ocean-700 text-slate-200 border border-ocean-600 transition-colors",children:"RESET SYSTEM"})]})]})]}):h?u.jsxs("div",{className:"p-4 rounded-xl bg-marine-amber/10 border border-marine-amber/40 space-y-3",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(bd,{className:"w-5 h-5 text-marine-amber"}),u.jsx("span",{className:"font-bold text-sm text-slate-100",children:"SWELL INDUCED TILT WARNING: PITCH/ROLL > 40°"})]}),u.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-marine-amber text-slate-950 font-bold font-mono",children:"SEVERITY: MEDIUM"})]}),u.jsxs("p",{className:"text-xs text-slate-300",children:["Wave surge from Antarctic swell has pushed buoy attitude to ",t.gyro.tiltAngle,"°. Structural damping active. Approaching 60° critical override margin."]}),u.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-marine-amber/20 text-xs",children:[u.jsx("span",{className:"text-slate-400 font-mono",children:"Active monitoring in progress"}),u.jsx("button",{onClick:()=>l(!1),className:"px-3 py-1.5 rounded-lg bg-ocean-800 hover:bg-ocean-700 text-slate-200 border border-ocean-600 transition-colors",children:"STABILIZE"})]})]}):u.jsxs("div",{className:"p-6 rounded-xl bg-ocean-900/60 border border-ocean-700/60 text-center space-y-2",children:[u.jsx(gl,{className:"w-8 h-8 text-marine-emerald mx-auto"}),u.jsx("p",{className:"text-sm font-semibold text-slate-200",children:"No Active Anomalies Detected"}),u.jsx("p",{className:"text-xs text-slate-400 max-w-md mx-auto",children:"All sensors, power reservoirs, PTE bellows, and communication uplinks are operating within nominal Antarctic parameters."})]})]}),u.jsxs("div",{className:`ocean-card rounded-xl p-5 border transition-all ${n?"border-marine-emerald/60 bg-marine-emerald/5":""}`,children:[u.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-ocean-700/80 pb-3 mb-4",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx(B1,{className:"w-5 h-5 text-marine-teal"}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-sm font-bold tracking-wider text-slate-100 uppercase",children:"PRE-DROP CHECKLIST & CRANE DEPLOYMENT INTERLOCK"}),u.jsx("p",{className:"text-xs text-slate-400",children:"Hardware interlock authorization for shipboard crane deployment"})]})]}),u.jsx("div",{className:"flex items-center space-x-2",children:u.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-marine-emerald/15 text-marine-emerald border border-marine-emerald/30 font-bold font-mono",children:"4/4 SYSTEM CHECKS PASSED"})})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5",children:[{label:"Core Avionics",sub:"THEJAS32 RISC-V SoC & CRC Valid"},{label:"Sensor Suite",sub:"Anemometer, MEMS, CTD Sonde Online"},{label:"Power Reservoir",sub:"LiSOCl2 3.64V & HLC Buffer Ready"},{label:"Telemetry Connection",sub:"INSAT DRT Link Margin +14.6 dB"}].map((p,f)=>u.jsxs("div",{className:"p-3 rounded-lg bg-ocean-900/70 border border-ocean-700/60 flex items-start space-x-2.5",children:[u.jsx(gl,{className:"w-4 h-4 text-marine-emerald mt-0.5 flex-shrink-0"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-semibold text-slate-200",children:p.label}),u.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5",children:p.sub})]})]},f))}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-ocean-950/70 border border-ocean-700/80",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"text-xs font-bold text-slate-200 uppercase tracking-wider",children:"DEPLOYMENT STATUS:"}),n?u.jsxs("span",{className:"text-xs px-2.5 py-0.5 rounded bg-marine-emerald/20 text-marine-emerald font-bold font-mono",children:["DROP AUTHORIZED (",i==null?void 0:i.split("T")[1].slice(0,8)," UTC)"]}):u.jsx("span",{className:"text-xs px-2.5 py-0.5 rounded bg-ocean-800 text-slate-300 font-mono",children:"INTERLOCK SECURED"})]}),u.jsx("p",{className:"text-xs text-slate-400 mt-1",children:n?"Winch release interlock disengaged. Ready for ocean surface placement.":"Unlock safety cover to enable the tactile drop authorization control."})]}),u.jsxs("div",{className:"flex items-center space-x-3 w-full sm:w-auto justify-end",children:[!n&&u.jsxs("button",{onClick:r,className:`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${e?"bg-marine-amber/15 text-marine-amber border-marine-amber/40":"bg-ocean-800 hover:bg-ocean-750 text-slate-300 border-ocean-700"}`,children:[e?u.jsx(C1,{className:"w-4 h-4"}):u.jsx(Td,{className:"w-4 h-4"}),u.jsx("span",{children:e?"COVER OPEN":"FLIP SAFETY COVER"})]}),u.jsx("button",{onClick:s,disabled:!e||n,className:`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${n?"bg-marine-emerald/20 border-marine-emerald/40 text-marine-emerald cursor-default":e?"bg-marine-teal hover:bg-cyan-400 text-ocean-950 border-cyan-300 shadow-sm cursor-pointer active:scale-95":"bg-ocean-800/60 border-ocean-700/60 text-slate-500 cursor-not-allowed"}`,children:n?u.jsxs(u.Fragment,{children:[u.jsx(gl,{className:"w-4 h-4"}),u.jsx("span",{children:"DROP AUTHORIZED"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Td,{className:"w-4 h-4"}),u.jsx("span",{children:"AUTHORIZE DROP"})]})})]})]})]})]})},Zb=()=>{const{currentPacket:t,packetHistory:e}=mn(),n=Ge.useRef(null),[i,r]=Ge.useState(null),s=t.navic.latitude<=-60;return Ge.useEffect(()=>{const a=n.current;if(!a)return;const o=a.getContext("2d");if(!o)return;let l;const c=()=>{const h=a.width,p=a.height,f=h/2,m=p/2;o.clearRect(0,0,h,p);const v=o.createRadialGradient(f,m,50,f,m,f);v.addColorStop(0,"#0a1628"),v.addColorStop(1,"#04070b"),o.fillStyle=v,o.fillRect(0,0,h,p);const y=Math.min(f,m)-30,x=S=>{const k=(90-Math.abs(S))/40;return Math.max(10,k*y)},d=S=>(S-90)*Math.PI/180,_=(S,N)=>{const k=x(S),B=d(N);return{x:f+k*Math.cos(B),y:m+k*Math.sin(B)}};[-80,-70,-60,-50].forEach(S=>{const N=x(S);o.beginPath(),o.arc(f,m,N,0,Math.PI*2),S===-60?(o.strokeStyle="#00f0ff",o.lineWidth=2,o.setLineDash([8,6]),o.stroke(),o.setLineDash([]),o.fillStyle="#00f0ff",o.font='bold 11px "JetBrains Mono", monospace',o.textAlign="center",o.fillText(`60°00'00"S AUTO-GEOFENCING BOUNDARY`,f,m-N-8)):(o.strokeStyle="rgba(255, 255, 255, 0.08)",o.lineWidth=1,o.setLineDash([3,4]),o.stroke(),o.setLineDash([]),o.fillStyle="rgba(255, 255, 255, 0.3)",o.font='9px "JetBrains Mono", monospace',o.textAlign="center",o.fillText(`${Math.abs(S)}°S`,f,m-N+11))}),[0,45,90,135,180,225,270,315].forEach(S=>{const N=(S-90)*Math.PI/180;o.beginPath(),o.moveTo(f,m),o.lineTo(f+y*Math.cos(N),m+y*Math.sin(N)),o.strokeStyle="rgba(255, 255, 255, 0.08)",o.lineWidth=1,o.stroke(),o.fillStyle="rgba(255, 255, 255, 0.4)",o.font='9px "JetBrains Mono", monospace',o.fillText(`${S}°E`,f+(y+15)*Math.cos(N),m+(y+15)*Math.sin(N))}),o.beginPath(),[{lat:-70,lon:0},{lat:-72,lon:20},{lat:-68,lon:40},{lat:-66,lon:65},{lat:-67,lon:90},{lat:-66,lon:120},{lat:-67,lon:140},{lat:-71,lon:170},{lat:-78,lon:180},{lat:-74,lon:-150},{lat:-72,lon:-110},{lat:-65,lon:-65},{lat:-74,lon:-50},{lat:-76,lon:-30}].forEach((S,N)=>{const k=_(S.lat,S.lon);N===0?o.moveTo(k.x,k.y):o.lineTo(k.x,k.y)}),o.closePath(),o.fillStyle="rgba(20, 35, 55, 0.75)",o.fill(),o.strokeStyle="rgba(0, 240, 255, 0.3)",o.lineWidth=1.5,o.stroke(),o.beginPath(),o.arc(f,m,3,0,Math.PI*2),o.fillStyle="#ffffff",o.fill(),o.fillText("SOUTH POLE (90°S)",f,m+14);const M=x(-56);o.beginPath(),o.arc(f,m,M,.2,1.8),o.strokeStyle="rgba(0, 163, 255, 0.25)",o.lineWidth=12,o.stroke(),e.length>1&&(o.beginPath(),e.forEach((S,N)=>{const k=_(S.navic.latitude,S.navic.longitude);N===0?o.moveTo(k.x,k.y):o.lineTo(k.x,k.y)}),o.strokeStyle="rgba(0, 240, 255, 0.5)",o.lineWidth=2,o.stroke(),e.forEach((S,N)=>{const k=_(S.navic.latitude,S.navic.longitude);o.beginPath(),o.arc(k.x,k.y,N===e.length-1?5:2.5,0,Math.PI*2),o.fillStyle=S.distress.sasrActive?"#ff2e54":"#00f0ff",o.fill()}));const R=_(t.navic.latitude,t.navic.longitude),A=Date.now()/1e3,b=8+8*(A%2);o.beginPath(),o.arc(R.x,R.y,b,0,Math.PI*2),o.strokeStyle=t.distress.sasrActive?`rgba(255, 46, 84, ${1-A%2/2})`:`rgba(0, 240, 255, ${1-A%2/2})`,o.lineWidth=2,o.stroke(),o.beginPath(),o.arc(R.x,R.y,5,0,Math.PI*2),o.fillStyle=t.distress.sasrActive?"#ff2e54":"#00f0ff",o.shadowColor=t.distress.sasrActive?"#ff2e54":"#00f0ff",o.shadowBlur=12,o.fill(),o.shadowBlur=0;const C=d(t.navic.longitude)+Math.PI/2,T=28;if(o.beginPath(),o.moveTo(R.x,R.y),o.lineTo(R.x+T*Math.cos(C),R.y+T*Math.sin(C)),o.strokeStyle="#ffb020",o.lineWidth=2,o.stroke(),o.fillStyle="#ffffff",o.font='bold 10px "JetBrains Mono", monospace',o.textAlign="left",o.fillText("T.A.M.A.S. SPAR-04",R.x+12,R.y-6),o.fillStyle=s?"#60a5fa":"#22d3ee",o.fillText(`${Math.abs(t.navic.latitude)}°S, ${Math.abs(t.navic.longitude)}°E`,R.x+12,R.y+7),s)o.beginPath(),o.arc(R.x,R.y,45,0,Math.PI*2),o.strokeStyle="rgba(96, 165, 250, 0.4)",o.setLineDash([4,4]),o.stroke(),o.setLineDash([]);else{const S=_(-45,74);o.beginPath(),o.moveTo(R.x,R.y),o.lineTo(S.x,S.y),o.strokeStyle="rgba(0, 240, 255, 0.35)",o.setLineDash([6,6]),o.stroke(),o.setLineDash([])}l=requestAnimationFrame(c)};return c(),()=>cancelAnimationFrame(l)},[t,e,s]),u.jsxs("div",{className:"p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(T1,{className:"w-5 h-5 text-cyber-cyan animate-pulse"}),u.jsx("span",{className:"text-sm font-bold text-slate-200 tracking-wider",children:"SOUTHERN OCEAN 2D/3D DRIFT TRAJECTORY & GEOFENCE"})]}),u.jsx("div",{className:"flex items-center space-x-2",children:s?u.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/50 text-blue-300 text-xs",children:[u.jsx(U1,{className:"w-4 h-4 text-blue-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold",children:"SOUTH OF 60°S: "}),u.jsx("span",{children:"ARGOS / EOS-06 LEO POLAR PASS (401.65 MHz)"})]})]}):u.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 text-xs",children:[u.jsx(px,{className:"w-4 h-4 text-cyber-cyan"}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold",children:"NORTH OF 60°S: "}),u.jsx("span",{children:"ISRO INSAT DRT GEO UPLINK (402.75 MHz)"})]})]})})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4 items-center",children:[u.jsxs("div",{className:"lg:col-span-3 flex justify-center bg-slate-950/80 rounded-xl p-3 border border-slate-800 overflow-hidden relative",children:[u.jsx("canvas",{ref:n,width:640,height:520,className:"w-full max-w-[640px] aspect-[4/3] rounded-lg cursor-crosshair"}),u.jsxs("div",{className:"absolute bottom-5 left-5 bg-void-950/85 backdrop-blur-sm border border-slate-800 p-2.5 rounded-lg text-[10px] text-slate-400 space-y-1",children:[u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-2.5 h-0.5 bg-cyan-400 border-t border-dashed"}),u.jsx("span",{className:"text-cyan-300 font-semibold",children:"60°S Auto-Geofence Limit"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),u.jsx("span",{children:"Breadcrumb Telemetry Ping"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-3 h-0.5 bg-amber-400"}),u.jsx("span",{children:"Drift Vector Projection"})]})]})]}),u.jsxs("div",{className:"space-y-3 text-xs",children:[u.jsxs("div",{className:"p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1",children:[u.jsx("div",{className:"text-[10px] text-slate-400 uppercase tracking-wider",children:"DRIFT LATITUDE"}),u.jsxs("div",{className:"text-xl font-bold text-cyan-300",children:[Math.abs(t.navic.latitude),"° S"]}),u.jsxs("div",{className:"text-[10px] text-slate-500",children:["Delta to 60°S: ",(60-Math.abs(t.navic.latitude)).toFixed(4),"°"]})]}),u.jsxs("div",{className:"p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1",children:[u.jsx("div",{className:"text-[10px] text-slate-400 uppercase tracking-wider",children:"DRIFT LONGITUDE"}),u.jsxs("div",{className:"text-xl font-bold text-cyan-300",children:[Math.abs(t.navic.longitude),"° E"]}),u.jsx("div",{className:"text-[10px] text-slate-500",children:"Kerguelen / Enderby Basin Sector"})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5",children:[u.jsx("div",{className:"text-[10px] text-slate-400 uppercase",children:"UPLINK TELEMETRY LINK BUDGET"}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-slate-400",children:"Carrier SNR:"}),u.jsxs("span",{className:"text-cyan-300 font-bold",children:["+",t.uplink.signalSnrDb," dB"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-slate-400",children:"Receiver RSSI:"}),u.jsxs("span",{className:"text-slate-200",children:[t.uplink.rssiDbm," dBm"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-slate-400",children:"Fade Margin:"}),u.jsxs("span",{className:"text-emerald-400 font-bold",children:["+",t.uplink.linkMarginDb," dB"]})]})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] space-y-1 text-slate-400",children:[u.jsx("div",{className:"font-semibold text-slate-300",children:"ANTARCTIC CIRCUMPOLAR CURRENT"}),u.jsx("div",{children:"Velocity: ~1.1 knots (0.57 m/s)"}),u.jsx("div",{children:"Direction: 082° True (Eastward)"}),u.jsx("div",{children:"Bathymetry: 3,840m Abyss"})]})]})]})]})},Jb=()=>{const{currentPacket:t,ctdProfile:e}=mn(),[n,i]=Ge.useState(null),r=360,s=480,a={top:40,right:30,bottom:40,left:60},o=s-a.left-a.right,l=r-a.top-a.bottom,c=500,h=-2,p=3,f=33.8,m=34.8,v=g=>a.top+g/c*l,y=g=>a.left+(g-h)/(p-h)*o,x=g=>a.left+(g-f)/(m-f)*o,d=e.map((g,M)=>{const R=y(g.temp),A=v(g.depth);return`${M===0?"M":"L"} ${R.toFixed(1)} ${A.toFixed(1)}`}).join(" "),_=e.map((g,M)=>{const R=x(g.salinity),A=v(g.depth);return`${M===0?"M":"L"} ${R.toFixed(1)} ${A.toFixed(1)}`}).join(" ");return u.jsxs("div",{className:"p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(vx,{className:"w-5 h-5 text-cyber-cyan animate-pulse"}),u.jsx("span",{className:"text-sm font-bold text-slate-200 tracking-wider",children:"SCIENTIFIC INVERTED CTD PROFILER (0 - 500M)"})]}),u.jsxs("div",{className:"flex items-center space-x-4 text-xs",children:[u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-3 h-0.5 bg-cyan-400"}),u.jsx("span",{className:"text-cyan-300 font-semibold",children:"Temperature (°C) [Top Axis]"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-3 h-0.5 bg-emerald-400"}),u.jsx("span",{className:"text-emerald-300 font-semibold",children:"Salinity (PSU) [Bottom Axis]"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-center",children:[u.jsxs("div",{className:"lg:col-span-2 bg-slate-950/80 rounded-xl p-3 border border-slate-800 relative",children:[u.jsxs("svg",{viewBox:`0 0 ${s} ${r}`,className:"w-full h-auto overflow-visible select-none",children:[u.jsx("rect",{x:a.left,y:v(0),width:o,height:v(80)-v(0),fill:"rgba(0, 240, 255, 0.03)"}),u.jsx("rect",{x:a.left,y:v(80),width:o,height:v(200)-v(80),fill:"rgba(0, 163, 255, 0.05)"}),u.jsx("rect",{x:a.left,y:v(200),width:o,height:v(500)-v(200),fill:"rgba(255, 176, 32, 0.03)"}),[0,100,200,300,400,500].map(g=>u.jsxs("g",{children:[u.jsx("line",{x1:a.left,y1:v(g),x2:a.left+o,y2:v(g),stroke:"rgba(255, 255, 255, 0.1)",strokeDasharray:"2,3"}),u.jsxs("text",{x:a.left-10,y:v(g)+4,textAnchor:"end",fill:"#94a3b8",fontSize:"10",fontFamily:"JetBrains Mono",children:[g,"m"]})]},g)),[-2,-1,0,1,2,3].map(g=>u.jsx("line",{x1:y(g),y1:a.top,x2:y(g),y2:a.top+l,stroke:"rgba(0, 240, 255, 0.08)",strokeDasharray:"2,3"},g)),u.jsx("text",{x:a.left+o-6,y:v(40),textAnchor:"end",fill:"rgba(0, 240, 255, 0.4)",fontSize:"9",children:"AASW (Surface Water)"}),u.jsx("text",{x:a.left+o-6,y:v(140),textAnchor:"end",fill:"rgba(0, 163, 255, 0.4)",fontSize:"9",children:"WW (Winter Water Temp Min -1.8°C)"}),u.jsx("text",{x:a.left+o-6,y:v(350),textAnchor:"end",fill:"rgba(255, 176, 32, 0.4)",fontSize:"9",children:"CDW (Circumpolar Deep Water)"}),[-2,-1,0,1,2,3].map(g=>u.jsxs("text",{x:y(g),y:a.top-12,textAnchor:"middle",fill:"#22d3ee",fontSize:"10",fontWeight:"bold",fontFamily:"JetBrains Mono",children:[g>0?`+${g}`:g,"°"]},g)),u.jsx("text",{x:a.left+o/2,y:a.top-26,textAnchor:"middle",fill:"#00f0ff",fontSize:"10",fontWeight:"bold",children:"← TEMPERATURE (°C) →"}),[33.8,34,34.2,34.4,34.6,34.8].map(g=>u.jsx("text",{x:x(g),y:a.top+l+18,textAnchor:"middle",fill:"#34d399",fontSize:"10",fontFamily:"JetBrains Mono",children:g.toFixed(1)},g)),u.jsx("text",{x:a.left+o/2,y:a.top+l+32,textAnchor:"middle",fill:"#10b981",fontSize:"10",fontWeight:"bold",children:"← PRACTICAL SALINITY (PSU) →"}),u.jsx("path",{d,fill:"none",stroke:"#00f0ff",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:_,fill:"none",stroke:"#10b981",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"5,3"}),e.map((g,M)=>u.jsx("circle",{cx:y(g.temp),cy:v(g.depth),r:(n==null?void 0:n.depth)===g.depth?6:3.5,fill:"#00f0ff",stroke:"#04070b",strokeWidth:"1.5",className:"cursor-pointer transition-all hover:scale-150",onMouseEnter:()=>i(g),onMouseLeave:()=>i(null)},M)),u.jsx("line",{x1:a.left,y1:v(7.1),x2:a.left+o,y2:v(7.1),stroke:"#ffb020",strokeWidth:"1.5",strokeDasharray:"4,2"}),u.jsx("text",{x:a.left+8,y:v(7.1)-4,fill:"#ffb020",fontSize:"9",fontWeight:"bold",children:"▲ SPAR BASE SONDE (7.1m)"})]}),n&&u.jsxs("div",{className:"absolute top-4 right-4 bg-void-950/90 border border-cyan-400 p-2.5 rounded-lg text-xs space-y-1 shadow-cyan-glow",children:[u.jsxs("div",{className:"text-cyan-300 font-bold",children:["DEPTH: ",n.depth,"m"]}),u.jsxs("div",{className:"text-slate-200",children:["Temp: ",n.temp,"°C"]}),u.jsxs("div",{className:"text-slate-200",children:["Salinity: ",n.salinity," PSU"]}),u.jsxs("div",{className:"text-slate-400 text-[10px]",children:["Sound Vel: ",(1445+n.depth*.016).toFixed(1)," m/s"]})]})]}),u.jsxs("div",{className:"space-y-3 text-xs",children:[u.jsxs("div",{className:"p-3.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 space-y-1",children:[u.jsxs("div",{className:"text-[10px] text-slate-400 uppercase tracking-wider flex items-center space-x-1.5",children:[u.jsx(xx,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"SUPERCOOLED WATER TEMP (7.1M)"})]}),u.jsxs("div",{className:"text-2xl font-bold text-cyan-300",children:[t.sensors.waterTempC,"°C"]}),u.jsx("div",{className:"text-[10px] text-slate-500",children:"Antarctic Surface Water (AASW)"})]}),u.jsxs("div",{className:"p-3.5 rounded-lg bg-slate-950/80 border border-emerald-500/30 space-y-1",children:[u.jsxs("div",{className:"text-[10px] text-slate-400 uppercase tracking-wider flex items-center space-x-1.5",children:[u.jsx(dx,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"PRACTICAL SALINITY"})]}),u.jsxs("div",{className:"text-2xl font-bold text-emerald-300",children:[t.sensors.salinityPsu," PSU"]}),u.jsxs("div",{className:"text-[10px] text-slate-500",children:["Conductivity: ",t.sensors.conductivityMsm," mS/cm"]})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5",children:[u.jsx("div",{className:"text-[10px] text-slate-400 uppercase",children:"ACOUSTIC SOUND VELOCITY"}),u.jsxs("div",{className:"text-lg font-bold text-slate-200",children:[t.sensors.soundVelocityMs," m/s"]}),u.jsx("div",{className:"text-[10px] text-slate-500",children:"Del Grosso / Chen-Millero equation"})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] space-y-1 text-slate-400",children:[u.jsx("div",{className:"font-semibold text-slate-300",children:"CTD SENSOR INTEGRITY"}),u.jsx("div",{children:"Calibration Date: Valid 2026-02"}),u.jsx("div",{children:"Electrode State: Zero Bio-fouling"}),u.jsx("div",{children:"Sampling Frequency: 1.0 Hz continuous"})]})]})]})]})},Qb=()=>{const{currentPacket:t,packetHistory:e,customHexInput:n,setCustomHexInput:i,injectCustomHex:r}=mn(),[s,a]=Ge.useState(null),[o,l]=Ge.useState(!1),[c,h]=Ge.useState(null),p=t.rawHex.split(" "),f=d=>{wt.playTactileClick();const _=t.decodedFieldsMap.find(g=>d>=g.startByte&&d<=g.endByte);_&&a(_)},m=d=>s?d>=s.startByte&&d<=s.endByte:!1,v=()=>{navigator.clipboard.writeText(t.rawHex),l(!0),setTimeout(()=>l(!1),2e3)},y=()=>{if(!n.trim()){h("Please enter a valid 32-byte hex string");return}const d=r(n.trim());h(d?null:"Invalid packet format: Requires 32 hex bytes")},x=d=>{wt.playTactileClick(),i(d==="nominal"?"54 41 4D 01 66 DA 4A 1F FF 67 92 B0 00 68 5A C8 0E 3A 0E 1F 06 FB 26 5E FC 28 35 8E FC 0E 01 A2 9F":d==="distress"?"54 41 4D 7F 66 DA 4A 24 FF 67 92 B0 00 68 5A C8 0E 1A 0E 00 44 E4 26 40 FC 18 42 8E FC 0E 01 CF 12":"54 41 4D 01 66 DA 4A 2F FF 65 3C 10 00 68 62 F0 0E 38 0E 1D 08 02 26 58 FC 20 2E 90 FC 0E 01 88 B4"),h(null)};return u.jsxs("div",{className:"p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(j1,{className:"w-5 h-5 text-cyber-cyan animate-pulse"}),u.jsx("span",{className:"text-sm font-bold text-slate-200 tracking-wider",children:"ISRO INSAT DRT 4.8 KBPS TELEMETRY PACKET INGESTION & HEX DECODER"})]}),u.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[u.jsxs("button",{onClick:v,className:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 transition-colors",children:[u.jsx(y1,{className:"w-3 h-3"}),u.jsx("span",{children:o?"COPIED HEX":"COPY RAW HEX"})]}),u.jsx("span",{className:"px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:"FRAME LOCKED (32 BYTES)"})]})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[u.jsxs("span",{className:"flex items-center space-x-1.5",children:[u.jsx(E1,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"LIVE 32-BYTE PAYLOAD MATRIX (CLICK BYTES TO INSPECT DECODING)"})]}),u.jsxs("span",{className:"text-[10px] text-slate-500",children:["PACKET #",t.packetSequence]})]}),u.jsx("div",{className:"grid grid-cols-8 sm:grid-cols-16 gap-1.5 pt-1",children:p.map((d,_)=>{const g=m(_);return u.jsxs("button",{onClick:()=>f(_),className:`p-2 rounded text-center transition-all border ${g?"bg-cyan-500/30 border-cyan-400 text-cyan-200 shadow-cyan-glow scale-105 font-bold":"bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white"}`,children:[u.jsx("div",{className:"text-[9px] text-slate-500 mb-0.5",children:_.toString().padStart(2,"0")}),u.jsx("div",{className:"text-xs",children:d})]},_)})})]}),s&&u.jsxs("div",{className:`p-4 rounded-xl border transition-all ${s.colorClass}`,children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-current/20 pb-2 mb-2",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold",children:[u.jsxs("span",{children:["FIELD: ",s.name]}),u.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-current/30",children:["BYTES ",s.bytes]})]}),u.jsxs("div",{className:"text-xs",children:["RAW HEX: ",u.jsx("span",{className:"font-bold tracking-widest",children:s.hexValue})]})]}),u.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2",children:[u.jsxs("div",{className:"text-sm font-bold tracking-wide",children:["DECODED VALUE: ",s.interpretedValue]}),s.unit&&u.jsxs("div",{className:"text-xs opacity-75",children:["ENGINEERING UNIT: ",s.unit]})]})]}),u.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[u.jsx("div",{className:"text-xs text-slate-400 font-semibold mb-1",children:"DECODED FIELD REGISTRY:"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs",children:t.decodedFieldsMap.map((d,_)=>{const g=(s==null?void 0:s.name)===d.name;return u.jsxs("button",{onClick:()=>{wt.playTactileClick(),a(d)},className:`p-2.5 rounded-lg text-left border transition-all ${g?"bg-cyan-950/50 border-cyan-400 shadow-cyan-glow":"bg-slate-900/50 border-slate-800/80 hover:border-slate-700"}`,children:[u.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400 mb-1",children:[u.jsx("span",{className:"font-bold text-slate-300",children:d.name}),u.jsxs("span",{className:"text-slate-500 font-mono",children:["[",d.bytes,"]"]})]}),u.jsx("div",{className:"text-xs font-semibold text-cyan-300 truncate",children:d.interpretedValue})]},_)})})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/90 border border-cyan-500/20 space-y-3",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[u.jsxs("span",{className:"text-xs text-slate-300 font-bold flex items-center space-x-1.5",children:[u.jsx(gx,{className:"w-3.5 h-3.5 text-cyber-cyan"}),u.jsx("span",{children:"INJECT CUSTOM HEX BURST SANDBOX"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5 text-[11px]",children:[u.jsx("span",{className:"text-slate-500",children:"Presets:"}),u.jsx("button",{onClick:()=>x("nominal"),className:"px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700",children:"Nominal"}),u.jsx("button",{onClick:()=>x("distress"),className:"px-2 py-0.5 rounded bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-500/40",children:"Distress >60°"}),u.jsx("button",{onClick:()=>x("argos"),className:"px-2 py-0.5 rounded bg-blue-950/60 hover:bg-blue-900/60 text-blue-300 border border-blue-500/40",children:"South 60°S"})]})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[u.jsx("input",{type:"text",value:n,onChange:d=>i(d.target.value),placeholder:"Paste 32-byte hex (e.g. 54 41 4D 01 66 DA 4A 1F ...)",className:"flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-cyan-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"}),u.jsxs("button",{onClick:y,className:"flex items-center justify-center space-x-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors shadow-cyan-glow",children:[u.jsx(O1,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"INJECT & PARSE"})]})]}),c&&u.jsxs("div",{className:"text-xs text-red-400 flex items-center space-x-1",children:[u.jsx(x1,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:c})]})]})]})},eA=()=>{const{currentPacket:t,packetHistory:e}=mn(),n=e.slice(-40),i=360,r=85,s=8,a=n.map(_=>_.sensors.windSpeedKnots),o=Math.min(...a,15),l=Math.max(...a,40),c=n.map((_,g)=>{const M=s+g/Math.max(1,n.length-1)*(i-s*2),R=r-s-(_.sensors.windSpeedKnots-o)/Math.max(1,l-o)*(r-s*2);return`${g===0?"M":"L"} ${M.toFixed(1)} ${R.toFixed(1)}`}).join(" "),h=n.map(_=>_.sensors.barometricPressureHpa),p=Math.min(...h,975),f=Math.max(...h,995),m=n.map((_,g)=>{const M=s+g/Math.max(1,n.length-1)*(i-s*2),R=r-s-(_.sensors.barometricPressureHpa-p)/Math.max(1,f-p)*(r-s*2);return`${g===0?"M":"L"} ${M.toFixed(1)} ${R.toFixed(1)}`}).join(" "),v=n.map(_=>_.sensors.ambientSupercooledTempC),y=Math.min(...v,-20),x=Math.max(...v,-5),d=n.map((_,g)=>{const M=s+g/Math.max(1,n.length-1)*(i-s*2),R=r-s-(_.sensors.ambientSupercooledTempC-y)/Math.max(1,x-y)*(r-s*2);return`${g===0?"M":"L"} ${M.toFixed(1)} ${R.toFixed(1)}`}).join(" ");return u.jsxs("div",{className:"p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2.5",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(p1,{className:"w-4 h-4 text-cyber-cyan"}),u.jsx("span",{className:"text-xs font-bold text-slate-200 tracking-wider",children:"POLAR ATMOSPHERIC & METEOROLOGICAL REAL-TIME STRIP CHARTS"})]}),u.jsx("span",{className:"text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800",children:"ACOUSTIC RESONANCE + MEMS DIES"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[u.jsxs("div",{className:"p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("span",{className:"text-xs text-slate-400 flex items-center space-x-1.5",children:[u.jsx(_x,{className:"w-3.5 h-3.5 text-sky-400"}),u.jsx("span",{children:"ULTRASONIC ANEMOMETER"})]}),u.jsx("span",{className:"text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded",children:"4/4 TRANSDUCERS"})]}),u.jsxs("div",{className:"flex items-baseline space-x-2",children:[u.jsx("span",{className:"text-2xl font-bold text-sky-300",children:t.sensors.windSpeedKnots}),u.jsxs("span",{className:"text-xs text-slate-400",children:["kts (",t.sensors.windSpeedMs," m/s)"]}),u.jsxs("span",{className:"text-xs text-slate-500 ml-auto",children:["DIR: ",t.sensors.windDirectionDeg,"°"]})]}),u.jsx("div",{className:"h-16 w-full bg-slate-900/40 rounded border border-slate-800/60 p-1",children:u.jsx("svg",{viewBox:`0 0 ${i} ${r}`,className:"w-full h-full overflow-visible",children:u.jsx("path",{d:c,fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeLinecap:"round"})})})]}),u.jsxs("div",{className:"p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("span",{className:"text-xs text-slate-400 flex items-center space-x-1.5",children:[u.jsx(hx,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"SURFACE BAROMETER"})]}),u.jsx("span",{className:"text-[10px] text-slate-400",children:"MS5837 DUAL DIE"})]}),u.jsxs("div",{className:"flex items-baseline space-x-2",children:[u.jsx("span",{className:"text-2xl font-bold text-amber-300",children:t.sensors.barometricPressureHpa}),u.jsx("span",{className:"text-xs text-slate-400",children:"hPa"}),u.jsx("span",{className:"text-xs text-slate-500 ml-auto",children:t.sensors.barometricPressureHpa<980?"LOW PRESSURE":"NORMAL"})]}),u.jsx("div",{className:"h-16 w-full bg-slate-900/40 rounded border border-slate-800/60 p-1",children:u.jsx("svg",{viewBox:`0 0 ${i} ${r}`,className:"w-full h-full overflow-visible",children:u.jsx("path",{d:m,fill:"none",stroke:"#fbbf24",strokeWidth:"2",strokeLinecap:"round"})})})]}),u.jsxs("div",{className:"p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("span",{className:"text-xs text-slate-400 flex items-center space-x-1.5",children:[u.jsx(G1,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"SUPERCOOLED AIR TEMP"})]}),u.jsx("span",{className:"text-[10px] text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded",children:"ICE SHEDDING ON"})]}),u.jsxs("div",{className:"flex items-baseline space-x-2",children:[u.jsxs("span",{className:"text-2xl font-bold text-cyan-300",children:[t.sensors.ambientSupercooledTempC,"°C"]}),u.jsxs("span",{className:"text-xs text-slate-400",children:["RH: ",t.sensors.relativeHumidityPct,"%"]}),u.jsx("span",{className:"text-xs text-slate-500 ml-auto",children:"FREEZING"})]}),u.jsx("div",{className:"h-16 w-full bg-slate-900/40 rounded border border-slate-800/60 p-1",children:u.jsx("svg",{viewBox:`0 0 ${i} ${r}`,className:"w-full h-full overflow-visible",children:u.jsx("path",{d,fill:"none",stroke:"#22d3ee",strokeWidth:"2",strokeLinecap:"round"})})})]})]})]})},tA=()=>{const{activeNavTab:t,tick:e,currentPacket:n,simulationSpeed:i,isPaused:r}=mn();return Ge.useEffect(()=>{if(r)return;const s=Math.max(100,Math.round(1e3/i)),a=setInterval(()=>{e()},s);return()=>clearInterval(a)},[e,i,r]),u.jsxs("div",{className:"min-h-screen flex flex-col bg-tamas-bg text-tamas-text font-sans selection:bg-tamas-info/30 selection:text-tamas-info",children:[u.jsx(Z1,{}),n.distress.sasrActive&&u.jsx("div",{className:"bg-tamas-critical text-white px-4 py-2 border-b border-red-400 shadow-md",children:u.jsxs("div",{className:"max-w-[1920px] mx-auto flex items-center justify-between text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-white animate-ping"}),u.jsx("span",{className:"font-bold tracking-wider",children:"SAS&R 406.05 MHz ACTIVE — EMERGENCY BEACON TRANSMITTING TO INMCC BANGALORE"})]}),u.jsxs("span",{children:["TILT OVERRIDE: ",n.gyro.tiltAngle,"° (>60° CRITICAL CUTOFF)"]})]})}),u.jsxs("main",{className:"flex-1 max-w-[1920px] w-full mx-auto p-4 sm:p-5 space-y-4",children:[t==="monitoring"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",children:[u.jsx("div",{className:"lg:col-span-3",children:u.jsx(Q1,{})}),u.jsx("div",{className:"lg:col-span-6",children:u.jsx(Gm,{})}),u.jsx("div",{className:"lg:col-span-3",children:u.jsx(Yb,{})})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",children:[u.jsx("div",{className:"lg:col-span-7",children:u.jsx($b,{})}),u.jsx("div",{className:"lg:col-span-5",children:u.jsx(qb,{})})]})]}),t==="device"&&u.jsxs("div",{className:"space-y-4",children:[u.jsx(Gm,{}),u.jsxs("div",{className:"tamas-card p-5 space-y-3",children:[u.jsx("h3",{className:"text-xs font-bold text-tamas-text uppercase tracking-wider border-b border-tamas-border/60 pb-2",children:"STRUCTURAL SPECIFICATIONS & BUOYANCY MATRIX"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs",children:[u.jsxs("div",{className:"p-3 rounded-lg bg-[#1A2733] border border-tamas-border/40",children:[u.jsx("span",{className:"font-bold text-tamas-info block",children:"Apex Radome & Mast"}),u.jsx("p",{className:"text-tamas-textMuted mt-1",children:"60°+ PTFE-coated fiberglass cone designed for zero ice accretion and aerodynamic wind shedding."})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-[#1A2733] border border-tamas-border/40",children:[u.jsx("span",{className:"font-bold text-tamas-orange block",children:"Buoyancy Collar & Spar"}),u.jsx("p",{className:"text-tamas-textMuted mt-1",children:"Polyurea-armored closed-cell marine foam collar providing 120 kg net buoyancy with 13.7:1 slender draft spar column."})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-[#1A2733] border border-tamas-border/40",children:[u.jsx("span",{className:"font-bold text-tamas-operational block",children:"PTE Chamber & Benthic Sonde"}),u.jsx("p",{className:"text-tamas-textMuted mt-1",children:"Flooded with 20 cSt PDMS dielectric fluid, backed by dynamic FVMQ bellows and 1000m-rated titanium CTD cage."})]})]})]})]}),t==="ocean"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-4",children:[u.jsx(Zb,{}),u.jsx(Jb,{})]}),u.jsx(eA,{}),u.jsx(Qb,{})]}),t==="alerts"&&u.jsx("div",{className:"space-y-4",children:u.jsx(Kb,{})})]}),u.jsx(J1,{}),u.jsx("footer",{className:"bg-tamas-bg border-t border-tamas-border/60 px-5 py-2.5 text-xs text-tamas-textMuted select-none",children:u.jsxs("div",{className:"max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsxs("span",{className:"flex items-center space-x-1.5 text-tamas-operational font-medium",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-tamas-operational"}),u.jsx("span",{children:"TELEMETRY STREAM: 4.8 KBPS LOCKED"})]}),u.jsx("span",{className:"text-tamas-border",children:"|"}),u.jsx("span",{className:"text-tamas-text",children:"T.A.M.A.S. SPAR-04"}),u.jsx("span",{className:"text-tamas-border hidden md:inline",children:"|"}),u.jsx("span",{className:"hidden md:inline text-tamas-textMuted",children:"CO-OPERATIONAL: INCOIS / NCPOR / INMCC"})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("span",{children:["FRAME #",n.packetSequence]}),u.jsx("span",{className:"text-tamas-border",children:"|"}),u.jsxs("span",{className:"text-tamas-info",children:["BUS: ",n.power.lisocl2CellVoltage,"V"]}),u.jsx("span",{className:"text-tamas-border",children:"|"}),u.jsxs("span",{className:"text-tamas-operational",children:["PTE: ",n.pte.pdmsFluidPressureBar," BAR"]})]})]})})]})};Du.createRoot(document.getElementById("root")).render(u.jsx(n0.StrictMode,{children:u.jsx(tA,{})}));
