/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-20 14:25:58
 * @LastEditors: sy
 * @LastEditTime: 2023-03-21 10:35:28
 */
import React from 'react'
import ContextDemo from './ContextDemo.jsx'
// import UncontrolledDemo from './UncontrolledDemo'
// import PortalsDemo from './PortalsDemo'
// import LazyDemo from './LazyDemo'
// import SCUDemo from './SCUDemo'
// import SCUDemo2 from './SCUDemo2'
// import PureComponentDemo from './PureComponentDemo'
// import HOCDemo from './HOCDemo'
// import RenderPropDemo from './RenderPropDemo'

class AdvancedUse extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <ContextDemo/>
            {/* <UncontrolledDemo/> */}
            {/* <PortalsDemo name={'参数'}>Modal 内容</PortalsDemo> */}
            {/* <LazyDemo/> */}
            {/* <SCUDemo/> */}
            {/* <SCUDemo2/> */}
            {/* <PureComponentDemo/> */}
            {/* <HOCDemo a="100"/> */}
            {/* <RenderPropDemo a="200"/> */}
        </div>
    }
}

export default AdvancedUse
