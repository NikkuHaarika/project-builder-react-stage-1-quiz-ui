import React, { Component } from 'react'
import './ResultComponent.css'

export default class ResultComponent extends Component {
    render() {
        return (
            <div>
                <div id="header">Result</div>
                <div id="container">
                    <h3>You need more paractice!</h3>
                    <h1 id="score">Your Score is : 20%</h1>
                   <div id="mark"><h4>Total number of questions: 15</h4>
                    <h4>Number of questions attempted: 9</h4>
                    <h4>Number of correct questions: 3</h4>
                    <h4>Number of wrong answers: 6</h4></div> 
                </div>
                <div id="foot">
                   <span><button className="last">Play again</button></span>
                   <span><button className="last">Back to home</button></span>
                </div>
            </div>
        )
    }
}
