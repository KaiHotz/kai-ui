import{R as r}from"./index-CDs2tPxN.js";import{A as l}from"./AsyncSelect-CvFh5Rfa.js";import"./clsx-B-dksMZM.js";import"./Select-BfCsZq1G.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BA1o8LyZ.js";import"./index-B-yFm4aN.js";import"./floating-ui.dom-5jwf2x9o.js";import"./lodash-B2soob2o.js";import"./index-BpAWt-Gq.js";import"./getCSSVariable-Dab2ZoWK.js";import"./useTheme-DX6INi4N.js";import"./ThemeProvider-D1IB1Gcs.js";import"./Label-5g4jD_uN.js";import"./Hint-CwrnwYvC.js";const i=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],E={title:"components/Select/AsyncSelect",component:l,argTypes:{},args:{label:"",placeholder:"",hintText:"",errorMsg:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},e={render(s){return r.createElement("div",null,r.createElement(l,{...s,loadOptions:(n,p)=>(console.log(n),p(i))}))}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render(args) {
    return <div>
        <AsyncSelect {...args} loadOptions={(search, cb: (options: ISelectOption[]) => void) => {
        console.log(search);
        return cb(optionsDefault);
      }} />
      </div>;
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,E as default};
