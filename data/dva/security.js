window.quizData = window.quizData || {};

window.quizData.dvaSecurity = [

{
q:"DVA-C02で重要なセキュリティ分野は？",
c:["認証・認可・暗号化","物理サーバ構築","営業戦略","会計処理"],
a:"認証・認可・暗号化"
},

{
q:"AWSでアクセス制御を行うサービスは？",
c:["IAM","S3","EC2","Route53"],
a:"IAM"
},

{
q:"IAMの基本原則は？",
c:["最小権限の原則","全権限付与","root利用","共有アカウント"],
a:"最小権限の原則"
},

{
q:"アプリケーションからAWSへアクセスする推奨方法は？",
c:["IAMロール","アクセスキー直書き","rootユーザー","共有パスワード"],
a:"IAMロール"
},

{
q:"EC2へ権限付与する際に利用するものは？",
c:["IAMロール","S3バケット","CloudTrail","Route53"],
a:"IAMロール"
},

{
q:"Lambdaへ権限付与する際に利用するものは？",
c:["IAMロール","SCP","Security Group","Route Table"],
a:"IAMロール"
},

{
q:"IAMポリシーで許可対象を指定する項目は？",
c:["Resource","CPU","Memory","Subnet"],
a:"Resource"
},

{
q:"IAMポリシーで操作内容を指定する項目は？",
c:["Action","Region","Volume","AZ"],
a:"Action"
},

{
q:"明示的DenyとAllowが競合した場合は？",
c:["Denyが優先","Allowが優先","両方有効","ランダム"],
a:"Denyが優先"
},

{
q:"AWS Secrets Managerの用途は？",
c:["シークレット管理","DNS管理","仮想サーバ管理","ログ分析"],
a:"シークレット管理"
},

{
q:"Secrets Managerで管理する代表例は？",
c:["DBパスワード","HTML","CSS","AMI"],
a:"DBパスワード"
},

{
q:"Secrets Managerの特徴は？",
c:["自動ローテーション対応","DNS作成","EC2自動停止","CloudFront管理"],
a:"自動ローテーション対応"
},

{
q:"Parameter Storeの用途は？",
c:["設定値管理","画像保存","DNS管理","監査ログ削除"],
a:"設定値管理"
},

{
q:"Systems Manager Parameter Storeで保存できるものは？",
c:["アプリ設定値","EC2本体","VPC","AZ"],
a:"アプリ設定値"
},

{
q:"KMSの用途は？",
c:["暗号鍵管理","DNS管理","監視","通知"],
a:"暗号鍵管理"
},

{
q:"KMSの正式名称は？",
c:["Key Management Service","Key Monitoring Service","Kernel Management Service","Knowledge Management Service"],
a:"Key Management Service"
},

{
q:"S3のサーバ側暗号化で利用できるサービスは？",
c:["KMS","SNS","SQS","Route53"],
a:"KMS"
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
c:["TLS","FTP","SMTP","NTP"],
a:"TLS"
},

{
q:"Amazon Cognitoの用途は？",
c:["ユーザー認証","DNS管理","ストレージ管理","課金管理"],
a:"ユーザー認証"
},

{
q:"Cognito User Poolの用途は？",
c:["認証基盤","VPC接続","監査","ロードバランサー"],
a:"認証基盤"
},

{
q:"Cognito Identity Poolの用途は？",
c:["AWS認証情報払い出し","DNS管理","メール送信","ログ分析"],
a:"AWS認証情報払い出し"
},

{
q:"API Gatewayで認証に利用できる機能は？",
c:["Lambda Authorizer","Route53","EFS","Athena"],
a:"Lambda Authorizer"
},

{
q:"API Gatewayで利用できる認証方式は？",
c:["Cognito","EBS","S3 Glacier","CloudFront"],
a:"Cognito"
},

{
q:"CloudTrailの用途は？",
c:["API操作履歴記録","CPU監視","DNS管理","バックアップ"],
a:"API操作履歴記録"
},

{
q:"CloudTrailで確認できるものは？",
c:["誰が何を実行したか","CPU温度","物理サーバ状態","営業履歴"],
a:"誰が何を実行したか"
},

{
q:"CloudWatch Logsの用途は？",
c:["ログ保存","認証","DNS管理","暗号化"],
a:"ログ保存"
},

{
q:"GuardDutyの用途は？",
c:["脅威検知","課金分析","CI/CD","メール送信"],
a:"脅威検知"
},

{
q:"Inspectorの用途は？",
c:["脆弱性検査","DNS管理","画像分析","通知"],
a:"脆弱性検査"
},

{
q:"Security Hubの用途は？",
c:["セキュリティ結果集約","コンテナ実行","DNS解決","DB移行"],
a:"セキュリティ結果集約"
},

{
q:"WAFの用途は？",
c:["Webアプリ保護","仮想サーバ管理","データ分析","課金管理"],
a:"Webアプリ保護"
},

{
q:"Shieldの用途は？",
c:["DDoS対策","DNS管理","認証","バックアップ"],
a:"DDoS対策"
},

{
q:"ACMの用途は？",
c:["SSL/TLS証明書管理","暗号鍵管理","DNS管理","ログ管理"],
a:"SSL/TLS証明書管理"
},

{
q:"署名付きURLの用途は？",
c:["一時的アクセス許可","EC2起動","DNS変更","DB移行"],
a:"一時的アクセス許可"
},

{
q:"S3 Presigned URLで実現できることは？",
c:["期限付きアクセス","暗号化解除","EC2停止","IAM削除"],
a:"期限付きアクセス"
},

{
q:"VPC Endpointのメリットは？",
c:["インターネットを経由せずAWSサービス接続","無料でEC2利用","IAM不要","DNS不要"],
a:"インターネットを経由せずAWSサービス接続"
},

{
q:"S3へのプライベート接続で使うものは？",
c:["Gateway Endpoint","Internet Gateway","NAT Gateway","Elastic IP"],
a:"Gateway Endpoint"
},

{
q:"認証情報をコードへ埋め込まない理由は？",
c:["漏洩リスク軽減","高速化","コスト削減","DNS改善"],
a:"漏洩リスク軽減"
},

{
q:"DVA-C02で最重要のセキュリティテーマは？",
c:["認証・認可・シークレット管理","物理サーバ保守","営業戦略","経理処理"],
a:"認証・認可・シークレット管理"
}

];