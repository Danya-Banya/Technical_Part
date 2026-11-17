import "./App.css";
import { ImageCard } from "./ImageCard";
import { usePhotos } from "./api/usePhotos";

const App = () => {
  const { data: photos } = usePhotos();
  console.log(photos);
  
  return (
    <section className="imageContainer">
      {photos?.map((photo) => (
        <ImageCard key={photo.id} image={photo}/>
      ))}
    </section>
  );
};

export default App;
