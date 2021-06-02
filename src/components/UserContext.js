import React from 'react'

const UserContext = React.createContext('codevaluation')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext