window.quizData = window.quizData || {};

window.quizData.development = [

{
q:"DVA-C02で主に問われる内容は？",
c:["AWS上での開発・デプロイ・監視","経理処理","物理サーバ配線","営業戦略"],
a:"AWS上での開発・デプロイ・監視"
},

{
q:"サーバレスでコードを実行するAWSサービスは？",
c:["Lambda","EC2","EBS","Route53"],
a:"Lambda"
},

{
q:"Lambda関数を呼び出すAPIを作成するサービスは？",
c:["API Gateway","CloudFront","EFS","KMS"],
a:"API Gateway"
},

{
q:"Lambdaの実行時間上限として知られるものは？",
c:["15分","1時間","24時間","無制限"],
a:"15分"
},

{
q:"Lambdaの実行権限に使うものは？",
c:["IAMロール","S3バケット","Route53","EBS"],
a:"IAMロール"
},

{
q:"Lambdaで環境ごとの値を設定する機能は？",
c:["環境変数","VPC Peering","NAT Gateway","EBS Snapshot"],
a:"環境変数"
},

{
q:"Lambdaのバージョン管理で利用するものは？",
c:["バージョンとエイリアス","EBS","Elastic IP","Route Table"],
a:"バージョンとエイリアス"
},

{
q:"Lambdaの段階的リリースに使いやすい機能は？",
c:["エイリアス","S3 Glacier","VPC Flow Logs","IAMグループ"],
a:"エイリアス"
},

{
q:"Lambdaのログ出力先として一般的なのは？",
c:["CloudWatch Logs","S3 Glacier","Route53","EBS"],
a:"CloudWatch Logs"
},

{
q:"Lambdaで外部ライブラリを共有する仕組みは？",
c:["Lambda Layer","Security Group","SCP","NAT Gateway"],
a:"Lambda Layer"
},

{
q:"DynamoDBは何のデータベース？",
c:["NoSQLデータベース","リレーショナルDB","ファイルストレージ","DNS"],
a:"NoSQLデータベース"
},

{
q:"DynamoDBの主キーに含まれるものは？",
c:["パーティションキー","IAMキー","KMSキー","アクセスキー"],
a:"パーティションキー"
},

{
q:"DynamoDBで複合主キーに使うキーは？",
c:["パーティションキーとソートキー","公開鍵と秘密鍵","VPCとSubnet","AZとRegion"],
a:"パーティションキーとソートキー"
},

{
q:"DynamoDB Streamsの用途は？",
c:["テーブル変更イベントの取得","DNS管理","画像変換","OS更新"],
a:"テーブル変更イベントの取得"
},

{
q:"DynamoDBの読み取り高速化に使うサービスは？",
c:["DAX","EFS","EBS","CloudTrail"],
a:"DAX"
},

{
q:"DynamoDBで予測困難な負荷に向く課金モードは？",
c:["オンデマンド","固定契約","Dedicated Host","Savings Account"],
a:"オンデマンド"
},

{
q:"SQSは何のサービス？",
c:["メッセージキュー","DNS","RDB","仮想サーバ"],
a:"メッセージキュー"
},

{
q:"SQSを使う主な目的は？",
c:["処理を疎結合にする","DNSを登録する","暗号鍵を作る","EC2を削除する"],
a:"処理を疎結合にする"
},

{
q:"SQS FIFOキューの特徴は？",
c:["順序保証と重複排除","画像分析","DNS高速化","VPC作成"],
a:"順序保証と重複排除"
},

{
q:"SQSのDLQとは？",
c:["処理失敗メッセージを退避するキュー","DNSログ","暗号鍵","ロードバランサー"],
a:"処理失敗メッセージを退避するキュー"
},

{
q:"SNSは何のサービス？",
c:["通知・Pub/Sub","ブロックストレージ","RDB","仮想ネットワーク"],
a:"通知・Pub/Sub"
},

{
q:"SNSから複数の購読先へ通知する方式は？",
c:["Pub/Sub","SSH","FTP","NAT"],
a:"Pub/Sub"
},

{
q:"Step Functionsの用途は？",
c:["ワークフロー制御","DNS管理","暗号鍵管理","EC2購入"],
a:"ワークフロー制御"
},

{
q:"Step Functionsで処理の分岐や再試行を定義できる？",
c:["できる","できない","S3のみ可能","EC2のみ可能"],
a:"できる"
},

{
q:"EventBridgeの用途は？",
c:["イベント駆動連携","ファイル保存","仮想サーバ作成","料金見積もり"],
a:"イベント駆動連携"
},

{
q:"API Gatewayで認証に利用できるものは？",
c:["Lambda Authorizer","EBS Snapshot","S3 Lifecycle","Route Table"],
a:"Lambda Authorizer"
},

{
q:"API Gatewayのスロットリングの目的は？",
c:["リクエスト数を制限する","画像を圧縮する","DBを複製する","DNSを変更する"],
a:"リクエスト数を制限する"
},

{
q:"API Gatewayのキャッシュ機能の目的は？",
c:["応答速度向上とバックエンド負荷軽減","IAM削除","料金固定","暗号化解除"],
a:"応答速度向上とバックエンド負荷軽減"
},

{
q:"Amazon Cognitoの用途は？",
c:["ユーザー認証・認可","DNS管理","仮想サーバ起動","ログ分析"],
a:"ユーザー認証・認可"
},

{
q:"Cognito User Poolの用途は？",
c:["ユーザー認証基盤","VPC接続","EC2監視","EBS保存"],
a:"ユーザー認証基盤"
},

{
q:"Cognito Identity Poolの用途は？",
c:["一時的なAWS認証情報を提供","DNS登録","コンテナ実行","DB移行"],
a:"一時的なAWS認証情報を提供"
},

{
q:"S3の署名付きURLの用途は？",
c:["一時的にオブジェクトアクセスを許可","EC2を起動","DBを移行","IAMを削除"],
a:"一時的にオブジェクトアクセスを許可"
},

{
q:"S3イベント通知で起動できる代表的なサービスは？",
c:["Lambda","EBS","Route53","ACM"],
a:"Lambda"
},

{
q:"Amazon Kinesisの用途は？",
c:["ストリーミングデータ処理","DNS管理","証明書管理","静的サイト配信"],
a:"ストリーミングデータ処理"
},

{
q:"Kinesis Data Streamsで処理単位となるものは？",
c:["シャード","バケット","ボリューム","サブネット"],
a:"シャード"
},

{
q:"Kinesis Data Firehoseの用途は？",
c:["ストリーミングデータをS3等へ配信","IAM作成","DNS変更","EC2起動"],
a:"ストリーミングデータをS3等へ配信"
},

{
q:"AWS SDKの用途は？",
c:["プログラムからAWSサービスを操作する","DNSを高速化する","物理サーバを購入する","監査を停止する"],
a:"プログラムからAWSサービスを操作する"
},

{
q:"AWS CLIの用途は？",
c:["コマンドラインからAWSを操作する","画像を生成する","DNS専用","請求専用"],
a:"コマンドラインからAWSを操作する"
},

{
q:"IAMロールを使う開発上のメリットは？",
c:["認証情報をコードに埋め込まなくてよい","EC2が無料になる","DNS不要","暗号化不要"],
a:"認証情報をコードに埋め込まなくてよい"
},

{
q:"DVA-C02で重要な開発サービスの組み合わせは？",
c:["Lambda・API Gateway・DynamoDB","Route53・ACM・WAFのみ","EBS・EFS・FSxのみ","IAM・SCP・Organizationsのみ"],
a:"Lambda・API Gateway・DynamoDB"
}

];