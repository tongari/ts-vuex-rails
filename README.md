# rails環境構築

### 参考url
[http://qiita.com/emadurandal/items/e43c4896be1df60caef0](http://qiita.com/emadurandal/items/e43c4896be1df60caef0)


- 事前準備
```bash
$ rbenv local 2.4.0
$ ndenv local v8.4.0
$ rbenv exec gem install bundler
```

- プロジェクトのフォルダのみにGemをインストールする

```bash
$ echo "source 'http://rubygems.org'" >> Gemfile
$ echo "gem 'rails'" >> Gemfile
$ bundle install --path vendor/bundle
```
`※ nokogiriが結構インストールするのに時間かかる`


- railsプロジェクトを作成（turbolinksは最初から無効）
```bash
$ rails new ./ -d mysql --skip-bundle --skip-turbolinks
$ bundle install --path vendor/bundle
$ rake db:create
```
`※ 事前にエイリアスで「bundle exec rails　-> rails」と「bundle exec rake　-> rake」は張り替えている`


### 開発環境用において、dotenvを使用して環境変数化を行う（※.envをgithubにあがらないように.gitignoreに必ず記載する！！！）

- dotenvをインストール

`Gemfile`
```ruby
group :development do
省略
  gem 'dotenv-rails'
end
```

```
$ bundle install --path vendor/bundle
$ touch .env
```
- dotenvにIDとAppSecretを記述（開発環境用）

`.env`
```
DEV_DB_USERNAME={ローカルのDBのユーザネーム}
DEV_DB_PASSWORD={ローカルのDBのパスワード}
```

`database.yml`
```yaml
  username: <%= ENV['DEV_DB_USERNAME'] %>
  password: <%= ENV['DEV_DB_PASSWORD'] %>
```

- gitの管理対象から以下を外す
```bash
$ echo '/vendor/bundle' >> .gitignore
$ echo '.env' >> .gitignore
$ echo '.idea/' >> .gitignore
```

# controller作成

```
$ rails g controller {name(s)} {method}
```

# model作成

```
$ rails g model {name}
```

# migrationファイルにカラム定義

```
migrationfile

create_table :{modelname} do |t|
  t.欲しいカラムのデータ型 :カラムの名前
  t.欲しいカラムのデータ型 :カラムの名前

  t.timestamps null: false
end
```

# webpackerの導入

- `Gemfile`
gem 'webpacker', github: 'rails/webpacker'

```bash
$ bundle install --path vendor/bundle
$ bundle exec bin/rails webpacker:install
```
- vueをインストールする
```
$ bin/rails webpacker:install:vue
```

- TypeScript+Pugを導入
```bash
$ yarn add typescript ts-loader pug pug-loader --dev
```

- jsからtsに変換

- `.vue` ファイルの中の記述を変更する

```vue
<template lang="pug">
...

<script lang="ts">
...

<style lang='sass' scoped>
```

- tsconfig.jsonを作成
```
{
    "compilerOptions": {
        "allowSyntheticDefaultImports": true,
        "declaration": false,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "lib": [
            "es6",
            "dom"
        ],
        "module": "es6",
        "moduleResolution": "node",
        "sourceMap": true,
        "target": "es5"
    },
    "exclude": [
        "**/*.spec.ts",
        "node_modules",
        "vendor",
        "public"
    ],
    "compileOnSave": false
}
```
- もろもろ　npm modulesをいれる
```bash
$ yarn add awesome-typescript-loader --dev
$ yarn add vuex --dev
$ yarn add vue-class-component --dev
$ yarn add vuex-class --dev
$ yarn add webpack-build-notifier --dev
$ yarn add node-sass --dev
$ yarn add css-loader --dev
$ yarn add sass-loader --dev
```

- vue + typescriptの設定

```bash
$ mkdir types
$ touch ./types/index.d.ts
```

`index.d.ts`
```
declare module "*.vue" {
  import Vue from 'vue'
  export default typeof Vue
}
```
