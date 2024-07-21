
type ApodData = {
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

type FooterProps = {
    showModal: boolean,
    handleToggleModal: () => void,
    data: ApodData | undefined
}

export default function Footer(props: FooterProps) {

    const {showModal, handleToggleModal, data} = props

    return (
        <footer className="footer">
            <div className="bgGradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>
            </div>
            <button className="infoBtn" onClick={handleToggleModal}>
                {!showModal && (<i className="fa-solid fa-circle-info"></i>)}
            </button>
        </footer>
    )
}