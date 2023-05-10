import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    review: 0,
  }

  Rightclick = () => {
    const {review} = this.state
    if (review !== 3) {
      this.setState(prevState => ({
        review: prevState.review + 1,
      }))
    }
  }

  Leftclick = () => {
    const {review} = this.state
    if (review !== 0) {
      this.setState(prevState => ({
        review: prevState.review - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {review} = this.state

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <img
          src={reviewsList[review].imgUrl}
          alt={reviewsList[review].username}
        />
        <div className="arrows">
          <button
            type="button"
            onClick={this.Leftclick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="name">{reviewsList[review].username}</p>
          <button
            type="button"
            onClick={this.Rightclick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="company">{reviewsList[review].companyName}</p>
        <p className="review">{reviewsList[review].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
