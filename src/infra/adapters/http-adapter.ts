import { HttpResponse, ServerlessHttpResponse } from "@presentation/http";

export const httpAdapter = (
	httpResponse: HttpResponse
): ServerlessHttpResponse => ({
	statusCode: httpResponse.statusCode,
	body: JSON.stringify(httpResponse.data),
	headers: { 'Content-Type': 'application/json' }
});
