// contains the hangman drawing

type DrawingProps = {
    guessed: string[],
    correct: number
}

const HEAD = (
    <div className="w-5"></div>
)

const BODY = (
    <div className="w-5"></div>
)

const ARMS = (
    <div className="w-5"></div>
)

const LEGS = (
    <div className="w-5"></div>
)

const hangmanFigure = [HEAD, BODY, ARMS, ARMS, LEGS, LEGS]

export default function Drawing(props: DrawingProps) {
    const {guessed, correct} = props
    
    return (
        <div>
            <div className="w-5"></div>
            <div className="w-5"></div>
            <div className="w-5"></div>

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
