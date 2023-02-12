import{Q as J,k as we,l as qe,m as Me,R as Ve,n as Fe,o as ce,p as _e,a as Be}from"./QBtn.1ade33fc.js";import{u as ie,a as re}from"./QItem.83c92a13.js";import{h as Y,c as se,d as Re,f as Ae}from"./render.99e9fd73.js";import{w as N,o as de,k as ae,i as Ee,g as Q,ab as Pe,r as D,c as h,a4 as $e,a2 as ke,a7 as Oe,y as xe,z as U,$ as Te,a6 as Ie,E as De,h as x,t as W,W as Ne,m as je,aa as Le,u as fe,V as ze}from"./index.f77ee584.js";import{e as Ke,u as Ue,a as Ze}from"./index.a495139d.js";import{b as Qe}from"./format.a33550d6.js";function He({validate:e,resetValidation:t,requiresQForm:s}){const r=Ee(Pe,!1);if(r!==!1){const{props:k,proxy:c}=Q();Object.assign(c,{validate:e,resetValidation:t}),N(()=>k.disable,m=>{m===!0?(typeof t=="function"&&t(),r.unbindComponent(c)):r.bindComponent(c)}),de(()=>{k.disable!==!0&&r.bindComponent(c)}),ae(()=>{k.disable!==!0&&r.unbindComponent(c)})}else s===!0&&console.error("Parent QForm not found on useFormChild()!")}const ve=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,me=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,G=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ne={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ve.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>me.test(e),rgbColor:e=>G.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>G.test(e)||ee.test(e),hexOrRgbColor:e=>ve.test(e)||G.test(e),hexaOrRgbaColor:e=>ge.test(e)||ee.test(e),anyColor:e=>me.test(e)||G.test(e)||ee.test(e)},We=[!0,!1,"ondemand"],Je={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>We.includes(e)}};function Xe(e,t){const{props:s,proxy:r}=Q(),k=D(!1),c=D(null),m=D(null);He({validate:V,resetValidation:M});let S=0,F;const w=h(()=>s.rules!==void 0&&s.rules!==null&&s.rules.length>0),q=h(()=>s.disable!==!0&&w.value===!0),p=h(()=>s.error===!0||k.value===!0),j=h(()=>typeof s.errorMessage=="string"&&s.errorMessage.length>0?s.errorMessage:c.value);N(()=>s.modelValue,()=>{z()}),N(()=>s.reactiveRules,R=>{R===!0?F===void 0&&(F=N(()=>s.rules,()=>{z(!0)})):F!==void 0&&(F(),F=void 0)},{immediate:!0}),N(e,R=>{R===!0?m.value===null&&(m.value=!1):m.value===!1&&(m.value=!0,q.value===!0&&s.lazyRules!=="ondemand"&&t.value===!1&&b())});function M(){S++,t.value=!1,m.value=null,k.value=!1,c.value=null,b.cancel()}function V(R=s.modelValue){if(q.value!==!0)return!0;const I=++S,K=t.value!==!0?()=>{m.value=!0}:()=>{},E=(l,u)=>{l===!0&&K(),k.value=l,c.value=u||null,t.value=!1},O=[];for(let l=0;l<s.rules.length;l++){const u=s.rules[l];let n;if(typeof u=="function"?n=u(R,ne):typeof u=="string"&&ne[u]!==void 0&&(n=ne[u](R)),n===!1||typeof n=="string")return E(!0,n),!1;n!==!0&&n!==void 0&&O.push(n)}return O.length===0?(E(!1),!0):(t.value=!0,Promise.all(O).then(l=>{if(l===void 0||Array.isArray(l)===!1||l.length===0)return I===S&&E(!1),!0;const u=l.find(n=>n===!1||typeof n=="string");return I===S&&E(u!==void 0,u),u===void 0},l=>(I===S&&(console.error(l),E(!0)),!1)))}function z(R){q.value===!0&&s.lazyRules!=="ondemand"&&(m.value===!0||s.lazyRules!==!0&&R!==!0)&&b()}const b=$e(V,0);return ae(()=>{F!==void 0&&F(),b.cancel()}),Object.assign(r,{resetValidation:M,validate:V}),ke(r,"hasError",()=>p.value),{isDirtyModel:m,hasRules:w,hasError:p,errorMessage:j,validate:V,resetValidation:M}}const he=/^on[A-Z]/;function Ye(e,t){const s={listeners:D({}),attributes:D({})};function r(){const k={},c={};for(const m in e)m!=="class"&&m!=="style"&&he.test(m)===!1&&(k[m]=e[m]);for(const m in t.props)he.test(m)===!0&&(c[m]=t.props[m]);s.attributes.value=k,s.listeners.value=c}return Oe(r),r(),s}let Z=[],X=[];function Ce(e){X=X.filter(t=>t!==e)}function Ct(e){Ce(e),X.push(e)}function St(e){Ce(e),X.length===0&&Z.length>0&&(Z[Z.length-1](),Z=[])}function Se(e){X.length===0?e():Z.push(e)}function Ge(e){Z=Z.filter(t=>t!==e)}function oe(e){return e===void 0?`f_${Ke()}`:e}function ue(e){return e!=null&&(""+e).length>0}const et={...ie,...Je,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},tt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function lt(){const{props:e,attrs:t,proxy:s,vnode:r}=Q();return{isDark:re(e,s.$q),editable:h(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:D(!1),focused:D(!1),hasPopupOpen:!1,splitAttrs:Ye(t,r),targetUid:D(oe(e.for)),rootRef:D(null),targetRef:D(null),controlRef:D(null)}}function at(e){const{props:t,emit:s,slots:r,attrs:k,proxy:c}=Q(),{$q:m}=c;let S=null;e.hasValue===void 0&&(e.hasValue=h(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=a=>{s("update:modelValue",a)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:f,onFocusout:g}),Object.assign(e,{clearValue:v,onControlFocusin:f,onControlFocusout:g,focus:u}),e.computedCounter===void 0&&(e.computedCounter=h(()=>{if(t.counter!==!1){const a=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,y=t.maxlength!==void 0?t.maxlength:t.maxValues;return a+(y!==void 0?" / "+y:"")}}));const{isDirtyModel:F,hasRules:w,hasError:q,errorMessage:p,resetValidation:j}=Xe(e.focused,e.innerLoading),M=e.floatingLabel!==void 0?h(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):h(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),V=h(()=>t.bottomSlots===!0||t.hint!==void 0||w.value===!0||t.counter===!0||t.error!==null),z=h(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),b=h(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(M.value===!0?" q-field--float":"")+(I.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(q.value===!0?" q-field--error":"")+(q.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&V.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),R=h(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(q.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),I=h(()=>t.labelSlot===!0||t.label!==void 0),K=h(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&q.value!==!0?` text-${t.labelColor}`:"")),E=h(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:M.value,modelValue:t.modelValue,emitValue:e.emitValue})),O=h(()=>{const a={for:e.targetUid.value};return t.disable===!0?a["aria-disabled"]="true":t.readonly===!0&&(a["aria-readonly"]="true"),a});N(()=>t.for,a=>{e.targetUid.value=oe(a)});function l(){const a=document.activeElement;let y=e.targetRef!==void 0&&e.targetRef.value;y&&(a===null||a.id!==e.targetUid.value)&&(y.hasAttribute("tabindex")===!0||(y=y.querySelector("[tabindex]")),y&&y!==a&&y.focus({preventScroll:!0}))}function u(){Se(l)}function n(){Ge(l);const a=document.activeElement;a!==null&&e.rootRef.value.contains(a)&&a.blur()}function f(a){S!==null&&(clearTimeout(S),S=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,s("focus",a))}function g(a,y){S!==null&&clearTimeout(S),S=setTimeout(()=>{S=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,s("blur",a)),y!==void 0&&y())})}function v(a){xe(a),m.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),s("update:modelValue",null),s("clear",t.modelValue),U(()=>{j(),m.platform.is.mobile!==!0&&(F.value=!1)})}function C(){const a=[];return r.prepend!==void 0&&a.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:W},r.prepend())),a.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},o())),q.value===!0&&t.noErrorIcon===!1&&a.push(A("error",[x(J,{name:m.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?a.push(A("inner-loading-append",r.loading!==void 0?r.loading():[x(we,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&a.push(A("inner-clearable-append",[x(J,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||m.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:v})])),r.append!==void 0&&a.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:W},r.append())),e.getInnerAppend!==void 0&&a.push(A("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&a.push(e.getControlChild()),a}function o(){const a=[];return t.prefix!==void 0&&t.prefix!==null&&a.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&a.push(e.getShadowControl()),e.getControl!==void 0?a.push(e.getControl()):r.rawControl!==void 0?a.push(r.rawControl()):r.control!==void 0&&a.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},r.control(E.value))),I.value===!0&&a.push(x("div",{class:K.value},Y(r.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&a.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),a.concat(Y(r.default))}function d(){let a,y;q.value===!0?p.value!==null?(a=[x("div",{role:"alert"},p.value)],y=`q--slot-error-${p.value}`):(a=Y(r.error),y="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(a=[x("div",t.hint)],y=`q--slot-hint-${t.hint}`):(a=Y(r.hint),y="q--slot-hint"));const _=t.counter===!0||r.counter!==void 0;if(t.hideBottomSpace===!0&&_===!1&&a===void 0)return;const L=x("div",{key:y,class:"q-field__messages col"},a);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:W},[t.hideBottomSpace===!0?L:x(Ne,{name:"q-transition--field-message"},()=>L),_===!0?x("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function A(a,y){return y===null?null:x("div",{key:a,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},y)}let B=!1;return Te(()=>{B=!0}),Ie(()=>{B===!0&&t.autofocus===!0&&c.focus()}),de(()=>{De.value===!0&&t.for===void 0&&(e.targetUid.value=oe()),t.autofocus===!0&&c.focus()}),ae(()=>{S!==null&&clearTimeout(S)}),Object.assign(c,{focus:u,blur:n}),function(){const y=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...O.value}:O.value;return x("label",{ref:e.rootRef,class:[b.value,k.class],style:k.style,...y},[r.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:W},r.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:R.value,tabindex:-1,...e.controlEvents},C()),V.value===!0?d():null]),r.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:W},r.after()):null])}}const nt={xs:8,sm:10,md:14,lg:20,xl:24};var pt=se({name:"QChip",props:{...ie,...qe,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:s}){const{proxy:{$q:r}}=Q(),k=re(e,r),c=Me(e,nt),m=h(()=>e.selected===!0||e.icon!==void 0),S=h(()=>e.selected===!0?e.iconSelected||r.iconSet.chip.selected:e.icon),F=h(()=>e.iconRemove||r.iconSet.chip.remove),w=h(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),q=h(()=>{const b=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(b?` text-${b} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(w.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(k.value===!0?" q-chip--dark q-dark":"")}),p=h(()=>{const b=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},R={...b,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||r.lang.label.remove};return{chip:b,remove:R}});function j(b){b.keyCode===13&&M(b)}function M(b){e.disable||(s("update:selected",!e.selected),s("click",b))}function V(b){(b.keyCode===void 0||b.keyCode===13)&&(xe(b),e.disable===!1&&(s("update:modelValue",!1),s("remove")))}function z(){const b=[];w.value===!0&&b.push(x("div",{class:"q-focus-helper"})),m.value===!0&&b.push(x(J,{class:"q-chip__icon q-chip__icon--left",name:S.value}));const R=e.label!==void 0?[x("div",{class:"ellipsis"},[e.label])]:void 0;return b.push(x("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ae(t.default,R))),e.iconRight&&b.push(x(J,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&b.push(x(J,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:F.value,...p.value.remove,onClick:V,onKeyup:V})),b}return()=>{if(e.modelValue===!1)return;const b={class:q.value,style:c.value};return w.value===!0&&Object.assign(b,p.value.chip,{onClick:M,onKeyup:j}),Re("div",b,z(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ve,e.ripple]])}}});const ot=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ut=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,it=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,rt=/[a-z0-9_ -]$/i;function st(e){return function(s){if(s.type==="compositionend"||s.type==="change"){if(s.target.qComposing!==!0)return;s.target.qComposing=!1,e(s)}else s.type==="compositionupdate"&&s.target.qComposing!==!0&&typeof s.data=="string"&&(je.is.firefox===!0?rt.test(s.data)===!1:ot.test(s.data)===!0||ut.test(s.data)===!0||it.test(s.data)===!0)===!0&&(s.target.qComposing=!0)}}const be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},pe=Object.keys(le);pe.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const dt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+pe.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,$=String.fromCharCode(1),ct={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ft(e,t,s,r){let k,c,m,S;const F=D(null),w=D(p());function q(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,M),N(()=>e.mask,l=>{if(l!==void 0)V(w.value,!0);else{const u=E(w.value);M(),e.modelValue!==u&&t("update:modelValue",u)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{F.value===!0&&V(w.value,!0)}),N(()=>e.unmaskedValue,()=>{F.value===!0&&V(w.value)});function p(){if(M(),F.value===!0){const l=I(E(e.modelValue));return e.fillMask!==!1?O(l):l}return e.modelValue}function j(l){if(l<k.length)return k.slice(-l);let u="",n=k;const f=n.indexOf($);if(f>-1){for(let g=l-n.length;g>0;g--)u+=$;n=n.slice(0,f)+u+n.slice(f)}return n}function M(){if(F.value=e.mask!==void 0&&e.mask.length>0&&q(),F.value===!1){S=void 0,k="",c="";return}const l=be[e.mask]===void 0?e.mask:be[e.mask],u=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",n=u.replace(ye,"\\$&"),f=[],g=[],v=[];let C=e.reverseFillMask===!0,o="",d="";l.replace(dt,(y,_,L,i,P)=>{if(i!==void 0){const T=le[i];v.push(T),d=T.negate,C===!0&&(g.push("(?:"+d+"+)?("+T.pattern+"+)?(?:"+d+"+)?("+T.pattern+"+)?"),C=!1),g.push("(?:"+d+"+)?("+T.pattern+")?")}else if(L!==void 0)o="\\"+(L==="\\"?"":L),v.push(L),f.push("([^"+o+"]+)?"+o+"?");else{const T=_!==void 0?_:P;o=T==="\\"?"\\\\\\\\":T.replace(ye,"\\\\$&"),v.push(T),f.push("([^"+o+"]+)?"+o+"?")}});const A=new RegExp("^"+f.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),B=g.length-1,a=g.map((y,_)=>_===0&&e.reverseFillMask===!0?new RegExp("^"+n+"*"+y):_===B?new RegExp("^"+y+"("+(d===""?".":d)+"+)?"+(e.reverseFillMask===!0?"$":n+"*")):new RegExp("^"+y));m=v,S=y=>{const _=A.exec(e.reverseFillMask===!0?y:y.slice(0,v.length));_!==null&&(y=_.slice(1).join(""));const L=[],i=a.length;for(let P=0,T=y;P<i;P++){const H=a[P].exec(T);if(H===null)break;T=T.slice(H.shift().length),L.push(...H)}return L.length>0?L.join(""):y},k=v.map(y=>typeof y=="string"?y:$).join(""),c=k.split($).join(u)}function V(l,u,n){const f=r.value,g=f.selectionEnd,v=f.value.length-g,C=E(l);u===!0&&M();const o=I(C),d=e.fillMask!==!1?O(o):o,A=w.value!==d;f.value!==d&&(f.value=d),A===!0&&(w.value=d),document.activeElement===f&&U(()=>{if(d===c){const a=e.reverseFillMask===!0?c.length:0;f.setSelectionRange(a,a,"forward");return}if(n==="insertFromPaste"&&e.reverseFillMask!==!0){const a=g-1;b.right(f,a,a);return}if(["deleteContentBackward","deleteContentForward"].indexOf(n)>-1){const a=e.reverseFillMask===!0?g===0?d.length>o.length?1:0:Math.max(0,d.length-(d===c?0:Math.min(o.length,v)+1))+1:g;f.setSelectionRange(a,a,"forward");return}if(e.reverseFillMask===!0)if(A===!0){const a=Math.max(0,d.length-(d===c?0:Math.min(o.length,v+1)));a===1&&g===1?f.setSelectionRange(a,a,"forward"):b.rightReverse(f,a,a)}else{const a=d.length-v;f.setSelectionRange(a,a,"backward")}else if(A===!0){const a=Math.max(0,k.indexOf($),Math.min(o.length,g)-1);b.right(f,a,a)}else{const a=g-1;b.right(f,a,a)}});const B=e.unmaskedValue===!0?E(d):d;String(e.modelValue)!==B&&s(B,!0)}function z(l,u,n){const f=I(E(l.value));u=Math.max(0,k.indexOf($),Math.min(f.length,u)),l.setSelectionRange(u,n,"forward")}const b={left(l,u,n,f){const g=k.slice(u-1).indexOf($)===-1;let v=Math.max(0,u-1);for(;v>=0;v--)if(k[v]===$){u=v,g===!0&&u++;break}if(v<0&&k[u]!==void 0&&k[u]!==$)return b.right(l,0,0);u>=0&&l.setSelectionRange(u,f===!0?n:u,"backward")},right(l,u,n,f){const g=l.value.length;let v=Math.min(g,n+1);for(;v<=g;v++)if(k[v]===$){n=v;break}else k[v-1]===$&&(n=v);if(v>g&&k[n-1]!==void 0&&k[n-1]!==$)return b.left(l,g,g);l.setSelectionRange(f?u:n,n,"forward")},leftReverse(l,u,n,f){const g=j(l.value.length);let v=Math.max(0,u-1);for(;v>=0;v--)if(g[v-1]===$){u=v;break}else if(g[v]===$&&(u=v,v===0))break;if(v<0&&g[u]!==void 0&&g[u]!==$)return b.rightReverse(l,0,0);u>=0&&l.setSelectionRange(u,f===!0?n:u,"backward")},rightReverse(l,u,n,f){const g=l.value.length,v=j(g),C=v.slice(0,n+1).indexOf($)===-1;let o=Math.min(g,n+1);for(;o<=g;o++)if(v[o-1]===$){n=o,n>0&&C===!0&&n--;break}if(o>g&&v[n-1]!==void 0&&v[n-1]!==$)return b.leftReverse(l,g,g);l.setSelectionRange(f===!0?u:n,n,"forward")}};function R(l){if(t("keydown",l),Le(l)===!0)return;const u=r.value,n=u.selectionStart,f=u.selectionEnd;if(l.keyCode===37||l.keyCode===39){const g=b[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];l.preventDefault(),g(u,n,f,l.shiftKey)}else l.keyCode===8&&e.reverseFillMask!==!0&&n===f?b.left(u,n,f,!0):l.keyCode===46&&e.reverseFillMask===!0&&n===f&&b.rightReverse(u,n,f,!0)}function I(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return K(l);const u=m;let n=0,f="";for(let g=0;g<u.length;g++){const v=l[n],C=u[g];if(typeof C=="string")f+=C,v===C&&n++;else if(v!==void 0&&C.regex.test(v))f+=C.transform!==void 0?C.transform(v):v,n++;else return f}return f}function K(l){const u=m,n=k.indexOf($);let f=l.length-1,g="";for(let v=u.length-1;v>=0&&f>-1;v--){const C=u[v];let o=l[f];if(typeof C=="string")g=C+g,o===C&&f--;else if(o!==void 0&&C.regex.test(o))do g=(C.transform!==void 0?C.transform(o):o)+g,f--,o=l[f];while(n===v&&o!==void 0&&C.regex.test(o));else return g}return g}function E(l){return typeof l!="string"||S===void 0?typeof l=="number"?S(""+l):l:S(l)}function O(l){return c.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?c.slice(0,-l.length)+l:l+c.slice(l.length)}return{innerValue:w,hasMask:F,moveCursorForPaste:z,updateMaskValue:V,onMaskedKeydown:R}}function vt(e,t){function s(){const r=e.modelValue;try{const k="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(r)===r&&("length"in r?Array.from(r):[r]).forEach(c=>{k.items.add(c)}),{files:k.files}}catch{return{files:void 0}}}return t===!0?h(()=>{if(e.type==="file")return s()}):h(s)}var gt=se({name:"QInput",inheritAttrs:!1,props:{...et,...ct,...Ue,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...tt,"paste","change","keydown","animationend"],setup(e,{emit:t,attrs:s}){const{proxy:r}=Q(),{$q:k}=r,c={};let m=NaN,S,F,w=null,q;const p=D(null),j=Ze(e),{innerValue:M,hasMask:V,moveCursorForPaste:z,updateMaskValue:b,onMaskedKeydown:R}=ft(e,t,A,p),I=vt(e,!0),K=h(()=>ue(M.value)),E=st(o),O=lt(),l=h(()=>e.type==="textarea"||e.autogrow===!0),u=h(()=>l.value===!0||["text","search","url","tel","password"].includes(e.type)),n=h(()=>{const i={...O.splitAttrs.listeners.value,onInput:o,onPaste:C,onChange:a,onBlur:y,onFocus:fe};return i.onCompositionstart=i.onCompositionupdate=i.onCompositionend=E,V.value===!0&&(i.onKeydown=R),e.autogrow===!0&&(i.onAnimationend=d),i}),f=h(()=>{const i={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:j.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return l.value===!1&&(i.type=e.type),e.autogrow===!0&&(i.rows=1),i});N(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),N(()=>e.modelValue,i=>{if(V.value===!0){if(F===!0&&(F=!1,String(i)===m))return;b(i)}else M.value!==i&&(M.value=i,e.type==="number"&&c.hasOwnProperty("value")===!0&&(S===!0?S=!1:delete c.value));e.autogrow===!0&&U(B)}),N(()=>e.autogrow,i=>{i===!0?U(B):p.value!==null&&s.rows>0&&(p.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&U(B)});function g(){Se(()=>{const i=document.activeElement;p.value!==null&&p.value!==i&&(i===null||i.id!==O.targetUid.value)&&p.value.focus({preventScroll:!0})})}function v(){p.value!==null&&p.value.select()}function C(i){if(V.value===!0&&e.reverseFillMask!==!0){const P=i.target;z(P,P.selectionStart,P.selectionEnd)}t("paste",i)}function o(i){if(!i||!i.target)return;if(e.type==="file"){t("update:modelValue",i.target.files);return}const P=i.target.value;if(i.target.qComposing===!0){c.value=P;return}if(V.value===!0)b(P,!1,i.inputType);else if(A(P),u.value===!0&&i.target===document.activeElement){const{selectionStart:T,selectionEnd:H}=i.target;T!==void 0&&H!==void 0&&U(()=>{i.target===document.activeElement&&P.indexOf(i.target.value)===0&&i.target.setSelectionRange(T,H)})}e.autogrow===!0&&B()}function d(i){t("animationend",i),B()}function A(i,P){q=()=>{w=null,e.type!=="number"&&c.hasOwnProperty("value")===!0&&delete c.value,e.modelValue!==i&&m!==i&&(m=i,P===!0&&(F=!0),t("update:modelValue",i),U(()=>{m===i&&(m=NaN)})),q=void 0},e.type==="number"&&(S=!0,c.value=i),e.debounce!==void 0?(w!==null&&clearTimeout(w),c.value=i,w=setTimeout(q,e.debounce)):q()}function B(){requestAnimationFrame(()=>{const i=p.value;if(i!==null){const P=i.parentNode.style,{overflow:T}=i.style;k.platform.is.firefox!==!0&&(i.style.overflow="hidden"),P.marginBottom=i.scrollHeight-1+"px",i.style.height="1px",i.style.height=i.scrollHeight+"px",i.style.overflow=T,P.marginBottom=""}})}function a(i){E(i),w!==null&&(clearTimeout(w),w=null),q!==void 0&&q(),t("change",i.target.value)}function y(i){i!==void 0&&fe(i),w!==null&&(clearTimeout(w),w=null),q!==void 0&&q(),S=!1,F=!1,delete c.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=M.value!==void 0?M.value:"")})}function _(){return c.hasOwnProperty("value")===!0?c.value:M.value!==void 0?M.value:""}ae(()=>{y()}),de(()=>{e.autogrow===!0&&B()}),Object.assign(O,{innerValue:M,fieldClass:h(()=>`q-${l.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:h(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:p,emitValue:A,hasValue:K,floatingLabel:h(()=>K.value===!0||ue(e.displayValue)),getControl:()=>x(l.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...f.value,...n.value,...e.type!=="file"?{value:_()}:I.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(l.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},_()),x("span",e.shadowText)])});const L=at(O);return Object.assign(r,{focus:g,select:v,getNativeElement:()=>p.value}),ke(r,"nativeEl",()=>p.value),L}});function te(e,t){return[!0,!1].includes(e)?e:t}var wt=se({name:"QPagination",props:{...ie,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||Fe.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:t}){const{proxy:s}=Q(),{$q:r}=s,k=re(e,r),c=h(()=>parseInt(e.min,10)),m=h(()=>parseInt(e.max,10)),S=h(()=>parseInt(e.maxPages,10)),F=h(()=>V.value+" / "+m.value),w=h(()=>te(e.boundaryLinks,e.input)),q=h(()=>te(e.boundaryNumbers,!e.input)),p=h(()=>te(e.directionLinks,e.input)),j=h(()=>te(e.ellipses,!e.input)),M=D(null),V=h({get:()=>e.modelValue,set:o=>{if(o=parseInt(o,10),e.disable||isNaN(o))return;const d=Qe(o,c.value,m.value);e.modelValue!==d&&t("update:modelValue",d)}});N(()=>`${c.value}|${m.value}`,()=>{V.value=e.modelValue});const z=h(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),b=h(()=>e.gutter in ce?`${ce[e.gutter]}px`:e.gutter||null),R=h(()=>b.value!==null?`--q-pagination-gutter-parent:-${b.value};--q-pagination-gutter-child:${b.value}`:null),I=h(()=>{const o=[e.iconFirst||r.iconSet.pagination.first,e.iconPrev||r.iconSet.pagination.prev,e.iconNext||r.iconSet.pagination.next,e.iconLast||r.iconSet.pagination.last];return r.lang.rtl===!0?o.reverse():o}),K=h(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),E=h(()=>_e(e,"flat")),O=h(()=>({[E.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),l=h(()=>{const o={[E.value]:!1};return e.activeDesign!==""&&(o[e.activeDesign]=!0),o}),u=h(()=>({...l.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),n=h(()=>{let o=Math.max(S.value,1+(j.value?2:0)+(q.value?2:0));const d={pgFrom:c.value,pgTo:m.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(m.value).length)}em`}};return S.value&&o<m.value-c.value+1&&(o=1+Math.floor(o/2)*2,d.pgFrom=Math.max(c.value,Math.min(m.value-o+1,e.modelValue-Math.floor(o/2))),d.pgTo=Math.min(m.value,d.pgFrom+o-1),q.value&&(d.boundaryStart=!0,d.pgFrom++),j.value&&d.pgFrom>c.value+(q.value?1:0)&&(d.ellipsesStart=!0,d.pgFrom++),q.value&&(d.boundaryEnd=!0,d.pgTo--),j.value&&d.pgTo<m.value-(q.value?1:0)&&(d.ellipsesEnd=!0,d.pgTo--)),d});function f(o){V.value=o}function g(o){V.value=V.value+o}const v=h(()=>{function o(){V.value=M.value,M.value=null}return{"onUpdate:modelValue":d=>{M.value=d},onKeyup:d=>{ze(d,13)===!0&&o()},onBlur:o}});function C(o,d,A){const B={"aria-label":d,"aria-current":"false",...O.value,...o};return A===!0&&Object.assign(B,{"aria-current":"true",...u.value}),d!==void 0&&(e.toFn!==void 0?B.to=e.toFn(d):B.onClick=()=>{f(d)}),x(Be,B)}return Object.assign(s,{set:f,setByOffset:g}),()=>{const o=[],d=[];let A;if(w.value===!0&&(o.push(C({key:"bls",disable:e.disable||e.modelValue<=c.value,icon:I.value[0]},c.value)),d.unshift(C({key:"ble",disable:e.disable||e.modelValue>=m.value,icon:I.value[3]},m.value))),p.value===!0&&(o.push(C({key:"bdp",disable:e.disable||e.modelValue<=c.value,icon:I.value[1]},e.modelValue-1)),d.unshift(C({key:"bdn",disable:e.disable||e.modelValue>=m.value,icon:I.value[2]},e.modelValue+1))),e.input!==!0){A=[];const{pgFrom:B,pgTo:a,marginalStyle:y}=n.value;if(n.value.boundaryStart===!0){const _=c.value===e.modelValue;o.push(C({key:"bns",style:y,disable:e.disable,label:c.value},c.value,_))}if(n.value.boundaryEnd===!0){const _=m.value===e.modelValue;d.unshift(C({key:"bne",style:y,disable:e.disable,label:m.value},m.value,_))}n.value.ellipsesStart===!0&&o.push(C({key:"bes",style:y,disable:e.disable,label:"\u2026",ripple:!1},B-1)),n.value.ellipsesEnd===!0&&d.unshift(C({key:"bee",style:y,disable:e.disable,label:"\u2026",ripple:!1},a+1));for(let _=B;_<=a;_++)A.push(C({key:`bpg${_}`,style:y,disable:e.disable,label:_},_,_===e.modelValue))}return x("div",{class:z.value,...K.value},[x("div",{class:"q-pagination__content row no-wrap items-center",style:R.value},[...o,e.input===!0?x(gt,{class:"inline",style:{width:`${F.value.length/1.5}em`},type:"number",dense:!0,value:M.value,disable:e.disable,dark:k.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:F.value,min:c.value,max:m.value,...v.value}):x("div",{class:"q-pagination__middle row justify-center"},A),...d])])}}});export{pt as Q,tt as a,at as b,lt as c,Ct as d,Se as e,ue as f,st as g,wt as h,St as r,et as u};
