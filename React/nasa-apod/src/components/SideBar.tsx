
type ApodData = {
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

type SideBarProps = {
    handleToggleModal: () => void,
    data: ApodData | undefined
}

export default function SideBar(props: SideBarProps) {
    const {handleToggleModal, data} = props

    return (
        <div className="sidebar">
            <div className="bgOverlay" onClick={handleToggleModal}></div>
            <div className="sidebarContent">
                <h2>{data?.title}</h2>
                <div className="description">
                    <p className="descDate">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
}

