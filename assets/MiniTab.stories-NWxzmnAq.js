import{j as e}from"./jsx-runtime-u17CrQMm.js";function r({selected:n=!1,label:d="Text",className:l="",...o}){return e.jsx("button",{type:"button",className:`ng-reset ng-mini-tab ${n?"ng-mini-tab--selected":"ng-mini-tab--default"} ${l}`.trim(),"aria-pressed":n,...o,children:e.jsx("span",{className:"ng-mini-tab__label",children:d})})}r.__docgenInfo={description:"",methods:[],displayName:"MiniTab",props:{selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Text"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const c={title:"NextGen/Components/Mini Tab",component:r,parameters:{layout:"centered",backgrounds:{default:"canvas",values:[{name:"canvas",value:"#f4f4f4"}]}},tags:["autodocs"],args:{label:"Text",selected:!1}},a={},s={args:{selected:!0}},t={render:()=>e.jsxs("div",{style:{border:"2px dashed #6f29ff",borderRadius:8,display:"grid",gap:16,padding:12},children:[e.jsx(r,{label:"Text",selected:!1}),e.jsx(r,{label:"Text",selected:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: "2px dashed #6f29ff",
    borderRadius: 8,
    display: "grid",
    gap: 16,
    padding: 12
  }}>
      <MiniTab label="Text" selected={false} />
      <MiniTab label="Text" selected />
    </div>
}`,...t.parameters?.docs?.source}}};const u=["Default","Selected","FigmaStack"];export{a as Default,t as FigmaStack,s as Selected,u as __namedExportsOrder,c as default};
