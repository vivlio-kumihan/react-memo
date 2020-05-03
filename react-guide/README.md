## 最初のコード

### アプリのインストール

```
$ npx create-react-app PROJECT_NAME
```

### Headerのコードについて

```
import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
```

index.jsから見て

* `react`module
* `./assets/img`ディレクトリの`logo.svg`ファイル
* `./assets/css`ディレクトリの`App.css`ファイル

をインスタンス化してimportしている。

### とりあえずReactが動作するかを確認するためのコード

__src/index.js__

```
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);
```

# Reactに慣れる

## 変数を宣言して出力する

```
const name = "John Lennon";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

## 関数、変数を仕込んで出力させる

```
function formatName(user) {
  return `${ user.firstName } ${ user.lastName }`
}

const user = {
  firstName: "Paul",
  lastName: "MaCartney",
}

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
)
```

## 条件分岐を使う

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user}!</h1>
  }
  return <h1>Hello, Stranger...</h1>
}

const element = (
  <h1>
    {getGreeting("Nobuyuki")}
    {/* {getGreeting("")} */}
  </h1>
)
```

# JSXの仕様

__CSS3の仕様＋キャメルケース__
__CSS3の仕様＋中括弧で囲んだJavaScript式__

```
const element = <div className="nav"></div>
const element = <div tabIndex="0"></div>
const element = <img src={user.avatarUrl}></img>
```

__XMLと同様に`/>`としてタグを閉じることができる__

```
const element = <img src={user.avatarUrl}　/>
```

__JSXタグは子要素を持つことができる__

```
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
)
```

## JSXはオブジェクトの表現である

__JSXで書く__

```
const element = (
  <h1 className="greeting">
    Hello, React!
  </h1>
)
```

__Babelで書く__

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, React'
)
```

__`React.createElement`は以下のオブジェクトを生成する。__

```
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
}
```

# 要素の描写

## 要素(element)とは`React`アプリケーションの最小単位の構成ブロック

```
const element = <h1>Hello, React!</h1>

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

## 要素を DOM として描画する

* この中にあるもの全てが`React DOM`によって管理されることになるので、`Root DOM Node`と呼ぶことにする。
* Reactだけで構築されたアプリケーションは、通常`Root DOM Node`をひとつだけ持つ。
* 既存のアプリにReactを統合しようとしている場合は、独立した`Root DOM Node`を好きなだけ持つことができる。

const element = <div id="root">Hello, React!</div>

ReactDOM.render(
  element,
  document.getElementById("root")
)
  
## レンダリングされた要素の更新
  
* React elementはイミュータブル。
* UIを更新する唯一の方法は、新しい要素を作成して`ReactDOM.render()`に渡して解決する。
* 具体的には、逐次変化する要素を持った状態を関数に定義して、外から発火させる。
* かしこい言葉で言えば、`関数setInterval()`のコールバックから`ReactDOM.render()`を毎秒呼び出す。

```
function tick() {
  const element = (
    <div>
      <h1>Hello, React!</h1>
      <h2>Time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById("root")
  )
}

setInterval(tick, 1000)
```

# Compnentと props

Compnentにより`UI`を独立した再利用できる部品に分割し、部品それぞれを分離して考えることができるようになる。

## Function CompnentとClass Compnent

### Componentの定義　シンプル版

__Function Component__

データの入った`props`(「プロパティ」の意味)というオブジェクトを引数としてひとつ受け取り、React要素を返すので、有効な `React Compnent`である。

これは文字通りJavaScriptの関数ですので、このようなCompnentのことを`Function Component`と呼ぶ。

__基礎知識__

> 変数にはJSXを入れる。
> ということは（）で囲って大袈裟なhtmlを入れることもできるし、開始終了タグを入れることも出来る。JSXは状態なわけ。

```
なにも表示されないけどね…
const element = <div />
```

Function名をクラスのインスタンスのように扱うことができる。

```
'Welcome' is not definedと言われるけどね…
const element = <Welcome />
```

まとめるとこんなことが出来る。シンプル、美しい。

Reactがユーザ定義のコンポーネントを見つけた場合、`JSX`に書かれている属性と子要素を単一のオブジェクトとしてこのコンポーネントに渡します。このオブジェクトのことを`props`と呼ぶ。

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Takahiro" />

ReactDOM.render(
  element,
  document.getElementById("root")
)
```
```
__Class Component__

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
````

### コンポーネントを組み合わせる

コンポーネントは自身の出力の中で他のコンポーネントを参照できます。これにより、どの詳細度のレベルにおいても、コンポーネントという単一の抽象化を利用できます。ボタン、フォーム、ダイアログ、画面：Reactアプリでは、これらは共通してコンポーネントとして表現される。

クラス＝インスタンスの発生のさせ方がとてもRuby的で心地よい。

__Compornent stateを使う時のimport__

```
import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
```

```
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>
}

function App() {
  return (
    <div>
      <Welcome name="nob" />
      <Welcome name="kaz" />
      <Welcome name="mari" />
    </div>
  )
}
```

### コンポーネントの抽出 ー全然理解できていないー

