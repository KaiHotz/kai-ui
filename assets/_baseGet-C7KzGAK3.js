import{i as o,_ as g}from"./_MapCache-bPlbJmjb.js";import{i as s}from"./isSymbol-CMQYLC8d.js";import{c as _}from"./isObjectLike-yY6ejuuN.js";function l(r,t){for(var n=-1,e=r==null?0:r.length,a=Array(e);++n<e;)a[n]=t(r[n],n,r);return a}var $=l,d=o,S=s,v=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,b=/^\w*$/;function T(r,t){if(d(r))return!1;var n=typeof r;return n=="number"||n=="symbol"||n=="boolean"||r==null||S(r)?!0:b.test(r)||!v.test(r)||t!=null&&r in Object(t)}var P=T,y=g,C="Expected a function";function c(r,t){if(typeof r!="function"||t!=null&&typeof t!="function")throw new TypeError(C);var n=function(){var e=arguments,a=t?t.apply(this,e):e[0],i=n.cache;if(i.has(a))return i.get(a);var f=r.apply(this,e);return n.cache=i.set(a,f)||i,f};return n.cache=new(c.Cache||y),n}c.Cache=y;var I=c,z=I,E=500;function M(r){var t=z(r,function(e){return n.size===E&&n.clear(),e}),n=t.cache;return t}var A=M,w=A,K=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,N=/\\(\\)?/g,x=w(function(r){var t=[];return r.charCodeAt(0)===46&&t.push(""),r.replace(K,function(n,e,a,i){t.push(a?i.replace(N,"$1"):e||n)}),t}),F=x,p=_,O=$,R=o,G=s,X=1/0,u=p?p.prototype:void 0,m=u?u.toString:void 0;function h(r){if(typeof r=="string")return r;if(R(r))return O(r,h)+"";if(G(r))return m?m.call(r):"";var t=r+"";return t=="0"&&1/r==-X?"-0":t}var Y=h,Z=Y;function k(r){return r==null?"":Z(r)}var D=k,U=o,q=P,B=F,H=D;function J(r,t){return U(r)?r:q(r,t)?[r]:B(H(r))}var L=J,Q=s,V=1/0;function W(r){if(typeof r=="string"||Q(r))return r;var t=r+"";return t=="0"&&1/r==-V?"-0":t}var j=W,rr=L,tr=j;function nr(r,t){t=rr(t,r);for(var n=0,e=t.length;r!=null&&n<e;)r=r[tr(t[n++])];return n&&n==e?r:void 0}var or=nr;export{or as _,L as a,j as b,$ as c,P as d};
