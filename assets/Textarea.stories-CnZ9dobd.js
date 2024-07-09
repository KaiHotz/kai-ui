import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{b as f,c as g}from"./index-YfRCopfe.js";import{T as s}from"./Textarea-CyiEX_9b.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";const a={none:void 0,searchIcon:n.jsx(f,{size:13}),infoIcon:n.jsx(g,{size:13})},h={none:"None",searchIcon:"Search",infoIcon:"Information"},V={title:"Components/Textarea",component:s,argTypes:{name:{control:!1},value:{control:!1},onChange:{control:!1},testId:{control:!1},className:{control:!1},labelEndAdornment:{options:Object.keys(a),mapping:a,control:{type:"select",labels:h}}}},e={render:l=>{const[c,i]=d.useState(""),p=u=>{const{value:m}=u.target;i(m)};return n.jsx(s,{...l,value:c,onChange:p})},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",errorMsg:"",isValid:!1,disabled:!1,required:!1,reserveSpaceForError:!1,maxLength:0}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const {
        value
      } = e.target;
      setInputValue(value);
    };
    return <Textarea {...args} value={inputValue} onChange={handleChange} />;
  },
  args: {
    label: '',
    labelPosition: 'top',
    labelEndAdornment: 'none',
    placeholder: '',
    hintText: '',
    errorMsg: '',
    isValid: false,
    disabled: false,
    required: false,
    reserveSpaceForError: false,
    maxLength: 0
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,V as default};
