(this.webpackJsonpservice=this.webpackJsonpservice||[]).push([[0],{25:function(e,a,t){e.exports=t(41)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),s=(t(30),t(20)),i=t(21),o=t(4),u=t(5),m=t(7),d=t(6),b=t(8),p=(t(31),t(11)),h=t(12),_=(t(32),t(24)),N=(t(33),t(34),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).buttonClick=function(e){"hide"===e?t.setState({case:!1}):t.setState({case:!t.state.case})},t.selectItem=function(e){var a=e.target.innerHTML;t.setState({value:a}),t.buttonClick("hide"),t.props.setExpiryDate(a)},t.state={case:!1,value:""},t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dropdown"},r.a.createElement("input",{className:""!==this.state.value?"dropdown__field dropdown__field_valid":"dropdown__field",type:"text",key:this.state.value,value:this.state.value,readOnly:!0}),r.a.createElement("button",{className:"dropdown__button",onClick:this.buttonClick},r.a.createElement("span",{className:"dropdown__arrow"})),this.state.case&&r.a.createElement("ul",{className:"dropdown__list"},this.props.date.map((function(a){return r.a.createElement("li",{className:"dropdown__item",onClick:e.selectItem,key:a},a)}))))}}]),a}(r.a.Component)),f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).getMonths=function(){for(var e=[1,2,3,4,5,6,7,8,9,10,11,12],a=0;a<e.length;a++)e[a]=a<9?"0"+e[a]:String(e[a]);return e},t.getYears=function(){for(var e=(new Date).getFullYear(),a=[],t=e,n=0;t<e+5;t++,n++)a[n]=t;return a},t.state={months:t.getMonths(),years:t.getYears(),fields:Object(_.a)(Array(4).keys())},t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=e.cardholder,t=e.setExpiryDate,n=e.handleEvent,l=e.title,c=this.state,s=c.months,i=c.years,o=c.fields;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__title"},l),!0===a?r.a.createElement("div",{className:"card__requisites"},r.a.createElement("div",{className:"card__wrapper card__wrapper_number"},r.a.createElement("div",{className:"card__label"},"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"),o.map((function(e){return r.a.createElement("input",{className:"card__number",type:"text",name:"payerNumber".concat(e+1),onFocus:n("number","focus"),onChange:n("number","change"),onBlur:n("number","blur"),key:e})}))),r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__label"},"\u0424\u0418\u041e \u0414\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("input",{className:"card__cardholder",type:"text",onFocus:n("cardholder","focus"),onChange:n("cardholder","change"),onBlur:n("cardholder","blur")})),r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__label"},"\u0410\u043a\u0442\u0438\u0432\u043d\u0430 \u0434\u043e"),r.a.createElement(N,{date:s,setExpiryDate:t.bind(this,"month"),handleEvent:n}),r.a.createElement(N,{date:i,setExpiryDate:t.bind(this,"year"),handleEvent:n}))):r.a.createElement("div",{className:"card__requisites"},r.a.createElement("div",{className:"card__wrapper card__wrapper_number"},o.map((function(e){return r.a.createElement("input",{className:"card__number",type:"text",name:"recipientNumber".concat(e+1),onFocus:n("number","focus"),onChange:n("number","change"),onBlur:n("number","blur"),key:e})})))))}}]),a}(r.a.Component),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).clickHandler=function(){var e=t.state.click;t.props.state.isValid?t.props.setTableRow("add"):t.setState({click:e+=1})},t.state={click:0},t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=e.state,t=e.handleEvent,n=e.setExpiryDate;return r.a.createElement("div",{className:"transfer"},r.a.createElement("div",{className:"transfer__content"},this.state.click>0&&!a.isValid&&r.a.createElement("div",{className:"transfer__message"},"\u041d\u0435 \u0432\u0441\u0435 \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b!"),r.a.createElement("div",{className:"transfer__form transfer__form_cards"},r.a.createElement(f,{title:"\u041a\u0430\u0440\u0442\u0430 \u043f\u043b\u0430\u0442\u0435\u043b\u044c\u0449\u0438\u043a\u0430",cardholder:!0,handleEvent:t,setExpiryDate:n}),r.a.createElement(f,{title:"\u041a\u0430\u0440\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f",cardholder:!1,handleEvent:t})),r.a.createElement("div",{className:"transfer__form transfer__form_transfer"},r.a.createElement("input",{className:"transfer__amount",type:"text",placeholder:"\u0421\u0443\u043c\u043c\u0430",onFocus:t("amount","focus"),onChange:t("amount","change"),onBlur:t("amount","blur")}),r.a.createElement(p.b,{className:"transfer__button",to:a.isValid?"/history":"/transfer",onClick:this.clickHandler},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"))))}}]),a}(r.a.Component),E=(t(40),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={header:["\u2116","\u041a\u0430\u0440\u0442\u0430 \u043f\u043b\u0430\u0442\u0435\u043b\u044c\u0449\u0438\u043a\u0430","\u041a\u0430\u0440\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f","\u0421\u0443\u043c\u043c\u0430","\u0414\u0430\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f","\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"]},t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this,a=this.props.state.rows,t=this.state.header;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table__header"},r.a.createElement("tr",{className:"table__row"},t.map((function(e){return r.a.createElement("td",{className:"table__cell table__cell_header",key:t.indexOf(e)},e)})))),r.a.createElement("tbody",{className:"table__body"},a.map((function(t){return r.a.createElement("tr",{className:"table__row",key:a.indexOf(t)},r.a.createElement("td",{className:"table__cell"},a.indexOf(t)+1),r.a.createElement("td",{className:"table__cell"},t.payerNumber),r.a.createElement("td",{className:"table__cell"},t.recipientNumber),r.a.createElement("td",{className:"table__cell"},t.amount),r.a.createElement("td",{className:"table__cell"},t.date),r.a.createElement("td",{className:"table__cell"},r.a.createElement(p.b,{className:"table__button",to:"/transfer"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement("button",{className:"table__button",onClick:e.props.setTableRow.bind(e,"remove",a.indexOf(t))},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}))))}}]),a}(r.a.Component)),y=function(e){function a(e){var t;Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).clearState=function(){t.setState({payerNumber1:null,payerNumber2:null,payerNumber3:null,payerNumber4:null,cardholder:null,expiryMonth:null,expiryYear:null,recipientNumber1:null,recipientNumber2:null,recipientNumber3:null,recipientNumber4:null,amount:null,isValid:!1})},t.setValid=function(){var e=t.state,a=(e.date,e.rows,e.isValid,Object(i.a)(e,["date","rows","isValid"])),n=Object.keys(a).every((function(e){return null!==a[e]}));t.setState({isValid:n})},t.setData=function(e,a,n){"amount"===e&&t.setState({amount:a}),"cardholder"===e&&t.setState({cardholder:a}),"number"===e&&t.setState(Object(s.a)({},n,a))},t.setExpiryDate=function(e,a){"month"===e&&t.setState({expiryMonth:a},(function(){return t.setValid()})),"year"===e&&t.setState({expiryYear:a},(function(){return t.setValid()}))},t.handleEvent=function(e,a){return function(n){var r=n.target,l=r.value,c=r.name,s=l.match(/^\d{1,5}(\.\d{0,2})?$/),i=l.match(/^[A-Za-z]{1,10}$/),o=l.match(/^\d{4}$/);"focus"===a&&""===l&&t.changeClass(n,"focus"),"change"===a&&("amount"===e&&s?(t.changeClass(n,"valid"),t.setData("amount",l,null)):"cardholder"===e&&i?(t.changeClass(n,"valid"),t.setData("cardholder",l,null)):"number"===e&&o?(t.changeClass(n,"valid"),t.setData("number",l,c)):(t.changeClass(n,"invalid"),"number"===e?t.setData("number",null,c):t.setData(e,null,null))),"blur"===a&&(""!==l?t.setValid():""===l?(t.changeClass(n,"blur"),t.setValid()):"amount"===e&&!s||"cardholder"===e&&!i||"number"===e&&!o?t.changeClass(n,"blur"):t.setValid())}},t.changeClass=function(e,a){var t=e.target;t.className=t.classList[0],"blur"!==a&&t.classList.add("".concat(t.className,"_").concat(a))};var n=JSON.parse(localStorage.getItem("state"));return null===n&&(n=[]),t.setTableRow=function(e,a){if("add"===e){var r=t.state,l=r.payerNumber1,c=r.payerNumber2,s=r.payerNumber3,i=r.payerNumber4,o=r.recipientNumber1,u=r.recipientNumber2,m=r.recipientNumber3,d=r.recipientNumber4,b={payerNumber:"".concat(l," ").concat(c," ").concat(s," ").concat(i),recipientNumber:"".concat(o," ").concat(u," ").concat(m," ").concat(d),amount:t.state.amount,date:t.state.date};n.push(b)}"remove"===e&&n.splice(a,1),t.setState({rows:n});var p=JSON.stringify(n);localStorage.setItem("state",p),t.clearState()},t.state={payerNumber1:null,payerNumber2:null,payerNumber3:null,payerNumber4:null,cardholder:null,expiryMonth:null,expiryYear:null,recipientNumber1:null,recipientNumber2:null,recipientNumber3:null,recipientNumber4:null,amount:null,isValid:!1,date:(new Date).toLocaleDateString(),rows:n},t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app__header"},r.a.createElement("h1",{className:"app__headline"},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u0441 \u043a\u0430\u0440\u0442\u044b \u043d\u0430 \u043a\u0430\u0440\u0442\u0443"),r.a.createElement("div",{className:"app__navbar"},r.a.createElement(p.b,{className:"app__link",activeClassName:"app__link_active",to:"/transfer"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"),r.a.createElement(p.b,{className:"app__link",activeClassName:"app__link_active",to:"/history"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"))),r.a.createElement("main",{className:"app__body"},r.a.createElement(h.b,{path:"/"},r.a.createElement(h.a,{to:"/transfer"})),r.a.createElement(h.b,{path:"/transfer"},r.a.createElement(v,{state:this.state,setExpiryDate:this.setExpiryDate,setTableRow:this.setTableRow,handleEvent:this.handleEvent})),r.a.createElement(h.b,{path:"/history"},r.a.createElement(E,{state:this.state,setTableRow:this.setTableRow})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.ac576d64.chunk.js.map