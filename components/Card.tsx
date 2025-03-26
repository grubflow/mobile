import { Swipable, User } from '@/app/types'
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import { Check, X } from 'react-native-feather'

type CardParams = {
    title: string,
    body: string,
    swipableParams: Swipable
}

export default (
    props: CardParams
) => {
    return (
        <View style={{
            width: '85%',
            height: '90%',
            backgroundColor: '#FFF',
            borderRadius: 10,
            margin: '5%',
            display: 'flex',
            alignItems: 'center',
        }}>
            <View>
                <Text>
                    {props.title} 
                </Text>
            </View>
            <Text>
                {props.body} 
            </Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <TouchableOpacity style={{
                    height: 25,
                    width: 25,
                    borderRadius: '100%',
                    backgroundColor: 'red',
                }}>
                    <X></X>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 25,
                    width: 25,
                    borderRadius: '100%',
                    backgroundColor: 'green',
                }}>
                    <Check></Check>
                </TouchableOpacity>
            </View>
        </View>
    )
}