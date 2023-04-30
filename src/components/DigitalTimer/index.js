// Write your code here
import './index.css'

import {Component} from 'react'

class DigitalTimer extends Component {
  state = {limit: 25, status: true, seconds: 0, mins: 25, id: ''}

  onDecreaseLimit = () => {
    const {status} = this.state

    if (status) {
      this.setState(ps => ({
        mins: ps.mins - 1,
      }))
    }
  }

  onIncreaseLimit = () => {
    const {status} = this.state

    if (status) {
      this.setState(ps => ({
        mins: ps.mins + 1,
      }))
    }
  }

  decrease = () => {
    const {limit, seconds, status, mins} = this.state
    if (limit >= 0 && status === false) {
      // "decrease"
      if (seconds === 0) {
        this.setState(n => ({limit: n.mins - 1, seconds: 59}))
      } else {
        this.setState(q => ({seconds: q.seconds - 1}))
      }
    }
    const remSecs = limit * 60 + seconds
    console.log(remSecs, limit, mins, seconds)
    if (remSecs === 0 && !status) {
      const {id} = this.state
      clearInterval(id)
      this.setState(p => ({
        status: !p.status,
        seconds: 0,
        limit: 0,
      }))
    }
  }

  onStartLimit = () => {
    console.log('start')
    const {limit, status, seconds, mins} = this.state
    console.log(limit, status, seconds, mins)
    this.setState(p => ({
      status: !p.status,
    }))
    // this.setState(n => ({limit: n.limit - 1, seconds: 59}))
    // const remSecs = limit * 60 + seconds
    // console.log()

    //   console.log(limit * 60 + seconds > 0)
    const id = setInterval(this.decrease, 1000)
    this.setState({id})
  }

  onPauseLimit = () => {
    clearInterval(this.id)
    // change status to previous state
    this.setState(p => ({
      status: !p.status,
    }))
  }

  componentDidMount = () => {
    const {status} = this.state

    if (status === false) {
      this.onPauseLimit()
    }
  }

  onResetLimit = () => {
    console.log('reset')
    clearInterval(this.id)
    this.setState({limit: 25, status: true, seconds: 0, mins: 25})
  }

  render() {
    const {limit, status, seconds, mins} = this.state
    return (
      <div className="main">
        <div className="field">
          <h1 className="col-1">Digital Timer</h1>
          <div className="col-2">
            <div className="item-1">
              <div className="first">
                <div className="inner">
                  <h1>
                    {limit}:{seconds < parseInt(10) ? `0${seconds}` : seconds}
                  </h1>
                  <p>{!status ? 'Running' : 'Paused'}</p>
                </div>
              </div>
            </div>
            <div className="item-2">
              <div className="items">
                <div className="buttons">
                  {status ? (
                    <button type="submit" onClick={this.onStartLimit}>
                      <img
                        className="buttonImageSize"
                        alt="play icon"
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      />
                      {status ? 'Start' : 'Pause'}
                    </button>
                  ) : (
                    <button type="submit" onClick={this.onPauseLimit}>
                      <img
                        className="buttonImageSize"
                        alt="pause icon"
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      />
                      {status ? 'Start' : 'Pause'}
                    </button>
                  )}
                </div>

                <div className="buttons">
                  <button type="submit" onClick={this.onResetLimit}>
                    <img
                      className="buttonImageSize"
                      alt="reset icon"
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    />
                  </button>
                  <p className="buttonPara">Reset</p>
                </div>
              </div>
              <p>Set Timer limit</p>
              <div className="lastsection">
                <button
                  type="button"
                  className="symbol"
                  onClick={this.onDecreaseLimit}
                >
                  -
                </button>
                <p className="limit">{mins}</p>
                <button
                  type="button"
                  className="symbol"
                  onClick={this.onIncreaseLimit}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
