import{j as p}from"./jsx-runtime-CexXSJP5.js";import{c as f}from"./clsx-B-dksMZM.js";const r=({icon:e,number:n,iconPosition:a="left",small:i,type:s="button",disabled:u,children:t,onClick:o,variant:l="primary",testId:m="ui-btn",...d})=>p.jsxs("button",{...d,className:f("ui-btn",{[`ui-btn--${l}`]:l,"ui-btn--small":i,"ui-btn--number":!e&&n,"ui-btn--icon":!!e&&!t,"ui-btn--icon-text-left":!!e&&t,"ui-btn--icon-text-right":!!e&&t&&a==="right","ui-btn--disabled":u}),type:s,onClick:u?void 0:o,disabled:u,"data-testid":m,children:[e&&a==="left"&&e,t,e&&a==="right"&&e]});try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},number:{defaultValue:null,description:"",name:"number",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}},testId:{defaultValue:{value:"ui-btn"},description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}export{r as B};