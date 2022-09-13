import { GetOnePatientFactory } from "@/main/factories/controllers/get-one-patient-factory";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { serverlessAdapter } from "../../../main/adapters/serverless-adapter";


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = GetOnePatientFactory();
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
