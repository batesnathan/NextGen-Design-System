import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as d}from"./Button-D1FWlLbG.js";const u={title:"NextGen/Components/Button",component:d,parameters:{layout:"centered",backgrounds:{default:"gray",values:[{name:"gray",value:"#d9d9d9"}]}},tags:["autodocs"],args:{children:"Continue"}},s={args:{variant:"primary"}},t={args:{variant:"secondary"}},n={args:{variant:"tertiary"}},i={args:{variant:"ai"}},o={render:()=>{const c=["default","large","small"],p=["primary","secondary","tertiary","ai"];return e.jsxs("div",{style:{display:"grid",gap:14},children:[p.map(a=>e.jsx("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:c.map(r=>e.jsx(d,{variant:a,size:r,children:"Button text"},`${a}-${r}`))},a)),p.map(a=>e.jsx("div",{style:{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:c.map(r=>e.jsx(d,{variant:a,size:r,disabled:!0,children:"Button text"},`${a}-${r}-disabled`))},`${a}-disabled`))]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ai"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = ["default", "large", "small"] as const;
    const variants = ["primary", "secondary", "tertiary", "ai"] as const;
    return <div style={{
      display: "grid",
      gap: 14
    }}>
        {variants.map(variant => <div key={variant} style={{
        display: "flex",
        gap: 20,
        alignItems: "center",
        flexWrap: "wrap"
      }}>
            {sizes.map(size => <Button key={\`\${variant}-\${size}\`} variant={variant} size={size}>
                Button text
              </Button>)}
          </div>)}

        {variants.map(variant => <div key={\`\${variant}-disabled\`} style={{
        display: "flex",
        gap: 20,
        alignItems: "center",
        flexWrap: "wrap"
      }}>
            {sizes.map(size => <Button key={\`\${variant}-\${size}-disabled\`} variant={variant} size={size} disabled>
                Button text
              </Button>)}
          </div>)}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const y=["Primary","Secondary","Tertiary","AI","FigmaMatrix"];export{i as AI,o as FigmaMatrix,s as Primary,t as Secondary,n as Tertiary,y as __namedExportsOrder,u as default};
