# LP Portfolio

ポートフォリオ掲載用のLP制作プロジェクトです。

## 制作テーマ

女性向けヨガスタジオ体験レッスンLP

## 目的

LINE登録から体験レッスン予約へつなげること。

## ターゲット

25〜45歳の女性。

- ヨガ初心者
- 運動が苦手な人
- 忙しい毎日の中で自分の時間を作りたい人
- 心と体を整えたい人
- 安心感のあるスタジオを探している人

## デザイン方向性

上品で清潔感があり、やさしく安心感のある女性向けデザインにする。

使用したい雰囲気：

- 上品
- 清潔感
- やさしい
- 安心感
- 余白を活かす
- 女性向け
- 初心者でも申し込みやすい

使用したい色：

- 白
- ペールグリーン
- ベージュ
- くすみピンク

## 制作フロー

1. Image2でLPデザイン画像を作成する
2. 作成した画像を `references` フォルダに保存する
3. 画像を参考にして Claude Code CLI で実装する
4. Next.js / TypeScript / Tailwind CSS でLPを作成する
5. Codexでレスポンシブ、余白、動き、コード品質を微調整する
6. 完成後、ポートフォリオ掲載用の説明文を作成する

## 重要ルール

Image2で作成したLP画像を、そのままページ全体に貼り付けることは禁止。

画像はあくまで参考資料として使う。

再現するもの：

- レイアウト
- 余白
- 配色
- タイポグラフィ
- セクション構成
- CTA
- 全体の雰囲気

実装は必ず HTML / CSS / Tailwind CSS の構造として再現する。

## 使用技術

- Next.js
- TypeScript
- Tailwind CSS
- Claude Code CLI
- Codex

## フォルダ構成

```txt
lp-portfolio/
├── README.md
├── AGENTS.md
├── references/
│   └── memo.md
└── notes/
    ├── image2-prompt.md
    ├── claude-code-prompt.md
    ├── codex-prompt.md
    └── portfolio-text.md