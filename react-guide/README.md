## __最初のコード__

### アプリケーションのインストール

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

とりあえずReactが動作するかを確認するためのコード。ヘッダー（とは言わないが）とレンダー。

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

## __変数を宣言して出力する__

```
const name = "John Lennon";
const element = <h1>Hello, {name}</h1>;
```

## __関数、変数を仕込んで出力させる__

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

## __条件分岐を使う__

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

## __JSXのわかりやすさ__

### JSXで書く

```
const element = (
  <h1 className="greeting">
    Hello, React!
  </h1>
)
```

### Babelで書く

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

## __要素(element)とは`Reactアプリケーション`の最小単位の構成ブロック__

```
const element = <h1>Hello, React!</h1>

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

## __要素をDOMとして描画する__

* この中にあるもの全てが`React DOM`によって管理されることになるので、`Root DOM Node`と呼ぶことにする。
* Reactだけで構築されたアプリケーションは、通常`Root DOM Node`を __ひとつだけ__ 持つ。
* 『既存のアプリケーションにReactを統合しようとしている場合は、独立した`Root DOM Node`を好きなだけ持つことができる』という説明。 __Reactアプリケーションはそれぞれの集合。indexにimportして使うってことと今は理解しておく。__

```
const element = <div id="root">Hello, React!</div>

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

## __レンダリングされた要素の更新__
  
* React elementはイミュータブル。
* UIを更新する唯一の方法は、新しい要素を作成して`ReactDOM.render()`に渡して解決する。
* 具体的には、逐次変化する要素を持った状態を関数に定義して、外から発火させる。
* つまり、`関数setInterval()`のコールバックから`ReactDOM.render()`を毎秒呼び出すと言うらしい。

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

Compnentによって、`UI`を独立した再利用できる部品に分割し、部品それぞれを分離・差し込みアプリケーションを組み合わせて構成することが出来るようになる。

## __Function, simple, CompnentとClass Compnent__

### __Componentの定義__

__Function Component__

データの入った`props`（「Property」の略）オブジェクトを引数として受け渡しをする。

これは文字通りJavaScriptの関数なので`Function Component`と呼ぶ。

__基礎知識__

> 変数にはJSXを入れる。
> ということは`()`で囲って構造的な`html式`を入れることもできるし、開始終了の`簡易なHTMLタグ`を入れることも出来る。JSXは状態を保持することが出来る。

```
なにも表示されないけどね…
const element = <div />
```

Function名をクラスのインスタンスのように扱う。

```
'Welcome' is not definedと言われるけどね…
const element = <Welcome />
```

Reactは、式の中でユーザ定義のConponentを見つけた場合、`JSX`に中の`属性`と`子要素`を単一の`オブジェクト`として、`Welcome Coponent`に渡す。このオブジェクトのことを`props`と呼ぶ。

__Function, simple, Component__

```
// Componentを使うことを宣言する。
import React, { Component } from "react"

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Takahiro" />

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

__Class Component__

`Function Component`を書き換える。

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
````

### 練習

`full_name`で`John Lennon`と出力させる。

```
import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

////////////
// #01 elementで出力する
const element = <h1>John Lennon</h1>

////////////
// #02 変数に代入しJSXに埋め込んで出力する
const full_name = "John Lennon"
const element = <h1>{full_name}</h1>

////////////
// #03 氏名を繋げる関数を仕込み、その関数ごとJSXに埋め込んで出力する
function formatName(ins) {
  return `${ ins.first } ${ ins.last }`
}

const full_name = {
  first: "John",
  last: "Lennon",
}

const element = <h1>{formatName(full_name)}</h1>

////////////
// #04 氏名を繋げる関数を仕込みをFunction, Simple Componentで仕込んで出力する
function FormatName(props) {
  return `${props.name.first} ${props.name.last }`
}

const full_name = {
      first: "John",
      last: "Lennon",
  }
  
const element = <h1><FormatName name={full_name} /></h1>

////////////
// #05 氏名を繋げる関数を仕込みをClass Componentで仕込んで出力する

class FormatName extends React.Component {
  render() {
    return `${this.props.name.first} ${this.props.name.last}`
  }
}

const full_name = {
  first: "John",
  last: "Lennon",
}

// JSXをそのままレンダーする方法もある。
// const element = <h1><FormatName name={full_name} /></h1>

ReactDOM.render(
  <h1><FormatName name={full_name} /></h1>,
  document.getElementById("root")
)
```

### 練習

氏名を格納したオブジェクトと、フルネームでフォーマットする関数を用意して、オブジェクトを呼び出せば『Hello, フルネーム!』、引数がなければ『Hello, Someone!』と返すComponentを作る。

```
import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

function full_name(ins) {
  if (ins) {
    return `${ ins.first } ${ ins.last }`
  } else {
    return "Someone"
  }
}

const name = {
  first: "John",
  last: "Lennon"
} 

const element = <h1>Hello, {full_name(name)}!</h1>

ReactDOM.render(
  element,
  document.getElementById("root")
)

