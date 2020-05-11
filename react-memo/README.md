# Reactを使い始める—概要とチュートリアル

私が`JavaScript`を学び始めた頃からReactについては聞いていましたが、正直言って一度見ただけで怖くなりました。HTMLと`JavaScript`が混ざったようなものを見て、これは私たちが避けようとしてきたものではないかと思ったのです。Reactは何のためにあるのだろう？

その代わりに、私はただバニラJavaScriptを学び、プロの環境でjQueryを使って仕事をすることに集中しました。React を使い始めようと何度か挫折して失敗した後、ようやく理解し始め、バニラ JS や jQuery の代わりに React を使いたいと思う理由が見えてきました。

私が学んだことをすべて凝縮して、あなたと共有するための素敵な紹介文にしてみました。

---

## __前提条件__

React で遊び始める前に、事前に知っておくべきことがいくつかあります。例えば、`JavaScript`や`DOM`を全く使ったことがない場合は、Reactに取り組む前にそれらにもっと精通しておくべきです。

私が考えるReactの前提条件は以下の通りです。

* HTML と CSS の基本的な知識。
* `JavaScript`とプログラミングの基本的な知識
* DOMの基本的な理解
* ES6の構文と機能に精通していること。
* Node.jsとnpmがグローバルにインストールされていること

---

## __Reactとは？__

Reactは`JavaScript`のライブラリで、GitHubでは10万以上の星がついており、最も人気のあるライブラリの一つです。Reactはフレームワークではありません（意見が多いAngularとは異なります）。ReactはFacebookによって作られたオープンソースのプロジェクトです。

フロントエンドでのユーザーインターフェース（UI）の構築にReactが使われています。
ReactはMVCアプリケーションのビュー層として機能し、最も重要な点の一つは、カスタムで再利用可能なHTML要素のような`Component`を作成して、迅速かつ効率的にユーザーインターフェイスを構築できることです。Reactはまた、`state`と`props`を使ってデータの保存と処理方法を合理化します。

この記事では、これらすべてとそれ以上のことを説明していきます。

---

## __セットアップとインストール__

Reactを設定する方法はいくつかありますが、ここでは2つの方法を紹介します。

### 1. 静的な HTML ファイル

この最初の方法は、Reactを設定するための一般的な方法ではなく、チュートリアルの残りの部分を行う方法でもありませんが、jQueryのようなライブラリを使ったことがある人ならば、馴染みがあり理解しやすいでしょうし、`Webpack`や`Babel`、`Node.js`に慣れていない人にとっては、最も怖くない方法です。

まずは基本的なindex.htmlファイルを作ってみましょう。`React`、`React DOM`、`Babel`の3つの`CDN`を頭に入れてロードしていきます。また、`root`という`id`を持つ`div`を作成し、最後にカスタムコードが入る`scriptタグ`を作成します。

__index.html__

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello React!
    <script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script>
    <script src="_COPY14@6.26.0/babel.js"></script>。
  </head>

  <body>
    <div id="root"></div>。
    <script type="text/babel">
      // Reactのコードはここに移動します。
    </script> </script
  </body> </body
</html>
```

この記事を書いている時点で、最新の安定版のライブラリをロードしています。

* __React__ - ReactトップレベルAPI
* __React DOM__ - DOM 固有のメソッドを追加
* __Babel__ - 古いブラウザでES6+を使えるようにするJavaScriptコンパイラ

このアプリのエントリーポイントは、`ルート`div要素になります。また、`text/babel`スクリプトタイプがあることに気づくでしょう。

さて、Reactの最初のコードブロックを書いてみましょう。ES6クラスを使って、Appという`React Component`を作成します。

Reactの最初のコードブロックを書いてみましょう。今回はES6クラスを使って、Appという`React Component`を作成します。

__index.html__

```
class App extends React.Component {
  //...
}
```

これに、`Class Component`で唯一必須のメソッドである`render()メソッド`を追加します。

__index.html__

```
class App extends React.Component {
  render() {
      return (
          //...
      );
  }
}
```

returnの中に、シンプルなHTML要素のように見えるものを入れます。ここでは文字列を返していないので、要素の周りに引用符を使わないことに注意してください。これは`JSX`と呼ばれています。

__index.html__

```
class App extends React.Component {
  render() {
    return <h1>Hello world!</h1>
  }
}
```

最後に、`React DOMrender()メソッド`を使って、作成した`App`クラスを`HTML`の`root div`にレンダリングします。

__index.html__

```
ReactDOM.render(<App />, document.getElementById('root'))
```

以下にすべてのコードをあらわします。

__index.html__

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      class App extends React.Component {
        render() {
          return <h1>Hello world!</h1>
        }
      }

      ReactDOM.render(
        <App />, 
        document.getElementById('root')
        )
    </script>
  </body>
</html>
```

