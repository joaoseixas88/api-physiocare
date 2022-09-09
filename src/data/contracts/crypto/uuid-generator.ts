import { v4 as uuidV4} from "uuid";


export class UuidGenerator {	
	generate(): string {
		const id = uuidV4()
		return id;
	}
}


