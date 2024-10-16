import "./index.css";
import React from "react";
interface props {
  title: string;
  subTitle?: string;
  children?: React.ReactNode; // 会自动有这个属性
  [key: string]: any;
}
//1 、 定义props接口

// export default function Card(props: props) {
//     return (
//       <div className="card">
//         <header>
//           <div>{props.title}</div>
//           <div>副标题</div>
//         </header>
//         <main>内容区域</main>
//         <footer>
//           <button>确认</button>
//           <button>取消</button>
//         </footer>
//       </div>
//     );
//   }

// 2、React.FC<props>  定义组件类型
/**
 * 默认值
 * 1、解构赋值{title:'默认标题'}
 * 2、props.title || '默认标题'
 * 3、声明一个默认对象defaultProps
 */
// Partial <props>  //将props中的属性变为可选,partial 是ts内置类型
const defaultProps: Partial<props> = {
  title: "默认标题",
  subTitle: "默认副标题",
};
const Card: React.FC<props> = (props) => {
  // --------------------原生浏览器的发布订阅---------------------------
  const e = new Event("childToChild");
  const clickTap = () => {
    e.params = {
      name: "子组件传值",
    };
    window.dispatchEvent(e);
  };
  // ------------------------------------------------------------------
  const { title, subTitle } = { ...defaultProps, ...props };
  //   console.log(props.children, "node"); //传一个是对象，多个是数组
  props.callBack && props.callBack("子传父");
  return (
    <div className="card">
      <header>
        <div>{props.title}</div>
        <div>{subTitle}</div>
      </header>
      <main>{props.children}</main>
      <footer>
        <button onClick={clickTap}>确认</button>
        <button>取消</button>
      </footer>
    </div>
  );
};
export default Card;

declare global {
  interface Event {
    params: { name: string };
  }
}
// 在之前版本这俩中方式有区别，现在几乎一致
