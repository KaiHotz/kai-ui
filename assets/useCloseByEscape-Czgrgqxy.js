import"./getCSSVariable-Dab2ZoWK.js";import{r as o}from"./index-BP8_t0zE.js";import{l as p}from"./lodash-DZrcJQkD.js";const i=(e,s,r=window)=>{const a=o.useRef(p.noop);o.useEffect(()=>{a.current=s},[s]),o.useEffect(()=>{if(r===null)return;const t=n=>a.current(n);return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}},[e,r])},d={enter:"Enter",tab:"Tab",escape:"Escape",backspace:"Backspace",arrowUp:"ArrowUp",arrowDown:"ArrowDown",arrowLeft:"ArrowLeft",arrowRight:"ArrowRight",space:"Space"},c=e=>{i("keydown",r=>{r.key===d.escape&&e()})};try{c.displayName="useCloseByEscape",c.__docgenInfo={description:"",displayName:"useCloseByEscape",props:{}}}catch{}export{c as a,i as u};