ブラウザで`index.html`を見ると、先ほど作成した`h1`タグが`DOM`にレンダリングされているのがわかります。

どうでしょう、Reactを始めるのはそれほど怖くないことがお分かりいただけたと思います。これは`JavaScript`のヘルパーライブラリをHTMLにロードするだけです。

ここまではデモのために行いましたが、ここからは別の方法を使います。React Appを作成します。

### 2. Reactアプリを作成する

先ほど使った、静的なHTMLページにJavaScriptライブラリを読み込んで、その場でReactや`Babel`をレンダリングするという方法は、効率が悪く、メンテナンスも大変です。

幸いなことに、Facebookは[Create React App](https://github.com/facebook/create-react-app)という、Reactアプリを構築するために必要なものがすべて設定済みで付属している環境を作ってくれました。ライブ開発サーバーを作成し、Webpackを使ってReact、JSX、ES6を自動コンパイルし、CSSファイルを自動プレフィックスし、ESLintを使ってコードの間違いをテストして警告してくれます。

`create-react-app`を設定するには、ターミナルで以下のコードを実行します。

```
$ npx create-react-app react-tutorial
```

インストールが完了したら、新しく作成したディレクトリに移動してプロジェクトを開始します。

```
$ cd react-tutorial
$ npm start
```

このコマンドを実行すると、ブラウザで新しいReactアプリの新しいウィンドウが`localhost:3000`にポップアップします。

> Create React Appは、初心者はもちろん、大規模なエンタープライズアプリケーションを始めるのにも非常に適していますが、すべてのワークフローに完璧に対応できるわけではありません。React用のWebpackのセットアップを自作することもできます。

プロジェクトの構造を見ると、`/public`と`/src`ディレクトリがあり、それに加えて通常の`node_modules`、`.gitignore`、`README.md`、`package.json`が含まれていることがわかります。

これは先ほど作った静的な`index.html`ファイルと非常によく似ています。今回は、ライブラリやスクリプトは読み込まれません。`src`ディレクトリにはすべてのReactコードが格納されます。

環境がどのようにReactコードを自動的にコンパイルして更新するかを確認するには、`/src/App.js`の中で以下のような行を検索してください。

```
To get started, edit `src/App.js` and save to reload.
```

そして、それを他のテキストに置き換えてください。ファイルを保存すると、`localhost:3000`がコンパイルされ、新しいデータで更新されることに気づくでしょう。

確認できたら次に進みます。

`/src`ディレクトリからすべてのファイルを削除して、肥大化しない独自のボイラープレートファイルを作成します。`index.css`と`index.js`だけを残しておきます。

`index.css`については、[Primitive CSS](https://taniarascia.github.io/primitive/css/main.css)の内容をコピー＆ペーストしてファイルに入れています。必要であれば、Bootstrapや好きなCSSフレームワークを使ってもいいし、何も使わなくてもいい。私はその方が作業しやすいと思っています。

さて、`index.js`では、`React`、`ReactDOM`、`CSSファイル`をインポートしています。

__src/index.js__

```
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
```

もう一度、`App Component`を作成してみましょう。以前は `<h1>`を作成していましたが、今回は`div要素`にクラスを追加します。クラスの代わりに`className`を使用していることにお気づきでしょう。これは、ここで書かれているコードが`JavaScript`であり、実際には`HTML`ではないことを示す最初のヒントです。

__src/index.js__

```
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
```

最後に、先ほどと同じように`App`をルートにレンダリングします。

__src/index.js__

```
ReactDOM.render(
  <App />,
   document.getElementById('root')
)
```

以下が完全な`index.js`です。今回は、Reactの`property`として`Component`をロードしているので、`React.Component`を拡張する必要はありません。

__src/index.js__

```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

ブラウザに`localhost:3000`とすると、先ほどと同じように表示していることを確認してください。

## __React Developer Tools__

`React Developer Tools`と呼ばれる拡張機能があり、Reactを使って作業する際に、あなたの生活をとても楽にしてくれます。`React DevTools`を`Chrome`やお好きなブラウザにダウンロードしてください。

インストール後、`DevTools`を開くと、Reactのタブが表示されます。それをクリックすると、`Component`が書かれたままの状態で検査することができます。実際の`DOM`出力を見るには、まだ`Elements`タブに行くことができます。今はさほど気にならないかもしれませんが、アプリが複雑になってくると、ますます必要になってくるでしょう。

## __JSX: JavaScript + XML__

見ての通り、React コードでは`HTML`のように見えるものを使用していますが、実際には`HTML`ではありません。これは`JavaScript XML`の略である`JSX`です。

`JSX`を使うと、`HTML`のように見えるものを書くことができ、独自の`XML`ライクなタグを作成して使うことができます。変数に代入された`JSX`がどのように見えるかというと、以下のようになります。

__JSX__

```
const heading = <h1 className="site-heading">Hello, React</h1>
```

Reactを書く上で`JSX`を使うことは必須ではありません。

タグ、`property`を含むオブジェクト、`Component`の子要素を引数として`createElement`を実行し、上記と同じ情報をレンダリングしています。

__No JSX__

```
const heading = React.createElement('h1', { className: 'site-heading' }, 'Hello, React!')
```

コーディングの可読性、イメージのしやすさでは`JSX`を使わない手はありません。

ただし、`JSX`は実は`HTML`ではなく`JavaScript`に近いので、書くときに注意すべき点がいくつかあります。

* `class`は`JavaScript`では予約キーワードなので、`CSSクラス`を追加する際にはclassの代わりに`className`が使われます。
* `JSX`の`property`とメソッドは`キャメルケース`です。
  * `onclick` => `onClick`。
* 自閉タグはスラッシュで終わらせなければなりません。
  * `<img />`

`JavaScript`の式は、中括弧を使ってJSXの内部に埋め込むこともできます（変数、関数、`property`など）。

```
const name = 'Tania'
const heading = <h1>Hello, {name}</h1>
```

`JSX`は、バニラJavaScriptで多くの要素を作成して追加するよりも書きやすく、理解しやすいので、人々がReactをこれほどまでに愛する理由の一つです。

## __Component__

ここまでで、`App Component`という1つの`Component`を作成しました。Reactのほとんどすべてのものは`Component`で構成されており、`Class Component`であったり、シンプルな`Component`であったりします。

ほとんどのReactアプリは小さな`Component`をたくさん持っていて、すべてがメインの`App Component`にロードされます。`Component`も独自のファイルを取得することが多いので、そのためにプロジェクトを変更してみましょう。

`index.js`から`App`クラスを削除すると、以下のようになります。

__src/index.js__

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
```

`App.js`というファイルを新規作成して、そこに`Component`を入れていきます。

__src/App.js__

```
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

export default App
```

`Component`を`App`としてエクスポートし、`index.js`で読み込んでいます。`Component`をファイルに分けることは必須ではありませんが、そうしないとアプリケーションが手に負えなくなってきます。

## __Class Component__

別の`Component`を作成してみましょう。テーブルを作成します。`Table.js`を作成し、以下のようなテーブルを持つデータを作成します。

__src/Table.js__

```
import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
```

今回作成した`Component`は、カスタムクラスの`Component`です。通常の`HTML要素`と区別するために、`カスタム Component`を大文字にしています。

`App.js`に戻って、まずテーブルをインポートしてロードし、`App`の`render()`で読み込みます。

__src/App.js__

```
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}

export default App
```

ブラウザでリロードするとテーブルが確認できます。

これでカスタム`Class Component`が何であるかがわかりました。この`Component`を何度も再利用することができます。しかし、データが`Table.js`でハードコーディングされているのでアプリケーショととしては汎用性がない。

## __Function, Simple Component__

Reactにおけるもう一つのタイプの`Component`は、関数である`Function, Simple Component`です。この`Component`は`classキーワード`を使用しません。ここでは、テーブルを取り上げて、`テーブルヘッダー`と`テーブルボディ`という2つのシンプルな`Component`を作成してみましょう。

これらのシンプルな`Component`を作成するために、ES6の矢印関数を使用します。まず、テーブルのヘッダーです。

__src/Table.js__

```
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}
```

そして、テーブルボディです。

__src/Table.js__

```
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  )
}
```

`TableHeader`と`TableBody Component`はすべて同じファイル内にあり、`Table Class Component`によって使用されていることに注目してください。

__src/Table.js__

```
const TableHeader = () => { ... }
const TableBody = () => { ... }

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}
```

`Class Compornent`と同じように表示されるはずです。`Component`は他の`Component`を入れ子にすることができ、`Function, Simple Component`とクラスの`Component`を混在させることができます。

> `Class Component`には`render()`が含まれていなければならず、`戻り値`は`親要素を1つ`しか返すことができません。

`Function, Simple Component`と`Class Component`の書式の違いを比較します。

__Function, Simple Component__


```
const SimpleComponent = () => {
  return <div>Example</div>
}
```

__Class Component__

```
class ClassComponent extends Component {
  render() {
    return <div>Example</div>
  }
}
```

> 戻り値が1行に含まれている場合は、括弧は不要であることに注意してください。

## __Props(小道具)__

今、私たちはクールな`Table Component`を持っていますが、データはハードコーディングされています。

Reactの大きな特徴の一つは、データをどのように扱うかということで、`Props`と呼ばれる`property`(または、PARAMSという)と、`state`を使ってデータを扱います。ここでは、`Props`を使ったデータの扱い方に焦点を当ててみましょう。

まず、`TableBody Component`からすべてのデータを削除してみましょう。

__src/Table.js__

```
const TableBody = () => {
  return <tbody />
}
```

`JSONベース`の`API`を使用するかのように、すべてのデータをオブジェクトの配列に移動させてみましょう。`render()`の中でこの配列を作成していきます。

__src/App.js__

```
class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}
```

ここでは、``property``を使って子`Component`(`Table`)にデータを渡すことにします。``property``は予約キーワードでない限り、好きなように呼び出すことができます。

この`property`(PARAMS、またはオブジェクトを含んだ配列)は中括弧で囲んでおき、`characterData`へ格納します。

__src/App.js__

```
return (
  <div className="container">
    <Table characterData={characters} />
  </div>
)
```

データが`Table`に渡されたので、反対側からアクセスする作業をしなければなりません。

__src/Table.js__

```
class Table extends Component {
  render() {
    const { characterData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}
```

`React DevTools`を開いて`TableConponent`を検査すると、`property`にデータの配列があるのがわかります。ここに格納されているデータは`仮想DOM`と呼ばれるもので、実際の`DOM`と`データ`を同期させるための高速かつ効率的な方法です。

しかし、このデータはまだ実際の`DOM`にはありません。`Table`では、`this.props`を通して全ての`props`にアクセスすることができます。今回は1つの`props`、`characterData`しか通していないので、そのデータを取得するために`this.props.characterData`を使用します。

今回はES6`property`の短縮型を使って、`this.props.characterData`を含む変数を作成してみます。

```
const { characterData } = this.props
```

`TableConponent``は実際には2つの小さな単純な`Component`で構成されているので、もう一度`props`を使って`TableBody`に渡します。

__src/Table.js__

```
class Table extends Component {
  render() {
    const { characterData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}
```

今のところ、`TableBody`はパラメータを取らず、1つのタグを返します。

__src/Table.js__

```
const TableBody = () => {
  return <tbody />
}
```

`パラメータ`として`props`を渡し、[配列をマップして](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)配列内の各オブジェクトのテーブル行を返します。このマップは`rows`変数に格納され、式として返されます。

__src/Table.js__

```
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}
```

ブラウザで確認すると、すべてのデータが読み込まれています。

各テーブルの行にキーインデックスを追加したことに気づくでしょう。Reactでリストを作成する際には、常に[keys](https://reactjs.org/docs/lists-and-keys.html#keys)を使用する必要があります。リスト項目を操作したいときに、これがどのように必要なのかを見てみましょう。

プロップは既存のデータを`React Component`に渡すための効果的な方法ですが、`Component`はプロップを変更することができません。次のセクションでは、React でのデータ処理をさらに制御するためにstateを使用する方法を学びます。

## __State__

今のところ、文字データを変数の配列に格納し、それを`Props`として渡しています。これは良いことですが、配列からアイテムを削除できるようにしたい場合を想像してみてください。`props`では一方通行のデータフローですが、`state`では`Component`のプライベートデータを更新することができます。

stateとは、必ずしもデータベースに追加されなくても、保存したり変更したりする必要のあるデータのことだと考えることができます。

まず、`stateオブジェクト`を作成します。

__src/App.js__

```
class App extends Component {
  state = {}
}
```

オブジェクトには状態に保存したいものすべての`property`が含まれます。`property`名を`characters`にします。

__src/App.js__

```
class App extends Component {
  state = {
    characters: [],
  }
}
```

先ほど作成したオブジェクトの配列全体を`state.characters`に移動します。

__src/App.js__

```
class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
}
```

データは、`state`に含まれています。テーブルから`characters`の要素を削除できるようにしたいので、`親Appクラス`に`removeCharacterメソッド`を作成します。

`state`を取得するには、先ほどと同じES6メソッドを使用して`this.state.characters`を取得します。状態を更新するには、状態を操作するための組み込みメソッドである`this.setState()`を使用します。ここでは、読み込んだインデックスに基づいて[配列をフィルタリング](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)し、新しい配列を返します。

> 配列を変更するには`this.setState()`を使用しなければなりません。単に新しい値を`this.state.property`に適用するだけでは動作しません。

__src/App.js__

```
removeCharacter = index => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}
```

`filter`は、新しい配列を作成し、JavaScriptで配列を変更する際に好まれるメソッドです。この`particularメソッド`は、あるインデックスと配列内のすべてのインデックスをテストし、渡されたインデックス以外のすべてを返します。

次に、その関数を`Component`に渡し、関数を呼び出すことができる`各character`の横にボタンをレンダリングする必要があります。`removeCharacter関数`を`Table`に`props`として渡します。

__src/App.js__

```
render() {
  const { characters } = this.state

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
  )
}
```

`Table`から`TableBody`に渡しているので、`characterData`の時と同じように、再び`props`として渡す必要があります。

さらに、このプロジェクトでは独自の状態を持つ`Component`は`App`と`Form`だけであることが判明したので、`Table`を現在の`Class Component`から`Function, Simple Component`に変換するのが最善の方法でしょう。

__src/Table.js__

```
const Table = props => {
  const { characterData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}
```

ここで`removeCharacter()メソッド`で定義したインデックスが登場します。`TableBody Component`では、キーとインデックスをパラメータとして渡します。`onClick`を持つボタンを作成し渡します。

__src/Table.js__

```
<tr key={index}>
  <td>{row.name}</td>
  <td>{row.job}</td>
  <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
</tr>
```
> `onClick`関数は、`removeCharacter()メソッド`を返す関数を通過させる必要があり、そうでない場合は自動的に実行しようとします。

これで削除ボタンができて、文字を削除することで状態を修正できるようになりました。驚きです。


## __フォームデータの送信__

これで、stateにデータが格納されているので、stateから任意の項目を削除することができるようになりました。しかし、stateに新しいデータを追加できるようにしたいとしたらどうでしょうか？実際のアプリケーションでは、空の状態から始めて、to-doリストやショッピングカートのように追加することが多いでしょう。

何かをする前に、state.charactersからハードコードされたデータをすべて削除しておきましょう。

__src/App.js__

```
class App extends Component {
  state = {
    characters: [],
  }
}
```

それでは、Form.js という新しいファイルに Form `Component`を作成してみましょう。

フォームの初期状態を空の`property`を持つオブジェクトに設定し、その初期状態を`this.state`に代入します。

import React, { Compornent } from 'react'

__src/Form.js__

```
class Form extends Compornent {
  initalState = {
    name: '',
    job: '',
  }
  state = this.initalState
}
```

> 以前はReactクラスの`Component`にconstructor()を含める必要がありましたが、今は不要になりました。

このフォームの目標は、フォーム内のフィールドが変更されるたびにフォームの状態を更新し、送信時にはすべてのデータが`App`の状態に渡され、テーブルが更新されることです。

まず、入力に変更が加えられるたびに実行される関数を作ります。イベントを通し、入力の名前(キー)と値を持つように`Form`の状態を設定します。

__src/Form.js__

```
handleChange = event => {
  const { name, value } = event.target

  this.setState({
    [name]: value,
  })
}
```

フォームを送信する前にこの作業を行いましょう。レンダリングでは、stateから2つの`property`を取得し、適切なフォームのkeyに対応する値として割り当てましょう。入力の`onChange`として`handleChange()メソッド`を実行し、最後に`Form Component`をエクスポートします。

__src/Form.js__

```
render() {
  const { name, job } = this.state;

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={this.handleChange} />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={this.handleChange} />
    </form>
  );
}

