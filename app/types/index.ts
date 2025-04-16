import { Region } from "react-native-maps"

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
  
  export type BaseState = {
    loading: boolean
    error?: Error
  }
  
  export type UserState = BaseState & {
    locationPermission?: boolean 
    location: Region | null
    logged_in: boolean
    user?: User
    token?: string
  }
  
  export type Swipable = {
    restaurant?: GoogleMapsRestaurant
    recipe?: UserRecipe
    individual_rating: number
    direction?: boolean
  }
  
  export type GoogleMapsRestaurant = {
    name: string
    description?: string
    location: Region 
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
  
  export type Group = {
    group_name: string
    group_size: number
    max_capacity: number
    owner_username: string
  }
  
  export type GroupInvite = {
    receiver_username: string
    sender_username: string
    sender_image: string
    group_size: number
    max_capacity: number
  }
  
  export type GroupState = BaseState & {
    groups: Group[]
    invites: GroupInvite[]
  }
  
  export type GrubState = BaseState & {
    swipables: Swipable[]
  }
  