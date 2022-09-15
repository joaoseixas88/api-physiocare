import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "@/main/adapters";
import { makeAddUserFactory } from "@/main/factories"

export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeAddUserFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
