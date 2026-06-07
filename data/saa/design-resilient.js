window.quizData = window.quizData || {};

window.quizData.saaDesignResilient = [

{
q:"高可用性を高める基本設計は？",
c:["複数AZに分散","単一EC2のみ","バックアップなし","監視なし"],
a:"複数AZに分散"
},

{
q:"複数AZにまたがってトラフィックを分散するサービスは？",
c:["Elastic Load Balancing","S3 Glacier","KMS","Athena"],
a:"Elastic Load Balancing"
},

{
q:"EC2台数を需要に応じて自動調整するサービスは？",
c:["Auto Scaling","CloudTrail","Route53","Secrets Manager"],
a:"Auto Scaling"
},

{
q:"RDSで高可用性を実現する構成は？",
c:["Multi-AZ配置","単一AZ配置","手動バックアップのみ","ローカル保存"],
a:"Multi-AZ配置"
},

{
q:"RDS Multi-AZの主な目的は？",
c:["可用性向上","読み取り性能のみ向上","料金削減のみ","DNS管理"],
a:"可用性向上"
},

{
q:"RDSの読み取り負荷を分散する機能は？",
c:["リードレプリカ","NAT Gateway","VPC Peering","IAMロール"],
a:"リードレプリカ"
},

{
q:"Route 53で障害時に別リソースへ切り替えるルーティングは？",
c:["フェイルオーバールーティング","加重ルーティング","レイテンシールーティング","シンプルルーティング"],
a:"フェイルオーバールーティング"
},

{
q:"S3の可用性・耐久性の特徴は？",
c:["複数AZに自動保存される","単一EC2に保存","手動でのみ複製","AZ非対応"],
a:"複数AZに自動保存される"
},

{
q:"静的Webサイトを高可用に配信する組み合わせは？",
c:["S3 + CloudFront","EC2単体","RDS + EBS","IAM + KMS"],
a:"S3 + CloudFront"
},

{
q:"疎結合アーキテクチャに使うメッセージキューは？",
c:["SQS","Route53","EBS","KMS"],
a:"SQS"
},

{
q:"アプリ間を非同期連携する利点は？",
c:["障害影響を分離しやすい","必ず遅くなる","可用性が下がる","暗号化できない"],
a:"障害影響を分離しやすい"
},

{
q:"Pub/Sub型の通知サービスは？",
c:["SNS","SQS","EBS","VPC"],
a:"SNS"
},

{
q:"災害対策で別リージョンへ複製する目的は？",
c:["リージョン障害に備える","料金をゼロにする","IAMを不要にする","CPUを上げる"],
a:"リージョン障害に備える"
},

{
q:"DynamoDBのグローバル分散機能は？",
c:["Global Tables","Multi-AZ","Read Replica","Placement Group"],
a:"Global Tables"
},

{
q:"Auroraで高可用性を実現する特徴は？",
c:["複数AZに6コピー保存","単一ディスク保存","手動複製のみ","EBS必須"],
a:"複数AZに6コピー保存"
},

{
q:"AWS Backupの用途は？",
c:["バックアップの一元管理","DNS管理","暗号鍵作成","API Gateway作成"],
a:"バックアップの一元管理"
},

{
q:"EC2障害時に新しいインスタンスを自動起動しやすい構成は？",
c:["Auto Scaling Group","単一EC2","手動起動のみ","Elastic IPのみ"],
a:"Auto Scaling Group"
},

{
q:"ALBの主な用途は？",
c:["HTTP/HTTPSトラフィック分散","ブロックストレージ","暗号鍵管理","データ分析"],
a:"HTTP/HTTPSトラフィック分散"
},

{
q:"NLBの特徴は？",
c:["高性能なTCP/UDP負荷分散","画像分析","DNS登録","IAM管理"],
a:"高性能なTCP/UDP負荷分散"
},

{
q:"単一障害点を避ける設計を何という？",
c:["冗長化","圧縮","暗号化","監査"],
a:"冗長化"
},

{
q:"ステートレスなアプリケーション設計の利点は？",
c:["スケールしやすい","必ずDB不要","暗号化不要","監視不要"],
a:"スケールしやすい"
},

{
q:"セッション情報を外部保存するサービス例は？",
c:["DynamoDB","Route53","CloudTrail","ACM"],
a:"DynamoDB"
},

{
q:"CloudFrontでオリジン障害に備える機能は？",
c:["Origin Failover","IAM Role","SCP","KMS Key"],
a:"Origin Failover"
},

{
q:"RTOとは？",
c:["復旧までの目標時間","失ってよいデータ量","CPU使用率","月額料金"],
a:"復旧までの目標時間"
},

{
q:"RPOとは？",
c:["失ってよいデータ量の目標","復旧までの時間","DNS応答時間","CPU性能"],
a:"失ってよいデータ量の目標"
}

];