export default Form;
```

`App.js`では、表の下のフォームをレンダリングします。

__src/App.js__

```
return (
  <div className="container">
    <Table characterData={characters} removeCharacter={this.removeCharacter} />
    <Form />
  </div>
)
```

アプリのフロントエンドに行くと、まだ送信がないフォームが表示されます。いくつかのフィールドを更新すると、フォームのローカル状態が更新されているのがわかります。

最後のステップは、実際にデータを送信して親の状態を更新できるようにすることです。`App`上に`handleSubmit()`という関数を作成して、既存の`this.state.characters`を取得し、ES6のスプレッド演算子を使用して新しい文字パラメータを追加することで状態を更新します。

__src/App.js__

```
handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] })
}
```

これを`Form`のパラメータとして渡しましょう。

```
<Form handleSubmit={this.handleSubmit} />
```

フォームの中に `submitForm()` というメソッドを作成して、この関数を呼び出し、先ほど定義した`characterパラメータ`としてフォームの状態を渡します。また、フォームの状態を初期状態にリセットし、送信後にフォームをクリアします。

__src/Form.js__e

```
submitForm = () => {
  this.props.handleSubmit(this.state)
  this.setState(this.initialState)
}
```

最後に、フォームを送信するための送信ボタンを追加します。標準の送信機能を使用していないので、`onSubmit`の代わりに `onClick`を使用しています。クリックすると先ほど作成した `submitForm`が呼び出されます。

```
<input type="button" value="Submit" onClick={this.submitForm} />
```

そして、これで完成! アプリの完成です。テーブルからユーザーを作成したり、追加したり、削除したりできるようになりました。すでに状態から`Table`と`TableBody`を引っ張ってきていたので、ちゃんと表示されます。

## __APIデータの取り込み__

Reactの非常に一般的な使い方の1つは、APIからデータを取得することです。APIとは何か、あるいはAPIへの接続方法をよく知らない場合は、[How to Connect to an API with JavaScript](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/) を読むことをお勧めします。

ちょっとしたテストとして、新しい`Api.js`ファイルを作成し、そこに新しいアプリを作成します。テストできる公開APIは[Wikipedia API](https://en.wikipedia.org/w/api.php)で、ここに[URLのエンドポイント](https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*)があります。このリンクにアクセスしてAPIを見ることができます-ブラウザに[JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)がインストールされていることを確認してください。

このURLエンドポイントからデータを収集して表示するために、[JavaScriptの組み込みFetch](https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/)を使用します。`index.js`-`import App from './Api';`でURLを変更するだけで、先ほど作成したアプリとこのテストファイルを切り替えることができます。

このコードについては、`Component`の作成、レンダリング、ステート配列を介したマッピングについては既に学習しているので、一行一行説明するつもりはありません。このコードの新たな側面は、Reactのライフサイクルメソッドである`componentDidMount()`です。ライフサイクルとは、Reactでメソッドが呼び出される順番のことです。マウントとは、アイテムがDOMに挿入されることを指します。

APIデータを取り込む際には、データを取り込む前に`Component`がDOMにレンダリングされたことを確認したいので、`componentDidMount`を使用したいと思います。以下のスニペットでは、Wikipedia APIからデータを取り込み、ページに表示する方法を見てみましょう。

__Api.js__

```
import React, { Component } from 'react'

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App
```

このファイルをローカルサーバーで保存して実行すると、`Wikipedia API`のデータがDOMに表示されます。

# 練習

## 00

変数`full_name`に`"John Lennon"`を代入して出力させなさい。

```
class Main extends Component {
  render() {
    const full_name = "John Lennon"
    return (
      <h1>{full_name}</h1>
    )
  }
}
```

## 01

オブジェクト`full_name`に氏と名前を設定し、関数`FormatName`を通して氏名を生成して出力させなさい。

```
// 関数パターン
// ローカル変数を読んで展開するパターン
// ClassComponent, FunctionCopmonentを使う意味があまりない。

