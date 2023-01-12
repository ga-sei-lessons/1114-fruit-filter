import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class FruitContainer extends Component {

    // state to hold the starterFruits, and the fruits that have been filtered, and a value that controls the input
    state = {
        // array of fruits to display
        fruitsToDisplay: this.props.starterFruits,
        // value that controls the input
        filterValue: ''
    }

    // a method controls the input values and filters the fruits
    handleFilterChange = e => {
        // use the e.target.value to filter fruit state before we set it
        console.log(e)
        const filteredFruitsList = this.props.starterFruits.filter(fruit => {
            // using toLowerCase on both things we are comparing to make a case insensitive search
            return fruit.toLowerCase().includes(e.target.value.toLowerCase())
        })
        // control the state from the input
        this.setState({
            filterValue: e.target.value,
            fruitsToDisplay: filteredFruitsList
        })
    }

    render() {
        return (
            <div>
                <h1>Filter Some Fruits:</h1>
                <Input 
                    value={this.state.filterValue}
                    handleFilterChange={this.handleFilterChange}
                />
                <List 
                    fruits={this.state.fruitsToDisplay}
                />
            </div>
        )
    }
}