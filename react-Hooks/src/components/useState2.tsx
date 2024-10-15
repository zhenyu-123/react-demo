// useState 更新机制
import { useState } from "react";
function useStateCom() {
  const [index, setIndex] = useState(0); // 字符串

  const handleIndex = () => {
    // setIndex(index + 1);
    // console.log(index); // 0 原因是是异步，所以打印出来是0；
    // 异步设计：react在更新数据的时候，不会立即更新，而是将更新的任务放到一个任务队列中，等到当前任务执行完毕后，才会执行队列中的任务。
    // 所以，在调用setIndex函数后，index的值并不会立即更新，而是等到任务队列中的任务执行完毕后，index的值才会更新。
    // 目的是为了性能优化。

    // set函数支持传入更新函数，更新函数会接受上一次的值，并返回新的值，react会将新的值更新到state中。
    // setIndex((pre) => pre + 1);
    // setIndex((pre) => pre + 1);
    // setIndex((pre) => pre + 1);
    setIndex((pre) => {
      console.log(pre); // 0
      return pre + 1;
    });
  };
  return (
    <>
      <div className="name">{index}</div>

      <div onClick={() => handleIndex()}>点击修改</div>
    </>
  );
}

export default useStateCom;
