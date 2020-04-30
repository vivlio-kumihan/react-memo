import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

// # Reactに慣れる

// ## 変数を宣言して出力する

// ```
// const name = "John Lennon";
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById("root")
// )
// ```

// ## 関数、変数を仕込んで出力させる

// ```
// function formatName(user) {
//   return `${ user.firstName } ${ user.lastName }`
// }

// const user = {
//   firstName: "Paul",
//   lastName: "MaCartney",
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// )
// ```

// ## 条件分岐を使う

// ```
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {user}!</h1>
//   }
//   return <h1>Hello, Stranger...</h1>
// }

// const element = (
//   <h1>
//     {getGreeting("Nobuyuki")}
//     {/* {getGreeting("")} */}
//   </h1>
// )
// ```

// # JSXの仕様

// __CSS3の仕様＋キャメルケース__
// __CSS3の仕様＋中括弧で囲んだJavaScript式__

// ```
// const element = <div className="nav"></div>
// const element = <div tabIndex="0"></div>
// const element = <img src={user.avatarUrl}></img>
// ```

// __XMLと同様に`/>`としてタグを閉じることができる__

// ```
// const element = <img src={user.avatarUrl}　/>
// ```

// __JSXタグは子要素を持つことができる__

// ```
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// )
// ```

// ## JSXはオブジェクトの表現である

// __JSXで書く__

// ```
// const element = (
//   <h1 className="greeting">
//     Hello, React!
//   </h1>
// )
// ```

// __Babelで書く__

// ```
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, React'
// )
// ```

// __`React.createElement`は以下のオブジェクトを生成する。__

// ```
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// }
// ```

// # 要素の描写

// 要素(element)とは`React`アプリケーションの最小単位の構成ブロック。

const element = <h1>Hello, React!</h1>

ReactDOM.render(
  element,
  document.getElementById("root")
)
