(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{17:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(31),n=c.n(i),r=c(15),l=c(8),j=c(9),o=c(11),h=c(10),d=c(12),A=c(2),b=c(13),m=c.n(b),v=(c(17),c(0)),O=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.handleAPI=function(){var t=e.state.data;return t.map((function(t){var c=t.vote_average,a=t.release_date,s={color:c>=8?"#90e886":c>=5&&c<8?"#ffa502":"#ef0b1d"};return Object(v.jsxs)("div",{className:"movie-card",style:e.state.style,children:[Object(v.jsx)("div",{className:"movie-img",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:"image"})}),Object(v.jsxs)("div",{className:"movie-des",children:[Object(v.jsxs)("div",{className:"movie-inf",children:[Object(v.jsx)("h3",{children:t.original_title}),Object(v.jsx)("h6",{style:{color:"#fd4b13"},children:a.split("-").reverse().join("-")})]}),Object(v.jsx)("div",{className:"movie-rate",style:s,children:c})]}),Object(v.jsxs)("div",{className:"overview",style:e.state.style,children:[Object(v.jsx)("h2",{children:"Overview"}),Object(v.jsx)("p",{children:t.overview})]})]})}))},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://api.themoviedb.org/3/discover/movie?with_genres=35&primary_release_year=2020&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1").then((function(t){e.setState({data:t.data.results})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"movie-app",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{children:"Movie"}),this.handleAPI()]})})}}]),c}(a.Component),u=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.handleAPI=function(){var t=e.state.data;return t.map((function(t){var c=t.vote_average,a=t.release_date,s={color:c>=8?"#90e886":c>=5&&c<8?"#ffa502":"#ef0b1d"};return Object(v.jsxs)("div",{className:"movie-card",style:e.state.style,children:[Object(v.jsx)("div",{className:"movie-img",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:"image"})}),Object(v.jsxs)("div",{className:"movie-des",children:[Object(v.jsxs)("div",{className:"movie-inf",children:[Object(v.jsx)("h3",{children:t.original_title}),Object(v.jsx)("h6",{style:{color:"#fd4b13"},children:a.split("-").reverse().join("-")})]}),Object(v.jsx)("div",{className:"movie-rate",style:s,children:c})]}),Object(v.jsxs)("div",{className:"overview",style:e.state.style,children:[Object(v.jsx)("h2",{children:"Overview"}),Object(v.jsx)("p",{children:t.overview})]})]})}))},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1").then((function(t){e.setState({data:t.data.results})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"movie-app",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{children:"Latest"}),this.handleAPI()]})})}}]),c}(a.Component),p=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.handleAPI=function(){var t=e.state.data;return t.map((function(t){var c=t.vote_average,a=t.release_date,s={color:c>=8?"#90e886":c>=5&&c<8?"#ffa502":"#ef0b1d"};return Object(v.jsxs)("div",{className:"movie-card",style:e.state.style,children:[Object(v.jsx)("div",{className:"movie-img",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:"image"})}),Object(v.jsxs)("div",{className:"movie-des",children:[Object(v.jsxs)("div",{className:"movie-inf",children:[Object(v.jsx)("h3",{children:t.original_title}),Object(v.jsx)("h6",{style:{color:"#fd4b13"},children:a.split("-").reverse().join("-")})]}),Object(v.jsx)("div",{className:"movie-rate",style:s,children:c})]}),Object(v.jsxs)("div",{className:"overview",style:e.state.style,children:[Object(v.jsx)("h2",{children:"Overview"}),Object(v.jsx)("p",{children:t.overview})]})]})}))},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://api.themoviedb.org/3/discover/movie?with_genres=35&primary_release_year=2019&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1").then((function(t){e.setState({data:t.data.results})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"movie-app",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{children:"TV Shows"}),this.handleAPI()]})})}}]),c}(a.Component),g=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.handleAPI=function(){var t=e.state.data;return t.map((function(t){var c=t.vote_average,a=t.release_date,s={color:c>=8?"#90e886":c>=5&&c<8?"#ffa502":"#ef0b1d"};return Object(v.jsxs)("div",{className:"movie-card",style:e.state.style,children:[Object(v.jsx)("div",{className:"movie-img",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:"image"})}),Object(v.jsxs)("div",{className:"movie-des",children:[Object(v.jsxs)("div",{className:"movie-inf",children:[Object(v.jsx)("h3",{children:t.original_title}),a&&Object(v.jsx)("h6",{style:{color:"#fd4b13"},children:a.split("-").reverse().join("-")})]}),Object(v.jsx)("div",{className:"movie-rate",style:s,children:c})]}),Object(v.jsxs)("div",{className:"overview",style:e.state.style,children:[Object(v.jsx)("h2",{children:"Overview"}),Object(v.jsx)("p",{children:t.overview})]})]})}))},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this,t='https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&query="'+this.props.keywords;m.a.get(t).then((function(t){e.setState({data:t.data.results})})).catch((function(e){alert("API ERROR: "+e),console.error(e)}))}},{key:"render",value:function(){var e=this.props.keywords;return Object(v.jsx)("div",{className:"movie-app",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("h1",{children:["Result for ",e]}),this.handleAPI()]})})}}]),c}(a.Component),x=c.p+"static/media/bg.483dc9be.jpg",f=c.p+"static/media/name.7de325af.png",y=c.p+"static/media/trailer.ff5ab33c.mp4",k=c.p+"static/media/notFound.99d15a5c.jpg",C=(c(58),function(e){var t=e.callback;return Object(v.jsxs)("header",{children:[Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA2CAYAAACCwNb3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxMTQ1QzNFNTFEQTExRUJCREJDRkQwMzgzRTVEOEMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxMTQ1QzNGNTFEQTExRUJCREJDRkQwMzgzRTVEOEMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDExNDVDM0M1MURBMTFFQkJEQkNGRDAzODNFNUQ4QzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDExNDVDM0Q1MURBMTFFQkJEQkNGRDAzODNFNUQ4QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mzXmkAAARsklEQVR42uxd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",alt:"logo"})}),Object(v.jsxs)("ul",{className:"nav",children:[Object(v.jsx)("li",{children:Object(v.jsx)(d.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(d.b,{to:"/tv-shows",children:"TV Shows"})}),Object(v.jsx)("li",{children:Object(v.jsx)(d.b,{to:"/movie",children:"Movie"})}),Object(v.jsx)("li",{children:Object(v.jsx)(d.b,{to:"/latest",children:"Latest"})}),Object(v.jsx)("li",{children:Object(v.jsx)(d.b,{to:"/list",children:"My List"})})]}),Object(v.jsxs)("div",{className:"search",children:[Object(v.jsx)("input",{type:"text",className:"",placeholder:"Search",onKeyDown:t}),Object(v.jsx)("i",{className:"fas fa-search"})]})]})}),E=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).video=s.a.createRef(),e.state={className:"trailer"},e}return Object(j.a)(c,[{key:"handlePlayTrailer",value:function(){this.video.current.currentTime=0,this.video.current.pause();var e="trailer"===this.state.className?"trailer active":"trailer";this.setState({className:e})}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"banner",children:[Object(v.jsx)("img",{src:x,className:"bg",alt:"background"}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("img",{src:f,className:"movieTitle",alt:"title"}),Object(v.jsxs)("h4",{children:[Object(v.jsx)("span",{children:"2020"}),Object(v.jsx)("span",{children:Object(v.jsx)("i",{children:"12+"})}),Object(v.jsx)("span",{children:"1h 55min"}),Object(v.jsx)("span",{children:"Action"})]}),Object(v.jsx)("p",{children:"Mulan (2020) thu\u1ed9c xu h\u01b0\u1edbng l\xe0m l\u1ea1i lo\u1ea1t t\xe1c ph\u1ea9m ho\u1ea1t h\xecnh th\xe0nh c\xf4ng thu\u1ed9c th\u1eadp ni\xean 1990 c\u1ee7a Disney. N\u1ed9i dung d\u1ef1a tr\xean \u0111i\u1ec3n t\xedch c\u1ee7a Trung Qu\u1ed1c, v\u1ec1 c\xf4 g\xe1i gi\u1ea3 trai \u0111i l\xednh thay cha gi\xe0 y\u1ebfu v\xe0 tr\u1edf th\xe0nh n\u1eef anh h\xf9ng d\xe2n t\u1ed9c. M\u1ed9t c\xe2u chuy\u1ec7n \u0111\u1eadm \u0111\xe0 b\u1ea3n s\u1eafc ph\u01b0\u01a1ng \u0110\xf4ng v\u1edbi s\u1ef1 g\xf3p m\u1eb7t c\u1ee7a h\xe0ng lo\u1ea1t sao l\u1edbn Trung Hoa. C\xf9ng g\u1eb7p c\xf4 c\xf4ng ch\xfaa Disney ti\u1ebfp theo tr\xean m\xe0n \u1ea3nh r\u1ed9ng - Hoa M\u1ed9c Lan"}),Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsxs)(d.b,{to:"/",children:[Object(v.jsx)("i",{className:"fas fa-play"})," Play"]}),Object(v.jsxs)(d.b,{to:"/",children:[Object(v.jsx)("i",{className:"fas fa-plus"})," My List"]})]})]}),Object(v.jsxs)(d.b,{to:"/",className:"play",onClick:this.handlePlayTrailer.bind(this),children:[Object(v.jsx)("img",{src:"data:image/png;base64,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",alt:"Play"}),"Watch Trailer"]})]}),Object(v.jsxs)("div",{className:this.state.className,children:[Object(v.jsx)("video",{src:y,controls:!0,ref:this.video}),Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBAYSKQDKDuLdAAABb0lEQVRo3s2Zu26DQBBFj6z4O7AQFPn/DvtfXBgpfeJ+UxjJxhDYnZ1HqAzFvYc17FxmoOHCnTMtnkc7uTZwIZFIjPRu9j3j5DrAz/TTD+Fpn/h+roAXwqt9YoB2dsEaoX9za5cXv/h0sn9x8kHYdLFH2HWwRchSt0PIVrZBKFLVRyhW1EUQqekhiJV0EKpU6hGqFeoEVNZQLqL2FPXcBEKq71FXjKC+k5QhmOyl+Qhm1SQPwbSe7iOYJ4ptBJdM9TeCW6pcR/ALtasIrvbL+x1dvypWV8H17rcQHO0BTlxn9jc6mdBBCHDkODv/eDs3PuYPovtfsGbviBD8Gi63nfLIomoPktSkau+GsL3nmyPslxxThLyKZ4aQX3BNEMrqvTpCedxQRZClHTUEedhSQajLetUI9VGzCkEn6XaxHSKxUnCbLrhRGdyqDW5WB7frgwcWwSOb4KFV+NgufHD5b0a3YcPrhjN3Bvfx/cO1+QVCX0fTpf40lQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0wNlQxODo0MTowMCswMDowMC5yKFMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMDZUMTg6NDE6MDArMDA6MDBfL5DvAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",className:"close",onClick:this.handlePlayTrailer.bind(this),alt:"Close"})]})]})}}]),c}(a.Component),B=function(e){return Object(v.jsx)(p,{})},N=function(e){return Object(v.jsx)(E,{})},S=function(e){return Object(v.jsx)(O,{})},w=function(e){return Object(v.jsx)(u,{})},I=function(){return Object(v.jsx)("div",{className:"not-found",children:Object(v.jsx)("img",{src:k,alt:"notfound"})})},V=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={key:"",isSearch:!1},e.handleSearch=function(t){if("Enter"===t.key){var c=t.target.value;console.log(c),e.setState({key:c}),e.setState({isSearch:!0}),t.target.value=""}},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(v.jsxs)(d.a,{children:[Object(v.jsx)(C,{callback:this.handleSearch}),Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)(A.d,{children:[Object(v.jsx)(A.b,{path:"/tv-shows",component:function(t){return e.state.isSearch?(e.setState({isSearch:!1}),Object(v.jsx)(A.a,{to:"/search"})):Object(v.jsx)(B,Object(r.a)({},t))}}),Object(v.jsx)(A.b,{path:"/movie",component:function(t){return e.state.isSearch?(e.setState({isSearch:!1}),Object(v.jsx)(A.a,{to:"/search"})):Object(v.jsx)(S,Object(r.a)({},t))}}),Object(v.jsx)(A.b,{path:"/latest",component:function(t){return e.state.isSearch?(e.setState({isSearch:!1}),Object(v.jsx)(A.a,{to:"/search"})):Object(v.jsx)(w,Object(r.a)({},t))}}),Object(v.jsx)(A.b,{path:"/search",component:function(t){return Object(v.jsx)(g,Object(r.a)(Object(r.a)({},t),{},{keywords:e.state.key}))}}),Object(v.jsx)(A.b,{exact:!0,path:"/",component:function(t){return e.state.isSearch?(e.setState({isSearch:!1}),Object(v.jsx)(A.a,{to:"/search"})):Object(v.jsx)(N,Object(r.a)({},t))}}),Object(v.jsx)(A.b,{component:I})]})})]})}}]),c}(a.Component),M=document.querySelector("#root");n.a.render(Object(v.jsx)(V,{}),M)}},[[64,1,2]]]);
//# sourceMappingURL=main.6bd0a24c.chunk.js.map