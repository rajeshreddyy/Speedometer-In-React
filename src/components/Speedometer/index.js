// Write your code here
import {Component} from 'react'
import './index.css'

const Button = props => {
  const {btnText, styling, onClick} = props
  return (
    <button type="submit" onClick={onClick} className={styling}>
      {' '}
      {btnText}{' '}
    </button>
  )
}

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onBrake = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state
    console.log(speed)
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1>
          Speed is <span>{speed}</span>mph
        </h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <Button
            btnText="Activate"
            styling="activate-btn"
            onClick={this.onAccelerate}
          />
          <Button
            btnText="Apply Brake"
            styling="brake-btn"
            onClick={this.onBrake}
          />
        </div>
      </div>
    )
  }
}

export default Speedometer
