import React, {useContext} from 'react'
import { HookChannelContext, HookUserContext } from '../../App'
import HookComponentF from './HookComponentF'

function HookComponentE() {

    const user = useContext(HookUserContext)
    const channel = useContext(HookChannelContext)
    return (
        <div>
            <HookComponentF />
            <h2>render props using useContext Hook</h2>
            <div>{user} - {channel}</div>
        </div>
    )
}

export default HookComponentE
