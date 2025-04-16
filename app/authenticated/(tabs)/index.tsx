import { Alert, Platform, Text, TouchableOpacity, View } from 'react-native'
import { ChevronDown, RotateCcw } from 'react-native-feather'
import { useEffect, useState, useRef, useCallback } from 'react'
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings
} from 'react-native-permissions'
import { UseAppDispatch, UseAppSelector } from '@/app/store'
import { Swipable } from '@/app/types'
import ScreenLayout from '@/components/ScreenLayout'
import Swiper from 'react-native-deck-swiper'
import Card from '@/components/Card'
import Geolocation, {
  GeolocationConfiguration
} from '@react-native-community/geolocation'
import { useFocusEffect } from 'expo-router'
import { setGrubTaste } from '../../actions/grub'
import { Region } from 'react-native-maps'
import { fetchLocation, requestLocationPermissions, throwLocationPermissionAlert, throwLocationServicesFailureAlert } from '@/hooks/permissions'

export const GeolocationConfig: GeolocationConfiguration = {
  skipPermissionRequests: true,
  authorizationLevel: 'auto',
  enableBackgroundLocationUpdates: false,
  locationProvider: 'playServices'
}

export default function HomeScreen() {
  const dispatch = UseAppDispatch()
  // const grubTaste = UseAppSelector((state) => state.grub.swipables)
  // const groups = UseAppSelector((state) => state)
  const swiperRef = useRef<Swiper<React.JSX.Element>>(null)
  const [grubSwiped, setGrubSwiped] = useState<Swipable[]>([])
  const [allSwiped, setAllSwiped] = useState(false)

  Geolocation.setRNConfiguration(GeolocationConfig)
  // basically just a useEffect that runs when the screen is no longer focused
  useFocusEffect(
    // avoids running the effect too often.
    useCallback(() => {
      return () => {
        // set the grubtaste when the user leaves this tab for journal, profile, etc.
        if (grubSwiped.length > 0) dispatch(setGrubTaste(grubSwiped))
      }
    }, [])
  )

  const handleSwipe = (direction: boolean, swipable: Swipable) => {
    swipable.direction = direction
    swipable.individual_rating = direction ? 5 : 0
  }

  const externHandleSwipe = (direction: boolean, swipable: Swipable) => {
    handleSwipe(direction, swipable)
    direction ? swiperRef.current?.swipeRight() : swiperRef.current?.swipeLeft()
  }

  const [userLocation, setUserLocation] = useState<Region | null>(null)

  const handleOnRegionChange = (region: Region) => {

  }


  useEffect(() => {
    try {
      requestLocationPermissions()
    }
    catch (error: any) {
      throwLocationPermissionAlert() 
      return
    }

    // try {
    //   fetchLocation()
    // }
    // catch (error: any) {
    //   throwLocationServicesFailureAlert()
    // }
  }, [])

  const baseSwipable: Swipable = {
    restaurant: {
      name: 'Restaurant Name',
      description: 'Description',
      location: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      rating: 4.5
    },
    individual_rating: 0,
    direction: undefined
  }

  const swiperData = Array.from({ length: 10 }, (_, i) => {
    return (
      <Card
        cardSwipeLeft={() => externHandleSwipe(false, baseSwipable)}
        cardSwipeRight={() => externHandleSwipe(true, baseSwipable)}
        swipable={baseSwipable}
        key={i}
        title={
          baseSwipable.restaurant
            ? baseSwipable.restaurant.name
            : (baseSwipable.recipe?.name ?? '')
        }
        body={
          baseSwipable.restaurant
            ? (baseSwipable.restaurant.description ?? '')
            : (baseSwipable.recipe?.description ?? '')
        }
        userLocation={userLocation}
        handleOnRegionChange={handleOnRegionChange}
      />
    )
  })

  return (
    <ScreenLayout>
      <View
        style={{
          width: '45%',
          top: 0,
          borderWidth: 2,
          marginHorizontal: 10,
          borderColor: '#FC6C85',
          zIndex: 1,
          borderRadius: 100,
          position: 'absolute'
        }}
      >
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: '7.5%'
          }}
        >
          <Text
            style={{
              width: '75%',
              fontSize: 12,
              fontWeight: '600'
            }}
            numberOfLines={1}
          >
            Group Name extremely long
          </Text>
          <View style={{ width: '25%', alignItems: 'flex-end' }}>
            <ChevronDown strokeWidth={1} color={'black'} width={'65%'} />
          </View>
        </TouchableOpacity>
      </View>
      {allSwiped ? (
        <View>
          <Text>Add a recipe or increase search radius.</Text>
        </View>
      ) : null}
      <Swiper
        ref={swiperRef}
        cards={[...swiperData]}
        renderCard={(card) => {
          return card
        }}
        onSwiped={(cardIndex) => {
          setGrubSwiped([...grubSwiped, swiperData[cardIndex].props.swipable]),
            console.log(JSON.stringify(grubSwiped))
        }}
        onSwipedAll={() => {
          setAllSwiped(true)
        }}
        onSwipedLeft={(card) => {
          handleSwipe(false, swiperData[card].props.swipable)
        }}
        onSwipedRight={(card) => {
          handleSwipe(true, swiperData[card].props.swipable)
        }}
        cardIndex={0}
        backgroundColor={'none'}
        cardStyle={{}}
        stackSize={3}
        animateCardOpacity={true}
      ></Swiper>
    </ScreenLayout>
  )
}
