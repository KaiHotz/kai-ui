import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{b as u,c as k}from"./index-CNhk0B_H.js";import{C as r}from"./Checkbox-CnYSqJkN.js";import"./clsx-B-dksMZM.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";const o={none:void 0,searchIcon:n.jsx(u,{size:13}),infoIcon:n.jsx(k,{size:13})},f={none:"None",searchIcon:"Search",infoIcon:"Information"},S={title:"Components/Checkbox",component:r,argTypes:{checked:{control:!1},labelEndAdornment:{options:Object.keys(o),mapping:o,control:{type:"select",labels:f}}},args:{label:"Get notified",labelPosition:"right",labelEndAdornment:"none",hintText:"",errorMsg:"",required:!1,disabled:!1,variant:"checkmark",reserveSpaceForError:!1}},e={render:function(s){const[i,l]=p.useState(!1),d=h=>{const{checked:m}=h.target;l(m)};return n.jsx("div",{children:n.jsx(r,{...s,name:"checkboxExample",checked:i,onChange:d})})}};var a,t,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function useCheckbox(args) {
    const [checkedValue, setCheckedValue] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {
        checked
      } = e.target;
      setCheckedValue(checked);
    };
    return <div>
        <Checkbox {...args} name="checkboxExample" checked={checkedValue} onChange={handleChange} />
      </div>;
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const V=["Default"];export{e as Default,V as __namedExportsOrder,S as default};
