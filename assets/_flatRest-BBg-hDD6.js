import{b as _,c,d as m}from"./_baseAssignValue-BaWBIJEp.js";import{b as y,a as h}from"./_MapCache-DhgvrLk6.js";import{i as g}from"./identity-CwXImgea.js";var s=y,p=_,S=h,u=s?s.isConcatSpreadable:void 0;function d(n){return S(n)||p(n)||!!(u&&n&&n[u])}var $=d,T=c,w=$;function b(n,e,t,a,r){var o=-1,l=n.length;for(t||(t=w),r||(r=[]);++o<l;){var i=n[o];e>0&&t(i)?e>1?b(i,e-1,t,a,r):T(r,i):a||(r[r.length]=i)}return r}var F=b,O=F;function x(n){var e=n==null?0:n.length;return e?O(n,1):[]}var P=x;function R(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var A=R,C=A,v=Math.max;function N(n,e,t){return e=v(e===void 0?n.length-1:e,0),function(){for(var a=arguments,r=-1,o=v(a.length-e,0),l=Array(o);++r<o;)l[r]=a[e+r];r=-1;for(var i=Array(e+1);++r<e;)i[r]=a[r];return i[e]=t(l),C(n,this,i)}}var H=N;function M(n){return function(){return n}}var D=M,U=D,f=m,j=g,k=f?function(n,e){return f(n,"toString",{configurable:!0,enumerable:!1,value:U(e),writable:!0})}:j,q=k,z=800,B=16,E=Date.now;function G(n){var e=0,t=0;return function(){var a=E(),r=B-(a-t);if(t=a,r>0){if(++e>=z)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}var I=G,J=q,K=I,L=K(J),Q=L,V=P,W=H,X=Q;function Y(n){return X(W(n,void 0,V),n+"")}var tn=Y;export{tn as _,H as a,Q as b};
