(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{22:function(e,t,a){e.exports=a(64)},27:function(e,t,a){},45:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=(a(27),a(4)),l=a.n(i),s=a(5),u=a(3),m=a(17),v=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),d=(a(45),a(18)),f=a(21),h=a.n(f);var p=function(e){var t=e.title,a=e.fetchUrl,c=e.isLargeRow,o=Object(n.useState)([]),i=Object(u.a)(o,2),m=i[0],f=i[1],p=Object(n.useState)(""),g=Object(u.a)(p,2),b=g[0],E=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(a);case 2:return t=e.sent,f(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),console.table(m),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row_posters"},m.map((function(e){return r.a.createElement("img",{key:e.id,onClick:function(){return function(e){b?E(""):h()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);E(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name,className:"row_poster ".concat(c&&"row_posterLarge")})}))),b&&r.a.createElement(d.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g="15f560bb39dd065406e43b1089d6fb30",b={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};a(61),a(62);var E=function(){var e,t,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(b.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://images.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center center"}}," ",r.a.createElement("div",{className:"banner_contents"},r.a.createElement("h1",{className:"banner_title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),r.a.createElement("div",{className:"banner_buttons"},r.a.createElement("button",{className:"banner_button"},"Play"),r.a.createElement("button",{className:"banner_button"},"My List")),r.a.createElement("h1",{className:"banner_des"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),r.a.createElement("div",{className:"banner--fadebottom"}))};a(63);var _=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav ".concat(a&&"nav_black")},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix_logo",className:"nav_logo"})),r.a.createElement("div",{className:"nav_avatar"},r.a.createElement("p",null,"Priya Bansal")))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null),r.a.createElement(E,null),r.a.createElement(p,{isLargeRow:!0,title:"NETFLIX ORIGINALS",fetchUrl:b.fetchNetflixOriginals}),r.a.createElement(p,{title:"Trending Now",fetchUrl:b.fetchTrending}),r.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),r.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),r.a.createElement(p,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),r.a.createElement(p,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),r.a.createElement(p,{title:"Romance Movies",fetchUrl:b.fetchRomanceMovies}),r.a.createElement(p,{title:"Documentaries",fetchUrl:b.fetchDocumentaries}))};o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.abc5aa72.chunk.js.map