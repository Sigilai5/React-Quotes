(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{210:function(e,t,a){"use strict";a.r(t);var n=a(46),o=a(36),r=a(22),l=a(23),u=a(28),c=a(24),s=a(29),i=a(1),m=a.n(i),h=a(7),d=a.n(h);a(51),a(52),a(53),a(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(4),g=(a(76),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleInputChange=function(e){return function(t){var n=t;a.setState(Object(o.a)({},e,n)),console.log(a.state)}},a.addEvent=function(){var e=Object(n.a)(a.state.quotes);e.push({id:e.length?e[e.length-1].id+1:1,your_name:a.state.your_name,quote:a.state.quote,author:a.state.author}),a.setState({quotes:e}),a.setState({your_name:"",quote:"",author:""})},a.handleDelete=function(e){var t=a.state.quotes.filter((function(t){return t.id!=e}));a.setState({quotes:t})},a.toggleModal=function(){a.setState({modal:!a.state.modal})},a.state={modal:!1,quotes:[{id:1,your_name:"Brian Sigilai",quote:"Always the stairs,never the escalator!",author:"Casey Neistat",up:0,down:0},{id:2,your_name:"Alex James",quote:"Give all you got!",author:"Jayme",up:0,down:0}]},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.d,null,m.a.createElement(p.n,null,m.a.createElement(p.c,{md:"3"},m.a.createElement(p.b,{color:"primary",onClick:this.toggleModal},m.a.createElement(p.e,{icon:"magic",className:"mr-1"})," Add Quote")),m.a.createElement(p.c,{md:"9"},m.a.createElement("h3",{className:"text-uppercase my-3"},"Quotes"),this.state.quotes.map((function(t){return m.a.createElement(E,{key:t.id,id:t.id,your_name:t.your_name,quote:t.quote,author:t.author,upvotes:t.up,downvotes:t.down,onDelete:e.handleDelete})}))))),m.a.createElement(p.h,{isOpen:this.state.modal,toggle:this.toggleModal},m.a.createElement(p.k,{className:"text-center",titleClass:"w-100 font-weight-bold",toggle:this.toggleModal},"New Quote"),m.a.createElement(p.i,null,m.a.createElement("form",{className:"mx-3 grey-text"},m.a.createElement(p.g,{name:"your_name",label:"Your Name",icon:"user",hint:"John Doe",group:!0,type:"text",getValue:this.handleInputChange("your_name")}),m.a.createElement(p.g,{name:"quote",label:"Quote",icon:"edit",hint:"Give me Liberty!",group:!0,type:"text",getValue:this.handleInputChange("quote")}),m.a.createElement(p.g,{name:"author",label:"Author (optional)",icon:"user-tie",group:!0,type:"text",getValue:this.handleInputChange("author")}))),m.a.createElement(p.j,{className:"justify-content-center"},m.a.createElement(p.b,{color:"info",onClick:function(){e.toggleModal(),e.addEvent()}},"Add"))))}}]),t}(i.Component)),E=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement("h4",null,this.props.your_name),m.a.createElement("h6",null,this.props.quote),this.props.author&&m.a.createElement(m.a.Fragment,null,m.a.createElement("i",null,this.props.author)),m.a.createElement(p.d,null,m.a.createElement(p.n,null,m.a.createElement(p.c,{xs:"6",className:"text-center"},m.a.createElement(p.b,{color:"primary",outline:!0,rounded:!0},m.a.createElement(p.e,{color:"primary",icon:"thumbs-up"}),this.props.upvotes),m.a.createElement(p.b,{rounded:!0,outline:!0,color:"danger"},m.a.createElement(p.e,{color:"primary",icon:"thumbs-down"}),this.props.downvotes),m.a.createElement(p.b,{rounded:!0,color:"danger",onClick:function(){return e.props.onDelete(e.props.id)}},"Delete")))))}}]),t}(i.Component);d.a.render(m.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e,t,a){e.exports=a(210)},51:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.aecf5d22.chunk.js.map