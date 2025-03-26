export type Error = {
    message: string
    code: number
}

export type User = {
    username: string
    email: string
    last_login: string
    date_joined: string
    is_active: boolean
    token: string
}

export type BaseUserState = {
    loading: boolean
    error?: Error
}

export type UserState = BaseUserState & {
    loggedIn: boolean
    user?: User
    token?: string
}

export type Swipable = {
    Recipe?: Recipe
    Restaurant?: Restaurant
    category?: string
    imageURL?: string
    description: string
    dateAdded: string
    name: string
}

export type Restaurant = {
    location: Location
}

export type Recipe = {
    username?: string
    ingredients?: string[]
}

export type Location = {
    city: string
    state: string
    country: string
    zip: string
    address: string
}
