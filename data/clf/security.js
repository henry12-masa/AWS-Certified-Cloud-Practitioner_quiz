window.quizData = window.quizData || {};

window.quizData.clfsecurity = [

{
q:"AWSの責任共有モデルで、IAM設定の責任は誰にある？",
c:["利用者","AWS","ハードウェアメーカー","ISP"],
a:"利用者"
},

{
q:"AWSの責任共有モデルで、物理データセンターの管理責任は誰にある？",
c:["AWS","利用者","監査法人","ISP"],
a:"AWS"
},

{
q:"IAMの正式名称は？",
c:["Identity and Access Management","Internet Access Management","Infrastructure Access Manager","Identity AWS Manager"],
a:"Identity and Access Management"
},

{
q:"IAMの主な役割は？",
c:["アクセス制御","データ分析","監視","課金"],
a:"アクセス制御"
},

{
q:"AWSアカウントで最も強い権限を持つのは？",
c:["rootユーザー","IAMユーザー","IAMロール","フェデレーションユーザー"],
a:"rootユーザー"
},

{
q:"rootユーザーで推奨される設定は？",
c:["MFAを有効化する","アクセスキーを共有する","日常業務で利用する","パスワードを共有する"],
a:"MFAを有効化する"
},

{
q:"MFAとは？",
c:["多要素認証","多重暗号化","監査ログ","自動バックアップ"],
a:"多要素認証"
},

{
q:"IAMユーザーに最小限の権限のみ付与する考え方は？",
c:["最小権限の原則","完全公開","匿名アクセス","全権限付与"],
a:"最小権限の原則"
},

{
q:"一時的な認証情報を利用する仕組みは？",
c:["IAMロール","IAMグループ","ルートユーザー","CloudFront"],
a:"IAMロール"
},

{
q:"IAMグループの目的は？",
c:["複数ユーザーへの権限管理","EC2起動","課金確認","バックアップ取得"],
a:"複数ユーザーへの権限管理"
},

{
q:"AWSで監査ログを記録するサービスは？",
c:["CloudTrail","CloudWatch","IAM","Trusted Advisor"],
a:"CloudTrail"
},

{
q:"CloudTrailで確認できるものは？",
c:["API操作履歴","CPU使用率","請求情報","DNS設定"],
a:"API操作履歴"
},

{
q:"AWS環境の監視サービスは？",
c:["CloudWatch","CloudTrail","IAM","Organizations"],
a:"CloudWatch"
},

{
q:"CloudWatchで監視できるものは？",
c:["CPU利用率","契約書","物理サーバ購入履歴","メール内容"],
a:"CPU利用率"
},

{
q:"データを保存時に暗号化することを何という？",
c:["Encryption at Rest","Encryption in Transit","Hashing","Tokenization"],
a:"Encryption at Rest"
},

{
q:"通信中のデータ暗号化を何という？",
c:["Encryption in Transit","Encryption at Rest","IAM Policy","MFA"],
a:"Encryption in Transit"
},

{
q:"暗号鍵を管理できるAWSサービスは？",
c:["KMS","SNS","SQS","Athena"],
a:"KMS"
},

{
q:"KMSの正式名称は？",
c:["Key Management Service","Knowledge Management Service","Kernel Management Service","Key Monitoring Service"],
a:"Key Management Service"
},

{
q:"セキュリティ評価や推奨事項を提供するサービスは？",
c:["Trusted Advisor","Route53","CloudFormation","Glue"],
a:"Trusted Advisor"
},

{
q:"AWS Shieldの主な用途は？",
c:["DDoS対策","データ分析","バックアップ","認証管理"],
a:"DDoS対策"
},

{
q:"AWS WAFの用途は？",
c:["Webアプリケーション保護","ストレージ管理","請求管理","メール送信"],
a:"Webアプリケーション保護"
},

{
q:"Amazon GuardDutyは何を検知する？",
c:["脅威や異常な挙動","料金超過","CPU不足","DNS障害"],
a:"脅威や異常な挙動"
},

{
q:"AWS Configの用途は？",
c:["設定変更の記録と評価","メール送信","データ変換","動画配信"],
a:"設定変更の記録と評価"
},

{
q:"セキュリティインシデント対応サービスは？",
c:["Security Hub","CloudFront","S3","Redshift"],
a:"Security Hub"
},

{
q:"Security Hubの目的は？",
c:["セキュリティ状況の一元管理","ストレージ管理","課金確認","仮想サーバ起動"],
a:"セキュリティ状況の一元管理"
},

{
q:"IAMポリシーは何を定義する？",
c:["許可・拒否する操作","サーバ性能","請求情報","OS情報"],
a:"許可・拒否する操作"
},

{
q:"AWS Organizationsの用途は？",
c:["複数アカウント管理","EC2管理","監視","DNS管理"],
a:"複数アカウント管理"
},

{
q:"AWS Artifactで取得できるものは？",
c:["コンプライアンスレポート","EC2インスタンス","バックアップ","IAMポリシー"],
a:"コンプライアンスレポート"
},

{
q:"AWSのコンプライアンス文書を確認できるサービスは？",
c:["Artifact","Config","Shield","KMS"],
a:"Artifact"
},

{
q:"アクセスキーのベストプラクティスは？",
c:["必要最小限で定期ローテーション","共有する","長期間放置する","rootで使用する"],
a:"必要最小限で定期ローテーション"
},

{
q:"IAMロールの主なメリットは？",
c:["長期認証情報を減らせる","料金が無料になる","CPU性能向上","通信速度向上"],
a:"長期認証情報を減らせる"
},

{
q:"CloudTrailログの保存先としてよく利用されるサービスは？",
c:["S3","EC2","RDS","Lambda"],
a:"S3"
},

{
q:"AWS Shield Standardの料金は？",
c:["無料","月額100ドル","従量課金","年額契約のみ"],
a:"無料"
},

{
q:"セキュリティグループは何を制御する？",
c:["通信許可","課金","バックアップ","暗号化"],
a:"通信許可"
},

{
q:"セキュリティグループは何に近い？",
c:["仮想ファイアウォール","データベース","ストレージ","監査ログ"],
a:"仮想ファイアウォール"
},

{
q:"ネットワークACLの特徴は？",
c:["サブネット単位で制御","IAM専用","料金管理専用","ストレージ専用"],
a:"サブネット単位で制御"
},

{
q:"認証(Authentication)とは？",
c:["本人確認","権限付与","暗号化","監査"],
a:"本人確認"
},

{
q:"認可(Authorization)とは？",
c:["操作権限の付与","本人確認","暗号化","ログ管理"],
a:"操作権限の付与"
},

{
q:"フェデレーション認証とは？",
c:["外部IDプロバイダを利用する認証","MFAの別名","暗号化技術","ログ管理"],
a:"外部IDプロバイダを利用する認証"
},

{
q:"AWS IAM Identity Centerの用途は？",
c:["シングルサインオン","監視","課金","バックアップ"],
a:"シングルサインオン"
},

{
q:"IAMポリシーはJSON形式で記述される？",
c:["はい","いいえ","XMLのみ","CSVのみ"],
a:"はい"
},

{
q:"IAMユーザーのアクセス権限は何で定義する？",
c:["ポリシー","VPC","S3","CloudWatch"],
a:"ポリシー"
},

{
q:"IAMロールを利用するメリットは？",
c:["アクセスキーを減らせる","料金が無料になる","CPU性能向上","通信高速化"],
a:"アクセスキーを減らせる"
},

{
q:"EC2へ権限付与する推奨方法は？",
c:["IAMロール","rootユーザー","アクセスキー埋め込み","共通パスワード"],
a:"IAMロール"
},

{
q:"アクセスキーに推奨される運用は？",
c:["定期ローテーション","永久利用","共有","公開"],
a:"定期ローテーション"
},

{
q:"IAMの認証要素ではないものは？",
c:["CPU使用率","パスワード","MFA","アクセスキー"],
a:"CPU使用率"
},

{
q:"AWS SSOの新名称は？",
c:["IAM Identity Center","Cloud Identity","IAM Connect","AWS Login"],
a:"IAM Identity Center"
},

{
q:"シングルサインオンの利点は？",
c:["認証管理の簡素化","料金削減","CPU向上","ストレージ増加"],
a:"認証管理の簡素化"
},

{
q:"CloudTrailで記録されるものは？",
c:["APIコール","CPU温度","物理ラック","契約書"],
a:"APIコール"
},

{
q:"CloudTrailログの保存先として一般的なのは？",
c:["S3","IAM","EC2","Route53"],
a:"S3"
},

{
q:"CloudWatch Alarmの用途は？",
c:["閾値超過時の通知","暗号化","認証","課金"],
a:"閾値超過時の通知"
},

{
q:"AWS Configで確認できるものは？",
c:["設定変更履歴","請求履歴","給与情報","契約書"],
a:"設定変更履歴"
},

{
q:"GuardDutyの特徴は？",
c:["脅威を自動検出","データ保存","DNS管理","課金管理"],
a:"脅威を自動検出"
},

{
q:"AWS Shield Standardは追加料金が必要？",
c:["不要","必要","年契約のみ","Enterprise限定"],
a:"不要"
},

{
q:"AWS Shieldは何から保護する？",
c:["DDoS攻撃","SQL","Excel","FTP"],
a:"DDoS攻撃"
},

{
q:"AWS WAFはどこを保護する？",
c:["Webアプリケーション","物理サーバ","ルートユーザー","請求書"],
a:"Webアプリケーション"
},

{
q:"Security Hubは何を集約する？",
c:["セキュリティ情報","請求情報","DNS","ストレージ"],
a:"セキュリティ情報"
},

{
q:"AWS Artifactで取得できるものは？",
c:["監査レポート","IAMユーザー","VPC","Lambda"],
a:"監査レポート"
},

{
q:"コンプライアンス文書取得サービスは？",
c:["Artifact","Athena","SNS","SQS"],
a:"Artifact"
},

{
q:"データ暗号化の目的は？",
c:["情報保護","高速化","課金削減","監査削減"],
a:"情報保護"
},

{
q:"保存データ暗号化を何という？",
c:["Encryption at Rest","Encryption in Transit","Hash","Token"],
a:"Encryption at Rest"
},

{
q:"通信中暗号化を何という？",
c:["Encryption in Transit","Encryption at Rest","Hashing","Encoding"],
a:"Encryption in Transit"
},

{
q:"KMSは何を管理する？",
c:["暗号鍵","ユーザー","VPC","DNS"],
a:"暗号鍵"
},

{
q:"KMSの正式名称は？",
c:["Key Management Service","Key Monitoring Service","Knowledge Management Service","Kernel Management Service"],
a:"Key Management Service"
},

{
q:"セキュリティグループは何に近い？",
c:["仮想ファイアウォール","データベース","ストレージ","ロードバランサー"],
a:"仮想ファイアウォール"
},

{
q:"セキュリティグループは何単位で適用する？",
c:["インスタンス","リージョン","アカウント","AZ"],
a:"インスタンス"
},

{
q:"ネットワークACLは何単位で適用する？",
c:["サブネット","EC2","IAM","S3"],
a:"サブネット"
},

{
q:"セキュリティグループはステートフル？",
c:["はい","いいえ","場合による","不明"],
a:"はい"
},

{
q:"ネットワークACLはステートレス？",
c:["はい","いいえ","常にステートフル","不明"],
a:"はい"
},

{
q:"最小権限の原則とは？",
c:["必要最低限の権限付与","全権限付与","root利用","認証不要"],
a:"必要最低限の権限付与"
},

{
q:"IAMポリシーで許可を定義する要素は？",
c:["Action","Region","CPU","Memory"],
a:"Action"
},

{
q:"IAMポリシーで対象リソースを指定する要素は？",
c:["Resource","Action","Effect","Condition"],
a:"Resource"
},

{
q:"IAMポリシーで許可・拒否を指定する要素は？",
c:["Effect","Action","Role","Group"],
a:"Effect"
},

{
q:"IAMポリシーで条件指定する要素は？",
c:["Condition","Resource","Role","Group"],
a:"Condition"
},

{
q:"明示的DenyとAllowが競合した場合は？",
c:["Denyが優先","Allowが優先","両方適用","エラー"],
a:"Denyが優先"
},

{
q:"rootユーザーの日常利用は推奨される？",
c:["推奨されない","推奨される","必須","無料プランのみ必須"],
a:"推奨されない"
},

{
q:"rootユーザーで最初に行うべきセキュリティ対策は？",
c:["MFA有効化","アクセスキー共有","パスワード公開","権限削除"],
a:"MFA有効化"
},

{
q:"AWSアカウント保護で最も重要なものの1つは？",
c:["MFA","CloudFront","S3","Route53"],
a:"MFA"
},

{
q:"CloudWatch Logsで管理できるものは？",
c:["ログデータ","IAMユーザー","請求書","ドメイン"],
a:"ログデータ"
},

{
q:"CloudWatch Eventsの後継サービスは？",
c:["EventBridge","CloudTrail","Artifact","Config"],
a:"EventBridge"
},

{
q:"Amazon Inspectorの用途は？",
c:["脆弱性評価","DNS管理","課金管理","メール送信"],
a:"脆弱性評価"
},

{
q:"Inspectorは何を検出する？",
c:["脆弱性","売上","顧客情報","契約書"],
a:"脆弱性"
},

{
q:"AWS Detectiveの用途は？",
c:["セキュリティ調査","課金分析","機械学習","DNS管理"],
a:"セキュリティ調査"
},

{
q:"GuardDutyと連携して利用されることが多いサービスは？",
c:["Security Hub","Route53","Athena","QuickSight"],
a:"Security Hub"
},

{
q:"AWS Security Hubは複数サービスの結果を？",
c:["集約する","削除する","暗号化する","圧縮する"],
a:"集約する"
},

{
q:"データを読めない形式へ変換することは？",
c:["暗号化","圧縮","認証","監査"],
a:"暗号化"
},

{
q:"暗号化されたデータを元に戻すことは？",
c:["復号","圧縮","認証","監査"],
a:"復号"
},

{
q:"HTTPS通信で利用される代表的な技術は？",
c:["TLS","FTP","SMTP","NTP"],
a:"TLS"
},

{
q:"TLSの目的は？",
c:["通信の保護","CPU高速化","ストレージ増加","課金削減"],
a:"通信の保護"
},

{
q:"S3でサーバ側暗号化を有効にできる？",
c:["はい","いいえ","Enterpriseのみ","不可"],
a:"はい"
},

{
q:"KMSカスタマー管理キーの略称は？",
c:["CMK","CKM","KMC","MCK"],
a:"CMK"
},

{
q:"AWS Organizationsで管理できるものは？",
c:["複数AWSアカウント","EC2のみ","S3のみ","VPCのみ"],
a:"複数AWSアカウント"
},

{
q:"サービスコントロールポリシーの略称は？",
c:["SCP","SGP","SAP","SSP"],
a:"SCP"
},

{
q:"SCPはどのサービスで利用する？",
c:["Organizations","IAM","S3","CloudTrail"],
a:"Organizations"
},

{
q:"SCPの目的は？",
c:["アカウント全体の権限制御","データ保存","監査","暗号化"],
a:"アカウント全体の権限制御"
},

{
q:"AWS Artifactで確認できる例は？",
c:["SOCレポート","EC2状態","VPC設定","DNS設定"],
a:"SOCレポート"
},

{
q:"コンプライアンス対応の確認で利用するサービスは？",
c:["Artifact","Lambda","SNS","SQS"],
a:"Artifact"
},

{
q:"責任共有モデルで利用者責任に含まれるものは？",
c:["データ分類","物理サーバ","データセンター","空調設備"],
a:"データ分類"
},

{
q:"責任共有モデルでAWS責任に含まれるものは？",
c:["物理施設の保護","IAM設定","アプリ設定","アクセス制御"],
a:"物理施設の保護"
},

{
q:"CLF-C02試験で重要なセキュリティ概念は？",
c:["責任共有モデル","Linuxカーネル開発","SQLチューニング","Java開発"],
a:"責任共有モデル"
},

{
q:"Amazon S3 Glacierは何に使う？",
c:["長期アーカイブ保存","仮想サーバ起動","DNS管理","メッセージ送信"],
a:"長期アーカイブ保存"
},

{
q:"S3 Standardの特徴は？",
c:["頻繁にアクセスするデータ向け","長期アーカイブ専用","一時メモリ","DNS専用"],
a:"頻繁にアクセスするデータ向け"
},

{
q:"S3 Intelligent-Tieringの特徴は？",
c:["アクセス頻度に応じて階層を自動移動する","EC2を自動起動する","DNSを自動登録する","IAMを削除する"],
a:"アクセス頻度に応じて階層を自動移動する"
},

{
q:"Amazon FSxは何のサービス？",
c:["高性能ファイルシステム","DNS","監査ログ","通知"],
a:"高性能ファイルシステム"
},

{
q:"AWS DataSyncの用途は？",
c:["データ転送の自動化","ユーザー認証","請求確認","Web配信"],
a:"データ転送の自動化"
},

{
q:"AWS Migration Hubの用途は？",
c:["移行状況の一元管理","DNS管理","暗号鍵管理","通知管理"],
a:"移行状況の一元管理"
},

{
q:"AWS Application Migration Serviceの用途は？",
c:["サーバ移行","画像分析","DNS管理","BI"],
a:"サーバ移行"
},

{
q:"AWS Database Migration Serviceの略称は？",
c:["DMS","DMSA","DBMS","DMG"],
a:"DMS"
},

{
q:"AWS DMSの用途は？",
c:["データベース移行","DNS管理","ロードバランサー","監視"],
a:"データベース移行"
},

{
q:"Amazon ElastiCacheは何のサービス？",
c:["インメモリキャッシュ","オブジェクトストレージ","DNS","監査"],
a:"インメモリキャッシュ"
},

{
q:"ElastiCacheで利用できる代表的エンジンは？",
c:["Redis","Excel","Word","FTP"],
a:"Redis"
},

{
q:"Amazon Neptuneは何のデータベース？",
c:["グラフデータベース","リレーショナルDB","オブジェクトDB","DNS"],
a:"グラフデータベース"
},

{
q:"Amazon DocumentDBは何の互換データベース？",
c:["MongoDB互換","MySQL互換","PostgreSQL互換","Oracle互換"],
a:"MongoDB互換"
},

{
q:"Amazon Timestreamは何のデータ向け？",
c:["時系列データ","画像","動画","メール"],
a:"時系列データ"
},

{
q:"Amazon QLDBは何を記録する台帳DB？",
c:["変更履歴","画像","DNS","通知"],
a:"変更履歴"
},

{
q:"Amazon OpenSearch Serviceの用途は？",
c:["検索・ログ分析","DNS","仮想サーバ","暗号鍵管理"],
a:"検索・ログ分析"
},

{
q:"Amazon Kinesisの用途は？",
c:["ストリーミングデータ処理","DNS管理","認証","静的サイト配信"],
a:"ストリーミングデータ処理"
},

{
q:"Amazon EMRは何のサービス？",
c:["ビッグデータ処理","DNS管理","通知","暗号鍵管理"],
a:"ビッグデータ処理"
},

{
q:"AWS Lake Formationの用途は？",
c:["データレイク構築","仮想サーバ作成","DNS管理","MFA設定"],
a:"データレイク構築"
},

{
q:"AWS Step Functionsの用途は？",
c:["ワークフロー制御","DNS","ストレージ","暗号化"],
a:"ワークフロー制御"
},

{
q:"Amazon EventBridgeの用途は？",
c:["イベント駆動連携","ファイル共有","RDB","DNS"],
a:"イベント駆動連携"
},

{
q:"AWS App Runnerの特徴は？",
c:["コンテナやWebアプリを簡単に実行","DNS専用","請求専用","監査専用"],
a:"コンテナやWebアプリを簡単に実行"
},

{
q:"AWS Fargateの特徴は？",
c:["サーバ管理不要でコンテナ実行","物理サーバ購入","DNS管理","暗号鍵発行"],
a:"サーバ管理不要でコンテナ実行"
},

{
q:"Amazon ECRは何を保存する？",
c:["コンテナイメージ","DNSレコード","請求書","監査ログ"],
a:"コンテナイメージ"
},

{
q:"AWS Batchの用途は？",
c:["バッチ処理の実行","DNS管理","メール配信","暗号化"],
a:"バッチ処理の実行"
},

{
q:"AWS Outpostsの用途は？",
c:["オンプレミスでAWSサービスを利用","DNS管理","請求管理","メール送信"],
a:"オンプレミスでAWSサービスを利用"
},

{
q:"AWS Local Zonesの目的は？",
c:["低レイテンシ処理","請求管理","メール送信","IAM管理"],
a:"低レイテンシ処理"
},

{
q:"AWS Wavelengthは主に何向け？",
c:["5G低レイテンシアプリ","請求管理","DNS管理","データアーカイブ"],
a:"5G低レイテンシアプリ"
},

{
q:"Amazon WorkSpacesは何のサービス？",
c:["仮想デスクトップ","DNS","ストレージ","通知"],
a:"仮想デスクトップ"
},

{
q:"Amazon AppStream 2.0は何のサービス？",
c:["アプリケーションストリーミング","DNS管理","請求管理","暗号鍵管理"],
a:"アプリケーションストリーミング"
},


];