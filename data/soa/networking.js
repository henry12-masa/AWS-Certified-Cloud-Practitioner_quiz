window.quizData = window.quizData || {};

window.quizData.networking = [

{
q:"AWS上で仮想ネットワークを作成するサービスは？",
c:["VPC","EC2","S3","IAM"],
a:"VPC"
},

{
q:"VPCの正式名称は？",
c:["Virtual Private Cloud","Virtual Public Cloud","Verified Private Cloud","Virtual Protected Cluster"],
a:"Virtual Private Cloud"
},

{
q:"VPC内でネットワークを分割する単位は？",
c:["サブネット","IAMグループ","S3バケット","EBSボリューム"],
a:"サブネット"
},

{
q:"パブリックサブネットとは？",
c:["インターネットゲートウェイへの経路を持つサブネット","S3専用サブネット","IAM専用サブネット","必ず暗号化されたサブネット"],
a:"インターネットゲートウェイへの経路を持つサブネット"
},

{
q:"プライベートサブネットとは？",
c:["インターネットから直接到達できないサブネット","必ず無料のサブネット","Route53専用","S3専用"],
a:"インターネットから直接到達できないサブネット"
},

{
q:"インターネット接続に必要なVPCコンポーネントは？",
c:["Internet Gateway","NAT Gateway","EBS","CloudTrail"],
a:"Internet Gateway"
},

{
q:"プライベートサブネットからインターネットへ出るために使うものは？",
c:["NAT Gateway","Internet Gatewayのみ","EBS","CloudWatch"],
a:"NAT Gateway"
},

{
q:"NAT Gatewayの主な用途は？",
c:["プライベートサブネットから外向き通信を行う","インターネットから直接接続させる","DNS登録","暗号鍵管理"],
a:"プライベートサブネットから外向き通信を行う"
},

{
q:"ルートテーブルの役割は？",
c:["通信経路を制御する","IAM権限を管理する","ログを保存する","暗号化する"],
a:"通信経路を制御する"
},

{
q:"セキュリティグループは何に近い？",
c:["仮想ファイアウォール","DNSサーバ","ストレージ","ロードバランサー"],
a:"仮想ファイアウォール"
},

{
q:"セキュリティグループはステートフル？",
c:["はい","いいえ","常にステートレス","S3のみ"],
a:"はい"
},

{
q:"ネットワークACLはステートレス？",
c:["はい","いいえ","常にステートフル","EC2のみ"],
a:"はい"
},

{
q:"ネットワークACLは何単位で適用される？",
c:["サブネット","EC2インスタンス","IAMユーザー","S3バケット"],
a:"サブネット"
},

{
q:"セキュリティグループは何単位で適用される？",
c:["ENIまたはインスタンス","リージョン","アカウント","S3バケット"],
a:"ENIまたはインスタンス"
},

{
q:"VPC Flow Logsの用途は？",
c:["ネットワーク通信ログの記録","DNS登録","暗号化","EC2起動"],
a:"ネットワーク通信ログの記録"
},

{
q:"Route 53は何のサービス？",
c:["DNS","ストレージ","監視","暗号化"],
a:"DNS"
},

{
q:"Route 53のヘルスチェックでできることは？",
c:["エンドポイントの正常性確認","IAM作成","EBS拡張","KMS削除"],
a:"エンドポイントの正常性確認"
},

{
q:"Route 53フェイルオーバールーティングの用途は？",
c:["障害時に別リソースへ切替","料金削減のみ","EC2暗号化","S3保存"],
a:"障害時に別リソースへ切替"
},

{
q:"ALBの用途は？",
c:["HTTP/HTTPS負荷分散","TCP専用負荷分散","DNS管理","ファイル保存"],
a:"HTTP/HTTPS負荷分散"
},

{
q:"NLBの用途は？",
c:["TCP/UDPの高性能負荷分散","画像分析","DNS解決","暗号鍵管理"],
a:"TCP/UDPの高性能負荷分散"
},

{
q:"Gateway Load Balancerの用途は？",
c:["セキュリティアプライアンス連携","S3配信","IAM管理","DB移行"],
a:"セキュリティアプライアンス連携"
},

{
q:"VPC Peeringの用途は？",
c:["VPC同士を接続する","S3を公開する","IAMを削除する","EC2を停止する"],
a:"VPC同士を接続する"
},

{
q:"Transit Gatewayの用途は？",
c:["複数VPCやオンプレを集約接続する","単一EC2接続","S3暗号化","DNS登録"],
a:"複数VPCやオンプレを集約接続する"
},

{
q:"Direct Connectの用途は？",
c:["オンプレミスとAWSを専用線接続","EC2監視","S3ライフサイクル","IAM認証"],
a:"オンプレミスとAWSを専用線接続"
},

{
q:"Site-to-Site VPNの用途は？",
c:["オンプレミスとVPCを暗号化接続","S3配信","CloudFront高速化","IAM管理"],
a:"オンプレミスとVPCを暗号化接続"
},

{
q:"VPC Endpointのメリットは？",
c:["インターネットを経由せずAWSサービスへ接続","EC2を無料化","IAM不要","Route53不要"],
a:"インターネットを経由せずAWSサービスへ接続"
},

{
q:"S3やDynamoDB向けのVPC Endpointは？",
c:["Gateway Endpoint","Interface Endpoint","NAT Gateway","Internet Gateway"],
a:"Gateway Endpoint"
},

{
q:"PrivateLinkで利用されるEndpointは？",
c:["Interface Endpoint","Gateway Endpoint","Internet Gateway","NAT Instance"],
a:"Interface Endpoint"
},

{
q:"Elastic IPとは？",
c:["固定パブリックIPv4アドレス","IAMキー","S3バケット名","暗号鍵"],
a:"固定パブリックIPv4アドレス"
},

{
q:"SOA-C02で重要なネットワーク分野は？",
c:["VPC・Route53・ELB・VPN","S3・EBS・EFSのみ","IAM・KMS・SCPのみ","Lambda・DynamoDBのみ"],
a:"VPC・Route53・ELB・VPN"
}

];