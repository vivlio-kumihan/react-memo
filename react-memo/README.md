# Reactを使い始める—概要とチュートリアル

私が`JavaScript`を学び始めた頃からReactについては聞いていましたが、正直言って一度見ただけで怖くなりました。HTMLと`JavaScript`が混ざったようなものを見て、これは私たちが避けようとしてきたものではないかと思ったのです。Reactは何のためにあるのだろう？

その代わりに、私はただバニラJavaScriptを学び、プロの環境でjQueryを使って仕事をすることに集中しました。React を使い始めようと何度か挫折して失敗した後、ようやく理解し始め、バニラ JS や jQuery の代わりに React を使いたいと思う理由が見えてきました。

私が学んだことをすべて凝縮して、あなたと共有するための素敵な紹介文にしてみました。

---

## 前提条件

React で遊び始める前に、事前に知っておくべきことがいくつかあります。例えば、`JavaScript`や`DOM`を全く使ったことがない場合は、Reactに取り組む前にそれらにもっと精通しておくべきです。

私が考えるReactの前提条件は以下の通りです。

* HTML と CSS の基本的な知識。
* `JavaScript`とプログラミングの基本的な知識
* DOMの基本的な理解
* ES6の構文と機能に精通していること。
* Node.jsとnpmがグローバルにインストールされていること

---

## Reactとは？

Reactは`JavaScript`のライブラリで、GitHubでは10万以上の星がついており、最も人気のあるライブラリの一つです。Reactはフレームワークではありません（意見が多いAngularとは異なります）。ReactはFacebookによって作られたオープンソースのプロジェクトです。

フロントエンドでのユーザーインターフェース（UI）の構築にReactが使われています。
ReactはMVCアプリケーションのビュー層（モデルビューコントローラ
Reactの最も重要な点の1つは、カスタムで再利用可能なHTML要素のようなコンポーネントを作成して、迅速かつ効率的にユーザーインターフェイスを構築できることです。React はまた、ステートとプロップを使ってデータの保存と処理方法を合理化します。

この記事では、これらすべてとそれ以上のことを説明していきます。

---

## セットアップとインストール

Reactを設定する方法はいくつかありますが、ここでは2つの方法を紹介します。

### 1. 静的な HTML ファイル

この最初の方法は、Reactを設定するための一般的な方法ではなく、チュートリアルの残りの部分を行う方法でもありませんが、jQueryのようなライブラリを使ったことがある人ならば、馴染みがあり理解しやすいでしょうし、WebpackやBabel、Node.jsに慣れていない人にとっては、最も怖くない方法です。

まずは基本的なindex.htmlファイルを作ってみましょう。React、React DOM、Babelの3つのCDNを頭に入れてロードしていきます。また、rootというidを持つdivを作成し、最後にカスタムコードが入るscriptタグを作成します。

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

* React - ReactトップレベルAPI
* React DOM - DOM 固有のメソッドを追加
* Babel - 古いブラウザでES6+を使えるようにするJavaScriptコンパイラ

このアプリのエントリーポイントは、`ルート`div要素になります。また、`text/babel`スクリプトタイプがあることに気づくでしょう。

さて、Reactの最初のコードブロックを書いてみましょう。ES6クラスを使って、AppというReactコンポーネントを作成します。

Reactの最初のコードブロックを書いてみましょう。今回はES6クラスを使って、AppというReactコンポーネントを作成します。

__index.html__

```
class App extends React.Component {
  //...
}
```

これに、クラスコンポーネントで唯一必須のメソッドである`render()`メソッドを追加します。

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

最後に、React DOM`render()`メソッドを使って、作成した`App`クラスを`HTML`のルート`div`にレンダリングします。

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

      ReactDOM.render(<App />, document.getElementById('root'))
    </script>
  </body>
</html>
```

ブラウザで`index.html`を見ると、先ほど作成した`h1`タグが`DOM`にレンダリングされているのがわかります。

どうでしょう、Reactを始めるのはそれほど怖くないことがお分かりいただけたと思います。これは`JavaScript`のヘルパーライブラリをHTMLにロードするだけです。

ここまではデモのために行いましたが、ここからは別の方法を使います。React Appを作成します。

### 2. Reactアプリを作成する

先ほど使った、静的なHTMLページにJavaScriptライブラリを読み込んで、その場でReactやBabelをレンダリングするという方法は、効率が悪く、メンテナンスも大変です。

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

このコマンドを実行すると、ブラウザで新しいReactアプリの新しいウィンドウがlocalhost:3000にポップアップします。

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

もう一度、Appコンポーネントを作成してみましょう。以前は `<h1>`を作成していましたが、今回は`div`要素にクラスを追加します。クラスの代わりに`className`を使用していることにお気づきでしょう。これは、ここで書かれているコードが`JavaScript`であり、実際には`HTML`ではないことを示す最初のヒントです。

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
ReactDOM.render(<App />, document.getElementById('root'))
```

