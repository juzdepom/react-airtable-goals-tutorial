(this["webpackJsonpreact-airtable-goals-tutorial"]=this["webpackJsonpreact-airtable-goals-tutorial"]||[]).push([[0],{102:function(n,e){},103:function(n,e){},119:function(n,e,t){"use strict";t.r(e);var i,a,r,c,s,o=t(0),d=t.n(o),l=t(36),b=t.n(l),f=t(21),j=t(2),p=t(37),u=t.n(p),h=t(3),g=h.b.div(i||(i=Object(j.a)(["\n  padding: 1rem;\n  margin-bottom: 2rem;\n  h2 {\n    display: inline;\n    font-size: 3rem;\n    padding: 1rem 5rem;\n  }\n  h3 {\n    font-size: 1.5rem;\n  }\n  h3:last-of-type {\n    margin-top: 1rem;\n  }\n"]))),m=h.b.label(a||(a=Object(j.a)(['\n  display: block;\n  position: relative;\n  user-select: none;\n  input {\n    display: none;\n    &:checked ~ span {\n      background: #754dff;\n      &::after {\n        display: block;\n      }\n    }\n  }\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 3rem;\n    width: 3rem;\n    background: #dacfff;\n    transition: background 0.3s ease;\n    &::after {\n      content: "";\n      position: absolute;\n      left: 1rem;\n      width: 0.8rem;\n      height: 2rem;\n      border: solid white;\n      border-width: 0 4px 4px 0;\n      transform: rotate(45deg);\n      display: none;\n    }\n  }\n']))),O=h.b.div(r||(r=Object(j.a)(["\n  padding: 2rem;\n  background: #dacfff;\n"]))),x=t(1),y=function(n){var e=n.goal,t=n.updates;return Object(x.jsxs)(g,{children:[Object(x.jsxs)(m,{children:[" ",Object(x.jsx)("input",{type:"checkbox",defaultChecked:e.fields.complete,disabled:!0}),Object(x.jsx)("span",{})]}),Object(x.jsx)("h2",{children:e.fields.title}),Object(x.jsxs)(O,{children:[Object(x.jsx)("h3",{children:"DETAILS"}),Object(x.jsx)("p",{children:e.fields.details}),Object(x.jsx)("h3",{children:"UPDATES"}),t.map((function(n,e){return Object(x.jsx)("p",{children:n.fields.update},e)}))]})]})},k=Object(h.a)(c||(c=Object(j.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    background: #eee;\n  }\n  #root {\n    width: 80%;\n    margin: 0 auto;\n    font-family: "Do Hyeon", sans-serif;\n    color: #272727;\n  }\n']))),w=new u.a({apiKey:"key9YOWPfufxQsX9x"}).base("appqfpGEd5sP5aLXx"),v=h.b.h1(s||(s=Object(j.a)(["\n  text-align: center;\n  font-size: 4rem;\n  margin: 1rem 0;\n"])));var E=function(){var n=Object(o.useState)([]),e=Object(f.a)(n,2),t=e[0],i=e[1],a=Object(o.useState)([]),r=Object(f.a)(a,2),c=r[0],s=r[1];return Object(o.useEffect)((function(){w("goals").select({view:"Grid view"}).eachPage((function(n,e){i(n),e()})),w("updates").select({view:"Grid view"}).eachPage((function(n,e){s(n),e()}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsx)(v,{children:"My Goals"}),t.map((function(n){return Object(x.jsx)(y,{goal:n,updates:c.filter((function(e){return e.fields.goalid[0]===n.id}))},n.id)}))]})};b.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.8feb9e8c.chunk.js.map