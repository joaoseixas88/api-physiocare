import { makeSigninByEmailFactory } from "@/main/factories";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "@/main/adapters";


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeSigninByEmailFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
