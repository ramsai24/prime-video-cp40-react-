// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  //   const renderComdeySlides  =movie =><Movies Slides

  //   const renderSwitch = movie => {
  //     const {categoryId} = movie

  //     switch (categoryId) {
  //       case 'COMEDY':
  //         return renderComdeySlides(movie)
  //       case 'ACTION':
  //         return renderActionSlides(movie)
  //       default:
  //         return null
  //     }
  //   }

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  //   console.log(actionMoviesList)

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  //   console.log(comedyMoviesList)

  //   console.log(moviesList)
  return (
    <div className="app-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </div>
      <div className="cont">
        <h1>Action Movies</h1>
        <MoviesSlider data={actionMoviesList} />
      </div>
      <div>
        <h1>Comedy Movies</h1>
        <MoviesSlider data={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
