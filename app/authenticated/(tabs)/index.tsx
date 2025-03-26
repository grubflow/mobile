import { Text, TouchableOpacity, View } from 'react-native'
import { ChevronDown } from 'react-native-feather'
import { useEffect, useState } from 'react'
import ScreenLayout from '@/components/ScreenLayout'
import Swiper from 'react-native-deck-swiper'
import Card from '@/components/Card'

export default function HomeScreen() {

  const swiperData = [...Array(10).map((_, i) => {
    return (
      <Card
        key={i}
        title={`Card ${i}`}
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nisl eget, fringilla nunc. Nulla facilisi. Nullam nec nunc nec nunc.'
      >
      </Card>
    )
  })]
  const [numCardsSwiped, setNumCardsSwiped] = useState(0)
  const [allSwiped, setAllSwiped] = useState(false)

  useEffect(() => {

  }, [])

  return (
    <ScreenLayout
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
            <ChevronDown
              strokeWidth={1}
              color={'black'}
              width={'65%'}
            />
          </View>
        </TouchableOpacity>
      </View>
      {
        allSwiped ? (
          <View>
            <Text>Finished</Text>
          </View>
        ) : null
      }
      <Swiper
        cards={[
          <Card 
            title='Card 1' 
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nisl eget, fringilla nunc. Nulla facilisi. Nullam nec nunc nec nunc.' />
        ]}
        renderCard={(card) => {
          return card
        }} 
        onSwiped={(cardIndex) => { console.log(cardIndex) }}
        onSwipedAll={() => { setAllSwiped(true) }}
        cardIndex={0}
        backgroundColor={'none'}
        cardStyle={{}}
        stackSize={3}>
      </Swiper>
    </ScreenLayout>
  )
}
