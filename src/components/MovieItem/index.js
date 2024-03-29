// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {item} = props
  //   console.log(item.videoURL)

  return (
    <div>
      <Popup modal trigger={<img src={item.thumbnailUrl} alt="thumbnail" />}>
        {close => (
          <div className="popup-container">
            <button
              data-testid="closeButton"
              className="close-btn"
              type="button"
              onClick={close}
            >
              <IoMdClose />
            </button>

            <div>
              <ReactPlayer url={item.videoUrl} controls />
            </div>

            {/* <p>{item.id}</p> */}
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
