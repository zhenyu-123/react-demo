import { useSyncExternalStore } from "react";
// 我们实现一个useStorage Hook，用于订阅 localStorage 数据。这样做的好处是，我们可以确保组件在 localStorage 数据发生变化时，自动更新同步。
/**
 *
 * @param key 存储到localStorage中的key
 * @param defaultValue  默认值
 */
export const useStorage = (key: string, defaultValue: any) => {
  /**
   *作用：订阅外部存储，并在存储变化时调用提供的回调函数。
   *参数：一个单独的 callback 参数，用于在存储变化时触发。
   *返回值：一个取消订阅的函数。
   */
  const subscribe = (callback: () => void) => {
    window.addEventListener("storage", (e) => {
      console.log("触发了", e);
      callback();
    });

    return () => {
      window.removeEventListener("storage", callback);
    };
  };

  /**
   * 作用：从外部存储读取数据的快照。
   * 返回值：组件需要的存储中的数据快照。注意，这个函数在存储不变的情况下应返回相同的值。
   */
  const getSnapshot = () => {
    return (
      (localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key)!)
        : null) | defaultValue
    );
  };

  const setStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("storage")); // 手动触发storage事件
  };
  // 返回数据
  const res = useSyncExternalStore(subscribe, getSnapshot);

  return [res, setStorage] as const; // 返回一个数组
};
