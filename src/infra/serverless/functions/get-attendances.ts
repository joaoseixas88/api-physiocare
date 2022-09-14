import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "../../../main/adapters/serverless-adapter";
import { GetAttendancesFactory } from '../../../main/factories/controllers/get-attendances-factory';


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = GetAttendancesFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
