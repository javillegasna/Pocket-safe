type Options<T> = {
	queryFn: {
		(): Promise<T>;
	};
	serverErrorMessage?: string;
	isProtected?: boolean;
};

export async function executeQuery<T>({
	queryFn,
	serverErrorMessage = "Error executing query",
	isProtected = true,
}: Options<T>) {
	try {
		if (isProtected) {
            throw new Error("Not authorized");
		}
		return await queryFn();
	} catch (error) {
		console.error(serverErrorMessage, error);
		return null;
	}
}