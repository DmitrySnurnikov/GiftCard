import React from 'react'

function Header({title,description}) {
    return (
        <div className={"MR_gift-header"}>
            <h1>{title}</h1>
            <span>{description}</span>
        </div>
    )
}

export default Header
