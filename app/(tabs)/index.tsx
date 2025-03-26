import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import ScreenLayout from '@/components/ScreenLayout'
import Button from '@/components/Button'

SplashScreen.preventAutoHideAsync()

export default function HomeScreen() {
    const router = useRouter()
    const [loaded, error] = useFonts({
        Comfortaa: require('../../assets/fonts/Comfortaa-Regular.ttf')
    })

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync()
        }
    }, [loaded, error])

    if (!loaded && !error) {
        return null
    }

    return (
        <ScreenLayout
            extraStyles={{
                backgroundColor: '#FFE5F4'
            }}
            style={{
                gap: '10%'
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'baseline'
                }}
            >
                <Text
                    style={{
                        fontSize: 48,
                        fontWeight: '800',
                        color: 'black',
                        fontFamily: 'Comfortaa'
                    }}
                >
                    T
                </Text>
                <Text
                    style={{
                        fontSize: 42,
                        fontWeight: '800',
                        color: 'black',
                        fontFamily: 'Comfortaa'
                    }}
                >
                    ender
                </Text>
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '75%'
                }}
            >
                <View
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10
                    }}
                >
                    <Text
                        style={{
                            fontWeight: '600'
                        }}
                    >
                        An alternative to arguing.
                    </Text>
                    <Button
                        color="#FC6C85"
                        onPress={() => router.push('/(tabs)/SignUp')}
                        fullWidth
                    >
                        Get Started
                    </Button>
                </View>
            </View>
        </ScreenLayout>
    )
}
