import{c as l,r as A,k as F,h as o,U as H,A as V,g as X,y as f,V as _,t as G,u as J,D as Y}from"./index.755deef1.js";import{u as Z,a as p,b as ee,c as te,d as ne,e as ae,Q as $,R as ue}from"./use-router-link.b1fd7710.js";import{Q as le}from"./QSpinner.0c6fe68a.js";import{c as ie,e as re}from"./render.862fbab2.js";const O={none:0,xs:4,sm:8,md:16,lg:24,xl:32},oe={xs:8,sm:10,md:14,lg:20,xl:24},se=["button","submit","reset"],ce=/[^\s]\/[^\s]/,de=["flat","outline","push","unelevated"],j=(e,i)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":i,ye=e=>{const i=j(e);return i!==void 0?{[i]:!0}:{}},ve={...Z,...p,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...de.reduce((e,i)=>(e[i]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ee.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function fe(e){const i=te(e,oe),v=ne(e),{hasRouterLink:E,hasLink:x,linkTag:L,linkAttrs:T,navigateOnClick:w}=ae({fallbackTag:"button"}),S=l(()=>{const a=e.fab===!1&&e.fabMini===!1?i.value:{};return e.padding!==void 0?Object.assign({},a,{padding:e.padding.split(/\s+/).map(d=>d in O?O[d]+"px":d).join(" "),minWidth:"0",minHeight:"0"}):a}),P=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),h=l(()=>e.disable!==!0&&e.loading!==!0),R=l(()=>h.value===!0?e.tabindex||0:-1),n=l(()=>j(e,"standard")),B=l(()=>{const a={tabindex:R.value};return x.value===!0?Object.assign(a,T.value):se.includes(e.type)===!0&&(a.type=e.type),L.value==="a"?(e.disable===!0?a["aria-disabled"]="true":a.href===void 0&&(a.role="button"),E.value!==!0&&ce.test(e.type)===!0&&(a.type=e.type)):e.disable===!0&&(a.disabled="",a["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(a,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),a}),c=l(()=>{let a;e.color!==void 0?e.flat===!0||e.outline===!0?a=`text-${e.textColor||e.color}`:a=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(a=`text-${e.textColor}`);const d=e.round===!0?"round":`rectangle${P.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${d}`+(a!==void 0?" "+a:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),y=l(()=>v.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:c,style:S,innerClasses:y,attributes:B,hasLink:x,linkTag:L,navigateOnClick:w,isActionable:h}}const{passiveCapture:r}=Y;let b=null,g=null,m=null;var ke=ie({name:"QBtn",props:{...ve,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:i,emit:v}){const{proxy:E}=X(),{classes:x,style:L,innerClasses:T,attributes:w,hasLink:S,linkTag:P,navigateOnClick:h,isActionable:R}=fe(e),n=A(null),B=A(null);let c=null,y,a=null;const d=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),Q=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:S.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),K=l(()=>({center:e.round})),z=l(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),D=l(()=>{if(e.loading===!0)return{onMousedown:q,onTouchstart:q,onClick:q,onKeydown:q,onKeyup:q};if(R.value===!0){const t={onClick:M,onKeydown:N,onMousedown:U};if(E.$q.platform.has.touch===!0){const u=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${u}`]=W}return t}return{onClick:f}}),I=l(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+x.value,style:L.value,...w.value,...D.value}));function M(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const u=document.activeElement;if(e.type==="submit"&&u!==document.body&&n.value.contains(u)===!1&&u.contains(n.value)===!1){n.value.focus();const C=()=>{document.removeEventListener("keydown",f,!0),document.removeEventListener("keyup",C,r),n.value!==null&&n.value.removeEventListener("blur",C,r)};document.addEventListener("keydown",f,!0),document.addEventListener("keyup",C,r),n.value.addEventListener("blur",C,r)}}h(t)}}function N(t){n.value!==null&&(v("keydown",t),_(t,[13,32])===!0&&g!==n.value&&(g!==null&&k(),t.defaultPrevented!==!0&&(n.value.focus(),g=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",s,!0),n.value.addEventListener("blur",s,r)),f(t)))}function W(t){n.value!==null&&(v("touchstart",t),t.defaultPrevented!==!0&&(b!==n.value&&(b!==null&&k(),b=n.value,c=t.target,c.addEventListener("touchcancel",s,r),c.addEventListener("touchend",s,r)),y=!0,a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,y=!1},200)))}function U(t){n.value!==null&&(t.qSkipRipple=y===!0,v("mousedown",t),t.defaultPrevented!==!0&&m!==n.value&&(m!==null&&k(),m=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",s,r)))}function s(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(g===n.value&&_(t,[13,32])===!0){const u=new MouseEvent("click",t);u.qKeyEvent=!0,t.defaultPrevented===!0&&G(u),t.cancelBubble===!0&&J(u),n.value.dispatchEvent(u),f(t),t.qKeyEvent=!0}v("keyup",t)}k()}}function k(t){const u=B.value;t!==!0&&(b===n.value||m===n.value)&&u!==null&&u!==document.activeElement&&(u.setAttribute("tabindex",-1),u.focus()),b===n.value&&(c!==null&&(c.removeEventListener("touchcancel",s,r),c.removeEventListener("touchend",s,r)),b=c=null),m===n.value&&(document.removeEventListener("mouseup",s,r),m=null),g===n.value&&(document.removeEventListener("keyup",s,!0),n.value!==null&&n.value.removeEventListener("blur",s,r),g=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function q(t){f(t),t.qSkipRipple=!0}return F(()=>{k(!0)}),Object.assign(E,{click:M}),()=>{let t=[];e.icon!==void 0&&t.push(o($,{name:e.icon,left:e.stack===!1&&d.value===!0,role:"img","aria-hidden":"true"})),d.value===!0&&t.push(o("span",{class:"block"},[e.label])),t=re(i.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(o($,{name:e.iconRight,right:e.stack===!1&&d.value===!0,role:"img","aria-hidden":"true"}));const u=[o("span",{class:"q-focus-helper",ref:B})];return e.loading===!0&&e.percentage!==void 0&&u.push(o("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[o("span",{class:"q-btn__progress-indicator fit block",style:z.value})])),u.push(o("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+T.value},t)),e.loading!==null&&u.push(o(H,{name:"q-transition--fade"},()=>e.loading===!0?[o("span",{key:"loading",class:"absolute-full flex flex-center"},i.loading!==void 0?i.loading():[o(le)])]:null)),V(o(P.value,I.value,u),[[ue,Q.value,void 0,K.value]])}}});export{ke as Q,ye as g};
