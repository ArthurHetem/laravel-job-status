import{c as y,h as b}from"./render.599fc38b.js";import{j as s,c,h as C,a as u,g as j,l as v,E as S}from"./index.282533d9.js";import{a as d}from"./index.2cf0d985.js";import{C as h}from"./config.83e19d5f.js";var K=y({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:o}}=j(),n=u(v,s);if(n===s)return console.error("QPage needs to be a deep child of QLayout"),s;if(u(S,s)===s)return console.error("QPage needs to be child of QPageContainer"),s;const l=c(()=>{const i=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof e.styleFn=="function"){const m=n.isContainer.value===!0?n.containerHeight.value:o.screen.height;return e.styleFn(i,m)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-i+"px":o.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":o.screen.height-i+"px"}}),f=c(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>C("main",{class:f.value,style:l.value},b(t.default))}});const g=(e,t={})=>d.post(e,t),a=(e,t={})=>d.get(e,t),r=e=>{var n;const t=(n=h.get().domain)!=null?n:"",o=h.get().path;return t+(t.endsWith("/")?"":"/")+o+(o.endsWith("/")?"":"/")+"api/"+e},Q=()=>a(r("dashboard")).then(e=>({test:""})),x=()=>a(r("tracked-job")).then(e=>e.data),F=e=>a(r("tracked-job/"+encodeURIComponent(e))).then(t=>t.data),P=e=>a(r("job-run/"+e.toString())).then(t=>t.data),$=()=>a(r("history")).then(e=>e.data),R=(e,t,o,n)=>g(r("signal/"+e.toString()),{signal:t,cancel_job:o?"1":"0",parameters:n}).then(p=>{}),k=()=>a(r("batch")).then(e=>e.data),q=e=>a(r("batch/"+e.toString())).then(t=>t.data),w=e=>a(r("tracked-job/"+encodeURIComponent(e)+"/failures")).then(t=>t.data),H=e=>g(r("job-run/"+e.toString()+"/retry")).then(t=>{});var W={dashboard:Q,jobList:x,jobShow:F,runShow:P,history:$,signal:R,batchList:k,batchShow:q,jobFailureReasons:w,retry:H};export{K as Q,W as a};
