import React, { PureComponent } from 'react';

export default class PureComp extends PureComponent {
  constructor(props){
    super(props);
    this.state = {count : 0};
  }
  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <>
      <h2>{this.state.count}</h2>
      
      <button onClick={()=>{ this.handleClick(); }}>Click</button>
      </>
    )
  }
}
