// 实现一个简易的useHistory Hook，获取浏览器url信息 + 参数

import { useSyncExternalStore } from "react";

export const useHistory = () => {
  const subscribe = (callback: () => void) => {
    window.addEventListener("popstate", callback);
    window.addEventListener("hashchange", callback);
    return () => {
      window.removeEventListener("popstate", callback);
      window.removeEventListener("hashchange", callback);
    };
  };

  const getSnapshot = () => {
    return window.location.href;
  };

  const push = (path: string) => {
    // pushState参数：state, title, url。state可以传null，title可以传空字符串，state:是一个与新的历史记录条目关联的状态对象，title是历史记录条目的标题，url是新的历史记录条目的URL
    window.history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate")); // 手动触发
  };
  const replace = (path: string) => {
    window.history.replaceState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  const res = useSyncExternalStore(subscribe, getSnapshot);
  return [res, push, replace] as const;
};
