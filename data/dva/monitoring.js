window.quizData = window.quizData || {};

window.quizData.dvamonitoring = [

{
q:"AWSで監視サービスとして利用するものは？",
c:["CloudWatch","CloudTrail","Route53","IAM"],
a:"CloudWatch"
},

{
q:"CloudWatchで監視できるものは？",
c:["メトリクス・ログ・アラーム","DNSのみ","IAMのみ","請求のみ"],
a:"メトリクス・ログ・アラーム"
},

{
q:"EC2のCPU使用率を確認するサービスは？",
c:["CloudWatch","CloudTrail","SNS","SQS"],
a:"CloudWatch"
},

{
q:"CloudWatch Alarmの用途は？",
c:["閾値超過時の通知","暗号化","認証","DNS管理"],
a:"閾値超過時の通知"
},

{
q:"CloudWatch Alarmの通知先として利用されるサービスは？",
c:["SNS","S3","Route53","EFS"],
a:"SNS"
},

{
q:"CloudWatch Logsの用途は？",
c:["ログ保存・検索","DNS管理","暗号化","認証"],
a:"ログ保存・検索"
},

{
q:"Lambdaのログ保存先は？",
c:["CloudWatch Logs","S3 Glacier","EBS","Route53"],
a:"CloudWatch Logs"
},

{
q:"API Gatewayのログ保存先は？",
c:["CloudWatch Logs","IAM","KMS","SCP"],
a:"CloudWatch Logs"
},

{
q:"CloudWatch Dashboardの用途は？",
c:["監視情報の可視化","認証管理","暗号鍵管理","課金管理"],
a:"監視情報の可視化"
},

{
q:"CloudWatch Metricの意味は？",
c:["監視指標","DNS情報","ユーザー情報","暗号鍵"],
a:"監視指標"
},

{
q:"CloudWatchでカスタムメトリクスを送信できる？",
c:["できる","できない","EC2のみ","Lambdaのみ"],
a:"できる"
},

{
q:"CloudTrailの用途は？",
c:["API操作履歴の記録","CPU監視","メモリ監視","課金管理"],
a:"API操作履歴の記録"
},

{
q:"CloudTrailで確認できるものは？",
c:["誰が何をしたか","CPU温度","DNS速度","売上"],
a:"誰が何をしたか"
},

{
q:"CloudTrailのログ保存先として一般的なのは？",
c:["S3","EFS","Route53","SNS"],
a:"S3"
},

{
q:"AWS X-Rayの用途は？",
c:["アプリケーショントレーシング","DNS管理","監査","暗号化"],
a:"アプリケーショントレーシング"
},

{
q:"X-Rayで確認できるものは？",
c:["アプリの処理経路","IAMポリシー","Route53レコード","KMSキー"],
a:"アプリの処理経路"
},

{
q:"分散システムの遅延分析に向くサービスは？",
c:["X-Ray","CloudFormation","CodeBuild","CodeDeploy"],
a:"X-Ray"
},

{
q:"CloudWatch Logs Insightsの用途は？",
c:["ログ分析","認証","DNS管理","暗号化"],
a:"ログ分析"
},

{
q:"CloudWatch Logs Insightsでできることは？",
c:["ログ検索・集計","EC2起動","DNS登録","IAM削除"],
a:"ログ検索・集計"
},

{
q:"Lambdaの失敗監視に利用できるサービスは？",
c:["CloudWatch Alarm","Route53","EFS","S3 Glacier"],
a:"CloudWatch Alarm"
},

{
q:"アプリケーションエラー通知に利用するサービスは？",
c:["SNS","CloudFront","Athena","Glue"],
a:"SNS"
},

{
q:"CloudWatch Eventsの後継サービスは？",
c:["EventBridge","Route53","Kinesis","Config"],
a:"EventBridge"
},

{
q:"EventBridgeの用途は？",
c:["イベント駆動連携","監査ログ保存","暗号化","認証"],
a:"イベント駆動連携"
},

{
q:"DynamoDB Streamsと連携しやすいサービスは？",
c:["Lambda","Route53","CloudFront","ACM"],
a:"Lambda"
},

{
q:"CloudWatch Syntheticsの用途は？",
c:["エンドポイント監視","認証管理","暗号化","DNS登録"],
a:"エンドポイント監視"
},

{
q:"アプリケーション監視で重要な3要素は？",
c:["メトリクス・ログ・トレース","DNS・VPC・IAM","EC2・EBS・EFS","SNS・SQS・SES"],
a:"メトリクス・ログ・トレース"
},

{
q:"CloudWatchでEC2のメモリ使用率は標準取得できる？",
c:["できない","できる","Lambdaのみ","RDSのみ"],
a:"できない"
},

{
q:"EC2メモリ監視には何が必要？",
c:["CloudWatch Agent","Route53","CloudFront","ACM"],
a:"CloudWatch Agent"
},

{
q:"AWS Health Dashboardの用途は？",
c:["AWS障害情報確認","認証管理","DNS管理","CI/CD"],
a:"AWS障害情報確認"
},

{
q:"Personal Health Dashboardで確認できるものは？",
c:["自アカウントへの影響","IAM権限","Route53設定","EBS容量"],
a:"自アカウントへの影響"
},

{
q:"CloudWatch Composite Alarmの特徴は？",
c:["複数アラームを組み合わせる","DNS管理","認証管理","暗号化"],
a:"複数アラームを組み合わせる"
},

{
q:"アプリケーション性能監視(APM)に近いサービスは？",
c:["X-Ray","SNS","SQS","SES"],
a:"X-Ray"
},

{
q:"ログ監視のベストプラクティスは？",
c:["構造化ログ出力","ログ削除","監視しない","暗号化しない"],
a:"構造化ログ出力"
},

{
q:"CloudWatch Alarmで自動実行できるものは？",
c:["Auto Scaling","Route53削除","IAM削除","KMS削除"],
a:"Auto Scaling"
},

{
q:"Auto ScalingとCloudWatchの関係は？",
c:["メトリクスに応じてスケール","DNSを自動作成","暗号化を解除","認証を削除"],
a:"メトリクスに応じてスケール"
},

{
q:"CloudWatchで異常検知機能は利用できる？",
c:["できる","できない","EC2のみ","Lambdaのみ"],
a:"できる"
},

{
q:"異常検知の目的は？",
c:["通常パターンからの逸脱検出","暗号化","認証","DNS管理"],
a:"通常パターンからの逸脱検出"
},

{
q:"運用監視で重要なことは？",
c:["問題の早期検知","監視しない","ログ削除","通知停止"],
a:"問題の早期検知"
},

{
q:"DVA-C02で監視分野の中心サービスは？",
c:["CloudWatch・CloudTrail・X-Ray","IAM・KMS・SCP","Route53・CloudFront・WAF","EBS・EFS・FSx"],
a:"CloudWatch・CloudTrail・X-Ray"
},

{
q:"DVA-C02で頻出の監視構成は？",
c:["CloudWatch + SNS + Lambda","Route53 + EBS","IAM + KMS","S3 + Glacier"],
a:"CloudWatch + SNS + Lambda"
}

];