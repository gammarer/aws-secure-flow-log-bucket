import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  typescriptVersion: '5.0.4',
  defaultReleaseBranch: 'main',
  name: '@yicr/aws-secure-flow-log-bucket',
  description: 'Specific AWS VPC FlowLog Bucket',
  keywords: ['aws', 'cdk', 'aws-cdk', 's3', 'bucket', 'vpc', 'flow'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-secure-flow-log-bucket.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@yicr/aws-secure-log-bucket',
  ],
  peerDeps: [
    '@yicr/aws-secure-log-bucket',
    '@yicr/aws-secure-bucket',
  ],
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();