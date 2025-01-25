import './styles/styles.css';
import { useState } from 'react';
import RoutPage from './routes';

function App() {

  const [imageSrc, setImgSrc] = useState(null);

  const handleCapture = () => {
    const video = document.querySelector('video')
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0,0, canvas.width, canvas.height);
    setImgSrc(canvas.toDataURL());
  }

  return (
    <div className="App">
      <h1>Face Recognition App</h1>
      <RoutPage />
      {imageSrc && <img src={imageSrc} alt='capture'/>}
    </div>
  );
}

export default App;
