import{j as m}from"./jsx-runtime-CexXSJP5.js";import{t as l,f as r}from"./times-52Lji3iH.js";import{P as s}from"./PieChart-BNStuQrt.js";import{u as c}from"./useTheme-C2mG1LtK.js";import"./index-BP8_t0zE.js";import"./useCountdown-lkACsVJv.js";import"./_baseTimes-BeXZtkeT.js";import"./_castFunction-CnE8Fx8o.js";import"./identity-CwXImgea.js";import"./toNumber-B10ZFfPW.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./clsx-B-dksMZM.js";import"./highcharts-react.min-B1FlHyGk.js";import"./ThemeProvider-DX_3E3qS.js";import"./noop-Bj0g98VJ.js";import"./highlightText-BfWprMrp.js";const p=l(3,()=>({label:r.hacker.abbreviation(),id:r.hacker.abbreviation(),value:r.datatype.number()})),T={title:"Components/Charts/PieChart",component:s,argTypes:{containerProps:{control:!1},options:{control:!1},onLegedItemClick:{control:!1},className:{control:!1},selected:{control:!1}}},e={render:n=>{const{theme:i}=c();return m.jsx(s,{...n,className:`highcharts-${i}`})},args:{data:p,size:80,innerSize:35,sortByValues:!0,labelFormat:"percentage",labelDistance:25}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const {
      theme
    } = useTheme();
    return <PieChart {...args} className={\`highcharts-\${theme}\`} />;
  },
  args: {
    data,
    size: 80,
    innerSize: 35,
    sortByValues: true,
    labelFormat: 'percentage',
    labelDistance: 25
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,T as default};
