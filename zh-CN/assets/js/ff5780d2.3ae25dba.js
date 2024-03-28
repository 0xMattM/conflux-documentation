"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9624],{26159:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=e(85893),s=e(11151);const a={displayed_sidebar:"generalSidebar"},r="Uint Types Gas Comparison",o={id:"general/build/smart-contracts/gas-optimization/uint",title:"Uint Types Gas Comparison",description:"It's a common belief that in Solidity, smaller integer types like uint8, uint16, uint32, uint64, uint128, and uint256 might save gas due to their smaller size. However, this isn't always the case.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/build/smart-contracts/gas-optimization/uint.md",sourceDirName:"general/build/smart-contracts/gas-optimization",slug:"/general/build/smart-contracts/gas-optimization/uint",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/uint",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Variable Packing",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/packing"},next:{title:"Unchecked",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/unchecked"}},c={},l=[];function u(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"uint-types-gas-comparison",children:"Uint Types Gas Comparison"}),"\n",(0,i.jsxs)(t.p,{children:["It's a common belief that in Solidity, smaller integer types like ",(0,i.jsx)(t.code,{children:"uint8"}),", ",(0,i.jsx)(t.code,{children:"uint16"}),", ",(0,i.jsx)(t.code,{children:"uint32"}),", ",(0,i.jsx)(t.code,{children:"uint64"}),", ",(0,i.jsx)(t.code,{children:"uint128"}),", and ",(0,i.jsx)(t.code,{children:"uint256"})," might save gas due to their smaller size. However, this isn't always the case."]}),"\n",(0,i.jsxs)(t.p,{children:["The Ethereum Virtual Machine (EVM) allocates a 256-bit slot for each stored variable. For instance, if we declare a variable of type ",(0,i.jsx)(t.code,{children:"uint8"}),", the EVM fills the missing bits with zeros to fit it into a single slot. Additionally, during execution, the EVM converts ",(0,i.jsx)(t.code,{children:"uintN"})," types to ",(0,i.jsx)(t.code,{children:"uint256"})," for computations."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"DemoCode"})}),"\n",(0,i.jsxs)(t.p,{children:["Let's test ",(0,i.jsx)(t.code,{children:"uint8"}),", ",(0,i.jsx)(t.code,{children:"uint32"}),", and ",(0,i.jsx)(t.code,{children:"uint256"})," to observe their behavior in terms of writing data."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Uint8Example {\n    uint8 public uint8val;\n\n    // gas 22234\n    function set() external {\n        uint8val = 1;\n    }\n\n    // gas 53427\n    function compute() external returns (uint8) {\n        uint8 target = 50;\n        for (uint8 i = 0; i < target; i++) {\n            uint8val += 1;\n        }\n        return uint8val;\n    }\n}\n\ncontract Uint32Example {\n\n    uint32 public uint32val;\n\n    // gas 22234\n    function set() external {\n        uint32val = 1;\n    }\n\n    // gas 53895\n    function compute() external returns (uint32) {\n        uint32 target = 50;\n        for (uint32 i = 0; i < target; i++) {\n            uint32val += 1;\n        }\n        return uint32val;\n    }\n}\n\ncontract Uint256Example {\n    uint256 public uint256val;\n\n    // gas 22238\n    function set() external {\n        uint256val = 1;\n    }\n\n    // gas 42950\n    function compute() external returns (uint256) {\n        uint256 target = 50;\n        for (uint256 i = 0; i < target; i++) {\n            uint256val += 1;\n        }\n        return uint256val;\n    }\n}\n\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["As observed, in loop computations, ",(0,i.jsx)(t.code,{children:"uint256"})," saves over 10,000 gas. Therefore, smaller variables don't necessarily equate to gas savings."]}),"\n",(0,i.jsx)(t.p,{children:"Recommendations for gas optimization:"}),"\n",(0,i.jsxs)(t.p,{children:["\ud83c\udf1fIf variables cannot be packed together, using ",(0,i.jsx)(t.code,{children:"uint"})," or ",(0,i.jsx)(t.code,{children:"uint256"})," is the optimal choice."]})]})}function d(n={}){const{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>o,a:()=>r});var i=e(67294);const s={},a=i.createContext(s);function r(n){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(a.Provider,{value:t},n.children)}}}]);