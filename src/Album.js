import "./styles.css";

export default function Album(props) {
    // object destructuring
    const { name, coverImg, tracks} = props;

    console.log(tracks);
    return (
      <div className="grid-album">
      <img src={coverImg}></img>
        <ol className="tracks">
            {tracks.map(track => (<button>{track} ▶️</button> ))}
        </ol>
      </div>
  
    )}
