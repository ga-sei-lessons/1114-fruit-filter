import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class FruitContainer extends Component {

    // state to hold the starterFruits, and the fruits that have been filtered, and a value that controls the input
    state = {
        // array of fruits to display
        fruitsToDisplay: this.props.starterFruits,
        // array of fruits that have not matched what the user typed
        filteredFruits: [],
        // value that controls the input
        filterValue: ''
    }

    // a method controls the input values and filters the fruits
    handleFilterChange = e => {
        // use the e.target.value to filter fruit state before we set it
        console.log(e)
        // const filteredFruitsList = this.props.starterFruits.filter(fruit => {
        //     // using toLowerCase on both things we are comparing to make a case insensitive search
        //     return fruit.toLowerCase().includes(e.target.value.toLowerCase())
        // })
        // // find all fruits that to not match our filter
        // const removedFruitsList = this.props.starterFruits.filter(fruit => {
        //     return !fruit.toLowerCase().includes(e.target.value.toLowerCase())
        // })
        const filteredFruitsList = []
        const removedFruitsList = []
        this.props.starterFruits.forEach(fruit => {
            // if we have a match, put in the filteredFruitsList
            if (fruit.toLowerCase().includes(e.target.value.toLowerCase())) {
                filteredFruitsList.push(fruit)
            } else {
                // otherwise toss in the removedFruitesList
                removedFruitsList.push(fruit)
            }
        })
        // control the state from the input
        this.setState({
            filterValue: e.target.value,
            fruitsToDisplay: filteredFruitsList,
            filteredFruits: removedFruitsList
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
                    removedFruits={this.state.filteredFruits}
                />
            </div>
        )
    }
}