"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3073],{45872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(85893),o=t(11151);const a={displayed_sidebar:"generalSidebar"},s="Bitmap & Bitwise operation",r={id:"general/build/smart-contracts/gas-optimization/bitmap",title:"Bitmap & Bitwise operation",description:"Storing data on the blockchain is extremely expensive. To decrease gas costs, innovative projects implement clever techniques. The method we're discussing today is often found in the source code of leading projects.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/build/smart-contracts/gas-optimization/bitmap.md",sourceDirName:"general/build/smart-contracts/gas-optimization",slug:"/general/build/smart-contracts/gas-optimization/bitmap",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/bitmap",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Memory vs Calldata",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/memoryAndCalldata"},next:{title:"Clone vs New/Create2",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/clone"}},c={},d=[{value:"Gas Optimization Suggestions:",id:"gas-optimization-suggestions",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap--bitwise-operation",children:"Bitmap & Bitwise operation"}),"\n",(0,i.jsx)(n.p,{children:"Storing data on the blockchain is extremely expensive. To decrease gas costs, innovative projects implement clever techniques. The method we're discussing today is often found in the source code of leading projects."}),"\n",(0,i.jsxs)(n.p,{children:["Consider a ",(0,i.jsx)(n.code,{children:"uint8"}),", represented in binary as ",(0,i.jsx)(n.code,{children:"00000000"}),", where each bit can be either ",(0,i.jsx)(n.code,{children:"0"})," or ",(0,i.jsx)(n.code,{children:"1"}),". Traditionally, ",(0,i.jsx)(n.code,{children:"1"})," is treated as true and ",(0,i.jsx)(n.code,{children:"0"})," as false. This strategy allows for the effective and economical management of boolean value through bitwise operation."]}),"\n",(0,i.jsxs)(n.p,{children:["In Solidity, ",(0,i.jsx)(n.code,{children:"1 << n"})," represents a bit shift operation, moving the number ",(0,i.jsx)(n.code,{children:"1"})," left by ",(0,i.jsx)(n.code,{children:"n"})," bits, with the right-hand vacated bits filled with ",(0,i.jsx)(n.code,{children:"0"}),". For example, if ",(0,i.jsx)(n.code,{children:"n"})," is ",(0,i.jsx)(n.code,{children:"2"}),", then ",(0,i.jsx)(n.code,{children:"1 << 2"})," results in ",(0,i.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Demo Code"})}),"\n",(0,i.jsx)(n.p,{children:"The following demonstrates managing the same data using both a boolean array and bitwise operation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"contract Bitmap {\n    bool[8] boolArrayImplementation;\n    uint8 bitmapImplementation;\n\n    function setBoolArrayData(bool[8] memory data) external {\n        boolArrayImplementation = data;\n    }\n\n    function setBitmapData(uint8 data) external {\n        bitmapImplementation = data;\n    }\n\n    // gas:35729\n    function readBoolArray(uint8 index) external returns (bool) {\n        return boolArrayImplementation[index];\n    }\n\n    // gas:22366\n    function readBitmap(uint indexFromRight) external returns (bool) {\n        uint256 bitAtIndex = bitmapImplementation & (1 << indexFromRight);\n        return bitAtIndex > 0;\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"readBitmap"})," function, The ",(0,i.jsx)(n.code,{children:"&"})," performs an ",(0,i.jsx)(n.code,{children:"AND"})," operation on each bit of ",(0,i.jsx)(n.code,{children:"bitmapImplementation"})," and ",(0,i.jsx)(n.code,{children:"(1 << indexFromRight)"}),". The resulting bit is ",(0,i.jsx)(n.code,{children:"1"})," only if both bits at that position are ",(0,i.jsx)(n.code,{children:"1"}),", otherwise, it's ",(0,i.jsx)(n.code,{children:"0"}),". This operation is commonly used to check if a specific bit is set to ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"gas-optimization-suggestions",children:"Gas Optimization Suggestions:"}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf1fConsidering practical scenarios, bitwise operators can be used for managing certain variables to save gas."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);