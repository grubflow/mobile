import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font'
import { getKey } from '../utils/storage'
import { UseAppDispatch } from '../store'
import { SET_LOGGED_IN } from '../reducers/user'
import SplashScreen from '@/components/SplashScreen'
import ScreenLayout from '@/components/ScreenLayout'
import Button from '@/components/Button'

export default function HomeScreen () {
    const dispatch = UseAppDispatch()
    const router = useRouter()
    
    if (getKey('user_token') !== null){
        dispatch({ type: SET_LOGGED_IN })
        return <SplashScreen /> 
    }
    
    const [loaded, error] = useFonts({
        Comfortaa: require('../../assets/fonts/Comfortaa-Regular.ttf'),
    })

    return (
        <ScreenLayout
            extraStyles={{
                backgroundColor: "#FFE5F4",
            }}
            style={{
                gap: '10%',
            }}
        >
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
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '75%',
            }}>
                <View style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                }}>
                    <Text style={{
                        fontWeight: '600',
                        
                    }}>
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