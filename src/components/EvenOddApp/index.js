// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state count ${prevState.count}`)
      return {count: prevState.count + Math.ceil(Math.random() * 100)}
    })
  }

  render() {
    const {count} = this.state

    let result
    if (count % 2 === 0) {
      result = 'Even'
    } else {
      result = 'Odd'
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-heading">Count is {result}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
