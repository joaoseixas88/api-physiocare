import { HttpResponse, ServerlessHttpResponse } from "@/presentation/http";

export const httpAdapter = (
	httpResponse: HttpResponse
): ServerlessHttpResponse => {
	let data: any

	if (httpResponse.data instanceof Error) {
		data = {
			statusCode: httpResponse.statusCode,
			error: true,
			message: httpResponse.data.message, 
		}
	} else {
		data = {
			statusCode: httpResponse.statusCode,
			data: httpResponse.data,
			error: false
		}
	}
	
	return {
		statusCode: httpResponse.statusCode,
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" },
	};
};
