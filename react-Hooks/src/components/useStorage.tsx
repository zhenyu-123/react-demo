import { useStorage } from "../hooks/useStorage";
const App = () => {
  const [val, setVal] = useStorage("data", 1);
  const params = {
    data: 1,
    list: [{ name: "小明" }],
  };
  return (
    <>
      <h3 style={{ color: "red" }}>{val}</h3>
      <button onClick={() => setVal(val + 1)}>设置val</button>
    </>
  );
};

export default App;
