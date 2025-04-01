import ScreenLayout from '@/components/ScreenLayout'
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useRouter } from 'expo-router'
import { useRef, useState } from 'react'
import Button from '@/components/Button'
import { UseAppDispatch, UseAppSelector } from '../store'
import { setKey } from '../utils/storage'
import { signInUser } from '../actions/user'

const SignIn = () => {
  const dispatch = UseAppDispatch()
  const user = UseAppSelector((state) => state.user)
  const router = useRouter()

  const usernameFillValue = useRef(new Animated.Value(0)).current
  const passwordFillValue = useRef(new Animated.Value(0)).current

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginNotification, setLoginNotification] = useState(false)

  const fillWidth = (property: Animated.Value) => {
    return property.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%']
    })
  }

  const fillWidthInverse = (property: Animated.Value) => {
    return property.interpolate({
      inputRange: [0, 1],
      outputRange: ['100%', '0%']
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
            width: '100%',
            height: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '7%'
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
                width: fillWidth(usernameFillValue),
                backgroundColor: '#FC6C85',
                zIndex: 0
              }}
            />
            <TextInput
              onEndEditing={() => {
                if (username !== '') animateButtonColor(usernameFillValue)
              }}
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
              placeholder="Username:"
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
                if (password !== '') animateButtonColor(passwordFillValue)
              }}
              secureTextEntry={true}
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
          </View>
          {user.error ? (
            <View
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '200',
                  color: 'red'
                }}
              >
                Invalid Username or Password
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            height: '35%',
            width: '100%'
          }}
        >
          <View style={{ height: '35%' }}></View>
          <Button
            color="#FC6C85"
            onPress={async () => {
              await dispatch(signInUser(username, password))
              if (!user.error) router.push('/authenticated/(tabs)')
              else if (user.error.code === 400) {
                setLoginNotification(true)
                setUsername('')
                setPassword('')
                fillWidthInverse(usernameFillValue)
                fillWidthInverse(passwordFillValue)
              }
            }}
            loading={user.loading}
            disabled={!username || !password}
            fullWidth
          >
            Sign In
          </Button>
          <TouchableOpacity
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: 10
            }}
            onPress={() => {
              router.push('/(tabs)/SignUp')
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
                Don't have an account yet?
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '800',
                  color: '#FC6C85'
                }}
              >
                Sign Up
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
    maxWidth: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FC6C85',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default SignIn
