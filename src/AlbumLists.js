export default function AlbumLists(props) {
    const { name, coverImg, tracks} = props;

    return (
        <div className="grid-albumList">
        <ul>
            <img src={coverImg} className="albumImage" alt={name}></img>
            <p>{name}</p>
        </ul>
        </div>
    )
}