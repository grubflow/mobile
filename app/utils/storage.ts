import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

export const getKey = async (key: string) => {
    return await ReactNativeAsyncStorage.getItem(key)
}

export const setKey = async (key: string, value?: string) => {
    return await ReactNativeAsyncStorage.setItem(key, value ?? 'true')
}

export const removeKey = async (key: string) => {
    return await ReactNativeAsyncStorage.removeItem(key)
}