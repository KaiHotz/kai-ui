import{j as y}from"./jsx-runtime-CexXSJP5.js";import{r}from"./index-BP8_t0zE.js";import{c as v}from"./clsx-B-dksMZM.js";import{h as k,H as x,a as b}from"./highcharts-react.min-Bh59RvQH.js";const u=r.forwardRef(({data:e,containerProps:i,options:n,onColumnClick:a,seriesType:t="line",callback:d,colorByPoint:l=!0,className:s},c)=>{const p=r.useMemo(()=>({className:v("ui-chart",s),...i}),[s,i]),m=r.useMemo(()=>k.merge({chart:{type:t,zooming:{type:"x",enabled:!0},animation:!1},xAxis:{tickInterval:1,startOnTick:!0,endOnTick:!0,maxPadding:0,minPadding:0,labels:{padding:0},tickmarkPlacement:"on",tickPosition:"outside",crosshair:{dashStyle:"ShortDot",snap:!1}},yAxis:{lineWidth:1,allowDecimals:!0,min:0},plotOptions:{area:{marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null},series:{animation:!1}},legend:{enabled:!1,y:-5,margin:10,padding:5,align:"right",verticalAlign:"top"},series:e.map(({label:o,values:h,id:f})=>({id:f||o,name:o,data:h,type:t,events:{click:a?g=>a(g):void 0},states:{hover:{},select:{enabled:!1}},allowPointSelect:!0})),colorByPoint:l},n),[t,e,n,a,l]);return y.jsx(x,{highcharts:b,containerProps:p,height:"100%",options:m,callback:d,ref:c})});try{u.displayName="Chart",u.__docgenInfo={description:"",displayName:"Chart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IChartDataAxis[]"}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:"{ [key: string]: unknown; }"}},onColumnClick:{defaultValue:null,description:"",name:"onColumnClick",required:!1,type:{name:"((event: SeriesClickEventObject) => void)"}},seriesType:{defaultValue:{value:"line"},description:"",name:"seriesType",required:!1,type:{name:"enum",value:[{value:'"area"'},{value:'"line"'},{value:'"column"'},{value:'"bar"'},{value:'"spline"'},{value:'"areaspline"'}]}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:'Omit<Options, "series">'}},callback:{defaultValue:null,description:"",name:"callback",required:!1,type:{name:"((chart: Chart) => void)"}},colorByPoint:{defaultValue:{value:"true"},description:"",name:"colorByPoint",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<RefObject>"}}}}}catch{}export{u as C};