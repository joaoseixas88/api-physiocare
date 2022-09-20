import { UpdatePatient } from "@/domain/features";

export interface DbUpdatePatient {
	update(params: DbUpdatePatient.Params): Promise<DbUpdatePatient>;
}

export namespace DbUpdatePatient {
	export type Params = UpdatePatient.Params;
	export type Result = boolean | Error;
}
