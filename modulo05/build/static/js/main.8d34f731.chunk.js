(window.webpackJsonpmodulo05=window.webpackJsonpmodulo05||[]).push([[0],{45:function(n,e,t){n.exports=t(72)},72:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(29),i=t.n(o),c=t(37),l=t(6),u=t(13),p=t.n(u),s=t(40),d=t(30),f=t(31),b=t(32),m=t(41),g=t(33),h=t(42),x=t(18),v=t(34),w=t.n(v).a.create({baseURL:"https://api.github.com"}),y=t(8),E=t(9);function j(){var n=Object(y.a)(["\n  background: #7159c1;\n  border: 0;\n  padding: 0 15px;\n  margin-left: 10px;\n  border-radius: 4px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(y.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n\n  input {\n    flex: 1;\n    border: 1px solid #eee;\n    padding: 10px 15 px;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(y.a)(["\n  max-width: 700px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin: 80px auto;\n\n  h1 {\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    svg {\n      margin-right: 10px;\n    }\n  }\n"]);return k=function(){return n},n}var R=E.b.div(k()),S=E.b.form(O()),z=E.b.button.attrs((function(n){return{type:"submit",disabled:n.loading}}))(j()),C=function(n){function e(){var n,t;Object(f.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(r)))).state={newRepo:"",repositories:[],loading:!1},t.handleInputChance=function(n){t.setState({newRepo:n.target.value})},t.handleSubmit=function(){var n=Object(d.a)(p.a.mark((function n(e){var a,r,o,i,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t.setState({loading:!0}),a=t.state,r=a.newRepo,o=a.repositories,n.next=5,w.get("/repos/".concat(r));case 5:i=n.sent,c={name:i.data.full_name},t.setState({repositories:[].concat(Object(s.a)(o),[c]),newRepo:"",loading:!1});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t}return Object(h.a)(e,n),Object(b.a)(e,[{key:"render",value:function(){var n=this.state,e=n.newRepo,t=n.loading;return r.a.createElement(R,null,r.a.createElement("h1",null,r.a.createElement(x.a,null),"Reposit\xf3rios"),r.a.createElement(S,{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Adicionar reposit\xf3rio",value:e,onChange:this.handleInputChance}),r.a.createElement(z,{loading:t},r.a.createElement(x.b,{color:"#fff",size:14}))))}}]),e}(a.Component);function A(){return r.a.createElement("h1",null,"Repository")}function I(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:C}),r.a.createElement(l.a,{path:"/repository",component:A})))}function J(){var n=Object(y.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    min-height: 100%;\n  }\n\n  body {\n    background: #7159c1;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body, input, button {\n    color: #222;\n    font-size: 14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return J=function(){return n},n}var B=Object(E.a)(J());var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(B,null))};i.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8d34f731.chunk.js.map