import{j as i}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{S as s}from"./Switch-DqWM3yD2.js";import"./clsx-B-dksMZM.js";import"./Label-BDDHWpQq.js";const x={title:"Components/Switch",component:s,argTypes:{name:{control:!1},value:{control:!1},onChange:{control:!1},testId:{control:!1},className:{control:!1}}},e={render:function(r){const[o,l]=p.useState(!1),c=u=>{const{checked:m}=u.target;l(m)};return i.jsx(s,{...r,value:o,onChange:c})},args:{label:"",disabled:!1,size:"medium",name:""}};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    disabled: false,
    size: 'medium',
    name: ''
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const V=["Default"];export{e as Default,V as __namedExportsOrder,x as default};
