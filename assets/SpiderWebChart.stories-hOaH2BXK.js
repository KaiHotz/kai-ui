import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{u as g}from"./useTheme-C2mG1LtK.js";import"./useCountdown-lkACsVJv.js";import{S as i}from"./SpiderWebChart-BtVu8-jb.js";import"./ThemeProvider-DX_3E3qS.js";import"./noop-Bj0g98VJ.js";import"./highlightText-BfWprMrp.js";import"./clsx-B-dksMZM.js";import"./highcharts-react.min-B1FlHyGk.js";const S=[{id:"chart_1",label:"CHART 1",values:[10,20,30,40,50]},{id:'chart_2"',label:"CHART 2",values:[90,70,60,80,10],type:"line",dashStyle:"ShortDash"}],O={title:"Components/Charts/SpiderWebChart",component:i,argTypes:{className:{control:!1},containerProps:{control:!1},seriesType:{options:["line","spline","area","areaspline"],control:{type:"select"}}},args:{seriesType:"line",colorByPoint:!0,data:S,ref:null}},e={render:r=>{const{theme:a}=g();return s.jsx(i,{...r,className:`highcharts-${a}`})},args:{options:{xAxis:{categories:["Value 1","Value 2","Value 3","Value 4","Value 5"]}}}},t={render:r=>{const{theme:a}=g(),[n,b]=l.useState("CHEE"),c=l.useCallback(function(){b(this.value)},[]),V=l.useMemo(()=>({xAxis:{categories:["Value 1","Value 2","Value 3","Value 4","Value 5"],labels:{useHTML:!0,formatter(){const o=this.axis.categories[this.pos];return n===o?`<b><u>${this.axis.categories[this.pos]}</u></b>`:o},style:{cursor:"pointer"},events:{click:c}}}}),[c,n]);return s.jsxs("div",{style:{padding:"10px 20px"},children:[s.jsxs("div",{style:{marginBottom:"10px"},children:["Selected label: ",n]}),s.jsx(i,{...r,className:`highcharts-${a}`,options:V})]})}};var u,p,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const {
      theme
    } = useTheme();
    return <SpiderWebChart {...args} className={\`highcharts-\${theme}\`} />;
  },
  args: {
    options: {
      xAxis: {
        categories: ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']
      }
    }
  }
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,d,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const {
      theme
    } = useTheme();
    const [selected, setSelected] = useState<string | number>('CHEE');
    const click = useCallback(function click(this: AxisLabelsFormatterContextObject) {
      setSelected(this.value);
    }, []);
    const chartOptions = useMemo<Highcharts.Options>(() => {
      return {
        xAxis: {
          categories: ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'],
          labels: {
            useHTML: true,
            formatter() {
              const label = this.axis.categories[this.pos];
              return selected === label ? \`<b><u>\${this.axis.categories[this.pos]}</u></b>\` : label;
            },
            style: {
              cursor: 'pointer'
            },
            events: {
              click
            }
          }
        }
      };
    }, [click, selected]);
    return <div style={{
      padding: '10px 20px'
    }}>
        <div style={{
        marginBottom: '10px'
      }}>Selected label: {selected}</div>
        <SpiderWebChart {...args} className={\`highcharts-\${theme}\`} options={chartOptions} />
      </div>;
  }
}`,...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const W=["Default","WithIntercativeLabels"];export{e as Default,t as WithIntercativeLabels,W as __namedExportsOrder,O as default};
