(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,a,t){e.exports=t(89)},50:function(e,a,t){},78:function(e,a,t){},82:function(e,a,t){},84:function(e,a,t){},86:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(36),s=t.n(l),c=t(16),i=(t(50),t(13)),o=t(7),m=t(8),u=t(10),d=t(9),p=t(11),h=(t(54),t(56),t(91)),E=t(93),v=t(92),f=function(){return r.a.createElement("h2",{className:"title is-2 has-text-grey has-text-centered"},"404 NotFound")},g={padding:"19px 0px 0px 0px"},b=function(){return r.a.createElement("nav",{className:"navbar is-fixed-top is-danger"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{href:"".concat("/truenorth-client","/")},r.a.createElement("span",{className:"navbar-item has-text-weight-semibold is-size-4 has-text-white"},"Restoservice")),r.a.createElement("small",{className:"has-text-weight-light",style:g}," v1.0"),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navMenuColorinfo-example"}," ",r.a.createElement("span",null)," ",r.a.createElement("span",null)," ",r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"bd-tw-button button","data-social-network":"Github","data-social-action":"tweet","data-social-target":"https://github.com/mcabreradev/truenorth-client",href:"https://github.com/mcabreradev/truenorth-client"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("span",null,"Fork me"))))))))},N=t(2),y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onChange=t.onChange.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"onChange",value:function(e){switch(e.target.name){case"name":this.props.setName(e.target.value);break;case"sortBy":this.props.setSortBy(e.target.value)}}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.sortBy;return r.a.createElement("div",{className:"columns filters"},r.a.createElement("div",{className:"field column is-7"},r.a.createElement("div",{className:"control is-medium has-icons-right"},r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Restaurant or Address",name:"name",value:a,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-medium is-right"},r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement("div",{className:"field column is-5 is-horizontal"},r.a.createElement("div",{className:"field-label is-normal"},r.a.createElement("label",{className:"label"},"Sort By")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:"select is-medium is-fullwidth"},r.a.createElement("select",{name:"sortBy",onChange:this.onChange},r.a.createElement("option",{value:""},""===t?"Select":"-- Reset Filter"),r.a.createElement("option",{value:"highest_rated"},"Highest Rated"),r.a.createElement("option",{value:"lower_rated"},"Lower Rated")))))))}}]),a}(n.Component);y.defaultProps={name:"",sortBy:""};var O=y,w=function(e){return r.a.createElement("div",{className:"pageloader has-background-danger "+(e.isActive?"is-active":"")},r.a.createElement("span",{className:"title"},e.text))};w.defaultProps={text:"Loading..",isActive:!1};var k=w,j=t(18),R=t(15),x=t.n(R),T=t(22),C=function(e){var a=e.restaurants,t=e.name,n=e.sortBy;return a.filter(function(e){return e.commercialName.toLowerCase().indexOf(t.toLowerCase())>=0||e.address.toLowerCase().indexOf(t.toLowerCase())>=0}).sort(function(e,a){return""===n?e.commercialName>a.commercialName?1:-1:"highest_rated"===n?a.rating-e.rating:e.rating-a.rating})},_=function(e){var a="has-background-success";return e<2&&(a="has-background-danger"),e>=2&&e<=3?a="has-background-warning":e>=3&&e<=4&&(a="has-background-info"),a},A=function(e){var a=0;for(var t in e)e.hasOwnProperty(t)&&(a=e[t].total+a);return a},L=function(e){return"$"+e.toLocaleString("es-AR")},S=t(25),G=t.n(S),M="https://mcabreradev-truenorth-api.herokuapp.com",I=function(e,a){return function(t,n){try{t({type:"TOGGLE_MODAL",payload:e,reviewedRestaurant:"undefined"!==typeof a?n().data.restaurants.find(function(e){return e._id===a}):[]})}catch(r){console.error(r)}}},B={setName:function(e){return function(a,t){try{a({type:"SET_NAME",payload:e}),setTimeout(function(){return a({type:"FILTER_RESTAURANTS",payload:C(t().data)})},400)}catch(n){console.error(n)}}},setSortBy:function(e){return function(){var a=Object(T.a)(x.a.mark(function a(t,n){return x.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{t({type:"SET_SORTBY",payload:e}),setTimeout(function(){return t({type:"FILTER_RESTAURANTS",payload:C(n().data)})},100)}catch(r){console.error(r)}case 1:case"end":return a.stop()}},a,this)}));return function(e,t){return a.apply(this,arguments)}}()}},D=Object(i.b)(function(e){return{name:e.data.name,sortBy:e.data.sortBy}},B)(O),P=(t(78),t(19));function H(){var e=Object(j.a)(["\n  top: 40px;\n  position: relative;\n"]);return H=function(){return e},e}var F=P.a.div(H()),U=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onClickHandlerOpenReview=t.onClickHandlerOpenReview.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchRestaurants()}},{key:"onClickHandlerOpenReview",value:function(e){this.props.toggleModal(!0,e)}},{key:"render",value:function(){var e=this,a=this.props,t=a.restaurants,n=a.isLoading,l=a.name,s=a.selectedSortby,c=a.tryAgain,i=a.renderLoading;return r.a.createElement(F,{className:"container"},r.a.createElement(k,{isActive:n}),r.a.createElement(D,null),r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-12-desktop is-12-tablet"},t.length?t.map(function(a){return r.a.createElement(X,Object.assign({},a,{key:a._id,onClick:e.onClickHandlerOpenReview}))}):l.length||s.length?c:i)),r.a.createElement(Y,this.props))}}]),a}(n.Component);U.defaultProps={renderLoading:r.a.createElement("div",{className:"container"},"loading..."),tryAgain:r.a.createElement("div",{className:"container"},"Restaurant was not found!, try again")};var z=U,Q=t(90),W=function(e){var a=e.rating,t=Array(5).fill("star").map(function(e,t){var n="fas fa-star has-text-grey-lighter";return t+1<=Math.floor(a)&&(n="fas fa-star has-text-warning"),r.a.createElement("i",{className:n,key:e+t})});return r.a.createElement("div",{title:"Rate "+a},t)},X=(t(82),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onClick=t.onClick.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"onClick",value:function(){this.props.onClick(this.props._id)}},{key:"render",value:function(){var e=this.props,a=e.logo,t=e.commercialName,n=e.rating,l=e.reviews,s=e.address,c=e._id;return r.a.createElement("div",{className:"box restaurant"},r.a.createElement("article",{className:"media restaurant-details"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:a,alt:"Imagee"}))),r.a.createElement("div",{className:"media-content columns"},r.a.createElement("div",{className:"content column is-four-fifths"},r.a.createElement("div",{className:"is-size-5 has-text-weight-semibold has-text-grey restaurant-name"},t),r.a.createElement("div",{className:"is-flex restaurant-rating"},r.a.createElement("span",{className:"tag has-text-white is-radiusless restaurant-tag has-text-weight-semibold "+_(n)},n),r.a.createElement(W,{rating:n}),r.a.createElement("span",{className:"is-size-7 has-text-link restaurant-reviews",name:"review",onClick:this.onClick},l.length," Reviews")),r.a.createElement("div",null,r.a.createElement("i",{className:"has-text-grey-lighter fas fa-map-marker-alt restaurant-marker"}),r.a.createElement("span",{className:"is-size-7 restaurant-address"},s))),r.a.createElement("div",{className:"column"},r.a.createElement(Q.a,{to:"".concat("/truenorth-client","/restaurants/").concat(c)},r.a.createElement("span",{className:"button is-small is-danger is-pulled-right order-button"}," Order food"))))))}}]),a}(n.Component)),Y=(t(84),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onClick=t.onClick.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"onClick",value:function(e){this.props.toggleModal(!1)}},{key:"render",value:function(){var e=this.props,a=e.isModalActive,t=e.reviewedRestaurant;return a?r.a.createElement("div",{className:"modal "+(a?"is-active":"")},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"content is-small"},r.a.createElement("h1",null,t.commercialName,"'s Reviews"),t.reviews.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"is-divider"}),r.a.createElement("span",{className:"tag has-text-white is-radiusless restaurant-tag has-text-weight-semibold "+_(e.rating)},e.rating),r.a.createElement("p",{className:"modal-review"},r.a.createElement("span",{className:"has-text-grey has-text-weight-semibold"},e.name,": "),'"',r.a.createElement("span",{className:"is-italic"},e.review),'"'))}),r.a.createElement("div",{className:"is-divider"})))),r.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:this.onClick})):null}}]),a}(n.Component));function J(){var e=Object(j.a)(["\n  top: 40px;\n  position: relative;\n  padding-bottom: 50px;\n"]);return J=function(){return e},e}var V=P.a.div(J()),$=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).onChange=t.onChange.bind(Object(N.a)(Object(N.a)(t))),t.onClickHandlerOpenReview=t.onClickHandlerOpenReview.bind(Object(N.a)(Object(N.a)(t))),t.onChagenQty=t.onChagenQty.bind(Object(N.a)(Object(N.a)(t))),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchRestaurantById(this.props.match.params.id)}},{key:"onChagenQty",value:function(e){var a=this.props.restaurant.meals[e.target.id].price*e.target.value;0===a&&(a=""),this.props.setTotalPrice(a,parseInt(e.target.id))}},{key:"onChange",value:function(e){switch(e.target.name){case"name":this.props.setName(e.target.value);break;case"sortBy":this.props.setSortBy(e.target.value)}}},{key:"onClickHandlerOpenReview",value:function(){this.props.toggleModal(!0,this.props.restaurant._id)}},{key:"render",value:function(){var e=this,a=this.props,t=a.restaurant,n=a.totalSelectedMeals;return 0!==t.length?r.a.createElement(V,{className:"container"},r.a.createElement("article",{className:"media restaurant-details"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-128x128"},r.a.createElement("img",{src:t.logo,alt:"Imagee"}))),r.a.createElement("div",{className:"media-content columns"},r.a.createElement("div",{className:"content column is-four-fifths"},r.a.createElement("div",{className:"is-size-5 has-text-weight-semibold has-text-grey restaurant-name"},t.commercialName),r.a.createElement("div",{className:"is-flex restaurant-rating"},r.a.createElement("span",{className:"tag has-text-white is-radiusless restaurant-tag has-text-weight-semibold "+_(t.rating)},t.rating),r.a.createElement(W,{rating:t.rating}),r.a.createElement("span",{className:"is-size-7 has-text-link restaurant-reviews",name:"review",onClick:this.onClickHandlerOpenReview},t.reviews.length," Reviews")),r.a.createElement("div",null,r.a.createElement("i",{className:"has-text-grey-lighter fas fa-map-marker-alt restaurant-marker"}),r.a.createElement("span",{className:"is-size-7 restaurant-address"},t.address))))),r.a.createElement(Y,this.props),r.a.createElement("hr",null),r.a.createElement("div",{className:"content is-small"},r.a.createElement("h2",null,"Customer details"),r.a.createElement("p",null,"Please enter the customer details"),r.a.createElement("form",{className:"column is-7"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Name"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Name"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Last Name"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Last Name"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Phone Number"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Phone Number"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Address"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Address"}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"content is-small"},r.a.createElement("h2",null,"Order Food"),r.a.createElement("p",null,"Please select the food"),r.a.createElement("table",{className:"table is-hoverable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Qty"),r.a.createElement("th",null,"Total"))),r.a.createElement("tbody",null,t.meals.map(function(a,t){return r.a.createElement("tr",{key:t+"_product"},r.a.createElement("td",null,r.a.createElement("figure",{className:"image is-128x128"},r.a.createElement("img",{className:"image is-64-64",src:a.img,alt:a.name}))),r.a.createElement("td",null,a.name),r.a.createElement("td",null,a.description),r.a.createElement("td",null,L(a.price)),r.a.createElement("td",null,r.a.createElement("div",{className:"select"},r.a.createElement("select",{onChange:e.onChagenQty,id:t},r.a.createElement("option",{value:"0"},"Select"),Array(20).fill("nums").map(function(e,a){return r.a.createElement("option",{key:a,values:a+1},a+1)})))),r.a.createElement("td",null,n[t]?L(n[t].total):""))}),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6"},r.a.createElement("h2",{className:"has-text-right"},0!==A(n)?"Total "+L(A(n)):""))))))):this.props.renderLoading}}]),a}(n.Component);$.defaultProps={renderLoading:r.a.createElement(V,{className:"container"},"Loading...")};var q=$,K={fetchRestaurants:function(){return function(){var e=Object(T.a)(x.a.mark(function e(a,t){var n,r;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"TOGGLE_LOADING",payload:!0}),e.next=4,G.a.get("".concat(M,"/restaurants"));case 4:n=e.sent,r=n.data.data,a({type:"FETCH_RESTAURANTS",payload:r}),a({type:"FILTER_RESTAURANTS",payload:C(t().data)}),a({type:"TOGGLE_LOADING",payload:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),a({type:"TOGGLE_LOADING",payload:!1});case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return function(a,t){return e.apply(this,arguments)}}()},toggleModal:I},Z=Object(i.b)(function(e){return{restaurants:e.data.filteredRestaurants,name:e.data.name,isLoading:e.data.isLoading,selectedSortby:!!e.data.selectedSortby&&e.data.selectedSortby,isModalActive:e.data.isModalActive,reviewedRestaurant:e.data.reviewedRestaurant}},K)(z),ee={fetchRestaurantById:function(e){return function(){var a=Object(T.a)(x.a.mark(function a(t,n){var r,l;return x.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:"TOGGLE_LOADING",payload:!0}),a.next=4,n=e,G.a.get("".concat(M,"/restaurants?_id=").concat(n));case 4:r=a.sent,l=r.data.data[0],t({type:"FETCH_RESTAURANT_BY_ID",payload:l}),t({type:"TOGGLE_LOADING",payload:!1}),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),console.error(a.t0),t({type:"TOGGLE_LOADING",payload:!1});case 14:case"end":return a.stop()}var n},a,this,[[0,10]])}));return function(e,t){return a.apply(this,arguments)}}()},toggleModal:I,setTotalPrice:function(e,a){return function(t){try{t({type:"SET_TOTAL_PRICE",total:e,mealId:a})}catch(n){console.error(n)}}}},ae=Object(i.b)(function(e){return{restaurant:e.data.restaurant,isModalActive:e.data.isModalActive,reviewedRestaurant:e.data.reviewedRestaurant,totalSelectedMeals:e.data.totalSelectedMeals}},ee)(q),te=(t(86),function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,{exact:!0,path:"".concat("/truenorth-client","/"),component:Z}),r.a.createElement(v.a,{exact:!0,path:"".concat("/truenorth-client","/restaurants"),component:Z}),r.a.createElement(v.a,{exact:!0,path:"".concat("/truenorth-client","/restaurants/:id"),component:ae}),r.a.createElement(v.a,{component:f}))))}}]),a}(n.Component)),ne=function(e){var a=e.store,t=e.history;return r.a.createElement(i.a,{store:a},r.a.createElement(te,{history:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=t(14),le=t(43),se=t(21),ce=t(12),ie={restaurant:[],restaurants:[],filteredRestaurants:[],name:"",sortBy:"",isLoading:!1,isModalActive:!1,reviewedRestaurant:[],totalSelectedMeals:[]},oe=Object(re.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_RESTAURANTS":return Object(ce.a)({},e,{restaurants:a.payload});case"FETCH_RESTAURANT_BY_ID":return Object(ce.a)({},e,{restaurant:a.payload});case"FILTER_RESTAURANTS":return Object(ce.a)({},e,{filteredRestaurants:a.payload});case"SET_NAME":return Object(ce.a)({},e,{name:a.payload});case"SET_SORTBY":return Object(ce.a)({},e,{sortBy:a.payload});case"TOGGLE_LOADING":return Object(ce.a)({},e,{isLoading:a.payload});case"TOGGLE_MODAL":return Object(ce.a)({},e,{isModalActive:a.payload,reviewedRestaurant:a.reviewedRestaurant});case"SET_TOTAL_PRICE":return Object(ce.a)({},e,{totalSelectedMeals:Object(ce.a)({},e.totalSelectedMeals,Object(se.a)({},a.mealId,{total:a.total}))});default:return e}}}),me=[le.a],ue=Object(re.e)(oe,{},Object(re.d)(re.a.apply(void 0,me),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),de=Object(c.a)();s.a.render(r.a.createElement(ne,{store:ue,history:de}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,2,1]]]);
//# sourceMappingURL=main.e201f5ee.chunk.js.map