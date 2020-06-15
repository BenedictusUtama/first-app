import React from 'react'

class HelloUser extends React.Component{
    render(){
        return(
        <h1> Salutations {this.props.name}</h1>
        )
    }
}

export default HelloUser