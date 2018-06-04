import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'purple', 'blue', 'green', 'gray', 'orange', 'yellow', 'pink']
        };
    }

    showColor(color) {
        return {
            backgroundColor: color
        };
    }

    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }

    render() {

        var elmColors = this.state.colors.map((color, index) => {
            return <span
                key={index}
                style={this.showColor(color)}
                className={this.props.color === color ? 'active' : ''}
                onClick={() => this.setActiveColor(color)}
            ></span>
        });
        return (
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Color Picker</div>
                    </div>
                    <div className="card-body">
                        {elmColors}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
