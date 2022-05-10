import React, { Component } from 'react';
import './Style.css'

export default class ClassComponent extends Component {
  render() {
    return (
      <>
      <div className="box2">
      <h1>This is created using  class component</h1>
      <p>This is done using external css</p>
      <p className="in">This is done using internal css</p>
   
   
       </div>
      </>
    )
  }
}
