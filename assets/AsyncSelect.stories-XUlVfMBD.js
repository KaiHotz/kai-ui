import{j as i}from"./jsx-runtime-CexXSJP5.js";import{A as a}from"./AsyncSelect-CdsXpbGo.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./setPrototypeOf-DM9aTif1.js";import"./Select-CttN9tbr.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./lodash-DZrcJQkD.js";import"./index-DRwCZS7x.js";import"./highlightText-BfWprMrp.js";import"./useTheme-BQkKZjoQ.js";import"./ThemeProvider-siUfK81O.js";import"./Label-0w12sUq_.js";import"./Hint-BgND6QIn.js";const n=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],M={title:"components/Select/AsyncSelect",component:a,argTypes:{},args:{label:"",labelPosition:"top",placeholder:"",hintText:"",errorMsg:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},e={render(s){return i.jsx(a,{...s,loadOptions:(l,p)=>(console.log(l),p(n))})}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render(args) {
    return <AsyncSelect {...args} loadOptions={(search, cb: (options: ISelectOption[]) => void) => {
      console.log(search);
      return cb(optionsDefault);
    }} />;
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,M as default};
