import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{b as f,c as h}from"./index-YfRCopfe.js";import{T as s}from"./Textarea-DMjbVym9.js";import"./clsx-B-dksMZM.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";const a={none:void 0,searchIcon:n.jsx(f,{size:13}),infoIcon:n.jsx(h,{size:13})},g={none:"None",searchIcon:"Search",infoIcon:"Information"},j={title:"Components/Textarea",component:s,argTypes:{name:{control:!1},value:{control:!1},onChange:{control:!1},testId:{control:!1},className:{control:!1},labelEndAdornment:{options:Object.keys(a),mapping:a,control:{type:"select",labels:g}}}},e={render:function(l){const[c,i]=d.useState(""),p=u=>{const{value:m}=u.target;i(m)};return n.jsx(s,{...l,value:c,onChange:p})},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",errorMsg:"",disabled:!1,required:!1,reserveSpaceForError:!1,maxLength:0}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: function useSwitchStory(args) {
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
    disabled: false,
    required: false,
    reserveSpaceForError: false,
    maxLength: 0
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const V=["Default"];export{e as Default,V as __namedExportsOrder,j as default};
