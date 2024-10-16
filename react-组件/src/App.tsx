import "./App.css";
/**
 * 1、props基本用法
 * 2、泛型
 * 3、props默认值
 * 4、props.children 特殊的props 类似于vue的插槽
 * 5、props支持所有的类型
 * 6、父子通信（本质就是利用函数回调）
 * 7、兄弟组件通信（发布订阅设计模式：new Event 或者 mitt）
 */
import Card from "./components/Card";
import Card2 from "./components/Card2";
// react 没有全局组件概念，只有局部组件和根组件

const fn = (params: string) => {
  console.log("params", params);
};
function App() {
  return (
    <>
      <Card title="标题1"></Card>
      <Card title="标题2" callback={fn}>
        <div>
          <section>
            <i>我是内容</i>
          </section>
        </div>
      </Card>
      <hr />
      <button onClick={() => window.onShow()}>确认</button>
      <hr />
      <h3>兄弟组件通信</h3>
      <Card title="A"></Card>
      <Card2 title="B"></Card2>
    </>
  );
}

export default App;
