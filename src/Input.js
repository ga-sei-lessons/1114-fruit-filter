import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                <label htmlFor='filterInput'>Fruit:</label>

                <input 
                    type='text'
                    id='filterInput'
                    // control the input using the method and value pass in as props
                    value={this.props.value}
                    onChange={this.props.handleFilterChange}
                />
                {/* 
                    <button
                        onClick={e => console.log(e)}
                    >test</button> 
                */}
            </div>
        )
    }
} 