window.quizData = window.quizData || {};

window.quizData.performance = [

{
q:"読み取り負荷が高いRDSの性能改善に有効なのは？",
c:["リードレプリカ","NAT Gateway","CloudTrail","IAMロール"],
a:"リードレプリカ"
},

{
q:"静的コンテンツ配信を高速化するサービスは？",
c:["CloudFront","RDS","SQS","KMS"],
a:"CloudFront"
},

{
q:"頻繁に参照されるデータの応答を高速化するサービスは？",
c:["ElastiCache","CloudTrail","Route53","S3 Glacier"],
a:"ElastiCache"
},

{
q:"ElastiCacheで利用できるエンジンは？",
c:["Redis","Oracle","SQL Server","MongoDB"],
a:"Redis"
},

{
q:"S3でアクセス頻度に応じて階層を自動変更するクラスは？",
c:["S3 Intelligent-Tiering","S3 Standard","S3 Glacier Deep Archive","S3 One Zone-IA"],
a:"S3 Intelligent-Tiering"
},

{
q:"大規模分析向けデータウェアハウスは？",
c:["Redshift","RDS","EBS","EFS"],
a:"Redshift"
},

{
q:"S3上のデータをSQLで直接分析するサービスは？",
c:["Athena","EC2","Lambda","ECS"],
a:"Athena"
},

{
q:"サーバレスでAPIのバックエンドを構築しやすい組み合わせは？",
c:["API Gateway + Lambda","EC2 + EBSのみ","RDS + Route53のみ","IAM + KMS"],
a:"API Gateway + Lambda"
},

{
q:"大量のリアルタイムデータ処理に使うサービスは？",
c:["Kinesis","CloudTrail","IAM","ACM"],
a:"Kinesis"
},

{
q:"画像や動画分析に使うAIサービスは？",
c:["Rekognition","Polly","Translate","Lex"],
a:"Rekognition"
},

{
q:"アプリケーションのメトリクス監視に使うサービスは？",
c:["CloudWatch","CloudTrail","Route53","Macie"],
a:"CloudWatch"
},

{
q:"Auto Scalingの性能面の利点は？",
c:["負荷に応じて処理能力を増減できる","暗号鍵を管理できる","請求を止める","DNSを登録する"],
a:"負荷に応じて処理能力を増減できる"
},

{
q:"Placement GroupのCluster配置の目的は？",
c:["低レイテンシ・高スループット","高可用性のみ","DNS管理","S3アーカイブ"],
a:"低レイテンシ・高スループット"
},

{
q:"コンテナをサーバ管理なしで実行するサービスは？",
c:["Fargate","EC2 Dedicated Host","EBS","Route53"],
a:"Fargate"
},

{
q:"DynamoDBで読み書き性能を自動調整するモードは？",
c:["オンデマンドキャパシティ","マニュアルDNS","S3 Intelligent","Multi-AZ"],
a:"オンデマンドキャパシティ"
},

{
q:"DynamoDB Acceleratorの略称は？",
c:["DAX","DXA","ADX","XDA"],
a:"DAX"
},

{
q:"DAXの用途は？",
c:["DynamoDBの読み取り高速化","EC2監視","S3暗号化","DNS管理"],
a:"DynamoDBの読み取り高速化"
},

{
q:"Lambdaの性能に影響する主な設定は？",
c:["メモリサイズ","S3バケット名","IAMユーザー名","タグ色"],
a:"メモリサイズ"
},

{
q:"ALBが主に扱うレイヤーは？",
c:["レイヤー7","レイヤー2","物理層のみ","DNS層のみ"],
a:"レイヤー7"
},

{
q:"NLBが主に扱うレイヤーは？",
c:["レイヤー4","レイヤー7","アプリ層のみ","IAM層"],
a:"レイヤー4"
},

{
q:"Global Acceleratorの用途は？",
c:["グローバル通信の性能改善","S3暗号化","IAM管理","ログ保存"],
a:"グローバル通信の性能改善"
},

{
q:"Route53のレイテンシールーティングの目的は？",
c:["低遅延のリージョンへ誘導","最安リージョンへ誘導","IAM認証","暗号化"],
a:"低遅延のリージョンへ誘導"
},

{
q:"EBSの性能指標に含まれるものは？",
c:["IOPS","MFA","SCP","DNS"],
a:"IOPS"
},

{
q:"高IOPSが必要なEBSタイプは？",
c:["io系ボリューム","sc1","st1","S3 Glacier"],
a:"io系ボリューム"
},

{
q:"EFSの特徴は？",
c:["複数EC2から共有可能","単一EC2専用","オブジェクト保存専用","DNS専用"],
a:"複数EC2から共有可能"
}

];