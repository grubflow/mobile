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
    logged_in: boolean
    user?: User
    token?: string
}

export type Swipable = {
    restaurant?: GoogleMapsRestaurant 
    recipe?: UserRecipe
    individual_rating: number
    direction: boolean
}

export type GoogleMapsRestaurant = {
    name: string
    description?: string
    location: Location
    rating: number
}

export type UserRecipe = {
    name: string
    username: string
    image?: string
    description: string
    ingredients?: string[]
    steps?: string[]
}

export type Location = {
    city: string
    state: string
    country: string
    zip: string
    address: string
}

export type Group = {
    group_name: string
    group_size: number
    max_capacity: number
    owner_username: string
}

export type GroupInvite = {
    receiver_username :string
    sender_username: string
    sender_image: string
    group_size: number
    max_capacity: number
}