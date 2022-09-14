import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "@/main/adapters";
import { AddPatientFactory } from "@/main/factories"


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = AddPatientFactory()
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
