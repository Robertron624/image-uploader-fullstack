import './ImagePlacer.scss'
import Dropzone from 'react-dropzone'


interface AcceptedFiles {
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


const ImagePlacer = () => {
  return (
    <Dropzone onDrop={(acceptedFiles: AcceptedFiles) => console.log(acceptedFiles)}>
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