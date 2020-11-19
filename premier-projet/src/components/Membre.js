import React from 'react'


// Component Stateless

const Membre = ({ nom, age }) => {
    return (
    <h2>{nom.toUpperCase()}: {age}</h2>
    )
}

// 

export default Membre