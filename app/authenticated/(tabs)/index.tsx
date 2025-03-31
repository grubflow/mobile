import { Alert, Platform, Text, TouchableOpacity, View } from 'react-native'
import { ChevronDown, RotateCcw } from 'react-native-feather'
import { useEffect, useState } from 'react'
import ScreenLayout from '@/components/ScreenLayout'
import Swiper from 'react-native-deck-swiper'
import Card from '@/components/Card'

export default function HomeScreen() {
	const swiperData = Array.from({ length: 10 }, (_, i) => (
		<Card
			key={i}
			title={`Card ${i + 1}`}
			body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nisl eget, fringilla nunc. Nulla facilisi. Nullam nec nunc nec nunc."
		/>
	));

	const [numCardsSwiped, setNumCardsSwiped] = useState(0)
	const [allSwiped, setAllSwiped] = useState(false)
	const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)

	// const requestLocationPermissions = async () => {
	// 	if (Platform.OS === 'ios') {
	// 		const status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
	// 		if (status === RESULTS.DENIED) {
	// 			const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
	// 			console.log(result === RESULTS.GRANTED)
	// 		}
	// 	}
	// }		

	// useEffect(() => {
	// 	requestLocationPermissions()
	// }, [])

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
						<Text>
							Add a recipe or increase search radius.
						</Text>
					</View>
				) : null
			}
			<Swiper
				cards={[
					...swiperData
				]}

				renderCard={(card) => {
					return card
				}}
				onSwiped={(cardIndex) => { }}
				onSwipedAll={() => { setAllSwiped(true) }}
				cardIndex={0}
				backgroundColor={'none'}
				cardStyle={{}}
				stackSize={3}>
			</Swiper>
			<View style={{
				zIndex: 1,
				width: '100%',
				height: '82.5%',
				paddingLeft: '5%',
				position: 'absolute',
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'flex-end',
			}}>
				<View style={{
					borderRadius: 100,
					borderWidth: 1,
					width: 50,
					height: 50,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<RotateCcw
						color={'black'}
						width={25}
						strokeWidth={1}
					></RotateCcw>
				</View>
			</View>
		</ScreenLayout>
	)
}
