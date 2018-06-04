import React, { Component } from 'react';

class SizeSetting extends Component {
  
  changeSize(value) {
    this.props.onChangeSize(value);
  }
  render() {
    return (
        <div className="card">
        <div className="card-header">
          <div className="card-title">Size : { this.props.fontSize }px</div>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-success mr-2" onClick={() => this.changeSize(-2)}>Giảm</button>
          <button type="button" className="btn btn-success" onClick={() => this.changeSize(2)}>Tăng</button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
