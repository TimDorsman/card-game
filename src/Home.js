import React, { Component } from 'react';
import Card from './components/card';
import { Cards } from './cards';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            bossHealth: 100,
            bossStrength: 35,
        }
    }

    attackBoss (health, strength, bossHealth, bossStrength, index) {
        bossHealth = bossHealth - strength;

        const cardList = this.state.cards;
        cardList[index].health = health - bossStrength;

        if(cardList[index].health <= 0) {
            cardList.splice(index, 1)
        }

        this.setState({
            cards: cardList,
            bossHealth: bossHealth
        });
        
        return health - bossStrength;
    }

    componentDidMount () {
        this.setState({
            cards: [...Cards]
        })
    }

    render() {
        return (
            <>
                <div className="enemy">
                    <span className="enemy-health">
                        {this.state.bossHealth}
                    </span>
                    <span className="enemy-strength">{this.state.bossStrength}</span>
                </div>
                <div className="card-positioner">
                    <div className="card-holder">
                        {this.state.cards ? this.state.cards.map((card, i) => {
                            return <Card handleClick={this} name={card.name} attackBoss={() => this.attackBoss(card.health, card.strength, this.state.bossHealth, this.state.bossStrength, i)} image={require(`./images/${card.image}`)} health={card.health} description={card.description} position={card.position} strength={card.strength} style={{ left: `calc(-150px * ${i})`, zIndex: i }} key={card.id}/>
                        }): ''}
                    </div>
                </div>
            </>
        );
    }
}

export default Home;