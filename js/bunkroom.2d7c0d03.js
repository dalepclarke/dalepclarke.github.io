(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bunkroom"],{"1d99":function(e,t,a){"use strict";var n=a("7a23");const o=e=>(Object(n["pushScopeId"])("data-v-794ddda4"),e=e(),Object(n["popScopeId"])(),e),c=o(()=>Object(n["createElementVNode"])("svg",{viewBox:"0 0 24 24"},[Object(n["createElementVNode"])("path",{fill:"#666666",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})],-1)),l=[c],s={key:1,class:"btn-expand"},r=o(()=>Object(n["createElementVNode"])("svg",{viewBox:"0 0 24 24"},[Object(n["createElementVNode"])("path",{fill:"#000000",d:"M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"})],-1)),i=[r],d={key:2,class:"title"};var u={__name:"ExpandableImage",props:{title:{type:String,default:""},dismissableMask:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!1},classes:{type:[String,Object],default:""}},emits:["loaded"],setup(e,{emit:t}){const a=e,o=Object(n["ref"])(),c=Object(n["ref"])(),r=Object(n["ref"])(),u=Object(n["ref"])(!1),p=Object(n["ref"])(!1),m=Object(n["computed"])(()=>u.value?a.classes.concat("loaded"):a.classes);function b(){clearInterval(r.value),u.value=!0,Object(n["nextTick"])(()=>{t("loaded")})}function A(e,t,a,n){const c=a>n?a/n:n/a,l=a>=n?c*t:e,s=n>a?c*e:t,r=(o.value.clientWidth-l)/2,i=r+l,d=(o.value.clientHeight-s)/2,u=d+s;return{left:r,top:d,right:i,bottom:u}}function v(e){"Escape"===e.key&&g(e)}function O(e){p.value?a.dismissableMask&&k(e):(p.value=!0,a.closeOnEscape&&window.addEventListener("keydown",v))}function g(e){p.value=!1,window.removeEventListener("keydown",v),e.stopPropagation()}function f(e){p.value&&e.preventDefault()}function k(e){e.stopPropagation();const t=A(c.value.width,c.value.height,c.value.naturalWidth,c.value.naturalHeight);(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&(p.value=!1)}return Object(n["onMounted"])(()=>{c.value.complete?(u.value=!0,Object(n["nextTick"])(()=>{t("loaded")})):r.value=setInterval(()=>{c.value.complete&&(u.value=!0,Object(n["nextTick"])(()=>{t("loaded")}),clearInterval(r.value))},100)}),(t,a)=>(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body",disabled:!p.value},[Object(n["createElementVNode"])("div",{ref_key:"main",ref:o,class:Object(n["normalizeClass"])(["expandable-image",{expanded:p.value}]),onClick:O,"on:touchMove":f},[p.value&&u.value?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",{key:0,class:"btn-close",onClick:g},l)):u.value?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",s,i)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("img",Object(n["mergeProps"])({ref_key:"image",ref:c},t.$attrs,{class:m.value,loading:"lazy",onLoad:b}),null,16),e.title&&u.value?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",d,Object(n["toDisplayString"])(e.title),1)):Object(n["createCommentVNode"])("",!0)],34)],8,["disabled"]))}},p=(a("d086"),a("6b0d")),m=a.n(p);const b=m()(u,[["__scopeId","data-v-794ddda4"]]);t["a"]=b},"20be":function(e,t,a){"use strict";a("9c7d")},"29dd":function(e,t,a){e.exports=a.p+"img/bunks1.8c2cb604.jpg"},"74fc":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nO2ZvytFYRjHX8VklE05sbCxXYtu2AwySQYmJQaLZEIWg8EmszJarpQkMcl/QMxWJRLDRy9Ped0O6bo/3nvu91PP8D7Pvc95zrfnPOc95zgnhBBCCCGEEEKINIAuYATIA+2ukQB2+c4LMO0aAWDATvoImAXmgBvgEWhxWQeYNgGGAt+6+Tpd1gFm7GTzgW/NfInLOkgA1AHoEvhAM8B9zQUNQT5ZBZZTbBJodg1wF/iNQ6DJZVyABXtGCK0b2LN47y95+4Fj4K5MdgXMAwfArfkugOGqb4RI+U9RvBW4B56BU+DSfn8NnJRoPp/nFTg33wPwBHTEJkDO4ou27gvXJdbpO8qzHfjGzTdRKQH27Umx2M4sXvgh7v2emTIKkFiOtcCXD49TCQH+S90LkJSY81thEgB1QJ8ugTqdAYMpG6G/mN8qe5ZsPWrrjRLzdVktVRcgRqoqwA6wGYnt1EKAxEVCXe0DsiTAlH0tisGmaiFAjFRVgBX7WhSDrdRCgMRFgoYglR+CW0G7FSLugEJQ51Y5BBj7Ydi8AW0uEnwtVlMaY/9J3GSvsIpvOz0uMnxNKXXmMvF2WgghhBBCCCGEcGXlHWCmqheOCN/AAAAAAElFTkSuQmCC"},"95d5":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o=a("74fc"),c=a.n(o),l=a("bf0b"),s=a.n(l),r=a("1d99");const i={class:"bunkroom"},d={class:"header"},u=Object(n["createElementVNode"])("h1",null,"Bunkroom",-1),p=Object(n["createElementVNode"])("div",{class:"summary"},[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("img",{src:c.a}),Object(n["createElementVNode"])("span",null,"4")]),Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("img",{src:s.a}),Object(n["createElementVNode"])("span",null,"4")])],-1),m=Object(n["createElementVNode"])("i",{class:"pi pi-angle-double-left"},null,-1),b={class:"info"},A={class:"basic"},v=Object(n["createElementVNode"])("span",{class:"description"}," Experience the camaraderie of shared adventures in our Bunkrooms at Little Desert Nature Lodge. Designed for groups and budget-conscious travellers, these rooms offer comfortable accommodations with a cozy atmosphere. Each Bunkroom features two sturdy two-person bunks, providing ample sleeping space for up to four guests. Shared ensuite bathrooms ensure convenience, while communal areas foster social connections and shared experiences. Whether you're embarking on a wilderness expedition or simply enjoying the company of fellow travellers, our Bunkrooms provides a welcoming retreat in the heart of the Australian bush. Immerse yourself in the spirit of adventure and camaraderie at Little Desert Nature Lodge. ",-1),O={class:"buttons"},g=Object(n["createStaticVNode"])('<div class="amenities"><h3>Amenities</h3><div class="list"><span>Linen Packages Available</span><span>Shared Reverse Cycle Air Conditioning</span><span>Shared Amenities Block</span><span>Gas BBQ in Camp Kitchen</span><span>Communal Shelter Shed With Undercover Sink and Seating</span><span>Recreation Room Available for Hire</span></div><span class="note">Please Note: No Television is available in the rooms</span></div><div class="info-footer"><span class="price">Room Price: $110 Per Night</span><span class="group-only">Bunkrooms are available for group bookings only</span></div>',2);var f={__name:"Bunkroom",setup(e){const t=Object(n["ref"])({type:"loop",role:"group",autoplay:!0,gap:"1rem",perPage:3,perMove:1,speed:900,interval:6e3,resetProgress:!0,breakpoints:{1340:{perPage:2},850:{perPage:1}}});return(e,o)=>{const c=Object(n["resolveComponent"])("router-link"),l=Object(n["resolveComponent"])("SplideSlide"),s=Object(n["resolveComponent"])("Splide"),f=Object(n["resolveComponent"])("Button");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createElementVNode"])("div",d,[u,p,Object(n["createVNode"])(c,{class:"link",to:"/accommodation"},{default:Object(n["withCtx"])(()=>[m,Object(n["createTextVNode"])(" Back ")]),_:1})]),Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(s,{options:t.value},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r["a"],{class:"image",src:a("29dd"),title:"Bunkroom",closeOnEscape:"",dismissableMask:""},null,8,["src"])]),_:1})]),_:1},8,["options"]),Object(n["createElementVNode"])("div",A,[v,Object(n["createElementVNode"])("div",O,[Object(n["createVNode"])(c,{to:{path:"/contact-us",query:{q:"accommodation-standard"}}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{class:"p-button-outlined p-button-info",label:"Enquire"})]),_:1})])]),g])])}}};a("20be");const k=f;t["default"]=k},"9c7d":function(e,t,a){},bf0b:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWklEQVR4nO2Za6hVVRCAt5WvItM0Kk0rDHuYZhClRv0p80bYy4oyK0Kix48I+ydlJgRlgZAVZpaGgZL9CHtpRUYFQSJZ2RMxDc3Mm2fvWfucunm9X0zOhuX2PK/3nCuyPthw2GfWmpn1mlmzoygQCAQCgUAgEAgEAoFAINA8gGNF5BYRWSUiv4lIhz36e6WITAeOiY5GRORyEfnOOUe1R0S+TZJkcnQ0kabpPTrTnpPbnXOLnXOP2rNYV4H3f0eapndHRwNpmraJSKc5FydJcq9uhQrbY5ZzLrFB6EzT9JroSAfoB8wA1gDbgC3AKP1v7969Jznn9pjze0Tkglr9OefGZm1EZHd7e/sg03M68DOwHXgXuAvoH/UmwGTgRw5lqjkz39vfV9fbr868126e6bqyjJ5fgCui3gCYBvztGaMz/6LNTB+Vcc5ttZl8v9H+RWStDcAW09cHuAN4wRzP+AeYHrUSYCzgzAABZmZOZyRJMsabxZmN6tBDMGsfx/E5ZWy4HSiYDSXgoqhVAB+ZYl0Bl5WT0SXvDcDYRnU458Z57a+qYMfFQGq2fBa1AmC8t/zmVJITkZsyB0ql0pmN6tE2Xli8sYo9sz17Lo2aDTDHlP0LDK4kp8lM5kCSJBMb1ZNrP6mKPSd4Z9H8qNkAy0zZpmpySZIMzeK/iFRcKZUQkces7b44jofUsOlLs2lV1GyAt+rdc865T20Wf20kZgMDLFvUAfikDvl1ZtN7UbMBXjJl22rJ6t71DrIF9eoQkee85T+tDpuyXGRp1GwATWUzxteSF5GPvcPs8Xy4zPXdR0TmevIf1mHPGM+e+6JmAwzzDp011RxSROSULCGy5/M0TacCfb0+++qdwTn3hSe3VUSG1WHPai8hOrWn/KwK8Iw36k/VGoRisThCRDbkrr5ORDY75753zqW5K/FX2qYOO3RFZTwbtQrgeGCjp3ytJkT+QACjgQXA28BIPQTt6ttepR6glyCN6/2B04B3gIXAuTn9l9h/GV9rOGzZAHi3sw0czB4Nj8Cu3PsH/NujXXbmOedesUd/T8lti1m5PnZb33/m3utEDI96A2CgJh9eOppH9+XrwJBu9D0IeAPYX6Hv1HQPbI53DQCcCNwGPG2Jkt4KH+yJQ8m2z0PW5zLTcavqPNy+A61EQ5pz7k4RWagZokYAEdlpz2Z7t9Bkaoa/IwIOnAGTKqW5ltjcLCIfaE5fqyLshcF9WkTRTLJSiNV02SpSA5ruaB5gArDcK4osz8ukaXqtiHxTxsF2EVnnnFui6bE9S+zdISFSRDZp4lTGhhVeQeY1YFzUbIARwEqgK3ciL8pkCoXCYOfcspwT260+eGGdRdEn9QKVG4xXtcha5k6Ssd8iTnOyQeB64C9PYYfdDNuyZVooFM52zv3kOf67iNyvsb8b+vpqmVxEdniD8EOhUDjLqxG2WSrckcsX2nra+dm5ePxmPvnQ2RWRXZ7zK+I4PvlwdeuKEpHl/qDmS2yWNerKzOjU0Hm4uv8HeMTrWIuQN0Q5isXicO/+3pWVsnsS59zDIrLfdOwoFotn5GWA64B2s7XLz0C7BTDFRjNbWhPKyPQTkY2Z8/rlJ2ruJ7Yu07XBT509e84HdnrnQve2AzDUy7tj7bicnOXx2fKcGzWZXL3giSo1gqxk/gfQ+FYEFnlLf0Y5GT30so+eIrK+1rW4J7DcYn32EVVtqCCn3w0ynu+OoqWVYnyGiJxnCU4Sx/HoqEWoLtWpupMkOeiq7GO5ivJyw0o4cCefWG6f5b8AlUqlkVGLKZVKo6o5rwDHWZ2idz+iBgKBQCAQCAQCgUB0hPEf/UXmqDIDd6kAAAAASUVORK5CYII="},d086:function(e,t,a){"use strict";a("fe50")},fe50:function(e,t,a){}}]);
//# sourceMappingURL=bunkroom.2d7c0d03.js.map