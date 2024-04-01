"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7620],{94922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(85893),r=n(11151);const s={displayed_sidebar:"generalSidebar"},a="Clone vs New/Create2",c={id:"general/build/smart-contracts/gas-optimization/clone",title:"Clone vs New/Create2",description:"In factory contracts, we often need to create several child contracts, and there are three common ways to do this:",source:"@site/docs/general/build/smart-contracts/gas-optimization/clone.md",sourceDirName:"general/build/smart-contracts/gas-optimization",slug:"/general/build/smart-contracts/gas-optimization/clone",permalink:"/es/docs/general/build/smart-contracts/gas-optimization/clone",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Bitmap & Bitwise operation",permalink:"/es/docs/general/build/smart-contracts/gas-optimization/bitmap"},next:{title:"Constant vs Immutable",permalink:"/es/docs/general/build/smart-contracts/gas-optimization/constant"}},i={},d=[];function l(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"clone-vs-newcreate2",children:"Clone vs New/Create2"}),"\n",(0,o.jsx)(t.p,{children:"In factory contracts, we often need to create several child contracts, and there are three common ways to do this:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Using ",(0,o.jsx)(t.code,{children:"new"})," to create through an existing contract, the new keyword allows for the instantiation of child contracts directly through an existing contract's codebase. This approach involves incorporating the child contract's bytecode within the factory contract itself, necessitating its deployment simultaneously. This method is straightforward and intuitive but requires careful management to avoid bloating the factory contract, especially given the Ethereum network's contract size limitations."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Using ",(0,o.jsx)(t.code,{children:"create2"})," to create through creation code, this method requires loading the creation code into the factory contract before any child. A significant advantage of create2 is its predictability in generating contract addresses, which can be predetermined before the actual contract deployment, facilitating more complex deployment schemes and interactions."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Using ",(0,o.jsx)(t.code,{children:"clone"})," to clone an existing contract, the clone technique leverages the concept of minimal proxies as specified in EIP1167 to duplicate an already deployed contract. By cloning an existing contract, developers can significantly reduce the gas costs associated with deploying numerous contract instances. This method requires a pre-deployed copy of the child contract, from which clones are created with their own state but sharing the same codebase."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"DemoCode"})}),"\n",(0,o.jsx)(t.p,{children:"Below, we create child contracts using all three methods to observe the difference in gas consumption:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:"// Deploying with 'new', Gas: 79515\nfunction deployNewExample() external returns (address) {\n    DemoContract demo = new DemoContract();\n    return address(demo);\n}\n\n// Deploying with 'create2', Gas: 93031\nfunction deployWithCreate2(uint256 salt) external payable returns (address) {\n    address deployedAddress;\n    bytes memory contractBytecode = predefinedCreationCode;\n    assembly {\n        deployedAddress := create2(0, add(contractBytecode, 32), mload(contractBytecode), salt)\n        if iszero(extcodesize(deployedAddress)) {\n            revert(0, 0)\n        }\n    }\n    return deployedAddress;\n}\n\n// Deploying with 'clone', Gas: 41493\nfunction deployClone(address prototype) internal returns (address deployedClone) {\n    bytes20 prototypeBytes = bytes20(prototype);\n    assembly {\n        let cloneBuffer := mload(0x40)\n        mstore(\n            cloneBuffer,\n            0x3d602d80600a3d3981f3363d3d373d3d3d363d73ffffffffffffffffffffffffffffffffffffffff\n        )\n        mstore(add(cloneBuffer, 0x14), prototypeBytes)\n        mstore(\n            add(cloneBuffer, 0x28),\n            0x5af43d82803e903d91602b57fd5bf3ffffffffffffffffffffffffffffffffffffffff\n        )\n        deployedClone := create(0, cloneBuffer, 0x37)\n    }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Recommendations for gas optimization:"}),"\n",(0,o.jsxs)(t.p,{children:["\ud83c\udf1f When using the ",(0,o.jsx)(t.code,{children:"new"})," operator, while convenient, it can easily lead to a situation where the size of the child contract causes the factory contract to exceed the 24kB limit."]}),"\n",(0,o.jsxs)(t.p,{children:["\ud83c\udf1f Compared to ",(0,o.jsx)(t.code,{children:"create2"})," and ",(0,o.jsx)(t.code,{children:"clone"}),", cloning is more recommended for gas optimization."]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var o=n(67294);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);