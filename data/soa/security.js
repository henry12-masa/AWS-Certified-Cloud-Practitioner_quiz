window.quizData = window.quizData || {};

window.quizData.soaSecurity = [

{
q:"SOA-C02で重要なセキュリティ分野は？",
c:["運用・監査・アクセス制御","営業戦略","会計処理","物理配線"],
a:"運用・監査・アクセス制御"
},

{
q:"AWSのアクセス管理サービスは？",
c:["IAM","S3","EC2","Route53"],
a:"IAM"
},

{
q:"IAMの基本原則は？",
c:["最小権限の原則","全権限付与","root利用","共有アカウント"],
a:"最小権限の原則"
},

{
q:"EC2へ権限付与する推奨方法は？",
c:["IAMロール","アクセスキー埋め込み","root利用","共通パスワード"],
a:"IAMロール"
},

{
q:"Lambdaへ権限付与する方法は？",
c:["IAMロール","Route53","EBS","SNS"],
a:"IAMロール"
},

{
q:"MFAとは？",
c:["多要素認証","多重暗号化","多重バックアップ","監査ログ"],
a:"多要素認証"
},

{
q:"rootユーザーに推奨される設定は？",
c:["MFA有効化","アクセスキー共有","パスワード公開","無制限利用"],
a:"MFA有効化"
},

{
q:"CloudTrailの用途は？",
c:["API操作履歴の記録","CPU監視","DNS管理","通知送信"],
a:"API操作履歴の記録"
},

{
q:"CloudTrailで確認できるものは？",
c:["誰が何を実行したか","CPU温度","メモリ使用率","DNS速度"],
a:"誰が何を実行したか"
},

{
q:"AWS Configの用途は？",
c:["設定変更履歴の管理","メール送信","DNS管理","画像分析"],
a:"設定変更履歴の管理"
},

{
q:"Config Rulesの用途は？",
c:["設定準拠性チェック","EC2起動","IAM削除","Route53削除"],
a:"設定準拠性チェック"
},

{
q:"GuardDutyの用途は？",
c:["脅威検知","課金分析","DNS管理","データ分析"],
a:"脅威検知"
},

{
q:"Inspectorの用途は？",
c:["脆弱性診断","監査ログ保存","DNS管理","バックアップ"],
a:"脆弱性診断"
},

{
q:"Security Hubの用途は？",
c:["セキュリティ結果集約","ストレージ管理","DNS解決","コンテナ管理"],
a:"セキュリティ結果集約"
},

{
q:"AWS Artifactの用途は？",
c:["監査レポート取得","EC2起動","S3暗号化","DNS管理"],
a:"監査レポート取得"
},

{
q:"AWS WAFの用途は？",
c:["Webアプリ保護","DNS管理","課金管理","メール送信"],
a:"Webアプリ保護"
},

{
q:"AWS Shieldの用途は？",
c:["DDoS対策","ログ保存","監査","DNS登録"],
a:"DDoS対策"
},

{
q:"KMSの用途は？",
c:["暗号鍵管理","DNS管理","仮想サーバ管理","通知管理"],
a:"暗号鍵管理"
},

{
q:"KMSの正式名称は？",
c:["Key Management Service","Kernel Management Service","Knowledge Management Service","Key Monitoring Service"],
a:"Key Management Service"
},

{
q:"保存データ暗号化を何という？",
c:["Encryption at Rest","Encryption in Transit","Hashing","Encoding"],
a:"Encryption at Rest"
},

{
q:"通信中データ暗号化を何という？",
c:["Encryption in Transit","Encryption at Rest","Encoding","Compression"],
a:"Encryption in Transit"
},

{
q:"HTTPSで利用される技術は？",
c:["TLS","FTP","SMTP","POP3"],
a:"TLS"
},

{
q:"Secrets Managerの用途は？",
c:["シークレット管理","DNS管理","監視","バックアップ"],
a:"シークレット管理"
},

{
q:"Secrets Managerの特徴は？",
c:["シークレット自動ローテーション","DNS管理","EC2監視","Route53管理"],
a:"シークレット自動ローテーション"
},

{
q:"Systems Manager Parameter Storeの用途は？",
c:["設定値管理","DNS管理","暗号化解除","EC2削除"],
a:"設定値管理"
},

{
q:"ACMの用途は？",
c:["SSL/TLS証明書管理","暗号鍵管理","DNS管理","課金管理"],
a:"SSL/TLS証明書管理"
},

{
q:"SCPを利用するサービスは？",
c:["Organizations","IAM","CloudTrail","S3"],
a:"Organizations"
},

{
q:"SCPの正式名称は？",
c:["Service Control Policy","Security Control Policy","System Control Policy","Simple Control Policy"],
a:"Service Control Policy"
},

{
q:"VPC Endpointのメリットは？",
c:["インターネットを経由せずAWSサービスへ接続","EC2無料化","IAM不要","DNS不要"],
a:"インターネットを経由せずAWSサービスへ接続"
},

{
q:"S3へのプライベート接続に使うものは？",
c:["Gateway Endpoint","Internet Gateway","NAT Gateway","Elastic IP"],
a:"Gateway Endpoint"
},

{
q:"セキュリティインシデント調査で重要なサービスは？",
c:["CloudTrail","CloudFront","Athena","EFS"],
a:"CloudTrail"
},

{
q:"AWSで脅威検知を行う代表サービスは？",
c:["GuardDuty","Route53","EBS","SNS"],
a:"GuardDuty"
},

{
q:"SOA-C02で頻出の監査サービスは？",
c:["CloudTrail・Config","Route53・CloudFront","EBS・EFS","SNS・SQS"],
a:"CloudTrail・Config"
},

{
q:"セキュリティ運用で重要なことは？",
c:["継続的監視と監査","監視しない","ログ削除","通知停止"],
a:"継続的監視と監査"
},

{
q:"SOA-C02で重要なセキュリティサービス群は？",
c:["IAM・CloudTrail・Config・GuardDuty","S3・EBS・EFS","Route53・CloudFront","SNS・SES・SQS"],
a:"IAM・CloudTrail・Config・GuardDuty"
}

];