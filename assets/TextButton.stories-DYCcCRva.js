import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as e}from"./TextButton-JffHqWIB.js";const u={title:"NextGen/Components/Text Button",component:e,parameters:{layout:"centered",backgrounds:{default:"gray",values:[{name:"gray",value:"#d9d9d9"}]}},tags:["autodocs"],args:{children:"Button text"}},n={args:{tone:"default",padding:"default"}},a={args:{tone:"danger",padding:"default"}},d={args:{tone:"subtle",padding:"default"}},r={render:()=>t.jsxs("div",{style:{display:"grid",gap:14},children:[t.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(e,{tone:"default",padding:"default",children:"Button text"}),t.jsx(e,{tone:"subtle",padding:"default",children:"Button text"}),t.jsx(e,{tone:"danger",padding:"default",children:"Button text"})]}),t.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(e,{tone:"default",padding:"none",children:"Button text"}),t.jsx(e,{tone:"subtle",padding:"none",children:"Button text"}),t.jsx(e,{tone:"danger",padding:"none",children:"Button text"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "default",
    padding: "default"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "danger",
    padding: "default"
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "subtle",
    padding: "default"
  }
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 14
  }}>
      <div style={{
      display: "flex",
      gap: 24,
      alignItems: "center",
      flexWrap: "wrap"
    }}>
        <TextButton tone="default" padding="default">
          Button text
        </TextButton>
        <TextButton tone="subtle" padding="default">
          Button text
        </TextButton>
        <TextButton tone="danger" padding="default">
          Button text
        </TextButton>
      </div>

      <div style={{
      display: "flex",
      gap: 24,
      alignItems: "center",
      flexWrap: "wrap"
    }}>
        <TextButton tone="default" padding="none">
          Button text
        </TextButton>
        <TextButton tone="subtle" padding="none">
          Button text
        </TextButton>
        <TextButton tone="danger" padding="none">
          Button text
        </TextButton>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};const l=["Default","Danger","Subtle","FigmaMatrix"];export{a as Danger,n as Default,r as FigmaMatrix,d as Subtle,l as __namedExportsOrder,u as default};