class Main extends Component {
  render() {
    return (
      <FullName />
      )
    }
  }
  
const name = {
  first: "John",
  last: "Lennon"
}
const FullName = () => {
  return <h1>{name.first} {name.last}</h1>
}
```

```
// Class + Function Componentパターン

// FunctionComponentをClassComponentに挿して使うのであればこの方法。
// 肝は、render()内で変数を設定していること。
// 他所のComponentからpropsを持ってこれるから！
class Main extends Component {
  render() {
    const name = {
      first: "John",
      last: "Lennon"
    }
    return (
      <FullName name={name} />
    )
  }
}

const FullName = (props) => {
  return <h1>{props.name.first} {props.name.last}</h1>
}

```

## 02

TableComponentを作成し適宜データを載せる。MainComponentに差し込んむ。そして、indexComponentから出力する。

```
// Main.js

class Main extends Component {
  render() {
    return (
      <div id="container">
        <h1>profile list</h1>
        <Table />
      </div>
    )
  }
}
```

```
// Table.js

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>信之</td>
            <td>55</td>
          </tr>
          <tr>
            <td>和恵</td>
            <td>48</td>
          </tr>
          <tr>
            <td>茉李</td>
            <td>23</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
```

## 03

テーブルの値をオブジェクトとして分離しmapして供給するような仕様に変更させなさい。オブジェクトデータはMainComponentへ移動すること。

propsの渡し方がポイント。

`props`で指定した変数名が`TableComponent`へ渡すので、その名称`『profile』`とこちらの`MainComponent`で生成したオブジェクト名の設定を変えても、コードは動くがメンテナンスのことを考慮して、`props`でhandlingする __変数名は統一とする__ 。

```
// main.js

