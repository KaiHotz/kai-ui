function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(null,arguments)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},a(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(t)}function i(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(i=function(){return!!t})()}function s(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}export{o as _,a,i as b,c,s as d};
