import { UuidGenerator } from "@/data/contracts/cryptography/uuid-generator";
import { v4 as uuidV4} from "uuid";

export class UuidAdapter implements UuidGenerator {	
	generate(): string {
		const id = uuidV4()
		return id;
	}
}