import React, {Component} from "react"
import Table from "./Table"

class Main extends Component {
  render() {
    const profile = [
      {
        name: "Nobuyuki",
        age: 55
      },
      {
        name: "Kazue",
        age: 48
      },
      {
        name: "Mari",
        age: 23
      },
    ]
    return (
      <Table profile={profile} />
    )
  }
}

export default Main
```

```
// Table.js

// Componentは、他所のComponentで継ぎ足された(渡された)propsを感知する。
// ここでは、MainComponentからの『profile』をTableComponentで使えるpropへと変換して渡す。
class Table extends Component {
  render() {
    // handlingするpropsを変数に格納する場合、
    // ES6 propertyの略記法に従い{}で包む。
    // そして、それをJSXで展開する。
    // なお、Mainで指定したprops名『profile』が大事。
    // ここが肝
    const {profile} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody profile={profile}/>
      </table>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
    </thead>
  )
}

// 配列やオブジェクトを展開してレンダリングする方法。
// 引数がpropsの無名関数を格納する。
// <tr>タグのkey={index}は付けなくても問題ない。
const TableBody = (props) => {
  const rows = props.profile.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.age}</td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}
```

## 04

```
// Main.js

import React, {Component} from "react"
import Table from "./Table"

class Main extends Component {
  // 状態（state）にprops（property）を付けて生成する。
  state = {
    profile: 
      [
        {
          name: "Nobuyuki",
          age: 55
        },
        {
          name: "Kazue",
          age: 48
        },
        {
          name: "Mari",
          age: 23
        },
      ]
  }

