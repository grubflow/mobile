import { SplashScreen, useRouter } from 'expo-router'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Animated,
    Easing,
    TouchableOpacity
} from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { Eye } from 'react-native-feather'
import { useFonts } from 'expo-font'
import Button from '@/components/Button'
import ScreenLayout from '@/components/ScreenLayout'
import PasswordRequirements from '@/components/PasswordRequirements'
import { signUpUser } from '../actions/user'
import { UseAppDispatch, UseAppSelector } from '../store'

const SignUp = () => {
    const dispatch = UseAppDispatch()
    const router = useRouter()
    const [loaded, error] = useFonts({
        Comfortaa: require('../../assets/fonts/Comfortaa-Regular.ttf')
    })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [showPasswordsDontMatch, setShowPasswordsDontMatch] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [registerNotification, setRegisterNotification] = useState(false)

    const emailFillValue = useRef(new Animated.Value(0)).current
    const passwordFillValue = useRef(new Animated.Value(0)).current
    const confirmPasswordFillValue = useRef(new Animated.Value(0)).current
    const displayNameFillValue = useRef(new Animated.Value(0)).current

    // const emailFillWidth = emailFillValue.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ['0%', '100%'],
    // })

    const fillWidth = (property: Animated.Value) => {
        return property.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%']
        })
    }

    const animateButtonColor = (property: Animated.Value) => {
        Animated.timing(property, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.out(Easing.cubic)
        }).start()
    }

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync()
        }
    }, [loaded, error])

    if (!loaded && !error) {
        return null
    }

    const user = UseAppSelector((state) => state.user)

    return (
        <ScreenLayout>
            <View
                style={{
                    width: '75%',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        height: '25%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
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
                        width: '90%',
                        height: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={[styles.inputButton, { position: 'relative' }]}
                    >
                        <Animated.View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                width: fillWidth(emailFillValue),
                                backgroundColor: '#FC6C85',
                                zIndex: 0
                            }}
                        />
                        <TextInput
                            onEndEditing={() => {
                                if (email !== '')
                                    animateButtonColor(emailFillValue)
                            }}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email:"
                            placeholderTextColor="#333"
                            style={{
                                padding: 10,
                                width: '100%',
                                zIndex: 1,
                                backgroundColor: 'transparent'
                            }}
                        />
                    </View>
                    {registerNotification ? (
                        <Text
                            style={{
                                fontSize: 11,
                                color: 'red',
                                alignSelf: 'center',
                                marginBottom: -10,
                                marginTop: 5
                            }}
                        >
                            Email is already in use.
                        </Text>
                    ) : null}
                    <View
                        style={[
                            styles.inputButton,
                            { position: 'relative', overflow: 'hidden' }
                        ]}
                    >
                        <Animated.View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                width: fillWidth(passwordFillValue),
                                backgroundColor: '#FC6C85',
                                zIndex: 0
                            }}
                        />
                        <TextInput
                            onEndEditing={() => {
                                if (password !== '')
                                    animateButtonColor(passwordFillValue)
                            }}
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Password:"
                            placeholderTextColor="#333"
                            style={{
                                padding: 10,
                                width: '85%',
                                zIndex: 1,
                                backgroundColor: 'transparent'
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '15%',
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10
                            }}
                        >
                            {password ? (
                                <Eye
                                    color={'black'}
                                    strokeWidth={1}
                                    width={20}
                                ></Eye>
                            ) : null}
                            <Text style={{ fontSize: 11 }}>
                                {password
                                    ? !showPassword
                                        ? 'show'
                                        : 'hide'
                                    : null}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {showPasswordsDontMatch ? (
                        <Text
                            style={{
                                fontSize: 11,
                                color: 'red'
                            }}
                        >
                            Passwords do not match
                        </Text>
                    ) : null}
                    <View
                        style={[
                            styles.inputButton,
                            { position: 'relative', overflow: 'hidden' }
                        ]}
                    >
                        <Animated.View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                width: fillWidth(confirmPasswordFillValue),
                                backgroundColor: '#FC6C85',
                                zIndex: 0
                            }}
                        />
                        <TextInput
                            onEndEditing={() => {
                                if (confirmPassword !== '')
                                    animateButtonColor(
                                        confirmPasswordFillValue
                                    ),
                                        setShowPasswordsDontMatch(
                                            password !== confirmPassword
                                        )
                            }}
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Confirm Password:"
                            placeholderTextColor="#333"
                            style={{
                                padding: 10,
                                width: '100%',
                                zIndex: 1,
                                backgroundColor: 'transparent'
                            }}
                        />
                    </View>
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={[
                                styles.inputButton,
                                { position: 'relative', overflow: 'hidden' }
                            ]}
                        >
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    width: fillWidth(displayNameFillValue),
                                    backgroundColor: '#FC6C85',
                                    zIndex: 0
                                }}
                            />
                            <TextInput
                                onEndEditing={() => {
                                    if (displayName !== '')
                                        animateButtonColor(displayNameFillValue)
                                }}
                                autoCapitalize="none"
                                value={displayName}
                                onChangeText={setDisplayName}
                                placeholder="Display Name (Optional):"
                                placeholderTextColor="#333"
                                style={{
                                    padding: 10,
                                    width: '100%',
                                    zIndex: 1,
                                    backgroundColor: 'transparent'
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                fontSize: 11,
                                paddingTop: 5
                            }}
                        >
                            Display Name must be less than 20 characters
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        height: '35%',
                        width: '100%'
                    }}
                >
                    <View
                        style={{
                            height: '35%'
                        }}
                    >
                        <PasswordRequirements password={password} />
                    </View>
                    <Button
                        color="#FC6C85"
                        onPress={async () => {
                            await dispatch(
                                signUpUser(email, password, displayName)
                            )
                            if (!user.error)
                                router.push('/authenticated/(tabs)')
                            else if (user.error?.code === 400)
                                setRegisterNotification(true)
                        }}
                        loading={false}
                        fullWidth
                        disabled={
                            !email ||
                            !email.includes('@') ||
                            !password ||
                            !confirmPassword ||
                            password !== confirmPassword ||
                            password.length < 8 ||
                            !password.match(/[^A-Za-z0-9]/) ||
                            !password.match(/[A-Z]/) ||
                            !password.match(/[0-9]/)
                        }
                    >
                        Sign Up
                    </Button>
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 10
                        }}
                        onPress={() => {
                            router.push('/(tabs)/SignIn')
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 5
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '200'
                                }}
                            >
                                Already have an account?
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '800',
                                    color: '#FC6C85'
                                }}
                            >
                                Sign In
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    inputButton: {
        marginTop: '7%',
        maxWidth: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FC6C85',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default SignUp
