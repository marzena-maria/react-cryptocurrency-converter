(this["webpackJsonpreact-crypto"]=this["webpackJsonpreact-crypto"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),l=n(1),u=(n(9),n(10),function(e){return c.a.createElement("div",{className:"convert-button"},c.a.createElement("button",{className:"button",onClick:function(t){e.onClick(t)}},"CONVERT"))}),m=(n(11),function(e){return c.a.createElement("div",{className:"amount-input"},c.a.createElement("label",{htmlFor:"amount"},"Amount to convert:"),c.a.createElement("br",null),c.a.createElement("input",{onChange:function(t){e.onChange(t.target.value)},className:"input-field",type:"number",id:"amount"}))}),i=(n(12),function(e){return c.a.createElement("div",{className:"from-currency"},c.a.createElement("span",null,"From:"),c.a.createElement("br",null),c.a.createElement("input",{onChange:function(t){e.onChange(t.target.value)},type:"radio",name:"from",id:"BTC",value:"BTC"}),c.a.createElement("label",{htmlFor:"BTC"},"BTC"),c.a.createElement("input",{onChange:function(t){e.onChange(t.target.value)},type:"radio",name:"from",id:"ETH",value:"ETH"}),c.a.createElement("label",{htmlFor:"ETH"},"ETH"),c.a.createElement("input",{onChange:function(t){e.onChange(t.target.value)},type:"radio",name:"from",id:"LTC",value:"LTC"}),c.a.createElement("label",{htmlFor:"LTC"},"LTC"))}),s=(n(13),function(e){return c.a.createElement("div",{className:"to-currency"},c.a.createElement("span",null,"To:"),c.a.createElement("input",{onChange:function(t){e.onChange(t.target.value)},type:"radio",name:"to",id:"EUR",value:"EUR"}),c.a.createElement("label",{htmlFor:"EUR"},"EUR"),c.a.createElement("input",{onChange:function(t){e.onChange(t.target.value)},type:"radio",name:"to",id:"USD",value:"USD"}),c.a.createElement("label",{htmlFor:"USD"},"USD"))});var E=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),E=Object(l.a)(r,2),f=E[0],p=E[1],C=Object(a.useState)(""),h=Object(l.a)(C,2),b=h[0],g=h[1],d=Object(a.useState)(""),v=Object(l.a)(d,2),y=v[0],T=v[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),S=O[0],U=O[1];return Object(a.useEffect)((function(){fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR,GBPapi_key=85d837f2fd4349e1bbefa23d43a8af9a25d5df8889044eeeb7753177f0b34140").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),console.log(n),console.log(f),console.log(b),console.log(y),c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Cryptocurrency Converter"),c.a.createElement(i,{onChange:function(e){return g(e)}}),c.a.createElement(m,{onChange:function(e){return p(e)}}),c.a.createElement(s,{onChange:function(e){return T(e)}}),c.a.createElement(u,{onClick:function(){var e=n[b][y];return console.log(e),U(f*e)}}),c.a.createElement("p",null,"Result: ",Math.ceil(S)))};r.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.154fc981.chunk.js.map