import{j as e}from"./jsx-runtime-CexXSJP5.js";import{f as j,b as M,g as d}from"./index-OyZyT1oi.js";import{r as t}from"./index-BP8_t0zE.js";import{R as S}from"./index-BxmsGmlx.js";import{u as B}from"./usePopper-BUIcdyFw.js";import{B as C}from"./Button-DNiJI1Uu.js";import{C as k}from"./ContextMenu-CI8oewhW.js";import"./ThemeProvider-siUfK81O.js";import{u as E}from"./useClickOutside-Bpv7IKQK.js";import"./useCountdown-CSpw6p6h.js";import"./lodash-DZrcJQkD.js";import"./clsx-B-dksMZM.js";import"./highlightText-BfWprMrp.js";const o=({children:a,variant:f="ghost",items:g,...b})=>{const s=t.useRef(null),[r,l]=t.useState(null),[y,v]=t.useState(null),{styles:h,attributes:x}=B(r,y,{modifiers:[{name:"offset",options:{offset:[5,5]}}]}),I=t.useCallback(_=>{l(_.currentTarget)},[]),i=t.useCallback(()=>{l(null)},[]);return E(s,i),e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:f,small:!0,icon:e.jsx(j,{}),iconPosition:"right",...b,className:"ui-menu-button",onClick:I,children:a}),r&&S.createPortal(e.jsx("div",{ref:v,style:h.popper,...x.popper,className:"ui-menu-button__menu",children:e.jsx(k,{ref:s,menuItems:g,onClose:i})}),document.body)]})};try{o.displayName="MenuButton",o.__docgenInfo={description:"",displayName:"MenuButton",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuItemProps[]"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},number:{defaultValue:null,description:"",name:"number",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"ghost"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}}}}}catch{}const u={none:void 0,search:e.jsx(M,{}),information:e.jsx(d,{})},H={title:"components/MenuButton",component:o,argTypes:{icon:{options:Object.keys(u),mapping:u,control:{type:"select",labels:{none:"None",search:"Search",information:"Information"}}}}},P=[{label:"First Item",icon:e.jsx(d,{size:24}),onSelect(){console.log("clicked First Item")}},{label:"Second Item",disabled:!0,onSelect(){}},{label:"Third Item",onSelect(){console.log("clicked Third Item")}}],n={args:{variant:"transparent",size:"large",children:"Button",disabled:!1,isLoading:!1,items:P}};var m,c,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'transparent',
    size: 'large',
    children: 'Button',
    disabled: false,
    isLoading: false,
    items: menuItems
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const J=["Default"];export{n as Default,J as __namedExportsOrder,H as default};
