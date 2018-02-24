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
