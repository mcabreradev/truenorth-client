(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,a,t){e.exports=t(87)},48:function(e,a,t){},76:function(e,a,t){},78:function(e,a,t){},82:function(e,a,t){},84:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(32),c=t.n(s),i=t(18),l=(t(48),t(12)),o=t(7),m=t(8),u=t(10),d=t(9),p=t(11),v=(t(52),t(54),t(89)),h=t(91),E=t(90),f=function(){return r.a.createElement("h2",{className:"title is-2 has-text-grey has-text-centered"},"404 NotFound")},b={padding:"19px 0px 0px 0px"},g=function(){return r.a.createElement("nav",{className:"navbar is-fixed-top is-danger"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{className:"navbar-item has-text-weight-semibold is-size-4"},"Restoservice"),r.a.createElement("small",{className:"has-text-weight-light",style:b},"v1.0"),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navMenuColorinfo-example"}," ",r.a.createElement("span",null)," ",r.a.createElement("span",null)," ",r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"bd-tw-button button","data-social-network":"Github","data-social-action":"tweet","data-social-target":"https://github.com/mcabreradev/truenorth-client",href:"https://github.com/mcabreradev/truenorth-client"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("span",null,"Fork me"))))))))},N=t(4),y=t(16),O=t.n(y),w=t(21),j=t(35),k=t.n(j),R=function(e){var a=e.restaurants,t=e.name,n=e.sortBy;return a.filter(function(e){return e.commercialName.toLowerCase().indexOf(t.toLowerCase())>=0||e.address.toLowerCase().indexOf(t.toLowerCase())>=0}).sort(function(e,a){return""===n?e.commercialName>a.commercialName?1:-1:"highest_rated"===n?a.rating-e.rating:e.rating-a.rating})},x=function(e){var a="has-background-success";return e<2&&(a="has-background-danger"),e>=2&&e<=3?a="has-background-warning":e>=3&&e<=4&&(a="has-background-info"),a},T=function(e,a){return function(t,n){console.log(typeof a);try{t({type:"TOGGLE_MODAL",payload:e,reviewedRestaurant:"undefined"!==typeof a?n().data.restaurants.find(function(e){return e._id===a}):[]})}catch(r){console.error(r)}}},C=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onChange=t.onChange.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"onChange",value:function(e){switch(e.target.name){case"name":this.props.setName(e.target.value);break;case"sortBy":this.props.setSortBy(e.target.value)}}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.sortBy;return r.a.createElement("div",{className:"columns filters"},r.a.createElement("div",{className:"field column is-7"},r.a.createElement("div",{className:"control is-medium has-icons-right"},r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Restaurant or Address",name:"name",value:a,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-medium is-right"},r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement("div",{className:"field column is-5 is-horizontal"},r.a.createElement("div",{className:"field-label is-normal"},r.a.createElement("label",{className:"label"},"Sort By")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:"select is-medium is-fullwidth"},r.a.createElement("select",{name:"sortBy",onChange:this.onChange},r.a.createElement("option",{value:""},""===t?"Select":"-- Reset Filter"),r.a.createElement("option",{value:"highest_rated"},"Highest Rated"),r.a.createElement("option",{value:"lower_rated"},"Lower Rated")))))))}}]),a}(n.Component);C.defaultProps={name:"",sortBy:""};var _=Object(l.b)(function(e){return{name:e.data.name,sortBy:e.data.sortBy}},{setName:function(e){return function(a,t){try{a({type:"SET_NAME",payload:e}),setTimeout(function(){return a({type:"FILTER_RESTAURANTS",payload:R(t().data)})},400)}catch(n){console.error(n)}}},setSortBy:function(e){return function(){var a=Object(w.a)(O.a.mark(function a(t,n){return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{t({type:"SET_SORTBY",payload:e}),setTimeout(function(){return t({type:"FILTER_RESTAURANTS",payload:R(n().data)})},100)}catch(r){console.error(r)}case 1:case"end":return a.stop()}},a,this)}));return function(e,t){return a.apply(this,arguments)}}()}})(C),A=function(e){return r.a.createElement("div",{className:"pageloader has-background-danger "+(e.isActive?"is-active":"")},r.a.createElement("span",{className:"title"},e.text))};A.defaultProps={text:"Loading..",isActive:!1};var L=A,S=function(e){var a=e.rating,t=Array(5).fill("star").map(function(e,t){var n="fas fa-star has-text-grey-lighter";return t+1<=Math.floor(a)&&(n="fas fa-star has-text-warning"),r.a.createElement("i",{className:n,key:e+t})});return r.a.createElement("div",{title:"Rate "+a},t)},G=(t(76),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onClick=t.onClick.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"onClick",value:function(){this.props.onClick(this.props._id)}},{key:"render",value:function(){var e=this.props,a=e.logo,t=e.commercialName,n=e.rating,s=e.reviews,c=e.address;return r.a.createElement("div",{className:"box restaurant"},r.a.createElement("article",{className:"media restaurant-details"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:a,alt:"Imagee"}))),r.a.createElement("div",{className:"media-content columns"},r.a.createElement("div",{className:"content column is-four-fifths"},r.a.createElement("div",{className:"is-size-5 has-text-weight-semibold has-text-grey restaurant-name"},t),r.a.createElement("div",{className:"is-flex restaurant-rating"},r.a.createElement("span",{className:"tag has-text-white is-radiusless restaurant-tag has-text-weight-semibold "+x(n)},n),r.a.createElement(S,{rating:n}),r.a.createElement("span",{className:"is-size-7 has-text-link restaurant-reviews",name:"review",onClick:this.onClick},s.length," Reviews")),r.a.createElement("div",null,r.a.createElement("i",{className:"has-text-grey-lighter fas fa-map-marker-alt restaurant-marker"}),r.a.createElement("span",{className:"is-size-7 restaurant-address"},c))),r.a.createElement("div",{className:"column"},r.a.createElement("a",{className:"button is-small is-danger is-pulled-right order-button",href:"/"},"Order food")))))}}]),a}(n.Component)),B=(t(78),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onClick=t.onClick.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"onClick",value:function(e){this.props.toggleModal(!1)}},{key:"render",value:function(){var e=this.props,a=e.isModalActive,t=e.reviewedRestaurant;return a?r.a.createElement("div",{className:"modal "+(a?"is-active":"")},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"content is-small"},r.a.createElement("h1",null,t.commercialName,"'s Reviews"),t.reviews.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"is-divider"}),r.a.createElement("span",{className:"tag has-text-white is-radiusless restaurant-tag has-text-weight-semibold "+x(e.rating)},e.rating),r.a.createElement("p",{className:"modal-review"},r.a.createElement("span",{className:"has-text-grey has-text-weight-semibold"},e.name,": "),'"',r.a.createElement("span",{className:"is-italic"},e.review),'"'))}),r.a.createElement("div",{className:"is-divider"})))),r.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:this.onClick})):null}}]),a}(n.Component)),M=Object(l.b)(function(e){return{isModalActive:e.data.isModalActive,reviewedRestaurant:e.data.reviewedRestaurant}},{toggleModal:T})(B),I=t(36);function D(){var e=Object(I.a)(["\n  top: 40px;\n  position: relative;\n"]);return D=function(){return e},e}var F=t(37).a.div(D()),U=function(e){return r.a.createElement(F,{className:"container"},e.children)},z=(t(82),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onClickOpenReview=t.onClickOpenReview.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchRestaurants()}},{key:"onClickOpenReview",value:function(e){this.props.toggleModal(!0,e)}},{key:"render",value:function(){var e=this,a=this.props,t=a.restaurants,n=a.isLoading;return r.a.createElement(U,null,r.a.createElement(L,{isActive:n}),r.a.createElement(_,null),r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-12-desktop is-12-tablet"},t.map(function(a){return r.a.createElement(G,Object.assign({},a,{key:a._id,onClick:e.onClickOpenReview}))}))),r.a.createElement(M,null))}}]),a}(n.Component));z.defaultProps={renderLoading:r.a.createElement("div",{className:"container"},"loading..."),tryAgain:r.a.createElement("div",{className:"container"},"Restaurant was not found!, try again"),restaurants:[]};var X=Object(l.b)(function(e){return{restaurants:e.data.filteredRestaurants,name:e.data.name,isLoading:e.data.isLoading,selectedSortby:!!e.data.selectedSortby&&e.data.selectedSortby}},{fetchRestaurants:function(){return function(){var e=Object(w.a)(O.a.mark(function e(a,t){var n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"TOGGLE_LOADING",payload:!0}),e.next=4,k.a.get("https://mcabreradev-truenorth-api.herokuapp.com/restaurants");case 4:n=e.sent,r=n.data.data,a({type:"FETCH_RESTAURANTS",payload:r}),a({type:"FILTER_RESTAURANTS",payload:R(t().data)}),a({type:"TOGGLE_LOADING",payload:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),a({type:"TOGGLE_LOADING",payload:!1});case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return function(a,t){return e.apply(this,arguments)}}()},toggleModal:T})(z),H=(t(84),function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(E.a,{exact:!0,path:"".concat("/truenorth-client","/"),component:X}),r.a.createElement(E.a,{exact:!0,path:"".concat("/truenorth-client","/list"),component:X}),r.a.createElement(E.a,{component:f}))))}}]),a}(n.Component)),P=function(e){var a=e.store,t=e.history;return r.a.createElement(l.a,{store:a},r.a.createElement(H,{history:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(13),J=t(42),V=t(14),Y={restaurants:[],filteredRestaurants:[],name:"",sortBy:"",isLoading:!1,isModalActive:!1,reviewedRestaurant:[]},$=Object(W.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_RESTAURANTS":return Object(V.a)({},e,{restaurants:a.payload});case"FILTER_RESTAURANTS":return Object(V.a)({},e,{filteredRestaurants:a.payload});case"SET_NAME":return Object(V.a)({},e,{name:a.payload});case"SET_SORTBY":return Object(V.a)({},e,{sortBy:a.payload});case"TOGGLE_LOADING":return Object(V.a)({},e,{isLoading:a.payload});case"TOGGLE_MODAL":return Object(V.a)({},e,{isModalActive:a.payload,reviewedRestaurant:a.reviewedRestaurant});default:return e}}}),q=[J.a],K=Object(W.e)($,{},Object(W.d)(W.a.apply(void 0,q),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Q=Object(i.a)();c.a.render(r.a.createElement(P,{store:K,history:Q}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.a52c8619.chunk.js.map