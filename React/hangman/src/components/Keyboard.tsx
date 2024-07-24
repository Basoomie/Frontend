// the letters the user can guess (select)

type KeyboardProps = {
    word: string,
    guessed: string[],
    handleGuessLetter: (letter: string) => void
}

export default function Keyboard(props: KeyboardProps) {
    const {word, guessed, handleGuessLetter} = props

    // array of albphabet
    const alphabet: string[] = [...Array(26).keys()].map((i) => String.fromCharCode(65 + i))
    
    return (
        <div className="grid grid-cols-6 max-w-4xl mx-auto">
            {alphabet.map((letter, index) => {
                return (
                    <button onClick={() => {handleGuessLetter(letter)}} className={"border-2 border-black m-2 " + 
                        (guessed.includes(letter) ? "border-gray-900 text-gray-900" : "bg-slate-500 hover:bg-slate-800 duration-200")} key={index}>
                            {letter}
                    </button>
                )
            })}
        </div>
    )
}
