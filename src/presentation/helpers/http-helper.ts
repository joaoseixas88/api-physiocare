import { ServerError } from "@/presentation/errors/server-error";
import { HttpResponse, HttpRequest } from "@/presentation/protocols";
import { NotAuthorizedException } from "../errors/not-authorized-error";

export const ok = (data?: HttpRequest): HttpResponse => ({
	statusCode: 200,
	data,
});



export const badRequest = (error?: Error | string): HttpResponse => {
	if (error instanceof Error) {
		return {
			statusCode: 400,
			data: error ?? new Error("Something went wrong"),
		};
	} else {
		return {
			statusCode: 400,
			data: new Error(error)
		};
	}
};

export const notAuthorized = (): HttpResponse => {
	return {
		statusCode: 401,
		data: new NotAuthorizedException()
	}
}

export const serverError = (): HttpResponse => ({
	statusCode: 500,
	data: new ServerError(),
});
