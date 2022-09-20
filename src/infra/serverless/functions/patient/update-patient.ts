import { serverlessAdapter } from "@/main/adapters";
import { makeUpdatePatientFactory } from "@/main/factories";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeUpdatePatientFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
