import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{b as h,c as f}from"./index-YfRCopfe.js";import{S as r}from"./Switch-BOJR35aF.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";const t={none:void 0,searchIcon:n.jsx(h,{size:13}),infoIcon:n.jsx(f,{size:13})},g={none:"None",searchIcon:"Search",infoIcon:"Information"},j={title:"Components/Switch",component:r,argTypes:{name:{control:!1},value:{control:!1},onChange:{control:!1},testId:{control:!1},className:{control:!1},labelEndAdornment:{options:Object.keys(t),mapping:t,control:{type:"select",labels:g}}}},e={render:l=>{const[c,i]=d.useState(!1),m=p=>{const{checked:u}=p.target;i(u)};return n.jsx(r,{...l,value:c,onChange:m})},args:{size:"medium",label:"",labelPosition:"right",labelEndAdornment:"none",disabled:!1}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {
        checked
      } = e.target;
      setInputValue(checked);
    };
    return <Switch {...args} value={inputValue} onChange={handleChange} />;
  },
  args: {
    size: 'medium',
    label: '',
    labelPosition: 'right',
    labelEndAdornment: 'none',
    disabled: false
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const V=["Default"];export{e as Default,V as __namedExportsOrder,j as default};
