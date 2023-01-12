import React, { Component } from 'react'
import FruitContainer from './FruitContainer'

const starterFruits = [
  'Apple',
  'Pineapple',
  'Pen',
  'Mango',
  'Watermelon',
  'Apricot',
  'Strawberry',
  'Blueberry',
  'Rasberry',
  'Boisenberry',
  'Lingenberry',
  'Kiwi',
  'Mangosteen'
]

export default class App extends Component {
  render() {
    return (
      <>
        <FruitContainer starterFruits={starterFruits} />
      </>
    )
  }
}