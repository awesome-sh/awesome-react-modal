import React, { useState } from 'react'
import Modal from './lib/Modal'
import styled from 'styled-components'

import Bg from './assets/bg.jpg'

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Bg});
    background-size: cover;
    background-attachment: fixed;

    .btn {
        cursor: pointer;
        width: 200px;
        height: 50px;
        border-radius: 15px;
        font-size: 16px;
        color: #fff;
        background: #555555;
        border: none;
        outline: none;
        transition: all 0.5s ease-out;

        &:hover {
            background: #242424;
        }
    }
`

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.26);
`

function App() {
    const [ isOpen, setOpen ] = useState(false)

    return (
        <AppContainer>
            <Filter>
                <button className="btn" onClick={() => setOpen( state => !state )}>Modal Open</button>
                
                <Modal 
                    isOpen={isOpen}
                    width={900}
                    title="Modal Title"
                    desc="What is Lorem Ipsum Test <br/>
                    What is Lorem Ipsum Test <br/>
                    What is Lorem Ipsum Test <br/>
                    What is Lorem Ipsum Test <br/>
                    What is Lorem Ipsum Test <br/>
                    What is Lorem Ipsum Test <br/>
                    What is Lorem Ipsum Test <br/>
                    What is Lorem Ipsum Test <br/>"
                    descHeight={350}
                    textAlign="center" // left, center(Default), right
                    
                    // Optional Custom Cancle ---------
                    cancleText="Close"
                    cancleHandler={() => setOpen(false)}

                    successText="OK"
                    successHandler={() => window.alert('Click')}

                    isScroll={true}
                    theme="#7724bb"
                    // white(Default), black, navy, 
                    // pink, red, orange, yellow, blue
                    // Custom Color Hex Code #532452
                />
            </Filter>
        </AppContainer>
    )
}

export default App
