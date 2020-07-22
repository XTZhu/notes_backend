(this.webpackJsonpopenstack=this.webpackJsonpopenstack||[]).push([[0],{15:function(t,e,n){t.exports=n(40)},20:function(t,e,n){},22:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),i=(n(20),n(21),n(3)),l=n(2),u=(n(22),function(t){var e=t.note,n=t.toggleImportance,a=t.style,r=e.important?"make not important":"make important";return o.a.createElement("li",{style:Object(i.a)({},a),className:"d-flex justify-content-between mt-1"},e.content,o.a.createElement("button",{style:{fontSize:10},className:"btn-sm btn-primary",onClick:n},r))}),m=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},s=n(4),f=n.n(s),p="http://localhost:3001/api/notes",d=function(){var t={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return f.a.get(p).then((function(e){return e.data.concat(t)}))},b=function(t){return f.a.post(p,t).then((function(t){return t.data}))},v=function(t,e){return f.a.put("".concat(p,"/").concat(t),e).then((function(t){return t.data}))},h=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:14,textAlign:"center"}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020 & zwz"))},g=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)("a new note..."),s=Object(l.a)(c,2),f=s[0],p=s[1],g=Object(a.useState)(!0),E=Object(l.a)(g,2),y=E[0],k=E[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),O=j[0],S=j[1];Object(a.useEffect)((function(){d().then((function(t){r(t)}))}),[]);var N=y?n:n.filter((function(t){return t.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"notes"),O&&O.length>0&&o.a.createElement(m,{message:O}),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return k(!y)}},"show ",y?"important":"all")),o.a.createElement("ul",null,N.map((function(t){return o.a.createElement(u,{key:t.id,style:{background:t.important?"#c3707040":"#54ab5440"},note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),a=Object(i.a)({},e,{important:!e.important});v(t,a).then((function(e){r(n.map((function(n){return n.id!==t?n:e})))})).catch((function(t){S("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){S(null)}),5e3)}))}(t.id)}})})),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log("button clicked",t.target);var e={content:f,date:(new Date).toISOString(),important:Math.random()<.5};b(e).then((function(t){r(n.concat(t)),p("")}))}},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"input m-t-5",value:f,onChange:function(t){console.log(t.target.value),p(t.target.value)}})),o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"save"))),o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b0d7dd84.chunk.js.map