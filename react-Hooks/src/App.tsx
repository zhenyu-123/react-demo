import UseStateCom from "./components/useState";
import UseStateCom2 from "./components/useState2";
import UseReducerCom from "./components/useReducer";
import UseReducerCom2 from "./components/useReducer2";
import UseStorageCom from "./components/useStorage";
import UseHistoryCom from "./components/useHistory";
import UseTransitionCom from "./components/useTransition";
import UseDeferredValue from "./components/useDeferredValue";
import UseEffect from "./components/useEffect";
import "./App.css";

function App() {
  return (
    <div className="app-box">
      <h3>1、useState:</h3>
      <UseStateCom></UseStateCom>
      <br />
      <UseStateCom2></UseStateCom2>
      <h3>2、useReducer</h3>
      <UseReducerCom></UseReducerCom>
      <br />
      <UseReducerCom2></UseReducerCom2>
      <br />
      <h3>3、useSyncExternalStore</h3>
      <UseStorageCom></UseStorageCom>
      <UseHistoryCom></UseHistoryCom>
      <br />
      <h3>4、useTransition</h3>
      <UseTransitionCom></UseTransitionCom>
      <br />
      <h3>5、useDeferredValue</h3>
      <UseDeferredValue></UseDeferredValue>
      <h3>6、useEffect</h3>
      <UseEffect></UseEffect>
    </div>
  );
}

export default App;
