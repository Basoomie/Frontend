// contains the hangman drawing

type DrawingProps = {
    guessed: string[],
    correct: number
}

const HEAD = (
    <div></div>
)

const BODY = (
    <div></div>
)

const ARMS = (
    <div></div>
)

const LEGS = (
    <div></div>
)


export default function Drawing(props: DrawingProps) {
    const {guessed, correct} = props
    
    return (
        <div>
            <div className="">

            </div>
        </div>
    )
}
