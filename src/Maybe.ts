export const none = { None: 'None' } as const;
type Some<T> = {
	Some: T;
	None?: never;
};
export const some = <T>(value: T): Some<T> => ({
	Some: value
});
export type Maybe<T> = Some<T> | typeof none;
