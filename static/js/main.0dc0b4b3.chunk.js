(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(5),i=n(6),u=n(8),m=n(7),l=n(9),d=n(1),h=n(2);function g(){var e=Object(h.a)(["\n  html {\n    font-size: 16px;\n  }\n\n  body {\n    font-family: Lato, system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue;\n    color: #3d4852;\n    font-weight: 300;\n    font-size: 1rem;\n  }\n"]);return g=function(){return e},e}var f={teamDimensions:32,matchHeight:40,matchWidth:140,matchPadding:15,bucketPadding:15},k=Object(d.b)(g()),b=n(3);function p(){var e=Object(h.a)(["\n  flex: 1;\n  text-align: center;\n"]);return p=function(){return e},e}function v(){var e=Object(h.a)(["\n  width: ","px;\n  max-height: ","px;\n"]);return v=function(){return e},e}function B(){var e=Object(h.a)(["\n  display: flex;\n  width: ","px;\n  height: ","px;\n  align-items: center;\n"]);return B=function(){return e},e}var w=d.c.div(B(),function(e){return e.theme.matchWidth},function(e){return e.theme.matchHeight}),x=d.c.div(v(),function(e){return e.theme.teamDimensions},function(e){return e.theme.teamDimensions}),y=d.c.div(p());function O(){var e=Object(h.a)(["\n  display: inline-block;\n  background-color: #f8fafc;\n  padding: ","px;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n  border-radius: 0.25rem;\n  border: 1px solid #dae1e7;\n\n  & ",":not(:last-child) {\n    padding-bottom: ","px;\n  }\n"]);return O=function(){return e},e}var j=d.c.div(O(),function(e){return e.theme.bucketPadding},w,function(e){return e.theme.matchPadding});function E(){var e=Object(h.a)(["\n  stroke-width: 6px;\n  stroke: #20504f;\n"]);return E=function(){return e},e}function I(){var e=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -10;\n"]);return I=function(){return e},e}function C(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 80px;\n\n  &:first-child {\n    margin-left: 40px;\n  }\n\n  & ",":not(:last-child) {\n    margin-bottom: 40px;\n  }\n"]);return C=function(){return e},e}function N(){var e=Object(h.a)(["\n  display: flex;\n"]);return N=function(){return e},e}var U=d.c.div(N()),R=d.c.div(C(),j),D=d.c.div(I()),W=d.c.line(E());function z(){var e=Object(h.a)(["\n  height: ","px;\n  width: ","px;\n"]);return z=function(){return e},e}var P=d.c.img(z(),function(e){return e.theme.teamDimensions},function(e){return e.theme.teamDimensions}),S=function(e){var t=e.logoUrl,n=e.teamName;return r.a.createElement(P,{src:t,alt:n})},q=function(e){return r.a.createElement(x,null,r.a.createElement(S,{logoUrl:e.logoUrl,teamName:e.teamName}))},F=function(e){var t=e.team1,n=e.team2,a=e.score;return r.a.createElement(w,null,q(t),r.a.createElement(y,null,a||"vs."),q(n))},L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.matches;return r.a.createElement(j,null,e.map(function(e){return function(e){return r.a.createElement(F,{key:e.team1.teamName+e.score+e.team2.teamName,team1:e.team1,team2:e.team2,score:e.score})}(e)}))}}]),t}(r.a.Component),H={teams:{nip:{logoUrl:"https://static.hltv.org/images/team/logo/4411",teamName:"NiP"},navi:{logoUrl:"https://static.hltv.org/images/team/logo/4608",teamName:"Natus Vincere"},tyloo:{logoUrl:"https://static.hltv.org/images/team/logo/4863",teamName:"TYLOO"},faze:{logoUrl:"https://static.hltv.org/images/team/logo/6667",teamName:"FaZe"},vega:{logoUrl:"https://static.hltv.org/images/team/logo/6094",teamName:"Vega Squadron"},big:{logoUrl:"https://static.hltv.org/images/team/logo/7532",teamName:"BIG"},hellraisers:{logoUrl:"https://static.hltv.org/images/team/logo/5310",teamName:"Hell Raisers"},mousesports:{logoUrl:"https://static.hltv.org/images/team/logo/4494",teamName:"mousesports"},astralis:{logoUrl:"https://static.hltv.org/images/team/logo/6665",teamName:"Astralis"},liquid:{logoUrl:"https://static.hltv.org/images/team/logo/5973",teamName:"Liquid"},mibr:{logoUrl:"https://static.hltv.org/images/team/logo/9215",teamName:"mibr"},complexity:{logoUrl:"https://static.hltv.org/images/team/logo/5005",teamName:"compLexity"},winstrike:{logoUrl:"https://static.hltv.org/images/team/logo/4494",teamName:"Winstrike"},cloud9:{logoUrl:"https://static.hltv.org/images/team/logo/5752",teamName:"Cloud9"},fnatic:{logoUrl:"https://static.hltv.org/images/team/logo/4991",teamName:"fnatic"},g2:{logoUrl:"https://static.hltv.org/images/team/logo/5995",teamName:"G2"}},rounds:{1:{buckets:{1:{matches:[{team1:"g2",team2:"hellraisers",score:"22:20"},{team1:"winstrike",team2:"liquid",score:"7:16"},{team1:"faze",team2:"big",score:"5:16"},{team1:"fnatic",team2:"complexity",score:"4:16"},{team1:"mibr",team2:"tyloo",score:"13:16"},{team1:"mousesports",team2:"nip",score:"12:16"},{team1:"navi",team2:"astralis",score:"14:16"},{team1:"cloud9",team2:"vega",score:"4:16"}]}}},2:{buckets:{1:{matches:[{team1:"big",team2:"tyloo",score:"16:7"},{team1:"vega",team2:"astralis",score:"4:16"},{team1:"complexity",team2:"g2",score:"16:11"},{team1:"nip",team2:"liquid",score:"10:16"}]},2:{matches:[{team1:"winstrike",team2:"fnatic",score:"7:16"},{team1:"cloud9",team2:"hellraisers",score:"16:19"},{team1:"navi",team2:"faze",score:"16:12"},{team1:"mousesports",team2:"mibr",score:"6:16"}]}}},3:{buckets:{1:{matches:[{team1:"complexity",team2:"big",score:"16:8"},{team1:"astralis",team2:"liquid",score:"15:19"}]},2:{matches:[{team1:"g2",team2:"mibr",score:"4:16"},{team1:"tyloo",team2:"hellraisers",score:"10:16"},{team1:"navi",team2:"nip",score:"16:6"},{team1:"vega",team2:"fnatic",score:"14:16"}]},3:{matches:[{team1:"faze",team2:"mousesports",score:"16:8"},{team1:"winstrike",team2:"cloud9",score:"16:19"}]}}},4:{},5:{}}},A=function(e){return e.map(function(e){return{team1:H.teams[(t=e).team1],team2:H.teams[t.team2],score:t.score};var t})},M=function(e,t){var n=c.a.findDOMNode(e.current);if(n&&e.current){var a=n.getBoundingClientRect(),r=e.current.props.matches.length||0,o=r*t.matchHeight+(r-1)*t.matchPadding+t.bucketPadding;return{x:a.x+a.width/2,y:a.y+o/2}}return{x:0,y:0}},T=function(e){function t(){var e,n,a;Object(s.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={connections:[]},a.bucketIds={round1Bucket1:"round1Bucket1",round2Bucket1:"round2Bucket1",round2Bucket2:"round2Bucket2",round3Bucket1:"round3Bucket1",round3Bucket2:"round3Bucket2",round3Bucket3:"round3Bucket3"},a.bucketRefs=(n={},Object(b.a)(n,a.bucketIds.round1Bucket1,r.a.createRef()),Object(b.a)(n,a.bucketIds.round2Bucket1,r.a.createRef()),Object(b.a)(n,a.bucketIds.round2Bucket2,r.a.createRef()),Object(b.a)(n,a.bucketIds.round3Bucket1,r.a.createRef()),Object(b.a)(n,a.bucketIds.round3Bucket2,r.a.createRef()),Object(b.a)(n,a.bucketIds.round3Bucket3,r.a.createRef()),n),a.bucketCenters={},a.calculateBucketCenters=function(){var e=a.props.theme;return Object.keys(a.bucketIds).reduce(function(t,n){return t[n]=M(a.bucketRefs[n],e),t},{})},a.collectConnections=function(){a.bucketCenters=a.calculateBucketCenters();var e=[{from:a.bucketCenters[a.bucketIds.round1Bucket1],to:a.bucketCenters[a.bucketIds.round2Bucket1]},{from:a.bucketCenters[a.bucketIds.round1Bucket1],to:a.bucketCenters[a.bucketIds.round2Bucket2]},{from:a.bucketCenters[a.bucketIds.round2Bucket1],to:a.bucketCenters[a.bucketIds.round3Bucket1]},{from:a.bucketCenters[a.bucketIds.round2Bucket1],to:a.bucketCenters[a.bucketIds.round3Bucket2]},{from:a.bucketCenters[a.bucketIds.round2Bucket2],to:a.bucketCenters[a.bucketIds.round3Bucket2]},{from:a.bucketCenters[a.bucketIds.round2Bucket2],to:a.bucketCenters[a.bucketIds.round3Bucket3]}];a.setState({connections:e})},a.renderConnections=function(){var e=a.state.connections;return r.a.createElement(D,null,r.a.createElement("svg",{width:"100%",height:"100%"},e.map(function(e){return r.a.createElement(W,{x1:e.from.x,y1:e.from.y,x2:e.to.x,y2:e.to.y})})))},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.collectConnections()}},{key:"render",value:function(){return r.a.createElement(U,null,r.a.createElement(R,null,H.rounds[1].buckets&&r.a.createElement(L,{ref:this.bucketRefs[this.bucketIds.round1Bucket1],matches:A(H.rounds[1].buckets[1].matches)})),r.a.createElement(R,null,H.rounds[2].buckets&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{ref:this.bucketRefs[this.bucketIds.round2Bucket1],matches:A(H.rounds[2].buckets[1].matches)}),r.a.createElement(L,{ref:this.bucketRefs[this.bucketIds.round2Bucket2],matches:A(H.rounds[2].buckets[2].matches)}))),r.a.createElement(R,null,H.rounds[3].buckets&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{ref:this.bucketRefs[this.bucketIds.round3Bucket1],matches:A(H.rounds[3].buckets[1].matches)}),r.a.createElement(L,{ref:this.bucketRefs[this.bucketIds.round3Bucket2],matches:A(H.rounds[3].buckets[2].matches)}),r.a.createElement(L,{ref:this.bucketRefs[this.bucketIds.round3Bucket3],matches:A(H.rounds[3].buckets[3].matches)}))),this.renderConnections())}}]),t}(r.a.Component),G=Object(d.d)(T),J=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{theme:f},r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(G,null)))}}]),t}(r.a.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(J,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/swiss-tournament",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/swiss-tournament","/service-worker.js");V?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Q(e)})}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.0dc0b4b3.chunk.js.map