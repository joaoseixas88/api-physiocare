const config = {
	dbUrl: process.env.DATABASE_URL || "localhost",
	jwt: process.env.JWT_SECRET || 'secret'
};

export { config };
