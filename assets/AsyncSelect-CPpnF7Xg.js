import{j as p}from"./jsx-runtime-CexXSJP5.js";import{c as ve}from"./clsx-B-dksMZM.js";import{a as Q}from"./setPrototypeOf-DM9aTif1.js";import{r as e}from"./index-BP8_t0zE.js";import{_ as Se,h as o,i as _e,e as E,j as ye,a as U,S as X,u as he}from"./Select-C3vllaXk.js";import{u as Oe}from"./useCreatable-d97ef2c9.esm-QR2ISgyt.js";import"./index-BxmsGmlx.js";import{L as be}from"./Label-Q9pw0DqB.js";import{H as J}from"./Hint-BgND6QIn.js";var ge=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Y(t){var i=t.defaultOptions,a=i===void 0?!1:i,s=t.cacheOptions,n=s===void 0?!1:s,u=t.loadOptions;t.options;var y=t.isLoading,h=y===void 0?!1:y,O=t.onInputChange,b=t.filterOption,j=b===void 0?null:b,d=Se(t,ge),g=d.inputValue,l=e.useRef(void 0),c=e.useRef(!1),L=e.useState(Array.isArray(a)?a:void 0),V=o(L,2),A=V[0],C=V[1],$=e.useState(typeof g<"u"?g:""),x=o($,2),q=x[0],m=x[1],N=e.useState(a===!0),P=o(N,2),Z=P[0],v=P[1],ee=e.useState(void 0),H=o(ee,2),R=H[0],w=H[1],te=e.useState([]),W=o(te,2),ae=W[0],D=W[1],ne=e.useState(!1),B=o(ne,2),re=B[0],I=B[1],se=e.useState({}),M=o(se,2),S=M[0],k=M[1],oe=e.useState(void 0),z=o(oe,2),ie=z[0],ue=z[1],le=e.useState(void 0),G=o(le,2),pe=G[0],de=G[1];n!==pe&&(k({}),de(n)),a!==ie&&(C(Array.isArray(a)?a:void 0),ue(a)),e.useEffect(function(){return c.current=!0,function(){c.current=!1}},[]);var F=e.useCallback(function(_,f){if(!u)return f();var r=u(_,f);r&&typeof r.then=="function"&&r.then(f,function(){return f()})},[u]);e.useEffect(function(){a===!0&&F(q,function(_){c.current&&(C(_||[]),v(!!l.current))})},[]);var ce=e.useCallback(function(_,f){var r=_e(_,f,O);if(!r){l.current=void 0,m(""),w(""),D([]),v(!1),I(!1);return}if(n&&S[r])m(r),w(r),D(S[r]),v(!1),I(!1);else{var me=l.current={};m(r),v(!0),I(!R),F(r,function(T){c&&me===l.current&&(l.current=void 0,v(!1),w(r),D(T||[]),I(!1),k(T?E(E({},S),{},ye({},r,T)):S))})}},[n,F,R,S,O]),fe=re?[]:q&&R?ae:A||[];return E(E({},d),{},{options:fe,isLoading:Z||h,onInputChange:ce,filterOption:j})}var Ve=e.forwardRef(function(t,i){var a=Y(t),s=U(a),n=Oe(s);return e.createElement(X,Q({ref:i},n))}),Ae=Ve,Ce=e.forwardRef(function(t,i){var a=Y(t),s=U(a);return e.createElement(X,Q({ref:i},s))}),xe=Ce;const K=({name:t,label:i,labelPosition:a="top",hintText:s,errorMsg:n,disabled:u,reserveSpaceForError:y,required:h,isCreatable:O,menuPlacement:b="auto",menuPosition:j="absolute",placeholder:d,defaultOptions:g=!1,loadOptions:l,formatOptionLabel:c,options:L=[],onChange:V,small:A,centerOptinons:C,labelEndAdornment:$,...x})=>{const q=O?Ae:xe,m=!!(y||n||s),N=typeof d=="string"?`${d}${h?" *":""}`:d,P=he({disabled:u,menuPlacement:b,menuPosition:j,placeholder:N,onChange:V,formatOptionLabel:c,centerOptinons:C,options:L,...x});return p.jsxs("div",{className:"ui-select",children:[p.jsx(be,{text:i,htmlFor:t,required:h,disabled:u,isError:!!n,position:a,endAdornment:$,className:"ui-select__label",small:A,children:p.jsx("div",{className:ve("ui-select__container ",{"ui-select__container--small":A,"ui-select__container--disabled":u,"ui-select__container--error":!!n}),children:p.jsx(q,{...P,defaultOptions:g,loadOptions:l})})}),m&&p.jsxs("div",{className:"ui-select__validation-wrapper",children:[n&&p.jsx(J,{variant:"error",children:n}),!n&&s&&p.jsx(J,{children:s})]})]})};try{K.displayName="AsyncSelect",K.__docgenInfo={description:"",displayName:"AsyncSelect",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},required:{defaultValue:null,description:"Marks the value-holding input as required for form validation",name:"required",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isCreatable:{defaultValue:null,description:"",name:"isCreatable",required:!1,type:{name:"boolean"}},centerOptinons:{defaultValue:null,description:"",name:"centerOptinons",required:!1,type:{name:"boolean"}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},options:{defaultValue:{value:"[]"},description:"Array of options that populate the select menu",name:"options",required:!1,type:{name:"OptionType[]"}}}}}catch{}export{K as A};