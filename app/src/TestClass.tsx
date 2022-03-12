import React from "react"
import { Component, ReactNode } from "react";
import CatImage from "../res/cat.jpg"
import CorrectSound from "../res/correct.mp3"
import "./index.css"


export default class TestClass extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            responseOk: false,
            fullscreen : false
        }
    }

    backgroundTask = async () => {
        try {
            let res = await fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml")
            console.log(res)
            this.setState({ responseOk: res.ok })
        } catch {
            this.setState({ responseOk: false })
        }
    }

    toggleFullscreen = () => {
        this.state.fullscreen? document.exitFullscreen() : document.body.requestFullscreen()
        this.setState({fullscreen : !this.state.fullscreen})
    }


    render(): ReactNode {
        return (<div>
            <h1>Ciao Mondo</h1>
            <audio controls>
                <source src={CorrectSound} />
                Sorry your browser doesn't support the audio tag
            </audio>
            <img src={CatImage} alt="" style={{ width: 200 }} />
            <button onClick={this.backgroundTask}>Ping Server</button>
            <button onClick={this.toggleFullscreen}>{this.state.fullscreen? "Exit Fullscreen" : "Enter Fullscreen" }</button>
            <p>{this.state.responseOk ? "server responded" : "server didn't respond"}</p>
        </div>)
    }


}