  // メソッド定義　propertyを削除用
  // classの中でメソッド定義は、constを付けなくてもいいよう。
  // Ruby的でいい。
  // 『index』はキーワードではない。ハンドリングを考慮し、
  // TableComponentで付与し、
  // MainComponentへ送り出した変数名に従っているだけ。
  removePerson = (index) => {
    // stateはプライベートみたいだ。
    // 必要なその場その場でインスタンス化（props化）している。
    const {profile} = this.state.profile
    // propertyを削除する理屈が解ってない。なんでDeleteできるの？
    this.setState ({
      profile: profile.filter((p, i) => {
        return i !== index
      })
    })
  }

  render() {
    const {profile} = this.state
    return (
      <Table profile={profile} removePerson={this.removePerson}/>
    )
  }
}

export default Main
```

```
// Table.js

import React, {Component} from "react"

const Table = (props) => {
  const {profile, removePerson} = props
  return (
    <table>
      <TableHeader />
      <TableBody  profile={profile}
                  removePerson={removePerson} />
    </table>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Delete</th>
      </tr>
    </thead>
  )
}

// buttonタグの箇所、propsを代入している。
// ここで無名関数を展開できる！　素敵だ。
const TableBody = (props) => {
  const rows = props.profile.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>
          <button onClick={() => props.removePerson(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

export default Table
```
