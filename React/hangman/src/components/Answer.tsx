// displays the correctly guessed letters and full word spaces between the handman drawing and keyboard

type AnswerProps = {
    word: string,
    guessed: string[],
    correct: number
}


export default function Answer(props: AnswerProps) {
    const {word, guessed, correct} = props

    return (
        <div className="flex justify-center gap-4 p-4">
            {[...word].map((letter, index) => {
                return (
                    <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl" key={index}>
                        {guessed.includes(letter) ? (<h2 className="text-center">{letter}</h2>) : 
                        (guessed.length - correct < 6 ? <h2>{""}</h2> : <h2 className="text-center text-red-600" key={index}>{letter}</h2>)}
                        <h2 className="mt-2 w-10 border-t-4 border-black"></h2>
                    </div>
                )
            })}
        </div>
    )
}