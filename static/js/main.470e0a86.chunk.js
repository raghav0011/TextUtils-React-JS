(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:""},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function i(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to lowercase-!","success")}},"Convert to Lowercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Capitalized the word!","success")}},"Capitalized Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){c(""),e.showAlert("Cleared the text","success")}},"Clear Text")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(" ").filter(function(e){return 0!==e.length}).length," words and ",r.length," character"),l.a.createElement("p",null,.008*r.split(" ").filter(function(e){return 0!==e.length}).length," Minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something above to preview here.")))}s.defaultProps={title:"Set title here",aboutText:"Set about here"};var m=function(e){return l.a.createElement("div",{style:{height:"70px"}},e.alert&&l.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," : ",e.alert.msg))};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("light"),u=Object(o.a)(c,2),d=u[0],b=u[1],h=Object(n.useState)(null),g=Object(o.a)(h,2),p=g[0],v=g[1],E=function(e,t){v({msg:e,type:t}),setTimeout(function(){v(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",about:"About",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="rgb(6 35 57)",E("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"))},toggleModeBlue:function(){"light"===d?(b("green"),document.body.style.backgroundColor="green",E("Blue Dark mode has been enabled","success")):(b("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"))}}),l.a.createElement(m,{alert:p}),l.a.createElement("div",{className:"container"},l.a.createElement(i,{heading:"Enter text to analyze below",mode:a,showAlert:E})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.470e0a86.chunk.js.map