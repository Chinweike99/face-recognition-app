import React, { useEffect, useRef } from 'react'
import * as faceapi from 'face-api.js'

const Facerecognition = ({imgSource}) => {

    const imgRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        const loadModels = async () => {
            await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
            await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        };

        loadModels();
    }, []);


    useEffect(()=> {
        if(imgSource){
            const detectFace = async () => {
                const img = imgRef.current;
                const canvas = canvasRef.current;
                const detection = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();

                faceapi.matchDimensions(canvas, img);
                const resizedDetections = faceapi.resizeResults(detection, img);
                faceapi.draw.drawDetections(canvas, resizedDetections);
                faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
            }
            detectFace();
        }
    }, [imgSource])


  return (
    <div>
        <img ref={imgRef} src={imgSource} alt='capture' style={{display: "none"}} />
        <canvas ref={canvasRef} />
    </div>
  )
}

export default Facerecognition