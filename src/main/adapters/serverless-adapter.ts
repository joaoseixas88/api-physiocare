import { authorizer } from "@/infra/serverless/security/auth";
import { Controller } from "@/presentation/controllers";
import { badRequest, serverError } from "@/presentation/helpers";
import { ServerlessHttpResponse } from "@/presentation/protocols";
import { APIGatewayProxyEventV2, Context } from "aws-lambda";
import { httpAdapter } from "./http-adapter";

export const serverlessAdapter = async (
	controller: Controller,
	event: APIGatewayProxyEventV2,
	context: Context
): Promise<ServerlessHttpResponse> => {
	try {
		const {
			body,
			headers,
			pathParameters,
			queryStringParameters,
			requestContext,
		} = event;
		const parsedBody = body ? JSON.parse(body) : undefined;
		let params: any = {};

		params = {
			...parsedBody,
			...pathParameters,
			...queryStringParameters,
		};
		params.userId = undefined
		const authorization = headers.authorization;
		if (authorization) {
			const auth = await authorizer(authorization);
			const userId = auth?.userId;
			if (!userId) {
				return httpAdapter(badRequest(auth?.response));
			}
			params.userId = userId;
		}
		const response = await controller.handle(params);

		return httpAdapter(response);
	} catch (err: any) {
		console.log(err);
		return httpAdapter(serverError());
	}
};
