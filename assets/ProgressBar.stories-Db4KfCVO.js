import{j as e}from"./jsx-runtime-u17CrQMm.js";function m(t,r,l){return Math.min(Math.max(t,r),l)}function a({value:t=63,max:r=100,className:l="",...d}){const u=r<=0?100:r,c=m(t,0,u),i=c/u*100;return e.jsx("div",{className:`ng-reset ng-progress-bar ${l}`.trim(),role:"progressbar","aria-valuemin":0,"aria-valuemax":u,"aria-valuenow":Math.round(c),...d,children:e.jsx("span",{className:"ng-progress-bar__track","aria-hidden":"true",children:e.jsx("span",{className:"ng-progress-bar__fill",style:{width:`${i}%`}})})})}a.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"63",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const g={title:"NextGen/Components/Progress Bar",component:a,parameters:{layout:"centered",backgrounds:{default:"canvas",values:[{name:"canvas",value:"#f4f4f4"}]}},tags:["autodocs"],args:{value:63,max:100}},s={},o={args:{value:63.13}},n={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(a,{value:16}),e.jsx(a,{value:38}),e.jsx(a,{value:63.13}),e.jsx(a,{value:82}),e.jsx(a,{value:100})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 63.13
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <ProgressBar value={16} />
      <ProgressBar value={38} />
      <ProgressBar value={63.13} />
      <ProgressBar value={82} />
      <ProgressBar value={100} />
    </div>
}`,...n.parameters?.docs?.source}}};const v=["Default","FigmaValue","ProgressScale"];export{s as Default,o as FigmaValue,n as ProgressScale,v as __namedExportsOrder,g as default};
