
type MessageProps = {
    word: string,
    guessed: string[],
    correct: number
}

export default function Message(props: MessageProps) {
    const {word, guessed, correct} = props

    return (
        <div className='text-center p-16'>
            {(correct === word.length && <h1 className='text:lg sm:text-xl md:text-2xl lg:text-3xl'>Congratulations, You Win!</h1>) ||
            guessed.length - correct > 5 && <h1 className='text:lg sm:text-xl md:text-2xl lg:text-3xl'>Nice Try!</h1>}
            
        </div>
    )
}
