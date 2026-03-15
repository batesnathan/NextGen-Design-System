import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe--lfDQjiq.js";import"./preload-helper-PPVm8Dsz.js";function t({checked:n,defaultChecked:i=!1,onCheckedChange:u,disabled:o,className:h="",...p}){const d=n!==void 0,[m,k]=f.useState(i),a=d?n:m;function g(){if(o)return;const l=!a;d||k(l),u?.(l)}return e.jsx("button",{type:"button",role:"checkbox","aria-checked":a,disabled:o,onClick:g,className:`ng-reset ng-checkbox ${a?"ng-checkbox--checked":""} ${h}`.trim(),...p,children:e.jsx("span",{className:"ng-checkbox__icon","aria-hidden":"true",children:a?e.jsx("svg",{viewBox:"0 0 24 24",className:"ng-checkbox__check",focusable:"false",children:e.jsx("path",{d:"M6.5 12.5L10.5 16.5L17.5 8.5"})}):null})})}t.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const y={title:"NextGen/Components/Checkbox",component:t,parameters:{layout:"centered",backgrounds:{default:"gray",values:[{name:"gray",value:"#d9d9d9"}]}},tags:["autodocs"],args:{defaultChecked:!0}},r={args:{checked:!0}},c={args:{checked:!1}},s={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx(t,{checked:!0,"aria-label":"Checked"}),e.jsx(t,{checked:!1,"aria-label":"Not selected"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <Checkbox checked aria-label="Checked" />
      <Checkbox checked={false} aria-label="Not selected" />
    </div>
}`,...s.parameters?.docs?.source}}};const v=["Checked","Unchecked","FigmaPair"];export{r as Checked,s as FigmaPair,c as Unchecked,v as __namedExportsOrder,y as default};
