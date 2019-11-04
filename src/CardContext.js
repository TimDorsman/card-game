import React from 'react'

const CardContext = React.createContext({})

export const CardProvider = CardContext.Provider
export const CardConsumer = CardContext.Consumer
export default CardContext;