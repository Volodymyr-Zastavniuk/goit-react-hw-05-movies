"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[833],{833:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var t=r(861),i=r(439),s=r(757),c=r.n(s),a=r(87),o=r(689),u=r(692),l=r(791),d=r(424),h=r(184);function v(e){return(null===e||void 0===e?void 0:e.length)>0?e.map((function(e){return e.name})).join(", "):"Not specified"}function p(){var e,n,r,s,p=(0,l.useState)({}),f=(0,i.Z)(p,2),m=f[0],x=f[1],j=(0,o.UO)().movieId,w=(0,o.TH)();if((0,l.useEffect)((function(){function e(){return(e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.r(d.m.searchByID(j));case 3:n=e.sent,x(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]),0!==Object.keys(m).length){var g=m.title,k=m.overview,b=m.vote_average,y=m.poster_path,_=m.release_date,U=m.genres;return(0,h.jsxs)("section",{children:[(0,h.jsxs)(a.rU,{to:null!==(e=null===(n=w.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",className:"movie-link",children:[(0,h.jsx)(u.YiX,{}),"Go back"]}),(0,h.jsxs)("div",{className:"movie-wrapper ",children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(y),alt:"movie poster",width:"250px",height:"auto"})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h1",{children:[g," ","("+(null===_||void 0===_?void 0:_.slice(0,4))+")"]}),(0,h.jsxs)("p",{children:["User score: ",Math.round(10*b),"%"]}),(0,h.jsx)("p",{children:(0,h.jsx)("b",{children:"Overview"})}),(0,h.jsxs)("p",{children:[" ",k]}),(0,h.jsx)("p",{children:(0,h.jsx)("b",{children:"Genres"})}),(0,h.jsx)("p",{children:v(U)})]})]}),(0,h.jsxs)("div",{className:"movie-info",children:[(0,h.jsx)("h2",{children:"Additional info"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(a.rU,{to:"cast",state:{from:null===(r=w.state)||void 0===r?void 0:r.from},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(a.rU,{to:"reviews",state:{from:null===(s=w.state)||void 0===s?void 0:s.from},children:"Review"})})]})]}),(0,h.jsx)(l.Suspense,{children:(0,h.jsx)(o.j3,{})})]})}}},424:function(e,n,r){r.d(n,{m:function(){return a},r:function(){return o}});var t=r(861),i=r(757),s=r.n(i),c=r(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a={trending:"trending/movie/day",searchByName:"search/movie",searchByID:function(e){return"/movie/".concat(e)},searchCast:function(e){return"/movie/".concat(e,"/credits")},searchReviews:function(e){return"/movie/".concat(e,"/reviews")}},o=function(){var e=(0,t.Z)(s().mark((function e(n,r){var t,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r?"&query=".concat(r,"&page=1"):"",e.next=3,(0,c.Z)("".concat(n,"?api_key=").concat("c56bd7e53d7ca9a4e158096c2a9f2678").concat(t));case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=833.ce578678.chunk.js.map