import React, { Component } from 'react';
import Card from './components/card';
import { Cards } from './cards';
import Enemy from './components/enemy';
import Announcer from './components/announcer';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            iteral: 0,
            allCards: [],
            cards: [],
            bossHealth: 100,
            bossStrength: 35,
            turn: true,
            messages: {
                attacked: 'attacked!',
                healed: 'healed up!',
                defeated: 'defeated the boss!',
                missed: 'tried to attack but missed'
            },
            message: null,
        }
    }

    componentDidMount() {
        this.setState({
            allCards: [...Cards]
        }, () => {
            this.pickRandomCard();
        });
    }

    pickRandomCard = (i) => {
        const TotalCards = 7;
        const rndNum = Math.floor((Math.random() * this.state.allCards.length) + 0);
        const newCard = this.state.allCards[rndNum];
        const allCardss = this.state.allCards;

        allCardss.splice(rndNum, 1);
        this.setState(state => ({ cards: [...state.cards, newCard], allCards: allCardss, iteral: state.iteral + 1 }));
        if (this.state.iteral < TotalCards) {
            setTimeout((i) => this.pickRandomCard(i), 1000)
        }
    }

    attackRandomCard = () => {
        const { cards, bossHealth, bossStrength, messages } = this.state;
        const rndNum = Math.floor((Math.random() * cards.length) + 0);
        const rndHealNum = Math.floor((Math.random() * 100) + 1);
        const chance = (Math.floor(100 / cards.length))
        const cardList = cards;
        const rndCard = cards[rndNum];

        if (rndHealNum < chance && bossHealth < 100) {
            this.healUp(bossHealth);
            this.changeTurns(messages.healed);
        }
        else {
            // this.useExtraDamage();
            rndCard.health = rndCard.health - bossStrength;
            cardList[rndNum].health = rndCard.health;
            cardList[rndNum].customClass = 'attacked';

            window.setTimeout(() => {
                cardList[rndNum].customClass = null;
                if (cardList[rndNum].health <= 0) {
                    cardList.splice(rndNum, 1);
                }
            }, 1500)

            this.changeTurns(messages.attacked);
        }
        console.log()
        this.setState({
            cards: cardList,
            bossStrength: 35
        });
    }

    healAllCards(index) {
        const cardList = this.state.cards;
        cardList.forEach((card, cardIndex) => {
            const extraHealth = card.health > 80 ? 100 - card.health : 20;
            console.log(card, cardIndex, index);
            if (cardIndex !== index)
                card.health = card.health + extraHealth;
        })

        cardList.splice(index, 1);

        console.log('cardList', cardList);
        return cardList;
    }

    useExtraDamage() {
        this.setState(state => ({
            bossStrength: state.bossStrength + 15
        }))
    }

    healUp(health) {
        const extraHealth = health > 80 ? 100 - health : 20;

        this.setState(state => ({
            bossHealth: state.bossHealth + extraHealth
        }))
    }

    changeTurns(msg) {
        window.setTimeout(() => {
            this.setState(state => ({
                turn: !state.turn,
                message: msg
            }));
        }, 1500)
    }

    attackBoss = (health, strength, bossHealth, bossStrength, index, passive) => {
        let cardList = this.state.cards;

        if (passive === 'healing') {
            console.log('healing')
            cardList = this.healAllCards(index);
        }
        else {
            bossHealth = bossHealth - strength;

            cardList[index].health = health - bossStrength;

            if (cardList[index].health <= 0) {
                cardList.splice(index, 1)
            }
        }

        if (bossHealth <= 0) {
            this.changeTurns(this.state.messages.defeated);
        }
        else {
            this.changeTurns(this.state.messages.attacked);
        }

        window.setTimeout(() => {
            this.setState({
                cards: cardList,
                bossHealth: bossHealth,
            });
        }, 1500)

        window.setTimeout(() => {
            this.attackRandomCard();
        }, 3000)

        return health - bossStrength;
    }

    render() {
        const { bossStrength, bossHealth, turn, message } = this.state;
        return (
            <>
                <Enemy bossHealth={bossHealth} bossStrength={bossStrength} />
                <Announcer player={this.state.turn} message={message} />
                {this.state.cards ? this.state.cards.map((card, i) => {
                    return <Card handleClick={this} name={card.name} turn={turn} attackBoss={() => this.attackBoss(card.health, card.strength, this.state.bossHealth, this.state.bossStrength, i, card.passive)} image={require(`./images/${card.image}`)} health={card.health} description={card.description} position={card.position} strength={card.strength} style={{ left: `calc(150px * ${i})`, zIndex: i }} key={card.id} customClass={card.customClass} />
                }) : ''}
            </>
        );
    }
}

export default Home;