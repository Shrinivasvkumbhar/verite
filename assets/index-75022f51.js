import{Renderer as GS}from"https://unpkg.com/ogl@0.0.74/src/core/Renderer.js";import{Program as KS}from"https://unpkg.com/ogl@0.0.74/src/core/Program.js";import{Texture as Sf}from"https://unpkg.com/ogl@0.0.74/src/core/Texture.js";import{Triangle as XS}from"https://unpkg.com/ogl@0.0.74/src/extras/Triangle.js";import{Mesh as YS}from"https://unpkg.com/ogl@0.0.74/src/core/Mesh.js";import{Vec2 as Ty}from"https://unpkg.com/ogl@0.0.74/src/math/Vec2.js";import{Color as fu}from"https://unpkg.com/ogl@0.0.74/src/math/Color.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sg(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ot={},aa=[],Fr=()=>{},QS=()=>!1,JS=/^on[^a-z]/,dd=t=>JS.test(t),og=t=>t.startsWith("onUpdate:"),Ut=Object.assign,ag=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ZS=Object.prototype.hasOwnProperty,Be=(t,e)=>ZS.call(t,e),he=Array.isArray,la=t=>Uc(t)==="[object Map]",fd=t=>Uc(t)==="[object Set]",Ey=t=>Uc(t)==="[object Date]",Te=t=>typeof t=="function",Tt=t=>typeof t=="string",Ea=t=>typeof t=="symbol",nt=t=>t!==null&&typeof t=="object",rb=t=>(nt(t)||Te(t))&&Te(t.then)&&Te(t.catch),ib=Object.prototype.toString,Uc=t=>ib.call(t),eC=t=>Uc(t).slice(8,-1),sb=t=>Uc(t)==="[object Object]",lg=t=>Tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ku=sg(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pd=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tC=/-(\w)/g,di=pd(t=>t.replace(tC,(e,n)=>n?n.toUpperCase():"")),nC=/\B([A-Z])/g,ja=pd(t=>t.replace(nC,"-$1").toLowerCase()),md=pd(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cf=pd(t=>t?`on${md(t)}`:""),vo=(t,e)=>!Object.is(t,e),Xu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yh=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vh=t=>{const e=parseFloat(t);return isNaN(e)?t:e},rC=t=>{const e=Tt(t)?Number(t):NaN;return isNaN(e)?t:e};let Ay;const Op=()=>Ay||(Ay=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gd(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Tt(r)?aC(r):gd(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Tt(t)||nt(t))return t}const iC=/;(?![^(]*\))/g,sC=/:([^]+)/,oC=/\/\*[^]*?\*\//g;function aC(t){const e={};return t.replace(oC,"").split(iC).forEach(n=>{if(n){const r=n.split(sC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wo(t){let e="";if(Tt(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=wo(t[n]);r&&(e+=r+" ")}else if(nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function lC(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Tt(e)&&(t.class=wo(e)),n&&(t.style=gd(n)),t}const cC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uC=sg(cC);function ob(t){return!!t||t===""}function hC(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=_d(t[r],e[r]);return n}function _d(t,e){if(t===e)return!0;let n=Ey(t),r=Ey(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ea(t),r=Ea(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?hC(t,e):!1;if(n=nt(t),r=nt(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!_d(t[o],e[o]))return!1}}return String(t)===String(e)}function dC(t,e){return t.findIndex(n=>_d(n,e))}const rt=t=>Tt(t)?t:t==null?"":he(t)||nt(t)&&(t.toString===ib||!Te(t.toString))?JSON.stringify(t,ab,2):String(t),ab=(t,e)=>e&&e.__v_isRef?ab(t,e.value):la(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:fd(e)?{[`Set(${e.size})`]:[...e.values()]}:nt(e)&&!he(e)&&!sb(e)?String(e):e;let Mr;class fC{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mr,!e&&Mr&&(this.index=(Mr.scopes||(Mr.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Mr;try{return Mr=this,e()}finally{Mr=n}}}on(){Mr=this}off(){Mr=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function pC(t,e=Mr){e&&e.active&&e.effects.push(t)}function mC(){return Mr}const cg=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lb=t=>(t.w&bs)>0,cb=t=>(t.n&bs)>0,gC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bs},_C=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];lb(i)&&!cb(i)?i.delete(t):e[n++]=i,i.w&=~bs,i.n&=~bs}e.length=n}},Dp=new WeakMap;let fl=0,bs=1;const qp=30;let Vr;const io=Symbol(""),Mp=Symbol("");class ug{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pC(this,r)}run(){if(!this.active)return this.fn();let e=Vr,n=us;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vr,Vr=this,us=!0,bs=1<<++fl,fl<=qp?gC(this):Iy(this),this.fn()}finally{fl<=qp&&_C(this),bs=1<<--fl,Vr=this.parent,us=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vr===this?this.deferStop=!0:this.active&&(Iy(this),this.onStop&&this.onStop(),this.active=!1)}}function Iy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let us=!0;const ub=[];function Ha(){ub.push(us),us=!1}function za(){const t=ub.pop();us=t===void 0?!0:t}function Xn(t,e,n){if(us&&Vr){let r=Dp.get(t);r||Dp.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=cg()),hb(i)}}function hb(t,e){let n=!1;fl<=qp?cb(t)||(t.n|=bs,n=!lb(t)):n=!t.has(Vr),n&&(t.add(Vr),Vr.deps.push(t))}function Pi(t,e,n,r,i,s){const o=Dp.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&he(t)){const l=Number(r);o.forEach((u,d)=>{(d==="length"||!Ea(d)&&d>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":he(t)?lg(n)&&a.push(o.get("length")):(a.push(o.get(io)),la(t)&&a.push(o.get(Mp)));break;case"delete":he(t)||(a.push(o.get(io)),la(t)&&a.push(o.get(Mp)));break;case"set":la(t)&&a.push(o.get(io));break}if(a.length===1)a[0]&&Np(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);Np(cg(l))}}function Np(t,e){const n=he(t)?t:[...t];for(const r of n)r.computed&&Sy(r);for(const r of n)r.computed||Sy(r)}function Sy(t,e){(t!==Vr||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const yC=sg("__proto__,__v_isRef,__isVue"),db=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ea)),Cy=vC();function vC(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=He(this);for(let s=0,o=this.length;s<o;s++)Xn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(He)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ha();const r=He(this)[e].apply(this,n);return za(),r}}),t}function wC(t){const e=He(this);return Xn(e,"has",t),e.hasOwnProperty(t)}class fb{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&r===(i?s?DC:_b:s?gb:mb).get(e))return e;const o=he(e);if(!i){if(o&&Be(Cy,n))return Reflect.get(Cy,n,r);if(n==="hasOwnProperty")return wC}const a=Reflect.get(e,n,r);return(Ea(n)?db.has(n):yC(n))||(i||Xn(e,"get",n),s)?a:Tn(a)?o&&lg(n)?a:a.value:nt(a)?i?fg(a):vd(a):a}}class pb extends fb{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(Aa(s)&&Tn(s)&&!Tn(r))return!1;if(!this._shallow&&(!wh(r)&&!Aa(r)&&(s=He(s),r=He(r)),!he(e)&&Tn(s)&&!Tn(r)))return s.value=r,!0;const o=he(e)&&lg(n)?Number(n)<e.length:Be(e,n),a=Reflect.set(e,n,r,i);return e===He(i)&&(o?vo(r,s)&&Pi(e,"set",n,r):Pi(e,"add",n,r)),a}deleteProperty(e,n){const r=Be(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Pi(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Ea(n)||!db.has(n))&&Xn(e,"has",n),r}ownKeys(e){return Xn(e,"iterate",he(e)?"length":io),Reflect.ownKeys(e)}}class bC extends fb{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const TC=new pb,EC=new bC,AC=new pb(!0),hg=t=>t,yd=t=>Reflect.getPrototypeOf(t);function pu(t,e,n=!1,r=!1){t=t.__v_raw;const i=He(t),s=He(e);n||(vo(e,s)&&Xn(i,"get",e),Xn(i,"get",s));const{has:o}=yd(i),a=r?hg:n?mg:tc;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function mu(t,e=!1){const n=this.__v_raw,r=He(n),i=He(t);return e||(vo(t,i)&&Xn(r,"has",t),Xn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function gu(t,e=!1){return t=t.__v_raw,!e&&Xn(He(t),"iterate",io),Reflect.get(t,"size",t)}function Ry(t){t=He(t);const e=He(this);return yd(e).has.call(e,t)||(e.add(t),Pi(e,"add",t,t)),this}function Py(t,e){e=He(e);const n=He(this),{has:r,get:i}=yd(n);let s=r.call(n,t);s||(t=He(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?vo(e,o)&&Pi(n,"set",t,e):Pi(n,"add",t,e),this}function xy(t){const e=He(this),{has:n,get:r}=yd(e);let i=n.call(e,t);i||(t=He(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Pi(e,"delete",t,void 0),s}function ky(){const t=He(this),e=t.size!==0,n=t.clear();return e&&Pi(t,"clear",void 0,void 0),n}function _u(t,e){return function(r,i){const s=this,o=s.__v_raw,a=He(o),l=e?hg:t?mg:tc;return!t&&Xn(a,"iterate",io),o.forEach((u,d)=>r.call(i,l(u),l(d),s))}}function yu(t,e,n){return function(...r){const i=this.__v_raw,s=He(i),o=la(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...r),d=n?hg:e?mg:tc;return!e&&Xn(s,"iterate",l?Mp:io),{next(){const{value:c,done:h}=u.next();return h?{value:c,done:h}:{value:a?[d(c[0]),d(c[1])]:d(c),done:h}},[Symbol.iterator](){return this}}}}function ji(t){return function(...e){return t==="delete"?!1:this}}function IC(){const t={get(s){return pu(this,s)},get size(){return gu(this)},has:mu,add:Ry,set:Py,delete:xy,clear:ky,forEach:_u(!1,!1)},e={get(s){return pu(this,s,!1,!0)},get size(){return gu(this)},has:mu,add:Ry,set:Py,delete:xy,clear:ky,forEach:_u(!1,!0)},n={get(s){return pu(this,s,!0)},get size(){return gu(this,!0)},has(s){return mu.call(this,s,!0)},add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear"),forEach:_u(!0,!1)},r={get(s){return pu(this,s,!0,!0)},get size(){return gu(this,!0)},has(s){return mu.call(this,s,!0)},add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear"),forEach:_u(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=yu(s,!1,!1),n[s]=yu(s,!0,!1),e[s]=yu(s,!1,!0),r[s]=yu(s,!0,!0)}),[t,n,e,r]}const[SC,CC,RC,PC]=IC();function dg(t,e){const n=e?t?PC:RC:t?CC:SC;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Be(n,i)&&i in r?n:r,i,s)}const xC={get:dg(!1,!1)},kC={get:dg(!1,!0)},OC={get:dg(!0,!1)},mb=new WeakMap,gb=new WeakMap,_b=new WeakMap,DC=new WeakMap;function qC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function MC(t){return t.__v_skip||!Object.isExtensible(t)?0:qC(eC(t))}function vd(t){return Aa(t)?t:pg(t,!1,TC,xC,mb)}function yb(t){return pg(t,!1,AC,kC,gb)}function fg(t){return pg(t,!0,EC,OC,_b)}function pg(t,e,n,r,i){if(!nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=MC(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ca(t){return Aa(t)?ca(t.__v_raw):!!(t&&t.__v_isReactive)}function Aa(t){return!!(t&&t.__v_isReadonly)}function wh(t){return!!(t&&t.__v_isShallow)}function vb(t){return ca(t)||Aa(t)}function He(t){const e=t&&t.__v_raw;return e?He(e):t}function wb(t){return yh(t,"__v_skip",!0),t}const tc=t=>nt(t)?vd(t):t,mg=t=>nt(t)?fg(t):t;function bb(t){us&&Vr&&(t=He(t),hb(t.dep||(t.dep=cg())))}function Tb(t,e){t=He(t);const n=t.dep;n&&Np(n)}function Tn(t){return!!(t&&t.__v_isRef===!0)}function yn(t){return Eb(t,!1)}function NC(t){return Eb(t,!0)}function Eb(t,e){return Tn(t)?t:new VC(t,e)}class VC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:He(e),this._value=n?e:tc(e)}get value(){return bb(this),this._value}set value(e){const n=this.__v_isShallow||wh(e)||Aa(e);e=n?e:He(e),vo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:tc(e),Tb(this))}}function xi(t){return Tn(t)?t.value:t}const LC={get:(t,e,n)=>xi(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Tn(i)&&!Tn(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ab(t){return ca(t)?t:new Proxy(t,LC)}class FC{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ug(e,()=>{this._dirty||(this._dirty=!0,Tb(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=He(this);return bb(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $C(t,e,n=!1){let r,i;const s=Te(t);return s?(r=t,i=Fr):(r=t.get,i=t.set),new FC(r,i,s||!i,n)}function hs(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){wd(s,e,n)}return i}function Er(t,e,n,r){if(Te(t)){const s=hs(t,e,n,r);return s&&rb(s)&&s.catch(o=>{wd(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Er(t[s],e,n,r));return i}function wd(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){hs(l,null,10,[t,o,a]);return}}UC(t,n,i,r)}function UC(t,e,n,r=!0){console.error(t)}let nc=!1,Vp=!1;const wn=[];let Qr=0;const ua=[];let vi=null,Gs=0;const Ib=Promise.resolve();let gg=null;function _g(t){const e=gg||Ib;return t?e.then(this?t.bind(this):t):e}function BC(t){let e=Qr+1,n=wn.length;for(;e<n;){const r=e+n>>>1,i=wn[r],s=rc(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function yg(t){(!wn.length||!wn.includes(t,nc&&t.allowRecurse?Qr+1:Qr))&&(t.id==null?wn.push(t):wn.splice(BC(t.id),0,t),Sb())}function Sb(){!nc&&!Vp&&(Vp=!0,gg=Ib.then(Rb))}function jC(t){const e=wn.indexOf(t);e>Qr&&wn.splice(e,1)}function HC(t){he(t)?ua.push(...t):(!vi||!vi.includes(t,t.allowRecurse?Gs+1:Gs))&&ua.push(t),Sb()}function Oy(t,e=nc?Qr+1:0){for(;e<wn.length;e++){const n=wn[e];n&&n.pre&&(wn.splice(e,1),e--,n())}}function Cb(t){if(ua.length){const e=[...new Set(ua)];if(ua.length=0,vi){vi.push(...e);return}for(vi=e,vi.sort((n,r)=>rc(n)-rc(r)),Gs=0;Gs<vi.length;Gs++)vi[Gs]();vi=null,Gs=0}}const rc=t=>t.id==null?1/0:t.id,zC=(t,e)=>{const n=rc(t)-rc(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Rb(t){Vp=!1,nc=!0,wn.sort(zC);const e=Fr;try{for(Qr=0;Qr<wn.length;Qr++){const n=wn[Qr];n&&n.active!==!1&&hs(n,null,14)}}finally{Qr=0,wn.length=0,Cb(),nc=!1,gg=null,(wn.length||ua.length)&&Rb()}}function WC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ot;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:c,trim:h}=r[d]||ot;h&&(i=n.map(f=>Tt(f)?f.trim():f)),c&&(i=n.map(vh))}let a,l=r[a=Cf(e)]||r[a=Cf(di(e))];!l&&s&&(l=r[a=Cf(ja(e))]),l&&Er(l,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Er(u,t,6,i)}}function Pb(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Te(t)){const l=u=>{const d=Pb(u,e,!0);d&&(a=!0,Ut(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(nt(t)&&r.set(t,null),null):(he(s)?s.forEach(l=>o[l]=null):Ut(o,s),nt(t)&&r.set(t,o),o)}function bd(t,e){return!t||!dd(e)?!1:(e=e.slice(2).replace(/Once$/,""),Be(t,e[0].toLowerCase()+e.slice(1))||Be(t,ja(e))||Be(t,e))}let ln=null,Td=null;function bh(t){const e=ln;return ln=t,Td=t&&t.type.__scopeId||null,e}function Li(t){Td=t}function Fi(){Td=null}function ic(t,e=ln,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&zy(-1);const s=bh(e);let o;try{o=t(...i)}finally{bh(s),r._d&&zy(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rf(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:u,render:d,renderCache:c,data:h,setupState:f,ctx:p,inheritAttrs:m}=t;let g,_;const y=bh(t);try{if(n.shapeFlag&4){const v=i||r;g=Yr(d.call(v,v,c,s,f,h,p)),_=l}else{const v=e;g=Yr(v.length>1?v(s,{attrs:l,slots:a,emit:u}):v(s,null)),_=e.props?l:GC(l)}}catch(v){kl.length=0,wd(v,t,1),g=we(Ar)}let T=g;if(_&&m!==!1){const v=Object.keys(_),{shapeFlag:S}=T;v.length&&S&7&&(o&&v.some(og)&&(_=KC(_,o)),T=Ts(T,_))}return n.dirs&&(T=Ts(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),g=T,bh(y),g}const GC=t=>{let e;for(const n in t)(n==="class"||n==="style"||dd(n))&&((e||(e={}))[n]=t[n]);return e},KC=(t,e)=>{const n={};for(const r in t)(!og(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function XC(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Dy(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let c=0;c<d.length;c++){const h=d[c];if(o[h]!==r[h]&&!bd(u,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Dy(r,o,u):!0:!!o;return!1}function Dy(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!bd(n,s))return!0}return!1}function YC({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const QC=t=>t.__isSuspense;function JC(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):HC(t)}const vu={};function Sl(t,e,n){return xb(t,e,n)}function xb(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ot){var a;const l=mC()===((a=Kt)==null?void 0:a.scope)?Kt:null;let u,d=!1,c=!1;if(Tn(t)?(u=()=>t.value,d=wh(t)):ca(t)?(u=()=>t,r=!0):he(t)?(c=!0,d=t.some(v=>ca(v)||wh(v)),u=()=>t.map(v=>{if(Tn(v))return v.value;if(ca(v))return Qs(v);if(Te(v))return hs(v,l,2)})):Te(t)?e?u=()=>hs(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return h&&h(),Er(t,l,3,[f])}:u=Fr,e&&r){const v=u;u=()=>Qs(v())}let h,f=v=>{h=y.onStop=()=>{hs(v,l,4)}},p;if(oc)if(f=Fr,e?n&&Er(e,l,3,[u(),c?[]:void 0,f]):u(),i==="sync"){const v=KR();p=v.__watcherHandles||(v.__watcherHandles=[])}else return Fr;let m=c?new Array(t.length).fill(vu):vu;const g=()=>{if(y.active)if(e){const v=y.run();(r||d||(c?v.some((S,k)=>vo(S,m[k])):vo(v,m)))&&(h&&h(),Er(e,l,3,[v,m===vu?void 0:c&&m[0]===vu?[]:m,f]),m=v)}else y.run()};g.allowRecurse=!!e;let _;i==="sync"?_=g:i==="post"?_=()=>$n(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),_=()=>yg(g));const y=new ug(u,_);e?n?g():m=y.run():i==="post"?$n(y.run.bind(y),l&&l.suspense):y.run();const T=()=>{y.stop(),l&&l.scope&&ag(l.scope.effects,y)};return p&&p.push(T),T}function ZC(t,e,n){const r=this.proxy,i=Tt(t)?t.includes(".")?kb(r,t):()=>r[t]:t.bind(r,r);let s;Te(e)?s=e:(s=e.handler,n=e);const o=Kt;Ia(this);const a=xb(i,s.bind(r),n);return o?Ia(o):oo(),a}function kb(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Qs(t,e){if(!nt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Tn(t))Qs(t.value,e);else if(he(t))for(let n=0;n<t.length;n++)Qs(t[n],e);else if(fd(t)||la(t))t.forEach(n=>{Qs(n,e)});else if(sb(t))for(const n in t)Qs(t[n],e);return t}function Cl(t,e){const n=ln;if(n===null)return t;const r=Rd(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,u=ot]=e[s];o&&(Te(o)&&(o={mounted:o,updated:o}),o.deep&&Qs(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function Vs(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Ha(),Er(l,n,8,[t.el,a,t,e]),za())}}const Xi=Symbol("_leaveCb"),wu=Symbol("_enterCb");function eR(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Id(()=>{t.isMounted=!0}),Vb(()=>{t.isUnmounting=!0}),t}const fr=[Function,Array],Ob={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fr,onEnter:fr,onAfterEnter:fr,onEnterCancelled:fr,onBeforeLeave:fr,onLeave:fr,onAfterLeave:fr,onLeaveCancelled:fr,onBeforeAppear:fr,onAppear:fr,onAfterAppear:fr,onAppearCancelled:fr},tR={name:"BaseTransition",props:Ob,setup(t,{slots:e}){const n=Jb(),r=eR();let i;return()=>{const s=e.default&&qb(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==Ar){o=m;break}}const a=He(t),{mode:l}=a;if(r.isLeaving)return Pf(o);const u=qy(o);if(!u)return Pf(o);const d=Lp(u,a,r,n);Fp(u,d);const c=n.subTree,h=c&&qy(c);let f=!1;const{getTransitionKey:p}=u.type;if(p){const m=p();i===void 0?i=m:m!==i&&(i=m,f=!0)}if(h&&h.type!==Ar&&(!Ks(u,h)||f)){const m=Lp(h,a,r,n);if(Fp(h,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Pf(o);l==="in-out"&&u.type!==Ar&&(m.delayLeave=(g,_,y)=>{const T=Db(r,h);T[String(h.key)]=h,g[Xi]=()=>{_(),g[Xi]=void 0,delete d.delayedLeave},d.delayedLeave=y})}return o}}},nR=tR;function Db(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Lp(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onLeave:h,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:_,onAppearCancelled:y}=e,T=String(t.key),v=Db(n,t),S=(x,R)=>{x&&Er(x,r,9,R)},k=(x,R)=>{const M=R[1];S(x,R),he(x)?x.every(z=>z.length<=1)&&M():x.length<=1&&M()},P={mode:s,persisted:o,beforeEnter(x){let R=a;if(!n.isMounted)if(i)R=m||a;else return;x[Xi]&&x[Xi](!0);const M=v[T];M&&Ks(t,M)&&M.el[Xi]&&M.el[Xi](),S(R,[x])},enter(x){let R=l,M=u,z=d;if(!n.isMounted)if(i)R=g||l,M=_||u,z=y||d;else return;let D=!1;const Z=x[wu]=J=>{D||(D=!0,J?S(z,[x]):S(M,[x]),P.delayedLeave&&P.delayedLeave(),x[wu]=void 0)};R?k(R,[x,Z]):Z()},leave(x,R){const M=String(t.key);if(x[wu]&&x[wu](!0),n.isUnmounting)return R();S(c,[x]);let z=!1;const D=x[Xi]=Z=>{z||(z=!0,R(),Z?S(p,[x]):S(f,[x]),x[Xi]=void 0,v[M]===t&&delete v[M])};v[M]=t,h?k(h,[x,D]):D()},clone(x){return Lp(x,e,n,r)}};return P}function Pf(t){if(Ed(t))return t=Ts(t),t.children=null,t}function qy(t){return Ed(t)?t.children?t.children[0]:void 0:t}function Fp(t,e){t.shapeFlag&6&&t.component?Fp(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qb(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ae?(o.patchFlag&128&&i++,r=r.concat(qb(o.children,e,a))):(e||o.type!==Ar)&&r.push(a!=null?Ts(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Mb(t,e){return Te(t)?(()=>Ut({name:t.name},e,{setup:t}))():t}const Rl=t=>!!t.type.__asyncLoader,Ed=t=>t.type.__isKeepAlive;function rR(t,e){Nb(t,"a",e)}function iR(t,e){Nb(t,"da",e)}function Nb(t,e,n=Kt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ad(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ed(i.parent.vnode)&&sR(r,e,n,i),i=i.parent}}function sR(t,e,n,r){const i=Ad(e,t,r,!0);Lb(()=>{ag(r[e],i)},n)}function Ad(t,e,n=Kt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ha(),Ia(n);const a=Er(e,n,t,o);return oo(),za(),a});return r?i.unshift(s):i.push(s),s}}const $i=t=>(e,n=Kt)=>(!oc||t==="sp")&&Ad(t,(...r)=>e(...r),n),oR=$i("bm"),Id=$i("m"),aR=$i("bu"),lR=$i("u"),Vb=$i("bum"),Lb=$i("um"),cR=$i("sp"),uR=$i("rtg"),hR=$i("rtc");function dR(t,e=Kt){Ad("ec",t,e)}const Fb="components";function Je(t,e){return pR(Fb,t,!0,e)||t}const fR=Symbol.for("v-ndc");function pR(t,e,n=!0,r=!1){const i=ln||Kt;if(i){const s=i.type;if(t===Fb){const a=zR(s,!1);if(a&&(a===e||a===di(e)||a===md(di(e))))return s}const o=My(i[t]||s[t],e)||My(i.appContext[t],e);return!o&&r?s:o}}function My(t,e){return t&&(t[e]||t[di(e)]||t[md(di(e))])}function Mt(t,e,n,r){let i;const s=n&&n[r];if(he(t)||Tt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(nt(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function Yu(t,e,n={},r,i){if(ln.isCE||ln.parent&&Rl(ln.parent)&&ln.parent.isCE)return e!=="default"&&(n.name=e),we("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),K();const o=s&&$b(s(n)),a=qo(Ae,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function $b(t){return t.some(e=>Ah(e)?!(e.type===Ar||e.type===Ae&&!$b(e.children)):!0)?t:null}const $p=t=>t?Zb(t)?Rd(t)||t.proxy:$p(t.parent):null,Pl=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$p(t.parent),$root:t=>$p(t.root),$emit:t=>t.emit,$options:t=>vg(t),$forceUpdate:t=>t.f||(t.f=()=>yg(t.update)),$nextTick:t=>t.n||(t.n=_g.bind(t.proxy)),$watch:t=>ZC.bind(t)}),xf=(t,e)=>t!==ot&&!t.__isScriptSetup&&Be(t,e),mR={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(xf(r,e))return o[e]=1,r[e];if(i!==ot&&Be(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Be(u,e))return o[e]=3,s[e];if(n!==ot&&Be(n,e))return o[e]=4,n[e];Up&&(o[e]=0)}}const d=Pl[e];let c,h;if(d)return e==="$attrs"&&Xn(t,"get",e),d(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==ot&&Be(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Be(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return xf(i,e)?(i[e]=n,!0):r!==ot&&Be(r,e)?(r[e]=n,!0):Be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ot&&Be(t,o)||xf(e,o)||(a=s[0])&&Be(a,o)||Be(r,o)||Be(Pl,o)||Be(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ny(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Up=!0;function gR(t){const e=vg(t),n=t.proxy,r=t.ctx;Up=!1,e.beforeCreate&&Vy(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:u,created:d,beforeMount:c,mounted:h,beforeUpdate:f,updated:p,activated:m,deactivated:g,beforeDestroy:_,beforeUnmount:y,destroyed:T,unmounted:v,render:S,renderTracked:k,renderTriggered:P,errorCaptured:x,serverPrefetch:R,expose:M,inheritAttrs:z,components:D,directives:Z,filters:J}=e;if(u&&_R(u,r,null),o)for(const W in o){const Y=o[W];Te(Y)&&(r[W]=Y.bind(n))}if(i){const W=i.call(n,n);nt(W)&&(t.data=vd(W))}if(Up=!0,s)for(const W in s){const Y=s[W],Ce=Te(Y)?Y.bind(n,n):Te(Y.get)?Y.get.bind(n,n):Fr,C=!Te(Y)&&Te(Y.set)?Y.set.bind(n):Fr,Oe=yr({get:Ce,set:C});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:Ge=>Oe.value=Ge})}if(a)for(const W in a)Ub(a[W],r,n,W);if(l){const W=Te(l)?l.call(n):l;Reflect.ownKeys(W).forEach(Y=>{Qu(Y,W[Y])})}d&&Vy(d,t,"c");function oe(W,Y){he(Y)?Y.forEach(Ce=>W(Ce.bind(n))):Y&&W(Y.bind(n))}if(oe(oR,c),oe(Id,h),oe(aR,f),oe(lR,p),oe(rR,m),oe(iR,g),oe(dR,x),oe(hR,k),oe(uR,P),oe(Vb,y),oe(Lb,v),oe(cR,R),he(M))if(M.length){const W=t.exposed||(t.exposed={});M.forEach(Y=>{Object.defineProperty(W,Y,{get:()=>n[Y],set:Ce=>n[Y]=Ce})})}else t.exposed||(t.exposed={});S&&t.render===Fr&&(t.render=S),z!=null&&(t.inheritAttrs=z),D&&(t.components=D),Z&&(t.directives=Z)}function _R(t,e,n=Fr){he(t)&&(t=Bp(t));for(const r in t){const i=t[r];let s;nt(i)?"default"in i?s=ii(i.from||r,i.default,!0):s=ii(i.from||r):s=ii(i),Tn(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Vy(t,e,n){Er(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ub(t,e,n,r){const i=r.includes(".")?kb(n,r):()=>n[r];if(Tt(t)){const s=e[t];Te(s)&&Sl(i,s)}else if(Te(t))Sl(i,t.bind(n));else if(nt(t))if(he(t))t.forEach(s=>Ub(s,e,n,r));else{const s=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(s)&&Sl(i,s,t)}}function vg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(u=>Th(l,u,o,!0)),Th(l,e,o)),nt(e)&&s.set(e,l),l}function Th(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Th(t,s,n,!0),i&&i.forEach(o=>Th(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=yR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yR={data:Ly,props:Fy,emits:Fy,methods:pl,computed:pl,beforeCreate:On,created:On,beforeMount:On,mounted:On,beforeUpdate:On,updated:On,beforeDestroy:On,beforeUnmount:On,destroyed:On,unmounted:On,activated:On,deactivated:On,errorCaptured:On,serverPrefetch:On,components:pl,directives:pl,watch:wR,provide:Ly,inject:vR};function Ly(t,e){return e?t?function(){return Ut(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function vR(t,e){return pl(Bp(t),Bp(e))}function Bp(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function On(t,e){return t?[...new Set([].concat(t,e))]:e}function pl(t,e){return t?Ut(Object.create(null),t,e):e}function Fy(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:Ut(Object.create(null),Ny(t),Ny(e??{})):e}function wR(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const r in e)n[r]=On(t[r],e[r]);return n}function Bb(){return{app:null,config:{isNativeTag:QS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bR=0;function TR(t,e){return function(r,i=null){Te(r)||(r=Ut({},r)),i!=null&&!nt(i)&&(i=null);const s=Bb(),o=new WeakSet;let a=!1;const l=s.app={_uid:bR++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:XR,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&Te(u.install)?(o.add(u),u.install(l,...d)):Te(u)&&(o.add(u),u(l,...d))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,d){return d?(s.components[u]=d,l):s.components[u]},directive(u,d){return d?(s.directives[u]=d,l):s.directives[u]},mount(u,d,c){if(!a){const h=we(r,i);return h.appContext=s,d&&e?e(h,u):t(h,u,c),a=!0,l._container=u,u.__vue_app__=l,Rd(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return s.provides[u]=d,l},runWithContext(u){Eh=l;try{return u()}finally{Eh=null}}};return l}}let Eh=null;function Qu(t,e){if(Kt){let n=Kt.provides;const r=Kt.parent&&Kt.parent.provides;r===n&&(n=Kt.provides=Object.create(r)),n[t]=e}}function ii(t,e,n=!1){const r=Kt||ln;if(r||Eh){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Eh._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Te(e)?e.call(r&&r.proxy):e}}function ER(t,e,n,r=!1){const i={},s={};yh(s,Cd,1),t.propsDefaults=Object.create(null),jb(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:yb(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function AR(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=He(i),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let c=0;c<d.length;c++){let h=d[c];if(bd(t.emitsOptions,h))continue;const f=e[h];if(l)if(Be(s,h))f!==s[h]&&(s[h]=f,u=!0);else{const p=di(h);i[p]=jp(l,a,p,f,t,!1)}else f!==s[h]&&(s[h]=f,u=!0)}}}else{jb(t,e,i,s)&&(u=!0);let d;for(const c in a)(!e||!Be(e,c)&&((d=ja(c))===c||!Be(e,d)))&&(l?n&&(n[c]!==void 0||n[d]!==void 0)&&(i[c]=jp(l,a,c,void 0,t,!0)):delete i[c]);if(s!==a)for(const c in s)(!e||!Be(e,c))&&(delete s[c],u=!0)}u&&Pi(t,"set","$attrs")}function jb(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ku(l))continue;const u=e[l];let d;i&&Be(i,d=di(l))?!s||!s.includes(d)?n[d]=u:(a||(a={}))[d]=u:bd(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(s){const l=He(n),u=a||ot;for(let d=0;d<s.length;d++){const c=s[d];n[c]=jp(i,l,c,u[c],t,!Be(u,c))}}return o}function jp(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Be(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Te(l)){const{propsDefaults:u}=i;n in u?r=u[n]:(Ia(i),r=u[n]=l.call(null,e),oo())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ja(n))&&(r=!0))}return r}function Hb(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Te(t)){const d=c=>{l=!0;const[h,f]=Hb(c,e,!0);Ut(o,h),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!l)return nt(t)&&r.set(t,aa),aa;if(he(s))for(let d=0;d<s.length;d++){const c=di(s[d]);$y(c)&&(o[c]=ot)}else if(s)for(const d in s){const c=di(d);if($y(c)){const h=s[d],f=o[c]=he(h)||Te(h)?{type:h}:Ut({},h);if(f){const p=jy(Boolean,f.type),m=jy(String,f.type);f[0]=p>-1,f[1]=m<0||p<m,(p>-1||Be(f,"default"))&&a.push(c)}}}const u=[o,a];return nt(t)&&r.set(t,u),u}function $y(t){return t[0]!=="$"}function Uy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function By(t,e){return Uy(t)===Uy(e)}function jy(t,e){return he(e)?e.findIndex(n=>By(n,t)):Te(e)&&By(e,t)?0:-1}const zb=t=>t[0]==="_"||t==="$stable",wg=t=>he(t)?t.map(Yr):[Yr(t)],IR=(t,e,n)=>{if(e._n)return e;const r=ic((...i)=>wg(e(...i)),n);return r._c=!1,r},Wb=(t,e,n)=>{const r=t._ctx;for(const i in t){if(zb(i))continue;const s=t[i];if(Te(s))e[i]=IR(i,s,r);else if(s!=null){const o=wg(s);e[i]=()=>o}}},Gb=(t,e)=>{const n=wg(e);t.slots.default=()=>n},SR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=He(e),yh(e,"_",n)):Wb(e,t.slots={})}else t.slots={},e&&Gb(t,e);yh(t.slots,Cd,1)},CR=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ot;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ut(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Wb(e,i)),o=e}else e&&(Gb(t,e),o={default:1});if(s)for(const a in i)!zb(a)&&o[a]==null&&delete i[a]};function Hp(t,e,n,r,i=!1){if(he(t)){t.forEach((h,f)=>Hp(h,e&&(he(e)?e[f]:e),n,r,i));return}if(Rl(r)&&!i)return;const s=r.shapeFlag&4?Rd(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,u=e&&e.r,d=a.refs===ot?a.refs={}:a.refs,c=a.setupState;if(u!=null&&u!==l&&(Tt(u)?(d[u]=null,Be(c,u)&&(c[u]=null)):Tn(u)&&(u.value=null)),Te(l))hs(l,a,12,[o,d]);else{const h=Tt(l),f=Tn(l);if(h||f){const p=()=>{if(t.f){const m=h?Be(c,l)?c[l]:d[l]:l.value;i?he(m)&&ag(m,s):he(m)?m.includes(s)||m.push(s):h?(d[l]=[s],Be(c,l)&&(c[l]=d[l])):(l.value=[s],t.k&&(d[t.k]=l.value))}else h?(d[l]=o,Be(c,l)&&(c[l]=o)):f&&(l.value=o,t.k&&(d[t.k]=o))};o?(p.id=-1,$n(p,n)):p()}}}const $n=JC;function RR(t){return PR(t)}function PR(t,e){const n=Op();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:d,parentNode:c,nextSibling:h,setScopeId:f=Fr,insertStaticContent:p}=t,m=(w,b,I,O=null,N=null,E=null,j=!1,$=null,B=!!b.dynamicChildren)=>{if(w===b)return;w&&!Ks(w,b)&&(O=q(w),Ge(w,N,E,!0),w=null),b.patchFlag===-2&&(B=!1,b.dynamicChildren=null);const{type:V,ref:ie,shapeFlag:X}=b;switch(V){case Sd:g(w,b,I,O);break;case Ar:_(w,b,I,O);break;case Ju:w==null&&y(b,I,O,j);break;case Ae:D(w,b,I,O,N,E,j,$,B);break;default:X&1?S(w,b,I,O,N,E,j,$,B):X&6?Z(w,b,I,O,N,E,j,$,B):(X&64||X&128)&&V.process(w,b,I,O,N,E,j,$,B,U)}ie!=null&&N&&Hp(ie,w&&w.ref,E,b||w,!b)},g=(w,b,I,O)=>{if(w==null)r(b.el=a(b.children),I,O);else{const N=b.el=w.el;b.children!==w.children&&u(N,b.children)}},_=(w,b,I,O)=>{w==null?r(b.el=l(b.children||""),I,O):b.el=w.el},y=(w,b,I,O)=>{[w.el,w.anchor]=p(w.children,b,I,O,w.el,w.anchor)},T=({el:w,anchor:b},I,O)=>{let N;for(;w&&w!==b;)N=h(w),r(w,I,O),w=N;r(b,I,O)},v=({el:w,anchor:b})=>{let I;for(;w&&w!==b;)I=h(w),i(w),w=I;i(b)},S=(w,b,I,O,N,E,j,$,B)=>{j=j||b.type==="svg",w==null?k(b,I,O,N,E,j,$,B):R(w,b,N,E,j,$,B)},k=(w,b,I,O,N,E,j,$)=>{let B,V;const{type:ie,props:X,shapeFlag:ae,transition:se,dirs:le}=w;if(B=w.el=o(w.type,E,X&&X.is,X),ae&8?d(B,w.children):ae&16&&x(w.children,B,null,O,N,E&&ie!=="foreignObject",j,$),le&&Vs(w,null,O,"created"),P(B,w,w.scopeId,j,O),X){for(const Ie in X)Ie!=="value"&&!Ku(Ie)&&s(B,Ie,null,X[Ie],E,w.children,O,N,je);"value"in X&&s(B,"value",null,X.value),(V=X.onVnodeBeforeMount)&&Kr(V,O,w)}le&&Vs(w,null,O,"beforeMount");const Re=xR(N,se);Re&&se.beforeEnter(B),r(B,b,I),((V=X&&X.onVnodeMounted)||Re||le)&&$n(()=>{V&&Kr(V,O,w),Re&&se.enter(B),le&&Vs(w,null,O,"mounted")},N)},P=(w,b,I,O,N)=>{if(I&&f(w,I),O)for(let E=0;E<O.length;E++)f(w,O[E]);if(N){let E=N.subTree;if(b===E){const j=N.vnode;P(w,j,j.scopeId,j.slotScopeIds,N.parent)}}},x=(w,b,I,O,N,E,j,$,B=0)=>{for(let V=B;V<w.length;V++){const ie=w[V]=$?Yi(w[V]):Yr(w[V]);m(null,ie,b,I,O,N,E,j,$)}},R=(w,b,I,O,N,E,j)=>{const $=b.el=w.el;let{patchFlag:B,dynamicChildren:V,dirs:ie}=b;B|=w.patchFlag&16;const X=w.props||ot,ae=b.props||ot;let se;I&&Ls(I,!1),(se=ae.onVnodeBeforeUpdate)&&Kr(se,I,b,w),ie&&Vs(b,w,I,"beforeUpdate"),I&&Ls(I,!0);const le=N&&b.type!=="foreignObject";if(V?M(w.dynamicChildren,V,$,I,O,le,E):j||Y(w,b,$,null,I,O,le,E,!1),B>0){if(B&16)z($,b,X,ae,I,O,N);else if(B&2&&X.class!==ae.class&&s($,"class",null,ae.class,N),B&4&&s($,"style",X.style,ae.style,N),B&8){const Re=b.dynamicProps;for(let Ie=0;Ie<Re.length;Ie++){const Qe=Re[Ie],St=X[Qe],Jt=ae[Qe];(Jt!==St||Qe==="value")&&s($,Qe,St,Jt,N,w.children,I,O,je)}}B&1&&w.children!==b.children&&d($,b.children)}else!j&&V==null&&z($,b,X,ae,I,O,N);((se=ae.onVnodeUpdated)||ie)&&$n(()=>{se&&Kr(se,I,b,w),ie&&Vs(b,w,I,"updated")},O)},M=(w,b,I,O,N,E,j)=>{for(let $=0;$<b.length;$++){const B=w[$],V=b[$],ie=B.el&&(B.type===Ae||!Ks(B,V)||B.shapeFlag&70)?c(B.el):I;m(B,V,ie,null,O,N,E,j,!0)}},z=(w,b,I,O,N,E,j)=>{if(I!==O){if(I!==ot)for(const $ in I)!Ku($)&&!($ in O)&&s(w,$,I[$],null,j,b.children,N,E,je);for(const $ in O){if(Ku($))continue;const B=O[$],V=I[$];B!==V&&$!=="value"&&s(w,$,V,B,j,b.children,N,E,je)}"value"in O&&s(w,"value",I.value,O.value)}},D=(w,b,I,O,N,E,j,$,B)=>{const V=b.el=w?w.el:a(""),ie=b.anchor=w?w.anchor:a("");let{patchFlag:X,dynamicChildren:ae,slotScopeIds:se}=b;se&&($=$?$.concat(se):se),w==null?(r(V,I,O),r(ie,I,O),x(b.children,I,ie,N,E,j,$,B)):X>0&&X&64&&ae&&w.dynamicChildren?(M(w.dynamicChildren,ae,I,N,E,j,$),(b.key!=null||N&&b===N.subTree)&&bg(w,b,!0)):Y(w,b,I,ie,N,E,j,$,B)},Z=(w,b,I,O,N,E,j,$,B)=>{b.slotScopeIds=$,w==null?b.shapeFlag&512?N.ctx.activate(b,I,O,j,B):J(b,I,O,N,E,j,B):ue(w,b,B)},J=(w,b,I,O,N,E,j)=>{const $=w.component=$R(w,O,N);if(Ed(w)&&($.ctx.renderer=U),UR($),$.asyncDep){if(N&&N.registerDep($,oe),!w.el){const B=$.subTree=we(Ar);_(null,B,b,I)}return}oe($,w,b,I,N,E,j)},ue=(w,b,I)=>{const O=b.component=w.component;if(XC(w,b,I))if(O.asyncDep&&!O.asyncResolved){W(O,b,I);return}else O.next=b,jC(O.update),O.update();else b.el=w.el,O.vnode=b},oe=(w,b,I,O,N,E,j)=>{const $=()=>{if(w.isMounted){let{next:ie,bu:X,u:ae,parent:se,vnode:le}=w,Re=ie,Ie;Ls(w,!1),ie?(ie.el=le.el,W(w,ie,j)):ie=le,X&&Xu(X),(Ie=ie.props&&ie.props.onVnodeBeforeUpdate)&&Kr(Ie,se,ie,le),Ls(w,!0);const Qe=Rf(w),St=w.subTree;w.subTree=Qe,m(St,Qe,c(St.el),q(St),w,N,E),ie.el=Qe.el,Re===null&&YC(w,Qe.el),ae&&$n(ae,N),(Ie=ie.props&&ie.props.onVnodeUpdated)&&$n(()=>Kr(Ie,se,ie,le),N)}else{let ie;const{el:X,props:ae}=b,{bm:se,m:le,parent:Re}=w,Ie=Rl(b);if(Ls(w,!1),se&&Xu(se),!Ie&&(ie=ae&&ae.onVnodeBeforeMount)&&Kr(ie,Re,b),Ls(w,!0),X&&_e){const Qe=()=>{w.subTree=Rf(w),_e(X,w.subTree,w,N,null)};Ie?b.type.__asyncLoader().then(()=>!w.isUnmounted&&Qe()):Qe()}else{const Qe=w.subTree=Rf(w);m(null,Qe,I,O,w,N,E),b.el=Qe.el}if(le&&$n(le,N),!Ie&&(ie=ae&&ae.onVnodeMounted)){const Qe=b;$n(()=>Kr(ie,Re,Qe),N)}(b.shapeFlag&256||Re&&Rl(Re.vnode)&&Re.vnode.shapeFlag&256)&&w.a&&$n(w.a,N),w.isMounted=!0,b=I=O=null}},B=w.effect=new ug($,()=>yg(V),w.scope),V=w.update=()=>B.run();V.id=w.uid,Ls(w,!0),V()},W=(w,b,I)=>{b.component=w;const O=w.vnode.props;w.vnode=b,w.next=null,AR(w,b.props,O,I),CR(w,b.children,I),Ha(),Oy(),za()},Y=(w,b,I,O,N,E,j,$,B=!1)=>{const V=w&&w.children,ie=w?w.shapeFlag:0,X=b.children,{patchFlag:ae,shapeFlag:se}=b;if(ae>0){if(ae&128){C(V,X,I,O,N,E,j,$,B);return}else if(ae&256){Ce(V,X,I,O,N,E,j,$,B);return}}se&8?(ie&16&&je(V,N,E),X!==V&&d(I,X)):ie&16?se&16?C(V,X,I,O,N,E,j,$,B):je(V,N,E,!0):(ie&8&&d(I,""),se&16&&x(X,I,O,N,E,j,$,B))},Ce=(w,b,I,O,N,E,j,$,B)=>{w=w||aa,b=b||aa;const V=w.length,ie=b.length,X=Math.min(V,ie);let ae;for(ae=0;ae<X;ae++){const se=b[ae]=B?Yi(b[ae]):Yr(b[ae]);m(w[ae],se,I,null,N,E,j,$,B)}V>ie?je(w,N,E,!0,!1,X):x(b,I,O,N,E,j,$,B,X)},C=(w,b,I,O,N,E,j,$,B)=>{let V=0;const ie=b.length;let X=w.length-1,ae=ie-1;for(;V<=X&&V<=ae;){const se=w[V],le=b[V]=B?Yi(b[V]):Yr(b[V]);if(Ks(se,le))m(se,le,I,null,N,E,j,$,B);else break;V++}for(;V<=X&&V<=ae;){const se=w[X],le=b[ae]=B?Yi(b[ae]):Yr(b[ae]);if(Ks(se,le))m(se,le,I,null,N,E,j,$,B);else break;X--,ae--}if(V>X){if(V<=ae){const se=ae+1,le=se<ie?b[se].el:O;for(;V<=ae;)m(null,b[V]=B?Yi(b[V]):Yr(b[V]),I,le,N,E,j,$,B),V++}}else if(V>ae)for(;V<=X;)Ge(w[V],N,E,!0),V++;else{const se=V,le=V,Re=new Map;for(V=le;V<=ae;V++){const xt=b[V]=B?Yi(b[V]):Yr(b[V]);xt.key!=null&&Re.set(xt.key,V)}let Ie,Qe=0;const St=ae-le+1;let Jt=!1,Zt=0;const Qn=new Array(St);for(V=0;V<St;V++)Qn[V]=0;for(V=se;V<=X;V++){const xt=w[V];if(Qe>=St){Ge(xt,N,E,!0);continue}let jt;if(xt.key!=null)jt=Re.get(xt.key);else for(Ie=le;Ie<=ae;Ie++)if(Qn[Ie-le]===0&&Ks(xt,b[Ie])){jt=Ie;break}jt===void 0?Ge(xt,N,E,!0):(Qn[jt-le]=V+1,jt>=Zt?Zt=jt:Jt=!0,m(xt,b[jt],I,null,N,E,j,$,B),Qe++)}const gi=Jt?kR(Qn):aa;for(Ie=gi.length-1,V=St-1;V>=0;V--){const xt=le+V,jt=b[xt],Pr=xt+1<ie?b[xt+1].el:O;Qn[V]===0?m(null,jt,I,Pr,N,E,j,$,B):Jt&&(Ie<0||V!==gi[Ie]?Oe(jt,I,Pr,2):Ie--)}}},Oe=(w,b,I,O,N=null)=>{const{el:E,type:j,transition:$,children:B,shapeFlag:V}=w;if(V&6){Oe(w.component.subTree,b,I,O);return}if(V&128){w.suspense.move(b,I,O);return}if(V&64){j.move(w,b,I,U);return}if(j===Ae){r(E,b,I);for(let X=0;X<B.length;X++)Oe(B[X],b,I,O);r(w.anchor,b,I);return}if(j===Ju){T(w,b,I);return}if(O!==2&&V&1&&$)if(O===0)$.beforeEnter(E),r(E,b,I),$n(()=>$.enter(E),N);else{const{leave:X,delayLeave:ae,afterLeave:se}=$,le=()=>r(E,b,I),Re=()=>{X(E,()=>{le(),se&&se()})};ae?ae(E,le,Re):Re()}else r(E,b,I)},Ge=(w,b,I,O=!1,N=!1)=>{const{type:E,props:j,ref:$,children:B,dynamicChildren:V,shapeFlag:ie,patchFlag:X,dirs:ae}=w;if($!=null&&Hp($,null,I,w,!0),ie&256){b.ctx.deactivate(w);return}const se=ie&1&&ae,le=!Rl(w);let Re;if(le&&(Re=j&&j.onVnodeBeforeUnmount)&&Kr(Re,b,w),ie&6)yt(w.component,I,O);else{if(ie&128){w.suspense.unmount(I,O);return}se&&Vs(w,null,b,"beforeUnmount"),ie&64?w.type.remove(w,b,I,N,U,O):V&&(E!==Ae||X>0&&X&64)?je(V,b,I,!1,!0):(E===Ae&&X&384||!N&&ie&16)&&je(B,b,I),O&&Bt(w)}(le&&(Re=j&&j.onVnodeUnmounted)||se)&&$n(()=>{Re&&Kr(Re,b,w),se&&Vs(w,null,b,"unmounted")},I)},Bt=w=>{const{type:b,el:I,anchor:O,transition:N}=w;if(b===Ae){Ke(I,O);return}if(b===Ju){v(w);return}const E=()=>{i(I),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(w.shapeFlag&1&&N&&!N.persisted){const{leave:j,delayLeave:$}=N,B=()=>j(I,E);$?$(w.el,E,B):B()}else E()},Ke=(w,b)=>{let I;for(;w!==b;)I=h(w),i(w),w=I;i(b)},yt=(w,b,I)=>{const{bum:O,scope:N,update:E,subTree:j,um:$}=w;O&&Xu(O),N.stop(),E&&(E.active=!1,Ge(j,w,b,I)),$&&$n($,b),$n(()=>{w.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},je=(w,b,I,O=!1,N=!1,E=0)=>{for(let j=E;j<w.length;j++)Ge(w[j],b,I,O,N)},q=w=>w.shapeFlag&6?q(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el),H=(w,b,I)=>{w==null?b._vnode&&Ge(b._vnode,null,null,!0):m(b._vnode||null,w,b,null,null,null,I),Oy(),Cb(),b._vnode=w},U={p:m,um:Ge,m:Oe,r:Bt,mt:J,mc:x,pc:Y,pbc:M,n:q,o:t};let ne,_e;return e&&([ne,_e]=e(U)),{render:H,hydrate:ne,createApp:TR(H,ne)}}function Ls({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xR(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bg(t,e,n=!1){const r=t.children,i=e.children;if(he(r)&&he(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Yi(i[s]),a.el=o.el),n||bg(o,a)),a.type===Sd&&(a.el=o.el)}}function kR(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const OR=t=>t.__isTeleport,xl=t=>t&&(t.disabled||t.disabled===""),Hy=t=>typeof SVGElement<"u"&&t instanceof SVGElement,zp=(t,e)=>{const n=t&&t.to;return Tt(n)?e?e(n):null:n},DR={__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,u){const{mc:d,pc:c,pbc:h,o:{insert:f,querySelector:p,createText:m,createComment:g}}=u,_=xl(e.props);let{shapeFlag:y,children:T,dynamicChildren:v}=e;if(t==null){const S=e.el=m(""),k=e.anchor=m("");f(S,n,r),f(k,n,r);const P=e.target=zp(e.props,p),x=e.targetAnchor=m("");P&&(f(x,P),o=o||Hy(P));const R=(M,z)=>{y&16&&d(T,M,z,i,s,o,a,l)};_?R(n,k):P&&R(P,x)}else{e.el=t.el;const S=e.anchor=t.anchor,k=e.target=t.target,P=e.targetAnchor=t.targetAnchor,x=xl(t.props),R=x?n:k,M=x?S:P;if(o=o||Hy(k),v?(h(t.dynamicChildren,v,R,i,s,o,a),bg(t,e,!0)):l||c(t,e,R,M,i,s,o,a,!1),_)x?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):bu(e,n,S,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const z=e.target=zp(e.props,p);z&&bu(e,z,null,u,0)}else x&&bu(e,k,P,u,1)}Kb(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:d,target:c,props:h}=t;if(c&&s(d),o&&s(u),a&16){const f=o||!xl(h);for(let p=0;p<l.length;p++){const m=l[p];i(m,e,n,f,!!m.dynamicChildren)}}},move:bu,hydrate:qR};function bu(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:d}=t,c=s===2;if(c&&r(o,e,n),(!c||xl(d))&&l&16)for(let h=0;h<u.length;h++)i(u[h],e,n,2);c&&r(a,e,n)}function qR(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const d=e.target=zp(e.props,l);if(d){const c=d._lpa||d.firstChild;if(e.shapeFlag&16)if(xl(e.props))e.anchor=u(o(t),e,a(t),n,r,i,s),e.targetAnchor=c;else{e.anchor=o(t);let h=c;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(c,e,d,n,r,i,s)}Kb(e)}return e.anchor&&o(e.anchor)}const MR=DR;function Kb(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ae=Symbol.for("v-fgt"),Sd=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),Ju=Symbol.for("v-stc"),kl=[];let Lr=null;function K(t=!1){kl.push(Lr=t?null:[])}function NR(){kl.pop(),Lr=kl[kl.length-1]||null}let sc=1;function zy(t){sc+=t}function Xb(t){return t.dynamicChildren=sc>0?Lr||aa:null,NR(),sc>0&&Lr&&Lr.push(t),t}function Q(t,e,n,r,i,s){return Xb(A(t,e,n,r,i,s,!0))}function qo(t,e,n,r,i){return Xb(we(t,e,n,r,i,!0))}function Ah(t){return t?t.__v_isVNode===!0:!1}function Ks(t,e){return t.type===e.type&&t.key===e.key}const Cd="__vInternal",Yb=({key:t})=>t??null,Zu=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Tt(t)||Tn(t)||Te(t)?{i:ln,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,r=0,i=null,s=t===Ae?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yb(e),ref:e&&Zu(e),scopeId:Td,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ln};return a?(Tg(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Tt(n)?8:16),sc>0&&!o&&Lr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Lr.push(l),l}const we=VR;function VR(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===fR)&&(t=Ar),Ah(t)){const a=Ts(t,e,!0);return n&&Tg(a,n),sc>0&&!s&&Lr&&(a.shapeFlag&6?Lr[Lr.indexOf(t)]=a:Lr.push(a)),a.patchFlag|=-2,a}if(WR(t)&&(t=t.__vccOpts),e){e=Qb(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=wo(a)),nt(l)&&(vb(l)&&!he(l)&&(l=Ut({},l)),e.style=gd(l))}const o=Tt(t)?1:QC(t)?128:OR(t)?64:nt(t)?4:Te(t)?2:0;return A(t,e,n,r,i,o,s,!0)}function Qb(t){return t?vb(t)||Cd in t?Ut({},t):t:null}function Ts(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?qe(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yb(a),ref:e&&e.ref?n&&i?he(i)?i.concat(Zu(e)):[i,Zu(e)]:Zu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ts(t.ssContent),ssFallback:t.ssFallback&&Ts(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function so(t=" ",e=0){return we(Sd,null,t,e)}function Bc(t,e){const n=we(Ju,null,t);return n.staticCount=e,n}function Ih(t="",e=!1){return e?(K(),qo(Ar,null,t)):we(Ar,null,t)}function Yr(t){return t==null||typeof t=="boolean"?we(Ar):he(t)?we(Ae,null,t.slice()):typeof t=="object"?Yi(t):we(Sd,null,String(t))}function Yi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ts(t)}function Tg(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Tg(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Cd in e)?e._ctx=ln:i===3&&ln&&(ln.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Te(e)?(e={default:e,_ctx:ln},n=32):(e=String(e),r&64?(n=16,e=[so(e)]):n=8);t.children=e,t.shapeFlag|=n}function qe(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=wo([e.class,r.class]));else if(i==="style")e.style=gd([e.style,r.style]);else if(dd(i)){const s=e[i],o=r[i];o&&s!==o&&!(he(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Kr(t,e,n,r=null){Er(t,e,7,[n,r])}const LR=Bb();let FR=0;function $R(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||LR,s={uid:FR++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new fC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hb(r,i),emitsOptions:Pb(r,i),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:r.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=WC.bind(null,s),t.ce&&t.ce(s),s}let Kt=null;const Jb=()=>Kt||ln;let Eg,jo,Wy="__VUE_INSTANCE_SETTERS__";(jo=Op()[Wy])||(jo=Op()[Wy]=[]),jo.push(t=>Kt=t),Eg=t=>{jo.length>1?jo.forEach(e=>e(t)):jo[0](t)};const Ia=t=>{Eg(t),t.scope.on()},oo=()=>{Kt&&Kt.scope.off(),Eg(null)};function Zb(t){return t.vnode.shapeFlag&4}let oc=!1;function UR(t,e=!1){oc=e;const{props:n,children:r}=t.vnode,i=Zb(t);ER(t,n,i,e),SR(t,r);const s=i?BR(t,e):void 0;return oc=!1,s}function BR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wb(new Proxy(t.ctx,mR));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?HR(t):null;Ia(t),Ha();const s=hs(r,t,0,[t.props,i]);if(za(),oo(),rb(s)){if(s.then(oo,oo),e)return s.then(o=>{Gy(t,o,e)}).catch(o=>{wd(o,t,0)});t.asyncDep=s}else Gy(t,s,e)}else eT(t,e)}function Gy(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:nt(e)&&(t.setupState=Ab(e)),eT(t,n)}let Ky;function eT(t,e,n){const r=t.type;if(!t.render){if(!e&&Ky&&!r.render){const i=r.template||vg(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=Ut(Ut({isCustomElement:s,delimiters:a},o),l);r.render=Ky(i,u)}}t.render=r.render||Fr}{Ia(t),Ha();try{gR(t)}finally{za(),oo()}}}function jR(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Xn(t,"get","$attrs"),e[n]}}))}function HR(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return jR(t)},slots:t.slots,emit:t.emit,expose:e}}function Rd(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ab(wb(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pl)return Pl[n](t)},has(e,n){return n in e||n in Pl}}))}function zR(t,e=!0){return Te(t)?t.displayName||t.name:t.name||e&&t.__name}function WR(t){return Te(t)&&"__vccOpts"in t}const yr=(t,e)=>$C(t,e,oc);function Ag(t,e,n){const r=arguments.length;return r===2?nt(e)&&!he(e)?Ah(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ah(n)&&(n=[n]),we(t,e,n))}const GR=Symbol.for("v-scx"),KR=()=>ii(GR),XR="3.3.7",YR="http://www.w3.org/2000/svg",Xs=typeof document<"u"?document:null,Xy=Xs&&Xs.createElement("template"),QR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Xs.createElementNS(YR,t):Xs.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Xs.createTextNode(t),createComment:t=>Xs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Xy.innerHTML=r?`<svg>${t}</svg>`:t;const a=Xy.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hi="transition",rl="animation",ac=Symbol("_vtc"),Ig=(t,{slots:e})=>Ag(nR,JR(t),e);Ig.displayName="Transition";const tT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ig.props=Ut({},Ob,tT);const Fs=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yy=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function JR(t){const e={};for(const D in t)D in tT||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:d=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=ZR(i),m=p&&p[0],g=p&&p[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:T,onLeave:v,onLeaveCancelled:S,onBeforeAppear:k=_,onAppear:P=y,onAppearCancelled:x=T}=e,R=(D,Z,J)=>{$s(D,Z?d:a),$s(D,Z?u:o),J&&J()},M=(D,Z)=>{D._isLeaving=!1,$s(D,c),$s(D,f),$s(D,h),Z&&Z()},z=D=>(Z,J)=>{const ue=D?P:y,oe=()=>R(Z,D,J);Fs(ue,[Z,oe]),Qy(()=>{$s(Z,D?l:s),zi(Z,D?d:a),Yy(ue)||Jy(Z,r,m,oe)})};return Ut(e,{onBeforeEnter(D){Fs(_,[D]),zi(D,s),zi(D,o)},onBeforeAppear(D){Fs(k,[D]),zi(D,l),zi(D,u)},onEnter:z(!1),onAppear:z(!0),onLeave(D,Z){D._isLeaving=!0;const J=()=>M(D,Z);zi(D,c),nP(),zi(D,h),Qy(()=>{D._isLeaving&&($s(D,c),zi(D,f),Yy(v)||Jy(D,r,g,J))}),Fs(v,[D,J])},onEnterCancelled(D){R(D,!1),Fs(T,[D])},onAppearCancelled(D){R(D,!0),Fs(x,[D])},onLeaveCancelled(D){M(D),Fs(S,[D])}})}function ZR(t){if(t==null)return null;if(nt(t))return[kf(t.enter),kf(t.leave)];{const e=kf(t);return[e,e]}}function kf(t){return rC(t)}function zi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ac]||(t[ac]=new Set)).add(e)}function $s(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ac];n&&(n.delete(e),n.size||(t[ac]=void 0))}function Qy(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let eP=0;function Jy(t,e,n,r){const i=t._endId=++eP,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=tP(t,e);if(!o)return r();const u=o+"end";let d=0;const c=()=>{t.removeEventListener(u,h),s()},h=f=>{f.target===t&&++d>=l&&c()};setTimeout(()=>{d<l&&c()},a+1),t.addEventListener(u,h)}function tP(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${Hi}Delay`),s=r(`${Hi}Duration`),o=Zy(i,s),a=r(`${rl}Delay`),l=r(`${rl}Duration`),u=Zy(a,l);let d=null,c=0,h=0;e===Hi?o>0&&(d=Hi,c=o,h=s.length):e===rl?u>0&&(d=rl,c=u,h=l.length):(c=Math.max(o,u),d=c>0?o>u?Hi:rl:null,h=d?d===Hi?s.length:l.length:0);const f=d===Hi&&/\b(transform|all)(,|$)/.test(r(`${Hi}Property`).toString());return{type:d,timeout:c,propCount:h,hasTransform:f}}function Zy(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ev(n)+ev(t[r])))}function ev(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nP(){return document.body.offsetHeight}function rP(t,e,n){const r=t[ac];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const iP=Symbol("_vod");function sP(t,e,n){const r=t.style,i=Tt(n);if(n&&!i){if(e&&!Tt(e))for(const s in e)n[s]==null&&Wp(r,s,"");for(const s in n)Wp(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),iP in t&&(r.display=s)}}const tv=/\s*!important$/;function Wp(t,e,n){if(he(n))n.forEach(r=>Wp(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=oP(t,e);tv.test(n)?t.setProperty(ja(r),n.replace(tv,""),"important"):t[r]=n}}const nv=["Webkit","Moz","ms"],Of={};function oP(t,e){const n=Of[e];if(n)return n;let r=di(e);if(r!=="filter"&&r in t)return Of[e]=r;r=md(r);for(let i=0;i<nv.length;i++){const s=nv[i]+r;if(s in t)return Of[e]=s}return e}const rv="http://www.w3.org/1999/xlink";function aP(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rv,e.slice(6,e.length)):t.setAttributeNS(rv,e,n);else{const s=uC(e);n==null||s&&!ob(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function lP(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,d=n??"";u!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=ob(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ys(t,e,n,r){t.addEventListener(e,n,r)}function cP(t,e,n,r){t.removeEventListener(e,n,r)}const iv=Symbol("_vei");function uP(t,e,n,r,i=null){const s=t[iv]||(t[iv]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=hP(e);if(r){const u=s[e]=pP(r,i);Ys(t,a,u,l)}else o&&(cP(t,a,o,l),s[e]=void 0)}}const sv=/(?:Once|Passive|Capture)$/;function hP(t){let e;if(sv.test(t)){e={};let r;for(;r=t.match(sv);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ja(t.slice(2)),e]}let Df=0;const dP=Promise.resolve(),fP=()=>Df||(dP.then(()=>Df=0),Df=Date.now());function pP(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Er(mP(r,n.value),e,5,[r])};return n.value=t,n.attached=fP(),n}function mP(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ov=/^on[a-z]/,gP=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?rP(t,r,i):e==="style"?sP(t,n,r):dd(e)?og(e)||uP(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_P(t,e,r,i))?lP(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),aP(t,e,r,i))};function _P(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ov.test(e)&&Te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ov.test(e)&&Tt(n)?!1:e in t}const Sh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Xu(e,n):e};function yP(t){t.target.composing=!0}function av(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ha=Symbol("_assign"),Ch={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[ha]=Sh(i);const s=r||i.props&&i.props.type==="number";Ys(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=vh(a)),t[ha](a)}),n&&Ys(t,"change",()=>{t.value=t.value.trim()}),e||(Ys(t,"compositionstart",yP),Ys(t,"compositionend",av),Ys(t,"change",av))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t[ha]=Sh(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&vh(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vP={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=fd(e);Ys(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?vh(Rh(o)):Rh(o));t[ha](t.multiple?i?new Set(s):s:s[0])}),t[ha]=Sh(r)},mounted(t,{value:e}){lv(t,e)},beforeUpdate(t,e,n){t[ha]=Sh(n)},updated(t,{value:e}){lv(t,e)}};function lv(t,e){const n=t.multiple;if(!(n&&!he(e)&&!fd(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=Rh(s);if(n)he(e)?s.selected=dC(e,o)>-1:s.selected=e.has(o);else if(_d(Rh(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Rh(t){return"_value"in t?t._value:t.value}const wP=["ctrl","shift","alt","meta"],bP={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wP.some(n=>t[`${n}Key`]&&!e.includes(n))},TP=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=bP[e[i]];if(s&&s(n,e))return}return t(n,...r)},EP=Ut({patchProp:gP},QR);let cv;function AP(){return cv||(cv=RR(EP))}const IP=(...t)=>{const e=AP().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=SP(r);if(!i)return;const s=e._component;!Te(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function SP(t){return Tt(t)?document.querySelector(t):t}function wi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nT(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Sa={duration:.5,overwrite:!1,delay:0},Sg,En,wt,wr=1e8,tt=1/wr,Gp=Math.PI*2,CP=Gp/4,RP=0,rT=Math.sqrt,PP=Math.cos,xP=Math.sin,Xt=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},Oi=function(e){return typeof e=="number"},Cg=function(e){return typeof e>"u"},fi=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},Rg=function(){return typeof window<"u"},Tu=function(e){return bt(e)||Xt(e)},iT=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,Kp=/(?:-?\.?\d|\.)+/gi,sT=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,oT=/[+-]=-?[.\d]+/,aT=/[^,'"\[\]\s]+/gi,kP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,mr,Xp,Pg,hr={},Ph={},lT,cT=function(e){return(Ph=bo(e,hr))&&Yn},xg=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},xh=function(e,n){return!n&&console.warn(e)},uT=function(e,n){return e&&(hr[e]=n)&&Ph&&(Ph[e]=n)||hr},lc=function(){return 0},OP={suppressEvents:!0,isStart:!0,kill:!1},eh={suppressEvents:!0,kill:!1},DP={suppressEvents:!0},kg={},ds=[],Yp={},hT,rr={},Mf={},uv=30,th=[],Og="",Dg=function(e){var n=e[0],r,i;if(fi(n)||bt(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(i=th.length;i--&&!th[i].targetTest(n););r=th[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new MT(e[i],r)))||e.splice(i,1);return e},ao=function(e){return e._gsap||Dg(br(e))[0]._gsap},dT=function(e,n,r){return(r=e[n])&&bt(r)?e[n]():Cg(r)&&e.getAttribute&&e.getAttribute(n)||r},zn=function(e,n){return(e=e.split(",")).forEach(n)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},sn=function(e){return Math.round(e*1e7)/1e7||0},da=function(e,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},qP=function(e,n){for(var r=n.length,i=0;e.indexOf(n[i])<0&&++i<r;);return i<r},kh=function(){var e=ds.length,n=ds.slice(0),r,i;for(Yp={},ds.length=0,r=0;r<e;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},fT=function(e,n,r,i){ds.length&&!En&&kh(),e.render(n,r,i||En&&n<0&&(e._initted||e._startAt)),ds.length&&!En&&kh()},pT=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(aT).length<2?n:Xt(e)?e.trim():e},mT=function(e){return e},Sr=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},MP=function(e){return function(n,r){for(var i in r)i in n||i==="duration"&&e||i==="ease"||(n[i]=r[i])}},bo=function(e,n){for(var r in n)e[r]=n[r];return e},hv=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=fi(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},Oh=function(e,n){var r={},i;for(i in e)i in n||(r[i]=e[i]);return r},Ol=function(e){var n=e.parent||pt,r=e.keyframes?MP(An(e.keyframes)):Sr;if(Hn(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},NP=function(e,n){for(var r=e.length,i=r===n.length;i&&r--&&e[r]===n[r];);return r<0},gT=function(e,n,r,i,s){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[i]=n,n._prev=o,n.parent=n._dp=e,n},Pd=function(e,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var s=n._prev,o=n._next;s?s._next=o:e[r]===n&&(e[r]=o),o?o._prev=s:e[i]===n&&(e[i]=s),n._next=n._prev=n.parent=null},Es=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},lo=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},VP=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Qp=function(e,n,r,i){return e._startAt&&(En?e._startAt.revert(eh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},LP=function t(e){return!e||e._ts&&t(e.parent)},dv=function(e){return e._repeat?Ca(e._tTime,e=e.duration()+e._rDelay)*e:0},Ca=function(e,n){var r=Math.floor(e/=n);return e&&r===e?r-1:r},Dh=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},xd=function(e){return e._end=sn(e._start+(e._tDur/Math.abs(e._ts||e._rts||tt)||0))},kd=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=sn(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),xd(e),r._dirty||lo(r,e)),e},_T=function(e,n){var r;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(r=Dh(e.rawTime(),n),(!n._dur||jc(0,n.totalDuration(),r)-n._tTime>tt)&&n.render(r,!0)),lo(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-tt}},Jr=function(e,n,r,i){return n.parent&&Es(n),n._start=sn((Oi(r)?r:r||e!==pt?pr(e,r,n):e._time)+n._delay),n._end=sn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),gT(e,n,"_first","_last",e._sort?"_start":0),Jp(n)||(e._recent=n),i||_T(e,n),e._ts<0&&kd(e,e._tTime),e},yT=function(e,n){return(hr.ScrollTrigger||xg("scrollTrigger",n))&&hr.ScrollTrigger.create(n,e)},vT=function(e,n,r,i,s){if(Mg(e,n,s),!e._initted)return 1;if(!r&&e._pt&&!En&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hT!==ir.frame)return ds.push(e),e._lazy=[s,i],1},FP=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Jp=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},$P=function(e,n,r,i){var s=e.ratio,o=n<0||!n&&(!e._start&&FP(e)&&!(!e._initted&&Jp(e))||(e._ts<0||e._dp._ts<0)&&!Jp(e))?0:1,a=e._rDelay,l=0,u,d,c;if(a&&e._repeat&&(l=jc(0,e._tDur,n),d=Ca(l,a),e._yoyo&&d&1&&(o=1-o),d!==Ca(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||En||i||e._zTime===tt||!n&&e._zTime){if(!e._initted&&vT(e,n,i,r,l))return;for(c=e._zTime,e._zTime=n||(r?tt:0),r||(r=n&&!c),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;n<0&&Qp(e,n,r,!0),e._onUpdate&&!r&&Tr(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&Tr(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&Es(e,1),!r&&!En&&(Tr(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},UP=function(e,n,r){var i;if(r>n)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},Ra=function(e,n,r,i){var s=e._repeat,o=sn(n)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:sn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&kd(e,e._tTime=e._tDur*a),e.parent&&xd(e),r||lo(e.parent,e),e},fv=function(e){return e instanceof Bn?lo(e):Ra(e,e._dur)},BP={_start:0,endTime:lc,totalDuration:lc},pr=function t(e,n,r){var i=e.labels,s=e._recent||BP,o=e.duration()>=wr?s.endTime(!1):e._dur,a,l,u;return Xt(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),u=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(a<0?s:r).totalDuration()/100:1)):a<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),u&&r&&(l=l/100*(An(r)?r[0]:r).totalDuration()),a>1?t(e,n.substr(0,a-1),r)+l:o+l)):n==null?o:+n},Dl=function(e,n,r){var i=Oi(n[1]),s=(i?2:1)+(e<2?0:1),o=n[s],a,l;if(i&&(o.duration=n[1]),o.parent=r,e){for(a=o,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;o.immediateRender=Hn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=n[s-1]}return new Dt(n[0],o,n[s+1])},Ps=function(e,n){return e||e===0?n(e):n},jc=function(e,n,r){return r<e?e:r>n?n:r},bn=function(e,n){return!Xt(e)||!(n=kP.exec(e))?"":n[1]},jP=function(e,n,r){return Ps(r,function(i){return jc(e,n,i)})},Zp=[].slice,wT=function(e,n){return e&&fi(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&fi(e[0]))&&!e.nodeType&&e!==mr},HP=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(i){var s;return Xt(i)&&!n||wT(i,1)?(s=r).push.apply(s,br(i)):r.push(i)})||r},br=function(e,n,r){return wt&&!n&&wt.selector?wt.selector(e):Xt(e)&&!r&&(Xp||!Pa())?Zp.call((n||Pg).querySelectorAll(e),0):An(e)?HP(e,r):wT(e)?Zp.call(e,0):e?[e]:[]},em=function(e){return e=br(e)[0]||xh("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return br(n,r.querySelectorAll?r:r===e?xh("Invalid scope")||Pg.createElement("div"):e)}},bT=function(e){return e.sort(function(){return .5-Math.random()})},TT=function(e){if(bt(e))return e;var n=fi(e)?e:{each:e},r=co(n.ease),i=n.from||0,s=parseFloat(n.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,u=n.axis,d=i,c=i;return Xt(i)?d=c={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(d=i[0],c=i[1]),function(h,f,p){var m=(p||n).length,g=o[m],_,y,T,v,S,k,P,x,R;if(!g){if(R=n.grid==="auto"?0:(n.grid||[1,wr])[1],!R){for(P=-wr;P<(P=p[R++].getBoundingClientRect().left)&&R<m;);R--}for(g=o[m]=[],_=l?Math.min(R,m)*d-.5:i%R,y=R===wr?0:l?m*c/R-.5:i/R|0,P=0,x=wr,k=0;k<m;k++)T=k%R-_,v=y-(k/R|0),g[k]=S=u?Math.abs(u==="y"?v:T):rT(T*T+v*v),S>P&&(P=S),S<x&&(x=S);i==="random"&&bT(g),g.max=P-x,g.min=x,g.v=m=(parseFloat(n.amount)||parseFloat(n.each)*(R>m?m-1:u?u==="y"?m/R:R:Math.max(R,m/R))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=bn(n.amount||n.each)||0,r=r&&m<0?OT(r):r}return m=(g[h]-g.min)/g.max||0,sn(g.b+(r?r(m):m)*g.v)+g.u}},tm=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=sn(Math.round(parseFloat(r)/e)*e*n);return(i-i%1)/n+(Oi(r)?0:bn(r))}},ET=function(e,n){var r=An(e),i,s;return!r&&fi(e)&&(i=r=e.radius||wr,e.values?(e=br(e.values),(s=!Oi(e[0]))&&(i*=i)):e=tm(e.increment)),Ps(n,r?bt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=wr,d=0,c=e.length,h,f;c--;)s?(h=e[c].x-a,f=e[c].y-l,h=h*h+f*f):h=Math.abs(e[c]-a),h<u&&(u=h,d=c);return d=!i||u<=i?e[d]:o,s||d===o||Oi(o)?d:d+bn(o)}:tm(e))},AT=function(e,n,r,i){return Ps(An(e)?!n:r===!0?!!(r=0):!i,function(){return An(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*i)/i})},zP=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(s,o){return o(s)},i)}},WP=function(e,n){return function(r){return e(parseFloat(r))+(n||bn(r))}},GP=function(e,n,r){return ST(e,n,0,1,r)},IT=function(e,n,r){return Ps(r,function(i){return e[~~n(i)]})},KP=function t(e,n,r){var i=n-e;return An(e)?IT(e,t(0,e.length),n):Ps(r,function(s){return(i+(s-e)%i)%i+e})},XP=function t(e,n,r){var i=n-e,s=i*2;return An(e)?IT(e,t(0,e.length-1),n):Ps(r,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},cc=function(e){for(var n=0,r="",i,s,o,a;~(i=e.indexOf("random(",n));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?aT:Kp),r+=e.substr(n,i-n)+AT(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),n=o+1;return r+e.substr(n,e.length-n)},ST=function(e,n,r,i,s){var o=n-e,a=i-r;return Ps(s,function(l){return r+((l-e)/o*a||0)})},YP=function t(e,n,r,i){var s=isNaN(e+n)?0:function(f){return(1-f)*e+f*n};if(!s){var o=Xt(e),a={},l,u,d,c,h;if(r===!0&&(i=1)&&(r=null),o)e={p:e},n={p:n};else if(An(e)&&!An(n)){for(d=[],c=e.length,h=c-2,u=1;u<c;u++)d.push(t(e[u-1],e[u]));c--,s=function(p){p*=c;var m=Math.min(h,~~p);return d[m](p-m)},r=n}else i||(e=bo(An(e)?[]:{},e));if(!d){for(l in n)qg.call(a,e,l,"get",n[l]);s=function(p){return Lg(p,a)||(o?e.p:e)}}}return Ps(r,s)},pv=function(e,n,r){var i=e.labels,s=wr,o,a,l;for(o in i)a=i[o]-n,a<0==!!r&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Tr=function(e,n,r){var i=e.vars,s=i[n],o=wt,a=e._ctx,l,u,d;if(s)return l=i[n+"Params"],u=i.callbackScope||e,r&&ds.length&&kh(),a&&(wt=a),d=l?s.apply(u,l):s.call(u),wt=o,d},ml=function(e){return Es(e),e.scrollTrigger&&e.scrollTrigger.kill(!!En),e.progress()<1&&Tr(e,"onInterrupt"),e},na,CT=[],RT=function(e){if(Rg()&&e){e=!e.name&&e.default||e;var n=e.name,r=bt(e),i=n&&!r&&e.init?function(){this._props=[]}:e,s={init:lc,render:Lg,add:qg,kill:dx,modifier:hx,rawVars:0},o={targetTest:0,get:0,getSetter:Vg,aliases:{},register:0};if(Pa(),e!==i){if(rr[n])return;Sr(i,Sr(Oh(e,s),o)),bo(i.prototype,bo(s,Oh(e,o))),rr[i.prop=n]=i,e.targetTest&&(th.push(i),kg[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}uT(n,i),e.register&&e.register(Yn,i,Wn)}else e&&CT.push(e)},et=255,gl={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},Nf=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*et+.5|0},PT=function(e,n,r){var i=e?Oi(e)?[e>>16,e>>8&et,e&et]:0:gl.black,s,o,a,l,u,d,c,h,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gl[e])i=gl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&et,i&et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&et,e&et]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Kp),!n)l=+i[0]%360/360,u=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(u+1):d+u-d*u,s=d*2-o,i.length>3&&(i[3]*=1),i[0]=Nf(l+1/3,s,o),i[1]=Nf(l,s,o),i[2]=Nf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(sT),r&&i.length<4&&(i[3]=1),i}else i=e.match(Kp)||gl.transparent;i=i.map(Number)}return n&&!p&&(s=i[0]/et,o=i[1]/et,a=i[2]/et,c=Math.max(s,o,a),h=Math.min(s,o,a),d=(c+h)/2,c===h?l=u=0:(f=c-h,u=d>.5?f/(2-c-h):f/(c+h),l=c===s?(o-a)/f+(o<a?6:0):c===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(d*100+.5)),r&&i.length<4&&(i[3]=1),i},xT=function(e){var n=[],r=[],i=-1;return e.split(fs).forEach(function(s){var o=s.match(ta)||[];n.push.apply(n,o),r.push(i+=o.length+1)}),n.c=r,n},mv=function(e,n,r){var i="",s=(e+i).match(fs),o=n?"hsla(":"rgba(",a=0,l,u,d,c;if(!s)return e;if(s=s.map(function(h){return(h=PT(h,n,1))&&o+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),r&&(d=xT(e),l=r.c,l.join(i)!==d.c.join(i)))for(u=e.replace(fs,"1").split(ta),c=u.length-1;a<c;a++)i+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(d.length?d:s.length?s:r).shift());if(!u)for(u=e.split(fs),c=u.length-1;a<c;a++)i+=u[a]+s[a];return i+u[c]},fs=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gl)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),QP=/hsl[a]?\(/,kT=function(e){var n=e.join(" "),r;if(fs.lastIndex=0,fs.test(n))return r=QP.test(n),e[1]=mv(e[1],r),e[0]=mv(e[0],r,xT(e[1])),!0},uc,ir=function(){var t=Date.now,e=500,n=33,r=t(),i=r,s=1e3/240,o=s,a=[],l,u,d,c,h,f,p=function m(g){var _=t()-i,y=g===!0,T,v,S,k;if(_>e&&(r+=_-n),i+=_,S=i-r,T=S-o,(T>0||y)&&(k=++c.frame,h=S-c.time*1e3,c.time=S=S/1e3,o+=T+(T>=s?4:s-T),v=1),y||(l=u(m)),v)for(f=0;f<a.length;f++)a[f](S,h,k,g)};return c={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){lT&&(!Xp&&Rg()&&(mr=Xp=window,Pg=mr.document||{},hr.gsap=Yn,(mr.gsapVersions||(mr.gsapVersions=[])).push(Yn.version),cT(Ph||mr.GreenSockGlobals||!mr.gsap&&mr||{}),d=mr.requestAnimationFrame,CT.forEach(RT)),l&&c.sleep(),u=d||function(g){return setTimeout(g,o-c.time*1e3+1|0)},uc=1,p(2))},sleep:function(){(d?mr.cancelAnimationFrame:clearTimeout)(l),uc=0,u=lc},lagSmoothing:function(g,_){e=g||1/0,n=Math.min(_||33,e)},fps:function(g){s=1e3/(g||240),o=c.time*1e3+s},add:function(g,_,y){var T=_?function(v,S,k,P){g(v,S,k,P),c.remove(T)}:g;return c.remove(g),a[y?"unshift":"push"](T),Pa(),T},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},c}(),Pa=function(){return!uc&&ir.wake()},Ve={},JP=/^[\d.\-M][\d.\-,\s]/,ZP=/["']/g,ex=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),i=r[0],s=1,o=r.length,a,l,u;s<o;s++)l=r[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),n[i]=isNaN(u)?u.replace(ZP,"").trim():+u,i=l.substr(a+1).trim();return n},tx=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)},nx=function(e){var n=(e+"").split("("),r=Ve[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[ex(n[1])]:tx(e).split(",").map(pT)):Ve._CE&&JP.test(e)?Ve._CE("",e):r},OT=function(e){return function(n){return 1-e(1-n)}},DT=function t(e,n){for(var r=e._first,i;r;)r instanceof Bn?t(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?t(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},co=function(e,n){return e&&(bt(e)?e:Ve[e]||nx(e))||n},Mo=function(e,n,r,i){r===void 0&&(r=function(l){return 1-n(1-l)}),i===void 0&&(i=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:r,easeInOut:i},o;return zn(e,function(a){Ve[a]=hr[a]=s,Ve[o=a.toLowerCase()]=r;for(var l in s)Ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[a+"."+l]=s[l]}),s},qT=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Vf=function t(e,n,r){var i=n>=1?n:1,s=(r||(e?.3:.45))/(n<1?n:1),o=s/Gp*(Math.asin(1/i)||0),a=function(d){return d===1?1:i*Math.pow(2,-10*d)*xP((d-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:qT(a);return s=Gp/s,l.config=function(u,d){return t(e,u,d)},l},Lf=function t(e,n){n===void 0&&(n=1.70158);var r=function(o){return o?--o*o*((n+1)*o+n)+1:0},i=e==="out"?r:e==="in"?function(s){return 1-r(1-s)}:qT(r);return i.config=function(s){return t(e,s)},i};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Mo(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Mo("Elastic",Vf("in"),Vf("out"),Vf());(function(t,e){var n=1/e,r=2*n,i=2.5*n,s=function(a){return a<n?t*a*a:a<r?t*Math.pow(a-1.5/e,2)+.75:a<i?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};Mo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Mo("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});Mo("Circ",function(t){return-(rT(1-t*t)-1)});Mo("Sine",function(t){return t===1?1:-PP(t*CP)+1});Mo("Back",Lf("in"),Lf("out"),Lf());Ve.SteppedEase=Ve.steps=hr.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,i=e+(n?0:1),s=n?1:0,o=1-tt;return function(a){return((i*jc(0,o,a)|0)+s)*r}}};Sa.ease=Ve["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Og+=t+","+t+"Params,"});var MT=function(e,n){this.id=RP++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:dT,this.set=n?n.getSetter:Vg},hc=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Ra(this,+n.duration,1,1),this.data=n.data,wt&&(this._ctx=wt,wt.data.push(this)),uc||ir.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(Pa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kd(this,r),!s._dp||s.parent||_T(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Jr(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===tt||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),fT(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+dv(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+dv(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(r,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,i):this._repeat?Ca(this._tTime,s)+1:1},e.timeScale=function(r){if(!arguments.length)return this._rts===-tt?0:this._rts;if(this._rts===r)return this;var i=this.parent&&this._ts?Dh(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-tt?0:this._rts,this.totalTime(jc(-Math.abs(this._delay),this._tDur,i),!0),xd(this),VP(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==tt&&(this._tTime-=tt)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Jr(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(Hn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dh(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=DP);var i=En;return En=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),En=i,this},e.globalTime=function(r){for(var i=this,s=arguments.length?r:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(r):s},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,fv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,fv(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(pr(this,r),Hn(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,Hn(i))},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-tt,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=i&&s<this.endTime(!0)-tt)},e.eventCallback=function(r,i,s){var o=this.vars;return arguments.length>1?(i?(o[r]=i,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=i)):delete o[r],this):o[r]},e.then=function(r){var i=this;return new Promise(function(s){var o=bt(r)?r:mT,a=function(){var u=i.then;i.then=null,bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),s(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ml(this)},t}();Sr(hc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-tt,_prom:0,_ps:!1,_rts:1});var Bn=function(t){nT(e,t);function e(r,i){var s;return r===void 0&&(r={}),s=t.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=Hn(r.sortChildren),pt&&Jr(r.parent||pt,wi(s),i),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&yT(wi(s),r.scrollTrigger),s}var n=e.prototype;return n.to=function(i,s,o){return Dl(0,arguments,this),this},n.from=function(i,s,o){return Dl(1,arguments,this),this},n.fromTo=function(i,s,o,a){return Dl(2,arguments,this),this},n.set=function(i,s,o){return s.duration=0,s.parent=this,Ol(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Dt(i,s,pr(this,o),1),this},n.call=function(i,s,o){return Jr(this,Dt.delayedCall(0,i,s),o)},n.staggerTo=function(i,s,o,a,l,u,d){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=d,o.parent=this,new Dt(i,o,pr(this,l)),this},n.staggerFrom=function(i,s,o,a,l,u,d){return o.runBackwards=1,Ol(o).immediateRender=Hn(o.immediateRender),this.staggerTo(i,s,o,a,l,u,d)},n.staggerFromTo=function(i,s,o,a,l,u,d,c){return a.startAt=o,Ol(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,s,a,l,u,d,c)},n.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,d=i<=0?0:sn(i),c=this._zTime<0!=i<0&&(this._initted||!u),h,f,p,m,g,_,y,T,v,S,k,P;if(this!==pt&&d>l&&i>=0&&(d=l),d!==this._tTime||o||c){if(a!==this._time&&u&&(d+=this._time-a,i+=this._time-a),h=d,v=this._start,T=this._ts,_=!T,c&&(u||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(k=this._yoyo,g=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(h=sn(d%g),d===l?(m=this._repeat,h=u):(m=~~(d/g),m&&m===d/g&&(h=u,m--),h>u&&(h=u)),S=Ca(this._tTime,g),!a&&this._tTime&&S!==m&&this._tTime-S*g-this._dur<=0&&(S=m),k&&m&1&&(h=u-h,P=1),m!==S&&!this._lock){var x=k&&S&1,R=x===(k&&m&1);if(m<S&&(x=!x),a=x?0:d%u?u:d,this._lock=1,this.render(a||(P?0:sn(m*g)),s,!u)._lock=0,this._tTime=d,!s&&this.parent&&Tr(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,R&&(this._lock=2,a=x?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;DT(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=UP(this,sn(a),sn(h)),y&&(d-=h-(h=y._start))),this._tTime=d,this._time=h,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!m&&(Tr(this,"onStart"),this._tTime!==d))return this;if(h>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!_){y=0,p&&(d+=this._zTime=-tt);break}}f=p}else{f=this._last;for(var M=i<0?i:h;f;){if(p=f._prev,(f._act||M<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,o||En&&(f._initted||f._startAt)),h!==this._time||!this._ts&&!_){y=0,p&&(d+=this._zTime=M?-tt:tt);break}}f=p}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-tt)._zTime=h>=a?1:-1,this._ts))return this._start=v,xd(this),this.render(i,s,o);this._onUpdate&&!s&&Tr(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&a)&&(v===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Es(this,1),!s&&!(i<0&&!a)&&(d||a||!l)&&(Tr(this,d===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,s){var o=this;if(Oi(s)||(s=pr(this,s,i)),!(i instanceof hc)){if(An(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Xt(i))return this.addLabel(i,s);if(bt(i))i=Dt.delayedCall(0,i);else return this}return this!==i?Jr(this,i,s):this},n.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-wr);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Dt?s&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},n.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},n.remove=function(i){return Xt(i)?this.removeLabel(i):bt(i)?this.killTweensOf(i):(Pd(this,i),i===this._recent&&(this._recent=this._last),lo(this))},n.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=sn(ir.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},n.addLabel=function(i,s){return this.labels[i]=pr(this,s),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,s,o){var a=Dt.delayedCall(0,s||lc,o);return a.data="isPause",this._hasPause=1,Jr(this,a,pr(this,i))},n.removePause=function(i){var s=this._first;for(i=pr(this,i);s;)s._start===i&&s.data==="isPause"&&Es(s),s=s._next},n.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)is!==a[l]&&a[l].kill(i,s);return this},n.getTweensOf=function(i,s){for(var o=[],a=br(i),l=this._first,u=Oi(s),d;l;)l instanceof Dt?qP(l._targets,a)&&(u?(!is||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(d=l.getTweensOf(a,s)).length&&o.push.apply(o,d),l=l._next;return o},n.tweenTo=function(i,s){s=s||{};var o=this,a=pr(o,i),l=s,u=l.startAt,d=l.onStart,c=l.onStartParams,h=l.immediateRender,f,p=Dt.to(o,Sr({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||tt,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());p._dur!==g&&Ra(p,g,0,1).render(p._time,!0,!0),f=1}d&&d.apply(p,c||[])}},s));return h?p.render(0):p},n.tweenFromTo=function(i,s,o){return this.tweenTo(s,Sr({startAt:{time:pr(this,i)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),pv(this,pr(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),pv(this,pr(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+tt)},n.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=i);return lo(this)},n.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return t.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),lo(this)},n.totalDuration=function(i){var s=0,o=this,a=o._last,l=wr,u,d,c;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(c=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),d=a._start,d>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Jr(o,a,d-a._delay,1)._lock=0):l=d,d<0&&a._ts&&(s-=d,(!c&&!o._dp||c&&c.smoothChildTiming)&&(o._start+=d/o._ts,o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ra(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(pt._ts&&(fT(pt,Dh(i,pt)),hT=ir.frame),ir.frame>=uv){uv+=lr.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&lr.autoSleep&&ir._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ir.sleep()}}},e}(hc);Sr(Bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var rx=function(e,n,r,i,s,o,a){var l=new Wn(this._pt,e,n,0,1,UT,null,s),u=0,d=0,c,h,f,p,m,g,_,y;for(l.b=r,l.e=i,r+="",i+="",(_=~i.indexOf("random("))&&(i=cc(i)),o&&(y=[r,i],o(y,e,n),r=y[0],i=y[1]),h=r.match(qf)||[];c=qf.exec(i);)p=c[0],m=i.substring(u,c.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),p!==h[d++]&&(g=parseFloat(h[d-1])||0,l._pt={_next:l._pt,p:m||d===1?m:",",s:g,c:p.charAt(1)==="="?da(g,p)-g:parseFloat(p)-g,m:f&&f<4?Math.round:0},u=qf.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(oT.test(i)||_)&&(l.e=0),this._pt=l,l},qg=function(e,n,r,i,s,o,a,l,u,d){bt(i)&&(i=i(s||0,e,o));var c=e[n],h=r!=="get"?r:bt(c)?u?e[n.indexOf("set")||!bt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():c,f=bt(c)?u?lx:FT:Ng,p;if(Xt(i)&&(~i.indexOf("random(")&&(i=cc(i)),i.charAt(1)==="="&&(p=da(h,i)+(bn(h)||0),(p||p===0)&&(i=p))),!d||h!==i||nm)return!isNaN(h*i)&&i!==""?(p=new Wn(this._pt,e,n,+h||0,i-(h||0),typeof c=="boolean"?ux:$T,0,f),u&&(p.fp=u),a&&p.modifier(a,this,e),this._pt=p):(!c&&!(n in e)&&xg(n,i),rx.call(this,e,n,h,i,f,l||lr.stringFilter,u))},ix=function(e,n,r,i,s){if(bt(e)&&(e=ql(e,s,n,r,i)),!fi(e)||e.style&&e.nodeType||An(e)||iT(e))return Xt(e)?ql(e,s,n,r,i):e;var o={},a;for(a in e)o[a]=ql(e[a],s,n,r,i);return o},NT=function(e,n,r,i,s,o){var a,l,u,d;if(rr[e]&&(a=new rr[e]).init(s,a.rawVars?n[e]:ix(n[e],i,s,o,r),r,i,o)!==!1&&(r._pt=l=new Wn(r._pt,s,e,0,1,a.render,a,0,a.priority),r!==na))for(u=r._ptLookup[r._targets.indexOf(s)],d=a._props.length;d--;)u[a._props[d]]=l;return a},is,nm,Mg=function t(e,n,r){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,d=i.onUpdateParams,c=i.callbackScope,h=i.runBackwards,f=i.yoyoEase,p=i.keyframes,m=i.autoRevert,g=e._dur,_=e._startAt,y=e._targets,T=e.parent,v=T&&T.data==="nested"?T.vars.targets:y,S=e._overwrite==="auto"&&!Sg,k=e.timeline,P,x,R,M,z,D,Z,J,ue,oe,W,Y,Ce;if(k&&(!p||!s)&&(s="none"),e._ease=co(s,Sa.ease),e._yEase=f?OT(co(f===!0?s:f,Sa.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!k&&!!i.runBackwards,!k||p&&!i.stagger){if(J=y[0]?ao(y[0]).harness:0,Y=J&&i[J.prop],P=Oh(i,kg),_&&(_._zTime<0&&_.progress(1),n<0&&h&&a&&!m?_.render(-1,!0):_.revert(h&&g?eh:OP),_._lazy=0),o){if(Es(e._startAt=Dt.set(y,Sr({data:"isStart",overwrite:!1,parent:T,immediateRender:!0,lazy:!_&&Hn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:d,callbackScope:c,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(En||!a&&!m)&&e._startAt.revert(eh),a&&g&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(h&&g&&!_){if(n&&(a=!1),R=Sr({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Hn(l),immediateRender:a,stagger:0,parent:T},P),Y&&(R[J.prop]=Y),Es(e._startAt=Dt.set(y,R)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(En?e._startAt.revert(eh):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,tt,tt);else if(!n)return}for(e._pt=e._ptCache=0,l=g&&Hn(l)||l&&!g,x=0;x<y.length;x++){if(z=y[x],Z=z._gsap||Dg(y)[x]._gsap,e._ptLookup[x]=oe={},Yp[Z.id]&&ds.length&&kh(),W=v===y?x:v.indexOf(z),J&&(ue=new J).init(z,Y||P,e,W,v)!==!1&&(e._pt=M=new Wn(e._pt,z,ue.name,0,1,ue.render,ue,0,ue.priority),ue._props.forEach(function(C){oe[C]=M}),ue.priority&&(D=1)),!J||Y)for(R in P)rr[R]&&(ue=NT(R,P,e,W,z,v))?ue.priority&&(D=1):oe[R]=M=qg.call(e,z,R,"get",P[R],W,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(z,e._op[x]),S&&e._pt&&(is=e,pt.killTweensOf(z,oe,e.globalTime(n)),Ce=!e.parent,is=0),e._pt&&l&&(Yp[Z.id]=1)}D&&BT(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Ce,p&&n<=0&&k.render(wr,!0,!0)},sx=function(e,n,r,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,d,c,h;if(!l)for(l=e._ptCache[n]=[],c=e._ptLookup,h=e._targets.length;h--;){if(u=c[h][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return nm=1,e.vars[n]="+=0",Mg(e,a),nm=0,1;l.push(u)}for(h=l.length;h--;)d=l[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=r-u.s,d.e&&(d.e=Rt(r)+bn(d.e)),d.b&&(d.b=u.s+bn(d.b))},ox=function(e,n){var r=e[0]?ao(e[0]).harness:0,i=r&&r.aliases,s,o,a,l;if(!i)return n;s=bo({},n);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ax=function(e,n,r,i){var s=n.ease||i||"power1.inOut",o,a;if(An(n))a=r[e]||(r[e]=[]),n.forEach(function(l,u){return a.push({t:u/(n.length-1)*100,v:l,e:s})});else for(o in n)a=r[o]||(r[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:n[o],e:s})},ql=function(e,n,r,i,s){return bt(e)?e.call(n,r,i,s):Xt(e)&&~e.indexOf("random(")?cc(e):e},VT=Og+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",LT={};zn(VT+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return LT[t]=1});var Dt=function(t){nT(e,t);function e(r,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=t.call(this,o?i:Ol(i))||this;var l=a.vars,u=l.duration,d=l.delay,c=l.immediateRender,h=l.stagger,f=l.overwrite,p=l.keyframes,m=l.defaults,g=l.scrollTrigger,_=l.yoyoEase,y=i.parent||pt,T=(An(r)||iT(r)?Oi(r[0]):"length"in i)?[r]:br(r),v,S,k,P,x,R,M,z;if(a._targets=T.length?Dg(T):xh("GSAP target "+r+" not found. https://greensock.com",!lr.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||h||Tu(u)||Tu(d)){if(i=a.vars,v=a.timeline=new Bn({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:T}),v.kill(),v.parent=v._dp=wi(a),v._start=0,h||Tu(u)||Tu(d)){if(P=T.length,M=h&&TT(h),fi(h))for(x in h)~VT.indexOf(x)&&(z||(z={}),z[x]=h[x]);for(S=0;S<P;S++)k=Oh(i,LT),k.stagger=0,_&&(k.yoyoEase=_),z&&bo(k,z),R=T[S],k.duration=+ql(u,wi(a),S,R,T),k.delay=(+ql(d,wi(a),S,R,T)||0)-a._delay,!h&&P===1&&k.delay&&(a._delay=d=k.delay,a._start+=d,k.delay=0),v.to(R,k,M?M(S,R,T):0),v._ease=Ve.none;v.duration()?u=d=0:a.timeline=0}else if(p){Ol(Sr(v.vars.defaults,{ease:"none"})),v._ease=co(p.ease||i.ease||"none");var D=0,Z,J,ue;if(An(p))p.forEach(function(oe){return v.to(T,oe,">")}),v.duration();else{k={};for(x in p)x==="ease"||x==="easeEach"||ax(x,p[x],k,p.easeEach);for(x in k)for(Z=k[x].sort(function(oe,W){return oe.t-W.t}),D=0,S=0;S<Z.length;S++)J=Z[S],ue={ease:J.e,duration:(J.t-(S?Z[S-1].t:0))/100*u},ue[x]=J.v,v.to(T,ue,D),D+=ue.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return f===!0&&!Sg&&(is=wi(a),pt.killTweensOf(T),is=0),Jr(y,wi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(c||!u&&!p&&a._start===sn(y._time)&&Hn(c)&&LP(wi(a))&&y.data!=="nested")&&(a._tTime=-tt,a.render(Math.max(0,-d)||0)),g&&yT(wi(a),g),a}var n=e.prototype;return n.render=function(i,s,o){var a=this._time,l=this._tDur,u=this._dur,d=i<0,c=i>l-tt&&!d?l:i<tt?0:i,h,f,p,m,g,_,y,T,v;if(!u)$P(this,i,s,o);else if(c!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(h=c,T=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&d)return this.totalTime(m*100+i,s,o);if(h=sn(c%m),c===l?(p=this._repeat,h=u):(p=~~(c/m),p&&p===c/m&&(h=u,p--),h>u&&(h=u)),_=this._yoyo&&p&1,_&&(v=this._yEase,h=u-h),g=Ca(this._tTime,m),h===a&&!o&&this._initted)return this._tTime=c,this;p!==g&&(T&&this._yEase&&DT(T,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(sn(m*p),!0).invalidate()._lock=0))}if(!this._initted){if(vT(this,d?i:h,o,s,c))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(i,s,o)}if(this._tTime=c,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(h/u),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!p&&(Tr(this,"onStart"),this._tTime!==c))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;T&&T.render(i<0?i:!h&&_?-tt:T._dur*T._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(d&&Qp(this,i,s,o),Tr(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&Tr(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(d&&!this._onUpdate&&Qp(this,i,!0,!0),(i||!u)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&Es(this,1),!s&&!(d&&!a)&&(c||a||_)&&(Tr(this,c===l?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},n.resetTo=function(i,s,o,a){uc||ir.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Mg(this,l),u=this._ease(l/this._dur),sx(this,i,s,o,a,u,l)?this.resetTo(i,s,o,a):(kd(this,0),this.parent||gT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ml(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,is&&is.vars.overwrite!==!0)._first||ml(this),this.parent&&o!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?br(i):a,u=this._ptLookup,d=this._pt,c,h,f,p,m,g,_;if((!s||s==="all")&&NP(a,l))return s==="all"&&(this._pt=0),ml(this);for(c=this._op=this._op||[],s!=="all"&&(Xt(s)&&(m={},zn(s,function(y){return m[y]=1}),s=m),s=ox(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){h=u[_],s==="all"?(c[_]=s,p=h,f={}):(f=c[_]=c[_]||{},p=s);for(m in p)g=h&&h[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Pd(this,g,"_pt"),delete h[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&d&&ml(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Dl(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Dl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return pt.killTweensOf(i,s,o)},e}(hc);Sr(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(t){Dt[t]=function(){var e=new Bn,n=Zp.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var Ng=function(e,n,r){return e[n]=r},FT=function(e,n,r){return e[n](r)},lx=function(e,n,r,i){return e[n](i.fp,r)},cx=function(e,n,r){return e.setAttribute(n,r)},Vg=function(e,n){return bt(e[n])?FT:Cg(e[n])&&e.setAttribute?cx:Ng},$T=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},ux=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},UT=function(e,n){var r=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},Lg=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},hx=function(e,n,r,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,n,r),s=o},dx=function(e){for(var n=this._pt,r,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?Pd(this,n,"_pt"):n.dep||(r=1),n=i;return!r},fx=function(e,n,r,i){i.mSet(e,n,i.m.call(i.tween,r,i.mt),i)},BT=function(e){for(var n=e._pt,r,i,s,o;n;){for(r=n._next,i=s;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:o)?n._prev._next=n:s=n,(n._next=i)?i._prev=n:o=n,n=r}e._pt=s},Wn=function(){function t(n,r,i,s,o,a,l,u,d){this.t=r,this.s=s,this.c=o,this.p=i,this.r=a||$T,this.d=l||this,this.set=u||Ng,this.pr=d||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,i,s){this.mSet=this.mSet||this.set,this.set=fx,this.m=r,this.mt=s,this.tween=i},t}();zn(Og+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return kg[t]=1});hr.TweenMax=hr.TweenLite=Dt;hr.TimelineLite=hr.TimelineMax=Bn;pt=new Bn({sortChildren:!1,defaults:Sa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});lr.stringFilter=kT;var uo=[],nh={},px=[],gv=0,mx=0,Ff=function(e){return(nh[e]||px).map(function(n){return n()})},rm=function(){var e=Date.now(),n=[];e-gv>2&&(Ff("matchMediaInit"),uo.forEach(function(r){var i=r.queries,s=r.conditions,o,a,l,u;for(a in i)o=mr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(r.revert(),l&&n.push(r))}),Ff("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r)}),gv=e,Ff("matchMedia"))},jT=function(){function t(n,r){this.selector=r&&em(r),this.data=[],this._r=[],this.isReverted=!1,this.id=mx++,n&&this.add(n)}var e=t.prototype;return e.add=function(r,i,s){bt(r)&&(s=i,i=r,r=bt);var o=this,a=function(){var u=wt,d=o.selector,c;return u&&u!==o&&u.data.push(o),s&&(o.selector=em(s)),wt=o,c=i.apply(o,arguments),bt(c)&&o._r.push(c),wt=u,o.selector=d,o.isReverted=!1,c};return o.last=a,r===bt?a(o):r?o[r]=a:a},e.ignore=function(r){var i=wt;wt=null,r(this),wt=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof t?r.push.apply(r,i.getTweens()):i instanceof Dt&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var s=this;if(r){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1/0}).forEach(function(l){return l.t.revert(r)}),this.data.forEach(function(l){return!(l instanceof Dt)&&l.revert&&l.revert(r)}),this._r.forEach(function(l){return l(r,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=uo.length;a--;)uo[a].id===this.id&&uo.splice(a,1)},e.revert=function(r){this.kill(r||{})},t}(),gx=function(){function t(n){this.contexts=[],this.scope=n}var e=t.prototype;return e.add=function(r,i,s){fi(r)||(r={matches:r});var o=new jT(0,s||this.scope),a=o.conditions={},l,u,d;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=r;for(u in r)u==="all"?d=1:(l=mr.matchMedia(r[u]),l&&(uo.indexOf(o)<0&&uo.push(o),(a[u]=l.matches)&&(d=1),l.addListener?l.addListener(rm):l.addEventListener("change",rm)));return d&&i(o),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},t}(),qh={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(i){return RT(i)})},timeline:function(e){return new Bn(e)},getTweensOf:function(e,n){return pt.getTweensOf(e,n)},getProperty:function(e,n,r,i){Xt(e)&&(e=br(e)[0]);var s=ao(e||{}).get,o=r?mT:pT;return r==="native"&&(r=""),e&&(n?o((rr[n]&&rr[n].get||s)(e,n,r,i)):function(a,l,u){return o((rr[a]&&rr[a].get||s)(e,a,l,u))})},quickSetter:function(e,n,r){if(e=br(e),e.length>1){var i=e.map(function(d){return Yn.quickSetter(d,n,r)}),s=i.length;return function(d){for(var c=s;c--;)i[c](d)}}e=e[0]||{};var o=rr[n],a=ao(e),l=a.harness&&(a.harness.aliases||{})[n]||n,u=o?function(d){var c=new o;na._pt=0,c.init(e,r?d+r:d,na,0,[e]),c.render(1,c),na._pt&&Lg(1,na)}:a.set(e,l);return o?u:function(d){return u(e,l,r?d+r:d,a,1)}},quickTo:function(e,n,r){var i,s=Yn.to(e,bo((i={},i[n]="+=0.1",i.paused=!0,i),r||{})),o=function(l,u,d){return s.resetTo(n,l,u,d)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=co(e.ease,Sa.ease)),hv(Sa,e||{})},config:function(e){return hv(lr,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!rr[a]&&!hr[a]&&xh(n+" effect requires "+a+" plugin.")}),Mf[n]=function(a,l,u){return r(br(a),Sr(l||{},s),u)},o&&(Bn.prototype[n]=function(a,l,u){return this.add(Mf[n](a,fi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,n){Ve[e]=co(n)},parseEase:function(e,n){return arguments.length?co(e,n):Ve},getById:function(e){return pt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new Bn(e),i,s;for(r.smoothChildTiming=Hn(e.smoothChildTiming),pt.remove(r),r._dp=0,r._time=r._tTime=pt._time,i=pt._first;i;)s=i._next,(n||!(!i._dur&&i instanceof Dt&&i.vars.onComplete===i._targets[0]))&&Jr(r,i,i._start-i._delay),i=s;return Jr(pt,r,0),r},context:function(e,n){return e?new jT(e,n):wt},matchMedia:function(e){return new gx(e)},matchMediaRefresh:function(){return uo.forEach(function(e){var n=e.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&e.revert()})||rm()},addEventListener:function(e,n){var r=nh[e]||(nh[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=nh[e],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:KP,wrapYoyo:XP,distribute:TT,random:AT,snap:ET,normalize:GP,getUnit:bn,clamp:jP,splitColor:PT,toArray:br,selector:em,mapRange:ST,pipe:zP,unitize:WP,interpolate:YP,shuffle:bT},install:cT,effects:Mf,ticker:ir,updateRoot:Bn.updateRoot,plugins:rr,globalTimeline:pt,core:{PropTween:Wn,globals:uT,Tween:Dt,Timeline:Bn,Animation:hc,getCache:ao,_removeLinkedListItem:Pd,reverting:function(){return En},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return Sg=e}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return qh[t]=Dt[t]});ir.add(Bn.updateRoot);na=qh.to({},{duration:0});var _x=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},yx=function(e,n){var r=e._targets,i,s,o;for(i in n)for(s=r.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=_x(o,i)),o&&o.modifier&&o.modifier(n[i],e,r[s],i))},$f=function(e,n){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,u;if(Xt(s)&&(l={},zn(s,function(d){return l[d]=1}),s=l),n){l={};for(u in s)l[u]=n(s[u]);s=l}yx(a,s)}}}},Yn=qh.registerPlugin({name:"attr",init:function(e,n,r,i,s){var o,a,l;this.tween=r;for(o in n)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",n[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,n){for(var r=n._pt;r;)En?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},$f("roundProps",tm),$f("modifiers"),$f("snap",ET))||qh;Dt.version=Bn.version=Yn.version="3.12.2";lT=1;Rg()&&Pa();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _v,ss,fa,Fg,Js,yv,$g,vx=function(){return typeof window<"u"},Di={},js=180/Math.PI,pa=Math.PI/180,Ho=Math.atan2,vv=1e8,Ug=/([A-Z])/g,wx=/(left|right|width|margin|padding|x)/i,bx=/[\s,\(]\S/,ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},im=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Tx=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Ex=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Ax=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},HT=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},zT=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},Ix=function(e,n,r){return e.style[n]=r},Sx=function(e,n,r){return e.style.setProperty(n,r)},Cx=function(e,n,r){return e._gsap[n]=r},Rx=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},Px=function(e,n,r,i,s){var o=e._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},xx=function(e,n,r,i,s){var o=e._gsap;o[n]=r,o.renderTransform(s,o)},mt="transform",$r=mt+"Origin",kx=function t(e,n){var r=this,i=this.target,s=i.style;if(e in Di&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ei[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return r.tfm[o]=bi(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:bi(i,e);else return ei.transform.split(",").forEach(function(o){return t.call(r,o,n)});if(this.props.indexOf(mt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($r,n,"")),e=mt}(s||n)&&this.props.push(e,n,s[e])},WT=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ox=function(){var e=this.props,n=this.target,r=n.style,i=n._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?n[e[s]]=e[s+2]:e[s+2]?r[e[s]]=e[s+2]:r.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ug,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=$g(),(!s||!s.isStart)&&!r[mt]&&(WT(r),i.uncache=1)}},GT=function(e,n){var r={target:e,props:[],revert:Ox,save:kx};return e._gsap||Yn.core.getCache(e),n&&n.split(",").forEach(function(i){return r.save(i)}),r},KT,sm=function(e,n){var r=ss.createElementNS?ss.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ss.createElement(e);return r.style?r:ss.createElement(e)},si=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(Ug,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,xa(n)||n,1)||""},wv="O,Moz,ms,Ms,Webkit".split(","),xa=function(e,n,r){var i=n||Js,s=i.style,o=5;if(e in s&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(wv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?wv[o]:"")+e},om=function(){vx()&&window.document&&(_v=window,ss=_v.document,fa=ss.documentElement,Js=sm("div")||{style:{}},sm("div"),mt=xa(mt),$r=mt+"Origin",Js.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",KT=!!xa("perspective"),$g=Yn.core.reverting,Fg=1)},Uf=function t(e){var n=sm("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(fa.appendChild(n),n.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(o=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),fa.removeChild(n),this.style.cssText=s,o},bv=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},XT=function(e){var n;try{n=e.getBBox()}catch{n=Uf.call(e,!0)}return n&&(n.width||n.height)||e.getBBox===Uf||(n=Uf.call(e,!0)),n&&!n.width&&!n.x&&!n.y?{x:+bv(e,["x","cx","x1"])||0,y:+bv(e,["y","cy","y1"])||0,width:0,height:0}:n},YT=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&XT(e))},dc=function(e,n){if(n){var r=e.style;n in Di&&n!==$r&&(n=mt),r.removeProperty?((n.substr(0,2)==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(n.replace(Ug,"-$1").toLowerCase())):r.removeAttribute(n)}},os=function(e,n,r,i,s,o){var a=new Wn(e._pt,n,r,0,1,o?zT:HT);return e._pt=a,a.b=i,a.e=s,e._props.push(r),a},Tv={deg:1,rad:1,turn:1},Dx={grid:1,flex:1},As=function t(e,n,r,i){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",a=Js.style,l=wx.test(n),u=e.tagName.toLowerCase()==="svg",d=(u?"client":"offset")+(l?"Width":"Height"),c=100,h=i==="px",f=i==="%",p,m,g,_;return i===o||!s||Tv[i]||Tv[o]?s:(o!=="px"&&!h&&(s=t(e,n,r,"px")),_=e.getCTM&&YT(e),(f||o==="%")&&(Di[n]||~n.indexOf("adius"))?(p=_?e.getBBox()[l?"width":"height"]:e[d],Rt(f?s/p*c:s/100*p)):(a[l?"width":"height"]=c+(h?o:i),m=~n.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,_&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===ss||!m.appendChild)&&(m=ss.body),g=m._gsap,g&&f&&g.width&&l&&g.time===ir.time&&!g.uncache?Rt(s/g.width*c):((f||o==="%")&&!Dx[si(m,"display")]&&(a.position=si(e,"position")),m===e&&(a.position="static"),m.appendChild(Js),p=Js[d],m.removeChild(Js),a.position="absolute",l&&f&&(g=ao(m),g.time=ir.time,g.width=m[d]),Rt(h?p*s/c:p&&s?c/p*s:0))))},bi=function(e,n,r,i){var s;return Fg||om(),n in ei&&n!=="transform"&&(n=ei[n],~n.indexOf(",")&&(n=n.split(",")[0])),Di[n]&&n!=="transform"?(s=pc(e,i),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Nh(si(e,$r))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Mh[n]&&Mh[n](e,n,r)||si(e,n)||dT(e,n)||(n==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?As(e,n,s,r)+r:s},qx=function(e,n,r,i){if(!r||r==="none"){var s=xa(n,e,1),o=s&&si(e,s,1);o&&o!==r?(n=s,r=o):n==="borderColor"&&(r=si(e,"borderTopColor"))}var a=new Wn(this._pt,e.style,n,0,1,UT),l=0,u=0,d,c,h,f,p,m,g,_,y,T,v,S;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(e.style[n]=i,i=si(e,n)||i,e.style[n]=r),d=[r,i],kT(d),r=d[0],i=d[1],h=r.match(ta)||[],S=i.match(ta)||[],S.length){for(;c=ta.exec(i);)g=c[0],y=i.substring(l,c.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),g!==(m=h[u++]||"")&&(f=parseFloat(m)||0,v=m.substr((f+"").length),g.charAt(1)==="="&&(g=da(f,g)+v),_=parseFloat(g),T=g.substr((_+"").length),l=ta.lastIndex-T.length,T||(T=T||lr.units[n]||v,l===i.length&&(i+=T,a.e+=T)),v!==T&&(f=As(e,n,m,T)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:f,c:_-f,m:p&&p<4||n==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=n==="display"&&i==="none"?zT:HT;return oT.test(i)&&(a.e=0),this._pt=a,a},Ev={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Mx=function(e){var n=e.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),n[0]=Ev[r]||r,n[1]=Ev[i]||i,n.join(" ")},Nx=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,s=n.u,o=r._gsap,a,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Di[a]&&(l=1,a=a==="transformOrigin"?$r:mt),dc(r,a);l&&(dc(r,mt),o&&(o.svg&&r.removeAttribute("transform"),pc(r,1),o.uncache=1,WT(i)))}},Mh={clearProps:function(e,n,r,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Wn(e._pt,n,r,0,0,Nx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(r),1}}},fc=[1,0,0,1,0,0],QT={},JT=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Av=function(e){var n=si(e,mt);return JT(n)?fc:n.substr(7).match(sT).map(Rt)},Bg=function(e,n){var r=e._gsap||ao(e),i=e.style,s=Av(e),o,a,l,u;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fc:s):(s===fc&&!e.offsetParent&&e!==fa&&!r.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,fa.appendChild(e)),s=Av(e),l?i.display=l:dc(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):fa.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},am=function(e,n,r,i,s,o){var a=e._gsap,l=s||Bg(e,!0),u=a.xOrigin||0,d=a.yOrigin||0,c=a.xOffset||0,h=a.yOffset||0,f=l[0],p=l[1],m=l[2],g=l[3],_=l[4],y=l[5],T=n.split(" "),v=parseFloat(T[0])||0,S=parseFloat(T[1])||0,k,P,x,R;r?l!==fc&&(P=f*g-p*m)&&(x=v*(g/P)+S*(-m/P)+(m*y-g*_)/P,R=v*(-p/P)+S*(f/P)-(f*y-p*_)/P,v=x,S=R):(k=XT(e),v=k.x+(~T[0].indexOf("%")?v/100*k.width:v),S=k.y+(~(T[1]||T[0]).indexOf("%")?S/100*k.height:S)),i||i!==!1&&a.smooth?(_=v-u,y=S-d,a.xOffset=c+(_*f+y*m)-_,a.yOffset=h+(_*p+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=n,a.originIsAbsolute=!!r,e.style[$r]="0px 0px",o&&(os(o,a,"xOrigin",u,v),os(o,a,"yOrigin",d,S),os(o,a,"xOffset",c,a.xOffset),os(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},pc=function(e,n){var r=e._gsap||new MT(e);if("x"in r&&!n&&!r.uncache)return r;var i=e.style,s=r.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=si(e,$r)||"0",d,c,h,f,p,m,g,_,y,T,v,S,k,P,x,R,M,z,D,Z,J,ue,oe,W,Y,Ce,C,Oe,Ge,Bt,Ke,yt;return d=c=h=m=g=_=y=T=v=0,f=p=1,r.svg=!!(e.getCTM&&YT(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),i.scale=i.rotate=i.translate="none"),P=Bg(e,r.svg),r.svg&&(r.uncache?(Y=e.getBBox(),u=r.xOrigin-Y.x+"px "+(r.yOrigin-Y.y)+"px",W=""):W=!n&&e.getAttribute("data-svg-origin"),am(e,W||u,!!W||r.originIsAbsolute,r.smooth!==!1,P)),S=r.xOrigin||0,k=r.yOrigin||0,P!==fc&&(z=P[0],D=P[1],Z=P[2],J=P[3],d=ue=P[4],c=oe=P[5],P.length===6?(f=Math.sqrt(z*z+D*D),p=Math.sqrt(J*J+Z*Z),m=z||D?Ho(D,z)*js:0,y=Z||J?Ho(Z,J)*js+m:0,y&&(p*=Math.abs(Math.cos(y*pa))),r.svg&&(d-=S-(S*z+k*Z),c-=k-(S*D+k*J))):(yt=P[6],Bt=P[7],C=P[8],Oe=P[9],Ge=P[10],Ke=P[11],d=P[12],c=P[13],h=P[14],x=Ho(yt,Ge),g=x*js,x&&(R=Math.cos(-x),M=Math.sin(-x),W=ue*R+C*M,Y=oe*R+Oe*M,Ce=yt*R+Ge*M,C=ue*-M+C*R,Oe=oe*-M+Oe*R,Ge=yt*-M+Ge*R,Ke=Bt*-M+Ke*R,ue=W,oe=Y,yt=Ce),x=Ho(-Z,Ge),_=x*js,x&&(R=Math.cos(-x),M=Math.sin(-x),W=z*R-C*M,Y=D*R-Oe*M,Ce=Z*R-Ge*M,Ke=J*M+Ke*R,z=W,D=Y,Z=Ce),x=Ho(D,z),m=x*js,x&&(R=Math.cos(x),M=Math.sin(x),W=z*R+D*M,Y=ue*R+oe*M,D=D*R-z*M,oe=oe*R-ue*M,z=W,ue=Y),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,_=180-_),f=Rt(Math.sqrt(z*z+D*D+Z*Z)),p=Rt(Math.sqrt(oe*oe+yt*yt)),x=Ho(ue,oe),y=Math.abs(x)>2e-4?x*js:0,v=Ke?1/(Ke<0?-Ke:Ke):0),r.svg&&(W=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!JT(si(e,mt)),W&&e.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),n=n||r.uncache,r.x=d-((r.xPercent=d&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=c-((r.yPercent=c&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-c)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=h+o,r.scaleX=Rt(f),r.scaleY=Rt(p),r.rotation=Rt(m)+a,r.rotationX=Rt(g)+a,r.rotationY=Rt(_)+a,r.skewX=y+a,r.skewY=T+a,r.transformPerspective=v+o,(r.zOrigin=parseFloat(u.split(" ")[2])||0)&&(i[$r]=Nh(u)),r.xOffset=r.yOffset=0,r.force3D=lr.force3D,r.renderTransform=r.svg?Lx:KT?ZT:Vx,r.uncache=0,r},Nh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bf=function(e,n,r){var i=bn(n);return Rt(parseFloat(n)+parseFloat(As(e,"x",r+"px",i)))+i},Vx=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,ZT(e,n)},Us="0deg",il="0px",Bs=") ",ZT=function(e,n){var r=n||this,i=r.xPercent,s=r.yPercent,o=r.x,a=r.y,l=r.z,u=r.rotation,d=r.rotationY,c=r.rotationX,h=r.skewX,f=r.skewY,p=r.scaleX,m=r.scaleY,g=r.transformPerspective,_=r.force3D,y=r.target,T=r.zOrigin,v="",S=_==="auto"&&e&&e!==1||_===!0;if(T&&(c!==Us||d!==Us)){var k=parseFloat(d)*pa,P=Math.sin(k),x=Math.cos(k),R;k=parseFloat(c)*pa,R=Math.cos(k),o=Bf(y,o,P*R*-T),a=Bf(y,a,-Math.sin(k)*-T),l=Bf(y,l,x*R*-T+T)}g!==il&&(v+="perspective("+g+Bs),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||o!==il||a!==il||l!==il)&&(v+=l!==il||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Bs),u!==Us&&(v+="rotate("+u+Bs),d!==Us&&(v+="rotateY("+d+Bs),c!==Us&&(v+="rotateX("+c+Bs),(h!==Us||f!==Us)&&(v+="skew("+h+", "+f+Bs),(p!==1||m!==1)&&(v+="scale("+p+", "+m+Bs),y.style[mt]=v||"translate(0, 0)"},Lx=function(e,n){var r=n||this,i=r.xPercent,s=r.yPercent,o=r.x,a=r.y,l=r.rotation,u=r.skewX,d=r.skewY,c=r.scaleX,h=r.scaleY,f=r.target,p=r.xOrigin,m=r.yOrigin,g=r.xOffset,_=r.yOffset,y=r.forceCSS,T=parseFloat(o),v=parseFloat(a),S,k,P,x,R;l=parseFloat(l),u=parseFloat(u),d=parseFloat(d),d&&(d=parseFloat(d),u+=d,l+=d),l||u?(l*=pa,u*=pa,S=Math.cos(l)*c,k=Math.sin(l)*c,P=Math.sin(l-u)*-h,x=Math.cos(l-u)*h,u&&(d*=pa,R=Math.tan(u-d),R=Math.sqrt(1+R*R),P*=R,x*=R,d&&(R=Math.tan(d),R=Math.sqrt(1+R*R),S*=R,k*=R)),S=Rt(S),k=Rt(k),P=Rt(P),x=Rt(x)):(S=c,x=h,k=P=0),(T&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(T=As(f,"x",o,"px"),v=As(f,"y",a,"px")),(p||m||g||_)&&(T=Rt(T+p-(p*S+m*P)+g),v=Rt(v+m-(p*k+m*x)+_)),(i||s)&&(R=f.getBBox(),T=Rt(T+i/100*R.width),v=Rt(v+s/100*R.height)),R="matrix("+S+","+k+","+P+","+x+","+T+","+v+")",f.setAttribute("transform",R),y&&(f.style[mt]=R)},Fx=function(e,n,r,i,s){var o=360,a=Xt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?js:1),u=l-i,d=i+u+"deg",c,h;return a&&(c=s.split("_")[1],c==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),c==="cw"&&u<0?u=(u+o*vv)%o-~~(u/o)*o:c==="ccw"&&u>0&&(u=(u-o*vv)%o-~~(u/o)*o)),e._pt=h=new Wn(e._pt,n,r,i,u,Tx),h.e=d,h.u="deg",e._props.push(r),h},Iv=function(e,n){for(var r in n)e[r]=n[r];return e},$x=function(e,n,r){var i=Iv({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,a,l,u,d,c,h,f,p;i.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),o[mt]=n,a=pc(r,1),dc(r,mt),r.setAttribute("transform",u)):(u=getComputedStyle(r)[mt],o[mt]=n,a=pc(r,1),o[mt]=u);for(l in Di)u=i[l],d=a[l],u!==d&&s.indexOf(l)<0&&(f=bn(u),p=bn(d),c=f!==p?As(r,l,u,p):parseFloat(u),h=parseFloat(d),e._pt=new Wn(e._pt,a,l,c,h-c,im),e._pt.u=p||0,e._props.push(l));Iv(a,i)};zn("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",i="Bottom",s="Left",o=(e<3?[n,r,i,s]:[n+s,n+r,i+r,i+s]).map(function(a){return e<2?t+a:"border"+a+t});Mh[e>1?"border"+t:t]=function(a,l,u,d,c){var h,f;if(arguments.length<4)return h=o.map(function(p){return bi(a,p,u)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(d+"").split(" "),f={},o.forEach(function(p,m){return f[p]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,f,c)}});var eE={name:"css",register:om,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,i,s){var o=this._props,a=e.style,l=r.vars.startAt,u,d,c,h,f,p,m,g,_,y,T,v,S,k,P,x;Fg||om(),this.styles=this.styles||GT(e),x=this.styles.props,this.tween=r;for(m in n)if(m!=="autoRound"&&(d=n[m],!(rr[m]&&NT(m,n,r,i,e,s)))){if(f=typeof d,p=Mh[m],f==="function"&&(d=d.call(r,i,e,s),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=cc(d)),p)p(this,e,m,d,r)&&(P=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),d+="",fs.lastIndex=0,fs.test(u)||(g=bn(u),_=bn(d)),_?g!==_&&(u=As(e,m,u,_)+_):g&&(d+=g),this.add(a,"setProperty",u,d,i,s,0,0,m),o.push(m),x.push(m,0,a[m]);else if(f!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(r,i,e,s):l[m],Xt(u)&&~u.indexOf("random(")&&(u=cc(u)),bn(u+"")||(u+=lr.units[m]||bn(bi(e,m))||""),(u+"").charAt(1)==="="&&(u=bi(e,m))):u=bi(e,m),h=parseFloat(u),y=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),c=parseFloat(d),m in ei&&(m==="autoAlpha"&&(h===1&&bi(e,"visibility")==="hidden"&&c&&(h=0),x.push("visibility",0,a.visibility),os(this,a,"visibility",h?"inherit":"hidden",c?"inherit":"hidden",!c)),m!=="scale"&&m!=="transform"&&(m=ei[m],~m.indexOf(",")&&(m=m.split(",")[0]))),T=m in Di,T){if(this.styles.save(m),v||(S=e._gsap,S.renderTransform&&!n.parseTransform||pc(e,n.parseTransform),k=n.smoothOrigin!==!1&&S.smooth,v=this._pt=new Wn(this._pt,a,mt,0,1,S.renderTransform,S,0,-1),v.dep=1),m==="scale")this._pt=new Wn(this._pt,S,"scaleY",S.scaleY,(y?da(S.scaleY,y+c):c)-S.scaleY||0,im),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){x.push($r,0,a[$r]),d=Mx(d),S.svg?am(e,d,0,k,0,this):(_=parseFloat(d.split(" ")[2])||0,_!==S.zOrigin&&os(this,S,"zOrigin",S.zOrigin,_),os(this,a,m,Nh(u),Nh(d)));continue}else if(m==="svgOrigin"){am(e,d,1,k,0,this);continue}else if(m in QT){Fx(this,S,m,h,y?da(h,y+d):d);continue}else if(m==="smoothOrigin"){os(this,S,"smooth",S.smooth,d);continue}else if(m==="force3D"){S[m]=d;continue}else if(m==="transform"){$x(this,d,e);continue}}else m in a||(m=xa(m)||m);if(T||(c||c===0)&&(h||h===0)&&!bx.test(d)&&m in a)g=(u+"").substr((h+"").length),c||(c=0),_=bn(d)||(m in lr.units?lr.units[m]:g),g!==_&&(h=As(e,m,u,_)),this._pt=new Wn(this._pt,T?S:a,m,h,(y?da(h,y+c):c)-h,!T&&(_==="px"||m==="zIndex")&&n.autoRound!==!1?Ax:im),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=u,this._pt.r=Ex);else if(m in a)qx.call(this,e,m,u,y?y+d:d);else if(m in e)this.add(e,m,u||e[m],y?y+d:d,i,s);else if(m!=="parseTransform"){xg(m,d);continue}T||(m in a?x.push(m,0,a[m]):x.push(m,1,u||e[m])),o.push(m)}}P&&BT(this)},render:function(e,n){if(n.tween._time||!$g())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:bi,aliases:ei,getSetter:function(e,n,r){var i=ei[n];return i&&i.indexOf(",")<0&&(n=i),n in Di&&n!==$r&&(e._gsap.x||bi(e,"x"))?r&&yv===r?n==="scale"?Rx:Cx:(yv=r||{})&&(n==="scale"?Px:xx):e.style&&!Cg(e.style[n])?Ix:~n.indexOf("-")?Sx:Vg(e,n)},core:{_removeProperty:dc,_getMatrix:Bg}};Yn.utils.checkPrefix=xa;Yn.core.getStyleSaver=GT;(function(t,e,n,r){var i=zn(t+","+e+","+n,function(s){Di[s]=1});zn(e,function(s){lr.units[s]="deg",QT[s]=1}),ei[i[13]]=t+","+e,zn(r,function(s){var o=s.split(":");ei[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){lr.units[t]="px"});Yn.registerPlugin(eE);var Pt=Yn.registerPlugin(eE)||Yn;Pt.core.Tween;const it=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Ux={},Bx={class:"nav",ref:"menu"},jx={class:"menu"},Hx={class:"flex flex-col gap-[10px] text-center sm:w-full"},zx={href:"/",class:"nav-item",ref:"navItem1"},Wx=A("h1",{class:"menu-title sm:!text-6xl"},"Home",-1),Gx=[Wx],Kx={href:"/games",class:"nav-item",ref:"navItem2"},Xx=A("h1",{class:"menu-title sm:!text-6xl"},"Games",-1),Yx=[Xx],Qx={href:"/leaderboard",class:"nav-item",ref:"navItem4"},Jx=A("h1",{class:"menu-title sm:!text-6xl"},"Leaderboard",-1),Zx=[Jx];function ek(t,e,n,r,i,s){return K(),Q("div",Bx,[A("div",jx,[A("div",Hx,[A("a",zx,Gx,512),A("a",Kx,Yx,512),A("a",Qx,Zx,512)])])],512)}const tk=it(Ux,[["render",ek]]),nk="/assets/VERTEIL_LOGO-797319a3.svg";const rk={components:{Menu:tk},beforeRouteLeave(t,e,n){console.log(t),this.resetState(),n()}},ik={class:"v-header"},sk=A("div",{class:"gl-canvas w-embed"},[A("canvas",{id:"above-canvas"}),A("canvas",{id:"below-canvas"})],-1),ok=Bc('<div class="top-nav w-screen"><div class="logo-group pl-[7%] pr-[7%] select-none sm:h-20"><div class="w-[3%] pointer-events-none sm:w-[6%]"><img src="'+nk+'" alt=""></div><div class="v-head"><a href="/"><h2 class="text-5xl sm:text-xl">The Verteil Times</h2></a></div><div class="hamburger cursor-pointer" style="margin-right:0;"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div></div></div>',1);function ak(t,e,n,r,i,s){const o=Je("Menu");return K(),Q("header",ik,[sk,we(o),ok])}const Ui=it(rk,[["render",ak]]),lk={props:["image","heading","description"]},ck={class:"head-card sm:w-full mb-12 sm:p-0"},uk={class:"img-container sm:!h-1/2"},hk=["src"],dk={class:"flex items-center sm:!text-2xl"},fk=A("span",{class:"new-marker sm:!p-x-2"},"NEW",-1),pk={class:"paper-desc sm:text-xl"};function mk(t,e,n,r,i,s){return K(),Q("div",ck,[A("div",uk,[A("img",{class:"sm:h-full sm:w-full",src:n.image,alt:"Sooper-11",srcset:""},null,8,hk)]),A("h3",dk,[so(rt(n.heading)+" ",1),fk]),A("p",pk,rt(n.description),1)])}const gk=it(lk,[["render",mk]]),_k="/assets/logo-2acb2b6e.png",yk="/assets/zoozoo-5b60bf1e.gif";const vk={props:[],mounted(){this.init()},methods:{init(){this.veriteAnimation()},veriteAnimation(){Pt.from("#verite",{y:100,opacity:0,duration:1.5,ease:"power4.out",delay:.5}),Pt.fromTo("#rotate-letter",{rotateX:"0deg"},{rotateX:"180deg",duration:1,repeat:-1,yoyo:!0,ease:"power1.inOut",transformOrigin:"50% 50%",repeatDelay:.5})}},components:{Header:Ui,HeadCard:gk}},wk={class:"main-wrapper flex-col sm:!mx-2 sm:flex-col-reverse"},bk={class:"flex flex-row items-start justify-around h-fit mt-[50px] sm:flex-col"},Tk=A("div",{class:"center-head-card head-card flex flex-col sm:w-full sm:h-1/2 sm:mb-12 sm:border-y-[1px] sm:border-x-0 sm:border-[#1d1d1b]"},[A("h2",{class:"sm:!text-4xl"},"Ready, Set!"),A("p",{class:"paper-desc paper-desc-head sm:!text-3xl"}," Unity and strategy key. Plan, communicate, conquer for Verite triumph! "),A("p",{class:"paper-desc !text-center !mt-10 sm:text-xl"}," GO! ")],-1),Ek=Bc('<div><div class="head flex justify-center overflow-hidden !m-0 h-[400px] sm:h-[200px] sm:!mt-5"><img id="verite" class="invert brightness-0 sepia-50 scale-150 sm:scale-90" src="'+_k+'" alt=""></div><div class="mt-16 flex"><div class="w-2/5 mr-[10%]"><div class="plane-animate"><svg viewBox="0 0 3387 1270"><path id="planePath" class="planePath" d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"></path><g id="plane"><polygon class="fil1" points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 "></polygon><polygon class="fil2" points="199,0 -141,-10 -163,63 -123,9 "></polygon><polygon class="fil3" points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 "></polygon><path class="fil4" d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"></path><polygon class="fil1" points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 "></polygon></g><animateMotion xlink:href="#plane" dur="5s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#planePath"></mpath></animateMotion></svg></div><div class="block relative"><h2 class="h-head s-1"><span class="mr-6">A</span> Nostalgic</h2><h2 class="h-head sub">Journey!</h2><div class="divs _0"><div class="div-2 _0"></div><div class="div-2"></div></div></div></div><div class="gif-container w-1/2"><img src="'+yk+'" alt="zoozoo" srcset="" class="w-full"></div></div></div>',1);function Ak(t,e,n,r,i,s){const o=Je("Header"),a=Je("HeadCard");return K(),Q("main",null,[we(o),A("div",wk,[A("div",bk,[we(a,{image:"pager.jpg",heading:"Beep. Play. Repeat",description:"Witnessing a revolutionary leap in communication, India embraces the launch of the Nostalgic Pager, facilitating instantaneous connectivity nationwide"},null,8,["image","heading"]),Tk,we(a,{image:"sooper-11.png",heading:"SOOPER 11",description:"Verteil introduces SOOPER11, a thrilling cricket fantasy game exclusively for Verteil employees, adding excitement to the World Cup 23"},null,8,["image"])]),Ek])])}const tE=it(vk,[["render",Ak]]);function Sv(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ik(t,e,n){return e&&Sv(t.prototype,e),n&&Sv(t,n),t}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cn,lm,sr,as,ls,ma,nE,Hs,Ml,rE,Ei,qr,iE,sE=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},oE=1,ra=[],ke=[],oi=[],Nl=Date.now,cm=function(e,n){return n},Sk=function(){var e=Ml.core,n=e.bridge||{},r=e._scrollers,i=e._proxies;r.push.apply(r,ke),i.push.apply(i,oi),ke=r,oi=i,cm=function(o,a){return n[o](a)}},ps=function(e,n){return~oi.indexOf(e)&&oi[oi.indexOf(e)+1][n]},Vl=function(e){return!!~rE.indexOf(e)},Dn=function(e,n,r,i,s){return e.addEventListener(n,r,{passive:!i,capture:!!s})},xn=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},Eu="scrollLeft",Au="scrollTop",um=function(){return Ei&&Ei.isPressed||ke.cache++},Vh=function(e,n){var r=function i(s){if(s||s===0){oE&&(sr.history.scrollRestoration="manual");var o=Ei&&Ei.isPressed;s=i.v=Math.round(s)||(Ei&&Ei.iOS?1:0),e(s),i.cacheID=ke.cache,o&&cm("ss",s)}else(n||ke.cache!==i.cacheID||cm("ref"))&&(i.cacheID=ke.cache,i.v=e());return i.v+i.offset};return r.offset=0,e&&r},Vn={s:Eu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vh(function(t){return arguments.length?sr.scrollTo(t,Lt.sc()):sr.pageXOffset||as[Eu]||ls[Eu]||ma[Eu]||0})},Lt={s:Au,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:Vh(function(t){return arguments.length?sr.scrollTo(Vn.sc(),t):sr.pageYOffset||as[Au]||ls[Au]||ma[Au]||0})},Un=function(e,n){return(n&&n._ctx&&n._ctx.selector||cn.utils.toArray)(e)[0]||(typeof e=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Is=function(e,n){var r=n.s,i=n.sc;Vl(e)&&(e=as.scrollingElement||ls);var s=ke.indexOf(e),o=i===Lt.sc?1:2;!~s&&(s=ke.push(e)-1),ke[s+o]||Dn(e,"scroll",um);var a=ke[s+o],l=a||(ke[s+o]=Vh(ps(e,r),!0)||(Vl(e)?i:Vh(function(u){return arguments.length?e[r]=u:e[r]})));return l.target=e,a||(l.smooth=cn.getProperty(e,"scrollBehavior")==="smooth"),l},hm=function(e,n,r){var i=e,s=e,o=Nl(),a=o,l=n||50,u=Math.max(500,l*3),d=function(p,m){var g=Nl();m||g-o>l?(s=i,i=p,a=o,o=g):r?i+=p:i=s+(p-s)/(g-a)*(o-a)},c=function(){s=i=r?0:i,a=o=0},h=function(p){var m=a,g=s,_=Nl();return(p||p===0)&&p!==i&&d(p),o===a||_-a>u?0:(i+(r?g:-g))/((r?_:o)-m)*1e3};return{update:d,reset:c,getVelocity:h}},sl=function(e,n){return n&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cv=function(e){var n=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(r)?n:r},aE=function(){Ml=cn.core.globals().ScrollTrigger,Ml&&Ml.core&&Sk()},lE=function(e){return cn=e||sE(),cn&&typeof document<"u"&&document.body&&(sr=window,as=document,ls=as.documentElement,ma=as.body,rE=[sr,as,ls,ma],cn.utils.clamp,iE=cn.core.context||function(){},Hs="onpointerenter"in ma?"pointer":"mouse",nE=Nt.isTouch=sr.matchMedia&&sr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in sr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qr=Nt.eventTypes=("ontouchstart"in ls?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ls?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return oE=0},500),aE(),lm=1),lm};Vn.op=Lt;ke.cache=0;var Nt=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(r){lm||lE(cn)||console.warn("Please gsap.registerPlugin(Observer)"),Ml||aE();var i=r.tolerance,s=r.dragMinimum,o=r.type,a=r.target,l=r.lineHeight,u=r.debounce,d=r.preventDefault,c=r.onStop,h=r.onStopDelay,f=r.ignore,p=r.wheelSpeed,m=r.event,g=r.onDragStart,_=r.onDragEnd,y=r.onDrag,T=r.onPress,v=r.onRelease,S=r.onRight,k=r.onLeft,P=r.onUp,x=r.onDown,R=r.onChangeX,M=r.onChangeY,z=r.onChange,D=r.onToggleX,Z=r.onToggleY,J=r.onHover,ue=r.onHoverEnd,oe=r.onMove,W=r.ignoreCheck,Y=r.isNormalizer,Ce=r.onGestureStart,C=r.onGestureEnd,Oe=r.onWheel,Ge=r.onEnable,Bt=r.onDisable,Ke=r.onClick,yt=r.scrollSpeed,je=r.capture,q=r.allowClicks,H=r.lockAxis,U=r.onLockAxis;this.target=a=Un(a)||ls,this.vars=r,f&&(f=cn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,yt=yt||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(sr.getComputedStyle(ma).lineHeight)||22);var ne,_e,w,b,I,O,N,E=this,j=0,$=0,B=Is(a,Vn),V=Is(a,Lt),ie=B(),X=V(),ae=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qr[0]==="pointerdown",se=Vl(a),le=a.ownerDocument||as,Re=[0,0,0],Ie=[0,0,0],Qe=0,St=function(){return Qe=Nl()},Jt=function(fe,ze){return(E.event=fe)&&f&&~f.indexOf(fe.target)||ze&&ae&&fe.pointerType!=="touch"||W&&W(fe,ze)},Zt=function(){E._vx.reset(),E._vy.reset(),_e.pause(),c&&c(E)},Qn=function(){var fe=E.deltaX=Cv(Re),ze=E.deltaY=Cv(Ie),vt=Math.abs(fe)>=i,ee=Math.abs(ze)>=i;z&&(vt||ee)&&z(E,fe,ze,Re,Ie),vt&&(S&&E.deltaX>0&&S(E),k&&E.deltaX<0&&k(E),R&&R(E),D&&E.deltaX<0!=j<0&&D(E),j=E.deltaX,Re[0]=Re[1]=Re[2]=0),ee&&(x&&E.deltaY>0&&x(E),P&&E.deltaY<0&&P(E),M&&M(E),Z&&E.deltaY<0!=$<0&&Z(E),$=E.deltaY,Ie[0]=Ie[1]=Ie[2]=0),(b||w)&&(oe&&oe(E),w&&(y(E),w=!1),b=!1),O&&!(O=!1)&&U&&U(E),I&&(Oe(E),I=!1),ne=0},gi=function(fe,ze,vt){Re[vt]+=fe,Ie[vt]+=ze,E._vx.update(fe),E._vy.update(ze),u?ne||(ne=requestAnimationFrame(Qn)):Qn()},xt=function(fe,ze){H&&!N&&(E.axis=N=Math.abs(fe)>Math.abs(ze)?"x":"y",O=!0),N!=="y"&&(Re[2]+=fe,E._vx.update(fe,!0)),N!=="x"&&(Ie[2]+=ze,E._vy.update(ze,!0)),u?ne||(ne=requestAnimationFrame(Qn)):Qn()},jt=function(fe){if(!Jt(fe,1)){fe=sl(fe,d);var ze=fe.clientX,vt=fe.clientY,ee=ze-E.x,Le=vt-E.y,pe=E.isDragging;E.x=ze,E.y=vt,(pe||Math.abs(E.startX-ze)>=s||Math.abs(E.startY-vt)>=s)&&(y&&(w=!0),pe||(E.isDragging=!0),xt(ee,Le),pe||g&&g(E))}},Pr=E.onPress=function(be){Jt(be,1)||be&&be.button||(E.axis=N=null,_e.pause(),E.isPressed=!0,be=sl(be),j=$=0,E.startX=E.x=be.clientX,E.startY=E.y=be.clientY,E._vx.reset(),E._vy.reset(),Dn(Y?a:le,qr[1],jt,d,!0),E.deltaX=E.deltaY=0,T&&T(E))},Bi=E.onRelease=function(be){if(!Jt(be,1)){xn(Y?a:le,qr[1],jt,!0);var fe=!isNaN(E.y-E.startY),ze=E.isDragging&&(Math.abs(E.x-E.startX)>3||Math.abs(E.y-E.startY)>3),vt=sl(be);!ze&&fe&&(E._vx.reset(),E._vy.reset(),d&&q&&cn.delayedCall(.08,function(){if(Nl()-Qe>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(le.createEvent){var ee=le.createEvent("MouseEvents");ee.initMouseEvent("click",!0,!0,sr,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(ee)}}})),E.isDragging=E.isGesturing=E.isPressed=!1,c&&!Y&&_e.restart(!0),_&&ze&&_(E),v&&v(E,ze)}},$e=function(fe){return fe.touches&&fe.touches.length>1&&(E.isGesturing=!0)&&Ce(fe,E.isDragging)},qs=function(){return(E.isGesturing=!1)||C(E)},xr=function(fe){if(!Jt(fe)){var ze=B(),vt=V();gi((ze-ie)*yt,(vt-X)*yt,1),ie=ze,X=vt,c&&_e.restart(!0)}},kr=function(fe){if(!Jt(fe)){fe=sl(fe,d),Oe&&(I=!0);var ze=(fe.deltaMode===1?l:fe.deltaMode===2?sr.innerHeight:1)*p;gi(fe.deltaX*ze,fe.deltaY*ze,0),c&&!Y&&_e.restart(!0)}},Or=function(fe){if(!Jt(fe)){var ze=fe.clientX,vt=fe.clientY,ee=ze-E.x,Le=vt-E.y;E.x=ze,E.y=vt,b=!0,(ee||Le)&&xt(ee,Le)}},Ms=function(fe){E.event=fe,J(E)},Bo=function(fe){E.event=fe,ue(E)},_i=function(fe){return Jt(fe)||sl(fe,d)&&Ke(E)};_e=E._dc=cn.delayedCall(h||.25,Zt).pause(),E.deltaX=E.deltaY=0,E._vx=hm(0,50,!0),E._vy=hm(0,50,!0),E.scrollX=B,E.scrollY=V,E.isDragging=E.isGesturing=E.isPressed=!1,iE(this),E.enable=function(be){return E.isEnabled||(Dn(se?le:a,"scroll",um),o.indexOf("scroll")>=0&&Dn(se?le:a,"scroll",xr,d,je),o.indexOf("wheel")>=0&&Dn(a,"wheel",kr,d,je),(o.indexOf("touch")>=0&&nE||o.indexOf("pointer")>=0)&&(Dn(a,qr[0],Pr,d,je),Dn(le,qr[2],Bi),Dn(le,qr[3],Bi),q&&Dn(a,"click",St,!1,!0),Ke&&Dn(a,"click",_i),Ce&&Dn(le,"gesturestart",$e),C&&Dn(le,"gestureend",qs),J&&Dn(a,Hs+"enter",Ms),ue&&Dn(a,Hs+"leave",Bo),oe&&Dn(a,Hs+"move",Or)),E.isEnabled=!0,be&&be.type&&Pr(be),Ge&&Ge(E)),E},E.disable=function(){E.isEnabled&&(ra.filter(function(be){return be!==E&&Vl(be.target)}).length||xn(se?le:a,"scroll",um),E.isPressed&&(E._vx.reset(),E._vy.reset(),xn(Y?a:le,qr[1],jt,!0)),xn(se?le:a,"scroll",xr,je),xn(a,"wheel",kr,je),xn(a,qr[0],Pr,je),xn(le,qr[2],Bi),xn(le,qr[3],Bi),xn(a,"click",St,!0),xn(a,"click",_i),xn(le,"gesturestart",$e),xn(le,"gestureend",qs),xn(a,Hs+"enter",Ms),xn(a,Hs+"leave",Bo),xn(a,Hs+"move",Or),E.isEnabled=E.isPressed=E.isDragging=!1,Bt&&Bt(E))},E.kill=E.revert=function(){E.disable();var be=ra.indexOf(E);be>=0&&ra.splice(be,1),Ei===E&&(Ei=0)},ra.push(E),Y&&Vl(a)&&(Ei=E),E.enable(m)},Ik(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();Nt.version="3.12.2";Nt.create=function(t){return new Nt(t)};Nt.register=lE;Nt.getAll=function(){return ra.slice()};Nt.getById=function(t){return ra.filter(function(e){return e.vars.id===t})[0]};sE()&&cn.registerPlugin(Nt);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var te,Ko,Me,ft,Nr,st,cE,Lh,Fh,ia,rh,Iu,gn,Od,dm,qn,Rv,Pv,Xo,uE,jf,hE,er,dE,fE,pE,Ki,fm,jg,ga,Hg,Hf,Su=1,Nn=Date.now,zf=Nn(),Ir=0,_l=0,xv=function(e,n,r){var i=nr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+n+"Clamp"]=i,i?e.substr(6,e.length-7):e},kv=function(e,n){return n&&(!nr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ck=function t(){return _l&&requestAnimationFrame(t)},Ov=function(){return Od=1},Dv=function(){return Od=0},Xr=function(e){return e},yl=function(e){return Math.round(e*1e5)/1e5||0},mE=function(){return typeof window<"u"},gE=function(){return te||mE()&&(te=window.gsap)&&te.registerPlugin&&te},To=function(e){return!!~cE.indexOf(e)},_E=function(e){return(e==="Height"?Hg:Me["inner"+e])||Nr["client"+e]||st["client"+e]},yE=function(e){return ps(e,"getBoundingClientRect")||(To(e)?function(){return ch.width=Me.innerWidth,ch.height=Hg,ch}:function(){return Ti(e)})},Rk=function(e,n,r){var i=r.d,s=r.d2,o=r.a;return(o=ps(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(n?_E(s):e["client"+s])||0}},Pk=function(e,n){return!n||~oi.indexOf(e)?yE(e):function(){return ch}},Ai=function(e,n){var r=n.s,i=n.d2,s=n.d,o=n.a;return Math.max(0,(r="scroll"+i)&&(o=ps(e,r))?o()-yE(e)()[s]:To(e)?(Nr[r]||st[r])-_E(i):e[r]-e["offset"+i])},Cu=function(e,n){for(var r=0;r<Xo.length;r+=3)(!n||~n.indexOf(Xo[r+1]))&&e(Xo[r],Xo[r+1],Xo[r+2])},nr=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},ih=function(e){return typeof e=="number"},zs=function(e){return typeof e=="object"},ol=function(e,n,r){return e&&e.progress(n?0:1)&&r&&e.pause()},Wf=function(e,n){if(e.enabled){var r=n(e);r&&r.totalTime&&(e.callbackAnimation=r)}},zo=Math.abs,vE="left",wE="top",zg="right",Wg="bottom",ho="width",fo="height",Ll="Right",Fl="Left",$l="Top",Ul="Bottom",Ot="padding",gr="margin",ka="Width",Gg="Height",nn="px",_r=function(e){return Me.getComputedStyle(e)},xk=function(e){var n=_r(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},qv=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},Ti=function(e,n){var r=n&&_r(e)[dm]!=="matrix(1, 0, 0, 1, 0, 0)"&&te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return r&&r.progress(0).kill(),i},pm=function(e,n){var r=n.d2;return e["offset"+r]||e["client"+r]||0},bE=function(e){var n=[],r=e.labels,i=e.duration(),s;for(s in r)n.push(r[s]/i);return n},kk=function(e){return function(n){return te.utils.snap(bE(e),n)}},Kg=function(e){var n=te.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return r?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return n(i);if(s>0){for(i-=o,a=0;a<r.length;a++)if(r[a]>=i)return r[a];return r[a-1]}else for(a=r.length,i+=o;a--;)if(r[a]<=i)return r[a];return r[0]}:function(i,s,o){o===void 0&&(o=.001);var a=n(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:n(s<0?i-e:i+e)}},Ok=function(e){return function(n,r){return Kg(bE(e))(n,r.direction)}},Ru=function(e,n,r,i){return r.split(",").forEach(function(s){return e(n,s,i)})},Wt=function(e,n,r,i,s){return e.addEventListener(n,r,{passive:!i,capture:!!s})},zt=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},Pu=function(e,n,r){r=r&&r.wheelHandler,r&&(e(n,"wheel",r),e(n,"touchmove",r))},Mv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},xu={toggleActions:"play",anticipatePin:0},$h={top:0,left:0,center:.5,bottom:1,right:1},sh=function(e,n){if(nr(e)){var r=e.indexOf("="),i=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(i*=n/100),e=e.substr(0,r-1)),e=i+(e in $h?$h[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},ku=function(e,n,r,i,s,o,a,l){var u=s.startColor,d=s.endColor,c=s.fontSize,h=s.indent,f=s.fontWeight,p=ft.createElement("div"),m=To(r)||ps(r,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,_=m?st:r,y=e.indexOf("start")!==-1,T=y?u:d,v="border-color:"+T+";font-size:"+c+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(v+=(i===Lt?zg:Wg)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),p.style.cssText=v,p.innerText=n||n===0?e+"-"+n:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],oh(p,0,i,y),p},oh=function(e,n,r,i){var s={display:"block"},o=r[i?"os2":"p2"],a=r[i?"p2":"os2"];e._isFlipped=i,s[r.a+"Percent"]=i?-100:0,s[r.a]=i?"1px":0,s["border"+o+ka]=1,s["border"+a+ka]=0,s[r.p]=n+"px",te.set(e,s)},Pe=[],mm={},mc,Nv=function(){return Nn()-Ir>34&&(mc||(mc=requestAnimationFrame(ki)))},Wo=function(){(!er||!er.isPressed||er.startX>st.clientWidth)&&(ke.cache++,er?mc||(mc=requestAnimationFrame(ki)):ki(),Ir||Ao("scrollStart"),Ir=Nn())},Gf=function(){pE=Me.innerWidth,fE=Me.innerHeight},vl=function(){ke.cache++,!gn&&!hE&&!ft.fullscreenElement&&!ft.webkitFullscreenElement&&(!dE||pE!==Me.innerWidth||Math.abs(Me.innerHeight-fE)>Me.innerHeight*.25)&&Lh.restart(!0)},Eo={},Dk=[],TE=function t(){return zt(Se,"scrollEnd",t)||Zs(!0)},Ao=function(e){return Eo[e]&&Eo[e].map(function(n){return n()})||Dk},tr=[],EE=function(e){for(var n=0;n<tr.length;n+=5)(!e||tr[n+4]&&tr[n+4].query===e)&&(tr[n].style.cssText=tr[n+1],tr[n].getBBox&&tr[n].setAttribute("transform",tr[n+2]||""),tr[n+3].uncache=1)},Xg=function(e,n){var r;for(qn=0;qn<Pe.length;qn++)r=Pe[qn],r&&(!n||r._ctx===n)&&(e?r.kill(1):r.revert(!0,!0));n&&EE(n),n||Ao("revert")},AE=function(e,n){ke.cache++,(n||!Mn)&&ke.forEach(function(r){return Ln(r)&&r.cacheID++&&(r.rec=0)}),nr(e)&&(Me.history.scrollRestoration=jg=e)},Mn,po=0,Vv,qk=function(){if(Vv!==po){var e=Vv=po;requestAnimationFrame(function(){return e===po&&Zs(!0)})}},IE=function(){st.appendChild(ga),Hg=ga.offsetHeight||Me.innerHeight,st.removeChild(ga)},Zs=function(e,n){if(Ir&&!e){Wt(Se,"scrollEnd",TE);return}IE(),Mn=Se.isRefreshing=!0,ke.forEach(function(i){return Ln(i)&&++i.cacheID&&(i.rec=i())});var r=Ao("refreshInit");uE&&Se.sort(),n||Xg(),ke.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Pe.slice(0).forEach(function(i){return i.refresh()}),Pe.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),Pe.forEach(function(i){var s=Ai(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>s)&&i.setPositions(i.start,Math.max(i.start+1,s),!0)}),r.forEach(function(i){return i&&i.render&&i.render(-1)}),ke.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),AE(jg,1),Lh.pause(),po++,Mn=2,ki(2),Pe.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=Se.isRefreshing=!1,Ao("refresh")},gm=0,ah=1,Bl,ki=function(e){if(!Mn||e===2){Se.isUpdating=!0,Bl&&Bl.update(0);var n=Pe.length,r=Nn(),i=r-zf>=50,s=n&&Pe[0].scroll();if(ah=gm>s?-1:1,Mn||(gm=s),i&&(Ir&&!Od&&r-Ir>200&&(Ir=0,Ao("scrollEnd")),rh=zf,zf=r),ah<0){for(qn=n;qn-- >0;)Pe[qn]&&Pe[qn].update(0,i);ah=1}else for(qn=0;qn<n;qn++)Pe[qn]&&Pe[qn].update(0,i);Se.isUpdating=!1}mc=0},_m=[vE,wE,Wg,zg,gr+Ul,gr+Ll,gr+$l,gr+Fl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lh=_m.concat([ho,fo,"boxSizing","max"+ka,"max"+Gg,"position",gr,Ot,Ot+$l,Ot+Ll,Ot+Ul,Ot+Fl]),Mk=function(e,n,r){_a(r);var i=e._gsap;if(i.spacerIsNative)_a(i.spacerState);else if(e._gsap.swappedIn){var s=n.parentNode;s&&(s.insertBefore(e,n),s.removeChild(n))}e._gsap.swappedIn=!1},Kf=function(e,n,r,i){if(!e._gsap.swappedIn){for(var s=_m.length,o=n.style,a=e.style,l;s--;)l=_m[s],o[l]=r[l];o.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(o.display="inline-block"),a[Wg]=a[zg]="auto",o.flexBasis=r.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ho]=pm(e,Vn)+nn,o[fo]=pm(e,Lt)+nn,o[Ot]=a[gr]=a[wE]=a[vE]="0",_a(i),a[ho]=a["max"+ka]=r[ho],a[fo]=a["max"+Gg]=r[fo],a[Ot]=r[Ot],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},Nk=/([A-Z])/g,_a=function(e){if(e){var n=e.t.style,r=e.length,i=0,s,o;for((e.t._gsap||te.core.getCache(e.t)).uncache=1;i<r;i+=2)o=e[i+1],s=e[i],o?n[s]=o:n[s]&&n.removeProperty(s.replace(Nk,"-$1").toLowerCase())}},Ou=function(e){for(var n=lh.length,r=e.style,i=[],s=0;s<n;s++)i.push(lh[s],r[lh[s]]);return i.t=e,i},Vk=function(e,n,r){for(var i=[],s=e.length,o=r?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in n?n[a]:e[o+1]);return i.t=e.t,i},ch={left:0,top:0},Lv=function(e,n,r,i,s,o,a,l,u,d,c,h,f,p){Ln(e)&&(e=e(l)),nr(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?sh("0"+e.substr(3),r):0));var m=f?f.time():0,g,_,y;if(f&&f.seek(0),isNaN(e)||(e=+e),ih(e))f&&(e=te.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),a&&oh(a,r,i,!0);else{Ln(n)&&(n=n(l));var T=(e||"0").split(" "),v,S,k,P;y=Un(n,l)||st,v=Ti(y)||{},(!v||!v.left&&!v.top)&&_r(y).display==="none"&&(P=y.style.display,y.style.display="block",v=Ti(y),P?y.style.display=P:y.style.removeProperty("display")),S=sh(T[0],v[i.d]),k=sh(T[1]||"0",r),e=v[i.p]-u[i.p]-d+S+s-k,a&&oh(a,k,i,r-k<20||a._isStart&&k>20),r-=r-k}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var x=e+r,R=o._isStart;g="scroll"+i.d2,oh(o,x,i,R&&x>20||!R&&(c?Math.max(st[g],Nr[g]):o.parentNode[g])<=x+1),c&&(u=Ti(a),c&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+nn))}return f&&y&&(g=Ti(y),f.seek(h),_=Ti(y),f._caScrollDist=g[i.p]-_[i.p],e=e/f._caScrollDist*h),f&&f.seek(m),f?e:Math.round(e)},Lk=/(webkit|moz|length|cssText|inset)/i,Fv=function(e,n,r,i){if(e.parentNode!==n){var s=e.style,o,a;if(n===st){e._stOrig=s.cssText,a=_r(e);for(o in a)!+o&&!Lk.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=r,s.left=i}else s.cssText=e._stOrig;te.core.getCache(e).uncache=1,n.appendChild(e)}},SE=function(e,n,r){var i=n,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,r&&r()),s=i,i=o,o}},Du=function(e,n,r){var i={};i[n.p]="+="+r,te.set(e,i)},$v=function(e,n){var r=Is(e,n),i="_scroll"+n.p2,s=function o(a,l,u,d,c){var h=o.tween,f=l.onComplete,p={};u=u||r();var m=SE(r,u,function(){h.kill(),o.tween=0});return c=d&&c||0,d=d||a-u,h&&h.kill(),l[i]=a,l.modifiers=p,p[i]=function(){return m(u+d*h.ratio+c*h.ratio*h.ratio)},l.onUpdate=function(){ke.cache++,ki()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=te.to(e,l),h};return e[i]=r,r.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Wt(e,"wheel",r.wheelHandler),Se.isTouch&&Wt(e,"touchmove",r.wheelHandler),s},Se=function(){function t(n,r){Ko||t.register(te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),fm(this),this.init(n,r)}var e=t.prototype;return e.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_l){this.update=this.refresh=this.kill=Xr;return}r=qv(nr(r)||ih(r)||r.nodeType?{trigger:r}:r,xu);var s=r,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,d=s.onRefresh,c=s.scrub,h=s.trigger,f=s.pin,p=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,_=s.onScrubComplete,y=s.onSnapComplete,T=s.once,v=s.snap,S=s.pinReparent,k=s.pinSpacer,P=s.containerAnimation,x=s.fastScrollEnd,R=s.preventOverlaps,M=r.horizontal||r.containerAnimation&&r.horizontal!==!1?Vn:Lt,z=!c&&c!==0,D=Un(r.scroller||Me),Z=te.core.getCache(D),J=To(D),ue=("pinType"in r?r.pinType:ps(D,"pinType")||J&&"fixed")==="fixed",oe=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],W=z&&r.toggleActions.split(" "),Y="markers"in r?r.markers:xu.markers,Ce=J?0:parseFloat(_r(D)["border"+M.p2+ka])||0,C=this,Oe=r.onRefreshInit&&function(){return r.onRefreshInit(C)},Ge=Rk(D,J,M),Bt=Pk(D,J),Ke=0,yt=0,je=0,q=Is(D,M),H,U,ne,_e,w,b,I,O,N,E,j,$,B,V,ie,X,ae,se,le,Re,Ie,Qe,St,Jt,Zt,Qn,gi,xt,jt,Pr,Bi,$e,qs,xr,kr,Or,Ms,Bo,_i;if(C._startClamp=C._endClamp=!1,C._dir=M,g*=45,C.scroller=D,C.scroll=P?P.time.bind(P):q,_e=q(),C.vars=r,i=i||r.animation,"refreshPriority"in r&&(uE=1,r.refreshPriority===-9999&&(Bl=C)),Z.tweenScroll=Z.tweenScroll||{top:$v(D,Lt),left:$v(D,Vn)},C.tweenTo=H=Z.tweenScroll[M.p],C.scrubDuration=function(ee){qs=ih(ee)&&ee,qs?$e?$e.duration(ee):$e=te.to(i,{ease:"expo",totalProgress:"+=0",duration:qs,paused:!0,onComplete:function(){return _&&_(C)}}):($e&&$e.progress(1).kill(),$e=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(c),Pr=0,l||(l=i.vars.id)),v&&((!zs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in st.style&&te.set(J?[st,Nr]:D,{scrollBehavior:"auto"}),ke.forEach(function(ee){return Ln(ee)&&ee.target===(J?ft.scrollingElement||Nr:D)&&(ee.smooth=!1)}),ne=Ln(v.snapTo)?v.snapTo:v.snapTo==="labels"?kk(i):v.snapTo==="labelsDirectional"?Ok(i):v.directional!==!1?function(ee,Le){return Kg(v.snapTo)(ee,Nn()-yt<500?0:Le.direction)}:te.utils.snap(v.snapTo),xr=v.duration||{min:.1,max:2},xr=zs(xr)?ia(xr.min,xr.max):ia(xr,xr),kr=te.delayedCall(v.delay||qs/2||.1,function(){var ee=q(),Le=Nn()-yt<500,pe=H.tween;if((Le||Math.abs(C.getVelocity())<10)&&!pe&&!Od&&Ke!==ee){var xe=(ee-b)/V,Ht=i&&!z?i.totalProgress():xe,Ue=Le?0:(Ht-Bi)/(Nn()-rh)*1e3||0,Ct=te.utils.clamp(-xe,1-xe,zo(Ue/2)*Ue/.185),Pn=xe+(v.inertia===!1?0:Ct),en=ia(0,1,ne(Pn,C)),ht=Math.round(b+en*V),Ze=v,Dr=Ze.onStart,dt=Ze.onInterrupt,Jn=Ze.onComplete;if(ee<=I&&ee>=b&&ht!==ee){if(pe&&!pe._initted&&pe.data<=zo(ht-ee))return;v.inertia===!1&&(Ct=en-xe),H(ht,{duration:xr(zo(Math.max(zo(Pn-Ht),zo(en-Ht))*.185/Ue/.05||0)),ease:v.ease||"power3",data:zo(ht-ee),onInterrupt:function(){return kr.restart(!0)&&dt&&dt(C)},onComplete:function(){C.update(),Ke=q(),Pr=Bi=i&&!z?i.totalProgress():C.progress,y&&y(C),Jn&&Jn(C)}},ee,Ct*V,ht-ee-Ct*V),Dr&&Dr(C,H.tween)}}else C.isActive&&Ke!==ee&&kr.restart(!0)}).pause()),l&&(mm[l]=C),h=C.trigger=Un(h||f!==!0&&f),_i=h&&h._gsap&&h._gsap.stRevert,_i&&(_i=_i(C)),f=f===!0?h:Un(f),nr(a)&&(a={targets:h,className:a}),f&&(p===!1||p===gr||(p=!p&&f.parentNode&&f.parentNode.style&&_r(f.parentNode).display==="flex"?!1:Ot),C.pin=f,U=te.core.getCache(f),U.spacer?ie=U.pinState:(k&&(k=Un(k),k&&!k.nodeType&&(k=k.current||k.nativeElement),U.spacerIsNative=!!k,k&&(U.spacerState=Ou(k))),U.spacer=se=k||ft.createElement("div"),se.classList.add("pin-spacer"),l&&se.classList.add("pin-spacer-"+l),U.pinState=ie=Ou(f)),r.force3D!==!1&&te.set(f,{force3D:!0}),C.spacer=se=U.spacer,jt=_r(f),Jt=jt[p+M.os2],Re=te.getProperty(f),Ie=te.quickSetter(f,M.a,nn),Kf(f,se,jt),ae=Ou(f)),Y){$=zs(Y)?qv(Y,Mv):Mv,E=ku("scroller-start",l,D,M,$,0),j=ku("scroller-end",l,D,M,$,0,E),le=E["offset"+M.op.d2];var be=Un(ps(D,"content")||D);O=this.markerStart=ku("start",l,be,M,$,le,0,P),N=this.markerEnd=ku("end",l,be,M,$,le,0,P),P&&(Bo=te.quickSetter([O,N],M.a,nn)),!ue&&!(oi.length&&ps(D,"fixedMarkers")===!0)&&(xk(J?st:D),te.set([E,j],{force3D:!0}),Qn=te.quickSetter(E,M.a,nn),xt=te.quickSetter(j,M.a,nn))}if(P){var fe=P.vars.onUpdate,ze=P.vars.onUpdateParams;P.eventCallback("onUpdate",function(){C.update(0,0,1),fe&&fe.apply(P,ze||[])})}if(C.previous=function(){return Pe[Pe.indexOf(C)-1]},C.next=function(){return Pe[Pe.indexOf(C)+1]},C.revert=function(ee,Le){if(!Le)return C.kill(!0);var pe=ee!==!1||!C.enabled,xe=gn;pe!==C.isReverted&&(pe&&(Or=Math.max(q(),C.scroll.rec||0),je=C.progress,Ms=i&&i.progress()),O&&[O,N,E,j].forEach(function(Ht){return Ht.style.display=pe?"none":"block"}),pe&&(gn=C,C.update(pe)),f&&(!S||!C.isActive)&&(pe?Mk(f,se,ie):Kf(f,se,_r(f),Zt)),pe||C.update(pe),gn=xe,C.isReverted=pe)},C.refresh=function(ee,Le,pe,xe){if(!((gn||!C.enabled)&&!Le)){if(f&&ee&&Ir){Wt(t,"scrollEnd",TE);return}!Mn&&Oe&&Oe(C),gn=C,H.tween&&!pe&&(H.tween.kill(),H.tween=0),$e&&$e.pause(),m&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ht=Ge(),Ue=Bt(),Ct=P?P.duration():Ai(D,M),Pn=V<=.01,en=0,ht=xe||0,Ze=zs(pe)?pe.end:r.end,Dr=r.endTrigger||h,dt=zs(pe)?pe.start:r.start||(r.start===0||!h?0:f?"0 0":"0 100%"),Jn=C.pinnedContainer=r.pinnedContainer&&Un(r.pinnedContainer,C),zr=h&&Math.max(0,Pe.indexOf(C))||0,Zn=zr,tn,dn,Ns,hu,fn,Vt,Wr,If,by,el,Gr,tl,du;for(Y&&zs(pe)&&(tl=te.getProperty(E,M.p),du=te.getProperty(j,M.p));Zn--;)Vt=Pe[Zn],Vt.end||Vt.refresh(0,1)||(gn=C),Wr=Vt.pin,Wr&&(Wr===h||Wr===f||Wr===Jn)&&!Vt.isReverted&&(el||(el=[]),el.unshift(Vt),Vt.revert(!0,!0)),Vt!==Pe[Zn]&&(zr--,Zn--);for(Ln(dt)&&(dt=dt(C)),dt=xv(dt,"start",C),b=Lv(dt,h,Ht,M,q(),O,E,C,Ue,Ce,ue,Ct,P,C._startClamp&&"_startClamp")||(f?-.001:0),Ln(Ze)&&(Ze=Ze(C)),nr(Ze)&&!Ze.indexOf("+=")&&(~Ze.indexOf(" ")?Ze=(nr(dt)?dt.split(" ")[0]:"")+Ze:(en=sh(Ze.substr(2),Ht),Ze=nr(dt)?dt:(P?te.utils.mapRange(0,P.duration(),P.scrollTrigger.start,P.scrollTrigger.end,b):b)+en,Dr=h)),Ze=xv(Ze,"end",C),I=Math.max(b,Lv(Ze||(Dr?"100% 0":Ct),Dr,Ht,M,q()+en,N,j,C,Ue,Ce,ue,Ct,P,C._endClamp&&"_endClamp"))||-.001,en=0,Zn=zr;Zn--;)Vt=Pe[Zn],Wr=Vt.pin,Wr&&Vt.start-Vt._pinPush<=b&&!P&&Vt.end>0&&(tn=Vt.end-(C._startClamp?Math.max(0,Vt.start):Vt.start),(Wr===h&&Vt.start-Vt._pinPush<b||Wr===Jn)&&isNaN(dt)&&(en+=tn*(1-Vt.progress)),Wr===f&&(ht+=tn));if(b+=en,I+=en,C._startClamp&&(C._startClamp+=en),C._endClamp&&!Mn&&(C._endClamp=I||-.001,I=Math.min(I,Ai(D,M))),V=I-b||(b-=.01)&&.001,Pn&&(je=te.utils.clamp(0,1,te.utils.normalize(b,I,Or))),C._pinPush=ht,O&&en&&(tn={},tn[M.a]="+="+en,Jn&&(tn[M.p]="-="+q()),te.set([O,N],tn)),f)tn=_r(f),hu=M===Lt,Ns=q(),Qe=parseFloat(Re(M.a))+ht,!Ct&&I>1&&(Gr=(J?ft.scrollingElement||Nr:D).style,Gr={style:Gr,value:Gr["overflow"+M.a.toUpperCase()]},J&&_r(st)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Gr.style["overflow"+M.a.toUpperCase()]="scroll")),Kf(f,se,tn),ae=Ou(f),dn=Ti(f,!0),If=ue&&Is(D,hu?Vn:Lt)(),p&&(Zt=[p+M.os2,V+ht+nn],Zt.t=se,Zn=p===Ot?pm(f,M)+V+ht:0,Zn&&Zt.push(M.d,Zn+nn),_a(Zt),Jn&&Pe.forEach(function(nl){nl.pin===Jn&&nl.vars.pinSpacing!==!1&&(nl._subPinOffset=!0)}),ue&&q(Or)),ue&&(fn={top:dn.top+(hu?Ns-b:If)+nn,left:dn.left+(hu?If:Ns-b)+nn,boxSizing:"border-box",position:"fixed"},fn[ho]=fn["max"+ka]=Math.ceil(dn.width)+nn,fn[fo]=fn["max"+Gg]=Math.ceil(dn.height)+nn,fn[gr]=fn[gr+$l]=fn[gr+Ll]=fn[gr+Ul]=fn[gr+Fl]="0",fn[Ot]=tn[Ot],fn[Ot+$l]=tn[Ot+$l],fn[Ot+Ll]=tn[Ot+Ll],fn[Ot+Ul]=tn[Ot+Ul],fn[Ot+Fl]=tn[Ot+Fl],X=Vk(ie,fn,S),Mn&&q(0)),i?(by=i._initted,jf(1),i.render(i.duration(),!0,!0),St=Re(M.a)-Qe+V+ht,gi=Math.abs(V-St)>1,ue&&gi&&X.splice(X.length-2,2),i.render(0,!0,!0),by||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),jf(0)):St=V,Gr&&(Gr.value?Gr.style["overflow"+M.a.toUpperCase()]=Gr.value:Gr.style.removeProperty("overflow-"+M.a));else if(h&&q()&&!P)for(dn=h.parentNode;dn&&dn!==st;)dn._pinOffset&&(b-=dn._pinOffset,I-=dn._pinOffset),dn=dn.parentNode;el&&el.forEach(function(nl){return nl.revert(!1,!0)}),C.start=b,C.end=I,_e=w=Mn?Or:q(),!P&&!Mn&&(_e<Or&&q(Or),C.scroll.rec=0),C.revert(!1,!0),yt=Nn(),kr&&(Ke=-1,kr.restart(!0)),gn=0,i&&z&&(i._initted||Ms)&&i.progress()!==Ms&&i.progress(Ms||0,!0).render(i.time(),!0,!0),(Pn||je!==C.progress||P)&&(i&&!z&&i.totalProgress(P&&b<-.001&&!je?te.utils.normalize(b,I,0):je,!0),C.progress=Pn||(_e-b)/V===je?0:je),f&&p&&(se._pinOffset=Math.round(C.progress*St)),$e&&$e.invalidate(),isNaN(tl)||(tl-=te.getProperty(E,M.p),du-=te.getProperty(j,M.p),Du(E,M,tl),Du(O,M,tl-(xe||0)),Du(j,M,du),Du(N,M,du-(xe||0))),Pn&&!Mn&&C.update(),d&&!Mn&&!B&&(B=!0,d(C),B=!1)}},C.getVelocity=function(){return(q()-w)/(Nn()-rh)*1e3||0},C.endAnimation=function(){ol(C.callbackAnimation),i&&($e?$e.progress(1):i.paused()?z||ol(i,C.direction<0,1):ol(i,i.reversed()))},C.labelToScroll=function(ee){return i&&i.labels&&(b||C.refresh()||b)+i.labels[ee]/i.duration()*V||0},C.getTrailing=function(ee){var Le=Pe.indexOf(C),pe=C.direction>0?Pe.slice(0,Le).reverse():Pe.slice(Le+1);return(nr(ee)?pe.filter(function(xe){return xe.vars.preventOverlaps===ee}):pe).filter(function(xe){return C.direction>0?xe.end<=b:xe.start>=I})},C.update=function(ee,Le,pe){if(!(P&&!pe&&!ee)){var xe=Mn===!0?Or:C.scroll(),Ht=ee?0:(xe-b)/V,Ue=Ht<0?0:Ht>1?1:Ht||0,Ct=C.progress,Pn,en,ht,Ze,Dr,dt,Jn,zr;if(Le&&(w=_e,_e=P?q():xe,v&&(Bi=Pr,Pr=i&&!z?i.totalProgress():Ue)),g&&!Ue&&f&&!gn&&!Su&&Ir&&b<xe+(xe-w)/(Nn()-rh)*g&&(Ue=1e-4),Ue!==Ct&&C.enabled){if(Pn=C.isActive=!!Ue&&Ue<1,en=!!Ct&&Ct<1,dt=Pn!==en,Dr=dt||!!Ue!=!!Ct,C.direction=Ue>Ct?1:-1,C.progress=Ue,Dr&&!gn&&(ht=Ue&&!Ct?0:Ue===1?1:Ct===1?2:3,z&&(Ze=!dt&&W[ht+1]!=="none"&&W[ht+1]||W[ht],zr=i&&(Ze==="complete"||Ze==="reset"||Ze in i))),R&&(dt||zr)&&(zr||c||!i)&&(Ln(R)?R(C):C.getTrailing(R).forEach(function(Ns){return Ns.endAnimation()})),z||($e&&!gn&&!Su?($e._dp._time-$e._start!==$e._time&&$e.render($e._dp._time-$e._start),$e.resetTo?$e.resetTo("totalProgress",Ue,i._tTime/i._tDur):($e.vars.totalProgress=Ue,$e.invalidate().restart())):i&&i.totalProgress(Ue,!!(gn&&(yt||ee)))),f){if(ee&&p&&(se.style[p+M.os2]=Jt),!ue)Ie(yl(Qe+St*Ue));else if(Dr){if(Jn=!ee&&Ue>Ct&&I+1>xe&&xe+1>=Ai(D,M),S)if(!ee&&(Pn||Jn)){var Zn=Ti(f,!0),tn=xe-b;Fv(f,st,Zn.top+(M===Lt?tn:0)+nn,Zn.left+(M===Lt?0:tn)+nn)}else Fv(f,se);_a(Pn||Jn?X:ae),gi&&Ue<1&&Pn||Ie(Qe+(Ue===1&&!Jn?St:0))}}v&&!H.tween&&!gn&&!Su&&kr.restart(!0),a&&(dt||T&&Ue&&(Ue<1||!Hf))&&Fh(a.targets).forEach(function(Ns){return Ns.classList[Pn||T?"add":"remove"](a.className)}),o&&!z&&!ee&&o(C),Dr&&!gn?(z&&(zr&&(Ze==="complete"?i.pause().totalProgress(1):Ze==="reset"?i.restart(!0).pause():Ze==="restart"?i.restart(!0):i[Ze]()),o&&o(C)),(dt||!Hf)&&(u&&dt&&Wf(C,u),oe[ht]&&Wf(C,oe[ht]),T&&(Ue===1?C.kill(!1,1):oe[ht]=0),dt||(ht=Ue===1?1:3,oe[ht]&&Wf(C,oe[ht]))),x&&!Pn&&Math.abs(C.getVelocity())>(ih(x)?x:2500)&&(ol(C.callbackAnimation),$e?$e.progress(1):ol(i,Ze==="reverse"?1:!Ue,1))):z&&o&&!gn&&o(C)}if(xt){var dn=P?xe/P.duration()*(P._caScrollDist||0):xe;Qn(dn+(E._isFlipped?1:0)),xt(dn)}Bo&&Bo(-xe/P.duration()*(P._caScrollDist||0))}},C.enable=function(ee,Le){C.enabled||(C.enabled=!0,Wt(D,"resize",vl),J||Wt(D,"scroll",Wo),Oe&&Wt(t,"refreshInit",Oe),ee!==!1&&(C.progress=je=0,_e=w=Ke=q()),Le!==!1&&C.refresh())},C.getTween=function(ee){return ee&&H?H.tween:$e},C.setPositions=function(ee,Le,pe,xe){if(P){var Ht=P.scrollTrigger,Ue=P.duration(),Ct=Ht.end-Ht.start;ee=Ht.start+Ct*ee/Ue,Le=Ht.start+Ct*Le/Ue}C.refresh(!1,!1,{start:kv(ee,pe&&!!C._startClamp),end:kv(Le,pe&&!!C._endClamp)},xe),C.update()},C.adjustPinSpacing=function(ee){if(Zt&&ee){var Le=Zt.indexOf(M.d)+1;Zt[Le]=parseFloat(Zt[Le])+ee+nn,Zt[1]=parseFloat(Zt[1])+ee+nn,_a(Zt)}},C.disable=function(ee,Le){if(C.enabled&&(ee!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Le||$e&&$e.pause(),Or=0,U&&(U.uncache=1),Oe&&zt(t,"refreshInit",Oe),kr&&(kr.pause(),H.tween&&H.tween.kill()&&(H.tween=0)),!J)){for(var pe=Pe.length;pe--;)if(Pe[pe].scroller===D&&Pe[pe]!==C)return;zt(D,"resize",vl),J||zt(D,"scroll",Wo)}},C.kill=function(ee,Le){C.disable(ee,Le),$e&&!Le&&$e.kill(),l&&delete mm[l];var pe=Pe.indexOf(C);pe>=0&&Pe.splice(pe,1),pe===qn&&ah>0&&qn--,pe=0,Pe.forEach(function(xe){return xe.scroller===C.scroller&&(pe=1)}),pe||Mn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ee&&i.revert({kill:!1}),Le||i.kill()),O&&[O,N,E,j].forEach(function(xe){return xe.parentNode&&xe.parentNode.removeChild(xe)}),Bl===C&&(Bl=0),f&&(U&&(U.uncache=1),pe=0,Pe.forEach(function(xe){return xe.pin===f&&pe++}),pe||(U.spacer=0)),r.onKill&&r.onKill(C)},Pe.push(C),C.enable(!1,!1),_i&&_i(C),i&&i.add&&!V){var vt=C.update;C.update=function(){C.update=vt,b||I||C.refresh()},te.delayedCall(.01,C.update),V=.01,b=I=0}else C.refresh();f&&qk()},t.register=function(r){return Ko||(te=r||gE(),mE()&&window.document&&t.enable(),Ko=_l),Ko},t.defaults=function(r){if(r)for(var i in r)xu[i]=r[i];return xu},t.disable=function(r,i){_l=0,Pe.forEach(function(o){return o[i?"kill":"disable"](r)}),zt(Me,"wheel",Wo),zt(ft,"scroll",Wo),clearInterval(Iu),zt(ft,"touchcancel",Xr),zt(st,"touchstart",Xr),Ru(zt,ft,"pointerdown,touchstart,mousedown",Ov),Ru(zt,ft,"pointerup,touchend,mouseup",Dv),Lh.kill(),Cu(zt);for(var s=0;s<ke.length;s+=3)Pu(zt,ke[s],ke[s+1]),Pu(zt,ke[s],ke[s+2])},t.enable=function(){if(Me=window,ft=document,Nr=ft.documentElement,st=ft.body,te&&(Fh=te.utils.toArray,ia=te.utils.clamp,fm=te.core.context||Xr,jf=te.core.suppressOverwrites||Xr,jg=Me.history.scrollRestoration||"auto",gm=Me.pageYOffset,te.core.globals("ScrollTrigger",t),st)){_l=1,ga=document.createElement("div"),ga.style.height="100vh",ga.style.position="absolute",IE(),Ck(),Nt.register(te),t.isTouch=Nt.isTouch,Ki=Nt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Wt(Me,"wheel",Wo),cE=[Me,ft,Nr,st],te.matchMedia?(t.matchMedia=function(l){var u=te.matchMedia(),d;for(d in l)u.add(d,l[d]);return u},te.addEventListener("matchMediaInit",function(){return Xg()}),te.addEventListener("matchMediaRevert",function(){return EE()}),te.addEventListener("matchMedia",function(){Zs(0,1),Ao("matchMedia")}),te.matchMedia("(orientation: portrait)",function(){return Gf(),Gf})):console.warn("Requires GSAP 3.11.0 or later"),Gf(),Wt(ft,"scroll",Wo);var r=st.style,i=r.borderTopStyle,s=te.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Ti(st),Lt.m=Math.round(o.top+Lt.sc())||0,Vn.m=Math.round(o.left+Vn.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),Iu=setInterval(Nv,250),te.delayedCall(.5,function(){return Su=0}),Wt(ft,"touchcancel",Xr),Wt(st,"touchstart",Xr),Ru(Wt,ft,"pointerdown,touchstart,mousedown",Ov),Ru(Wt,ft,"pointerup,touchend,mouseup",Dv),dm=te.utils.checkPrefix("transform"),lh.push(dm),Ko=Nn(),Lh=te.delayedCall(.2,Zs).pause(),Xo=[ft,"visibilitychange",function(){var l=Me.innerWidth,u=Me.innerHeight;ft.hidden?(Rv=l,Pv=u):(Rv!==l||Pv!==u)&&vl()},ft,"DOMContentLoaded",Zs,Me,"load",Zs,Me,"resize",vl],Cu(Wt),Pe.forEach(function(l){return l.enable(0,1)}),a=0;a<ke.length;a+=3)Pu(zt,ke[a],ke[a+1]),Pu(zt,ke[a],ke[a+2])}},t.config=function(r){"limitCallbacks"in r&&(Hf=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(Iu)||(Iu=i)&&setInterval(Nv,i),"ignoreMobileResize"in r&&(dE=t.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Cu(zt)||Cu(Wt,r.autoRefreshEvents||"none"),hE=(r.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(r,i){var s=Un(r),o=ke.indexOf(s),a=To(s);~o&&ke.splice(o,a?6:2),i&&(a?oi.unshift(Me,i,st,i,Nr,i):oi.unshift(s,i))},t.clearMatchMedia=function(r){Pe.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},t.isInViewport=function(r,i,s){var o=(nr(r)?Un(r):r).getBoundingClientRect(),a=o[s?ho:fo]*i||0;return s?o.right-a>0&&o.left+a<Me.innerWidth:o.bottom-a>0&&o.top+a<Me.innerHeight},t.positionInViewport=function(r,i,s){nr(r)&&(r=Un(r));var o=r.getBoundingClientRect(),a=o[s?ho:fo],l=i==null?a/2:i in $h?$h[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Me.innerWidth:(o.top+l)/Me.innerHeight},t.killAll=function(r){if(Pe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),r!==!0){var i=Eo.killAll||[];Eo={},i.forEach(function(s){return s()})}},t}();Se.version="3.12.2";Se.saveStyles=function(t){return t?Fh(t).forEach(function(e){if(e&&e.style){var n=tr.indexOf(e);n>=0&&tr.splice(n,5),tr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),te.core.getCache(e),fm())}}):tr};Se.revert=function(t,e){return Xg(!t,e)};Se.create=function(t,e){return new Se(t,e)};Se.refresh=function(t){return t?vl():(Ko||Se.register())&&Zs(!0)};Se.update=function(t){return++ke.cache&&ki(t===!0?2:0)};Se.clearScrollMemory=AE;Se.maxScroll=function(t,e){return Ai(t,e?Vn:Lt)};Se.getScrollFunc=function(t,e){return Is(Un(t),e?Vn:Lt)};Se.getById=function(t){return mm[t]};Se.getAll=function(){return Pe.filter(function(t){return t.vars.id!=="ScrollSmoother"})};Se.isScrolling=function(){return!!Ir};Se.snapDirectional=Kg;Se.addEventListener=function(t,e){var n=Eo[t]||(Eo[t]=[]);~n.indexOf(e)||n.push(e)};Se.removeEventListener=function(t,e){var n=Eo[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)};Se.batch=function(t,e){var n=[],r={},i=e.interval||.016,s=e.batchMax||1e9,o=function(u,d){var c=[],h=[],f=te.delayedCall(i,function(){d(c,h),c=[],h=[]}).pause();return function(p){c.length||f.restart(!0),c.push(p.trigger),h.push(p),s<=c.length&&f.progress(1)}},a;for(a in e)r[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),Wt(Se,"refresh",function(){return s=e.batchMax()})),Fh(t).forEach(function(l){var u={};for(a in r)u[a]=r[a];u.trigger=l,n.push(Se.create(u))}),n};var Uv=function(e,n,r,i){return n>i?e(i):n<0&&e(0),r>i?(i-n)/(r-n):r<0?n/(n-r):1},Xf=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(Nt.isTouch?" pinch-zoom":""):"none",e===Nr&&t(st,n)},qu={auto:1,scroll:1},Fk=function(e){var n=e.event,r=e.target,i=e.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,o=s._gsap||te.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==st&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(qu[(l=_r(s)).overflowY]||qu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==r&&!To(s)&&(qu[(l=_r(s)).overflowY]||qu[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},CE=function(e,n,r,i){return Nt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:i=i&&Fk,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&Wt(ft,Nt.eventTypes[0],jv,!1,!0)},onDisable:function(){return zt(ft,Nt.eventTypes[0],jv,!0)}})},$k=/(input|label|select|textarea)/i,Bv,jv=function(e){var n=$k.test(e.target.tagName);(n||Bv)&&(e._gsapAllow=!0,Bv=n)},Uk=function(e){zs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,r=n.normalizeScrollX,i=n.momentum,s=n.allowNestedScroll,o=n.onRelease,a,l,u=Un(e.target)||Nr,d=te.core.globals().ScrollSmoother,c=d&&d.get(),h=Ki&&(e.content&&Un(e.content)||c&&e.content!==!1&&!c.smooth()&&c.content()),f=Is(u,Lt),p=Is(u,Vn),m=1,g=(Nt.isTouch&&Me.visualViewport?Me.visualViewport.scale*Me.visualViewport.width:Me.outerWidth)/Me.innerWidth,_=0,y=Ln(i)?function(){return i(a)}:function(){return i||2.8},T,v,S=CE(u,e.type,!0,s),k=function(){return v=!1},P=Xr,x=Xr,R=function(){l=Ai(u,Lt),x=ia(Ki?1:0,l),r&&(P=ia(0,Ai(u,Vn))),T=po},M=function(){h._gsap.y=yl(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},z=function(){if(v){requestAnimationFrame(k);var Y=yl(a.deltaY/2),Ce=x(f.v-Y);if(h&&Ce!==f.v+f.offset){f.offset=Ce-f.v;var C=yl((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",f.cacheID=ke.cache,ki()}return!0}f.offset&&M(),v=!0},D,Z,J,ue,oe=function(){R(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return h&&te.set(h,{y:"+=0"}),e.ignoreCheck=function(W){return Ki&&W.type==="touchmove"&&z()||m>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){v=!1;var W=m;m=yl((Me.visualViewport&&Me.visualViewport.scale||1)/g),D.pause(),W!==m&&Xf(u,m>1.01?!0:r?!1:"x"),Z=p(),J=f(),R(),T=po},e.onRelease=e.onGestureStart=function(W,Y){if(f.offset&&M(),!Y)ue.restart(!0);else{ke.cache++;var Ce=y(),C,Oe;r&&(C=p(),Oe=C+Ce*.05*-W.velocityX/.227,Ce*=Uv(p,C,Oe,Ai(u,Vn)),D.vars.scrollX=P(Oe)),C=f(),Oe=C+Ce*.05*-W.velocityY/.227,Ce*=Uv(f,C,Oe,Ai(u,Lt)),D.vars.scrollY=x(Oe),D.invalidate().duration(Ce).play(.01),(Ki&&D.vars.scrollY>=l||C>=l-1)&&te.to({},{onUpdate:oe,duration:Ce})}o&&o(W)},e.onWheel=function(){D._ts&&D.pause(),Nn()-_>1e3&&(T=0,_=Nn())},e.onChange=function(W,Y,Ce,C,Oe){if(po!==T&&R(),Y&&r&&p(P(C[2]===Y?Z+(W.startX-W.x):p()+Y-C[1])),Ce){f.offset&&M();var Ge=Oe[2]===Ce,Bt=Ge?J+W.startY-W.y:f()+Ce-Oe[1],Ke=x(Bt);Ge&&Bt!==Ke&&(J+=Ke-Bt),f(Ke)}(Ce||Y)&&ki()},e.onEnable=function(){Xf(u,r?!1:"x"),Se.addEventListener("refresh",oe),Wt(Me,"resize",oe),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),S.enable()},e.onDisable=function(){Xf(u,!0),zt(Me,"resize",oe),Se.removeEventListener("refresh",oe),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new Nt(e),a.iOS=Ki,Ki&&!f()&&f(1),Ki&&te.ticker.add(Xr),ue=a._dc,D=te.to(a,{ease:"power4",paused:!0,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:SE(f,f(),function(){return D.pause()})},onUpdate:ki,onComplete:ue.vars.onComplete}),a};Se.sort=function(t){return Pe.sort(t||function(e,n){return(e.vars.refreshPriority||0)*-1e6+e.start-(n.start+(n.vars.refreshPriority||0)*-1e6)})};Se.observe=function(t){return new Nt(t)};Se.normalizeScroll=function(t){if(typeof t>"u")return er;if(t===!0&&er)return er.enable();if(t===!1)return er&&er.kill();var e=t instanceof Nt?t:Uk(t);return er&&er.target===e.target&&er.kill(),To(e.target)&&(er=e),e};Se.core={_getVelocityProp:hm,_inputObserver:CE,_scrollers:ke,_proxies:oi,bridge:{ss:function(){Ir||Ao("scrollStart"),Ir=Nn()},ref:function(){return gn}}};gE()&&te.registerPlugin(Se);const Bk="/assets/paper-torn-3add2d41.png",jk="/assets/retro-stripes-9c344c82.svg",Hk="/assets/mango-bite-2c591c15.png";const zk={mounted(){Pt.registerPlugin(Se);const t=this.$refs.candy,e=this.$refs.sliderContainer,n=document.getElementById("main-slider-container");let r=window.innerWidth,i=e.children[0].offsetWidth+e.children[1].offsetWidth-r;Pt.timeline({default:{ease:"none"},scrollTrigger:{trigger:n,pin:!0,start:"top top",end:"+200%",scrub:1,invalidateOnRefresh:!0}}).to(e,{x:-i,duration:3,ease:"none"});var o=Pt.timeline({scrollTrigger:{trigger:".banner-text",start:"top+=450px ",end:"+=450px",toggleActions:"play none none none"}});const a=this.$refs.verite;o.to(a,{duration:.65,rotation:45,ease:"power2.out"}).from(a,{rotation:90,duration:.65,delay:-.65,ease:"power2.out"}),Pt.fromTo(t,{y:"100%",opacity:0},{y:"0%",opacity:1,duration:.5,stagger:.2,scrollTrigger:{trigger:n,start:"top 30%",end:"bottom bottom",scrub:!0}}),Pt.to(t,{scrollTrigger:{trigger:n,start:"top top",end:"bottom 30%",scrub:!0},x:.9*n.offsetWidth,duration:5,ease:"power1.inOut",y:l=>l%2===0?50:-50,rotation:l=>l%2===0?360:-360}),Pt.to(".black-bg",{backgroundColor:"#1d1d1b",scrollTrigger:{trigger:"#main-slider-container",start:"top 90%",end:"+=30%",scrub:!0,stagger:.3,duration:4}})},components:{}},Wk={class:"section1",id:"main-slider-container"},Gk=A("div",{class:"torn-paper w-screen absolute top-[-80px] z-50 sm:top-[-100px]"},[A("img",{class:"w-screen h-48 z-50",src:Bk,alt:"",srcset:""})],-1),Kk={id:"slider-container",class:"slider-container",ref:"sliderContainer"},Xk=Bc('<div class="flex !items-start"><div class="banner-text flex flex-col w-[90%] !items-start p-10"><div class="flex flex-col w-2/5"><div class="button-74 !bg-[#fec5fb] w-40 text-center z-10 small-btn"> Embrace </div><div class="button-74 !bg-[#ff8709] !text-[35px] w-full ml-10"> the Vintage Aura </div></div><div class="text-[2.5vw] w-3/4 mt-10 sm:text-[2em]"> A Retro Ride to the Past, Where Memories Unfold. </div></div><div class="banner-retro w-[60%] absolute right-0 sm:w-[70%]"><img class="z-3" src="'+jk+'" alt=""></div></div>',1),Yk={class:"!w-[300vw] banner-text sm:!w-[200vw]"},Qk={src:Hk,alt:"aaaa",srcset:"",ref:"candy",class:"sm:hidden"},Jk={class:"about !bg-transparent sm:!text-[5em] sm:h-full sm:w-1/2 sm:!mt-10"},Zk={class:"button-74 small-btn !bg-[#0ae448] !text-[4vw] !text-black rotate-[6.5deg] !p-5 sm:!p-3 sm:!text-[6vw]",ref:"verite"},eO=A("span",{class:"button-74 small-btn !p-5 gradient-btn-1 !text-[4vw] relative bottom-10 sm:!p-3 sm:!text-[6vw] sm:bottom-5"},"cherished",-1),tO=A("span",{class:"button-74 small-btn !p-5 gradient-btn-2 !text-[4vw] !shadow-none rotate-[15deg] relative right-5 z-[-1]"},"memories",-1);function nO(t,e,n,r,i,s){return K(),Q("section",Wk,[Gk,A("div",Kk,[Xk,A("div",Yk,[A("img",Qk,null,512),A("h1",Jk,[so("Dive into the timeless enchantment of "),A("span",Zk,"Verité",512),so(" where "),eO,tO,so(" and vibrant echoes of yesteryears")])])],512)])}const RE=it(zk,[["render",nO]]);const rO={mounted(){Pt.registerPlugin(Se),this.handleScroll()},methods:{handleScroll(){Se.scrollerProxy(this.$refs.scroller,{scrollTop(t){return arguments.length&&(this.$refs.scroller.scrollTop=t),this.$refs.scroller.scrollTop}}),Pt.utils.toArray(".photo-wrapper").forEach((t,e)=>{const n=t.querySelector(".wrapper");Se.create({trigger:t,start:"top 80%",end:"bottom bottom",scrub:.5,onUpdate:r=>{const i=r.progress,[s,o]=e%2?["100%",(n.scrollWidth-this.$el.offsetWidth)*-1]:[n.scrollWidth*-1,0];Pt.to(n,{x:Pt.utils.interpolate(s,o,i),ease:"none"})}})})}}},iO={class:"scroller overflow-auto text-12vw overflow-x-hidden z-10",ref:"scroller"},sO={class:"h-fit photo-wrapper"},oO={ref:"wrapper1",class:"wrapper flex text-[16vh] font-medium overflow whitespace-nowrap"},aO={class:"wrapper flex text-[16vh] font-medium"},lO=["src"],cO={class:"h-fit photo-wrapper"},uO={ref:"wrapper2",class:"wrapper flex text-[16vh] font-medium overflow whitespace-nowrap"},hO={class:"wrapper flex text-[16vh] font-medium"},dO=["src"],fO={class:"h-fit photo-wrapper"},pO={ref:"wrapper3",class:"wrapper flex text-[16vh] font-medium overflow whitespace-nowrap"};function mO(t,e,n,r,i,s){return K(),Q("div",iO,[A("section",sO,[A("div",oO," Keep smiling ",512)]),(K(),Q(Ae,null,Mt([1,2,3,4],o=>A("section",{class:"photo-wrapper",key:o},[A("div",aO,[(K(),Q(Ae,null,Mt([1,2,3,4,5,6,7,8,9],a=>A("img",{key:a,class:"h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer",src:`../../assets/unsplash_images/image_${o}_${a}.jpg`,alt:"Unsplash image"},null,8,lO)),64))])])),64)),A("section",cO,[A("div",uO," because life is a beautiful thing ",512)]),(K(),Q(Ae,null,Mt([1,2,3,4],o=>A("section",{class:"photo-wrapper",key:o},[A("div",hO,[(K(),Q(Ae,null,Mt([1,2,3,4,5,6,7,8,9],a=>A("img",{key:a,class:"h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer",src:"../../assets/unsplash_images/image_"+o+"_"+a+".jpg",alt:"Unsplash image"},null,8,dO)),64))])])),64)),A("section",fO,[A("div",pO," and there's so much to smile about. ",512)])],512)}const PE=it(rO,[["render",mO]]);const gO={data(){return{fonts:[{text:"Coming Soon...",font:""},{text:"बने रहें...",font:""},{text:"...دیکھتے رہنا",font:""},{text:"காத்திருங்கள்...",font:""},{text:"చూస్తూనే ఉండండి...",font:""},{text:"ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ...",font:""},{text:"ഉടൻ വരുന്നു...",font:""}],state:0}},mounted(){const t={text1:document.getElementById("text1"),text2:document.getElementById("text2")},e=this.fonts.map(h=>h.text),n=1,r=.25;let i=e.length-1,s=new Date,o=0,a=r;function l(){o-=a,a=0;let h=o/n;h>1&&(a=r,h=1),u(h)}function u(h){t.text2.style.filter=`blur(${Math.min(8/h-8,100)}px)`,t.text2.style.opacity=`${Math.pow(h,.4)*100}%`,h=1-h,t.text1.style.filter=`blur(${Math.min(8/h-8,100)}px)`,t.text1.style.opacity=`${Math.pow(h,.4)*100}%`,t.text1.textContent=e[i%e.length],t.text2.textContent=e[(i+1)%e.length]}function d(){o=0,t.text2.style.filter="",t.text2.style.opacity="100%",t.text1.style.filter="",t.text1.style.opacity="0%"}function c(){requestAnimationFrame(c);let h=new Date,f=a>0,p=(h-s)/1e3;s=h,a-=p,a<=0?(f&&i++,l()):d()}c()}},_O={id:"container"},yO={id:"text1"},vO={id:"text2"},wO=A("svg",{id:"filters"},[A("defs",null,[A("filter",{id:"threshold"},[A("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:`1 0 0 0 0\r
									0 1 0 0 0\r
									0 0 1 0 0\r
									0 0 0 255 -140`})])])],-1);function bO(t,e,n,r,i,s){return K(),Q("div",_O,[A("span",yO,rt(i.fonts[i.state].text),1),A("span",vO,rt(i.fonts[(i.state+1)%i.fonts.length].text),1),wO])}const Yg=it(gO,[["render",bO]]);var al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function J3(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xE={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(t){(function(){var e=function(){this.init()};e.prototype={init:function(){var c=this||n;return c._counter=1e3,c._html5AudioPool=[],c.html5PoolSize=10,c._codecs={},c._howls=[],c._muted=!1,c._volume=1,c._canPlayEvent="canplaythrough",c._navigator=typeof window<"u"&&window.navigator?window.navigator:null,c.masterGain=null,c.noAudio=!1,c.usingWebAudio=!0,c.autoSuspend=!0,c.ctx=null,c.autoUnlock=!0,c._setup(),c},volume:function(c){var h=this||n;if(c=parseFloat(c),h.ctx||d(),typeof c<"u"&&c>=0&&c<=1){if(h._volume=c,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(c,n.ctx.currentTime);for(var f=0;f<h._howls.length;f++)if(!h._howls[f]._webAudio)for(var p=h._howls[f]._getSoundIds(),m=0;m<p.length;m++){var g=h._howls[f]._soundById(p[m]);g&&g._node&&(g._node.volume=g._volume*c)}return h}return h._volume},mute:function(c){var h=this||n;h.ctx||d(),h._muted=c,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(c?0:h._volume,n.ctx.currentTime);for(var f=0;f<h._howls.length;f++)if(!h._howls[f]._webAudio)for(var p=h._howls[f]._getSoundIds(),m=0;m<p.length;m++){var g=h._howls[f]._soundById(p[m]);g&&g._node&&(g._node.muted=c?!0:g._muted)}return h},stop:function(){for(var c=this||n,h=0;h<c._howls.length;h++)c._howls[h].stop();return c},unload:function(){for(var c=this||n,h=c._howls.length-1;h>=0;h--)c._howls[h].unload();return c.usingWebAudio&&c.ctx&&typeof c.ctx.close<"u"&&(c.ctx.close(),c.ctx=null,d()),c},codecs:function(c){return(this||n)._codecs[c.replace(/^x-/,"")]},_setup:function(){var c=this||n;if(c.state=c.ctx&&c.ctx.state||"suspended",c._autoSuspend(),!c.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(c._canPlayEvent="canplay")}catch{c.noAudio=!0}else c.noAudio=!0;try{var h=new Audio;h.muted&&(c.noAudio=!0)}catch{}return c.noAudio||c._setupCodecs(),c},_setupCodecs:function(){var c=this||n,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return c}if(!h||typeof h.canPlayType!="function")return c;var f=h.canPlayType("audio/mpeg;").replace(/^no$/,""),p=c._navigator?c._navigator.userAgent:"",m=p.match(/OPR\/(\d+)/g),g=m&&parseInt(m[0].split("/")[1],10)<33,_=p.indexOf("Safari")!==-1&&p.indexOf("Chrome")===-1,y=p.match(/Version\/(.*?) /),T=_&&y&&parseInt(y[1],10)<15;return c._codecs={mp3:!!(!g&&(f||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!T&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!T&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},c},_unlockAudio:function(){var c=this||n;if(!(c._audioUnlocked||!c.ctx)){c._audioUnlocked=!1,c.autoUnlock=!1,!c._mobileUnloaded&&c.ctx.sampleRate!==44100&&(c._mobileUnloaded=!0,c.unload()),c._scratchBuffer=c.ctx.createBuffer(1,1,22050);var h=function(f){for(;c._html5AudioPool.length<c.html5PoolSize;)try{var p=new Audio;p._unlocked=!0,c._releaseHtml5Audio(p)}catch{c.noAudio=!0;break}for(var m=0;m<c._howls.length;m++)if(!c._howls[m]._webAudio)for(var g=c._howls[m]._getSoundIds(),_=0;_<g.length;_++){var y=c._howls[m]._soundById(g[_]);y&&y._node&&!y._node._unlocked&&(y._node._unlocked=!0,y._node.load())}c._autoResume();var T=c.ctx.createBufferSource();T.buffer=c._scratchBuffer,T.connect(c.ctx.destination),typeof T.start>"u"?T.noteOn(0):T.start(0),typeof c.ctx.resume=="function"&&c.ctx.resume(),T.onended=function(){T.disconnect(0),c._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var v=0;v<c._howls.length;v++)c._howls[v]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),c}},_obtainHtml5Audio:function(){var c=this||n;if(c._html5AudioPool.length)return c._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(c){var h=this||n;return c._unlocked&&h._html5AudioPool.push(c),h},_autoSuspend:function(){var c=this;if(!(!c.autoSuspend||!c.ctx||typeof c.ctx.suspend>"u"||!n.usingWebAudio)){for(var h=0;h<c._howls.length;h++)if(c._howls[h]._webAudio){for(var f=0;f<c._howls[h]._sounds.length;f++)if(!c._howls[h]._sounds[f]._paused)return c}return c._suspendTimer&&clearTimeout(c._suspendTimer),c._suspendTimer=setTimeout(function(){if(c.autoSuspend){c._suspendTimer=null,c.state="suspending";var p=function(){c.state="suspended",c._resumeAfterSuspend&&(delete c._resumeAfterSuspend,c._autoResume())};c.ctx.suspend().then(p,p)}},3e4),c}},_autoResume:function(){var c=this;if(!(!c.ctx||typeof c.ctx.resume>"u"||!n.usingWebAudio))return c.state==="running"&&c.ctx.state!=="interrupted"&&c._suspendTimer?(clearTimeout(c._suspendTimer),c._suspendTimer=null):c.state==="suspended"||c.state==="running"&&c.ctx.state==="interrupted"?(c.ctx.resume().then(function(){c.state="running";for(var h=0;h<c._howls.length;h++)c._howls[h]._emit("resume")}),c._suspendTimer&&(clearTimeout(c._suspendTimer),c._suspendTimer=null)):c.state==="suspending"&&(c._resumeAfterSuspend=!0),c}};var n=new e,r=function(c){var h=this;if(!c.src||c.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(c)};r.prototype={init:function(c){var h=this;return n.ctx||d(),h._autoplay=c.autoplay||!1,h._format=typeof c.format!="string"?c.format:[c.format],h._html5=c.html5||!1,h._muted=c.mute||!1,h._loop=c.loop||!1,h._pool=c.pool||5,h._preload=typeof c.preload=="boolean"||c.preload==="metadata"?c.preload:!0,h._rate=c.rate||1,h._sprite=c.sprite||{},h._src=typeof c.src!="string"?c.src:[c.src],h._volume=c.volume!==void 0?c.volume:1,h._xhr={method:c.xhr&&c.xhr.method?c.xhr.method:"GET",headers:c.xhr&&c.xhr.headers?c.xhr.headers:null,withCredentials:c.xhr&&c.xhr.withCredentials?c.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=c.onend?[{fn:c.onend}]:[],h._onfade=c.onfade?[{fn:c.onfade}]:[],h._onload=c.onload?[{fn:c.onload}]:[],h._onloaderror=c.onloaderror?[{fn:c.onloaderror}]:[],h._onplayerror=c.onplayerror?[{fn:c.onplayerror}]:[],h._onpause=c.onpause?[{fn:c.onpause}]:[],h._onplay=c.onplay?[{fn:c.onplay}]:[],h._onstop=c.onstop?[{fn:c.onstop}]:[],h._onmute=c.onmute?[{fn:c.onmute}]:[],h._onvolume=c.onvolume?[{fn:c.onvolume}]:[],h._onrate=c.onrate?[{fn:c.onrate}]:[],h._onseek=c.onseek?[{fn:c.onseek}]:[],h._onunlock=c.onunlock?[{fn:c.onunlock}]:[],h._onresume=[],h._webAudio=n.usingWebAudio&&!h._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var c=this,h=null;if(n.noAudio){c._emit("loaderror",null,"No audio support.");return}typeof c._src=="string"&&(c._src=[c._src]);for(var f=0;f<c._src.length;f++){var p,m;if(c._format&&c._format[f])p=c._format[f];else{if(m=c._src[f],typeof m!="string"){c._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}p=/^data:audio\/([^;,]+);/i.exec(m),p||(p=/\.([^.]+)$/.exec(m.split("?",1)[0])),p&&(p=p[1].toLowerCase())}if(p||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),p&&n.codecs(p)){h=c._src[f];break}}if(!h){c._emit("loaderror",null,"No codec support for selected audio sources.");return}return c._src=h,c._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(c._html5=!0,c._webAudio=!1),new i(c),c._webAudio&&o(c),c},play:function(c,h){var f=this,p=null;if(typeof c=="number")p=c,c=null;else{if(typeof c=="string"&&f._state==="loaded"&&!f._sprite[c])return null;if(typeof c>"u"&&(c="__default",!f._playLock)){for(var m=0,g=0;g<f._sounds.length;g++)f._sounds[g]._paused&&!f._sounds[g]._ended&&(m++,p=f._sounds[g]._id);m===1?c=null:p=null}}var _=p?f._soundById(p):f._inactiveSound();if(!_)return null;if(p&&!c&&(c=_._sprite||"__default"),f._state!=="loaded"){_._sprite=c,_._ended=!1;var y=_._id;return f._queue.push({event:"play",action:function(){f.play(y)}}),y}if(p&&!_._paused)return h||f._loadQueue("play"),_._id;f._webAudio&&n._autoResume();var T=Math.max(0,_._seek>0?_._seek:f._sprite[c][0]/1e3),v=Math.max(0,(f._sprite[c][0]+f._sprite[c][1])/1e3-T),S=v*1e3/Math.abs(_._rate),k=f._sprite[c][0]/1e3,P=(f._sprite[c][0]+f._sprite[c][1])/1e3;_._sprite=c,_._ended=!1;var x=function(){_._paused=!1,_._seek=T,_._start=k,_._stop=P,_._loop=!!(_._loop||f._sprite[c][2])};if(T>=P){f._ended(_);return}var R=_._node;if(f._webAudio){var M=function(){f._playLock=!1,x(),f._refreshBuffer(_);var J=_._muted||f._muted?0:_._volume;R.gain.setValueAtTime(J,n.ctx.currentTime),_._playStart=n.ctx.currentTime,typeof R.bufferSource.start>"u"?_._loop?R.bufferSource.noteGrainOn(0,T,86400):R.bufferSource.noteGrainOn(0,T,v):_._loop?R.bufferSource.start(0,T,86400):R.bufferSource.start(0,T,v),S!==1/0&&(f._endTimers[_._id]=setTimeout(f._ended.bind(f,_),S)),h||setTimeout(function(){f._emit("play",_._id),f._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?M():(f._playLock=!0,f.once("resume",M),f._clearTimer(_._id))}else{var z=function(){R.currentTime=T,R.muted=_._muted||f._muted||n._muted||R.muted,R.volume=_._volume*n.volume(),R.playbackRate=_._rate;try{var J=R.play();if(J&&typeof Promise<"u"&&(J instanceof Promise||typeof J.then=="function")?(f._playLock=!0,x(),J.then(function(){f._playLock=!1,R._unlocked=!0,h?f._loadQueue():f._emit("play",_._id)}).catch(function(){f._playLock=!1,f._emit("playerror",_._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),_._ended=!0,_._paused=!0})):h||(f._playLock=!1,x(),f._emit("play",_._id)),R.playbackRate=_._rate,R.paused){f._emit("playerror",_._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}c!=="__default"||_._loop?f._endTimers[_._id]=setTimeout(f._ended.bind(f,_),S):(f._endTimers[_._id]=function(){f._ended(_),R.removeEventListener("ended",f._endTimers[_._id],!1)},R.addEventListener("ended",f._endTimers[_._id],!1))}catch(ue){f._emit("playerror",_._id,ue)}};R.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(R.src=f._src,R.load());var D=window&&window.ejecta||!R.readyState&&n._navigator.isCocoonJS;if(R.readyState>=3||D)z();else{f._playLock=!0,f._state="loading";var Z=function(){f._state="loaded",z(),R.removeEventListener(n._canPlayEvent,Z,!1)};R.addEventListener(n._canPlayEvent,Z,!1),f._clearTimer(_._id)}}return _._id},pause:function(c){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(c)}}),h;for(var f=h._getSoundIds(c),p=0;p<f.length;p++){h._clearTimer(f[p]);var m=h._soundById(f[p]);if(m&&!m._paused&&(m._seek=h.seek(f[p]),m._rateSeek=0,m._paused=!0,h._stopFade(f[p]),m._node))if(h._webAudio){if(!m._node.bufferSource)continue;typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),h._cleanBuffer(m._node)}else(!isNaN(m._node.duration)||m._node.duration===1/0)&&m._node.pause();arguments[1]||h._emit("pause",m?m._id:null)}return h},stop:function(c,h){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(c)}}),f;for(var p=f._getSoundIds(c),m=0;m<p.length;m++){f._clearTimer(p[m]);var g=f._soundById(p[m]);g&&(g._seek=g._start||0,g._rateSeek=0,g._paused=!0,g._ended=!0,f._stopFade(p[m]),g._node&&(f._webAudio?g._node.bufferSource&&(typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),f._cleanBuffer(g._node)):(!isNaN(g._node.duration)||g._node.duration===1/0)&&(g._node.currentTime=g._start||0,g._node.pause(),g._node.duration===1/0&&f._clearSound(g._node))),h||f._emit("stop",g._id))}return f},mute:function(c,h){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(c,h)}}),f;if(typeof h>"u")if(typeof c=="boolean")f._muted=c;else return f._muted;for(var p=f._getSoundIds(h),m=0;m<p.length;m++){var g=f._soundById(p[m]);g&&(g._muted=c,g._interval&&f._stopFade(g._id),f._webAudio&&g._node?g._node.gain.setValueAtTime(c?0:g._volume,n.ctx.currentTime):g._node&&(g._node.muted=n._muted?!0:c),f._emit("mute",g._id))}return f},volume:function(){var c=this,h=arguments,f,p;if(h.length===0)return c._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var m=c._getSoundIds(),g=m.indexOf(h[0]);g>=0?p=parseInt(h[0],10):f=parseFloat(h[0])}else h.length>=2&&(f=parseFloat(h[0]),p=parseInt(h[1],10));var _;if(typeof f<"u"&&f>=0&&f<=1){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"volume",action:function(){c.volume.apply(c,h)}}),c;typeof p>"u"&&(c._volume=f),p=c._getSoundIds(p);for(var y=0;y<p.length;y++)_=c._soundById(p[y]),_&&(_._volume=f,h[2]||c._stopFade(p[y]),c._webAudio&&_._node&&!_._muted?_._node.gain.setValueAtTime(f,n.ctx.currentTime):_._node&&!_._muted&&(_._node.volume=f*n.volume()),c._emit("volume",_._id))}else return _=p?c._soundById(p):c._sounds[0],_?_._volume:0;return c},fade:function(c,h,f,p){var m=this;if(m._state!=="loaded"||m._playLock)return m._queue.push({event:"fade",action:function(){m.fade(c,h,f,p)}}),m;c=Math.min(Math.max(0,parseFloat(c)),1),h=Math.min(Math.max(0,parseFloat(h)),1),f=parseFloat(f),m.volume(c,p);for(var g=m._getSoundIds(p),_=0;_<g.length;_++){var y=m._soundById(g[_]);if(y){if(p||m._stopFade(g[_]),m._webAudio&&!y._muted){var T=n.ctx.currentTime,v=T+f/1e3;y._volume=c,y._node.gain.setValueAtTime(c,T),y._node.gain.linearRampToValueAtTime(h,v)}m._startFadeInterval(y,c,h,f,g[_],typeof p>"u")}}return m},_startFadeInterval:function(c,h,f,p,m,g){var _=this,y=h,T=f-h,v=Math.abs(T/.01),S=Math.max(4,v>0?p/v:p),k=Date.now();c._fadeTo=f,c._interval=setInterval(function(){var P=(Date.now()-k)/p;k=Date.now(),y+=T*P,y=Math.round(y*100)/100,T<0?y=Math.max(f,y):y=Math.min(f,y),_._webAudio?c._volume=y:_.volume(y,c._id,!0),g&&(_._volume=y),(f<h&&y<=f||f>h&&y>=f)&&(clearInterval(c._interval),c._interval=null,c._fadeTo=null,_.volume(f,c._id),_._emit("fade",c._id))},S)},_stopFade:function(c){var h=this,f=h._soundById(c);return f&&f._interval&&(h._webAudio&&f._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(f._interval),f._interval=null,h.volume(f._fadeTo,c),f._fadeTo=null,h._emit("fade",c)),h},loop:function(){var c=this,h=arguments,f,p,m;if(h.length===0)return c._loop;if(h.length===1)if(typeof h[0]=="boolean")f=h[0],c._loop=f;else return m=c._soundById(parseInt(h[0],10)),m?m._loop:!1;else h.length===2&&(f=h[0],p=parseInt(h[1],10));for(var g=c._getSoundIds(p),_=0;_<g.length;_++)m=c._soundById(g[_]),m&&(m._loop=f,c._webAudio&&m._node&&m._node.bufferSource&&(m._node.bufferSource.loop=f,f&&(m._node.bufferSource.loopStart=m._start||0,m._node.bufferSource.loopEnd=m._stop,c.playing(g[_])&&(c.pause(g[_],!0),c.play(g[_],!0)))));return c},rate:function(){var c=this,h=arguments,f,p;if(h.length===0)p=c._sounds[0]._id;else if(h.length===1){var m=c._getSoundIds(),g=m.indexOf(h[0]);g>=0?p=parseInt(h[0],10):f=parseFloat(h[0])}else h.length===2&&(f=parseFloat(h[0]),p=parseInt(h[1],10));var _;if(typeof f=="number"){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"rate",action:function(){c.rate.apply(c,h)}}),c;typeof p>"u"&&(c._rate=f),p=c._getSoundIds(p);for(var y=0;y<p.length;y++)if(_=c._soundById(p[y]),_){c.playing(p[y])&&(_._rateSeek=c.seek(p[y]),_._playStart=c._webAudio?n.ctx.currentTime:_._playStart),_._rate=f,c._webAudio&&_._node&&_._node.bufferSource?_._node.bufferSource.playbackRate.setValueAtTime(f,n.ctx.currentTime):_._node&&(_._node.playbackRate=f);var T=c.seek(p[y]),v=(c._sprite[_._sprite][0]+c._sprite[_._sprite][1])/1e3-T,S=v*1e3/Math.abs(_._rate);(c._endTimers[p[y]]||!_._paused)&&(c._clearTimer(p[y]),c._endTimers[p[y]]=setTimeout(c._ended.bind(c,_),S)),c._emit("rate",_._id)}}else return _=c._soundById(p),_?_._rate:c._rate;return c},seek:function(){var c=this,h=arguments,f,p;if(h.length===0)c._sounds.length&&(p=c._sounds[0]._id);else if(h.length===1){var m=c._getSoundIds(),g=m.indexOf(h[0]);g>=0?p=parseInt(h[0],10):c._sounds.length&&(p=c._sounds[0]._id,f=parseFloat(h[0]))}else h.length===2&&(f=parseFloat(h[0]),p=parseInt(h[1],10));if(typeof p>"u")return 0;if(typeof f=="number"&&(c._state!=="loaded"||c._playLock))return c._queue.push({event:"seek",action:function(){c.seek.apply(c,h)}}),c;var _=c._soundById(p);if(_)if(typeof f=="number"&&f>=0){var y=c.playing(p);y&&c.pause(p,!0),_._seek=f,_._ended=!1,c._clearTimer(p),!c._webAudio&&_._node&&!isNaN(_._node.duration)&&(_._node.currentTime=f);var T=function(){y&&c.play(p,!0),c._emit("seek",p)};if(y&&!c._webAudio){var v=function(){c._playLock?setTimeout(v,0):T()};setTimeout(v,0)}else T()}else if(c._webAudio){var S=c.playing(p)?n.ctx.currentTime-_._playStart:0,k=_._rateSeek?_._rateSeek-_._seek:0;return _._seek+(k+S*Math.abs(_._rate))}else return _._node.currentTime;return c},playing:function(c){var h=this;if(typeof c=="number"){var f=h._soundById(c);return f?!f._paused:!1}for(var p=0;p<h._sounds.length;p++)if(!h._sounds[p]._paused)return!0;return!1},duration:function(c){var h=this,f=h._duration,p=h._soundById(c);return p&&(f=h._sprite[p._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var c=this,h=c._sounds,f=0;f<h.length;f++)h[f]._paused||c.stop(h[f]._id),c._webAudio||(c._clearSound(h[f]._node),h[f]._node.removeEventListener("error",h[f]._errorFn,!1),h[f]._node.removeEventListener(n._canPlayEvent,h[f]._loadFn,!1),h[f]._node.removeEventListener("ended",h[f]._endFn,!1),n._releaseHtml5Audio(h[f]._node)),delete h[f]._node,c._clearTimer(h[f]._id);var p=n._howls.indexOf(c);p>=0&&n._howls.splice(p,1);var m=!0;for(f=0;f<n._howls.length;f++)if(n._howls[f]._src===c._src||c._src.indexOf(n._howls[f]._src)>=0){m=!1;break}return s&&m&&delete s[c._src],n.noAudio=!1,c._state="unloaded",c._sounds=[],c=null,null},on:function(c,h,f,p){var m=this,g=m["_on"+c];return typeof h=="function"&&g.push(p?{id:f,fn:h,once:p}:{id:f,fn:h}),m},off:function(c,h,f){var p=this,m=p["_on"+c],g=0;if(typeof h=="number"&&(f=h,h=null),h||f)for(g=0;g<m.length;g++){var _=f===m[g].id;if(h===m[g].fn&&_||!h&&_){m.splice(g,1);break}}else if(c)p["_on"+c]=[];else{var y=Object.keys(p);for(g=0;g<y.length;g++)y[g].indexOf("_on")===0&&Array.isArray(p[y[g]])&&(p[y[g]]=[])}return p},once:function(c,h,f){var p=this;return p.on(c,h,f,1),p},_emit:function(c,h,f){for(var p=this,m=p["_on"+c],g=m.length-1;g>=0;g--)(!m[g].id||m[g].id===h||c==="load")&&(setTimeout((function(_){_.call(this,h,f)}).bind(p,m[g].fn),0),m[g].once&&p.off(c,m[g].fn,m[g].id));return p._loadQueue(c),p},_loadQueue:function(c){var h=this;if(h._queue.length>0){var f=h._queue[0];f.event===c&&(h._queue.shift(),h._loadQueue()),c||f.action()}return h},_ended:function(c){var h=this,f=c._sprite;if(!h._webAudio&&c._node&&!c._node.paused&&!c._node.ended&&c._node.currentTime<c._stop)return setTimeout(h._ended.bind(h,c),100),h;var p=!!(c._loop||h._sprite[f][2]);if(h._emit("end",c._id),!h._webAudio&&p&&h.stop(c._id,!0).play(c._id),h._webAudio&&p){h._emit("play",c._id),c._seek=c._start||0,c._rateSeek=0,c._playStart=n.ctx.currentTime;var m=(c._stop-c._start)*1e3/Math.abs(c._rate);h._endTimers[c._id]=setTimeout(h._ended.bind(h,c),m)}return h._webAudio&&!p&&(c._paused=!0,c._ended=!0,c._seek=c._start||0,c._rateSeek=0,h._clearTimer(c._id),h._cleanBuffer(c._node),n._autoSuspend()),!h._webAudio&&!p&&h.stop(c._id,!0),h},_clearTimer:function(c){var h=this;if(h._endTimers[c]){if(typeof h._endTimers[c]!="function")clearTimeout(h._endTimers[c]);else{var f=h._soundById(c);f&&f._node&&f._node.removeEventListener("ended",h._endTimers[c],!1)}delete h._endTimers[c]}return h},_soundById:function(c){for(var h=this,f=0;f<h._sounds.length;f++)if(c===h._sounds[f]._id)return h._sounds[f];return null},_inactiveSound:function(){var c=this;c._drain();for(var h=0;h<c._sounds.length;h++)if(c._sounds[h]._ended)return c._sounds[h].reset();return new i(c)},_drain:function(){var c=this,h=c._pool,f=0,p=0;if(!(c._sounds.length<h)){for(p=0;p<c._sounds.length;p++)c._sounds[p]._ended&&f++;for(p=c._sounds.length-1;p>=0;p--){if(f<=h)return;c._sounds[p]._ended&&(c._webAudio&&c._sounds[p]._node&&c._sounds[p]._node.disconnect(0),c._sounds.splice(p,1),f--)}}},_getSoundIds:function(c){var h=this;if(typeof c>"u"){for(var f=[],p=0;p<h._sounds.length;p++)f.push(h._sounds[p]._id);return f}else return[c]},_refreshBuffer:function(c){var h=this;return c._node.bufferSource=n.ctx.createBufferSource(),c._node.bufferSource.buffer=s[h._src],c._panner?c._node.bufferSource.connect(c._panner):c._node.bufferSource.connect(c._node),c._node.bufferSource.loop=c._loop,c._loop&&(c._node.bufferSource.loopStart=c._start||0,c._node.bufferSource.loopEnd=c._stop||0),c._node.bufferSource.playbackRate.setValueAtTime(c._rate,n.ctx.currentTime),h},_cleanBuffer:function(c){var h=this,f=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!c.bufferSource)return h;if(n._scratchBuffer&&c.bufferSource&&(c.bufferSource.onended=null,c.bufferSource.disconnect(0),f))try{c.bufferSource.buffer=n._scratchBuffer}catch{}return c.bufferSource=null,h},_clearSound:function(c){var h=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);h||(c.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(c){this._parent=c,this.init()};i.prototype={init:function(){var c=this,h=c._parent;return c._muted=h._muted,c._loop=h._loop,c._volume=h._volume,c._rate=h._rate,c._seek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++n._counter,h._sounds.push(c),c.create(),c},create:function(){var c=this,h=c._parent,f=n._muted||c._muted||c._parent._muted?0:c._volume;return h._webAudio?(c._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),c._node.gain.setValueAtTime(f,n.ctx.currentTime),c._node.paused=!0,c._node.connect(n.masterGain)):n.noAudio||(c._node=n._obtainHtml5Audio(),c._errorFn=c._errorListener.bind(c),c._node.addEventListener("error",c._errorFn,!1),c._loadFn=c._loadListener.bind(c),c._node.addEventListener(n._canPlayEvent,c._loadFn,!1),c._endFn=c._endListener.bind(c),c._node.addEventListener("ended",c._endFn,!1),c._node.src=h._src,c._node.preload=h._preload===!0?"auto":h._preload,c._node.volume=f*n.volume(),c._node.load()),c},reset:function(){var c=this,h=c._parent;return c._muted=h._muted,c._loop=h._loop,c._volume=h._volume,c._rate=h._rate,c._seek=0,c._rateSeek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++n._counter,c},_errorListener:function(){var c=this;c._parent._emit("loaderror",c._id,c._node.error?c._node.error.code:0),c._node.removeEventListener("error",c._errorFn,!1)},_loadListener:function(){var c=this,h=c._parent;h._duration=Math.ceil(c._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),c._node.removeEventListener(n._canPlayEvent,c._loadFn,!1)},_endListener:function(){var c=this,h=c._parent;h._duration===1/0&&(h._duration=Math.ceil(c._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(c)),c._node.removeEventListener("ended",c._endFn,!1)}};var s={},o=function(c){var h=c._src;if(s[h]){c._duration=s[h].duration,u(c);return}if(/^data:[^;]+;base64,/.test(h)){for(var f=atob(h.split(",")[1]),p=new Uint8Array(f.length),m=0;m<f.length;++m)p[m]=f.charCodeAt(m);l(p.buffer,c)}else{var g=new XMLHttpRequest;g.open(c._xhr.method,h,!0),g.withCredentials=c._xhr.withCredentials,g.responseType="arraybuffer",c._xhr.headers&&Object.keys(c._xhr.headers).forEach(function(_){g.setRequestHeader(_,c._xhr.headers[_])}),g.onload=function(){var _=(g.status+"")[0];if(_!=="0"&&_!=="2"&&_!=="3"){c._emit("loaderror",null,"Failed loading audio file with status: "+g.status+".");return}l(g.response,c)},g.onerror=function(){c._webAudio&&(c._html5=!0,c._webAudio=!1,c._sounds=[],delete s[h],c.load())},a(g)}},a=function(c){try{c.send()}catch{c.onerror()}},l=function(c,h){var f=function(){h._emit("loaderror",null,"Decoding audio data failed.")},p=function(m){m&&h._sounds.length>0?(s[h._src]=m,u(h,m)):f()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(c).then(p).catch(f):n.ctx.decodeAudioData(c,p,f)},u=function(c,h){h&&!c._duration&&(c._duration=h.duration),Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue())},d=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var c=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),h=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=h?parseInt(h[1],10):null;if(c&&f&&f<9){var p=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!p&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};t.Howler=n,t.Howl=r,typeof al<"u"?(al.HowlerGlobal=e,al.Howler=n,al.Howl=r,al.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=n,window.Howl=r,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var i=r._howls.length-1;i>=0;i--)r._howls[i].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(r=typeof r!="number"?s._pos[1]:r,i=typeof i!="number"?s._pos[2]:i,typeof n=="number")s._pos=[n,r,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(n,r,i,s,o,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;var u=l._orientation;if(r=typeof r!="number"?u[1]:r,i=typeof i!="number"?u[2]:i,s=typeof s!="number"?u[3]:s,o=typeof o!="number"?u[4]:o,a=typeof a!="number"?u[5]:a,typeof n=="number")l._orientation=[n,r,i,s,o,a],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(a,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(n,r,i,s,o,a);else return u;return l},Howl.prototype.init=function(n){return function(r){var i=this;return i._orientation=r.orientation||[1,0,0],i._stereo=r.stereo||null,i._pos=r.pos||null,i._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},i._onstereo=r.onstereo?[{fn:r.onstereo}]:[],i._onpos=r.onpos?[{fn:r.onpos}]:[],i._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(n,r)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")i._stereo=n,i._pos=[n,0,0];else return i._stereo;for(var o=i._getSoundIds(r),a=0;a<o.length;a++){var l=i._soundById(o[a]);if(l)if(typeof n=="number")l._stereo=n,l._pos=[n,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,s),s==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(n,0,0):l._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),i._emit("stereo",l._id);else return l._stereo}return i},Howl.prototype.pos=function(n,r,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,i,s)}}),o;if(r=typeof r!="number"?0:r,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof n=="number")o._pos=[n,r,i];else return o._pos;for(var a=o._getSoundIds(s),l=0;l<a.length;l++){var u=o._soundById(a[l]);if(u)if(typeof n=="number")u._pos=[n,r,i],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setPosition(n,r,i)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(n,r,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,i,s)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,i=typeof i!="number"?o._orientation[2]:i,typeof s>"u")if(typeof n=="number")o._orientation=[n,r,i];else return o._orientation;for(var a=o._getSoundIds(s),l=0;l<a.length;l++){var u=o._soundById(a[l]);if(u)if(typeof n=="number")u._orientation=[n,r,i],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setOrientation(n,r,i)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,i,s,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")i=r[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),n._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(i=r[0],s=parseInt(r[1],10));for(var a=n._getSoundIds(s),l=0;l<a.length;l++)if(o=n._soundById(a[l]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:u.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:u.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:u.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:u.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:u.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:u.panningModel};var d=o._panner;d||(o._pos||(o._pos=n._pos||[0,0,-.5]),e(o,"spatial"),d=o._panner),d.coneInnerAngle=u.coneInnerAngle,d.coneOuterAngle=u.coneOuterAngle,d.coneOuterGain=u.coneOuterGain,d.distanceModel=u.distanceModel,d.maxDistance=u.maxDistance,d.refDistance=u.refDistance,d.rolloffFactor=u.rolloffFactor,d.panningModel=u.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,i=r._parent;r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,n.call(this),r._stereo?i.stereo(r._stereo):r._pos&&i.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,i=r._parent;return r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,r._stereo?i.stereo(r._stereo):r._pos?i.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,i._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var e=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(xE);const TO="/assets/tv-static-e4cc9dd8.gif",EO="/assets/tv-dark-2-22507219.png",AO="/assets/Doordarshan-8323637c.png";Pt.registerPlugin(Se);const IO={data(){return{isAudioInitialized:!1,sound:null}},mounted(){this.timer();const t=document.querySelector(".television");document.addEventListener("mousemove",()=>{}),Pt.fromTo(t,{opacity:0},{opacity:1,duration:4,delay:.5,stagger:.4})},methods:{initializeAudioContext(){console.log("play"),this.isAudioInitialized||(this.sound=new xE.Howl({src:["src/assets/music/Doordarshan.mp3"],autoplay:!0,loop:!1,volume:.5}),this.isAudioInitialized=!0,console.log("playing..."))},closeAnimation(){const t=document.querySelector(".tv-mask");Pt.to(t,{scale:3,duration:2,top:"95%",left:"90%",onComplete:()=>{this.$emit("close"),this.sound&&this.sound.pause()}})},timer(){setInterval(()=>{this.startCountDown()},500)},startCountDown(){const t=new Date("Nov 10, 2023 00:00:00"),e=new Date().getTime(),n=t-e,r=1e3,i=r*60,s=i*60,o=s*24,a=n/o,l=n%o/s,u=n%s/i,d=n%i/r,c=Math.floor(a)<10?`0${Math.floor(a)}`:Math.floor(a),h=Math.floor(l)<10?`0${Math.floor(l)}`:Math.floor(l),f=Math.floor(u)<10?`0${Math.floor(u)}`:Math.floor(u),p=Math.floor(d)<10?`0${Math.floor(d)}`:Math.floor(d),m=document.querySelector(".countdown");m!=null&&(m.innerHTML=`
      <div class="show-time">
          <div class="time">
            ${c}
          </div>
          <div class="label">
            DAYS
          </div>
      </div>
      <div class="show-time">
          <div class="time">
            ${h}
          </div>
          <div class="label">
            HRS
          </div>
      </div>
      <div class="show-time">
          <div class="time">
            ${f}
          </div>
          <div class="label">
            MINS
          </div>
      </div>
      <div class="show-time">
          <div class="time">
            ${p}
          </div>
          <div class="label">
            SECS
          </div>
      </div>`)}}},SO={class:"tv-content-mask tv-mask",ref:"tv"},CO={class:"tv-content"},RO={class:"television"},PO=A("span",{class:"countdown"},null,-1),xO=A("img",{src:AO,class:"door-img sm:top-0",alt:""},null,-1),kO={class:"absolute bottom-0 z-50"};function OO(t,e,n,r,i,s){return K(),Q("div",SO,[A("div",CO,[A("div",RO,[A("img",{onClick:e[0]||(e[0]=o=>s.closeAnimation()),src:TO,class:"tv-static sm:opacity-30",alt:"",srcset:""}),A("img",{onClick:e[1]||(e[1]=o=>s.closeAnimation()),src:EO,alt:"",class:"television sm:hidden"}),PO,xO,A("h4",kO,[A("a",{onClick:e[2]||(e[2]=(...o)=>s.initializeAudioContext&&s.initializeAudioContext(...o)),class:"z-50 relative"},"Click for music")])])])],512)}const DO=it(IO,[["render",OO]]),qO="/assets/stamp-3150fe1b.png",MO={},NO={class:"relative w-full sec-loc sm:!my-4 sm:px-2 sm:h-96"},VO=Bc('<div class="location"><div class="about-sec sm:p-4"><div class="about-wrapper"><div class="flex flex-col"><div class="sub-head flex flex-col"><span>Lake Side</span><span>Bolgatty Palace</span></div><div class="mt-[10px]"><span class="text-lg sm:text-sm"><p>Mulavukad, Ernakulam, <br>Kerala, India</p></span></div><div class="flex mt-[100px] items-center sm:mt-2"><span class="text-3xl mr-[20px] sm:text-xl">PIN</span><span class="pin !border-l-[1px] !border-l-[#1d1d1b] !border-solid">6</span><span class="pin">8</span><span class="pin">2</span><span class="pin">5</span><span class="pin">0</span><span class="pin">4</span></div><div class="direct mt-[20px]"><button class="btn sm:text-[2vw] sm:w-1/2"> GET DIRECTIONS </button></div></div></div><div class="border-r-[1px] border-black"></div><div class="about-wrapper"><div class="head w-3/4 flex justify-start flex-col space-y-1"><div class="flex justify-end"><img class="h-[11vw] sm:h-20" src="'+qO+'" alt="" srcset=""></div><p class="!mt-10 text-xl sm:text-sm sm:!mt-8"> Step into a world of nostalgia and charm at Verite! Join us for an unforgettable evening of retro delights and timeless memories </p></div></div></div></div>',1),LO=[VO];function FO(t,e,n,r,i,s){return K(),Q("section",NO,LO)}const $O=it(MO,[["render",FO]]),UO={1:"verite",2:"flight",3:"thrill",4:"palace",5:"tulsi",6:"bharat",7:"kites",8:"samosa",9:"lotus",10:"verite",28:"hatim",29:"retro",30:"sooper",31:"impact"},BO={1:"/music/En Iniya Pon Nilave.mp3",2:"/music/Neele Neele Ambar.mp3",3:"/music/shyama mekham.mp3",4:"/music/poove sempoove un vasam varum.mp3",5:"/music/Kabhi Kabhi Mere Dil Mein.mp3",6:"/music/Oru Pushpam Maathramen.mp3",7:"/music/eeran mekham.mp3",8:"/music/Pehla Nasha.mp3",9:"/music/Elangaathu Veesudhey.mp3",10:"/music/Arikil Nee Undayirunnenkil.mp3",30:"/music/Yeh Raaten Yeh Mausam.mp3",31:"/music/Yeh Raaten Yeh Mausam.mp3"},jO=["/img/posters/Azaad.jpg","/img/posters/Zameer.jpg","/img/posters/Azaad.jpg","/img/posters/Zameer.jpg"],HO=["/img/posters/Azaad.jpg","/img/posters/Zameer.jpg","/img/posters/Azaad.jpg","/img/posters/Zameer.jpg"],zO=[{author:"Manu Prasad",content:"The last Verite event was truly an unforgettable experience for us all. Witnessing our colleagues on the screen and then meeting them in person was an incredibly heartwarming moment. Last year's Verite commenced with everyone gathering at the office, and it was the first time I had ever seen the office so brimming with people; there was not an inch of space left, and it felt truly amazing. The energy in the room was soaring, and the sight of smiling faces all around was nothing short of uplifting. We later moved to Recca Club, where everyone was divided into teams. The day was filled with an array of exciting games, and it was delightful to witness senior members wholeheartedly engaging in friendly competition, even mentoring the younger generation. The games were so exciting that time seemed to slip away unnoticed. As evening turned into night, the DJ started playing, and the dance floor came alive with exuberant moves. It was evident that everyone was relishing the moment, their joy radiating from their faces. The dance continued tirelessly, and eventually, the food counter opened, with everyone rushing to savor the delectable dishes with utmost enjoyment. The event was a remarkable success and left us thinking how wonderful it would be if such shared experiences were a daily occurrence in our office. It was an extraordinary experience that has us eagerly anticipating the next Verite event.",image:"/img/blogs/Manu Prasad.jpg",showReadMore:!1},{author:"Fathima Kauzar",content:"With seeing 10-15 people in the office all the days, it was really heart whelming to see a whole group of people together. I remember the exact date, on September 1, Verite’22 happened in Recca club. All the joyous laughs, screams and energetic hurray for the games, still hit so close to the heart. With this annual gathering, I believe, there’s a whole bunch of people who’s waiting out there for this. I get many messages from my colleagues asking when would this day be, that is how much we all are waiting for this day. I wasn’t connected to any of the people in the office, initially as it was the starting of my job, but Vertite’22 made it very easy and it felt like home. The games was the way to this.",image:"/img/blogs/Fathima Kauzar.jpg",showReadMore:!1},{author:"Reshma Sankar",content:"The anniversary that I for-saw with excitement pressed me with anxiety as I was not in touch with everyone in the office initially. Coming to the anniversary, I got to understand how team activities change the dimension of get-togetherness. Verite’22 was an opportunity for me to understand how huge and celebrated this day is. With the team activities that we get in, it had me very easy to gel with people and know the fabulous company culture. I felt good when I saw the luxury of foods, and the gifts that was offered by Verteil. It was a new experience for me to receive those from a company that I work in. I am very excited for Verite’23.",image:"/img/blogs/Reshma Sankar.jpg",showReadMore:!1},{author:"Shahul",content:"It was really an exciting day for me. To start with, I am a person who likes to talk and connect with people. VERITE’22 made it very easy. It was great when all the people that I met in a screen for meetings came to a place where there was no barrier. I am excited, and enthused for the games that are coming. Those games have a huge role in binding up the people in here. The Onam Sadhya, the band, the songs played, the joyous steps, dances are all so new even now that it feels like it all happened yesterday. Really excited and waiting for Verite’23.",image:"/img/blogs/Shahul.jpg",showReadMore:!1}],ms={words:UO,music:BO,upImages:jO,downImages:HO,blogs:zO},WO="/assets/vinyl-7806b705.png",GO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAOnRFWHRDb21tZW50AHhyOmQ6REFGeXJEc0dBNjQ6NSxqOjUzMDcwNjQxODMyOTQ1ODk1MSx0OjIzMTAyOTIw6yHeAQAABOJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgogICAgICAgIDxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICAgICAgICA8ZGM6dGl0bGU+CiAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5VbnRpdGxlZCBkZXNpZ24gLSAxPC9yZGY6bGk+CiAgICAgICAgPC9yZGY6QWx0PgogICAgICAgIDwvZGM6dGl0bGU+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICAgICAgICA8QXR0cmliOkFkcz4KICAgICAgICA8cmRmOlNlcT4KICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMy0xMC0yOTwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgICAgPEF0dHJpYjpFeHRJZD5mOGM2MmViMS1lNjI2LTQ1NTUtYWMxNy1lZGE5MDVmZDg0ODU8L0F0dHJpYjpFeHRJZD4KICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgICAgIDwvcmRmOmxpPgogICAgICAgIDwvcmRmOlNlcT4KICAgICAgICA8L0F0dHJpYjpBZHM+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICAgICAgICA8cGRmOkF1dGhvcj5hbmFuZGFqaXRoOTExPC9wZGY6QXV0aG9yPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICAgIDwvcmRmOlJERj4KICAgICAgICA8L3g6eG1wbWV0YT7llopqAAAGWUlEQVR4nL2YQWgc1xnHf2+tgw578EG0a0dQH9RDsOmbnacSNXHq1E3BOHZxoWCZOoyUXc1EsUy8zsExTqkCLsYQZwmSY81IW2mowAot1BDTxoQ6dmtqBfRmZ8DQQHVwQdQy1cGHPYgi6/UgWVnLSqXdlfq/DMx83ze/9+a9933zCeqUl3NeUEq+oiyrw0Ab0CIgA2BgFpgTMK3jeFLr5JZfCr+s5z2iJqge5zllyVPKsjoRtK48MFQQzGHMzFJU0YqhBUG6ymZGx/GEPxJ+oMvJw00FVFnZElwpXuAxXQiaMFTYxu/9YOyGSIlJfyS8v+aA8s4us2g6vHzXaxiOIEhjWGAbY25v4awuJ3MNAwaDxaO2LYcEbMeYaZ0kF/3hcFyXk/mNDK5qkM1ej3NcSXkGIdoMPIqi5E23r/BJXYBKySa32xlot603MVR0OT7vj4aXtE4WagFbK67X7byjbKsfaJ6K4qFgNDz5TXHXBFS2TAcfF6+yyCHgXjAaHvOHw3uNgK2W1+Pscbudq8AeUlx33yoc01FSWRdQKdkUXC7+gUUOIbjlnigcXstxM6RsmQ4uF/+EYS8prrsnCj9bPZOp1U5utzOwAtdX+MlWwQHoKKm4fYUfIbjFIofcbmdgtc1TMxgMFo8qW04A99y+wg+2Eq5aypbpYLB4F9ijo6SzeuOszKDKyhbblkMYKsFouOZ62CrpKKkEo+ExDBXblkMqK1ueAQyuFC8I2K7L8fnN3hAbkT8c3tPl+LyA7cGV4oWnAL0ep5XHdGHMtD8aXtpIwGCw+Jo/+OGvVFZu3zTI0fASxkzzmC6VlZkVQCXl2wiadJJc3Og5127Ln7fbVn8wWPx7MFjMKSWbGgXUOlnQSXIJQZOXc975GjBrdWKo+MPheM1RBRlly5FgoHjXzTsvNQrpD4djGCoqa3UCpLyc04GglW1M1Jq+Vqnde8O5o+/evKqy8rl6g+hyMo/gGoJWL+d0pJSS+wD8YOzPDcB9LUNncLk4HSytz+Z6QvilsRsASsl9KWVZHQAiJSY3BXBJzcq2+oPLxX8EHxeP1uoshLgDoCyrIwWmDUPlm0qmBtWqLDmh/3bzr17OURt18kfC+xgqYNpSGJFBsG5d1qD2ujlnSk/eHFZZ+e0NeQjmQLSkELSsVMJbrUXy/uXiV17e+fG6tsbMAplnioWtlnjqsr6agDmEaF3XsnEtkGLM7S38UpeT2XWthcgAs01gZg1i1xbD3fFLYSEohVM1+GTATKdATAtIe3ln16ZjGXNfJ8kx9eL+l2uBW2ZpBvFVSsfx5FIs88Imos3rKO53+04/7/YWJmp1Nsa8BKDjeCqldXIbwMt1HdoUtBTj7onCd92+0+/Xmzq9XNcBAK2T2ym/FE4CMwaO1JualjUV/CZ8WXXsf12Xk7qPLWXLtIEjwIxfCidTADqKJwSkvR7nF3XEnNVR3KNe3P99fyS8Uy/YE3l5xxGQ1lE8Dsvlll8KLwELSsp3N1rXTSXJJ7ocv+eeKDzv9p0eaRQMlv4olZSngHm/FH4EVQemnrw5zCJ5HcXvun2nL27GC2tVMPjhOWVb56eieMjrO90LVf8kbm/hLPBI2Va/1+Ps/n/DeT3ObmVb7xmYC0rh2Sf3VwB1OZnTUdILNLvdzoSyZXrNSFsgZcu02+1MAM1RlJzU5eTRk2fbqg0//eONeyorMzt3ZA4ePnjghzqOf/vgwcPFLYVTsikYLH4OtC9/2qeW1zPFQjAaniTFdWBvMFD8YitnUtkyHQwUvwD2kuJaMBqeXG2zbfWNBw8eLuoo/vTwoQPfw/Dq4YMHfipS/EVHyb83E87rcXb3nzvzGdBOimvuW4XXdfTswf4M4DLkf3Q5/t2OTOZbO3dkDqqs9UZ71lr418PZLxv95ErJpvfPnTl7+OCBcWDnVBQP9f/6YvdacLCxBmansuUVYDswrePkA394LKy5gWnLtJfvcpQlTwFtBuaiKDnp9v3vXF1bC3iR40CzgYqAa34p/EwI7vgj4T/X8vPyznfMIq94eedVA0cEpIH5qSgeC0rh2erd2hBgFWjGyzlvK9s6DlQXufMGZsVSdx8DmeWOf3Vun9FRPO6Xwo82VLDWA1gtL+d0KCX3Kctqx5g2EC0rnX/DDJg5hJjWcTyldXJ7uSipWf8FhHLB6fZ6OOYAAAAASUVORK5CYII=",KO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAO3RFWHRDb21tZW50AHhyOmQ6REFGeXJEc0dBNjQ6OSxqOjMxNTc0MzA4OTg1OTQ5OTUyMDUsdDoyMzEwMjkyMCXuAGcAAATiaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KICAgICAgICA8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgICAgICAgPGRjOnRpdGxlPgogICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+VW50aXRsZWQgZGVzaWduIC0gMTwvcmRmOmxpPgogICAgICAgIDwvcmRmOkFsdD4KICAgICAgICA8L2RjOnRpdGxlPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgICAgICAgPEF0dHJpYjpBZHM+CiAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjMtMTAtMjk8L0F0dHJpYjpDcmVhdGVkPgogICAgICAgIDxBdHRyaWI6RXh0SWQ+M2IxNzIyNjUtYzQ2My00ZWM0LTg5ZmUtM2M3ZDgxYTliYjQ0PC9BdHRyaWI6RXh0SWQ+CiAgICAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgICAgICA8L3JkZjpsaT4KICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgPC9BdHRyaWI6QWRzPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgICAgICAgPHBkZjpBdXRob3I+YW5hbmRhaml0aDkxMTwvcGRmOkF1dGhvcj4KICAgICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICAgICAgICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgICA8L3JkZjpSREY+CiAgICAgICAgPC94OnhtcG1ldGE+1bAEiwAABbtJREFUeJzFmF9oHMcdgL9Z60EPJhXElLNrgqFH45rC/pmDHGlISmyoSiLqtHlwUztrc9JuGjnQaxxKIaWINlAaknUbKfbt9XpeULGhBrskIU2buAmIooeb/VPyoAeHNMEgm4qggB5EELd9uD3nfJItnaqzvqfZ/f1m7rsddmfmJ9gE0tQHpWUcLJj6IWkZxTQlLwS7OnNSWBRwVYXxTCNK3lVh/J6KkuVef0v0kuyW7PudMftU2uSIgJ299E1hSWhc8KvBZKUWJFsqKE39a/4Z77c0OdoVWgTeV2E81wiTjxCstAMFU79fWkYeOAQMdfW77NeDU5Vq8NH/LehPeSXL1E93PLFlNKb9ahBUasHMev0B3JJdtEz9xwXLONohu6zC5EXnZPmVTQlKUx/0z3jVjqe20gjjs34teElFyfWNiK0x5pBbsp+XlnEKGARA47LzbPmYCpOlDQtKS9/pT3pvAw9ltz6s1INjfjWINyPWjTtm550T9nmgkN2accbLT6goWejO3bFKTuoD/qT3j5tygovOyfLIm2+98+lWyAGoMPlMxXF9Ty731T27cwXgvpHHhh9UUfyX+fkbX3TmrnqCavZKnSbHWwPFpyv14AWlkpXuvK3Cn3zVk5bxUwA0Lsvio090xrVbkz27LYfgYr/lAJyTPyurMD4LQJPD/uSrz68pKE09Z1n66ezyQ2e8fKLfcm0q9eA5oAEgLeM30tT3rRL0z3i/Fq1PwEqlFpy43VvVD5RKVvx68CNgGRj0p7yX27EdAO6YvU/qxp8QaI0w9ide+l31bsndlAyTzwqmPrhnd+5h4ICAv6ooua4BSF0fRzAArPi1YGKjg7qj9kPqX1fqTsn+fi+x21GpBa/QWp1wxuxxyKZYmsaRLOdiLx/hNCUPHAeMXmK3Q0XJIhoXANImR6SpD2pOyf4Ogr3ZPwg2Oli/8KvBnwEE7JSWcUgrSP2BLLaswvj97VNrka3viwAFUz+oScMoApCm8Wb2a30hZQZAmnpRgzQPIITYknV2K1BxPNdqibxGKnIAZ2vBpnYo/aARJp8AINil8eVWfXH7lFZxc5HoXIsHtkFkXTSgPbU9nTH6zL3thgbpAsAzo/a+bdPpomDqe7PmggZiDqDZTL+1jU63IC2j5ZKmVzUVxw0AgTCkpW/7NEtTH0yhCKCiZFZTKvkAAMGANI3vbqsdIC3jkfYJshEl72mVWjALXANwR+3uc+9dxy3ZxwFIWVJh/K4GoKL4HABNHnfH7PzGh0uXgP+w5jf0TrHbyI3Z+0h5EoAdTKsoWRbQ2u77U97HwCAa07L46LGNS24davZKlSajAH4t+GalFsxlTzC53vjy4HLUKdkH77acU7IfaMuhMV2pBXOtZoZfCyZSWABwS0+fk6a+a82R+oC09J1uyZ4GIGXJ+Un5F+3YTUEVJYthkoy1rsRef8q7JKXe9+VPSn3Af907D+QBVJyUVZRca8dvqSy88dY7c9LUh/bszhWB+0YeHz6govjS/PyNZt/kprzzNDkMgMb0yA+e+mVnjtbdya8HLyC4CECTJ/3XvH/2Y7qlqQ/5r3lv0MzeWsGMM14+0Z23qjYzP3+jqaL47ZHHhr8BHKBVN3kK+LeKko+3Qs4Ztb898eLP/067eNSS+54KV+/oVwlmkl+oOL60O5e7J5vuewqW8bQ7au8XMKei5L+bEXPH7K/7r3t/KBjGadp1Qo1zzsnyD9eSa7mvg3/GO2zpelVwSw36b5VaMK3C+E0VJZ/fqb809a9Iyxh2S/ZRUoaz8zfAooqS55zx8vSd+m+0BDzklOxfFSzjGdqFx4wUYgFzKo6vNjpqOW7J3g/kSTE6pKBVCP2jXwsmNnIG76mILk09547a49I0jgN718vv4poK4wsqSX5fqQbX1k/fhGAnbskuSqk/Ig2jAOl+ELuAXBZegPQ6iKsqjmeVSj7INiU98z+3D0YBVeaFfQAAAABJRU5ErkJggg==";const XO={data(){return{audio:new Audio,isPlaying:!1,resumePosition:0,data:ms,date:new Date().getDate().toString()}},methods:{toggleAudio(){console.log(ms.music,this.date),this.isPlaying?(this.audio.pause(),this.resumePosition=this.audio.currentTime):(this.audio.src=ms.music[this.date],this.audio.paused?(this.audio.currentTime=this.resumePosition,this.audio.play()):this.audio.play()),this.isPlaying=!this.isPlaying}},mounted(){this.audio.addEventListener("ended",()=>{this.resumePosition=0,this.isPlaying=!1})}},YO={class:"h-full vinyl-wrap overflow-hidden relative"},QO={key:0,src:GO,alt:""},JO={key:1,src:KO,alt:""};function ZO(t,e,n,r,i,s){return K(),Q("div",YO,[A("img",{src:WO,id:"groove",class:wo([{"spin-groove":i.isPlaying},"relative left-[-20%] top-[-15%] scale-100 sm:scale-110"]),alt:"",srcset:""},null,2),A("div",{onClick:e[0]||(e[0]=(...o)=>s.toggleAudio&&s.toggleAudio(...o)),class:"controls absolute top-0 right-0 h-5 p-4"},[i.isPlaying?(K(),Q("img",JO)):(K(),Q("img",QO))])])}const eD=it(XO,[["render",ZO]]);const tD={class:"wrap-music flex w-full sm:flex-col-reverse sm:items-center"},nD={class:"vinyl-player w-1/3 h-80 sm:w-[90%]"},rD=Bc('<div class="music-lines w-2/3 sm:w-[80%] sm:h-96" data-v-026a1ddc><div class="line" data-v-026a1ddc></div><div class="line" data-v-026a1ddc></div><div class="line" data-v-026a1ddc></div><div class="line" data-v-026a1ddc></div><div class="line" data-v-026a1ddc></div><div class="line" data-v-026a1ddc></div></div>',1),iD={__name:"Player",setup(t){return(e,n)=>(K(),Q("div",tD,[A("div",nD,[we(eD)]),rD]))}},kE=it(iD,[["__scopeId","data-v-026a1ddc"]]);const sD={data(){return{data:ms,upImages:ms.upImages,downImages:ms.downImages}}},oD={class:"marquees"},aD={class:"marquee"},lD=["src"],cD={class:"marquee"},uD=["src"];function hD(t,e,n,r,i,s){return K(),Q("div",oD,[A("div",aD,[(K(!0),Q(Ae,null,Mt(i.upImages,(o,a)=>(K(),Q("div",{key:a,class:"marquee-item up"},[A("img",{src:o,alt:"Up Marquee"},null,8,lD)]))),128))]),A("div",cD,[(K(!0),Q(Ae,null,Mt(i.downImages,(o,a)=>(K(),Q("div",{key:a,class:"marquee-item down"},[A("img",{src:o,alt:"Down Marquee"},null,8,uD)]))),128))])])}const OE=it(sD,[["render",hD],["__scopeId","data-v-c24a1555"]]);const dD={data(){return{data:ms}},methods:{truncateText(t,e){const n=t.split(" ");return n.length>e?n.slice(0,e).join(" "):t},toggleReadMore(t){this.data.blogs[t].showReadMore=!this.data.blogs[t].showReadMore}}},fD={class:"section-blogs"},pD={id:"messages"},mD={class:"infos"},gD=["src"],_D={class:"blog-content"},yD={class:"author"},vD={class:"paragraph"},wD={key:0},bD=["onClick"],TD={key:1},ED=["onClick"];function AD(t,e,n,r,i,s){return K(),Q("div",fD,[A("ul",pD,[(K(!0),Q(Ae,null,Mt(i.data.blogs,(o,a)=>(K(),Q("li",{key:a},[A("div",mD,[A("img",{src:o.image,alt:""},null,8,gD)]),A("div",_D,[A("div",yD,rt(o.author)+" ",1),A("div",vD,[o.showReadMore?Ih("",!0):(K(),Q("p",wD,rt(s.truncateText(o.content,25)),1)),A("span",{onClick:l=>s.toggleReadMore(a),class:wo({hidden:o.showReadMore})}," Read more ",10,bD),o.showReadMore?(K(),Q("p",TD,rt(o.content),1)):Ih("",!0),A("span",{onClick:l=>s.toggleReadMore(a),class:wo({hidden:!o.showReadMore})}," Read less ",10,ED)])])]))),128))])])}const ID=it(dD,[["render",AD]]);const SD={data(){return{show:!0}},components:{MainClone:tE,Section1:RE,Section2:PE,TextMorph:Yg,CountDown:DO,PostCard:$O,Player:kE,Poster:OE,Blogs:ID}},Qg=t=>(Li("data-v-c972bd23"),t=t(),Fi(),t),CD=Qg(()=>A("div",{class:"paper-bg"},null,-1)),RD={class:"black-bg"},PD=Qg(()=>A("div",{class:"paper-bg"},null,-1)),xD={class:"section-3 sm:p-2 sm:!m-0"},kD=Qg(()=>A("div",{class:"section-4"},null,-1));function OD(t,e,n,r,i,s){const o=Je("CountDown"),a=Je("MainClone"),l=Je("PostCard"),u=Je("Section1"),d=Je("Player"),c=Je("Blogs");return K(),Q(Ae,null,[CD,i.show?(K(),qo(o,{key:0,show:i.show,onClose:e[0]||(e[0]=h=>i.show=!1)},null,8,["show"])):Ih("",!0),we(a),we(l),A("div",RD,[PD,we(u),A("section",xD,[we(d)]),kD,we(c)])],64)}const DD=it(SD,[["render",OD],["__scopeId","data-v-c972bd23"]]);const qD={__name:"App",setup(t){return(e,n)=>{const r=Je("router-view");return K(),qo(r)}}};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yo=typeof window<"u";function MD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Xe=Object.assign;function Yf(t,e){const n={};for(const r in e){const i=e[r];n[r]=Ur(i)?i.map(t):t(i)}return n}const jl=()=>{},Ur=Array.isArray,ND=/\/$/,VD=t=>t.replace(ND,"");function Qf(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=UD(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function LD(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hv(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function FD(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Oa(e.matched[r],n.matched[i])&&DE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Oa(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function DE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$D(t[n],e[n]))return!1;return!0}function $D(t,e){return Ur(t)?zv(t,e):Ur(e)?zv(e,t):t===e}function zv(t,e){return Ur(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function UD(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var gc;(function(t){t.pop="pop",t.push="push"})(gc||(gc={}));var Hl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hl||(Hl={}));function BD(t){if(!t)if(Yo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VD(t)}const jD=/^[^#]+#/;function HD(t,e){return t.replace(jD,"#")+e}function zD(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dd=()=>({left:window.pageXOffset,top:window.pageYOffset});function WD(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zD(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wv(t,e){return(history.state?history.state.position-e:-1)+t}const ym=new Map;function GD(t,e){ym.set(t,e)}function KD(t){const e=ym.get(t);return ym.delete(t),e}let XD=()=>location.protocol+"//"+location.host;function qE(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Hv(l,"")}return Hv(n,t)+r+i}function YD(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const f=qE(t,location),p=n.value,m=e.value;let g=0;if(h){if(n.value=f,e.value=h,o&&o===p){o=null;return}g=m?h.position-m.position:0}else r(f);i.forEach(_=>{_(n.value,p,{delta:g,type:gc.pop,direction:g?g>0?Hl.forward:Hl.back:Hl.unknown})})};function l(){o=n.value}function u(h){i.push(h);const f=()=>{const p=i.indexOf(h);p>-1&&i.splice(p,1)};return s.push(f),f}function d(){const{history:h}=window;h.state&&h.replaceState(Xe({},h.state,{scroll:Dd()}),"")}function c(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:c}}function Gv(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Dd():null}}function QD(t){const{history:e,location:n}=window,r={value:qE(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,d){const c=t.indexOf("#"),h=c>-1?(n.host&&document.querySelector("base")?t:t.slice(c))+l:XD()+t+l;try{e[d?"replaceState":"pushState"](u,"",h),i.value=u}catch(f){console.error(f),n[d?"replace":"assign"](h)}}function o(l,u){const d=Xe({},e.state,Gv(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});s(l,d,!0),r.value=l}function a(l,u){const d=Xe({},i.value,e.state,{forward:l,scroll:Dd()});s(d.current,d,!0);const c=Xe({},Gv(r.value,l,null),{position:d.position+1},u);s(l,c,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function JD(t){t=BD(t);const e=QD(t),n=YD(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Xe({location:"",base:t,go:r,createHref:HD.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ZD(t){return typeof t=="string"||t&&typeof t=="object"}function ME(t){return typeof t=="string"||typeof t=="symbol"}const Wi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},NE=Symbol("");var Kv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kv||(Kv={}));function Da(t,e){return Xe(new Error,{type:t,[NE]:!0},e)}function yi(t,e){return t instanceof Error&&NE in t&&(e==null||!!(t.type&e))}const Xv="[^/]+?",eq={sensitive:!1,strict:!1,start:!0,end:!0},tq=/[.+*?^${}()[\]/\\]/g;function nq(t,e){const n=Xe({},eq,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let c=0;c<u.length;c++){const h=u[c];let f=40+(n.sensitive?.25:0);if(h.type===0)c||(i+="/"),i+=h.value.replace(tq,"\\$&"),f+=40;else if(h.type===1){const{value:p,repeatable:m,optional:g,regexp:_}=h;s.push({name:p,repeatable:m,optional:g});const y=_||Xv;if(y!==Xv){f+=10;try{new RegExp(`(${y})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+v.message)}}let T=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;c||(T=g&&u.length<2?`(?:/${T})`:"/"+T),g&&(T+="?"),i+=T,f+=20,g&&(f+=-8),m&&(f+=-20),y===".*"&&(f+=-50)}d.push(f)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const d=u.match(o),c={};if(!d)return null;for(let h=1;h<d.length;h++){const f=d[h]||"",p=s[h-1];c[p.name]=f&&p.repeatable?f.split("/"):f}return c}function l(u){let d="",c=!1;for(const h of t){(!c||!d.endsWith("/"))&&(d+="/"),c=!1;for(const f of h)if(f.type===0)d+=f.value;else if(f.type===1){const{value:p,repeatable:m,optional:g}=f,_=p in u?u[p]:"";if(Ur(_)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=Ur(_)?_.join("/"):_;if(!y)if(g)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):c=!0);else throw new Error(`Missing required param "${p}"`);d+=y}}return d||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function rq(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iq(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=rq(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Yv(r))return 1;if(Yv(i))return-1}return i.length-r.length}function Yv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sq={type:0,value:""},oq=/[a-zA-Z0-9_]/;function aq(t){if(!t)return[[]];if(t==="/")return[[sq]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,u="",d="";function c(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&c(),o()):l===":"?(c(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:oq.test(l)?h():(c(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:c(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),c(),o(),i}function lq(t,e,n){const r=nq(aq(t.path),n),i=Xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function cq(t,e){const n=[],r=new Map;e=Zv({strict:!1,end:!0,sensitive:!1},e);function i(d){return r.get(d)}function s(d,c,h){const f=!h,p=uq(d);p.aliasOf=h&&h.record;const m=Zv(e,d),g=[p];if("alias"in d){const T=typeof d.alias=="string"?[d.alias]:d.alias;for(const v of T)g.push(Xe({},p,{components:h?h.record.components:p.components,path:v,aliasOf:h?h.record:p}))}let _,y;for(const T of g){const{path:v}=T;if(c&&v[0]!=="/"){const S=c.record.path,k=S[S.length-1]==="/"?"":"/";T.path=c.record.path+(v&&k+v)}if(_=lq(T,c,m),h?h.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),f&&d.name&&!Jv(_)&&o(d.name)),p.children){const S=p.children;for(let k=0;k<S.length;k++)s(S[k],_,h&&h.children[k])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return y?()=>{o(y)}:jl}function o(d){if(ME(d)){const c=r.get(d);c&&(r.delete(d),n.splice(n.indexOf(c),1),c.children.forEach(o),c.alias.forEach(o))}else{const c=n.indexOf(d);c>-1&&(n.splice(c,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){let c=0;for(;c<n.length&&iq(d,n[c])>=0&&(d.record.path!==n[c].record.path||!VE(d,n[c]));)c++;n.splice(c,0,d),d.record.name&&!Jv(d)&&r.set(d.record.name,d)}function u(d,c){let h,f={},p,m;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw Da(1,{location:d});m=h.record.name,f=Xe(Qv(c.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),d.params&&Qv(d.params,h.keys.map(y=>y.name))),p=h.stringify(f)}else if("path"in d)p=d.path,h=n.find(y=>y.re.test(p)),h&&(f=h.parse(p),m=h.record.name);else{if(h=c.name?r.get(c.name):n.find(y=>y.re.test(c.path)),!h)throw Da(1,{location:d,currentLocation:c});m=h.record.name,f=Xe({},c.params,d.params),p=h.stringify(f)}const g=[];let _=h;for(;_;)g.unshift(_.record),_=_.parent;return{name:m,path:p,params:f,matched:g,meta:dq(g)}}return t.forEach(d=>s(d)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Qv(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uq(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hq(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hq(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Jv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dq(t){return t.reduce((e,n)=>Xe(e,n.meta),{})}function Zv(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function VE(t,e){return e.children.some(n=>n===t||VE(t,n))}const LE=/#/g,fq=/&/g,pq=/\//g,mq=/=/g,gq=/\?/g,FE=/\+/g,_q=/%5B/g,yq=/%5D/g,$E=/%5E/g,vq=/%60/g,UE=/%7B/g,wq=/%7C/g,BE=/%7D/g,bq=/%20/g;function Jg(t){return encodeURI(""+t).replace(wq,"|").replace(_q,"[").replace(yq,"]")}function Tq(t){return Jg(t).replace(UE,"{").replace(BE,"}").replace($E,"^")}function vm(t){return Jg(t).replace(FE,"%2B").replace(bq,"+").replace(LE,"%23").replace(fq,"%26").replace(vq,"`").replace(UE,"{").replace(BE,"}").replace($E,"^")}function Eq(t){return vm(t).replace(mq,"%3D")}function Aq(t){return Jg(t).replace(LE,"%23").replace(gq,"%3F")}function Iq(t){return t==null?"":Aq(t).replace(pq,"%2F")}function Uh(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Sq(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(FE," "),o=s.indexOf("="),a=Uh(o<0?s:s.slice(0,o)),l=o<0?null:Uh(s.slice(o+1));if(a in e){let u=e[a];Ur(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function e0(t){let e="";for(let n in t){const r=t[n];if(n=Eq(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ur(r)?r.map(s=>s&&vm(s)):[r&&vm(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Cq(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ur(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const Rq=Symbol(""),t0=Symbol(""),qd=Symbol(""),jE=Symbol(""),wm=Symbol("");function ll(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qi(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=c=>{c===!1?a(Da(4,{from:n,to:e})):c instanceof Error?a(c):ZD(c)?a(Da(2,{from:e,to:c})):(s&&r.enterCallbacks[i]===s&&typeof c=="function"&&s.push(c),o())},u=t.call(r&&r.instances[i],e,n,l);let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(c=>a(c))})}function Jf(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Pq(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Qi(u,n,r,s,o))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const d=MD(u)?u.default:u;s.components[o]=d;const h=(d.__vccOpts||d)[e];return h&&Qi(h,n,r,s,o)()}))}}return i}function Pq(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function n0(t){const e=ii(qd),n=ii(jE),r=yr(()=>e.resolve(xi(t.to))),i=yr(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],c=n.matched;if(!d||!c.length)return-1;const h=c.findIndex(Oa.bind(null,d));if(h>-1)return h;const f=r0(l[u-2]);return u>1&&r0(d)===f&&c[c.length-1].path!==f?c.findIndex(Oa.bind(null,l[u-2])):h}),s=yr(()=>i.value>-1&&Dq(n.params,r.value.params)),o=yr(()=>i.value>-1&&i.value===n.matched.length-1&&DE(n.params,r.value.params));function a(l={}){return Oq(l)?e[xi(t.replace)?"replace":"push"](xi(t.to)).catch(jl):Promise.resolve()}return{route:r,href:yr(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const xq=Mb({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:n0,setup(t,{slots:e}){const n=vd(n0(t)),{options:r}=ii(qd),i=yr(()=>({[i0(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[i0(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ag("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),kq=xq;function Oq(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Dq(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ur(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function r0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const i0=(t,e,n)=>t??e??n,qq=Mb({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ii(wm),i=yr(()=>t.route||r.value),s=ii(t0,0),o=yr(()=>{let u=xi(s);const{matched:d}=i.value;let c;for(;(c=d[u])&&!c.components;)u++;return u}),a=yr(()=>i.value.matched[o.value]);Qu(t0,yr(()=>o.value+1)),Qu(Rq,a),Qu(wm,i);const l=yn();return Sl(()=>[l.value,a.value,t.name],([u,d,c],[h,f,p])=>{d&&(d.instances[c]=u,f&&f!==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),u&&d&&(!f||!Oa(d,f)||!h)&&(d.enterCallbacks[c]||[]).forEach(m=>m(u))},{flush:"post"}),()=>{const u=i.value,d=t.name,c=a.value,h=c&&c.components[d];if(!h)return s0(n.default,{Component:h,route:u});const f=c.props[d],p=f?f===!0?u.params:typeof f=="function"?f(u):f:null,g=Ag(h,Xe({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(c.instances[d]=null)},ref:l}));return s0(n.default,{Component:g,route:u})||g}}});function s0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mq=qq;function Nq(t){const e=cq(t.routes,t),n=t.parseQuery||Sq,r=t.stringifyQuery||e0,i=t.history,s=ll(),o=ll(),a=ll(),l=NC(Wi);let u=Wi;Yo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Yf.bind(null,q=>""+q),c=Yf.bind(null,Iq),h=Yf.bind(null,Uh);function f(q,H){let U,ne;return ME(q)?(U=e.getRecordMatcher(q),ne=H):ne=q,e.addRoute(ne,U)}function p(q){const H=e.getRecordMatcher(q);H&&e.removeRoute(H)}function m(){return e.getRoutes().map(q=>q.record)}function g(q){return!!e.getRecordMatcher(q)}function _(q,H){if(H=Xe({},H||l.value),typeof q=="string"){const I=Qf(n,q,H.path),O=e.resolve({path:I.path},H),N=i.createHref(I.fullPath);return Xe(I,O,{params:h(O.params),hash:Uh(I.hash),redirectedFrom:void 0,href:N})}let U;if("path"in q)U=Xe({},q,{path:Qf(n,q.path,H.path).path});else{const I=Xe({},q.params);for(const O in I)I[O]==null&&delete I[O];U=Xe({},q,{params:c(I)}),H.params=c(H.params)}const ne=e.resolve(U,H),_e=q.hash||"";ne.params=d(h(ne.params));const w=LD(r,Xe({},q,{hash:Tq(_e),path:ne.path})),b=i.createHref(w);return Xe({fullPath:w,hash:_e,query:r===e0?Cq(q.query):q.query||{}},ne,{redirectedFrom:void 0,href:b})}function y(q){return typeof q=="string"?Qf(n,q,l.value.path):Xe({},q)}function T(q,H){if(u!==q)return Da(8,{from:H,to:q})}function v(q){return P(q)}function S(q){return v(Xe(y(q),{replace:!0}))}function k(q){const H=q.matched[q.matched.length-1];if(H&&H.redirect){const{redirect:U}=H;let ne=typeof U=="function"?U(q):U;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=y(ne):{path:ne},ne.params={}),Xe({query:q.query,hash:q.hash,params:"path"in ne?{}:q.params},ne)}}function P(q,H){const U=u=_(q),ne=l.value,_e=q.state,w=q.force,b=q.replace===!0,I=k(U);if(I)return P(Xe(y(I),{state:typeof I=="object"?Xe({},_e,I.state):_e,force:w,replace:b}),H||U);const O=U;O.redirectedFrom=H;let N;return!w&&FD(r,ne,U)&&(N=Da(16,{to:O,from:ne}),Oe(ne,ne,!0,!1)),(N?Promise.resolve(N):M(O,ne)).catch(E=>yi(E)?yi(E,2)?E:C(E):Y(E,O,ne)).then(E=>{if(E){if(yi(E,2))return P(Xe({replace:b},y(E.to),{state:typeof E.to=="object"?Xe({},_e,E.to.state):_e,force:w}),H||O)}else E=D(O,ne,!0,b,_e);return z(O,ne,E),E})}function x(q,H){const U=T(q,H);return U?Promise.reject(U):Promise.resolve()}function R(q){const H=Ke.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(q):q()}function M(q,H){let U;const[ne,_e,w]=Vq(q,H);U=Jf(ne.reverse(),"beforeRouteLeave",q,H);for(const I of ne)I.leaveGuards.forEach(O=>{U.push(Qi(O,q,H))});const b=x.bind(null,q,H);return U.push(b),je(U).then(()=>{U=[];for(const I of s.list())U.push(Qi(I,q,H));return U.push(b),je(U)}).then(()=>{U=Jf(_e,"beforeRouteUpdate",q,H);for(const I of _e)I.updateGuards.forEach(O=>{U.push(Qi(O,q,H))});return U.push(b),je(U)}).then(()=>{U=[];for(const I of w)if(I.beforeEnter)if(Ur(I.beforeEnter))for(const O of I.beforeEnter)U.push(Qi(O,q,H));else U.push(Qi(I.beforeEnter,q,H));return U.push(b),je(U)}).then(()=>(q.matched.forEach(I=>I.enterCallbacks={}),U=Jf(w,"beforeRouteEnter",q,H),U.push(b),je(U))).then(()=>{U=[];for(const I of o.list())U.push(Qi(I,q,H));return U.push(b),je(U)}).catch(I=>yi(I,8)?I:Promise.reject(I))}function z(q,H,U){a.list().forEach(ne=>R(()=>ne(q,H,U)))}function D(q,H,U,ne,_e){const w=T(q,H);if(w)return w;const b=H===Wi,I=Yo?history.state:{};U&&(ne||b?i.replace(q.fullPath,Xe({scroll:b&&I&&I.scroll},_e)):i.push(q.fullPath,_e)),l.value=q,Oe(q,H,U,b),C()}let Z;function J(){Z||(Z=i.listen((q,H,U)=>{if(!yt.listening)return;const ne=_(q),_e=k(ne);if(_e){P(Xe(_e,{replace:!0}),ne).catch(jl);return}u=ne;const w=l.value;Yo&&GD(Wv(w.fullPath,U.delta),Dd()),M(ne,w).catch(b=>yi(b,12)?b:yi(b,2)?(P(b.to,ne).then(I=>{yi(I,20)&&!U.delta&&U.type===gc.pop&&i.go(-1,!1)}).catch(jl),Promise.reject()):(U.delta&&i.go(-U.delta,!1),Y(b,ne,w))).then(b=>{b=b||D(ne,w,!1),b&&(U.delta&&!yi(b,8)?i.go(-U.delta,!1):U.type===gc.pop&&yi(b,20)&&i.go(-1,!1)),z(ne,w,b)}).catch(jl)}))}let ue=ll(),oe=ll(),W;function Y(q,H,U){C(q);const ne=oe.list();return ne.length?ne.forEach(_e=>_e(q,H,U)):console.error(q),Promise.reject(q)}function Ce(){return W&&l.value!==Wi?Promise.resolve():new Promise((q,H)=>{ue.add([q,H])})}function C(q){return W||(W=!q,J(),ue.list().forEach(([H,U])=>q?U(q):H()),ue.reset()),q}function Oe(q,H,U,ne){const{scrollBehavior:_e}=t;if(!Yo||!_e)return Promise.resolve();const w=!U&&KD(Wv(q.fullPath,0))||(ne||!U)&&history.state&&history.state.scroll||null;return _g().then(()=>_e(q,H,w)).then(b=>b&&WD(b)).catch(b=>Y(b,q,H))}const Ge=q=>i.go(q);let Bt;const Ke=new Set,yt={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:g,getRoutes:m,resolve:_,options:t,push:v,replace:S,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:Ce,install(q){const H=this;q.component("RouterLink",kq),q.component("RouterView",Mq),q.config.globalProperties.$router=H,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>xi(l)}),Yo&&!Bt&&l.value===Wi&&(Bt=!0,v(i.location).catch(_e=>{}));const U={};for(const _e in Wi)Object.defineProperty(U,_e,{get:()=>l.value[_e],enumerable:!0});q.provide(qd,H),q.provide(jE,yb(U)),q.provide(wm,l);const ne=q.unmount;Ke.add(q),q.unmount=function(){Ke.delete(q),Ke.size<1&&(u=Wi,Z&&Z(),Z=null,l.value=Wi,Bt=!1,W=!1),ne()}}};function je(q){return q.reduce((H,U)=>H.then(()=>R(U)),Promise.resolve())}return yt}function Vq(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Oa(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Oa(u,l))||i.push(l))}return[n,r,i]}function HE(){return ii(qd)}/**
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
 */const zE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lq=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},WE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[d],n[c],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lq(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new Fq;const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),c!==64){const p=u<<6&192|c;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fq extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $q=function(t){const e=zE(t);return WE.encodeByteArray(e,!0)},Bh=function(t){return $q(t).replace(/\./g,"")},GE=function(t){try{return WE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uq(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bq=()=>Uq().__FIREBASE_DEFAULTS__,jq=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hq=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&GE(t[1]);return e&&JSON.parse(e)},Md=()=>{try{return Bq()||jq()||Hq()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},KE=t=>{var e,n;return(n=(e=Md())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XE=t=>{const e=KE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},YE=()=>{var t;return(t=Md())===null||t===void 0?void 0:t.config},QE=t=>{var e;return(e=Md())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zq{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function JE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bh(JSON.stringify(n)),Bh(JSON.stringify(o)),a].join(".")}/**
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
 */function Cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wq(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cn())}function Gq(){var t;const e=(t=Md())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kq(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xq(){const t=Cn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function e1(){try{return typeof indexedDB=="object"}catch{return!1}}function t1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Yq(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Qq="FirebaseError";class Rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qq,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,No.prototype.create)}}class No{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Jq(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rr(i,a,r)}}function Jq(t,e){return t.replace(Zq,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Zq=/\{\$([^}]+)}/g;function e2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _c(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(o0(s)&&o0(o)){if(!_c(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function o0(t){return t!==null&&typeof t=="object"}/**
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
 */function Hc(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function t2(t,e){const n=new n2(t,e);return n.subscribe.bind(n)}class n2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");r2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zf),i.error===void 0&&(i.error=Zf),i.complete===void 0&&(i.complete=Zf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zf(){}/**
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
 */const i2=1e3,s2=2,o2=4*60*60*1e3,a2=.5;function a0(t,e=i2,n=s2){const r=e*Math.pow(n,t),i=Math.round(a2*r*(Math.random()-.5)*2);return Math.min(o2,r+i)}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ws="[DEFAULT]";/**
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
 */class l2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zq;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(u2(e))try{this.getOrInitializeService({instanceIdentifier:Ws})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ws){return this.instances.has(e)}getOptions(e=Ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:c2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ws){return this.component?this.component.multipleInstances?e:Ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function c2(t){return t===Ws?void 0:t}function u2(t){return t.instantiationMode==="EAGER"}/**
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
 */class h2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const d2={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},f2=Ne.INFO,p2={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},m2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=p2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nd{constructor(e){this.name=e,this._logLevel=f2,this._logHandler=m2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const g2=(t,e)=>e.some(n=>t instanceof n);let l0,c0;function _2(){return l0||(l0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function y2(){return c0||(c0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n1=new WeakMap,bm=new WeakMap,r1=new WeakMap,ep=new WeakMap,Zg=new WeakMap;function v2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gs(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n1.set(n,t)}).catch(()=>{}),Zg.set(e,t),e}function w2(t){if(bm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bm.set(t,e)}let Tm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function b2(t){Tm=t(Tm)}function T2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tp(this),e,...n);return r1.set(r,e.sort?e.sort():[e]),gs(r)}:y2().includes(t)?function(...e){return t.apply(tp(this),e),gs(n1.get(this))}:function(...e){return gs(t.apply(tp(this),e))}}function E2(t){return typeof t=="function"?T2(t):(t instanceof IDBTransaction&&w2(t),g2(t,_2())?new Proxy(t,Tm):t)}function gs(t){if(t instanceof IDBRequest)return v2(t);if(ep.has(t))return ep.get(t);const e=E2(t);return e!==t&&(ep.set(t,e),Zg.set(e,t)),e}const tp=t=>Zg.get(t);function A2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gs(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gs(o.result),l.oldVersion,l.newVersion,gs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const I2=["get","getKey","getAll","getAllKeys","count"],S2=["put","add","delete","clear"],np=new Map;function u0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(np.get(e))return np.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return np.set(e,s),s}b2(t=>({...t,get:(e,n,r)=>u0(e,n)||t.get(e,n,r),has:(e,n)=>!!u0(e,n)||t.has(e,n)}));/**
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
 */class C2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function R2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Em="@firebase/app",h0="0.9.22";/**
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
 */const Io=new Nd("@firebase/app"),P2="@firebase/app-compat",x2="@firebase/analytics-compat",k2="@firebase/analytics",O2="@firebase/app-check-compat",D2="@firebase/app-check",q2="@firebase/auth",M2="@firebase/auth-compat",N2="@firebase/database",V2="@firebase/database-compat",L2="@firebase/functions",F2="@firebase/functions-compat",$2="@firebase/installations",U2="@firebase/installations-compat",B2="@firebase/messaging",j2="@firebase/messaging-compat",H2="@firebase/performance",z2="@firebase/performance-compat",W2="@firebase/remote-config",G2="@firebase/remote-config-compat",K2="@firebase/storage",X2="@firebase/storage-compat",Y2="@firebase/firestore",Q2="@firebase/firestore-compat",J2="firebase",Z2="10.5.2";/**
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
 */const Am="[DEFAULT]",eM={[Em]:"fire-core",[P2]:"fire-core-compat",[k2]:"fire-analytics",[x2]:"fire-analytics-compat",[D2]:"fire-app-check",[O2]:"fire-app-check-compat",[q2]:"fire-auth",[M2]:"fire-auth-compat",[N2]:"fire-rtdb",[V2]:"fire-rtdb-compat",[L2]:"fire-fn",[F2]:"fire-fn-compat",[$2]:"fire-iid",[U2]:"fire-iid-compat",[B2]:"fire-fcm",[j2]:"fire-fcm-compat",[H2]:"fire-perf",[z2]:"fire-perf-compat",[W2]:"fire-rc",[G2]:"fire-rc-compat",[K2]:"fire-gcs",[X2]:"fire-gcs-compat",[Y2]:"fire-fst",[Q2]:"fire-fst-compat","fire-js":"fire-js",[J2]:"fire-js-all"};/**
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
 */const jh=new Map,Im=new Map;function tM(t,e){try{t.container.addComponent(e)}catch(n){Io.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(Im.has(e))return Io.debug(`There were multiple attempts to register component ${e}.`),!1;Im.set(e,t);for(const n of jh.values())tM(n,t);return!0}function xs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_s=new No("app","Firebase",nM);/**
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
 */class rM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _s.create("app-deleted",{appName:this._name})}}/**
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
 */const Vo=Z2;function Vd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Am,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _s.create("bad-app-name",{appName:String(i)});if(n||(n=YE()),!n)throw _s.create("no-options");const s=jh.get(i);if(s){if(_c(n,s.options)&&_c(r,s.config))return s;throw _s.create("duplicate-app",{appName:i})}const o=new h2(i);for(const l of Im.values())o.addComponent(l);const a=new rM(n,r,o);return jh.set(i,a),a}function Ld(t=Am){const e=jh.get(t);if(!e&&t===Am&&YE())return Vd();if(!e)throw _s.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let i=(r=eM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Io.warn(a.join(" "));return}Br(new Cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iM="firebase-heartbeat-database",sM=1,yc="firebase-heartbeat-store";let rp=null;function i1(){return rp||(rp=A2(iM,sM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yc)}}}).catch(t=>{throw _s.create("idb-open",{originalErrorMessage:t.message})})),rp}async function oM(t){try{return await(await i1()).transaction(yc).objectStore(yc).get(s1(t))}catch(e){if(e instanceof Rr)Io.warn(e.message);else{const n=_s.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Io.warn(n.message)}}}async function d0(t,e){try{const r=(await i1()).transaction(yc,"readwrite");await r.objectStore(yc).put(e,s1(t)),await r.done}catch(n){if(n instanceof Rr)Io.warn(n.message);else{const r=_s.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Io.warn(r.message)}}}function s1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aM=1024,lM=30*24*60*60*1e3;class cM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=f0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=f0(),{heartbeatsToSend:n,unsentEntries:r}=uM(this._heartbeatsCache.heartbeats),i=Bh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function f0(){return new Date().toISOString().substring(0,10)}function uM(t,e=aM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),p0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),p0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return e1()?t1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return d0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return d0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function p0(t){return Bh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dM(t){Br(new Cr("platform-logger",e=>new C2(e),"PRIVATE")),Br(new Cr("heartbeat",e=>new cM(e),"PRIVATE")),Gn(Em,h0,t),Gn(Em,h0,"esm2017"),Gn("fire-js","")}dM("");var fM="firebase",pM="10.5.2";/**
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
 */Gn(fM,pM,"app");const mM=(t,e)=>e.some(n=>t instanceof n);let m0,g0;function gM(){return m0||(m0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _M(){return g0||(g0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o1=new WeakMap,Sm=new WeakMap,a1=new WeakMap,ip=new WeakMap,e_=new WeakMap;function yM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ys(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&o1.set(n,t)}).catch(()=>{}),e_.set(e,t),e}function vM(t){if(Sm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sm.set(t,e)}let Cm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||a1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ys(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wM(t){Cm=t(Cm)}function bM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sp(this),e,...n);return a1.set(r,e.sort?e.sort():[e]),ys(r)}:_M().includes(t)?function(...e){return t.apply(sp(this),e),ys(o1.get(this))}:function(...e){return ys(t.apply(sp(this),e))}}function TM(t){return typeof t=="function"?bM(t):(t instanceof IDBTransaction&&vM(t),mM(t,gM())?new Proxy(t,Cm):t)}function ys(t){if(t instanceof IDBRequest)return yM(t);if(ip.has(t))return ip.get(t);const e=TM(t);return e!==t&&(ip.set(t,e),e_.set(e,t)),e}const sp=t=>e_.get(t);function EM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ys(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ys(o.result),l.oldVersion,l.newVersion,ys(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const AM=["get","getKey","getAll","getAllKeys","count"],IM=["put","add","delete","clear"],op=new Map;function _0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(op.get(e))return op.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return op.set(e,s),s}wM(t=>({...t,get:(e,n,r)=>_0(e,n)||t.get(e,n,r),has:(e,n)=>!!_0(e,n)||t.has(e,n)}));const l1="@firebase/installations",t_="0.6.4";/**
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
 */const c1=1e4,u1=`w:${t_}`,h1="FIS_v2",SM="https://firebaseinstallations.googleapis.com/v1",CM=60*60*1e3,RM="installations",PM="Installations";/**
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
 */const xM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},So=new No(RM,PM,xM);function d1(t){return t instanceof Rr&&t.code.includes("request-failed")}/**
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
 */function f1({projectId:t}){return`${SM}/projects/${t}/installations`}function p1(t){return{token:t.token,requestStatus:2,expiresIn:OM(t.expiresIn),creationTime:Date.now()}}async function m1(t,e){const r=(await e.json()).error;return So.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function g1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kM(t,{refreshToken:e}){const n=g1(t);return n.append("Authorization",DM(e)),n}async function _1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OM(t){return Number(t.replace("s","000"))}function DM(t){return`${h1} ${t}`}/**
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
 */async function qM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=f1(t),i=g1(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:h1,appId:t.appId,sdkVersion:u1},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await _1(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:p1(u.authToken)}}else throw await m1("Create Installation",l)}/**
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
 */function y1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function MM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const NM=/^[cdef][\w-]{21}$/,Rm="";function VM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=LM(t);return NM.test(n)?n:Rm}catch{return Rm}}function LM(t){return MM(t).substr(0,22)}/**
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
 */function Fd(t){return`${t.appName}!${t.appId}`}/**
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
 */const v1=new Map;function w1(t,e){const n=Fd(t);b1(n,e),FM(n,e)}function b1(t,e){const n=v1.get(t);if(n)for(const r of n)r(e)}function FM(t,e){const n=$M();n&&n.postMessage({key:t,fid:e}),UM()}let eo=null;function $M(){return!eo&&"BroadcastChannel"in self&&(eo=new BroadcastChannel("[Firebase] FID Change"),eo.onmessage=t=>{b1(t.data.key,t.data.fid)}),eo}function UM(){v1.size===0&&eo&&(eo.close(),eo=null)}/**
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
 */const BM="firebase-installations-database",jM=1,Co="firebase-installations-store";let ap=null;function n_(){return ap||(ap=EM(BM,jM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Co)}}})),ap}async function Hh(t,e){const n=Fd(t),i=(await n_()).transaction(Co,"readwrite"),s=i.objectStore(Co),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&w1(t,e.fid),e}async function T1(t){const e=Fd(t),r=(await n_()).transaction(Co,"readwrite");await r.objectStore(Co).delete(e),await r.done}async function $d(t,e){const n=Fd(t),i=(await n_()).transaction(Co,"readwrite"),s=i.objectStore(Co),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&w1(t,a.fid),a}/**
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
 */async function r_(t){let e;const n=await $d(t.appConfig,r=>{const i=HM(r),s=zM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HM(t){const e=t||{fid:VM(),registrationStatus:0};return E1(e)}function zM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(So.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=WM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:GM(t)}:{installationEntry:e}}async function WM(t,e){try{const n=await qM(t,e);return Hh(t.appConfig,n)}catch(n){throw d1(n)&&n.customData.serverCode===409?await T1(t.appConfig):await Hh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function GM(t){let e=await y0(t.appConfig);for(;e.registrationStatus===1;)await y1(100),e=await y0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await r_(t);return r||n}return e}function y0(t){return $d(t,e=>{if(!e)throw So.create("installation-not-found");return E1(e)})}function E1(t){return KM(t)?{fid:t.fid,registrationStatus:0}:t}function KM(t){return t.registrationStatus===1&&t.registrationTime+c1<Date.now()}/**
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
 */async function XM({appConfig:t,heartbeatServiceProvider:e},n){const r=YM(t,n),i=kM(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:u1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await _1(()=>fetch(r,a));if(l.ok){const u=await l.json();return p1(u)}else throw await m1("Generate Auth Token",l)}function YM(t,{fid:e}){return`${f1(t)}/${e}/authTokens:generate`}/**
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
 */async function i_(t,e=!1){let n;const r=await $d(t.appConfig,s=>{if(!A1(s))throw So.create("not-registered");const o=s.authToken;if(!e&&ZM(o))return s;if(o.requestStatus===1)return n=QM(t,e),s;{if(!navigator.onLine)throw So.create("app-offline");const a=tN(s);return n=JM(t,a),a}});return n?await n:r.authToken}async function QM(t,e){let n=await v0(t.appConfig);for(;n.authToken.requestStatus===1;)await y1(100),n=await v0(t.appConfig);const r=n.authToken;return r.requestStatus===0?i_(t,e):r}function v0(t){return $d(t,e=>{if(!A1(e))throw So.create("not-registered");const n=e.authToken;return nN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JM(t,e){try{const n=await XM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Hh(t.appConfig,r),n}catch(n){if(d1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await T1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Hh(t.appConfig,r)}throw n}}function A1(t){return t!==void 0&&t.registrationStatus===2}function ZM(t){return t.requestStatus===2&&!eN(t)}function eN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+CM}function tN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nN(t){return t.requestStatus===1&&t.requestTime+c1<Date.now()}/**
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
 */async function rN(t){const e=t,{installationEntry:n,registrationPromise:r}=await r_(e);return r?r.catch(console.error):i_(e).catch(console.error),n.fid}/**
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
 */async function iN(t,e=!1){const n=t;return await sN(n),(await i_(n,e)).token}async function sN(t){const{registrationPromise:e}=await r_(t);e&&await e}/**
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
 */function oN(t){if(!t||!t.options)throw lp("App Configuration");if(!t.name)throw lp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw lp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function lp(t){return So.create("missing-app-config-values",{valueName:t})}/**
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
 */const I1="installations",aN="installations-internal",lN=t=>{const e=t.getProvider("app").getImmediate(),n=oN(e),r=xs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cN=t=>{const e=t.getProvider("app").getImmediate(),n=xs(e,I1).getImmediate();return{getId:()=>rN(n),getToken:i=>iN(n,i)}};function uN(){Br(new Cr(I1,lN,"PUBLIC")),Br(new Cr(aN,cN,"PRIVATE"))}uN();Gn(l1,t_);Gn(l1,t_,"esm2017");/**
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
 */const zh="analytics",hN="firebase_id",dN="origin",fN=60*1e3,pN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",s_="https://www.googletagmanager.com/gtag/js";/**
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
 */const Kn=new Nd("@firebase/analytics");/**
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
 */const mN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cr=new No("analytics","Analytics",mN);/**
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
 */function gN(t){if(!t.startsWith(s_)){const e=cr.create("invalid-gtag-resource",{gtagURL:t});return Kn.warn(e.message),""}return t}function S1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _N(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function yN(t,e){const n=_N("firebase-js-sdk-policy",{createScriptURL:gN}),r=document.createElement("script"),i=`${s_}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function vN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await S1(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Kn.error(a)}t("config",i,s)}async function bN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await S1(n);for(const l of o){const u=a.find(c=>c.measurementId===l),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Kn.error(s)}}function TN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await bN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await wN(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Kn.error(a)}}return i}function EN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=TN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function AN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(s_)&&n.src.includes(t))return n;return null}/**
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
 */const IN=30,SN=1e3;class CN{constructor(e={},n=SN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const C1=new CN;function RN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function PN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:RN(r)},s=pN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw cr.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function xN(t,e=C1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw cr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw cr.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new DN;return setTimeout(async()=>{a.abort()},n!==void 0?n:fN),R1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function R1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=C1){var s;const{appId:o,measurementId:a}=t;try{await kN(r,e)}catch(l){if(a)return Kn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await PN(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!ON(u)){if(i.deleteThrottleMetadata(o),a)return Kn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?a0(n,i.intervalMillis,IN):a0(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,c),Kn.debug(`Calling attemptFetch again in ${d} millis`),R1(t,c,r,i)}}function kN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(cr.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ON(t){if(!(t instanceof Rr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class DN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function MN(){if(e1())try{await t1()}catch(t){return Kn.warn(cr.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Kn.warn(cr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function NN(t,e,n,r,i,s,o){var a;const l=xN(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Kn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Kn.error(f)),e.push(l);const u=MN().then(f=>{if(f)return r.getId()}),[d,c]=await Promise.all([l,u]);AN(s)||yN(s,d.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[dN]="firebase",h.update=!0,c!=null&&(h[hN]=c),i("config",d.measurementId,h),d.measurementId}/**
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
 */class VN{constructor(e){this.app=e}_delete(){return delete zl[this.app.options.appId],Promise.resolve()}}let zl={},w0=[];const b0={};let cp="dataLayer",LN="gtag",T0,P1,E0=!1;function FN(){const t=[];if(ZE()&&t.push("This is a browser extension environment."),Yq()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=cr.create("invalid-analytics-context",{errorInfo:e});Kn.warn(n.message)}}function $N(t,e,n){FN();const r=t.options.appId;if(!r)throw cr.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Kn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cr.create("no-api-key");if(zl[r]!=null)throw cr.create("already-exists",{id:r});if(!E0){vN(cp);const{wrappedGtag:s,gtagCore:o}=EN(zl,w0,b0,cp,LN);P1=s,T0=o,E0=!0}return zl[r]=NN(t,w0,b0,e,T0,cp,n),new VN(t)}function x1(t=Ld()){t=gt(t);const e=xs(t,zh);return e.isInitialized()?e.getImmediate():UN(t)}function UN(t,e={}){const n=xs(t,zh);if(n.isInitialized()){const i=n.getImmediate();if(_c(e,n.getOptions()))return i;throw cr.create("already-initialized")}return n.initialize({options:e})}function BN(t,e,n,r){t=gt(t),qN(P1,zl[t.app.options.appId],e,n,r).catch(i=>Kn.error(i))}const A0="@firebase/analytics",I0="0.10.0";function jN(){Br(new Cr(zh,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $N(r,i,n)},"PUBLIC")),Br(new Cr("analytics-internal",t,"PRIVATE")),Gn(A0,I0),Gn(A0,I0,"esm2017");function t(e){try{const n=e.getProvider(zh).getImmediate();return{logEvent:(r,i,s)=>BN(n,r,i,s)}}catch(n){throw cr.create("interop-component-reg-failed",{reason:n})}}}jN();const HN={key:0,class:"modal-mask"},zN={class:"modal-container"},WN={class:"modal-header"},GN={class:"modal-body"},KN={class:"modal-footer"},k1={__name:"Modal",props:{show:Boolean},setup(t){return(e,n)=>(K(),qo(Ig,{name:"modal"},{default:ic(()=>[t.show?(K(),Q("div",HN,[A("div",zN,[A("div",WN,[Yu(e.$slots,"header",{},()=>[so("default header")])]),A("div",GN,[Yu(e.$slots,"body",{},()=>[so("default body")])]),A("div",KN,[Yu(e.$slots,"footer",{},()=>[A("button",{class:"modal-default-button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"OK")])])])])):Ih("",!0)]),_:3}))}};const XN=t=>(Li("data-v-295c4e7a"),t=t(),Fi(),t),YN={class:"card sm:flex-col",id:"show-modal"},QN={class:"card-image-container"},JN=["src"],ZN={class:"card-details sm:!m-0"},eV={class:"card-title sm:!text-4xl sm:mt-5"},tV=["innerHTML"],nV=XN(()=>A("thead",null,[A("th",null,"Team"),A("th",null,"Points")],-1)),rV={components:{Modal:k1},props:{game:Object}},iV=Object.assign(rV,{__name:"Card",setup(t){const e=yn(!1);return(n,r)=>(K(),Q("div",YN,[A("div",QN,[A("img",{src:t.game.poster,alt:"Card Image",class:"card-image"},null,8,JN)]),A("div",ZN,[A("h2",eV,rt(t.game.name),1),A("p",{class:"card-description",innerHTML:t.game.rules},null,8,tV),A("div",null,[A("button",{class:"details-btn",onClick:r[0]||(r[0]=i=>e.value=!0)},"Scores")])]),(K(),qo(MR,{to:"body"},[we(k1,{show:e.value,onClose:r[1]||(r[1]=i=>e.value=!1)},{header:ic(()=>[A("h2",null,rt(t.game.name),1)]),body:ic(()=>[A("table",null,[nV,A("tbody",null,[(K(!0),Q(Ae,null,Mt(t.game.scores,i=>(K(),Q("tr",null,[A("td",null,rt(i.team_name),1),A("td",null,rt(i.points),1)]))),256))])])]),_:1},8,["show"])]))]))}}),sV=it(iV,[["__scopeId","data-v-295c4e7a"]]);var oV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,o_=o_||{},ye=oV||self;function Ud(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aV(t){return Object.prototype.hasOwnProperty.call(t,up)&&t[up]||(t[up]=++lV)}var up="closure_uid_"+(1e9*Math.random()>>>0),lV=0;function cV(t,e,n){return t.call.apply(t.bind,arguments)}function uV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function In(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?In=cV:In=uV,In.apply(null,arguments)}function Mu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Qt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ks(){this.s=this.s,this.o=this.o}var hV=0;ks.prototype.s=!1;ks.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),hV!=0)&&aV(this)};ks.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const O1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function a_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ud(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Sn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Sn.prototype.h=function(){this.defaultPrevented=!0};var dV=function(){if(!ye.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ye.addEventListener("test",()=>{},e),ye.removeEventListener("test",()=>{},e)}catch{}return t}();function vc(t){return/^[\s\xa0]*$/.test(t)}function Bd(){var t=ye.navigator;return t&&(t=t.userAgent)?t:""}function Zr(t){return Bd().indexOf(t)!=-1}function l_(t){return l_[" "](t),t}l_[" "]=function(){};function fV(t,e){var n=sL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var pV=Zr("Opera"),qa=Zr("Trident")||Zr("MSIE"),D1=Zr("Edge"),Pm=D1||qa,q1=Zr("Gecko")&&!(Bd().toLowerCase().indexOf("webkit")!=-1&&!Zr("Edge"))&&!(Zr("Trident")||Zr("MSIE"))&&!Zr("Edge"),mV=Bd().toLowerCase().indexOf("webkit")!=-1&&!Zr("Edge");function M1(){var t=ye.document;return t?t.documentMode:void 0}var xm;e:{var hp="",dp=function(){var t=Bd();if(q1)return/rv:([^\);]+)(\)|;)/.exec(t);if(D1)return/Edge\/([\d\.]+)/.exec(t);if(qa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mV)return/WebKit\/(\S+)/.exec(t);if(pV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(dp&&(hp=dp?dp[1]:""),qa){var fp=M1();if(fp!=null&&fp>parseFloat(hp)){xm=String(fp);break e}}xm=hp}var km;if(ye.document&&qa){var C0=M1();km=C0||parseInt(xm,10)||void 0}else km=void 0;var gV=km;function wc(t,e){if(Sn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q1){e:{try{l_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_V[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wc.$.h.call(this)}}Qt(wc,Sn);var _V={2:"touch",3:"pen",4:"mouse"};wc.prototype.h=function(){wc.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wc="closure_listenable_"+(1e6*Math.random()|0),yV=0;function vV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++yV,this.fa=this.ia=!1}function jd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function c_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function wV(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function N1(t){const e={};for(const n in t)e[n]=t[n];return e}const R0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<R0.length;s++)n=R0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Hd(t){this.src=t,this.g={},this.h=0}Hd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Dm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new vV(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Om(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=O1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(jd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Dm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var u_="closure_lm_"+(1e6*Math.random()|0),pp={};function L1(t,e,n,r,i){if(r&&r.once)return $1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)L1(t,e[s],n,r,i);return null}return n=f_(n),t&&t[Wc]?t.O(e,n,zc(r)?!!r.capture:!!r,i):F1(t,e,n,!1,r,i)}function F1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=zc(i)?!!i.capture:!!i,a=d_(t);if(a||(t[u_]=a=new Hd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(B1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bV(){function t(n){return e.call(t.src,t.listener,n)}const e=TV;return t}function $1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$1(t,e[s],n,r,i);return null}return n=f_(n),t&&t[Wc]?t.P(e,n,zc(r)?!!r.capture:!!r,i):F1(t,e,n,!0,r,i)}function U1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)U1(t,e[s],n,r,i);else r=zc(r)?!!r.capture:!!r,n=f_(n),t&&t[Wc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Dm(s,n,r,i),-1<n&&(jd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=d_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dm(e,n,r,i)),(n=-1<t?e[t]:null)&&h_(n))}function h_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wc])Om(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(B1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=d_(e))?(Om(n,t),n.h==0&&(n.src=null,e[u_]=null)):jd(t)}}}function B1(t){return t in pp?pp[t]:pp[t]="on"+t}function TV(t,e){if(t.fa)t=!0;else{e=new wc(e,this);var n=t.listener,r=t.la||t.src;t.ia&&h_(t),t=n.call(r,e)}return t}function d_(t){return t=t[u_],t instanceof Hd?t:null}var mp="__closure_events_fn_"+(1e9*Math.random()>>>0);function f_(t){return typeof t=="function"?t:(t[mp]||(t[mp]=function(e){return t.handleEvent(e)}),t[mp])}function Yt(){ks.call(this),this.i=new Hd(this),this.S=this,this.J=null}Qt(Yt,ks);Yt.prototype[Wc]=!0;Yt.prototype.removeEventListener=function(t,e,n,r){U1(this,t,e,n,r)};function un(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Sn(e,t);else if(e instanceof Sn)e.target=e.target||t;else{var i=e;e=new Sn(r,t),V1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Nu(o,r,!0,e)&&i}if(o=e.g=t,i=Nu(o,r,!0,e)&&i,i=Nu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Nu(o,r,!1,e)&&i}Yt.prototype.N=function(){if(Yt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)jd(n[r]);delete t.g[e],t.h--}}this.J=null};Yt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Yt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Nu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Om(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var p_=ye.JSON.stringify;class EV{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function AV(){var t=m_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class IV{constructor(){this.h=this.g=null}add(e,n){const r=j1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var j1=new EV(()=>new SV,t=>t.reset());class SV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function CV(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function RV(t){ye.setTimeout(()=>{throw t},0)}let bc,Tc=!1,m_=new IV,H1=()=>{const t=ye.Promise.resolve(void 0);bc=()=>{t.then(PV)}};var PV=()=>{for(var t;t=AV();){try{t.h.call(t.g)}catch(n){RV(n)}var e=j1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Tc=!1};function zd(t,e){Yt.call(this),this.h=t||1,this.g=e||ye,this.j=In(this.qb,this),this.l=Date.now()}Qt(zd,Yt);G=zd.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),un(this,"tick"),this.ga&&(g_(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function g_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){zd.$.N.call(this),g_(this),delete this.g};function __(t,e,n){if(typeof t=="function")n&&(t=In(t,n));else if(t&&typeof t.handleEvent=="function")t=In(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ye.setTimeout(t,e||0)}function z1(t){t.g=__(()=>{t.g=null,t.i&&(t.i=!1,z1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xV extends ks{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:z1(this)}N(){super.N(),this.g&&(ye.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ec(t){ks.call(this),this.h=t,this.g={}}Qt(Ec,ks);var P0=[];function W1(t,e,n,r){Array.isArray(n)||(n&&(P0[0]=n.toString()),n=P0);for(var i=0;i<n.length;i++){var s=L1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function G1(t){c_(t.g,function(e,n){this.g.hasOwnProperty(n)&&h_(e)},t),t.g={}}Ec.prototype.N=function(){Ec.$.N.call(this),G1(this)};Ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wd(){this.g=!0}Wd.prototype.Ea=function(){this.g=!1};function kV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var c=d.split("_");o=2<=c.length&&c[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function OV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function sa(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qV(t,n)+(r?" "+r:"")})}function DV(t,e){t.info(function(){return"TIMEOUT: "+e})}Wd.prototype.info=function(){};function qV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return p_(n)}catch{return e}}var Lo={},x0=null;function Gd(){return x0=x0||new Yt}Lo.Ta="serverreachability";function K1(t){Sn.call(this,Lo.Ta,t)}Qt(K1,Sn);function Ac(t){const e=Gd();un(e,new K1(e))}Lo.STAT_EVENT="statevent";function X1(t,e){Sn.call(this,Lo.STAT_EVENT,t),this.stat=e}Qt(X1,Sn);function Fn(t){const e=Gd();un(e,new X1(e,t))}Lo.Ua="timingevent";function Y1(t,e){Sn.call(this,Lo.Ua,t),this.size=e}Qt(Y1,Sn);function Gc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ye.setTimeout(function(){t()},e)}var Kd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Q1={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function y_(){}y_.prototype.h=null;function k0(t){return t.h||(t.h=t.i())}function J1(){}var Kc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function v_(){Sn.call(this,"d")}Qt(v_,Sn);function w_(){Sn.call(this,"c")}Qt(w_,Sn);var qm;function Xd(){}Qt(Xd,y_);Xd.prototype.g=function(){return new XMLHttpRequest};Xd.prototype.i=function(){return{}};qm=new Xd;function Xc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ec(this),this.P=MV,t=Pm?125:void 0,this.V=new zd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Z1}function Z1(){this.i=null,this.g="",this.h=!1}var MV=45e3,Mm={},Wh={};G=Xc.prototype;G.setTimeout=function(t){this.P=t};function Nm(t,e,n){t.L=1,t.v=Qd(qi(e)),t.s=n,t.S=!0,eA(t,null)}function eA(t,e){t.G=Date.now(),Yc(t),t.A=qi(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),lA(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Z1,t.g=PA(t.l,n?e:null,!t.s),0<t.O&&(t.M=new xV(In(t.Pa,t,t.g),t.O)),W1(t.U,t.g,"readystatechange",t.nb),e=t.I?N1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ac(),kV(t.j,t.u,t.A,t.m,t.W,t.s)}G.nb=function(t){t=t.target;const e=this.M;e&&ti(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const d=ti(this.g);var e=this.g.Ia();const c=this.g.da();if(!(3>d)&&(d!=3||Pm||this.g&&(this.h.h||this.g.ja()||M0(this.g)))){this.J||d!=4||e==7||(e==8||0>=c?Ac(3):Ac(2)),Yd(this);var n=this.g.da();this.ca=n;t:if(tA(this)){var r=M0(this.g);t="";var i=r.length,s=ti(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){to(this),Wl(this);var o="";break t}this.h.i=new ye.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,OV(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vc(a)){var u=a;break t}}u=null}if(n=u)sa(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vm(this,n);else{this.i=!1,this.o=3,Fn(12),to(this),Wl(this);break e}}this.S?(nA(this,d,o),Pm&&this.i&&d==3&&(W1(this.U,this.V,"tick",this.mb),this.V.start())):(sa(this.j,this.m,o,null),Vm(this,o)),d==4&&to(this),this.i&&!this.J&&(d==4?IA(this.l,this):(this.i=!1,Yc(this)))}else nL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Fn(12)):(this.o=0,Fn(13)),to(this),Wl(this)}}}catch{}finally{}};function tA(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function nA(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=NV(t,n),i==Wh){e==4&&(t.o=4,Fn(14),r=!1),sa(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Mm){t.o=4,Fn(15),sa(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else sa(t.j,t.m,i,null),Vm(t,i);tA(t)&&i!=Wh&&i!=Mm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Fn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),S_(e),e.M=!0,Fn(11))):(sa(t.j,t.m,n,"[Invalid Chunked Response]"),to(t),Wl(t))}G.mb=function(){if(this.g){var t=ti(this.g),e=this.g.ja();this.C<e.length&&(Yd(this),nA(this,t,e),this.i&&t!=4&&Yc(this))}};function NV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wh:(n=Number(e.substring(n,r)),isNaN(n)?Mm:(r+=1,r+n>e.length?Wh:(e=e.slice(r,r+n),t.C=r+n,e)))}G.cancel=function(){this.J=!0,to(this)};function Yc(t){t.Y=Date.now()+t.P,rA(t,t.P)}function rA(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gc(In(t.lb,t),e)}function Yd(t){t.B&&(ye.clearTimeout(t.B),t.B=null)}G.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(DV(this.j,this.A),this.L!=2&&(Ac(),Fn(17)),to(this),this.o=2,Wl(this)):rA(this,this.Y-t)};function Wl(t){t.l.H==0||t.J||IA(t.l,t)}function to(t){Yd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,g_(t.V),G1(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Vm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Lm(n.i,t))){if(!t.K&&Lm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xh(n),ef(n);else break e;I_(n),Fn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Gc(In(n.ib,n),6e3));if(1>=hA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else no(n,11)}else if((t.K||n.g==t)&&Xh(n),!vc(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const c=u[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(b_(s,s.h),s.h=null))}if(r.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,at(r.I,r.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=RA(r,r.J?r.pa:null,r.Y),o.K){dA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Yd(a),Yc(a)),r.g=o}else EA(r);0<n.j.length&&tf(n)}else u[0]!="stop"&&u[0]!="close"||no(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?no(n,7):A_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ac(4)}catch{}}function VV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ud(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function LV(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ud(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function iA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ud(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LV(t),r=VV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var sA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mo(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mo){this.h=t.h,Gh(this,t.j),this.s=t.s,this.g=t.g,Kh(this,t.m),this.l=t.l;var e=t.i,n=new Ic;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),O0(this,n),this.o=t.o}else t&&(e=String(t).match(sA))?(this.h=!1,Gh(this,e[1]||"",!0),this.s=Tl(e[2]||""),this.g=Tl(e[3]||"",!0),Kh(this,e[4]),this.l=Tl(e[5]||"",!0),O0(this,e[6]||"",!0),this.o=Tl(e[7]||"")):(this.h=!1,this.i=new Ic(null,this.h))}mo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(El(e,D0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(El(e,D0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(El(n,n.charAt(0)=="/"?BV:UV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",El(n,HV)),t.join("")};function qi(t){return new mo(t)}function Gh(t,e,n){t.j=n?Tl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Kh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function O0(t,e,n){e instanceof Ic?(t.i=e,zV(t.i,t.h)):(n||(e=El(e,jV)),t.i=new Ic(e,t.h))}function at(t,e,n){t.i.set(e,n)}function Qd(t){return at(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Tl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function El(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$V),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $V(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var D0=/[#\/\?@]/g,UV=/[#\?:]/g,BV=/[#\?]/g,jV=/[#\?@]/g,HV=/#/g;function Ic(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Os(t){t.g||(t.g=new Map,t.h=0,t.i&&FV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=Ic.prototype;G.add=function(t,e){Os(this),this.i=null,t=Wa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function oA(t,e){Os(t),e=Wa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function aA(t,e){return Os(t),e=Wa(t,e),t.g.has(e)}G.forEach=function(t,e){Os(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){Os(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){Os(this);let e=[];if(typeof t=="string")aA(this,t)&&(e=e.concat(this.g.get(Wa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Os(this),this.i=null,t=Wa(this,t),aA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function lA(t,e,n){oA(t,e),0<n.length&&(t.i=null,t.g.set(Wa(t,e),a_(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Wa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zV(t,e){e&&!t.j&&(Os(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(oA(this,r),lA(this,i,n))},t)),t.j=e}var WV=class{constructor(t,e){this.g=t,this.map=e}};function cA(t){this.l=t||GV,ye.PerformanceNavigationTiming?(t=ye.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ye.g&&ye.g.Ka&&ye.g.Ka()&&ye.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GV=10;function uA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hA(t){return t.h?1:t.g?t.g.size:0}function Lm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function b_(t,e){t.g?t.g.add(e):t.h=e}function dA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cA.prototype.cancel=function(){if(this.i=fA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return a_(t.i)}var KV=class{stringify(t){return ye.JSON.stringify(t,void 0)}parse(t){return ye.JSON.parse(t,void 0)}};function XV(){this.g=new KV}function YV(t,e,n){const r=n||"";try{iA(t,function(i,s){let o=i;zc(i)&&(o=p_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function QV(t,e){const n=new Wd;if(ye.Image){const r=new Image;r.onload=Mu(Vu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Mu(Vu,n,r,"TestLoadImage: error",!1,e),r.onabort=Mu(Vu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Mu(Vu,n,r,"TestLoadImage: timeout",!1,e),ye.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Vu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Qc(t){this.l=t.ec||null,this.j=t.ob||!1}Qt(Qc,y_);Qc.prototype.g=function(){return new Jd(this.l,this.j)};Qc.prototype.i=function(t){return function(){return t}}({});function Jd(t,e){Yt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=T_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qt(Jd,Yt);var T_=0;G=Jd.prototype;G.open=function(t,e){if(this.readyState!=T_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sc(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ye).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jc(this)),this.readyState=T_};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sc(this)),this.g&&(this.readyState=3,Sc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ye.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function pA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jc(this):Sc(this),this.readyState==3&&pA(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,Jc(this))};G.Ya=function(t){this.g&&(this.response=t,Jc(this))};G.ka=function(){this.g&&Jc(this)};function Jc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sc(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Sc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Jd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JV=ye.JSON.parse;function Et(t){Yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mA,this.L=this.M=!1}Qt(Et,Yt);var mA="",ZV=/^https?$/i,eL=["POST","PUT"];G=Et.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qm.g(),this.C=this.u?k0(this.u):k0(qm),this.g.onreadystatechange=In(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){q0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ye.FormData&&t instanceof ye.FormData,!(0<=O1(eL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yA(this),0<this.B&&((this.L=tL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=In(this.ua,this)):this.A=__(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){q0(this,s)}};function tL(t){return qa&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof o_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,un(this,"timeout"),this.abort(8))};function q0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gA(t),Zd(t)}function gA(t){t.F||(t.F=!0,un(t,"complete"),un(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,un(this,"complete"),un(this,"abort"),Zd(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zd(this,!0)),Et.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?_A(this):this.kb())};G.kb=function(){_A(this)};function _A(t){if(t.h&&typeof o_<"u"&&(!t.C[1]||ti(t)!=4||t.da()!=2)){if(t.v&&ti(t)==4)__(t.La,0,t);else if(un(t,"readystatechange"),ti(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(sA)[1]||null;!i&&ye.self&&ye.self.location&&(i=ye.self.location.protocol.slice(0,-1)),r=!ZV.test(i?i.toLowerCase():"")}n=r}if(n)un(t,"complete"),un(t,"success");else{t.m=6;try{var s=2<ti(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",gA(t)}}finally{Zd(t)}}}}function Zd(t,e){if(t.g){yA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||un(t,"ready");try{n.onreadystatechange=r}catch{}}}function yA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ye.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function ti(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<ti(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JV(e)}};function M0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case mA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function nL(t){const e={};t=(t.g&&2<=ti(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(vc(t[r]))continue;var n=CV(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}wV(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vA(t){let e="";return c_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function E_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):at(t,e,n))}function cl(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wA(t){this.Ga=0,this.j=[],this.l=new Wd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=cl("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=cl("baseRetryDelayMs",5e3,t),this.hb=cl("retryDelaySeedMs",1e4,t),this.eb=cl("forwardChannelMaxRetries",2,t),this.xa=cl("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cA(t&&t.concurrentRequestLimit),this.Ja=new XV,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=wA.prototype;G.ra=8;G.H=1;function A_(t){if(bA(t),t.H==3){var e=t.W++,n=qi(t.I);if(at(n,"SID",t.K),at(n,"RID",e),at(n,"TYPE","terminate"),Zc(t,n),e=new Xc(t,t.l,e),e.L=2,e.v=Qd(qi(n)),n=!1,ye.navigator&&ye.navigator.sendBeacon)try{n=ye.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ye.Image&&(new Image().src=e.v,n=!0),n||(e.g=PA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Yc(e)}CA(t)}function ef(t){t.g&&(S_(t),t.g.cancel(),t.g=null)}function bA(t){ef(t),t.u&&(ye.clearTimeout(t.u),t.u=null),Xh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ye.clearTimeout(t.m),t.m=null)}function tf(t){if(!uA(t.i)&&!t.m){t.m=!0;var e=t.Na;bc||H1(),Tc||(bc(),Tc=!0),m_.add(e,t),t.C=0}}function rL(t,e){return hA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Gc(In(t.Na,t,e),SA(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Xc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=N1(s),V1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TA(this,i,e),n=qi(this.I),at(n,"RID",t),at(n,"CVER",22),this.F&&at(n,"X-HTTP-Session-Id",this.F),Zc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(vA(s)))+"&"+e:this.o&&E_(n,this.o,s)),b_(this.i,i),this.bb&&at(n,"TYPE","init"),this.P?(at(n,"$req",e),at(n,"SID","null"),i.aa=!0,Nm(i,n,null)):Nm(i,n,e),this.H=2}}else this.H==3&&(t?N0(this,t):this.j.length==0||uA(this.i)||N0(this))};function N0(t,e){var n;e?n=e.m:n=t.W++;const r=qi(t.I);at(r,"SID",t.K),at(r,"RID",n),at(r,"AID",t.V),Zc(t,r),t.o&&t.s&&E_(r,t.o,t.s),n=new Xc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=TA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),b_(t.i,n),Nm(n,r,e)}function Zc(t,e){t.na&&c_(t.na,function(n,r){at(e,r,n)}),t.h&&iA({},function(n,r){at(e,r,n)})}function TA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?In(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const d=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{YV(d,o,"req"+u+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function EA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;bc||H1(),Tc||(bc(),Tc=!0),m_.add(e,t),t.A=0}}function I_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Gc(In(t.Ma,t),SA(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,AA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Gc(In(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Fn(10),ef(this),AA(this))};function S_(t){t.B!=null&&(ye.clearTimeout(t.B),t.B=null)}function AA(t){t.g=new Xc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=qi(t.wa);at(e,"RID","rpc"),at(e,"SID",t.K),at(e,"AID",t.V),at(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&at(e,"TO",t.qa),at(e,"TYPE","xmlhttp"),Zc(t,e),t.o&&t.s&&E_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Qd(qi(e)),n.s=null,n.S=!0,eA(n,t)}G.ib=function(){this.v!=null&&(this.v=null,ef(this),I_(this),Fn(19))};function Xh(t){t.v!=null&&(ye.clearTimeout(t.v),t.v=null)}function IA(t,e){var n=null;if(t.g==e){Xh(t),S_(t),t.g=null;var r=2}else if(Lm(t.i,e))n=e.F,dA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Gd(),un(r,new Y1(r,n)),tf(t)}else EA(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&rL(t,e)||r==2&&I_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:no(t,5);break;case 4:no(t,10);break;case 3:no(t,6);break;default:no(t,2)}}}function SA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function no(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=In(t.pb,t);n||(n=new mo("//www.google.com/images/cleardot.gif"),ye.location&&ye.location.protocol=="http"||Gh(n,"https"),Qd(n)),QV(n.toString(),r)}else Fn(2);t.H=0,t.h&&t.h.za(e),CA(t),bA(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Fn(2)):(this.l.info("Failed to ping google.com"),Fn(1))};function CA(t){if(t.H=0,t.ma=[],t.h){const e=fA(t.i);(e.length!=0||t.j.length!=0)&&(S0(t.ma,e),S0(t.ma,t.j),t.i.i.length=0,a_(t.j),t.j.length=0),t.h.ya()}}function RA(t,e,n){var r=n instanceof mo?qi(n):new mo(n);if(r.g!="")e&&(r.g=e+"."+r.g),Kh(r,r.m);else{var i=ye.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new mo(null);r&&Gh(s,r),e&&(s.g=e),i&&Kh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&at(r,n,e),at(r,"VER",t.ra),Zc(t,r),r}function PA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Et(new Qc({ob:!0})):new Et(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function xA(){}G=xA.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function Yh(){if(qa&&!(10<=Number(gV)))throw Error("Environmental error: no available transport.")}Yh.prototype.g=function(t,e){return new dr(t,e)};function dr(t,e){Yt.call(this),this.g=new wA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ga(this)}Qt(dr,Yt);dr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Fn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=RA(t,null,t.Y),tf(t)};dr.prototype.close=function(){A_(this.g)};dr.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=p_(t),t=n);e.j.push(new WV(e.fb++,t)),e.H==3&&tf(e)};dr.prototype.N=function(){this.g.h=null,delete this.j,A_(this.g),delete this.g,dr.$.N.call(this)};function kA(t){v_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qt(kA,v_);function OA(){w_.call(this),this.status=1}Qt(OA,w_);function Ga(t){this.g=t}Qt(Ga,xA);Ga.prototype.Ba=function(){un(this.g,"a")};Ga.prototype.Aa=function(t){un(this.g,new kA(t))};Ga.prototype.za=function(t){un(this.g,new OA)};Ga.prototype.ya=function(){un(this.g,"b")};function iL(){this.blockSize=-1}function jr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qt(jr,iL);jr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function gp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}jr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)gp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){gp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){gp(this,r),i=0;break}}this.h=i,this.i+=e};jr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ye(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var sL={};function C_(t){return-128<=t&&128>t?fV(t,function(e){return new Ye([e|0],0>e?-1:0)}):new Ye([t|0],0>t?-1:0)}function ni(t){if(isNaN(t)||!isFinite(t))return ya;if(0>t)return on(ni(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Fm;return new Ye(e,0)}function DA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return on(DA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ni(Math.pow(e,8)),r=ya,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=ni(Math.pow(e,s)),r=r.R(s).add(ni(o))):(r=r.R(n),r=r.add(ni(o)))}return r}var Fm=4294967296,ya=C_(0),$m=C_(1),V0=C_(16777216);G=Ye.prototype;G.ea=function(){if(vr(this))return-on(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Fm+r)*e,e*=Fm}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ii(this))return"0";if(vr(this))return"-"+on(this).toString(t);for(var e=ni(Math.pow(t,6)),n=this,r="";;){var i=Jh(n,e).g;n=Qh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ii(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ii(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vr(t){return t.h==-1}G.X=function(t){return t=Qh(this,t),vr(t)?-1:Ii(t)?0:1};function on(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ye(n,~t.h).add($m)}G.abs=function(){return vr(this)?on(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ye(n,n[n.length-1]&-2147483648?-1:0)};function Qh(t,e){return t.add(on(e))}G.R=function(t){if(Ii(this)||Ii(t))return ya;if(vr(this))return vr(t)?on(this).R(on(t)):on(on(this).R(t));if(vr(t))return on(this.R(on(t)));if(0>this.X(V0)&&0>t.X(V0))return ni(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Lu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Lu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Lu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Lu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ye(n,0)};function Lu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ul(t,e){this.g=t,this.h=e}function Jh(t,e){if(Ii(e))throw Error("division by zero");if(Ii(t))return new ul(ya,ya);if(vr(t))return e=Jh(on(t),e),new ul(on(e.g),on(e.h));if(vr(e))return e=Jh(t,on(e)),new ul(on(e.g),e.h);if(30<t.g.length){if(vr(t)||vr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$m,r=e;0>=r.X(t);)n=L0(n),r=L0(r);var i=Go(n,1),s=Go(r,1);for(r=Go(r,2),n=Go(n,2);!Ii(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Go(r,1),n=Go(n,1)}return e=Qh(t,i.R(e)),new ul(i,e)}for(i=ya;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ni(n),o=s.R(e);vr(o)||0<o.X(t);)n-=r,s=ni(n),o=s.R(e);Ii(s)&&(s=$m),i=i.add(s),t=Qh(t,o)}return new ul(i,t)}G.gb=function(t){return Jh(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ye(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ye(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ye(n,this.h^t.h)};function L0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ye(n,t.h)}function Go(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ye(i,t.h)}Yh.prototype.createWebChannel=Yh.prototype.g;dr.prototype.send=dr.prototype.u;dr.prototype.open=dr.prototype.m;dr.prototype.close=dr.prototype.close;Kd.NO_ERROR=0;Kd.TIMEOUT=8;Kd.HTTP_ERROR=6;Q1.COMPLETE="complete";J1.EventType=Kc;Kc.OPEN="a";Kc.CLOSE="b";Kc.ERROR="c";Kc.MESSAGE="d";Yt.prototype.listen=Yt.prototype.O;Et.prototype.listenOnce=Et.prototype.P;Et.prototype.getLastError=Et.prototype.Sa;Et.prototype.getLastErrorCode=Et.prototype.Ia;Et.prototype.getStatus=Et.prototype.da;Et.prototype.getResponseJson=Et.prototype.Wa;Et.prototype.getResponseText=Et.prototype.ja;Et.prototype.send=Et.prototype.ha;Et.prototype.setWithCredentials=Et.prototype.Oa;jr.prototype.digest=jr.prototype.l;jr.prototype.reset=jr.prototype.reset;jr.prototype.update=jr.prototype.j;Ye.prototype.add=Ye.prototype.add;Ye.prototype.multiply=Ye.prototype.R;Ye.prototype.modulo=Ye.prototype.gb;Ye.prototype.compare=Ye.prototype.X;Ye.prototype.toNumber=Ye.prototype.ea;Ye.prototype.toString=Ye.prototype.toString;Ye.prototype.getBits=Ye.prototype.D;Ye.fromNumber=ni;Ye.fromString=DA;var oL=function(){return new Yh},aL=function(){return Gd()},_p=Kd,lL=Q1,cL=Lo,F0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},uL=Qc,Fu=J1,hL=Et,dL=jr,va=Ye;const $0="@firebase/firestore";/**
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
 */class _n{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_n.UNAUTHENTICATED=new _n(null),_n.GOOGLE_CREDENTIALS=new _n("google-credentials-uid"),_n.FIRST_PARTY=new _n("first-party-uid"),_n.MOCK_USER=new _n("mock-user");/**
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
 */let Ka="10.5.2";/**
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
 */const Ro=new Nd("@firebase/firestore");function hl(){return Ro.logLevel}function re(t,...e){if(Ro.logLevel<=Ne.DEBUG){const n=e.map(R_);Ro.debug(`Firestore (${Ka}): ${t}`,...n)}}function Mi(t,...e){if(Ro.logLevel<=Ne.ERROR){const n=e.map(R_);Ro.error(`Firestore (${Ka}): ${t}`,...n)}}function Ma(t,...e){if(Ro.logLevel<=Ne.WARN){const n=e.map(R_);Ro.warn(`Firestore (${Ka}): ${t}`,...n)}}function R_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Ka}) INTERNAL ASSERTION FAILED: `+t;throw Mi(e),new Error(e)}function lt(t,e){t||ge()}function Ee(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_n.UNAUTHENTICATED))}shutdown(){}}class pL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mL{constructor(e){this.t=e,this.currentUser=_n.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string"),new qA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string"),new _n(e)}}class gL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_n.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _L{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new gL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_n.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string"),this.R=n.token,new yL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function wL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class MA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=wL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function We(t,e){return t<e?-1:t>e?1:0}function Na(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class $t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $t.fromMillis(Date.now())}static fromDate(e){return $t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?We(this.nanoseconds,e.nanoseconds):We(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new $t(0,0))}static max(){return new ve(new $t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Cc{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ut extends Cc{construct(e,n,r){return new ut(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ut(n)}static emptyPath(){return new ut([])}}const bL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends Cc{construct(e,n,r){return new an(e,n,r)}static isValidIdentifier(e){return bL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new an(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ce(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ce(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ce(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new an(n)}static emptyPath(){return new an([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(ut.fromString(e))}static fromName(e){return new de(ut.fromString(e).popFirst(5))}static empty(){return new de(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ut.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new ut(e.slice()))}}function TL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(r===1e9?new $t(n+1,0):new $t(n,r));return new Ss(i,de.empty(),e)}function EL(t){return new Ss(t.readTime,t.key,-1)}class Ss{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ss(ve.min(),de.empty(),-1)}static max(){return new Ss(ve.max(),de.empty(),-1)}}function AL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:We(t.largestBatchId,e.largestBatchId))}/**
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
 */const IL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function eu(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==IL)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function tu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class P_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}P_._e=-1;function nf(t){return t==null}function Zh(t){return t===0&&1/t==-1/0}function CL(t){return typeof t=="number"&&Number.isInteger(t)&&!Zh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function U0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function NA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class _t{constructor(e,n){this.comparator=e,this.root=n||rn.EMPTY}insert(e,n){return new _t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rn.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}}class $u{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rn.RED,this.left=i??rn.EMPTY,this.right=s??rn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}rn.EMPTY=null,rn.RED=!0,rn.BLACK=!1;rn.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,i,s){return this}insert(e,n,r){return new rn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class hn{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new B0(this.data.getIterator())}getIteratorFrom(e){return new B0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof hn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new hn(this.comparator);return n.data=e,n}}class B0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class or{constructor(e){this.fields=e,e.sort(an.comparator)}static empty(){return new or([])}unionWith(e){let n=new hn(an.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new or(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Na(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class VA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VA("Invalid base64 string: "+s):s}}(e);return new Rn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return We(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rn.EMPTY_BYTE_STRING=new Rn("");const RL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cs(t){if(lt(!!t),typeof t=="string"){let e=0;const n=RL.exec(t);if(lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qt(t.seconds),nanos:qt(t.nanos)}}function qt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Po(t){return typeof t=="string"?Rn.fromBase64String(t):Rn.fromUint8Array(t)}/**
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
 */function x_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function k_(t){const e=t.mapValue.fields.__previous_value__;return x_(e)?k_(e):e}function Rc(t){const e=Cs(t.mapValue.fields.__local_write_time__.timestampValue);return new $t(e.seconds,e.nanos)}/**
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
 */class PL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Pc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Uu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?x_(t)?4:xL(t)?9007199254740991:10:ge()}function pi(t,e){if(t===e)return!0;const n=xo(t);if(n!==xo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rc(t).isEqual(Rc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Cs(i.timestampValue),a=Cs(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Po(i.bytesValue).isEqual(Po(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qt(i.geoPointValue.latitude)===qt(s.geoPointValue.latitude)&&qt(i.geoPointValue.longitude)===qt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qt(i.integerValue)===qt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qt(i.doubleValue),a=qt(s.doubleValue);return o===a?Zh(o)===Zh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Na(t.arrayValue.values||[],e.arrayValue.values||[],pi);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(U0(o)!==U0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!pi(o[l],a[l])))return!1;return!0}(t,e);default:return ge()}}function xc(t,e){return(t.values||[]).find(n=>pi(n,e))!==void 0}function Va(t,e){if(t===e)return 0;const n=xo(t),r=xo(e);if(n!==r)return We(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return We(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qt(s.integerValue||s.doubleValue),l=qt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return j0(t.timestampValue,e.timestampValue);case 4:return j0(Rc(t),Rc(e));case 5:return We(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Po(s),l=Po(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=We(a[u],l[u]);if(d!==0)return d}return We(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=We(qt(s.latitude),qt(o.latitude));return a!==0?a:We(qt(s.longitude),qt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const d=Va(a[u],l[u]);if(d)return d}return We(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Uu.mapValue&&o===Uu.mapValue)return 0;if(s===Uu.mapValue)return 1;if(o===Uu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let c=0;c<l.length&&c<d.length;++c){const h=We(l[c],d[c]);if(h!==0)return h;const f=Va(a[l[c]],u[d[c]]);if(f!==0)return f}return We(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function j0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return We(t,e);const n=Cs(t),r=Cs(e),i=We(n.seconds,r.seconds);return i!==0?i:We(n.nanos,r.nanos)}function La(t){return Um(t)}function Um(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Po(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Um(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Um(n.fields[o])}`;return i+"}"}(t.mapValue):ge()}function Bm(t){return!!t&&"integerValue"in t}function O_(t){return!!t&&"arrayValue"in t}function H0(t){return!!t&&"nullValue"in t}function z0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uh(t){return!!t&&"mapValue"in t}function Gl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gl(n)}setAll(e){let n=an.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Gl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());uh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];uh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jn(Gl(this.value))}}function LA(t){const e=[];return Fo(t.fields,(n,r)=>{const i=new an([n]);if(uh(r)){const s=LA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new or(e)}/**
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
 */class vn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vn(e,0,ve.min(),ve.min(),ve.min(),jn.empty(),0)}static newFoundDocument(e,n,r,i){return new vn(e,1,n,ve.min(),r,i,0)}static newNoDocument(e,n){return new vn(e,2,n,ve.min(),ve.min(),jn.empty(),0)}static newUnknownDocument(e,n){return new vn(e,3,n,ve.min(),ve.min(),jn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ed{constructor(e,n){this.position=e,this.inclusive=n}}function W0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=Va(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function G0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pi(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class td{constructor(e,n="asc"){this.field=e,this.dir=n}}function kL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class FA{}class Ft extends FA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DL(e,n,r):n==="array-contains"?new NL(e,r):n==="in"?new VL(e,r):n==="not-in"?new LL(e,r):n==="array-contains-any"?new FL(e,r):new Ft(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qL(e,r):new ML(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Va(n,this.value)):n!==null&&xo(this.value)===xo(n)&&this.matchesComparison(Va(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mi extends FA{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new mi(e,n)}matches(e){return $A(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function $A(t){return t.op==="and"}function UA(t){return OL(t)&&$A(t)}function OL(t){for(const e of t.filters)if(e instanceof mi)return!1;return!0}function jm(t){if(t instanceof Ft)return t.field.canonicalString()+t.op.toString()+La(t.value);if(UA(t))return t.filters.map(e=>jm(e)).join(",");{const e=t.filters.map(n=>jm(n)).join(",");return`${t.op}(${e})`}}function BA(t,e){return t instanceof Ft?function(r,i){return i instanceof Ft&&r.op===i.op&&r.field.isEqual(i.field)&&pi(r.value,i.value)}(t,e):t instanceof mi?function(r,i){return i instanceof mi&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&BA(o,i.filters[a]),!0):!1}(t,e):void ge()}function jA(t){return t instanceof Ft?function(n){return`${n.field.canonicalString()} ${n.op} ${La(n.value)}`}(t):t instanceof mi?function(n){return n.op.toString()+" {"+n.getFilters().map(jA).join(" ,")+"}"}(t):"Filter"}class DL extends Ft{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class qL extends Ft{constructor(e,n){super(e,"in",n),this.keys=HA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ML extends Ft{constructor(e,n){super(e,"not-in",n),this.keys=HA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function HA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class NL extends Ft{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return O_(n)&&xc(n.arrayValue,this.value)}}class VL extends Ft{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xc(this.value.arrayValue,n)}}class LL extends Ft{constructor(e,n){super(e,"not-in",n)}matches(e){if(xc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xc(this.value.arrayValue,n)}}class FL extends Ft{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!O_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xc(this.value.arrayValue,r))}}/**
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
 */class $L{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function K0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $L(t,e,n,r,i,s,o)}function D_(t){const e=Ee(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>La(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>La(r)).join(",")),e.ce=n}return e.ce}function q_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!BA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!G0(t.startAt,e.startAt)&&G0(t.endAt,e.endAt)}function Hm(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class rf{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function UL(t,e,n,r,i,s,o,a){return new rf(t,e,n,r,i,s,o,a)}function zA(t){return new rf(t)}function X0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function BL(t){return t.collectionGroup!==null}function Kl(t){const e=Ee(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new hn(an.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new td(s,r))}),n.has(an.keyField().canonicalString())||e.le.push(new td(an.keyField(),r))}return e.le}function ai(t){const e=Ee(t);return e.he||(e.he=jL(e,Kl(t))),e.he}function jL(t,e){if(t.limitType==="F")return K0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new td(i.field,s)});const n=t.endAt?new ed(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ed(t.startAt.position,t.startAt.inclusive):null;return K0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zm(t,e,n){return new rf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sf(t,e){return q_(ai(t),ai(e))&&t.limitType===e.limitType}function WA(t){return`${D_(ai(t))}|lt:${t.limitType}`}function Qo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>jA(i)).join(", ")}]`),nf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>La(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>La(i)).join(",")),`Target(${r})`}(ai(t))}; limitType=${t.limitType})`}function of(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):de.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Kl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=W0(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Kl(r),i)||r.endAt&&!function(o,a,l){const u=W0(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Kl(r),i))}(t,e)}function HL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GA(t){return(e,n)=>{let r=!1;for(const i of Kl(t)){const s=zL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zL(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Va(l,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class Xa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return NA(this.inner)}size(){return this.innerSize}}/**
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
 */const WL=new _t(de.comparator);function Ni(){return WL}const KA=new _t(de.comparator);function Al(...t){let e=KA;for(const n of t)e=e.insert(n.key,n);return e}function XA(t){let e=KA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ro(){return Xl()}function YA(){return Xl()}function Xl(){return new Xa(t=>t.toString(),(t,e)=>t.isEqual(e))}const GL=new _t(de.comparator),KL=new hn(de.comparator);function De(...t){let e=KL;for(const n of t)e=e.add(n);return e}const XL=new hn(We);function YL(){return XL}/**
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
 */function QA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zh(e)?"-0":e}}function JA(t){return{integerValue:""+t}}function QL(t,e){return CL(e)?JA(e):QA(t,e)}/**
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
 */class af{constructor(){this._=void 0}}function JL(t,e,n){return t instanceof nd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&x_(s)&&(s=k_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof kc?eI(t,e):t instanceof Oc?tI(t,e):function(i,s){const o=ZA(i,s),a=Y0(o)+Y0(i.Ie);return Bm(o)&&Bm(i.Ie)?JA(a):QA(i.serializer,a)}(t,e)}function ZL(t,e,n){return t instanceof kc?eI(t,e):t instanceof Oc?tI(t,e):n}function ZA(t,e){return t instanceof rd?function(r){return Bm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class nd extends af{}class kc extends af{constructor(e){super(),this.elements=e}}function eI(t,e){const n=nI(e);for(const r of t.elements)n.some(i=>pi(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oc extends af{constructor(e){super(),this.elements=e}}function tI(t,e){let n=nI(e);for(const r of t.elements)n=n.filter(i=>!pi(i,r));return{arrayValue:{values:n}}}class rd extends af{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Y0(t){return qt(t.integerValue||t.doubleValue)}function nI(t){return O_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof kc&&i instanceof kc||r instanceof Oc&&i instanceof Oc?Na(r.elements,i.elements,pi):r instanceof rd&&i instanceof rd?pi(r.Ie,i.Ie):r instanceof nd&&i instanceof nd}(t.transform,e.transform)}class tF{constructor(e,n){this.version=e,this.transformResults=n}}class li{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new li}static exists(e){return new li(void 0,e)}static updateTime(e){return new li(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lf{}function rI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sI(t.key,li.none()):new nu(t.key,t.data,li.none());{const n=t.data,r=jn.empty();let i=new hn(an.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ds(t.key,r,new or(i.toArray()),li.none())}}function nF(t,e,n){t instanceof nu?function(i,s,o){const a=i.value.clone(),l=J0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ds?function(i,s,o){if(!hh(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=J0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(iI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yl(t,e,n,r){return t instanceof nu?function(s,o,a,l){if(!hh(s.precondition,o))return a;const u=s.value.clone(),d=Z0(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ds?function(s,o,a,l){if(!hh(s.precondition,o))return a;const u=Z0(s.fieldTransforms,l,o),d=o.data;return d.setAll(iI(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(s,o,a){return hh(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ZA(r.transform,i||null);s!=null&&(n===null&&(n=jn.empty()),n.set(r.field,s))}return n||null}function Q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Na(r,i,(s,o)=>eF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nu extends lf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ds extends lf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function J0(t,e,n){const r=new Map;lt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZL(o,a,n[i]))}return r}function Z0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JL(s,o,e))}return r}class sI extends lf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iF extends lf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=YA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=rI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),De())}isEqual(e){return this.batchId===e.batchId&&Na(this.mutations,e.mutations,(n,r)=>Q0(n,r))&&Na(this.baseMutations,e.baseMutations,(n,r)=>Q0(n,r))}}class M_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){lt(e.mutations.length===r.length);let i=function(){return GL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new M_(e,n,r,i)}}/**
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
 */class oF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var kt,Fe;function lF(t){switch(t){default:return ge();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function oI(t){if(t===void 0)return Mi("GRPC error has no .code"),L.UNKNOWN;switch(t){case kt.OK:return L.OK;case kt.CANCELLED:return L.CANCELLED;case kt.UNKNOWN:return L.UNKNOWN;case kt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case kt.INTERNAL:return L.INTERNAL;case kt.UNAVAILABLE:return L.UNAVAILABLE;case kt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case kt.NOT_FOUND:return L.NOT_FOUND;case kt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case kt.ABORTED:return L.ABORTED;case kt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case kt.DATA_LOSS:return L.DATA_LOSS;default:return ge()}}(Fe=kt||(kt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cF(){return new TextEncoder}/**
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
 */const uF=new va([4294967295,4294967295],0);function ew(t){const e=cF().encode(t),n=new dL;return n.update(e),new Uint8Array(n.digest())}function tw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new va([n,r],0),new va([i,s],0)]}class N_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Il(`Invalid padding: ${n}`);if(r<0)throw new Il(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Il(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Il(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=va.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(va.fromNumber(r)));return i.compare(uF)===1&&(i=new va([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=ew(e),[r,i]=tw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new N_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=ew(e),[r,i]=tw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ru.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cf(ve.min(),i,new _t(We),Ni(),De())}}class ru{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ru(r,n,De(),De(),De())}}/**
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
 */class dh{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class aI{constructor(e,n){this.targetId=e,this.fe=n}}class lI{constructor(e,n,r=Rn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nw{constructor(){this.ge=0,this.pe=iw(),this.ye=Rn.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=De(),n=De(),r=De();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ge()}}),new ru(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=iw()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class hF{constructor(e){this.Le=e,this.ke=new Map,this.qe=Ni(),this.Qe=rw(),this.Ke=new _t(We)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Hm(s))if(r===0){const o=new de(s.path);this.We(n,o,vn.newNoDocument(o,ve.min()))}else lt(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Po(r).toUint8Array()}catch(l){if(l instanceof VA)return Ma("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new N_(o,i,s)}catch(l){return Ma(l instanceof Il?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Hm(a.target)){const l=new de(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,vn.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=De();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new cf(e,n,this.Ke,this.qe,r);return this.qe=Ni(),this.Qe=rw(),this.Ke=new _t(We),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new nw,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new hn(We),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new nw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function rw(){return new _t(de.comparator)}function iw(){return new _t(de.comparator)}const dF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pF=(()=>({and:"AND",or:"OR"}))();class mF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wm(t,e){return t.useProto3Json||nf(e)?e:{value:e}}function id(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gF(t,e){return id(t,e.toTimestamp())}function ci(t){return lt(!!t),ve.fromTimestamp(function(n){const r=Cs(n);return new $t(r.seconds,r.nanos)}(t))}function V_(t,e){return function(r){return new ut(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function uI(t){const e=ut.fromString(t);return lt(pI(e)),e}function Gm(t,e){return V_(t.databaseId,e.path)}function yp(t,e){const n=uI(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(hI(n))}function Km(t,e){return V_(t.databaseId,e)}function _F(t){const e=uI(t);return e.length===4?ut.emptyPath():hI(e)}function Xm(t){return new ut(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hI(t){return lt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sw(t,e,n){return{name:Gm(t,e),fields:n.value.mapValue.fields}}function yF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(lt(d===void 0||typeof d=="string"),Rn.fromBase64String(d||"")):(lt(d===void 0||d instanceof Uint8Array),Rn.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?L.UNKNOWN:oI(u.code);return new ce(d,u.message||"")}(o);n=new lI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yp(t,r.document.name),s=ci(r.document.updateTime),o=r.document.createTime?ci(r.document.createTime):ve.min(),a=new jn({mapValue:{fields:r.document.fields}}),l=vn.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new dh(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yp(t,r.document),s=r.readTime?ci(r.readTime):ve.min(),o=vn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new dh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yp(t,r.document),s=r.removedTargetIds||[];n=new dh([],s,i,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aF(i,s),a=r.targetId;n=new aI(a,o)}}return n}function vF(t,e){let n;if(e instanceof nu)n={update:sw(t,e.key,e.value)};else if(e instanceof sI)n={delete:Gm(t,e.key)};else if(e instanceof Ds)n={update:sw(t,e.key,e.data),updateMask:RF(e.fieldMask)};else{if(!(e instanceof iF))return ge();n={verify:Gm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof nd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof kc)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oc)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rd)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ge()}(t,e.precondition)),n}function wF(t,e){return t&&t.length>0?(lt(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ci(i.updateTime):ci(s);return o.isEqual(ve.min())&&(o=ci(s)),new tF(o,i.transformResults||[])}(n,e))):[]}function bF(t,e){return{documents:[Km(t,e.path)]}}function TF(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Km(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Km(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return fI(mi.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Jo(c.field),direction:IF(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Wm(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function EF(t){let e=_F(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lt(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(c){const h=dI(c);return h instanceof mi&&UA(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(h=>function(p){return new td(Zo(p.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,nf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new ed(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new ed(f,h)}(n.endAt)),UL(e,i,o,s,a,"F",l,u)}function AF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zo(n.unaryFilter.field);return Ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zo(n.unaryFilter.field);return Ft.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zo(n.unaryFilter.field);return Ft.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zo(n.unaryFilter.field);return Ft.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return Ft.create(Zo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mi.create(n.compositeFilter.filters.map(r=>dI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function IF(t){return dF[t]}function SF(t){return fF[t]}function CF(t){return pF[t]}function Jo(t){return{fieldPath:t.canonicalString()}}function Zo(t){return an.fromServerFormat(t.fieldPath)}function fI(t){return t instanceof Ft?function(n){if(n.op==="=="){if(z0(n.value))return{unaryFilter:{field:Jo(n.field),op:"IS_NAN"}};if(H0(n.value))return{unaryFilter:{field:Jo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(z0(n.value))return{unaryFilter:{field:Jo(n.field),op:"IS_NOT_NAN"}};if(H0(n.value))return{unaryFilter:{field:Jo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jo(n.field),op:SF(n.op),value:n.value}}}(t):t instanceof mi?function(n){const r=n.getFilters().map(i=>fI(i));return r.length===1?r[0]:{compositeFilter:{op:CF(n.op),filters:r}}}(t):ge()}function RF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cs{constructor(e,n,r,i,s=ve.min(),o=ve.min(),a=Rn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class PF{constructor(e){this.ut=e}}function xF(t){const e=EF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zm(e,e.limit,"L"):e}/**
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
 */class kF{constructor(){this.on=new OF}addToCollectionParentIndex(e,n){return this.on.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Ss.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Ss.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class OF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new hn(ut.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new hn(ut.comparator)).toArray()}}/**
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
 */class Fa{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Fa(0)}static Nn(){return new Fa(-1)}}/**
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
 */class DF{constructor(){this.changes=new Xa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class MF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Yl(r.mutation,i,or.empty(),$t.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,De()).next(()=>r))}getLocalViewOfDocuments(e,n,r=De()){const i=ro();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Al();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ro();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,De()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ni();const o=Xl(),a=function(){return Xl()}();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Ds)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Yl(d.mutation,u,d.mutation.getFieldMask(),$t.now())):o.set(u.key,or.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var c;return a.set(u,new qF(d,(c=o.get(u))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Xl();let i=new _t((o,a)=>o-a),s=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||or.empty();d=a.applyToLocalView(u,d),r.set(l,d);const c=(i.get(a.batchId)||De()).add(l);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,c=YA();d.forEach(h=>{if(!s.has(h)){const f=rI(n.get(h),r.get(h));f!==null&&c.set(h,f),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,c))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):BL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ro());let a=-1,l=s;return o.next(u=>F.forEach(u,(d,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(h=>{l=l.insert(d,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,De())).next(d=>({batchId:a,changes:XA(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let i=Al();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Al();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,l=>{const u=function(c,h){return new rf(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((c,h)=>{o=o.insert(c,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,vn.newInvalidDocument(d)))});let a=Al();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&Yl(d.mutation,u,or.empty(),$t.now()),of(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class NF{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return F.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ci(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:xF(i.bundledQuery),readTime:ci(i.readTime)}}(n)),F.resolve()}}/**
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
 */class VF{constructor(){this.overlays=new _t(de.comparator),this.lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ro();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ro(),s=n.length+1,o=new de(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _t((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=ro(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=ro(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return F.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oF(n,r));let s=this.lr.get(n);s===void 0&&(s=De(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class L_{constructor(){this.hr=new hn(Gt.Pr),this.Ir=new hn(Gt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Gt(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Gt(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new de(new ut([])),r=new Gt(n,e),i=new Gt(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new de(new ut([])),r=new Gt(n,e),i=new Gt(n,e+1);let s=De();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Gt(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Gt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return de.comparator(e.key,n.key)||We(e.gr,n.gr)}static Tr(e,n){return We(e.gr,n.gr)||de.comparator(e.key,n.key)}}/**
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
 */class LF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new hn(Gt.Pr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Gt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Gt(n,0),i=new Gt(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new hn(We);return n.forEach(i=>{const s=new Gt(i,0),o=new Gt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),F.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;de.isDocumentKey(s)||(s=s.child(""));const o=new Gt(new de(s),0);let a=new hn(We);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),F.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){lt(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return F.forEach(n.mutations,i=>{const s=new Gt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Gt(n,0),i=this.yr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FF{constructor(e){this.Cr=e,this.docs=function(){return new _t(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():vn.newInvalidDocument(n))}getEntries(e,n){let r=Ni();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vn.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ni();const o=n.path,a=new de(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AL(EL(d),r)<=0||(i.has(d.key)||of(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ge()}vr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $F(this)}getSize(e){return F.resolve(this.size)}}class $F extends DF{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class UF{constructor(e){this.persistence=e,this.Fr=new Xa(n=>D_(n),q_),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Mr=0,this.Or=new L_,this.targetCount=0,this.Nr=Fa.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),F.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Fa(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.kn(n),F.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Or.containsKey(n))}}/**
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
 */class BF{constructor(e,n){this.Br={},this.overlays={},this.Lr=new P_(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new UF(this),this.indexManager=new kF,this.remoteDocumentCache=function(i){return new FF(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new PF(n),this.Kr=new NF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new LF(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const i=new jF(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class jF extends SL{constructor(e){super(),this.currentSequenceNumber=e}}class F_{constructor(e){this.persistence=e,this.Gr=new L_,this.zr=null}static jr(e){return new F_(e)}get Hr(){if(this.zr)return this.zr;throw ge()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Hr,r=>{const i=de.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,ve.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return F.or([()=>F.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class $_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=De(),i=De();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $_(e,n.fromCache,r,i)}}/**
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
 */class HF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zF{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new HF;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(hl()<=Ne.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Qo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),F.resolve()):(hl()<=Ne.DEBUG&&re("QueryEngine","Query:",Qo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(hl()<=Ne.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Qo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ai(n))):F.resolve())}zi(e,n){if(X0(n))return F.resolve(null);let r=ai(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zm(n,null,"F"),r=ai(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=De(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,zm(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return X0(n)||i.isEqual(ve.min())?F.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?F.resolve(null):(hl()<=Ne.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qo(n)),this.Xi(e,o,n,TL(i,-1)).next(a=>a))})}Yi(e,n){let r=new hn(GA(e));return n.forEach((i,s)=>{of(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return hl()<=Ne.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Qo(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ss.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class WF{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new _t(We),this.ns=new Xa(s=>D_(s),q_),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MF(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function GF(t,e,n,r){return new WF(t,e,n,r)}async function mI(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=De();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function KF(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const c=u.batch,h=c.keys();let f=F.resolve();return h.forEach(p=>{f=f.next(()=>d.getEntry(l,p)).next(m=>{const g=u.docVersions.get(p);lt(g!==null),m.version.compareTo(g)<0&&(c.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),d.addEntry(m)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=De();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gI(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function XF(t,e){const n=Ee(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((d,c)=>{const h=i.get(c);if(!h)return;a.push(n.qr.removeMatchingKeys(s,d.removedDocuments,c).next(()=>n.qr.addMatchingKeys(s,d.addedDocuments,c)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(c)!==null?f=f.withResumeToken(Rn.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):d.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(d.resumeToken,r)),i=i.insert(c,f),function(m,g,_){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,f,d)&&a.push(n.qr.updateTargetData(s,f))});let l=Ni(),u=De();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(YF(s,o,e.documentUpdates).next(d=>{l=d.us,u=d.cs})),!r.isEqual(ve.min())){const d=n.qr.getLastRemoteSnapshotVersion(s).next(c=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function YF(t,e,n){let r=De(),i=De();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ni();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ve.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function QF(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function JF(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new cs(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Ym(t,e,n){const r=Ee(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!tu(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function ow(t,e,n){const r=Ee(t);let i=ve.min(),s=De();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const c=Ee(l),h=c.ns.get(d);return h!==void 0?F.resolve(c.ts.get(h)):c.qr.getTargetData(u,d)}(r,o,ai(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:ve.min(),n?s:De())).next(a=>(ZF(r,HL(e),a),{documents:a,ls:s})))}function ZF(t,e,n){let r=t.rs.get(e)||ve.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class aw{constructor(){this.activeTargetIds=YL()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class e${constructor(){this.eo=new aw,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new aw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class t${ro(e){}shutdown(){}}/**
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
 */class lw{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bu=null;function vp(){return Bu===null?Bu=function(){return 268435456+Math.round(2147483648*Math.random())}():Bu++,"0x"+Bu.toString(16)}/**
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
 */const n$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class r${constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const pn="WebChannelConnection";class i$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=vp(),l=this.So(n,r);re("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(d=>(re("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Ma("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ka}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=n$[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=vp();return new Promise((o,a)=>{const l=new hL;l.setWithCredentials(!0),l.listenOnce(lL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case _p.NO_ERROR:const d=l.getResponseJson();re(pn,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case _p.TIMEOUT:re(pn,`RPC '${e}' ${s} timed out`),a(new ce(L.DEADLINE_EXCEEDED,"Request time out"));break;case _p.HTTP_ERROR:const c=l.getStatus();if(re(pn,`RPC '${e}' ${s} failed with status:`,c,"response text:",l.getResponseText()),c>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const p=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(f.status);a(new ce(p,f.message))}else a(new ce(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce(L.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{re(pn,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);re(pn,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=vp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oL(),a=aL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new uL({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");re(pn,`Creating RPC '${e}' stream ${i}: ${d}`,l);const c=o.createWebChannel(d,l);let h=!1,f=!1;const p=new r$({co:g=>{f?re(pn,`Not sending because RPC '${e}' stream ${i} is closed:`,g):(h||(re(pn,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),re(pn,`RPC '${e}' stream ${i} sending:`,g),c.send(g))},lo:()=>c.close()}),m=(g,_,y)=>{g.listen(_,T=>{try{y(T)}catch(v){setTimeout(()=>{throw v},0)}})};return m(c,Fu.EventType.OPEN,()=>{f||re(pn,`RPC '${e}' stream ${i} transport opened.`)}),m(c,Fu.EventType.CLOSE,()=>{f||(f=!0,re(pn,`RPC '${e}' stream ${i} transport closed`),p.Ro())}),m(c,Fu.EventType.ERROR,g=>{f||(f=!0,Ma(pn,`RPC '${e}' stream ${i} transport errored:`,g),p.Ro(new ce(L.UNAVAILABLE,"The operation could not be completed")))}),m(c,Fu.EventType.MESSAGE,g=>{var _;if(!f){const y=g.data[0];lt(!!y);const T=y,v=T.error||((_=T[0])===null||_===void 0?void 0:_.error);if(v){re(pn,`RPC '${e}' stream ${i} received error:`,v);const S=v.status;let k=function(R){const M=kt[R];if(M!==void 0)return oI(M)}(S),P=v.message;k===void 0&&(k=L.INTERNAL,P="Unknown error status: "+S+" with message "+v.message),f=!0,p.Ro(new ce(k,P)),c.close()}else re(pn,`RPC '${e}' stream ${i} received:`,y),p.Vo(y)}}),m(a,cL.STAT_EVENT,g=>{g.stat===F0.PROXY?re(pn,`RPC '${e}' stream ${i} detected buffering proxy`):g.stat===F0.NOPROXY&&re(pn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function wp(){return typeof document<"u"?document:null}/**
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
 */function uf(t){return new mF(t,!0)}/**
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
 */class _I{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class yI{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new _I(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Mi(n.toString()),Mi("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new ce(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s$ extends yI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=yF(this.serializer,e),r=function(s){if(!("targetChange"in s))return ve.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?ci(o.readTime):ve.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Xm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Hm(l)?{documents:bF(s,l)}:{query:TF(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cI(s,o.resumeToken);const u=Wm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=id(s,o.snapshotVersion.toTimestamp());const u=Wm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=AF(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Xm(this.serializer),n.removeTarget=e,this.e_(n)}}class o$ extends yI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(lt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=wF(e.writeResults,e.commitTime),r=ci(e.commitTime);return this.listener.I_(r,n)}return lt(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Xm(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vF(this.serializer,r))};this.e_(n)}}/**
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
 */class a$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new ce(L.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(L.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ce(L.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class l${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Mi(n),this.f_=!1):re("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class c${constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{$o(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Ee(l);u.C_.add(4),await iu(u),u.M_.set("Unknown"),u.C_.delete(4),await hf(u)}(this))})}),this.M_=new l$(r,i)}}async function hf(t){if($o(t))for(const e of t.v_)await e(!0)}async function iu(t){for(const e of t.v_)await e(!1)}function vI(t,e){const n=Ee(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),j_(n)?B_(n):Ya(n).Ho()&&U_(n,e))}function wI(t,e){const n=Ee(t),r=Ya(n);n.D_.delete(e),r.Ho()&&bI(n,e),n.D_.size===0&&(r.Ho()?r.Zo():$o(n)&&n.M_.set("Unknown"))}function U_(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ya(t).u_(e)}function bI(t,e){t.x_.Oe(e),Ya(t).c_(e)}function B_(t){t.x_=new hF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ya(t).start(),t.M_.g_()}function j_(t){return $o(t)&&!Ya(t).jo()&&t.D_.size>0}function $o(t){return Ee(t).C_.size===0}function TI(t){t.x_=void 0}async function u$(t){t.D_.forEach((e,n)=>{U_(t,e)})}async function h$(t,e){TI(t),j_(t)?(t.M_.w_(e),B_(t)):t.M_.set("Unknown")}async function d$(t,e,n){if(t.M_.set("Online"),e instanceof lI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sd(t,r)}else if(e instanceof dh?t.x_.$e(e):e instanceof aI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ve.min()))try{const r=await gI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.D_.get(u);d&&s.D_.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=s.D_.get(l);if(!d)return;s.D_.set(l,d.withResumeToken(Rn.EMPTY_BYTE_STRING,d.snapshotVersion)),bI(s,l);const c=new cs(d.target,l,u,d.sequenceNumber);U_(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await sd(t,r)}}async function sd(t,e,n){if(!tu(e))throw e;t.C_.add(1),await iu(t),t.M_.set("Offline"),n||(n=()=>gI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await hf(t)})}function EI(t,e){return e().catch(n=>sd(t,n,e))}async function df(t){const e=Ee(t),n=Rs(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;f$(e);)try{const i=await QF(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,p$(e,i)}catch(i){await sd(e,i)}AI(e)&&II(e)}function f$(t){return $o(t)&&t.b_.length<10}function p$(t,e){t.b_.push(e);const n=Rs(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function AI(t){return $o(t)&&!Rs(t).jo()&&t.b_.length>0}function II(t){Rs(t).start()}async function m$(t){Rs(t).E_()}async function g$(t){const e=Rs(t);for(const n of t.b_)e.P_(n.mutations)}async function _$(t,e,n){const r=t.b_.shift(),i=M_.from(r,e,n);await EI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await df(t)}async function y$(t,e){e&&Rs(t).h_&&await async function(r,i){if(function(o){return lF(o)&&o!==L.ABORTED}(i.code)){const s=r.b_.shift();Rs(r).Yo(),await EI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await df(r)}}(t,e),AI(t)&&II(t)}async function cw(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=$o(n);n.C_.add(3),await iu(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await hf(n)}async function v$(t,e){const n=Ee(t);e?(n.C_.delete(2),await hf(n)):e||(n.C_.add(2),await iu(n),n.M_.set("Unknown"))}function Ya(t){return t.O_||(t.O_=function(n,r,i){const s=Ee(n);return s.A_(),new s$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:u$.bind(null,t),Io:h$.bind(null,t),a_:d$.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),j_(t)?B_(t):t.M_.set("Unknown")):(await t.O_.stop(),TI(t))})),t.O_}function Rs(t){return t.N_||(t.N_=function(n,r,i){const s=Ee(n);return s.A_(),new o$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:m$.bind(null,t),Io:y$.bind(null,t),T_:g$.bind(null,t),I_:_$.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await df(t)):(await t.N_.stop(),t.b_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class H_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new H_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function z_(t,e){if(Mi("AsyncQueue",`${e}: ${t}`),tu(t))return new ce(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class wa{constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=Al(),this.sortedSet=new _t(this.comparator)}static emptySet(e){return new wa(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wa)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new wa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class uw{constructor(){this.B_=new _t(de.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ge():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class $a{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $a(e,n,wa.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class w${constructor(){this.k_=void 0,this.listeners=[]}}class b${constructor(){this.queries=new Xa(e=>WA(e),sf),this.onlineState="Unknown",this.q_=new Set}}async function T$(t,e){const n=Ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new w$),i)try{s.k_=await n.onListen(r)}catch(o){const a=z_(o,`Initialization of query '${Qo(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&W_(n)}async function E$(t,e){const n=Ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function A$(t,e){const n=Ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&W_(n)}function I$(t,e,n){const r=Ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function W_(t){t.q_.forEach(e=>{e.next()})}class S${constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $a(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=$a.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class SI{constructor(e){this.key=e}}class CI{constructor(e){this.key=e}}class C${constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=De(),this.mutatedKeys=De(),this._a=GA(e),this.aa=new wa(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new uw,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,c)=>{const h=i.get(d),f=of(this.query,c)?c:null,p=!!h&&this.mutatedKeys.has(h.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;h&&f?h.data.isEqual(f.data)?p!==m&&(r.track({type:3,doc:f}),g=!0):this.ha(h,f)||(r.track({type:2,doc:f}),g=!0,(l&&this._a(f,l)>0||u&&this._a(f,u)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),g=!0):h&&!f&&(r.track({type:1,doc:h}),g=!0,(l||u)&&(a=!0)),g&&(f?(o=o.add(f),s=m?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,d)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return p(h)-p(f)}(u.type,d.type)||this._a(u.doc,d.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,s.length!==0||l?{snapshot:new $a(this.query,e.aa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new uw,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=De(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new CI(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new SI(r))}),n}da(e){this.ia=e.ls,this.oa=De();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return $a.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class R${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class P${constructor(e){this.key=e,this.Ra=!1}}class x${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Xa(a=>WA(a),sf),this.fa=new Map,this.ga=new Set,this.pa=new _t(de.comparator),this.ya=new Map,this.wa=new L_,this.Sa={},this.ba=new Map,this.Da=Fa.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function k$(t,e){const n=U$(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await JF(n.localStore,ai(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await O$(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&vI(n.remoteStore,o)}return i}async function O$(t,e,n,r,i){t.va=(c,h,f)=>async function(m,g,_,y){let T=g.view.ca(_);T.Zi&&(T=await ow(m.localStore,g.query,!1).then(({documents:k})=>g.view.ca(k,T)));const v=y&&y.targetChanges.get(g.targetId),S=g.view.applyChanges(T,m.isPrimaryClient,v);return dw(m,g.targetId,S.Ta),S.snapshot}(t,c,h,f);const s=await ow(t.localStore,e,!0),o=new C$(e,s.ls),a=o.ca(s.documents),l=ru.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);dw(t,n,u.Ta);const d=new R$(e,n,o);return t.ma.set(e,d),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function D$(t,e){const n=Ee(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!sf(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ym(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),wI(n.remoteStore,r.targetId),Qm(n,r.targetId)}).catch(eu)):(Qm(n,r.targetId),await Ym(n.localStore,r.targetId,!0))}async function q$(t,e,n){const r=B$(t);try{const i=await function(o,a){const l=Ee(o),u=$t.now(),d=a.reduce((f,p)=>f.add(p.key),De());let c,h;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Ni(),m=De();return l.ss.getEntries(f,d).next(g=>{p=g,p.forEach((_,y)=>{y.isValidDocument()||(m=m.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(g=>{c=g;const _=[];for(const y of a){const T=rF(y,c.get(y.key).overlayedDocument);T!=null&&_.push(new Ds(y.key,T,LA(T.value.mapValue),li.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,_,a)}).next(g=>{h=g;const _=g.applyToLocalDocumentSet(c,m);return l.documentOverlayCache.saveOverlays(f,g.batchId,_)})}).then(()=>({batchId:h.batchId,changes:XA(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new _t(We)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await su(r,i.changes),await df(r.remoteStore)}catch(i){const s=z_(i,"Failed to persist write");n.reject(s)}}async function RI(t,e){const n=Ee(t);try{const r=await XF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?lt(o.Ra):i.removedDocuments.size>0&&(lt(o.Ra),o.Ra=!1))}),await su(n,r,e)}catch(r){await eu(r)}}function hw(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Ee(o);l.onlineState=a;let u=!1;l.queries.forEach((d,c)=>{for(const h of c.listeners)h.Q_(a)&&(u=!0)}),u&&W_(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function M$(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new _t(de.comparator);o=o.insert(s,vn.newNoDocument(s,ve.min()));const a=De().add(s),l=new cf(ve.min(),new Map,new _t(We),o,a);await RI(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),G_(r)}else await Ym(r.localStore,e,!1).then(()=>Qm(r,e,n)).catch(eu)}async function N$(t,e){const n=Ee(t),r=e.batch.batchId;try{const i=await KF(n.localStore,e);xI(n,r,null),PI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await su(n,i)}catch(i){await eu(i)}}async function V$(t,e,n){const r=Ee(t);try{const i=await function(o,a){const l=Ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(c=>(lt(c!==null),d=c.keys(),l.mutationQueue.removeMutationBatch(u,c))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);xI(r,e,n),PI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await su(r,i)}catch(i){await eu(i)}}function PI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function xI(t,e,n){const r=Ee(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Qm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||kI(t,r)})}function kI(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(wI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),G_(t))}function dw(t,e,n){for(const r of n)r instanceof SI?(t.wa.addReference(r.key,e),L$(t,r)):r instanceof CI?(re("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||kI(t,r.key)):ge()}function L$(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(re("SyncEngine","New document in limbo: "+n),t.ga.add(r),G_(t))}function G_(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new de(ut.fromString(e)),r=t.Da.next();t.ya.set(r,new P$(n)),t.pa=t.pa.insert(n,r),vI(t.remoteStore,new cs(ai(zA(n.path)),r,"TargetPurposeLimboResolution",P_._e))}}async function su(t,e,n){const r=Ee(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=$_.Qi(l.targetId,u);s.push(d)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const d=Ee(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>F.forEach(u,h=>F.forEach(h.ki,f=>d.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>F.forEach(h.qi,f=>d.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!tu(c))throw c;re("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const f=d.ts.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);d.ts=d.ts.insert(h,m)}}}(r.localStore,s))}async function F$(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await mI(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new ce(L.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await su(n,r._s)}}function $$(t,e){const n=Ee(t),r=n.ya.get(e);if(r&&r.Ra)return De().add(r.key);{let i=De();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function U$(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=M$.bind(null,e),e.Va.a_=A$.bind(null,e.eventManager),e.Va.Fa=I$.bind(null,e.eventManager),e}function B$(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=N$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V$.bind(null,e),e}class fw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=uf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return GF(this.persistence,new zF,e.initialUser,this.serializer)}createPersistence(e){return new BF(F_.jr,this.serializer)}createSharedClientState(e){return new e$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class j${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F$.bind(null,this.syncEngine),await v$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new b$}()}createDatastore(e){const n=uf(e.databaseInfo.databaseId),r=function(s){return new i$(s)}(e.databaseInfo);return function(s,o,a,l){return new a$(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new c$(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>hw(this.syncEngine,n,0),function(){return lw.D()?new lw:new t$}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,d){const c=new x$(i,s,o,a,l,u);return d&&(c.Ca=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Ee(n);re("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await iu(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class H${constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Mi("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class z${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_n.UNAUTHENTICATED,this.clientId=MA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{re("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(re("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=z_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bp(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await G$(t);re("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cw(e.remoteStore,s)),t._onlineComponents=e}function W$(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function G$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await bp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!W$(n))throw n;Ma("Error using user provided cache. Falling back to memory cache: "+n),await bp(t,new fw)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await bp(t,new fw);return t._offlineComponents}async function OI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await pw(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await pw(t,new j$))),t._onlineComponents}function K$(t){return OI(t).then(e=>e.syncEngine)}async function X$(t){const e=await OI(t),n=e.eventManager;return n.onListen=k$.bind(null,e.syncEngine),n.onUnlisten=D$.bind(null,e.syncEngine),n}function Y$(t,e,n={}){const r=new vs;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new H$({next:h=>{o.enqueueAndForget(()=>E$(s,c)),h.fromCache&&l.source==="server"?u.reject(new ce(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new S$(a,d,{includeMetadataChanges:!0,J_:!0});return T$(s,c)}(await X$(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function DI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const mw=new Map;/**
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
 */function qI(t,e,n){if(!n)throw new ce(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Q$(t,e,n,r){if(e===!0&&r===!0)throw new ce(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gw(t){if(!de.isDocumentKey(t))throw new ce(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _w(t){if(de.isDocumentKey(t))throw new ce(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function K_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function ko(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=K_(t);throw new ce(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class yw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Q$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ff{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fL;switch(r.type){case"firstParty":return new _L(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mw.get(n);r&&(re("ComponentProvider","Removing Datastore"),mw.delete(n),r.terminate())}(this),Promise.resolve()}}function J$(t,e,n,r={}){var i;const s=(t=ko(t,ff))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ma("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_n.MOCK_USER;else{a=JE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _n(u)}t._authCredentials=new pL(new qA(a,l))}}/**
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
 */class pf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pf(this.firestore,e,this._query)}}class ur{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ws(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ur(this.firestore,e,this._key)}}class ws extends pf{constructor(e,n,r){super(e,n,zA(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ur(this.firestore,null,new de(e))}withConverter(e){return new ws(this.firestore,e,this._path)}}function Si(t,e,...n){if(t=gt(t),qI("collection","path",e),t instanceof ff){const r=ut.fromString(e,...n);return _w(r),new ws(t,null,r)}{if(!(t instanceof ur||t instanceof ws))throw new ce(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ut.fromString(e,...n));return _w(r),new ws(t.firestore,null,r)}}function Ji(t,e,...n){if(t=gt(t),arguments.length===1&&(e=MA.newId()),qI("doc","path",e),t instanceof ff){const r=ut.fromString(e,...n);return gw(r),new ur(t,null,new de(r))}{if(!(t instanceof ur||t instanceof ws))throw new ce(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ut.fromString(e,...n));return gw(r),new ur(t.firestore,t instanceof ws?t.converter:null,new de(r))}}/**
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
 */class Z${constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new _I(this,"async_queue_retry"),this.iu=()=>{const n=wp();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=wp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=wp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new vs;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!tu(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Mi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=H_.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&ge()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class mf extends ff{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Z$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||NI(this),this._firestoreClient.terminate()}}function X_(t,e){const n=typeof t=="object"?t:Ld(),r=typeof t=="string"?t:e||"(default)",i=xs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=XE("firestore");s&&J$(i,...s)}return i}function MI(t){return t._firestoreClient||NI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function NI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,d){return new PL(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,DI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new z$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ua{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ua(Rn.fromBase64String(e))}catch(n){throw new ce(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ua(Rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Y_{constructor(e){this._methodName=e}}/**
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
 */class Q_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return We(this._lat,e._lat)||We(this._long,e._long)}}/**
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
 */const e4=/^__.*__$/;class t4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new nu(e,this.data,n,this.fieldTransforms)}}class VI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function LI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class J_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new J_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return od(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(LI(this.Iu)&&e4.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class n4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uf(e)}pu(e,n,r,i=!1){return new J_({Iu:e,methodName:n,gu:r,path:an.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function FI(t){const e=t._freezeSettings(),n=uf(t._databaseId);return new n4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function r4(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Z_("Data must be an object, but it was:",o,r);const a=$I(r,o);let l,u;if(s.merge)l=new or(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const c of s.mergeFields){const h=Jm(e,c,n);if(!o.contains(h))throw new ce(L.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);BI(d,h)||d.push(h)}l=new or(d),u=o.fieldTransforms.filter(c=>l.covers(c.field))}else l=null,u=o.fieldTransforms;return new t4(new jn(a),l,u)}class _f extends Y_{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _f}}function i4(t,e,n,r){const i=t.pu(1,e,n);Z_("Data must be an object, but it was:",i,r);const s=[],o=jn.empty();Fo(r,(l,u)=>{const d=ey(e,l,n);u=gt(u);const c=i.Ru(d);if(u instanceof _f)s.push(d);else{const h=yf(u,c);h!=null&&(s.push(d),o.set(d,h))}});const a=new or(s);return new VI(o,a,i.fieldTransforms)}function s4(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Jm(e,r,n)],l=[i];if(s.length%2!=0)throw new ce(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Jm(e,s[h])),l.push(s[h+1]);const u=[],d=jn.empty();for(let h=a.length-1;h>=0;--h)if(!BI(u,a[h])){const f=a[h];let p=l[h];p=gt(p);const m=o.Ru(f);if(p instanceof _f)u.push(f);else{const g=yf(p,m);g!=null&&(u.push(f),d.set(f,g))}}const c=new or(u);return new VI(d,c,o.fieldTransforms)}function yf(t,e){if(UI(t=gt(t)))return Z_("Unsupported field value:",e,t),$I(t,e);if(t instanceof Y_)return function(r,i){if(!LI(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=yf(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$t.fromDate(r);return{timestampValue:id(i.serializer,s)}}if(r instanceof $t){const s=new $t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:id(i.serializer,s)}}if(r instanceof Q_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ua)return{bytesValue:cI(i.serializer,r._byteString)};if(r instanceof ur){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:V_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${K_(r)}`)}(t,e)}function $I(t,e){const n={};return NA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fo(t,(r,i)=>{const s=yf(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function UI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $t||t instanceof Q_||t instanceof Ua||t instanceof ur||t instanceof Y_)}function Z_(t,e,n){if(!UI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=K_(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Jm(t,e,n){if((e=gt(e))instanceof gf)return e._internalPath;if(typeof e=="string")return ey(t,e);throw od("Field path arguments must be of type string or ",t,!1,void 0,n)}const o4=new RegExp("[~\\*/\\[\\]]");function ey(t,e,n){if(e.search(o4)>=0)throw od(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gf(...e.split("."))._internalPath}catch{throw od(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function od(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ce(L.INVALID_ARGUMENT,a+t+l)}function BI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ur(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new a4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(HI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class a4 extends jI{data(){return super.data()}}function HI(t,e){return typeof e=="string"?ey(t,e):e instanceof gf?e._internalPath:e._delegate._internalPath}/**
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
 */function l4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class c4{convertValue(e,n="none"){switch(xo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Po(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Q_(qt(e.latitude),qt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=k_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Rc(e));default:return null}}convertTimestamp(e){const n=Cs(e);return new $t(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ut.fromString(e);lt(pI(r));const i=new Pc(r.get(1),r.get(3)),s=new de(r.popFirst(5));return i.isEqual(n)||Mi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function u4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ju{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class h4 extends jI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(HI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fh extends h4{data(e={}){return super.data(e)}}class d4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ju(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fh(this._firestore,this._userDataWriter,r.key,r,new ju(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new fh(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ju(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new fh(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ju(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:f4(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function f4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}class p4 extends c4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ua(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ur(this.firestore,null,n)}}function go(t){t=ko(t,pf);const e=ko(t.firestore,mf),n=MI(e),r=new p4(e);return l4(t._query),Y$(n,t._query).then(i=>new d4(e,r,t,i))}function vw(t,e,n){t=ko(t,ur);const r=ko(t.firestore,mf),i=u4(t.converter,e,n);return zI(r,[r4(FI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,li.none())])}function Tp(t,e,n,...r){t=ko(t,ur);const i=ko(t.firestore,mf),s=FI(i);let o;return o=typeof(e=gt(e))=="string"||e instanceof gf?s4(s,"updateDoc",t._key,e,n,r):i4(s,"updateDoc",t._key,e),zI(i,[o.toMutation(t._key,li.exists(!0))])}function zI(t,e){return function(r,i){const s=new vs;return r.asyncQueue.enqueueAndForget(async()=>q$(await K$(r),i,s)),s.promise}(MI(t),e)}(function(e,n=!0){(function(i){Ka=i})(Vo),Br(new Cr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new mf(new mL(r.getProvider("auth-internal")),new vL(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pc(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Gn($0,"4.3.2",e),Gn($0,"4.3.2","esm2017")})();const m4="/assets/shaktiman-8e90cfa6.png";const g4={apiKey:"AIzaSyDdVa3kY-11_jpsT_Fw6wBXPq4BBm7M_0g",authDomain:"verite-45774.firebaseapp.com",projectId:"verite-45774",storageBucket:"verite-45774.appspot.com",messagingSenderId:"340822673051",appId:"1:340822673051:web:254f4d49dca48aef7ce83e",measurementId:"G-K8G599E418"},_4=Vd(g4),ww=X_(_4),y4={components:{Card:sV,Header:Ui},data(){return{games:null}},mounted(){this.fetchGames()},methods:{async fetchGames(){const t=await Si(ww,"games"),e=await go(t),n=[];await Promise.all(e.docs.map(async r=>{const i=Si(Ji(ww,"games",r.id),"teams"),s=await go(i),o={id:r.id,name:r.data().game_name,poster:r.data().game_poster,rules:r.data().rules,scores:s.docs.map(a=>({team_name:a.data().team_name,points:a.data().points})).sort((a,l)=>l.points-a.points)};n.push(o)})),this.games=n}}},vf=t=>(Li("data-v-07fb9d6e"),t=t(),Fi(),t),v4=vf(()=>A("div",{class:"tagline z-2 relative cursor-pointer"},[A("div",{onclick:"window.location.href='games/vertle'",class:"tag z-50"},[A("a",{href:"/games/vertle"}," Guess today's word in vertle!! ")])],-1)),w4=vf(()=>A("div",{class:"paper-bg"},null,-1)),b4=vf(()=>A("div",{class:"banner-img w-screen absolute"},[A("img",{src:m4,class:"shadow",alt:"",srcset:""})],-1)),T4=vf(()=>A("h1",{class:"m-[20px] text-[10vw] text-center mt-[32%] sm:text-7xl sm:mt-[30%]"},"Games",-1)),E4={class:"flex flex-col w-screen justify-center items-center mt-10"};function A4(t,e,n,r,i,s){const o=Je("Header"),a=Je("card");return K(),Q(Ae,null,[we(o),v4,w4,b4,T4,A("div",E4,[(K(!0),Q(Ae,null,Mt(i.games,(l,u)=>(K(),qo(a,{class:"card sm:w-[90%]",key:u,game:l},null,8,["game"]))),128))])],64)}const I4=it(y4,[["render",A4],["__scopeId","data-v-07fb9d6e"]]);const S4={components:{TextMorph:Yg}},C4={class:"flex gap-10 mt-60 flex-col justify-center items-center w-[100%]"};function R4(t,e,n,r,i,s){const o=Je("TextMorph");return K(),Q("div",C4,[we(o,{class:"text-8xl coming-soon"})])}const P4=it(S4,[["render",R4]]),x4={components:{Content:P4,Header:Ui}};function k4(t,e,n,r,i,s){const o=Je("Header"),a=Je("Content");return K(),Q(Ae,null,[we(o),we(a)],64)}const bw=it(x4,[["render",k4]]);const O4=t=>(Li("data-v-435df2cc"),t=t(),Fi(),t),D4={class:"sc-content"},q4=O4(()=>A("h1",{class:"title"},"V E R T L E",-1)),M4=["id"],N4={class:"keyboard sm:w-full"},V4={class:"row"},L4=["id"],F4={class:"row"},$4=["id"],U4={class:"row"},B4=["id"],j4={__name:"Content",setup(t){const e=new Date().getDate().toString(),n=ms.words[e];n.length;const r=Array.from(n,y=>y.toUpperCase()),i=[0,1,2,3,4,5,6,7],s=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]];console.log(r);let o=0,a=!1,l=!1,u=[],d=[],c=[],h=[];const f=yn(-1),p=yn([]);function m(y){l||f.value%r.length==r.length-1&&!a||(f.value+=1,p.value=[...p.value,...y.target.innerHTML],console.log(f.value,o))}function g(){l||(f.value+1)/r.length!=o&&(f.value-=1,(f.value+1)%r.length==0&&(a=!0),p.value=p.value.slice(0,-1),console.log(f.value,o))}function _(){if((f.value+1)%r.length!=0)return;c=[],u=[],h=[],d=[];let y=f.value+1-r.length;const T=p.value.slice(y,f.value+1);T.join("");for(let v=0;v<r.length;v++)for(let S=0;S<r.length;S++)r[v]===T[S]&&(v==S?c.includes(y+S)||(d.includes(T[S])||(d=d.filter(k=>k!=T[S]),h=h.filter(k=>k!=y+S)),c.push(y+S),u.includes(T[S])||u.push(T[S])):d.includes(T[S])||(h.push(y+S),d.includes(T[S])||d.push(T[S])));T.forEach(v=>{document.getElementById(v).style.backgroundColor="lightgrey"}),h.forEach(v=>{const S=v.toString();document.getElementById(S).style.backgroundColor="orange"}),d.forEach(v=>{document.getElementById(v).style.backgroundColor="orange"}),c.forEach(v=>{const S=v.toString();document.getElementById(S).style.backgroundColor="lightgreen"}),u.forEach(v=>{document.getElementById(v).style.backgroundColor="lightgreen"}),o+=1,a=!0,(c.length==r.length||i==8)&&(l=!0)}return document.addEventListener("keydown",y=>{if(console.log(`isGameOver: ${l}`),l)return;const T=/^[A-Za-z]$/;if(y.key=="Backspace")g();else if(y.key=="Enter")(f.value+1)%r.length==0&&_();else if(T.test(y.key)){if(f.value%r.length==r.length-1&&!a)return;a=!1,f.value+=1,p.value=[...p.value,...y.key.toUpperCase()],console.log(f.value,o)}},!1),(y,T)=>(K(),Q("div",D4,[q4,(K(),Q(Ae,null,Mt(i,v=>A("div",{class:"grid",key:v},[(K(!0),Q(Ae,null,Mt(xi(r),(S,k)=>(K(),Q("div",{class:"character-container",id:v*xi(r).length+k},rt(p.value[v*xi(r).length+k])+" ",9,M4))),256))])),64)),A("div",N4,[A("div",V4,[(K(!0),Q(Ae,null,Mt(s[0],v=>(K(),Q("span",{class:"key",id:v,onClick:m},rt(v),9,L4))),256))]),A("div",F4,[(K(!0),Q(Ae,null,Mt(s[1],v=>(K(),Q("span",{class:"key",id:v,onClick:m},rt(v),9,$4))),256))]),A("div",U4,[(K(!0),Q(Ae,null,Mt(s[2],v=>(K(),Q("span",{class:"key",id:v,onClick:m},rt(v),9,B4))),256)),A("span",{class:"key",onClick:g},"Del"),A("span",{class:"key",onClick:_},"OK")])])]))}},H4=it(j4,[["__scopeId","data-v-435df2cc"]]),z4={components:{Content:H4,Header:Ui}},W4={class:"secretcode"};function G4(t,e,n,r,i,s){const o=Je("Header"),a=Je("Content");return K(),Q("div",W4,[we(o),we(a)])}const K4=it(z4,[["render",G4]]);const X4={components:{MainClone:tE,Section1:RE,Section2:PE,TextMorph:Yg,Player:kE,Poster:OE},beforeRouteLeave(t,e,n){console.log(t),n()}},Y4={class:"section-3"};function Q4(t,e,n,r,i,s){const o=Je("MainClone"),a=Je("Section1"),l=Je("Player"),u=Je("Poster");return K(),Q(Ae,null,[we(o),we(a),A("span",Y4,[we(l),we(u)])],64)}const J4=it(X4,[["render",Q4],["__scopeId","data-v-0c862d59"]]),WI=[{name:"Mario Mavericks",tagline:"Old School, New Rules, Let's a Go!",logo:"/img/logo/Mario Mavericks.png",captains:[{name:"Reshma Sankar Thekkepatt",photo:"pager.jpg"},{name:"Saji C S",photo:"captain2.jpg"}],"capt-img":"/img/captains/Mario Mavericks.JPG",members:[{name:"Nevin Perumana",photo:"member1.jpg"},{name:"Veena Nair",photo:"member2.jpg"},{name:"Sree Lakshmi E M",photo:"member3.jpg"},{name:"Nimith NA",photo:"member4.jpg"},{name:"Abdul Bijur V A",photo:"member5.jpg"},{name:"Nithya Mohan",photo:"member6.jpg"},{name:"Pratheek Mammen John",photo:"member7.jpg"},{name:"Manuprasad S",photo:"member8.jpg"},{name:"Vishnu Ganeshan",photo:"member9.jpg"},{name:"Jince Martin Kalarickal",photo:"member10.jpg"},{name:"Sruthi Cheruparamadathil",photo:"member11.jpg"},{name:"Aju Viswanathan",photo:"member12.jpg"},{name:"Jaison Philip Jacob",photo:"member13.jpg"},{name:"Asha P",photo:"member14.jpg"},{name:"Mohamed Aslam",photo:"member15.jpg"},{name:"Ramkrishna Yadav",photo:"member16.jpg"},{name:"Tharun Surendran",photo:"member17.jpg"},{name:"Arvind Bhandari",photo:"member18.jpg"},{name:"Pulkit Sachdeva",photo:"member19.jpg"},{name:"Priyanka S",photo:"member20.jpg"},{name:"Ashna Thomson",photo:"member21.jpg"},{name:"Steffi Joseph",photo:"member22.jpg"},{name:"Tasneem Dohadwala",photo:"member23.jpg"},{name:"Monish Ramappa Salian",photo:"member24.jpg"},{name:"Annie Jaimy",photo:"member25.jpg"},{name:"Amal Tomy",photo:"member26.jpg"},{name:"Gokul P Dinesh",photo:"member27.jpg"},{name:"Farhath Sulthana Jamal",photo:"member28.jpg"},{name:"Hridika K V",photo:"member29.jpg"}]},{name:"Udaan",tagline:"Flying High",logo:"/img/logo/Udaan.jpeg",captains:[{name:"Arun J Olickal",photo:"sooper-11.jpg"},{name:"Dhanu M Francis",photo:"captain2.jpg"}],"capt-img":"/img/captains/Udaan.JPG",members:[{name:"Shamsuddin T U",photo:"member1.jpg"},{name:"Jyoti C",photo:"member2.jpg"},{name:"Bharath S",photo:"member3.jpg"},{name:"Vishakh Raj",photo:"member4.jpg"},{name:"Geo Xavier",photo:"member5.jpg"},{name:"Anita Anna Paul",photo:"member6.jpg"},{name:"Joel George",photo:"member7.jpg"},{name:"Clinton NJ",photo:"member8.jpg"},{name:"Sreehari P",photo:"member9.jpg"},{name:"Sangeeth K S",photo:"member10.jpg"},{name:"Neeraj Singh",photo:"member11.jpg"},{name:"Rajesh Rajan",photo:"member12.jpg"},{name:"Rakhi J Nair",photo:"member13.jpg"},{name:"Kunal Agrawal",photo:"member14.jpg"},{name:"Fathima Kauzar N A",photo:"member15.jpg"},{name:"Ananda Krishnan Vijay",photo:"member16.jpg"},{name:"Ceeon Karian",photo:"member17.jpg"},{name:"Sesharaj Venkitaraman",photo:"member18.jpg"},{name:"Paul Xavier",photo:"member19.jpg"},{name:"Ambili Robin",photo:"member20.jpg"},{name:"Malvika S S",photo:"member21.jpg"},{name:"Vinod Sivashankaran",photo:"member22.jpg"},{name:"Chippy Mary John",photo:"member23.jpg"},{name:"Anjaly Neduvelil Shaji",photo:"member24.jpg"},{name:"Shyamkrishnan S N",photo:"member25.jpg"},{name:"Anand Ajith",photo:"member26.jpg"},{name:"Sophia Badusha",photo:"member27.jpg"},{name:"Rojer King Alex",photo:"member28.jpg"}]},{name:"Kattan Chai",tagline:"Kattaku Katta",logo:"/img/logo/Kattan Chai.png",captains:[{name:"Akshay Rojan",photo:"/vite.svg"},{name:"Annie Anitha Alfred",photo:"captain2.jpg"}],"capt-img":"/img/captains/Kattan Chai.JPG",members:[{name:"Jerrin Jos",photo:"member1.jpg"},{name:"Prajoth Kumar",photo:"member2.jpg"},{name:"Ravinder Kaur",photo:"member3.jpg"},{name:"Basil Benny",photo:"member4.jpg"},{name:"Arun Kunhikrishnan",photo:"member5.jpg"},{name:"Merrin Anna Benchamin",photo:"member6.jpg"},{name:"Rahul Hari",photo:"member7.jpg"},{name:"Vinayanand VP",photo:"member8.jpg"},{name:"Stuti Agarwal",photo:"member9.jpg"},{name:"Anjana Lakshmi G",photo:"member10.jpg"},{name:"Vipin C Kuriakose",photo:"member11.jpg"},{name:"John Joseph",photo:"member12.jpg"},{name:"Rahul B",photo:"member13.jpg"},{name:"Siddarth U Menon",photo:"member14.jpg"},{name:"Arockia Raj Vincent",photo:"member15.jpg"},{name:"Neethu Premraj E P",photo:"member16.jpg"},{name:"Abijith C G",photo:"member17.jpg"},{name:"Midhya N V",photo:"member18.jpg"},{name:"Priyadharshan B",photo:"member19.jpg"},{name:"Vivek Ninan Philipose",photo:"member20.jpg"},{name:"Saumya K N",photo:"member21.jpg"},{name:"Sriram S R",photo:"member22.jpg"},{name:"Sabarinath P M",photo:"member23.jpg"},{name:"Akshay D Kamath",photo:"member24.jpg"},{name:"Rohith Vinu",photo:"member25.jpg"},{name:"Salman Saifee",photo:"member26.jpg"},{name:"Rohith Prakash",photo:"member27.jpg"},{name:"Diya Naushad",photo:"member28.jpg"}]},{name:"Naaranga Mittai",tagline:`Zest, Zeal, and Zing 
Citrus Candy's Winning Things...!`,logo:"/img/logo/Naaranga Mittai.png",captains:[{name:"Muhammaed Anjal",photo:"pager.jpg"},{name:"Neethu Pallath",photo:"captain2.jpg"}],"capt-img":"/img/captains/Naaranga Mittai.JPG",members:[{name:"Satheesh Satchit",photo:"member3.jpg"},{name:"Archana Sasikumar",photo:"member4.jpg"},{name:"Deepu James",photo:"member5.jpg"},{name:"Anoop Paul",photo:"member6.jpg"},{name:"Aswathy P.D",photo:"member7.jpg"},{name:"Ramesh Karangat",photo:"member8.jpg"},{name:"Binu Joseph",photo:"member9.jpg"},{name:"Dinesh Bhaskaran Nair",photo:"member10.jpg"},{name:"Sona P S",photo:"member11.jpg"},{name:"Vahajudheen T",photo:"member12.jpg"},{name:"Jisha M Ashokan",photo:"member13.jpg"},{name:"Melbin Joseph",photo:"member14.jpg"},{name:"Ayush Gupta",photo:"member15.jpg"},{name:"Nirun Murali",photo:"member16.jpg"},{name:"Bincy Babu",photo:"member17.jpg"},{name:"Bandi Sreekanth Reddy",photo:"member18.jpg"},{name:"Sunaina T K",photo:"member19.jpg"},{name:"Nijula P",photo:"member20.jpg"},{name:"Raji R",photo:"member21.jpg"},{name:"Salviya Babu",photo:"member22.jpg"},{name:"Vikas Acharya",photo:"member23.jpg"},{name:"Rinto Lazar",photo:"member24.jpg"},{name:"Rahul V Nair",photo:"member25.jpg"},{name:"Inder Methil",photo:"member26.jpg"},{name:"Gloria Momin",photo:"member27.jpg"},{name:"Sidharth Sreekumar",photo:"member28.jpg"},{name:"Sanath Chandran R",photo:"member29.jpg"},{name:"Biju George Varghese",photo:"member30.jpg"}]}],Z4="/pager.jpg";const eU={components:{Header:Ui},data(){return{team:{}}},created(){const t=this.$route.params.name;this.team=WI.find(e=>e.name==t)}},GI=t=>(Li("data-v-c6a379eb"),t=t(),Fi(),t),tU={class:"teams-content"},nU={class:"team-header"},rU=["src"],iU={class:"team-about"},sU={class:"team-name"},oU={class:"team-tagline"},aU=GI(()=>A("img",{src:Z4,alt:"Captain"},null,-1)),lU={class:"captain-cards"},cU={class:"captain-info"},uU={class:"captain-name"},hU=GI(()=>A("div",{class:"captain-position"},"Team Captain",-1)),dU={class:"members"},fU={class:"member-name"};function pU(t,e,n,r,i,s){const o=Je("Header");return K(),Q(Ae,null,[we(o),A("div",tU,[A("div",nU,[A("img",{src:i.team.logo,class:"team-logo",alt:"Logo"},null,8,rU),A("div",iU,[A("div",sU,rt(i.team.name.toUpperCase()),1),A("div",oU,rt(i.team.tagline),1)])]),aU,A("div",lU,[(K(!0),Q(Ae,null,Mt(i.team.captains,(a,l)=>(K(),Q("div",{key:l,class:"captain-card"},[A("div",cU,[A("div",uU,rt(a.name.toUpperCase()),1),hU])]))),128))]),A("div",dU,[(K(!0),Q(Ae,null,Mt(i.team.members,(a,l)=>(K(),Q("div",{key:l,class:"member-card"},[A("div",fU,rt(a.name.toUpperCase()),1)]))),128))])])],64)}const KI=it(eU,[["render",pU],["__scopeId","data-v-c6a379eb"]]);const mU={data(){return{teams:WI,activeTeam:Object}},components:{Header:Ui,Team:KI},methods:{showTeamDetails(t){this.activeTeam=this.teams[t]}}},gU=t=>(Li("data-v-77ff7072"),t=t(),Fi(),t),_U={class:"teams"},yU=gU(()=>A("div",{class:"title text-[10vw] sm:text-7xl"},"TEAMS",-1)),vU={class:"content"},wU={class:"team-card"},bU={class:"team-signature"},TU=["src","alt"],EU={class:"team-about"},AU={class:"team-name"},IU={class:"team-tagline"},SU={class:"team-captains"},CU=["src"];function RU(t,e,n,r,i,s){const o=Je("Header"),a=Je("router-link");return K(),Q(Ae,null,[we(o),A("div",_U,[yU,A("div",vU,[(K(!0),Q(Ae,null,Mt(i.teams,(l,u)=>(K(),Q("div",wU,[A("div",bU,[A("img",{class:"team-logo",src:l.logo,alt:l.name},null,8,TU),A("div",EU,[we(a,{to:"/team/"+l.name},{default:ic(()=>[A("div",AU,rt(l.name.toUpperCase()),1)]),_:2},1032,["to"]),A("div",IU,rt(l.tagline),1)])]),A("div",SU,[A("img",{class:"captain-img",src:l["capt-img"],alt:""},null,8,CU)])]))),256))])])],64)}const PU=it(mU,[["render",RU],["__scopeId","data-v-77ff7072"]]),xU=[{team_id:"team 1",team_name:"Mario Mavericks",points:0},{team_id:"team 2",team_name:"Udaan",points:0},{team_id:"team 3",team_name:"Kattan Chai",points:0},{team_id:"team 4",team_name:"Naaranga Mittai",points:0}],kU={teams:xU};function ty(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function XI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OU=XI,YI=new No("auth","Firebase",XI());/**
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
 */const ad=new Nd("@firebase/auth");function DU(t,...e){ad.logLevel<=Ne.WARN&&ad.warn(`Auth (${Vo}): ${t}`,...e)}function ph(t,...e){ad.logLevel<=Ne.ERROR&&ad.error(`Auth (${Vo}): ${t}`,...e)}/**
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
 */function Hr(t,...e){throw ny(t,...e)}function ui(t,...e){return ny(t,...e)}function qU(t,e,n){const r=Object.assign(Object.assign({},OU()),{[e]:n});return new No("auth","Firebase",r).create(e,{appName:t.name})}function ny(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return YI.create(t,...e)}function me(t,e,...n){if(!t)throw ny(e,...n)}function Ci(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ph(e),new Error(e)}function Vi(t,e){t||Ci(e)}/**
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
 */function Zm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MU(){return Tw()==="http:"||Tw()==="https:"}function Tw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MU()||ZE()||"connection"in navigator)?navigator.onLine:!0}function VU(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ou{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vi(n>e,"Short delay should be less than long delay!"),this.isMobile=Wq()||Kq()}get(){return NU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ry(t,e){Vi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class QI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FU=new ou(3e4,6e4);function Qa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Uo(t,e,n,r,i={}){return JI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Hc(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),QI.fetch()(ZI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function JI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LU),e);try{const i=new UU(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hu(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qU(t,d,u);Hr(t,d)}}catch(i){if(i instanceof Rr)throw i;Hr(t,"network-request-failed",{message:String(i)})}}async function wf(t,e,n,r,i={}){const s=await Uo(t,e,n,r,i);return"mfaPendingCredential"in s&&Hr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ZI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ry(t.config,i):`${t.config.apiScheme}://${i}`}function $U(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UU{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ui(this.auth,"network-request-failed")),FU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ui(t,e,r);return i.customData._tokenResponse=n,i}function Ew(t){return t!==void 0&&t.enterprise!==void 0}class BU{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $U(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function jU(t,e){return Uo(t,"GET","/v2/recaptchaConfig",Qa(t,e))}/**
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
 */async function HU(t,e){return Uo(t,"POST","/v1/accounts:delete",e)}async function zU(t,e){return Uo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ql(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WU(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=iy(r);me(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ql(Ep(i.auth_time)),issuedAtTime:Ql(Ep(i.iat)),expirationTime:Ql(Ep(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ep(t){return Number(t)*1e3}function iy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ph("JWT malformed, contained fewer than 3 sections"),null;try{const i=GE(n);return i?JSON.parse(i):(ph("Failed to decode base64 JWT payload"),null)}catch(i){return ph("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function GU(t){const e=iy(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dc(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rr&&KU(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KU({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class eS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ql(this.lastLoginAt),this.creationTime=Ql(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ld(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Dc(t,zU(n,{idToken:r}));me(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?JU(s.providerUserInfo):[],a=QU(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new eS(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function YU(t){const e=gt(t);await ld(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QU(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function JU(t){return t.map(e=>{var{providerId:n}=e,r=ty(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ZU(t,e){const n=await JI(t,{},async()=>{const r=Hc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ZI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GU(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return me(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZU(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qc;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(me(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(me(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qc,this.toJSON())}_performRefresh(){return Ci("not implemented")}}/**
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
 */function Gi(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _o{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ty(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new eS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Dc(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WU(this,e)}reload(){return YU(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _o(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ld(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dc(this,HU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:v,isAnonymous:S,providerData:k,stsTokenManager:P}=n;me(T&&P,e,"internal-error");const x=qc.fromJSON(this.name,P);me(typeof T=="string",e,"internal-error"),Gi(c,e.name),Gi(h,e.name),me(typeof v=="boolean",e,"internal-error"),me(typeof S=="boolean",e,"internal-error"),Gi(f,e.name),Gi(p,e.name),Gi(m,e.name),Gi(g,e.name),Gi(_,e.name),Gi(y,e.name);const R=new _o({uid:T,auth:e,email:h,emailVerified:v,displayName:c,isAnonymous:S,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:x,createdAt:_,lastLoginAt:y});return k&&Array.isArray(k)&&(R.providerData=k.map(M=>Object.assign({},M))),g&&(R._redirectEventId=g),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new qc;i.updateFromServerResponse(n);const s=new _o({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ld(s),s}}/**
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
 */const Aw=new Map;function Ri(t){Vi(t instanceof Function,"Expected a class definition");let e=Aw.get(t);return e?(Vi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Aw.set(t,e),e)}/**
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
 */class tS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tS.type="NONE";const Iw=tS;/**
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
 */function mh(t,e,n){return`firebase:${t}:${e}:${n}`}class ba{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mh(this.userKey,i.apiKey,s),this.fullPersistenceKey=mh("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_o._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ba(Ri(Iw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ri(Iw);const o=mh(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=_o._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ba(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ba(s,e,r))}}/**
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
 */function Sw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oS(e))return"Blackberry";if(aS(e))return"Webos";if(sy(e))return"Safari";if((e.includes("chrome/")||rS(e))&&!e.includes("edge/"))return"Chrome";if(sS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nS(t=Cn()){return/firefox\//i.test(t)}function sy(t=Cn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rS(t=Cn()){return/crios\//i.test(t)}function iS(t=Cn()){return/iemobile/i.test(t)}function sS(t=Cn()){return/android/i.test(t)}function oS(t=Cn()){return/blackberry/i.test(t)}function aS(t=Cn()){return/webos/i.test(t)}function bf(t=Cn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eB(t=Cn()){var e;return bf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tB(){return Xq()&&document.documentMode===10}function lS(t=Cn()){return bf(t)||sS(t)||aS(t)||oS(t)||/windows phone/i.test(t)||iS(t)}function nB(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cS(t,e=[]){let n;switch(t){case"Browser":n=Sw(Cn());break;case"Worker":n=`${Sw(Cn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vo}/${r}`}/**
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
 */class rB{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iB(t,e={}){return Uo(t,"GET","/v2/passwordPolicy",Qa(t,e))}/**
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
 */const sB=6;class oB{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sB,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class aB{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cw(this),this.idTokenSubscription=new Cw(this),this.beforeStateQueue=new rB(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ri(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ba.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ld(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VU()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iB(this),n=new oB(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new No("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ri(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await ba.create(this,[Ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DU(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ja(t){return gt(t)}class Cw{constructor(e){this.auth=e,this.observer=null,this.addObserver=t2(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function lB(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ui("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lB().appendChild(r)})}function cB(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uB="https://www.google.com/recaptcha/enterprise.js?render=",hB="recaptcha-enterprise",dB="NO_RECAPTCHA";class fB{constructor(e){this.type=hB,this.auth=Ja(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jU(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new BU(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ew(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(dB)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ew(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}uS(uB+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Rw(t,e,n,r=!1){const i=new fB(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pB(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Rw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Rw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function mB(t,e){const n=xs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_c(s,e??{}))return i;Hr(i,"already-initialized")}return n.initialize({options:e})}function gB(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ri);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _B(t,e,n){const r=Ja(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=hS(e),{host:o,port:a}=yB(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vB()}function hS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yB(t){const e=hS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Pw(o)}}}function Pw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vB(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class oy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ci("not implemented")}_getIdTokenResponse(e){return Ci("not implemented")}_linkToIdToken(e,n){return Ci("not implemented")}_getReauthenticationResolver(e){return Ci("not implemented")}}async function wB(t,e){return Uo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bB(t,e){return wf(t,"POST","/v1/accounts:signInWithPassword",Qa(t,e))}/**
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
 */async function TB(t,e){return wf(t,"POST","/v1/accounts:signInWithEmailLink",Qa(t,e))}async function EB(t,e){return wf(t,"POST","/v1/accounts:signInWithEmailLink",Qa(t,e))}/**
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
 */class Mc extends oy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Mc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pB(e,n,"signInWithPassword",bB);case"emailLink":return TB(e,{email:this._email,oobCode:this._password});default:Hr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wB(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return EB(e,{idToken:n,email:this._email,oobCode:this._password});default:Hr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ta(t,e){return wf(t,"POST","/v1/accounts:signInWithIdp",Qa(t,e))}/**
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
 */const AB="http://localhost";class Oo extends oy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Oo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Hr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ty(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Oo(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ta(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ta(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ta(e,n)}buildRequest(){const e={requestUri:AB,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hc(n)}return e}}/**
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
 */function IB(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SB(t){const e=wl(bl(t)).link,n=e?wl(bl(e)).deep_link_id:null,r=wl(bl(t)).deep_link_id;return(r?wl(bl(r)).link:null)||r||n||e||t}class ay{constructor(e){var n,r,i,s,o,a;const l=wl(bl(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=IB((i=l.mode)!==null&&i!==void 0?i:null);me(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SB(e);try{return new ay(n)}catch{return null}}}/**
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
 */class Za{constructor(){this.providerId=Za.PROVIDER_ID}static credential(e,n){return Mc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ay.parseLink(n);return me(r,"argument-error"),Mc._fromEmailAndCode(e,r.code,r.tenantId)}}Za.PROVIDER_ID="password";Za.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Za.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class au extends dS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zi extends au{constructor(){super("facebook.com")}static credential(e){return Oo._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zi.credential(e.oauthAccessToken)}catch{return null}}}Zi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zi.PROVIDER_ID="facebook.com";/**
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
 */class es extends au{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Oo._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return es.credential(n,r)}catch{return null}}}es.GOOGLE_SIGN_IN_METHOD="google.com";es.PROVIDER_ID="google.com";/**
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
 */class ts extends au{constructor(){super("github.com")}static credential(e){return Oo._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.GITHUB_SIGN_IN_METHOD="github.com";ts.PROVIDER_ID="github.com";/**
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
 */class ns extends au{constructor(){super("twitter.com")}static credential(e,n){return Oo._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ns.credential(n,r)}catch{return null}}}ns.TWITTER_SIGN_IN_METHOD="twitter.com";ns.PROVIDER_ID="twitter.com";/**
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
 */class Ba{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _o._fromIdTokenResponse(e,r,i),o=xw(r);return new Ba({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xw(r);return new Ba({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class cd extends Rr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cd(e,n,r,i)}}function fS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cd._fromErrorAndOperation(t,s,e,r):s})}async function CB(t,e,n=!1){const r=await Dc(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ba._forOperation(t,"link",r)}/**
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
 */async function RB(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Dc(t,fS(r,i,e,t),n);me(s.idToken,r,"internal-error");const o=iy(s.idToken);me(o,r,"internal-error");const{sub:a}=o;return me(t.uid===a,r,"user-mismatch"),Ba._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Hr(r,"user-mismatch"),s}}/**
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
 */async function pS(t,e,n=!1){const r="signIn",i=await fS(t,r,e),s=await Ba._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PB(t,e){return pS(Ja(t),e)}/**
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
 */async function xB(t){const e=Ja(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function kB(t,e,n){return PB(gt(t),Za.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xB(t),r})}/**
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
 */function ly(t,e){return gt(t).setPersistence(e)}function OB(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function DB(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function qB(t){return gt(t).signOut()}const ud="__sak";/**
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
 */class mS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ud,"1"),this.storage.removeItem(ud),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function MB(){const t=Cn();return sy(t)||bf(t)}const NB=1e3,VB=10;class gS extends mS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MB()&&nB(),this.fallbackToPolling=lS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tB()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VB):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gS.type="LOCAL";const LB=gS;/**
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
 */class _S extends mS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_S.type="SESSION";const lu=_S;/**
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
 */function FB(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await FB(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tf.receivers=[];/**
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
 */function cy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $B{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=cy("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hi(){return window}function UB(t){hi().location.href=t}/**
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
 */function yS(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function BB(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jB(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HB(){return yS()?self:null}/**
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
 */const vS="firebaseLocalStorageDb",zB=1,hd="firebaseLocalStorage",wS="fbase_key";class cu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ef(t,e){return t.transaction([hd],e?"readwrite":"readonly").objectStore(hd)}function WB(){const t=indexedDB.deleteDatabase(vS);return new cu(t).toPromise()}function eg(){const t=indexedDB.open(vS,zB);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hd,{keyPath:wS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hd)?e(r):(r.close(),await WB(),e(await eg()))})})}async function kw(t,e,n){const r=Ef(t,!0).put({[wS]:e,value:n});return new cu(r).toPromise()}async function GB(t,e){const n=Ef(t,!1).get(e),r=await new cu(n).toPromise();return r===void 0?null:r.value}function Ow(t,e){const n=Ef(t,!0).delete(e);return new cu(n).toPromise()}const KB=800,XB=3;class bS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XB)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tf._getInstance(HB()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BB(),!this.activeServiceWorker)return;this.sender=new $B(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jB()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eg();return await kw(e,ud,"1"),await Ow(e,ud),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GB(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ow(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ef(i,!1).getAll();return new cu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bS.type="LOCAL";const YB=bS;new ou(3e4,6e4);/**
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
 */function QB(t,e){return e?Ri(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uy extends oy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ta(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ta(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ta(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JB(t){return pS(t.auth,new uy(t),t.bypassAuthState)}function ZB(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),RB(n,new uy(t),t.bypassAuthState)}async function ej(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),CB(n,new uy(t),t.bypassAuthState)}/**
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
 */class TS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JB;case"linkViaPopup":case"linkViaRedirect":return ej;case"reauthViaPopup":case"reauthViaRedirect":return ZB;default:Hr(this.auth,"internal-error")}}resolve(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tj=new ou(2e3,1e4);class oa extends TS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,oa.currentPopupAction&&oa.currentPopupAction.cancel(),oa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Vi(this.filter.length===1,"Popup operations only handle one event");const e=cy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tj.get())};e()}}oa.currentPopupAction=null;/**
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
 */const nj="pendingRedirect",gh=new Map;class rj extends TS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gh.get(this.auth._key());if(!e){try{const r=await ij(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gh.set(this.auth._key(),e)}return this.bypassAuthState||gh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ij(t,e){const n=aj(e),r=oj(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sj(t,e){gh.set(t._key(),e)}function oj(t){return Ri(t._redirectPersistence)}function aj(t){return mh(nj,t.config.apiKey,t.name)}async function lj(t,e,n=!1){const r=Ja(t),i=QB(r,e),o=await new rj(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cj=10*60*1e3;class uj{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ES(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ui(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cj&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dw(e))}saveEventToCache(e){this.cachedEventUids.add(Dw(e)),this.lastProcessedEventTime=Date.now()}}function Dw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ES({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ES(t);default:return!1}}/**
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
 */async function dj(t,e={}){return Uo(t,"GET","/v1/projects",e)}/**
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
 */const fj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pj=/^https?/;async function mj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dj(t);for(const n of e)try{if(gj(n))return}catch{}Hr(t,"unauthorized-domain")}function gj(t){const e=Zm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pj.test(n))return!1;if(fj.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _j=new ou(3e4,6e4);function qw(){const t=hi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yj(t){return new Promise((e,n)=>{var r,i,s;function o(){qw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qw(),n(ui(t,"network-request-failed"))},timeout:_j.get()})}if(!((i=(r=hi().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hi().gapi)===null||s===void 0)&&s.load)o();else{const a=cB("iframefcb");return hi()[a]=()=>{gapi.load?o():n(ui(t,"network-request-failed"))},uS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _h=null,e})}let _h=null;function vj(t){return _h=_h||yj(t),_h}/**
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
 */const wj=new ou(5e3,15e3),bj="__/auth/iframe",Tj="emulator/auth/iframe",Ej={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Aj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ij(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ry(e,Tj):`https://${t.config.authDomain}/${bj}`,r={apiKey:e.apiKey,appName:t.name,v:Vo},i=Aj.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hc(r).slice(1)}`}async function Sj(t){const e=await vj(t),n=hi().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:Ij(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ej,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ui(t,"network-request-failed"),a=hi().setTimeout(()=>{s(o)},wj.get());function l(){hi().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Cj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rj=500,Pj=600,xj="_blank",kj="http://localhost";class Mw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Oj(t,e,n,r=Rj,i=Pj){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Cj),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Cn().toLowerCase();n&&(a=rS(u)?xj:n),nS(u)&&(e=e||kj,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(eB(u)&&a!=="_self")return Dj(e||"",a),new Mw(null);const c=window.open(e||"",a,d);me(c,t,"popup-blocked");try{c.focus()}catch{}return new Mw(c)}function Dj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qj="__/auth/handler",Mj="emulator/auth/handler",Nj=encodeURIComponent("fac");async function Nw(t,e,n,r,i,s){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vo,eventId:i};if(e instanceof dS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",e2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof au){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${Nj}=${encodeURIComponent(l)}`:"";return`${Vj(t)}?${Hc(a).slice(1)}${u}`}function Vj({config:t}){return t.emulator?ry(t,Mj):`https://${t.authDomain}/${qj}`}/**
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
 */const Ap="webStorageSupport";class Lj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lu,this._completeRedirectFn=lj,this._overrideRedirectResult=sj}async _openPopup(e,n,r,i){var s;Vi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Nw(e,n,r,Zm(),i);return Oj(e,o,cy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nw(e,n,r,Zm(),i);return UB(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sj(e),r=new uj(e);return n.register("authEvent",i=>(me(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ap,{type:Ap},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ap];o!==void 0&&n(!!o),Hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lS()||sy()||bf()}}const Fj=Lj;var Vw="@firebase/auth",Lw="1.3.2";/**
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
 */class $j{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Uj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Bj(t){Br(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cS(t)},u=new aB(r,i,s,l);return gB(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Cr("auth-internal",e=>{const n=Ja(e.getProvider("auth").getImmediate());return(r=>new $j(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(Vw,Lw,Uj(t)),Gn(Vw,Lw,"esm2017")}/**
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
 */const jj=5*60,Hj=QE("authIdTokenMaxAge")||jj;let Fw=null;const zj=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hj)return;const i=n==null?void 0:n.token;Fw!==i&&(Fw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hy(t=Ld()){const e=xs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mB(t,{popupRedirectResolver:Fj,persistence:[YB,LB,lu]}),r=QE("authTokenSyncURL");if(r){const s=zj(r);DB(n,s,()=>s(n.currentUser)),OB(n,o=>s(o))}const i=KE("auth");return i&&_B(n,`http://${i}`),n}Bj("Browser");/**
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
 */const AS="firebasestorage.googleapis.com",IS="storageBucket",Wj=2*60*1e3,Gj=10*60*1e3;/**
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
 */class It extends Rr{constructor(e,n,r=0){super(Ip(e),`Firebase Storage: ${n} (${Ip(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,It.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ip(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var At;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(At||(At={}));function Ip(t){return"storage/"+t}function dy(){const t="An unknown error occurred, please check the error payload for server response.";return new It(At.UNKNOWN,t)}function Kj(t){return new It(At.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Xj(t){return new It(At.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Yj(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new It(At.UNAUTHENTICATED,t)}function Qj(){return new It(At.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Jj(t){return new It(At.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Zj(){return new It(At.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function e9(){return new It(At.CANCELED,"User canceled the upload/download.")}function t9(t){return new It(At.INVALID_URL,"Invalid URL '"+t+"'.")}function n9(t){return new It(At.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function r9(){return new It(At.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+IS+"' property when initializing the app?")}function i9(){return new It(At.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function s9(){return new It(At.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function o9(t){return new It(At.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tg(t){return new It(At.INVALID_ARGUMENT,t)}function SS(){return new It(At.APP_DELETED,"The Firebase app was deleted.")}function a9(t){return new It(At.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Jl(t,e){return new It(At.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function dl(t){throw new It(At.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ar{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ar.makeFromUrl(e,n)}catch{return new ar(e,"")}if(r.path==="")return r;throw n9(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const d="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${c}/${d}/b/${i}/o${h}`,"i"),p={bucket:1,path:3},m=n===AS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",_=new RegExp(`^https?://${m}/${i}/${g}`,"i"),T=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<T.length;v++){const S=T[v],k=S.regex.exec(e);if(k){const P=k[S.indices.bucket];let x=k[S.indices.path];x||(x=""),r=new ar(P,x),S.postModify(r);break}}if(r==null)throw t9(e);return r}}class l9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function c9(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...g){u||(u=!0,e.apply(null,g))}function c(g){i=setTimeout(()=>{i=null,t(f,l())},g)}function h(){s&&clearTimeout(s)}function f(g,..._){if(u){h();return}if(g){h(),d.call(null,g,..._);return}if(l()||o){h(),d.call(null,g,..._);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,c(T)}let p=!1;function m(g){p||(p=!0,h(),!u&&(i!==null?(g||(a=2),clearTimeout(i),c(0)):g||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function u9(t){t(!1)}/**
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
 */function h9(t){return t!==void 0}function d9(t){return typeof t=="object"&&!Array.isArray(t)}function fy(t){return typeof t=="string"||t instanceof String}function $w(t){return py()&&t instanceof Blob}function py(){return typeof Blob<"u"&&!Gq()}function Uw(t,e,n,r){if(r<e)throw tg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function my(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function CS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var yo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yo||(yo={}));/**
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
 */function f9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class p9{constructor(e,n,r,i,s,o,a,l,u,d,c,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===yo.NO_ERROR,l=s.getStatus();if(!a||f9(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===yo.ABORT;r(!1,new zu(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new zu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());h9(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=dy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?SS():e9();o(l)}else{const l=Zj();o(l)}};this.canceled_?n(!1,new zu(!1,null,!0)):this.backoffId_=c9(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&u9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function m9(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function g9(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _9(t,e){e&&(t["X-Firebase-GMPID"]=e)}function y9(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function v9(t,e,n,r,i,s,o=!0){const a=CS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return _9(u,e),m9(u,n),g9(u,s),y9(u,r),new p9(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function w9(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function b9(...t){const e=w9();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(py())return new Blob(t);throw new It(At.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function T9(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function E9(t){if(typeof atob>"u")throw o9("base-64");return atob(t)}/**
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
 */const ri={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sp{constructor(e,n){this.data=e,this.contentType=n||null}}function A9(t,e){switch(t){case ri.RAW:return new Sp(RS(e));case ri.BASE64:case ri.BASE64URL:return new Sp(PS(t,e));case ri.DATA_URL:return new Sp(S9(e),C9(e))}throw dy()}function RS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function I9(t){let e;try{e=decodeURIComponent(t)}catch{throw Jl(ri.DATA_URL,"Malformed data URL.")}return RS(e)}function PS(t,e){switch(t){case ri.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Jl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ri.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Jl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=E9(e)}catch(i){throw i.message.includes("polyfill")?i:Jl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class xS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Jl(ri.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=R9(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function S9(t){const e=new xS(t);return e.base64?PS(ri.BASE64,e.rest):I9(e.rest)}function C9(t){return new xS(t).contentType}function R9(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class rs{constructor(e,n){let r=0,i="";$w(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if($w(this.data_)){const r=this.data_,i=T9(r,e,n);return i===null?null:new rs(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rs(r,!0)}}static getBlob(...e){if(py()){const n=e.map(r=>r instanceof rs?r.data_:r);return new rs(b9.apply(null,n))}else{const n=e.map(o=>fy(o)?A9(ri.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new rs(i,!0)}}uploadData(){return this.data_}}/**
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
 */function kS(t){let e;try{e=JSON.parse(t)}catch{return null}return d9(e)?e:null}/**
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
 */function P9(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function x9(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function OS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function k9(t,e){return e}class kn{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||k9}}let Wu=null;function O9(t){return!fy(t)||t.length<2?t:OS(t)}function DS(){if(Wu)return Wu;const t=[];t.push(new kn("bucket")),t.push(new kn("generation")),t.push(new kn("metageneration")),t.push(new kn("name","fullPath",!0));function e(s,o){return O9(o)}const n=new kn("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new kn("size");return i.xform=r,t.push(i),t.push(new kn("timeCreated")),t.push(new kn("updated")),t.push(new kn("md5Hash",null,!0)),t.push(new kn("cacheControl",null,!0)),t.push(new kn("contentDisposition",null,!0)),t.push(new kn("contentEncoding",null,!0)),t.push(new kn("contentLanguage",null,!0)),t.push(new kn("contentType",null,!0)),t.push(new kn("metadata","customMetadata",!0)),Wu=t,Wu}function D9(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ar(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function q9(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return D9(r,t),r}function qS(t,e,n){const r=kS(e);return r===null?null:q9(t,r,n)}function M9(t,e,n,r){const i=kS(e);if(i===null||!fy(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,c=t.fullPath,h="/b/"+o(d)+"/o/"+o(c),f=my(h,n,r),p=CS({alt:"media",token:u});return f+p})[0]}function N9(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class MS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function NS(t){if(!t)throw dy()}function V9(t,e){function n(r,i){const s=qS(t,i,e);return NS(s!==null),s}return n}function L9(t,e){function n(r,i){const s=qS(t,i,e);return NS(s!==null),M9(s,i,t.host,t._protocol)}return n}function VS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Qj():i=Yj():n.getStatus()===402?i=Xj(t.bucket):n.getStatus()===403?i=Jj(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function F9(t){const e=VS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Kj(t.path)),s.serverResponse=i.serverResponse,s}return n}function $9(t,e,n){const r=e.fullServerUrl(),i=my(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new MS(i,s,L9(t,n),o);return a.errorHandler=F9(e),a}function U9(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function B9(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=U9(null,e)),r}function j9(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let v=0;v<2;v++)T=T+Math.random().toString().slice(2);return T}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=B9(e,r,i),d=N9(u,n),c="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",f=rs.getBlob(c,r,h);if(f===null)throw i9();const p={name:u.fullPath},m=my(s,t.host,t._protocol),g="POST",_=t.maxUploadRetryTime,y=new MS(m,g,V9(t,n),_);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=VS(e),y}class H9{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw dl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw dl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw dl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw dl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw dl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class z9 extends H9{initXhr(){this.xhr_.responseType="text"}}function LS(){return new z9}/**
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
 */class Do{constructor(e,n){this._service=e,n instanceof ar?this._location=n:this._location=ar.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Do(e,n)}get root(){const e=new ar(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return OS(this._location.path)}get storage(){return this._service}get parent(){const e=P9(this._location.path);if(e===null)return null;const n=new ar(this._location.bucket,e);return new Do(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw a9(e)}}function W9(t,e,n){t._throwIfRoot("uploadBytes");const r=j9(t.storage,t._location,DS(),new rs(e,!0),n);return t.storage.makeRequestWithTokens(r,LS).then(i=>({metadata:i,ref:t}))}function G9(t){t._throwIfRoot("getDownloadURL");const e=$9(t.storage,t._location,DS());return t.storage.makeRequestWithTokens(e,LS).then(n=>{if(n===null)throw s9();return n})}function K9(t,e){const n=x9(t._location.path,e),r=new ar(t._location.bucket,n);return new Do(t.storage,r)}/**
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
 */function X9(t){return/^[A-Za-z]+:\/\//.test(t)}function Y9(t,e){return new Do(t,e)}function FS(t,e){if(t instanceof gy){const n=t;if(n._bucket==null)throw r9();const r=new Do(n,n._bucket);return e!=null?FS(r,e):r}else return e!==void 0?K9(t,e):t}function Q9(t,e){if(e&&X9(e)){if(t instanceof gy)return Y9(t,e);throw tg("To use ref(service, url), the first argument must be a Storage instance.")}else return FS(t,e)}function Bw(t,e){const n=e==null?void 0:e[IS];return n==null?null:ar.makeFromBucketSpec(n,t)}function J9(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:JE(i,t.app.options.projectId))}class gy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=AS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wj,this._maxUploadRetryTime=Gj,this._requests=new Set,i!=null?this._bucket=ar.makeFromBucketSpec(i,this._host):this._bucket=Bw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ar.makeFromBucketSpec(this._url,e):this._bucket=Bw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Do(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new l9(SS());{const o=v9(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const jw="@firebase/storage",Hw="0.11.2";/**
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
 */const $S="storage";function Z9(t,e,n){return t=gt(t),W9(t,e,n)}function e5(t){return t=gt(t),G9(t)}function t5(t,e){return t=gt(t),Q9(t,e)}function n5(t=Ld(),e){t=gt(t);const r=xs(t,$S).getImmediate({identifier:e}),i=XE("storage");return i&&r5(r,...i),r}function r5(t,e,n,r={}){J9(t,e,n,r)}function i5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new gy(n,r,i,e,Vo)}function s5(){Br(new Cr($S,i5,"PUBLIC").setMultipleInstances(!0)),Gn(jw,Hw,""),Gn(jw,Hw,"esm2017")}s5();const o5="modulepreload",a5=function(t){return"/"+t},zw={},l5=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=a5(s),s in zw)return;zw[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const c=i[d];if(c.href===s&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":o5,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((d,c)=>{u.addEventListener("load",d),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function Cp(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_y(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return s=u.done,u},e:function(u){o=!0,a=u},f:function(){try{!s&&n.return!=null&&n.return()}finally{if(o)throw a}}}}function c5(t){return d5(t)||h5(t)||_y(t)||u5()}function u5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function d5(t){if(Array.isArray(t))return ng(t)}function Zl(t){"@babel/helpers - typeof";return Zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zl(t)}function Rp(t,e){return m5(t)||p5(t,e)||_y(t,e)||f5()}function f5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _y(t,e){if(t){if(typeof t=="string")return ng(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ng(t,e)}}function ng(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p5(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function m5(t){if(Array.isArray(t))return t}var ea={innerWidth:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},width:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},getWindowScrollTop:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth:function(e,n){if(e){var r=e.offsetWidth;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return r}return 0},getOuterHeight:function(e,n){if(e){var r=e.offsetHeight;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}return 0},getClientHeight:function(e,n){if(e){var r=e.clientHeight;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}return 0},getViewport:function(){var e=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||i.clientWidth,o=e.innerHeight||r.clientHeight||i.clientHeight;return{width:s,height:o}},getOffset:function(e){if(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(e){if(e)for(var n=e.parentNode.childNodes,r=0,i=0;i<n.length;i++){if(n[i]===e)return r;n[i].nodeType===1&&r++}return-1},addMultipleClasses:function(e,n){var r=this;e&&n&&[n].flat().filter(Boolean).forEach(function(i){return i.split(" ").forEach(function(s){return r.addClass(e,s)})})},removeMultipleClasses:function(e,n){var r=this;e&&n&&[n].flat().filter(Boolean).forEach(function(i){return i.split(" ").forEach(function(s){return r.removeClass(e,s)})})},addClass:function(e,n){e&&n&&!this.hasClass(e,n)&&(e.classList?e.classList.add(n):e.className+=" "+n)},removeClass:function(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1},addStyles:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(n).forEach(function(r){var i=Rp(r,2),s=i[0],o=i[1];return e.style[s]=o})},find:function(e,n){return this.isElement(e)?e.querySelectorAll(n):[]},findSingle:function(e,n){return this.isElement(e)?e.querySelector(n):null},createElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var r=document.createElement(e);this.setAttributes(r,n);for(var i=arguments.length,s=new Array(i>2?i-2:0),o=2;o<i;o++)s[o-2]=arguments[o];return r.append.apply(r,s),r}},setAttribute:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)},setAttributes:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(e)){var i=function s(o,a){var l,u,d=e!=null&&(l=e.$attrs)!==null&&l!==void 0&&l[o]?[e==null||(u=e.$attrs)===null||u===void 0?void 0:u[o]]:[];return[a].flat().reduce(function(c,h){if(h!=null){var f=Zl(h);if(f==="string"||f==="number")c.push(h);else if(f==="object"){var p=Array.isArray(h)?s(o,h):Object.entries(h).map(function(m){var g=Rp(m,2),_=g[0],y=g[1];return o==="style"&&(y||y===0)?"".concat(_.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(y):y?_:void 0});c=p.length?c.concat(p.filter(function(m){return!!m})):c}}return c},d)};Object.entries(r).forEach(function(s){var o=Rp(s,2),a=o[0],l=o[1];if(l!=null){var u=a.match(/^on(.+)/);u?e.addEventListener(u[1].toLowerCase(),l):a==="p-bind"?n.setAttributes(e,l):(l=a==="class"?c5(new Set(i("class",l))).join(" ").trim():a==="style"?i("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[a]=l),e.setAttribute(a,l))}})}},getAttribute:function(e,n){if(this.isElement(e)){var r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}},isAttributeEquals:function(e,n,r){return this.isElement(e)?this.getAttribute(e,n)===r:!1},isAttributeNotEquals:function(e,n,r){return!this.isAttributeEquals(e,n,r)},getHeight:function(e){if(e){var n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}return 0},getWidth:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}return 0},absolutePosition:function(e,n){if(e){var r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=r.height,s=r.width,o=n.offsetHeight,a=n.offsetWidth,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),h,f;l.top+o+i>c.height?(h=l.top+u-i,e.style.transformOrigin="bottom",h<0&&(h=u)):(h=o+l.top+u,e.style.transformOrigin="top"),l.left+s>c.width?f=Math.max(0,l.left+d+a-s):f=l.left+d,e.style.top=h+"px",e.style.left=f+"px"}},relativePosition:function(e,n){if(e){var r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=n.offsetHeight,s=n.getBoundingClientRect(),o=this.getViewport(),a,l;s.top+i+r.height>o.height?(a=-1*r.height,e.style.transformOrigin="bottom",s.top+a<0&&(a=-1*s.top)):(a=i,e.style.transformOrigin="top"),r.width>o.width?l=s.left*-1:s.left+r.width>o.width?l=(s.left+r.width-o.width)*-1:l=0,e.style.top=a+"px",e.style.left=l+"px"}},getParents:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))},getScrollableParents:function(e){var n=[];if(e){var r=this.getParents(e),i=/(auto|scroll)/,s=function(g){try{var _=window.getComputedStyle(g,null);return i.test(_.getPropertyValue("overflow"))||i.test(_.getPropertyValue("overflowX"))||i.test(_.getPropertyValue("overflowY"))}catch{return!1}},o=Cp(r),a;try{for(o.s();!(a=o.n()).done;){var l=a.value,u=l.nodeType===1&&l.dataset.scrollselectors;if(u){var d=u.split(","),c=Cp(d),h;try{for(c.s();!(h=c.n()).done;){var f=h.value,p=this.findSingle(l,f);p&&s(p)&&n.push(p)}}catch(m){c.e(m)}finally{c.f()}}l.nodeType!==9&&s(l)&&n.push(l)}}catch(m){o.e(m)}finally{o.f()}}return n},getHiddenElementOuterHeight:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}return 0},getHiddenElementOuterWidth:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}return 0},getHiddenElementDimensions:function(e){if(e){var n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}return 0},fadeIn:function(e,n){if(e){e.style.opacity=0;var r=+new Date,i=0,s=function o(){i=+e.style.opacity+(new Date().getTime()-r)/n,e.style.opacity=i,r=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};s()}},fadeOut:function(e,n){if(e)var r=1,i=50,s=n,o=i/s,a=setInterval(function(){r-=o,r<=0&&(r=0,clearInterval(a)),e.style.opacity=r},i)},getUserAgent:function(){return navigator.userAgent},appendChild:function(e,n){if(this.isElement(n))n.appendChild(e);else if(n.el&&n.elElement)n.elElement.appendChild(e);else throw new Error("Cannot append "+n+" to "+e)},isElement:function(e){return(typeof HTMLElement>"u"?"undefined":Zl(HTMLElement))==="object"?e instanceof HTMLElement:e&&Zl(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView:function(e,n){var r=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),o=s?parseFloat(s):0,a=e.getBoundingClientRect(),l=n.getBoundingClientRect(),u=l.top+document.body.scrollTop-(a.top+document.body.scrollTop)-i-o,d=e.scrollTop,c=e.clientHeight,h=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+h>c&&(e.scrollTop=d+u-c+h)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var e=document.createElement("div");this.addStyles(e,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n},calculateBodyScrollbarWidth:function(){return window.innerWidth-document.documentElement.offsetWidth},getBrowser:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var e=navigator.userAgent.toLowerCase(),n=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}},isVisible:function(e){return e&&e.offsetParent!=null},invokeElementMethod:function(e,n,r){e[n].apply(e,r)},isExist:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode)},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(e,n){e&&document.activeElement!==e&&e.focus(n)},isFocusableElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(e)?e.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)):!1},getFocusableElements:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=this.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)),i=[],s=Cp(r),o;try{for(s.s();!(o=s.n()).done;){var a=o.value;getComputedStyle(a).display!="none"&&getComputedStyle(a).visibility!="hidden"&&i.push(a)}}catch(l){s.e(l)}finally{s.f()}return i},getFirstFocusableElement:function(e,n){var r=this.getFocusableElements(e,n);return r.length>0?r[0]:null},getLastFocusableElement:function(e,n){var r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null},getNextFocusableElement:function(e,n,r){var i=this.getFocusableElements(e,r),s=i.length>0?i.findIndex(function(a){return a===n}):-1,o=s>-1&&i.length>=s+1?s+1:-1;return o>-1?i[o]:null},isClickable:function(e){if(e){var n=e.nodeName,r=e.parentElement&&e.parentElement.nodeName;return n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(e,n){if(typeof n=="string")e.style.cssText=n;else for(var r in n)e.style[r]=n[r]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(e){if(e){var n=getComputedStyle(e),r=parseFloat(n.getPropertyValue("animation-duration")||"0");return r>0}return!1},hasCSSTransition:function(e){if(e){var n=getComputedStyle(e),r=parseFloat(n.getPropertyValue("transition-duration")||"0");return r>0}return!1},exportCSV:function(e,n){var r=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(r,n+".csv");else{var i=document.createElement("a");i.download!==void 0?(i.setAttribute("href",URL.createObjectURL(r)),i.setAttribute("download",n+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}},blockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)},unblockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}};function g5(t,e){return v5(t)||y5(t,e)||yy(t,e)||_5()}function _5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y5(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function v5(t){if(Array.isArray(t))return t}function Ww(t){return T5(t)||b5(t)||yy(t)||w5()}function w5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function T5(t){if(Array.isArray(t))return rg(t)}function Pp(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=yy(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return s=u.done,u},e:function(u){o=!0,a=u},f:function(){try{!s&&n.return!=null&&n.return()}finally{if(o)throw a}}}}function yy(t,e){if(t){if(typeof t=="string")return rg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rg(t,e)}}function rg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ec(t){"@babel/helpers - typeof";return ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ec(t)}var mn={equals:function(e,n,r){return r?this.resolveFieldData(e,r)===this.resolveFieldData(n,r):this.deepEquals(e,n)},deepEquals:function(e,n){if(e===n)return!0;if(e&&n&&ec(e)=="object"&&ec(n)=="object"){var r=Array.isArray(e),i=Array.isArray(n),s,o,a;if(r&&i){if(o=e.length,o!=n.length)return!1;for(s=o;s--!==0;)if(!this.deepEquals(e[s],n[s]))return!1;return!0}if(r!=i)return!1;var l=e instanceof Date,u=n instanceof Date;if(l!=u)return!1;if(l&&u)return e.getTime()==n.getTime();var d=e instanceof RegExp,c=n instanceof RegExp;if(d!=c)return!1;if(d&&c)return e.toString()==n.toString();var h=Object.keys(e);if(o=h.length,o!==Object.keys(n).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,h[s]))return!1;for(s=o;s--!==0;)if(a=h[s],!this.deepEquals(e[a],n[a]))return!1;return!0}return e!==e&&n!==n},resolveFieldData:function(e,n){if(!e||!n)return null;try{var r=e[n];if(this.isNotEmpty(r))return r}catch{}if(Object.keys(e).length){if(this.isFunction(n))return n(e);if(n.indexOf(".")===-1)return e[n];for(var i=n.split("."),s=e,o=0,a=i.length;o<a;++o){if(s==null)return null;s=s[i[o]]}return s}return null},getItemValue:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return this.isFunction(e)?e.apply(void 0,r):e},filter:function(e,n,r){var i=[];if(e){var s=Pp(e),o;try{for(s.s();!(o=s.n()).done;){var a=o.value,l=Pp(n),u;try{for(l.s();!(u=l.n()).done;){var d=u.value;if(String(this.resolveFieldData(a,d)).toLowerCase().indexOf(r.toLowerCase())>-1){i.push(a);break}}}catch(c){l.e(c)}finally{l.f()}}}catch(c){s.e(c)}finally{s.f()}}return i},reorderArray:function(e,n,r){e&&n!==r&&(r>=e.length&&(r%=e.length,n%=e.length),e.splice(r,0,e.splice(n,1)[0]))},findIndexInList:function(e,n){var r=-1;if(n){for(var i=0;i<n.length;i++)if(n[i]===e){r=i;break}}return r},contains:function(e,n){if(e!=null&&n&&n.length){var r=Pp(n),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;if(this.equals(e,s))return!0}}catch(o){r.e(o)}finally{r.f()}}return!1},insertIntoOrderedArray:function(e,n,r,i){if(r.length>0){for(var s=!1,o=0;o<r.length;o++){var a=this.findIndexInList(r[o],i);if(a>n){r.splice(o,0,e),s=!0;break}}s||r.push(e)}else r.push(e)},removeAccents:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp:function(e,n){var r=e.props;if(r){var i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(r,i)?i:n;return e.type.extends.props[n].type===Boolean&&r[s]===""?!0:r[s]}return null},toFlatCase:function(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e},toKebabCase:function(e){return this.isString(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,function(n,r){return r===0?n:"-"+n.toLowerCase()}).toLowerCase():e},toCapitalCase:function(e){return this.isString(e,{empty:!1})?e[0].toUpperCase()+e.slice(1):e},isEmpty:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&ec(e)==="object"&&Object.keys(e).length===0},isNotEmpty:function(e){return!this.isEmpty(e)},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)},isDate:function(e){return e instanceof Date&&e.constructor===Date},isArray:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(e)&&(n||e.length!==0)},isString:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof e=="string"&&(n||e!=="")},isPrintableCharacter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast:function(e,n){var r;if(this.isNotEmpty(e))try{r=e.findLast(n)}catch{r=Ww(e).reverse().find(n)}return r},findLastIndex:function(e,n){var r=-1;if(this.isNotEmpty(e))try{r=e.findLastIndex(n)}catch{r=e.lastIndexOf(Ww(e).reverse().find(n))}return r},sort:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,o=this.compare(e,n,i,r),a=r;return(this.isEmpty(e)||this.isEmpty(n))&&(a=s===1?r:s),a*o},compare:function(e,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=-1,o=this.isEmpty(e),a=this.isEmpty(n);return o&&a?s=0:o?s=i:a?s=-i:typeof e=="string"&&typeof n=="string"?s=r(e,n):s=e<n?-1:e>n?1:0,s},localeComparator:function(){return new Intl.Collator(void 0,{numeric:!0}).compare},nestedKeys:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(n).reduce(function(i,s){var o=g5(s,2),a=o[0],l=o[1],u=r?"".concat(r,".").concat(a):a;return e.isObject(l)?i=i.concat(e.nestedKeys(l,u)):i.push(u),i},[])}};function Nc(t){"@babel/helpers - typeof";return Nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nc(t)}function Gw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gw(Object(n),!0).forEach(function(r){E5(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function E5(t,e,n){return e=A5(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A5(t){var e=I5(t,"string");return Nc(e)==="symbol"?e:String(e)}function I5(t,e){if(Nc(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Nc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function S5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Jb()?Id(t):e?t():_g(t)}var C5=0;function US(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=yn(!1),r=yn(t),i=yn(null),s=ea.isClient()?window.document:void 0,o=e.document,a=o===void 0?s:o,l=e.immediate,u=l===void 0?!0:l,d=e.manual,c=d===void 0?!1:d,h=e.name,f=h===void 0?"style_".concat(++C5):h,p=e.id,m=p===void 0?void 0:p,g=e.media,_=g===void 0?void 0:g,y=e.nonce,T=y===void 0?void 0:y,v=e.props,S=v===void 0?{}:v,k=function(){},P=function(M){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var D=Kw(Kw({},S),z),Z=D.name||f,J=D.id||m,ue=D.nonce||T;i.value=a.querySelector('style[data-primevue-style-id="'.concat(Z,'"]'))||a.getElementById(J)||a.createElement("style"),i.value.isConnected||(r.value=M||t,ea.setAttributes(i.value,{type:"text/css",id:J,media:_,nonce:ue}),a.head.appendChild(i.value),ea.setAttribute(i.value,"data-primevue-style-id",f),ea.setAttributes(i.value,D)),!n.value&&(k=Sl(r,function(oe){i.value.textContent=oe},{immediate:!0}),n.value=!0)}},x=function(){!a||!n.value||(k(),ea.isExist(i.value)&&a.head.removeChild(i.value),n.value=!1)};return u&&!c&&S5(P),{id:m,name:f,css:r,unload:x,load:P,isLoaded:fg(n)}}function Vc(t){"@babel/helpers - typeof";return Vc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vc(t)}function R5(t,e){return O5(t)||k5(t,e)||x5(t,e)||P5()}function P5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x5(t,e){if(t){if(typeof t=="string")return Xw(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xw(t,e)}}function Xw(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k5(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function O5(t){if(Array.isArray(t))return t}function Yw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yw(Object(n),!0).forEach(function(r){D5(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function D5(t,e,n){return e=q5(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q5(t){var e=M5(t,"string");return Vc(e)==="symbol"?e:String(e)}function M5(t,e){if(Vc(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Vc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var N5=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,V5={},L5={},vy={name:"base",css:N5,classes:V5,inlineStyles:L5,loadStyle:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.css?US(this.css,xp({name:this.name},e)):{}},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Object.entries(n).reduce(function(i,s){var o=R5(s,2),a=o[0],l=o[1];return i.push("".concat(a,'="').concat(l,'"'))&&i},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(r,">").concat(this.css).concat(e,"</style>")}return""},extend:function(e){return xp(xp({},this),{},{css:void 0},e)}};function Lc(t){"@babel/helpers - typeof";return Lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lc(t)}function Qw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function F5(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qw(Object(n),!0).forEach(function(r){$5(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $5(t,e,n){return e=U5(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function U5(t){var e=B5(t,"string");return Lc(e)==="symbol"?e:String(e)}function B5(t,e){if(Lc(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Lc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var j5=`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child), .p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`,H5=`
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: default;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
`,z5=`
.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
    top: -.75rem;
    font-size: 12px;
}


.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-left > svg,
.p-input-icon-right > i,
.p-input-icon-right > svg {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,W5=`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
}

.p-radiobutton.p-radiobutton-disabled {
    cursor: default;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-radiobutton-icon {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(.1);
    border-radius: 50%;
    visibility: hidden;
}

.p-radiobutton-box.p-highlight .p-radiobutton-icon {
    transform: translateZ(0) scale(1.0, 1.0);
    visibility: visible;
}
`,G5=`
@layer primevue {
.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default !important;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
}

.p-link {
	text-align: left;
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
	cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
`.concat(j5,`
`).concat(H5,`
`).concat(z5,`
`).concat(W5,`
}
`),kp=vy.extend({name:"common",css:G5,loadGlobalStyle:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return US(e,F5({name:"global"},n))}});function Fc(t){"@babel/helpers - typeof";return Fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fc(t)}function Jw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jw(Object(n),!0).forEach(function(r){ig(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ig(t,e,n){return e=K5(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K5(t){var e=X5(t,"string");return Fc(e)==="symbol"?e:String(e)}function X5(t,e){if(Fc(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Fc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Y5={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){if(!e){var n,r;kp.loadStyle({nonce:(n=this.$config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce}),this.$options.style&&this.$style.loadStyle({nonce:(r=this.$config)===null||r===void 0||(r=r.csp)===null||r===void 0?void 0:r.nonce})}}}},beforeCreate:function(){var e,n,r,i,s,o,a,l,u,d,c,h=(e=this.pt)===null||e===void 0?void 0:e._usept,f=h?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,p=h?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=p||f)===null||i===void 0||(i=i.hooks)===null||i===void 0||(s=i.onBeforeCreate)===null||s===void 0||s.call(i);var m=(o=this.$config)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o._usept,g=m?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,_=m?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0?void 0:u.pt;(d=_||g)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(c=d.onBeforeCreate)===null||c===void 0||c.call(d)},created:function(){this._hook("onCreated")},beforeMount:function(){var e;vy.loadStyle({nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),r==null||r()}},_loadGlobalStyles:function(){var e,n=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);mn.isNotEmpty(n)&&kp.loadGlobalStyle(n,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=mn.toFlatCase(n).split("."),s=i.shift();return s?mn.isObject(e)?this._getOptionValue(mn.getItemValue(e[Object.keys(e).find(function(o){return mn.toFlatCase(o)===s})||""],r),i.join("."),r):void 0:mn.getItemValue(e,r)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,o="data-pc-",a=/./g.test(r)&&!!i[r.split(".")[0]],l=this._getPropValue("ptOptions")||((e=this.$config)===null||e===void 0?void 0:e.ptOptions)||{},u=l.mergeSections,d=u===void 0?!0:u,c=l.mergeProps,h=c===void 0?!1:c,f=s?a?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,p=a?void 0:this._usePT(this._getPT(n,this.$name),this._getPTClassValue,r,ct(ct({},i),{},{global:f||{}})),m=r!=="transition"&&ct(ct({},r==="root"&&ig({},"".concat(o,"name"),mn.toFlatCase(this.$.type.name))),{},ig({},"".concat(o,"section"),mn.toFlatCase(r)));return d||!d&&p?h?qe(f,p,m):ct(ct(ct({},f),p),m):ct(ct({},p),m)},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return mn.isString(e)||mn.isArray(e)?{class:e}:e},_getPT:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,s=function(a){var l,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=i?i(a):a,c=mn.toFlatCase(r),h=mn.toFlatCase(n.$name);return(l=u?c!==h?d==null?void 0:d[c]:void 0:d==null?void 0:d[c])!==null&&l!==void 0?l:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:s(e.originalValue),value:s(e.value)}:s(e,!0)},_usePT:function(e,n,r,i){var s=function(m){return n(m,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var o,a=e._usept||((o=this.$config)===null||o===void 0?void 0:o.ptOptions)||{},l=a.mergeSections,u=l===void 0?!0:l,d=a.mergeProps,c=d===void 0?!1:d,h=s(e.originalValue),f=s(e.value);return h===void 0&&f===void 0?void 0:mn.isString(f)?f:mn.isString(h)?h:u||!u&&f?c?qe(h,f):ct(ct({},h),f):f}return s(e)},_useGlobalPT:function(e,n,r){return this._usePT(this.globalPT,e,n,r)},_useDefaultPT:function(e,n,r){return this._usePT(this.defaultPT,e,n,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,ct(ct({},this.$params),n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,ct({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,ct(ct({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var i=this._getOptionValue(this.$style.inlineStyles,e,ct(ct({},this.$params),r)),s=this._getOptionValue(kp.inlineStyles,e,ct(ct({},this.$params),r));return[s,i]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(r){return mn.getItemValue(r,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(r){return n._getOptionValue(r,n.$name,ct({},n.$params))||mn.getItemValue(r,ct({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$config)===null||e===void 0?void 0:e.unstyled},$params:function(){return{instance:this,props:this.$props,state:this.$data,parentInstance:this.$parentInstance}},$style:function(){return ct(ct({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name}}},Q5=`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`,J5={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Zw=vy.extend({name:"editor",css:Q5,classes:J5}),Z5={name:"BaseEditor",extends:Y5,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Zw,provide:function(){return{$parentInstance:this}},beforeMount:function(){var e;Zw.loadStyle({nonce:(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})}};function $c(t){"@babel/helpers - typeof";return $c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$c(t)}function eb(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function e3(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?eb(Object(n),!0).forEach(function(r){t3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):eb(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function t3(t,e,n){return e=n3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n3(t){var e=r3(t,"string");return $c(e)==="symbol"?e:String(e)}function r3(t,e){if($c(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if($c(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var tb=function(){try{return window.Quill}catch{return null}}(),BS={name:"Editor",extends:Z5,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(e,n){e!==n&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(e))}},mounted:function(){var e=this,n={modules:e3({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};tb?(this.quill=new tb(this.$refs.editorElement,n),this.initQuill(),this.handleLoad()):l5(()=>import("./quill-077d366d.js").then(r=>r.q),[]).then(function(r){r&&ea.isExist(e.$refs.editorElement)&&(r.default?e.quill=new r.default(e.$refs.editorElement,n):e.quill=new r(e.$refs.editorElement,n),e.initQuill())}).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){this.quill&&(e?this.quill.setContents(this.quill.clipboard.convert(e)):this.quill.setText(""))},initQuill:function(){var e=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(n,r,i){if(i==="user"){var s=e.$refs.editorElement.children[0].innerHTML,o=e.quill.getText().trim();s==="<p><br></p>"&&(s=""),e.$emit("update:modelValue",s),e.$emit("text-change",{htmlValue:s,textValue:o,delta:n,source:i,instance:e.quill})}}),this.quill.on("selection-change",function(n,r,i){var s=e.$refs.editorElement.children[0].innerHTML,o=e.quill.getText().trim();e.$emit("selection-change",{htmlValue:s,textValue:o,range:n,oldRange:r,source:i,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})}}};function i3(t,e,n,r,i,s){return K(),Q("div",qe({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"editor"}),[A("div",qe({ref:"toolbarElement",class:t.cx("toolbar")},t.ptm("toolbar")),[Yu(t.$slots,"toolbar",{},function(){return[A("span",qe({class:"ql-formats"},t.ptm("formats")),[A("select",qe({class:"ql-header",defaultValue:"0"},t.ptm("header")),[A("option",qe({value:"1"},t.ptm("option")),"Heading",16),A("option",qe({value:"2"},t.ptm("option")),"Subheading",16),A("option",qe({value:"0"},t.ptm("option")),"Normal",16)],16),A("select",qe({class:"ql-font"},t.ptm("font")),[A("option",lC(Qb(t.ptm("option"))),null,16),A("option",qe({value:"serif"},t.ptm("option")),null,16),A("option",qe({value:"monospace"},t.ptm("option")),null,16)],16)],16),A("span",qe({class:"ql-formats"},t.ptm("formats")),[A("button",qe({class:"ql-bold",type:"button"},t.ptm("bold")),null,16),A("button",qe({class:"ql-italic",type:"button"},t.ptm("italic")),null,16),A("button",qe({class:"ql-underline",type:"button"},t.ptm("underline")),null,16)],16),(K(),Q("span",qe({key:i.reRenderColorKey,class:"ql-formats"},t.ptm("formats")),[A("select",qe({class:"ql-color"},t.ptm("color")),null,16),A("select",qe({class:"ql-background"},t.ptm("background")),null,16)],16)),A("span",qe({class:"ql-formats"},t.ptm("formats")),[A("button",qe({class:"ql-list",value:"ordered",type:"button"},t.ptm("list")),null,16),A("button",qe({class:"ql-list",value:"bullet",type:"button"},t.ptm("list")),null,16),A("select",qe({class:"ql-align"},t.ptm("select")),[A("option",qe({defaultValue:""},t.ptm("option")),null,16),A("option",qe({value:"center"},t.ptm("option")),null,16),A("option",qe({value:"right"},t.ptm("option")),null,16),A("option",qe({value:"justify"},t.ptm("option")),null,16)],16)],16),A("span",qe({class:"ql-formats"},t.ptm("formats")),[A("button",qe({class:"ql-link",type:"button"},t.ptm("link")),null,16),A("button",qe({class:"ql-image",type:"button"},t.ptm("image")),null,16),A("button",qe({class:"ql-code-block",type:"button"},t.ptm("codeBlock")),null,16)],16),A("span",qe({class:"ql-formats"},t.ptm("formats")),[A("button",qe({class:"ql-clean",type:"button"},t.ptm("clean")),null,16)],16)]})],16),A("div",qe({ref:"editorElement",class:t.cx("content"),style:t.editorStyle},t.ptm("content")),null,16)],16)}BS.render=i3;const s3={apiKey:"AIzaSyDdVa3kY-11_jpsT_Fw6wBXPq4BBm7M_0g",authDomain:"verite-45774.firebaseapp.com",projectId:"verite-45774",storageBucket:"verite-45774.appspot.com",messagingSenderId:"340822673051",appId:"1:340822673051:web:254f4d49dca48aef7ce83e",measurementId:"G-K8G599E418"},wy=Vd(s3);x1(wy);const Gu=X_(wy),o3=n5(wy),a3={setup(){const t=hy(),e=HE();ly(t,lu);const n=yn(""),r=yn([]),i=yn([]),s=yn("game 1"),o=yn(null),a=yn(null),l=p=>{const m=p.target.files[0];a.value=m},u=async()=>{try{await qB(t),console.log("User signed out successfully"),e.push("/")}catch(p){console.error("Error signing out:",p)}},d=async()=>{const p=await Si(Gu,"games"),m=await go(p);r.value=m.docs.map(g=>({id:g.id,name:g.data().game_name}))},c=async()=>{const p=Ji(Gu,"games",s.value),m=Si(p,"teams"),g=await go(m);i.value=g.docs.map(_=>({id:_.id,team_name:_.data().team_name,points:_.data().points}))},h=async()=>{console.log(s.value),i.value.forEach(async p=>{const m=Ji(Gu,"games",s.value),g=Ji(m,"teams",p.id);await Tp(g,{points:p.points})})},f=async()=>{const p=Si(Gu,"games"),m=Ji(p,n.value);if(await vw(m,{game_name:n.value}),a.value){const _=t5(o3,`game_posters/${m.id}`);await Z9(_,a.value);const y=await e5(_);await Tp(m,{game_poster:y})}if(o.value){const _=o.value;await Tp(m,{rules:_})}kU.teams.forEach(async _=>{const y=Si(m,"teams"),T=Ji(y,_.team_id);await vw(T,{team_name:_.team_name,points:_.points})}),n.value="",d(),c()};return Id(()=>{d(),c()}),{games:r,teams:i,selectedGame:s,gameName:n,gamePoster:a,rulesEditor:o,addPoints:h,addGame:f,fetchTeams:c,logout:u,onFileChange:l}},components:{Header:Ui,Editor:BS}},uu=t=>(Li("data-v-47f3351b"),t=t(),Fi(),t),l3={class:"w-[90%] mx-10 my-12 relative"},c3=uu(()=>A("h1",null,"ADD GAMES",-1)),u3={class:"flex flex-col w-1/2"},h3={class:"w-[90%] mx-10"},d3=uu(()=>A("h1",null,"ADD/CHANGE POINTS",-1)),f3=uu(()=>A("label",{for:"game"},"Select Game:",-1)),p3=["value"],m3=uu(()=>A("thead",null,[A("th",null,"Team"),A("th",null,"Points")],-1)),g3=["for"],_3=["id","onUpdate:modelValue"],y3=uu(()=>A("button",{class:"mt-4",type:"submit"},"Submit",-1));function v3(t,e,n,r,i,s){const o=Je("Header"),a=Je("Editor");return K(),Q(Ae,null,[we(o),A("div",l3,[A("button",{class:"absolute right-0 top-0",onClick:e[0]||(e[0]=(...l)=>r.logout&&r.logout(...l))},"Logout"),c3,A("div",u3,[Cl(A("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>r.gameName=l),placeholder:"Game Name",class:"outline-none"},null,512),[[Ch,r.gameName]]),A("input",{type:"file",accept:"image/*",onChange:e[2]||(e[2]=(...l)=>r.onFileChange&&r.onFileChange(...l))},null,32),we(a,{modelValue:r.rulesEditor,"onUpdate:modelValue":e[3]||(e[3]=l=>r.rulesEditor=l),placeholder:"Format Rules here"},null,8,["modelValue"]),A("button",{onClick:e[4]||(e[4]=(...l)=>r.addGame&&r.addGame(...l))},"Add Game")])]),A("div",h3,[d3,A("form",{onSubmit:e[7]||(e[7]=TP((...l)=>r.addPoints&&r.addPoints(...l),["prevent"]))},[f3,Cl(A("select",{"onUpdate:modelValue":e[5]||(e[5]=l=>r.selectedGame=l),id:"game",onChange:e[6]||(e[6]=(...l)=>r.fetchTeams&&r.fetchTeams(...l))},[(K(!0),Q(Ae,null,Mt(r.games,l=>(K(),Q("option",{key:l.id,value:l.id},rt(l.name),9,p3))),128))],544),[[vP,r.selectedGame]]),A("table",null,[m3,A("tbody",null,[(K(!0),Q(Ae,null,Mt(r.teams,l=>(K(),Q("tr",{key:l.id},[A("td",null,[A("label",{for:"team_"+l.id},rt(l.team_name),9,g3)]),A("td",null,[Cl(A("input",{id:"team_"+l.id,type:"number","onUpdate:modelValue":u=>l.points=u},null,8,_3),[[Ch,l.points]])])]))),128))])]),y3],32)])],64)}const w3=it(a3,[["render",v3],["__scopeId","data-v-47f3351b"]]);const b3={setup(){const t=HE(),e=yn(""),n=yn("");return{email:e,password:n,login:()=>{let i=!1;const s=hy();ly(s,lu),kB(s,e.value,n.value).then(()=>{i=!0,console.log("User logged in successfully")}).catch(o=>{alert(o.message)}),i||(console.log("pushing"),t.push("/admin"))}}},components:{Header:Ui}},jS=t=>(Li("data-v-6ba14811"),t=t(),Fi(),t),T3=jS(()=>A("div",{class:"paper-bg"},null,-1)),E3={class:"w-1/2 mx-auto my-10 border-[#1d1d1b] border-[1px] border-solid p-10 sm:w-[80%]"},A3=jS(()=>A("h1",null,"Login",-1)),I3={class:"flex flex-col"};function S3(t,e,n,r,i,s){const o=Je("Header");return K(),Q(Ae,null,[we(o),T3,A("div",E3,[A3,A("div",I3,[Cl(A("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),placeholder:"Email"},null,512),[[Ch,r.email]]),Cl(A("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),placeholder:"Password"},null,512),[[Ch,r.password]]),A("button",{onClick:e[2]||(e[2]=(...a)=>r.login&&r.login(...a))},"Login")])])],64)}const C3=it(b3,[["render",S3],["__scopeId","data-v-6ba14811"]]),R3="/assets/trophy-3a7e4d00.png";const P3={apiKey:"AIzaSyDdVa3kY-11_jpsT_Fw6wBXPq4BBm7M_0g",authDomain:"verite-45774.firebaseapp.com",projectId:"verite-45774",storageBucket:"verite-45774.appspot.com",messagingSenderId:"340822673051",appId:"1:340822673051:web:254f4d49dca48aef7ce83e",measurementId:"G-K8G599E418"},HS=Vd(P3);x1(HS);const x3={setup(){const t=yn([]),e=X_(HS);return(async()=>{const i=Ji(e,"games","game 1"),s=Si(i,"teams"),[o,a]=await Promise.all([go(s),go(Si(e,"games"))]),l=[],u={};await Promise.all(a.docs.map(async d=>{const c=d.id,h=Si(Ji(e,"games",c),"teams"),f=await go(h);u[c]={...d.data(),scores:f.docs.map(p=>({[p.id]:{team_name:p.data().team_name,points:p.data().points}}))}})),o.forEach(d=>{const c=d.data();let h=0;for(const f in u){const m=u[f].scores.find(g=>g[d.id]);m&&(h+=m[d.id].points)}c.totalPoints=h,l.push(c)}),t.value=l})(),{sortedTeams:yr(()=>t.value.sort((i,s)=>s.totalPoints-i.totalPoints)),teams:t}},components:{Header:Ui}},Af=t=>(Li("data-v-3ba967b4"),t=t(),Fi(),t),k3=Af(()=>A("div",{class:"paper-bg"},null,-1)),O3=Af(()=>A("div",{class:"banner-img w-screen absolute"},[A("img",{class:"shadow",src:R3,alt:"",srcset:""})],-1)),D3={class:"w-3/4 mx-auto flex items-center flex-col mt-[32%] sm:mt-[30%] mb-12"},q3=Af(()=>A("h1",{class:"mt-7 mb-12 text-[10vw] text-center sm:text-7xl"},"Leaderboard",-1)),M3={class:"table-container sm:!w-[100%]"},N3={class:"table sm:!text-lg"},V3=Af(()=>A("thead",{class:"table-header"},[A("th"),A("th",{style:{"text-align":"left"}},"Team"),A("th",null,"Points")],-1)),L3={class:"table-body"},F3={style:{"font-size":"2.5vw"}},$3={style:{"text-align":"left"}};function U3(t,e,n,r,i,s){const o=Je("Header");return K(),Q(Ae,null,[we(o),k3,O3,A("div",D3,[q3,A("div",M3,[A("table",N3,[V3,A("tbody",L3,[(K(!0),Q(Ae,null,Mt(r.sortedTeams,(a,l)=>(K(),Q("tr",{key:l},[A("td",F3,rt(l+1)+".",1),A("td",$3,[A("h3",null,rt(a.team_name),1)]),A("td",null,rt(a.totalPoints),1)]))),128))])])])])],64)}const B3=it(x3,[["render",U3],["__scopeId","data-v-3ba967b4"]]),zS=hy();ly(zS,lu);const j3=[{path:"/",name:"Home",component:DD},{path:"/test",name:"Test",component:bw},{path:"/games",name:"Games",component:I4},{path:"/blogs",name:"Blogs",component:bw},{path:"/teams",name:"Teams",component:PU},{path:"/team/:name",name:"Team",component:KI},{path:"/leaderboard",name:"Test",component:B3},{path:"/games/vertle",name:"SecretCode",component:K4},{path:"/hp",name:"HomeWithPlayer",component:J4},{path:"/admin",component:w3,meta:{requiresAuth:!0}},{path:"/login",component:C3}],WS=Nq({history:JD("/"),routes:j3});WS.beforeEach((t,e,n)=>{const r=zS.currentUser;t.matched.some(s=>s.meta.requiresAuth)&&!r?n("/login"):n()});IP(qD).use(WS).mount("#app");class H3{constructor(e,{color:n,background:r,backgroundOpacity:i,texture:s,amplitude:o,rippedFrequency:a,rippedAmplitude:l,curveFrequency:u,curveAmplitude:d,rippedDelta:c,rippedHeight:h,horizontal:f}={}){this.gl=e;const p=new XS(e),m=`
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      varying vec2 vImageUv;

      uniform vec2 uRatio;

      float map(float value, float min1, float max1, float min2, float max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
      }

      void main() {
          vUv = uv;
          vImageUv = vec2(
            map(uv.x, 0.0, 1.0, 0.5 - uRatio.x / 2.0, 0.5 + uRatio.x / 2.0),
            map(uv.y, 0.0, 1.0, 0.5 - uRatio.y / 2.0, 0.5 + uRatio.y / 2.0)
          );
          gl_Position = vec4(position, 0, 1);
      }
    `,g=`
        #define PI 3.1415926538
        #define NUM_OCTAVES 5

        precision highp float;
        uniform float uHorizontal;
        uniform float uProgress;
        uniform float uMaxAmplitude;
        uniform float uRippedNoiseFrequency;
        uniform float uCurveNoiseFrequency;
        uniform float uRippedNoiseAmplitude;
        uniform float uCurveNoiseAmplitude;
        uniform float uAspect;
        uniform float uRippedDelta;
        uniform sampler2D uTexture;
        uniform float uRippedHeight;
        uniform vec3 uColor;
        uniform sampler2D uImage;
        uniform vec3 uBackground;
        uniform float uBackgroundOpacity;
        uniform bool uInverted;
        varying vec2 vUv;
        varying vec2 vImageUv;

        // Simplex 2D noise
        //
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                   -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
          + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
            dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100);
          // Rotate to reduce axial bias
            mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * snoise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 aspectUv = vUv * vec2(uAspect, 1.);


          float amplitude = sin(uProgress * PI);
          float curve = amplitude * uMaxAmplitude *  sin((uHorizontal == 1. ? (1. - vUv.x) : vUv.y) * PI);

          float rippedNoise1 = fbm(aspectUv * uRippedNoiseFrequency) * uRippedNoiseAmplitude * amplitude;
          float curveNoise1 = snoise((aspectUv + vec2(-0.5)) * uCurveNoiseFrequency) * uCurveNoiseAmplitude * amplitude;

          float rippedNoise2 = fbm((aspectUv + vec2(uRippedDelta)) * uRippedNoiseFrequency) * uRippedNoiseAmplitude * amplitude;
          float curveNoise2 = snoise((aspectUv + vec2(uRippedDelta)) * uCurveNoiseFrequency) * uCurveNoiseAmplitude * amplitude;

          float colorLimit =  1. - (uProgress + curve - rippedNoise1 - curveNoise1 - ((uRippedHeight * .5) * amplitude));
          float rippedLimit =  1. - (uProgress + curve - rippedNoise2 - curveNoise2 + ((uRippedHeight * .5) * amplitude));

          gl_FragColor.rgb = uBackground;
          gl_FragColor.a = uBackgroundOpacity;

          if( (uHorizontal == 1. ? (1. - vUv.x) : vUv.y) > colorLimit) {
            vec4 image = texture2D(uImage, uInverted ? vec2(0.,1.) - vImageUv : vImageUv );
            if(image.a > 0.) {
              gl_FragColor = image;
            } else {
              gl_FragColor = vec4(uColor,1.);
            }
          } else if( (uHorizontal == 1. ? (1. - vUv.x) : vUv.y) > rippedLimit) {
            gl_FragColor = texture2D(uTexture, aspectUv);
          }
            
            
        }
    `;this.texture=new Sf(e,{wrapS:e.REPEAT,wrapT:e.REPEAT});const _=new Image;_.crossOrigin="anonymous",_.onload=()=>this.texture.image=_,_.src=s;const y={color:new fu(n)};this.uniforms={uProgress:{value:0},uMaxAmplitude:{value:o},uAspect:{value:1},uTexture:{value:this.texture},uRippedNoiseFrequency:{value:a},uRippedNoiseAmplitude:{value:l},uCurveNoiseFrequency:{value:u},uCurveNoiseAmplitude:{value:d},uRippedHeight:{value:h},uRippedDelta:{value:c},uImage:{value:new Sf(this.gl)},uRatio:{value:new Ty(0,0)},uColor:{value:y.color},uBackground:{value:new fu(r)},uBackgroundOpacity:{value:i},uInverted:{value:!1},uHorizontal:{value:f?1:0}};const T=new KS(e,{vertex:m,fragment:g,uniforms:this.uniforms,transparent:!0});this.mesh=new YS(e,{geometry:p,program:T})}setBackground(e,n){this.uniforms.uBackground.value=new fu(e),this.uniforms.uBackgroundOpacity.value=n}setColor(e){this.uniforms.uColor.value=new fu(e)}setInverted(e){this.uniforms.uInverted.value=e}setImage(e){const n=new Sf(this.gl,{wrapS:this.gl.REPEAT,wrapT:this.gl.REPEAT}),r=new Image;r.crossOrigin="anonymous";const i=new Promise((s,o)=>{r.onload=()=>{n.image=r;const a=r.naturalWidth/r.naturalHeight,u=window.innerWidth/window.innerHeight>a?window.innerWidth:window.innerHeight*a,d=u/a,c=new Ty(window.innerWidth/u,window.innerHeight/d);this.uniforms.uRatio.value=c,this.uniforms.uImage.value=n,s()}});return r.src=e,i}}class nb{constructor(e,{color:n="#292929",background:r="#292929",backgroundOpacity:i=0,ease:s="power2.inOut",duration:o=2,texture:a="",amplitude:l=.25,rippedFrequency:u=3.5,rippedAmplitude:d=.05,curveFrequency:c=1,curveAmplitude:h=1,rippedDelta:f=1,rippedHeight:p=.07,horizontal:m=!1}={}){this.canvas=e,this.initGL(),this.onCanvasResizeHandler=this.onCanvasResize.bind(this),this.resizeObserver=new ResizeObserver(this.onCanvasResizeHandler),this.resizeObserver.observe(this.canvas),this.curtain=new H3(this.gl,{color:n,background:r,backgroundOpacity:i,texture:a,amplitude:l,rippedFrequency:u,rippedAmplitude:d,curveFrequency:c,curveAmplitude:h,rippedDelta:f,rippedHeight:p,horizontal:m}),this.onFrameHandler=this.onFrame.bind(this),Pt.ticker.add(this.onFrameHandler),this.isLooping=!1,this.ease=s,this.duration=o}destroy(){this.resizeObserver.unobserve(this.canvas)}onCanvasResize(e){const n=e[0];this.canvasSize={width:n.contentRect.width,height:n.contentRect.height},this.resizeGL()}initGL(){this.renderer=new GS({canvas:this.canvas,antialias:!0,alpha:!0,dpr:1}),this.gl=this.renderer.gl}in(){this.tl&&this.tl.kill(),this.tl=Pt.to(this.curtain.uniforms.uProgress,{value:1,duration:this.duration,ease:this.ease,onComplete:()=>{document.body.dispatchEvent(new Event("paper-curtain"))}})}out(){this.tl&&this.tl.kill(),this.tl=Pt.to(this.curtain.uniforms.uProgress,{value:0,duration:this.duration,ease:this.ease,onComplete:()=>{document.body.dispatchEvent(new Event("paper-curtain"))}})}resizeGL(){this.renderer.setSize(this.canvasSize.width,this.canvasSize.height),this.curtain.uniforms.uAspect.value=this.canvasSize.width/this.canvasSize.height}onFrame(){this.renderer.render({scene:this.curtain.mesh}),this.isLooping&&(this.time=(this.time??0)+.01,this.curtain.uniforms.uProgress.value=(Math.sin(this.time)+1)*.5)}}window.addEventListener("load",()=>{document.querySelector("#below-canvas");const e=document.querySelector("#above-canvas");console.log("canvas: ",e);const n=new nb(e,{color:"#1D1D1B",background:"#000000",backgroundOpacity:0,ease:"power3.inOut",duration:2,texture:"https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/614f353f1e11a6a7afdd8b74_6059a3e2b9ae6d2bd508685c_pt-texture-2.jpg",amplitude:.25,rippedFrequency:3.5,rippedAmplitude:.05,curveFrequency:1,curveAmplitude:.1,rippedDelta:1,rippedHeight:.07,horizontal:!1});window.paperCurtainEffect=n;var r=document.querySelector(".nav.work");if(r){const d=r.querySelector(".gl-canvas canvas");window.workPaperCurtainEffect=new nb(d,{color:"#1D1D1B",background:"#000000",backgroundOpacity:0,ease:"power3.inOut",duration:2,texture:"https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/614f353f1e11a6a7afdd8b74_6059a3e2b9ae6d2bd508685c_pt-texture-2.jpg",amplitude:.25,rippedFrequency:3.5,rippedAmplitude:.05,curveFrequency:1,curveAmplitude:.1,rippedDelta:1,rippedHeight:.07,horizontal:!1})}let i=!1,s=!1;function o(d){i=!i,i?(document.querySelector(".hamburger").classList.add("active"),document.querySelector(".v-header").classList.add("active"),window.paperCurtainEffect.in(),setTimeout(()=>{document.querySelector(".nav").style.display="flex",a(!0)},800),setTimeout(()=>{document.querySelector(".nav .menu").style.backgroundColor="#1d1d1b"},2e3)):(window.paperCurtainEffect.out(),document.querySelector(".hamburger").classList.remove("active"),document.querySelector(".v-header").classList.remove("active"),document.querySelector(".nav .menu").style.backgroundColor="transparent",a(!1),setTimeout(()=>{document.querySelector(".nav").style.display="none",console.log("done")},1e3))}const a=d=>{document.querySelector(".nav");const c=document.querySelectorAll(".nav-item h1");d?Pt.fromTo(c,{y:"100%",opacity:0},{y:"0%",opacity:1,duration:1,stagger:.2,ease:"power4.out"}):(console.log("some"),Pt.fromTo(c,{y:"0%",opacity:1},{y:"100%",opacity:0,duration:.5,stagger:.2}))};function l(d){console.log("listener 1",s),i=!i,i?window.workPaperCurtainEffect.in():window.workPaperCurtainEffect.out()}r=document.querySelector(".nav.work"),r&&r.querySelector(".nav-block.r").addEventListener("click",l),[...document.querySelectorAll("a")].filter(d=>d.href.includes(document.location.host)).forEach(d=>{const c=d.href;d.addEventListener("click",()=>{console.log("clicked"),window.location.href=c})}),document.querySelector(".hamburger").addEventListener("click",o)});export{al as c,J3 as g};
