export interface Tokens {
	kind: string;
	accessToken: string;
	tokenSecret?: string;
}

export interface IUser {
	email: string;
	password: string;
}

export interface IUserRegsiter extends IUser {
	passwordConfirm: string;
	name: string
}

export default IUser;