```
### 練習

配列に2つの数字を渡し、任意の計算をするFunctionとClass Componentを作成する。

```
////////////
// #01

function Sum(props) {
  return `${props.nums[0]} + ${props.nums[1]} = ${props.nums[0] + props.nums[1]}`
}

const element = <Sum nums={[100, 10]} />

////////////
// #02
class Sum extends React.Component {
  render() {
    return `${this.props.nums[0]} + ${this.props.nums[1]} = ${this.props.nums[0] + this.props.nums[1]}`
  }
}

const element = <h1><Sum nums={[100, 10]} /></h1> 

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

### __Componentを組み合わせる__

`Component`は自身の出力の中で他の`Component`を参照できます。これにより、どの詳細度のレベルにおいても、`Component`という単一の抽象化を利用できます。ボタン、フォーム、ダイアログ、画面。Reactアプリケーションでは、これらは共通して`Component`として表現される。

クラス＝インスタンスの発生のさせ方がとてもRuby的で心地よい。

__Compornent stateを使う時のimport__

```
// 先ほどまでのComponentに加え、`useReducer`として`state`を使うことを宣言する。

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

### Componentの抽出 ー全然理解できていないー

`Component`をより小さな`Component`に分割することを恐れないでください。

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

これだけのネストがあるため、この`Component`の変更には苦労を伴い、また内部の個々の部品を再利用することも困難です。ここからいくつかの`Component`を抽出しましょう。

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

`Component`が使用されるコンテキストではなく、`Component`自身からの観点で`props`の名前を付けることをお勧めします。

これで`Comment`をほんの少しシンプルにできます。

#03

次に、ユーザ名の隣の`Avatar`をレンダリングするために使われる、`UserInfo Component`を抽出しましょう。

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

`Component`の抽出は最初は面倒な仕事のように思えますが、再利用できる`Component`をパレットとして持っておくことは、アプリケーションが大きくなれば努力に見合った利益を生みます。役に立つ経験則として、UIの一部（Button、Panel、Avatarなど）が複数回使われている場合、またはそのUI自体が複雑（App、FeedStory、Commentなど）である場合、それらは再利用可能な`Component`にする有力な候補であるといえます。

## __Props は読み取り専用__

`Component`を関数またはクラスで宣言するかに関わらず、自身の`props`は変更出来ない。

関数は入力されたものを変更しようとせず、同じ入力に対し同じ結果を返すことを`純粋である`と言われている。

全ての`ReactのComponent`は、自己の`props`に対して純関数のように振る舞わねばならない。


```
import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

function Sum(props) {
  return `${ props.nums[0] } + ${ props.nums[1] } = ${ props.nums[0] + props.nums[1] }`
}

const element = <Sum nums={[100, 10]} />

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

## __state とライフサイクル__

`UI`を更新するための方法をひとつだけ学びました。それはレンダーされた出力を更新するために`ReactDOM.render()`を呼び出すというものでした。

この`Clock Component`を真に再利用可能かつカプセル化されたものにする方法を学びます。`Component`が自分でタイマーをセットアップし、自身を毎秒更新するように変更を加えます。

