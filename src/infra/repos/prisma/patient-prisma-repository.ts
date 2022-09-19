import {
	AddPatientRepository,
	FindPatientsRepository,
	GetOnePatientRepository,
	GetPatientsRepository,
} from "@/data/contracts/repos";
import { FindPatients } from "@/domain/features";
import { dbClient } from "@/presentation/helpers";

export class PatientPrismaRepository
	implements AddPatientRepository, GetPatientsRepository, GetOnePatientRepository, FindPatientsRepository
{
	
	
	async add(params: AddPatientRepository.Params): Promise<boolean> {
		const { age, id, name, price, weekDays, userId,  homecareId} = params;
		const result = await dbClient.patient.create({
			data: {
				age,
				id,
				name,
				price,
				weekDays,
				userId,
				homecareId
			},
		});

		return !!result;
	}

	async get(
		params: GetPatientsRepository.Params
	): Promise<GetPatientsRepository.Result> {
		const patients = await dbClient.patient.findMany({
			where: {
				userId: params.userId,
			},
			include: {
				attendances: true,
			},
		});
		return patients;
	}

	async getOne(params: GetOnePatientRepository.Params): Promise<GetOnePatientRepository.Result> {
		const patient = await dbClient.patient.findUnique({
			where: {
				id: params.patientId
			},
			include: {
				attendances: true
			}
		})

		if(patient){
			return patient
		}
		return undefined
	}

	async findMany(params: FindPatientsRepository.Params): Promise<FindPatientsRepository.Result> {

		const patients = await dbClient.patient.findMany({
			where: {
				userId: params.userId,
				name: {
					contains: params.name,
					mode: 'insensitive'
				},
				age: params.age,
				price: params.price,
			}		
		})
		return patients
	}
}
