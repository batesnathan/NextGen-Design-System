import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-DniKsI1p.js";import{b as m,B as s}from"./BottomNav-B1-bMc8V.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"NextGen/Components/Bottom Nav",component:s,parameters:{layout:"centered",backgrounds:{default:"canvas",values:[{name:"canvas",value:"#f4f4f4"}]}},tags:["autodocs"],args:{activeItem:"home"},argTypes:{activeItem:{options:[...m],control:{type:"inline-radio"}}}},t={render:e=>{const[c,n]=i.useState(e.activeItem??"home");return o.jsx(s,{...e,activeItem:c,onItemSelect:n})}},a={args:{activeItem:"home"}},r={render:()=>o.jsx("div",{style:{display:"grid",gap:12},children:m.map(e=>o.jsx(s,{activeItem:e},e))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeItem, setActiveItem] = useState<BottomNavItem>(args.activeItem ?? "home");
    return <BottomNav {...args} activeItem={activeItem} onItemSelect={setActiveItem} />;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    activeItem: "home"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      {bottomNavItems.map(item => <BottomNav key={item} activeItem={item} />)}
    </div>
}`,...r.parameters?.docs?.source}}};const I=["Playground","FigmaStateHome","AllActiveStates"];export{r as AllActiveStates,a as FigmaStateHome,t as Playground,I as __namedExportsOrder,u as default};
