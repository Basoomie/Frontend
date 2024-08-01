import { useState } from "react"
import Answer from "./components/Answer"
import Drawing from "./components/Drawing"
import Keyboard from "./components/Keyboard"
import wordList from "./wordList.json"
import Message from "./components/Message"
import Button from "./components/Button"


function App() {
  const [word, setWord] = useState('') // stores the current word
  const [guessed, setGuessed] = useState<string[]>([]) // array of all currently guessed chars
  const [correct, setCorrect] = useState(0) // whether the game has ended or not

  function handleNewGame() {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
    setWord(newWord)
    setGuessed([])
    setCorrect(0)
  }

  // when a letter is guessed
  function handleGuessLetter(letter: string) {
    // so we don't add the same letter more than once or when the game has ended
    if (guessed.includes(letter) || guessed.length - correct > 5 || correct === word.length) {
      return
    }

    // if the guess was correct, increment correct count
    [...word].forEach((c) => {
      if (c === letter) {
        setCorrect(correct => correct + 1)
      }
    })

    setGuessed([...guessed, letter])
  }

  return (
    <main className="h-screen bg-gradient-to-r from-slate-600 to-slate-700 text-white">
      {(guessed.length - correct > 5 || (word && correct === word.length)) && <Message word={word} guessed={guessed} correct={correct}/>}
      {word && (
        <>
          <Drawing guessed={guessed} correct={correct} />
          <Answer word={word} guessed={guessed} correct={correct} />
          <Keyboard guessed={guessed} handleGuessLetter={handleGuessLetter} />
        </>
      )}
      <Button word={word} guessed={guessed} correct={correct} handleNewGame={handleNewGame} />
    </main>
  )
}

export default App
