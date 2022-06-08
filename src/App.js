import "./styles.css";
import Album from "./Album";
import AlbumDatabase from "./data";
import AlbumLists from "./AlbumLists";

import { useState } from "react";

export default function App() {

  // use state to allow the user to click an album image from the Albumlist component
  // and allow it to display the selected album at the top 
  const [shownIndex, setShownIndex] = useState(0);
  const selectedAlbum = AlbumDatabase.filter(album => album['id'] === shownIndex)
  
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
          onShow={() => setShownIndex(album.id)}
          isShown={shownIndex === 0}
          id={album.id} 
          name={album.name} 
          coverImg={album.coverImg}
          tracks={album.tracks}
      /> )}
      

    </div>

  );
}
