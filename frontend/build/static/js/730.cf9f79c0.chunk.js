"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[730],{7757:function(){},1950:function(e,t,n){n.d(t,{Z:function(){return c}});n(390);var s=n(7950),i=n(2559);var c=function(){var e=(0,s.$G)(),t=e.t;return e.i18n,(0,i.jsx)("div",{children:(0,i.jsxs)("button",{className:"button",children:[t("Buy Now"),(0,i.jsx)("svg",{className:"cartIcon",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{d:"M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"})})]})})}},9730:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var s=n(390),i=n(5545),c=n(4743),a=n(9810),r=n(2376),d=n(6864),o=n(9947),l=n(5400),u=n(1950),m=(n(2537),n(4868),n(2559)),h=function(e){return[{id:8,img:a,title:e("Girls dress"),price:70,discount:50,description:e("A cute girls' dress with long sleeves, featuring unicorn and floral patterns."),button:(0,m.jsx)(l.OL,{to:"/KidsClothes",className:"NavLink",children:(0,m.jsx)("div",{className:"btncard",children:(0,m.jsx)(u.Z,{})})}),number:1},,{id:9,img:d,title:e("Hoodie"),price:50,discount:55,description:e("A Block-Color Hoodie is a stylish casual hoodie featuring solid color blocks."),button:(0,m.jsx)(l.OL,{to:"/KidsClothes3",className:"NavLink",children:(0,m.jsx)("div",{className:"btncard",children:(0,m.jsx)(u.Z,{})})}),number:1},,{id:10,img:r,title:e("pajama"),price:50,discount:40,description:e("Infant girl outfit set for fall/winter with a cotton long-sleeve romper and pants."),button:(0,m.jsx)(l.OL,{to:"/KidsClothes2",className:"NavLink",children:(0,m.jsx)("div",{className:"btncard",children:(0,m.jsx)(u.Z,{})})}),number:1},,{id:11,img:o,title:e("Hoodie"),price:70,discount:65,description:e("Dark blue dinosaur-themed hoodie Stylish, versatile, playful self-expression for casual comfort."),button:(0,m.jsx)(l.OL,{to:"/KidsClothes4",className:"NavLink",children:(0,m.jsx)("div",{className:"btncard",children:(0,m.jsx)(u.Z,{})})}),number:1}]},f=n(4165),p=n(5861),x=n(4942),j=n(1413),v=n(9439),b=n(7950),g=n(8046),N=function(e){var t=e.item,n=e.handleClick,c=(0,b.$G)(),a=c.t,r=(c.i18n,(0,s.useState)({id:t.id,img:t.img,title:t.title,number:t.number,discount:t.discount,price:t.price})),d=(0,v.Z)(r,2),o=d[0],l=d[1],u=((0,i.s0)(),function(e){l((function(t){return(0,j.Z)((0,j.Z)({},t),{},(0,x.Z)({},e.target.name,[e.target.value]))}))}),h=function(){var e=(0,p.Z)((0,f.Z)().mark((function e(t){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),g.Z.post("https://fashion-server-mu.vercel.app/addtocart",o).then((function(e){console.log(e),e.data&&"Item is already added to cart"===e.data.Message&&alert("Product already exists in the cart")})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=(t.id,t.title),C=t.discountCard,k=t.img,Z=t.discount,y=t.price,w=t.description,L=t.button;t.number;return(0,m.jsx)("div",{className:"bodycar",children:(0,m.jsxs)("form",{onSubmit:h,children:[(0,m.jsx)("span",{children:C}),(0,m.jsx)("img",{src:k,className:"card-img-top imagecard",onChange:u}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsx)("h5",{className:"card-title title",onChange:u,children:N}),(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsxs)("p",{className:"card-textt",onChange:u,children:[a("EGP"),Z]}),(0,m.jsx)("p",{className:"card-textt colorsdis",onChange:u,children:(0,m.jsx)("s",{children:y})})]}),(0,m.jsx)("div",{className:"alltext",children:(0,m.jsx)("span",{className:"card-text description",children:w})})]}),(0,m.jsxs)("div",{className:"btnaddtocart",children:[(0,m.jsx)("button",{onClick:function(){return n(t)},className:"CartBtn",children:a("Add to Cart")}),(0,m.jsx)("div",{className:"btnbuy"}),L]})]})})},C=(n(7757),function(e){var t=e.handleClick,n=(0,b.$G)(),a=n.t,r=(n.i18n,h(a)),d=(0,i.s0)();return(0,s.useEffect)((function(){"true"!==c.Z.get("login")&&d("/signin")}),[d]),(0,m.jsx)("div",{className:"bodycar",children:(0,m.jsx)("div",{className:"cards",children:(0,m.jsx)("section",{className:"py-4 container ",children:(0,m.jsx)("div",{className:"row justify-content-center",children:r&&r.map((function(e){return(0,m.jsx)("div",{className:"col-6 col-md-6 col-lg-3 mx-0 mb-4",children:(0,m.jsx)("div",{className:"card p-0 overflow-hidden shadow cards",children:(0,m.jsx)(N,{item:e,handleClick:t},e.id)})},e.id)}))})})})})})},4868:function(e,t,n){n.d(t,{Z:function(){return c}});n(390);var s=n(7950),i=n(2559);var c=function(){var e=(0,s.$G)(),t=e.t;return e.i18n,(0,i.jsx)("div",{className:"ribbon",children:(0,i.jsx)("span",{children:t("29% OFF")})})}},2376:function(e,t,n){e.exports=n.p+"static/media/1.6b3f3d3d84c4917d9e57.png"},6864:function(e,t,n){e.exports=n.p+"static/media/1.cbcd91fa68ac04df7b2a.png"},9947:function(e,t,n){e.exports=n.p+"static/media/1.09331428fdc77bb2d836.png"},9810:function(e,t,n){e.exports=n.p+"static/media/1.ac619a63c5fd13eca17f.png"}}]);
//# sourceMappingURL=730.cf9f79c0.chunk.js.map