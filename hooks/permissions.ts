import { PERMISSIONS, RESULTS, request, openSettings } from "react-native-permissions"
import { Alert, Platform } from "react-native"
import { UseAppDispatch, UseAppSelector } from "@/app/store"
import { SET_USER_LOCATION_FAILURE, SET_USER_LOCATION_REQUEST, SET_USER_LOCATION_SUCCESS } from "@/app/reducers/user"
import Geolocation from "@react-native-community/geolocation"

const permission =
    Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION

export const requestLocationPermissions = async () => {
    const requestStatus = await request(permission)

    if (requestStatus !== RESULTS.GRANTED)
        throw new Error('Location permission not granted')

}

// fetches the user's location if the user has granted the application permission, else throws an error
export const fetchLocation = () => {
    const dispatch = UseAppDispatch()
    dispatch({ type: SET_USER_LOCATION_REQUEST })
    const userLocationPermission = UseAppSelector((state) => state.user.locationPermission)

    if (!userLocationPermission){
        dispatch({ type: SET_USER_LOCATION_FAILURE, payload: { message: 'Location permission not granted', code: 500 }})
        throw new Error('Could not request location services')
    }

    Geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        console.log('User Location: ', position.coords)
        dispatch({ 
            type: SET_USER_LOCATION_SUCCESS, 
            payload: {
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        })
    },
        (error: any) => {
            dispatch({ type: SET_USER_LOCATION_FAILURE, payload: error})
            throw new Error('Could not request location services')
        },
        { enableHighAccuracy: true }
    )
}

export const throwLocationPermissionAlert = () => {
    return (
        Alert.alert(
            'GrubFlow Location Services',
            'GrubFlow requires location services to search for nearby restaurants. Please enable location services in your device settings.',
            [
                {
                    text: 'Limit Functionality',
                    style: 'destructive'
                },
                {
                    text: 'Enable Location Services',
                    style: 'default',
                    onPress: () => {
                        openSettings()
                    }
                }
            ]
        )
    )
}

export const throwLocationServicesFailureAlert = () => {
    return (
        Alert.alert(
            'GrubFlow Location Services',
            'GrubFlow could not access your location. Please close the app and try again.',
            [
                {
                    text: 'Cancel',
                    style: 'destructive'
                }
            ]
        )
    )
}