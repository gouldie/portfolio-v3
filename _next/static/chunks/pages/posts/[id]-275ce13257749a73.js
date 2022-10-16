(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{1369:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return a(8151)}])},8151:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var s=a(5893),i=(a(7294),a(1664)),r=a.n(i),n=a(1163),o=a(8578),c=a(145);var u=function(){var e=(0,n.useRouter)(),t=e.query;if(!e.isReady)return null;var a=c[t.id];return(0,s.jsxs)(o.Ar,{children:[(0,s.jsx)("div",{className:"mb-5"}),(0,s.jsx)("div",{className:"mb-6",children:(0,s.jsx)(r(),{href:"/posts",children:"\u2190 Back to posts"})}),(0,s.jsxs)("div",{className:"mb-14",children:[(0,s.jsx)("h1",{className:"text-4xl mb-2",children:a.title}),a.subtitle&&(0,s.jsx)("p",{className:"text-lightsubtitle dark:text-darksubtitle",children:a.subtitle})]}),a.content.map((function(e,t){var a=e.type,i=e.resource;return(0,s.jsxs)(s.Fragment,{children:["header"===a&&(0,s.jsx)("h2",{className:"text-2xl mt-10 mb-6 font-semibold",children:i}),"image"===a&&(0,s.jsxs)("div",{className:"text-center pt-4 pb-6",children:[(0,s.jsx)("img",{className:"inline",src:i.src,alt:i.alt,style:{maxWidth:i.maxWidth}}),(0,s.jsxs)("figcaption",{className:"text-xs pt-2",children:["Image: ",i.alt]})]}),"text"===a&&i.map((function(e,t){return"string"===typeof e?(0,s.jsx)("p",{className:"mb-6",children:e},t):(0,s.jsx)("ul",{children:e.map((function(e,t){return(0,s.jsx)("li",{children:e},t)}))})}))]})}))]})}},145:function(e){"use strict";e.exports=JSON.parse('{"keys-in-react":{"title":"React - Keys","subtitle":"Why using an index is sometimes not enough","description":"What are keys in React? What is their purpose, why are they important and why using an index is sometimes not enough.","description2":"Understanding keys is crucial to developing a better mental model in React.","content":[{"type":"header","resource":"Keys - what actually are they?"},{"type":"text","resource":["When rendering a list, it is best practice to provide a key attribute to each list item to help React uniquely identify it. This allows React to keep track of each list item and ensures that, between each render, the internal state of each list item is preserved.","Fail to provide a key and React will give you a warning. Many code-analysis tools such as ESLint will also show a warning. Without a key, React will default to using indexes.","Typically, a unique ID from your data set should be used. Developers will often use an index for convenience as it is provided by the `map` function."]},{"type":"header","resource":"Why using an index is sometimes not enough"},{"type":"text","resource":["So, you\'ve provided the index as a key. Warnings have disappeared. What could go wrong?","Here is a simple stock management app. It displays a list of products and the number of stock available for each one. It has two main features:",["The user can update the stock for a particular product","The user can shuffle the order of the products"]]},{"type":"image","resource":{"src":"/images/keys-1.png","alt":"Stock management app","maxWidth":"100px"}},{"type":"text","resource":["Product data is initialised in memory. In a more realistic scenario, this would come from a database."]},{"type":"image","resource":{"src":"/images/keys-2.png","alt":"Initial product data","maxWidth":"200px"}},{"type":"text","resource":["Parent component iterates through the products, rendering a child component for each one. Each child has its own local state for updating the stock number. Also note that each child is given the index as its key."]},{"type":"image","resource":{"src":"/images/keys-3.png","alt":"React code that renders the products","maxWidth":"600px"}},{"type":"text","resource":["If we were to shuffle the list, a product could end up in a different position and thus be given a different key.","Keys no longer uniquely identify a product. React can no longer uniquely identify each product. State becomes corrupt."]},{"type":"image","resource":{"src":"/images/keys-4.gif","alt":"State becoming corrupt with indexes as keys","maxWidth":"100px"}},{"type":"header","resource":"So what\'s the solution?"},{"type":"text","resource":["Ensure each item has unique identifier. If it\'s a database resource, it may already have a unique id you can use."]},{"type":"image","resource":{"src":"/images/keys-5.png","alt":"Giving each product a unique id","maxWidth":"200px"}},{"type":"text","resource":["Use the unique identifier as the key rather than the index."]},{"type":"image","resource":{"src":"/images/keys-6.png","alt":"Passing the unique id as a key into each list item","maxWidth":"600px"}},{"type":"text","resource":["Finally, React should now be able to track each list item correctly."]},{"type":"image","resource":{"src":"/images/keys-7.gif","alt":"Correct state using ids as keys","maxWidth":"100px"}},{"type":"text","resource":["tl;dr - only use indexes as keys if you are sure the list order and length will not change. If in doubt, use a unique identifier."]}]}}')}},function(e){e.O(0,[774,888,179],(function(){return t=1369,e(e.s=t);var t}));var t=e.O();_N_E=t}]);