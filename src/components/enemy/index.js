import React, { Component } from 'react';

class Enemy extends Component {

    attack

    render() {
        return (
            <div className="enemy">
                <span className="enemy-health">
                    {this.props.bossHealth}
                </span>
                <span className="enemy-strength">{this.props.bossStrength}</span>
            </div>
        );
    }
}

export default Enemy;