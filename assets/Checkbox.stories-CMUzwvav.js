import{j as a}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{C as c}from"./Checkbox-DlEZw4sG.js";import"./clsx-B-dksMZM.js";import"./Label-BDDHWpQq.js";import"./Hint-BgND6QIn.js";const b={title:"Components/Checkbox",component:c,args:{label:"Get notified",labelPosition:"right",hintText:"",errorMsg:"",required:!1,disabled:!1,variant:"checkmark",reserveSpaceForError:!1},argTypes:{checked:{control:!1}}},e={render:function(o){const[s,h]=m.useState(!1),d=l=>{const{checked:i}=l.target;h(i)};return a.jsx("div",{children:a.jsx(c,{...o,name:"checkboxExample",checked:s,onChange:d})})}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,b as default};
