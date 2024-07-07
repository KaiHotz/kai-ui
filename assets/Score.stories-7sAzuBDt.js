import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as x}from"./index-BP8_t0zE.js";const s=({ticks:e=30,value:u,color:d,testId:o="ui-score"})=>{const p=x.useMemo(()=>{const a=360/e;return Array(e).fill(null).map((n,m)=>a*m)},[e]);return r.jsxs("div",{className:"ui-score",style:{"--ui-score--tick-color":d},"data-testid":o,children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"ui-score__ticks",children:p.map((a,n)=>r.jsx("rect",{className:"ui-score__tick",x:"50px",y:"50px",fill:"currentColor",strokeLinecap:"round",width:"2px",height:"9px",style:{transform:`rotate(${a}deg) translateY(40px)`}},`${n+1}`))}),r.jsx("span",{className:"ui-score__value","data-testid":`${o}-value`,children:u})]})};try{s.displayName="Score",s.__docgenInfo={description:"",displayName:"Score",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},ticks:{defaultValue:{value:"30"},description:"",name:"ticks",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"ui-score"},description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const g={title:"Components/Score",component:s,argTypes:{testId:{control:!1}}},t={render:e=>r.jsx(s,{...e}),args:{value:30,ticks:30,color:""}};var c,l,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <Score {...args} />;
  },
  args: {
    value: 30,
    ticks: 30,
    color: ''
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,g as default};
