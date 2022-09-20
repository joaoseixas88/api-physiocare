import { serverlessAdapter } from "@/main/adapters";
import { makeGetOneHomeCareFactory } from "@/main/factories";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeGetOneHomeCareFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
