import{d as _,g as d,h as g,j as h,k as P,e as b,l as A,m as w,a as x}from"./_baseAssignValue-Q6cBhLIi.js";var $=_,I=d,K=Object.prototype,B=K.hasOwnProperty;function C(r,e,n){var t=r[e];(!(B.call(r,e)&&I(t,n))||n===void 0&&!(e in r))&&$(r,e,n)}var L=C,T=L,U=_;function V(r,e,n,t){var i=!n;n||(n={});for(var o=-1,f=e.length;++o<f;){var a=e[o],s=t?t(n[a],r[a],a,n,r):void 0;s===void 0&&(s=r[a]),i?U(n,a,s):T(n,a,s)}return n}var ir=V;function E(r){var e=[];if(r!=null)for(var n in Object(r))e.push(n);return e}var q=E,M=g,N=h,j=q,m=Object.prototype,D=m.hasOwnProperty;function F(r){if(!M(r))return j(r);var e=N(r),n=[];for(var t in r)t=="constructor"&&(e||!D.call(r,t))||n.push(t);return n}var G=F,H=P,J=G,Q=b;function R(r){return Q(r)?H(r,!0):J(r)}var or=R,v={exports:{}};v.exports;(function(r,e){var n=A,t=e&&!e.nodeType&&e,i=t&&!0&&r&&!r.nodeType&&r,o=i&&i.exports===t,f=o?n.Buffer:void 0,a=f?f.allocUnsafe:void 0;function s(u,O){if(O)return u.slice();var c=u.length,l=a?a(c):new u.constructor(c);return u.copy(l),l}r.exports=s})(v,v.exports);var fr=v.exports;function S(r,e){var n=-1,t=r.length;for(e||(e=Array(t));++n<t;)e[n]=r[n];return e}var ur=S,p=w;function W(r){var e=new r.constructor(r.byteLength);return new p(e).set(new p(r)),e}var X=W,Y=X;function Z(r,e){var n=e?Y(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.length)}var vr=Z,z=g,y=Object.create,k=function(){function r(){}return function(e){if(!z(e))return{};if(y)return y(e);r.prototype=e;var n=new r;return r.prototype=void 0,n}}(),rr=k,er=rr,nr=x,tr=h;function ar(r){return typeof r.constructor=="function"&&!tr(r)?er(nr(r)):{}}var cr=ar;export{ir as _,X as a,vr as b,fr as c,ur as d,cr as e,L as f,or as k};
