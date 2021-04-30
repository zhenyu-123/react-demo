//index.js
import React from "react";
import Link from "next/link";
import Router from "next/router";
import Moment from "./Moment"
function gotoA() {
  Router.push("/jspangA");
}
function gotoXiaojiejie() {
  Router.push("/xiaojiejie?name=井空");
  // Router.push({
  //   pathname:'/xiaojiejie',
  //   query:{
  //     name:'井空'
  //   }
  // })
}
const Home = () => (
  <>
    <div>我是首页</div>
    <div>
      <Link href="/jspangA?name=A">
        <a>去JspangA页面</a>
      </Link>
    </div>
    <div>
      <Link href="/xiaojiejie?name=B">
        <a>去小姐姐页面</a>
      </Link>
    </div>
    <hr/>
    <Moment/>
    <div>
      <button onClick={gotoA}>去JspangA页面</button>
    </div>
    <div>
      <button onClick={gotoXiaojiejie}>选数码宝贝</button>
    </div>
    
  </>
);

Router.events.on('routeChangeStart',(...args)=>{
  console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
})

Router.events.on('routeChangeComplete',(...args)=>{
  console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
})

Router.events.on('beforeHistoryChange',(...args)=>{
  console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
})

Router.events.on('routeChangeError',(...args)=>{
  console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
})

Router.events.on('hashChangeStart',(...args)=>{
  console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
})

Router.events.on('hashChangeComplete',(...args)=>{
  console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
})


export default Home;
