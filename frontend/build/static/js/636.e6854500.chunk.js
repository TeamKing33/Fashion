"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[636],{6158:function(){},1274:function(e,n,t){t.d(n,{Z:function(){return c}});t(390);var s=t(1179),i=(t(6158),t(5400)),a=t(2559);function c(){return(0,a.jsxs)(s.XO,{className:"bg-dark text-center text-white  footerts",children:[(0,a.jsx)(s.L5,{className:"p-4 pb-0",children:(0,a.jsx)("section",{className:"",children:(0,a.jsxs)("p",{className:"d-flex justify-content-center align-items-center footertx",children:[(0,a.jsx)("span",{className:"me-3",children:"Register for free"}),(0,a.jsx)(i.OL,{to:"/",children:(0,a.jsx)("button",{className:"btn btn-outline-light",type:"button",children:"Sign up!"})})]})})}),(0,a.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2023 Copyright:",(0,a.jsx)("a",{className:"text-white",href:"#",children:"Team.com"})]})]})}},8806:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var s=t(4165),i=t(5861),a=t(4942),c=t(1413),r=t(9439),l=t(390),o=t.p+"static/media/1.e1598b7093e941b2a7e5.png",u=t.p+"static/media/2.b9e2dd662df1a20aca62.png",d=t.p+"static/media/3.0bf6830a5fa1600eb4a7.png",m=t.p+"static/media/4.f431aa4a506236e71b35.png",h=t(1274),f=t(4743),p=t(5545),x=t(8046),j=(t(6158),t(2559));var v=function(){(0,l.useEffect)((function(){$("#number").mask("000 0000 0000")}),[]);var e=(0,l.useState)({email:"",name:"",image:o,result:"",quantity:"",size:"",number:""}),n=(0,r.Z)(e,2),t=n[0],v=n[1],g=function(e){v((function(n){return(0,c.Z)((0,c.Z)({},n),{},{size:e})}))},b=((0,p.s0)(),function(e){v((function(n){return(0,c.Z)((0,c.Z)({},n),{},(0,a.Z)({},e.target.name,e.target.value))}))}),N=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(n){var i,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),i=f.Z.get("email"),console.log(t),a=(0,c.Z)((0,c.Z)({},t),{},{email:i}),x.Z.post("https://fashion-server-mu.vercel.app/product",a).then((function(e){console.log(e),alert("Data Inserted Successfully")})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=(0,l.useState)(o),z=(0,r.Z)(y,2),k=z[0],Z=z[1],C=(0,l.useState)(""),w=(0,r.Z)(C,2),S=w[0],q=w[1],E=(0,l.useState)(""),T=(0,r.Z)(E,2),I=T[0],D=T[1],L=function(e){Z(e)};return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"container",children:[(0,j.jsxs)("div",{className:"image",children:[(0,j.jsx)("div",{className:"con-image",children:(0,j.jsx)("img",{src:k,alt:"",id:"cont"})}),(0,j.jsxs)("div",{className:"imagechild",children:[(0,j.jsx)("img",{src:o,alt:"",onClick:function(){return L(o)}}),(0,j.jsx)("img",{src:u,alt:"",onClick:function(){return L(u)}}),(0,j.jsx)("img",{src:d,alt:"",onClick:function(){return L(d)}}),(0,j.jsx)("img",{src:m,alt:"",onClick:function(){return L(m)}})]})]}),(0,j.jsxs)("div",{className:"text",children:["A navy checkered dress combines traditional elegance with a modern allure. The classic stripe pattern takes on a contemporary twist when paired with the deep and sophisticated navy color. The dress is versatile and suitable for various occasions due to its simplicity and the ease of accessorizing. Its design and color make it a stylish piece that effortlessly transitions between formal and casual settings. The navy checkered dress, with its timeless charm and modern sophistication, exemplifies the enduring beauty of classic patterns in the ever-evolving world of fashion.",(0,j.jsxs)("form",{onSubmit:N,children:[(0,j.jsx)("h3",{className:"textSize",children:"Size"}),(0,j.jsxs)("div",{className:"box_size",children:[(0,j.jsx)("div",{className:"size ".concat("38"===t.size?"selected":""),name:"size",onClick:function(){return g("38")},children:"38"}),(0,j.jsx)("div",{className:"size ".concat("40"===t.size?"selected":""),name:"size",onClick:function(){return g("40")},children:"40"}),(0,j.jsx)("div",{className:"size ".concat("42"===t.size?"selected":""),name:"size",onClick:function(){return g("42")},children:"42"}),(0,j.jsx)("div",{className:"size ".concat("44"===t.size?"selected":""),name:"size",onClick:function(){return g("44")},children:"44"}),(0,j.jsx)("div",{className:"size ".concat("46"===t.size?"selected":""),name:"size",onClick:function(){return g("46")},children:"46"}),(0,j.jsx)("div",{className:"size ".concat("48"===t.size?"selected":""),name:"size",onClick:function(){return g("48")},children:"48"})]}),(0,j.jsxs)("div",{className:"price",children:[(0,j.jsx)("input",{type:"hidden",name:"result",value:S}),(0,j.jsxs)("div",{className:"result",children:[(0,j.jsxs)("span",{children:[S," EGP"]}),(0,j.jsx)("input",{type:"text",name:"name",placeholder:"Enter your Name",spellCheck:"false",required:!0,onChange:b}),(0,j.jsx)("input",{type:"text",name:"quantity",placeholder:"Enter Quantity",value:I,onChange:function(e){b(e),function(e){var n=parseInt(e.target.value,10)||"";D(n);var t=100*n;q(t),v((function(e){return(0,c.Z)((0,c.Z)({},e),{},{result:t})}))}(e)},required:!0}),(0,j.jsx)("input",{type:"text",name:"number",id:"number",placeholder:"Enter your Number",required:!0,onChange:b}),(0,j.jsx)("button",{className:"btn-price",type:"submit",name:"submit",children:"Buy Now"})]})]})]})]})]}),(0,j.jsx)(h.Z,{})]})}}}]);
//# sourceMappingURL=636.e6854500.chunk.js.map