以下が完全な`index.js`です。今回は、Reactのプロパティとして`Component`をロードしているので、`React.Component`を拡張する必要はありません。

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

ReactDOM.render(<App />, document.getElementById('root'))
```

ブラウザに`localhost:3000`とすると、先ほどと同じように表示していることを確認してください。

## React Developer Tools

`React Developer Tools`と呼ばれる拡張機能があり、Reactを使って作業する際に、あなたの生活をとても楽にしてくれます。`React DevTools`を`Chrome`やお好きなブラウザにダウンロードしてください。

インストール後、`DevTools`を開くと、Reactのタブが表示されます。それをクリックすると、コンポーネントが書かれたままの状態で検査することができます。実際の`DOM`出力を見るには、まだ`Elements`タブに行くことができます。今はさほど気にならないかもしれませんが、アプリが複雑になってくると、ますます必要になってくるでしょう。

## JSX: JavaScript + XML

見ての通り、React コードでは`HTML`のように見えるものを使用していますが、実際には`HTML`ではありません。これは`JavaScript XML`の略である`JSX`です。

`JSX`を使うと、`HTML`のように見えるものを書くことができ、独自の`XML`ライクなタグを作成して使うことができます。変数に代入された`JSX`がどのように見えるかというと、以下のようになります。

__JSX__

```
const heading = <h1 className="site-heading">Hello, React</h1>
```

Reactを書く上で`JSX`を使うことは必須ではありません。

タグ、プロパティを含むオブジェクト、コンポーネントの子要素を引数として`createElement`を実行し、上記と同じ情報をレンダリングしています。

__No JSX__

```
const heading = React.createElement('h1', { className: 'site-heading' }, 'Hello, React!')
```

コーディングの可読性、イメージのしやすさでは`JSX`を使わない手はありません。

ただし、`JSX`は実は`HTML`ではなく`JavaScript`に近いので、書くときに注意すべき点がいくつかあります。

* `class`は`JavaScript`では予約キーワードなので、`CSSクラス`を追加する際にはclassの代わりに`className`が使われます。
* `JSX`のプロパティとメソッドは`キャメルケース`です。
  * `onclick` => `onClick`。
* 自閉タグはスラッシュで終わらせなければなりません。
  * `<img />`

`JavaScript`の式は、中括弧を使ってJSXの内部に埋め込むこともできます（変数、関数、プロパティなど）。

```
const name = 'Tania'
const heading = <h1>Hello, {name}</h1>
```

`JSX`は、バニラJavaScriptで多くの要素を作成して追加するよりも書きやすく、理解しやすいので、人々がReactをこれほどまでに愛する理由の一つです。

## Components

ここまでで、`Appコンポーネント`という1つのコンポーネントを作成しました。Reactのほとんどすべてのものはコンポーネントで構成されており、クラスコンポーネントであったり、シンプルなコンポーネントであったりします。

ほとんどのReactアプリは小さなコンポーネントをたくさん持っていて、すべてがメインの`Appコンポーネント`にロードされます。コンポーネントも独自のファイルを取得することが多いので、そのためにプロジェクトを変更してみましょう。

`index.js`から`App`クラスを削除すると、以下のようになります。

__src/index.js__

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
```

`App.js`というファイルを新規作成して、そこにコンポーネントを入れていきます。

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

コンポーネントを`App`としてエクスポートし、`index.js`で読み込んでいます。コンポーネントをファイルに分けることは必須ではありませんが、そうしないとアプリケーションが手に負えなくなってきます。

## Class Components

別のコンポーネントを作成してみましょう。テーブルを作成します。`Table.js`を作成し、以下のようなテーブルを持つデータを作成します。

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

今回作成したコンポーネントは、カスタムクラスのコンポーネントです。通常の`HTML要素`と区別するために、`カスタムコンポーネント`を大文字にしています。

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

これでカスタムクラスコンポーネントが何であるかがわかりました。このコンポーネントを何度も再利用することができます。しかし、データが`Table.js`でハードコーディングされているので、あまり役に立たないかもしれません。

