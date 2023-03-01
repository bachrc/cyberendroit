type ResultError = {
	Ok?: never;
	error: Error;
};
export const error = (error: Error): ResultError => ({
	error
});

type Ok<T> = {
	ok: T;
	error?: never;
};
export const ok = <T>(value: T): Ok<T> => ({
	ok: value
});

export type Result<T> = Ok<T> | ResultError;
