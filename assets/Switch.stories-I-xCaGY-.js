import{j as m}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{S as s}from"./Switch-CZIK_mDi.js";import"./clsx-B-dksMZM.js";import"./Label-0w12sUq_.js";const b={title:"Components/Switch",component:s,argTypes:{name:{control:!1},value:{control:!1},onChange:{control:!1},testId:{control:!1},className:{control:!1}}},e={render:function(o){const[r,l]=p.useState(!1),c=u=>{const{checked:i}=u.target;l(i)};return m.jsx(s,{...o,value:r,onChange:c})},args:{label:"",labelPosition:"right",disabled:!1,size:"medium",name:""}};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    label: '',
    labelPosition: 'right',
    disabled: false,
    size: 'medium',
    name: ''
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,b as default};
