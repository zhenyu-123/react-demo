const defaultState = {
  inputValue: "Write Something",
  data: ["早上4点起床，锻炼身体", "中午下班游泳一小时"],
}; //默认数据
export default (state = defaultState, action) => {
  /*
   state:指的是原始仓库里的状态。
   action：指的是action新传递的状态。
   */
  //change 事件
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;

    return newState;
  }

  //增加
  if (action.type === "addItem") {
    //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state));
    newState.data.push(newState.inputValue); //push新的内容到列表中去
    newState.inputValue = "";
    return newState;
  }
  //删除
  if(action.type==='deleteItem'){
  
    let newState=JSON.parse(JSON.stringify(state))
    newState.data.splice(action.index,1)
    return newState;
  }
  return state;
};
