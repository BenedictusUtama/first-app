import React from 'react'
// import Navigation from './NavigationH'
//diff for git
import Navigation from './NavigationC'

function Header(){
    return (
        <header className = "border-b p-3 flex justify-between item-center">
            <span className = "font-bold">
                My First App
            </span>


            <Navigation />
        </header>
    )
}

export default Header