```
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

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

`Clock Component`の見た目をカプセル化するところから始めます。

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

`Clock Component`がタイマーを設定して`UI`を毎秒ごとに更新するという処理は、`Clock Component`の内部実装の詳細(implementation detail)であるべきだということです。

理想的には以下のコードを一度だけ記述して、`Clock Component`に自身を更新させたいのです。

```
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
```

これを実装するには、`Clock Component`に`state`を追加する必要があります。

`state`は`props`に似ているが、`Component`によって完全に管理されるプライベートなものである。

## __関数をクラスに変換する__

1. `React.Component`を継承する同名のES6クラスを作成する。
1. `render()`と呼ばれる空のメソッドを1つ追加する。
1. 関数の中身を`render()`メソッドに移動する。
1. `render()`内の`props`を`this.props`に書き換える。
1. 空になった関数の宣言部分を削除する。

```
import React, {　Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

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

`renderメソッド`は更新が発生した際に毎回呼ばれますが、同一の`DOMノード内`で`<Clock/>`を描画している限り、`Clock Class`のインスタンスは1つだけ使われます。

このことにより、`ローカルstate`や`ライフサイクルメソッド`といった追加の機能が利用できるようになります。

> Reactのコンポーネントにはライフサイクルがあります。そしてReactの公式ドキュメントによると、React.Componentを拡張したコンポーネントでは、あらかじめ用意されているrender()を始めとしたメソッドをライフサイクル内で使用できると書かれています。効率的なコンポーネントを書くためには、それらのメソッドがライフサイクルのどこで実行されるか理解しておく必要があります。

> ライフサイクルにはまず、大きく分けて3つの期間があります。それぞれ順にMounting、Updating、Unmountingと呼ばれ、コンポーネントの準備期間、表示期間、破棄期間となっています。

## __コンポーネントライフサイクル__

各コンポーネントには、処理の過程の特定の時点でコードを実行するためにオーバーライドできるいくつかの「`ライフサイクルメソッド`」がある。

![ライフサイクルメソッド](./assets/img/react_component_life-cycle.png)


### __マウント__

コンポーネントのインスタンスが作成されて`DOM`に挿入されるときに、これらのメソッドが次の順序で呼び出される。

> constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

## __クラスにローカルな state を追加する__

以下の3ステップで`date`を`props`から`state`に移す。

1. `render()メソッド内`の`this.props.date`を`this.state.date`に書き換える。
1. `this.state`の初期状態を設定するクラスコンストラクタを追加する。
1. `<Clock />`要素から`date`プロパティを削除する。

```
import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

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

### __一連のコードをまとめてみる。__

```
import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

// #01
function clock() {
  const element = <h1>Now: {new Date().toLocaleTimeString()}</h1>

  ReactDOM.render(
    element,
    document.getElementById("root")
  )
}

setInterval(clock, 1000)

// #02
function Clock(props) {
  return `Now: ${props.date.toLocaleTimeString()}`
}

function renderTriger() {
  ReactDOM.render(
    <h1><Clock date={new Date()} /></h1>,
    document.getElementById("root")
  )
}

setInterval(renderTriger, 1000)

// #03
class Clock extends React.Component {
  render() {
    return `Now: ${ this.props.date.toLocaleTimeString() }`
  }
}

function renderTriger() {
  ReactDOM.render(
    <h1><Clock date={new Date()} /></h1>,
    document.getElementById("root")
  )
}

setInterval(renderTriger, 1000)

// "引き金を引いて、関数を呼び出し処理をして、出力すると"という状態を持つ = state

// #04
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  render() {
    return ( 
      <h1>
        Now: {this.state.date.toLocaleTimeString()}
      </h1>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
```

### __クラスにライフサイクルメソッドを追加する__

次に、`Clock`が自分でタイマーを設定し、毎秒ごとに自分を更新するようにします。

多くのコンポーネントを有するアプリケーションでは、コンポーネントが破棄された場合にそのコンポーネントが占有していたリソースを開放することがとても重要です。

タイマーを設定したいのは、最初に`Clock`が`DOM`として描画されるときです。このことをReactでは`マウント（mounting）`と呼びます。

またタイマーをクリアしたいのは、`Clock`が生成した`DOM`が削除されるときです。このことをReactでは`アンマウント（unmounting）`と呼びます。

コンポーネントクラスで特別なメソッドを宣言することで、コンポーネントがマウントしたりアンマウントしたりした際にコードを実行することができます。

`componentDidMount()メソッド`は、出力が`DOM`にレンダーされた後に実行されます。ここがタイマーをセットアップするのによい場所です。

タイマーの後片付けは`componentWillUnmount()`というライフサイクルメソッドで行います

最後に、`Clockコンポーネント`が毎秒ごとに実行する`tick()メソッド`を実装します。

コンポーネントの`ローカルstate`の更新をスケジュールするために`this.setState()`を使用します。

```
import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      // 無名関数でtick()の初期化をしてるってこと。
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)

  }

  tick() {
    // 状態を設定しなおしたよとClocこコンポーネントに宣言する。
    this.setState({ date: new Date()})
  }

  render() {
    return (<h1>{this.state.date.toLocaleTimeString()}</h1>)
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
```

何が起こったのかをメソッドが呼び出される順序にそって振り返ります。

1. `<Clock />`が`ReactDOM.render()`に渡されると、Reactは`Clockコンポーネント`の`コンストラクタ`を呼び出します。`Clock`は現在時刻を表示する必要があるので、現在時刻を含んだオブジェクトで`this.state`を初期化します。あとでこの`state`を更新していきます。
1. 次にReactは`Clockコンポーネント`の`render()メソッド`を呼び出します。これによりReactは画面に何を表示すべきか知ります。そののちに、Reactは`DOM`を`Clock`のレンダー出力と一致するように更新します。
1. `Clock`の出力が`DOM`に挿入されると、Reactは`componentDidMount()ライフサイクルメソッド`を呼び出します。その中で、`Clockコンポーネント`は毎秒ごとにコンポーネントの`tick()メソッド`を呼び出すためにタイマーを設定するようブラウザに要求します。
1. ブラウザは、毎秒ごとに`tick()メソッド`を呼び出します。その中で`Clockコンポーネント`は、現在時刻を含んだオブジェクトを引数として`setState()`を呼び出すことで、`UI`の更新をスケジュールします。`setState()`が呼び出されたおかげで、Reactは`state`が変わったということが分かるので、`render()メソッド`を再度呼び出して、画面上に何を表示すべきかを知ります。今回は、`render()メソッド内`の`this.state.date`が異なっているので、レンダリングされる出力には新しく更新された時間が含まれています。それに従ってReactは`DOM`を更新します。
1. この後に`Clockコンポーネント`が`DOM`から削除されることがあれば、Reactは`componentWillUnmount()ライフサイクルメソッド`を呼び出し、これによりタイマーが停止します。