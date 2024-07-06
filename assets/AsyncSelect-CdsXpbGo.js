import{j as p}from"./jsx-runtime-CexXSJP5.js";import{c as ve}from"./clsx-B-dksMZM.js";import{a as K}from"./setPrototypeOf-DM9aTif1.js";import{r as e}from"./index-BP8_t0zE.js";import{_ as Se,c as o,h as _e,d as x,e as ye,u as Q,a as he,S as U,b as Oe}from"./Select-CttN9tbr.js";import"./index-BxmsGmlx.js";import{L as be}from"./Label-0w12sUq_.js";import{H as G}from"./Hint-BgND6QIn.js";var Ve=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function X(t){var i=t.defaultOptions,a=i===void 0?!1:i,s=t.cacheOptions,n=s===void 0?!1:s,u=t.loadOptions;t.options;var y=t.isLoading,P=y===void 0?!1:y,h=t.onInputChange,O=t.filterOption,I=O===void 0?null:O,b=Se(t,Ve),V=b.inputValue,l=e.useRef(void 0),d=e.useRef(!1),E=e.useState(Array.isArray(a)?a:void 0),f=o(E,2),L=f[0],g=f[1],j=e.useState(typeof V<"u"?V:""),A=o(j,2),C=A[0],m=A[1],Y=e.useState(a===!0),F=o(Y,2),Z=F[0],v=F[1],ee=e.useState(void 0),H=o(ee,2),N=H[0],R=H[1],te=e.useState([]),T=o(te,2),ae=T[0],$=T[1],ne=e.useState(!1),W=o(ne,2),re=W[0],q=W[1],se=e.useState({}),B=o(se,2),S=B[0],M=B[1],oe=e.useState(void 0),k=o(oe,2),ie=k[0],ue=k[1],le=e.useState(void 0),z=o(le,2),pe=z[0],de=z[1];n!==pe&&(M({}),de(n)),a!==ie&&(g(Array.isArray(a)?a:void 0),ue(a)),e.useEffect(function(){return d.current=!0,function(){d.current=!1}},[]);var w=e.useCallback(function(_,c){if(!u)return c();var r=u(_,c);r&&typeof r.then=="function"&&r.then(c,function(){return c()})},[u]);e.useEffect(function(){a===!0&&w(C,function(_){d.current&&(g(_||[]),v(!!l.current))})},[]);var ce=e.useCallback(function(_,c){var r=_e(_,c,h);if(!r){l.current=void 0,m(""),R(""),$([]),v(!1),q(!1);return}if(n&&S[r])m(r),R(r),$(S[r]),v(!1),q(!1);else{var me=l.current={};m(r),v(!0),q(!N),w(r,function(D){d&&me===l.current&&(l.current=void 0,v(!1),R(r),$(D||[]),q(!1),M(D?x(x({},S),{},ye({},r,D)):S))})}},[n,w,N,S,h]),fe=re?[]:C&&N?ae:L||[];return x(x({},b),{},{options:fe,isLoading:Z||P,onInputChange:ce,filterOption:I})}var ge=e.forwardRef(function(t,i){var a=X(t),s=Q(a),n=he(s);return e.createElement(U,K({ref:i},n))}),Ae=ge,Ce=e.forwardRef(function(t,i){var a=X(t),s=Q(a);return e.createElement(U,K({ref:i},s))}),qe=Ce;const J=({name:t,label:i,labelPosition:a="top",hintText:s,errorMsg:n,disabled:u,reserveSpaceForError:y,required:P,isCreatable:h,menuPlacement:O="auto",menuPosition:I="absolute",defaultOptions:b=!1,loadOptions:V,formatOptionLabel:l,options:d=[],onChange:E,small:f,centerOptinons:L,labelEndAdornment:g,...j})=>{const A=h?Ae:qe,C=!!(y||n||s),m=Oe({disabled:u,menuPlacement:O,menuPosition:I,onChange:E,formatOptionLabel:l,centerOptinons:L,options:d,...j});return p.jsxs("div",{className:"ui-select",children:[p.jsx(be,{text:i,htmlFor:t,required:P,disabled:u,isError:!!n,position:a,endAdornment:g,className:"ui-select__label",small:f,children:p.jsx("div",{className:ve("ui-select__container ",{"ui-select__container--small":f,"ui-select__container--disabled":u,"ui-select__container--error":!!n}),children:p.jsx(A,{...m,defaultOptions:b,loadOptions:V})})}),C&&p.jsxs("div",{className:"ui-select__validation-wrapper",children:[n&&p.jsx(G,{variant:"error",children:n}),!n&&s&&p.jsx(G,{children:s})]})]})};try{J.displayName="AsyncSelect",J.__docgenInfo={description:"",displayName:"AsyncSelect",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},required:{defaultValue:null,description:"Marks the value-holding input as required for form validation",name:"required",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isCreatable:{defaultValue:null,description:"",name:"isCreatable",required:!1,type:{name:"boolean"}},centerOptinons:{defaultValue:null,description:"",name:"centerOptinons",required:!1,type:{name:"boolean"}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},options:{defaultValue:{value:"[]"},description:"Array of options that populate the select menu",name:"options",required:!1,type:{name:"OptionType[]"}}}}}catch{}export{J as A};
