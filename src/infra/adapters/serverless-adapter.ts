import { Controller } from "@presentation/controllers";
import { serverError } from "@presentation/helpers";
import { ServerlessHttpResponse } from "@presentation/http";
import { APIGatewayProxyEventV2, Context } from "aws-lambda";
import { httpAdapter } from "./http-adapter";

export const serverlessAdapter = async (
	controller: Controller,
	event: APIGatewayProxyEventV2,
	context: Context
): Promise<ServerlessHttpResponse> => {
	try {
		const { body, headers, pathParameters, queryStringParameters, requestContext } = event
		const parsedBody = body ? JSON.parse(body) : undefined
		const response = await controller.handle({ parsedBody, headers, pathParameters, queryStringParameters, requestContext })

		return httpAdapter(response)
				
	} catch (err: any) {
		return httpAdapter(serverError())
	}
};
