
type ApodData = {
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

type MainImageProps = {
    data: ApodData | undefined
}

export default function MainImage(props: MainImageProps) {
    const {data} = props
    return (
        <div className="imgContainer">
            <img src={data?.hdurl} alt={data?.title || "bg image"} className="mainImage"/>
        </div>
    )
}