(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{162:function(e,t,c){},198:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(27),r=c.n(i),a=c(25),o=(c(162),c(38)),s=(c(163),c(210)),j=c(216),l=c(144),d=c(218),b=c(51),u=c(117),x=c.n(u),O=c(4),h=Object(n.createContext)(),p=Object(n.createContext)(),m=function(e){var t=Object(n.useState)({loading:!0,user:[],error:null,category:2}),c=Object(o.a)(t,2),i=c[0],r=c[1];Object(n.useEffect)((function(){x.a.get("http://127.0.0.1:8000/api/products/").then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[]);var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r({loading:!1,user:e,error:null,category:t})};return Object(O.jsx)(p.Provider,{value:[i,r],children:e.children})},g=function(e){var t=Object(n.useState)({category:[],islogin:!0,count:0}),c=Object(o.a)(t,2),i=c[0],r=c[1];Object(n.useEffect)((function(){x.a.get("http://127.0.0.1:8000/api/category").then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[]);var a=function(e){r({category:e,islogin:!0,count:0})};return Object(O.jsx)(h.Provider,{value:[i,r],children:e.children})},f=c(118),v=(c(188),function(){var e=Object(n.useContext)(p),t=Object(o.a)(e,1)[0],c=Object(n.useContext)(h),i=Object(o.a)(c,2),r=i[0],a=i[1],u=function(e){f.NotificationManager.success("\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443","Ecommerce");var t=1+parseInt(r.count);a({category:r.category,islogin:!0,count:t})};return t.loading?Object(O.jsx)(s.a,{content:"Loading",active:!0}):Object(O.jsxs)(j.a.Group,{centered:!0,itemsPerRow:3,style:{marginTop:"20px",padding:"20px 30px"},children:[t.category?t.user.map((function(e){return e.catergory===t.category&&Object(O.jsx)(j.a,{image:Object(O.jsx)(l.a,{src:e.image,size:"small"}),header:e.title,meta:"\u0426\u0435\u043d\u0430: ".concat(e.price," c\u043e\u043c"),description:e.description,extra:Object(O.jsxs)(d.a,{id:e.id,onClick:u,children:[Object(O.jsx)(b.a,{name:"arrow down cart"}),"\u0412 \u041a\u043e\u0440\u0437\u0438\u043d\u0443"]})},e.id)})):t.user.map((function(e){return Object(O.jsx)(j.a,{image:Object(O.jsx)(l.a,{src:e.image,size:"small"}),header:e.title,meta:"\u0426\u0435\u043d\u0430: ".concat(e.price," c\u043e\u043c"),description:e.description,extra:Object(O.jsxs)(d.a,{id:e.id,onClick:u,children:[Object(O.jsx)(b.a,{name:"arrow down cart"}),"\u0412 \u041a\u043e\u0440\u0437\u0438\u043d\u0443"]})},e.id)})),Object(O.jsx)(f.NotificationContainer,{enterTimeout:400,leaveTimeout:10})]})}),y=c(214),I=c(211),C=c(212),k=function(){var e=Object(n.useContext)(p),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(n.useContext)(h),s=Object(o.a)(r,2),j=s[0],l=s[1];return Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{inverted:!0,color:"black",children:Object(O.jsxs)(I.a,{children:[Object(O.jsxs)(y.a.Item,{header:!0,children:[Object(O.jsx)(b.a,{name:"compass"}),"Ecommerce"]}),Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(a.b,{to:"/",onClick:function(e){return i({category:null,loading:c.loading,user:c.user,error:c.error})},children:"\u0412\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"})}),j.islogin&&Object(O.jsx)(C.a,{item:!0,simple:!0,text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",children:Object(O.jsx)(C.a.Menu,{children:j.category.map((function(e){return Object(O.jsx)(C.a.Item,{children:Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(a.b,{id:e.id,to:"/",style:{color:"black"},onClick:function(e){return i({category:parseInt(e.target.id),loading:c.loading,user:c.user,error:c.error})},children:e.name})})},e.id)}))})}),j.islogin?Object(O.jsxs)(y.a.Menu,{position:"right",children:[Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(a.b,{to:"/cart",children:Object(O.jsx)(b.a,{name:"shopping cart",children:Object(O.jsxs)("p",{style:{position:"absolute",color:"#65dbff",top:"20px",left:"35px",fontSize:"14px",fontWeight:"800"},children:[" ",j.count,"  "]})})})}),Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(a.b,{to:"/",children:Object(O.jsx)(d.a,{onClick:function(e){e.preventDefault(),l({category:[],islogin:!1,count:0})},children:"\u0412\u044b\u0439\u0442\u0438"})})})]}):Object(O.jsxs)(y.a.Menu,{position:"right",children:[Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(a.b,{to:"/signin",children:Object(O.jsx)(d.a,{primary:!0,children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(a.b,{to:"/signup",children:Object(O.jsx)(d.a,{children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})})]})]})})})},w=c(219),P=c(220),z=c(213),A=c(221),E=c(217),S=function(e){return Object(O.jsx)(w.a,{textAlign:"center",style:{height:"85vh"},verticalAlign:"middle",children:Object(O.jsxs)(w.a.Column,{style:{maxWidth:450},children:[Object(O.jsxs)(P.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(O.jsx)(b.a,{name:"compass"}),"Log-in to your account"]}),Object(O.jsx)(z.a,{size:"large",children:Object(O.jsxs)(A.a,{stacked:!0,children:[Object(O.jsx)(z.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",autocomplete:"off"}),Object(O.jsx)(z.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",autocomplete:"off"}),Object(O.jsx)(d.a,{color:"teal",fluid:!0,size:"large",children:"Login"})]})}),Object(O.jsxs)(E.a,{children:["New to us? ",Object(O.jsx)(a.b,{to:"/signup",children:"Sign Up"})]})]})})},M=function(){return Object(O.jsx)(w.a,{textAlign:"center",style:{height:"85vh"},verticalAlign:"middle",children:Object(O.jsxs)(w.a.Column,{style:{maxWidth:450},children:[Object(O.jsxs)(P.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(O.jsx)(b.a,{name:"compass"}),"Create a new account"]}),Object(O.jsx)(z.a,{size:"large",children:Object(O.jsxs)(A.a,{stacked:!0,children:[Object(O.jsx)(z.a.Input,{fluid:!0,icon:"address card",iconPosition:"left",placeholder:"Firstname",autocomplete:"off"}),Object(O.jsx)(z.a.Input,{fluid:!0,icon:"user md",iconPosition:"left",placeholder:"Lastname",autocomplete:"off"}),Object(O.jsx)(z.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username",autocomplete:"off"}),Object(O.jsx)(z.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",autocomplete:"off"}),Object(O.jsx)(d.a,{color:"teal",fluid:!0,size:"large",children:"Signup"})]})}),Object(O.jsxs)(E.a,{children:["Already have account? ",Object(O.jsx)(a.b,{to:"/signin",children:"Sign-in"})]})]})})},L=c(10),N=c(215),T=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(A.a,{inverted:!0,style:{margin:"3em 0em 0em",padding:"2em 0em 3em 0em"},children:Object(O.jsxs)(I.a,{textAlign:"center",children:[Object(O.jsx)(b.a,{name:"compass"}),Object(O.jsxs)(N.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small",children:[Object(O.jsx)(N.a.Item,{children:"My first ecommerce website"}),Object(O.jsx)(N.a.Item,{children:"2021"})]})]})})})},W=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(k,{}),Object(O.jsx)(L.a,{path:"/signin",children:Object(O.jsx)(S,{})}),Object(O.jsx)(L.a,{path:"/signup",children:Object(O.jsx)(M,{})}),Object(O.jsx)(L.a,{path:"/",exact:!0,children:Object(O.jsx)(v,{})}),Object(O.jsx)(T,{})]})},J=function(){return Object(O.jsx)(g,{children:Object(O.jsx)(m,{children:Object(O.jsx)(a.a,{children:Object(O.jsx)(W,{})})})})};r.a.render(Object(O.jsx)(J,{}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.571ae1b8.chunk.js.map