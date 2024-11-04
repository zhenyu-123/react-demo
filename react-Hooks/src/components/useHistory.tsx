import { useHistory } from "../hooks/useHistory";
const App = () => {
  const [history, push, replace] = useHistory();
  return (
    <>
      <div>当前url:{history}</div>
      <button
        onClick={() => {
          push("/aaa");
        }}
      >
        跳转
      </button>
      <button
        onClick={() => {
          replace("/bbb");
        }}
      >
        替换
      </button>
    </>
  );
};

export default App;
