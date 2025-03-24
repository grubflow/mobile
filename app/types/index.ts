export type Error = {
    message: string,
    code: number,
}

export type User = {
    username: string,
    email: string,
    last_login: string,
    date_joined: string,
    is_active: boolean
}

export type BaseUserState = {
    loading: boolean,
    error?: Error,
}

export type UserState = BaseUserState & {
    loggedIn: boolean,
    user?: User,
}

export type Swipable = {
    
}