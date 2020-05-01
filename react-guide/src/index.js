import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';


// // # 要素の描写

// // ## 要素(element)とは`React`アプリケーションの最小単位の構成ブロック

// ```
// const element = <h1>Hello, React!</h1>

// ReactDOM.render(
//   element,
//   document.getElementById("root")
// )
// ```

// // ## 要素を DOM として描画する

// // * この中にあるもの全てが`React DOM`によって管理されることになるので、`Root DOM Node`と呼ぶことにする。
// // * Reactだけで構築されたアプリケーションは、通常`Root DOM Node`をひとつだけ持つ。
// // * 既存のアプリにReactを統合しようとしている場合は、独立した`Root DOM Node`を好きなだけ持つことができる。

// const element = <div id="root">Hello, React!</div>

// ReactDOM.render(
  //   element,
  //   document.getElementById("root")
// )
  
// ## レンダリングされた要素の更新
  
// * React elementはイミュータブル。
// * UIを更新する唯一の方法は、新しい要素を作成して`ReactDOM.render()`に渡して解決する。
// * 具体的には、逐次変化する要素を持った状態を関数に定義して、外から発火させる。
// * かしこい言葉で言えば、`関数setInterval()`のコールバックから`ReactDOM.render()`を毎秒呼び出す。

// ```
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, React!</h1>
//       <h2>Time is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById("root")
//   )
// }

// setInterval(tick, 1000)
// ```

// # Compnentと props

// Compnentにより`UI`を独立した再利用できる部品に分割し、部品それぞれを分離して考えることができるようになる。

// ## Function CompnentとClass Compnent

// ### Componentの定義　シンプル版

// __Function Component__

// データの入った`props`(「プロパティ」の意味)というオブジェクトを引数としてひとつ受け取り、React要素を返すので、有効な `React Compnent`である。

// これは文字通りJavaScriptの関数ですので、このようなCompnentのことを`Function Component`と呼ぶ。

// __基礎知識__

// > 変数にはJSXを入れる。
// > ということは（）で囲って大袈裟なhtmlを入れることもできるし、開始終了タグを入れることも出来る。JSXは状態なわけ。

// ```
// なにも表示されないけどね…
// const element = <div />
// ```

// Function名をクラスのインスタンスのように扱うことができる。

// ```
// 'Welcome' is not definedと言われるけどね…
// const element = <Welcome />
// ```

// まとめるとこんなことが出来る。シンプル、美しい。

// Reactがユーザ定義のコンポーネントを見つけた場合、`JSX`に書かれている属性と子要素を単一のオブジェクトとしてこのコンポーネントに渡します。このオブジェクトのことを`props`と呼ぶ。

// ```
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// const element = <Welcome name="Takahiro" />

// ReactDOM.render(
//   element,
//   document.getElementById("root")
// )
// ```

// ### コンポーネントを組み合わせる

// コンポーネントは自身の出力の中で他のコンポーネントを参照できます。これにより、どの詳細度のレベルにおいても、コンポーネントという単一の抽象化を利用できます。ボタン、フォーム、ダイアログ、画面：Reactアプリでは、これらは共通してコンポーネントとして表現される。

// クラス＝インスタンスの発生のさせ方がとてもRuby的で心地よい。

// ```
// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="nob" />
//       <Welcome name="kaz" />
//       <Welcome name="mari" />
//     </div>
//   )
// }
// ```

// ### コンポーネントの抽出

function Comment(props) {
  const user = [
    {
      text: "hello",
      date: "200501"
    }, {
      text: "goodby",
      date: "200502"

    }
  ]
  return (
    <div className="Comment">
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  )
}

function App() {

  return (
    <div></div>
  )
}
      // <div className="UserInfo">
      //   <img className="Avatar"
      //     src={props.author.avatarUrl}
      //     alt={props.author.name} />
      //   <div className="UserInfo-name">
      //     {props.author.name}
      //   </div>
      // </div>

ReactDOM.render(
  <App />,
  document.getElementById("root")
)


// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {props.date}
//       </div>
//     </div>
//   )
// }

// ReactDOM.render(
//   <Comment />,
//   document.getElementById("root")
// )





// __Class Component__

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }
