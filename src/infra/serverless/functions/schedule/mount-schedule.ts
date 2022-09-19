import { serverlessAdapter } from "@/main/adapters";
import { makeMountScheduleFactory } from "@/main/factories/controllers/schedule/mount-schedule-factory";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeMountScheduleFactory()
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
