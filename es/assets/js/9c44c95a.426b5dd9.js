"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5430],{26173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var n=r(85893),a=r(11151),l=r(73992),s=r(18679),i=r(17661);const o={sidebar_position:1,title:"Wallets",displayed_sidebar:"generalSidebar"},c=void 0,u={id:"general/tutorials/wallets/wallets",title:"Wallets",description:"In this section, you will find Tutorials for Wallets that support Conflux Network",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/tutorials/wallets/wallets.mdx",sourceDirName:"general/tutorials/wallets",slug:"/general/tutorials/wallets/",permalink:"/es/docs/general/tutorials/wallets/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Wallets",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"OKX",permalink:"/es/docs/general/tutorials/transferring-funds/from-exchanges/okx"},next:{title:"Fluent",permalink:"/es/docs/general/tutorials/wallets/fluent"}},d={},h=[{value:"Supported Wallets",id:"supported-wallets",level:2}];function p(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In this section, you will find Tutorials for Wallets that support Conflux Network"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Wallets supported depend on the Space you plan to interact with."})}),"\n",(0,n.jsx)(t.h2,{id:"supported-wallets",children:"Supported Wallets"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Wallet (billetera)"}),(0,n.jsx)(t.th,{children:"Core Space Supported"}),(0,n.jsx)(t.th,{children:"eSpace Supported"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./fluent",children:"Fluent"})}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./ledger",children:"Ledger"})}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./metamask",children:"MetaMask"})}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2705"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"For more information about each wallet, please navigate to the corresponding section."}),"\n",(0,n.jsx)(t.p,{children:"If you want to learn more about Conflux supporting wallets, please checkout the following video:"}),"\n","\n",(0,n.jsx)(l.Z,{children:(0,n.jsx)(s.Z,{value:"youtube",label:"Conflux Wallets Walkthrough",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Aur7dF1dgG8?si=gniTiB6DethdLixG",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})}),"\n","\n","\n",(0,n.jsx)(i.Z,{})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},17661:(e,t,r)=>{r.d(t,{Z:()=>x});r(67294);var n=r(36905),a=r(78259),l=r(34791),s=r(2735),i=r(97325),o=r(13899);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(85893);function d(e){let{href:t,children:r}=e;return(0,u.jsx)(l.Z,{href:t,className:(0,n.Z)("card padding--lg",c.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:a,description:l}=e;return(0,u.jsxs)(d,{href:t,children:[(0,u.jsxs)(o.Z,{as:"h2",className:(0,n.Z)("text--truncate",c.cardTitle),title:a,children:[r," ",a]}),l&&(0,u.jsx)("p",{className:(0,n.Z)("text--truncate",c.cardDescription),title:l,children:l})]})}function p(e){let{item:t}=e;const r=(0,a.LM)(t);return r?(0,u.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.xz)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,a.jA)();return(0,u.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(b,{...e});const l=(0,a.MN)(t);return(0,u.jsx)("section",{className:(0,n.Z)("row",r),children:l.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(m,{item:e})},t)))})}},18679:(e,t,r)=>{r.d(t,{Z:()=>s});r(67294);var n=r(36905);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},73992:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(36905),l=r(72957),s=r(16550),i=r(81270),o=r(75238),c=r(33609),u=r(92560);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=h(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,d]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(51048);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function j(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),a=i[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var n=r(67294);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);