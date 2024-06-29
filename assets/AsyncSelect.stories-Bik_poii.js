import{j as r}from"./jsx-runtime-CexXSJP5.js";import{A as a}from"./AsyncSelect-8SHxi7VA.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./assertThisInitialized-DtN97TLk.js";import"./Select-C8D-eT11.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./lodash-DZrcJQkD.js";import"./index-HCt5ZxLs.js";import"./getCSSVariable-Dab2ZoWK.js";import"./useTheme-BQkKZjoQ.js";import"./ThemeProvider-siUfK81O.js";import"./Label-Dj0iuwZQ.js";import"./Hint-BgND6QIn.js";const p=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],E={title:"components/Select/AsyncSelect",component:a,argTypes:{},args:{label:"",placeholder:"",hintText:"",errorMsg:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},e={render(l){return r.jsx("div",{children:r.jsx(a,{...l,loadOptions:(n,i)=>(console.log(n),i(p))})})}};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render(args) {
    return <div>
        <AsyncSelect {...args} loadOptions={(search, cb: (options: ISelectOption[]) => void) => {
        console.log(search);
        return cb(optionsDefault);
      }} />
      </div>;
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,E as default};
