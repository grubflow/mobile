import { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Check, X } from 'react-native-feather'
import MapView from 'react-native-maps'

type CardParams = {
    title: string
    body: string
    image?: string
}

export default (props: CardParams) => {
    const [location, setLocation] = useState(null)

    return (
        <View
            style={styles.card}
        >
            <Text style={{ fontSize: 36, fontFamily: 'Arial', fontWeight: '800', height: '10%'}}>{props.title}</Text>
            <Image style={{ width: 180, height: 180 }} source={require('../assets/images/react-logo.png')}/>
            <Text style={{ fontFamily: 'Arial', fontWeight: '200', height: '25%', overflow: 'hidden' }}>{props.body}</Text>
            {/* if restaurant, google api it, distance from user, rating, etc.*/}
            {/* <MapView style={{ width: '50%', height: '25%'}} followsUserLocation={true}></MapView> */}
            <View
                style={{
                    width: '100%',
                    height: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 65,
                        width: 65,
                        borderRadius: '100%',
                        backgroundColor: 'red'
                    }}
                >
                    <X color={'#FFF'} strokeWidth={4}></X>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 65,
                        width: 65,
                        borderRadius: '100%',
                        backgroundColor: 'green'
                    }}
                >
                    <Check color={'#FFF'} strokeWidth={4}></Check>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'transparent'
  },
  card: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderRadius: 25,
    backgroundColor: "#FFF",
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  text: {
    textAlign: "center",
  }
})
