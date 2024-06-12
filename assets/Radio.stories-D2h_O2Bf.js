import{r as m,R as e}from"./index-CDs2tPxN.js";import{R as r,a}from"./RadioOption-C6UIio0x.js";import"./clsx-B-dksMZM.js";import"./Hint-CwrnwYvC.js";import"./lodash-B2soob2o.js";import"./Label-5g4jD_uN.js";const _={title:"Components/Radio",component:r,argTypes:{selected:{control:!1},labelPosition:{options:["left","right"]},variant:{options:[void 0,"text"]}}},n={render:function(i){const[s,d]=m.useState("option_1"),c=p=>{const{value:u}=p.target;d(u)};return e.createElement("div",null,e.createElement(r,{...i,name:"radioExample",selected:s,onChange:c},e.createElement(a,{value:"option_1",label:"Label 1"}),e.createElement(a,{value:"option_2",label:"Label 2"}),e.createElement(a,{value:"option_3",label:"Label 3"}),e.createElement(a,{value:"option_4",label:"Label 4",disabled:!0})))},args:{variant:void 0,labelPosition:"left",hintText:"",errorMsg:"",disabled:!1,isInline:!1,small:!1,reserveSpaceForError:!1}};var t,o,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,_ as default};
