import { UseAppSelector } from '@/app/store'
import { View, Text } from 'react-native'
import CollapsibleHeader from '@/components/CollapsibleHeader'
import ScreenLayout from '@/components/ScreenLayout'
import ShortCard from '@/components/ShortCard'

export default function Journal() {
	const user = UseAppSelector((state) => state.user)

	return (
		<ScreenLayout>
			<View style={{
				width: '100%',
				height: '100%',
			}}>
				<CollapsibleHeader
					LargeTitle={'Group Name'}
					SmallTitle={'Group Name'}
					ScrollableContent={
						[...Array(20)].map((_, index) => (
							<ShortCard
								image={require('../../../assets/images/splash-icon.png')}
								name={'McDonalds'}
								rating={5.0}
								key={index}
							/>
						))

					}
				/>
			</View>
		</ScreenLayout>
	)
}