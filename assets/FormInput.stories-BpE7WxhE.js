import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as c}from"./InputField-GWe-wNl2.js";import{I as d}from"./InputLabel-DC8mHMJ3.js";import{S as f}from"./SupportingText-CRL8BMao.js";function o({showLabel:r=!0,showSupportingContent:s=!0,labelProps:l,fieldProps:i,supportingTextProps:u,className:m="",...p}){return e.jsxs("div",{className:`ng-reset ng-form-input ${m}`.trim(),...p,children:[r?e.jsx(d,{className:"ng-form-input__label",...l}):null,e.jsx(c,{className:"ng-form-input__field",...i}),s?e.jsx("div",{className:"ng-form-input__supporting",children:e.jsx(f,{className:"ng-form-input__supporting-text",...u})}):null]})}o.__docgenInfo={description:"",methods:[],displayName:"FormInput",props:{showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSupportingContent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`HTMLAttributes<HTMLDivElement> & {
  labelText?: string;
  showAction?: boolean;
  showTooltipIcon?: boolean;
  actionText?: string;
  actionIcon?: ReactNode;
}`,elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"signature",type:"object",raw:`{
  labelText?: string;
  showAction?: boolean;
  showTooltipIcon?: boolean;
  actionText?: string;
  actionIcon?: ReactNode;
}`,signature:{properties:[{key:"labelText",value:{name:"string",required:!1}},{key:"showAction",value:{name:"boolean",required:!1}},{key:"showTooltipIcon",value:{name:"boolean",required:!1}},{key:"actionText",value:{name:"string",required:!1}},{key:"actionIcon",value:{name:"ReactNode",required:!1}}]}}]},{name:"literal",value:'"className"'}],raw:'Omit<InputLabelProps, "className">'},description:""},fieldProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`HTMLAttributes<HTMLDivElement> & {
  fieldText?: string;
  placeholder?: boolean;
  showLeftIcon?: boolean;
  showPrefixText?: boolean;
  prefixText?: string;
  showRightIcon?: boolean;
  showSuffixText?: boolean;
  suffixText?: string;
  state?: InputFieldState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}`,elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"signature",type:"object",raw:`{
  fieldText?: string;
  placeholder?: boolean;
  showLeftIcon?: boolean;
  showPrefixText?: boolean;
  prefixText?: string;
  showRightIcon?: boolean;
  showSuffixText?: boolean;
  suffixText?: string;
  state?: InputFieldState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}`,signature:{properties:[{key:"fieldText",value:{name:"string",required:!1}},{key:"placeholder",value:{name:"boolean",required:!1}},{key:"showLeftIcon",value:{name:"boolean",required:!1}},{key:"showPrefixText",value:{name:"boolean",required:!1}},{key:"prefixText",value:{name:"string",required:!1}},{key:"showRightIcon",value:{name:"boolean",required:!1}},{key:"showSuffixText",value:{name:"boolean",required:!1}},{key:"suffixText",value:{name:"string",required:!1}},{key:"state",value:{name:"union",raw:'"default" | "active" | "error" | "error-active"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"active"'},{name:"literal",value:'"error"'},{name:"literal",value:'"error-active"'}],required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"rightIcon",value:{name:"ReactNode",required:!1}}]}}]},{name:"literal",value:'"className"'}],raw:'Omit<InputFieldProps, "className">'},description:""},supportingTextProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`HTMLAttributes<HTMLDivElement> & {
  text?: string;
  showIcon?: boolean;
  icon?: ReactNode;
}`,elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"signature",type:"object",raw:`{
  text?: string;
  showIcon?: boolean;
  icon?: ReactNode;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"showIcon",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]}}]},{name:"literal",value:'"className"'}],raw:'Omit<SupportingTextProps, "className">'},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const v={title:"NextGen/Components/Form Input",component:o,parameters:{layout:"centered",backgrounds:{default:"canvas",values:[{name:"canvas",value:"#d9d9d9"}]}},tags:["autodocs"],args:{showLabel:!0,showSupportingContent:!0}},t={args:{labelProps:{labelText:"Text"},fieldProps:{fieldText:"Text",state:"default"},supportingTextProps:{text:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}}},a={args:{showLabel:!1,showSupportingContent:!0}},n={args:{showLabel:!0,showSupportingContent:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    labelProps: {
      labelText: "Text"
    },
    fieldProps: {
      fieldText: "Text",
      state: "default"
    },
    supportingTextProps: {
      text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    showSupportingContent: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: true,
    showSupportingContent: false
  }
}`,...n.parameters?.docs?.source}}};const h=["Default","NoLabel","NoSupporting"];export{t as Default,a as NoLabel,n as NoSupporting,h as __namedExportsOrder,v as default};
