import React, { Component } from 'react';


class Reset extends Component {

  onResetDefault = ()  => {
    this.props.onSettingDefault(true);
  }

  render() {
    return (
        <button type="button" className="btn btn-primary mt-2" onClick={ this.onResetDefault }>reset</button>

    );
  }
}

export default Reset;
