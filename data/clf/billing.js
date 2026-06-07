window.quizData = window.quizData || {};

window.quizData.clfBilling = [

{
q:"AWSの基本的な料金体系は？",
c:["従量課金制","完全定額制","年額固定制","無料のみ"],
a:"従量課金制"
},

{
q:"AWSで『使った分だけ支払う』考え方を何という？",
c:["Pay as you go","Flat Rate","Enterprise License","Annual Billing"],
a:"Pay as you go"
},

{
q:"AWSの請求情報を確認するサービスは？",
c:["Billing Dashboard","EC2","S3","IAM"],
a:"Billing Dashboard"
},

{
q:"AWS Free Tierとは？",
c:["一定範囲で無料利用できる制度","永久無料サービス","学習専用環境","有料サポート"],
a:"一定範囲で無料利用できる制度"
},

{
q:"コスト分析に利用するサービスは？",
c:["Cost Explorer","CloudTrail","CloudFormation","GuardDuty"],
a:"Cost Explorer"
},

{
q:"予算超過を通知できるサービスは？",
c:["AWS Budgets","SNS","Lambda","Route53"],
a:"AWS Budgets"
},

{
q:"AWS Budgetsの主な用途は？",
c:["予算管理","データ分析","認証管理","監査"],
a:"予算管理"
},

{
q:"利用料金の詳細レポートを取得できる機能は？",
c:["Cost and Usage Report","CloudWatch","Config","Shield"],
a:"Cost and Usage Report"
},

{
q:"RIとは何の略？",
c:["Reserved Instance","Regional Instance","Reliable Instance","Remote Instance"],
a:"Reserved Instance"
},

{
q:"Reserved Instanceの特徴は？",
c:["長期利用で割引が受けられる","無料になる","スポット専用","サーバレス専用"],
a:"長期利用で割引が受けられる"
},

{
q:"Spot Instanceの特徴は？",
c:["大幅な割引価格で利用できる","常に利用保証される","無料","サポート専用"],
a:"大幅な割引価格で利用できる"
},

{
q:"Spot Instanceの注意点は？",
c:["中断される可能性がある","料金が固定","必ず3年契約","サーバレス限定"],
a:"中断される可能性がある"
},

{
q:"On-Demand Instanceの特徴は？",
c:["必要な時に利用できる","長期契約必須","無料","スポット専用"],
a:"必要な時に利用できる"
},

{
q:"Savings Plansのメリットは？",
c:["利用コミットメントによる割引","無料利用","データ分析","バックアップ強化"],
a:"利用コミットメントによる割引"
},

{
q:"AWS料金の見積もりに利用するサービスは？",
c:["AWS Pricing Calculator","CloudWatch","Trusted Advisor","Athena"],
a:"AWS Pricing Calculator"
},

{
q:"AWS Pricing Calculatorの用途は？",
c:["料金見積もり","監査","認証","データ分析"],
a:"料金見積もり"
},

{
q:"Trusted Advisorのコスト最適化チェック対象は？",
c:["未使用リソース","IAMユーザー","DNSレコード","リージョン名"],
a:"未使用リソース"
},

{
q:"請求アラートの通知先として利用されるサービスは？",
c:["SNS","SQS","Athena","Glue"],
a:"SNS"
},

{
q:"複数AWSアカウントの請求を統合できる機能は？",
c:["Consolidated Billing","Lambda","CloudTrail","KMS"],
a:"Consolidated Billing"
},

{
q:"Consolidated Billingはどのサービスで利用する？",
c:["AWS Organizations","CloudFormation","Route53","RDS"],
a:"AWS Organizations"
},

{
q:"AWSサポートプランで無料なのは？",
c:["Basic","Developer","Business","Enterprise"],
a:"Basic"
},

{
q:"Basic Supportに含まれるものは？",
c:["請求サポート","24時間技術サポート","TAM","アーキテクト相談"],
a:"請求サポート"
},

{
q:"開発・テスト用途向けのサポートプランは？",
c:["Developer","Business","Enterprise","Basic Plus"],
a:"Developer"
},

{
q:"本番環境向けとして推奨されるサポートプランは？",
c:["Business","Basic","Free","Student"],
a:"Business"
},

{
q:"専任のTechnical Account Managerが付くプランは？",
c:["Enterprise","Basic","Developer","Free"],
a:"Enterprise"
},

{
q:"AWS Marketplaceとは？",
c:["サードパーティ製ソフトウェアを購入できる場所","データセンター","サポート窓口","監査機関"],
a:"サードパーティ製ソフトウェアを購入できる場所"
},

{
q:"コスト削減のために不要なEC2を停止する考え方は？",
c:["コスト最適化","高可用性","耐障害性","暗号化"],
a:"コスト最適化"
},

{
q:"S3の料金は主に何に基づく？",
c:["保存容量","CPU使用率","メモリ量","IAMユーザー数"],
a:"保存容量"
},

{
q:"EC2の料金は主に何に基づく？",
c:["インスタンスタイプと利用時間","IAM数","DNS数","リージョン数のみ"],
a:"インスタンスタイプと利用時間"
},

{
q:"データ転送料金が発生する場合があるものは？",
c:["AWS外へのデータ送信","IAM作成","タグ追加","CloudTrail有効化"],
a:"AWS外へのデータ送信"
},

{
q:"コスト配分タグの目的は？",
c:["コストを分類・集計する","暗号化する","認証する","監査する"],
a:"コストを分類・集計する"
},

{
q:"タグを利用するメリットは？",
c:["部門別コスト管理","CPU向上","ネットワーク高速化","自動暗号化"],
a:"部門別コスト管理"
},

{
q:"AWS Cost Explorerで確認できるものは？",
c:["コスト推移","OSログ","IAMパスワード","暗号鍵"],
a:"コスト推移"
},

{
q:"コスト異常を検知するサービスは？",
c:["Cost Anomaly Detection","CloudTrail","Shield","Config"],
a:"Cost Anomaly Detection"
},

{
q:"Free Tier対象期間として一般的なのは？",
c:["12か月","1か月","3年","永久"],
a:"12か月"
},

{
q:"請求通貨は国によって異なる場合がある？",
c:["はい","いいえ","米ドルのみ","円のみ"],
a:"はい"
},

{
q:"AWS Organizationsでできることは？",
c:["複数アカウントの一元管理","EC2高速化","S3暗号化","DNS登録"],
a:"複数アカウントの一元管理"
},

{
q:"Business Supportで利用できるものは？",
c:["24時間365日の技術サポート","TAM","永久無料サポート","専用リージョン"],
a:"24時間365日の技術サポート"
},

{
q:"Enterprise Supportの特徴は？",
c:["最上位サポート","無料サポート","学習専用","請求専用"],
a:"最上位サポート"
},

{
q:"CLF-C02試験でコスト最適化はどの分野に含まれる？",
c:["請求・料金","ネットワーク","機械学習","開発"],
a:"請求・料金"
},

{
q:"AWSのコスト管理で最初に確認すべき画面は？",
c:["Billing Dashboard","EC2 Dashboard","IAM Console","VPC Console"],
a:"Billing Dashboard"
},

{
q:"Cost Explorerでできることは？",
c:["サービス別の費用確認","IAM作成","EC2起動","DNS登録"],
a:"サービス別の費用確認"
},

{
q:"Cost Explorerで確認しやすいものは？",
c:["月別コスト推移","CPU温度","物理ラック","MFAコード"],
a:"月別コスト推移"
},

{
q:"AWS Budgetsで設定できるものは？",
c:["予算額","IAMパスワード","VPC CIDR","DNSレコード"],
a:"予算額"
},

{
q:"AWS Budgetsの通知に使えるサービスは？",
c:["SNS","S3","EC2","RDS"],
a:"SNS"
},

{
q:"Cost and Usage Reportの略称は？",
c:["CUR","CAR","CUP","CAU"],
a:"CUR"
},

{
q:"CURの用途は？",
c:["詳細な利用料金分析","DNS管理","画像分析","認証"],
a:"詳細な利用料金分析"
},

{
q:"コスト配分タグの用途は？",
c:["部門や案件ごとの費用集計","暗号鍵作成","DNS登録","監査ログ削除"],
a:"部門や案件ごとの費用集計"
},

{
q:"タグ付けで管理しやすくなるものは？",
c:["コストとリソース","CPU温度","AWSロゴ","アカウント名のみ"],
a:"コストとリソース"
},

{
q:"AWS Cost Categoriesの用途は？",
c:["コスト分類ルール作成","EC2作成","IAM削除","DNS解決"],
a:"コスト分類ルール作成"
},

{
q:"AWS Compute Optimizerの用途は？",
c:["リソース最適化提案","DNS管理","監査ログ保存","メール送信"],
a:"リソース最適化提案"
},

{
q:"Trusted Advisorのコスト最適化チェックで見つけられるものは？",
c:["未使用リソース","IAMパスワード","MFAコード","ドメイン名"],
a:"未使用リソース"
},

{
q:"不要なEBSボリュームを削除する目的は？",
c:["コスト削減","通信暗号化","DNS高速化","認証強化"],
a:"コスト削減"
},

{
q:"停止中のEC2でも料金が発生する可能性があるものは？",
c:["EBSボリューム","CPU使用料","インスタンス利用料","MFA"],
a:"EBSボリューム"
},

{
q:"S3のライフサイクルポリシーの用途は？",
c:["保存階層の自動移行","IAM管理","DNS登録","通知送信"],
a:"保存階層の自動移行"
},

{
q:"S3 Glacierを使う主な目的は？",
c:["長期保存コスト削減","CPU高速化","DNS管理","監視"],
a:"長期保存コスト削減"
},

{
q:"オンデマンド料金の特徴は？",
c:["長期契約なしで利用可能","必ず最安","中断前提","無料"],
a:"長期契約なしで利用可能"
},

{
q:"Reserved Instanceが向いている用途は？",
c:["長期的に安定利用するワークロード","短時間だけの実験","中断可能な処理のみ","無料検証"],
a:"長期的に安定利用するワークロード"
},

{
q:"Spot Instanceが向いている用途は？",
c:["中断に強い処理","絶対停止不可の本番DB","請求管理","DNS登録"],
a:"中断に強い処理"
},

{
q:"Savings Plansは何に対する割引モデル？",
c:["一定利用額のコミット","DNS登録","監査ログ","MFA"],
a:"一定利用額のコミット"
},

{
q:"Compute Savings Plansの対象に含まれるものは？",
c:["EC2・Fargate・Lambda","S3のみ","Route53のみ","IAMのみ"],
a:"EC2・Fargate・Lambda"
},

{
q:"AWS Free Tierで注意すべきことは？",
c:["無料枠超過で課金される","全サービス永久無料","課金されない","請求情報不要"],
a:"無料枠超過で課金される"
},

{
q:"Free Tierの確認に使う画面は？",
c:["Billing Dashboard","IAM Console","VPC Console","Route53"],
a:"Billing Dashboard"
},

{
q:"AWS Marketplaceの請求はどこにまとめられる？",
c:["AWS請求","個別紙請求のみ","銀行窓口","GitHub"],
a:"AWS請求"
},

{
q:"AWS Marketplaceで購入できるものは？",
c:["サードパーティ製ソフトウェア","物理ラック","家具","PC本体"],
a:"サードパーティ製ソフトウェア"
},

{
q:"AWS SupportのBasicプランで利用できるものは？",
c:["アカウントと請求サポート","専任TAM","24時間技術サポート","本番障害対応"],
a:"アカウントと請求サポート"
},

{
q:"Developer Supportが向いている用途は？",
c:["開発・テスト","大規模本番","専任TAM","企業全体統制"],
a:"開発・テスト"
},

{
q:"Business Supportが向いている用途は？",
c:["本番ワークロード","個人学習のみ","無料検証のみ","請求確認のみ"],
a:"本番ワークロード"
},

{
q:"Enterprise Supportで提供される代表的な役割は？",
c:["Technical Account Manager","IAMユーザー","EC2管理者","DNS担当者"],
a:"Technical Account Manager"
},

{
q:"AWS Health APIが利用できるサポートプランは？",
c:["Business以上","Basicのみ","Free Tierのみ","全員不可"],
a:"Business以上"
},

{
q:"Technical Account Managerの略称は？",
c:["TAM","TMS","TMA","ATM"],
a:"TAM"
},

{
q:"Enterprise Supportの特徴は？",
c:["最上位サポート","無料サポート","学習専用","DNS専用"],
a:"最上位サポート"
},

{
q:"Consolidated Billingの主なメリットは？",
c:["請求の一元管理","CPU向上","ストレージ増加","DNS高速化"],
a:"請求の一元管理"
},

{
q:"Consolidated Billingはどのサービスで利用する？",
c:["AWS Organizations","IAM","EC2","CloudTrail"],
a:"AWS Organizations"
},

{
q:"AWS Organizationsで利用できるコストメリットは？",
c:["ボリュームディスカウント共有","CPU共有","パスワード共有","DNS共有"],
a:"ボリュームディスカウント共有"
},

{
q:"AWS請求レポートの確認に適したサービスは？",
c:["Cost Explorer","SNS","Lambda","Route53"],
a:"Cost Explorer"
},

{
q:"コスト異常検知サービスは？",
c:["Cost Anomaly Detection","CloudTrail","GuardDuty","Inspector"],
a:"Cost Anomaly Detection"
},

{
q:"Cost Anomaly Detectionの用途は？",
c:["異常な請求検知","脅威検知","DNS監視","メール送信"],
a:"異常な請求検知"
},

{
q:"コスト最適化の第一歩として重要なのは？",
c:["利用状況の可視化","全停止","全削除","全増強"],
a:"利用状況の可視化"
},

{
q:"未使用Elastic IPを放置すると？",
c:["料金が発生する場合がある","無料","自動削除される","IAMが停止する"],
a:"料金が発生する場合がある"
},

{
q:"使われていないEBSスナップショットは？",
c:["削除検討対象","必ず保持","無料","自動暗号化"],
a:"削除検討対象"
},

{
q:"AWSの料金に影響する要素は？",
c:["利用量","AWSロゴ","IAM名","パスワード長"],
a:"利用量"
},

{
q:"EC2料金に影響する要素は？",
c:["インスタンスタイプ","IAMグループ名","タグ色","リージョン名のみ"],
a:"インスタンスタイプ"
},

{
q:"S3料金に影響する要素は？",
c:["保存容量","IAMユーザー数","VPC数","Route53レコード数"],
a:"保存容量"
},

{
q:"データ転送料金に影響するものは？",
c:["送信データ量","IAM数","タグ数","CloudTrail数"],
a:"送信データ量"
},

{
q:"AWS Pricing Calculatorの用途は？",
c:["料金試算","監査","認証","暗号化"],
a:"料金試算"
},

{
q:"新システム導入前に利用すると便利なサービスは？",
c:["Pricing Calculator","IAM","KMS","SNS"],
a:"Pricing Calculator"
},

{
q:"RI購入前に確認すべきことは？",
c:["長期間利用するか","DNS名","タグ色","MFA設定"],
a:"長期間利用するか"
},

{
q:"Spot Instanceの最大メリットは？",
c:["大幅割引","停止しない","永久利用","無料"],
a:"大幅割引"
},

{
q:"Spot Instanceの最大リスクは？",
c:["中断される","暗号化されない","監査できない","認証できない"],
a:"中断される"
},

{
q:"Savings Plansの目的は？",
c:["コスト削減","認証強化","DNS高速化","ログ保存"],
a:"コスト削減"
},

{
q:"Compute Savings Plansの対象サービスは？",
c:["EC2・Lambda・Fargate","S3のみ","RDSのみ","Route53のみ"],
a:"EC2・Lambda・Fargate"
},

{
q:"Cost Explorerでできないことは？",
c:["EC2起動","費用分析","利用傾向確認","サービス別分析"],
a:"EC2起動"
},

{
q:"AWS Budgetsで可能なことは？",
c:["予算超過通知","EC2作成","IAM削除","VPC作成"],
a:"予算超過通知"
},

{
q:"タグベースでコスト管理する目的は？",
c:["部門別集計","暗号化","認証","監査"],
a:"部門別集計"
},

{
q:"コスト最適化でよく確認するサービスは？",
c:["Trusted Advisor","SNS","SES","Chime"],
a:"Trusted Advisor"
},

{
q:"Trusted Advisorは何を提案する？",
c:["ベストプラクティス","給与計算","会計処理","営業戦略"],
a:"ベストプラクティス"
},

{
q:"AWS Marketplace製品の料金はどこに表示される？",
c:["AWS請求書","IAM","CloudTrail","Route53"],
a:"AWS請求書"
},

{
q:"CLF-C02で請求分野の重要テーマは？",
c:["コスト最適化","Linux管理","Java開発","ネットワーク設計"],
a:"コスト最適化"
},

{
q:"CLF-C02で頻出の料金関連サービスは？",
c:["Cost Explorer・Budgets・Pricing Calculator","SNS・SQS・SES","CloudTrail・Config・Inspector","Route53・VPC・ELB"],
a:"Cost Explorer・Budgets・Pricing Calculator"
},

];