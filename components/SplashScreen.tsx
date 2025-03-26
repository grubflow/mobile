import { getKey } from '@/app/utils/storage'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native'
import ScreenLayout from './ScreenLayout'
import * as RNSplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'

export default function SplashScreen() {
    const router = useRouter()
    useEffect(() => {
        if (getKey('user_token') !== null) {
            setTimeout(() => {
                router.push('/authenticated/(tabs)')
            }, 350)
        }
    }, [getKey('user_token')])

    const [loaded, error] = useFonts({
        Comfortaa: require('../assets/fonts/Comfortaa-Regular.ttf'),
    })

    useEffect(() => {
        if (loaded || error) {
            RNSplashScreen.hideAsync()
        }
    }, [loaded, error])

    if (!loaded && !error){
        return null;
    }

    return (
        <ScreenLayout
        extraStyles={{
            backgroundColor: '#FC6C85',
        }}
        style={{
            backgroundColor: '#FC6C85',
        }}>
            <View style={{ gap: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ gap: '15%' }}>
                    <Image style={{ alignSelf: 'center', width: 120, height: 120 }} source={require('../assets/images/FC6C85.png')} />
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "baseline"
                    }}>
                        <Text style={{
                            fontSize: 48,
                            fontWeight: "800",
                            color: "black",
                            fontFamily: "Comfortaa",
                        }}>
                            T
                        </Text>
                        <Text style={{
                            fontSize: 42,
                            fontWeight: "800",
                            color: "black",
                            fontFamily: "Comfortaa",
                        }}>
                            ender
                        </Text>
                    </View>
                </View>
                <View style={{
                    gap: '10%'
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '900',
                        fontFamily: 'Arial',
                        color: '#FFF'
                    }}>
                        Loading data...
                    </Text>
                    <ActivityIndicator color={'#FFF'}/>
                </View>
            </View>
        </ScreenLayout>
    )
}