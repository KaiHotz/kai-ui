import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as m}from"./index-CDs2tPxN.js";import{R as s,a}from"./RadioOption-gCKLrZlr.js";import"./clsx-B-dksMZM.js";import"./Hint-6Kt6kgG9.js";import"./lodash-B2soob2o.js";import"./Label-CtH19-Rh.js";const C={title:"Components/Radio",component:s,argTypes:{selected:{control:!1},labelPosition:{options:["left","right"]},variant:{options:[void 0,"text"]}}},n={render:function(r){const[i,d]=m.useState("option_1"),p=c=>{const{value:u}=c.target;d(u)};return e.jsx("div",{children:e.jsxs(s,{...r,name:"radioExample",selected:i,onChange:p,children:[e.jsx(a,{value:"option_1",label:"Label 1"}),e.jsx(a,{value:"option_2",label:"Label 2"}),e.jsx(a,{value:"option_3",label:"Label 3"}),e.jsx(a,{value:"option_4",label:"Label 4",disabled:!0})]})})},args:{variant:void 0,labelPosition:"left",hintText:"",errorMsg:"",disabled:!1,isInline:!1,small:!1,reserveSpaceForError:!1}};var o,t,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function useRadio(args) {
    const [checkedValue, setCheckedValue] = useState('option_1');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {
        value
      } = e.target;
      setCheckedValue(value);
    };
    return <div>
        <Radio {...args} name="radioExample" selected={checkedValue} onChange={handleChange}>
          <RadioOption value="option_1" label="Label 1" />
          <RadioOption value="option_2" label="Label 2" />
          <RadioOption value="option_3" label="Label 3" />
          <RadioOption value="option_4" label="Label 4" disabled />
        </Radio>
      </div>;
  },
  args: {
    variant: undefined,
    labelPosition: 'left',
    hintText: '',
    errorMsg: '',
    disabled: false,
    isInline: false,
    small: false,
    reserveSpaceForError: false
  }
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const E=["Default"];export{n as Default,E as __namedExportsOrder,C as default};
