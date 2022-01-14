export default class UserAuth {
    authenticated: boolean;
    message: string;
    user: user;
    authenticationToken: string;
}

interface roles {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

class user {
    userName: string;
    name: string;
    lastName: string;
    email: string;
    roles: roles;
}
