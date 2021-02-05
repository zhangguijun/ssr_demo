import React, { Component } from 'react';
// import { __canvasWM } from '../../utils/watermark'
import { __svgVM } from '../../utils/watermarkSvg'
import  withStyle  from '../../component/withStyle'

import style from './index.less'
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount(){
    // __canvasWM({
    //   content: '内部资料，请勿外传'
    // })
    __svgVM()
  }
  render() {
    return (
      <div className='demo'>
        demo
      </div>
    );
  }
}

let newDemo = withStyle(Demo, style)

export default newDemo;