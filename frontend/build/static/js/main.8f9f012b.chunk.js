(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{162:function(e,t,c){},198:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(27),r=c.n(i),o=c(25),a=(c(162),c(38)),s=(c(163),c(210)),l=c(216),j=c(144),d=c(218),b=c(51),u=c(117),x=c.n(u),O=c(4),h=Object(n.createContext)(),p=Object(n.createContext)(),g=function(e){var t=Object(n.useState)({loading:!0,user:[],error:null,category:2}),c=Object(a.a)(t,2),i=c[0],r=c[1];Object(n.useEffect)((function(){x.a.get("http://127.0.0.1:8000/api/products/").then((function(e){o(e.data)})).catch((function(e){console.log(e)}))}),[]);var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r({loading:!1,user:e,error:null,category:t})};return Object(O.jsx)(p.Provider,{value:[i,r],children:e.children})},m=function(e){var t=Object(n.useState)({category:[],islogin:!0,count:0}),c=Object(a.a)(t,2),i=c[0],r=c[1];Object(n.useEffect)((function(){x.a.get("http://127.0.0.1:8000/api/category").then((function(e){o(e.data)})).catch((function(e){console.log(e)}))}),[]);var o=function(e){r({category:e,islogin:!0,count:0})};return Object(O.jsx)(h.Provider,{value:[i,r],children:e.children})},f=c(118),v=(c(188),function(){var e=Object(n.useContext)(p),t=Object(a.a)(e,1)[0],c=Object(n.useContext)(h),i=Object(a.a)(c,2),r=i[0],o=i[1],u=function(e){f.NotificationManager.success("\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443","Ecommerce");var t=1+parseInt(r.count);o({category:r.category,islogin:!0,count:t})};return t.loading?Object(O.jsx)(s.a,{content:"Loading",active:!0}):Object(O.jsxs)(l.a.Group,{centered:!0,itemsPerRow:4,style:{marginTop:"20px",padding:"20px 30px"},children:[t.category?t.user.map((function(e){return e.catergory===t.category&&Object(O.jsx)(l.a,{image:Object(O.jsx)(j.a,{src:e.image,size:"small"}),header:e.title,description:e.description,extra:Object(O.jsxs)("div",{children:[Object(O.jsxs)(d.a,{id:e,onClick:u,children:[Object(O.jsx)(b.a,{name:"arrow down cart"}),"\u0412 \u041a\u043e\u0440\u0437\u0438\u043d\u0443"]}),Object(O.jsx)(d.a,{color:"teal",children:"".concat(e.price," c\u043e\u043c")})]})},e.id)})):t.user.map((function(e){return Object(O.jsx)(l.a,{image:Object(O.jsx)(j.a,{src:e.image,size:"small"}),header:e.title,description:e.description,extra:Object(O.jsxs)("div",{children:[Object(O.jsxs)(d.a,{id:e,onClick:u,children:[Object(O.jsx)(b.a,{name:"arrow down cart"}),"\u0412 \u041a\u043e\u0440\u0437\u0438\u043d\u0443"]}),Object(O.jsx)(d.a,{color:"teal",children:"".concat(e.price," c\u043e\u043c")})]})},e.id)})),Object(O.jsx)(f.NotificationContainer,{enterTimeout:400,leaveTimeout:10})]})}),y=c(214),C=c(211),I=c(212),w=function(){var e=Object(n.useContext)(p),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useContext)(h),s=Object(a.a)(r,2),l=s[0],j=s[1];return Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{inverted:!0,color:"black",children:Object(O.jsxs)(C.a,{children:[Object(O.jsxs)(y.a.Item,{header:!0,children:[Object(O.jsx)(b.a,{name:"compass"}),"Ecommerce"]}),Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(o.b,{to:"/",onClick:function(e){return i({category:null,loading:c.loading,user:c.user,error:c.error})},children:"\u0412\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"})}),l.islogin&&Object(O.jsx)(I.a,{item:!0,simple:!0,text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",children:Object(O.jsx)(I.a.Menu,{children:l.category.map((function(e){return Object(O.jsx)(I.a.Item,{onClick:function(e){return i({category:parseInt(e.target.id),loading:c.loading,user:c.user,error:c.error})},children:Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(o.b,{id:e.id,to:"/",style:{color:"black"},children:e.name})})},e.id)}))})}),l.islogin?Object(O.jsxs)(y.a.Menu,{position:"right",children:[Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(o.b,{to:"/cart",children:Object(O.jsx)(b.a,{color:"teal",name:"shopping cart",children:Object(O.jsxs)("p",{style:{position:"absolute",color:"green",top:"20px",left:"35px",fontSize:"15px",fontWeight:"800"},children:["  ",0===l.count?null:"+".concat(l.count)]})})})}),Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)(d.a,{onClick:function(e){j({category:l.category,islogin:!1,count:0})},color:"blue",children:"\u0412\u044b\u0439\u0442\u0438"})})})]}):Object(O.jsxs)(y.a.Menu,{position:"right",children:[Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(o.b,{to:"/signin",children:Object(O.jsx)(d.a,{primary:!0,children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(O.jsx)(y.a.Item,{children:Object(O.jsx)(o.b,{to:"/signup",children:Object(O.jsx)(d.a,{children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})})]})]})})})},k=c(219),P=c(220),z=c(213),A=c(221),E=c(217),S=function(e){return Object(O.jsx)(k.a,{textAlign:"center",style:{height:"85vh"},verticalAlign:"middle",children:Object(O.jsxs)(k.a.Column,{style:{maxWidth:450},children:[Object(O.jsxs)(P.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(O.jsx)(b.a,{name:"compass"}),"Log-in to your account"]}),Object(O.jsx)(z.a,{size:"large",children:Object(O.jsxs)(A.a,{stacked:!0,children:[Object(O.jsx)(z.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",autoComplete:"off"}),Object(O.jsx)(z.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",autoComplete:"new-password"}),Object(O.jsx)(d.a,{color:"teal",fluid:!0,size:"large",children:"Login"})]})}),Object(O.jsxs)(E.a,{children:["New to us? ",Object(O.jsx)(o.b,{to:"/signup",children:"Sign Up"})]})]})})},M=function(){return Object(O.jsx)(k.a,{textAlign:"center",style:{height:"85vh"},verticalAlign:"middle",children:Object(O.jsxs)(k.a.Column,{style:{maxWidth:450},children:[Object(O.jsxs)(P.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(O.jsx)(b.a,{name:"compass"}),"Create a new account"]}),Object(O.jsx)(z.a,{size:"large",children:Object(O.jsxs)(A.a,{stacked:!0,children:[Object(O.jsx)(z.a.Input,{fluid:!0,icon:"address card",iconPosition:"left",placeholder:"Firstname",autoComplete:"off"}),Object(O.jsx)(z.a.Input,{fluid:!0,icon:"user md",iconPosition:"left",placeholder:"Lastname",autoComplete:"off"}),Object(O.jsx)(z.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username",autoComplete:"off"}),Object(O.jsx)(z.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",autoComplete:"new-password"}),Object(O.jsx)(d.a,{color:"teal",fluid:!0,size:"large",children:"Signup"})]})}),Object(O.jsxs)(E.a,{children:["Already have account? ",Object(O.jsx)(o.b,{to:"/signin",children:"Sign-in"})]})]})})},L=c(10),N=c(215),T=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(A.a,{inverted:!0,style:{margin:"3em 0em 0em",padding:"2em 0em 3em 0em"},children:Object(O.jsxs)(C.a,{textAlign:"center",children:[Object(O.jsx)(b.a,{name:"compass"}),Object(O.jsxs)(N.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small",children:[Object(O.jsx)(N.a.Item,{children:"My first ecommerce website"}),Object(O.jsx)(N.a.Item,{children:"2021"})]})]})})})},W=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{}),Object(O.jsx)(L.a,{path:"/signin",children:Object(O.jsx)(S,{})}),Object(O.jsx)(L.a,{path:"/signup",children:Object(O.jsx)(M,{})}),Object(O.jsx)(L.a,{path:"/",exact:!0,children:Object(O.jsx)(v,{})}),Object(O.jsx)(T,{})]})},J=function(){return Object(O.jsx)(m,{children:Object(O.jsx)(g,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(W,{})})})})};r.a.render(Object(O.jsx)(J,{}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.8f9f012b.chunk.js.map