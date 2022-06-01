import "./styles.css";
import Album from "./Album";
import AlbumDatabase from "./data";
import AlbumLists from "./AlbumLists";

export default function App() {
  // hardcoded ... make it dynamic
  const selectedAlbum = AlbumDatabase.filter(album => album['id'] === 3)
  
  return (
    <div>
    {selectedAlbum.map(album => 
      <Album
          id={album.id} 
          name={album.name} 
          coverImg={album.coverImg}
          tracks={album.tracks}
      /> )}
      <h1>Select an Album</h1>
       {AlbumDatabase.map(album => 
      <AlbumLists
          id={album.id} 
          name={album.name} 
          coverImg={album.coverImg}
          tracks={album.tracks}
      /> )}
      

    </div>

  );
}
