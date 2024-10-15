// 代码中引入了createContext用来创建共享上下文ColorContext组件，然后我们要用{props.children}来显示对应的子组件
// 共享状态/共享业务逻辑
import React, { createContext,useReducer } from 'react';

export const ColorContext = createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR"


const reducer= (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        case 's':
            return '#ff6700'
        default:
            return state
    }
}


export const Color = props=>{
    const [color,dispatch]=useReducer(reducer,'blue')//一个是状态，一个用来控制业务逻辑的判断参数
    return (
        <ColorContext.Provider value={{color,dispatch}}>    
            {props.children}
        </ColorContext.Provider>
    )
}