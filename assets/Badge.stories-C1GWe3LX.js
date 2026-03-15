import{j as u}from"./jsx-runtime-u17CrQMm.js";function n({tone:o="neutral",className:t="",children:c,...d}){return u.jsx("span",{className:`ng-reset ng-badge ng-badge--${o} ${t}`.trim(),...d,children:c})}n.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{tone:{defaultValue:{value:'"neutral"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const m={title:"NextGen/Components/Badge",component:n,tags:["autodocs"],args:{children:"Status"}},e={args:{tone:"neutral"}},r={args:{tone:"success",children:"Completed"}},a={args:{tone:"warning",children:"Needs Review"}},s={args:{tone:"danger",children:"Blocked"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "neutral"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "success",
    children: "Completed"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "warning",
    children: "Needs Review"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "danger",
    children: "Blocked"
  }
}`,...s.parameters?.docs?.source}}};const g=["Neutral","Success","Warning","Danger"];export{s as Danger,e as Neutral,r as Success,a as Warning,g as __namedExportsOrder,m as default};
