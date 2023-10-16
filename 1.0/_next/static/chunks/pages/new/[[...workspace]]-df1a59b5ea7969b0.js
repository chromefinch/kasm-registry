(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return l(5790)}])},5790:function(e,a,l){"use strict";l.r(a),l.d(a,{__N_SSG:function(){return m},default:function(){return p}});var s=l(5893),t=l(9008),n=l.n(t),r=l(7294),i=l(3162),o=l(8813),c=l(3157),u=l(1163),d=JSON.parse('{"wZ":[{"description":"Chromium is a free and open-source browser, primarily developed and maintained by Google.","docker_registry":"https://index.docker.io/v1/","image_src":"chromium.png","name":"kasmweb/chromium:develop","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Chromium","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"365ce0f48ab56c008eb362a1b40e2af8aae793c1"},{"friendly_name":"Ubuntu Jammy Custom V3","image_src":"ubuntu.png","description":"Ubuntu is a Linux distribution based on Debian.","name":"chromefinch/custom:latest","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://hub.docker.com/r/chromefinch/custom/","categories":["Desktop","Productivity","Development"],"require_gpu":false,"enabled":true,"image_type":"Container","run_config":{"hostname":"kasm"},"notes":"The Kasm Ubuntu Jammy Workspace requires libseccomp => 2.5.3 to run.\\n\\nThis can be checked by running runc --version\\n\\nIf you still want to run Ubuntu Jammy but do not have the minimum required libseccomp version, it can be run in an unsecure manner by adding: {\\"security_opt\\":[\\"seccomp=unconfined\\"]} to the Docker Run Config Override (JSON) setting above.\\n\\nNOTE: This will run the Workspace without the docker seccomp sandbox and will significantly reduce the amount of protection that Kasm Workspaces can provide.\\n","architecture":["amd64","arm64"],"compatibility":["1.14.x"],"uncompressed_size_mb":7660,"sha":"de8384d978ea44f2287b82e76901e2b7595d7bba"}]}'),m=!0;function p(e){let{workspace:a}=e,t=(0,r.useRef)(null),m=(0,r.useRef)(null),p=(0,r.useRef)(null),[b,f]=(0,r.useState)(null),[x,g]=(0,r.useState)(null),[v,y]=(0,r.useState)(null),[w,j]=(0,r.useState)("png"),[_,N]=(0,r.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[C,S]=(0,r.useState)(k);(0,u.useRouter)(),(0,r.useEffect)(()=>{if(null===a)p.current.value="",t.current.value="",m.current.value="",f(null),g(null),y(null),S(k);else if(a&&a[0]){let e=d.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,t.current.value=e.name,m.current.value=e.friendly_name,e.categories){let l=[];e.categories.map(e=>l.push({label:e,value:e})),f(l)}if(e.architecture){let s=[];e.architecture.map(e=>s.push({label:e,value:e})),g(s)}N("../../icons/"+e.image_src),S({...C,...e})}},[a]);let O={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:l}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,r.useEffect)(()=>{if(C&&C.friendly_name){let e={...C};e.image_src=I(e.friendly_name)+"."+w,S(e)}},[w]);let R=e=>{let a={...C};a.categories=e.map(e=>e.value),S(a);let l=[];a.categories.map(e=>l.push({label:e,value:e})),f(l)},D=e=>{let a={...C};a.architecture=e.map(e=>e.value),S(a);let l=[];a.architecture.map(e=>l.push({label:e,value:e})),g(l)};function I(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let L=()=>{var e=l(5733);let a=new e,s=a.folder(C.friendly_name);if(s.file("workspace.json",JSON.stringify(C,null,2)),v)s.file(C.image_src,v.file);else if(_){let t=fetch(_).then(e=>e.blob());s.file(C.image_src,t)}a.generateAsync({type:"blob"}).then(function(e){(0,i.saveAs)(e,I(C.friendly_name)+".zip")})},E=e=>{let a={...C};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,y({value:e.target.value,file:e.target.files[0]}),j(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),N(null)),a.friendly_name&&(a.image_src=I(a.friendly_name)+"."+w),S(a)};return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:"Kasm Workspaces"}),(0,s.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,s.jsx)("input",{type:"file",name:"icon",onChange:E,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,s.jsx)("input",{ref:m,name:"friendly_name",onChange:E,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,s.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:R,styles:O,value:b}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,s.jsx)("input",{ref:p,name:"description",onChange:E,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,s.jsx)("input",{ref:t,name:"name",onChange:E,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,s.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,s.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:D,styles:O,value:x}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,s.jsx)(h,{workspace:C,icon:v,inlineImage:_}),(0,s.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...C},null,2)}),(0,s.jsx)("button",{onClick:L,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:a,icon:l,inlineImage:t}=e,[n,i]=(0,r.useState)(!1),o=null;if(l){let c=new Blob([l.file]);o=URL.createObjectURL(c),a.image_src=o}return(0,s.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,s.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(n?" -translate-y-1/2":""),children:[(0,s.jsxs)("div",{onClick:()=>i(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,s.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==t&&(e.target.src=t)},alt:a.friendly_name}),(0,s.jsxs)("div",{className:"flex-col pl-28",children:[(0,s.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,s.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Chromefinch"," ",(0,s.jsx)("span",{children:void 0})]}),(0,s.jsx)("div",{className:" h-8"})]}),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,s.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,s.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>i(!1),children:(0,s.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,s.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,s.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,s.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,s.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,s.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,s.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);