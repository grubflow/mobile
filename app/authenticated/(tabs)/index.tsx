import { Text, TouchableOpacity, View } from 'react-native'
import { ChevronDown } from 'react-native-feather'
import CollapsibleHeader from '@/components/CollapsibleHeader'
import ScreenLayout from '@/components/ScreenLayout'
// import { } from 'react-native-deck-swiper'

export default function HomeScreen() {
	const scrollContent = [...Array(20)].map((_, index) => (
		<Text key={index} >
			Hello World
		</Text>
	  ))

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
			<View style={{ marginTop: '10%', width: '100%', height: '90%' }}>
				<CollapsibleHeader
					LargeTitle="Home"
					SmallTitle="Home"
					ScrollableContent={scrollContent}
				/>
			</View>
			<View>
				<Text>Home</Text>
			</View>
		</ScreenLayout>
	)
}
