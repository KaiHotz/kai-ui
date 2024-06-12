import{R as o}from"./index-CDs2tPxN.js";import{b as d,c as m,d as g,e as u}from"./index-BpAWt-Gq.js";import{I as y}from"./Input-Dpq5PwE2.js";import"./clsx-B-dksMZM.js";import"./Button-ZLkBMCvJ.js";import"./Hint-CwrnwYvC.js";import"./Label-5g4jD_uN.js";const e={none:void 0,searchIcon:o.createElement(d,null),eyeIcon:o.createElement(m,null),eyeSlashIcon:o.createElement(g,null),infoIcon:o.createElement(u,{size:13})},a={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},S={title:"Components/Input",component:y,args:{label:"",disabled:!1,required:!1,small:!1,reserveSpaceForError:!1,hintText:"",errorMsg:""},argTypes:{type:{options:["text","password","button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","radio","range","reset","search","submit","tel","time","url","week"],control:{type:"select"}},startAdornment:{options:Object.keys(e),mapping:e,control:{type:"select",labels:a}},endAdornment:{options:Object.keys(e),mapping:e,control:{type:"select",labels:a}},labelEndAdornment:{options:Object.keys(e),mapping:e,control:{type:"select",labels:a}}}},s={args:{type:"text",placeholder:"value",passwordToggleTooltip:"",passwordToggle:!1}},r={args:{type:"password",placeholder:"Password",passwordToggleTooltip:"Show/Hide password",passwordToggle:!0}};var t,n,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'value',
    passwordToggleTooltip: '',
    passwordToggle: false
  }
}`,...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var p,c,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Password',
    passwordToggleTooltip: 'Show/Hide password',
    passwordToggle: true
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const x=["Default","Password"];export{s as Default,r as Password,x as __namedExportsOrder,S as default};
