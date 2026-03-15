import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as t}from"./AccountCard-DGIX9HLQ.js";const l={title:"NextGen/Components/Account Card",component:t,parameters:{layout:"centered",backgrounds:{default:"canvas",values:[{name:"canvas",value:"#d9d9d9"}]}},tags:["autodocs"],args:{size:"large",variant:"hsa"}},r={},s={render:()=>{const n=["hsa","lp-fsa","healthcare-fsa-use-date","healthcare-fsa","commuter-transit","commuter-parking","lifestyle","hra"];return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:16},children:[e.jsx("div",{style:{display:"grid",gap:12},children:n.map(a=>e.jsx(t,{size:"large",variant:a},`lg-${a}`))}),e.jsx("div",{style:{display:"grid",gap:12},children:n.map(a=>e.jsx(t,{size:"small",variant:a},`sm-${a}`))})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["hsa", "lp-fsa", "healthcare-fsa-use-date", "healthcare-fsa", "commuter-transit", "commuter-parking", "lifestyle", "hra"] as const;
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 16
    }}>
        <div style={{
        display: "grid",
        gap: 12
      }}>
          {variants.map(variant => <AccountCard key={\`lg-\${variant}\`} size="large" variant={variant} />)}
        </div>
        <div style={{
        display: "grid",
        gap: 12
      }}>
          {variants.map(variant => <AccountCard key={\`sm-\${variant}\`} size="small" variant={variant} />)}
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const o=["HSA","FigmaMatrix"];export{s as FigmaMatrix,r as HSA,o as __namedExportsOrder,l as default};
