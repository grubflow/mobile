import { View, Text, Image } from 'react-native'

type ShortCardProps = {
    image: Image
    name: string
    rating: number
}

export default function ShortCard(props: ShortCardProps) {
    return (
        <View
            style={{
                width: '90%',
                height: 100,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: 'black',
                display: 'flex',
                marginVertical: '1.5%'
            }}
        >
            <View
                style={{
                    width: '30%',
                    height: '100%',
                    padding: 10,
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
            >
                <Image
                    style={{ width: 80, height: 80 }}
                    source={require('../assets/images/react-logo.png')}
                />
                <Text>Short Card</Text>
            </View>
        </View>
    )
}
