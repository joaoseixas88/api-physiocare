import { serverlessAdapter } from "@/main/adapters";
import { makeFindPatientsFactory } from "@/main/factories/controllers/patient/find-patients-factory";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";


export const handle: APIGatewayProxyHandlerV2 = async (event, context) => {
	const controller = makeFindPatientsFactory()
	const adapter = await serverlessAdapter(controller, event, context);
	return adapter;
};
