import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const fruits = this.props.fruits.map((fruit, i) => {
            return <li key={`fruit${i}`}>{fruit}</li>
        })

        return (
            <div>
                <ul>
                    {fruits}
                </ul>
            </div>
        )
    }
}