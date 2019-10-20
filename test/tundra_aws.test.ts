import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import TundraAws = require('../lib/tundra_aws-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new TundraAws.TundraAwsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});