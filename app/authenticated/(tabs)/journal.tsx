import { UseAppSelector } from '@/app/store'
import { View, Text } from 'react-native'
import ScreenLayout from '@/components/ScreenLayout'

export default function Journal() {
	const user = UseAppSelector((state) => state.user)
	return (
		<ScreenLayout>
			<View>
				<Text>Journal</Text>
			</View>
		</ScreenLayout>
	)
}