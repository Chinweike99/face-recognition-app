import React, { useEffect, useRef } from 'react'

const Camera = ({onCapture}) => {

  const videoRef = useRef();

  useEffect(()=>{
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: {} });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.log(error)
      }
    }
    startCamera();
  }, [])


  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted />
      <button onClick={onCapture}>Capture</button>
    </div>
  )
}

export default Camera