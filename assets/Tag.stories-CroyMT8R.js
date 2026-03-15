import{j as e}from"./jsx-runtime-u17CrQMm.js";const f=["neutral","callout","success","warning","danger","turquoise","pink","orchid","lavender","blue"];function o(){return e.jsx("span",{className:"ng-tag__icon-placeholder","aria-hidden":"true"})}function r({tone:s="neutral",appearance:l="vibrant",showLeftIcon:a=!1,showRightIcon:c=!1,leftIcon:u,rightIcon:d,className:i="",children:p="Tag text",...g}){return e.jsxs("span",{className:`ng-reset ng-tag ng-tag--${l} ng-tag--${s} ${i}`.trim(),...g,children:[a?e.jsx("span",{className:"ng-tag__icon",children:u??e.jsx(o,{})}):null,e.jsx("span",{className:"ng-tag__label",children:p}),c?e.jsx("span",{className:"ng-tag__icon",children:d??e.jsx(o,{})}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{tone:{defaultValue:{value:'"neutral"',computed:!1},required:!1},appearance:{defaultValue:{value:'"vibrant"',computed:!1},required:!1},showLeftIcon:{defaultValue:{value:"false",computed:!1},required:!1},showRightIcon:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},children:{defaultValue:{value:'"Tag text"',computed:!1},required:!1}}};const b={title:"NextGen/Components/Tag",component:r,tags:["autodocs"],args:{children:"Tag text",tone:"neutral",appearance:"vibrant",showLeftIcon:!1,showRightIcon:!1},argTypes:{tone:{options:[...f],control:{type:"select"}},appearance:{options:["vibrant","subtle"],control:{type:"inline-radio"}}}},n={},t={render:()=>{const s=["neutral","callout","success","warning","danger"],l=["neutral","callout","success","warning","danger","pink","orchid","lavender","blue","turquoise"];return e.jsxs("div",{style:{display:"grid",gap:12,padding:16,borderRadius:8,border:"2px dashed #6f29ff"},children:[s.map(a=>e.jsx(r,{tone:a,appearance:"subtle",children:"Tag text"},`subtle-${a}`)),l.map(a=>e.jsx(r,{tone:a,appearance:"vibrant",children:"Tag text"},`vibrant-${a}`))]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const subtleSet = ["neutral", "callout", "success", "warning", "danger"] as const;
    const vibrantSet = ["neutral", "callout", "success", "warning", "danger", "pink", "orchid", "lavender", "blue", "turquoise"] as const;
    return <div style={{
      display: "grid",
      gap: 12,
      padding: 16,
      borderRadius: 8,
      border: "2px dashed #6f29ff"
    }}>
        {subtleSet.map(tone => <Tag key={\`subtle-\${tone}\`} tone={tone} appearance="subtle">
            Tag text
          </Tag>)}

        {vibrantSet.map(tone => <Tag key={\`vibrant-\${tone}\`} tone={tone} appearance="vibrant">
            Tag text
          </Tag>)}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const x=["Playground","FigmaMatrix"];export{t as FigmaMatrix,n as Playground,x as __namedExportsOrder,b as default};
