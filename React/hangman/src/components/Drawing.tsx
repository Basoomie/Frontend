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

const hangmanFigure = [HEAD, BODY, ARMS, ARMS, LEGS, LEGS]

export default function Drawing(props: DrawingProps) {
    const {guessed, correct} = props
    
    return (
        <div>
            <div className="">

            </div>
            {[...Array(hangmanFigure.length)].map(index => {
                return (
                    <div key={index}>
                        (guessed.length - correct == index) && hangmanFigure[index - 1]
                    </div>
                )
            })}
        </div>
    )
}
