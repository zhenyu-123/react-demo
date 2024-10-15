import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  /**
   * 1、插值语句-{}：jsx tsx；支持字符串、数字、数组（普通类型）、元素、三元表达式、API调用;
   * 2、插值语句支持对象怎么弄？ [{name:'张三',age:18}],需要序列化
   * 3、事件绑定：onClick={fn}，如果需要传参则使用高阶函数
   * 4、支持泛型函数:因为他把<T>理解成了是一个元素 <div> 纠正泛型<T,>,加一个逗号
   * 5、如何去绑定属性：className、style、src、href、title、id等,class 比较特殊使用className
   * 6、如何绑定多个class：使用模板字符串，多个class之间使用空格隔开
   * 7、如何绑定多个style：使用对象，多个style之间使用逗号隔开
   * 8、添加html代码：使用dangerouslySetInnerHTML={{__html:html}}
   * 9、如何去遍历数组：使用map方法,并加入if判断,&& 或者 if
   */
  const fn = <T,>(params: string, e: T) => {
    console.log("fn", params);
    console.log(e);
  };

  let id = 1;

  let className = "color2";

  let style = {
    color: "red",
    fontSize: "20px",
  };

  let arr = [1, 3, 4, 5];

  return (
    <>
      <h4>1</h4>
      <hr />
      <div>{"你好啊"}</div>
      <div>{123456789}</div>
      <div>{[1, 2, 4, "4"]}</div>
      <div>{<span>我是span元素</span>}</div>
      <div>{true ? "1" : "2"}</div>
      <div>{(3.1415926).toFixed(2)}</div>
      <hr />
      <h4>2</h4>
      <hr />
      <div>{JSON.stringify([{ name: "张三", age: 18 }])}</div>
      <hr />
      <div onClick={(e) => fn("123", e)}>点击事件</div>
      <hr />
      <div className={`${className}  color`} id={id.toString()}>
        绑定类名
      </div>
      <hr />
      <div style={{ ...style, color: "blue" }}>绑定样式</div>
      <hr />
      <div
        dangerouslySetInnerHTML={{
          __html: "<h1>我是html代码</h1>",
        }}
      ></div>
      <hr />
      <ul>
        {arr.map((item) => {
          if (item > 2) return <li key={item}>{item}</li>;
          // return item > 2 && <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
