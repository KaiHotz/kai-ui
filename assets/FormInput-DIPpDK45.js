import{j as g}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{u as E,b as q}from"./Form-Cyk7D10R.js";import{I as V}from"./Input-te1rYpmy.js";const d=o.forwardRef(({name:e,required:s,disabled:i,errorMsg:a,onChange:r,...u},m)=>{var l;const{formState:{errors:n},setError:t,control:p}=E(),{field:{value:f,onChange:c}}=q({name:e,control:p,disabled:i});return o.useEffect(()=>{a!=null&&a.message&&t(e,a)},[e,t,a]),g.jsx(V,{...u,onChange:r||(y=>c(y.target.value)),errorMsg:n!=null&&n[e]?(l=n[e])==null?void 0:l.message:void 0,required:s,value:f,ref:m})});try{d.displayName="FormInput",d.__docgenInfo={description:"",displayName:"FormInput",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: any) => void)"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},hideError:{defaultValue:null,description:"",name:"hideError",required:!1,type:{name:"boolean"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},passwordToggle:{defaultValue:null,description:"",name:"passwordToggle",required:!1,type:{name:"boolean"}},passwordToggleTooltip:{defaultValue:null,description:"",name:"passwordToggleTooltip",required:!1,type:{name:"string"}}}}}catch{}export{d as F};
