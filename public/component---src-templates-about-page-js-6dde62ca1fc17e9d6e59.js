(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/9aa":function(e,t,n){var r=n("NykK"),o=n("ExA7"),a="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&r(e)==a}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){n("Ll4R");var r=n("dVn5"),o=n("fo6e"),a=n("dt0z"),u=n("9NmV");e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?o(e)?u(e):r(e):e.match(t)||[]}},"9NmV":function(e,t,n){n("Ll4R"),n("klQ5");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",a="\\d+",u="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+c+"|"+i+")",p="(?:"+s+"|"+i+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,l].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),v="(?:"+[u,f,l].join("|")+")"+m,b=RegExp([s+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,s,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,v].join("|"),"g");e.exports=function(e){return e.match(b)||[]}},AP2z:function(e,t,n){n("q8oJ"),n("C9fy"),n("8npG");var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(i){}var o=u.call(e);return r&&(t?e[c]=n:delete e[c]),o}},CD9B:function(e,t,n){e.exports=n.p+"static/about-0cb8071e28dcef6dafaddce541275a6a.jpg"},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t,n){n("q8oJ"),n("C9fy"),n("8npG");var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},N1om:function(e,t,n){var r=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},NykK:function(e,t,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),u="[object Null]",c="[object Undefined]",i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:u:i&&i in Object(e)?o(e):a(e)}},TKrE:function(e,t,n){n("sC2a"),n("klQ5");var r=n("qRkn"),o=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(a,r).replace(u,"")}},V9UY:function(e,t,n){"use strict";n("y7hu");var r=n("q1tI"),o=n.n(r),a=(n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sc67"),n("4DPX"),n("E5k/"),n("17x9")),u=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.color,n=e.size,r=i(e,["color","size"]);return o.a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),o.a.createElement("polyline",{points:"6 9 12 15 18 9"}))};f.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},f.defaultProps={color:"currentColor",size:"24"};var l=f,s=n("N1om"),d=n.n(s);n("R69D");n.d(t,"a",(function(){return p}));var p=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){return e.target.classList.toggle("active")},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props,n=t.items,r=t.className;return o.a.createElement("div",{className:"Accordion "+r},!!n&&n.map((function(t,n){return o.a.createElement("div",{className:"Accordion--item ",key:"accordion-item-"+d()(t.title)+"-"+n,onClick:e.handleClick},o.a.createElement("h2",{className:"flex"},o.a.createElement("span",null,t.title),o.a.createElement(l,null)),o.a.createElement("div",{className:"description"},t.description," ",o.a.createElement("br",null),t.link&&o.a.createElement("div",{href:t.link,className:"button"},t.linkTitle)))})))},r}(o.a.Component);p.defaultProps={items:[],className:""}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Z0cm:function(e,t,n){n("MIFh");var r=Array.isArray;e.exports=r},asDA:function(e,t){e.exports=function(e,t,n,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}},b3Yn:function(e,t,n){"use strict";n.r(t),n.d(t,"AboutPageTemplate",(function(){return s})),n.d(t,"pageQuery",(function(){return d}));n("E5k/");var r=n("q1tI"),o=n.n(r),a=n("As+U"),u=n("KE4F"),c=n("7oih"),i=n("V9UY"),f=n("CD9B"),l=n.n(f),s=function(e){var t=e.title,n=e.subtitle,r=(e.featuredImage,e.section1),c=e.section2,f=e.accordion;return o.a.createElement("main",null,o.a.createElement(a.a,{title:t,subtitle:n,backgroundImage:l.a}),o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"container"},o.a.createElement(u.a,{source:r}))),o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"container"},o.a.createElement(i.a,{items:f}))),o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"container"},o.a.createElement(u.a,{source:c}))))};t.default=function(e){var t=e.data.page;return o.a.createElement(c.a,{meta:t.frontmatter.meta||!1,title:t.frontmatter.title||!1},o.a.createElement(s,Object.assign({},t,t.frontmatter,{body:t.html})))};var d="993121753"},dVn5:function(e,t,n){n("Ll4R");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},dt0z:function(e,t,n){var r=n("zoYe");e.exports=function(e){return null==e?"":r(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},qRkn:function(e,t,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},sgoq:function(e,t,n){n("sC2a"),n("klQ5");var r=n("asDA"),o=n("TKrE"),a=n("6nK8"),u=RegExp("['’]","g");e.exports=function(e){return function(t){return r(a(o(t).replace(u,"")),e,"")}}},zoYe:function(e,t,n){n("q8oJ"),n("C9fy"),n("8npG");var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),u=n("/9aa"),c=1/0,i=r?r.prototype:void 0,f=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(u(t))return f?f.call(t):"";var n=t+"";return"0"==n&&1/t==-c?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-about-page-js-6dde62ca1fc17e9d6e59.js.map