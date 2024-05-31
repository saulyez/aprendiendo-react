import { memo } from 'react'
import './App.css'
import { TwitterFolloCard } from './TwitterFollowCard'
export function App() {
    return(
        <>
        <TwitterFolloCard username= "midudev" name="Miguel"/>
        <TwitterFolloCard username= "pheralb" name="Miguel"/>
        
        </>
    )
}