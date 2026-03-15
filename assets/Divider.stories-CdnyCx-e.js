import{j as r}from"./jsx-runtime-u17CrQMm.js";function c(e,o){return e===void 0?o:typeof e=="number"?`${e}px`:e}function t({direction:e="vertical",length:o,className:d="",...l}){const s=e==="horizontal";return r.jsx("div",{className:`ng-reset ng-divider ng-divider--${e} ${d}`.trim(),style:{"--ng-divider-length":c(o,s?"320px":"120px")},role:"separator","aria-orientation":s?"horizontal":"vertical",...l,children:r.jsx("span",{className:"ng-divider__line","aria-hidden":"true"})})}t.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},length:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const m={title:"NextGen/Components/Divider",component:t,parameters:{layout:"centered",backgrounds:{default:"canvas",values:[{name:"canvas",value:"#d9d9d9"}]}},tags:["autodocs"],args:{direction:"vertical"},argTypes:{direction:{options:["horizontal","vertical"],control:{type:"inline-radio"}}}},a={args:{direction:"vertical",length:120}},n={args:{direction:"horizontal",length:320}},i={render:()=>r.jsxs("div",{style:{border:"2px dashed #6f29ff",borderRadius:8,display:"grid",gap:24,padding:18,width:420},children:[r.jsx(t,{direction:"vertical",length:120}),r.jsx(t,{direction:"horizontal",length:320})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    length: 120
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    length: 320
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: "2px dashed #6f29ff",
    borderRadius: 8,
    display: "grid",
    gap: 24,
    padding: 18,
    width: 420
  }}>
      <Divider direction="vertical" length={120} />
      <Divider direction="horizontal" length={320} />
    </div>
}`,...i.parameters?.docs?.source}}};const u=["Vertical","Horizontal","FigmaPreview"];export{i as FigmaPreview,n as Horizontal,a as Vertical,u as __namedExportsOrder,m as default};
