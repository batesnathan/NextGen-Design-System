import{j as e}from"./jsx-runtime-u17CrQMm.js";function s({message:r="Mauris feugiat maximus auctor.",tone:n="danger",styleType:u="subtle",showIcon:o=!0,className:i="",...m}){return e.jsxs("div",{role:"status","aria-live":"polite",className:`ng-reset ng-alert ng-alert--${n} ng-alert--${u} ${i}`.trim(),...m,children:[o?e.jsx("span",{className:"ng-alert__icon","aria-hidden":"true"}):null,e.jsx("p",{className:"ng-alert__text",children:r})]})}s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Mauris feugiat maximus auctor."',computed:!1}},tone:{required:!1,tsType:{name:"union",raw:'"danger" | "callout" | "warning" | "success" | "neutral"',elements:[{name:"literal",value:'"danger"'},{name:"literal",value:'"callout"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"danger"',computed:!1}},styleType:{required:!1,tsType:{name:"union",raw:'"subtle" | "vibrant"',elements:[{name:"literal",value:'"subtle"'},{name:"literal",value:'"vibrant"'}]},description:"",defaultValue:{value:'"subtle"',computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const a="Mauris feugiat maximus auctor.",d={title:"NextGen/Components/Alert",component:s,parameters:{layout:"centered",backgrounds:{default:"gray",values:[{name:"gray",value:"#d9d9d9"}]}},tags:["autodocs"],args:{message:a,tone:"danger",styleType:"subtle"}},t={},l={render:()=>e.jsxs("div",{style:{display:"grid",gap:14},children:[e.jsx(s,{tone:"danger",styleType:"subtle",message:a}),e.jsx(s,{tone:"callout",styleType:"subtle",message:a}),e.jsx(s,{tone:"warning",styleType:"subtle",message:a}),e.jsx(s,{tone:"success",styleType:"subtle",message:a}),e.jsx(s,{tone:"neutral",styleType:"subtle",message:a}),e.jsx(s,{tone:"danger",styleType:"vibrant",message:a}),e.jsx(s,{tone:"callout",styleType:"vibrant",message:a}),e.jsx(s,{tone:"warning",styleType:"vibrant",message:a}),e.jsx(s,{tone:"success",styleType:"vibrant",message:a}),e.jsx(s,{tone:"neutral",styleType:"vibrant",message:a})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 14
  }}>
      <Alert tone="danger" styleType="subtle" message={message} />
      <Alert tone="callout" styleType="subtle" message={message} />
      <Alert tone="warning" styleType="subtle" message={message} />
      <Alert tone="success" styleType="subtle" message={message} />
      <Alert tone="neutral" styleType="subtle" message={message} />

      <Alert tone="danger" styleType="vibrant" message={message} />
      <Alert tone="callout" styleType="vibrant" message={message} />
      <Alert tone="warning" styleType="vibrant" message={message} />
      <Alert tone="success" styleType="vibrant" message={message} />
      <Alert tone="neutral" styleType="vibrant" message={message} />
    </div>
}`,...l.parameters?.docs?.source}}};const g=["DangerSubtle","FigmaMatrix"];export{t as DangerSubtle,l as FigmaMatrix,g as __namedExportsOrder,d as default};
