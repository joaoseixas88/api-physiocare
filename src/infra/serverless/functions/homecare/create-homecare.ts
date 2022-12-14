import { serverlessAdapter } from "@/main/adapters";
import { makeCreateHomeCareFactory } from "@/main/factories";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeCreateHomeCareFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
