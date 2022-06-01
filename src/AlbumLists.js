export default function AlbumLists(props) {
    const { name, coverImg, tracks} = props;

    return (
        <div>
        <ul>
            <img src={coverImg} className="albumImage"></img>
            <p>{name}</p>
        </ul>
        </div>
    )
}