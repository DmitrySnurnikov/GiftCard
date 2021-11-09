import React from 'react'

function Header({description, title}) {
    return (
        <> 
            <h1>{title}</h1>
            <span>{description}</span>
        </>
    )
}

export default Header
