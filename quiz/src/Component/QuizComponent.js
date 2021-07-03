import React, { Component } from 'react'
import './QuizComponent.css'

export default class QuizComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1>Question</h1>
                <h4>WHich is the only mammal that cannot jump?</h4>
                <div>
                <span><button className="btn">Dog</button></span>
                <span><button className="btn">Goat</button></span>
                </div>
                <div>
                <span><button className="btn">Elephant</button></span>
                <span><button className="btn">Lion</button></span>
                </div>
                <div>
                <span><button className="btn1">Previous</button></span>
                <span><button className="btn2">Next</button></span>
                <span><button className="btn3">Quit</button></span>
                </div>
            </div>
        )
    }
}
