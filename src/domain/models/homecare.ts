import { Patient } from "@/domain/models";

export type HomeCare = {
	id: string;
	name: string;
	userId: string;
	price?: number;
	created_at: Date;
	patients?: Patient[];
};
