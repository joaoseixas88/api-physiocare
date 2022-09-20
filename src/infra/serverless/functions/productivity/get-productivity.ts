import { serverlessAdapter } from "@/main/adapters";
import { makeGetProductivityFactory } from "@/main/factories";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeGetProductivityFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
