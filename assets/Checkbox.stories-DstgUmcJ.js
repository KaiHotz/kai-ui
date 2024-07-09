import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{b as k,c as u}from"./index-YfRCopfe.js";import{C as c}from"./Checkbox-CowMggBG.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";const o={none:void 0,searchIcon:n.jsx(k,{size:13}),infoIcon:n.jsx(u,{size:13})},f={none:"None",searchIcon:"Search",infoIcon:"Information"},I={title:"Components/Checkbox",component:c,argTypes:{checked:{control:!1},labelEndAdornment:{options:Object.keys(o),mapping:o,control:{type:"select",labels:f}}},args:{label:"Get notified",labelPosition:"right",labelEndAdornment:"none",hintText:"",errorMsg:"",required:!1,disabled:!1,variant:"checkmark",reserveSpaceForError:!1}},e={render:s=>{const[l,i]=p.useState(!1),d=h=>{const{checked:m}=h.target;i(m)};return n.jsx("div",{children:n.jsx(c,{...s,name:"checkboxExample",checked:l,onChange:d})})}};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,I as default};
