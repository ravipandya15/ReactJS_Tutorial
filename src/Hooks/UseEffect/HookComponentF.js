import React from 'react'
import {HookUserContext, HookChannelContext} from '../../App'


// context API used to pass props directly from one parent to 
// it's nested child component without passing middle components
function HookComponentF() {
    // it is called render props pattern
    return (
        <div>
            <HookUserContext.Consumer>
                {
                    user => {
                        return (
                            <HookChannelContext.Consumer>
                                {
                                    channel => {
                                        return (<div>User Context value {user}. Channel Context value {channel}</div>)
                                    }
                                }
                                
                            </HookChannelContext.Consumer>
                        )
                    }
                }
            </HookUserContext.Consumer>
        </div>
    )
}

export default HookComponentF
