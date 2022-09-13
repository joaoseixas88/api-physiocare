import { SigninByEmailFactory } from "@/main/factories/controllers/signin-by-email";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "../../../main/adapters/serverless-adapter";


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = SigninByEmailFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
