import React from 'react'

type ButtonProps = {
    word: string,
    guessed: string[],
    correct: number,
    handleNewGame: () => void
}

export default function Button(props: ButtonProps) {
    const {word, guessed, correct, handleNewGame} = props

    return (
        <div className='text-center p-16'>
            <button onClick={handleNewGame} className='border-2 rounded-md p-4 hover:bg-slate-800 hover:text-gray-200 duration-200'>
                {(!guessed.length && "Start Game") ||
                ((guessed.length - correct > 5 && "Try Again")) || 
                ("New Game")}
            </button>
        </div>
    )
}
