import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const format = (userName) => `@${userName}`
    return(
        <TwitterFollowCard 
        formatUserName={format}  
        userName="oselko">
            Osel Nicolás Benitez
        </TwitterFollowCard>
    )
}