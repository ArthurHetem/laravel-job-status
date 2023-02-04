import{c as l,h as r,r as $,k as U,W as G,C as J,g as V,s as f,X as M,y as Y,z as Z,p}from"./index.282533d9.js";import{u as _,a as ee,b as te,d as ne,e as ae,f as ue,h as le,Q as A,R as ie}from"./use-router-link.a314b5ce.js";import{c as j,e as re}from"./render.599fc38b.js";const se={size:{type:[Number,String],default:"1em"},color:String};function oe(e){return{cSize:l(()=>e.size in _?`${_[e.size]}px`:e.size),classes:l(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ce=j({name:"QSpinner",props:{...se,thickness:{type:Number,default:5}},setup(e){const{cSize:i,classes:v}=oe(e);return()=>r("svg",{class:v.value+" q-spinner-mat",width:i.value,height:i.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const O={none:0,xs:4,sm:8,md:16,lg:24,xl:32},de={xs:8,sm:10,md:14,lg:20,xl:24},ve=["button","submit","reset"],fe=/[^\s]\/[^\s]/,be=["flat","outline","push","unelevated"],Q=(e,i)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":i,qe=e=>{const i=Q(e);return i!==void 0?{[i]:!0}:{}},ge={...ee,...te,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...be.reduce((e,i)=>(e[i]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ne.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function me(e){const i=ae(e,de),v=ue(e),{hasRouterLink:x,hasLink:E,linkTag:L,linkAttrs:C,navigateOnClick:w}=le({fallbackTag:"button"}),T=l(()=>{const a=e.fab===!1&&e.fabMini===!1?i.value:{};return e.padding!==void 0?Object.assign({},a,{padding:e.padding.split(/\s+/).map(d=>d in O?O[d]+"px":d).join(" "),minWidth:"0",minHeight:"0"}):a}),P=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),h=l(()=>e.disable!==!0&&e.loading!==!0),R=l(()=>h.value===!0?e.tabindex||0:-1),n=l(()=>Q(e,"standard")),S=l(()=>{const a={tabindex:R.value};return E.value===!0?Object.assign(a,C.value):ve.includes(e.type)===!0&&(a.type=e.type),L.value==="a"?(e.disable===!0?a["aria-disabled"]="true":a.href===void 0&&(a.role="button"),x.value!==!0&&fe.test(e.type)===!0&&(a.type=e.type)):e.disable===!0&&(a.disabled="",a["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(a,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),a}),c=l(()=>{let a;e.color!==void 0?e.flat===!0||e.outline===!0?a=`text-${e.textColor||e.color}`:a=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(a=`text-${e.textColor}`);const d=e.round===!0?"round":`rectangle${P.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${d}`+(a!==void 0?" "+a:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),y=l(()=>v.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:c,style:T,innerClasses:y,attributes:S,hasLink:E,linkTag:L,navigateOnClick:w,isActionable:h}}const{passiveCapture:s}=p;let b=null,g=null,m=null;var xe=j({name:"QBtn",props:{...ge,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:i,emit:v}){const{proxy:x}=V(),{classes:E,style:L,innerClasses:C,attributes:w,hasLink:T,linkTag:P,navigateOnClick:h,isActionable:R}=me(e),n=$(null),S=$(null);let c=null,y,a=null;const d=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),K=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:T.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),D=l(()=>({center:e.round})),N=l(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),W=l(()=>{if(e.loading===!0)return{onMousedown:q,onTouchstart:q,onClick:q,onKeydown:q,onKeyup:q};if(R.value===!0){const t={onClick:z,onKeydown:X,onMousedown:H};if(x.$q.platform.has.touch===!0){const u=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${u}`]=F}return t}return{onClick:f}}),I=l(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+E.value,style:L.value,...w.value,...W.value}));function z(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const u=document.activeElement;if(e.type==="submit"&&u!==document.body&&n.value.contains(u)===!1&&u.contains(n.value)===!1){n.value.focus();const B=()=>{document.removeEventListener("keydown",f,!0),document.removeEventListener("keyup",B,s),n.value!==null&&n.value.removeEventListener("blur",B,s)};document.addEventListener("keydown",f,!0),document.addEventListener("keyup",B,s),n.value.addEventListener("blur",B,s)}}h(t)}}function X(t){n.value!==null&&(v("keydown",t),M(t,[13,32])===!0&&g!==n.value&&(g!==null&&k(),t.defaultPrevented!==!0&&(n.value.focus(),g=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",o,!0),n.value.addEventListener("blur",o,s)),f(t)))}function F(t){n.value!==null&&(v("touchstart",t),t.defaultPrevented!==!0&&(b!==n.value&&(b!==null&&k(),b=n.value,c=t.target,c.addEventListener("touchcancel",o,s),c.addEventListener("touchend",o,s)),y=!0,a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,y=!1},200)))}function H(t){n.value!==null&&(t.qSkipRipple=y===!0,v("mousedown",t),t.defaultPrevented!==!0&&m!==n.value&&(m!==null&&k(),m=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",o,s)))}function o(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(g===n.value&&M(t,[13,32])===!0){const u=new MouseEvent("click",t);u.qKeyEvent=!0,t.defaultPrevented===!0&&Y(u),t.cancelBubble===!0&&Z(u),n.value.dispatchEvent(u),f(t),t.qKeyEvent=!0}v("keyup",t)}k()}}function k(t){const u=S.value;t!==!0&&(b===n.value||m===n.value)&&u!==null&&u!==document.activeElement&&(u.setAttribute("tabindex",-1),u.focus()),b===n.value&&(c!==null&&(c.removeEventListener("touchcancel",o,s),c.removeEventListener("touchend",o,s)),b=c=null),m===n.value&&(document.removeEventListener("mouseup",o,s),m=null),g===n.value&&(document.removeEventListener("keyup",o,!0),n.value!==null&&n.value.removeEventListener("blur",o,s),g=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function q(t){f(t),t.qSkipRipple=!0}return U(()=>{k(!0)}),Object.assign(x,{click:z}),()=>{let t=[];e.icon!==void 0&&t.push(r(A,{name:e.icon,left:e.stack===!1&&d.value===!0,role:"img","aria-hidden":"true"})),d.value===!0&&t.push(r("span",{class:"block"},[e.label])),t=re(i.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(r(A,{name:e.iconRight,right:e.stack===!1&&d.value===!0,role:"img","aria-hidden":"true"}));const u=[r("span",{class:"q-focus-helper",ref:S})];return e.loading===!0&&e.percentage!==void 0&&u.push(r("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[r("span",{class:"q-btn__progress-indicator fit block",style:N.value})])),u.push(r("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+C.value},t)),e.loading!==null&&u.push(r(G,{name:"q-transition--fade"},()=>e.loading===!0?[r("span",{key:"loading",class:"absolute-full flex flex-center"},i.loading!==void 0?i.loading():[r(ce)])]:null)),J(r(P.value,I.value,u),[[ie,K.value,void 0,D.value]])}}});export{xe as Q,qe as g};
