import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
	service: "api-physiocare",
	frameworkVersion: "3",
	plugins: [
		"serverless-offline",
		"serverless-webpack",
		"serverless-plugin-typescript",
	],
	provider: {
		name: "aws",
		runtime: "nodejs14.x",
		apiGateway: {
			minimumCompressionSize: 1024,
			shouldStartNameWithService: true,
		},
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
			NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
		},
	},
	// import the function via paths
	functions: {},
	package: { individually: true },
	custom: {
		webpack: {
			webpackConfig: "webpack.config.js",
			includeModules: false,
			packager: "npm",
			excludeFiles: "tests/**/*.spec.ts",
		},
	},
};

module.exports = serverlessConfiguration;
