(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))a(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const Y of m.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&a(Y)}).observe(document,{childList:!0,subtree:!0});function r(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function a(p){if(p.ep)return;p.ep=!0;const m=r(p);fetch(p.href,m)}})();function W(){return W=Object.assign?Object.assign.bind():function(u){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(u[a]=r[a])}return u},W.apply(this,arguments)}var X=function(n,r){return n.querySelector(r)},Tt=function(n,r){return n.querySelectorAll(r)},$t=function(n){n===void 0&&(n={});var r={};return Object.keys(n).forEach(function(a){typeof n[a]<"u"&&(r[a]=n[a])}),r},Xt={alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0};function Yt(u){u===void 0&&(u={});var n=u,r=n.el,a=n.eventsEl,p=u,m=p.isComponent,Y,g={__atropos__:!0,params:W({},Xt,{onEnter:null,onLeave:null,onRotate:null},$t(u||{})),destroyed:!1,isActive:!1},e=g.params,w,E,z,C,R,y,l,b,G,J,O=[],V,it=function i(){V=requestAnimationFrame(function(){O.forEach(function(t){if(typeof t=="function")t();else{var o=t.element,s=t.prop,f=t.value;o.style[s]=f}}),O.splice(0,O.length),i()})};it();var x=function(t,o){O.push({element:t,prop:"transitionDuration",value:o})},L=function(t,o){O.push({element:t,prop:"transitionTimingFunction",value:o})},M=function(t,o){O.push({element:t,prop:"transform",value:o})},F=function(t,o){O.push({element:t,prop:"opacity",value:o})},st=function(t,o){O.push({element:t,prop:"transformOrigin",value:o})},T=function(t,o,s,f){return t.addEventListener(o,s,f)},$=function(t,o,s,f){return t.removeEventListener(o,s,f)},ut=function(){var t;y=X(r,".atropos-shadow"),y||(y=document.createElement("span"),y.classList.add("atropos-shadow"),t=!0),M(y,"translate3d(0,0,-"+e.shadowOffset+"px) scale("+e.shadowScale+")"),t&&w.appendChild(y)},ft=function(){var t;l=X(r,".atropos-highlight"),l||(l=document.createElement("span"),l.classList.add("atropos-highlight"),t=!0),M(l,"translate3d(0,0,0)"),t&&z.appendChild(l)},Q=function(t){var o=t.rotateXPercentage,s=o===void 0?0:o,f=t.rotateYPercentage,c=f===void 0?0:f,d=t.duration,_=t.opacityOnly,S=t.easeOut,D=function(h){if(h.dataset.atroposOpacity&&typeof h.dataset.atroposOpacity=="string")return h.dataset.atroposOpacity.split(";").map(function(P){return parseFloat(P)})};Tt(Y,"[data-atropos-offset], [data-atropos-opacity]").forEach(function(v){x(v,d),L(v,S?"ease-out":"");var h=D(v);if(s===0&&c===0)_||M(v,"translate3d(0, 0, 0)"),h&&F(v,h[0]);else{var P=parseFloat(v.dataset.atroposOffset)/100;if(!Number.isNaN(P)&&!_&&M(v,"translate3d("+-c*-P+"%, "+s*-P+"%, 0)"),h){var B=h[0],j=h[1],K=Math.max(Math.abs(s),Math.abs(c));F(v,B+(j-B)*K/100)}}})},U=function(t,o){var s=r!==a;if(C||(C=r.getBoundingClientRect()),s&&!R&&(R=a.getBoundingClientRect()),typeof t>"u"&&typeof o>"u"){var f=s?R:C;t=f.left+f.width/2,o=f.top+f.height/2}var c=0,d=0,_=C,S=_.top,D=_.left,v=_.width,h=_.height,P;if(s){var Z=R,at=Z.top,ot=Z.left,vt=Z.width,ht=Z.height,mt=D-ot,yt=S-at,gt=v/2+mt,Ot=h/2+yt,Mt=t-ot,wt=o-at;d=e.rotateYMax*(Mt-gt)/(vt-v/2)*-1,c=e.rotateXMax*(wt-Ot)/(ht-h/2),P=t-D+"px "+(o-S)+"px"}else{var B=v/2,j=h/2,K=t-D,dt=o-S;d=e.rotateYMax*(K-B)/(v/2)*-1,c=e.rotateXMax*(dt-j)/(h/2)}c=Math.min(Math.max(-c,-e.rotateXMax),e.rotateXMax),e.rotateXInvert&&(c=-c),d=Math.min(Math.max(-d,-e.rotateYMax),e.rotateYMax),e.rotateYInvert&&(d=-d);var I=c/e.rotateXMax*100,q=d/e.rotateYMax*100,xt=(s?q/100*e.stretchX:0)*(e.rotateYInvert?-1:1),Lt=(s?I/100*e.stretchY:0)*(e.rotateXInvert?-1:1),Pt=s?Math.max(Math.abs(I),Math.abs(q))/100*e.stretchZ:0;M(w,"translate3d("+xt+"%, "+-Lt+"%, "+-Pt+"px) rotateX("+c+"deg) rotateY("+d+"deg)"),P&&e.commonOrigin&&st(w,P),l&&(x(l,e.duration+"ms"),L(l,"ease-out"),M(l,"translate3d("+-q*.25+"%, "+I*.25+"%, 0)"),F(l,Math.max(Math.abs(I),Math.abs(q))/100)),Q({rotateXPercentage:I,rotateYPercentage:q,duration:e.duration+"ms",easeOut:!0}),typeof e.onRotate=="function"&&e.onRotate(c,d)},k=function(){O.push(function(){return r.classList.add("atropos-active")}),x(w,e.duration+"ms"),L(w,"ease-out"),M(E,"translate3d(0,0, "+e.activeOffset+"px)"),x(E,e.duration+"ms"),L(E,"ease-out"),y&&(x(y,e.duration+"ms"),L(y,"ease-out")),g.isActive=!0},N=function(t){if(b=void 0,!(t.type==="pointerdown"&&t.pointerType==="mouse")&&!(t.type==="pointerenter"&&t.pointerType!=="mouse")){if(t.type==="pointerdown"&&t.preventDefault(),G=t.clientX,J=t.clientY,e.alwaysActive){C=void 0,R=void 0;return}k(),typeof e.onEnter=="function"&&e.onEnter()}},tt=function(t){b===!1&&t.cancelable&&t.preventDefault()},et=function(t){if(!(!e.rotate||!g.isActive)){if(t.pointerType!=="mouse"){if(!e.rotateTouch)return;t.preventDefault()}var o=t.clientX,s=t.clientY,f=o-G,c=s-J;if(typeof e.rotateTouch=="string"&&(f!==0||c!==0)&&typeof b>"u"){if(f*f+c*c>=25){var d=Math.atan2(Math.abs(c),Math.abs(f))*180/Math.PI;b=e.rotateTouch==="scroll-y"?d>45:90-d>45}b===!1&&(r.classList.add("atropos-rotate-touch"),t.cancelable&&t.preventDefault())}t.pointerType!=="mouse"&&b||U(o,s)}},A=function(t){if(C=void 0,R=void 0,!!g.isActive&&!(t&&t.type==="pointerup"&&t.pointerType==="mouse")&&!(t&&t.type==="pointerleave"&&t.pointerType!=="mouse")){if(typeof e.rotateTouch=="string"&&b&&r.classList.remove("atropos-rotate-touch"),e.alwaysActive){U(),typeof e.onRotate=="function"&&e.onRotate(0,0),typeof e.onLeave=="function"&&e.onLeave();return}O.push(function(){return r.classList.remove("atropos-active")}),x(E,e.duration+"ms"),L(E,""),M(E,"translate3d(0,0, 0px)"),y&&(x(y,e.duration+"ms"),L(y,"")),l&&(x(l,e.duration+"ms"),L(l,""),M(l,"translate3d(0, 0, 0)"),F(l,0)),x(w,e.duration+"ms"),L(w,""),M(w,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),Q({duration:e.duration+"ms"}),g.isActive=!1,typeof e.onRotate=="function"&&e.onRotate(0,0),typeof e.onLeave=="function"&&e.onLeave()}},rt=function(t){var o=t.target;!a.contains(o)&&o!==a&&g.isActive&&A()},ct=function(){typeof r=="string"&&(r=X(document,r)),r&&(r.__atropos__||(typeof a<"u"?typeof a=="string"&&(a=X(document,a)):a=r,Y=m?r.parentNode.host:r,Object.assign(g,{el:r}),w=X(r,".atropos-rotate"),E=X(r,".atropos-scale"),z=X(r,".atropos-inner"),r.__atropos__=g))},pt=function(){ct(),!(!r||!a)&&(e.shadow&&ut(),e.highlight&&ft(),e.rotateTouch&&(typeof e.rotateTouch=="string"?r.classList.add("atropos-rotate-touch-"+e.rotateTouch):r.classList.add("atropos-rotate-touch")),X(Y,"[data-atropos-opacity]")&&Q({opacityOnly:!0}),T(document,"click",rt),T(a,"pointerdown",N),T(a,"pointerenter",N),T(a,"pointermove",et),T(a,"touchmove",tt),T(a,"pointerleave",A),T(a,"pointerup",A),T(a,"lostpointercapture",A),e.alwaysActive&&(k(),U()))},lt=function(){g.destroyed=!0,cancelAnimationFrame(V),$(document,"click",rt),$(a,"pointerdown",N),$(a,"pointerenter",N),$(a,"pointermove",et),$(a,"touchmove",tt),$(a,"pointerleave",A),$(a,"pointerup",A),$(a,"lostpointercapture",A),delete r.__atropos__};return g.destroy=lt,pt(),g}document.querySelectorAll(".my-atropos").forEach(u=>{Yt({el:u,activeOffset:80,shadowScale:1.5,rotateTouch:"scroll-y"})});const H=document.getElementById("typewriter"),Et=H.textContent;H.textContent="";function nt(u,n){n<u.length?(H.textContent+=u.charAt(n),setTimeout(()=>{nt(u,n+1)},40)):H.classList.add("animation-finished")}nt(Et,0);