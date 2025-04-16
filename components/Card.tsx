import { Swipable } from '@/app/types'
import { useEffect, useState, useMemo, useCallback } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Heart, X } from 'react-native-feather'
import { Region } from 'react-native-maps'
import Modal from 'react-native-modal'
// import { GOOGLE_MAPS_API_KEY } from '@env'
// import Snackbar from 'react-native-snackbar'
// import { NavigationContainer } from '@react-navigation/native'
// import Geolocation from '@react-native-community/geolocation'

type CardParams = {
  title: string
  body: string
  image?: string
  swipable?: Swipable
  userLocation: Region | null 
  handleOnRegionChange: (region: Region) => void
  cardSwipeLeft: () => void
  cardSwipeRight: () => void
}

export default (props: CardParams) => {

  return (
      // {true ? (
        // <Modal
        //   isVisible={GoogleMapsVisible}
        //   useNativeDriver={true}
        //   animationIn={'slideInUp'}
        //   animationOut={'slideOutDown'}
        // >
        //   <View>
        //     <Text>Modal</Text>
        //   </View>

        <View>
        </View>
        // <MapView
        //   region={{
        //     latitude: props.userLocation.latitude,
        //     longitude: props.userLocation.longitude,
        //     latitudeDelta: 0.0922,
        //     longitudeDelta: 0.0421,
        //   }}
        //   onRegionChange={(region) => {props.handleOnRegionChange(region)}}
        // >
        //   <Polyline 
        //     coordinates={[
        //       {
        //         latitude: props.userLocation? props.userLocation.latitude: 0,
        //         longitude: props.userLocation? props.userLocation.longitude: 0
        //       },
        //       {
        //         latitude: props.swipable?.restaurant?.location.latitude ?? props.userLocation.latitude,
        //         longitude: props.swipable?.restaurant?.location.longitude ?? props.userLocation.longitude
        //       }
        //     ]}
        //     strokeWidth={6}
        //     strokeColor="#000"
        //   />
        // </MapView>

        // </Modal>
      // ) : null}
    // <View style={styles.card}>
    //   <Text
    //     style={{
    //       fontSize: 36,
    //       fontFamily: 'Arial',
    //       fontWeight: '800',
    //       height: '10%'
    //     }}
    //   >
    //     {props.title}
    //   </Text>
    //   <Image
    //     style={{ width: 180, height: 180 }}
    //     source={
    //       props.image
    //         ? { uri: props.image }
    //         : require('../assets/images/react-logo.png')
    //     }
    //   />
    //   <Text
    //     style={{
    //       fontFamily: 'Arial',
    //       fontWeight: '200',
    //       height: '25%',
    //       overflow: 'hidden'
    //     }}
    //   >
    //     {props.body}
    //   </Text>
    //   {/* if restaurant, google api it, distance from user, rating, etc.*/}
    //   {/* <MapView style={{ width: '50%', height: '25%'}} followsUserLocation={true}></MapView> */}
    //   <View
    //     style={{
    //       width: '100%',
    //       height: 30,
    //       display: 'flex',
    //       flexDirection: 'row',
    //       justifyContent: 'space-between'
    //     }}
    //   >
    //     <View
    //       style={{
    //         display: 'flex',
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         width: '100%',
    //         paddingHorizontal: '10%',
    //         alignItems: 'center'
    //       }}
    //     >
    //       <TouchableOpacity
    //         onPress={() => {
    //           props.cardSwipeLeft()
    //         }}
    //       >
    //         <X color={'black'} width={35} height={35} strokeWidth={4} />
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         onPress={() => {
    //           props.cardSwipeRight()
    //         }}
    //       >
    //         <Heart
    //           color={'transparent'}
    //           fill={'red'}
    //           width={35}
    //           height={35}
    //           strokeWidth={4}
    //         />
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   <TouchableOpacity
    //     onPress={() => {
    //       setGoogleMapsVisible(true)
    //     }}
    //   >
    //     <Text style={{ color: 'blue' }}>Open in Maps</Text>
    //   </TouchableOpacity>

    // </View>
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
    backgroundColor: '#FFF',
    borderColor: 'lightgray',
    borderWidth: 1
  },
  text: {
    textAlign: 'center'
  }
})
