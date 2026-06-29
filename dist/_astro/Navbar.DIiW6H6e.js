import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{c as t}from"./createLucideIcon.aW_VARo5.js";import{M as o}from"./mail.Dytmin11.js";import"./index.DBy5LfQW.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("BriefcaseMedical",[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);function i({children:r,className:l="",contentClassName:a=""}){const s="glass-filter-nav";return e.jsxs("div",{className:`glass-surface glass-surface--fallback ${l}`,style:{"--filter-id":`url(#${s})`},children:[e.jsx("svg",{className:"glass-surface__filter","aria-hidden":"true",focusable:"false",children:e.jsxs("filter",{id:s,colorInterpolationFilters:"sRGB",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.012 0.018",numOctaves:"2",seed:"8",result:"noise"}),e.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"16",xChannelSelector:"R",yChannelSelector:"G"})]})}),e.jsx("div",{className:`glass-surface__content ${a}`,children:r})]})}const m=[{href:"/",label:"Home",icon:x},{href:"/resume",label:"Resume",icon:p},{href:"/clinical-experience",label:"Clinical",icon:f},{href:"/portfolio",label:"Portfolio",icon:d},{href:"/contact",label:"Contact",icon:o}];function k({currentPath:r}){const l=r.replace(/\/$/,"")||"/";return e.jsx("header",{className:"sticky top-4 z-50 mx-auto w-full px-4",children:e.jsxs("nav",{className:"container-premium flex items-center justify-between gap-4","aria-label":"Primary navigation",children:[e.jsxs("a",{href:"/",className:"group flex items-center gap-3 rounded-[1.35rem] border border-white/14 bg-white/[0.06] px-3 py-2 font-bold text-white shadow-premium backdrop-blur-2xl","aria-label":"Caroline Thomas home",children:[e.jsx(i,{className:"size-11 rounded-2xl",contentClassName:"p-0",children:e.jsx(h,{size:20,className:"text-teal"})}),e.jsxs("span",{className:"hidden leading-tight sm:block",children:["Caroline Thomas",e.jsx("span",{className:"block text-xs font-semibold uppercase tracking-[0.18em] text-teal",children:"Nursing Portfolio"})]})]}),e.jsx(i,{className:"max-w-full rounded-[1.75rem]",contentClassName:"gap-1 overflow-x-auto p-1.5",children:m.map(a=>{const s=a.href.replace(/\/$/,"")||"/",c=l===s,n=a.icon;return e.jsxs("a",{href:a.href,"aria-current":c?"page":void 0,className:`inline-flex shrink-0 items-center gap-2 rounded-2xl px-3.5 py-2 text-sm font-semibold transition ${c?"bg-white text-[#07111d] shadow-[0_10px_30px_rgba(255,255,255,.18)]":"text-white/76 hover:bg-white/12 hover:text-white"}`,children:[e.jsx(n,{size:15}),a.label]},a.href)})})]})})}export{k as default};
