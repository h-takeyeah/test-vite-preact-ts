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
  state = { time: Date.now() }
  /**
   * This is {@link https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/setInterval intervalID}
   *
   * (オマケ)`!`は *definite assignment assertion operator* で、
   * この変数は(たぶん参照時の)non-nullが保証されているよとコンパイラに教えてあげるやつ
   *
   * {@link https://typescript-jp.gitbook.io/deep-dive/intro/strictnullchecks#definite-assignment-assertion-yan-suan-zi-definite-assignment-assertion-operator Deep Dive}
   *
   * {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization TS2.7リリースノート}
   */
  timer!: number

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    let time = new Date().toLocaleTimeString()
    return <span>{time}</span>
  }
}