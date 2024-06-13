import{r as n,R as e}from"./index-CDs2tPxN.js";import{c as x}from"./clsx-B-dksMZM.js";const T=n.createContext(null),q=n.createContext(null),P=n.createContext(null),y=()=>{const t=n.useContext(T);if(t==null)throw Error("A Tab must have a TabList parent");return t},C=()=>{const t=n.useContext(q);if(t==null)throw Error("A TabPanel must have a Tabs parent");return t},D=()=>{const t=n.useContext(P);if(t==null)throw Error("A TabList must have a Tabs parent");return t},g=({id:t="tabs",children:a,testId:u,selected:s,setSelected:l})=>{const c=n.Children.toArray(a),[b,...r]=n.useMemo(()=>c,[c]),i=n.useCallback(m=>{l(m)},[l]);return e.createElement("div",{id:t,"data-testId":u},e.createElement(P.Provider,{value:{selected:s,onTabChange:i,tabsId:t}},b),e.createElement(q.Provider,{value:{role:"tabpanel",id:`${t}-${s}-tab`,"aria-labelledby":`${t}-${s}`}},r[s]))};g.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'tabs'",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:""},selected:{required:!0,tsType:{name:"number"},description:""},setSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(idx: number) => void",signature:{arguments:[{type:{name:"number"},name:"idx"}],return:{name:"void"}}},description:""}}};const E=({children:t})=>{const{tabsId:a,selected:u,onTabChange:s}=D(),l=n.createRef(),c=n.useCallback(r=>{if(l.current){const i=l.current.querySelector(`[id=${a}-${r}]`);i==null||i.focus(),s(r)}},[s,l,a]),b=n.useCallback(()=>{},[]);return e.createElement("div",{role:"tablist",ref:l,className:"tab-list"},e.Children.map(t,(r,i)=>{const m=i===u;return e.createElement(T.Provider,{value:{key:`${a}-${i}`,id:`${a}-${i}`,role:"tab","aria-posinset":i+1,"aria-selected":m,"aria-controls":`${a}-${i}-tab`,tabIndex:m?0:-1,onClick:()=>c(i),onKeyDown:b}},r)}))};E.__docgenInfo={description:"",methods:[],displayName:"TabsList"};const o=({children:t})=>{const a=C();return e.createElement("div",{...a,className:"tab-panel"},t)};o.__docgenInfo={description:"",methods:[],displayName:"TabPanel"};const p=({children:t,id:a})=>{const u=y();return e.createElement("div",{...u,id:a,className:x("tab",{"tab--active":u["aria-selected"]})},t)};p.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{id:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/Tabs",component:g},d={render:function(a){const[u,s]=n.useState(0);return e.createElement(e.Fragment,null,e.createElement("h4",{style:{textDecoration:"underline"}},"This is a practical example of component composition in React:"),e.createElement("div",{style:{padding:"20px 10px",marginTop:30,border:"1px solid #000"}},e.createElement(g,{...a,selected:u,setSelected:s},e.createElement(E,null,e.createElement(p,null,"First Tab"),e.createElement(p,null,"Second Tab"),e.createElement(p,null,"Third Tab")),e.createElement("div",null,e.createElement(o,null,e.createElement("h2",null,"First content:"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla urna. Nulla nec malesuada arcu, vehicula venenatis libero. Curabitur ut lacus vel metus posuere finibus. Sed non lobortis ante. In id condimentum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare varius aliquet."),e.createElement("p",null,"Cras ut finibus ex. Donec eu sollicitudin ligula. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent faucibus pellentesque diam, sit amet tempus est interdum sit amet. Proin eget vehicula dui. Ut quis rutrum nisl. Sed sed risus ut lacus convallis laoreet. Nunc elit erat, venenatis at sodales eleifend, vestibulum ut sapien. Maecenas orci metus, bibendum sit amet massa eu, elementum dignissim dolor. Aliquam ut massa gravida, ultricies augue id, dignissim nulla. Duis vehicula, turpis non tempus malesuada, libero enim lacinia eros, ut vehicula magna ex nec turpis. Nulla ultrices, elit ut sodales facilisis, enim ligula varius odio, at venenatis purus sapien non nulla."))),e.createElement(o,null,e.createElement("h2",null,"Second content:"),e.createElement("p",null,"Mauris placerat dui lacinia pellentesque porttitor. Mauris tincidunt pellentesque odio elementum lacinia. Duis maximus magna consectetur libero iaculis fringilla. Vivamus vestibulum, lorem sed lobortis molestie, odio justo feugiat eros, id mattis nisi turpis eget tellus. Ut porta in quam at cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rutrum sit amet turpis ac ultrices. Pellentesque at scelerisque ipsum. Curabitur vulputate tempor elit, in pharetra nibh tincidunt ac. Duis ornare elementum lacus, ac commodo libero scelerisque blandit. Proin orci enim, eleifend laoreet ante in, sagittis mattis odio. Etiam id euismod augue. Integer maximus mi est, ac tincidunt magna venenatis in. Proin et enim eget urna egestas lacinia sed id libero.")),e.createElement(o,null,e.createElement("h2",null,"Third content:"),e.createElement("div",{style:{display:"flex",justifyItems:"center",justifyContent:"space-between"}},e.createElement("img",{src:"https://randomuser.me/api/portraits/lego/0.jpg","data-int":"0","data-gender":"lego",alt:"lego-user",width:100}),e.createElement("p",null,"Fusce elementum sollicitudin turpis at lacinia. Pellentesque orci odio, dignissim a dolor at, tincidunt luctus lacus. Donec sit amet gravida nibh, eget auctor quam. Morbi aliquet odio ut aliquam efficitur. Vivamus arcu magna, porttitor eget tempus id, convallis vitae sem. Fusce hendrerit, neque vel congue eleifend, ex odio pretium est, nec venenatis nibh orci in metus. Vestibulum congue lectus quis ligula fermentum feugiat quis a sem. Praesent non lacinia justo, ut dictum odio."))),e.createElement(o,null,e.createElement("h2",null,"Third content:")))))}};var v,f,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function useTabs(args) {
    const [selected, setSelected] = useState(0);
    return <>
        <h4 style={{
        textDecoration: 'underline'
      }}>This is a practical example of component composition in React:</h4>
        <div style={{
        padding: '20px 10px',
        marginTop: 30,
        border: '1px solid #000'
      }}>
          <Tabs {...args} selected={selected} setSelected={setSelected}>
            <TabsList>
              <Tab>First Tab</Tab>
              <Tab>Second Tab</Tab>
              <Tab>Third Tab</Tab>
            </TabsList>
            <div>
              <TabPanel>
                <h2>First content:</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla urna. Nulla nec malesuada
                  arcu, vehicula venenatis libero. Curabitur ut lacus vel metus posuere finibus. Sed non lobortis ante.
                  In id condimentum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Vestibulum ornare varius aliquet.
                </p>
                <p>
                  Cras ut finibus ex. Donec eu sollicitudin ligula. Suspendisse potenti. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Praesent faucibus pellentesque diam, sit amet tempus est interdum sit
                  amet. Proin eget vehicula dui. Ut quis rutrum nisl. Sed sed risus ut lacus convallis laoreet. Nunc
                  elit erat, venenatis at sodales eleifend, vestibulum ut sapien. Maecenas orci metus, bibendum sit amet
                  massa eu, elementum dignissim dolor. Aliquam ut massa gravida, ultricies augue id, dignissim nulla.
                  Duis vehicula, turpis non tempus malesuada, libero enim lacinia eros, ut vehicula magna ex nec turpis.
                  Nulla ultrices, elit ut sodales facilisis, enim ligula varius odio, at venenatis purus sapien non
                  nulla.
                </p>
              </TabPanel>
            </div>
            <TabPanel>
              <h2>Second content:</h2>
              <p>
                Mauris placerat dui lacinia pellentesque porttitor. Mauris tincidunt pellentesque odio elementum
                lacinia. Duis maximus magna consectetur libero iaculis fringilla. Vivamus vestibulum, lorem sed lobortis
                molestie, odio justo feugiat eros, id mattis nisi turpis eget tellus. Ut porta in quam at cursus.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
                rutrum sit amet turpis ac ultrices. Pellentesque at scelerisque ipsum. Curabitur vulputate tempor elit,
                in pharetra nibh tincidunt ac. Duis ornare elementum lacus, ac commodo libero scelerisque blandit. Proin
                orci enim, eleifend laoreet ante in, sagittis mattis odio. Etiam id euismod augue. Integer maximus mi
                est, ac tincidunt magna venenatis in. Proin et enim eget urna egestas lacinia sed id libero.
              </p>
            </TabPanel>
            <TabPanel>
              <h2>Third content:</h2>
              <div style={{
              display: 'flex',
              justifyItems: 'center',
              justifyContent: 'space-between'
            }}>
                <img src="https://randomuser.me/api/portraits/lego/0.jpg" data-int="0" data-gender="lego" alt="lego-user" width={100} />
                <p>
                  Fusce elementum sollicitudin turpis at lacinia. Pellentesque orci odio, dignissim a dolor at,
                  tincidunt luctus lacus. Donec sit amet gravida nibh, eget auctor quam. Morbi aliquet odio ut aliquam
                  efficitur. Vivamus arcu magna, porttitor eget tempus id, convallis vitae sem. Fusce hendrerit, neque
                  vel congue eleifend, ex odio pretium est, nec venenatis nibh orci in metus. Vestibulum congue lectus
                  quis ligula fermentum feugiat quis a sem. Praesent non lacinia justo, ut dictum odio.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Third content:</h2>
            </TabPanel>
          </Tabs>
        </div>
      </>;
  }
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};export{d as Default,N as default};
