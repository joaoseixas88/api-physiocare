import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "@/main/adapters";
import { AddAttendanceFactory } from "@/main/factories"

export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = AddAttendanceFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
