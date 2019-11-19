import React, { Component } from 'react';

class Enemy extends Component {
    render() {
        return (
            <div className="enemy">
                <div className="enemy-header">
                    <p className="enemy-health">
                        {this.props.bossHealth}
                    </p>
                    <p className="enemy-strength">
                        {this.props.bossStrength}
                    </p>
                </div>
                <div className="enemy-body">
                    <img src={require('../../images/enemy.jpg')} alt="enemy" className="enemy-image"/>
                </div>
            </div>
        );
    }
}

export default Enemy;