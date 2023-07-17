// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {data} = props
  const settings = {
    slidesToShow: 3,
  }
  return (
    <div>
      <Slider {...settings}>
        {data.map(each => {
          console.log('slide')

          return <MovieItem item={each} key={each.id} />
        })}
      </Slider>
    </div>
  )
}
export default MoviesSlider
