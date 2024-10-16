import "./index.css";
import React from "react";
interface props {
  title: string;
  subTitle?: string;
  children?: React.ReactNode; // 会自动有这个属性
  [key: string]: any;
}

const defaultProps: Partial<props> = {
  title: "默认标题",
  subTitle: "默认副标题",
};
const Card: React.FC<props> = (props) => {
  const { title, subTitle } = { ...defaultProps, ...props };
  // -------------------接收方-----------------------
  window.addEventListener("childToChild", (e) => {
    console.log("我是B:收到了", e.params);
  });
  // -----------------------------------------------
  return (
    <div className="card">
      <header>
        <div>{props.title}</div>
        <div>{subTitle}</div>
      </header>
      <main>{props.children}</main>
      <footer>
        <button>确认</button>
        <button>取消</button>
      </footer>
    </div>
  );
};
export default Card;

// 在之前版本这俩中方式有区别，现在几乎一致
