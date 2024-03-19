"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7612],{1674:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var l=s(85893),n=s(11151);const i={sidebar_position:9,title:"Gnosis Safe Wallet",displayed_sidebar:"eSpaceSidebar"},t=void 0,c={id:"espace/build/infrastructure/gnosis-safe-wallet",title:"Gnosis Safe Wallet",description:"Gnosis Safe Wallet \u662f\u533a\u5757\u94fe\u9886\u57df\u8457\u540d\u7684\u591a\u91cd\u7b7e\u540d\u94b1\u5305\u670d\u52a1\uff0c\u63d0\u4f9b\u5b89\u5168\u7684\u8d44\u91d1\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u3002 \u5b83\u5728\u4ee5\u592a\u574a\u548c EVM\uff08\u4ee5\u592a\u574a\u865a\u62df\u673a\uff09\u517c\u5bb9\u7684\u533a\u5757\u94fe\u751f\u6001\u7cfb\u7edf\u4e2d\u7279\u522b\u53d7\u6b22\u8fce\u3002 Gnosis Safe \u7684\u5168\u90e8\u6e90\u4ee3\u7801\uff0c\u5305\u62ec\u5176\u667a\u80fd\u5408\u7ea6\u3001\u524d\u7aef\u548c\u540e\u7aef\u4ee3\u7801\uff0c\u90fd\u662f\u5f00\u6e90\u7684\uff0c\u786e\u4fdd\u4e86\u900f\u660e\u6027\u4e0e\u793e\u533a\u4fe1\u4efb\u5ea6\u3002 Gnosis Safe \u81f4\u529b\u4e8e\u521b\u65b0\uff0c\u5b83\u5f15\u5165\u4e86\u50cf\u8d26\u6237\u62bd\u8c61\u5316\u8fd9\u6837\u7684\u529f\u80fd\uff0c\u8fdb\u4e00\u6b65\u589e\u5f3a\u4e86\u7528\u6237\u4f53\u9a8c\u5e76\u63d0\u9ad8\u4e86\u5b89\u5168\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/infrastructure/gnosis-safe-wallet.md",sourceDirName:"espace/build/infrastructure",slug:"/espace/build/infrastructure/gnosis-safe-wallet",permalink:"/zh-CN/docs/espace/build/infrastructure/gnosis-safe-wallet",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Gnosis Safe Wallet",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"\u9884\u8a00\u673a",permalink:"/zh-CN/docs/espace/build/infrastructure/oracles"},next:{title:"EVM\u517c\u5bb9\u6027",permalink:"/zh-CN/docs/espace/build/evm-compatibility"}},r={},o=[{value:"\u4e0e eSpace \u96c6\u6210",id:"\u4e0e-espace-\u96c6\u6210",level:3},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"\u8bbf\u95ee Safe-Wallet-Web \u7684 URL \u662f\u4ec0\u4e48\uff1f",id:"\u8bbf\u95ee-safe-wallet-web-\u7684-url-\u662f\u4ec0\u4e48",level:3},{value:"Safe \u5408\u7ea6\u7684\u9ed8\u8ba4\u7248\u672c\u662f\uff1f",id:"safe-\u5408\u7ea6\u7684\u9ed8\u8ba4\u7248\u672c\u662f",level:3},{value:"\u662f\u5426\u4e3a\u6d4b\u8bd5\u7f51\u63d0\u4f9b\u4e86 Safe-Wallet-Web\uff1f",id:"\u662f\u5426\u4e3a\u6d4b\u8bd5\u7f51\u63d0\u4f9b\u4e86-safe-wallet-web",level:3},{value:"Safe Web Wallet \u6216 App \u7684\u5b98\u65b9\u7248\u672c\u80fd\u7528\u4e8e eSpace \u5417\uff1f",id:"safe-web-wallet-\u6216-app-\u7684\u5b98\u65b9\u7248\u672c\u80fd\u7528\u4e8e-espace-\u5417",level:3},{value:"\u662f\u5426\u6709\u652f\u6301 eSpace \u7684 Safe App \u79fb\u52a8\u7248\u672c\uff1f",id:"\u662f\u5426\u6709\u652f\u6301-espace-\u7684-safe-app-\u79fb\u52a8\u7248\u672c",level:3},{value:"\u5982\u679c\u5728\u70b9\u51fb\u201c\u8fde\u63a5\u201d\u6309\u94ae\u65f6\u65e0\u6cd5\u89e6\u53d1\u94b1\u5305\u8fde\u63a5\u5f39\u7a97\u5e94\u8be5\u600e\u4e48\u529e\uff1f",id:"\u5982\u679c\u5728\u70b9\u51fb\u8fde\u63a5\u6309\u94ae\u65f6\u65e0\u6cd5\u89e6\u53d1\u94b1\u5305\u8fde\u63a5\u5f39\u7a97\u5e94\u8be5\u600e\u4e48\u529e",level:3}];function p(e){const a={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"https://safe.global/",children:"Gnosis Safe Wallet"})," \u662f\u533a\u5757\u94fe\u9886\u57df\u8457\u540d\u7684\u591a\u91cd\u7b7e\u540d\u94b1\u5305\u670d\u52a1\uff0c\u63d0\u4f9b\u5b89\u5168\u7684\u8d44\u91d1\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u3002 \u5b83\u5728\u4ee5\u592a\u574a\u548c EVM\uff08\u4ee5\u592a\u574a\u865a\u62df\u673a\uff09\u517c\u5bb9\u7684\u533a\u5757\u94fe\u751f\u6001\u7cfb\u7edf\u4e2d\u7279\u522b\u53d7\u6b22\u8fce\u3002 Gnosis Safe \u7684\u5168\u90e8\u6e90\u4ee3\u7801\uff0c\u5305\u62ec\u5176\u667a\u80fd\u5408\u7ea6\u3001\u524d\u7aef\u548c\u540e\u7aef\u4ee3\u7801\uff0c\u90fd\u662f\u5f00\u6e90\u7684\uff0c\u786e\u4fdd\u4e86\u900f\u660e\u6027\u4e0e\u793e\u533a\u4fe1\u4efb\u5ea6\u3002 Gnosis Safe \u81f4\u529b\u4e8e\u521b\u65b0\uff0c\u5b83\u5f15\u5165\u4e86\u50cf\u8d26\u6237\u62bd\u8c61\u5316\u8fd9\u6837\u7684\u529f\u80fd\uff0c\u8fdb\u4e00\u6b65\u589e\u5f3a\u4e86\u7528\u6237\u4f53\u9a8c\u5e76\u63d0\u9ad8\u4e86\u5b89\u5168\u6027\u3002"]}),"\n",(0,l.jsx)(a.p,{children:"Gnosis Safe Wallet \u662f\u8bb8\u591a DeFi\uff08\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\uff09\u9879\u76ee\u9009\u62e9\u7684\u8d44\u91d1\u7ba1\u7406\u5de5\u5177\uff0c\u4f8b\u5982 Uniswap\u3001Chainlink \u548c MakerDAO \u7b49\uff0c\u8fd9\u51f8\u663e\u4e86\u5176\u53ef\u9760\u6027\u548c\u5728\u884c\u4e1a\u5185\u88ab\u5e7f\u6cdb\u91c7\u7528\u7684\u7279\u70b9\u3002"}),"\n",(0,l.jsx)(a.h3,{id:"\u4e0e-espace-\u96c6\u6210",children:"\u4e0e eSpace \u96c6\u6210"}),"\n",(0,l.jsxs)(a.p,{children:["\u4e3a\u4e86\u652f\u6301 eSpace \u751f\u6001\u7cfb\u7edf\u5185\u7684\u5f00\u53d1\u8005\u548c DeFi \u9879\u76ee\uff0ceSpace \u5df2\u5c06 Gnosis Safe Wallet \u6574\u5408\u5230\u4e86\u5176\u57fa\u7840\u8bbe\u65bd\u4e2d\u3002 Safe \u5408\u7ea6\u7684 ",(0,l.jsx)(a.a,{href:"https://github.com/safe-global/safe-smart-account/blob/main/CHANGELOG.md#version-130-libs0",children:"1.3.0 \u7248\u672c"})," \u548c ",(0,l.jsx)(a.a,{href:"https://github.com/safe-global/safe-smart-account/blob/main/CHANGELOG.md#version-141",children:"1.4.1 \u7248\u672c"})," \u5df2\u5728 eSpace \u4e3b\u7f51\u548c\u6d4b\u8bd5\u7f51\u4e0a\u90e8\u7f72\uff0c\u5176\u5730\u5740\u53ef\u5728\u53d8\u66f4\u65e5\u5fd7\u4e2d\u627e\u5230\u3002 \u5bf9\u4e8e\u4e3b\u7f51\u7528\u6237\u6765\u8bf4\uff0c\u63d0\u4f9b\u4e13\u7528\u7684 ",(0,l.jsx)(a.a,{href:"https://safe.conflux123.xyz/",children:"Safe-Wallet-Web frontend"})," \u524d\u7aef\uff0c\u80fd\u591f\u4f7f\u7528\u6237\u521b\u5efa\u5e76\u7ba1\u7406 CFX \u548c ERC20 \u4ee3\u5e01\u7684\u591a\u91cd\u7b7e\u540d\u8d26\u6237\u3002"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{src:s(56988).Z+"",width:"1893",height:"916"})}),"\n",(0,l.jsx)(a.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,l.jsx)(a.h3,{id:"\u8bbf\u95ee-safe-wallet-web-\u7684-url-\u662f\u4ec0\u4e48",children:"\u8bbf\u95ee Safe-Wallet-Web \u7684 URL \u662f\u4ec0\u4e48\uff1f"}),"\n",(0,l.jsxs)(a.p,{children:["\u8bbf\u95ee Safe-Wallet-Web \u7684 URL \u662f ",(0,l.jsx)(a.a,{href:"https://safe.conflux123.xyz/",children:"https://safe.conflux123.xyz/"}),"\u3002"]}),"\n",(0,l.jsx)(a.h3,{id:"safe-\u5408\u7ea6\u7684\u9ed8\u8ba4\u7248\u672c\u662f",children:"Safe \u5408\u7ea6\u7684\u9ed8\u8ba4\u7248\u672c\u662f\uff1f"}),"\n",(0,l.jsx)(a.p,{children:"\u5f53\u524d\u5728 eSpace \u7684\u4e3b\u7f51\u548c\u6d4b\u8bd5\u7f51\u4e0a\u90e8\u7f72\u5e76\u4f7f\u7528\u7684 Safe \u5408\u7ea6\u7684\u9ed8\u8ba4\u7248\u672c\u662f 1.3.0\u3002"}),"\n",(0,l.jsx)(a.h3,{id:"\u662f\u5426\u4e3a\u6d4b\u8bd5\u7f51\u63d0\u4f9b\u4e86-safe-wallet-web",children:"\u662f\u5426\u4e3a\u6d4b\u8bd5\u7f51\u63d0\u4f9b\u4e86 Safe-Wallet-Web\uff1f"}),"\n",(0,l.jsxs)(a.p,{children:["\u622a\u81f3\u76ee\u524d\uff0c\u5c1a\u672a\u4e3a\u6d4b\u8bd5\u7f51\u90e8\u7f72\u4e13\u7528\u7684 Safe-Wallet-Web \u524d\u7aef\u3002 \u7136\u800c\uff0c\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(a.a,{href:"https://github.com/safe-global/safe-core-sdk",children:"Safe-SDK"})," \u6216 ",(0,l.jsx)(a.a,{href:"https://github.com/safe-global/safe-cli",children:"Safe CLI"})," \u4e0e\u6d4b\u8bd5\u7f51\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92\u3002"]}),"\n",(0,l.jsx)(a.h3,{id:"safe-web-wallet-\u6216-app-\u7684\u5b98\u65b9\u7248\u672c\u80fd\u7528\u4e8e-espace-\u5417",children:"Safe Web Wallet \u6216 App \u7684\u5b98\u65b9\u7248\u672c\u80fd\u7528\u4e8e eSpace \u5417\uff1f"}),"\n",(0,l.jsx)(a.p,{children:"Safe Web Wallet \u6216 App \u7684\u5b98\u65b9\u7248\u672c\u76ee\u524d\u4e0e eSpace \u4e0d\u517c\u5bb9\u3002"}),"\n",(0,l.jsx)(a.h3,{id:"\u662f\u5426\u6709\u652f\u6301-espace-\u7684-safe-app-\u79fb\u52a8\u7248\u672c",children:"\u662f\u5426\u6709\u652f\u6301 eSpace \u7684 Safe App \u79fb\u52a8\u7248\u672c\uff1f"}),"\n",(0,l.jsx)(a.p,{children:"\u76ee\u524d\uff0c\u6ca1\u6709\u652f\u6301 eSpace \u7684 Safe App \u79fb\u52a8\u7248\u672c\u3002"}),"\n",(0,l.jsx)(a.h3,{id:"\u5982\u679c\u5728\u70b9\u51fb\u8fde\u63a5\u6309\u94ae\u65f6\u65e0\u6cd5\u89e6\u53d1\u94b1\u5305\u8fde\u63a5\u5f39\u7a97\u5e94\u8be5\u600e\u4e48\u529e",children:"\u5982\u679c\u5728\u70b9\u51fb\u201c\u8fde\u63a5\u201d\u6309\u94ae\u65f6\u65e0\u6cd5\u89e6\u53d1\u94b1\u5305\u8fde\u63a5\u5f39\u7a97\u5e94\u8be5\u600e\u4e48\u529e\uff1f"}),"\n",(0,l.jsx)(a.p,{children:"\u5982\u679c\u60a8\u9047\u5230\u94b1\u5305\u8fde\u63a5\u5f39\u7a97\u672a\u51fa\u73b0\u7684\u95ee\u9898\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"\u786e\u4fdd\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u88c5\u4e86 MetaMask \u94b1\u5305\u6269\u5c55\u3002"}),"\n",(0,l.jsx)(a.li,{children:"\u786e\u4fdd\u60a8\u7684\u8ba1\u7b97\u673a\u7f51\u7edc\u8fde\u63a5\u7a33\u5b9a\uff1b\u5728\u67d0\u4e9b\u5730\u533a\uff0c\u53ef\u80fd\u9700\u8981\u4f7f\u7528 VPN\u3002"}),"\n",(0,l.jsx)(a.li,{children:"\u5982\u679c\u8fd9\u662f\u60a8\u7b2c\u4e00\u6b21\u8bbf\u95ee\u6b22\u8fce\u9875\u9762\uff0c\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u5411\u4e0b\u7bad\u5934\u5e76\u9009\u62e9 CFX \u7f51\u7edc\u3002"}),"\n",(0,l.jsx)(a.li,{children:"\u7136\u540e\uff0c\u518d\u6b21\u70b9\u51fb\u201c\u8fde\u63a5\u201d\u6309\u94ae\u3002 This should prompt the wallet selection popup to appear, where you can choose MetaMask to proceed."}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},56988:(e,a,s)=>{s.d(a,{Z:()=>l});const l=s.p+"assets/images/gnosis-safe-web-wallet-01ce6d26f908e4bb9d46336054dd9730.png"},11151:(e,a,s)=>{s.d(a,{Z:()=>c,a:()=>t});var l=s(67294);const n={},i=l.createContext(n);function t(e){const a=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),l.createElement(i.Provider,{value:a},e.children)}}}]);