import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "../../../main/adapters/serverless-adapter";
import { DeleteAttendanceFactory } from '../../../main/factories/controllers/delete-attendance-factory';


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = DeleteAttendanceFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
