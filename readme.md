#### ssr + spa 

#### 为什么要用ssr
1. 首屏渲染过慢 -》 页面白屏时间长
2. seo 不友好

#### ssr + spa 体验升级

1. 只是实现ssr 是没有意义的技术上没有任何发展和进步 否则spa也不会出现
2. 单纯的使用spa技术也不完美 ，会存在首屏白屏时间长的问题
3. 如果存在两者结合那就很完美了 ssr 渲染首屏 后续的交互交给浏览器 浏览器进行其他操作
4. 要实现第三点， 就需要最大限度重用代码 就需要使用node(ssr) + react  (vue)

#### 核心原理 同构
  同构 就是一份react 代码在服务端执行一遍 在客户端也执行一遍
 node server 在得到当前 req 的 url  path ,然后在路由表里面查找对应的组件， 拿到请求数据，将数据作为props context 或者store形式放入组件， 然后基于react 服务端渲染的api renderToString()将组件渲染为html 字符串，在把最终的 html 进行输出前需要将数据注入到浏览器端(注水)，server 输出(response)后浏览器端可以得到数据(脱水)，浏览器开始进行渲染和节点对比，然后执行组件的componentDidMount 完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 html 节点，整个流程结束。
 流程可看 1.jpg

 同构才是核心， 没有同构的ssr 是没有意义的
 所谓同构就是采用一套代码，构建双端（server 和 client）逻辑，最大限度的重用代码，不用维护两套代码。而传统的服务端渲染是无法做到的，react（或Vue） 的出现打破了这个瓶颈，并且现在已经得到了比较广泛的应用。
  
###### 路由同构
 server 和 client 使用同一套路由配置
###### 数据同构
数据预取同构解决双端如何使用同一套数据请求方法来进行数据请求
###### 渲染同构
路由能够正确匹配，数据预取正常，服务端可以直出组件的 html ，浏览器加载 js 代码正常，查看网页源代码能看到 html 内容，好像我们的整个流程已经走完。
但是当浏览器端的 js 执行完成后，发现数据重新请求了，组件的重新渲染导致页面看上去有些闪烁。
这是因为在浏览器端，双端节点对比失败，导致组件重新渲染，也就是只有当服务端和浏览器端渲染的组件具有相同的props 和 DOM 结构的时候，组件才能只渲染一次。
涉及数据注水 和 脱水