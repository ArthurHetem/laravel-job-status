import{Q as Ct}from"./QBtn.acc77519.js";import{c as A,h as re,a as St,b as qt,d as Me,e as Lt}from"./render.599fc38b.js";import{c as h,h as k,j as H,r as T,w as b,k as se,a as $e,g as Y,l as ue,H as Oe,o as ze,n as ie,m as B,p as Q,s as Ze,q as Tt,t as et,u as kt,v as te,x as ye,y as Qe,z as ge,A as ke,B as we,C as _t,D as tt,E as xt,G as Et,I as oe,b as $t,J as ot,_ as nt,K as X,L as J,M as E,d as z,N as lt,O as G,P as _e,Q as De,R as zt,S as Vt,F as Bt,U as We,V as Pt}from"./index.282533d9.js";import{Q as xe,g as Fe,s as Ae,c as Ht,u as Mt,a as Ot}from"./QBanner.0e4999db.js";import{u as Qt,a as Dt,Q as Re,b as Ee,c as Wt,d as Ft}from"./QItem.3d746a8c.js";import{v as At,c as Ne,g as Rt,Q as Nt}from"./use-router-link.a314b5ce.js";import{b as ne}from"./format.801e7424.js";import{C as Xt}from"./config.83e19d5f.js";var Yt=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=h(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:l.value},re(o.default))}}),It=A({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=h(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:l.value,role:"toolbar"},re(o.default))}}),Ut=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=Y(),t=$e(ue,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const n=T(parseInt(e.heightHint,10)),u=T(!0),f=h(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),c=h(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?n.value:0;const s=n.value-t.scroll.value.position;return s>0?s:0}),d=h(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),r=h(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),C=h(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=h(()=>{const s=t.rows.value.top,S={};return s[0]==="l"&&t.left.space===!0&&(S[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(S[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),S});function v(s,S){t.update("header",s,S)}function m(s,S){s.value!==S&&(s.value=S)}function _({height:s}){m(n,s),v("size",s)}function q(s){r.value===!0&&m(u,!0),l("focusin",s)}b(()=>e.modelValue,s=>{v("space",s),m(u,!0),t.animate()}),b(c,s=>{v("offset",s)}),b(()=>e.reveal,s=>{s===!1&&m(u,e.modelValue)}),b(u,s=>{t.animate(),l("reveal",s)}),b(t.scroll,s=>{e.reveal===!0&&m(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&v("size",n.value),v("space",e.modelValue),v("offset",c.value),se(()=>{t.instances.header===g&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const s=St(o.default,[]);return e.elevated===!0&&s.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(k(xe,{debounce:0,onResize:_})),k("header",{class:C.value,style:w.value,onFocusin:q},s)}}});function jt(e,o,l){let i;function t(){i!==void 0&&(Oe.remove(i),i=void 0)}return se(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>l.value===!0,handler:o},Oe.add(i)}}}const Kt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Jt=["beforeShow","show","beforeHide","hide"];function Gt({showing:e,canShow:o,hideOnRouteChange:l,handleShow:i,handleHide:t,processOnMount:n}){const u=Y(),{props:f,emit:c,proxy:d}=u;let r;function C(s){e.value===!0?m(s):w(s)}function w(s){if(f.disable===!0||s!==void 0&&s.qAnchorHandled===!0||o!==void 0&&o(s)!==!0)return;const S=f["onUpdate:modelValue"]!==void 0;S===!0&&(c("update:modelValue",!0),r=s,ie(()=>{r===s&&(r=void 0)})),(f.modelValue===null||S===!1)&&v(s)}function v(s){e.value!==!0&&(e.value=!0,c("beforeShow",s),i!==void 0?i(s):c("show",s))}function m(s){if(f.disable===!0)return;const S=f["onUpdate:modelValue"]!==void 0;S===!0&&(c("update:modelValue",!1),r=s,ie(()=>{r===s&&(r=void 0)})),(f.modelValue===null||S===!1)&&_(s)}function _(s){e.value!==!1&&(e.value=!1,c("beforeHide",s),t!==void 0?t(s):c("hide",s))}function q(s){f.disable===!0&&s===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):s===!0!==e.value&&(s===!0?v:_)(r)}b(()=>f.modelValue,q),l!==void 0&&At(u)===!0&&b(()=>d.$route.fullPath,()=>{l.value===!0&&e.value===!0&&m()}),n===!0&&ze(()=>{q(f.modelValue)});const g={show:w,hide:m,toggle:C};return Object.assign(d,g),g}const Zt=[null,document,document.body,document.scrollingElement,document.documentElement];function eo(e,o){let l=Rt(o);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Zt.includes(l)?window:l}function at(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function it(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function be(){if(le!==void 0)return le;const e=document.createElement("p"),o=document.createElement("div");Ne(e,{width:"100%",height:"200px"}),Ne(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const l=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return l===i&&(i=o.clientWidth),o.remove(),le=l-i,le}function to(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let j=0,Ce,Se,K,qe=!1,Xe,Ye,Ie,F=null;function oo(e){no(e)&&Ze(e)}function no(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Tt(e),l=e.shiftKey&&!e.deltaX,i=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||i?e.deltaY:e.deltaX;for(let n=0;n<o.length;n++){const u=o[n];if(to(u,i))return i?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Ue(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){qe!==!0&&(qe=!0,requestAnimationFrame(()=>{qe=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:i}=document.scrollingElement;(K===void 0||o!==window.innerHeight)&&(K=l-o,document.scrollingElement.scrollTop=i),i>K&&(document.scrollingElement.scrollTop-=Math.ceil((i-K)/8))}))}function je(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);Ce=it(window),Se=at(window),Xe=o.style.left,Ye=o.style.top,Ie=window.location.href,o.style.left=`-${Ce}px`,o.style.top=`-${Se}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,B.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,Q.passiveCapture),window.visualViewport.addEventListener("scroll",ae,Q.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ue,Q.passiveCapture))}B.is.desktop===!0&&B.is.mac===!0&&window[`${e}EventListener`]("wheel",oo,Q.notPassive),e==="remove"&&(B.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",ae,Q.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,Q.passiveCapture)):window.removeEventListener("scroll",Ue,Q.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Xe,o.style.top=Ye,window.location.href===Ie&&window.scrollTo(Ce,Se),K=void 0)}function lo(e){let o="add";if(e===!0){if(j++,F!==null){clearTimeout(F),F=null;return}if(j>1)return}else{if(j===0||(j--,j>0))return;if(o="remove",B.is.ios===!0&&B.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{je(o),F=null},100);return}}je(o)}function ao(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,lo(o))}}}function Le(e,o,l){const i=ke(e);let t,n=i.left-o.event.x,u=i.top-o.event.y,f=Math.abs(n),c=Math.abs(u);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=n<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=u<0?"up":"down":d.up===!0&&u<0?(t="up",f>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.down===!0&&u>0?(t="down",f>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.left===!0&&n<0?(t="left",f<c&&(d.up===!0&&u<0?t="up":d.down===!0&&u>0&&(t="down"))):d.right===!0&&n>0&&(t="right",f<c&&(d.up===!0&&u<0?t="up":d.down===!0&&u>0&&(t="down")));let r=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(i.left-=n,f=0,n=0):(i.top-=u,c=0,u=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:n,y:u},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let io=0;var Te=qt({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&B.has.touch!==!0)return;function i(n,u){l.mouse===!0&&u===!0?Ze(n):(l.stop===!0&&ge(n),l.prevent===!0&&Qe(n))}const t={uid:"qvtp_"+io++,handler:o,modifiers:l,direction:Fe(l),noop:et,mouseStart(n){Ae(n,t)&&kt(n)&&(te(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Ae(n,t)){const u=n.target;te(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(B.is.firefox===!0&&ye(e,!0),t.lastEvt=n,u===!0||l.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Qe(d),n.cancelBubble===!0&&ge(d),Object.assign(d,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:d}}ge(n)}const{left:f,top:c}=ke(n);t.event={x:f,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(n){if(t.event===void 0)return;const u=ke(n),f=u.left-t.event.x,c=u.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=n;const d=t.event.mouse===!0,r=()=>{i(n,d);let v;l.preserveCursor!==!0&&l.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ht(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),d===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{_(),m()},50):_()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(n,t.event.mouse);const{payload:v,synthetic:m}=Le(n,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=m===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(n);return}const C=Math.abs(f),w=Math.abs(c);C!==w&&(t.direction.horizontal===!0&&C>w||t.direction.vertical===!0&&C<w||t.direction.up===!0&&C<w&&c<0||t.direction.down===!0&&C<w&&c>0||t.direction.left===!0&&C>w&&f<0||t.direction.right===!0&&C>w&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(we(t,"temp"),B.is.firefox===!0&&ye(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=Le(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const n=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";te(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}B.has.touch===!0&&te(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=Fe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),we(o,"main"),we(o,"temp"),B.is.firefox===!0&&ye(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Ke=150;var ro=A({name:"QDrawer",inheritAttrs:!1,props:{...Kt,...Qt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Jt,"onLayout","miniState"],setup(e,{slots:o,emit:l,attrs:i}){const t=Y(),{proxy:{$q:n}}=t,u=Dt(e,n),{preventBodyScroll:f}=ao(),{registerTimeout:c,removeTimeout:d}=Mt(),r=$e(ue,H);if(r===H)return console.error("QDrawer needs to be child of QLayout"),H;let C,w=null,v;const m=T(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),_=h(()=>e.mini===!0&&m.value!==!0),q=h(()=>_.value===!0?e.miniWidth:e.width),g=T(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),s=h(()=>e.persistent!==!0&&(m.value===!0||rt.value===!0));function S(a,p){if(D(),a!==!1&&r.animate(),V(0),m.value===!0){const x=r.instances[Z.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),M(1),r.isContainer.value!==!0&&f(!0)}else M(0),a!==!1&&me(!1);c(()=>{a!==!1&&me(!0),p!==!0&&l("show",a)},Ke)}function y(a,p){I(),a!==!1&&r.animate(),M(0),V(R.value*q.value),he(),p!==!0?c(()=>{l("hide",a)},Ke):d()}const{show:L,hide:$}=Gt({showing:g,hideOnRouteChange:s,handleShow:S,handleHide:y}),{addToHistory:D,removeFromHistory:I}=jt(g,$,s),W={belowBreakpoint:m,hide:$},P=h(()=>e.side==="right"),R=h(()=>(n.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),Ve=T(0),N=T(!1),de=T(!1),Be=T(q.value*R.value),Z=h(()=>P.value===!0?"left":"right"),ce=h(()=>g.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),fe=h(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(P.value?"R":"L")>-1||n.platform.is.ios===!0&&r.isContainer.value===!0),U=h(()=>e.overlay===!1&&g.value===!0&&m.value===!1),rt=h(()=>e.overlay===!0&&g.value===!0&&m.value===!1),st=h(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&N.value===!1?" hidden":"")),ut=h(()=>({backgroundColor:`rgba(0,0,0,${Ve.value*.4})`})),Pe=h(()=>P.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),dt=h(()=>P.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),ct=h(()=>{const a={};return r.header.space===!0&&Pe.value===!1&&(fe.value===!0?a.top=`${r.header.offset}px`:r.header.space===!0&&(a.top=`${r.header.size}px`)),r.footer.space===!0&&dt.value===!1&&(fe.value===!0?a.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(a.bottom=`${r.footer.size}px`)),a}),ft=h(()=>{const a={width:`${q.value}px`,transform:`translateX(${Be.value}px)`};return m.value===!0?a:Object.assign(a,ct.value)}),vt=h(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),mt=h(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(fe.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Pe.value===!0?" q-drawer--top-padding":""))),ht=h(()=>{const a=n.lang.rtl===!0?e.side:Z.value;return[[Te,wt,void 0,{[a]:!0,mouse:!0}]]}),pt=h(()=>{const a=n.lang.rtl===!0?Z.value:e.side;return[[Te,He,void 0,{[a]:!0,mouse:!0}]]}),yt=h(()=>{const a=n.lang.rtl===!0?Z.value:e.side;return[[Te,He,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){bt(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}b(m,a=>{a===!0?(C=g.value,g.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(g.value===!0?(V(0),M(0),he()):L(!1))}),b(()=>e.side,(a,p)=>{r.instances[p]===W&&(r.instances[p]=void 0,r[p].space=!1,r[p].offset=0),r.instances[a]=W,r[a].size=q.value,r[a].space=U.value,r[a].offset=ce.value}),b(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),b(()=>e.behavior+e.breakpoint,ve),b(r.isContainer,a=>{g.value===!0&&f(a!==!0),a===!0&&ve()}),b(r.scrollbarWidth,()=>{V(g.value===!0?0:void 0)}),b(ce,a=>{O("offset",a)}),b(U,a=>{l("onLayout",a),O("space",a)}),b(P,()=>{V()}),b(q,a=>{V(),pe(e.miniToOverlay,a)}),b(()=>e.miniToOverlay,a=>{pe(a,q.value)}),b(()=>n.lang.rtl,()=>{V()}),b(()=>e.mini,()=>{e.modelValue===!0&&(gt(),r.animate())}),b(_,a=>{l("miniState",a)});function V(a){a===void 0?ie(()=>{a=g.value===!0?0:q.value,V(R.value*a)}):(r.isContainer.value===!0&&P.value===!0&&(m.value===!0||Math.abs(a)===q.value)&&(a+=R.value*r.scrollbarWidth.value),Be.value=a)}function M(a){Ve.value=a}function me(a){const p=a===!0?"remove":r.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function gt(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,w=setTimeout(()=>{w=null,de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function wt(a){if(g.value!==!1)return;const p=q.value,x=ne(a.distance.x,0,p);if(a.isFinal===!0){x>=Math.min(75,p)===!0?L():(r.animate(),M(0),V(R.value*p)),N.value=!1;return}V((n.lang.rtl===!0?P.value!==!0:P.value)?Math.max(p-x,0):Math.min(0,x-p)),M(ne(x/p,0,1)),a.isFirst===!0&&(N.value=!0)}function He(a){if(g.value!==!0)return;const p=q.value,x=a.direction===e.side,ee=(n.lang.rtl===!0?x!==!0:x)?ne(a.distance.x,0,p):0;if(a.isFinal===!0){Math.abs(ee)<Math.min(75,p)===!0?(r.animate(),M(1),V(0)):$(),N.value=!1;return}V(R.value*ee),M(ne(1-ee/p,0,1)),a.isFirst===!0&&(N.value=!0)}function he(){f(!1),me(!0)}function O(a,p){r.update(e.side,a,p)}function bt(a,p){a.value!==p&&(a.value=p)}function pe(a,p){O("size",a===!0?e.miniWidth:p)}return r.instances[e.side]=W,pe(e.miniToOverlay,q.value),O("space",U.value),O("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),ze(()=>{l("onLayout",U.value),l("miniState",_.value),C=e.showIfAbove===!0;const a=()=>{(g.value===!0?S:y)(!1,!0)};if(r.totalWidth.value!==0){ie(a);return}v=b(r.totalWidth,()=>{v(),v=void 0,g.value===!1&&e.showIfAbove===!0&&m.value===!1?L(!1):a()})}),se(()=>{v!==void 0&&v(),w!==null&&(clearTimeout(w),w=null),g.value===!0&&he(),r.instances[e.side]===W&&(r.instances[e.side]=void 0,O("size",0),O("offset",0),O("space",!1))}),()=>{const a=[];m.value===!0&&(e.noSwipeOpen===!1&&a.push(_t(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ht.value)),a.push(Me("div",{ref:"backdrop",class:st.value,style:ut.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>yt.value)));const p=_.value===!0&&o.mini!==void 0,x=[k("div",{...i,key:""+p,class:[vt.value,i.class]},p===!0?o.mini():re(o.default))];return e.elevated===!0&&g.value===!0&&x.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Me("aside",{ref:"content",class:mt.value,style:ft.value},x,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>pt.value)),k("div",{class:"q-drawer-container"},a)}}}),so=A({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=Y(),i=$e(ue,H);if(i===H)return console.error("QPageContainer needs to be child of QLayout"),H;tt(xt,!0);const t=h(()=>{const n={};return i.header.space===!0&&(n.paddingTop=`${i.header.size}px`),i.right.space===!0&&(n[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(n.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(n[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),n});return()=>k("div",{class:"q-page-container",style:t.value},re(o.default))}});const{passive:Je}=Q,uo=["both","horizontal","vertical"];var co=A({name:"QScrollObserver",props:{axis:{type:String,validator:e=>uo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,n;b(()=>e.scrollTarget,()=>{c(),f()});function u(){i!==null&&i();const C=Math.max(0,at(t)),w=it(t),v={top:C-l.position.top,left:w-l.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const m=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";l.position={top:C,left:w},l.directionChanged=l.direction!==m,l.delta=v,l.directionChanged===!0&&(l.direction=m,l.inflectionPoint=l.position),o("scroll",{...l})}function f(){t=eo(n,e.scrollTarget),t.addEventListener("scroll",d,Je),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,Je),t=void 0)}function d(C){if(C===!0||e.debounce===0||e.debounce==="0")u();else if(i===null){const[w,v]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];i=()=>{v(w),i=null}}}const{proxy:r}=Y();return b(()=>r.$q.lang.rtl,u),ze(()=>{n=r.$el.parentNode,f()}),se(()=>{i!==null&&i(),c()}),Object.assign(r,{trigger:d,getPosition:()=>l}),et}}),fo=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=Y(),t=T(null),n=T(i.screen.height),u=T(e.container===!0?0:i.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),d=T(Et.value===!0?0:be()),r=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=h(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),w=h(()=>d.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),v=h(()=>d.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function m(y){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=L,e.onScroll!==void 0&&l("scroll",L)}}function _(y){const{height:L,width:$}=y;let D=!1;n.value!==L&&(D=!0,n.value=L,e.onScrollHeight!==void 0&&l("scrollHeight",L),g()),u.value!==$&&(D=!0,u.value=$),D===!0&&e.onResize!==void 0&&l("resize",y)}function q({height:y}){c.value!==y&&(c.value=y,g())}function g(){if(e.container===!0){const y=n.value>c.value?be():0;d.value!==y&&(d.value=y)}}let s=null;const S={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:d,totalWidth:h(()=>u.value+d.value),rows:h(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:f,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,L,$){S[y][L]=$}};if(tt(ue,S),be()>0){let $=function(){y=null,L.classList.remove("hide-scrollbar")},D=function(){if(y===null){if(L.scrollHeight>i.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout($,300)},I=function(W){y!==null&&W==="remove"&&(clearTimeout(y),$()),window[`${W}EventListener`]("resize",D)},y=null;const L=document.body;b(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),$t(()=>{I("remove")})}return()=>{const y=Lt(o.default,[k(co,{onScroll:m}),k(xe,{onResize:_})]),L=k("div",{class:r.value,style:C.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(xe,{onResize:q}),k("div",{class:"absolute-full",style:w.value},[k("div",{class:"scroll",style:v.value},[L])])]):L}}});const vo=ot({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},route:{default:null},icon:{type:String,default:""}}});function mo(e,o,l,i,t,n){return X(),J(Wt,{clickable:"",tag:"a",to:e.route},{default:E(()=>[e.icon?(X(),J(Re,{key:0,avatar:""},{default:E(()=>[z(Nt,{name:e.icon},null,8,["name"])]),_:1})):lt("",!0),z(Re,null,{default:E(()=>[z(Ee,null,{default:E(()=>[G(_e(e.title),1)]),_:1}),z(Ee,{caption:""},{default:E(()=>[G(_e(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var ho=nt(vo,[["render",mo]]);function Ge(){const e=Xt.get(),o=T(e.version),l=T(e.domain),i=T(e.path),t=T(e.assets_in_date);return{version:o,domain:l,path:i,assets_in_date:t}}const po=[{title:"Dashboard",caption:"Job dashboard.",icon:"dashboard",route:{path:"/dashboard"}},{title:"Jobs",caption:"All tracked jobs.",icon:"list",route:{path:"/jobs"}},{title:"History",caption:"A list of all runs your queue worker has made.",icon:"manage_search",route:{path:"/history"}},{title:"Batches",caption:"A list of all the batches in your system.",icon:"manage_search",route:{path:"/batch"}}],yo=ot({name:"MainLayout",components:{EssentialLink:ho},setup(){const e=T(!1);return{version:Ge().version,assets_in_date:Ge().assets_in_date,essentialLinks:po,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),go={href:"https://github.com/tobytwigger/laravel-job-status",style:{color:"white","text-decoration":"none"}};function wo(e,o,l,i,t,n){const u=We("EssentialLink"),f=We("router-view");return X(),J(fo,{view:"hHh lpR fFf"},{default:E(()=>[z(Ut,{elevated:""},{default:E(()=>[z(It,null,{default:E(()=>[z(Ct,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),z(Yt,null,{default:E(()=>[G(" Job Tracker ")]),_:1}),De("div",null,[De("a",go," Version "+_e(e.version),1)])]),_:1})]),_:1}),z(ro,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:E(()=>[z(Ft,null,{default:E(()=>[z(Ee,{header:""},{default:E(()=>[G(" Essential Links ")]),_:1}),(X(!0),zt(Bt,null,Vt(e.essentialLinks,c=>(X(),J(u,Pt({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),z(so,null,{default:E(()=>[e.assets_in_date?lt("",!0):(X(),J(Ot,{key:0,class:"bg-warning text-black"},{default:E(()=>[G(" The assets are not in date, which makes this site unstable. Run `artisan job:install` to update them. ")]),_:1})),z(f)]),_:1})]),_:1})}var Eo=nt(yo,[["render",wo]]);export{Eo as default};
