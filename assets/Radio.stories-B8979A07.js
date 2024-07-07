import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{c as b}from"./index-Bt2cBs-r.js";import{R as r,a}from"./RadioOption-CSKog5_m.js";import"./clsx-B-dksMZM.js";import"./Hint-BgND6QIn.js";import"./omit-CobcZoPH.js";import"./_baseGet-BilIP510.js";import"./_baseAssignValue-C5pZOkKE.js";import"./_baseClone-CC1rQEIg.js";import"./_initCloneObject-Cmd1S_nI.js";import"./isPlainObject-BgrzB_nQ.js";import"./_flatRest-DX57TjYk.js";import"./Label-Q9pw0DqB.js";const S={title:"Components/Radio",component:r,argTypes:{selected:{control:!1},labelPosition:{options:["left","right"]},variant:{options:[void 0,"text"]}}},n={render:function(i){const[s,d]=u.useState("option_1"),p=c=>{const{value:m}=c.target;d(m)};return e.jsx("div",{children:e.jsxs(r,{...i,name:"radioExample",selected:s,onChange:p,children:[e.jsx(a,{value:"option_1",label:"Label 1"}),e.jsx(a,{value:"option_2",label:"Label 2"}),e.jsx(a,{value:"option_3",label:"Label 3",labelEndAdornment:e.jsx(b,{size:13})}),e.jsx(a,{value:"option_4",label:"Label 4",disabled:!0})]})})},args:{variant:void 0,labelPosition:"left",hintText:"",errorMsg:"",disabled:!1,isInline:!1,small:!1,reserveSpaceForError:!1}};var o,t,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RadioOption value="option_3" label="Label 3" labelEndAdornment={<FaCircleInfo size={13} />} />
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
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const F=["Default"];export{n as Default,F as __namedExportsOrder,S as default};
