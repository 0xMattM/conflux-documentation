"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3185],{70937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(85893),r=t(11151);const i={displayed_sidebar:"generalSidebar"},s="Unchecked",a={id:"general/build/smart-contracts/gas-optimization/unchecked",title:"Unchecked",description:"We know that before the Solidity version 0.8, it was necessary to manually import the SafeMath library to ensure data safety and avoid overflow, thereby preventing overflow attacks.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/build/smart-contracts/gas-optimization/unchecked.md",sourceDirName:"general/build/smart-contracts/gas-optimization",slug:"/general/build/smart-contracts/gas-optimization/unchecked",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/unchecked",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Uint Types Gas Comparison",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/uint"},next:{title:"Tools",permalink:"/zh-CN/docs/category/tools"}},c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"unchecked",children:"Unchecked"}),"\n",(0,o.jsx)(n.p,{children:"We know that before the Solidity version 0.8, it was necessary to manually import the SafeMath library to ensure data safety and avoid overflow, thereby preventing overflow attacks."}),"\n",(0,o.jsx)(n.p,{children:"After Solidity version 0.8, Solidity performs a check every time there is a data change to determine whether there is an overflow, thus deciding whether to throw an exception."}),"\n",(0,o.jsxs)(n.p,{children:["This also means that the check incurs additional gas costs. By using ",(0,o.jsx)(n.code,{children:"unchecked"})," wisely, it is possible to effectively remove the intermediate checking step, thus achieving the purpose of saving gas."]}),"\n",(0,o.jsxs)(n.p,{children:["Learn more: ",(0,o.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.25/control-structures.html#checked-or-unchecked-arithmetic",children:"Checked or Unchecked Arithmetic"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Demo Code"})}),"\n",(0,o.jsxs)(n.p,{children:["Below, we demonstrate using both a conventional for-loop and an ",(0,o.jsx)(n.code,{children:"unchecked"})," for-loop. Note that since ",(0,o.jsx)(n.code,{children:"iterations"})," is already of type ",(0,o.jsx)(n.code,{children:"uint256"}),", there will not be an overflow issue."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-solidity",children:"contract UncheckedExample {\n    // gas: 1910309 \n    function conventionalForLoop(uint256 iterations) external pure returns (uint256 result) {\n        for (uint256 index = 0; index < iterations; index++) {\n            result = index + 1;\n        }\n    }\n\n    // gas: 570287 \n    function uncheckedForLoop(uint256 iterations) external pure returns (uint256 result) {\n        for (uint256 index = 0; index < iterations; ) {\n            unchecked {\n                result = index + 1;\n                index++;\n            }\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Recommendations for gas optimization:"}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf1f In situations where security is controllable, the unchecked block can be used to save gas."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);