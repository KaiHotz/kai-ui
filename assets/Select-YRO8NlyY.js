import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as g}from"./clsx-B-dksMZM.js";import{a as C}from"./setPrototypeOf-DM9aTif1.js";import{r as c}from"./index-BP8_t0zE.js";import{a as N,S as P,u as $}from"./Select-B6BRwtNA.js";import{u as A}from"./useCreatable-d97ef2c9.esm-DERNFTJR.js";import"./index-BxmsGmlx.js";import{S as w}from"./react-select.esm-C5hQIgGl.js";import{L as F}from"./Label-Q9pw0DqB.js";import{H as m}from"./Hint-BgND6QIn.js";var O=c.forwardRef(function(t,r){var l=N(t),n=A(l);return c.createElement(P,C({ref:r},n))}),R=O;const f=({name:t,label:r,labelPosition:l="top",labelEndAdornment:n,hintText:o,errorMsg:a,disabled:i,reserveSpaceForError:b,required:d,isCreatable:_,onChange:v,menuPlacement:y="auto",menuPosition:x="fixed",formatOptionLabel:h,placeholder:s,options:S,small:u,centerOptinons:q,...V})=>{const j=!!(b||a||o),E=typeof s=="string"?`${s}${d&&!r?" *":""}`:s,p=$({disabled:i,menuPlacement:y,menuPosition:x,placeholder:E,onChange:v,formatOptionLabel:h,options:S,small:u,centerOptinons:q,...V});return e.jsxs("div",{className:"ui-select",children:[e.jsx(F,{text:r,htmlFor:t,required:d,disabled:i,isError:!!a,position:l,endAdornment:n,small:u,className:"ui-select__label",children:e.jsx("div",{className:g("ui-select__container ",{"ui-select__container--small":u,"ui-select__container--disabled":i,"ui-select__container--error":!!a}),children:_?e.jsx(R,{isCreatable:!0,...p}):e.jsx(w,{...p})})}),j&&e.jsxs("div",{className:"ui-select__validation-wrapper",children:[a&&e.jsx(m,{variant:"error",children:a}),!a&&o&&e.jsx(m,{children:o})]})]})};try{f.displayName="Select",f.__docgenInfo={description:"",displayName:"Select",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Marks the value-holding input as required for form validation",name:"required",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isCreatable:{defaultValue:null,description:"",name:"isCreatable",required:!1,type:{name:"boolean"}},centerOptinons:{defaultValue:null,description:"",name:"centerOptinons",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options that populate the select menu",name:"options",required:!0,type:{name:"OptionType[]"}}}}}catch{}export{f as S};
