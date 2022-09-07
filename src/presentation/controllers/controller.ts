import { HttpRequest, HttpResponse } from "@presentation/http";

export interface Controller {
	handle(params: HttpRequest): Promise<HttpResponse>;
}

// export class Controller {
// 	async handle(params: HttpRequest): Promise<HttpResponse>{}
// }
