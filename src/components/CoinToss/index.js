// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEAD_IMAGE_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossButton = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossHeadsCount = headsCount
    let tossTailsCount = tailsCount
    let tossImage = ''

    if (toss === 0) {
      tossImage = HEAD_IMAGE_URL
      tossHeadsCount += 1
    } else {
      tossImage = TAIL_IMAGE_URL
      tossTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: tossHeadsCount,
      tailsCount: tossTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss-names">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-image" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
