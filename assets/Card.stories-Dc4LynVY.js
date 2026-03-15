import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Card-Mol24qYd.js";const r={background:"#dcdcdc"},n={background:"#d9e0f6"},o={title:"NextGen/Components/Card",component:t,parameters:{layout:"centered",backgrounds:{default:"gray",values:[{name:"gray",value:"#d9d9d9"}]}},tags:["autodocs"]},s={render:()=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsx(t,{layout:"slot",surface:"default",children:e.jsx("div",{style:{...r,width:"100%",height:"100%"}})}),e.jsx(t,{layout:"slot",surface:"secondary",children:e.jsx("div",{style:{...n,width:"100%",height:"100%"}})}),e.jsx(t,{layout:"slot",surface:"tertiary",children:e.jsx("div",{style:{...r,width:"100%",height:"100%"}})}),e.jsx(t,{layout:"slot",surface:"outline",children:e.jsx("div",{style:{...r,width:"100%",height:"100%"}})})]})},a={render:()=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsx(t,{layout:"slot",surface:"secondary",children:e.jsx("div",{style:{...n,width:"100%",height:"100%"}})}),e.jsx(t,{layout:"slot",surface:"secondary",selected:!0,children:e.jsx("div",{style:{...n,width:"100%",height:"100%"}})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 24
  }}>
      <Card layout="slot" surface="default">
        <div style={{
        ...slotDefault,
        width: "100%",
        height: "100%"
      }} />
      </Card>

      <Card layout="slot" surface="secondary">
        <div style={{
        ...slotSecondary,
        width: "100%",
        height: "100%"
      }} />
      </Card>

      <Card layout="slot" surface="tertiary">
        <div style={{
        ...slotDefault,
        width: "100%",
        height: "100%"
      }} />
      </Card>

      <Card layout="slot" surface="outline">
        <div style={{
        ...slotDefault,
        width: "100%",
        height: "100%"
      }} />
      </Card>
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 24
  }}>
      <Card layout="slot" surface="secondary">
        <div style={{
        ...slotSecondary,
        width: "100%",
        height: "100%"
      }} />
      </Card>

      <Card layout="slot" surface="secondary" selected>
        <div style={{
        ...slotSecondary,
        width: "100%",
        height: "100%"
      }} />
      </Card>
    </div>
}`,...a.parameters?.docs?.source}}};const i=["SurfaceVariants","SelectableStates"];export{a as SelectableStates,s as SurfaceVariants,i as __namedExportsOrder,o as default};
