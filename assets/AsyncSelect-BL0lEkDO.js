import{j as l}from"./jsx-runtime-qGIIFXMu.js";import{c as me}from"./clsx-B-dksMZM.js";import{c as ve,d as i,h as Se,e as I,f as _e,u as Q,a as Oe,S as U,_ as X,b as ye}from"./Select-B2AI_-0p.js";import{r as e}from"./index-CDs2tPxN.js";import"./index-B-yFm4aN.js";import{L as he}from"./Label-CtH19-Rh.js";import{H as K}from"./Hint-6Kt6kgG9.js";var be=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Y(a){var o=a.defaultOptions,t=o===void 0?!1:o,s=a.cacheOptions,r=s===void 0?!1:s,c=a.loadOptions;a.options;var S=a.isLoading,x=S===void 0?!1:S,_=a.onInputChange,O=a.filterOption,L=O===void 0?null:O,y=ve(a,be),h=y.inputValue,u=e.useRef(void 0),p=e.useRef(!1),b=e.useState(Array.isArray(t)?t:void 0),C=i(b,2),j=C[0],A=C[1],E=e.useState(typeof h<"u"?h:""),P=i(E,2),g=P[0],V=P[1],Z=e.useState(t===!0),D=i(Z,2),k=D[0],f=D[1],M=e.useState(void 0),F=i(M,2),T=F[0],R=F[1],ee=e.useState([]),H=i(ee,2),te=H[0],$=H[1],ae=e.useState(!1),W=i(ae,2),se=W[0],q=W[1],ne=e.useState({}),B=i(ne,2),m=B[0],z=B[1],re=e.useState(void 0),G=i(re,2),oe=G[0],ie=G[1],ue=e.useState(void 0),J=i(ue,2),le=J[0],pe=J[1];r!==le&&(z({}),pe(r)),t!==oe&&(A(Array.isArray(t)?t:void 0),ie(t)),e.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var N=e.useCallback(function(v,d){if(!c)return d();var n=c(v,d);n&&typeof n.then=="function"&&n.then(d,function(){return d()})},[c]);e.useEffect(function(){t===!0&&N(g,function(v){p.current&&(A(v||[]),f(!!u.current))})},[]);var de=e.useCallback(function(v,d){var n=Se(v,d,_);if(!n){u.current=void 0,V(""),R(""),$([]),f(!1),q(!1);return}if(r&&m[n])V(n),R(n),$(m[n]),f(!1),q(!1);else{var fe=u.current={};V(n),f(!0),q(!T),N(n,function(w){p&&fe===u.current&&(u.current=void 0,f(!1),R(n),$(w||[]),q(!1),z(w?I(I({},m),{},_e({},n,w)):m))})}},[r,N,T,m,_]),ce=se?[]:g&&T?te:j||[];return I(I({},y),{},{options:ce,isLoading:k||x,onInputChange:de,filterOption:L})}var Ce=e.forwardRef(function(a,o){var t=Y(a),s=Q(t),r=Oe(s);return e.createElement(U,X({ref:o},r))}),Ae=Ce,Pe=e.forwardRef(function(a,o){var t=Y(a),s=Q(t);return e.createElement(U,X({ref:o},s))}),ge=Pe;const qe=({name:a,label:o,hintText:t,errorMsg:s,disabled:r,reserveSpaceForError:c,required:S,isCreatable:x,menuPlacement:_="auto",menuPosition:O="absolute",defaultOptions:L=!1,loadOptions:y,formatOptionLabel:h,options:u,onChange:p,small:b,centerOptinons:C,labelEndAdornment:j,...A})=>{const E=x?Ae:ge,P=!!(c||s||t),g=ye({disabled:r,menuPlacement:_,menuPosition:O,onChange:p,formatOptionLabel:h,centerOptinons:C,options:u,...A});return l.jsxs("div",{className:"ui-select",children:[o&&l.jsx(he,{htmlFor:a,required:S,disabled:r,isError:!!s,endAdornment:j,className:"ui-select__label",small:b,children:o}),l.jsx("div",{className:me("ui-select__container ",{"ui-select__container--small":b,"ui-select__container--disabled":r,"ui-select__container--error":!!s}),children:l.jsx(E,{...g,defaultOptions:L,loadOptions:y})}),P&&l.jsxs("div",{className:"ui-select__validation-wrapper",children:[s&&l.jsx(K,{variant:"error",children:s}),!s&&t&&l.jsx(K,{children:t})]})]})};qe.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect",props:{small:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},hintText:{required:!1,tsType:{name:"string"},description:""},errorMsg:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},reserveSpaceForError:{required:!1,tsType:{name:"boolean"},description:""},isCreatable:{required:!1,tsType:{name:"boolean"},description:""},centerOptinons:{required:!1,tsType:{name:"boolean"},description:""},labelEndAdornment:{required:!1,tsType:{name:"ReactNode"},description:""},menuPlacement:{defaultValue:{value:"'auto'",computed:!1},required:!1},menuPosition:{defaultValue:{value:"'absolute'",computed:!1},required:!1},defaultOptions:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["AsyncProps"]};export{qe as A};
