(this.webpackJsonpsapjorka=this.webpackJsonpsapjorka||[]).push([[0],{22:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(19),r=n.n(s),l=(n(27),n(7)),u=n(10),c=n(9),m=n(12),o=n(11),h=n(13),f=n(5),v=(n(28),function(){return i.a.createElement("div",{className:"home"},i.a.createElement("h1",{className:"home_header"},"\u0421\u0430\u043f\u044c\u043e\u0440"),i.a.createElement(l.b,{to:"/game",className:"home_go"},"\u0413\u043e \u0413\u0440\u0430\u0442\u0438!"))}),g=(n(34),n(35),{C:"emoji mine clicked",M:"emoji mine",F:"emoji flag",W:"emoji wrong",null:"unrevealed"}),d={C:"\ud83d\udca3",M:"\ud83d\udca3",F:"\ud83d\udea9",W:"\u274c"},k=function(e){return g[e]||"revealed number"+e},b=function(e){return d[e]||e||null};function y(e){return i.a.createElement("button",{className:"Square ".concat(k(e.value)),onClick:e.onClick,onContextMenu:e.onRightClick},b(e.value))}n(36);var p=function(e,t,n){return n.map((function(n,a){return function(e,t,n,a){return i.a.createElement(y,{key:t+"_"+n,value:a,onClick:function(){return e.onClick(t,n)},onRightClick:function(a){return e.onRightClick(a,t,n)}})}(e,t,a,n)}))};function S(e){return i.a.createElement("div",{className:"Board"+(e.gameFinished?" disabled":""),style:{gridTemplateColumns:"repeat(".concat(e.width,", 1fr)")}},e.game.map((function(t,n){return p(e,n,t)})))}n(37);function M(e){return i.a.createElement("div",{className:"status"},i.a.createElement("div",{className:"lcd minesLeft"},e.minesLeft),i.a.createElement("button",{className:"restart",onClick:e.onClick},e.buttonStatus),i.a.createElement("div",{className:"lcd timer"},e.time))}n(38);function C(e){return i.a.createElement("button",{className:"difficulty-level "+(e.isSelected?"selected":""),onClick:e.onClick},e.label," ",i.a.createElement("span",{role:"img","aria-label":e.label},e.emoji))}var E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(o.a)(t).call(this,e))).state=n.getInitialState(),n}return Object(h.a)(t,e),Object(c.a)(t,null,[{key:"randomInRange",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"isMine",value:function(e,t,n){return"M"===e[t][n]}},{key:"generateArray",value:function(e,t,n){return Array.from({length:e},(function(){return Array.from({length:t},(function(){return n}))}))}},{key:"vibrate",value:function(e){return navigator.vibrate(e)}},{key:"getSolution",value:function(e,n,a){return e.map((function(e,i){return e.map((function(e,s){return t.isMine(n,i,s)?a:n[i][s]}))}))}},{key:"thereAreRemainingMoves",value:function(e,t){return e.flat().filter((function(e){return null===e||"F"===e})).length>t}},{key:"leftPad",value:function(e){return e<0?"-"+Math.abs(e).toString().padStart(2,"0"):e.toString().padStart(3,"0")}}]),Object(c.a)(t,[{key:"restart",value:function(){this.setState(this.getInitialState.apply(this,arguments))}},{key:"getInitialState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return this.stopTimer(),{height:e,width:n,maximumMines:a,minesLeft:a,game:t.generateArray(e,n,null),solution:null,gameStarted:!1,gameFinished:!1,buttonStatus:"\ud83d\ude0a",time:0,start:0,bestTimes:JSON.parse(localStorage.getItem("minesweeper:bestTimes"))||{}}}},{key:"checkStart",value:function(){this.state.gameStarted||this.startTimer()}},{key:"handleClick",value:function(e,t){var n,a=this.state.game.slice();this.state.solution?n=this.state.solution.slice():(n=this.generateGame(this.state.height,this.state.width,e,t,this.state.maximumMines),this.setState({gameStarted:!0,solution:n})),this.checkStart(),this.state.gameFinished||null!==a[e][t]||(this.reveal(a,n,e,t),this.updateGameStatus(a,n,e,t))}},{key:"handleRightClick",value:function(e,n,a){var i=this.state.game.slice();e.preventDefault(),this.checkStart();var s=i[n][a];if(!(this.state.gameFinished||null!==s&&"F"!==s)){i[n][a]=s?null:"F";var r=this.state.minesLeft+(i[n][a]?-1:1);t.vibrate(200),this.setState({game:i,minesLeft:r})}}},{key:"reveal",value:function(e,t,n,a){this.inRange(n,a)&&null===e[n][a]&&(e[n][a]=t[n][a],0===e[n][a]&&this.expand(e,t,n,a))}},{key:"expand",value:function(e,t,n,a){this.reveal(e,t,n-1,a),this.reveal(e,t,n+1,a),this.reveal(e,t,n,a-1),this.reveal(e,t,n,a+1),this.reveal(e,t,n-1,a-1),this.reveal(e,t,n-1,a+1),this.reveal(e,t,n+1,a+1),this.reveal(e,t,n+1,a-1)}},{key:"updateGameStatus",value:function(e,n,a,i){if(t.isMine(e,a,i))return this.setGameOver(e,n,a,i);var s=!t.thereAreRemainingMoves(e,this.state.maximumMines),r=s?"\ud83d\ude0e":this.state.buttonStatus,l=this.state.minesLeft;s&&(this.stopTimer(),e=t.getSolution(e,n,"F"),l=0,t.vibrate([300,40,300,40,300,40,300]),this.updateBestTime(this.state.time||1)),this.setState({game:e,gameFinished:s,buttonStatus:r,minesLeft:l})}},{key:"setGameOver",value:function(e,n,a,i){this.stopTimer(),e=e.map((function(e,a){return e.map((function(e,i){var s=t.isMine(n,a,i);return"F"===e?s?e:"W":s?"M":e}))})),t.vibrate(800),e[a][i]="C",this.setState({game:e,gameFinished:!0,buttonStatus:"\ud83d\ude2d"})}},{key:"generateGame",value:function(e,n,a,i,s){for(var r,l,u=t.generateArray(e,n,0),c=0;c<s;)r=t.randomInRange(0,e-1),l=t.randomInRange(0,n-1),t.isMine(u,r,l)||a===r&&i===l||(u[r][l]="M",this.incrementMinesNearby(u,r-1,l),this.incrementMinesNearby(u,r+1,l),this.incrementMinesNearby(u,r,l-1),this.incrementMinesNearby(u,r,l+1),this.incrementMinesNearby(u,r-1,l-1),this.incrementMinesNearby(u,r-1,l+1),this.incrementMinesNearby(u,r+1,l+1),this.incrementMinesNearby(u,r+1,l-1),c++);return u}},{key:"incrementMinesNearby",value:function(e,n,a){this.inRange(n,a)&&!t.isMine(e,n,a)&&(e[n][a]=e[n][a]+1)}},{key:"inRange",value:function(e,t){return e>=0&&e<this.state.height&&t>=0&&t<this.state.width}},{key:"startTimer",value:function(){var e=this;this.setState({gameStarted:!0,time:1,start:Date.now()}),this.timer&&this.stopTimer(),this.timer=setInterval((function(){return e.setState({time:Math.floor((Date.now()-e.state.start)/1e3)+1})}),1)}},{key:"stopTimer",value:function(){clearInterval(this.timer)}},{key:"updateBestTime",value:function(e){var t=Object.assign({},this.state.bestTimes),n=t[this.getBestTimeKey()]||null;(null===n||e<n)&&(t[this.getBestTimeKey()]=e,localStorage.setItem("minesweeper:bestTimes",JSON.stringify(t)),this.setState({bestTimes:t}))}},{key:"getBestTimeText",value:function(){var e=this.state.bestTimes[this.getBestTimeKey()]||null;return null!==e?"Best time: "+t.leftPad(e):""}},{key:"getBestTimeKey",value:function(){return"".concat(this.state.height,",").concat(this.state.width,",").concat(this.state.maximumMines)}},{key:"isGame",value:function(e,t,n){return this.state.height===e&&this.state.width===t&&this.state.maximumMines===n}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Game"},i.a.createElement("div",{className:"wrapper"},i.a.createElement(M,{buttonStatus:this.state.buttonStatus,minesLeft:t.leftPad(this.state.minesLeft),time:t.leftPad(this.state.time),onClick:function(){return e.restart(e.state.height,e.state.width,e.state.maximumMines)}})),i.a.createElement("div",{className:"difficulty"},i.a.createElement(C,{isSelected:this.isGame(9,9,10),onClick:function(){return e.restart(9,9,10)},label:"Beginner",emoji:"\ud83d\ude48"}),i.a.createElement(C,{isSelected:this.isGame(16,16,40),onClick:function(){return e.restart(16,16,40)},label:"Intermediate",emoji:"\ud83d\ude4d\u200d\u2642"}),i.a.createElement(C,{isSelected:this.isGame(16,30,99),onClick:function(){return e.restart(16,30,99)},label:"Expert",emoji:"\ud83d\udc73\u200d\u2642"})),i.a.createElement(S,{onClick:function(t,n){return e.handleClick(t,n)},onRightClick:function(t,n,a){return e.handleRightClick(t,n,a)},game:this.state.game,gameFinished:this.state.gameFinished,width:this.state.width}),i.a.createElement("div",{className:"bestScore"},this.getBestTimeText()))}}]),t}(a.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(f.c,null,i.a.createElement(f.a,{exact:!0,path:"/",component:v}),i.a.createElement(f.a,{path:"/game",component:E}))}}]),t}(a.Component);r.a.render(i.a.createElement(l.a,null,i.a.createElement(N,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4e7ed20c.chunk.js.map