export default function AlbumLists(props) {
    const { onShow, name, coverImg, tracks} = props;

    return (
        <div className="grid-albumList">
        <ul>
            <input onClick={() => {onShow()}} type="image" src={coverImg} className="albumImage"></input>
            <p>{name}</p>
        </ul>
        </div>
    )
}