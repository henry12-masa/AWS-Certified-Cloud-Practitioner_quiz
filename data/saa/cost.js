window.quizData = window.quizData || {};

window.quizData.cost = [

{
q:"安定して長期間稼働するEC2に向く購入オプションは？",
c:["Reserved Instance","Spot Instance","On-Demandのみ","Free Tier"],
a:"Reserved Instance"
},

{
q:"中断可能なバッチ処理に向くEC2購入オプションは？",
c:["Spot Instance","Reserved Instance","Dedicated Host","Savings Account"],
a:"Spot Instance"
},

{
q:"一定利用量を約束して割引を受ける仕組みは？",
c:["Savings Plans","CloudTrail","IAM","S3 Transfer"],
a:"Savings Plans"
},

{
q:"使っていないリソースを見つけるのに役立つサービスは？",
c:["Trusted Advisor","SNS","SQS","KMS"],
a:"Trusted Advisor"
},

{
q:"AWSの費用分析に使うサービスは？",
c:["Cost Explorer","CloudWatch Logs","Route53","VPC"],
a:"Cost Explorer"
},

{
q:"予算超過を通知するサービスは？",
c:["AWS Budgets","AWS Backup","AWS WAF","AWS Shield"],
a:"AWS Budgets"
},

{
q:"料金見積もりに使うサービスは？",
c:["AWS Pricing Calculator","CloudTrail","GuardDuty","Macie"],
a:"AWS Pricing Calculator"
},

{
q:"S3の長期アーカイブに向くストレージクラスは？",
c:["S3 Glacier Deep Archive","S3 Standard","S3 Intelligent-Tiering","S3 One Zone-IA"],
a:"S3 Glacier Deep Archive"
},

{
q:"アクセス頻度が低いデータのコスト削減に有効なのは？",
c:["低頻度アクセス用ストレージクラス","常にS3 Standard","EC2へ保存","EBSへ全保存"],
a:"低頻度アクセス用ストレージクラス"
},

{
q:"未使用EBSボリュームを放置すると？",
c:["料金が発生する可能性がある","必ず無料","自動削除","CloudTrail停止"],
a:"料金が発生する可能性がある"
},

{
q:"S3ライフサイクルポリシーの目的は？",
c:["保存階層の自動移行","IAMユーザー作成","EC2起動","DNS管理"],
a:"保存階層の自動移行"
},

{
q:"CloudFrontを使うコスト面の効果として適切なのは？",
c:["オリジン負荷や転送量を削減しやすい","EC2料金が必ずゼロ","IAM不要","RDS無料"],
a:"オリジン負荷や転送量を削減しやすい"
},

{
q:"DynamoDBで予測困難な負荷に向く課金モードは？",
c:["オンデマンド","プロビジョンドのみ","Reservedのみ","Dedicatedのみ"],
a:"オンデマンド"
},

{
q:"Aurora Serverlessが向く用途は？",
c:["負荷変動が大きいDB","常時最大負荷DBのみ","DNS管理","S3配信"],
a:"負荷変動が大きいDB"
},

{
q:"Compute Savings Plansの対象に含まれるものは？",
c:["EC2・Lambda・Fargate","S3のみ","Route53のみ","CloudTrailのみ"],
a:"EC2・Lambda・Fargate"
},

{
q:"コスト配分タグの用途は？",
c:["部門別・案件別の費用集計","暗号化","DNS管理","脅威検知"],
a:"部門別・案件別の費用集計"
},

{
q:"不要なElastic IPを保持すると？",
c:["課金される場合がある","必ず無料","自動削除","通信不可"],
a:"課金される場合がある"
},

{
q:"EC2を停止しても残る可能性がある料金は？",
c:["EBS料金","CPU料金","メモリ料金","Auto Scaling料金"],
a:"EBS料金"
},

{
q:"RDSのコスト削減に有効な方法は？",
c:["適切なインスタンスサイズ選定","常に最大サイズ","バックアップ無制限保持","Multi-AZ必須"],
a:"適切なインスタンスサイズ選定"
},

{
q:"本番で長期利用するRDSに向く割引は？",
c:["Reserved DB Instance","Spot DB","Free DB","Basic Support"],
a:"Reserved DB Instance"
},

{
q:"不要なログを無期限保存しないための設定は？",
c:["ログ保持期間","IAMグループ","VPC CIDR","MFA"],
a:"ログ保持期間"
},

{
q:"AWS Organizationsの一括請求のメリットは？",
c:["請求を統合できる","IAM不要","S3無料","EC2停止"],
a:"請求を統合できる"
},

{
q:"Savings Plans購入前に確認すべきことは？",
c:["利用傾向","IAM名","DNS名","MFA端末"],
a:"利用傾向"
},

{
q:"Spot Instanceに最も向かない用途は？",
c:["停止できない本番DB","バッチ処理","画像変換","テスト処理"],
a:"停止できない本番DB"
},

{
q:"SAA-C03でコスト最適化として重要なのは？",
c:["適切なサービスと購入オプション選択","全て最大サイズ","全データ標準保存","監視しない"],
a:"適切なサービスと購入オプション選択"
}

];