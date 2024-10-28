/**
 *
 * useReducer是React提供的一个高级Hook,没有它我们也可以正常开发，但是useReducer可以使我们的代码具有更好的可读性，可维护性。
 * useReducer 跟 useState 一样的都是帮我们管理组件的状态的，但是呢与useState不同的是 useReducer 是集中式的管理状态的。
 */
import React, { useReducer, useState } from "react";
const initialState = { count: 0 };

type State = typeof initialState; // typeof: 获取initialState的类型,  // 也就是{ count: number } ,typeof是ts的语法，用来获取一个变量的类型。

const initialStateFn = (props: State) => {
  return { count: props.count + 1 };
};

function reducer(
  state: any,
  action: { type: "increment" | "decrement" | "reset" }
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

const reducerComponent = () => {
  /**
   * reducer ：   是一个函数，它接收两个参数，第一个参数是当前的state，第二个参数是dispatch函数传递过来的action。
   *              dispatch函数会根据action.type来决定如何更新state。
   * state ：     是当前的状态，它是一个对象，包含了我们想要管理的状态。默认值是{ count: 0 }。
   * initialState ： 是一个函数，它接收一个参数，这个参数是props，它返回一个对象，这个对象就是我们的初始状态。
   *                可选参数。如果有则，则优先使用这个参数的返回值作为初始状态。
   */
  const [state, dispatch] = useReducer(reducer, initialState, initialStateFn);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>重置</button>
    </div>
  );
};
export default reducerComponent;
