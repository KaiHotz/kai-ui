import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{c as f}from"./clsx-B-dksMZM.js";import{c as I,d as P}from"./index-DRwCZS7x.js";import{L as R}from"./Label-0w12sUq_.js";import{B as z}from"./Button-C0GdinNN.js";import{H as _}from"./Hint-BgND6QIn.js";const h=c.forwardRef(({name:r,type:s,label:x,labelPosition:y="top",small:l,disabled:t,hintText:i,errorMsg:a,hideError:v,placeholder:g,reserveSpaceForError:w,startAdornment:o,endAdornment:n,labelEndAdornment:j,passwordToggle:u,passwordToggleTooltip:b,required:d,...E},V)=>{const[p,N]=c.useState(!1),q=()=>N(F=>!F),S=!!(w||a&&!v||i),T=`${g}${d?" *":""}`,m=l?14:18;return e.jsxs("div",{className:f("ui-input",{"ui-input--error":a,"ui-input--disabled":t}),children:[e.jsx(R,{text:x,htmlFor:r,required:d,disabled:t,isError:!!a,position:y,endAdornment:j,className:"ui-input__label",small:l,children:e.jsxs("div",{className:f("ui-input__wrapper",{"ui-input__wrapper--small":l,"ui-input__wrapper--error":a,"ui-input__wrapper--disabled":t}),children:[o&&e.jsx("div",{className:"ui-input__start-adornment",children:o}),e.jsx("input",{ref:V,name:r,type:p?"text":s,placeholder:T,disabled:t,...E}),s==="password"?(n||u)&&e.jsxs("div",{className:"ui-input__end-adornment",children:[n,u&&e.jsx(z,{variant:"ghost",title:b,icon:p?e.jsx(I,{size:m}):e.jsx(P,{size:m}),onClick:q})]}):n&&e.jsx("div",{className:"ui-input__end-adornment",children:n})]})}),S&&e.jsx("div",{className:"ui-input__validation-wrapper",children:e.jsxs("div",{className:"ui-input__validation-messages",children:[a&&e.jsx(_,{className:"ui-input__error-msg",variant:"error",children:a}),!a&&i&&e.jsx(_,{className:"ui-input__hint-text",children:i})]})})]})});try{h.displayName="Input",h.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string"}},hideError:{defaultValue:null,description:"",name:"hideError",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},passwordToggle:{defaultValue:null,description:"",name:"passwordToggle",required:!1,type:{name:"boolean"}},passwordToggleTooltip:{defaultValue:null,description:"",name:"passwordToggleTooltip",required:!1,type:{name:"string"}}}}}catch{}export{h as I};
