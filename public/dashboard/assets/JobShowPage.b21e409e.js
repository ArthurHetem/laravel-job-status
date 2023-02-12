import{c as F,Q as v,b as k}from"./index.a495139d.js";import{Q as d,b as n,c as _,d as w}from"./QItem.83c92a13.js";import{Q as h}from"./QPage.9d66d3fd.js";import{R as j}from"./QBtn.1ade33fc.js";import{Q as x}from"./QAvatar.e889e2f7.js";import{H as p,I as l,J as r,K as e,d as a,M as o,N as f,P as c,Q as y,F as R,R as B,r as Q,o as L,k as I,A as g}from"./index.f77ee584.js";import{_ as J}from"./RunListWithFiltering.82b21d4e.js";import"./render.99e9fd73.js";import"./index.b7f28e66.js";import"./QPagination.afcbae37.js";import"./format.a33550d6.js";import"./QCircularProgress.7783e0ae.js";import"./api.9a3f3035.js";import"./dayjs.min.f33b4325.js";import"./relativeTime.9c1f7d0f.js";const $={class:"text-weight-medium"},A=p({__name:"JobFailureListItem",props:{jobFailure:null},setup(u){const i=u;return(s,t)=>(l(),r(_,null,{default:e(()=>[a(d,{avatar:"",top:""},{default:e(()=>[a(x,{color:"primary","text-color":"white"},{default:e(()=>[o(f(i.jobFailure.count),1)]),_:1})]),_:1}),a(d,{top:""},{default:e(()=>[a(n,{lines:"1"},{default:e(()=>[c("span",$,f(i.jobFailure.message),1)]),_:1})]),_:1})]),_:1}))}}),N={key:1},C=p({__name:"JobFailureReasons",props:{jobFailureReasons:null},setup(u){return(i,s)=>(l(),r(w,{bordered:"",separator:""},{default:e(()=>[a(n,{header:""},{default:e(()=>[o("Errors")]),_:1}),u.jobFailureReasons.length===0?(l(),r(_,{key:0},{default:e(()=>[a(d,null,{default:e(()=>[a(n,null,{default:e(()=>[o("Good news; no errors found!")]),_:1})]),_:1})]),_:1})):(l(),y("div",N,[(l(!0),y(R,null,B(u.jobFailureReasons,(t,m)=>(l(),r(_,{key:m},{default:e(()=>[a(A,{"job-failure":t},null,8,["job-failure"])]),_:2},1024))),128))]))]),_:1}))}}),E={class:"row"},P={class:"col-12 col-sm-6 q-py-md"},S={class:"col-12 col-sm-6 q-py-md"},V={class:"row"},q={class:"col-12"},se=p({__name:"JobShowPage",props:{alias:null},setup(u){const i=u,s=Q(null),t=Q(null);function m(){t.value!==null&&t.value.stop(),t.value=F.jobs.show(i.alias).bypassAuth().listen().onUpdated(b=>s.value=b).start()}return L(()=>m()),I(()=>{t.value!==null&&t.value.stop()}),(b,D)=>s.value!==null?(l(),r(h,{key:0,class:"justify-evenly",padding:""},{default:e(()=>[a(k,null,{default:e(()=>[a(v,{icon:"list",to:"/jobs",label:"Jobs"}),a(v,{label:s.value.alias,icon:"view_stream",to:"/jobs/"+s.value.alias},null,8,["label","to"])]),_:1}),c("div",E,[c("div",P,[a(w,{bordered:"",separator:""},{default:e(()=>[g((l(),r(_,null,{default:e(()=>[a(d,null,{default:e(()=>[a(n,null,{default:e(()=>[o(f(s.value.alias),1)]),_:1}),a(n,{caption:""},{default:e(()=>[o("Alias")]),_:1})]),_:1})]),_:1})),[[j]]),g((l(),r(_,null,{default:e(()=>[a(d,null,{default:e(()=>[a(n,null,{default:e(()=>[o(f(s.value.class),1)]),_:1}),a(n,{caption:""},{default:e(()=>[o("Class")]),_:1})]),_:1})]),_:1})),[[j]])]),_:1})]),c("div",S,[a(C,{"job-failure-reasons":s.value.failure_reasons},null,8,["job-failure-reasons"])])]),c("div",V,[c("div",q,[a(J,{title:"Runs",aliases:[i.alias]},null,8,["aliases"])])])]),_:1})):(l(),r(h,{key:1,class:"items-center justify-evenly",padding:""},{default:e(()=>[o(" Loading ")]),_:1}))}});export{se as default};
