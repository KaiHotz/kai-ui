import{j as p}from"./jsx-runtime-CexXSJP5.js";import{t as e,f as r}from"./times-52Lji3iH.js";import{C as n}from"./Chart-gPYWnOlz.js";import{u as l}from"./useTheme-C2mG1LtK.js";import"./index-BP8_t0zE.js";import"./useCountdown-lkACsVJv.js";import"./_baseTimes-BeXZtkeT.js";import"./_castFunction-CnE8Fx8o.js";import"./identity-CwXImgea.js";import"./toNumber-B10ZFfPW.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./clsx-B-dksMZM.js";import"./highcharts-react.min-B1FlHyGk.js";import"./ThemeProvider-DX_3E3qS.js";import"./noop-Bj0g98VJ.js";import"./highlightText-BfWprMrp.js";const c=e(2,()=>({label:r.hacker.abbreviation(),values:e(15,()=>r.datatype.number())})),u={yAxis:{title:{text:"Y values"}},lang:{resetZoom:"Reset zoom 2"},subtitle:{text:"Click and drag in the plot area to zoom in"}},R={title:"Components/Charts/Chart",component:n,argTypes:{className:{control:!1},containerProps:{control:!1},seriesType:{options:["column","bar","line","spline","area","areaspline"],control:{type:"select"}}},args:{seriesType:"column",colorByPoint:!0,ref:null}},t={render:m=>{const{theme:i}=l();return p.jsx(n,{...m,className:`highcharts-${i}`})},args:{data:c,options:u}};var o,s,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const {
      theme
    } = useTheme();
    return <Chart {...args} className={\`highcharts-\${theme}\`} />;
  },
  args: {
    data,
    options
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,R as default};
