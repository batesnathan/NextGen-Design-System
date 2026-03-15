import{j as a}from"./jsx-runtime-u17CrQMm.js";function l(){return a.jsx("span",{className:"ng-icon-button__placeholder","aria-hidden":"true"})}function e({variant:c="default",icon:s,className:u="",...i}){return a.jsx("button",{type:"button",className:`ng-reset ng-icon-button ng-icon-button--${c} ${u}`.trim(),...i,children:a.jsx("span",{className:"ng-icon-button__icon","aria-hidden":"true",children:s??a.jsx(l,{})})})}e.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "surface" | "compact"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"surface"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const m={title:"NextGen/Components/Icon Button",component:e,parameters:{layout:"centered",backgrounds:{default:"gray",values:[{name:"gray",value:"#d9d9d9"}]}},tags:["autodocs"]},t={args:{variant:"default","aria-label":"Default icon button"}},n={args:{variant:"surface","aria-label":"Surface icon button"}},r={args:{variant:"compact","aria-label":"Compact icon button"}},o={render:()=>a.jsxs("div",{style:{display:"grid",gap:18,justifyItems:"center"},children:[a.jsx(e,{variant:"default","aria-label":"Default icon button"}),a.jsx(e,{variant:"surface","aria-label":"Surface icon button"}),a.jsx(e,{variant:"compact","aria-label":"Compact icon button"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    "aria-label": "Default icon button"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "surface",
    "aria-label": "Surface icon button"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "compact",
    "aria-label": "Compact icon button"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 18,
    justifyItems: "center"
  }}>
      <IconButton variant="default" aria-label="Default icon button" />
      <IconButton variant="surface" aria-label="Surface icon button" />
      <IconButton variant="compact" aria-label="Compact icon button" />
    </div>
}`,...o.parameters?.docs?.source}}};const p=["Default","Surface","Compact","FigmaStack"];export{r as Compact,t as Default,o as FigmaStack,n as Surface,p as __namedExportsOrder,m as default};
