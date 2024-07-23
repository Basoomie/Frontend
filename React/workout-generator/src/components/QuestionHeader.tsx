
type QuestionHeaderProps = {
    num: string,
    title: string,
    caption: string
}

export default function QuestionHeader(props: QuestionHeaderProps) {
    const {num, title, caption} = props

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div className="flex items-center justify-items-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl text-gray-400">{num}</p>
                <h4 className="text-2xl sm:text-3xl md:text-4xl">{title}</h4>
            </div>
            <p>{caption}</p>
        </div>
    )
}
