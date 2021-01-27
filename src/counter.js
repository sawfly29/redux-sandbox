import React from 'react'

const Counter = () => {

    return ( 
        <div className = 'jumbotron'>
            <h2 id = 'counter' > 0 </h2> 
            <button id = 'dec' className = 'byn btn-primary btn-lg' > DEC </button> 
            <button id = 'inc' className = 'byn btn-primary btn-lg' > INC </button> 
            <button id = 'rnd' className = 'byn btn-primary btn-lg' > RND </button> 
        </div>
    )

}

export default Counter