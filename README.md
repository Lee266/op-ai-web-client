# op-ai-web-client

## 概要

Next.jsを使用したフロントエンドのプロジェクトです。
[op-ai-web-clientのレポジトリ](https://github.com/Lee266/op-ai-web-client)

## 準備

### Auth0の利用

このプロジェクトではAuth0を使っているため、Auth0のアカウントを作成しフロントエンド側のApplicationを作成してください。  
[Auth0のサイト](https://auth0.com/)

### .env.localファイルの修正

.env.localファイルがない場合は.example.envからコピーしてください。  
.env.localファイル内の{}の値を自分が設定したい値に変更してください。

## 始めるには

### 初めに

始めるには、次のURLからプロジェクトレポジトリからクローンしプロジェクトレポジトリのREADMEに従ってください.  
[プロジェクトリポジトリ](https://github.com/Lee266/op-ai-monorepo)

docker buildを実行下のち、[http://localhost:3000]を開いてください。

## 使用されている主なパッケージ

- Node.js v^20
- Next.js v^14
- React v^18
- TypeScript v^5
- yarn v^4
- nextjs-auth0 v2.3.1
- MUI　v^5
- Storybook v7.6.6

## フォルダ構造

`src` フォルダを使用しており、アトミックデザインとコンテナ・プレゼンテーションデザインの手法が採用されています。

- components
  - atoms
  - molecules
  - organism
    - containers
    - presentations
  - layouts
  - providers
- app
  - api
  - auth: Auth0関係のページ

## その他

### ローカルでテストをするには

Storybookを使用してコンポーネントのテストを行っています。以下のコマンドを実行してください。

```sh
yarn test-storybook
```

コードの静的解析には以下のコマンドを実行してください。

```sh
yarn lint
```

Google Lighthouseを実行するには以下のコマンドを実行してください。

```sh
yarn performance
```

### dockerを使わないで始めるには

```sh
yarn install
yarn dev
```
