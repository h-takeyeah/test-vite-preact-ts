// import { Logo } from './logo'
import { Component } from 'preact'

export class App extends Component {
  // こいつらはクラスのメンバなのでconstやletをつけない
  state = { value: '', name: 'world' }

  onInput = (ev: Event) => {
    // as HTMLInputElement はtargetにvalueが存在しませんと言われたから
    this.setState({ value: (ev.target as HTMLInputElement).value })
  }

  onSubmit = (ev: Event) => {
    ev.preventDefault()
    this.setState({ name: this.state.value })
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.value} onInput={this.onInput} />
          <button type="submit">Update</button>
        </form>
        <Clock />
      </div>
    )
  }
}

class Clock extends Component {
  render () {
    let time = new Date().toLocaleTimeString()
    return <span>{time}</span>
  }
}