## Simple Components

Reactにおけるもう一つのタイプのコンポーネントは、関数である`Simple Components`です。このコンポーネントは`classキーワード`を使用しません。ここでは、テーブルを取り上げて、`テーブルヘッダー`と`テーブルボディ`という2つのシンプルなコンポーネントを作成してみましょう。

これらのシンプルなコンポーネントを作成するために、ES6の矢印関数を使用します。まず、テーブルのヘッダーです。

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

`TableHeader`と`TableBody`コンポーネントはすべて同じファイル内にあり、`Tableクラスコンポーネント`によって使用されていることに注目してください。

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

`Class Compornent`と同じように表示されるはずです。コンポーネントは他のコンポーネントに入れ子にすることができ、シンプルなコンポーネントとクラスのコンポーネントを混在させることができます。

> クラスコンポーネントには`render()`が含まれていなければならず、`戻り値`は`親要素を1つ`しか返すことができません。

まとめとして、単純なコンポーネントとクラスコンポーネントを比較してみましょう。

__Simple Component__


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

## Props(小道具)

今、私たちはクールな`Table`コンポーネントを持っていますが、データはハードコーディングされています。

Reactの大きな特徴の一つは、データをどのように扱うかということで、`Props`と呼ばれる`プロパティー(または、PARAMSという`と、`state`を使ってデータを扱います。ここでは、`Props`を使ったデータの扱い方に焦点を当ててみましょう。

まず、`TableBody`コンポーネントからすべてのデータを削除してみましょう。

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

ここでは、`プロパティ`を使って子コンポーネント(`Table`)にデータを渡すことにします。`プロパティ`は予約キーワードでない限り、好きなように呼び出すことができます。

このプロパティ(PARAMS、またはオブジェクトを含んだ配列)は中括弧で囲んでおき、`characterData`へ格納します。

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

`React DevTools`を開いて`Tableコンポーネント`を検査すると、プロパティにデータの配列があるのがわかります。ここに格納されているデータは`仮想DOM`と呼ばれるもので、実際の`DOM`と`データ`を同期させるための高速かつ効率的な方法です。

しかし、このデータはまだ実際の`DOM`にはありません。`Table`では、`this.props`を通して全ての`props`にアクセスすることができます。今回は1つの`props`、`characterData`しか通していないので、そのデータを取得するために`this.props.characterData`を使用します。

今回はES6プロパティの短縮型を使って、`this.props.characterData`を含む変数を作成してみます。

```
const { characterData } = this.props
```

`Tableコンポーネント`は実際には2つの小さな単純なコンポーネントで構成されているので、もう一度`props`を使って`TableBody`に渡します。

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

プロップは既存のデータをReactコンポーネントに渡すための効果的な方法ですが、コンポーネントはプロップを変更することができません。次のセクションでは、React でのデータ処理をさらに制御するためにステートを使用する方法を学びます。

## State

今のところ、文字データを変数の配列に格納し、それを`Props`として渡しています。これは良いことですが、配列からアイテムを削除できるようにしたい場合を想像してみてください。`props`では一方通行のデータフローですが、`state`ではコンポーネントのプライベートデータを更新することができます。

ステートとは、必ずしもデータベースに追加されなくても、保存したり変更したりする必要のあるデータのことだと考えることができます。

まず、`stateオブジェクト`を作成します。

__src/App.js__

```
class App extends Component {
  state = {}
}
```

オブジェクトには状態に保存したいものすべてのプロパティが含まれます。プロパティ名を`characters`にします。

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

次に、その関数をコンポーネントに渡し、関数を呼び出すことができる`各character`の横にボタンをレンダリングする必要があります。`removeCharacter関数`を`Table`に`props`として渡します。

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

さらに、このプロジェクトでは独自の状態を持つコンポーネントは`App`と`Form`だけであることが判明したので、`Table`を現在の`Class Component`から`Simple Component`に変換するのが最善の方法でしょう。

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

ここで`removeCharacter()メソッド`で定義したインデックスが登場します。`TableBodyコンポーネント`では、キーとインデックスをパラメータとして渡します。`onClick`を持つボタンを作成し渡します。

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
> `onClick`関数は、`removeCharacter()`メソッドを返す関数を通過させる必要があり、そうでない場合は自動的に実行しようとします。

これで削除ボタンができて、文字を削除することで状態を修正できるようになりました。驚きです。

