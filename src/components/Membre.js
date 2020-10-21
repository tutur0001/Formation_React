import React from 'react'


// Component Stateless

const Membre = ({ nom }) => {
    return (
        <h2>Membre de la famille: {nom.toUpperCase()}</h2>
    )
}

// 

export default Membre