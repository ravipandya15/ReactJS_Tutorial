import React from 'react'
import './myStyles.css'

// CSS stylesheets
function StyleSheet(props) {
    const primaryClass = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${primaryClass} font-xl`}>StyleSheet</h1>
        </div>
    )
}

export default StyleSheet
