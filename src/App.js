import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

function App() {

    var ctx = new AudioContext()
    var o = ctx.createOscillator()
    var g = ctx.createGain()

    g.connect(ctx.destination)
    o.connect(g)

    const start = () => {
        o.start(0)
        const start = document.getElementById('start')
        start.style.display = 'none'
    }

    const connect = () => {
        g.connect(ctx.destination)
        g.gain.exponentialRampToValueAtTime(1, ctx.currentTime + 0.1)
    }

    const disconnect = () => {
        g.disconnect(ctx.destination)
    }

    const gong = () => {
        g.gain.exponentialRampToValueAtTime(1, ctx.currentTime)
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4)
    }


    return (
        <div className="App">
            <button id="start" onClick = {() => { start() }}>start</button>
            <button onClick = {() => { connect() }}>connect</button>
            <button onClick = {() => { disconnect() }}>disconnect</button>
            <button onClick = {() => { gong() }}>gong</button>
        </div>
    );
}

export default App;

