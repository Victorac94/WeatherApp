(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports={card__location:"CardCurrent_card__location__fOSCM",card__currentWeather:"CardCurrent_card__currentWeather__2AOf3",card__animatedIcon:"CardCurrent_card__animatedIcon__3-9G2",card__day:"CardCurrent_card__day__1OLUf",card:"CardCurrent_card__11_zo"}},22:function(e,a,t){},35:function(e,a,t){e.exports={showMore:"ShowMore_showMore__7obxi"}},39:function(e,a,t){e.exports=t(76)},47:function(e,a,t){},53:function(e,a,t){},6:function(e,a,t){e.exports={card__location:"CardForecast_card__location__FdaZR",card__currentWeather:"CardForecast_card__currentWeather__2wcRH",card__currentWeather__avgTemp:"CardForecast_card__currentWeather__avgTemp__jbaxh",card__currentWeather__maxMin:"CardForecast_card__currentWeather__maxMin__lTeDt",card__currentWeather__maxMin__max:"CardForecast_card__currentWeather__maxMin__max__1iFau",card__currentWeather__maxMin__min:"CardForecast_card__currentWeather__maxMin__min__3_HJK",card__weatherIcon:"CardForecast_card__weatherIcon__3idZo",card__day:"CardForecast_card__day__3Viwa",card:"CardForecast_card__86uwr"}},76:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),c=t(28),o=t.n(c),s=t(11),i=t(15),l=t(36),_=(t(47),t(32)),u=t(33),m=t(37),d=t(34),h=t(38),p=t(14),y=t.n(p),E=(t(22),function(e){return n.a.createElement("section",{className:y.a.card+" card"},n.a.createElement("div",{className:y.a.card__location},n.a.createElement("p",null,e.myLocation.name),n.a.createElement("p",null,e.myLocation.country)),n.a.createElement("div",{className:y.a.card__currentWeather},n.a.createElement("p",null,e.myCurrent.temp_c,n.a.createElement("span",null,"\xba")),n.a.createElement("i",{className:"icon-right-thin"}),n.a.createElement("span",null,e.myCurrent.condition.text)),n.a.createElement("div",{className:y.a.card__animatedIcon},n.a.createElement("img",{src:e.myCurrent.condition.icon,alt:e.myCurrent.condition.text})),n.a.createElement("div",{className:y.a.card__day},n.a.createElement("p",null,"NOW")))}),f=t(6),C=t.n(f),v=function(e){var a=null,t=[];return a=(a=new Date(1e3*e.myForecast.date_epoch).toDateString()).split(" "),t.push(a.slice(0,1)),t.push(a.slice(2,3)),t=t.join(" "),n.a.createElement("section",{className:C.a.card+" card"},n.a.createElement("div",{className:C.a.card__location},n.a.createElement("p",null,e.myLocation.name),n.a.createElement("p",null,e.myLocation.country)),n.a.createElement("div",{className:C.a.card__currentWeather},n.a.createElement("p",{className:C.a.card__currentWeather__avgTemp},e.myForecast.day.avgtemp_c.toFixed(0),n.a.createElement("span",null,"\xba")),n.a.createElement("i",{className:"icon-right-thin"}),n.a.createElement("div",{className:C.a.card__currentWeather__maxMin},n.a.createElement("div",{className:C.a.card__currentWeather__maxMin__max},n.a.createElement("span",null,e.myForecast.day.maxtemp_c.toFixed(0),"\xba"),n.a.createElement("span",null,"MAX")),n.a.createElement("div",{className:C.a.card__currentWeather__maxMin__min},n.a.createElement("span",null,e.myForecast.day.mintemp_c.toFixed(0),"\xba"),n.a.createElement("span",null,"MIN")))),n.a.createElement("div",{className:C.a.card__weatherIcon},n.a.createElement("img",{src:e.myForecast.day.condition.icon,alt:e.myForecast.day.condition.text})),n.a.createElement("div",{className:C.a.card__day},n.a.createElement("p",null,t)))},x=t(35),w=t.n(x),F=function(e){return n.a.createElement("button",{onClick:e.showMore,className:w.a.showMore},n.a.createElement("span",null,"+"))},W=(t(53),"FETCH_WEATHER"),g="FETCH_CITY_WEATHER",b=function(e){return{type:"FETCH_WEATHER_SUCCEED",data:e}},S=function(e){return{type:"FETCH_CITY_WEATHER_SUCCEED",data:e}},N=function(e){function a(){var e,t;Object(_.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={showLastCards:!1},t.toggleSearchBar=function(){var e=document.querySelector(".searchBox"),a=document.querySelector(".searchBox input");e.classList.toggle("searchBoxShow"),a.classList.toggle("searchBoxShowInputPadding"),a.focus()},t.searchCity=function(e){e.preventDefault();var a=document.querySelector(".searchBox input");console.log(a.value),t.props.onFetchCityWeather(a.value)},t.showMoreDays=function(){t.setState({showLastCards:!0})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.onFetchWeather()}},{key:"render",value:function(){var e,a,t=this;if(this.props.myState.current){e=[],a=[];for(var r=0;r<5;r++){var c=null;0===r?(c=n.a.createElement(E,{key:r,myCurrent:this.props.myState.current,myLocation:this.props.myState.location}),e.push(c)):3===r||4===r?(c=n.a.createElement(v,{key:r,myForecast:this.props.myState.forecast.forecastday[r],myLocation:this.props.myState.location}),a.push(c)):(c=n.a.createElement(v,{key:r,myForecast:this.props.myState.forecast.forecastday[r],myLocation:this.props.myState.location}),e.push(c))}}else e=null,a=null;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"appHeader"},n.a.createElement("h2",null,"Weather"),n.a.createElement("form",{className:"searchBox",onSubmit:function(e){return t.searchCity(e)}},n.a.createElement("input",{type:"text",placeholder:"Search your city..."}),n.a.createElement("span",{className:"searchBox__icon icon-search",onClick:function(){return t.toggleSearchBar()}}))),e,this.state.showLastCards?a:null,this.props.myState.current&&!this.state.showLastCards?n.a.createElement(F,{showMore:function(){return t.showMoreDays()}}):null)}}]),a}(r.Component),j=Object(i.b)(function(e){return{myState:e}},function(e){return{onFetchWeather:function(){return e({type:W})},onFetchCityWeather:function(a){return e(function(e){return{type:g,city:e}}(a))}}})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(13),O={current:null,forecast:null,location:null},T=function(e,a){var t,r,n=a.data,c=Object(M.a)({},n.current),o=Object(M.a)({},n.forecast),s=Object(M.a)({},n.location);return t=e,r={current:c,forecast:o,location:s},Object(M.a)({},t,r)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_WEATHER_SUCCEED":case"FETCH_CITY_WEATHER_SUCCEED":return T(e,a);default:return e}},H=t(10),L=t.n(H),I=t(9),B=t(19),D=t.n(B),A=L.a.mark(U),R=L.a.mark(q);function U(){var e;return L.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.a.get("https://api.apixu.com/v1/forecast.json?key=54dac3d1c97d4b04927144355181810&q=auto:ip&days=5");case 2:return e=a.sent,console.log(e.data),a.next=6,Object(I.a)(b(e.data));case 6:case"end":return a.stop()}},A,this)}function q(e){var a,t;return L.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=encodeURI(e.city),r.next=3,D.a.get("https://api.apixu.com/v1/forecast.json?key=54dac3d1c97d4b04927144355181810&q="+a+"&days=5");case 3:return t=r.sent,console.log(t.data),r.next=7,Object(I.a)(S(t.data));case 7:case"end":return r.stop()}},R,this)}var J=L.a.mark(Y);function Y(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.b)(W,U);case 2:return e.next=4,Object(I.b)(g,q);case 4:case"end":return e.stop()}},J,this)}var Z=s.c,z=Object(l.a)(),G=Object(s.d)(k,Z(Object(s.a)(z)));z.run(Y);var K=n.a.createElement(i.a,{store:G},n.a.createElement(j,null));o.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.11b08912.chunk.js.map