import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
  const [messages, setMessages] = React.useState([])
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
            {
          messages.length > 0 && 
          <h1>You have {messages.length} unread messages!</h1>
      }
        </div>
    )
    }
