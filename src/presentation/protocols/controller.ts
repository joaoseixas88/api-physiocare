import { HttpResponse } from "./http";


export interface Controller {
	handle(params: Controller.Params): Promise<Controller.Result>;
}

export namespace Controller {
	export type Params<T = any> = T

	export type Result = HttpResponse;
}
