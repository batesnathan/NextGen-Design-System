import{j as e}from"./jsx-runtime-u17CrQMm.js";const m="http://localhost:3845/assets/5321446777ba0f3ef4f2e0e3f10b3fcfef64279a.svg";function n({selected:d,defaultSelected:c=!1,onSelectedChange:l,disabled:o,className:i="",...u}){const a=d??c;function p(){o||l?.(!a)}return e.jsx("button",{type:"button",role:"radio","aria-checked":a,disabled:o,onClick:p,className:`ng-reset ng-radio-button ${a?"ng-radio-button--selected":""} ${i}`.trim(),...u,children:e.jsx("span",{className:"ng-radio-button__icon","aria-hidden":"true",children:a?e.jsx("img",{src:m,alt:"",className:"ng-radio-button__selected"}):null})})}n.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{selected:{required:!1,tsType:{name:"boolean"},description:""},defaultSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelectedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const g={title:"NextGen/Components/Radio Button",component:n,parameters:{layout:"centered",backgrounds:{default:"canvas",values:[{name:"canvas",value:"#f4f4f4"}]}},tags:["autodocs"],args:{selected:!0}},s={},t={args:{selected:!1}},r={render:()=>e.jsxs("div",{style:{border:"2px dashed #6f29ff",borderRadius:8,display:"grid",gap:12,padding:8},children:[e.jsx(n,{selected:!0}),e.jsx(n,{selected:!1})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: "2px dashed #6f29ff",
    borderRadius: 8,
    display: "grid",
    gap: 12,
    padding: 8
  }}>
      <RadioButton selected />
      <RadioButton selected={false} />
    </div>
}`,...r.parameters?.docs?.source}}};const b=["Selected","Unselected","FigmaStack"];export{r as FigmaStack,s as Selected,t as Unselected,b as __namedExportsOrder,g as default};
