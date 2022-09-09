export type HttpRequest<T = any> = T


export type HttpResponse<T = any>  = {
	statusCode: number
	data: T
}



export type ServerlessHttpResponse = {
	statusCode: number
	body: string
	headers: {
		[key: string]: string
	}
}