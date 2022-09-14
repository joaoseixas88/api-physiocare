import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "../../../main/adapters/serverless-adapter";
import { makeGetAttendancesFactory } from '../../../main/factories/controllers/attendance/get-attendances-factory';


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeGetAttendancesFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
