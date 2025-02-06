(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function t0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rh={exports:{}},rl={},ih={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y;function CT(){if($y)return Pe;$y=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(M){return M===null||typeof M!="object"?null:(M=T&&M[T]||M["@@iterator"],typeof M=="function"?M:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,B={};function D(M,K,me){this.props=M,this.context=K,this.refs=B,this.updater=me||x}D.prototype.isReactComponent={},D.prototype.setState=function(M,K){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,K,"setState")},D.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function q(){}q.prototype=D.prototype;function J(M,K,me){this.props=M,this.context=K,this.refs=B,this.updater=me||x}var Q=J.prototype=new q;Q.constructor=J,V(Q,D.prototype),Q.isPureReactComponent=!0;var oe=Array.isArray,Ee=Object.prototype.hasOwnProperty,Se={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function A(M,K,me){var ke,Re={},Le=null,je=null;if(K!=null)for(ke in K.ref!==void 0&&(je=K.ref),K.key!==void 0&&(Le=""+K.key),K)Ee.call(K,ke)&&!N.hasOwnProperty(ke)&&(Re[ke]=K[ke]);var ze=arguments.length-2;if(ze===1)Re.children=me;else if(1<ze){for(var Ge=Array(ze),It=0;It<ze;It++)Ge[It]=arguments[It+2];Re.children=Ge}if(M&&M.defaultProps)for(ke in ze=M.defaultProps,ze)Re[ke]===void 0&&(Re[ke]=ze[ke]);return{$$typeof:n,type:M,key:Le,ref:je,props:Re,_owner:Se.current}}function k(M,K){return{$$typeof:n,type:M.type,key:K,ref:M.ref,props:M.props,_owner:M._owner}}function b(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function L(M){var K={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(me){return K[me]})}var F=/\/+/g;function R(M,K){return typeof M=="object"&&M!==null&&M.key!=null?L(""+M.key):K.toString(36)}function lt(M,K,me,ke,Re){var Le=typeof M;(Le==="undefined"||Le==="boolean")&&(M=null);var je=!1;if(M===null)je=!0;else switch(Le){case"string":case"number":je=!0;break;case"object":switch(M.$$typeof){case n:case e:je=!0}}if(je)return je=M,Re=Re(je),M=ke===""?"."+R(je,0):ke,oe(Re)?(me="",M!=null&&(me=M.replace(F,"$&/")+"/"),lt(Re,K,me,"",function(It){return It})):Re!=null&&(b(Re)&&(Re=k(Re,me+(!Re.key||je&&je.key===Re.key?"":(""+Re.key).replace(F,"$&/")+"/")+M)),K.push(Re)),1;if(je=0,ke=ke===""?".":ke+":",oe(M))for(var ze=0;ze<M.length;ze++){Le=M[ze];var Ge=ke+R(Le,ze);je+=lt(Le,K,me,Ge,Re)}else if(Ge=I(M),typeof Ge=="function")for(M=Ge.call(M),ze=0;!(Le=M.next()).done;)Le=Le.value,Ge=ke+R(Le,ze++),je+=lt(Le,K,me,Ge,Re);else if(Le==="object")throw K=String(M),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return je}function Vt(M,K,me){if(M==null)return M;var ke=[],Re=0;return lt(M,ke,"","",function(Le){return K.call(me,Le,Re++)}),ke}function Mt(M){if(M._status===-1){var K=M._result;K=K(),K.then(function(me){(M._status===0||M._status===-1)&&(M._status=1,M._result=me)},function(me){(M._status===0||M._status===-1)&&(M._status=2,M._result=me)}),M._status===-1&&(M._status=0,M._result=K)}if(M._status===1)return M._result.default;throw M._result}var He={current:null},ie={transition:null},ye={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Se};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Vt,forEach:function(M,K,me){Vt(M,function(){K.apply(this,arguments)},me)},count:function(M){var K=0;return Vt(M,function(){K++}),K},toArray:function(M){return Vt(M,function(K){return K})||[]},only:function(M){if(!b(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Pe.Component=D,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=J,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Pe.act=ae,Pe.cloneElement=function(M,K,me){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ke=V({},M.props),Re=M.key,Le=M.ref,je=M._owner;if(K!=null){if(K.ref!==void 0&&(Le=K.ref,je=Se.current),K.key!==void 0&&(Re=""+K.key),M.type&&M.type.defaultProps)var ze=M.type.defaultProps;for(Ge in K)Ee.call(K,Ge)&&!N.hasOwnProperty(Ge)&&(ke[Ge]=K[Ge]===void 0&&ze!==void 0?ze[Ge]:K[Ge])}var Ge=arguments.length-2;if(Ge===1)ke.children=me;else if(1<Ge){ze=Array(Ge);for(var It=0;It<Ge;It++)ze[It]=arguments[It+2];ke.children=ze}return{$$typeof:n,type:M.type,key:Re,ref:Le,props:ke,_owner:je}},Pe.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Pe.createElement=A,Pe.createFactory=function(M){var K=A.bind(null,M);return K.type=M,K},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(M){return{$$typeof:d,render:M}},Pe.isValidElement=b,Pe.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:Mt}},Pe.memo=function(M,K){return{$$typeof:y,type:M,compare:K===void 0?null:K}},Pe.startTransition=function(M){var K=ie.transition;ie.transition={};try{M()}finally{ie.transition=K}},Pe.unstable_act=ae,Pe.useCallback=function(M,K){return He.current.useCallback(M,K)},Pe.useContext=function(M){return He.current.useContext(M)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(M){return He.current.useDeferredValue(M)},Pe.useEffect=function(M,K){return He.current.useEffect(M,K)},Pe.useId=function(){return He.current.useId()},Pe.useImperativeHandle=function(M,K,me){return He.current.useImperativeHandle(M,K,me)},Pe.useInsertionEffect=function(M,K){return He.current.useInsertionEffect(M,K)},Pe.useLayoutEffect=function(M,K){return He.current.useLayoutEffect(M,K)},Pe.useMemo=function(M,K){return He.current.useMemo(M,K)},Pe.useReducer=function(M,K,me){return He.current.useReducer(M,K,me)},Pe.useRef=function(M){return He.current.useRef(M)},Pe.useState=function(M){return He.current.useState(M)},Pe.useSyncExternalStore=function(M,K,me){return He.current.useSyncExternalStore(M,K,me)},Pe.useTransition=function(){return He.current.useTransition()},Pe.version="18.3.1",Pe}var Wy;function Tp(){return Wy||(Wy=1,ih.exports=CT()),ih.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function kT(){if(Hy)return rl;Hy=1;var n=Tp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,T={},I=null,x=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(x=p.ref);for(v in p)i.call(p,v)&&!a.hasOwnProperty(v)&&(T[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)T[v]===void 0&&(T[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:x,props:T,_owner:o.current}}return rl.Fragment=t,rl.jsx=c,rl.jsxs=c,rl}var qy;function RT(){return qy||(qy=1,rh.exports=kT()),rh.exports}var S=RT(),W=Tp();const n0=t0(W);var fc={},sh={exports:{}},sn={},oh={exports:{}},ah={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy;function PT(){return Gy||(Gy=1,function(n){function e(ie,ye){var ae=ie.length;ie.push(ye);e:for(;0<ae;){var M=ae-1>>>1,K=ie[M];if(0<o(K,ye))ie[M]=ye,ie[ae]=K,ae=M;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var ye=ie[0],ae=ie.pop();if(ae!==ye){ie[0]=ae;e:for(var M=0,K=ie.length,me=K>>>1;M<me;){var ke=2*(M+1)-1,Re=ie[ke],Le=ke+1,je=ie[Le];if(0>o(Re,ae))Le<K&&0>o(je,Re)?(ie[M]=je,ie[Le]=ae,M=Le):(ie[M]=Re,ie[ke]=ae,M=ke);else if(Le<K&&0>o(je,ae))ie[M]=je,ie[Le]=ae,M=Le;else break e}}return ye}function o(ie,ye){var ae=ie.sortIndex-ye.sortIndex;return ae!==0?ae:ie.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,T=null,I=3,x=!1,V=!1,B=!1,D=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(ie){for(var ye=t(y);ye!==null;){if(ye.callback===null)i(y);else if(ye.startTime<=ie)i(y),ye.sortIndex=ye.expirationTime,e(p,ye);else break;ye=t(y)}}function oe(ie){if(B=!1,Q(ie),!V)if(t(p)!==null)V=!0,Mt(Ee);else{var ye=t(y);ye!==null&&He(oe,ye.startTime-ie)}}function Ee(ie,ye){V=!1,B&&(B=!1,q(A),A=-1),x=!0;var ae=I;try{for(Q(ye),T=t(p);T!==null&&(!(T.expirationTime>ye)||ie&&!L());){var M=T.callback;if(typeof M=="function"){T.callback=null,I=T.priorityLevel;var K=M(T.expirationTime<=ye);ye=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),Q(ye)}else i(p);T=t(p)}if(T!==null)var me=!0;else{var ke=t(y);ke!==null&&He(oe,ke.startTime-ye),me=!1}return me}finally{T=null,I=ae,x=!1}}var Se=!1,N=null,A=-1,k=5,b=-1;function L(){return!(n.unstable_now()-b<k)}function F(){if(N!==null){var ie=n.unstable_now();b=ie;var ye=!0;try{ye=N(!0,ie)}finally{ye?R():(Se=!1,N=null)}}else Se=!1}var R;if(typeof J=="function")R=function(){J(F)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Vt=lt.port2;lt.port1.onmessage=F,R=function(){Vt.postMessage(null)}}else R=function(){D(F,0)};function Mt(ie){N=ie,Se||(Se=!0,R())}function He(ie,ye){A=D(function(){ie(n.unstable_now())},ye)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){V||x||(V=!0,Mt(Ee))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var ye=3;break;default:ye=I}var ae=I;I=ye;try{return ie()}finally{I=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ye){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=I;I=ie;try{return ye()}finally{I=ae}},n.unstable_scheduleCallback=function(ie,ye,ae){var M=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?M+ae:M):ae=M,ie){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ae+K,ie={id:v++,callback:ye,priorityLevel:ie,startTime:ae,expirationTime:K,sortIndex:-1},ae>M?(ie.sortIndex=ae,e(y,ie),t(p)===null&&ie===t(y)&&(B?(q(A),A=-1):B=!0,He(oe,ae-M))):(ie.sortIndex=K,e(p,ie),V||x||(V=!0,Mt(Ee))),ie},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(ie){var ye=I;return function(){var ae=I;I=ye;try{return ie.apply(this,arguments)}finally{I=ae}}}}(ah)),ah}var Ky;function xT(){return Ky||(Ky=1,oh.exports=PT()),oh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy;function bT(){if(Qy)return sn;Qy=1;var n=Tp(),e=xT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(r){return p.call(T,r)?!0:p.call(v,r)?!1:y.test(r)?T[r]=!0:(v[r]=!0,!1)}function x(r,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,s,l,f){if(s===null||typeof s>"u"||x(r,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function B(r,s,l,f,h,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=h,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new B(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];D[s]=new B(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new B(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new B(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new B(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new B(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new B(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new B(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new B(r,5,!1,r.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(q,J);D[s]=new B(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(q,J);D[s]=new B(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(q,J);D[s]=new B(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new B(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new B(r,1,!1,r.toLowerCase(),null,!0,!0)});function Q(r,s,l,f){var h=D.hasOwnProperty(s)?D[s]:null;(h!==null?h.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,l,h,f)&&(l=null),f||h===null?I(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):h.mustUseProperty?r[h.propertyName]=l===null?h.type===3?!1:"":l:(s=h.attributeName,f=h.attributeNamespace,l===null?r.removeAttribute(s):(h=h.type,l=h===3||h===4&&l===!0?"":""+l,f?r.setAttributeNS(f,s,l):r.setAttribute(s,l))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),Se=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ye(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,M;function K(r){if(M===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var me=!1;function ke(r,s){if(!r||me)return"";me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var f=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){f=$}r.call(s.prototype)}else{try{throw Error()}catch($){f=$}r()}}catch($){if($&&f&&typeof $.stack=="string"){for(var h=$.stack.split(`
`),g=f.stack.split(`
`),E=h.length-1,C=g.length-1;1<=E&&0<=C&&h[E]!==g[C];)C--;for(;1<=E&&0<=C;E--,C--)if(h[E]!==g[C]){if(E!==1||C!==1)do if(E--,C--,0>C||h[E]!==g[C]){var P=`
`+h[E].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=E&&0<=C);break}}}finally{me=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?K(r):""}function Re(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=ke(r.type,!1),r;case 11:return r=ke(r.type.render,!1),r;case 1:return r=ke(r.type,!0),r;default:return""}}function Le(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case Se:return"Portal";case k:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case lt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case L:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case F:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Vt:return s=r.displayName||null,s!==null?s:Le(r.type)||"Memo";case Mt:s=r._payload,r=r._init;try{return Le(r(s))}catch{}}return null}function je(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ze(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ge(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function It(r){var s=Ge(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),f=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return h.call(this)},set:function(E){f=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(E){f=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function vr(r){r._valueTracker||(r._valueTracker=It(r))}function Vs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return r&&(f=Ge(r)?r.checked?"true":"false":r.value),r=f,r!==l?(s.setValue(r),!0):!1}function Xr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Gi(r,s){var l=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function Ms(r,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=ze(s.value!=null?s.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ua(r,s){s=s.checked,s!=null&&Q(r,"checked",s,!1)}function ca(r,s){ua(r,s);var l=ze(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Fs(r,s.type,l):s.hasOwnProperty("defaultValue")&&Fs(r,s.type,ze(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Yl(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Fs(r,s,l){(s!=="number"||Xr(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Er=Array.isArray;function wr(r,s,l,f){if(r=r.options,s){s={};for(var h=0;h<l.length;h++)s["$"+l[h]]=!0;for(l=0;l<r.length;l++)h=s.hasOwnProperty("$"+r[l].value),r[l].selected!==h&&(r[l].selected=h),h&&f&&(r[l].defaultSelected=!0)}else{for(l=""+ze(l),s=null,h=0;h<r.length;h++){if(r[h].value===l){r[h].selected=!0,f&&(r[h].defaultSelected=!0);return}s!==null||r[h].disabled||(s=r[h])}s!==null&&(s.selected=!0)}}function fa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Us(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Er(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:ze(l)}}function js(r,s){var l=ze(s.value),f=ze(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function da(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function gt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?gt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Tr,ha=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,h){MSApp.execUnsafeLocalFunction(function(){return r(s,l,f,h)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Tr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Jr(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qi=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(r){Qi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ki[s]=Ki[r]})});function pa(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ki.hasOwnProperty(r)&&Ki[r]?(""+s).trim():s+"px"}function ma(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,h=pa(l,s[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,h):r[l]=h}}var ga=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(r,s){if(s){if(ga[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function _a(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function zs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Bs=null,_n=null,Yn=null;function $s(r){if(r=Ba(r)){if(typeof Bs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Cu(s),Bs(r.stateNode,r.type,s))}}function Xn(r){_n?Yn?Yn.push(r):Yn=[r]:_n=r}function va(){if(_n){var r=_n,s=Yn;if(Yn=_n=null,$s(r),s)for(r=0;r<s.length;r++)$s(s[r])}}function Xi(r,s){return r(s)}function Ea(){}var Ir=!1;function wa(r,s,l){if(Ir)return r(s,l);Ir=!0;try{return Xi(r,s,l)}finally{Ir=!1,(_n!==null||Yn!==null)&&(Ea(),va())}}function ut(r,s){var l=r.stateNode;if(l===null)return null;var f=Cu(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ws=!1;if(d)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{Ws=!1}function Ji(r,s,l,f,h,g,E,C,P){var $=Array.prototype.slice.call(arguments,3);try{s.apply(l,$)}catch(Z){this.onError(Z)}}var Zi=!1,Hs=null,bn=!1,Ta=null,bf={onError:function(r){Zi=!0,Hs=r}};function qs(r,s,l,f,h,g,E,C,P){Zi=!1,Hs=null,Ji.apply(bf,arguments)}function Xl(r,s,l,f,h,g,E,C,P){if(qs.apply(this,arguments),Zi){if(Zi){var $=Hs;Zi=!1,Hs=null}else throw Error(t(198));bn||(bn=!0,Ta=$)}}function Nn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function es(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function On(r){if(Nn(r)!==r)throw Error(t(188))}function Jl(r){var s=r.alternate;if(!s){if(s=Nn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,f=s;;){var h=l.return;if(h===null)break;var g=h.alternate;if(g===null){if(f=h.return,f!==null){l=f;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===l)return On(h),r;if(g===f)return On(h),s;g=g.sibling}throw Error(t(188))}if(l.return!==f.return)l=h,f=g;else{for(var E=!1,C=h.child;C;){if(C===l){E=!0,l=h,f=g;break}if(C===f){E=!0,f=h,l=g;break}C=C.sibling}if(!E){for(C=g.child;C;){if(C===l){E=!0,l=g,f=h;break}if(C===f){E=!0,f=g,l=h;break}C=C.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function Ia(r){return r=Jl(r),r!==null?Gs(r):null}function Gs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Gs(r);if(s!==null)return s;r=r.sibling}return null}var Ks=e.unstable_scheduleCallback,Sa=e.unstable_cancelCallback,Zl=e.unstable_shouldYield,Nf=e.unstable_requestPaint,Ke=e.unstable_now,eu=e.unstable_getCurrentPriorityLevel,ts=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,vn=e.unstable_NormalPriority,Aa=e.unstable_LowPriority,tu=e.unstable_IdlePriority,ns=null,ln=null;function nu(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(ns,r,void 0,(r.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:iu,Ca=Math.log,ru=Math.LN2;function iu(r){return r>>>=0,r===0?32:31-(Ca(r)/ru|0)|0}var Qs=64,Ys=4194304;function ei(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function rs(r,s){var l=r.pendingLanes;if(l===0)return 0;var f=0,h=r.suspendedLanes,g=r.pingedLanes,E=l&268435455;if(E!==0){var C=E&~h;C!==0?f=ei(C):(g&=E,g!==0&&(f=ei(g)))}else E=l&~h,E!==0?f=ei(E):g!==0&&(f=ei(g));if(f===0)return 0;if(s!==0&&s!==f&&!(s&h)&&(h=f&-f,g=s&-s,h>=g||h===16&&(g&4194240)!==0))return s;if(f&4&&(f|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=f;0<s;)l=31-Gt(s),h=1<<l,f|=r[l],s&=~h;return f}function Of(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sr(r,s){for(var l=r.suspendedLanes,f=r.pingedLanes,h=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-Gt(g),C=1<<E,P=h[E];P===-1?(!(C&l)||C&f)&&(h[E]=Of(C,s)):P<=s&&(r.expiredLanes|=C),g&=~C}}function un(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function is(){var r=Qs;return Qs<<=1,!(Qs&4194240)&&(Qs=64),r}function ti(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ni(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Gt(s),r[s]=l}function qe(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var h=31-Gt(l),g=1<<h;s[h]=0,f[h]=-1,r[h]=-1,l&=~g}}function ri(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var f=31-Gt(l),h=1<<f;h&s|r[f]&s&&(r[f]|=s),l&=~h}}var Oe=0;function ii(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var su,Xs,ou,au,lu,ka=!1,Jn=[],Pt=null,Dn=null,Ln=null,si=new Map,En=new Map,Zn=[],Df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(r,s){switch(r){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":si.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(s.pointerId)}}function Xt(r,s,l,f,h,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:g,targetContainers:[h]},s!==null&&(s=Ba(s),s!==null&&Xs(s)),r):(r.eventSystemFlags|=f,s=r.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),r)}function Lf(r,s,l,f,h){switch(s){case"focusin":return Pt=Xt(Pt,r,s,l,f,h),!0;case"dragenter":return Dn=Xt(Dn,r,s,l,f,h),!0;case"mouseover":return Ln=Xt(Ln,r,s,l,f,h),!0;case"pointerover":var g=h.pointerId;return si.set(g,Xt(si.get(g)||null,r,s,l,f,h)),!0;case"gotpointercapture":return g=h.pointerId,En.set(g,Xt(En.get(g)||null,r,s,l,f,h)),!0}return!1}function cu(r){var s=us(r.target);if(s!==null){var l=Nn(s);if(l!==null){if(s=l.tag,s===13){if(s=es(l),s!==null){r.blockedOn=s,lu(r.priority,function(){ou(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ar(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Js(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);Yi=f,l.target.dispatchEvent(f),Yi=null}else return s=Ba(l),s!==null&&Xs(s),r.blockedOn=l,!1;s.shift()}return!0}function ss(r,s,l){Ar(r)&&l.delete(s)}function fu(){ka=!1,Pt!==null&&Ar(Pt)&&(Pt=null),Dn!==null&&Ar(Dn)&&(Dn=null),Ln!==null&&Ar(Ln)&&(Ln=null),si.forEach(ss),En.forEach(ss)}function Vn(r,s){r.blockedOn===s&&(r.blockedOn=null,ka||(ka=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fu)))}function Mn(r){function s(h){return Vn(h,r)}if(0<Jn.length){Vn(Jn[0],r);for(var l=1;l<Jn.length;l++){var f=Jn[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Pt!==null&&Vn(Pt,r),Dn!==null&&Vn(Dn,r),Ln!==null&&Vn(Ln,r),si.forEach(s),En.forEach(s),l=0;l<Zn.length;l++)f=Zn[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Zn.length&&(l=Zn[0],l.blockedOn===null);)cu(l),l.blockedOn===null&&Zn.shift()}var Cr=oe.ReactCurrentBatchConfig,oi=!0;function tt(r,s,l,f){var h=Oe,g=Cr.transition;Cr.transition=null;try{Oe=1,Ra(r,s,l,f)}finally{Oe=h,Cr.transition=g}}function Vf(r,s,l,f){var h=Oe,g=Cr.transition;Cr.transition=null;try{Oe=4,Ra(r,s,l,f)}finally{Oe=h,Cr.transition=g}}function Ra(r,s,l,f){if(oi){var h=Js(r,s,l,f);if(h===null)Gf(r,s,f,os,l),uu(r,f);else if(Lf(h,r,s,l,f))f.stopPropagation();else if(uu(r,f),s&4&&-1<Df.indexOf(r)){for(;h!==null;){var g=Ba(h);if(g!==null&&su(g),g=Js(r,s,l,f),g===null&&Gf(r,s,f,os,l),g===h)break;h=g}h!==null&&f.stopPropagation()}else Gf(r,s,f,null,l)}}var os=null;function Js(r,s,l,f){if(os=null,r=zs(f),r=us(r),r!==null)if(s=Nn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=es(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return os=r,null}function Pa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eu()){case ts:return 1;case Zr:return 4;case vn:case Aa:return 16;case tu:return 536870912;default:return 16}default:return 16}}var cn=null,Zs=null,Jt=null;function xa(){if(Jt)return Jt;var r,s=Zs,l=s.length,f,h="value"in cn?cn.value:cn.textContent,g=h.length;for(r=0;r<l&&s[r]===h[r];r++);var E=l-r;for(f=1;f<=E&&s[l-f]===h[g-f];f++);return Jt=h.slice(r,1<f?1-f:void 0)}function eo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function er(){return!0}function ba(){return!1}function xt(r){function s(l,f,h,g,E){this._reactName=l,this._targetInst=h,this.type=f,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(l=r[C],this[C]=l?l(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?er:ba,this.isPropagationStopped=ba,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),s}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=xt(Fn),tr=ae({},Fn,{view:0,detail:0}),Mf=xt(tr),no,kr,ai,as=ae({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ai&&(ai&&r.type==="mousemove"?(no=r.screenX-ai.screenX,kr=r.screenY-ai.screenY):kr=no=0,ai=r),no)},movementY:function(r){return"movementY"in r?r.movementY:kr}}),ro=xt(as),Na=ae({},as,{dataTransfer:0}),du=xt(Na),io=ae({},tr,{relatedTarget:0}),so=xt(io),hu=ae({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rr=xt(hu),pu=ae({},Fn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),mu=xt(pu),gu=ae({},Fn,{data:0}),Oa=xt(gu),oo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _u(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=yu[r])?!!s[r]:!1}function nr(){return _u}var u=ae({},tr,{key:function(r){if(r.key){var s=oo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=eo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Kt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(r){return r.type==="keypress"?eo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?eo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=xt(u),_=ae({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=xt(_),U=ae({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),H=xt(U),re=ae({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),We=xt(re),_t=ae({},as,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=xt(_t),St=[9,13,27,32],dt=d&&"CompositionEvent"in window,wn=null;d&&"documentMode"in document&&(wn=document.documentMode);var fn=d&&"TextEvent"in window&&!wn,ls=d&&(!dt||wn&&8<wn&&11>=wn),ao=" ",Mm=!1;function Fm(r,s){switch(r){case"keyup":return St.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var lo=!1;function I1(r,s){switch(r){case"compositionend":return Um(s);case"keypress":return s.which!==32?null:(Mm=!0,ao);case"textInput":return r=s.data,r===ao&&Mm?null:r;default:return null}}function S1(r,s){if(lo)return r==="compositionend"||!dt&&Fm(r,s)?(r=xa(),Jt=Zs=cn=null,lo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ls&&s.locale!=="ko"?null:s.data;default:return null}}var A1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!A1[r.type]:s==="textarea"}function zm(r,s,l,f){Xn(f),s=Iu(s,"onChange"),0<s.length&&(l=new to("onChange","change",null,l,f),r.push({event:l,listeners:s}))}var Da=null,La=null;function C1(r){sg(r,0)}function vu(r){var s=po(r);if(Vs(s))return r}function k1(r,s){if(r==="change")return s}var Bm=!1;if(d){var Ff;if(d){var Uf="oninput"in document;if(!Uf){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),Uf=typeof $m.oninput=="function"}Ff=Uf}else Ff=!1;Bm=Ff&&(!document.documentMode||9<document.documentMode)}function Wm(){Da&&(Da.detachEvent("onpropertychange",Hm),La=Da=null)}function Hm(r){if(r.propertyName==="value"&&vu(La)){var s=[];zm(s,La,r,zs(r)),wa(C1,s)}}function R1(r,s,l){r==="focusin"?(Wm(),Da=s,La=l,Da.attachEvent("onpropertychange",Hm)):r==="focusout"&&Wm()}function P1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return vu(La)}function x1(r,s){if(r==="click")return vu(s)}function b1(r,s){if(r==="input"||r==="change")return vu(s)}function N1(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Un=typeof Object.is=="function"?Object.is:N1;function Va(r,s){if(Un(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var h=l[f];if(!p.call(s,h)||!Un(r[h],s[h]))return!1}return!0}function qm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Gm(r,s){var l=qm(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=s&&f>=s)return{node:l,offset:s-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qm(l)}}function Km(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Km(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Qm(){for(var r=window,s=Xr();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Xr(r.document)}return s}function jf(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function O1(r){var s=Qm(),l=r.focusedElem,f=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Km(l.ownerDocument.documentElement,l)){if(f!==null&&jf(l)){if(s=f.start,r=f.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var h=l.textContent.length,g=Math.min(f.start,h);f=f.end===void 0?g:Math.min(f.end,h),!r.extend&&g>f&&(h=f,f=g,g=h),h=Gm(l,g);var E=Gm(l,f);h&&E&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),r.removeAllRanges(),g>f?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var D1=d&&"documentMode"in document&&11>=document.documentMode,uo=null,zf=null,Ma=null,Bf=!1;function Ym(r,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Bf||uo==null||uo!==Xr(f)||(f=uo,"selectionStart"in f&&jf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ma&&Va(Ma,f)||(Ma=f,f=Iu(zf,"onSelect"),0<f.length&&(s=new to("onSelect","select",null,s,l),r.push({event:s,listeners:f}),s.target=uo)))}function Eu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var co={animationend:Eu("Animation","AnimationEnd"),animationiteration:Eu("Animation","AnimationIteration"),animationstart:Eu("Animation","AnimationStart"),transitionend:Eu("Transition","TransitionEnd")},$f={},Xm={};d&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function wu(r){if($f[r])return $f[r];if(!co[r])return r;var s=co[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Xm)return $f[r]=s[l];return r}var Jm=wu("animationend"),Zm=wu("animationiteration"),eg=wu("animationstart"),tg=wu("transitionend"),ng=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(r,s){ng.set(r,s),a(s,[r])}for(var Wf=0;Wf<rg.length;Wf++){var Hf=rg[Wf],L1=Hf.toLowerCase(),V1=Hf[0].toUpperCase()+Hf.slice(1);li(L1,"on"+V1)}li(Jm,"onAnimationEnd"),li(Zm,"onAnimationIteration"),li(eg,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(tg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function ig(r,s,l){var f=r.type||"unknown-event";r.currentTarget=l,Xl(f,s,void 0,r),r.currentTarget=null}function sg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],h=f.event;f=f.listeners;e:{var g=void 0;if(s)for(var E=f.length-1;0<=E;E--){var C=f[E],P=C.instance,$=C.currentTarget;if(C=C.listener,P!==g&&h.isPropagationStopped())break e;ig(h,C,$),g=P}else for(E=0;E<f.length;E++){if(C=f[E],P=C.instance,$=C.currentTarget,C=C.listener,P!==g&&h.isPropagationStopped())break e;ig(h,C,$),g=P}}}if(bn)throw r=Ta,bn=!1,Ta=null,r}function Xe(r,s){var l=s[Zf];l===void 0&&(l=s[Zf]=new Set);var f=r+"__bubble";l.has(f)||(og(s,r,2,!1),l.add(f))}function qf(r,s,l){var f=0;s&&(f|=4),og(l,r,f,s)}var Tu="_reactListening"+Math.random().toString(36).slice(2);function Ua(r){if(!r[Tu]){r[Tu]=!0,i.forEach(function(l){l!=="selectionchange"&&(M1.has(l)||qf(l,!1,r),qf(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Tu]||(s[Tu]=!0,qf("selectionchange",!1,s))}}function og(r,s,l,f){switch(Pa(s)){case 1:var h=tt;break;case 4:h=Vf;break;default:h=Ra}l=h.bind(null,s,l,r),h=void 0,!Ws||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),f?h!==void 0?r.addEventListener(s,l,{capture:!0,passive:h}):r.addEventListener(s,l,!0):h!==void 0?r.addEventListener(s,l,{passive:h}):r.addEventListener(s,l,!1)}function Gf(r,s,l,f,h){var g=f;if(!(s&1)&&!(s&2)&&f!==null)e:for(;;){if(f===null)return;var E=f.tag;if(E===3||E===4){var C=f.stateNode.containerInfo;if(C===h||C.nodeType===8&&C.parentNode===h)break;if(E===4)for(E=f.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===h||P.nodeType===8&&P.parentNode===h))return;E=E.return}for(;C!==null;){if(E=us(C),E===null)return;if(P=E.tag,P===5||P===6){f=g=E;continue e}C=C.parentNode}}f=f.return}wa(function(){var $=g,Z=zs(l),ee=[];e:{var X=ng.get(r);if(X!==void 0){var se=to,ce=r;switch(r){case"keypress":if(eo(l)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=so;break;case"focusout":ce="blur",se=so;break;case"beforeblur":case"afterblur":se=so;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=du;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=H;break;case Jm:case Zm:case eg:se=Rr;break;case tg:se=We;break;case"scroll":se=Mf;break;case"wheel":se=Ve;break;case"copy":case"cut":case"paste":se=mu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var de=(s&4)!==0,ct=!de&&r==="scroll",j=de?X!==null?X+"Capture":null:X;de=[];for(var O=$,z;O!==null;){z=O;var ne=z.stateNode;if(z.tag===5&&ne!==null&&(z=ne,j!==null&&(ne=ut(O,j),ne!=null&&de.push(ja(O,ne,z)))),ct)break;O=O.return}0<de.length&&(X=new se(X,ce,null,l,Z),ee.push({event:X,listeners:de}))}}if(!(s&7)){e:{if(X=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",X&&l!==Yi&&(ce=l.relatedTarget||l.fromElement)&&(us(ce)||ce[Pr]))break e;if((se||X)&&(X=Z.window===Z?Z:(X=Z.ownerDocument)?X.defaultView||X.parentWindow:window,se?(ce=l.relatedTarget||l.toElement,se=$,ce=ce?us(ce):null,ce!==null&&(ct=Nn(ce),ce!==ct||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=$),se!==ce)){if(de=ro,ne="onMouseLeave",j="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(de=w,ne="onPointerLeave",j="onPointerEnter",O="pointer"),ct=se==null?X:po(se),z=ce==null?X:po(ce),X=new de(ne,O+"leave",se,l,Z),X.target=ct,X.relatedTarget=z,ne=null,us(Z)===$&&(de=new de(j,O+"enter",ce,l,Z),de.target=z,de.relatedTarget=ct,ne=de),ct=ne,se&&ce)t:{for(de=se,j=ce,O=0,z=de;z;z=fo(z))O++;for(z=0,ne=j;ne;ne=fo(ne))z++;for(;0<O-z;)de=fo(de),O--;for(;0<z-O;)j=fo(j),z--;for(;O--;){if(de===j||j!==null&&de===j.alternate)break t;de=fo(de),j=fo(j)}de=null}else de=null;se!==null&&ag(ee,X,se,de,!1),ce!==null&&ct!==null&&ag(ee,ct,ce,de,!0)}}e:{if(X=$?po($):window,se=X.nodeName&&X.nodeName.toLowerCase(),se==="select"||se==="input"&&X.type==="file")var he=k1;else if(jm(X))if(Bm)he=b1;else{he=P1;var _e=R1}else(se=X.nodeName)&&se.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(he=x1);if(he&&(he=he(r,$))){zm(ee,he,l,Z);break e}_e&&_e(r,X,$),r==="focusout"&&(_e=X._wrapperState)&&_e.controlled&&X.type==="number"&&Fs(X,"number",X.value)}switch(_e=$?po($):window,r){case"focusin":(jm(_e)||_e.contentEditable==="true")&&(uo=_e,zf=$,Ma=null);break;case"focusout":Ma=zf=uo=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,Ym(ee,l,Z);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":Ym(ee,l,Z)}var ve;if(dt)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else lo?Fm(r,l)&&(Te="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(ls&&l.locale!=="ko"&&(lo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&lo&&(ve=xa()):(cn=Z,Zs="value"in cn?cn.value:cn.textContent,lo=!0)),_e=Iu($,Te),0<_e.length&&(Te=new Oa(Te,r,null,l,Z),ee.push({event:Te,listeners:_e}),ve?Te.data=ve:(ve=Um(l),ve!==null&&(Te.data=ve)))),(ve=fn?I1(r,l):S1(r,l))&&($=Iu($,"onBeforeInput"),0<$.length&&(Z=new Oa("onBeforeInput","beforeinput",null,l,Z),ee.push({event:Z,listeners:$}),Z.data=ve))}sg(ee,s)})}function ja(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Iu(r,s){for(var l=s+"Capture",f=[];r!==null;){var h=r,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=ut(r,l),g!=null&&f.unshift(ja(r,g,h)),g=ut(r,s),g!=null&&f.push(ja(r,g,h))),r=r.return}return f}function fo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function ag(r,s,l,f,h){for(var g=s._reactName,E=[];l!==null&&l!==f;){var C=l,P=C.alternate,$=C.stateNode;if(P!==null&&P===f)break;C.tag===5&&$!==null&&(C=$,h?(P=ut(l,g),P!=null&&E.unshift(ja(l,P,C))):h||(P=ut(l,g),P!=null&&E.push(ja(l,P,C)))),l=l.return}E.length!==0&&r.push({event:s,listeners:E})}var F1=/\r\n?/g,U1=/\u0000|\uFFFD/g;function lg(r){return(typeof r=="string"?r:""+r).replace(F1,`
`).replace(U1,"")}function Su(r,s,l){if(s=lg(s),lg(r)!==s&&l)throw Error(t(425))}function Au(){}var Kf=null,Qf=null;function Yf(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,j1=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,z1=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(r){return ug.resolve(null).then(r).catch(B1)}:Xf;function B1(r){setTimeout(function(){throw r})}function Jf(r,s){var l=s,f=0;do{var h=l.nextSibling;if(r.removeChild(l),h&&h.nodeType===8)if(l=h.data,l==="/$"){if(f===0){r.removeChild(h),Mn(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=h}while(l);Mn(s)}function ui(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function cg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var ho=Math.random().toString(36).slice(2),rr="__reactFiber$"+ho,za="__reactProps$"+ho,Pr="__reactContainer$"+ho,Zf="__reactEvents$"+ho,$1="__reactListeners$"+ho,W1="__reactHandles$"+ho;function us(r){var s=r[rr];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Pr]||l[rr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=cg(r);r!==null;){if(l=r[rr])return l;r=cg(r)}return s}r=l,l=r.parentNode}return null}function Ba(r){return r=r[rr]||r[Pr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function po(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Cu(r){return r[za]||null}var ed=[],mo=-1;function ci(r){return{current:r}}function Je(r){0>mo||(r.current=ed[mo],ed[mo]=null,mo--)}function Qe(r,s){mo++,ed[mo]=r.current,r.current=s}var fi={},Ft=ci(fi),Zt=ci(!1),cs=fi;function go(r,s){var l=r.type.contextTypes;if(!l)return fi;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in l)h[g]=s[g];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=h),h}function en(r){return r=r.childContextTypes,r!=null}function ku(){Je(Zt),Je(Ft)}function fg(r,s,l){if(Ft.current!==fi)throw Error(t(168));Qe(Ft,s),Qe(Zt,l)}function dg(r,s,l){var f=r.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var h in f)if(!(h in s))throw Error(t(108,je(r)||"Unknown",h));return ae({},l,f)}function Ru(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||fi,cs=Ft.current,Qe(Ft,r),Qe(Zt,Zt.current),!0}function hg(r,s,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=dg(r,s,cs),f.__reactInternalMemoizedMergedChildContext=r,Je(Zt),Je(Ft),Qe(Ft,r)):Je(Zt),Qe(Zt,l)}var xr=null,Pu=!1,td=!1;function pg(r){xr===null?xr=[r]:xr.push(r)}function H1(r){Pu=!0,pg(r)}function di(){if(!td&&xr!==null){td=!0;var r=0,s=Oe;try{var l=xr;for(Oe=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}xr=null,Pu=!1}catch(h){throw xr!==null&&(xr=xr.slice(r+1)),Ks(ts,di),h}finally{Oe=s,td=!1}}return null}var yo=[],_o=0,xu=null,bu=0,Tn=[],In=0,fs=null,br=1,Nr="";function ds(r,s){yo[_o++]=bu,yo[_o++]=xu,xu=r,bu=s}function mg(r,s,l){Tn[In++]=br,Tn[In++]=Nr,Tn[In++]=fs,fs=r;var f=br;r=Nr;var h=32-Gt(f)-1;f&=~(1<<h),l+=1;var g=32-Gt(s)+h;if(30<g){var E=h-h%5;g=(f&(1<<E)-1).toString(32),f>>=E,h-=E,br=1<<32-Gt(s)+h|l<<h|f,Nr=g+r}else br=1<<g|l<<h|f,Nr=r}function nd(r){r.return!==null&&(ds(r,1),mg(r,1,0))}function rd(r){for(;r===xu;)xu=yo[--_o],yo[_o]=null,bu=yo[--_o],yo[_o]=null;for(;r===fs;)fs=Tn[--In],Tn[In]=null,Nr=Tn[--In],Tn[In]=null,br=Tn[--In],Tn[In]=null}var dn=null,hn=null,nt=!1,jn=null;function gg(r,s){var l=kn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function yg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dn=r,hn=ui(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dn=r,hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=fs!==null?{id:br,overflow:Nr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=kn(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,dn=r,hn=null,!0):!1;default:return!1}}function id(r){return(r.mode&1)!==0&&(r.flags&128)===0}function sd(r){if(nt){var s=hn;if(s){var l=s;if(!yg(r,s)){if(id(r))throw Error(t(418));s=ui(l.nextSibling);var f=dn;s&&yg(r,s)?gg(f,l):(r.flags=r.flags&-4097|2,nt=!1,dn=r)}}else{if(id(r))throw Error(t(418));r.flags=r.flags&-4097|2,nt=!1,dn=r}}}function _g(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dn=r}function Nu(r){if(r!==dn)return!1;if(!nt)return _g(r),nt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Yf(r.type,r.memoizedProps)),s&&(s=hn)){if(id(r))throw vg(),Error(t(418));for(;s;)gg(r,s),s=ui(s.nextSibling)}if(_g(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){hn=ui(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}hn=null}}else hn=dn?ui(r.stateNode.nextSibling):null;return!0}function vg(){for(var r=hn;r;)r=ui(r.nextSibling)}function vo(){hn=dn=null,nt=!1}function od(r){jn===null?jn=[r]:jn.push(r)}var q1=oe.ReactCurrentBatchConfig;function $a(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var h=f,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var C=h.refs;E===null?delete C[g]:C[g]=E},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Eg(r){var s=r._init;return s(r._payload)}function wg(r){function s(j,O){if(r){var z=j.deletions;z===null?(j.deletions=[O],j.flags|=16):z.push(O)}}function l(j,O){if(!r)return null;for(;O!==null;)s(j,O),O=O.sibling;return null}function f(j,O){for(j=new Map;O!==null;)O.key!==null?j.set(O.key,O):j.set(O.index,O),O=O.sibling;return j}function h(j,O){return j=Ei(j,O),j.index=0,j.sibling=null,j}function g(j,O,z){return j.index=z,r?(z=j.alternate,z!==null?(z=z.index,z<O?(j.flags|=2,O):z):(j.flags|=2,O)):(j.flags|=1048576,O)}function E(j){return r&&j.alternate===null&&(j.flags|=2),j}function C(j,O,z,ne){return O===null||O.tag!==6?(O=Xd(z,j.mode,ne),O.return=j,O):(O=h(O,z),O.return=j,O)}function P(j,O,z,ne){var he=z.type;return he===N?Z(j,O,z.props.children,ne,z.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Mt&&Eg(he)===O.type)?(ne=h(O,z.props),ne.ref=$a(j,O,z),ne.return=j,ne):(ne=rc(z.type,z.key,z.props,null,j.mode,ne),ne.ref=$a(j,O,z),ne.return=j,ne)}function $(j,O,z,ne){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Jd(z,j.mode,ne),O.return=j,O):(O=h(O,z.children||[]),O.return=j,O)}function Z(j,O,z,ne,he){return O===null||O.tag!==7?(O=Es(z,j.mode,ne,he),O.return=j,O):(O=h(O,z),O.return=j,O)}function ee(j,O,z){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Xd(""+O,j.mode,z),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ee:return z=rc(O.type,O.key,O.props,null,j.mode,z),z.ref=$a(j,null,O),z.return=j,z;case Se:return O=Jd(O,j.mode,z),O.return=j,O;case Mt:var ne=O._init;return ee(j,ne(O._payload),z)}if(Er(O)||ye(O))return O=Es(O,j.mode,z,null),O.return=j,O;Ou(j,O)}return null}function X(j,O,z,ne){var he=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return he!==null?null:C(j,O,""+z,ne);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ee:return z.key===he?P(j,O,z,ne):null;case Se:return z.key===he?$(j,O,z,ne):null;case Mt:return he=z._init,X(j,O,he(z._payload),ne)}if(Er(z)||ye(z))return he!==null?null:Z(j,O,z,ne,null);Ou(j,z)}return null}function se(j,O,z,ne,he){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return j=j.get(z)||null,C(O,j,""+ne,he);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Ee:return j=j.get(ne.key===null?z:ne.key)||null,P(O,j,ne,he);case Se:return j=j.get(ne.key===null?z:ne.key)||null,$(O,j,ne,he);case Mt:var _e=ne._init;return se(j,O,z,_e(ne._payload),he)}if(Er(ne)||ye(ne))return j=j.get(z)||null,Z(O,j,ne,he,null);Ou(O,ne)}return null}function ce(j,O,z,ne){for(var he=null,_e=null,ve=O,Te=O=0,kt=null;ve!==null&&Te<z.length;Te++){ve.index>Te?(kt=ve,ve=null):kt=ve.sibling;var Ue=X(j,ve,z[Te],ne);if(Ue===null){ve===null&&(ve=kt);break}r&&ve&&Ue.alternate===null&&s(j,ve),O=g(Ue,O,Te),_e===null?he=Ue:_e.sibling=Ue,_e=Ue,ve=kt}if(Te===z.length)return l(j,ve),nt&&ds(j,Te),he;if(ve===null){for(;Te<z.length;Te++)ve=ee(j,z[Te],ne),ve!==null&&(O=g(ve,O,Te),_e===null?he=ve:_e.sibling=ve,_e=ve);return nt&&ds(j,Te),he}for(ve=f(j,ve);Te<z.length;Te++)kt=se(ve,j,Te,z[Te],ne),kt!==null&&(r&&kt.alternate!==null&&ve.delete(kt.key===null?Te:kt.key),O=g(kt,O,Te),_e===null?he=kt:_e.sibling=kt,_e=kt);return r&&ve.forEach(function(wi){return s(j,wi)}),nt&&ds(j,Te),he}function de(j,O,z,ne){var he=ye(z);if(typeof he!="function")throw Error(t(150));if(z=he.call(z),z==null)throw Error(t(151));for(var _e=he=null,ve=O,Te=O=0,kt=null,Ue=z.next();ve!==null&&!Ue.done;Te++,Ue=z.next()){ve.index>Te?(kt=ve,ve=null):kt=ve.sibling;var wi=X(j,ve,Ue.value,ne);if(wi===null){ve===null&&(ve=kt);break}r&&ve&&wi.alternate===null&&s(j,ve),O=g(wi,O,Te),_e===null?he=wi:_e.sibling=wi,_e=wi,ve=kt}if(Ue.done)return l(j,ve),nt&&ds(j,Te),he;if(ve===null){for(;!Ue.done;Te++,Ue=z.next())Ue=ee(j,Ue.value,ne),Ue!==null&&(O=g(Ue,O,Te),_e===null?he=Ue:_e.sibling=Ue,_e=Ue);return nt&&ds(j,Te),he}for(ve=f(j,ve);!Ue.done;Te++,Ue=z.next())Ue=se(ve,j,Te,Ue.value,ne),Ue!==null&&(r&&Ue.alternate!==null&&ve.delete(Ue.key===null?Te:Ue.key),O=g(Ue,O,Te),_e===null?he=Ue:_e.sibling=Ue,_e=Ue);return r&&ve.forEach(function(AT){return s(j,AT)}),nt&&ds(j,Te),he}function ct(j,O,z,ne){if(typeof z=="object"&&z!==null&&z.type===N&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Ee:e:{for(var he=z.key,_e=O;_e!==null;){if(_e.key===he){if(he=z.type,he===N){if(_e.tag===7){l(j,_e.sibling),O=h(_e,z.props.children),O.return=j,j=O;break e}}else if(_e.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Mt&&Eg(he)===_e.type){l(j,_e.sibling),O=h(_e,z.props),O.ref=$a(j,_e,z),O.return=j,j=O;break e}l(j,_e);break}else s(j,_e);_e=_e.sibling}z.type===N?(O=Es(z.props.children,j.mode,ne,z.key),O.return=j,j=O):(ne=rc(z.type,z.key,z.props,null,j.mode,ne),ne.ref=$a(j,O,z),ne.return=j,j=ne)}return E(j);case Se:e:{for(_e=z.key;O!==null;){if(O.key===_e)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){l(j,O.sibling),O=h(O,z.children||[]),O.return=j,j=O;break e}else{l(j,O);break}else s(j,O);O=O.sibling}O=Jd(z,j.mode,ne),O.return=j,j=O}return E(j);case Mt:return _e=z._init,ct(j,O,_e(z._payload),ne)}if(Er(z))return ce(j,O,z,ne);if(ye(z))return de(j,O,z,ne);Ou(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,O!==null&&O.tag===6?(l(j,O.sibling),O=h(O,z),O.return=j,j=O):(l(j,O),O=Xd(z,j.mode,ne),O.return=j,j=O),E(j)):l(j,O)}return ct}var Eo=wg(!0),Tg=wg(!1),Du=ci(null),Lu=null,wo=null,ad=null;function ld(){ad=wo=Lu=null}function ud(r){var s=Du.current;Je(Du),r._currentValue=s}function cd(r,s,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),r===l)break;r=r.return}}function To(r,s){Lu=r,ad=wo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(tn=!0),r.firstContext=null)}function Sn(r){var s=r._currentValue;if(ad!==r)if(r={context:r,memoizedValue:s,next:null},wo===null){if(Lu===null)throw Error(t(308));wo=r,Lu.dependencies={lanes:0,firstContext:r}}else wo=wo.next=r;return s}var hs=null;function fd(r){hs===null?hs=[r]:hs.push(r)}function Ig(r,s,l,f){var h=s.interleaved;return h===null?(l.next=l,fd(s)):(l.next=h.next,h.next=l),s.interleaved=l,Or(r,f)}function Or(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var hi=!1;function dd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Dr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function pi(r,s,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,Fe&2){var h=f.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),f.pending=s,Or(r,l)}return h=f.interleaved,h===null?(s.next=s,fd(f)):(s.next=h.next,h.next=s),f.interleaved=s,Or(r,l)}function Vu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,ri(r,l)}}function Ag(r,s){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var h=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?h=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?h=g=s:g=g.next=s}else h=g=s;l={baseState:f.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Mu(r,s,l,f){var h=r.updateQueue;hi=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var P=C,$=P.next;P.next=null,E===null?g=$:E.next=$,E=P;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,C=Z.lastBaseUpdate,C!==E&&(C===null?Z.firstBaseUpdate=$:C.next=$,Z.lastBaseUpdate=P))}if(g!==null){var ee=h.baseState;E=0,Z=$=P=null,C=g;do{var X=C.lane,se=C.eventTime;if((f&X)===X){Z!==null&&(Z=Z.next={eventTime:se,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var ce=r,de=C;switch(X=s,se=l,de.tag){case 1:if(ce=de.payload,typeof ce=="function"){ee=ce.call(se,ee,X);break e}ee=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=de.payload,X=typeof ce=="function"?ce.call(se,ee,X):ce,X==null)break e;ee=ae({},ee,X);break e;case 2:hi=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,X=h.effects,X===null?h.effects=[C]:X.push(C))}else se={eventTime:se,lane:X,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Z===null?($=Z=se,P=ee):Z=Z.next=se,E|=X;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;X=C,C=X.next,X.next=null,h.lastBaseUpdate=X,h.shared.pending=null}}while(!0);if(Z===null&&(P=ee),h.baseState=P,h.firstBaseUpdate=$,h.lastBaseUpdate=Z,s=h.shared.interleaved,s!==null){h=s;do E|=h.lane,h=h.next;while(h!==s)}else g===null&&(h.shared.lanes=0);gs|=E,r.lanes=E,r.memoizedState=ee}}function Cg(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var f=r[s],h=f.callback;if(h!==null){if(f.callback=null,f=l,typeof h!="function")throw Error(t(191,h));h.call(f)}}}var Wa={},ir=ci(Wa),Ha=ci(Wa),qa=ci(Wa);function ps(r){if(r===Wa)throw Error(t(174));return r}function hd(r,s){switch(Qe(qa,s),Qe(Ha,r),Qe(ir,Wa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:yt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=yt(s,r)}Je(ir),Qe(ir,s)}function Io(){Je(ir),Je(Ha),Je(qa)}function kg(r){ps(qa.current);var s=ps(ir.current),l=yt(s,r.type);s!==l&&(Qe(Ha,r),Qe(ir,l))}function pd(r){Ha.current===r&&(Je(ir),Je(Ha))}var it=ci(0);function Fu(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var md=[];function gd(){for(var r=0;r<md.length;r++)md[r]._workInProgressVersionPrimary=null;md.length=0}var Uu=oe.ReactCurrentDispatcher,yd=oe.ReactCurrentBatchConfig,ms=0,st=null,vt=null,At=null,ju=!1,Ga=!1,Ka=0,G1=0;function Ut(){throw Error(t(321))}function _d(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Un(r[l],s[l]))return!1;return!0}function vd(r,s,l,f,h,g){if(ms=g,st=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Uu.current=r===null||r.memoizedState===null?X1:J1,r=l(f,h),Ga){g=0;do{if(Ga=!1,Ka=0,25<=g)throw Error(t(301));g+=1,At=vt=null,s.updateQueue=null,Uu.current=Z1,r=l(f,h)}while(Ga)}if(Uu.current=$u,s=vt!==null&&vt.next!==null,ms=0,At=vt=st=null,ju=!1,s)throw Error(t(300));return r}function Ed(){var r=Ka!==0;return Ka=0,r}function sr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?st.memoizedState=At=r:At=At.next=r,At}function An(){if(vt===null){var r=st.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var s=At===null?st.memoizedState:At.next;if(s!==null)At=s,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},At===null?st.memoizedState=At=r:At=At.next=r}return At}function Qa(r,s){return typeof s=="function"?s(r):s}function wd(r){var s=An(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=vt,h=f.baseQueue,g=l.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}f.baseQueue=h=g,l.pending=null}if(h!==null){g=h.next,f=f.baseState;var C=E=null,P=null,$=g;do{var Z=$.lane;if((ms&Z)===Z)P!==null&&(P=P.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),f=$.hasEagerState?$.eagerState:r(f,$.action);else{var ee={lane:Z,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};P===null?(C=P=ee,E=f):P=P.next=ee,st.lanes|=Z,gs|=Z}$=$.next}while($!==null&&$!==g);P===null?E=f:P.next=C,Un(f,s.memoizedState)||(tn=!0),s.memoizedState=f,s.baseState=E,s.baseQueue=P,l.lastRenderedState=f}if(r=l.interleaved,r!==null){h=r;do g=h.lane,st.lanes|=g,gs|=g,h=h.next;while(h!==r)}else h===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Td(r){var s=An(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,h=l.pending,g=s.memoizedState;if(h!==null){l.pending=null;var E=h=h.next;do g=r(g,E.action),E=E.next;while(E!==h);Un(g,s.memoizedState)||(tn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,f]}function Rg(){}function Pg(r,s){var l=st,f=An(),h=s(),g=!Un(f.memoizedState,h);if(g&&(f.memoizedState=h,tn=!0),f=f.queue,Id(Ng.bind(null,l,f,r),[r]),f.getSnapshot!==s||g||At!==null&&At.memoizedState.tag&1){if(l.flags|=2048,Ya(9,bg.bind(null,l,f,h,s),void 0,null),Ct===null)throw Error(t(349));ms&30||xg(l,s,h)}return h}function xg(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function bg(r,s,l,f){s.value=l,s.getSnapshot=f,Og(s)&&Dg(r)}function Ng(r,s,l){return l(function(){Og(s)&&Dg(r)})}function Og(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Un(r,l)}catch{return!0}}function Dg(r){var s=Or(r,1);s!==null&&Wn(s,r,1,-1)}function Lg(r){var s=sr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:r},s.queue=r,r=r.dispatch=Y1.bind(null,st,r),[s.memoizedState,r]}function Ya(r,s,l,f){return r={tag:r,create:s,destroy:l,deps:f,next:null},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,s.lastEffect=r)),r}function Vg(){return An().memoizedState}function zu(r,s,l,f){var h=sr();st.flags|=r,h.memoizedState=Ya(1|s,l,void 0,f===void 0?null:f)}function Bu(r,s,l,f){var h=An();f=f===void 0?null:f;var g=void 0;if(vt!==null){var E=vt.memoizedState;if(g=E.destroy,f!==null&&_d(f,E.deps)){h.memoizedState=Ya(s,l,g,f);return}}st.flags|=r,h.memoizedState=Ya(1|s,l,g,f)}function Mg(r,s){return zu(8390656,8,r,s)}function Id(r,s){return Bu(2048,8,r,s)}function Fg(r,s){return Bu(4,2,r,s)}function Ug(r,s){return Bu(4,4,r,s)}function jg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function zg(r,s,l){return l=l!=null?l.concat([r]):null,Bu(4,4,jg.bind(null,s,r),l)}function Sd(){}function Bg(r,s){var l=An();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&_d(s,f[1])?f[0]:(l.memoizedState=[r,s],r)}function $g(r,s){var l=An();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&_d(s,f[1])?f[0]:(r=r(),l.memoizedState=[r,s],r)}function Wg(r,s,l){return ms&21?(Un(l,s)||(l=is(),st.lanes|=l,gs|=l,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,tn=!0),r.memoizedState=l)}function K1(r,s){var l=Oe;Oe=l!==0&&4>l?l:4,r(!0);var f=yd.transition;yd.transition={};try{r(!1),s()}finally{Oe=l,yd.transition=f}}function Hg(){return An().memoizedState}function Q1(r,s,l){var f=_i(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},qg(r))Gg(s,l);else if(l=Ig(r,s,l,f),l!==null){var h=Yt();Wn(l,r,f,h),Kg(l,s,f)}}function Y1(r,s,l){var f=_i(r),h={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(qg(r))Gg(s,h);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,C=g(E,l);if(h.hasEagerState=!0,h.eagerState=C,Un(C,E)){var P=s.interleaved;P===null?(h.next=h,fd(s)):(h.next=P.next,P.next=h),s.interleaved=h;return}}catch{}finally{}l=Ig(r,s,h,f),l!==null&&(h=Yt(),Wn(l,r,f,h),Kg(l,s,f))}}function qg(r){var s=r.alternate;return r===st||s!==null&&s===st}function Gg(r,s){Ga=ju=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function Kg(r,s,l){if(l&4194240){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,ri(r,l)}}var $u={readContext:Sn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},X1={readContext:Sn,useCallback:function(r,s){return sr().memoizedState=[r,s===void 0?null:s],r},useContext:Sn,useEffect:Mg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,zu(4194308,4,jg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return zu(4194308,4,r,s)},useInsertionEffect:function(r,s){return zu(4,2,r,s)},useMemo:function(r,s){var l=sr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var f=sr();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},f.queue=r,r=r.dispatch=Q1.bind(null,st,r),[f.memoizedState,r]},useRef:function(r){var s=sr();return r={current:r},s.memoizedState=r},useState:Lg,useDebugValue:Sd,useDeferredValue:function(r){return sr().memoizedState=r},useTransition:function(){var r=Lg(!1),s=r[0];return r=K1.bind(null,r[1]),sr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var f=st,h=sr();if(nt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Ct===null)throw Error(t(349));ms&30||xg(f,s,l)}h.memoizedState=l;var g={value:l,getSnapshot:s};return h.queue=g,Mg(Ng.bind(null,f,g,r),[r]),f.flags|=2048,Ya(9,bg.bind(null,f,g,l,s),void 0,null),l},useId:function(){var r=sr(),s=Ct.identifierPrefix;if(nt){var l=Nr,f=br;l=(f&~(1<<32-Gt(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ka++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=G1++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},J1={readContext:Sn,useCallback:Bg,useContext:Sn,useEffect:Id,useImperativeHandle:zg,useInsertionEffect:Fg,useLayoutEffect:Ug,useMemo:$g,useReducer:wd,useRef:Vg,useState:function(){return wd(Qa)},useDebugValue:Sd,useDeferredValue:function(r){var s=An();return Wg(s,vt.memoizedState,r)},useTransition:function(){var r=wd(Qa)[0],s=An().memoizedState;return[r,s]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:Hg,unstable_isNewReconciler:!1},Z1={readContext:Sn,useCallback:Bg,useContext:Sn,useEffect:Id,useImperativeHandle:zg,useInsertionEffect:Fg,useLayoutEffect:Ug,useMemo:$g,useReducer:Td,useRef:Vg,useState:function(){return Td(Qa)},useDebugValue:Sd,useDeferredValue:function(r){var s=An();return vt===null?s.memoizedState=r:Wg(s,vt.memoizedState,r)},useTransition:function(){var r=Td(Qa)[0],s=An().memoizedState;return[r,s]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:Hg,unstable_isNewReconciler:!1};function zn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Ad(r,s,l,f){s=r.memoizedState,l=l(f,s),l=l==null?s:ae({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Wu={isMounted:function(r){return(r=r._reactInternals)?Nn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var f=Yt(),h=_i(r),g=Dr(f,h);g.payload=s,l!=null&&(g.callback=l),s=pi(r,g,h),s!==null&&(Wn(s,r,h,f),Vu(s,r,h))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var f=Yt(),h=_i(r),g=Dr(f,h);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=pi(r,g,h),s!==null&&(Wn(s,r,h,f),Vu(s,r,h))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Yt(),f=_i(r),h=Dr(l,f);h.tag=2,s!=null&&(h.callback=s),s=pi(r,h,f),s!==null&&(Wn(s,r,f,l),Vu(s,r,f))}};function Qg(r,s,l,f,h,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,g,E):s.prototype&&s.prototype.isPureReactComponent?!Va(l,f)||!Va(h,g):!0}function Yg(r,s,l){var f=!1,h=fi,g=s.contextType;return typeof g=="object"&&g!==null?g=Sn(g):(h=en(s)?cs:Ft.current,f=s.contextTypes,g=(f=f!=null)?go(r,h):fi),s=new s(l,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Wu,r.stateNode=s,s._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=g),s}function Xg(r,s,l,f){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==r&&Wu.enqueueReplaceState(s,s.state,null)}function Cd(r,s,l,f){var h=r.stateNode;h.props=l,h.state=r.memoizedState,h.refs={},dd(r);var g=s.contextType;typeof g=="object"&&g!==null?h.context=Sn(g):(g=en(s)?cs:Ft.current,h.context=go(r,g)),h.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Ad(r,s,g,l),h.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&Wu.enqueueReplaceState(h,h.state,null),Mu(r,l,h,f),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function So(r,s){try{var l="",f=s;do l+=Re(f),f=f.return;while(f);var h=l}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:h,digest:null}}function kd(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function Rd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var eT=typeof WeakMap=="function"?WeakMap:Map;function Jg(r,s,l){l=Dr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Xu||(Xu=!0,$d=f),Rd(r,s)},l}function Zg(r,s,l){l=Dr(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var h=s.value;l.payload=function(){return f(h)},l.callback=function(){Rd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){Rd(r,s),typeof f!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function ey(r,s,l){var f=r.pingCache;if(f===null){f=r.pingCache=new eT;var h=new Set;f.set(s,h)}else h=f.get(s),h===void 0&&(h=new Set,f.set(s,h));h.has(l)||(h.add(l),r=pT.bind(null,r,s,l),s.then(r,r))}function ty(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function ny(r,s,l,f,h){return r.mode&1?(r.flags|=65536,r.lanes=h,r):(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Dr(-1,1),s.tag=2,pi(l,s,1))),l.lanes|=1),r)}var tT=oe.ReactCurrentOwner,tn=!1;function Qt(r,s,l,f){s.child=r===null?Tg(s,null,l,f):Eo(s,r.child,l,f)}function ry(r,s,l,f,h){l=l.render;var g=s.ref;return To(s,h),f=vd(r,s,l,f,g,h),l=Ed(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,Lr(r,s,h)):(nt&&l&&nd(s),s.flags|=1,Qt(r,s,f,h),s.child)}function iy(r,s,l,f,h){if(r===null){var g=l.type;return typeof g=="function"&&!Yd(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,sy(r,s,g,f,h)):(r=rc(l.type,null,f,s,s.mode,h),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&h)){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:Va,l(E,f)&&r.ref===s.ref)return Lr(r,s,h)}return s.flags|=1,r=Ei(g,f),r.ref=s.ref,r.return=s,s.child=r}function sy(r,s,l,f,h){if(r!==null){var g=r.memoizedProps;if(Va(g,f)&&r.ref===s.ref)if(tn=!1,s.pendingProps=f=g,(r.lanes&h)!==0)r.flags&131072&&(tn=!0);else return s.lanes=r.lanes,Lr(r,s,h)}return Pd(r,s,l,f,h)}function oy(r,s,l){var f=s.pendingProps,h=f.children,g=r!==null?r.memoizedState:null;if(f.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Co,pn),pn|=l;else{if(!(l&1073741824))return r=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Qe(Co,pn),pn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=g!==null?g.baseLanes:l,Qe(Co,pn),pn|=f}else g!==null?(f=g.baseLanes|l,s.memoizedState=null):f=l,Qe(Co,pn),pn|=f;return Qt(r,s,h,l),s.child}function ay(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Pd(r,s,l,f,h){var g=en(l)?cs:Ft.current;return g=go(s,g),To(s,h),l=vd(r,s,l,f,g,h),f=Ed(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,Lr(r,s,h)):(nt&&f&&nd(s),s.flags|=1,Qt(r,s,l,h),s.child)}function ly(r,s,l,f,h){if(en(l)){var g=!0;Ru(s)}else g=!1;if(To(s,h),s.stateNode===null)qu(r,s),Yg(s,l,f),Cd(s,l,f,h),f=!0;else if(r===null){var E=s.stateNode,C=s.memoizedProps;E.props=C;var P=E.context,$=l.contextType;typeof $=="object"&&$!==null?$=Sn($):($=en(l)?cs:Ft.current,$=go(s,$));var Z=l.getDerivedStateFromProps,ee=typeof Z=="function"||typeof E.getSnapshotBeforeUpdate=="function";ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(C!==f||P!==$)&&Xg(s,E,f,$),hi=!1;var X=s.memoizedState;E.state=X,Mu(s,f,E,h),P=s.memoizedState,C!==f||X!==P||Zt.current||hi?(typeof Z=="function"&&(Ad(s,l,Z,f),P=s.memoizedState),(C=hi||Qg(s,l,C,f,X,P,$))?(ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=P),E.props=f,E.state=P,E.context=$,f=C):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{E=s.stateNode,Sg(r,s),C=s.memoizedProps,$=s.type===s.elementType?C:zn(s.type,C),E.props=$,ee=s.pendingProps,X=E.context,P=l.contextType,typeof P=="object"&&P!==null?P=Sn(P):(P=en(l)?cs:Ft.current,P=go(s,P));var se=l.getDerivedStateFromProps;(Z=typeof se=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(C!==ee||X!==P)&&Xg(s,E,f,P),hi=!1,X=s.memoizedState,E.state=X,Mu(s,f,E,h);var ce=s.memoizedState;C!==ee||X!==ce||Zt.current||hi?(typeof se=="function"&&(Ad(s,l,se,f),ce=s.memoizedState),($=hi||Qg(s,l,$,f,X,ce,P)||!1)?(Z||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(f,ce,P),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(f,ce,P)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||C===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=ce),E.props=f,E.state=ce,E.context=P,f=$):(typeof E.componentDidUpdate!="function"||C===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),f=!1)}return xd(r,s,l,f,g,h)}function xd(r,s,l,f,h,g){ay(r,s);var E=(s.flags&128)!==0;if(!f&&!E)return h&&hg(s,l,!1),Lr(r,s,g);f=s.stateNode,tT.current=s;var C=E&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,r!==null&&E?(s.child=Eo(s,r.child,null,g),s.child=Eo(s,null,C,g)):Qt(r,s,C,g),s.memoizedState=f.state,h&&hg(s,l,!0),s.child}function uy(r){var s=r.stateNode;s.pendingContext?fg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&fg(r,s.context,!1),hd(r,s.containerInfo)}function cy(r,s,l,f,h){return vo(),od(h),s.flags|=256,Qt(r,s,l,f),s.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Nd(r){return{baseLanes:r,cachePool:null,transitions:null}}function fy(r,s,l){var f=s.pendingProps,h=it.current,g=!1,E=(s.flags&128)!==0,C;if((C=E)||(C=r!==null&&r.memoizedState===null?!1:(h&2)!==0),C?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),Qe(it,h&1),r===null)return sd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(E=f.children,r=f.fallback,g?(f=s.mode,g=s.child,E={mode:"hidden",children:E},!(f&1)&&g!==null?(g.childLanes=0,g.pendingProps=E):g=ic(E,f,0,null),r=Es(r,f,l,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Nd(l),s.memoizedState=bd,r):Od(s,E));if(h=r.memoizedState,h!==null&&(C=h.dehydrated,C!==null))return nT(r,s,E,f,C,h,l);if(g){g=f.fallback,E=s.mode,h=r.child,C=h.sibling;var P={mode:"hidden",children:f.children};return!(E&1)&&s.child!==h?(f=s.child,f.childLanes=0,f.pendingProps=P,s.deletions=null):(f=Ei(h,P),f.subtreeFlags=h.subtreeFlags&14680064),C!==null?g=Ei(C,g):(g=Es(g,E,l,null),g.flags|=2),g.return=s,f.return=s,f.sibling=g,s.child=f,f=g,g=s.child,E=r.child.memoizedState,E=E===null?Nd(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~l,s.memoizedState=bd,f}return g=r.child,r=g.sibling,f=Ei(g,{mode:"visible",children:f.children}),!(s.mode&1)&&(f.lanes=l),f.return=s,f.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=f,s.memoizedState=null,f}function Od(r,s){return s=ic({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Hu(r,s,l,f){return f!==null&&od(f),Eo(s,r.child,null,l),r=Od(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function nT(r,s,l,f,h,g,E){if(l)return s.flags&256?(s.flags&=-257,f=kd(Error(t(422))),Hu(r,s,E,f)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=f.fallback,h=s.mode,f=ic({mode:"visible",children:f.children},h,0,null),g=Es(g,h,E,null),g.flags|=2,f.return=s,g.return=s,f.sibling=g,s.child=f,s.mode&1&&Eo(s,r.child,null,E),s.child.memoizedState=Nd(E),s.memoizedState=bd,g);if(!(s.mode&1))return Hu(r,s,E,null);if(h.data==="$!"){if(f=h.nextSibling&&h.nextSibling.dataset,f)var C=f.dgst;return f=C,g=Error(t(419)),f=kd(g,f,void 0),Hu(r,s,E,f)}if(C=(E&r.childLanes)!==0,tn||C){if(f=Ct,f!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(f.suspendedLanes|E)?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Or(r,h),Wn(f,r,h,-1))}return Qd(),f=kd(Error(t(421))),Hu(r,s,E,f)}return h.data==="$?"?(s.flags|=128,s.child=r.child,s=mT.bind(null,r),h._reactRetry=s,null):(r=g.treeContext,hn=ui(h.nextSibling),dn=s,nt=!0,jn=null,r!==null&&(Tn[In++]=br,Tn[In++]=Nr,Tn[In++]=fs,br=r.id,Nr=r.overflow,fs=s),s=Od(s,f.children),s.flags|=4096,s)}function dy(r,s,l){r.lanes|=s;var f=r.alternate;f!==null&&(f.lanes|=s),cd(r.return,s,l)}function Dd(r,s,l,f,h){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:h}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=f,g.tail=l,g.tailMode=h)}function hy(r,s,l){var f=s.pendingProps,h=f.revealOrder,g=f.tail;if(Qt(r,s,f.children,l),f=it.current,f&2)f=f&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&dy(r,l,s);else if(r.tag===19)dy(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Qe(it,f),!(s.mode&1))s.memoizedState=null;else switch(h){case"forwards":for(l=s.child,h=null;l!==null;)r=l.alternate,r!==null&&Fu(r)===null&&(h=l),l=l.sibling;l=h,l===null?(h=s.child,s.child=null):(h=l.sibling,l.sibling=null),Dd(s,!1,h,l,g);break;case"backwards":for(l=null,h=s.child,s.child=null;h!==null;){if(r=h.alternate,r!==null&&Fu(r)===null){s.child=h;break}r=h.sibling,h.sibling=l,l=h,h=r}Dd(s,!0,l,null,g);break;case"together":Dd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function qu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Lr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),gs|=s.lanes,!(l&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Ei(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Ei(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function rT(r,s,l){switch(s.tag){case 3:uy(s),vo();break;case 5:kg(s);break;case 1:en(s.type)&&Ru(s);break;case 4:hd(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,h=s.memoizedProps.value;Qe(Du,f._currentValue),f._currentValue=h;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Qe(it,it.current&1),s.flags|=128,null):l&s.child.childLanes?fy(r,s,l):(Qe(it,it.current&1),r=Lr(r,s,l),r!==null?r.sibling:null);Qe(it,it.current&1);break;case 19:if(f=(l&s.childLanes)!==0,r.flags&128){if(f)return hy(r,s,l);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Qe(it,it.current),f)break;return null;case 22:case 23:return s.lanes=0,oy(r,s,l)}return Lr(r,s,l)}var py,Ld,my,gy;py=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ld=function(){},my=function(r,s,l,f){var h=r.memoizedProps;if(h!==f){r=s.stateNode,ps(ir.current);var g=null;switch(l){case"input":h=Gi(r,h),f=Gi(r,f),g=[];break;case"select":h=ae({},h,{value:void 0}),f=ae({},f,{value:void 0}),g=[];break;case"textarea":h=fa(r,h),f=fa(r,f),g=[];break;default:typeof h.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Au)}ya(l,f);var E;l=null;for($ in h)if(!f.hasOwnProperty($)&&h.hasOwnProperty($)&&h[$]!=null)if($==="style"){var C=h[$];for(E in C)C.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in f){var P=f[$];if(C=h!=null?h[$]:void 0,f.hasOwnProperty($)&&P!==C&&(P!=null||C!=null))if($==="style")if(C){for(E in C)!C.hasOwnProperty(E)||P&&P.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in P)P.hasOwnProperty(E)&&C[E]!==P[E]&&(l||(l={}),l[E]=P[E])}else l||(g||(g=[]),g.push($,l)),l=P;else $==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,C=C?C.__html:void 0,P!=null&&C!==P&&(g=g||[]).push($,P)):$==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push($,""+P):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(P!=null&&$==="onScroll"&&Xe("scroll",r),g||C===P||(g=[])):(g=g||[]).push($,P))}l&&(g=g||[]).push("style",l);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},gy=function(r,s,l,f){l!==f&&(s.flags|=4)};function Xa(r,s){if(!nt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function jt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(s)for(var h=r.child;h!==null;)l|=h.lanes|h.childLanes,f|=h.subtreeFlags&14680064,f|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)l|=h.lanes|h.childLanes,f|=h.subtreeFlags,f|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=f,r.childLanes=l,s}function iT(r,s,l){var f=s.pendingProps;switch(rd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(s),null;case 1:return en(s.type)&&ku(),jt(s),null;case 3:return f=s.stateNode,Io(),Je(Zt),Je(Ft),gd(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Nu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,jn!==null&&(qd(jn),jn=null))),Ld(r,s),jt(s),null;case 5:pd(s);var h=ps(qa.current);if(l=s.type,r!==null&&s.stateNode!=null)my(r,s,l,f,h),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return jt(s),null}if(r=ps(ir.current),Nu(s)){f=s.stateNode,l=s.type;var g=s.memoizedProps;switch(f[rr]=s,f[za]=g,r=(s.mode&1)!==0,l){case"dialog":Xe("cancel",f),Xe("close",f);break;case"iframe":case"object":case"embed":Xe("load",f);break;case"video":case"audio":for(h=0;h<Fa.length;h++)Xe(Fa[h],f);break;case"source":Xe("error",f);break;case"img":case"image":case"link":Xe("error",f),Xe("load",f);break;case"details":Xe("toggle",f);break;case"input":Ms(f,g),Xe("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!g.multiple},Xe("invalid",f);break;case"textarea":Us(f,g),Xe("invalid",f)}ya(l,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var C=g[E];E==="children"?typeof C=="string"?f.textContent!==C&&(g.suppressHydrationWarning!==!0&&Su(f.textContent,C,r),h=["children",C]):typeof C=="number"&&f.textContent!==""+C&&(g.suppressHydrationWarning!==!0&&Su(f.textContent,C,r),h=["children",""+C]):o.hasOwnProperty(E)&&C!=null&&E==="onScroll"&&Xe("scroll",f)}switch(l){case"input":vr(f),Yl(f,g,!0);break;case"textarea":vr(f),da(f);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(f.onclick=Au)}f=h,s.updateQueue=f,f!==null&&(s.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=gt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=E.createElement(l,{is:f.is}):(r=E.createElement(l),l==="select"&&(E=r,f.multiple?E.multiple=!0:f.size&&(E.size=f.size))):r=E.createElementNS(r,l),r[rr]=s,r[za]=f,py(r,s,!1,!1),s.stateNode=r;e:{switch(E=_a(l,f),l){case"dialog":Xe("cancel",r),Xe("close",r),h=f;break;case"iframe":case"object":case"embed":Xe("load",r),h=f;break;case"video":case"audio":for(h=0;h<Fa.length;h++)Xe(Fa[h],r);h=f;break;case"source":Xe("error",r),h=f;break;case"img":case"image":case"link":Xe("error",r),Xe("load",r),h=f;break;case"details":Xe("toggle",r),h=f;break;case"input":Ms(r,f),h=Gi(r,f),Xe("invalid",r);break;case"option":h=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},h=ae({},f,{value:void 0}),Xe("invalid",r);break;case"textarea":Us(r,f),h=fa(r,f),Xe("invalid",r);break;default:h=f}ya(l,h),C=h;for(g in C)if(C.hasOwnProperty(g)){var P=C[g];g==="style"?ma(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ha(r,P)):g==="children"?typeof P=="string"?(l!=="textarea"||P!=="")&&Jr(r,P):typeof P=="number"&&Jr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Xe("scroll",r):P!=null&&Q(r,g,P,E))}switch(l){case"input":vr(r),Yl(r,f,!1);break;case"textarea":vr(r),da(r);break;case"option":f.value!=null&&r.setAttribute("value",""+ze(f.value));break;case"select":r.multiple=!!f.multiple,g=f.value,g!=null?wr(r,!!f.multiple,g,!1):f.defaultValue!=null&&wr(r,!!f.multiple,f.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=Au)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return jt(s),null;case 6:if(r&&s.stateNode!=null)gy(r,s,r.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=ps(qa.current),ps(ir.current),Nu(s)){if(f=s.stateNode,l=s.memoizedProps,f[rr]=s,(g=f.nodeValue!==l)&&(r=dn,r!==null))switch(r.tag){case 3:Su(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Su(f.nodeValue,l,(r.mode&1)!==0)}g&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[rr]=s,s.stateNode=f}return jt(s),null;case 13:if(Je(it),f=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(nt&&hn!==null&&s.mode&1&&!(s.flags&128))vg(),vo(),s.flags|=98560,g=!1;else if(g=Nu(s),f!==null&&f.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[rr]=s}else vo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;jt(s),g=!1}else jn!==null&&(qd(jn),jn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(s.child.flags|=8192,s.mode&1&&(r===null||it.current&1?Et===0&&(Et=3):Qd())),s.updateQueue!==null&&(s.flags|=4),jt(s),null);case 4:return Io(),Ld(r,s),r===null&&Ua(s.stateNode.containerInfo),jt(s),null;case 10:return ud(s.type._context),jt(s),null;case 17:return en(s.type)&&ku(),jt(s),null;case 19:if(Je(it),g=s.memoizedState,g===null)return jt(s),null;if(f=(s.flags&128)!==0,E=g.rendering,E===null)if(f)Xa(g,!1);else{if(Et!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(E=Fu(r),E!==null){for(s.flags|=128,Xa(g,!1),f=E.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)g=l,r=f,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Qe(it,it.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ke()>ko&&(s.flags|=128,f=!0,Xa(g,!1),s.lanes=4194304)}else{if(!f)if(r=Fu(E),r!==null){if(s.flags|=128,f=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!nt)return jt(s),null}else 2*Ke()-g.renderingStartTime>ko&&l!==1073741824&&(s.flags|=128,f=!0,Xa(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(l=g.last,l!==null?l.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ke(),s.sibling=null,l=it.current,Qe(it,f?l&1|2:l&1),s):(jt(s),null);case 22:case 23:return Kd(),f=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(s.flags|=8192),f&&s.mode&1?pn&1073741824&&(jt(s),s.subtreeFlags&6&&(s.flags|=8192)):jt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function sT(r,s){switch(rd(s),s.tag){case 1:return en(s.type)&&ku(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Io(),Je(Zt),Je(Ft),gd(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return pd(s),null;case 13:if(Je(it),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));vo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Je(it),null;case 4:return Io(),null;case 10:return ud(s.type._context),null;case 22:case 23:return Kd(),null;case 24:return null;default:return null}}var Gu=!1,zt=!1,oT=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Ao(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){at(r,s,f)}else l.current=null}function Vd(r,s,l){try{l()}catch(f){at(r,s,f)}}var yy=!1;function aT(r,s){if(Kf=oi,r=Qm(),jf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var h=f.anchorOffset,g=f.focusNode;f=f.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,C=-1,P=-1,$=0,Z=0,ee=r,X=null;t:for(;;){for(var se;ee!==l||h!==0&&ee.nodeType!==3||(C=E+h),ee!==g||f!==0&&ee.nodeType!==3||(P=E+f),ee.nodeType===3&&(E+=ee.nodeValue.length),(se=ee.firstChild)!==null;)X=ee,ee=se;for(;;){if(ee===r)break t;if(X===l&&++$===h&&(C=E),X===g&&++Z===f&&(P=E),(se=ee.nextSibling)!==null)break;ee=X,X=ee.parentNode}ee=se}l=C===-1||P===-1?null:{start:C,end:P}}else l=null}l=l||{start:0,end:0}}else l=null;for(Qf={focusedElem:r,selectionRange:l},oi=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var de=ce.memoizedProps,ct=ce.memoizedState,j=s.stateNode,O=j.getSnapshotBeforeUpdate(s.elementType===s.type?de:zn(s.type,de),ct);j.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){at(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=yy,yy=!1,ce}function Ja(r,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var h=f=f.next;do{if((h.tag&r)===r){var g=h.destroy;h.destroy=void 0,g!==void 0&&Vd(s,l,g)}h=h.next}while(h!==f)}}function Ku(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Md(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function _y(r){var s=r.alternate;s!==null&&(r.alternate=null,_y(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[rr],delete s[za],delete s[Zf],delete s[$1],delete s[W1])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function vy(r){return r.tag===5||r.tag===3||r.tag===4}function Ey(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||vy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Fd(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Au));else if(f!==4&&(r=r.child,r!==null))for(Fd(r,s,l),r=r.sibling;r!==null;)Fd(r,s,l),r=r.sibling}function Ud(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(Ud(r,s,l),r=r.sibling;r!==null;)Ud(r,s,l),r=r.sibling}var bt=null,Bn=!1;function mi(r,s,l){for(l=l.child;l!==null;)wy(r,s,l),l=l.sibling}function wy(r,s,l){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(ns,l)}catch{}switch(l.tag){case 5:zt||Ao(l,s);case 6:var f=bt,h=Bn;bt=null,mi(r,s,l),bt=f,Bn=h,bt!==null&&(Bn?(r=bt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):bt.removeChild(l.stateNode));break;case 18:bt!==null&&(Bn?(r=bt,l=l.stateNode,r.nodeType===8?Jf(r.parentNode,l):r.nodeType===1&&Jf(r,l),Mn(r)):Jf(bt,l.stateNode));break;case 4:f=bt,h=Bn,bt=l.stateNode.containerInfo,Bn=!0,mi(r,s,l),bt=f,Bn=h;break;case 0:case 11:case 14:case 15:if(!zt&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){h=f=f.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&(g&2||g&4)&&Vd(l,s,E),h=h.next}while(h!==f)}mi(r,s,l);break;case 1:if(!zt&&(Ao(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(C){at(l,s,C)}mi(r,s,l);break;case 21:mi(r,s,l);break;case 22:l.mode&1?(zt=(f=zt)||l.memoizedState!==null,mi(r,s,l),zt=f):mi(r,s,l);break;default:mi(r,s,l)}}function Ty(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new oT),s.forEach(function(f){var h=gT.bind(null,r,f);l.has(f)||(l.add(f),f.then(h,h))})}}function $n(r,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var h=l[f];try{var g=r,E=s,C=E;e:for(;C!==null;){switch(C.tag){case 5:bt=C.stateNode,Bn=!1;break e;case 3:bt=C.stateNode.containerInfo,Bn=!0;break e;case 4:bt=C.stateNode.containerInfo,Bn=!0;break e}C=C.return}if(bt===null)throw Error(t(160));wy(g,E,h),bt=null,Bn=!1;var P=h.alternate;P!==null&&(P.return=null),h.return=null}catch($){at(h,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Iy(s,r),s=s.sibling}function Iy(r,s){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if($n(s,r),or(r),f&4){try{Ja(3,r,r.return),Ku(3,r)}catch(de){at(r,r.return,de)}try{Ja(5,r,r.return)}catch(de){at(r,r.return,de)}}break;case 1:$n(s,r),or(r),f&512&&l!==null&&Ao(l,l.return);break;case 5:if($n(s,r),or(r),f&512&&l!==null&&Ao(l,l.return),r.flags&32){var h=r.stateNode;try{Jr(h,"")}catch(de){at(r,r.return,de)}}if(f&4&&(h=r.stateNode,h!=null)){var g=r.memoizedProps,E=l!==null?l.memoizedProps:g,C=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{C==="input"&&g.type==="radio"&&g.name!=null&&ua(h,g),_a(C,E);var $=_a(C,g);for(E=0;E<P.length;E+=2){var Z=P[E],ee=P[E+1];Z==="style"?ma(h,ee):Z==="dangerouslySetInnerHTML"?ha(h,ee):Z==="children"?Jr(h,ee):Q(h,Z,ee,$)}switch(C){case"input":ca(h,g);break;case"textarea":js(h,g);break;case"select":var X=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?wr(h,!!g.multiple,se,!1):X!==!!g.multiple&&(g.defaultValue!=null?wr(h,!!g.multiple,g.defaultValue,!0):wr(h,!!g.multiple,g.multiple?[]:"",!1))}h[za]=g}catch(de){at(r,r.return,de)}}break;case 6:if($n(s,r),or(r),f&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,g=r.memoizedProps;try{h.nodeValue=g}catch(de){at(r,r.return,de)}}break;case 3:if($n(s,r),or(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Mn(s.containerInfo)}catch(de){at(r,r.return,de)}break;case 4:$n(s,r),or(r);break;case 13:$n(s,r),or(r),h=r.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Bd=Ke())),f&4&&Ty(r);break;case 22:if(Z=l!==null&&l.memoizedState!==null,r.mode&1?(zt=($=zt)||Z,$n(s,r),zt=$):$n(s,r),or(r),f&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!Z&&r.mode&1)for(ue=r,Z=r.child;Z!==null;){for(ee=ue=Z;ue!==null;){switch(X=ue,se=X.child,X.tag){case 0:case 11:case 14:case 15:Ja(4,X,X.return);break;case 1:Ao(X,X.return);var ce=X.stateNode;if(typeof ce.componentWillUnmount=="function"){f=X,l=X.return;try{s=f,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(de){at(f,l,de)}}break;case 5:Ao(X,X.return);break;case 22:if(X.memoizedState!==null){Cy(ee);continue}}se!==null?(se.return=X,ue=se):Cy(ee)}Z=Z.sibling}e:for(Z=null,ee=r;;){if(ee.tag===5){if(Z===null){Z=ee;try{h=ee.stateNode,$?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(C=ee.stateNode,P=ee.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null,C.style.display=pa("display",E))}catch(de){at(r,r.return,de)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=$?"":ee.memoizedProps}catch(de){at(r,r.return,de)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===r)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===r)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===r)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:$n(s,r),or(r),f&4&&Ty(r);break;case 21:break;default:$n(s,r),or(r)}}function or(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(vy(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var h=f.stateNode;f.flags&32&&(Jr(h,""),f.flags&=-33);var g=Ey(r);Ud(r,g,h);break;case 3:case 4:var E=f.stateNode.containerInfo,C=Ey(r);Fd(r,C,E);break;default:throw Error(t(161))}}catch(P){at(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function lT(r,s,l){ue=r,Sy(r)}function Sy(r,s,l){for(var f=(r.mode&1)!==0;ue!==null;){var h=ue,g=h.child;if(h.tag===22&&f){var E=h.memoizedState!==null||Gu;if(!E){var C=h.alternate,P=C!==null&&C.memoizedState!==null||zt;C=Gu;var $=zt;if(Gu=E,(zt=P)&&!$)for(ue=h;ue!==null;)E=ue,P=E.child,E.tag===22&&E.memoizedState!==null?ky(h):P!==null?(P.return=E,ue=P):ky(h);for(;g!==null;)ue=g,Sy(g),g=g.sibling;ue=h,Gu=C,zt=$}Ay(r)}else h.subtreeFlags&8772&&g!==null?(g.return=h,ue=g):Ay(r)}}function Ay(r){for(;ue!==null;){var s=ue;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:zt||Ku(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!zt)if(l===null)f.componentDidMount();else{var h=s.elementType===s.type?l.memoizedProps:zn(s.type,l.memoizedProps);f.componentDidUpdate(h,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Cg(s,g,f);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Cg(s,E,l)}break;case 5:var C=s.stateNode;if(l===null&&s.flags&4){l=C;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&l.focus();break;case"img":P.src&&(l.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var Z=$.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&Mn(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&Md(s)}catch(X){at(s,s.return,X)}}if(s===r){ue=null;break}if(l=s.sibling,l!==null){l.return=s.return,ue=l;break}ue=s.return}}function Cy(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ue=l;break}ue=s.return}}function ky(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Ku(4,s)}catch(P){at(s,l,P)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var h=s.return;try{f.componentDidMount()}catch(P){at(s,h,P)}}var g=s.return;try{Md(s)}catch(P){at(s,g,P)}break;case 5:var E=s.return;try{Md(s)}catch(P){at(s,E,P)}}}catch(P){at(s,s.return,P)}if(s===r){ue=null;break}var C=s.sibling;if(C!==null){C.return=s.return,ue=C;break}ue=s.return}}var uT=Math.ceil,Qu=oe.ReactCurrentDispatcher,jd=oe.ReactCurrentOwner,Cn=oe.ReactCurrentBatchConfig,Fe=0,Ct=null,ht=null,Nt=0,pn=0,Co=ci(0),Et=0,Za=null,gs=0,Yu=0,zd=0,el=null,nn=null,Bd=0,ko=1/0,Vr=null,Xu=!1,$d=null,gi=null,Ju=!1,yi=null,Zu=0,tl=0,Wd=null,ec=-1,tc=0;function Yt(){return Fe&6?Ke():ec!==-1?ec:ec=Ke()}function _i(r){return r.mode&1?Fe&2&&Nt!==0?Nt&-Nt:q1.transition!==null?(tc===0&&(tc=is()),tc):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:Pa(r.type)),r):1}function Wn(r,s,l,f){if(50<tl)throw tl=0,Wd=null,Error(t(185));ni(r,l,f),(!(Fe&2)||r!==Ct)&&(r===Ct&&(!(Fe&2)&&(Yu|=l),Et===4&&vi(r,Nt)),rn(r,f),l===1&&Fe===0&&!(s.mode&1)&&(ko=Ke()+500,Pu&&di()))}function rn(r,s){var l=r.callbackNode;Sr(r,s);var f=rs(r,r===Ct?Nt:0);if(f===0)l!==null&&Sa(l),r.callbackNode=null,r.callbackPriority=0;else if(s=f&-f,r.callbackPriority!==s){if(l!=null&&Sa(l),s===1)r.tag===0?H1(Py.bind(null,r)):pg(Py.bind(null,r)),z1(function(){!(Fe&6)&&di()}),l=null;else{switch(ii(f)){case 1:l=ts;break;case 4:l=Zr;break;case 16:l=vn;break;case 536870912:l=tu;break;default:l=vn}l=My(l,Ry.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Ry(r,s){if(ec=-1,tc=0,Fe&6)throw Error(t(327));var l=r.callbackNode;if(Ro()&&r.callbackNode!==l)return null;var f=rs(r,r===Ct?Nt:0);if(f===0)return null;if(f&30||f&r.expiredLanes||s)s=nc(r,f);else{s=f;var h=Fe;Fe|=2;var g=by();(Ct!==r||Nt!==s)&&(Vr=null,ko=Ke()+500,_s(r,s));do try{dT();break}catch(C){xy(r,C)}while(!0);ld(),Qu.current=g,Fe=h,ht!==null?s=0:(Ct=null,Nt=0,s=Et)}if(s!==0){if(s===2&&(h=un(r),h!==0&&(f=h,s=Hd(r,h))),s===1)throw l=Za,_s(r,0),vi(r,f),rn(r,Ke()),l;if(s===6)vi(r,f);else{if(h=r.current.alternate,!(f&30)&&!cT(h)&&(s=nc(r,f),s===2&&(g=un(r),g!==0&&(f=g,s=Hd(r,g))),s===1))throw l=Za,_s(r,0),vi(r,f),rn(r,Ke()),l;switch(r.finishedWork=h,r.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:vs(r,nn,Vr);break;case 3:if(vi(r,f),(f&130023424)===f&&(s=Bd+500-Ke(),10<s)){if(rs(r,0)!==0)break;if(h=r.suspendedLanes,(h&f)!==f){Yt(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=Xf(vs.bind(null,r,nn,Vr),s);break}vs(r,nn,Vr);break;case 4:if(vi(r,f),(f&4194240)===f)break;for(s=r.eventTimes,h=-1;0<f;){var E=31-Gt(f);g=1<<E,E=s[E],E>h&&(h=E),f&=~g}if(f=h,f=Ke()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*uT(f/1960))-f,10<f){r.timeoutHandle=Xf(vs.bind(null,r,nn,Vr),f);break}vs(r,nn,Vr);break;case 5:vs(r,nn,Vr);break;default:throw Error(t(329))}}}return rn(r,Ke()),r.callbackNode===l?Ry.bind(null,r):null}function Hd(r,s){var l=el;return r.current.memoizedState.isDehydrated&&(_s(r,s).flags|=256),r=nc(r,s),r!==2&&(s=nn,nn=l,s!==null&&qd(s)),r}function qd(r){nn===null?nn=r:nn.push.apply(nn,r)}function cT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var h=l[f],g=h.getSnapshot;h=h.value;try{if(!Un(g(),h))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function vi(r,s){for(s&=~zd,s&=~Yu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Gt(s),f=1<<l;r[l]=-1,s&=~f}}function Py(r){if(Fe&6)throw Error(t(327));Ro();var s=rs(r,0);if(!(s&1))return rn(r,Ke()),null;var l=nc(r,s);if(r.tag!==0&&l===2){var f=un(r);f!==0&&(s=f,l=Hd(r,f))}if(l===1)throw l=Za,_s(r,0),vi(r,s),rn(r,Ke()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,vs(r,nn,Vr),rn(r,Ke()),null}function Gd(r,s){var l=Fe;Fe|=1;try{return r(s)}finally{Fe=l,Fe===0&&(ko=Ke()+500,Pu&&di())}}function ys(r){yi!==null&&yi.tag===0&&!(Fe&6)&&Ro();var s=Fe;Fe|=1;var l=Cn.transition,f=Oe;try{if(Cn.transition=null,Oe=1,r)return r()}finally{Oe=f,Cn.transition=l,Fe=s,!(Fe&6)&&di()}}function Kd(){pn=Co.current,Je(Co)}function _s(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,j1(l)),ht!==null)for(l=ht.return;l!==null;){var f=l;switch(rd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ku();break;case 3:Io(),Je(Zt),Je(Ft),gd();break;case 5:pd(f);break;case 4:Io();break;case 13:Je(it);break;case 19:Je(it);break;case 10:ud(f.type._context);break;case 22:case 23:Kd()}l=l.return}if(Ct=r,ht=r=Ei(r.current,null),Nt=pn=s,Et=0,Za=null,zd=Yu=gs=0,nn=el=null,hs!==null){for(s=0;s<hs.length;s++)if(l=hs[s],f=l.interleaved,f!==null){l.interleaved=null;var h=f.next,g=l.pending;if(g!==null){var E=g.next;g.next=h,f.next=E}l.pending=f}hs=null}return r}function xy(r,s){do{var l=ht;try{if(ld(),Uu.current=$u,ju){for(var f=st.memoizedState;f!==null;){var h=f.queue;h!==null&&(h.pending=null),f=f.next}ju=!1}if(ms=0,At=vt=st=null,Ga=!1,Ka=0,jd.current=null,l===null||l.return===null){Et=1,Za=s,ht=null;break}e:{var g=r,E=l.return,C=l,P=s;if(s=Nt,C.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var $=P,Z=C,ee=Z.tag;if(!(Z.mode&1)&&(ee===0||ee===11||ee===15)){var X=Z.alternate;X?(Z.updateQueue=X.updateQueue,Z.memoizedState=X.memoizedState,Z.lanes=X.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var se=ty(E);if(se!==null){se.flags&=-257,ny(se,E,C,g,s),se.mode&1&&ey(g,$,s),s=se,P=$;var ce=s.updateQueue;if(ce===null){var de=new Set;de.add(P),s.updateQueue=de}else ce.add(P);break e}else{if(!(s&1)){ey(g,$,s),Qd();break e}P=Error(t(426))}}else if(nt&&C.mode&1){var ct=ty(E);if(ct!==null){!(ct.flags&65536)&&(ct.flags|=256),ny(ct,E,C,g,s),od(So(P,C));break e}}g=P=So(P,C),Et!==4&&(Et=2),el===null?el=[g]:el.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=Jg(g,P,s);Ag(g,j);break e;case 1:C=P;var O=g.type,z=g.stateNode;if(!(g.flags&128)&&(typeof O.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(gi===null||!gi.has(z)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=Zg(g,C,s);Ag(g,ne);break e}}g=g.return}while(g!==null)}Oy(l)}catch(he){s=he,ht===l&&l!==null&&(ht=l=l.return);continue}break}while(!0)}function by(){var r=Qu.current;return Qu.current=$u,r===null?$u:r}function Qd(){(Et===0||Et===3||Et===2)&&(Et=4),Ct===null||!(gs&268435455)&&!(Yu&268435455)||vi(Ct,Nt)}function nc(r,s){var l=Fe;Fe|=2;var f=by();(Ct!==r||Nt!==s)&&(Vr=null,_s(r,s));do try{fT();break}catch(h){xy(r,h)}while(!0);if(ld(),Fe=l,Qu.current=f,ht!==null)throw Error(t(261));return Ct=null,Nt=0,Et}function fT(){for(;ht!==null;)Ny(ht)}function dT(){for(;ht!==null&&!Zl();)Ny(ht)}function Ny(r){var s=Vy(r.alternate,r,pn);r.memoizedProps=r.pendingProps,s===null?Oy(r):ht=s,jd.current=null}function Oy(r){var s=r;do{var l=s.alternate;if(r=s.return,s.flags&32768){if(l=sT(l,s),l!==null){l.flags&=32767,ht=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,ht=null;return}}else if(l=iT(l,s,pn),l!==null){ht=l;return}if(s=s.sibling,s!==null){ht=s;return}ht=s=r}while(s!==null);Et===0&&(Et=5)}function vs(r,s,l){var f=Oe,h=Cn.transition;try{Cn.transition=null,Oe=1,hT(r,s,l,f)}finally{Cn.transition=h,Oe=f}return null}function hT(r,s,l,f){do Ro();while(yi!==null);if(Fe&6)throw Error(t(327));l=r.finishedWork;var h=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=l.lanes|l.childLanes;if(qe(r,g),r===Ct&&(ht=Ct=null,Nt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Ju||(Ju=!0,My(vn,function(){return Ro(),null})),g=(l.flags&15990)!==0,l.subtreeFlags&15990||g){g=Cn.transition,Cn.transition=null;var E=Oe;Oe=1;var C=Fe;Fe|=4,jd.current=null,aT(r,l),Iy(l,r),O1(Qf),oi=!!Kf,Qf=Kf=null,r.current=l,lT(l),Nf(),Fe=C,Oe=E,Cn.transition=g}else r.current=l;if(Ju&&(Ju=!1,yi=r,Zu=h),g=r.pendingLanes,g===0&&(gi=null),nu(l.stateNode),rn(r,Ke()),s!==null)for(f=r.onRecoverableError,l=0;l<s.length;l++)h=s[l],f(h.value,{componentStack:h.stack,digest:h.digest});if(Xu)throw Xu=!1,r=$d,$d=null,r;return Zu&1&&r.tag!==0&&Ro(),g=r.pendingLanes,g&1?r===Wd?tl++:(tl=0,Wd=r):tl=0,di(),null}function Ro(){if(yi!==null){var r=ii(Zu),s=Cn.transition,l=Oe;try{if(Cn.transition=null,Oe=16>r?16:r,yi===null)var f=!1;else{if(r=yi,yi=null,Zu=0,Fe&6)throw Error(t(331));var h=Fe;for(Fe|=4,ue=r.current;ue!==null;){var g=ue,E=g.child;if(ue.flags&16){var C=g.deletions;if(C!==null){for(var P=0;P<C.length;P++){var $=C[P];for(ue=$;ue!==null;){var Z=ue;switch(Z.tag){case 0:case 11:case 15:Ja(8,Z,g)}var ee=Z.child;if(ee!==null)ee.return=Z,ue=ee;else for(;ue!==null;){Z=ue;var X=Z.sibling,se=Z.return;if(_y(Z),Z===$){ue=null;break}if(X!==null){X.return=se,ue=X;break}ue=se}}}var ce=g.alternate;if(ce!==null){var de=ce.child;if(de!==null){ce.child=null;do{var ct=de.sibling;de.sibling=null,de=ct}while(de!==null)}}ue=g}}if(g.subtreeFlags&2064&&E!==null)E.return=g,ue=E;else e:for(;ue!==null;){if(g=ue,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Ja(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,ue=j;break e}ue=g.return}}var O=r.current;for(ue=O;ue!==null;){E=ue;var z=E.child;if(E.subtreeFlags&2064&&z!==null)z.return=E,ue=z;else e:for(E=O;ue!==null;){if(C=ue,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:Ku(9,C)}}catch(he){at(C,C.return,he)}if(C===E){ue=null;break e}var ne=C.sibling;if(ne!==null){ne.return=C.return,ue=ne;break e}ue=C.return}}if(Fe=h,di(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(ns,r)}catch{}f=!0}return f}finally{Oe=l,Cn.transition=s}}return!1}function Dy(r,s,l){s=So(l,s),s=Jg(r,s,1),r=pi(r,s,1),s=Yt(),r!==null&&(ni(r,1,s),rn(r,s))}function at(r,s,l){if(r.tag===3)Dy(r,r,l);else for(;s!==null;){if(s.tag===3){Dy(s,r,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(gi===null||!gi.has(f))){r=So(l,r),r=Zg(s,r,1),s=pi(s,r,1),r=Yt(),s!==null&&(ni(s,1,r),rn(s,r));break}}s=s.return}}function pT(r,s,l){var f=r.pingCache;f!==null&&f.delete(s),s=Yt(),r.pingedLanes|=r.suspendedLanes&l,Ct===r&&(Nt&l)===l&&(Et===4||Et===3&&(Nt&130023424)===Nt&&500>Ke()-Bd?_s(r,0):zd|=l),rn(r,s)}function Ly(r,s){s===0&&(r.mode&1?(s=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):s=1);var l=Yt();r=Or(r,s),r!==null&&(ni(r,s,l),rn(r,l))}function mT(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),Ly(r,l)}function gT(r,s){var l=0;switch(r.tag){case 13:var f=r.stateNode,h=r.memoizedState;h!==null&&(l=h.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Ly(r,l)}var Vy;Vy=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Zt.current)tn=!0;else{if(!(r.lanes&l)&&!(s.flags&128))return tn=!1,rT(r,s,l);tn=!!(r.flags&131072)}else tn=!1,nt&&s.flags&1048576&&mg(s,bu,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;qu(r,s),r=s.pendingProps;var h=go(s,Ft.current);To(s,l),h=vd(null,s,f,r,h,l);var g=Ed();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,en(f)?(g=!0,Ru(s)):g=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,dd(s),h.updater=Wu,s.stateNode=h,h._reactInternals=s,Cd(s,f,r,l),s=xd(null,s,f,!0,g,l)):(s.tag=0,nt&&g&&nd(s),Qt(null,s,h,l),s=s.child),s;case 16:f=s.elementType;e:{switch(qu(r,s),r=s.pendingProps,h=f._init,f=h(f._payload),s.type=f,h=s.tag=_T(f),r=zn(f,r),h){case 0:s=Pd(null,s,f,r,l);break e;case 1:s=ly(null,s,f,r,l);break e;case 11:s=ry(null,s,f,r,l);break e;case 14:s=iy(null,s,f,zn(f.type,r),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,h=s.pendingProps,h=s.elementType===f?h:zn(f,h),Pd(r,s,f,h,l);case 1:return f=s.type,h=s.pendingProps,h=s.elementType===f?h:zn(f,h),ly(r,s,f,h,l);case 3:e:{if(uy(s),r===null)throw Error(t(387));f=s.pendingProps,g=s.memoizedState,h=g.element,Sg(r,s),Mu(s,f,null,l);var E=s.memoizedState;if(f=E.element,g.isDehydrated)if(g={element:f,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){h=So(Error(t(423)),s),s=cy(r,s,f,l,h);break e}else if(f!==h){h=So(Error(t(424)),s),s=cy(r,s,f,l,h);break e}else for(hn=ui(s.stateNode.containerInfo.firstChild),dn=s,nt=!0,jn=null,l=Tg(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(vo(),f===h){s=Lr(r,s,l);break e}Qt(r,s,f,l)}s=s.child}return s;case 5:return kg(s),r===null&&sd(s),f=s.type,h=s.pendingProps,g=r!==null?r.memoizedProps:null,E=h.children,Yf(f,h)?E=null:g!==null&&Yf(f,g)&&(s.flags|=32),ay(r,s),Qt(r,s,E,l),s.child;case 6:return r===null&&sd(s),null;case 13:return fy(r,s,l);case 4:return hd(s,s.stateNode.containerInfo),f=s.pendingProps,r===null?s.child=Eo(s,null,f,l):Qt(r,s,f,l),s.child;case 11:return f=s.type,h=s.pendingProps,h=s.elementType===f?h:zn(f,h),ry(r,s,f,h,l);case 7:return Qt(r,s,s.pendingProps,l),s.child;case 8:return Qt(r,s,s.pendingProps.children,l),s.child;case 12:return Qt(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,h=s.pendingProps,g=s.memoizedProps,E=h.value,Qe(Du,f._currentValue),f._currentValue=E,g!==null)if(Un(g.value,E)){if(g.children===h.children&&!Zt.current){s=Lr(r,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var C=g.dependencies;if(C!==null){E=g.child;for(var P=C.firstContext;P!==null;){if(P.context===f){if(g.tag===1){P=Dr(-1,l&-l),P.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var Z=$.pending;Z===null?P.next=P:(P.next=Z.next,Z.next=P),$.pending=P}}g.lanes|=l,P=g.alternate,P!==null&&(P.lanes|=l),cd(g.return,l,s),C.lanes|=l;break}P=P.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=l,C=E.alternate,C!==null&&(C.lanes|=l),cd(E,l,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Qt(r,s,h.children,l),s=s.child}return s;case 9:return h=s.type,f=s.pendingProps.children,To(s,l),h=Sn(h),f=f(h),s.flags|=1,Qt(r,s,f,l),s.child;case 14:return f=s.type,h=zn(f,s.pendingProps),h=zn(f.type,h),iy(r,s,f,h,l);case 15:return sy(r,s,s.type,s.pendingProps,l);case 17:return f=s.type,h=s.pendingProps,h=s.elementType===f?h:zn(f,h),qu(r,s),s.tag=1,en(f)?(r=!0,Ru(s)):r=!1,To(s,l),Yg(s,f,h),Cd(s,f,h,l),xd(null,s,f,!0,r,l);case 19:return hy(r,s,l);case 22:return oy(r,s,l)}throw Error(t(156,s.tag))};function My(r,s){return Ks(r,s)}function yT(r,s,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(r,s,l,f){return new yT(r,s,l,f)}function Yd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function _T(r){if(typeof r=="function")return Yd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===F)return 11;if(r===Vt)return 14}return 2}function Ei(r,s){var l=r.alternate;return l===null?(l=kn(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function rc(r,s,l,f,h,g){var E=2;if(f=r,typeof r=="function")Yd(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case N:return Es(l.children,h,g,s);case A:E=8,h|=8;break;case k:return r=kn(12,l,s,h|2),r.elementType=k,r.lanes=g,r;case R:return r=kn(13,l,s,h),r.elementType=R,r.lanes=g,r;case lt:return r=kn(19,l,s,h),r.elementType=lt,r.lanes=g,r;case He:return ic(l,h,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:E=10;break e;case L:E=9;break e;case F:E=11;break e;case Vt:E=14;break e;case Mt:E=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=kn(E,l,s,h),s.elementType=r,s.type=f,s.lanes=g,s}function Es(r,s,l,f){return r=kn(7,r,f,s),r.lanes=l,r}function ic(r,s,l,f){return r=kn(22,r,f,s),r.elementType=He,r.lanes=l,r.stateNode={isHidden:!1},r}function Xd(r,s,l){return r=kn(6,r,null,s),r.lanes=l,r}function Jd(r,s,l){return s=kn(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function vT(r,s,l,f,h){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=f,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Zd(r,s,l,f,h,g,E,C,P){return r=new vT(r,s,l,C,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=kn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(g),r}function ET(r,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:f==null?null:""+f,children:r,containerInfo:s,implementation:l}}function Fy(r){if(!r)return fi;r=r._reactInternals;e:{if(Nn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(en(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(en(l))return dg(r,l,s)}return s}function Uy(r,s,l,f,h,g,E,C,P){return r=Zd(l,f,!0,r,h,g,E,C,P),r.context=Fy(null),l=r.current,f=Yt(),h=_i(l),g=Dr(f,h),g.callback=s??null,pi(l,g,h),r.current.lanes=h,ni(r,h,f),rn(r,f),r}function sc(r,s,l,f){var h=s.current,g=Yt(),E=_i(h);return l=Fy(l),s.context===null?s.context=l:s.pendingContext=l,s=Dr(g,E),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=pi(h,s,E),r!==null&&(Wn(r,h,E,g),Vu(r,h,E)),E}function oc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function jy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function eh(r,s){jy(r,s),(r=r.alternate)&&jy(r,s)}function wT(){return null}var zy=typeof reportError=="function"?reportError:function(r){console.error(r)};function th(r){this._internalRoot=r}ac.prototype.render=th.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));sc(r,s,null,null)},ac.prototype.unmount=th.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ys(function(){sc(null,r,null,null)}),s[Pr]=null}};function ac(r){this._internalRoot=r}ac.prototype.unstable_scheduleHydration=function(r){if(r){var s=au();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Zn.length&&s!==0&&s<Zn[l].priority;l++);Zn.splice(l,0,r),l===0&&cu(r)}};function nh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function lc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function By(){}function TT(r,s,l,f,h){if(h){if(typeof f=="function"){var g=f;f=function(){var $=oc(E);g.call($)}}var E=Uy(s,f,r,0,null,!1,!1,"",By);return r._reactRootContainer=E,r[Pr]=E.current,Ua(r.nodeType===8?r.parentNode:r),ys(),E}for(;h=r.lastChild;)r.removeChild(h);if(typeof f=="function"){var C=f;f=function(){var $=oc(P);C.call($)}}var P=Zd(r,0,!1,null,null,!1,!1,"",By);return r._reactRootContainer=P,r[Pr]=P.current,Ua(r.nodeType===8?r.parentNode:r),ys(function(){sc(s,P,l,f)}),P}function uc(r,s,l,f,h){var g=l._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var C=h;h=function(){var P=oc(E);C.call(P)}}sc(s,E,r,h)}else E=TT(l,s,r,h,f);return oc(E)}su=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=ei(s.pendingLanes);l!==0&&(ri(s,l|1),rn(s,Ke()),!(Fe&6)&&(ko=Ke()+500,di()))}break;case 13:ys(function(){var f=Or(r,1);if(f!==null){var h=Yt();Wn(f,r,1,h)}}),eh(r,1)}},Xs=function(r){if(r.tag===13){var s=Or(r,134217728);if(s!==null){var l=Yt();Wn(s,r,134217728,l)}eh(r,134217728)}},ou=function(r){if(r.tag===13){var s=_i(r),l=Or(r,s);if(l!==null){var f=Yt();Wn(l,r,s,f)}eh(r,s)}},au=function(){return Oe},lu=function(r,s){var l=Oe;try{return Oe=r,s()}finally{Oe=l}},Bs=function(r,s,l){switch(s){case"input":if(ca(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==r&&f.form===r.form){var h=Cu(f);if(!h)throw Error(t(90));Vs(f),ca(f,h)}}}break;case"textarea":js(r,l);break;case"select":s=l.value,s!=null&&wr(r,!!l.multiple,s,!1)}},Xi=Gd,Ea=ys;var IT={usingClientEntryPoint:!1,Events:[Ba,po,Cu,Xn,va,Gd]},nl={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ST={bundleType:nl.bundleType,version:nl.version,rendererPackageName:nl.rendererPackageName,rendererConfig:nl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ia(r),r===null?null:r.stateNode},findFiberByHostInstance:nl.findFiberByHostInstance||wT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ns=cc.inject(ST),ln=cc}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IT,sn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(s))throw Error(t(200));return ET(r,s,null,l)},sn.createRoot=function(r,s){if(!nh(r))throw Error(t(299));var l=!1,f="",h=zy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=Zd(r,1,!1,null,null,l,!1,f,h),r[Pr]=s.current,Ua(r.nodeType===8?r.parentNode:r),new th(s)},sn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ia(s),r=r===null?null:r.stateNode,r},sn.flushSync=function(r){return ys(r)},sn.hydrate=function(r,s,l){if(!lc(s))throw Error(t(200));return uc(null,r,s,!0,l)},sn.hydrateRoot=function(r,s,l){if(!nh(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,h=!1,g="",E=zy;if(l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=Uy(s,null,r,1,l??null,h,!1,g,E),r[Pr]=s.current,Ua(r),f)for(r=0;r<f.length;r++)l=f[r],h=l._getVersion,h=h(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,h]:s.mutableSourceEagerHydrationData.push(l,h);return new ac(s)},sn.render=function(r,s,l){if(!lc(s))throw Error(t(200));return uc(null,r,s,!1,l)},sn.unmountComponentAtNode=function(r){if(!lc(r))throw Error(t(40));return r._reactRootContainer?(ys(function(){uc(null,null,r,!1,function(){r._reactRootContainer=null,r[Pr]=null})}),!0):!1},sn.unstable_batchedUpdates=Gd,sn.unstable_renderSubtreeIntoContainer=function(r,s,l,f){if(!lc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return uc(r,s,l,!1,f)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var Yy;function NT(){if(Yy)return sh.exports;Yy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sh.exports=bT(),sh.exports}var Xy;function OT(){if(Xy)return fc;Xy=1;var n=NT();return fc.createRoot=n.createRoot,fc.hydrateRoot=n.hydrateRoot,fc}var DT=OT(),Jy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},LT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},i0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=a>>2,T=(a&3)<<4|d>>4;let I=(d&15)<<2|y>>6,x=y&63;p||(x=64,c||(I=64)),i.push(t[v],t[T],t[I],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(r0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):LT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||y==null||T==null)throw new VT;const I=a<<2|d>>4;if(i.push(I),y!==64){const x=d<<4&240|y>>2;if(i.push(x),T!==64){const V=y<<6&192|T;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class VT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MT=function(n){const e=r0(n);return i0.encodeByteArray(e,!0)},Vc=function(n){return MT(n).replace(/\./g,"")},s0=function(n){try{return i0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=()=>FT().__FIREBASE_DEFAULTS__,jT=()=>{if(typeof process>"u"||typeof Jy>"u")return;const n=Jy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&s0(n[1]);return e&&JSON.parse(e)},rf=()=>{try{return UT()||jT()||zT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},o0=n=>{var e,t;return(t=(e=rf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},BT=n=>{const e=o0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},a0=()=>{var n;return(n=rf())===null||n===void 0?void 0:n.config},l0=n=>{var e;return(e=rf())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Vc(JSON.stringify(t)),Vc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function qT(){var n;const e=(n=rf())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function QT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YT(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function XT(){return!qT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JT(){try{return typeof indexedDB=="object"}catch{return!1}}function ZT(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="FirebaseError";class Qr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=eI,Object.setPrototypeOf(this,Qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dl.prototype.create)}}class Dl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?tI(a,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Qr(o,d,i)}}function tI(n,e){return n.replace(nI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const nI=/\{\$([^}]+)}/g;function rI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(Zy(a)&&Zy(c)){if(!Mc(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Zy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ol(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function al(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function iI(n,e){const t=new sI(n,e);return t.subscribe.bind(t)}class sI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");oI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=lh),o.error===void 0&&(o.error=lh),o.complete===void 0&&(o.complete=lh);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n){return n&&n._delegate?n._delegate:n}class Ss{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new $T;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uI(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:lI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lI(n){return n===ws?void 0:n}function uI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const fI={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},dI=be.INFO,hI={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},pI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=hI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ip{constructor(e){this.name=e,this._logLevel=dI,this._logHandler=pI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const mI=(n,e)=>e.some(t=>n instanceof t);let e_,t_;function gI(){return e_||(e_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yI(){return t_||(t_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u0=new WeakMap,xh=new WeakMap,c0=new WeakMap,uh=new WeakMap,Sp=new WeakMap;function _I(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Pi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&u0.set(t,n)}).catch(()=>{}),Sp.set(e,n),e}function vI(n){if(xh.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});xh.set(n,e)}let bh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||c0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function EI(n){bh=n(bh)}function wI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ch(this),e,...t);return c0.set(i,e.sort?e.sort():[e]),Pi(i)}:yI().includes(n)?function(...e){return n.apply(ch(this),e),Pi(u0.get(this))}:function(...e){return Pi(n.apply(ch(this),e))}}function TI(n){return typeof n=="function"?wI(n):(n instanceof IDBTransaction&&vI(n),mI(n,gI())?new Proxy(n,bh):n)}function Pi(n){if(n instanceof IDBRequest)return _I(n);if(uh.has(n))return uh.get(n);const e=TI(n);return e!==n&&(uh.set(n,e),Sp.set(e,n)),e}const ch=n=>Sp.get(n);function II(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),d=Pi(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Pi(c.result),p.oldVersion,p.newVersion,Pi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const SI=["get","getKey","getAll","getAllKeys","count"],AI=["put","add","delete","clear"],fh=new Map;function n_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=AI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||SI.includes(t)))return;const a=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return fh.set(e,a),a}EI(n=>({...n,get:(e,t,i)=>n_(e,t)||n.get(e,t,i),has:(e,t)=>!!n_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function kI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nh="@firebase/app",r_="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Ip("@firebase/app"),RI="@firebase/app-compat",PI="@firebase/analytics-compat",xI="@firebase/analytics",bI="@firebase/app-check-compat",NI="@firebase/app-check",OI="@firebase/auth",DI="@firebase/auth-compat",LI="@firebase/database",VI="@firebase/data-connect",MI="@firebase/database-compat",FI="@firebase/functions",UI="@firebase/functions-compat",jI="@firebase/installations",zI="@firebase/installations-compat",BI="@firebase/messaging",$I="@firebase/messaging-compat",WI="@firebase/performance",HI="@firebase/performance-compat",qI="@firebase/remote-config",GI="@firebase/remote-config-compat",KI="@firebase/storage",QI="@firebase/storage-compat",YI="@firebase/firestore",XI="@firebase/vertexai",JI="@firebase/firestore-compat",ZI="firebase",eS="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="[DEFAULT]",tS={[Nh]:"fire-core",[RI]:"fire-core-compat",[xI]:"fire-analytics",[PI]:"fire-analytics-compat",[NI]:"fire-app-check",[bI]:"fire-app-check-compat",[OI]:"fire-auth",[DI]:"fire-auth-compat",[LI]:"fire-rtdb",[VI]:"fire-data-connect",[MI]:"fire-rtdb-compat",[FI]:"fire-fn",[UI]:"fire-fn-compat",[jI]:"fire-iid",[zI]:"fire-iid-compat",[BI]:"fire-fcm",[$I]:"fire-fcm-compat",[WI]:"fire-perf",[HI]:"fire-perf-compat",[qI]:"fire-rc",[GI]:"fire-rc-compat",[KI]:"fire-gcs",[QI]:"fire-gcs-compat",[YI]:"fire-fst",[JI]:"fire-fst-compat",[XI]:"fire-vertex","fire-js":"fire-js",[ZI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map,nS=new Map,Dh=new Map;function i_(n,e){try{n.container.addComponent(e)}catch(t){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bo(n){const e=n.name;if(Dh.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;Dh.set(e,n);for(const t of Fc.values())i_(t,n);for(const t of nS.values())i_(t,n);return!0}function Ap(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ur(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xi=new Dl("app","Firebase",rS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=eS;function f0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Oh,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw xi.create("bad-app-name",{appName:String(o)});if(t||(t=a0()),!t)throw xi.create("no-options");const a=Fc.get(o);if(a){if(Mc(t,a.options)&&Mc(i,a.config))return a;throw xi.create("duplicate-app",{appName:o})}const c=new cI(o);for(const p of Dh.values())c.addComponent(p);const d=new iS(t,i,c);return Fc.set(o,d),d}function d0(n=Oh){const e=Fc.get(n);if(!e&&n===Oh&&a0())return f0();if(!e)throw xi.create("no-app",{appName:n});return e}function bi(n,e,t){var i;let o=(i=tS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(d.join(" "));return}Bo(new Ss(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="firebase-heartbeat-database",oS=1,vl="firebase-heartbeat-store";let dh=null;function h0(){return dh||(dh=II(sS,oS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vl)}catch(t){console.warn(t)}}}}).catch(n=>{throw xi.create("idb-open",{originalErrorMessage:n.message})})),dh}async function aS(n){try{const t=(await h0()).transaction(vl),i=await t.objectStore(vl).get(p0(n));return await t.done,i}catch(e){if(e instanceof Qr)$r.warn(e.message);else{const t=xi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(t.message)}}}async function s_(n,e){try{const i=(await h0()).transaction(vl,"readwrite");await i.objectStore(vl).put(e,p0(n)),await i.done}catch(t){if(t instanceof Qr)$r.warn(t.message);else{const i=xi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$r.warn(i.message)}}}function p0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=1024,uS=30*24*60*60*1e3;class cS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=o_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=uS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){$r.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=o_(),{heartbeatsToSend:i,unsentEntries:o}=fS(this._heartbeatsCache.heartbeats),a=Vc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return $r.warn(t),""}}}function o_(){return new Date().toISOString().substring(0,10)}function fS(n,e=lS){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),a_(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),a_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class dS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JT()?ZT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return s_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return s_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function a_(n){return Vc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(n){Bo(new Ss("platform-logger",e=>new CI(e),"PRIVATE")),Bo(new Ss("heartbeat",e=>new cS(e),"PRIVATE")),bi(Nh,r_,n),bi(Nh,r_,"esm2017"),bi("fire-js","")}hS("");var pS="firebase",mS="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bi(pS,mS,"app");function Cp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function m0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gS=m0,g0=new Dl("auth","Firebase",m0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Ip("@firebase/auth");function yS(n,...e){Uc.logLevel<=be.WARN&&Uc.warn(`Auth (${Xo}): ${n}`,...e)}function Tc(n,...e){Uc.logLevel<=be.ERROR&&Uc.error(`Auth (${Xo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,...e){throw kp(n,...e)}function dr(n,...e){return kp(n,...e)}function y0(n,e,t){const i=Object.assign(Object.assign({},gS()),{[e]:t});return new Dl("auth","Firebase",i).create(e,{appName:n.name})}function jr(n){return y0(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return g0.create(n,...e)}function we(n,e,...t){if(!n)throw kp(e,...t)}function Mr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tc(e),new Error(e)}function Wr(n,e){n||Mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _S(){return l_()==="http:"||l_()==="https:"}function l_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_S()||KT()||"connection"in navigator)?navigator.onLine:!0}function ES(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wr(t>e,"Short delay should be less than long delay!"),this.isMobile=HT()||QT()}get(){return vS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e){Wr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Vl(3e4,6e4);function Wi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Hi(n,e,t,i,o={}){return v0(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const d=Ll(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},a);return GT()||(y.referrerPolicy="no-referrer"),_0.fetch()(E0(n,n.config.apiHost,t,d),y)})}async function v0(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},wS),e);try{const o=new SS(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw dc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw dc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw dc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw dc(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw y0(n,v,y);qn(n,v)}}catch(o){if(o instanceof Qr)throw o;qn(n,"network-request-failed",{message:String(o)})}}async function Ml(n,e,t,i,o={}){const a=await Hi(n,e,t,i,o);return"mfaPendingCredential"in a&&qn(n,"multi-factor-auth-required",{_serverResponse:a}),a}function E0(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Rp(n.config,o):`${n.config.apiScheme}://${o}`}function IS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(dr(this.auth,"network-request-failed")),TS.get())})}}function dc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=dr(n,e,i);return o.customData._tokenResponse=t,o}function u_(n){return n!==void 0&&n.enterprise!==void 0}class AS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return IS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function CS(n,e){return Hi(n,"GET","/v2/recaptchaConfig",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(n,e){return Hi(n,"POST","/v1/accounts:delete",e)}async function w0(n,e){return Hi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RS(n,e=!1){const t=gn(n),i=await t.getIdToken(e),o=Pp(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:dl(hh(o.auth_time)),issuedAtTime:dl(hh(o.iat)),expirationTime:dl(hh(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function hh(n){return Number(n)*1e3}function Pp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const o=s0(t);return o?JSON.parse(o):(Tc("Failed to decode base64 JWT payload"),null)}catch(o){return Tc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function c_(n){const e=Pp(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Qr&&PS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function PS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dl(this.lastLoginAt),this.creationTime=dl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await El(n,w0(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?T0(a.providerUserInfo):[],d=NS(n.providerData,c),p=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Vh(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function bS(n){const e=gn(n);await jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function T0(n){return n.map(e=>{var{providerId:t}=e,i=Cp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(n,e){const t=await v0(n,{},async()=>{const i=Ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=E0(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",_0.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function DS(n,e){return Hi(n,"POST","/v2/accounts:revokeToken",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):c_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=c_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await OS(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new Mo;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(we(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Fr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=Cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Vh(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await El(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return RS(this,e)}reload(){return bS(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await jc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ur(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await El(this,kS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,d,p,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,x=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,V=(c=t.photoURL)!==null&&c!==void 0?c:void 0,B=(d=t.tenantId)!==null&&d!==void 0?d:void 0,D=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,J=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Q,emailVerified:oe,isAnonymous:Ee,providerData:Se,stsTokenManager:N}=t;we(Q&&N,e,"internal-error");const A=Mo.fromJSON(this.name,N);we(typeof Q=="string",e,"internal-error"),Ti(T,e.name),Ti(I,e.name),we(typeof oe=="boolean",e,"internal-error"),we(typeof Ee=="boolean",e,"internal-error"),Ti(x,e.name),Ti(V,e.name),Ti(B,e.name),Ti(D,e.name),Ti(q,e.name),Ti(J,e.name);const k=new Fr({uid:Q,auth:e,email:I,emailVerified:oe,displayName:T,isAnonymous:Ee,photoURL:V,phoneNumber:x,tenantId:B,stsTokenManager:A,createdAt:q,lastLoginAt:J});return Se&&Array.isArray(Se)&&(k.providerData=Se.map(b=>Object.assign({},b))),D&&(k._redirectEventId=D),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new Mo;o.updateFromServerResponse(t);const a=new Fr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await jc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?T0(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new Mo;d.updateFromIdToken(i);const p=new Fr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Vh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new Map;function Ur(n){Wr(n instanceof Function,"Expected a class definition");let e=f_.get(n);return e?(Wr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,f_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}I0.type="NONE";const d_=I0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n,e,t){return`firebase:${n}:${e}:${t}`}class Fo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=Ic(this.userKey,o.apiKey,a),this.fullPersistenceKey=Ic("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Fo(Ur(d_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||Ur(d_);const c=Ic(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){const T=Fr._fromJSON(e,v);y!==a&&(d=T),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Fo(a,e,i):(a=p[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(c)}catch{}})),new Fo(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P0(e))return"Blackberry";if(x0(e))return"Webos";if(A0(e))return"Safari";if((e.includes("chrome/")||C0(e))&&!e.includes("edge/"))return"Chrome";if(R0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function S0(n=Ht()){return/firefox\//i.test(n)}function A0(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C0(n=Ht()){return/crios\//i.test(n)}function k0(n=Ht()){return/iemobile/i.test(n)}function R0(n=Ht()){return/android/i.test(n)}function P0(n=Ht()){return/blackberry/i.test(n)}function x0(n=Ht()){return/webos/i.test(n)}function xp(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function LS(n=Ht()){var e;return xp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VS(){return YT()&&document.documentMode===10}function b0(n=Ht()){return xp(n)||R0(n)||x0(n)||P0(n)||/windows phone/i.test(n)||k0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(n,e=[]){let t;switch(n){case"Browser":t=h_(Ht());break;case"Worker":t=`${h_(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,d)=>{try{const p=e(a);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(n,e={}){return Hi(n,"GET","/v2/passwordPolicy",Wi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=6;class jS{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:US,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new p_(this),this.idTokenSubscription=new p_(this),this.beforeStateQueue=new MS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ur(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Fo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await w0(this,{idToken:e}),i=await Fr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ur(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ES()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ur(this.app))return Promise.reject(jr(this));const t=e?gn(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ur(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ur(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ur(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FS(this),t=new jS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await DS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ur(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Fo.create(this,[Ur(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xs(n){return gn(n)}class p_{constructor(e){this.auth=e,this.observer=null,this.addObserver=iI(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BS(n){sf=n}function O0(n){return sf.loadJS(n)}function $S(){return sf.recaptchaEnterpriseScript}function WS(){return sf.gapiScript}function HS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class qS{constructor(){this.enterprise=new GS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const KS="recaptcha-enterprise",D0="NO_RECAPTCHA";class QS{constructor(e){this.type=KS,this.auth=xs(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{CS(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new AS(p);return a.tenantId==null?a._agentRecaptchaConfig=y:a._tenantRecaptchaConfigs[a.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(a,c,d){const p=window.grecaptcha;u_(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(y=>{c(y)}).catch(()=>{c(D0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qS().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(d=>{if(!t&&u_(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=$S();p.length!==0&&(p+=d),O0(p).then(()=>{o(d,a,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function m_(n,e,t,i=!1,o=!1){const a=new QS(n);let c;if(o)c=D0;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Mh(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await m_(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await m_(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(n,e){const t=Ap(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Mc(a,e??{}))return o;qn(o,"already-initialized")}return t.initialize({options:e})}function XS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ur);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function JS(n,e,t){const i=xs(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=L0(e),{host:c,port:d}=ZS(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${a}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),eA()}function L0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ZS(n){const e=L0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:g_(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:g_(c)}}}function g_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function eA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}async function tA(n,e){return Hi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(n,e){return Ml(n,"POST","/v1/accounts:signInWithPassword",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(n,e){return Ml(n,"POST","/v1/accounts:signInWithEmailLink",Wi(n,e))}async function iA(n,e){return Ml(n,"POST","/v1/accounts:signInWithEmailLink",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends bp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new wl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new wl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,t,"signInWithPassword",nA);case"emailLink":return rA(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,i,"signUpPassword",tA);case"emailLink":return iA(e,{idToken:t,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(n,e){return Ml(n,"POST","/v1/accounts:signInWithIdp",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="http://localhost";class As extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=Cp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new As(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Uo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Uo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Uo(e,t)}buildRequest(){const e={requestUri:sA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ll(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aA(n){const e=ol(al(n)).link,t=e?ol(al(e)).deep_link_id:null,i=ol(al(n)).deep_link_id;return(i?ol(al(i)).link:null)||i||t||e||n}class Np{constructor(e){var t,i,o,a,c,d;const p=ol(al(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,T=oA((o=p.mode)!==null&&o!==void 0?o:null);we(y&&v&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=v,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=aA(e);try{return new Np(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.providerId=Jo.PROVIDER_ID}static credential(e,t){return wl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Np.parseLink(t);return we(i,"argument-error"),wl._fromEmailAndCode(e,i.code,i.tenantId)}}Jo.PROVIDER_ID="password";Jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends V0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Fl{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.FACEBOOK_SIGN_IN_METHOD="facebook.com";Si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return As._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ai.credential(t,i)}catch{return null}}}Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Fl{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.GITHUB_SIGN_IN_METHOD="github.com";Ci.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Fl{constructor(){super("twitter.com")}static credential(e,t){return As._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ki.credential(t,i)}catch{return null}}}ki.TWITTER_SIGN_IN_METHOD="twitter.com";ki.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(n,e){return Ml(n,"POST","/v1/accounts:signUp",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await Fr._fromIdTokenResponse(e,i,o),c=y_(i);return new Cs({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=y_(i);return new Cs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function y_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Qr{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,zc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new zc(e,t,i,o)}}function M0(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?zc._fromErrorAndOperation(n,a,e,i):a})}async function uA(n,e,t=!1){const i=await El(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Cs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(n,e,t=!1){const{auth:i}=n;if(ur(i.app))return Promise.reject(jr(i));const o="reauthenticate";try{const a=await El(n,M0(i,o,e,n),t);we(a.idToken,i,"internal-error");const c=Pp(a.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),Cs._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&qn(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(n,e,t=!1){if(ur(n.app))return Promise.reject(jr(n));const i="signIn",o=await M0(n,i,e),a=await Cs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function fA(n,e){return F0(xs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(n){const e=xs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dA(n,e,t){if(ur(n.app))return Promise.reject(jr(n));const i=xs(n),c=await Mh(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&U0(n),p}),d=await Cs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function hA(n,e,t){return ur(n.app)?Promise.reject(jr(n)):fA(gn(n),Jo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&U0(n),i})}function pA(n,e,t,i){return gn(n).onIdTokenChanged(e,t,i)}function mA(n,e,t){return gn(n).beforeAuthStateChanged(e,t)}const Bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bc,"1"),this.storage.removeItem(Bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=1e3,yA=10;class z0 extends j0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);VS()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,yA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}z0.type="LOCAL";const _A=z0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends j0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}B0.type="SESSION";const $0=B0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new of(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,a)),p=await vA(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}of.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,p)=>{const y=Op("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function wA(n){hr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function TA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function SA(){return W0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="firebaseLocalStorageDb",AA=1,$c="firebaseLocalStorage",q0="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function af(n,e){return n.transaction([$c],e?"readwrite":"readonly").objectStore($c)}function CA(){const n=indexedDB.deleteDatabase(H0);return new Ul(n).toPromise()}function Fh(){const n=indexedDB.open(H0,AA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore($c,{keyPath:q0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains($c)?e(i):(i.close(),await CA(),e(await Fh()))})})}async function __(n,e,t){const i=af(n,!0).put({[q0]:e,value:t});return new Ul(i).toPromise()}async function kA(n,e){const t=af(n,!1).get(e),i=await new Ul(t).toPromise();return i===void 0?null:i.value}function v_(n,e){const t=af(n,!0).delete(e);return new Ul(t).toPromise()}const RA=800,PA=3;class G0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>PA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return W0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=of._getInstance(SA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TA(),!this.activeServiceWorker)return;this.sender=new EA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fh();return await __(e,Bc,"1"),await v_(e,Bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>__(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>kA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>v_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=af(o,!1).getAll();return new Ul(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G0.type="LOCAL";const xA=G0;new Vl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(n,e){return e?Ur(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp extends bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Uo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Uo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NA(n){return F0(n.auth,new Dp(n),n.bypassAuthState)}function OA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),cA(t,new Dp(n),n.bypassAuthState)}async function DA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),uA(t,new Dp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NA;case"linkViaPopup":case"linkViaRedirect":return DA;case"reauthViaPopup":case"reauthViaRedirect":return OA;default:qn(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new Vl(2e3,1e4);class Do extends K0{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Wr(this.filter.length===1,"Popup operations only handle one event");const e=Op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LA.get())};e()}}Do.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="pendingRedirect",Sc=new Map;class MA extends K0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const i=await FA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FA(n,e){const t=zA(e),i=jA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function UA(n,e){Sc.set(n._key(),e)}function jA(n){return Ur(n._redirectPersistence)}function zA(n){return Ic(VA,n.config.apiKey,n.name)}async function BA(n,e,t=!1){if(ur(n.app))return Promise.reject(jr(n));const i=xs(n),o=bA(i,e),c=await new MA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=10*60*1e3;class WA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Q0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(dr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$A&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Q0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(n,e={}){return Hi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KA=/^https?/;async function QA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qA(n);for(const t of e)try{if(YA(t))return}catch{}qn(n,"unauthorized-domain")}function YA(n){const e=Lh(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!KA.test(t))return!1;if(GA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Vl(3e4,6e4);function w_(){const n=hr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function JA(n){return new Promise((e,t)=>{var i,o,a;function c(){w_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{w_(),t(dr(n,"network-request-failed"))},timeout:XA.get()})}if(!((o=(i=hr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=hr().gapi)===null||a===void 0)&&a.load)c();else{const d=HS("iframefcb");return hr()[d]=()=>{gapi.load?c():t(dr(n,"network-request-failed"))},O0(`${WS()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function ZA(n){return Ac=Ac||JA(n),Ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=new Vl(5e3,15e3),t2="__/auth/iframe",n2="emulator/auth/iframe",r2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s2(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rp(e,n2):`https://${n.config.authDomain}/${t2}`,i={apiKey:e.apiKey,appName:n.name,v:Xo},o=i2.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Ll(i).slice(1)}`}async function o2(n){const e=await ZA(n),t=hr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:s2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r2,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=dr(n,"network-request-failed"),d=hr().setTimeout(()=>{a(c)},e2.get());function p(){hr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l2=500,u2=600,c2="_blank",f2="http://localhost";class T_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d2(n,e,t,i=l2,o=u2){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},a2),{width:i.toString(),height:o.toString(),top:a,left:c}),y=Ht().toLowerCase();t&&(d=C0(y)?c2:t),S0(y)&&(e=e||f2,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[x,V])=>`${I}${x}=${V},`,"");if(LS(y)&&d!=="_self")return h2(e||"",d),new T_(null);const T=window.open(e||"",d,v);we(T,n,"popup-blocked");try{T.focus()}catch{}return new T_(T)}function h2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2="__/auth/handler",m2="emulator/auth/handler",g2=encodeURIComponent("fac");async function I_(n,e,t,i,o,a){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Xo,eventId:o};if(e instanceof V0){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",rI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Fl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${g2}=${encodeURIComponent(p)}`:"";return`${y2(n)}?${Ll(d).slice(1)}${y}`}function y2({config:n}){return n.emulator?Rp(n,m2):`https://${n.authDomain}/${p2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="webStorageSupport";class _2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$0,this._completeRedirectFn=BA,this._overrideRedirectResult=UA}async _openPopup(e,t,i,o){var a;Wr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await I_(e,t,i,Lh(),o);return d2(e,c,Op())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await I_(e,t,i,Lh(),o);return wA(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Wr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await o2(e),i=new WA(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ph,{type:ph},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[ph];c!==void 0&&t(!!c),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return b0()||A0()||xp()}}const v2=_2;var S_="@firebase/auth",A_="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T2(n){Bo(new Ss("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N0(n)},y=new zS(i,o,a,p);return XS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Bo(new Ss("auth-internal",e=>{const t=xs(e.getProvider("auth").getImmediate());return(i=>new E2(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bi(S_,A_,w2(n)),bi(S_,A_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=5*60,S2=l0("authIdTokenMaxAge")||I2;let C_=null;const A2=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>S2)return;const o=t==null?void 0:t.token;C_!==o&&(C_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function C2(n=d0()){const e=Ap(n,"auth");if(e.isInitialized())return e.getImmediate();const t=YS(n,{popupRedirectResolver:v2,persistence:[xA,_A,$0]}),i=l0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=A2(a.toString());mA(t,c,()=>c(t.currentUser)),pA(t,d=>c(d))}}const o=o0("auth");return o&&JS(t,`http://${o}`),t}function k2(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}BS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=dr("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",k2().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T2("Browser");var k_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni,Y0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,A){function k(){}k.prototype=A.prototype,N.D=A.prototype,N.prototype=new k,N.prototype.constructor=N,N.C=function(b,L,F){for(var R=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)R[lt-2]=arguments[lt];return A.prototype[L].apply(b,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,A,k){k||(k=0);var b=Array(16);if(typeof A=="string")for(var L=0;16>L;++L)b[L]=A.charCodeAt(k++)|A.charCodeAt(k++)<<8|A.charCodeAt(k++)<<16|A.charCodeAt(k++)<<24;else for(L=0;16>L;++L)b[L]=A[k++]|A[k++]<<8|A[k++]<<16|A[k++]<<24;A=N.g[0],k=N.g[1],L=N.g[2];var F=N.g[3],R=A+(F^k&(L^F))+b[0]+3614090360&4294967295;A=k+(R<<7&4294967295|R>>>25),R=F+(L^A&(k^L))+b[1]+3905402710&4294967295,F=A+(R<<12&4294967295|R>>>20),R=L+(k^F&(A^k))+b[2]+606105819&4294967295,L=F+(R<<17&4294967295|R>>>15),R=k+(A^L&(F^A))+b[3]+3250441966&4294967295,k=L+(R<<22&4294967295|R>>>10),R=A+(F^k&(L^F))+b[4]+4118548399&4294967295,A=k+(R<<7&4294967295|R>>>25),R=F+(L^A&(k^L))+b[5]+1200080426&4294967295,F=A+(R<<12&4294967295|R>>>20),R=L+(k^F&(A^k))+b[6]+2821735955&4294967295,L=F+(R<<17&4294967295|R>>>15),R=k+(A^L&(F^A))+b[7]+4249261313&4294967295,k=L+(R<<22&4294967295|R>>>10),R=A+(F^k&(L^F))+b[8]+1770035416&4294967295,A=k+(R<<7&4294967295|R>>>25),R=F+(L^A&(k^L))+b[9]+2336552879&4294967295,F=A+(R<<12&4294967295|R>>>20),R=L+(k^F&(A^k))+b[10]+4294925233&4294967295,L=F+(R<<17&4294967295|R>>>15),R=k+(A^L&(F^A))+b[11]+2304563134&4294967295,k=L+(R<<22&4294967295|R>>>10),R=A+(F^k&(L^F))+b[12]+1804603682&4294967295,A=k+(R<<7&4294967295|R>>>25),R=F+(L^A&(k^L))+b[13]+4254626195&4294967295,F=A+(R<<12&4294967295|R>>>20),R=L+(k^F&(A^k))+b[14]+2792965006&4294967295,L=F+(R<<17&4294967295|R>>>15),R=k+(A^L&(F^A))+b[15]+1236535329&4294967295,k=L+(R<<22&4294967295|R>>>10),R=A+(L^F&(k^L))+b[1]+4129170786&4294967295,A=k+(R<<5&4294967295|R>>>27),R=F+(k^L&(A^k))+b[6]+3225465664&4294967295,F=A+(R<<9&4294967295|R>>>23),R=L+(A^k&(F^A))+b[11]+643717713&4294967295,L=F+(R<<14&4294967295|R>>>18),R=k+(F^A&(L^F))+b[0]+3921069994&4294967295,k=L+(R<<20&4294967295|R>>>12),R=A+(L^F&(k^L))+b[5]+3593408605&4294967295,A=k+(R<<5&4294967295|R>>>27),R=F+(k^L&(A^k))+b[10]+38016083&4294967295,F=A+(R<<9&4294967295|R>>>23),R=L+(A^k&(F^A))+b[15]+3634488961&4294967295,L=F+(R<<14&4294967295|R>>>18),R=k+(F^A&(L^F))+b[4]+3889429448&4294967295,k=L+(R<<20&4294967295|R>>>12),R=A+(L^F&(k^L))+b[9]+568446438&4294967295,A=k+(R<<5&4294967295|R>>>27),R=F+(k^L&(A^k))+b[14]+3275163606&4294967295,F=A+(R<<9&4294967295|R>>>23),R=L+(A^k&(F^A))+b[3]+4107603335&4294967295,L=F+(R<<14&4294967295|R>>>18),R=k+(F^A&(L^F))+b[8]+1163531501&4294967295,k=L+(R<<20&4294967295|R>>>12),R=A+(L^F&(k^L))+b[13]+2850285829&4294967295,A=k+(R<<5&4294967295|R>>>27),R=F+(k^L&(A^k))+b[2]+4243563512&4294967295,F=A+(R<<9&4294967295|R>>>23),R=L+(A^k&(F^A))+b[7]+1735328473&4294967295,L=F+(R<<14&4294967295|R>>>18),R=k+(F^A&(L^F))+b[12]+2368359562&4294967295,k=L+(R<<20&4294967295|R>>>12),R=A+(k^L^F)+b[5]+4294588738&4294967295,A=k+(R<<4&4294967295|R>>>28),R=F+(A^k^L)+b[8]+2272392833&4294967295,F=A+(R<<11&4294967295|R>>>21),R=L+(F^A^k)+b[11]+1839030562&4294967295,L=F+(R<<16&4294967295|R>>>16),R=k+(L^F^A)+b[14]+4259657740&4294967295,k=L+(R<<23&4294967295|R>>>9),R=A+(k^L^F)+b[1]+2763975236&4294967295,A=k+(R<<4&4294967295|R>>>28),R=F+(A^k^L)+b[4]+1272893353&4294967295,F=A+(R<<11&4294967295|R>>>21),R=L+(F^A^k)+b[7]+4139469664&4294967295,L=F+(R<<16&4294967295|R>>>16),R=k+(L^F^A)+b[10]+3200236656&4294967295,k=L+(R<<23&4294967295|R>>>9),R=A+(k^L^F)+b[13]+681279174&4294967295,A=k+(R<<4&4294967295|R>>>28),R=F+(A^k^L)+b[0]+3936430074&4294967295,F=A+(R<<11&4294967295|R>>>21),R=L+(F^A^k)+b[3]+3572445317&4294967295,L=F+(R<<16&4294967295|R>>>16),R=k+(L^F^A)+b[6]+76029189&4294967295,k=L+(R<<23&4294967295|R>>>9),R=A+(k^L^F)+b[9]+3654602809&4294967295,A=k+(R<<4&4294967295|R>>>28),R=F+(A^k^L)+b[12]+3873151461&4294967295,F=A+(R<<11&4294967295|R>>>21),R=L+(F^A^k)+b[15]+530742520&4294967295,L=F+(R<<16&4294967295|R>>>16),R=k+(L^F^A)+b[2]+3299628645&4294967295,k=L+(R<<23&4294967295|R>>>9),R=A+(L^(k|~F))+b[0]+4096336452&4294967295,A=k+(R<<6&4294967295|R>>>26),R=F+(k^(A|~L))+b[7]+1126891415&4294967295,F=A+(R<<10&4294967295|R>>>22),R=L+(A^(F|~k))+b[14]+2878612391&4294967295,L=F+(R<<15&4294967295|R>>>17),R=k+(F^(L|~A))+b[5]+4237533241&4294967295,k=L+(R<<21&4294967295|R>>>11),R=A+(L^(k|~F))+b[12]+1700485571&4294967295,A=k+(R<<6&4294967295|R>>>26),R=F+(k^(A|~L))+b[3]+2399980690&4294967295,F=A+(R<<10&4294967295|R>>>22),R=L+(A^(F|~k))+b[10]+4293915773&4294967295,L=F+(R<<15&4294967295|R>>>17),R=k+(F^(L|~A))+b[1]+2240044497&4294967295,k=L+(R<<21&4294967295|R>>>11),R=A+(L^(k|~F))+b[8]+1873313359&4294967295,A=k+(R<<6&4294967295|R>>>26),R=F+(k^(A|~L))+b[15]+4264355552&4294967295,F=A+(R<<10&4294967295|R>>>22),R=L+(A^(F|~k))+b[6]+2734768916&4294967295,L=F+(R<<15&4294967295|R>>>17),R=k+(F^(L|~A))+b[13]+1309151649&4294967295,k=L+(R<<21&4294967295|R>>>11),R=A+(L^(k|~F))+b[4]+4149444226&4294967295,A=k+(R<<6&4294967295|R>>>26),R=F+(k^(A|~L))+b[11]+3174756917&4294967295,F=A+(R<<10&4294967295|R>>>22),R=L+(A^(F|~k))+b[2]+718787259&4294967295,L=F+(R<<15&4294967295|R>>>17),R=k+(F^(L|~A))+b[9]+3951481745&4294967295,N.g[0]=N.g[0]+A&4294967295,N.g[1]=N.g[1]+(L+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+L&4294967295,N.g[3]=N.g[3]+F&4294967295}i.prototype.u=function(N,A){A===void 0&&(A=N.length);for(var k=A-this.blockSize,b=this.B,L=this.h,F=0;F<A;){if(L==0)for(;F<=k;)o(this,N,F),F+=this.blockSize;if(typeof N=="string"){for(;F<A;)if(b[L++]=N.charCodeAt(F++),L==this.blockSize){o(this,b),L=0;break}}else for(;F<A;)if(b[L++]=N[F++],L==this.blockSize){o(this,b),L=0;break}}this.h=L,this.o+=A},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var A=1;A<N.length-8;++A)N[A]=0;var k=8*this.o;for(A=N.length-8;A<N.length;++A)N[A]=k&255,k/=256;for(this.u(N),N=Array(16),A=k=0;4>A;++A)for(var b=0;32>b;b+=8)N[k++]=this.g[A]>>>b&255;return N};function a(N,A){var k=d;return Object.prototype.hasOwnProperty.call(k,N)?k[N]:k[N]=A(N)}function c(N,A){this.h=A;for(var k=[],b=!0,L=N.length-1;0<=L;L--){var F=N[L]|0;b&&F==A||(k[L]=F,b=!1)}this.g=k}var d={};function p(N){return-128<=N&&128>N?a(N,function(A){return new c([A|0],0>A?-1:0)}):new c([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return D(y(-N));for(var A=[],k=1,b=0;N>=k;b++)A[b]=N/k|0,k*=4294967296;return new c(A,0)}function v(N,A){if(N.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(N.charAt(0)=="-")return D(v(N.substring(1),A));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=y(Math.pow(A,8)),b=T,L=0;L<N.length;L+=8){var F=Math.min(8,N.length-L),R=parseInt(N.substring(L,L+F),A);8>F?(F=y(Math.pow(A,F)),b=b.j(F).add(y(R))):(b=b.j(k),b=b.add(y(R)))}return b}var T=p(0),I=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(B(this))return-D(this).m();for(var N=0,A=1,k=0;k<this.g.length;k++){var b=this.i(k);N+=(0<=b?b:4294967296+b)*A,A*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(V(this))return"0";if(B(this))return"-"+D(this).toString(N);for(var A=y(Math.pow(N,6)),k=this,b="";;){var L=oe(k,A).g;k=q(k,L.j(A));var F=((0<k.g.length?k.g[0]:k.h)>>>0).toString(N);if(k=L,V(k))return F+b;for(;6>F.length;)F="0"+F;b=F+b}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function V(N){if(N.h!=0)return!1;for(var A=0;A<N.g.length;A++)if(N.g[A]!=0)return!1;return!0}function B(N){return N.h==-1}n.l=function(N){return N=q(this,N),B(N)?-1:V(N)?0:1};function D(N){for(var A=N.g.length,k=[],b=0;b<A;b++)k[b]=~N.g[b];return new c(k,~N.h).add(I)}n.abs=function(){return B(this)?D(this):this},n.add=function(N){for(var A=Math.max(this.g.length,N.g.length),k=[],b=0,L=0;L<=A;L++){var F=b+(this.i(L)&65535)+(N.i(L)&65535),R=(F>>>16)+(this.i(L)>>>16)+(N.i(L)>>>16);b=R>>>16,F&=65535,R&=65535,k[L]=R<<16|F}return new c(k,k[k.length-1]&-2147483648?-1:0)};function q(N,A){return N.add(D(A))}n.j=function(N){if(V(this)||V(N))return T;if(B(this))return B(N)?D(this).j(D(N)):D(D(this).j(N));if(B(N))return D(this.j(D(N)));if(0>this.l(x)&&0>N.l(x))return y(this.m()*N.m());for(var A=this.g.length+N.g.length,k=[],b=0;b<2*A;b++)k[b]=0;for(b=0;b<this.g.length;b++)for(var L=0;L<N.g.length;L++){var F=this.i(b)>>>16,R=this.i(b)&65535,lt=N.i(L)>>>16,Vt=N.i(L)&65535;k[2*b+2*L]+=R*Vt,J(k,2*b+2*L),k[2*b+2*L+1]+=F*Vt,J(k,2*b+2*L+1),k[2*b+2*L+1]+=R*lt,J(k,2*b+2*L+1),k[2*b+2*L+2]+=F*lt,J(k,2*b+2*L+2)}for(b=0;b<A;b++)k[b]=k[2*b+1]<<16|k[2*b];for(b=A;b<2*A;b++)k[b]=0;return new c(k,0)};function J(N,A){for(;(N[A]&65535)!=N[A];)N[A+1]+=N[A]>>>16,N[A]&=65535,A++}function Q(N,A){this.g=N,this.h=A}function oe(N,A){if(V(A))throw Error("division by zero");if(V(N))return new Q(T,T);if(B(N))return A=oe(D(N),A),new Q(D(A.g),D(A.h));if(B(A))return A=oe(N,D(A)),new Q(D(A.g),A.h);if(30<N.g.length){if(B(N)||B(A))throw Error("slowDivide_ only works with positive integers.");for(var k=I,b=A;0>=b.l(N);)k=Ee(k),b=Ee(b);var L=Se(k,1),F=Se(b,1);for(b=Se(b,2),k=Se(k,2);!V(b);){var R=F.add(b);0>=R.l(N)&&(L=L.add(k),F=R),b=Se(b,1),k=Se(k,1)}return A=q(N,L.j(A)),new Q(L,A)}for(L=T;0<=N.l(A);){for(k=Math.max(1,Math.floor(N.m()/A.m())),b=Math.ceil(Math.log(k)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),F=y(k),R=F.j(A);B(R)||0<R.l(N);)k-=b,F=y(k),R=F.j(A);V(F)&&(F=I),L=L.add(F),N=q(N,R)}return new Q(L,N)}n.A=function(N){return oe(this,N).h},n.and=function(N){for(var A=Math.max(this.g.length,N.g.length),k=[],b=0;b<A;b++)k[b]=this.i(b)&N.i(b);return new c(k,this.h&N.h)},n.or=function(N){for(var A=Math.max(this.g.length,N.g.length),k=[],b=0;b<A;b++)k[b]=this.i(b)|N.i(b);return new c(k,this.h|N.h)},n.xor=function(N){for(var A=Math.max(this.g.length,N.g.length),k=[],b=0;b<A;b++)k[b]=this.i(b)^N.i(b);return new c(k,this.h^N.h)};function Ee(N){for(var A=N.g.length+1,k=[],b=0;b<A;b++)k[b]=N.i(b)<<1|N.i(b-1)>>>31;return new c(k,N.h)}function Se(N,A){var k=A>>5;A%=32;for(var b=N.g.length-k,L=[],F=0;F<b;F++)L[F]=0<A?N.i(F+k)>>>A|N.i(F+k+1)<<32-A:N.i(F+k);return new c(L,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Y0=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,Ni=c}).apply(typeof k_<"u"?k_:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X0,ll,J0,Cc,Uh,Z0,eE,tE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var U=u[w];if(!(U in _))break e;_=_[U]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var _=0,w=!1,U={next:function(){if(!w&&_<u.length){var H=_++;return{value:m(H,u[H]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function V(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,U,H){for(var re=Array(arguments.length-2),We=2;We<arguments.length;We++)re[We-2]=arguments[We];return m.prototype[U].apply(w,re)}}function B(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function D(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const U=u.length||0,H=w.length||0;u.length=U+H;for(let re=0;re<H;re++)u[U+re]=w[re]}else u.push(w)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(u){return/^[\s\xa0]*$/.test(u)}function Q(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function oe(u){return oe[" "](u),u}oe[" "]=function(){};var Ee=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Se(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function A(u){const m={};for(const _ in u)m[_]=u[_];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,m){let _,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(_ in w)u[_]=w[_];for(let H=0;H<k.length;H++)_=k[H],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function L(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function F(u){d.setTimeout(()=>{throw u},0)}function R(){var u=ye;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class lt{constructor(){this.h=this.g=null}add(m,_){const w=Vt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Vt=new q(()=>new Mt,u=>u.reset());class Mt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let He,ie=!1,ye=new lt,ae=()=>{const u=d.Promise.resolve(void 0);He=()=>{u.then(M)}};var M=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){F(_)}var m=Vt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var ke=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Re(u,m){if(me.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ee){e:{try{oe(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Le[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}V(Re,me);var Le={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),ze=0;function Ge(u,m,_,w,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=U,this.key=++ze,this.da=this.fa=!1}function It(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function vr(u){this.src=u,this.g={},this.h=0}vr.prototype.add=function(u,m,_,w,U){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var re=Xr(u,m,w,U);return-1<re?(m=u[re],_||(m.fa=!1)):(m=new Ge(m,this.src,H,!!w,U),m.fa=_,u.push(m)),m};function Vs(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],U=Array.prototype.indexOf.call(w,m,void 0),H;(H=0<=U)&&Array.prototype.splice.call(w,U,1),H&&(It(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Xr(u,m,_,w){for(var U=0;U<u.length;++U){var H=u[U];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==w)return U}return-1}var Gi="closure_lm_"+(1e6*Math.random()|0),Ms={};function ua(u,m,_,w,U){if(Array.isArray(m)){for(var H=0;H<m.length;H++)ua(u,m[H],_,w,U);return null}return _=da(_),u&&u[je]?u.K(m,_,y(w)?!!w.capture:!1,U):ca(u,m,_,!1,w,U)}function ca(u,m,_,w,U,H){if(!m)throw Error("Invalid event type");var re=y(U)?!!U.capture:!!U,We=Us(u);if(We||(u[Gi]=We=new vr(u)),_=We.add(m,_,w,re,H),_.proxy)return _;if(w=Yl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)ke||(U=re),U===void 0&&(U=!1),u.addEventListener(m.toString(),w,U);else if(u.attachEvent)u.attachEvent(wr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Yl(){function u(_){return m.call(u.src,u.listener,_)}const m=fa;return u}function Fs(u,m,_,w,U){if(Array.isArray(m))for(var H=0;H<m.length;H++)Fs(u,m[H],_,w,U);else w=y(w)?!!w.capture:!!w,_=da(_),u&&u[je]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],_=Xr(H,_,w,U),-1<_&&(It(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Us(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Xr(m,_,w,U)),(_=-1<u?m[u]:null)&&Er(_))}function Er(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[je])Vs(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(wr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Us(m))?(Vs(_,u),_.h==0&&(_.src=null,m[Gi]=null)):It(u)}}}function wr(u){return u in Ms?Ms[u]:Ms[u]="on"+u}function fa(u,m){if(u.da)u=!0;else{m=new Re(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&Er(u),u=_.call(w,m)}return u}function Us(u){return u=u[Gi],u instanceof vr?u:null}var js="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(u){return typeof u=="function"?u:(u[js]||(u[js]=function(m){return u.handleEvent(m)}),u[js])}function gt(){K.call(this),this.i=new vr(this),this.M=this,this.F=null}V(gt,K),gt.prototype[je]=!0,gt.prototype.removeEventListener=function(u,m,_,w){Fs(this,u,m,_,w)};function yt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new me(m,u);else if(m instanceof me)m.target=m.target||u;else{var U=m;m=new me(w,u),b(m,U)}if(U=!0,_)for(var H=_.length-1;0<=H;H--){var re=m.g=_[H];U=Tr(re,w,!0,m)&&U}if(re=m.g=u,U=Tr(re,w,!0,m)&&U,U=Tr(re,w,!1,m)&&U,_)for(H=0;H<_.length;H++)re=m.g=_[H],U=Tr(re,w,!1,m)&&U}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)It(_[w]);delete u.g[m],u.h--}}this.F=null},gt.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},gt.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function Tr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,H=0;H<m.length;++H){var re=m[H];if(re&&!re.da&&re.capture==_){var We=re.listener,_t=re.ha||re.src;re.fa&&Vs(u.i,re),U=We.call(_t,w)!==!1&&U}}return U&&!w.defaultPrevented}function ha(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Jr(u){u.g=ha(()=>{u.g=null,u.i&&(u.i=!1,Jr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ki extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Jr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(u){K.call(this),this.h=u,this.g={}}V(Qi,K);var pa=[];function ma(u){Se(u.g,function(m,_){this.g.hasOwnProperty(_)&&Er(m)},u),u.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),ma(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ga=d.JSON.stringify,ya=d.JSON.parse,_a=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Yi(){}Yi.prototype.h=null;function zs(u){return u.h||(u.h=u.i())}function Bs(){}var _n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yn(){me.call(this,"d")}V(Yn,me);function $s(){me.call(this,"c")}V($s,me);var Xn={},va=null;function Xi(){return va=va||new gt}Xn.La="serverreachability";function Ea(u){me.call(this,Xn.La,u)}V(Ea,me);function Ir(u){const m=Xi();yt(m,new Ea(m))}Xn.STAT_EVENT="statevent";function wa(u,m){me.call(this,Xn.STAT_EVENT,u),this.stat=m}V(wa,me);function ut(u){const m=Xi();yt(m,new wa(m,u))}Xn.Ma="timingevent";function Ws(u,m){me.call(this,Xn.Ma,u),this.size=m}V(Ws,me);function xn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function Zi(u,m,_,w,U,H){u.info(function(){if(u.g)if(H)for(var re="",We=H.split("&"),_t=0;_t<We.length;_t++){var Ve=We[_t].split("=");if(1<Ve.length){var St=Ve[0];Ve=Ve[1];var dt=St.split("_");re=2<=dt.length&&dt[1]=="type"?re+(St+"="+Ve+"&"):re+(St+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+m+`
`+_+`
`+re})}function Hs(u,m,_,w,U,H,re){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+m+`
`+_+`
`+H+" "+re})}function bn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+bf(u,_)+(w?" "+w:"")})}function Ta(u,m){u.info(function(){return"TIMEOUT: "+m})}Ji.prototype.info=function(){};function bf(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return ga(_)}catch{return m}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function es(){}V(es,Yi),es.prototype.g=function(){return new XMLHttpRequest},es.prototype.i=function(){return{}},Nn=new es;function On(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jl}function Jl(){this.i=null,this.g="",this.h=!1}var Ia={},Gs={};function Ks(u,m,_){u.L=1,u.v=ri(un(m)),u.m=_,u.P=!0,Sa(u,null)}function Sa(u,m){u.F=Date.now(),Ke(u),u.A=un(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),si(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Jl,u.g=gu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Ki(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(pa[0]=U.toString()),U=pa);for(var H=0;H<U.length;H++){var re=ua(_,U[H],w||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Ir(),Zi(u.i,u.u,u.A,u.l,u.R,u.m)}On.prototype.ca=function(u){u=u.target;const m=this.M;m&&Jt(u)==3?m.j():this.Y(u)},On.prototype.Y=function(u){try{if(u==this.g)e:{const dt=Jt(this.g);var m=this.g.Ba();const wn=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||xa(this.g)))){this.J||dt!=4||m==7||(m==8||0>=wn?Ir(3):Ir(2)),ts(this);var _=this.g.Z();this.X=_;t:if(Zl(this)){var w=xa(this.g);u="";var U=w.length,H=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Zr(this);var re="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(H&&m==U-1)});w.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=_==200,Hs(this.i,this.u,this.A,this.l,this.R,dt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var We,_t=this.g;if((We=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(We)){var Ve=We;break t}}Ve=null}if(_=Ve)bn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Aa(this,_);else{this.o=!1,this.s=3,ut(12),vn(this),Zr(this);break e}}if(this.P){_=!0;let fn;for(;!this.J&&this.C<re.length;)if(fn=Nf(this,re),fn==Gs){dt==4&&(this.s=4,ut(14),_=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==Ia){this.s=4,ut(15),bn(this.i,this.l,re,"[Invalid Chunk]"),_=!1;break}else bn(this.i,this.l,fn,null),Aa(this,fn);if(Zl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||re.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)bn(this.i,this.l,re,"[Invalid Chunked Response]"),vn(this),Zr(this);else if(0<re.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Na(St),St.M=!0,ut(11))}}else bn(this.i,this.l,re,null),Aa(this,re);dt==4&&vn(this),this.o&&!this.J&&(dt==4?so(this.j,this):(this.o=!1,Ke(this)))}else eo(this.g),_==400&&0<re.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),vn(this),Zr(this)}}}catch{}finally{}};function Zl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Nf(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Gs:(_=Number(m.substring(_,w)),isNaN(_)?Ia:(w+=1,w+_>m.length?Gs:(m=m.slice(w,w+_),u.C=w+_,m)))}On.prototype.cancel=function(){this.J=!0,vn(this)};function Ke(u){u.S=Date.now()+u.I,eu(u,u.I)}function eu(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=xn(I(u.ba,u),m)}function ts(u){u.B&&(d.clearTimeout(u.B),u.B=null)}On.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ta(this.i,this.A),this.L!=2&&(Ir(),ut(17)),vn(this),this.s=2,Zr(this)):eu(this,this.S-u)};function Zr(u){u.j.G==0||u.J||so(u.j,u)}function vn(u){ts(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ma(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Aa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Gt(_.h,u))){if(!u.K&&Gt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)io(_),Fn(_);else break e;ro(_),ut(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=xn(I(_.Za,_),6e3));if(1>=nu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Rr(_,11)}else if((u.K||_.g==u)&&io(_),!J(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Ve=U[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const St=Ve[3];St!=null&&(_.la=St,_.j.info("VER="+_.la));const dt=Ve[4];dt!=null&&(_.Aa=dt,_.j.info("SVER="+_.Aa));const wn=Ve[5];wn!=null&&typeof wn=="number"&&0<wn&&(w=1.5*wn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const fn=u.g;if(fn){const ls=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ls){var H=w.h;H.g||ls.indexOf("spdy")==-1&&ls.indexOf("quic")==-1&&ls.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Ca(H,H.h),H.h=null))}if(w.D){const ao=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;ao&&(w.ya=ao,qe(w.I,w.D,ao))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var re=u;if(w.qa=mu(w,w.J?w.ia:null,w.W),re.K){ru(w.h,re);var We=re,_t=w.L;_t&&(We.I=_t),We.B&&(ts(We),Ke(We)),w.g=re}else as(w);0<_.i.length&&tr(_)}else Ve[0]!="stop"&&Ve[0]!="close"||Rr(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Rr(_,7):xt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}Ir(4)}catch{}}var tu=class{constructor(u,m){this.g=u,this.map=m}};function ns(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function nu(u){return u.h?1:u.g?u.g.size:0}function Gt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ca(u,m){u.g?u.g.add(m):u.h=m}function ru(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ns.prototype.cancel=function(){if(this.i=iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function iu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return B(u.i)}function Qs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Ys(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function ei(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ys(u),w=Qs(u),U=w.length,H=0;H<U;H++)m.call(void 0,w[H],_&&_[H],u)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Of(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),U=null;if(0<=w){var H=u[_].substring(0,w);U=u[_].substring(w+1)}else H=u[_];m(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Sr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Sr){this.h=u.h,is(this,u.j),this.o=u.o,this.g=u.g,ti(this,u.s),this.l=u.l;var m=u.i,_=new Jn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ni(this,_),this.m=u.m}else u&&(m=String(u).match(rs))?(this.h=!1,is(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),ti(this,m[4]),this.l=Oe(m[5]||"",!0),ni(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new Jn(null,this.h))}Sr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ii(m,Xs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ii(m,Xs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ii(_,_.charAt(0)=="/"?au:ou,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ii(_,ka)),u.join("")};function un(u){return new Sr(u)}function is(u,m,_){u.j=_?Oe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ti(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ni(u,m,_){m instanceof Jn?(u.i=m,Zn(u.i,u.h)):(_||(m=ii(m,lu)),u.i=new Jn(m,u.h))}function qe(u,m,_){u.i.set(m,_)}function ri(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ii(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,su),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function su(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Xs=/[#\/\?@]/g,ou=/[#\?:]/g,au=/[#\?]/g,lu=/[#\?@]/g,ka=/#/g;function Jn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Pt(u){u.g||(u.g=new Map,u.h=0,u.i&&Of(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Jn.prototype,n.add=function(u,m){Pt(this),this.i=null,u=En(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Dn(u,m){Pt(u),m=En(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ln(u,m){return Pt(u),m=En(u,m),u.g.has(m)}n.forEach=function(u,m){Pt(this),this.g.forEach(function(_,w){_.forEach(function(U){u.call(m,U,w,this)},this)},this)},n.na=function(){Pt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const U=u[w];for(let H=0;H<U.length;H++)_.push(m[w])}return _},n.V=function(u){Pt(this);let m=[];if(typeof u=="string")Ln(this,u)&&(m=m.concat(this.g.get(En(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Pt(this),this.i=null,u=En(this,u),Ln(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function si(u,m,_){Dn(u,m),0<_.length&&(u.i=null,u.g.set(En(u,m),B(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const H=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var U=H;re[w]!==""&&(U+="="+encodeURIComponent(String(re[w]))),u.push(U)}}return this.i=u.join("&")};function En(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Zn(u,m){m&&!u.j&&(Pt(u),u.i=null,u.g.forEach(function(_,w){var U=w.toLowerCase();w!=U&&(Dn(this,w),si(this,U,_))},u)),u.j=m}function Df(u,m){const _=new Ji;if(d.Image){const w=new Image;w.onload=x(Xt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=x(Xt,_,"TestLoadImage: error",!1,m,w),w.onabort=x(Xt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=x(Xt,_,"TestLoadImage: timeout",!1,m,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function uu(u,m){const _=new Ji,w=new AbortController,U=setTimeout(()=>{w.abort(),Xt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(H=>{clearTimeout(U),H.ok?Xt(_,"TestPingServer: ok",!0,m):Xt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Xt(_,"TestPingServer: error",!1,m)})}function Xt(u,m,_,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(_)}catch{}}function Lf(){this.g=new _a}function cu(u,m,_){const w=_||"";try{ei(u,function(U,H){let re=U;y(U)&&(re=ga(U)),m.push(w+H+"="+encodeURIComponent(re))})}catch(U){throw m.push(w+"type="+encodeURIComponent("_badmap")),U}}function Ar(u){this.l=u.Ub||null,this.j=u.eb||!1}V(Ar,Yi),Ar.prototype.g=function(){return new ss(this.l,this.j)},Ar.prototype.i=function(u){return function(){return u}}({});function ss(u,m){gt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ss,gt),n=ss.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Mn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function fu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Vn(this):Mn(this),this.readyState==3&&fu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},n.Qa=function(u){this.g&&(this.response=u,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Mn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Mn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Cr(u){let m="";return Se(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function oi(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Cr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):qe(u,m,_))}function tt(u){gt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(tt,gt);var Vf=/^https?$/i,Ra=["POST","PUT"];n=tt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?zs(this.o):zs(Nn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){os(this,H);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)_.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const H of w.keys())_.set(H,w.get(H));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ra,m,void 0))||w||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of _)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zs(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){os(this,H)}};function os(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Js(u),cn(u)}function Js(u){u.A||(u.A=!0,yt(u,"complete"),yt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,yt(this,"complete"),yt(this,"abort"),cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pa(this):this.bb())},n.bb=function(){Pa(this)};function Pa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)ha(u.Ea,0,u);else if(yt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=re===0){var U=String(u.D).match(rs)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),w=!Vf.test(U?U.toLowerCase():"")}_=w}if(_)yt(u,"complete"),yt(u,"success");else{u.m=6;try{var H=2<Jt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Js(u)}}finally{cn(u)}}}}function cn(u,m){if(u.g){Zs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||yt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Zs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ya(m)}};function xa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function eo(u){const m={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(J(u[w]))continue;var _=L(u[w]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[U]||[];m[U]=H,H.push(_)}N(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ba(u){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=er("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=er("baseRetryDelayMs",5e3,u),this.cb=er("retryDelaySeedMs",1e4,u),this.Wa=er("forwardChannelMaxRetries",2,u),this.wa=er("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ns(u&&u.concurrentRequestLimit),this.Da=new Lf,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ba.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){ut(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=mu(this,null,this.W),tr(this)};function xt(u){if(to(u),u.G==3){var m=u.U++,_=un(u.I);if(qe(_,"SID",u.K),qe(_,"RID",m),qe(_,"TYPE","terminate"),kr(u,_),m=new On(u,u.j,m),m.L=2,m.v=ri(un(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=gu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ke(m)}pu(u)}function Fn(u){u.g&&(Na(u),u.g.cancel(),u.g=null)}function to(u){Fn(u),u.u&&(d.clearTimeout(u.u),u.u=null),io(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function tr(u){if(!ln(u.h)&&!u.s){u.s=!0;var m=u.Ga;He||ae(),ie||(He(),ie=!0),ye.add(m,u),u.B=0}}function Mf(u,m){return nu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=xn(I(u.Ga,u,m),hu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new On(this,this.j,u);let H=this.o;if(this.S&&(H?(H=A(H),b(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ai(this,U,m),_=un(this.I),qe(_,"RID",u),qe(_,"CVER",22),this.D&&qe(_,"X-HTTP-Session-Id",this.D),kr(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(Cr(H)))+"&"+m:this.m&&oi(_,this.m,H)),Ca(this.h,U),this.Ua&&qe(_,"TYPE","init"),this.P?(qe(_,"$req",m),qe(_,"SID","null"),U.T=!0,Ks(U,_,null)):Ks(U,_,m),this.G=2}}else this.G==3&&(u?no(this,u):this.i.length==0||ln(this.h)||no(this))};function no(u,m){var _;m?_=m.l:_=u.U++;const w=un(u.I);qe(w,"SID",u.K),qe(w,"RID",_),qe(w,"AID",u.T),kr(u,w),u.m&&u.o&&oi(w,u.m,u.o),_=new On(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ai(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ca(u.h,_),Ks(_,w,m)}function kr(u,m){u.H&&Se(u.H,function(_,w){qe(m,w,_)}),u.l&&ei({},function(_,w){qe(m,w,_)})}function ai(u,m,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var U=u.i;let H=-1;for(;;){const re=["count="+_];H==-1?0<_?(H=U[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let We=!0;for(let _t=0;_t<_;_t++){let Ve=U[_t].g;const St=U[_t].map;if(Ve-=H,0>Ve)H=Math.max(0,U[_t].g-100),We=!1;else try{cu(St,re,"req"+Ve+"_")}catch{w&&w(St)}}if(We){w=re.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function as(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;He||ae(),ie||(He(),ie=!0),ye.add(m,u),u.v=0}}function ro(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=xn(I(u.Fa,u),hu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=xn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Fn(this),du(this))};function Na(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function du(u){u.g=new On(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=un(u.qa);qe(m,"RID","rpc"),qe(m,"SID",u.K),qe(m,"AID",u.T),qe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(m,"TO",u.ja),qe(m,"TYPE","xmlhttp"),kr(u,m),u.m&&u.o&&oi(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ri(un(m)),_.m=null,_.P=!0,Sa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Fn(this),ro(this),ut(19))};function io(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function so(u,m){var _=null;if(u.g==m){io(u),Na(u),u.g=null;var w=2}else if(Gt(u.h,m))_=m.D,ru(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;w=Xi(),yt(w,new Ws(w,_)),tr(u)}else as(u);else if(U=m.s,U==3||U==0&&0<m.X||!(w==1&&Mf(u,m)||w==2&&ro(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Rr(u,5);break;case 4:Rr(u,10);break;case 3:Rr(u,6);break;default:Rr(u,2)}}}function hu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Rr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),w=u.Xa;const U=!w;w=new Sr(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||is(w,"https"),ri(w),U?Df(w.toString(),_):uu(w.toString(),_)}else ut(2);u.G=0,u.l&&u.l.sa(m),pu(u),to(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function pu(u){if(u.G=0,u.ka=[],u.l){const m=iu(u.h);(m.length!=0||u.i.length!=0)&&(D(u.ka,m),D(u.ka,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.ra()}}function mu(u,m,_){var w=_ instanceof Sr?un(_):new Sr(_);if(w.g!="")m&&(w.g=m+"."+w.g),ti(w,w.s);else{var U=d.location;w=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var H=new Sr(null);w&&is(H,w),m&&(H.g=m),U&&ti(H,U),_&&(H.l=_),w=H}return _=u.D,m=u.ya,_&&m&&qe(w,_,m),qe(w,"VER",u.la),kr(u,w),w}function gu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new tt(new Ar({eb:_})):new tt(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oa(){}n=Oa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oo(){}oo.prototype.g=function(u,m){return new Kt(u,m)};function Kt(u,m){gt.call(this),this.g=new ba(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!J(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!J(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new nr(this)}V(Kt,gt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){xt(this.g)},Kt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ga(u),u=_);m.i.push(new tu(m.Ya++,u)),m.G==3&&tr(m)},Kt.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Kt.aa.N.call(this)};function yu(u){Yn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(yu,Yn);function _u(){$s.call(this),this.status=1}V(_u,$s);function nr(u){this.g=u}V(nr,Oa),nr.prototype.ua=function(){yt(this.g,"a")},nr.prototype.ta=function(u){yt(this.g,new yu(u))},nr.prototype.sa=function(u){yt(this.g,new _u)},nr.prototype.ra=function(){yt(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,tE=function(){return new oo},eE=function(){return Xi()},Z0=Xn,Uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,Cc=qs,Xl.COMPLETE="complete",J0=Xl,Bs.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",gt.prototype.listen=gt.prototype.K,ll=Bs,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,X0=tt}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const R_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Ip("@firebase/firestore");function Po(){return ks.logLevel}function le(n,...e){if(ks.logLevel<=be.DEBUG){const t=e.map(Lp);ks.debug(`Firestore (${Zo}): ${n}`,...t)}}function Hr(n,...e){if(ks.logLevel<=be.ERROR){const t=e.map(Lp);ks.error(`Firestore (${Zo}): ${n}`,...t)}}function $o(n,...e){if(ks.logLevel<=be.WARN){const t=e.map(Lp);ks.warn(`Firestore (${Zo}): ${n}`,...t)}}function Lp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n="Unexpected state"){const e=`FIRESTORE (${Zo}) INTERNAL ASSERTION FAILED: `+n;throw Hr(e),new Error(e)}function $e(n,e){n||Ie()}function Ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Qr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($t.UNAUTHENTICATED))}shutdown(){}}class P2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class x2{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let a=new Oi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Oi,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=a;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Oi)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($e(typeof i.accessToken=="string"),new nE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new $t(e)}}class b2{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class N2{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new b2(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){$e(this.o===void 0);const i=a=>{a.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.R;return this.R=a.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?o(a):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($e(typeof t.token=="string"),this.R=t.token,new O2(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=L2(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Wo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new wt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fe(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new wt(0,0))}static max(){return new Ae(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ie(),i===void 0?i=e.length-t:i>e.length-t&&Ie(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=ar.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=ar.isNumericId(e),o=ar.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}}class Ze extends ar{construct(e,t,i){return new Ze(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ze(t)}static emptyPath(){return new Ze([])}}const V2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ar{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return V2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new fe(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new fe(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(a(),o++)}if(a(),c)throw new fe(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ze.fromString(e))}static fromName(e){return new ge(Ze.fromString(e).popFirst(5))}static empty(){return new ge(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ze(e.slice()))}}function M2(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(i===1e9?new wt(t+1,0):new wt(t,i));return new Li(o,ge.empty(),e)}function F2(n){return new Li(n.readTime,n.key,-1)}class Li{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Li(Ae.min(),ge.empty(),-1)}static max(){return new Li(Ae.max(),ge.empty(),-1)}}function U2(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==j2)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,a=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++a,c&&a===o&&t()},p=>i(p))}),c=!0,a===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const a=e.length,c=new Array(a);let d=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===a&&i(c)},v=>o(v))}})}static doWhile(e,t){return new G((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function B2(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ta(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}lf.oe=-1;function uf(n){return n==null}function Wc(n){return n===0&&1/n==-1/0}function $2(n){return typeof n=="number"&&Number.isInteger(n)&&!Wc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=P_(e)),e=H2(n.get(t),e);return P_(e)}function H2(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function P_(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function iE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.comparator=e,this.root=t||Ot.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pc(this.root,e,this.comparator,!0)}}class pc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Ot.RED,this.left=o??Ot.EMPTY,this.right=a??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Ot(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ot.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,t,i,o,a){return this}insert(e,t,i){return new Ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new b_(this.data.getIterator())}getIteratorFrom(e){return new b_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Tt(this.comparator);return t.data=e,t}}class b_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Hn([])}unionWith(e){let t=new Tt(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new sE("Invalid base64 string: "+a):a}}(e);return new Lt(t)}static fromUint8Array(e){const t=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new Lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const q2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(n){if($e(!!n),typeof n=="string"){let e=0;const t=q2.exec(n);if($e(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mi(n){return typeof n=="string"?Lt.fromBase64String(n):Lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function cf(n){const e=n.mapValue.fields.__previous_value__;return Vp(e)?cf(e):e}function Tl(n){const e=Vi(n.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,t,i,o,a,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class Il{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Il("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc={mapValue:{}};function Fi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vp(n)?4:Q2(n)?9007199254740991:K2(n)?10:11:Ie()}function yr(n,e){if(n===e)return!0;const t=Fi(n);if(t!==Fi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Tl(n).isEqual(Tl(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=Vi(o.timestampValue),d=Vi(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return Mi(o.bytesValue).isEqual(Mi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return ft(o.geoPointValue.latitude)===ft(a.geoPointValue.latitude)&&ft(o.geoPointValue.longitude)===ft(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return ft(o.integerValue)===ft(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=ft(o.doubleValue),d=ft(a.doubleValue);return c===d?Wc(c)===Wc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Wo(n.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:case 11:return function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(x_(c)!==x_(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!yr(c[p],d[p])))return!1;return!0}(n,e);default:return Ie()}}function Sl(n,e){return(n.values||[]).find(t=>yr(t,e))!==void 0}function Ho(n,e){if(n===e)return 0;const t=Fi(n),i=Fi(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(a,c){const d=ft(a.integerValue||a.doubleValue),p=ft(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return N_(n.timestampValue,e.timestampValue);case 4:return N_(Tl(n),Tl(e));case 5:return De(n.stringValue,e.stringValue);case 6:return function(a,c){const d=Mi(a),p=Mi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(a,c){const d=a.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=De(d[y],p[y]);if(v!==0)return v}return De(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,c){const d=De(ft(a.latitude),ft(c.latitude));return d!==0?d:De(ft(a.longitude),ft(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return O_(n.arrayValue,e.arrayValue);case 10:return function(a,c){var d,p,y,v;const T=a.fields||{},I=c.fields||{},x=(d=T.value)===null||d===void 0?void 0:d.arrayValue,V=(p=I.value)===null||p===void 0?void 0:p.arrayValue,B=De(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((v=V==null?void 0:V.values)===null||v===void 0?void 0:v.length)||0);return B!==0?B:O_(x,V)}(n.mapValue,e.mapValue);case 11:return function(a,c){if(a===mc.mapValue&&c===mc.mapValue)return 0;if(a===mc.mapValue)return 1;if(c===mc.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const I=De(p[T],v[T]);if(I!==0)return I;const x=Ho(d[p[T]],y[v[T]]);if(x!==0)return x}return De(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Ie()}}function N_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Vi(n),i=Vi(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function O_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=Ho(t[o],i[o]);if(a)return a}return De(t.length,i.length)}function qo(n){return jh(n)}function jh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Vi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Mi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ge.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=jh(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${jh(t.fields[c])}`;return o+"}"}(n.mapValue):Ie()}function kc(n){switch(Fi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cf(n);return e?16+kc(e):16;case 5:return 2*n.stringValue.length;case 6:return Mi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,a)=>o+kc(a),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return bs(i.fields,(a,c)=>{o+=a.length+kc(c)}),o}(n.mapValue);default:throw Ie()}}function D_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function zh(n){return!!n&&"integerValue"in n}function Mp(n){return!!n&&"arrayValue"in n}function L_(n){return!!n&&"nullValue"in n}function V_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rc(n){return!!n&&"mapValue"in n}function K2(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function hl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bs(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=hl(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Q2(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hl(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=hl(c):o.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());Rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Rc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){bs(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new Rn(hl(this.value))}}function oE(n){const e=[];return bs(n.fields,(t,i)=>{const o=new Dt([t]);if(Rc(i)){const a=oE(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)}),new Hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,i,o,a,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Wt(e,0,Ae.min(),Ae.min(),Ae.min(),Rn.empty(),0)}static newFoundDocument(e,t,i,o){return new Wt(e,1,t,Ae.min(),i,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Ae.min(),Ae.min(),Rn.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Ae.min(),Ae.min(),Rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.position=e,this.inclusive=t}}function M_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=ge.comparator(ge.fromName(c.referenceValue),t.key):i=Ho(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function F_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Y2(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{}class mt extends aE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new J2(e,t,i):t==="array-contains"?new tC(e,i):t==="in"?new nC(e,i):t==="not-in"?new rC(e,i):t==="array-contains-any"?new iC(e,i):new mt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Z2(e,i):new eC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ho(t,this.value)):t!==null&&Fi(this.value)===Fi(t)&&this.matchesComparison(Ho(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends aE{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Gn(e,t)}matches(e){return lE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lE(n){return n.op==="and"}function uE(n){return X2(n)&&lE(n)}function X2(n){for(const e of n.filters)if(e instanceof Gn)return!1;return!0}function Bh(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+qo(n.value);if(uE(n))return n.filters.map(e=>Bh(e)).join(",");{const e=n.filters.map(t=>Bh(t)).join(",");return`${n.op}(${e})`}}function cE(n,e){return n instanceof mt?function(i,o){return o instanceof mt&&i.op===o.op&&i.field.isEqual(o.field)&&yr(i.value,o.value)}(n,e):n instanceof Gn?function(i,o){return o instanceof Gn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,c,d)=>a&&cE(c,o.filters[d]),!0):!1}(n,e):void Ie()}function fE(n){return n instanceof mt?function(t){return`${t.field.canonicalString()} ${t.op} ${qo(t.value)}`}(n):n instanceof Gn?function(t){return t.op.toString()+" {"+t.getFilters().map(fE).join(" ,")+"}"}(n):"Filter"}class J2 extends mt{constructor(e,t,i){super(e,t,i),this.key=ge.fromName(i.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class Z2 extends mt{constructor(e,t){super(e,"in",t),this.keys=dE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eC extends mt{constructor(e,t){super(e,"not-in",t),this.keys=dE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ge.fromName(i.referenceValue))}class tC extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mp(t)&&Sl(t.arrayValue,this.value)}}class nC extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Sl(this.value.arrayValue,t)}}class rC extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Sl(this.value.arrayValue,t)}}class iC extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Sl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t=null,i=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.ue=null}}function U_(n,e=null,t=[],i=[],o=null,a=null,c=null){return new sC(n,e,t,i,o,a,c)}function Fp(n){const e=Ce(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Bh(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),uf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>qo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>qo(i)).join(",")),e.ue=t}return e.ue}function Up(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Y2(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!F_(n.startAt,e.startAt)&&F_(n.endAt,e.endAt)}function $h(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t=null,i=[],o=[],a=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oC(n,e,t,i,o,a,c,d){return new jl(n,e,t,i,o,a,c,d)}function hE(n){return new jl(n)}function j_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pE(n){return n.collectionGroup!==null}function pl(n){const e=Ce(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Tt(Dt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new qc(a,i))}),t.has(Dt.keyField().canonicalString())||e.ce.push(new qc(Dt.keyField(),i))}return e.ce}function pr(n){const e=Ce(n);return e.le||(e.le=aC(e,pl(n))),e.le}function aC(n,e){if(n.limitType==="F")return U_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new qc(o.field,a)});const t=n.endAt?new Hc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Hc(n.startAt.position,n.startAt.inclusive):null;return U_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Wh(n,e){const t=n.filters.concat([e]);return new jl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Hh(n,e,t){return new jl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ff(n,e){return Up(pr(n),pr(e))&&n.limitType===e.limitType}function mE(n){return`${Fp(pr(n))}|lt:${n.limitType}`}function xo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>fE(o)).join(", ")}]`),uf(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>qo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>qo(o)).join(",")),`Target(${i})`}(pr(n))}; limitType=${n.limitType})`}function df(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):ge.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of pl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=M_(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,pl(i),o)||i.endAt&&!function(c,d,p){const y=M_(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,pl(i),o))}(n,e)}function lC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gE(n){return(e,t)=>{let i=!1;for(const o of pl(n)){const a=uC(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function uC(n,e,t){const i=n.field.isKeyField()?ge.comparator(e.key,t.key):function(a,c,d){const p=c.data.field(a),y=d.data.field(a);return p!==null&&y!==null?Ho(p,y):Ie()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return iE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new ot(ge.comparator);function qr(){return cC}const yE=new ot(ge.comparator);function ul(...n){let e=yE;for(const t of n)e=e.insert(t.key,t);return e}function _E(n){let e=yE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ts(){return ml()}function vE(){return ml()}function ml(){return new Ns(n=>n.toString(),(n,e)=>n.isEqual(e))}const fC=new ot(ge.comparator),dC=new Tt(ge.comparator);function Ne(...n){let e=dC;for(const t of n)e=e.add(t);return e}const hC=new Tt(De);function pC(){return hC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(e)?"-0":e}}function EE(n){return{integerValue:""+n}}function mC(n,e){return $2(e)?EE(e):jp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this._=void 0}}function gC(n,e,t){return n instanceof Al?function(o,a){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Vp(a)&&(a=cf(a)),a&&(c.fields.__previous_value__=a),{mapValue:c}}(t,e):n instanceof Cl?TE(n,e):n instanceof kl?IE(n,e):function(o,a){const c=wE(o,a),d=z_(c)+z_(o.Pe);return zh(c)&&zh(o.Pe)?EE(d):jp(o.serializer,d)}(n,e)}function yC(n,e,t){return n instanceof Cl?TE(n,e):n instanceof kl?IE(n,e):t}function wE(n,e){return n instanceof Gc?function(i){return zh(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class Al extends hf{}class Cl extends hf{constructor(e){super(),this.elements=e}}function TE(n,e){const t=SE(e);for(const i of n.elements)t.some(o=>yr(o,i))||t.push(i);return{arrayValue:{values:t}}}class kl extends hf{constructor(e){super(),this.elements=e}}function IE(n,e){let t=SE(e);for(const i of n.elements)t=t.filter(o=>!yr(o,i));return{arrayValue:{values:t}}}class Gc extends hf{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function z_(n){return ft(n.integerValue||n.doubleValue)}function SE(n){return Mp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,t){this.field=e,this.transform=t}}function vC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof Cl&&o instanceof Cl||i instanceof kl&&o instanceof kl?Wo(i.elements,o.elements,yr):i instanceof Gc&&o instanceof Gc?yr(i.Pe,o.Pe):i instanceof Al&&o instanceof Al}(n.transform,e.transform)}class EC{constructor(e,t){this.version=e,this.transformResults=t}}class zr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zr}static exists(e){return new zr(void 0,e)}static updateTime(e){return new zr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pf{}function AE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new kE(n.key,zr.none()):new zl(n.key,n.data,zr.none());{const t=n.data,i=Rn.empty();let o=new Tt(Dt.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new Os(n.key,i,new Hn(o.toArray()),zr.none())}}function wC(n,e,t){n instanceof zl?function(o,a,c){const d=o.value.clone(),p=$_(o.fieldTransforms,a,c.transformResults);d.setAll(p),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Os?function(o,a,c){if(!Pc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=$_(o.fieldTransforms,a,c.transformResults),p=a.data;p.setAll(CE(o)),p.setAll(d),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function gl(n,e,t,i){return n instanceof zl?function(a,c,d,p){if(!Pc(a.precondition,c))return d;const y=a.value.clone(),v=W_(a.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Os?function(a,c,d,p){if(!Pc(a.precondition,c))return d;const y=W_(a.fieldTransforms,p,c),v=c.data;return v.setAll(CE(a)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(a,c,d){return Pc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function TC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=wE(i.transform,o||null);a!=null&&(t===null&&(t=Rn.empty()),t.set(i.field,a))}return t||null}function B_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Wo(i,o,(a,c)=>vC(a,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zl extends pf{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Os extends pf{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function CE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function $_(n,e,t){const i=new Map;$e(n.length===t.length);for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,d=e.data.field(a.field);i.set(a.field,yC(c,d,t[o]))}return i}function W_(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,gC(a,c,e))}return i}class kE extends pf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IC extends pf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&wC(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=gl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=gl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=vE();return this.mutations.forEach(o=>{const a=e.get(o.key),c=a.overlayedDocument;let d=this.applyToLocalView(c,a.mutatedFields);d=t.has(o.key)?null:d;const p=AE(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,(t,i)=>B_(t,i))&&Wo(this.baseMutations,e.baseMutations,(t,i)=>B_(t,i))}}class zp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){$e(e.mutations.length===i.length);let o=function(){return fC}();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new zp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Me;function kC(n){switch(n){default:return Ie();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function RE(n){if(n===void 0)return Hr("GRPC error has no .code"),Y.UNKNOWN;switch(n){case pt.OK:return Y.OK;case pt.CANCELLED:return Y.CANCELLED;case pt.UNKNOWN:return Y.UNKNOWN;case pt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case pt.INTERNAL:return Y.INTERNAL;case pt.UNAVAILABLE:return Y.UNAVAILABLE;case pt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case pt.NOT_FOUND:return Y.NOT_FOUND;case pt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case pt.ABORTED:return Y.ABORTED;case pt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case pt.DATA_LOSS:return Y.DATA_LOSS;default:return Ie()}}(Me=pt||(pt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new Ni([4294967295,4294967295],0);function H_(n){const e=RC().encode(n),t=new Y0;return t.update(e),new Uint8Array(t.digest())}function q_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ni([t,i],0),new Ni([o,a],0)]}class Bp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new cl(`Invalid padding: ${t}`);if(i<0)throw new cl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new cl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new cl(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ni.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ni.fromNumber(i)));return o.compare(PC)===1&&(o=new Ni([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=H_(e),[i,o]=q_(t);for(let a=0;a<this.hashCount;a++){const c=this.de(i,o,a);if(!this.Ee(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Bp(a,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;const t=H_(e),[i,o]=q_(t);for(let a=0;a<this.hashCount;a++){const c=this.de(i,o,a);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class cl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Bl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new mf(Ae.min(),o,new ot(De),qr(),Ne())}}class Bl{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Bl(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class PE{constructor(e,t){this.targetId=e,this.me=t}}class xE{constructor(e,t,i=Lt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class G_{constructor(){this.fe=0,this.ge=K_(),this.pe=Lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),t=Ne(),i=Ne();return this.ge.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ie()}}),new Bl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=K_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,$e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xC{constructor(e){this.Be=e,this.Le=new Map,this.ke=qr(),this.qe=gc(),this.Qe=gc(),this.Ke=new ot(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Ie()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const a=o.target;if($h(a))if(i===0){const c=new ge(a.path);this.We(t,c,Wt.newNoDocument(c,Ae.min()))}else $e(i===1);else{const c=this.Ze(t);if(c!==i){const d=this.Xe(e),p=d?this.et(d,e,c):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,d;try{c=Mi(i).toUint8Array()}catch(p){if(p instanceof sE)return $o("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Bp(c,o,a)}catch(p){return $o(p instanceof cl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const c=this.Be.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.We(t,a,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((a,c)=>{const d=this.Ye(c);if(d){if(a.current&&$h(d.target)){const p=new ge(d.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,Wt.newNoDocument(p,e))}a.be&&(t.set(c,a.ve()),a.Ce())}});let i=Ne();this.Qe.forEach((a,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(a))}),this.ke.forEach((a,c)=>c.setReadTime(e));const o=new mf(e,t,this.Ke,this.ke,i);return this.ke=qr(),this.qe=gc(),this.Qe=gc(),this.Ke=new ot(De),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new G_,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Tt(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Tt(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new G_),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function gc(){return new ot(ge.comparator)}function K_(){return new ot(ge.comparator)}const bC={asc:"ASCENDING",desc:"DESCENDING"},NC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OC={and:"AND",or:"OR"};class DC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qh(n,e){return n.useProto3Json||uf(e)?e:{value:e}}function Kc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function LC(n,e){return Kc(n,e.toTimestamp())}function mr(n){return $e(!!n),Ae.fromTimestamp(function(t){const i=Vi(t);return new wt(i.seconds,i.nanos)}(n))}function $p(n,e){return Gh(n,e).canonicalString()}function Gh(n,e){const t=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function NE(n){const e=Ze.fromString(n);return $e(ME(e)),e}function Kh(n,e){return $p(n.databaseId,e.path)}function mh(n,e){const t=NE(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ge(DE(t))}function OE(n,e){return $p(n.databaseId,e)}function VC(n){const e=NE(n);return e.length===4?Ze.emptyPath():DE(e)}function Qh(n){return new Ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DE(n){return $e(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Q_(n,e,t){return{name:Kh(n,e),fields:t.value.mapValue.fields}}function MC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(y,v){return y.useProto3Json?($e(v===void 0||typeof v=="string"),Lt.fromBase64String(v||"")):($e(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Lt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?Y.UNKNOWN:RE(y.code);return new fe(v,y.message||"")}(c);t=new xE(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=mh(n,i.document.name),a=mr(i.document.updateTime),c=i.document.createTime?mr(i.document.createTime):Ae.min(),d=new Rn({mapValue:{fields:i.document.fields}}),p=Wt.newFoundDocument(o,a,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new xc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=mh(n,i.document),a=i.readTime?mr(i.readTime):Ae.min(),c=Wt.newNoDocument(o,a),d=i.removedTargetIds||[];t=new xc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=mh(n,i.document),a=i.removedTargetIds||[];t=new xc([],a,o,null)}else{if(!("filter"in e))return Ie();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new CC(o,a),d=i.targetId;t=new PE(d,c)}}return t}function FC(n,e){let t;if(e instanceof zl)t={update:Q_(n,e.key,e.value)};else if(e instanceof kE)t={delete:Kh(n,e.key)};else if(e instanceof Os)t={update:Q_(n,e.key,e.data),updateMask:GC(e.fieldMask)};else{if(!(e instanceof IC))return Ie();t={verify:Kh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,c){const d=c.transform;if(d instanceof Al)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Cl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof kl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Gc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Ie()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:LC(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ie()}(n,e.precondition)),t}function UC(n,e){return n&&n.length>0?($e(e!==void 0),n.map(t=>function(o,a){let c=o.updateTime?mr(o.updateTime):mr(a);return c.isEqual(Ae.min())&&(c=mr(a)),new EC(c,o.transformResults||[])}(t,e))):[]}function jC(n,e){return{documents:[OE(n,e.path)]}}function zC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=OE(n,o);const a=function(y){if(y.length!==0)return VE(Gn.create(y,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const c=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:bo(I.field),direction:WC(I.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=qh(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function BC(n){let e=VC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){$e(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(T){const I=LE(T);return I instanceof Gn&&uE(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(I=>function(V){return new qc(No(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,uf(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,x=T.values||[];return new Hc(x,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,x=T.values||[];return new Hc(x,I)}(t.endAt)),oC(e,o,c,a,d,"F",p,y)}function $C(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function LE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=No(t.unaryFilter.field);return mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=No(t.unaryFilter.field);return mt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=No(t.unaryFilter.field);return mt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(n):n.fieldFilter!==void 0?function(t){return mt.create(No(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Gn.create(t.compositeFilter.filters.map(i=>LE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie()}}(t.compositeFilter.op))}(n):Ie()}function WC(n){return bC[n]}function HC(n){return NC[n]}function qC(n){return OC[n]}function bo(n){return{fieldPath:n.canonicalString()}}function No(n){return Dt.fromServerFormat(n.fieldPath)}function VE(n){return n instanceof mt?function(t){if(t.op==="=="){if(V_(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NAN"}};if(L_(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(V_(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NOT_NAN"}};if(L_(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bo(t.field),op:HC(t.op),value:t.value}}}(n):n instanceof Gn?function(t){const i=t.getFilters().map(o=>VE(o));return i.length===1?i[0]:{compositeFilter:{op:qC(t.op),filters:i}}}(n):Ie()}function GC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ME(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,i,o,a=Ae.min(),c=Ae.min(),d=Lt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.ht=e}}function QC(n){const e=BC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.ln=new XC}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Li.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class XC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Tt(Ze.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Tt(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(41943040,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Go(0)}static Qn(){return new Go(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class JC{constructor(e){this.Gn=e,this.buffer=new Tt(X_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();X_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){le("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ta(t)?le("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ea(t)}await this.Yn(3e5)})}}class ek{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return G.resolve(lf.oe);const i=new JC(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Y_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Y_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,a,c,d,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(a=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),Po()<=be.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:T})))}}function tk(n,e){return new ek(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.changes=new Ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&gl(i.mutation,o,Hn.empty(),wt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ne()){const o=Ts();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let c=ul();return a.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Ts();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ne()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let a=qr();const c=ml(),d=function(){return ml()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Os)?a=a.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),gl(v.mutation,y,v.mutation.getFieldMask(),wt.now())):c.set(y.key,Hn.empty())}),this.recalculateAndSaveOverlays(e,a).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var T;return d.set(y,new rk(v,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=ml();let o=new ot((c,d)=>c-d),a=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||Hn.empty();v=d.applyToLocalView(y,v),i.set(p,v);const T=(o.get(d.batchId)||Ne()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,T=vE();v.forEach(I=>{if(!a.has(I)){const x=AE(t.get(I),i.get(I));x!==null&&T.set(I,x),a=a.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ge.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):G.resolve(Ts());let d=-1,p=a;return c.next(y=>G.forEach(y,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),a.get(v)?G.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{p=p.insert(v,I)}))).next(()=>this.populateOverlays(e,y,a)).next(()=>this.computeViews(e,p,y,Ne())).next(v=>({batchId:d,changes:_E(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(i=>{let o=ul();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=ul();return this.indexManager.getCollectionParents(e,a).next(d=>G.forEach(d,p=>{const y=function(T,I){return new jl(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((T,I)=>{c=c.insert(T,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(c=>{a.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,Wt.newInvalidDocument(v)))});let d=ul();return c.forEach((p,y)=>{const v=a.get(p);v!==void 0&&gl(v.mutation,y,Hn.empty(),wt.now()),df(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:mr(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:QC(o.bundledQuery),readTime:mr(o.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.overlays=new ot(ge.comparator),this.dr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ts();return G.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.Tt(e,t,a)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.dr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=Ts(),a=t.length+1,c=new ge(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new ot((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=a.get(y.largestBatchId);v===null&&(v=Ts(),a=a.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=Ts(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return G.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new AC(t,i));let a=this.dr.get(t);a===void 0&&(a=Ne(),this.dr.set(t,a)),this.dr.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.Er=new Tt(Rt.Ar),this.Rr=new Tt(Rt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new Rt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ge(new Ze([])),i=new Rt(t,e),o=new Rt(t,e+1),a=[];return this.Rr.forEachInRange([i,o],c=>{this.gr(c),a.push(c.key)}),a}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ge(new Ze([])),i=new Rt(t,e),o=new Rt(t,e+1);let a=Ne();return this.Rr.forEachInRange([i,o],c=>{a=a.add(c.key)}),a}containsKey(e){const t=new Rt(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ge.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Tt(Rt.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new SC(a,t,i,o);this.mutationQueue.push(c);for(const d of o)this.vr=this.vr.add(new Rt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(c)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),a=o<0?0:o;return G.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([i,o],c=>{const d=this.Cr(c.br);a.push(d)}),G.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Tt(De);return t.forEach(o=>{const a=new Rt(o,0),c=new Rt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,c],d=>{i=i.add(d.br)})}),G.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;ge.isDocumentKey(a)||(a=a.child(""));const c=new Rt(new ge(a),0);let d=new Tt(De);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},c),G.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){$e(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return G.forEach(t.mutations,o=>{const a=new Rt(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new Rt(t,0),o=this.vr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.Nr=e,this.docs=function(){return new ot(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let i=qr();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Wt.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=qr();const c=t.path,d=new ge(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||U2(F2(v),i)<=0||(o.has(v.key)||df(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return G.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Ie()}Br(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new ck(this)}getSize(e){return G.resolve(this.size)}}class ck extends nk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.persistence=e,this.Lr=new Ns(t=>Fp(t),Up),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.kr=0,this.qr=new Wp,this.targetCount=0,this.Qr=Go.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Go(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.Lr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Lr.delete(c),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),G.waitFor(a).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(c=>{a.push(o.markPotentiallyOrphaned(e,c))}),G.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){this.Kr={},this.overlays={},this.$r=new lf(0),this.Ur=!1,this.Ur=!0,this.Wr=new ak,this.referenceDelegate=e(this),this.Gr=new fk(this),this.indexManager=new YC,this.remoteDocumentCache=function(o){return new uk(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new KC(t),this.jr=new sk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ok,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new lk(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new dk(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(a=>this.referenceDelegate.Jr(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Yr(e,t){return G.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class dk extends z2{constructor(e){super(),this.currentSequenceNumber=e}}class Hp{constructor(e){this.persistence=e,this.Zr=new Wp,this.Xr=null}static ei(e){return new Hp(e)}get ti(){if(this.Xr)return this.Xr;throw Ie()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.ti.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,i=>{const o=ge.fromPath(i);return this.ni(e,o).next(a=>{a||t.removeEntry(o,Ae.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Qc{constructor(e,t){this.persistence=e,this.ri=new Ns(i=>W2(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=tk(this,t)}static ei(e,t){return new Qc(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(a=>a?G.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.Br(e,c=>this.ir(e,c,t).next(d=>{d||(i++,a.removeEntry(c,Ae.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=kc(e.data.value)),t}ir(e,t,i){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Ne(),o=Ne();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new qp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return XT()?8:B2(Ht())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.Xi(e,t).next(c=>{a.result=c}).next(()=>{if(!a.result)return this.es(e,t,o,i).next(c=>{a.result=c})}).next(()=>{if(a.result)return;const c=new hk;return this.ts(e,t,c).next(d=>{if(a.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>a.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(Po()<=be.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",xo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(Po()<=be.DEBUG&&le("QueryEngine","Query:",xo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(Po()<=be.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",xo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(t))):G.resolve())}Xi(e,t){if(j_(t))return G.resolve(null);let i=pr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Hh(t,null,"F"),i=pr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=Ne(...a);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,c,p.readTime)?this.Xi(e,Hh(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return j_(t)||o.isEqual(Ae.min())?G.resolve(null):this.Zi.getDocuments(e,i).next(a=>{const c=this.rs(t,a);return this.ss(t,c,i,o)?G.resolve(null):(Po()<=be.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),xo(t)),this.os(e,c,t,M2(o,-1)).next(d=>d))})}rs(e,t){let i=new Tt(gE(e));return t.forEach((o,a)=>{df(e,a)&&(i=i.add(a))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ts(e,t,i){return Po()<=be.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",xo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Li.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(c=>{a=a.insert(c.key,c)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new ot(De),this.cs=new Ns(a=>Fp(a),Up),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ik(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function gk(n,e,t,i){return new mk(n,e,t,i)}async function UE(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const c=[],d=[];let p=Ne();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of a){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:c,addedBatchIds:d}))})})}function yk(n,e){const t=Ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const T=y.batch,I=T.keys();let x=G.resolve();return I.forEach(V=>{x=x.next(()=>v.getEntry(p,V)).next(B=>{const D=y.docVersions.get(V);$e(D!==null),B.version.compareTo(D)<0&&(T.applyToRemoteDocument(B,y),B.isValidDocument()&&(B.setReadTime(y.commitVersion),v.addEntry(B)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Ne();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function jE(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function _k(n,e){const t=Ce(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((v,T)=>{const I=o.get(T);if(!I)return;d.push(t.Gr.removeMatchingKeys(a,v.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(a,v.addedDocuments,T)));let x=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(Lt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,i)),o=o.insert(T,x),function(B,D,q){return B.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(I,x,v)&&d.push(t.Gr.updateTargetData(a,x))});let p=qr(),y=Ne();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(vk(a,c,e.documentUpdates).next(v=>{p=v.Is,y=v.ds})),!i.isEqual(Ae.min())){const v=t.Gr.getLastRemoteSnapshotVersion(a).next(T=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,i));d.push(v)}return G.waitFor(d).next(()=>c.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,p,y)).next(()=>p)}).then(a=>(t.us=o,a))}function vk(n,e,t){let i=Ne(),o=Ne();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let c=qr();return t.forEach((d,p)=>{const y=a.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):le("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:c,ds:o}})}function Ek(n,e){const t=Ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function wk(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(a=>a?(o=a,G.resolve(o)):t.Gr.allocateTargetId(i).next(c=>(o=new Ri(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function Yh(n,e,t){const i=Ce(n),o=i.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!ta(c))throw c;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function J_(n,e,t){const i=Ce(n);let o=Ae.min(),a=Ne();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const T=Ce(p),I=T.cs.get(v);return I!==void 0?G.resolve(T.us.get(I)):T.Gr.getTargetData(y,v)}(i,c,pr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{a=p})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Ae.min(),t?a:Ne())).next(d=>(Tk(i,lC(e),d),{documents:d,Es:a})))}function Tk(n,e,t){let i=n.ls.get(e)||Ae.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.ls.set(e,i)}class Z_{constructor(){this.activeTargetIds=pC()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ik{constructor(){this._o=new Z_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Z_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc=null;function gh(){return yc===null?yc=function(){return 268435456+Math.round(2147483648*Math.random())}():yc++,"0x"+yc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class kk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${a}`}Oo(t,i,o,a,c){const d=gh(),p=this.No(t,i.toUriEncodedString());le("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,a,c),this.Lo(t,p,y,o).then(v=>(le("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw $o("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",o),v})}ko(t,i,o,a,c,d){return this.Oo(t,i,o,a,c)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,c)=>t[c]=a),o&&o.headers.forEach((a,c)=>t[c]=a)}No(t,i){const o=Ak[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const a=gh();return new Promise((c,d)=>{const p=new X0;p.setWithCredentials(!0),p.listenOnce(J0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Cc.NO_ERROR:const v=p.getResponseJson();le(Bt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),c(v);break;case Cc.TIMEOUT:le(Bt,`RPC '${e}' ${a} timed out`),d(new fe(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Cc.HTTP_ERROR:const T=p.getStatus();if(le(Bt,`RPC '${e}' ${a} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const V=function(D){const q=D.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(q)>=0?q:Y.UNKNOWN}(x.status);d(new fe(V,x.message))}else d(new fe(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new fe(Y.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{le(Bt,`RPC '${e}' ${a} completed.`)}});const y=JSON.stringify(o);le(Bt,`RPC '${e}' ${a} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=gh(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=tE(),d=eE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=a.join("");le(Bt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const T=c.createWebChannel(v,p);let I=!1,x=!1;const V=new Ck({Eo:D=>{x?le(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,D):(I||(le(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),le(Bt,`RPC '${e}' stream ${o} sending:`,D),T.send(D))},Ao:()=>T.close()}),B=(D,q,J)=>{D.listen(q,Q=>{try{J(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return B(T,ll.EventType.OPEN,()=>{x||(le(Bt,`RPC '${e}' stream ${o} transport opened.`),V.So())}),B(T,ll.EventType.CLOSE,()=>{x||(x=!0,le(Bt,`RPC '${e}' stream ${o} transport closed`),V.Do())}),B(T,ll.EventType.ERROR,D=>{x||(x=!0,$o(Bt,`RPC '${e}' stream ${o} transport errored:`,D),V.Do(new fe(Y.UNAVAILABLE,"The operation could not be completed")))}),B(T,ll.EventType.MESSAGE,D=>{var q;if(!x){const J=D.data[0];$e(!!J);const Q=J,oe=(Q==null?void 0:Q.error)||((q=Q[0])===null||q===void 0?void 0:q.error);if(oe){le(Bt,`RPC '${e}' stream ${o} received error:`,oe);const Ee=oe.status;let Se=function(k){const b=pt[k];if(b!==void 0)return RE(b)}(Ee),N=oe.message;Se===void 0&&(Se=Y.INTERNAL,N="Unknown error status: "+Ee+" with message "+oe.message),x=!0,V.Do(new fe(Se,N)),T.close()}else le(Bt,`RPC '${e}' stream ${o} received:`,J),V.vo(J)}}),B(d,Z0.STAT_EVENT,D=>{D.stat===Uh.PROXY?le(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):D.stat===Uh.NOPROXY&&le(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function yh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n){return new DC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t,i=1e3,o=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t,i,o,a,c,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new zE(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new fe(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rk extends BE{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=MC(this.serializer,e),i=function(a){if(!("targetChange"in a))return Ae.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?mr(c.readTime):Ae.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Qh(this.serializer),t.addTarget=function(a,c){let d;const p=c.target;if(d=$h(p)?{documents:jC(a,p)}:{query:zC(a,p).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=bE(a,c.resumeToken);const y=qh(a,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ae.min())>0){d.readTime=Kc(a,c.snapshotVersion.toTimestamp());const y=qh(a,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=$C(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Qh(this.serializer),t.removeTarget=e,this.c_(t)}}class Pk extends BE{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return $e(!!e.streamToken),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){$e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=UC(e.writeResults,e.commitTime),i=mr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Qh(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>FC(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new fe(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Oo(e,Gh(t,i),o,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new fe(Y.UNKNOWN,a.toString())})}ko(e,t,i,o,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,Gh(t,i),o,c,d,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new fe(Y.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class bk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Hr(t),this.C_=!1):le("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(c=>{i.enqueueAndForget(async()=>{Ds(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ce(p);y.k_.add(4),await $l(y),y.K_.set("Unknown"),y.k_.delete(4),await yf(y)}(this))})}),this.K_=new bk(i,o)}}async function yf(n){if(Ds(n))for(const e of n.q_)await e(!0)}async function $l(n){for(const e of n.q_)await e(!1)}function $E(n,e){const t=Ce(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Yp(t)?Qp(t):na(t).s_()&&Kp(t,e))}function Gp(n,e){const t=Ce(n),i=na(t);t.L_.delete(e),i.s_()&&WE(t,e),t.L_.size===0&&(i.s_()?i.a_():Ds(t)&&t.K_.set("Unknown"))}function Kp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}na(n).V_(e)}function WE(n,e){n.U_.xe(e),na(n).m_(e)}function Qp(n){n.U_=new xC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),na(n).start(),n.K_.F_()}function Yp(n){return Ds(n)&&!na(n).i_()&&n.L_.size>0}function Ds(n){return Ce(n).k_.size===0}function HE(n){n.U_=void 0}async function Ok(n){n.K_.set("Online")}async function Dk(n){n.L_.forEach((e,t)=>{Kp(n,e)})}async function Lk(n,e){HE(n),Yp(n)?(n.K_.O_(e),Qp(n)):n.K_.set("Unknown")}async function Vk(n,e,t){if(n.K_.set("Online"),e instanceof xE&&e.state===2&&e.cause)try{await async function(o,a){const c=a.cause;for(const d of a.targetIds)o.L_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.L_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Yc(n,i)}else if(e instanceof xc?n.U_.$e(e):e instanceof PE?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ae.min()))try{const i=await jE(n.localStore);t.compareTo(i)>=0&&await function(a,c){const d=a.U_.it(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=a.L_.get(y);v&&a.L_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=a.L_.get(p);if(!v)return;a.L_.set(p,v.withResumeToken(Lt.EMPTY_BYTE_STRING,v.snapshotVersion)),WE(a,p);const T=new Ri(v.target,p,y,v.sequenceNumber);Kp(a,T)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){le("RemoteStore","Failed to raise snapshot:",i),await Yc(n,i)}}async function Yc(n,e,t){if(!ta(e))throw e;n.k_.add(1),await $l(n),n.K_.set("Offline"),t||(t=()=>jE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await yf(n)})}function qE(n,e){return e().catch(t=>Yc(n,t,e))}async function _f(n){const e=Ce(n),t=Ui(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;Mk(e);)try{const o=await Ek(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,Fk(e,o)}catch(o){await Yc(e,o)}GE(e)&&KE(e)}function Mk(n){return Ds(n)&&n.B_.length<10}function Fk(n,e){n.B_.push(e);const t=Ui(n);t.s_()&&t.f_&&t.g_(e.mutations)}function GE(n){return Ds(n)&&!Ui(n).i_()&&n.B_.length>0}function KE(n){Ui(n).start()}async function Uk(n){Ui(n).w_()}async function jk(n){const e=Ui(n);for(const t of n.B_)e.g_(t.mutations)}async function zk(n,e,t){const i=n.B_.shift(),o=zp.from(i,e,t);await qE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await _f(n)}async function Bk(n,e){e&&Ui(n).f_&&await async function(i,o){if(function(c){return kC(c)&&c!==Y.ABORTED}(o.code)){const a=i.B_.shift();Ui(i).__(),await qE(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await _f(i)}}(n,e),GE(n)&&KE(n)}async function tv(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const i=Ds(t);t.k_.add(3),await $l(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await yf(t)}async function $k(n,e){const t=Ce(n);e?(t.k_.delete(2),await yf(t)):e||(t.k_.add(2),await $l(t),t.K_.set("Unknown"))}function na(n){return n.W_||(n.W_=function(t,i,o){const a=Ce(t);return a.b_(),new Rk(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:Ok.bind(null,n),mo:Dk.bind(null,n),po:Lk.bind(null,n),R_:Vk.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Yp(n)?Qp(n):n.K_.set("Unknown")):(await n.W_.stop(),HE(n))})),n.W_}function Ui(n){return n.G_||(n.G_=function(t,i,o){const a=Ce(t);return a.b_(),new Pk(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Uk.bind(null,n),po:Bk.bind(null,n),p_:jk.bind(null,n),y_:zk.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await _f(n)):(await n.G_.stop(),n.B_.length>0&&(le("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,d=new Xp(e,t,c,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jp(n,e){if(Hr("AsyncQueue",`${e}: ${n}`),ta(n))return new fe(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{static emptySet(e){return new jo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ge.comparator(t.key,i.key):(t,i)=>ge.comparator(t.key,i.key),this.keyedMap=ul(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new jo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.z_=new ot(ge.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ie():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Ko{constructor(e,t,i,o,a,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Ko(e,t,jo.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ff(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Hk{constructor(){this.queries=rv(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ce(t),a=o.queries;o.queries=rv(),a.forEach((c,d)=>{for(const p of d.J_)p.onError(i)})})(this,new fe(Y.ABORTED,"Firestore shutting down"))}}function rv(){return new Ns(n=>mE(n),ff)}async function qk(n,e){const t=Ce(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Y_()&&e.Z_()&&(i=2):(a=new Wk,i=e.Z_()?0:1);try{switch(i){case 0:a.H_=await t.onListen(o,!0);break;case 1:a.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=Jp(c,`Initialization of query '${xo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&Zp(t)}async function Gk(n,e){const t=Ce(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.J_.indexOf(e);c>=0&&(a.J_.splice(c,1),a.J_.length===0?o=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Kk(n,e){const t=Ce(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const d of c.J_)d.ta(o)&&(i=!0);c.H_=o}}i&&Zp(t)}function Qk(n,e,t){const i=Ce(n),o=i.queries.get(e);if(o)for(const a of o.J_)a.onError(t);i.queries.delete(e)}function Zp(n){n.X_.forEach(e=>{e.next()})}var Xh,iv;(iv=Xh||(Xh={})).na="default",iv.Cache="cache";class Yk{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ko(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Xh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.key=e}}class YE{constructor(e){this.key=e}}class Xk{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=gE(e),this.ma=new jo(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new nv,o=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,T)=>{const I=o.get(v),x=df(this.query,T)?T:null,V=!!I&&this.mutatedKeys.has(I.key),B=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let D=!1;I&&x?I.data.isEqual(x.data)?V!==B&&(i.track({type:3,doc:x}),D=!0):this.ya(I,x)||(i.track({type:2,doc:x}),D=!0,(p&&this.Va(x,p)>0||y&&this.Va(x,y)<0)&&(d=!0)):!I&&x?(i.track({type:0,doc:x}),D=!0):I&&!x&&(i.track({type:1,doc:I}),D=!0,(p||y)&&(d=!0)),D&&(x?(c=c.add(x),a=B?a.add(v):a.delete(v)):(c=c.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),a=a.delete(v.key),i.track({type:1,doc:v})}return{ma:c,pa:i,ss:d,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((v,T)=>function(x,V){const B=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return B(x)-B(V)}(v.type,T.type)||this.Va(v.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,c.length!==0||y?{snapshot:new Ko(this.query,e.ma,a,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new nv,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ne(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new YE(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new QE(i))}),t}va(e){this.Ea=e.Es,this.Ra=Ne();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Ko.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Jk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Zk{constructor(e){this.key=e,this.Fa=!1}}class eR{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new Ns(d=>mE(d),ff),this.Oa=new Map,this.Na=new Set,this.Ba=new ot(ge.comparator),this.La=new Map,this.ka=new Wp,this.qa={},this.Qa=new Map,this.Ka=Go.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function tR(n,e,t=!0){const i=nw(n);let o;const a=i.xa.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.Ca()):o=await XE(i,e,t,!0),o}async function nR(n,e){const t=nw(n);await XE(t,e,!0,!1)}async function XE(n,e,t,i){const o=await wk(n.localStore,pr(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await rR(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&$E(n.remoteStore,o),d}async function rR(n,e,t,i,o){n.Ua=(T,I,x)=>async function(B,D,q,J){let Q=D.view.ga(q);Q.ss&&(Q=await J_(B.localStore,D.query,!1).then(({documents:N})=>D.view.ga(N,Q)));const oe=J&&J.targetChanges.get(D.targetId),Ee=J&&J.targetMismatches.get(D.targetId)!=null,Se=D.view.applyChanges(Q,B.isPrimaryClient,oe,Ee);return ov(B,D.targetId,Se.ba),Se.snapshot}(n,T,I,x);const a=await J_(n.localStore,e,!0),c=new Xk(e,a.Es),d=c.ga(a.documents),p=Bl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);ov(n,t,y.ba);const v=new Jk(e,t,c);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function iR(n,e,t){const i=Ce(n),o=i.xa.get(e),a=i.Oa.get(o.targetId);if(a.length>1)return i.Oa.set(o.targetId,a.filter(c=>!ff(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Yh(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Gp(i.remoteStore,o.targetId),Jh(i,o.targetId)}).catch(ea)):(Jh(i,o.targetId),await Yh(i.localStore,o.targetId,!0))}async function sR(n,e){const t=Ce(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Gp(t.remoteStore,i.targetId))}async function oR(n,e,t){const i=hR(n);try{const o=await function(c,d){const p=Ce(c),y=wt.now(),v=d.reduce((x,V)=>x.add(V.key),Ne());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let V=qr(),B=Ne();return p.hs.getEntries(x,v).next(D=>{V=D,V.forEach((q,J)=>{J.isValidDocument()||(B=B.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,V)).next(D=>{T=D;const q=[];for(const J of d){const Q=TC(J,T.get(J.key).overlayedDocument);Q!=null&&q.push(new Os(J.key,Q,oE(Q.value.mapValue),zr.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,q,d)}).next(D=>{I=D;const q=D.applyToLocalDocumentSet(T,B);return p.documentOverlayCache.saveOverlays(x,D.batchId,q)})}).then(()=>({batchId:I.batchId,changes:_E(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.qa[c.currentUser.toKey()];y||(y=new ot(De)),y=y.insert(d,p),c.qa[c.currentUser.toKey()]=y}(i,o.batchId,t),await Wl(i,o.changes),await _f(i.remoteStore)}catch(o){const a=Jp(o,"Failed to persist write");t.reject(a)}}async function JE(n,e){const t=Ce(n);try{const i=await _k(t.localStore,e);e.targetChanges.forEach((o,a)=>{const c=t.La.get(a);c&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?$e(c.Fa):o.removedDocuments.size>0&&($e(c.Fa),c.Fa=!1))}),await Wl(t,i,e)}catch(i){await ea(i)}}function sv(n,e,t){const i=Ce(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((a,c)=>{const d=c.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Ce(c);p.onlineState=d;let y=!1;p.queries.forEach((v,T)=>{for(const I of T.J_)I.ea(d)&&(y=!0)}),y&&Zp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function aR(n,e,t){const i=Ce(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),a=o&&o.key;if(a){let c=new ot(ge.comparator);c=c.insert(a,Wt.newNoDocument(a,Ae.min()));const d=Ne().add(a),p=new mf(Ae.min(),new Map,new ot(De),c,d);await JE(i,p),i.Ba=i.Ba.remove(a),i.La.delete(e),em(i)}else await Yh(i.localStore,e,!1).then(()=>Jh(i,e,t)).catch(ea)}async function lR(n,e){const t=Ce(n),i=e.batch.batchId;try{const o=await yk(t.localStore,e);ew(t,i,null),ZE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Wl(t,o)}catch(o){await ea(o)}}async function uR(n,e,t){const i=Ce(n);try{const o=await function(c,d){const p=Ce(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>($e(T!==null),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);ew(i,e,t),ZE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Wl(i,o)}catch(o){await ea(o)}}function ZE(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function ew(n,e,t){const i=Ce(n);let o=i.qa[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function Jh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||tw(n,i)})}function tw(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Gp(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),em(n))}function ov(n,e,t){for(const i of t)i instanceof QE?(n.ka.addReference(i.key,e),cR(n,i)):i instanceof YE?(le("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||tw(n,i.key)):Ie()}function cR(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(le("SyncEngine","New document in limbo: "+t),n.Na.add(i),em(n))}function em(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ge(Ze.fromString(e)),i=n.Ka.next();n.La.set(i,new Zk(t)),n.Ba=n.Ba.insert(t,i),$E(n.remoteStore,new Ri(pr(hE(t.path)),i,"TargetPurposeLimboResolution",lf.oe))}}async function Wl(n,e,t){const i=Ce(n),o=[],a=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{c.push(i.Ua(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=qp.zi(p.targetId,y);a.push(T)}}))}),await Promise.all(c),i.Ma.R_(o),await async function(p,y){const v=Ce(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(y,I=>G.forEach(I.Wi,x=>v.persistence.referenceDelegate.addReference(T,I.targetId,x)).next(()=>G.forEach(I.Gi,x=>v.persistence.referenceDelegate.removeReference(T,I.targetId,x)))))}catch(T){if(!ta(T))throw T;le("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const x=v.us.get(I),V=x.snapshotVersion,B=x.withLastLimboFreeSnapshotVersion(V);v.us=v.us.insert(I,B)}}}(i.localStore,a))}async function fR(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const i=await UE(t.localStore,e);t.currentUser=e,function(a,c){a.Qa.forEach(d=>{d.forEach(p=>{p.reject(new fe(Y.CANCELLED,c))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Wl(t,i.Ts)}}function dR(n,e){const t=Ce(n),i=t.La.get(e);if(i&&i.Fa)return Ne().add(i.key);{let o=Ne();const a=t.Oa.get(e);if(!a)return o;for(const c of a){const d=t.xa.get(c);o=o.unionWith(d.view.fa)}return o}}function nw(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=JE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aR.bind(null,e),e.Ma.R_=Kk.bind(null,e.eventManager),e.Ma.Wa=Qk.bind(null,e.eventManager),e}function hR(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uR.bind(null,e),e}class Xc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gf(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return gk(this.persistence,new pk,e.initialUser,this.serializer)}ja(e){return new FE(Hp.ei,this.serializer)}za(e){return new Ik}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xc.provider={build:()=>new Xc};class pR extends Xc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){$e(this.persistence.referenceDelegate instanceof Qc);const i=this.persistence.referenceDelegate.garbageCollector;return new ZC(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new FE(i=>Qc.ei(i,t),this.serializer)}}class Zh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>sv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=fR.bind(null,this.syncEngine),await $k(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Hk}()}createDatastore(e){const t=gf(e.databaseInfo.databaseId),i=function(a){return new kk(a)}(e.databaseInfo);return function(a,c,d,p){return new xk(a,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,c,d){return new Nk(i,o,a,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>sv(this.syncEngine,t,0),function(){return ev.p()?new ev:new Sk}())}createSyncEngine(e,t){return function(o,a,c,d,p,y,v){const T=new eR(o,a,c,d,p,y);return v&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=Ce(o);le("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await $l(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Zh.provider={build:()=>new Zh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Hr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=rE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async c=>{le("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(le("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Jp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function _h(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await UE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function av(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yR(n);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>tv(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>tv(e.remoteStore,o)),n._onlineComponents=e}async function yR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await _h(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;$o("Error using user provided cache. Falling back to memory cache: "+t),await _h(n,new Xc)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await _h(n,new pR(void 0));return n._offlineComponents}async function rw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await av(n,n._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await av(n,new Zh))),n._onlineComponents}function _R(n){return rw(n).then(e=>e.syncEngine)}async function vR(n){const e=await rw(n),t=e.eventManager;return t.onListen=tR.bind(null,e.syncEngine),t.onUnlisten=iR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sR.bind(null,e.syncEngine),t}function ER(n,e,t={}){const i=new Oi;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,d,p,y){const v=new mR({next:I=>{v.eu(),c.enqueueAndForget(()=>Gk(a,T)),I.fromCache&&p.source==="server"?y.reject(new fe(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Yk(d,v,{includeMetadataChanges:!0,ua:!0});return qk(a,T)}(await vR(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n,e,t){if(!t)throw new fe(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wR(n,e,t,i){if(e===!0&&i===!0)throw new fe(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function uv(n){if(!ge.isDocumentKey(n))throw new fe(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cv(n){if(ge.isDocumentKey(n))throw new fe(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie()}function Rl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vf(n);throw new fe(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new fe(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ef{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new R2;switch(i.type){case"firstParty":return new N2(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=lv.get(t);i&&(le("ComponentProvider","Removing Datastore"),lv.delete(t),i.terminate())}(this),Promise.resolve()}}function TR(n,e,t,i={}){var o;const a=(n=Rl(n,Ef))._getSettings(),c=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==c&&$o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=$t.MOCK_USER;else{d=WT(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new fe(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $t(y)}n._authCredentials=new P2(new nE(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ra(this.firestore,e,this._query)}}class mn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Di extends ra{constructor(e,t,i){super(e,t,hE(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new ge(e))}withConverter(e){return new Di(this.firestore,e,this._path)}}function IR(n,e,...t){if(n=gn(n),sw("collection","path",e),n instanceof Ef){const i=Ze.fromString(e,...t);return cv(i),new Di(n,null,i)}{if(!(n instanceof mn||n instanceof Di))throw new fe(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ze.fromString(e,...t));return cv(i),new Di(n.firestore,null,i)}}function ow(n,e,...t){if(n=gn(n),arguments.length===1&&(e=rE.newId()),sw("doc","path",e),n instanceof Ef){const i=Ze.fromString(e,...t);return uv(i),new mn(n,null,new ge(i))}{if(!(n instanceof mn||n instanceof Di))throw new fe(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ze.fromString(e,...t));return uv(i),new mn(n.firestore,n instanceof Di?n.converter:null,new ge(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new zE(this,"async_queue_retry"),this.fu=()=>{const i=yh();i&&le("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=yh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=yh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Oi;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ta(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Hr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Xp.createAndSchedule(this,e,t,i,a=>this.Su(a));return this.Eu.push(o),o}pu(){this.Au&&Ie()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class tm extends Ef{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new dv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dv(e),this._firestoreClient=void 0,await e}}}function SR(n,e){const t=typeof n=="object"?n:d0(),i=typeof n=="string"?n:"(default)",o=Ap(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=BT("firestore");a&&TR(o,...a)}return o}function aw(n){if(n._terminated)throw new fe(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AR(n),n._firestoreClient}function AR(n){var e,t,i;const o=n._freezeSettings(),a=function(d,p,y,v){return new G2(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,iw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new gR(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qo(Lt.fromBase64String(e))}catch(t){throw new fe(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qo(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^__.*__$/;class kR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Os(e,this.data,this.fieldMask,t,this.fieldTransforms):new zl(e,this.data,t,this.fieldTransforms)}}function lw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class om{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new om(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Jc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(lw(this.Mu)&&CR.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class RR{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||gf(e)}$u(e,t,i,o=!1){return new om({Mu:e,methodName:t,Ku:i,path:Dt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uw(n){const e=n._freezeSettings(),t=gf(n._databaseId);return new RR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function PR(n,e,t,i,o,a={}){const c=n.$u(a.merge||a.mergeFields?2:0,e,t,o);dw("Data must be an object, but it was:",c,i);const d=cw(i,c);let p,y;if(a.merge)p=new Hn(c.fieldMask),y=c.fieldTransforms;else if(a.mergeFields){const v=[];for(const T of a.mergeFields){const I=bR(e,T,t);if(!c.contains(I))throw new fe(Y.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);OR(v,I)||v.push(I)}p=new Hn(v),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new kR(new Rn(d),p,y)}class am extends rm{_toFieldTransform(e){return new _C(e.path,new Al)}isEqual(e){return e instanceof am}}function xR(n,e,t,i=!1){return lm(t,n.$u(i?4:3,e))}function lm(n,e){if(fw(n=gn(n)))return dw("Unsupported field value:",e,n),cw(n,e);if(n instanceof rm)return function(i,o){if(!lw(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const a=[];let c=0;for(const d of i){let p=lm(d,o.ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=gn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return mC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=wt.fromDate(i);return{timestampValue:Kc(o.serializer,a)}}if(i instanceof wt){const a=new wt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Kc(o.serializer,a)}}if(i instanceof im)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Qo)return{bytesValue:bE(o.serializer,i._byteString)};if(i instanceof mn){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:$p(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof sm)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return jp(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${vf(i)}`)}(n,e)}function cw(n,e){const t={};return iE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(n,(i,o)=>{const a=lm(o,e.Ou(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function fw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof wt||n instanceof im||n instanceof Qo||n instanceof mn||n instanceof rm||n instanceof sm)}function dw(n,e,t){if(!fw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=vf(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function bR(n,e,t){if((e=gn(e))instanceof nm)return e._internalPath;if(typeof e=="string")return hw(n,e);throw Jc("Field path arguments must be of type string or ",n,!1,void 0,t)}const NR=new RegExp("[~\\*/\\[\\]]");function hw(n,e,t){if(e.search(NR)>=0)throw Jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nm(...e.split("."))._internalPath}catch{throw Jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jc(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||c)&&(p+=" (found",a&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new fe(Y.INVALID_ARGUMENT,d+n+p)}function OR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(um("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DR extends pw{data(){return super.data()}}function um(n,e){return typeof e=="string"?hw(n,e):e instanceof nm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cm{}class VR extends cm{}function MR(n,e,...t){let i=[];e instanceof cm&&i.push(e),i=i.concat(t),function(a){const c=a.filter(p=>p instanceof fm).length,d=a.filter(p=>p instanceof wf).length;if(c>1||c>0&&d>0)throw new fe(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class wf extends VR{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new wf(e,t,i)}_apply(e){const t=this._parse(e);return mw(e._query,t),new ra(e.firestore,e.converter,Wh(e._query,t))}_parse(e){const t=uw(e.firestore);return function(a,c,d,p,y,v,T){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new fe(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){pv(T,v);const x=[];for(const V of T)x.push(hv(p,a,V));I={arrayValue:{values:x}}}else I=hv(p,a,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||pv(T,v),I=xR(d,c,T,v==="in"||v==="not-in");return mt.create(y,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function FR(n,e,t){const i=e,o=um("where",n);return wf._create(o,i,t)}class fm extends cm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Gn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,a){let c=o;const d=a.getFlattenedFilters();for(const p of d)mw(c,p),c=Wh(c,p)}(e._query,t),new ra(e.firestore,e.converter,Wh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hv(n,e,t){if(typeof(t=gn(t))=="string"){if(t==="")throw new fe(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pE(e)&&t.indexOf("/")!==-1)throw new fe(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ze.fromString(t));if(!ge.isDocumentKey(i))throw new fe(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return D_(n,new ge(i))}if(t instanceof mn)return D_(n,t._key);throw new fe(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vf(t)}.`)}function pv(n,e){if(!Array.isArray(n)||n.length===0)throw new fe(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mw(n,e){const t=function(o,a){for(const c of o)for(const d of c.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new fe(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class UR{convertValue(e,t="none"){switch(Fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return bs(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>ft(c.doubleValue));return new sm(a)}convertGeoPoint(e){return new im(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=cf(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Tl(e));default:return null}}convertTimestamp(e){const t=Vi(e);return new wt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ze.fromString(e);$e(ME(i));const o=new Il(i.get(1),i.get(3)),a=new ge(i.popFirst(5));return o.isEqual(t)||Hr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zR extends pw{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(um("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class bc extends zR{data(e={}){return super.data(e)}}class BR{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new _c(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new bc(this._firestore,this._userDataWriter,i.key,i,new _c(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new bc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new _c(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const p=new bc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new _c(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:$R(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function $R(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}class WR extends UR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,t)}}function HR(n){n=Rl(n,ra);const e=Rl(n.firestore,tm),t=aw(e),i=new WR(e);return LR(n._query),ER(t,n._query).then(o=>new BR(e,i,n,o))}function gw(n,e,t){n=Rl(n,mn);const i=Rl(n.firestore,tm),o=jR(n.converter,e);return qR(i,[PR(uw(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,zr.none())])}function qR(n,e){return function(i,o){const a=new Oi;return i.asyncQueue.enqueueAndForget(async()=>oR(await _R(i),o,a)),a.promise}(aw(n),e)}function yw(){return new am("serverTimestamp")}(function(e,t=!0){(function(o){Zo=o})(Xo),Bo(new Ss("firestore",(i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),d=new tm(new x2(i.getProvider("auth-internal")),new D2(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new fe(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Il(y.options.projectId,v)}(c,o),c);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),bi(R_,"4.7.6",e),bi(R_,"4.7.6","esm2017")})();const GR="AIzaSyAtM1qtE-DiF-nOKi6jeVxImh4K9GYRAgg",KR={apiKey:GR,authDomain:"my-project-9af00.firebaseapp.com",projectId:"my-project-9af00",storageBucket:"my-project-9af00.firebasestorage.app",messagingSenderId:"242195969728",appId:"1:242195969728:web:73cd2505edd8acb97b5f25"},QR=f0(KR),dm=SR(QR),_w=C2(),YR=(n,e)=>{switch(e.type){case"LOGIN":return{currentUser:e.payload};case"LOGOUT":return{currentUser:null};default:return n}},vw={currentUser:JSON.parse(localStorage.getItem("user"))||null},Ls=W.createContext(vw),XR=({children:n})=>{const[e,t]=W.useReducer(YR,vw);return W.useEffect(()=>{localStorage.setItem("user",JSON.stringify(e.currentUser))},[e.currentUser]),S.jsx(Ls.Provider,{value:{currentUser:e.currentUser,dispatch:t},children:n})},JR="_body_1crc7_15",ZR="_container_1crc7_31",eP="_logo_1crc7_51",tP="_heading_1crc7_73",nP="_row_1crc7_83",rP="_iconContainer_1crc7_107",iP="_icon_1crc7_107",on={body:JR,container:ZR,logo:eP,heading:tP,row:nP,iconContainer:rP,icon:iP};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function sP(n,e,t){return(e=aP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function mv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function te(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mv(Object(t),!0).forEach(function(i){sP(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):mv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function oP(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function aP(n){var e=oP(n,"string");return typeof e=="symbol"?e:e+""}const gv=()=>{};let hm={},Ew={},ww=null,Tw={mark:gv,measure:gv};try{typeof window<"u"&&(hm=window),typeof document<"u"&&(Ew=document),typeof MutationObserver<"u"&&(ww=MutationObserver),typeof performance<"u"&&(Tw=performance)}catch{}const{userAgent:yv=""}=hm.navigator||{},ji=hm,et=Ew,_v=ww,vc=Tw;ji.document;const Yr=!!et.documentElement&&!!et.head&&typeof et.addEventListener=="function"&&typeof et.createElement=="function",Iw=~yv.indexOf("MSIE")||~yv.indexOf("Trident/");var lP=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,uP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Sw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},cP={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Aw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],qt="classic",Tf="duotone",fP="sharp",dP="sharp-duotone",Cw=[qt,Tf,fP,dP],hP={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},pP={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},mP=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),gP={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},yP=["fak","fa-kit","fakd","fa-kit-duotone"],vv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_P=["kit"],vP={kit:{"fa-kit":"fak"}},EP=["fak","fakd"],wP={kit:{fak:"fa-kit"}},Ev={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ec={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},TP=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],IP=["fak","fa-kit","fakd","fa-kit-duotone"],SP={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},AP={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},CP={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ep={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},kP=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],tp=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...TP,...kP],RP=["solid","regular","light","thin","duotone","brands"],kw=[1,2,3,4,5,6,7,8,9,10],PP=kw.concat([11,12,13,14,15,16,17,18,19,20]),xP=[...Object.keys(CP),...RP,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ec.GROUP,Ec.SWAP_OPACITY,Ec.PRIMARY,Ec.SECONDARY].concat(kw.map(n=>"".concat(n,"x"))).concat(PP.map(n=>"w-".concat(n))),bP={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Gr="___FONT_AWESOME___",np=16,Rw="fa",Pw="svg-inline--fa",Rs="data-fa-i2svg",rp="data-fa-pseudo-element",NP="data-fa-pseudo-element-pending",pm="data-prefix",mm="data-icon",wv="fontawesome-i2svg",OP="async",DP=["HTML","HEAD","STYLE","SCRIPT"],xw=(()=>{try{return!0}catch{return!1}})();function Hl(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[qt]}})}const bw=te({},Sw);bw[qt]=te(te(te(te({},{"fa-duotone":"duotone"}),Sw[qt]),vv.kit),vv["kit-duotone"]);const LP=Hl(bw),ip=te({},gP);ip[qt]=te(te(te(te({},{duotone:"fad"}),ip[qt]),Ev.kit),Ev["kit-duotone"]);const Tv=Hl(ip),sp=te({},ep);sp[qt]=te(te({},sp[qt]),wP.kit);const gm=Hl(sp),op=te({},AP);op[qt]=te(te({},op[qt]),vP.kit);Hl(op);const VP=lP,Nw="fa-layers-text",MP=uP,FP=te({},hP);Hl(FP);const UP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vh=cP,jP=[..._P,...xP],yl=ji.FontAwesomeConfig||{};function zP(n){var e=et.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function BP(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}et&&typeof et.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const o=BP(zP(t));o!=null&&(yl[i]=o)});const Ow={styleDefault:"solid",familyDefault:qt,cssPrefix:Rw,replacementClass:Pw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yl.familyPrefix&&(yl.cssPrefix=yl.familyPrefix);const Yo=te(te({},Ow),yl);Yo.autoReplaceSvg||(Yo.observeMutations=!1);const pe={};Object.keys(Ow).forEach(n=>{Object.defineProperty(pe,n,{enumerable:!0,set:function(e){Yo[n]=e,_l.forEach(t=>t(pe))},get:function(){return Yo[n]}})});Object.defineProperty(pe,"familyPrefix",{enumerable:!0,set:function(n){Yo.cssPrefix=n,_l.forEach(e=>e(pe))},get:function(){return Yo.cssPrefix}});ji.FontAwesomeConfig=pe;const _l=[];function $P(n){return _l.push(n),()=>{_l.splice(_l.indexOf(n),1)}}const Ii=np,cr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WP(n){if(!n||!Yr)return;const e=et.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=et.head.childNodes;let i=null;for(let o=t.length-1;o>-1;o--){const a=t[o],c=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(i=a)}return et.head.insertBefore(e,i),n}const HP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pl(){let n=12,e="";for(;n-- >0;)e+=HP[Math.random()*62|0];return e}function ia(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function ym(n){return n.classList?ia(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function Dw(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qP(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(Dw(n[t]),'" '),"").trim()}function If(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function _m(n){return n.size!==cr.size||n.x!==cr.x||n.y!==cr.y||n.rotate!==cr.rotate||n.flipX||n.flipY}function GP(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const o={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(a," ").concat(c," ").concat(d)},y={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:p,path:y}}function KP(n){let{transform:e,width:t=np,height:i=np,startCentered:o=!1}=n,a="";return o&&Iw?a+="translate(".concat(e.x/Ii-t/2,"em, ").concat(e.y/Ii-i/2,"em) "):o?a+="translate(calc(-50% + ".concat(e.x/Ii,"em), calc(-50% + ").concat(e.y/Ii,"em)) "):a+="translate(".concat(e.x/Ii,"em, ").concat(e.y/Ii,"em) "),a+="scale(".concat(e.size/Ii*(e.flipX?-1:1),", ").concat(e.size/Ii*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var QP=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Lw(){const n=Rw,e=Pw,t=pe.cssPrefix,i=pe.replacementClass;let o=QP;if(t!==n||i!==e){const a=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");o=o.replace(a,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(d,".".concat(i))}return o}let Iv=!1;function Eh(){pe.autoAddCss&&!Iv&&(WP(Lw()),Iv=!0)}var YP={mixout(){return{dom:{css:Lw,insertCss:Eh}}},hooks(){return{beforeDOMElementCreation(){Eh()},beforeI2svg(){Eh()}}}};const Kr=ji||{};Kr[Gr]||(Kr[Gr]={});Kr[Gr].styles||(Kr[Gr].styles={});Kr[Gr].hooks||(Kr[Gr].hooks={});Kr[Gr].shims||(Kr[Gr].shims=[]);var fr=Kr[Gr];const Vw=[],Mw=function(){et.removeEventListener("DOMContentLoaded",Mw),Zc=1,Vw.map(n=>n())};let Zc=!1;Yr&&(Zc=(et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(et.readyState),Zc||et.addEventListener("DOMContentLoaded",Mw));function XP(n){Yr&&(Zc?setTimeout(n,0):Vw.push(n))}function ql(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?Dw(n):"<".concat(e," ").concat(qP(t),">").concat(i.map(ql).join(""),"</").concat(e,">")}function Sv(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var wh=function(e,t,i,o){var a=Object.keys(e),c=a.length,d=t,p,y,v;for(i===void 0?(p=1,v=e[a[0]]):(p=0,v=i);p<c;p++)y=a[p],v=d(v,e[y],y,e);return v};function JP(n){const e=[];let t=0;const i=n.length;for(;t<i;){const o=n.charCodeAt(t++);if(o>=55296&&o<=56319&&t<i){const a=n.charCodeAt(t++);(a&64512)==56320?e.push(((o&1023)<<10)+(a&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function ap(n){const e=JP(n);return e.length===1?e[0].toString(16):null}function ZP(n,e){const t=n.length;let i=n.charCodeAt(e),o;return i>=55296&&i<=56319&&t>e+1&&(o=n.charCodeAt(e+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function Av(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function lp(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,o=Av(e);typeof fr.hooks.addPack=="function"&&!i?fr.hooks.addPack(n,Av(e)):fr.styles[n]=te(te({},fr.styles[n]||{}),o),n==="fas"&&lp("fa",e)}const{styles:xl,shims:ex}=fr,Fw=Object.keys(gm),tx=Fw.reduce((n,e)=>(n[e]=Object.keys(gm[e]),n),{});let vm=null,Uw={},jw={},zw={},Bw={},$w={};function nx(n){return~jP.indexOf(n)}function rx(n,e){const t=e.split("-"),i=t[0],o=t.slice(1).join("-");return i===n&&o!==""&&!nx(o)?o:null}const Ww=()=>{const n=i=>wh(xl,(o,a,c)=>(o[c]=wh(a,i,{}),o),{});Uw=n((i,o,a)=>(o[3]&&(i[o[3]]=a),o[2]&&o[2].filter(d=>typeof d=="number").forEach(d=>{i[d.toString(16)]=a}),i)),jw=n((i,o,a)=>(i[a]=a,o[2]&&o[2].filter(d=>typeof d=="string").forEach(d=>{i[d]=a}),i)),$w=n((i,o,a)=>{const c=o[2];return i[a]=a,c.forEach(d=>{i[d]=a}),i});const e="far"in xl||pe.autoFetchSvg,t=wh(ex,(i,o)=>{const a=o[0];let c=o[1];const d=o[2];return c==="far"&&!e&&(c="fas"),typeof a=="string"&&(i.names[a]={prefix:c,iconName:d}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:c,iconName:d}),i},{names:{},unicodes:{}});zw=t.names,Bw=t.unicodes,vm=Sf(pe.styleDefault,{family:pe.familyDefault})};$P(n=>{vm=Sf(n.styleDefault,{family:pe.familyDefault})});Ww();function Em(n,e){return(Uw[n]||{})[e]}function ix(n,e){return(jw[n]||{})[e]}function Is(n,e){return($w[n]||{})[e]}function Hw(n){return zw[n]||{prefix:null,iconName:null}}function sx(n){const e=Bw[n],t=Em("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function zi(){return vm}const qw=()=>({prefix:null,iconName:null,rest:[]});function ox(n){let e=qt;const t=Fw.reduce((i,o)=>(i[o]="".concat(pe.cssPrefix,"-").concat(o),i),{});return Cw.forEach(i=>{(n.includes(t[i])||n.some(o=>tx[i].includes(o)))&&(e=i)}),e}function Sf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=qt}=e,i=LP[t][n];if(t===Tf&&!n)return"fad";const o=Tv[t][n]||Tv[t][i],a=n in fr.styles?n:null;return o||a||null}function ax(n){let e=[],t=null;return n.forEach(i=>{const o=rx(pe.cssPrefix,i);o?t=o:i&&e.push(i)}),{iconName:t,rest:e}}function Cv(n){return n.sort().filter((e,t,i)=>i.indexOf(e)===t)}function Af(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let i=null;const o=tp.concat(IP),a=Cv(n.filter(T=>o.includes(T))),c=Cv(n.filter(T=>!tp.includes(T))),d=a.filter(T=>(i=T,!Aw.includes(T))),[p=null]=d,y=ox(a),v=te(te({},ax(c)),{},{prefix:Sf(p,{family:y})});return te(te(te({},v),fx({values:n,family:y,styles:xl,config:pe,canonical:v,givenPrefix:i})),lx(t,i,v))}function lx(n,e,t){let{prefix:i,iconName:o}=t;if(n||!i||!o)return{prefix:i,iconName:o};const a=e==="fa"?Hw(o):{},c=Is(i,o);return o=a.iconName||c||o,i=a.prefix||i,i==="far"&&!xl.far&&xl.fas&&!pe.autoFetchSvg&&(i="fas"),{prefix:i,iconName:o}}const ux=Cw.filter(n=>n!==qt||n!==Tf),cx=Object.keys(ep).filter(n=>n!==qt).map(n=>Object.keys(ep[n])).flat();function fx(n){const{values:e,family:t,canonical:i,givenPrefix:o="",styles:a={},config:c={}}=n,d=t===Tf,p=e.includes("fa-duotone")||e.includes("fad"),y=c.familyDefault==="duotone",v=i.prefix==="fad"||i.prefix==="fa-duotone";if(!d&&(p||y||v)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&ux.includes(t)&&(Object.keys(a).find(I=>cx.includes(I))||c.autoFetchSvg)){const I=mP.get(t).defaultShortPrefixId;i.prefix=I,i.iconName=Is(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||o==="fa")&&(i.prefix=zi()||"fas"),i}class dx{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(a=>{this.definitions[a]=te(te({},this.definitions[a]||{}),o[a]),lp(a,o[a]);const c=gm[qt][a];c&&lp(c,o[a]),Ww()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(o=>{const{prefix:a,iconName:c,icon:d}=i[o],p=d[2];e[a]||(e[a]={}),p.length>0&&p.forEach(y=>{typeof y=="string"&&(e[a][y]=d)}),e[a][c]=d}),e}}let kv=[],Lo={};const zo={},hx=Object.keys(zo);function px(n,e){let{mixoutsTo:t}=e;return kv=n,Lo={},Object.keys(zo).forEach(i=>{hx.indexOf(i)===-1&&delete zo[i]}),kv.forEach(i=>{const o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(a=>{typeof o[a]=="function"&&(t[a]=o[a]),typeof o[a]=="object"&&Object.keys(o[a]).forEach(c=>{t[a]||(t[a]={}),t[a][c]=o[a][c]})}),i.hooks){const a=i.hooks();Object.keys(a).forEach(c=>{Lo[c]||(Lo[c]=[]),Lo[c].push(a[c])})}i.provides&&i.provides(zo)}),t}function up(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),o=2;o<t;o++)i[o-2]=arguments[o];return(Lo[n]||[]).forEach(c=>{e=c.apply(null,[e,...i])}),e}function Ps(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Lo[n]||[]).forEach(a=>{a.apply(null,t)})}function Bi(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return zo[n]?zo[n].apply(null,e):void 0}function cp(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||zi();if(e)return e=Is(t,e)||e,Sv(Gw.definitions,t,e)||Sv(fr.styles,t,e)}const Gw=new dx,mx=()=>{pe.autoReplaceSvg=!1,pe.observeMutations=!1,Ps("noAuto")},gx={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yr?(Ps("beforeI2svg",n),Bi("pseudoElements2svg",n),Bi("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;pe.autoReplaceSvg===!1&&(pe.autoReplaceSvg=!0),pe.observeMutations=!0,XP(()=>{_x({autoReplaceSvgRoot:e}),Ps("watch",n)})}},yx={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Is(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Sf(n[0]);return{prefix:t,iconName:Is(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(pe.cssPrefix,"-"))>-1||n.match(VP))){const e=Af(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||zi(),iconName:Is(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=zi();return{prefix:e,iconName:Is(e,n)||n}}}},yn={noAuto:mx,config:pe,dom:gx,parse:yx,library:Gw,findIconDefinition:cp,toHtml:ql},_x=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=et}=n;(Object.keys(fr.styles).length>0||pe.autoFetchSvg)&&Yr&&pe.autoReplaceSvg&&yn.dom.i2svg({node:e})};function Cf(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>ql(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Yr)return;const t=et.createElement("div");return t.innerHTML=n.html,t.children}}),n}function vx(n){let{children:e,main:t,mask:i,attributes:o,styles:a,transform:c}=n;if(_m(c)&&t.found&&!i.found){const{width:d,height:p}=t,y={x:d/p/2,y:.5};o.style=If(te(te({},a),{},{"transform-origin":"".concat(y.x+c.x/16,"em ").concat(y.y+c.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function Ex(n){let{prefix:e,iconName:t,children:i,attributes:o,symbol:a}=n;const c=a===!0?"".concat(e,"-").concat(pe.cssPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:te(te({},o),{},{id:c}),children:i}]}]}function wm(n){const{icons:{main:e,mask:t},prefix:i,iconName:o,transform:a,symbol:c,title:d,maskId:p,titleId:y,extra:v,watchable:T=!1}=n,{width:I,height:x}=t.found?t:e,V=EP.includes(i),B=[pe.replacementClass,o?"".concat(pe.cssPrefix,"-").concat(o):""].filter(Ee=>v.classes.indexOf(Ee)===-1).filter(Ee=>Ee!==""||!!Ee).concat(v.classes).join(" ");let D={children:[],attributes:te(te({},v.attributes),{},{"data-prefix":i,"data-icon":o,class:B,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(x)})};const q=V&&!~v.classes.indexOf("fa-fw")?{width:"".concat(I/x*16*.0625,"em")}:{};T&&(D.attributes[Rs]=""),d&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(y||Pl())},children:[d]}),delete D.attributes.title);const J=te(te({},D),{},{prefix:i,iconName:o,main:e,mask:t,maskId:p,transform:a,symbol:c,styles:te(te({},q),v.styles)}),{children:Q,attributes:oe}=t.found&&e.found?Bi("generateAbstractMask",J)||{children:[],attributes:{}}:Bi("generateAbstractIcon",J)||{children:[],attributes:{}};return J.children=Q,J.attributes=oe,c?Ex(J):vx(J)}function Rv(n){const{content:e,width:t,height:i,transform:o,title:a,extra:c,watchable:d=!1}=n,p=te(te(te({},c.attributes),a?{title:a}:{}),{},{class:c.classes.join(" ")});d&&(p[Rs]="");const y=te({},c.styles);_m(o)&&(y.transform=KP({transform:o,startCentered:!0,width:t,height:i}),y["-webkit-transform"]=y.transform);const v=If(y);v.length>0&&(p.style=v);const T=[];return T.push({tag:"span",attributes:p,children:[e]}),a&&T.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),T}function wx(n){const{content:e,title:t,extra:i}=n,o=te(te(te({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),a=If(i.styles);a.length>0&&(o.style=a);const c=[];return c.push({tag:"span",attributes:o,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:Th}=fr;function fp(n){const e=n[0],t=n[1],[i]=n.slice(4);let o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(pe.cssPrefix,"-").concat(vh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(vh.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(vh.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:o}}const Tx={found:!1,width:512,height:512};function Ix(n,e){!xw&&!pe.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function dp(n,e){let t=e;return e==="fa"&&pe.styleDefault!==null&&(e=zi()),new Promise((i,o)=>{if(t==="fa"){const a=Hw(n)||{};n=a.iconName||n,e=a.prefix||e}if(n&&e&&Th[e]&&Th[e][n]){const a=Th[e][n];return i(fp(a))}Ix(n,e),i(te(te({},Tx),{},{icon:pe.showMissingIcons&&n?Bi("missingIconAbstract")||{}:{}}))})}const Pv=()=>{},hp=pe.measurePerformance&&vc&&vc.mark&&vc.measure?vc:{mark:Pv,measure:Pv},fl='FA "6.7.2"',Sx=n=>(hp.mark("".concat(fl," ").concat(n," begins")),()=>Kw(n)),Kw=n=>{hp.mark("".concat(fl," ").concat(n," ends")),hp.measure("".concat(fl," ").concat(n),"".concat(fl," ").concat(n," begins"),"".concat(fl," ").concat(n," ends"))};var Tm={begin:Sx,end:Kw};const Nc=()=>{};function xv(n){return typeof(n.getAttribute?n.getAttribute(Rs):null)=="string"}function Ax(n){const e=n.getAttribute?n.getAttribute(pm):null,t=n.getAttribute?n.getAttribute(mm):null;return e&&t}function Cx(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(pe.replacementClass)}function kx(){return pe.autoReplaceSvg===!0?Oc.replace:Oc[pe.autoReplaceSvg]||Oc.replace}function Rx(n){return et.createElementNS("http://www.w3.org/2000/svg",n)}function Px(n){return et.createElement(n)}function Qw(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?Rx:Px}=e;if(typeof n=="string")return et.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(a){i.setAttribute(a,n.attributes[a])}),(n.children||[]).forEach(function(a){i.appendChild(Qw(a,{ceFn:t}))}),i}function xx(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Oc={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(Qw(t),e)}),e.getAttribute(Rs)===null&&pe.keepOriginalSource){let t=et.createComment(xx(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~ym(e).indexOf(pe.replacementClass))return Oc.replace(n);const i=new RegExp("".concat(pe.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const a=t[0].attributes.class.split(" ").reduce((c,d)=>(d===pe.replacementClass||d.match(i)?c.toSvg.push(d):c.toNode.push(d),c),{toNode:[],toSvg:[]});t[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}const o=t.map(a=>ql(a)).join(`
`);e.setAttribute(Rs,""),e.innerHTML=o}};function bv(n){n()}function Yw(n,e){const t=typeof e=="function"?e:Nc;if(n.length===0)t();else{let i=bv;pe.mutateApproach===OP&&(i=ji.requestAnimationFrame||bv),i(()=>{const o=kx(),a=Tm.begin("mutate");n.map(o),a(),t()})}}let Im=!1;function Xw(){Im=!0}function pp(){Im=!1}let ef=null;function Nv(n){if(!_v||!pe.observeMutations)return;const{treeCallback:e=Nc,nodeCallback:t=Nc,pseudoElementsCallback:i=Nc,observeMutationsRoot:o=et}=n;ef=new _v(a=>{if(Im)return;const c=zi();ia(a).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!xv(d.addedNodes[0])&&(pe.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&pe.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&xv(d.target)&&~UP.indexOf(d.attributeName))if(d.attributeName==="class"&&Ax(d.target)){const{prefix:p,iconName:y}=Af(ym(d.target));d.target.setAttribute(pm,p||c),y&&d.target.setAttribute(mm,y)}else Cx(d.target)&&t(d.target)})}),Yr&&ef.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bx(){ef&&ef.disconnect()}function Nx(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,o)=>{const a=o.split(":"),c=a[0],d=a.slice(1);return c&&d.length>0&&(i[c]=d.join(":").trim()),i},{})),t}function Ox(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let o=Af(ym(n));return o.prefix||(o.prefix=zi()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=ix(o.prefix,n.innerText)||Em(o.prefix,ap(n.innerText))),!o.iconName&&pe.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function Dx(n){const e=ia(n.attributes).reduce((o,a)=>(o.name!=="class"&&o.name!=="style"&&(o[a.name]=a.value),o),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return pe.autoA11y&&(t?e["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(i||Pl()):(e["aria-hidden"]="true",e.focusable="false")),e}function Lx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:cr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ov(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:o}=Ox(n),a=Dx(n),c=up("parseNodeAttributes",{},n);let d=e.styleParser?Nx(n):[];return te({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:cr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:d,attributes:a}},c)}const{styles:Vx}=fr;function Jw(n){const e=pe.autoReplaceSvg==="nest"?Ov(n,{styleParser:!1}):Ov(n);return~e.extra.classes.indexOf(Nw)?Bi("generateLayersText",n,e):Bi("generateSvgReplacementMutation",n,e)}function Mx(){return[...yP,...tp]}function Dv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yr)return Promise.resolve();const t=et.documentElement.classList,i=v=>t.add("".concat(wv,"-").concat(v)),o=v=>t.remove("".concat(wv,"-").concat(v)),a=pe.autoFetchSvg?Mx():Aw.concat(Object.keys(Vx));a.includes("fa")||a.push("fa");const c=[".".concat(Nw,":not([").concat(Rs,"])")].concat(a.map(v=>".".concat(v,":not([").concat(Rs,"])"))).join(", ");if(c.length===0)return Promise.resolve();let d=[];try{d=ia(n.querySelectorAll(c))}catch{}if(d.length>0)i("pending"),o("complete");else return Promise.resolve();const p=Tm.begin("onTree"),y=d.reduce((v,T)=>{try{const I=Jw(T);I&&v.push(I)}catch(I){xw||I.name==="MissingIcon"&&console.error(I)}return v},[]);return new Promise((v,T)=>{Promise.all(y).then(I=>{Yw(I,()=>{i("active"),i("complete"),o("pending"),typeof e=="function"&&e(),p(),v()})}).catch(I=>{p(),T(I)})})}function Fx(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jw(n).then(t=>{t&&Yw([t],e)})}function Ux(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:cp(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:cp(o||{})),n(i,te(te({},t),{},{mask:o}))}}const jx=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=cr,symbol:i=!1,mask:o=null,maskId:a=null,title:c=null,titleId:d=null,classes:p=[],attributes:y={},styles:v={}}=e;if(!n)return;const{prefix:T,iconName:I,icon:x}=n;return Cf(te({type:"icon"},n),()=>(Ps("beforeDOMElementCreation",{iconDefinition:n,params:e}),pe.autoA11y&&(c?y["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(d||Pl()):(y["aria-hidden"]="true",y.focusable="false")),wm({icons:{main:fp(x),mask:o?fp(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:I,transform:te(te({},cr),t),symbol:i,title:c,maskId:a,titleId:d,extra:{attributes:y,styles:v,classes:p}})))};var zx={mixout(){return{icon:Ux(jx)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=Dv,n.nodeCallback=Fx,n}}},provides(n){n.i2svg=function(e){const{node:t=et,callback:i=()=>{}}=e;return Dv(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:o,titleId:a,prefix:c,transform:d,symbol:p,mask:y,maskId:v,extra:T}=t;return new Promise((I,x)=>{Promise.all([dp(i,c),y.iconName?dp(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(V=>{let[B,D]=V;I([e,wm({icons:{main:B,mask:D},prefix:c,iconName:i,transform:d,symbol:p,maskId:v,title:o,titleId:a,extra:T,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:o,transform:a,styles:c}=e;const d=If(c);d.length>0&&(i.style=d);let p;return _m(a)&&(p=Bi("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),t.push(p||o.icon),{children:t,attributes:i}}}},Bx={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Cf({type:"layer"},()=>{Ps("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(o=>{Array.isArray(o)?o.map(a=>{i=i.concat(a.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(pe.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},$x={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:o={},styles:a={}}=e;return Cf({type:"counter",content:n},()=>(Ps("beforeDOMElementCreation",{content:n,params:e}),wx({content:n.toString(),title:t,extra:{attributes:o,styles:a,classes:["".concat(pe.cssPrefix,"-layers-counter"),...i]}})))}}}},Wx={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=cr,title:i=null,classes:o=[],attributes:a={},styles:c={}}=e;return Cf({type:"text",content:n},()=>(Ps("beforeDOMElementCreation",{content:n,params:e}),Rv({content:n,transform:te(te({},cr),t),title:i,extra:{attributes:a,styles:c,classes:["".concat(pe.cssPrefix,"-layers-text"),...o]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:o,extra:a}=t;let c=null,d=null;if(Iw){const p=parseInt(getComputedStyle(e).fontSize,10),y=e.getBoundingClientRect();c=y.width/p,d=y.height/p}return pe.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,Rv({content:e.innerHTML,width:c,height:d,transform:o,title:i,extra:a,watchable:!0})])}}};const Hx=new RegExp('"',"ug"),Lv=[1105920,1112319],Vv=te(te(te(te({},{FontAwesome:{normal:"fas",400:"fas"}}),pP),bP),SP),mp=Object.keys(Vv).reduce((n,e)=>(n[e.toLowerCase()]=Vv[e],n),{}),qx=Object.keys(mp).reduce((n,e)=>{const t=mp[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function Gx(n){const e=n.replace(Hx,""),t=ZP(e,0),i=t>=Lv[0]&&t<=Lv[1],o=e.length===2?e[0]===e[1]:!1;return{value:ap(o?e[0]:e),isSecondary:i||o}}function Kx(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),o=isNaN(i)?"normal":i;return(mp[t]||{})[o]||qx[t]}function Mv(n,e){const t="".concat(NP).concat(e.replace(":","-"));return new Promise((i,o)=>{if(n.getAttribute(t)!==null)return i();const c=ia(n.children).filter(I=>I.getAttribute(rp)===e)[0],d=ji.getComputedStyle(n,e),p=d.getPropertyValue("font-family"),y=p.match(MP),v=d.getPropertyValue("font-weight"),T=d.getPropertyValue("content");if(c&&!y)return n.removeChild(c),i();if(y&&T!=="none"&&T!==""){const I=d.getPropertyValue("content");let x=Kx(p,v);const{value:V,isSecondary:B}=Gx(I),D=y[0].startsWith("FontAwesome");let q=Em(x,V),J=q;if(D){const Q=sx(V);Q.iconName&&Q.prefix&&(q=Q.iconName,x=Q.prefix)}if(q&&!B&&(!c||c.getAttribute(pm)!==x||c.getAttribute(mm)!==J)){n.setAttribute(t,J),c&&n.removeChild(c);const Q=Lx(),{extra:oe}=Q;oe.attributes[rp]=e,dp(q,x).then(Ee=>{const Se=wm(te(te({},Q),{},{icons:{main:Ee,mask:qw()},prefix:x,iconName:J,extra:oe,watchable:!0})),N=et.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(N,n.firstChild):n.appendChild(N),N.outerHTML=Se.map(A=>ql(A)).join(`
`),n.removeAttribute(t),i()}).catch(o)}else i()}else i()})}function Qx(n){return Promise.all([Mv(n,"::before"),Mv(n,"::after")])}function Yx(n){return n.parentNode!==document.head&&!~DP.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(rp)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Fv(n){if(Yr)return new Promise((e,t)=>{const i=ia(n.querySelectorAll("*")).filter(Yx).map(Qx),o=Tm.begin("searchPseudoElements");Xw(),Promise.all(i).then(()=>{o(),pp(),e()}).catch(()=>{o(),pp(),t()})})}var Xx={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=Fv,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=et}=e;pe.searchPseudoElements&&Fv(t)}}};let Uv=!1;var Jx={mixout(){return{dom:{unwatch(){Xw(),Uv=!0}}}},hooks(){return{bootstrap(){Nv(up("mutationObserverCallbacks",{}))},noAuto(){bx()},watch(n){const{observeMutationsRoot:e}=n;Uv?pp():Nv(up("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const jv=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const o=i.toLowerCase().split("-"),a=o[0];let c=o.slice(1).join("-");if(a&&c==="h")return t.flipX=!0,t;if(a&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(a){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var Zx={mixout(){return{parse:{transform:n=>jv(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=jv(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:o,iconWidth:a}=e;const c={transform:"translate(".concat(o/2," 256)")},d="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),y="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(d," ").concat(p," ").concat(y)},T={transform:"translate(".concat(a/2*-1," -256)")},I={outer:c,inner:v,path:T};return{tag:"g",attributes:te({},I.outer),children:[{tag:"g",attributes:te({},I.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:te(te({},t.icon.attributes),I.path)}]}]}}}};const Ih={x:0,y:0,width:"100%",height:"100%"};function zv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function eb(n){return n.tag==="g"?n.children:[n]}var tb={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?Af(t.split(" ").map(o=>o.trim())):qw();return i.prefix||(i.prefix=zi()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:o,mask:a,maskId:c,transform:d}=e;const{width:p,icon:y}=o,{width:v,icon:T}=a,I=GP({transform:d,containerWidth:v,iconWidth:p}),x={tag:"rect",attributes:te(te({},Ih),{},{fill:"white"})},V=y.children?{children:y.children.map(zv)}:{},B={tag:"g",attributes:te({},I.inner),children:[zv(te({tag:y.tag,attributes:te(te({},y.attributes),I.path)},V))]},D={tag:"g",attributes:te({},I.outer),children:[B]},q="mask-".concat(c||Pl()),J="clip-".concat(c||Pl()),Q={tag:"mask",attributes:te(te({},Ih),{},{id:q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,D]},oe={tag:"defs",children:[{tag:"clipPath",attributes:{id:J},children:eb(T)},Q]};return t.push(oe,{tag:"rect",attributes:te({fill:"currentColor","clip-path":"url(#".concat(J,")"),mask:"url(#".concat(q,")")},Ih)}),{children:t,attributes:i}}}},nb={provides(n){let e=!1;ji.matchMedia&&(e=ji.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:te(te({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=te(te({},o),{},{attributeName:"opacity"}),c={tag:"circle",attributes:te(te({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:te(te({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:te(te({},a),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:te(te({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:te(te({},a),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:te(te({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:te(te({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},rb={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},ib=[YP,zx,Bx,$x,Wx,Xx,Jx,Zx,tb,nb,rb];px(ib,{mixoutsTo:yn});yn.noAuto;yn.config;yn.library;yn.dom;const gp=yn.parse;yn.findIconDefinition;yn.toHtml;const sb=yn.icon;yn.layer;yn.text;yn.counter;var Sh={exports:{}},Ah,Bv;function ob(){if(Bv)return Ah;Bv=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ah=n,Ah}var Ch,$v;function ab(){if($v)return Ch;$v=1;var n=ob();function e(){}function t(){}return t.resetWarningCache=e,Ch=function(){function i(c,d,p,y,v,T){if(T!==n){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}i.isRequired=i;function o(){return i}var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},Ch}var Wv;function lb(){return Wv||(Wv=1,Sh.exports=ab()()),Sh.exports}var ub=lb();const xe=t0(ub);function Hv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function lr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Hv(Object(t),!0).forEach(function(i){Vo(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Hv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function tf(n){"@babel/helpers - typeof";return tf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tf(n)}function Vo(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cb(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function fb(n,e){if(n==null)return{};var t=cb(n,e),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)i=a[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function yp(n){return db(n)||hb(n)||pb(n)||mb()}function db(n){if(Array.isArray(n))return _p(n)}function hb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function pb(n,e){if(n){if(typeof n=="string")return _p(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _p(n,e)}}function _p(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function mb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gb(n){var e,t=n.beat,i=n.fade,o=n.beatFade,a=n.bounce,c=n.shake,d=n.flash,p=n.spin,y=n.spinPulse,v=n.spinReverse,T=n.pulse,I=n.fixedWidth,x=n.inverse,V=n.border,B=n.listItem,D=n.flip,q=n.size,J=n.rotation,Q=n.pull,oe=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":c,"fa-flash":d,"fa-spin":p,"fa-spin-reverse":v,"fa-spin-pulse":y,"fa-pulse":T,"fa-fw":I,"fa-inverse":x,"fa-border":V,"fa-li":B,"fa-flip":D===!0,"fa-flip-horizontal":D==="horizontal"||D==="both","fa-flip-vertical":D==="vertical"||D==="both"},Vo(e,"fa-".concat(q),typeof q<"u"&&q!==null),Vo(e,"fa-rotate-".concat(J),typeof J<"u"&&J!==null&&J!==0),Vo(e,"fa-pull-".concat(Q),typeof Q<"u"&&Q!==null),Vo(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(oe).map(function(Ee){return oe[Ee]?Ee:null}).filter(function(Ee){return Ee})}function yb(n){return n=n-0,n===n}function Zw(n){return yb(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var _b=["style"];function vb(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Eb(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),o=Zw(t.slice(0,i)),a=t.slice(i+1).trim();return o.startsWith("webkit")?e[vb(o)]=a:e[o]=a,e},{})}function e1(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(p){return e1(n,p)}),o=Object.keys(e.attributes||{}).reduce(function(p,y){var v=e.attributes[y];switch(y){case"class":p.attrs.className=v,delete e.attributes.class;break;case"style":p.attrs.style=Eb(v);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?p.attrs[y.toLowerCase()]=v:p.attrs[Zw(y)]=v}return p},{attrs:{}}),a=t.style,c=a===void 0?{}:a,d=fb(t,_b);return o.attrs.style=lr(lr({},o.attrs.style),c),n.apply(void 0,[e.tag,lr(lr({},o.attrs),d)].concat(yp(i)))}var t1=!1;try{t1=!0}catch{}function wb(){if(!t1&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function qv(n){if(n&&tf(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(gp.icon)return gp.icon(n);if(n===null)return null;if(n&&tf(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function kh(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Vo({},n,e):{}}var Gv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Be=n0.forwardRef(function(n,e){var t=lr(lr({},Gv),n),i=t.icon,o=t.mask,a=t.symbol,c=t.className,d=t.title,p=t.titleId,y=t.maskId,v=qv(i),T=kh("classes",[].concat(yp(gb(t)),yp((c||"").split(" ")))),I=kh("transform",typeof t.transform=="string"?gp.transform(t.transform):t.transform),x=kh("mask",qv(o)),V=sb(v,lr(lr(lr(lr({},T),I),x),{},{symbol:a,title:d,titleId:p,maskId:y}));if(!V)return wb("Could not find icon",v),null;var B=V.abstract,D={ref:e};return Object.keys(t).forEach(function(q){Gv.hasOwnProperty(q)||(D[q]=t[q])}),Tb(B[0],D)});Be.displayName="FontAwesomeIcon";Be.propTypes={beat:xe.bool,border:xe.bool,beatFade:xe.bool,bounce:xe.bool,className:xe.string,fade:xe.bool,flash:xe.bool,mask:xe.oneOfType([xe.object,xe.array,xe.string]),maskId:xe.string,fixedWidth:xe.bool,inverse:xe.bool,flip:xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:xe.oneOfType([xe.object,xe.array,xe.string]),listItem:xe.bool,pull:xe.oneOf(["right","left"]),pulse:xe.bool,rotation:xe.oneOf([0,90,180,270]),shake:xe.bool,size:xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:xe.bool,spinPulse:xe.bool,spinReverse:xe.bool,symbol:xe.oneOfType([xe.bool,xe.string]),title:xe.string,titleId:xe.string,transform:xe.oneOfType([xe.string,xe.object]),swapOpacity:xe.bool};var Tb=e1.bind(null,n0.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Sm={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},n1={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"]},Ib={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},bl={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Am={prefix:"fas",iconName:"bars-progress",icon:[512,512,["tasks-alt"],"f828","M448 160l-128 0 0-32 128 0 0 32zM48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM448 352l0 32-256 0 0-32 256 0zM48 288c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z"]},Cm={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},Sb={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ab={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},km={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Cb={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},kb={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},r1={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Rb={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},Pb={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},xb={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},bb="/dashboard/assets/bolds_logo-CAtn3TAB.jpg";var il={},Kv;function Nb(){if(Kv)return il;Kv=1,Object.defineProperty(il,"__esModule",{value:!0}),il.parse=c,il.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function c(I,x){const V=new a,B=I.length;if(B<2)return V;const D=(x==null?void 0:x.decode)||v;let q=0;do{const J=I.indexOf("=",q);if(J===-1)break;const Q=I.indexOf(";",q),oe=Q===-1?B:Q;if(J>oe){q=I.lastIndexOf(";",J-1)+1;continue}const Ee=d(I,q,J),Se=p(I,J,Ee),N=I.slice(Ee,Se);if(V[N]===void 0){let A=d(I,J+1,oe),k=p(I,oe,A);const b=D(I.slice(A,k));V[N]=b}q=oe+1}while(q<B);return V}function d(I,x,V){do{const B=I.charCodeAt(x);if(B!==32&&B!==9)return x}while(++x<V);return V}function p(I,x,V){for(;x>V;){const B=I.charCodeAt(--x);if(B!==32&&B!==9)return x+1}return V}function y(I,x,V){const B=(V==null?void 0:V.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const D=B(x);if(!e.test(D))throw new TypeError(`argument val is invalid: ${x}`);let q=I+"="+D;if(!V)return q;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);q+="; Max-Age="+V.maxAge}if(V.domain){if(!t.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);q+="; Domain="+V.domain}if(V.path){if(!i.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);q+="; Path="+V.path}if(V.expires){if(!T(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);q+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(q+="; HttpOnly"),V.secure&&(q+="; Secure"),V.partitioned&&(q+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return q}function v(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return il}Nb();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Qv="popstate";function Ob(n={}){function e(i,o){let{pathname:a,search:c,hash:d}=i.location;return vp("",{pathname:a,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Nl(o)}return Lb(e,t,null,n)}function rt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Kn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Db(){return Math.random().toString(36).substring(2,10)}function Yv(n,e){return{usr:n.state,key:n.key,idx:e}}function vp(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?sa(e):e,state:t,key:e&&e.key||i||Db()}}function Nl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function sa(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function Lb(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,d="POP",p=null,y=v();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function v(){return(c.state||{idx:null}).idx}function T(){d="POP";let D=v(),q=D==null?null:D-y;y=D,p&&p({action:d,location:B.location,delta:q})}function I(D,q){d="PUSH";let J=vp(B.location,D,q);y=v()+1;let Q=Yv(J,y),oe=B.createHref(J);try{c.pushState(Q,"",oe)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;o.location.assign(oe)}a&&p&&p({action:d,location:B.location,delta:1})}function x(D,q){d="REPLACE";let J=vp(B.location,D,q);y=v();let Q=Yv(J,y),oe=B.createHref(J);c.replaceState(Q,"",oe),a&&p&&p({action:d,location:B.location,delta:0})}function V(D){let q=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof D=="string"?D:Nl(D);return J=J.replace(/ $/,"%20"),rt(q,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,q)}let B={get action(){return d},get location(){return n(o,c)},listen(D){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Qv,T),p=D,()=>{o.removeEventListener(Qv,T),p=null}},createHref(D){return e(o,D)},createURL:V,encodeLocation(D){let q=V(D);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:I,replace:x,go(D){return c.go(D)}};return B}function i1(n,e,t="/"){return Vb(n,e,t,!1)}function Vb(n,e,t,i){let o=typeof e=="string"?sa(e):e,a=$i(o.pathname||"/",t);if(a==null)return null;let c=s1(n);Mb(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=Kb(a);d=qb(c[p],y,i)}return d}function s1(n,e=[],t=[],i=""){let o=(a,c,d)=>{let p={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(rt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Br([i,p.relativePath]),v=t.concat(p);a.children&&a.children.length>0&&(rt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),s1(a.children,e,v,y)),!(a.path==null&&!a.index)&&e.push({path:y,score:Wb(y,a.index),routesMeta:v})};return n.forEach((a,c)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,c);else for(let p of o1(a.path))o(a,c,p)}),e}function o1(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=o1(i.join("/")),d=[];return d.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function Mb(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Hb(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Fb=/^:[\w-]+$/,Ub=3,jb=2,zb=1,Bb=10,$b=-2,Xv=n=>n==="*";function Wb(n,e){let t=n.split("/"),i=t.length;return t.some(Xv)&&(i+=$b),e&&(i+=jb),t.filter(o=>!Xv(o)).reduce((o,a)=>o+(Fb.test(a)?Ub:a===""?zb:Bb),i)}function Hb(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function qb(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=a==="/"?e:e.slice(a.length)||"/",T=nf({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=nf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Br([a,T.pathname]),pathnameBase:Jb(Br([a,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(a=Br([a,T.pathnameBase]))}return c}function nf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Gb(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:v,isOptional:T},I)=>{if(v==="*"){let V=d[I]||"";c=a.slice(0,a.length-V.length).replace(/(.)\/+$/,"$1")}const x=d[I];return T&&!x?y[v]=void 0:y[v]=(x||"").replace(/%2F/g,"/"),y},{}),pathname:a,pathnameBase:c,pattern:n}}function Gb(n,e=!1,t=!0){Kn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function Kb(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function $i(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function Qb(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?sa(n):n;return{pathname:t?t.startsWith("/")?t:Yb(t,e):e,search:Zb(i),hash:eN(o)}}function Yb(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Rh(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xb(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Rm(n){let e=Xb(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Pm(n,e,t,i=!1){let o;typeof n=="string"?o=sa(n):(o={...n},rt(!o.pathname||!o.pathname.includes("?"),Rh("?","pathname","search",o)),rt(!o.pathname||!o.pathname.includes("#"),Rh("#","pathname","hash",o)),rt(!o.search||!o.search.includes("#"),Rh("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}d=T>=0?e[T]:"/"}let p=Qb(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}var Br=n=>n.join("/").replace(/\/\/+/g,"/"),Jb=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Zb=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,eN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function tN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var a1=["POST","PUT","PATCH","DELETE"];new Set(a1);var nN=["GET",...a1];new Set(nN);var oa=W.createContext(null);oa.displayName="DataRouter";var kf=W.createContext(null);kf.displayName="DataRouterState";var l1=W.createContext({isTransitioning:!1});l1.displayName="ViewTransition";var rN=W.createContext(new Map);rN.displayName="Fetchers";var iN=W.createContext(null);iN.displayName="Await";var Qn=W.createContext(null);Qn.displayName="Navigation";var Gl=W.createContext(null);Gl.displayName="Location";var _r=W.createContext({outlet:null,matches:[],isDataRoute:!1});_r.displayName="Route";var xm=W.createContext(null);xm.displayName="RouteError";function sN(n,{relative:e}={}){rt(aa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(Qn),{hash:o,pathname:a,search:c}=Kl(n,{relative:e}),d=a;return t!=="/"&&(d=a==="/"?t:Br([t,a])),i.createHref({pathname:d,search:c,hash:o})}function aa(){return W.useContext(Gl)!=null}function qi(){return rt(aa(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(Gl).location}var u1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function c1(n){W.useContext(Qn).static||W.useLayoutEffect(n)}function la(){let{isDataRoute:n}=W.useContext(_r);return n?_N():oN()}function oN(){rt(aa(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(oa),{basename:e,navigator:t}=W.useContext(Qn),{matches:i}=W.useContext(_r),{pathname:o}=qi(),a=JSON.stringify(Rm(i)),c=W.useRef(!1);return c1(()=>{c.current=!0}),W.useCallback((p,y={})=>{if(Kn(c.current,u1),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=Pm(p,JSON.parse(a),o,y.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Br([e,v.pathname])),(y.replace?t.replace:t.push)(v,y.state,y)},[e,t,a,o,n])}W.createContext(null);function Kl(n,{relative:e}={}){let{matches:t}=W.useContext(_r),{pathname:i}=qi(),o=JSON.stringify(Rm(t));return W.useMemo(()=>Pm(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function aN(n,e){return f1(n,e)}function f1(n,e,t,i){var J;rt(aa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:a}=W.useContext(Qn),{matches:c}=W.useContext(_r),d=c[c.length-1],p=d?d.params:{},y=d?d.pathname:"/",v=d?d.pathnameBase:"/",T=d&&d.route;{let Q=T&&T.path||"";d1(y,!T||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let I=qi(),x;if(e){let Q=typeof e=="string"?sa(e):e;rt(v==="/"||((J=Q.pathname)==null?void 0:J.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),x=Q}else x=I;let V=x.pathname||"/",B=V;if(v!=="/"){let Q=v.replace(/^\//,"").split("/");B="/"+V.replace(/^\//,"").split("/").slice(Q.length).join("/")}let D=!a&&t&&t.matches&&t.matches.length>0?t.matches:i1(n,{pathname:B});Kn(T||D!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Kn(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=dN(D&&D.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:Br([v,o.encodeLocation?o.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?v:Br([v,o.encodeLocation?o.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),c,t,i);return e&&q?W.createElement(Gl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},q):q}function lN(){let n=yN(),e=tN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:a},"ErrorBoundary")," or"," ",W.createElement("code",{style:a},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,c)}var uN=W.createElement(lN,null),cN=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(_r.Provider,{value:this.props.routeContext},W.createElement(xm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fN({routeContext:n,match:e,children:t}){let i=W.useContext(oa);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(_r.Provider,{value:n},t)}function dN(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let p=o.findIndex(y=>y.route.id&&(a==null?void 0:a[y.route.id])!==void 0);rt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:v,errors:T}=t,I=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,v)=>{let T,I=!1,x=null,V=null;t&&(T=a&&y.route.id?a[y.route.id]:void 0,x=y.route.errorElement||uN,c&&(d<0&&v===0?(d1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,V=null):d===v&&(I=!0,V=y.route.hydrateFallbackElement||null)));let B=e.concat(o.slice(0,v+1)),D=()=>{let q;return T?q=x:I?q=V:y.route.Component?q=W.createElement(y.route.Component,null):y.route.element?q=y.route.element:q=p,W.createElement(fN,{match:y,routeContext:{outlet:p,matches:B,isDataRoute:t!=null},children:q})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?W.createElement(cN,{location:t.location,revalidation:t.revalidation,component:x,error:T,children:D(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):D()},null)}function bm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hN(n){let e=W.useContext(oa);return rt(e,bm(n)),e}function pN(n){let e=W.useContext(kf);return rt(e,bm(n)),e}function mN(n){let e=W.useContext(_r);return rt(e,bm(n)),e}function Nm(n){let e=mN(n),t=e.matches[e.matches.length-1];return rt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function gN(){return Nm("useRouteId")}function yN(){var i;let n=W.useContext(xm),e=pN("useRouteError"),t=Nm("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function _N(){let{router:n}=hN("useNavigate"),e=Nm("useNavigate"),t=W.useRef(!1);return c1(()=>{t.current=!0}),W.useCallback(async(o,a={})=>{Kn(t.current,u1),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var Jv={};function d1(n,e,t){!e&&!Jv[n]&&(Jv[n]=!0,Kn(!1,t))}W.memo(vN);function vN({routes:n,future:e,state:t}){return f1(n,void 0,t,e)}function EN({to:n,replace:e,state:t,relative:i}){rt(aa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=W.useContext(Qn);Kn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=W.useContext(_r),{pathname:c}=qi(),d=la(),p=Pm(n,Rm(a),c,i==="path"),y=JSON.stringify(p);return W.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function Oo(n){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wN({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){rt(!aa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=sa(t));let{pathname:p="/",search:y="",hash:v="",state:T=null,key:I="default"}=t,x=W.useMemo(()=>{let V=$i(p,c);return V==null?null:{location:{pathname:V,search:y,hash:v,state:T,key:I},navigationType:i}},[c,p,y,v,T,I,i]);return Kn(x!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:W.createElement(Qn.Provider,{value:d},W.createElement(Gl.Provider,{children:e,value:x}))}function TN({children:n,location:e}){return aN(Ep(n),e)}function Ep(n,e=[]){let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let a=[...e,o];if(i.type===W.Fragment){t.push.apply(t,Ep(i.props.children,a));return}rt(i.type===Oo,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ep(i.props.children,a)),t.push(c)}),t}var Dc="get",Lc="application/x-www-form-urlencoded";function Rf(n){return n!=null&&typeof n.tagName=="string"}function IN(n){return Rf(n)&&n.tagName.toLowerCase()==="button"}function SN(n){return Rf(n)&&n.tagName.toLowerCase()==="form"}function AN(n){return Rf(n)&&n.tagName.toLowerCase()==="input"}function CN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function kN(n,e){return n.button===0&&(!e||e==="_self")&&!CN(n)}var wc=null;function RN(){if(wc===null)try{new FormData(document.createElement("form"),0),wc=!1}catch{wc=!0}return wc}var PN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ph(n){return n!=null&&!PN.has(n)?(Kn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lc}"`),null):n}function xN(n,e){let t,i,o,a,c;if(SN(n)){let d=n.getAttribute("action");i=d?$i(d,e):null,t=n.getAttribute("method")||Dc,o=Ph(n.getAttribute("enctype"))||Lc,a=new FormData(n)}else if(IN(n)||AN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?$i(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Dc,o=Ph(n.getAttribute("formenctype"))||Ph(d.getAttribute("enctype"))||Lc,a=new FormData(d,n),!RN()){let{name:y,type:v,value:T}=n;if(v==="image"){let I=y?`${y}.`:"";a.append(`${I}x`,"0"),a.append(`${I}y`,"0")}else y&&a.append(y,T)}}else{if(Rf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Dc,i=null,o=Lc,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}function Om(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function bN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function ON(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await bN(a,t);return c.links?c.links():[]}return[]}));return MN(i.flat(1).filter(NN).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Zv(n,e,t,i,o,a){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var v;return t[y].pathname!==p.pathname||((v=t[y].route.path)==null?void 0:v.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):a==="data"?e.filter((p,y)=>{var T;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function DN(n,e){return LN(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function LN(n){return[...new Set(n)]}function VN(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function MN(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(VN(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function FN(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function UN(){let n=W.useContext(oa);return Om(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function jN(){let n=W.useContext(kf);return Om(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Dm=W.createContext(void 0);Dm.displayName="FrameworkContext";function h1(){let n=W.useContext(Dm);return Om(n,"You must render this element inside a <HydratedRouter> element"),n}function zN(n,e){let t=W.useContext(Dm),[i,o]=W.useState(!1),[a,c]=W.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:v,onTouchStart:T}=e,I=W.useRef(null);W.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let B=q=>{q.forEach(J=>{c(J.isIntersecting)})},D=new IntersectionObserver(B,{threshold:.5});return I.current&&D.observe(I.current),()=>{D.disconnect()}}},[n]),W.useEffect(()=>{if(i){let B=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(B)}}},[i]);let x=()=>{o(!0)},V=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,I,{}]:[a,I,{onFocus:sl(d,x),onBlur:sl(p,V),onMouseEnter:sl(y,x),onMouseLeave:sl(v,V),onTouchStart:sl(T,x)}]:[!1,I,{}]}function sl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function BN({page:n,...e}){let{router:t}=UN(),i=W.useMemo(()=>i1(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(WN,{page:n,matches:i,...e}):null}function $N(n){let{manifest:e,routeModules:t}=h1(),[i,o]=W.useState([]);return W.useEffect(()=>{let a=!1;return ON(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),i}function WN({page:n,matches:e,...t}){let i=qi(),{manifest:o,routeModules:a}=h1(),{loaderData:c,matches:d}=jN(),p=W.useMemo(()=>Zv(n,e,d,o,i,"data"),[n,e,d,o,i]),y=W.useMemo(()=>Zv(n,e,d,o,i,"assets"),[n,e,d,o,i]),v=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,V=!1;if(e.forEach(D=>{var J;let q=o.routes[D.route.id];!q||!q.hasLoader||(!p.some(Q=>Q.route.id===D.route.id)&&D.route.id in c&&((J=a[D.route.id])!=null&&J.shouldRevalidate)||q.hasClientLoader?V=!0:x.add(D.route.id))}),x.size===0)return[];let B=FN(n);return V&&x.size>0&&B.searchParams.set("_routes",e.filter(D=>x.has(D.route.id)).map(D=>D.route.id).join(",")),[B.pathname+B.search]},[c,i,o,p,e,n,a]),T=W.useMemo(()=>DN(y,o),[y,o]),I=$N(y);return W.createElement(W.Fragment,null,v.map(x=>W.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),T.map(x=>W.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),I.map(({key:x,link:V})=>W.createElement("link",{key:x,...V})))}function HN(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var p1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{p1&&(window.__reactRouterVersion="7.1.5")}catch{}function qN({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=Ob({window:t,v5Compat:!0}));let o=i.current,[a,c]=W.useState({action:o.action,location:o.location}),d=W.useCallback(p=>{W.startTransition(()=>c(p))},[c]);return W.useLayoutEffect(()=>o.listen(d),[o,d]),W.createElement(wN,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:o})}var m1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,g1=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,state:d,target:p,to:y,preventScrollReset:v,viewTransition:T,...I},x){let{basename:V}=W.useContext(Qn),B=typeof y=="string"&&m1.test(y),D,q=!1;if(typeof y=="string"&&B&&(D=y,p1))try{let k=new URL(window.location.href),b=y.startsWith("//")?new URL(k.protocol+y):new URL(y),L=$i(b.pathname,V);b.origin===k.origin&&L!=null?y=L+b.search+b.hash:q=!0}catch{Kn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=sN(y,{relative:o}),[Q,oe,Ee]=zN(i,I),Se=YN(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:T});function N(k){e&&e(k),k.defaultPrevented||Se(k)}let A=W.createElement("a",{...I,...Ee,href:D||J,onClick:q||a?e:N,ref:HN(x,oe),target:p,"data-discover":!B&&t==="render"?"true":void 0});return Q&&!B?W.createElement(W.Fragment,null,A,W.createElement(BN,{page:J})):A});g1.displayName="Link";var GN=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:d,children:p,...y},v){let T=Kl(c,{relative:y.relative}),I=qi(),x=W.useContext(kf),{navigator:V,basename:B}=W.useContext(Qn),D=x!=null&&t4(T)&&d===!0,q=V.encodeLocation?V.encodeLocation(T).pathname:T.pathname,J=I.pathname,Q=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(J=J.toLowerCase(),Q=Q?Q.toLowerCase():null,q=q.toLowerCase()),Q&&B&&(Q=$i(Q,B)||Q);const oe=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let Ee=J===q||!o&&J.startsWith(q)&&J.charAt(oe)==="/",Se=Q!=null&&(Q===q||!o&&Q.startsWith(q)&&Q.charAt(q.length)==="/"),N={isActive:Ee,isPending:Se,isTransitioning:D},A=Ee?e:void 0,k;typeof i=="function"?k=i(N):k=[i,Ee?"active":null,Se?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(N):a;return W.createElement(g1,{...y,"aria-current":A,className:k,ref:v,style:b,to:c,viewTransition:d},typeof p=="function"?p(N):p)});GN.displayName="NavLink";var KN=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=Dc,action:d,onSubmit:p,relative:y,preventScrollReset:v,viewTransition:T,...I},x)=>{let V=ZN(),B=e4(d,{relative:y}),D=c.toLowerCase()==="get"?"get":"post",q=typeof d=="string"&&m1.test(d),J=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let oe=Q.nativeEvent.submitter,Ee=(oe==null?void 0:oe.getAttribute("formmethod"))||c;V(oe||Q.currentTarget,{fetcherKey:e,method:Ee,navigate:t,replace:o,state:a,relative:y,preventScrollReset:v,viewTransition:T})};return W.createElement("form",{ref:x,method:D,action:B,onSubmit:i?p:J,...I,"data-discover":!q&&n==="render"?"true":void 0})});KN.displayName="Form";function QN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function y1(n){let e=W.useContext(oa);return rt(e,QN(n)),e}function YN(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:c}={}){let d=la(),p=qi(),y=Kl(n,{relative:a});return W.useCallback(v=>{if(kN(v,e)){v.preventDefault();let T=t!==void 0?t:Nl(p)===Nl(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:a,viewTransition:c})}},[p,d,y,t,i,e,n,o,a,c])}var XN=0,JN=()=>`__${String(++XN)}__`;function ZN(){let{router:n}=y1("useSubmit"),{basename:e}=W.useContext(Qn),t=gN();return W.useCallback(async(i,o={})=>{let{action:a,method:c,encType:d,formData:p,body:y}=xN(i,e);if(o.navigate===!1){let v=o.fetcherKey||JN();await n.fetch(v,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function e4(n,{relative:e}={}){let{basename:t}=W.useContext(Qn),i=W.useContext(_r);rt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Kl(n||".",{relative:e})},c=qi();if(n==null){a.search=c.search;let d=new URLSearchParams(a.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let v=d.toString();a.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Br([t,a.pathname])),Nl(a)}function t4(n,e={}){let t=W.useContext(l1);rt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=y1("useViewTransitionState"),o=Kl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=$i(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=$i(t.nextLocation.pathname,i)||t.nextLocation.pathname;return nf(o.pathname,c)!=null||nf(o.pathname,a)!=null}new TextEncoder;function n4(){const n=la(),{dispatch:e}=W.useContext(Ls),[t,i]=W.useState(!1),[o,a]=W.useState(""),[c,d]=W.useState(""),p=y=>{y.preventDefault();try{hA(_w,o,c).then(v=>{const T=v.user;e({type:"LOGIN",payload:T}),n(`/admin?email=${T.email}`)}).catch(v=>{i(!0)})}catch(v){console.log(v)}};return S.jsx("div",{className:on.body,children:S.jsxs("div",{className:on.container,children:[S.jsx("div",{className:on.logo,children:S.jsx("img",{src:bb,alt:"logo"})}),S.jsx("div",{className:on.heading,children:S.jsx("h1",{children:"Login"})}),S.jsxs("form",{className:on.form,onSubmit:p,method:"POST",children:[S.jsx("div",{className:on.row,children:S.jsxs("div",{className:on.inputContainer,children:[S.jsx("div",{className:on.iconContainer,children:S.jsx(Be,{icon:Sb,className:on.icon})}),S.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email",onChange:y=>a(y.target.value)})]})}),S.jsx("br",{}),S.jsx("div",{className:on.row,children:S.jsxs("div",{className:on.inputContainer,children:[S.jsx("div",{className:on.iconContainer,children:S.jsx(Be,{icon:Ib,className:on.icon})}),S.jsx("input",{type:"password",name:"pssd",id:"pssd",placeholder:"Enter your password",onChange:y=>d(y.target.value)})]})}),S.jsx("br",{}),S.jsxs("div",{className:on.row,children:[S.jsx("button",{type:"submit",children:"Login"}),t&&S.jsxs("div",{style:{color:"rgb(245, 47, 47)",textAlign:"center",fontSize:"14px",fontWeight:"bold",margin:"20px 0"},children:[" ",S.jsx("p",{children:" Invalid Email or Password"})]})]})]})]})})}function r4(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}r4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Lm=n=>typeof n=="number"&&!isNaN(n),Ol=n=>typeof n=="string",_1=n=>typeof n=="function",i4=n=>Ol(n)||Lm(n),s4=n=>W.isValidElement(n)||Ol(n)||_1(n)||Lm(n),o4=1,v1=()=>`${o4++}`,gr=new Map,wp=[],e0=new Set,E1=()=>gr.size>0,a4=(n,{containerId:e})=>{var t;return(t=gr.get(e||1))==null?void 0:t.toasts.get(n)};function l4(n,e){var t;if(e)return!!((t=gr.get(e))!=null&&t.isToastActive(n));let i=!1;return gr.forEach(o=>{o.isToastActive(n)&&(i=!0)}),i}function u4(n){if(!E1()){wp=wp.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||i4(n))gr.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=gr.get(n.containerId);e?e.removeToast(n.id):gr.forEach(t=>{t.removeToast(n.id)})}}var c4=(n={})=>{gr.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function f4(n,e){s4(n)&&(E1()||wp.push({content:n,options:e}),gr.forEach(t=>{t.buildToast(n,e)}))}function w1(n,e){gr.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function d4(n){return e0.add(n),()=>{e0.delete(n)}}function h4(n){return n&&(Ol(n.toastId)||Lm(n.toastId))?n.toastId:v1()}function Ql(n,e){return f4(n,e),e.toastId}function Pf(n,e){return{...e,type:e&&e.type||n,toastId:h4(e)}}function xf(n){return(e,t)=>Ql(e,Pf(n,t))}function Ye(n,e){return Ql(n,Pf("default",e))}Ye.loading=(n,e)=>Ql(n,Pf("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function p4(n,{pending:e,error:t,success:i},o){let a;e&&(a=Ol(e)?Ye.loading(e,o):Ye.loading(e.render,{...o,...e}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(y,v,T)=>{if(v==null){Ye.dismiss(a);return}let I={type:y,...c,...o,data:T},x=Ol(v)?{render:v}:v;return a?Ye.update(a,{...I,...x}):Ye(x.render,{...I,...x}),T},p=_1(n)?n():n;return p.then(y=>d("success",i,y)).catch(y=>d("error",t,y)),p}Ye.promise=p4;Ye.success=xf("success");Ye.info=xf("info");Ye.error=xf("error");Ye.warning=xf("warning");Ye.warn=Ye.warning;Ye.dark=(n,e)=>Ql(n,Pf("default",{theme:"dark",...e}));function m4(n){u4(n)}Ye.dismiss=m4;Ye.clearWaitingQueue=c4;Ye.isActive=l4;Ye.update=(n,e={})=>{let t=a4(n,e);if(t){let{props:i,content:o}=t,a={delay:100,...i,...e,toastId:e.toastId||n,updateId:v1()};a.toastId!==n&&(a.staleId=n);let c=a.render||o;delete a.render,Ql(c,a)}};Ye.done=n=>{Ye.update(n,{progress:1})};Ye.onChange=d4;Ye.play=n=>w1(!0,n);Ye.pause=n=>w1(!1,n);function g4({setActiveSection:n}){const e=la(),{dispatch:t}=W.useContext(Ls),i=()=>{Ye.success("Logout Successfull",{position:"center",autoClose:200}),setTimeout(()=>{e("/")},2e3),t({type:"LOGOUT"})};return S.jsxs("div",{className:"sidebar",children:[S.jsx("div",{className:"top",children:S.jsx("span",{className:"logo",children:"Bolds"})}),S.jsx("hr",{}),S.jsxs("div",{className:"center",children:[S.jsx("p",{className:"title",children:"MAIN"}),S.jsxs("ul",{children:[S.jsxs("li",{onClick:()=>n("home"),children:[S.jsx(Be,{icon:km,className:"icon"}),S.jsx("span",{children:"Dashboard"})]}),S.jsx("p",{className:"title",children:"USEFUL"}),S.jsxs("li",{onClick:()=>n("user"),children:[S.jsx(Be,{icon:Pb,className:"icon"}),S.jsx("span",{children:"Users"})]}),S.jsxs("li",{children:[S.jsx(Be,{icon:Am,className:"icon"}),S.jsx("span",{children:"Tasks"})]}),S.jsxs("li",{children:[S.jsx(Be,{icon:Cm,className:"icon"}),S.jsx("span",{children:"Feedback"})]}),S.jsx("p",{className:"title",children:"USER"}),S.jsxs("li",{children:[S.jsx(Be,{icon:bl,className:"icon"}),S.jsx("span",{children:"Profile"})]}),S.jsxs("li",{onClick:i,children:[S.jsx(Be,{icon:Sm,className:"icon"}),S.jsx("span",{children:"Logout"})]}),S.jsx("p",{className:"title",children:"THEME"})]})]}),S.jsxs("div",{className:"bottom",children:[S.jsx("div",{className:"colorOption"}),S.jsx("div",{className:"colorOption"})]})]})}const y4="/dashboard/assets/avatar-D3hUFAA-.jpg";function Vm({profileImg:n}){return S.jsx("div",{className:"navbar",children:S.jsx("div",{className:"wrapper",children:S.jsxs("div",{className:"items",children:[S.jsxs("div",{className:"item",children:["  ",S.jsx(Be,{icon:Rb,className:"icon"})]}),S.jsxs("div",{className:"item",children:[S.jsx(Be,{icon:kb,className:"icon"}),S.jsx("div",{className:"counter",children:"1"})]}),S.jsx("div",{className:"profile",children:S.jsx("img",{src:y4,alt:"User"})})]})})})}function Pn({type:n}){let e;switch(n){case"user":e={title:"USERS",count:500,link:"See all users",icon:S.jsx(Be,{icon:bl,className:"icon"})};break;case"activeUser":e={title:"ACTIVE USERS",count:120,link:"",icon:S.jsx(Be,{icon:bl,className:"icon"})};break;case"task":e={title:"TASKS",count:300,link:"",icon:S.jsx(Be,{icon:r1,className:"icon"})};break;case"completedTask":e={title:"COMPLETED TASKS",count:100,link:"",icon:S.jsx(Be,{icon:xb,className:"icon"})};break;case"pendingTask":e={title:"PENDING TASKS",count:200,link:"",icon:S.jsx(Be,{icon:Ab,className:"icon"})};break}return S.jsxs("div",{className:"widget",children:[S.jsxs("div",{className:"left",children:[S.jsx("span",{className:"title",children:e.title}),S.jsx("span",{className:"iconContainer",children:e.icon}),S.jsx("span",{className:"link",children:e.link})]}),S.jsx("div",{className:"right",children:S.jsx("span",{className:"counter",children:e.count})})]})}function T1(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,a]=W.useState(""),[c,d]=W.useState(""),[p,y]=W.useState(""),[v,T]=W.useState(""),I="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhf14RWxf6GFrK2A8CyOoXn4SEpZSBxuWOCs_T-A5peKF-fIpF&s",x=B=>{const D=B.target.files[0];if(D){const q=URL.createObjectURL(D);e(q)}},V=async B=>{B.preventDefault();try{const q=(await dA(_w,o,p)).user,J=ow(dm,"users",q.uid);await gw(J,{uid:q.uid,name:t,email:o,phoneNumber:c,role:v,status:0,timeStamp:yw()}),console.log("User added ")}catch(D){console.log(D)}};return S.jsx("div",{className:"new",children:S.jsxs("div",{className:"newContainer",children:[S.jsx("div",{className:"top",children:S.jsx("h1",{children:"Add New User"})}),S.jsxs("div",{className:"bottom",children:[S.jsx("div",{className:"left",children:S.jsx("img",{src:n&&n.trim()!==""?n:I,alt:"img"})}),S.jsx("div",{className:"right",children:S.jsxs("form",{onSubmit:V,children:[S.jsx("div",{className:"formInput",children:S.jsxs("label",{htmlFor:"file",children:[S.jsx(Be,{icon:Cb,className:"icon"}),S.jsx("input",{type:"file",id:"file",onChange:x})]})}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"name",children:"Name"}),S.jsx("input",{type:"text",name:"name",id:"name",placeholder:"John Doe",onChange:B=>i(B.target.value)})]}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"email",children:"Email"}),S.jsx("input",{type:"email",name:"email",id:"email",placeholder:"example@gmail.com",onChange:B=>a(B.target.value)})]}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"phoneNumber",children:"Phone"}),S.jsx("input",{type:"text",name:"phoneNumber",id:"phoneNumber",placeholder:"+91",onChange:B=>d(B.target.value)})]}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"pssd",children:"Password"}),S.jsx("input",{type:"password",name:"pssd",id:"pssd",placeholder:"Enter Password",onChange:B=>y(B.target.value)})]}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{children:"Select Role"}),S.jsxs("select",{value:v,onChange:B=>T(B.target.value),required:!0,children:[S.jsx("option",{value:" ",children:"Select Role"}),S.jsx("option",{value:"user",children:"User"}),S.jsx("option",{value:"manager",children:"Manager"}),S.jsx("option",{value:"admin",children:"Admin"})]})]}),S.jsx("button",{type:"submit",children:"Submit"})]})})]})]})})}const _4=()=>{const[n,e]=W.useState("home"),[t,i]=W.useState("");return new URLSearchParams(location.search).get("uid"),S.jsxs("div",{className:"home",children:[S.jsx(g4,{setActiveSection:e}),S.jsxs("div",{className:"homeContainer",children:[S.jsx(Vm,{profileImg:t}),n==="home"&&S.jsxs("div",{className:"widgets",children:[S.jsx(Pn,{type:"user"}),S.jsx(Pn,{type:"activeUser"}),S.jsx(Pn,{type:"task"}),S.jsx(Pn,{type:"completedTask"}),S.jsx(Pn,{type:"pendingTask"})]}),n==="user"&&S.jsx(T1,{})]})]})};function v4({setActiveSection:n}){const e=la(),{dispatch:t}=W.useContext(Ls),i=()=>{Ye.success("Logout Successfull",{position:"center",autoClose:200}),setTimeout(()=>{e("/")},2e3),t({type:"LOGOUT"})};return S.jsxs("div",{className:"sidebar",children:[S.jsx("div",{className:"top",children:S.jsx("span",{className:"logo",children:"Bolds"})}),S.jsx("hr",{}),S.jsxs("div",{className:"center",children:[S.jsx("p",{className:"title",children:"MAIN"}),S.jsxs("ul",{children:[S.jsxs("li",{onClick:()=>n("home"),children:[S.jsx(Be,{icon:km,className:"icon"}),S.jsx("span",{children:"Dashboard"})]}),S.jsx("p",{className:"title",children:"USEFUL"}),S.jsxs("li",{children:[S.jsx(Be,{icon:Am,className:"icon"}),S.jsx("span",{children:"Tasks"})]}),S.jsxs("li",{onClick:()=>n("assignTask"),children:[S.jsx(Be,{icon:r1,className:"icon"}),S.jsx("span",{children:"Assign Task"})]}),S.jsxs("li",{children:[S.jsx(Be,{icon:n1,className:"icon"}),S.jsx("span",{children:"Teams"})]}),S.jsxs("li",{children:[S.jsx(Be,{icon:Cm,className:"icon"}),S.jsx("span",{children:"Feedback"})]}),S.jsx("p",{className:"title",children:"USER"}),S.jsxs("li",{children:[S.jsx(Be,{icon:bl,className:"icon"}),S.jsx("span",{children:"Profile"})]}),S.jsxs("li",{onClick:i,children:[S.jsx(Be,{icon:Sm,className:"icon"}),S.jsx("span",{children:"Logout"})]}),S.jsx("p",{className:"title",children:"THEME"})]})]}),S.jsxs("div",{className:"bottom",children:[S.jsx("div",{className:"colorOption"}),S.jsx("div",{className:"colorOption"})]})]})}function E4(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,a]=W.useState(""),[c,d]=W.useState(""),[p,y]=W.useState(""),v=async T=>{T.preventDefault();try{const I=`{email}-${Date.now()}`,x=ow(dm,"tasks",I);await gw(x,{email:n,title:t,description:o,startDate:c,endDate:p,status:"Pending",timeStamp:yw()}),alert("Task Assigned"),e(""),i(""),a(""),d(""),y("")}catch(I){console.log(I)}};return S.jsx("div",{className:"new",children:S.jsxs("div",{className:"newContainer",children:[S.jsx("div",{className:"top",children:S.jsx("h1",{children:"Assign Task"})}),S.jsx("div",{className:"bottom",children:S.jsx("div",{className:"right",children:S.jsxs("form",{onSubmit:v,children:[S.jsx("h4",{children:"To:"}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"email",children:"Email"}),S.jsx("input",{type:"email",id:"email",placeholder:"example@gmail.com",onChange:T=>e(T.target.value)})]}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"title",children:"Task Title"}),S.jsx("input",{type:"text",id:"title",placeholder:"Example Title",onChange:T=>i(T.target.value)})]}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"des",children:"Task Description"}),S.jsx("textarea",{id:"des",onChange:T=>a(T.target.value),children:" "})]}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"start",children:"Start Date"}),S.jsx("input",{type:"date",id:"start",onChange:T=>d(T.target.value)})]}),S.jsxs("div",{className:"formInput",children:[S.jsx("label",{htmlFor:"end",children:"End Date"}),S.jsx("input",{type:"date",id:"end",onChange:T=>y(T.target.value)})]}),S.jsx("div",{className:"formInput",children:S.jsx("button",{type:"submit",children:"Assign"})})]})})})]})})}const w4=()=>{const[n,e]=W.useState("home"),[t,i]=W.useState("");return new URLSearchParams(location.search).get("uid"),S.jsxs("div",{className:"home",children:[S.jsx(v4,{setActiveSection:e}),S.jsxs("div",{className:"homeContainer",children:[S.jsx(Vm,{profileImg:t}),n==="home"&&S.jsxs("div",{className:"widgets",children:[S.jsx(Pn,{type:"user"}),S.jsx(Pn,{type:"task"}),S.jsx(Pn,{type:"completedTask"}),S.jsx(Pn,{type:"pendingTask"})]}),n==="assignTask"&&S.jsx(E4,{})]})]})};function T4({setActiveSection:n}){const e=la(),{dispatch:t}=W.useContext(Ls),i=()=>{Ye.success("Logout Successfull",{position:"center",autoClose:200}),setTimeout(()=>{e("/")},2e3),t({type:"LOGOUT"})};return S.jsxs("div",{className:"sidebar",children:[S.jsx("div",{className:"top",children:S.jsx("span",{className:"logo",children:"Bolds"})}),S.jsx("hr",{}),S.jsxs("div",{className:"center",children:[S.jsx("p",{className:"title",children:"MAIN"}),S.jsxs("ul",{children:[S.jsxs("li",{onClick:()=>n("home"),children:[S.jsx(Be,{icon:km,className:"icon"}),S.jsx("span",{children:"Dashboard"})]}),S.jsx("p",{className:"title",children:"USEFUL"}),S.jsxs("li",{onClick:()=>n("task"),children:[S.jsx(Be,{icon:Am,className:"icon"}),S.jsx("span",{children:"Tasks"})]}),S.jsxs("li",{children:[S.jsx(Be,{icon:n1,className:"icon"}),S.jsx("span",{children:"Teams"})]}),S.jsxs("li",{children:[S.jsx(Be,{icon:Cm,className:"icon"}),S.jsx("span",{children:"Feedback"})]}),S.jsx("p",{className:"title",children:"USER"}),S.jsxs("li",{children:[S.jsx(Be,{icon:bl,className:"icon"}),S.jsx("span",{children:"Profile"})]}),S.jsxs("li",{onClick:i,children:[S.jsx(Be,{icon:Sm,className:"icon"}),S.jsx("span",{children:"Logout"})]}),S.jsx("p",{className:"title",children:"THEME"})]})]}),S.jsxs("div",{className:"bottom",children:[S.jsx("div",{className:"colorOption"}),S.jsx("div",{className:"colorOption"})]})]})}const I4=()=>{const{currentUser:n}=W.useContext(Ls),[e,t]=W.useState([]),[i,o]=W.useState(!0);return W.useEffect(()=>{if(!n||!n.email)return;(async()=>{o(!0);try{const c=MR(IR(dm,"tasks"),FR("email","==",n.email)),p=(await HR(c)).docs.map(y=>({id:y.id,...y.data()}));t(p)}catch(c){console.error("Error fetching tasks:",c)}o(!1)})()},[n]),S.jsxs("div",{className:"tasks",children:[S.jsx("h2",{children:"Assigned Tasks"}),i?S.jsx("p",{children:"Loading..."}):e.length===0?S.jsx("p",{children:"No tasks assigned."}):S.jsxs("table",{children:[S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{children:"Title"}),S.jsx("th",{children:"Description"}),S.jsx("th",{children:"Start Date"}),S.jsx("th",{children:"End Date"}),S.jsx("th",{children:"Status"})]})}),S.jsx("tbody",{children:e.map(a=>S.jsxs("tr",{children:[S.jsx("td",{children:a.title}),S.jsx("td",{children:a.description}),S.jsx("td",{children:a.startDate}),S.jsx("td",{children:a.endDate}),S.jsx("td",{children:a.status==="Pending"?"Pending":"Completed"})]},a.id))})]})]})},S4=()=>{const[n,e]=W.useState("home"),[t,i]=W.useState("");return new URLSearchParams(location.search).get("email"),S.jsxs("div",{className:"home",children:[S.jsx(T4,{setActiveSection:e}),S.jsxs("div",{className:"homeContainer",children:[S.jsx(Vm,{profileImg:t}),n==="home"&&S.jsxs("div",{className:"widgets",children:[S.jsx(Pn,{type:"task"}),S.jsx(Pn,{type:"completedTask"}),S.jsx(Pn,{type:"pendingTask"})]}),n==="task"&&S.jsx(I4,{})]})]})};function A4(){const{currentUser:n}=W.useContext(Ls),e=({children:t})=>n?t:S.jsx(EN,{to:"/"});return console.log(n),S.jsx(qN,{basename:"/dashboard",children:S.jsxs(TN,{children:[S.jsx(Oo,{path:"/",element:S.jsx(n4,{})}),S.jsx(Oo,{path:"/admin",element:S.jsx(e,{children:S.jsx(_4,{})})}),S.jsx(Oo,{path:"/admin/adduser",element:S.jsx(e,{children:S.jsx(T1,{})})}),S.jsx(Oo,{path:"/manager",element:S.jsx(e,{children:S.jsx(w4,{})})}),S.jsx(Oo,{path:"/dashboard",element:S.jsx(e,{children:S.jsx(S4,{})})})]})})}DT.createRoot(document.getElementById("root")).render(S.jsx(W.StrictMode,{children:S.jsx(XR,{children:S.jsx(A4,{})})}));
