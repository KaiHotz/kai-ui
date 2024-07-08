import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{c as b}from"./index-DcsI7YQs.js";import{R as r,a}from"./RadioOption-BaJB0O_F.js";import"./clsx-B-dksMZM.js";import"./Hint-BgND6QIn.js";import"./omit-Dv_hKa-K.js";import"./_baseGet-C7KzGAK3.js";import"./_MapCache-bPlbJmjb.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./_baseClone-UMuXwTt9.js";import"./_baseAssignValue-HfMhWjzy.js";import"./_baseTimes-BeXZtkeT.js";import"./_initCloneObject-D-aFD1Qy.js";import"./isPlainObject-DfuvdCyT.js";import"./_flatRest-LQTfQqTk.js";import"./identity-CwXImgea.js";import"./Label-Q9pw0DqB.js";const z={title:"Components/Radio",component:r,argTypes:{selected:{control:!1},labelPosition:{options:["left","right"]},variant:{options:[void 0,"text"]}}},o={render:function(i){const[s,d]=u.useState("option_1"),p=m=>{const{value:c}=m.target;d(c)};return e.jsx("div",{children:e.jsxs(r,{...i,name:"radioExample",selected:s,onChange:p,children:[e.jsx(a,{value:"option_1",label:"Label 1"}),e.jsx(a,{value:"option_2",label:"Label 2"}),e.jsx(a,{value:"option_3",label:"Label 3",labelEndAdornment:e.jsx(b,{size:13})}),e.jsx(a,{value:"option_4",label:"Label 4",disabled:!0})]})})},args:{variant:void 0,labelPosition:"left",hintText:"",errorMsg:"",disabled:!1,isInline:!1,small:!1,reserveSpaceForError:!1}};var n,t,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,z as default};
