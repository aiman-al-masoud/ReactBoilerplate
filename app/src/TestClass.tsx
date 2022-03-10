import React from "react"
import { Component, ReactNode } from "react";
import LeafImage from "../res/leaf.png"
import CorrectSound from "../res/correct.mp3"


export default class TestClass extends Component {
    constructor(props: any) {
        super(props)
    }

    render(): ReactNode {
        return (<div>
            <h1>Ciao Mondo</h1>
            <audio controls>
                <source src={CorrectSound} />
                Sorry your browser doesn't support the audio tag
            </audio>
            <img src={LeafImage} alt="" width="200" />
        </div>)
    }


}