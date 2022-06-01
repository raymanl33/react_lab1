import "./styles.css";

export default function Album(props) {
    // object destructuring
    const { name, coverImg, tracks} = props;

    console.log(tracks);
    return (
      <div>
      <p>Album Name: {name}</p>
      <img src={coverImg}></img>
        <ol className="tracks">
            {tracks.map(track => (<li>{track} ▶️</li>))}
        </ol>
      </div>
  
    )}
