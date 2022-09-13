import { GetPatientsFactory } from "@/main/factories/controllers/get-patients-factory";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "../../../main/adapters/serverless-adapter";


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = GetPatientsFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
