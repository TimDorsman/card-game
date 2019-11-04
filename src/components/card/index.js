import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            health: 100,
            animated: false
        }
    }

    handleClick = () => {
        this.setState({
            health: this.props.attackBoss(),
            animated: true
        }, () => {
            console.log(this.state.animated)
        })
    }

    render() {
        const { name, health, image, description, strength, style, position } = this.props;
        const multiplier = 100 / 61;
        
        return (
            <div className={`card${this.state.animated ? ' animated': ''}`} style={style} onClick={this.handleClick} onAnimationEnd={() => this.setState({animated: false})}>
                <div className="card-header">
                    <p className="card-name">{name}</p>
                    <div className="card-health-container">
                        <div className="card-health-overlay" style={{bottom: `calc(-61px + (${health}px / ${multiplier}) )`}}>{health}</div>
                        <span className="card-health-counter">{health}</span>
                    </div>
                </div>
                <div className="card-image-container">
                    <img src={image} alt={name} className="card-image" style={{objectPosition: position}}/>
                </div>
                <div className="card-body">
                    <div className="d-flex jc-around">
                        <span className="card-strength">{strength}</span>
                        <span className="card-defence">5</span>
                    </div>
                    <p className="card-description">
                        {description}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;