(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(68)},40:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=(a(40),a(11)),u=a(32),i=a(34),m=a(14),s=a(10);var d=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"font-bold py-3"},"The menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/",className:"text-blue-500 py-3 border-t border-b block",onClick:e.closeMenu},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/about",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"About"))))};var f=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(m.b)(a,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),s=Object(m.b)(a,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return l.a.createElement("nav",null,l.a.createElement("span",{className:"text-xl"},l.a.createElement(u.a,{icon:i.a,onClick:function(){return r(!a)}})),c.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&l.a.createElement(m.a.div,{key:a,style:n,className:"bg-black-t-50 fixed top-0 left-0 w-full h-full z-50",onClick:function(){return r(!1)}})})),s.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&l.a.createElement(m.a.div,{key:a,style:n,className:"fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"},l.a.createElement(d,{closeMenu:function(){return r(!1)}}))})))};var b=function(){return l.a.createElement("header",{className:"border-b p-3 flex justify-between item-center"},l.a.createElement("span",{className:"font-bold"},"My First App"),l.a.createElement(f,null))};var E=function(){return l.a.createElement("footer",{className:"bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full"},"\xa9 Copyright 2020")},p=a(3),v=a(16),g=a.n(v);var h=function(){return l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"loader"}))};var y=function(e){return l.a.createElement("div",{className:"border mb-4 rounded overflow-hidden"},l.a.createElement("div",{style:{backgroundImage:"url('".concat(e.product.images[0].imageUrl,"')")},className:"w-full h-64  bg-blue  bg-cover"}))};var x=function(){var e="https://5ee6c64c52bb0500161fcfbc.mockapi.io/products?page=1&limit=10",t=Object(n.useState)({loading:!1,data:null,error:!1}),a=Object(o.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){c({loading:!0,data:null,error:!1}),g.a.get(e).then((function(e){c({loading:!1,data:e.data,error:!1})})).catch((function(){c({loading:!1,data:null,error:!0})}))}),[e]);var u=null;return r.error&&(u=l.a.createElement("p",null,"Error occured! Please refresh or try again later.")),r.loading&&(u=l.a.createElement(h,null)),r.data&&(u=r.data.map((function(e,t){return l.a.createElement("div",null,l.a.createElement(y,{product:e}))}))),l.a.createElement("div",null,l.a.createElement("h1",{className:"font-bold text-2xl"},"Best Sellers"),u)};var k=function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"font-bold text-2xl mb-3"},"  About us "),l.a.createElement("p",null,"About page content."))};var N=function(){var e=Object(p.f)().id,t="https://5ee6c64c52bb0500161fcfbc.mockapi.io/products/".concat(e),a=Object(n.useState)({loading:!1,data:null,error:!1}),r=Object(o.a)(a,2),c=r[0],u=r[1],i=null;return Object(n.useEffect)((function(){u({loading:!0,data:null,error:!1}),g.a.get(t).then((function(e){u({loading:!1,data:e.data,error:!1})})).catch((function(){u({loading:!1,data:null,error:!0})}))}),[t]),c.error&&(i=l.a.createElement("p",null,"Error occured! Please refresh or try again later.")),c.loading&&(i=l.a.createElement(h,null)),c.data&&(i=l.a.createElement("div",null,l.a.createElement("h1",{className:"text-2xl font-bold mb-3"},c.name),l.a.createElement("div",null,l.a.createElement("img",{src:c.data.images[0].imagesUrl,alt:c.data.name})),l.a.createElement("div",{className:"font-bold text-xl mb-3"},"$ ",c.data.price),l.a.createElement("div",null,c.data.description))),l.a.createElement("div",null,i)};var w=function(){return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(b,null),l.a.createElement("div",{className:"p-3"},l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/"},l.a.createElement(x,null)),l.a.createElement(p.a,{path:"/about"},l.a.createElement(k,null)),l.a.createElement(p.a,{path:"/products/:id"},l.a.createElement(N,null)))),l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.722886fe.chunk.js.map