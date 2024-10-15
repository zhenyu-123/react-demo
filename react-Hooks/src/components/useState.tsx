// useState 基础使用
import { useState } from "react";
function useStateCom() {
  const [name, setName] = useState("小明"); // 字符串

  const [arr, setArr] = useState<string[]>(["小明", "小红", "小刚"]); // 数组

  const [play, setPlay] = useState(() => {
    /**
     * 当组件第一次渲染的时候，会执行这个函数，并且返回一个值，这个值会作为play的初始值
     * 当组件更新的时候，这个函数不会执行，只会执行一次
     */
    return {
      game: "英雄联盟",
      time:
        new Date().getFullYear() +
        "-" +
        new Date().getMonth() +
        "-" +
        new Date().getDate(), // 日期
    };
  });
  const handleAge = () => {
    // arr.push("小刚");// 不能操作原数组，需要重新赋值、解构,(新数组)
    // setArr([...arr,'小刚']);

    // 修改数组中的某一项:可以赋值给另一个变量，去操作另一个变量
    // let arr1 = [...arr];
    // setArr((arr1) => {
    //   arr1[0] = "小刚";
    //   return [...arr1];
    // })

    console.log(arr);
  };
  return (
    <>
      <div className="name">{name}</div>
      <div className="name">{arr}</div>
      <div onClick={() => setName("小红")}>点击修改名字</div>
      <div onClick={handleAge}>点击修改数组</div>
      <div>
        {play.game}：{play.time}
      </div>
    </>
  );
}

export default useStateCom;
