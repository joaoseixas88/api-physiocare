import { ServerError } from "@presentation/errors/server-error";
import { HttpRequest, HttpResponse } from "@presentation/http";

export const ok = (data: HttpRequest): HttpResponse => ({
	statusCode: 200,
	data
});


export const serverError = (): HttpResponse => ({
	statusCode: 500,
	data: new ServerError()
})
