(this["webpackJsonpproject-react-app"]=this["webpackJsonpproject-react-app"]||[]).push([[0],{211:function(e,t,c){},212:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(43),s=c.n(a),r=(c(95),c(21)),i=c(7),o=c(12),j=c(8),l=c(4),b=c(1);var d=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],d=r[1],u=Object(n.useState)([]),h=Object(l.a)(u,2),O=h[0],p=h[1];Object(n.useEffect)((function(){fetch("https://covid-api.mmediagroup.fr/v1/cases?country="+c).then((function(e){return e.json()})).then((function(e){d(e.All.confirmed),console.log(e)})).catch((function(e){console.log(e)}))}),[c]);var x=i,f=function(e){var t=O.map((function(t){return c.id===e?Object(o.a)(Object(o.a)({},c),{},{completed:!c.completed}):c}));p(t)};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c&&(p([].concat(Object(j.a)(O),[{id:O.length+1,text:c,completed:!1}])),a(""))},children:[Object(b.jsx)("label",{htmlFor:"input",children:"Collect Item"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",placeholder:"Type something",value:c,name:"text",className:"search-input",onChange:function(e){a(e.target.value)}}),Object(b.jsx)("button",{className:"searchBar-button",children:"Add Item"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:O.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsxs)("span",{className:e.completed?"item-unwanted":void 0,onClick:function(){return f(e.id)},children:[e.text," : ",x," "]}),Object(b.jsxs)("span",{className:"delete-btn",onClick:function(){return function(e){var t=O.filter((function(t){return t.id!==e}));p(t)}(e.id)},children:[" ","\u2715"]})]},e.id)}))})})]})},u=c(90);var h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(""),d=Object(l.a)(j,2),h=d[0],O=d[1],p=Object(n.useState)(""),x=Object(l.a)(p,2),f=x[0],m=x[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),y=g[0],S=g[1],C=Object(n.useState)(""),N=Object(l.a)(C,2),A=N[0],w=N[1];Object(n.useEffect)((function(){fetch("https://covid-api.mmediagroup.fr/v1/vaccines?country="+c).then((function(e){return e.json()})).then((function(e){o(e.All.population),O(e.All.administered),m(e.All.people_vaccinated),S(e.All.people_partially_vaccinated),w(e.All.updated),console.log(e)})).catch((function(e){console.log(e)}))}),[c]);var I={labels:["population","administered","people vaccinated","people partially vaccinated"],datasets:[{label:"status of vaccines Administration ",data:[i,h,f,y],backgroundColor:["rgb(36, 135, 168)","rgb(226, 115, 0)","rgb(76, 175, 80)","rgb(255, 204, 0)"],hoverOffset:4}]};return Object(b.jsxs)("form",{className:"searchBar",children:[Object(b.jsx)("input",{type:"text",placeholder:"Type something",value:c,name:"text",className:"search-input",onChange:function(e){a(e.target.value)}}),Object(b.jsx)("button",{className:"searchBar-button",children:"Search"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"display-result",children:Object(b.jsxs)("div",{className:"general",children:[Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("label",{children:"Population"}),Object(b.jsx)("h3",{children:i})]}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("label",{children:"partially vaccinated"}),Object(b.jsx)("h2",{children:y})]}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("label",{children:"Updated"}),Object(b.jsx)("p",{style:{lineHeight:"20px",fontWeight:"bold"},children:A})]})]})}),Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{data:I,width:300,height:400,options:{maintainAspectRatio:!1}})})]})},O=c(2),p=c(3),x=c(6),f=c(5),m=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(p.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"About Page"}),Object(b.jsx)("p",{children:"This App is developed to check current Covid-19 situation"})]})}}]),c}(n.Component),v=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(p.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(r.b,{to:"/AddSearch",children:"AddSearch"}),Object(b.jsx)(r.b,{to:"/About",children:"About"}),Object(b.jsx)(r.b,{to:"/Vaccines",children:"Vaccines"}),Object(b.jsx)(r.b,{to:"/Cases",children:" Cases"}),Object(b.jsx)(r.b,{to:"/Login",children:" Login"}),Object(b.jsx)(r.b,{to:"/Definition",children:" Definition"})]})}}]),c}(n.Component),g=c(62),y=c.n(g),S=c(89),C=c(214),N=c(216),A=c(217);c(210),c(211);var w=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(""),d=Object(l.a)(j,2),u=d[0],h=d[1],O=Object(n.useState)(""),p=Object(l.a)(O,2),x=p[0],f=p[1],m=Object(n.useState)(""),v=Object(l.a)(m,2),g=v[0],w=v[1],I=Object(n.useState)(""),k=Object(l.a)(I,2),D=k[0],T=k[1],V=Object(n.useState)({lat:34.80746,lng:-40.4796}),z=Object(l.a)(V,2),B=z[0],F=z[1],P=Object(n.useState)(3),E=Object(l.a)(P,2),L=E[0],R=E[1],J=Object(n.useState)(null),U=Object(l.a)(J,2),_=U[0],M=U[1],q=Object(n.useState)([]),H=Object(l.a)(q,2),W=H[0],G=H[1],K=Object(n.useState)(3),Q=Object(l.a)(K,2),X=Q[0],Y=Q[1];return Object(n.useEffect)((function(){fetch("https://corona.lmao.ninja/v3/covid-19/countries/"+c).then((function(e){return e.json()})).then((function(e){o(e.cases),h(e.todayCases),f(e.recovered),T(e.deaths),w(e.active),F([e.countryInfo.lat,e.countryInfo.long]),R(4)})).catch((function(e){console.log(e)}))}),[c]),Object(n.useEffect)((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){G(e),Y(4),console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),_&&_.setView(B),Object(b.jsxs)("form",{className:"searchBar",children:[Object(b.jsx)("input",{type:"text",placeholder:"Type something",value:c,name:"text",className:"search-input",onChange:function(e){a(e.target.value)}}),Object(b.jsx)("button",{className:"searchBar-button",children:"Search"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"display-result",children:Object(b.jsxs)("div",{className:"general",children:[Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("label",{children:"Confirmed"}),Object(b.jsx)("h2",{children:i}),Object(b.jsx)("p",{style:{fontSize:"12px"},children:"today confirm:"}),Object(b.jsx)("p",{style:{fontSize:"12px"},children:u})]}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("label",{children:"Recovered:"}),Object(b.jsx)("h2",{children:x}),Object(b.jsx)("p",{style:{fontSize:"12px"},children:"active:"}),Object(b.jsx)("p",{style:{fontSize:"12px"},children:g})]}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("label",{children:"Deaths:"}),Object(b.jsx)("h2",{children:D})]})]})}),Object(b.jsx)("div",{className:"map",children:Object(b.jsxs)(C.a,{center:B,zoom:L,whenCreated:M,children:[Object(b.jsx)(N.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),W.map((function(e){return Object(b.jsx)(A.a,{center:[e.countryInfo.lat,e.countryInfo.long],zoom:X,color:"#CC1034",fillColor:"#CC1034",fillOpacity:.4,radius:300*Math.sqrt(e.cases)})}))]})})]})};var I=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){return fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:c,password:i})}).then((function(e){return e.json()})).then((function(e){a(e.users.username),o(e.users.password),console.log(e)})).catch((function(e){console.log(e)}))}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"loginContainer",children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{name:"username",placeholder:"User Name",value:c,onChange:function(e){a(e.target.value)},className:"form-control"}),"  ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:i,onChange:function(e){o(e.target.value)},className:"form-control"}),"  ",Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-primary",children:"Submit"}),Object(b.jsxs)("div",{className:"username",children:[Object(b.jsx)("label",{children:"User Name"}),Object(b.jsx)("p",{children:c})]}),Object(b.jsxs)("div",{className:"password",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("p",{children:i})]})]})]})})};var k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Covid-19 explained"}),Object(b.jsx)("p",{children:"COVID-19\u202fis\u202fa disease\u202fcaused by a new strain of coronavirus. \u2018CO\u2019 stands for corona, \u2018VI\u2019 for virus, and \u2018D\u2019 for disease. Formerly, this disease was referred to as \u20182019 novel coronavirus\u2019 or \u20182019-nCoV.\u2019 The COVID-19 virus is a new virus linked to the same family of viruses as Severe Acute Respiratory Syndrome (SARS) and some types of common cold."})]})};var D=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)("h1",{children:"Search Covid Cases"}),Object(b.jsx)(v,{}),Object(b.jsx)(i.a,{exact:!0,path:"/AddSearch",component:d}),Object(b.jsx)(i.a,{exact:!0,path:"/About",component:m}),Object(b.jsx)(i.a,{exact:!0,path:"/Vaccines",component:h}),Object(b.jsx)(i.a,{exact:!0,path:"/Cases",component:w}),Object(b.jsx)(i.a,{exact:!0,path:"/Login",component:I}),Object(b.jsx)(i.a,{exact:!0,path:"/Definition",component:k})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,218)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};s.a.render(Object(b.jsx)(D,{}),document.getElementById("root")),T()},95:function(e,t,c){}},[[212,1,2]]]);
//# sourceMappingURL=main.b5ae700c.chunk.js.map