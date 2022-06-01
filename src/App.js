import "./styles.css";
import Album from "./Album";
import AlbumDatabase from "./data";

export default function App() {
  return (
    AlbumDatabase.map(album => 
      <Album 
      id={album.id} 
      name={album.name} 
      coverImg={album.coverImg}
      tracks={album.tracks}
      /> )

  );
}
