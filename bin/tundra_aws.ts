#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { TundraAwsStack } from '../lib/tundra_aws-stack';

const app = new cdk.App();
new TundraAwsStack(app, 'TundraAwsStack');
