import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "@/main/adapters";
import { makeDeleteAttendanceFactory } from "@/main/factories";

export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeDeleteAttendanceFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
