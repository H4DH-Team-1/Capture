(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(8),l=a.n(i),o=(a(15),a(3)),r=a(4),h=a(6),d=a(5),u=(a(16),a(2)),b=a(9),m=a.n(b),j={height:100},p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setRef=function(e){n.webcam=e},n.capture=function(){var e=n.webcam.getScreenshot();n.setState({image:e}),n.props.onChange(e)},n.state={image:""},n.takeScreenShot=n.takeScreenShot.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"takeScreenShot",value:function(e){e.preventDefault()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"row my-3 pt-3",children:[Object(n.jsx)("label",{className:"col-3 ",children:"Picture: "}),Object(n.jsx)(m.a,{audio:!1,height:350,ref:this.setRef,screenshotFormat:"image/jpeg",width:550,videoConstraints:{width:1280,height:720,facingMode:"user"},className:"col-5"}),Object(n.jsx)("button",{className:"col-2 my-3",onClick:this.capture,style:j,children:"Capture photo"}),Object(n.jsx)("img",{src:this.state.image})]})}}]),a}(c.a.Component),g=(a(17),a(20)),v=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var s=null;return s=e.maskId?e.maskId:Object(g.a)(),n.state={name:"",phone:"",postCode:"",maskId:s,image:"",result:""},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n.handlePhoneChange=n.handlePhoneChange.bind(Object(u.a)(n)),n.handlePostCodeChange=n.handlePostCodeChange.bind(Object(u.a)(n)),n.handleImageChange=n.handleImageChange.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handlePhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"handlePostCodeChange",value:function(e){this.setState({postCode:e.target.value})}},{key:"handleImageChange",value:function(e){console.log("image changed"),this.setState({image:e})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a="";this.state.name||(a+="Name must be supplied"),this.state.phone||(a+="Phone must be supplied"),this.state.postCode||(a+="Post Code must be supplied"),this.state.image||(a+="A photo must be supplied"),this.state.maskId||(a+="A Mask ID must be supplied - you may need to reload the page by scanning the QR again"),a&&a.length>0?alert("Please correct the following and try again: ".concat(a)):fetch("https://n4xy6udiic.execute-api.ap-southeast-2.amazonaws.com/dev/checkin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,phone:this.state.phone,postcode:this.state.postCode,image:this.state.image,maskId:this.state.maskId})}).then((function(e){return e.json()})).then((function(e){console.log("The result from API is ",e),t.setState({result:e.response.success}),console.log("the result is succesful: ",e.response.success),e.response.success?alert("Thank you for checking in, enjoy your visit!"):alert("There was a problem checking you in, please see your friendly checkin staff for assistance")}))}},{key:"render",value:function(){var e=this.state.postCode;return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"formborder",children:[Object(n.jsxs)("div",{className:"row pt-3 my-3",children:[Object(n.jsx)("label",{className:"col-3",children:"Name: "}),Object(n.jsx)("input",{type:"text",className:"form-control col-5",value:this.state.userName,onChange:this.handleNameChange})]}),Object(n.jsxs)("div",{className:"row my-3 pt-3",children:[Object(n.jsx)("label",{className:"col-3",children:"Phone: "}),Object(n.jsx)("input",{type:"tel",className:"form-control col-5",value:this.state.phone,onChange:this.handlePhoneChange})]}),Object(n.jsxs)("div",{className:"row my-3 pt-3",children:[Object(n.jsx)("label",{className:"col-3",children:"Post Code: "}),Object(n.jsx)("input",{type:"text",className:"form-control col-5",value:e,onChange:this.handlePostCodeChange})]}),Object(n.jsx)(p,{onChange:this.handleImageChange}),Object(n.jsx)("div",{className:"row centered",children:Object(n.jsx)("button",{type:"submit",value:"Submit",className:"btn btn-info col-5",children:"Submit"})})]})}}]),a}(c.a.Component),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"#",children:"Capture Form"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsxs)("a",{className:"nav-link",href:"#",children:["Home ",Object(n.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#",children:"Capture details"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link disabled",href:"#",children:"Help"})})]})})]})}}]),a}(c.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container my-3 pt-3",children:[Object(n.jsx)(O,{}),Object(n.jsx)(v,{})]})})}}]),a}(c.a.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.ca4204a2.chunk.js.map