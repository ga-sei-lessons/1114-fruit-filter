import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const fruits = this.props.fruits.map((fruit, i) => {
            return <li key={`fruit${i}`}>{fruit}</li>
        })

        const removedFruits = this.props.removedFruits.map((fruit, i) => {
            return <li key={`removed-fruit${i}`}>{fruit}</li>
        })

        return (
            <div>
                <h2>matched fruits:</h2>
                <ul>
                    {fruits}
                </ul>

                <h2>unmatched fruits:</h2>
                <ul>
                    {removedFruits}
                </ul>
            </div>
        )
    }
}