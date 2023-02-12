import{Q as at,a as nt}from"./QBtn.1ade33fc.js";import{c as V,h as ee,a as ot,b as it,d as _e,e as lt}from"./render.99e9fd73.js";import{c as d,h as k,i as be,j as Q,r as S,w,k as we,l as te,g as Y,m as N,n as De,p as rt,q as K,s as se,t as Le,u as ce,v as me,x as de,y as ut,o as Me,z as $e,A as st,B as He,C as ct,D as dt,E as ft,G,a as vt,H as Ve,_ as Fe,I as R,J as j,K as T,d as B,L as Ae,M as X,N as pe,O as Te,P as xe,Q as ht,R as mt,F as pt,S as gt}from"./index.f77ee584.js";import{Q as ge,g as Be,s as ze,a as yt}from"./QBanner.6494fd70.js";import{u as bt,a as wt,Q as Ee,b as ye,c as Ct,d as qt}from"./QItem.83c92a13.js";import{u as St,a as kt,b as _t,c as Lt,d as $t,g as Tt,e as xt,f as Bt,h as fe}from"./use-prevent-scroll.39e2cf85.js";import{c as zt,u as Et}from"./selection.39fa8692.js";import{b as Z}from"./format.a33550d6.js";var Pt=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:o.value},ee(l.default))}}),Qt=V({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:o.value,role:"toolbar"},ee(l.default))}}),Ot=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:r}}=Y(),t=be(te,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=S(parseInt(e.heightHint,10)),u=S(!0),p=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),v=d(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return u.value===!0?a.value:0;const c=a.value-t.scroll.value.position;return c>0?c:0}),s=d(()=>e.modelValue!==!0||p.value===!0&&u.value!==!0),i=d(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),C=d(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=d(()=>{const c=t.rows.value.top,L={};return c[0]==="l"&&t.left.space===!0&&(L[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),c[2]==="r"&&t.right.space===!0&&(L[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function f(c,L){t.update("header",c,L)}function h(c,L){c.value!==L&&(c.value=L)}function z({height:c}){h(a,c),f("size",c)}function _(c){i.value===!0&&h(u,!0),o("focusin",c)}w(()=>e.modelValue,c=>{f("space",c),h(u,!0),t.animate()}),w(v,c=>{f("offset",c)}),w(()=>e.reveal,c=>{c===!1&&h(u,e.modelValue)}),w(u,c=>{t.animate(),o("reveal",c)}),w(t.scroll,c=>{e.reveal===!0&&h(u,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&f("size",a.value),f("space",e.modelValue),f("offset",v.value),we(()=>{t.instances.header===y&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const c=ot(l.default,[]);return e.elevated===!0&&c.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(k(ge,{debounce:0,onResize:z})),k("header",{class:C.value,style:b.value,onFocusin:_},c)}}});function ve(e,l,o){const r=me(e);let t,a=r.left-l.event.x,u=r.top-l.event.y,p=Math.abs(a),v=Math.abs(u);const s=l.direction;s.horizontal===!0&&s.vertical!==!0?t=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=u<0?"up":"down":s.up===!0&&u<0?(t="up",p>v&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.down===!0&&u>0?(t="down",p>v&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.left===!0&&a<0?(t="left",p<v&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down"))):s.right===!0&&a>0&&(t="right",p<v&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&o===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,i=!0,t==="left"||t==="right"?(r.left-=a,p=0,a=0):(r.top-=u,v=0,u=0)}return{synthetic:i,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:r,direction:t,isFirst:l.event.isFirst,isFinal:o===!0,duration:Date.now()-l.event.time,distance:{x:p,y:v},offset:{x:a,y:u},delta:{x:r.left-l.event.lastX,y:r.top-l.event.lastY}}}}let Dt=0;var he=it({name:"touch-pan",beforeMount(e,{value:l,modifiers:o}){if(o.mouse!==!0&&N.has.touch!==!0)return;function r(a,u){o.mouse===!0&&u===!0?ut(a):(o.stop===!0&&ce(a),o.prevent===!0&&Le(a))}const t={uid:"qvtp_"+Dt++,handler:l,modifiers:o,direction:Be(o),noop:De,mouseStart(a){ze(a,t)&&rt(a)&&(K(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(ze(a,t)){const u=a.target;K(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(N.is.firefox===!0&&se(e,!0),t.lastEvt=a,u===!0||o.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Le(s),a.cancelBubble===!0&&ce(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:s}}ce(a)}const{left:p,top:v}=me(a);t.event={x:p,y:v,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:p,lastY:v}},move(a){if(t.event===void 0)return;const u=me(a),p=u.left-t.event.x,v=u.top-t.event.y;if(p===0&&v===0)return;t.lastEvt=a;const s=t.event.mouse===!0,i=()=>{r(a,s);let f;o.preserveCursor!==!0&&o.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),zt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),s===!0){const z=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{z(),h()},50):z()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:f,synthetic:h}=ve(a,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=h===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const C=Math.abs(p),b=Math.abs(v);C!==b&&(t.direction.horizontal===!0&&C>b||t.direction.vertical===!0&&C<b||t.direction.up===!0&&C<b&&v<0||t.direction.down===!0&&C<b&&v>0||t.direction.left===!0&&C>b&&p<0||t.direction.right===!0&&C>b&&p>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(de(t,"temp"),N.is.firefox===!0&&se(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ve(a===void 0?t.lastEvt:a,t).payload);const{payload:p}=ve(a===void 0?t.lastEvt:a,t,!0),v=()=>{t.handler(p)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";K(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}N.has.touch===!0&&K(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const o=e.__qtouchpan;o!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&o.end(),o.handler=l.value),o.direction=Be(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),de(l,"main"),de(l,"temp"),N.is.firefox===!0&&se(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});const Pe=150;var Mt=V({name:"QDrawer",inheritAttrs:!1,props:{...St,...bt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...kt,"onLayout","miniState"],setup(e,{slots:l,emit:o,attrs:r}){const t=Y(),{proxy:{$q:a}}=t,u=wt(e,a),{preventBodyScroll:p}=$t(),{registerTimeout:v,removeTimeout:s}=Et(),i=be(te,Q);if(i===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let C,b=null,f;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),z=d(()=>e.mini===!0&&h.value!==!0),_=d(()=>z.value===!0?e.miniWidth:e.width),y=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),c=d(()=>e.persistent!==!0&&(h.value===!0||Re.value===!0));function L(n,m){if(M(),n!==!1&&i.animate(),E(0),h.value===!0){const $=i.instances[J.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),O(1),i.isContainer.value!==!0&&p(!0)}else O(0),n!==!1&&le(!1);v(()=>{n!==!1&&le(!0),m!==!0&&o("show",n)},Pe)}function g(n,m){W(),n!==!1&&i.animate(),O(0),E(F.value*_.value),re(),m!==!0?v(()=>{o("hide",n)},Pe):s()}const{show:q,hide:x}=_t({showing:y,hideOnRouteChange:c,handleShow:L,handleHide:g}),{addToHistory:M,removeFromHistory:W}=Lt(y,x,c),H={belowBreakpoint:h,hide:x},P=d(()=>e.side==="right"),F=d(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),Ce=S(0),A=S(!1),ae=S(!1),qe=S(_.value*F.value),J=d(()=>P.value===!0?"left":"right"),ne=d(()=>y.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),oe=d(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(P.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),I=d(()=>e.overlay===!1&&y.value===!0&&h.value===!1),Re=d(()=>e.overlay===!0&&y.value===!0&&h.value===!1),We=d(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&A.value===!1?" hidden":"")),Ie=d(()=>({backgroundColor:`rgba(0,0,0,${Ce.value*.4})`})),Se=d(()=>P.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ne=d(()=>P.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),je=d(()=>{const n={};return i.header.space===!0&&Se.value===!1&&(oe.value===!0?n.top=`${i.header.offset}px`:i.header.space===!0&&(n.top=`${i.header.size}px`)),i.footer.space===!0&&Ne.value===!1&&(oe.value===!0?n.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(n.bottom=`${i.footer.size}px`)),n}),Xe=d(()=>{const n={width:`${_.value}px`,transform:`translateX(${qe.value}px)`};return h.value===!0?n:Object.assign(n,je.value)}),Ye=d(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Je=d(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${z.value===!0?"mini":"standard"}`+(oe.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Se.value===!0?" q-drawer--top-padding":""))),Ue=d(()=>{const n=a.lang.rtl===!0?e.side:J.value;return[[he,et,void 0,{[n]:!0,mouse:!0}]]}),Ke=d(()=>{const n=a.lang.rtl===!0?J.value:e.side;return[[he,ke,void 0,{[n]:!0,mouse:!0}]]}),Ge=d(()=>{const n=a.lang.rtl===!0?J.value:e.side;return[[he,ke,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){tt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}w(h,n=>{n===!0?(C=y.value,y.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(y.value===!0?(E(0),O(0),re()):q(!1))}),w(()=>e.side,(n,m)=>{i.instances[m]===H&&(i.instances[m]=void 0,i[m].space=!1,i[m].offset=0),i.instances[n]=H,i[n].size=_.value,i[n].space=I.value,i[n].offset=ne.value}),w(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),w(()=>e.behavior+e.breakpoint,ie),w(i.isContainer,n=>{y.value===!0&&p(n!==!0),n===!0&&ie()}),w(i.scrollbarWidth,()=>{E(y.value===!0?0:void 0)}),w(ne,n=>{D("offset",n)}),w(I,n=>{o("onLayout",n),D("space",n)}),w(P,()=>{E()}),w(_,n=>{E(),ue(e.miniToOverlay,n)}),w(()=>e.miniToOverlay,n=>{ue(n,_.value)}),w(()=>a.lang.rtl,()=>{E()}),w(()=>e.mini,()=>{e.modelValue===!0&&(Ze(),i.animate())}),w(z,n=>{o("miniState",n)});function E(n){n===void 0?$e(()=>{n=y.value===!0?0:_.value,E(F.value*n)}):(i.isContainer.value===!0&&P.value===!0&&(h.value===!0||Math.abs(n)===_.value)&&(n+=F.value*i.scrollbarWidth.value),qe.value=n)}function O(n){Ce.value=n}function le(n){const m=n===!0?"remove":i.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function Ze(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,b=setTimeout(()=>{b=null,ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function et(n){if(y.value!==!1)return;const m=_.value,$=Z(n.distance.x,0,m);if(n.isFinal===!0){$>=Math.min(75,m)===!0?q():(i.animate(),O(0),E(F.value*m)),A.value=!1;return}E((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(m-$,0):Math.min(0,$-m)),O(Z($/m,0,1)),n.isFirst===!0&&(A.value=!0)}function ke(n){if(y.value!==!0)return;const m=_.value,$=n.direction===e.side,U=(a.lang.rtl===!0?$!==!0:$)?Z(n.distance.x,0,m):0;if(n.isFinal===!0){Math.abs(U)<Math.min(75,m)===!0?(i.animate(),O(1),E(0)):x(),A.value=!1;return}E(F.value*U),O(Z(1-U/m,0,1)),n.isFirst===!0&&(A.value=!0)}function re(){p(!1),le(!0)}function D(n,m){i.update(e.side,n,m)}function tt(n,m){n.value!==m&&(n.value=m)}function ue(n,m){D("size",n===!0?e.miniWidth:m)}return i.instances[e.side]=H,ue(e.miniToOverlay,_.value),D("space",I.value),D("offset",ne.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),Me(()=>{o("onLayout",I.value),o("miniState",z.value),C=e.showIfAbove===!0;const n=()=>{(y.value===!0?L:g)(!1,!0)};if(i.totalWidth.value!==0){$e(n);return}f=w(i.totalWidth,()=>{f(),f=void 0,y.value===!1&&e.showIfAbove===!0&&h.value===!1?q(!1):n()})}),we(()=>{f!==void 0&&f(),b!==null&&(clearTimeout(b),b=null),y.value===!0&&re(),i.instances[e.side]===H&&(i.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const n=[];h.value===!0&&(e.noSwipeOpen===!1&&n.push(st(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ue.value)),n.push(_e("div",{ref:"backdrop",class:We.value,style:Ie.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>Ge.value)));const m=z.value===!0&&l.mini!==void 0,$=[k("div",{...r,key:""+m,class:[Ye.value,r.class]},m===!0?l.mini():ee(l.default))];return e.elevated===!0&&y.value===!0&&$.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(_e("aside",{ref:"content",class:Je.value,style:Xe.value},$,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Ke.value)),k("div",{class:"q-drawer-container"},n)}}}),Ht=V({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=Y(),r=be(te,Q);if(r===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;He(ct,!0);const t=d(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>k("div",{class:"q-page-container",style:t.value},ee(l.default))}});const{passive:Qe}=dt,Vt=["both","horizontal","vertical"];var Ft=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Vt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;w(()=>e.scrollTarget,()=>{v(),p()});function u(){r!==null&&r();const C=Math.max(0,xt(t)),b=Bt(t),f={top:C-o.position.top,left:b-o.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const h=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";o.position={top:C,left:b},o.directionChanged=o.direction!==h,o.delta=f,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),l("scroll",{...o})}function p(){t=Tt(a,e.scrollTarget),t.addEventListener("scroll",s,Qe),s(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",s,Qe),t=void 0)}function s(C){if(C===!0||e.debounce===0||e.debounce==="0")u();else if(r===null){const[b,f]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];r=()=>{f(b),r=null}}}const{proxy:i}=Y();return w(()=>i.$q.lang.rtl,u),Me(()=>{a=i.$el.parentNode,p()}),we(()=>{r!==null&&r(),v()}),Object.assign(i,{trigger:s,getPosition:()=>o}),De}}),At=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:r}}=Y(),t=S(null),a=S(r.screen.height),u=S(e.container===!0?0:r.screen.width),p=S({position:0,direction:"down",inflectionPoint:0}),v=S(0),s=S(ft.value===!0?0:fe()),i=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=d(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),b=d(()=>s.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),f=d(()=>s.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};p.value=q,e.onScroll!==void 0&&o("scroll",q)}}function z(g){const{height:q,width:x}=g;let M=!1;a.value!==q&&(M=!0,a.value=q,e.onScrollHeight!==void 0&&o("scrollHeight",q),y()),u.value!==x&&(M=!0,u.value=x),M===!0&&e.onResize!==void 0&&o("resize",g)}function _({height:g}){v.value!==g&&(v.value=g,y())}function y(){if(e.container===!0){const g=a.value>v.value?fe():0;s.value!==g&&(s.value=g)}}let c=null;const L={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:a,containerHeight:v,scrollbarWidth:s,totalWidth:d(()=>u.value+s.value),rows:d(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:G({size:0,offset:0,space:!1}),right:G({size:300,offset:0,space:!1}),footer:G({size:0,offset:0,space:!1}),left:G({size:300,offset:0,space:!1}),scroll:p,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,q,x){L[g][q]=x}};if(He(te,L),fe()>0){let x=function(){g=null,q.classList.remove("hide-scrollbar")},M=function(){if(g===null){if(q.scrollHeight>r.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(x,300)},W=function(H){g!==null&&H==="remove"&&(clearTimeout(g),x()),window[`${H}EventListener`]("resize",M)},g=null;const q=document.body;w(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),vt(()=>{W("remove")})}return()=>{const g=lt(l.default,[k(Ft,{onScroll:h}),k(ge,{onResize:z})]),q=k("div",{class:i.value,style:C.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(ge,{onResize:_}),k("div",{class:"absolute-full",style:b.value},[k("div",{class:"scroll",style:f.value},[q])])]):q}}});const Rt=Ve({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},route:{default:null},icon:{type:String,default:""}}});function Wt(e,l,o,r,t,a){return R(),j(Ct,{clickable:"",tag:"a",to:e.route},{default:T(()=>[e.icon?(R(),j(Ee,{key:0,avatar:""},{default:T(()=>[B(at,{name:e.icon},null,8,["name"])]),_:1})):Ae("",!0),B(Ee,null,{default:T(()=>[B(ye,null,{default:T(()=>[X(pe(e.title),1)]),_:1}),B(ye,{caption:""},{default:T(()=>[X(pe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var It=Fe(Rt,[["render",Wt]]);const Nt=()=>{if(window.JobStatusDashboardConfig===void 0)throw new Error("Job status configuration not found in the window. Have you loaded the package correctly?");return window.JobStatusDashboardConfig};var jt={get:Nt};function Oe(){const e=jt.get(),l=S(e.version),o=S(e.domain),r=S(e.path),t=S(e.assets_in_date);return{version:l,domain:o,path:r,assets_in_date:t}}const Xt=[{title:"Jobs",caption:"All tracked jobs.",icon:"list",route:{path:"/jobs"}},{title:"History",caption:"A list of all runs your queue worker has made.",icon:"manage_search",route:{path:"/history"}},{title:"Batches",caption:"A list of all the batches in your system.",icon:"manage_search",route:{path:"/batch"}},{title:"Queues",caption:"A list of all the queues in your system.",icon:"queue",route:{path:"/queues"}}],Yt=Ve({name:"MainLayout",components:{EssentialLink:It},setup(){const e=S(!1);return{version:Oe().version,assets_in_date:Oe().assets_in_date,essentialLinks:Xt,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),Jt={href:"https://github.com/tobytwigger/laravel-job-status",style:{color:"white","text-decoration":"none"}};function Ut(e,l,o,r,t,a){const u=Te("EssentialLink"),p=Te("router-view");return R(),j(At,{view:"hHh lpR fFf"},{default:T(()=>[B(Ot,{elevated:""},{default:T(()=>[B(Qt,null,{default:T(()=>[B(nt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),B(Pt,null,{default:T(()=>[X(" Job Tracker ")]),_:1}),xe("div",null,[xe("a",Jt," Version "+pe(e.version),1)])]),_:1})]),_:1}),B(Mt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=v=>e.leftDrawerOpen=v),"show-if-above":"",bordered:""},{default:T(()=>[B(qt,null,{default:T(()=>[B(ye,{header:""},{default:T(()=>[X(" Essential Links ")]),_:1}),(R(!0),ht(pt,null,mt(e.essentialLinks,v=>(R(),j(u,gt({key:v.title},v),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),B(Ht,null,{default:T(()=>[e.assets_in_date?Ae("",!0):(R(),j(yt,{key:0,class:"bg-warning text-black"},{default:T(()=>[X(" The assets are not in date, which makes this site unstable. Run `artisan job:install` to update them. ")]),_:1})),B(p)]),_:1})]),_:1})}var la=Fe(Yt,[["render",Ut]]);export{la as default};
