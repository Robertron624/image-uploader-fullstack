import './ImagePlacer.scss'
import Dropzone from 'react-dropzone'

export interface AcceptedFiles {
  name: string
  size: number
  type: string
  lastModified: number
  lastModifiedDate: Date
  webkitRelativePath: string
}

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

interface ImagePlacerProps {
  setCurrentImage: React.Dispatch<React.SetStateAction<File | null>>
}

const ImagePlacer = ({setCurrentImage}:ImagePlacerProps) => {  

  return (
    <Dropzone onDrop={(acceptedFiles:File) => setCurrentImage(acceptedFiles)}>
      {({getRootProps, getInputProps}: {getRootProps: any, getInputProps: any}) => (
          <div className='image-placer'>
            <div {...getRootProps({style})}>
              <input {...getInputProps()} />
              
              <div className="placeholders">
                <img src="/mountain.jfif" alt="mountains" className='placeholder-image' />
                <p className="placeholder-text">
                  Drag & Drop your image here
                </p>
              </div>
            </div>
          </div>
        )}
    </Dropzone>
  )
}


export default ImagePlacer