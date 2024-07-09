import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as i}from"./index-BP8_t0zE.js";import{u as x}from"./useTheme-C2mG1LtK.js";import"./useCountdown-lkACsVJv.js";import{S as c}from"./SpiderWebChart-Bk6G1iEv.js";import"./ThemeProvider-DX_3E3qS.js";import"./noop-Bj0g98VJ.js";import"./highlightText-BfWprMrp.js";import"./clsx-B-dksMZM.js";import"./highcharts-react.min-B1FlHyGk.js";const H=[{id:"score",label:"SCORE",values:[10,20,30,40,50]},{id:"benchmark",label:"BENCHMARK",values:[90,70,60,80,10],type:"line",dashStyle:"ShortDash"}],O={title:"Components/Charts/SpiderWebChart",component:c,argTypes:{className:{control:!1},containerProps:{control:!1},seriesType:{options:["line","spline","area","areaspline"],control:{type:"select"}}},args:{seriesType:"line",colorByPoint:!0,data:H,ref:null}},e={render:r=>{const{theme:n}=x();return s.jsx(c,{...r,className:`highcharts-${n}`})},args:{options:{xAxis:{categories:["CHIE","CHEE","CHTT","CHII","CHEA"]}}}},t={render:r=>{const{theme:n}=x(),[a,g]=i.useState("CHEE"),l=i.useCallback(function(){g(this.value)},[]),b=i.useMemo(()=>({xAxis:{categories:["CHIE","CHEE","CHTT","CHII","CHEA"],labels:{useHTML:!0,formatter(){const o=this.axis.categories[this.pos];return a===o?`<b><u>${this.axis.categories[this.pos]}</u></b>`:o},style:{cursor:"pointer"},events:{click:l}}}}),[l,a]);return s.jsxs("div",{style:{padding:"10px 20px"},children:[s.jsxs("div",{style:{marginBottom:"10px"},children:["Selected label: ",a]}),s.jsx(c,{...r,className:`highcharts-${n}`,options:b})]})}};var p,m,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const {
      theme
    } = useTheme();
    return <SpiderWebChart {...args} className={\`highcharts-\${theme}\`} />;
  },
  args: {
    options: {
      xAxis: {
        categories: ['CHIE', 'CHEE', 'CHTT', 'CHII', 'CHEA']
      }
    }
  }
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,d,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          categories: ['CHIE', 'CHEE', 'CHTT', 'CHII', 'CHEA'],
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
}`,...(C=(d=t.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};const N=["Default","WithIntercativeLabels"];export{e as Default,t as WithIntercativeLabels,N as __namedExportsOrder,O as default};
