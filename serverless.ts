import { attendance } from "@/infra/serverless/routes/attendance";
import { patient } from "@/infra/serverless/routes/patient";
import type { AWS } from "@serverless/typescript";
import { account } from "src/infra/serverless/routes/account";

const serverlessConfiguration: AWS = {
	service: "api-physiocare",
	frameworkVersion: "3",
	plugins: [
		"serverless-offline",
		"serverless-webpack",
		"serverless-webpack-prisma",
		"serverless-dotenv-plugin",
	],
	provider: {
		name: "aws",
		runtime: "nodejs14.x",	
		// apiGateway: {
		// 	minimumCompressionSize: 1024,
		// 	shouldStartNameWithService: true,
		// },
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
			NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
		},
	},
	// import the function via paths
	functions: {
		...account,		
		...patient,
		...attendance
	},
	package: {
		patterns: [
			"!node_modules/.prisma/client/libquery_engine-*",
			"node_modules/.prisma/client/libquery_engine-rhel-*",
			"!node_modules/prisma/libquery_engine-*",
			"!node_modules/@prisma/engines/**",
		],
	},
	custom: {
		webpack: {
			webpackConfig: "webpack.config.js",
			includeModules: true,
			packager: "npm",
			packagerOptions: {
				scripts: ["prisma generate"],
			},
		},
	},
};

module.exports = serverlessConfiguration;
