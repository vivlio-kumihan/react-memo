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


