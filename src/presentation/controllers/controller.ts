import { HttpRequest, HttpResponse } from "@/presentation/http";

export interface Controller {
	handle(params: Controller.Params): Promise<Controller.Result>;
}

export namespace Controller {
	export type Params<T = any, Y = any, Z = any> = {
		body?: T;
		headers?: any;
		pathParameters?: Y;
		queryStringParameters?: Z;
	};

	export type Result = HttpResponse;
}
