import { render } from 'preact'
import { App } from './app'
import './index.css'

//render(App, document.getElementById('app')!) // エラーは出ないが描画されず
//render(App, document.body)                   // 上に同じ

//h(App,null)とかしてみた(そもそも(Class)Componentのrender()のreturnでJSXの代わりに
//書くものだから使い方違うけど)
//そしたら
//Internal server error: unknown: Identifier 'h' has already been declared
//が出た。原因はhが自動でinjectionされていることらしい。vite.config.ts内pluginにpreact
//のpluginを指定するとこうなる。
//今回は"npm init @vitejs/app test-vite-preact-ts -- --template preact-ts"で
//プロジェクトを作ったので最初からpluginにpreactが指定されていた。だから
//import { h, render } from 'preact'
//みたいに明示的にimportすると今のエラーが出る。

//とりあえず人間はJSXで書けばオールOKでpreact向けのh形式への変換だり何だりは全て機械がやってくれる
//ので触らんとこって感じなんだろう。ちなみに純粋なprect-tsプロジェクトでhのimportを省略したら
//エラーになったのでhが自動でinjectionされるのはvite固有の動き
// ref. https://preactjs.com/guide/v10/differences-to-react#jsx-constructor

render(<App />, document.getElementById('app')!) // !が必要なのマジで謎
