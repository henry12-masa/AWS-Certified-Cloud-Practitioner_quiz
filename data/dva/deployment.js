window.quizData = window.quizData || {};

window.quizData.dvaDeployment = [

{
q:"DVA-C02で重要なCI/CDサービスは？",
c:["CodePipeline","Route53","Athena","Macie"],
a:"CodePipeline"
},

{
q:"ソースコード管理サービスは？",
c:["CodeCommit","CloudTrail","SNS","SQS"],
a:"CodeCommit"
},

{
q:"CodeCommitは何のサービス？",
c:["Gitリポジトリ管理","データ分析","監査","DNS管理"],
a:"Gitリポジトリ管理"
},

{
q:"ビルドサービスは？",
c:["CodeBuild","CodeDeploy","CodePipeline","CloudFormation"],
a:"CodeBuild"
},

{
q:"CodeBuildの用途は？",
c:["ソースコードのビルドとテスト","DNS管理","監視","課金管理"],
a:"ソースコードのビルドとテスト"
},

{
q:"デプロイサービスは？",
c:["CodeDeploy","CodeBuild","CodeCommit","CloudTrail"],
a:"CodeDeploy"
},

{
q:"CodeDeployの用途は？",
c:["アプリケーションデプロイ","ログ監視","データ分析","認証管理"],
a:"アプリケーションデプロイ"
},

{
q:"CI/CDパイプライン構築サービスは？",
c:["CodePipeline","CloudWatch","KMS","EFS"],
a:"CodePipeline"
},

{
q:"CodePipelineの役割は？",
c:["CI/CD全体の自動化","DNS管理","暗号化","監査"],
a:"CI/CD全体の自動化"
},

{
q:"CodePipelineで最初のステージになることが多いのは？",
c:["Source","Deploy","Test","Approve"],
a:"Source"
},

{
q:"CodePipelineでビルド処理を行うサービスは？",
c:["CodeBuild","IAM","S3","EBS"],
a:"CodeBuild"
},

{
q:"CodePipelineでデプロイ処理を行うサービスは？",
c:["CodeDeploy","CloudTrail","SNS","Athena"],
a:"CodeDeploy"
},

{
q:"CodeBuildの設定ファイル名は？",
c:["buildspec.yml","dockerfile.yml","pipeline.yml","deploy.yml"],
a:"buildspec.yml"
},

{
q:"buildspec.ymlに記述するものは？",
c:["ビルド手順","IAMポリシー","VPC設定","Route53設定"],
a:"ビルド手順"
},

{
q:"CodeDeployの設定ファイル名は？",
c:["appspec.yml","buildspec.yml","deployspec.yml","code.yml"],
a:"appspec.yml"
},

{
q:"appspec.ymlに記述するものは？",
c:["デプロイ手順","IAM設定","VPC設定","CloudFront設定"],
a:"デプロイ手順"
},

{
q:"Blue/Greenデプロイの目的は？",
c:["ダウンタイムを最小化","料金削減","暗号化","監査"],
a:"ダウンタイムを最小化"
},

{
q:"Blue/Greenデプロイとは？",
c:["新旧環境を切り替える方式","全削除後再構築","単一サーバ更新","手動のみ更新"],
a:"新旧環境を切り替える方式"
},

{
q:"Canaryデプロイの特徴は？",
c:["一部トラフィックだけ新環境へ流す","全ユーザー一括切替","DNS削除","IAM削除"],
a:"一部トラフィックだけ新環境へ流す"
},

{
q:"Lambdaの段階的リリースに使う機能は？",
c:["エイリアス","VPC Endpoint","CloudTrail","SCP"],
a:"エイリアス"
},

{
q:"CloudFormationの用途は？",
c:["Infrastructure as Code","DNS管理","監査ログ保存","データ分析"],
a:"Infrastructure as Code"
},

{
q:"CloudFormationテンプレート形式は？",
c:["YAMLまたはJSON","CSVのみ","XMLのみ","TXTのみ"],
a:"YAMLまたはJSON"
},

{
q:"SAMの正式名称は？",
c:["Serverless Application Model","Simple AWS Model","Service Access Management","Server Admin Manager"],
a:"Serverless Application Model"
},

{
q:"SAMの用途は？",
c:["サーバレスアプリ開発","DNS管理","監査","請求管理"],
a:"サーバレスアプリ開発"
},

{
q:"SAMで主に扱うサービスは？",
c:["Lambda","Route53","EFS","Inspector"],
a:"Lambda"
},

{
q:"Elastic Beanstalkの用途は？",
c:["アプリケーションデプロイ簡素化","DNS管理","暗号化","ログ監査"],
a:"アプリケーションデプロイ簡素化"
},

{
q:"Elastic Beanstalkの特徴は？",
c:["インフラ管理を自動化","完全サーバレス","DNS専用","IAM専用"],
a:"インフラ管理を自動化"
},

{
q:"ECRの用途は？",
c:["コンテナイメージ保存","ログ保存","DNS管理","監査"],
a:"コンテナイメージ保存"
},

{
q:"ECRの正式名称は？",
c:["Elastic Container Registry","Elastic Cloud Registry","Enhanced Container Runtime","Elastic Compute Repository"],
a:"Elastic Container Registry"
},

{
q:"コンテナオーケストレーションサービスは？",
c:["ECS","Route53","Athena","SES"],
a:"ECS"
},

{
q:"Kubernetesマネージドサービスは？",
c:["EKS","ECS","Lambda","CloudFormation"],
a:"EKS"
},

{
q:"サーバ管理不要でコンテナ実行できるサービスは？",
c:["Fargate","EC2","EBS","Route53"],
a:"Fargate"
},

{
q:"CIとは？",
c:["継続的インテグレーション","継続的監査","継続的暗号化","継続的認証"],
a:"継続的インテグレーション"
},

{
q:"CDとは？",
c:["継続的デリバリー/デプロイ","継続的監査","継続的DNS","継続的暗号化"],
a:"継続的デリバリー/デプロイ"
},

{
q:"CI/CDの目的は？",
c:["開発とリリースの自動化","課金削減のみ","DNS高速化","監査削減"],
a:"開発とリリースの自動化"
},

{
q:"CodeBuildで実行される処理例は？",
c:["ユニットテスト","DNS登録","IAM削除","Route変更"],
a:"ユニットテスト"
},

{
q:"CodeDeployで実行される処理例は？",
c:["本番環境へのリリース","ログ分析","暗号化","認証"],
a:"本番環境へのリリース"
},

{
q:"CloudFormationで管理するメリットは？",
c:["構成の再現性向上","DNS不要","暗号化不要","監査不要"],
a:"構成の再現性向上"
},

{
q:"Infrastructure as Codeの略称は？",
c:["IaC","IACD","IFC","ICC"],
a:"IaC"
},

{
q:"DVA-C02で最重要なデプロイ関連サービスは？",
c:["CodeCommit・CodeBuild・CodeDeploy・CodePipeline","Route53・WAF・Shield","Athena・Glue・EMR","SNS・SQS・SES"],
a:"CodeCommit・CodeBuild・CodeDeploy・CodePipeline"
}

];