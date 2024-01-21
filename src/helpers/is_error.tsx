export function isError(error: unknown): error is Error {
	return (error as Error).message !== undefined;
}