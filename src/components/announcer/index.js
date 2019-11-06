import React, { Component } from 'react';

class Announcer extends Component {
    state = {  }
    render() {
        return (
            <>
                <h1 className='announcer'>It's <span>{`${this.props.player ? 'your' : 'the enemy'}`}</span> turn!</h1>
                {this.props.message ? <p className="announcer-subtitle">{`${this.props.player ? 'The enemy has' : 'You have'} ${this.props.message}`}</p> : ''}
            </>
        );
    }
}

export default Announcer;
