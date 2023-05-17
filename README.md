# Next.js simple job board template 

シンプルな求人サイトです。

<img width="1353" alt="スクリーンショット 0005-04-30 15 25 49" src="https://user-images.githubusercontent.com/39504660/235339079-6b6e4d21-b8f4-40c0-a6df-20875a4956ab.png">

# 環境変数の設定
ルート直下に`.env`ファイルを作成し、下記の情報を入力してください。
```bash
MICROCMS_API_KEY=xxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=xxxxxxxxxx
BASE_URL=xxxxxxxxxx
```

`MICROCMS_API_KEY`

microCMS 管理画面の「サービス設定 > API キー」から確認することができます。

`MICROCMS_SERVICE_DOMAIN`
microCMS 管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分です。

`BASE_URL` デプロイ先の URL です。プロトコルから記載してください。 （https://hoge.vercel.app/ など）

# 開発の仕方
1.パッケージのインストール

```bash
npm install
```
2.開発環境の起動
```
npm run dev
```
3.開発環境へのアクセス
http://localhost:3000 にアクセス

# Vercel へのデプロイ
[Vercel Platform](https://vercel.com/)から簡単にデプロイが可能です。

リポジトリを紐付け、環境変数を Environment Variables に登録しましょう。
