import{j as e}from"./jsx-runtime-CexXSJP5.js";import{f as j,b as M,g as d}from"./index-CNhk0B_H.js";import{r as t}from"./index-BP8_t0zE.js";import{R as C}from"./index-BxmsGmlx.js";import{u as S}from"./usePopper-BUIcdyFw.js";import{B}from"./Button-C0GdinNN.js";import{C as k}from"./ContextMenu-rhYq-4yy.js";import"./ThemeProvider-DX_3E3qS.js";import{u as q}from"./useClickOutside-SG2YzVLV.js";import"./useCountdown-lkACsVJv.js";import"./clsx-B-dksMZM.js";import"./noop-Bj0g98VJ.js";import"./highlightText-BfWprMrp.js";const a=({children:o,variant:f="ghost",items:b,...y})=>{const s=t.useRef(null),[r,l]=t.useState(null),[g,v]=t.useState(null),{styles:h,attributes:x}=S(r,g,{modifiers:[{name:"offset",options:{offset:[5,5]}}]}),I=t.useCallback(_=>{l(_.currentTarget)},[]),i=t.useCallback(()=>{l(null)},[]);return q(s,i),e.jsxs(e.Fragment,{children:[e.jsx(B,{variant:f,small:!0,icon:e.jsx(j,{}),iconPosition:"right",...y,className:"ui-menu-button",onClick:I,children:o}),r&&C.createPortal(e.jsx("div",{ref:v,style:h.popper,...x.popper,className:"ui-menu-button__menu",children:e.jsx(k,{ref:s,menuItems:b,onClose:i})}),document.body)]})};try{a.displayName="MenuButton",a.__docgenInfo={description:"",displayName:"MenuButton",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuItemProps[]"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},number:{defaultValue:null,description:"",name:"number",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"ghost"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const u={none:void 0,search:e.jsx(M,{}),information:e.jsx(d,{})},J={title:"Components/MenuButton",component:a,argTypes:{testId:{control:!1},icon:{options:Object.keys(u),mapping:u,control:{type:"select",labels:{none:"None",search:"Search",information:"Information"}}}}},E=[{label:"First Item",icon:e.jsx(d,{size:24}),onSelect(){console.log("clicked First Item")}},{label:"Second Item",disabled:!0,onSelect(){}},{label:"Third Item",onSelect(){console.log("clicked Third Item")}}],n={args:{variant:"transparent",small:!1,children:"Button",disabled:!1,items:E,number:!1}};var m,c,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'transparent',
    small: false,
    children: 'Button',
    disabled: false,
    items: menuItems,
    number: false
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const K=["Default"];export{n as Default,K as __namedExportsOrder,J as default};
