(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lodge"],{"1d99":function(e,t,a){"use strict";var o=a("7a23");const n=e=>(Object(o["pushScopeId"])("data-v-794ddda4"),e=e(),Object(o["popScopeId"])(),e),l=n(()=>Object(o["createElementVNode"])("svg",{viewBox:"0 0 24 24"},[Object(o["createElementVNode"])("path",{fill:"#666666",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})],-1)),r=[l],c={key:1,class:"btn-expand"},i=n(()=>Object(o["createElementVNode"])("svg",{viewBox:"0 0 24 24"},[Object(o["createElementVNode"])("path",{fill:"#000000",d:"M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"})],-1)),s=[i],d={key:2,class:"title"};var u={__name:"ExpandableImage",props:{title:{type:String,default:""},dismissableMask:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!1},classes:{type:[String,Object],default:""}},emits:["loaded"],setup(e,{emit:t}){const a=e,n=Object(o["ref"])(),l=Object(o["ref"])(),i=Object(o["ref"])(),u=Object(o["ref"])(!1),p=Object(o["ref"])(!1),f=Object(o["computed"])(()=>u.value?a.classes.concat("loaded"):a.classes);function b(){clearInterval(i.value),u.value=!0,Object(o["nextTick"])(()=>{t("loaded")})}function m(e,t,a,o){const l=a>o?a/o:o/a,r=a>=o?l*t:e,c=o>a?l*e:t,i=(n.value.clientWidth-r)/2,s=i+r,d=(n.value.clientHeight-c)/2,u=d+c;return{left:i,top:d,right:s,bottom:u}}function h(e){"Escape"===e.key&&v(e)}function g(e){p.value?a.dismissableMask&&O(e):(p.value=!0,a.closeOnEscape&&window.addEventListener("keydown",h))}function v(e){p.value=!1,window.removeEventListener("keydown",h),e.stopPropagation()}function j(e){p.value&&e.preventDefault()}function O(e){e.stopPropagation();const t=m(l.value.width,l.value.height,l.value.naturalWidth,l.value.naturalHeight);(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&(p.value=!1)}return Object(o["onMounted"])(()=>{l.value.complete?(u.value=!0,Object(o["nextTick"])(()=>{t("loaded")})):i.value=setInterval(()=>{l.value.complete&&(u.value=!0,Object(o["nextTick"])(()=>{t("loaded")}),clearInterval(i.value))},100)}),(t,a)=>(Object(o["openBlock"])(),Object(o["createBlock"])(o["Teleport"],{to:"body",disabled:!p.value},[Object(o["createElementVNode"])("div",{ref_key:"main",ref:n,class:Object(o["normalizeClass"])(["expandable-image",{expanded:p.value}]),onClick:g,"on:touchMove":j},[p.value&&u.value?(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",{key:0,class:"btn-close",onClick:v},r)):u.value?(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",c,s)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("img",Object(o["mergeProps"])({ref_key:"image",ref:l},t.$attrs,{class:f.value,loading:"lazy",onLoad:b}),null,16),e.title&&u.value?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",d,Object(o["toDisplayString"])(e.title),1)):Object(o["createCommentVNode"])("",!0)],34)],8,["disabled"]))}},p=(a("d086"),a("6b0d")),f=a.n(p);const b=f()(u,[["__scopeId","data-v-794ddda4"]]);t["a"]=b},"71c0":function(e,t,a){e.exports=a.p+"img/11879128_10153169942431872_7604745650969256972_o.ae2b712c.jpg"},9024:function(e,t,a){"use strict";a("ece9")},c0f3:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),n=a("1d99");const l=e=>(Object(o["pushScopeId"])("data-v-45c2bdea"),e=e(),Object(o["popScopeId"])(),e),r={class:"lodge"},c=l(()=>Object(o["createElementVNode"])("div",{class:"info"},[Object(o["createElementVNode"])("h1",null,"About the Lodge"),Object(o["createElementVNode"])("p",null," Welcome to Little Desert Nature Lodge. Located on the edge of the pristine Little Desert National Park and near the township of Nhill, the Little Desert Nature Lodge began its journey in 1969 with four-wheel drive tours into the Little Desert National Park to raise awareness of the unique local flora and fauna, at a time when plans were afoot to subdivide the remaining natural vegetation for additional pastoral leases. "),Object(o["createElementVNode"])("p",null," Nestled between the open landscapes of rural grazing and cultivation enterprises to the north and the Little Desert National Park to the south, the lodge offers a harmonious blend of rural charm and unspoiled wilderness. Our direct access gate seamlessly connects adjoining walking tracks to the renowned Stringybark Walk. To protect the local flora and fauna, we've put up an electrified animal-proof fence around the lodge that keeps feral predators as well as destructive grazers out. "),Object(o["createElementVNode"])("p",null," At Little Desert Nature Lodge, we're most known for the native flora and fauna of the Wimmera Region, especially the iconic Malleefowl. Drawing a diverse audience, including international and student groups year after year. Whether you're a bird enthusiast, a photography lover, an artist, an astronomer, a lover of nature in general or just someone looking for a healthy getaway, our lodge has something special to offer you. "),Object(o["createElementVNode"])("p",null," With comfortable rooms, friendly service and a chance to immerse yourself in nature. Within our inviting accommodations, hosting up to 120 guests, you'll discover a range of options to suit your preferences, from garden view rooms offering picturesque views and private ensuites to standard rooms complemented by a shared lounging area, as well as dorm-style bunk rooms, all designed to provide comfort and convenience. If you're an outdoor enthusiast, we also offer powered and unpowered camping sites. For culinary delights, our fully licensed restaurant stands ready to satisfy your appetite and offer a moment of relaxation. "),Object(o["createElementVNode"])("p",null," Imagine waking up to kangaroos outside your window, the laughter of Kookaburras filling the air, the occasional chirping and melodic song of the local birdlife, and the company of George, our friendly resident emu. Enjoy leisurely walks on our grounds, taking in the picturesque sunrises, sunsets and the brilliant starry nights. "),Object(o["createElementVNode"])("p",null," Yet, our mission extends beyond offering a serene escape. Little Desert Nature Lodge plays a crucial role in conservation efforts, serving as a sanctuary and breeding ground for the endangered Malleefowl. We proudly participate in the Wild Futures threatened program, contributing to the preservation of this remarkable species. We hope to attract people from across Australia to appreciate the value and beauty of the remarkable Wimmera region. "),Object(o["createElementVNode"])("p",null," Come and experience the tranquillity and natural beauty that Little Desert Nature Lodge has to offer. We're excited to welcome you and share the magic of this remarkable corner of the world. ")],-1)),i={class:"extra"},s={class:"additional"},d=l(()=>Object(o["createElementVNode"])("h2",null,"Additional Info",-1)),u={class:"links"};var p={__name:"Lodge",setup(e){return(e,t)=>{const l=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[c,Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(n["a"],{src:a("71c0"),dismissableMask:"",closeOnEscape:""},null,8,["src"]),Object(o["createElementVNode"])("div",s,[d,Object(o["createElementVNode"])("div",u,[Object(o["createVNode"])(l,{class:"link",to:"/about/history"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" History ")]),_:1}),Object(o["createVNode"])(l,{class:"link",to:"/about/location"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Location & Map ")]),_:1}),Object(o["createVNode"])(l,{class:"link",to:"/about/malleefowl"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Malleefowl ")]),_:1})])])])])}}},f=(a("9024"),a("6b0d")),b=a.n(f);const m=b()(p,[["__scopeId","data-v-45c2bdea"]]);t["default"]=m},d086:function(e,t,a){"use strict";a("fe50")},ece9:function(e,t,a){},fe50:function(e,t,a){}}]);
//# sourceMappingURL=lodge.80cc6aaa.js.map