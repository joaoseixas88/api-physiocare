import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "../../adapters/serverless-adapter";
import { AddUserFactory } from "../../factories/controllers/add-user-factory";


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = AddUserFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
