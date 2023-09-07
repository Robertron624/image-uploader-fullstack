import './Loading.scss'

const Loading = () => {
  return (
    <div className='loading-container'>
        <p>
            Uploading...
        </p>
        <div className="loading-bar">
            <div className="loading-bar__progress"></div>
        </div>
    </div>
  )
}

export default Loading