import { HttpResponse, HttpRequest } from "@/presentation/protocols";
import { NotFoundException, NotAuthorizedException, ServerError } from '@/presentation/errors';

export const ok = (data?: HttpRequest): HttpResponse => ({
	statusCode: 200,
	data,
});

export const created = (data?: HttpRequest): HttpResponse => ({
	statusCode: 201,
	data
})

export const notFound = (error: Error): HttpResponse => ({ 
 	statusCode: 404,
	data: error
})


export const badRequest = (error?: Error | string): HttpResponse => {
	if (error instanceof Error) {
		if(error.message === 'Not authorized') return notAuthorized()	
		if(error.message.includes('not found'))	return notFound(error)
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
