import{j as m}from"./jsx-runtime-CexXSJP5.js";import{D as o}from"./DateTimeSeries-B82KYWh7.js";import{u as i}from"./useTheme-C2mG1LtK.js";import"./index-BP8_t0zE.js";import"./useCountdown-lkACsVJv.js";import"./clsx-B-dksMZM.js";import"./ThemeProvider-DX_3E3qS.js";import"./noop-Bj0g98VJ.js";import"./highlightText-BfWprMrp.js";const l=[{label:"Label",values:[[1611576e6,1372],[16115796e5,2325],[16115832e5,1218],[16115868e5,580],[16115904e5,1398],[1611594e6,716],[16115976e5,858],[16116012e5,498],[16116048e5,240],[16116084e5,129],[1611612e6,176],[16116156e5,179],[16116192e5,208],[16116228e5,306],[16116264e5,530],[161163e7,2072],[16116336e5,2109],[16116372e5,2330],[16116408e5,17138],[16116444e5,13580],[1611648e6,4665],[16116516e5,1898],[16116552e5,1470],[16116588e5,5755],[16116624e5,781]]}],c={yAxis:{title:{text:"Y values"}},lang:{resetZoom:"Reset zoom 2"},subtitle:{text:"Click and drag in the plot area to zoom in"}},D={title:"Components/Charts/DateTimeSeries",component:o,argTypes:{className:{control:!1},containerProps:{control:!1},seriesType:{options:["column","bar","line","area"],control:{type:"select"}}},args:{seriesType:"column",colorByPoint:!0,ref:null}},e={render:a=>{const{theme:n}=i();return m.jsx(o,{...a,className:`highcharts-${n}`})},args:{data:l,options:c}};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const {
      theme
    } = useTheme();
    return <DateTimeSeries {...args} className={\`highcharts-\${theme}\`} />;
  },
  args: {
    data: values,
    options
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,D as default};
