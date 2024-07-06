import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{b as h,c as f}from"./index-CNhk0B_H.js";import{S as r}from"./Switch-P4mOVmmI.js";import"./clsx-B-dksMZM.js";import"./Label-Q9pw0DqB.js";const t={none:void 0,searchIcon:n.jsx(h,{size:13}),infoIcon:n.jsx(f,{size:13})},g={none:"None",searchIcon:"Search",infoIcon:"Information"},V={title:"Components/Switch",component:r,argTypes:{name:{control:!1},value:{control:!1},onChange:{control:!1},testId:{control:!1},className:{control:!1},labelEndAdornment:{options:Object.keys(t),mapping:t,control:{type:"select",labels:g}}}},e={render:function(l){const[c,i]=d.useState(!1),m=u=>{const{checked:p}=u.target;i(p)};return n.jsx(r,{...l,value:c,onChange:m})},args:{size:"medium",label:"",labelPosition:"right",labelEndAdornment:"none",disabled:!1,name:""}};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function useSwitchStory(args) {
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
    disabled: false,
    name: ''
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,V as default};
