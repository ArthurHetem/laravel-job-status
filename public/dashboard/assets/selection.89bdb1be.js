import{v as x,g as H,c as b,d as L}from"./QBtn.ad7d6539.js";import{w as y,o as M,g as V,z as T,$ as W,k as C,a0 as P}from"./index.4e766ee7.js";const z={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},D=["beforeShow","show","beforeHide","hide"];function N({showing:e,canShow:t,hideOnRouteChange:l,handleShow:n,handleHide:d,processOnMount:S}){const f=V(),{props:i,emit:s,proxy:m}=f;let u;function E(o){e.value===!0?c(o):p(o)}function p(o){if(i.disable===!0||o!==void 0&&o.qAnchorHandled===!0||t!==void 0&&t(o)!==!0)return;const r=i["onUpdate:modelValue"]!==void 0;r===!0&&(s("update:modelValue",!0),u=o,T(()=>{u===o&&(u=void 0)})),(i.modelValue===null||r===!1)&&w(o)}function w(o){e.value!==!0&&(e.value=!0,s("beforeShow",o),n!==void 0?n(o):s("show",o))}function c(o){if(i.disable===!0)return;const r=i["onUpdate:modelValue"]!==void 0;r===!0&&(s("update:modelValue",!1),u=o,T(()=>{u===o&&(u=void 0)})),(i.modelValue===null||r===!1)&&g(o)}function g(o){e.value!==!1&&(e.value=!1,s("beforeHide",o),d!==void 0?d(o):s("hide",o))}function v(o){i.disable===!0&&o===!0?i["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):o===!0!==e.value&&(o===!0?w:g)(u)}y(()=>i.modelValue,v),l!==void 0&&x(f)===!0&&y(()=>m.$route.fullPath,()=>{l.value===!0&&e.value===!0&&c()}),S===!0&&M(()=>{v(i.modelValue)});const h={show:p,hide:c,toggle:E};return Object.assign(m,h),h}const U=[null,document,document.body,document.scrollingElement,document.documentElement];function O(e,t){let l=H(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return U.includes(l)?window:l}function k(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function B(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let a;function I(){if(a!==void 0)return a;const e=document.createElement("p"),t=document.createElement("div");b(e,{width:"100%",height:"200px"}),b(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return l===n&&(n=t.clientWidth),t.remove(),a=l-n,a}function X(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function Y(){let e=null;const t=V();function l(){e!==null&&(clearTimeout(e),e=null)}return W(l),C(l),{removeTimeout:l,registerTimeout(n,d){l(),L(t)===!1&&(e=setTimeout(n,d))}}}function $(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),P.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{D as a,Y as b,$ as c,N as d,k as e,B as f,O as g,I as h,X as i,z as u};