コンポーネントをより小さなコンポーネントに分割することを恐れないでください。

origin

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}
```

#02

これは`props`として`author（オブジェクト）`、`text（文字列）`、および`date（日付）`を受け取り、ソーシャルメディアサイトにおける1つのコメントを表します。

これだけのネストがあるため、このコンポーネントの変更には苦労を伴い、また内部の個々の部品を再利用することも困難です。ここからいくつかのコンポーネントを抽出しましょう。

まず、`Avata`rを抽出します。

```
function Avatar(props) {
  return (
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name} />
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}
```

`Avatar`は、自身が`Comment`の内側でレンダリングされているということを知っている必要はありません。なので`props`の名前として、`author`ではなく`user`というもっと一般的な名前を付けました。

コンポーネントが使用されるコンテキストではなく、コンポーネント自身からの観点で`props`の名前を付けることをお勧めします。

これで`Comment`をほんの少しシンプルにできます。

#03

次に、ユーザ名の隣の`Avatar`をレンダリングするために使われる、`UserInfo`コンポーネントを抽出しましょう。

```
function Avatar(props) {
  return (
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name} />
  )
}

function UserInfo(props) {
  return (
    <div className="UsdrInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

ReactDOM.render(
  <Comment />,
  document.getElementById("root")
)
```

コンポーネントの抽出は最初は面倒な仕事のように思えますが、再利用できるコンポーネントをパレットとして持っておくことは、アプリケーションが大きくなれば努力に見合った利益を生みます。役に立つ経験則として、UIの一部（Button、Panel、Avatarなど）が複数回使われている場合、またはそのUI自体が複雑（App、FeedStory、Commentなど）である場合、それらは再利用可能なコンポーネントにする有力な候補であるといえます。

## Props は読み取り専用

コンポーネントを関数で宣言するかクラスで宣言するかに関わらず、自分自身の props は決して変更してはいけません。

このような関数は入力されたものを変更しようとせず、同じ入力に対し同じ結果を返すので “純粋” であると言われます。

全ての`Reactコンポーネント`は、自己の`props`に対して純関数のように振る舞わねばならない。


```
function Sum(props) {
  return `${ props.nums[0] } + ${ props.nums[1] } = ${ props.nums[0] + props.nums[1] }`
}

const element = <Sum nums={[100, 10]} />

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

```
// import React from 'react';
import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
```

## state とライフサイクル

`UI`を更新するための方法をひとつだけ学びました。それはレンダーされた出力を更新するために`ReactDOM.render()`を呼び出すというものでした。

この`Clockコンポーネント`を真に再利用可能かつカプセル化されたものにする方法を学びます。コンポーネントが自分でタイマーをセットアップし、自身を毎秒更新するように変更を加えます。

```
function tick() {
  const element = (
    <div>
      <h3>Hello, React!</h3>
      <h3>Now, {new Date().toLocaleTimeString()}!</h3>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById("root")
  )
}
setInterval(tick, 1000)
```

時計の見た目をカプセル化するところから始めます。

```
function Clock(props) {
  return (
    <div>
      <h3>Hello, React!</h3>
      <h3>Now, {new Date().toLocaleTimeString()}!</h3>
    </div>
  )
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById("root")
  )
}

setInterval(tick, 1000)
```

しかし上記のコードは重要な要件を満たしていません。

`Clock`がタイマーを設定して`UI`を毎秒ごとに更新するという処理は、`Clock`の内部実装の詳細(implementation detail)であるべきだということです。

理想的には以下のコードを一度だけ記述して、`Clock`に自身を更新させたいのです。

```
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
```

これを実装するには、`Clockコンポーネント`に“`ステート(state)`”を追加する必要があります。

`state`は`props`に似ていますが、コンポーネントによって完全に管理されるプライベートなものです。

## 関数をクラスに変換する

1. `React.Component`を継承する同名のES6クラスを作成する。
1. `render()`と呼ばれる空のメソッドを1つ追加する。
1. 関数の中身を`render()`メソッドに移動する。
1. `render()`内の`props`を`this.props`に書き換える。
1. 空になった関数の宣言部分を削除する。

```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello, React!</h3>
        <h3>Now, {this.props.date.toLocaleTimeString()}.</h3>
      </div>
    )
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById("root")
  )
}

setInterval(tick, 1000)
```

これでもう、`Clock`は関数ではなくクラスとして定義されています。

`renderメソッド`は更新が発生した際に毎回呼ばれますが、同一の`DOMノード内`で`<Clock/>`をレンダーしている限り、`Clockクラス`のインスタンスは1つだけ使われます。このことにより、`ローカルstate`や`ライフサイクルメソッド`といった追加の機能が利用できるようになります。

## クラスにローカルな state を追加する

以下の3ステップで`date`を`props`から`state`に移します：

1. `render()メソッド内`の`this.props.date`を`this.state.date`に書き換える。
1 `this.state`の初期状態を設定するクラスコンストラクタを追加する。
1 `<Clock />`要素から`date`プロパティを削除する。

```
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  render() {
    return (
      <div>
        <h3>Hello, React!</h3>
        <h3>Now, {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
```
