/*
 * @description 高阶组件对css 进行样式修饰
 * @fileName withStyle.js
 * @author zh8
 * @date 2020/11/30 10:27:46
*/ 
import React from 'react';

//使用高阶组件进行组件的样式添加
const withStyle = (OriginCom, style) => {
    return  (props) =>{
      
        if(props.staticContext && typeof props.staticContext.addStyles === 'function') {
          props.staticContext.addStyles(style)
        }
        // console.log(props)
        return(<OriginCom {...props}/>)
    }
}
export default withStyle;