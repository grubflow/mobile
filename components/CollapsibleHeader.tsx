import {
    View,
    Text,
    Animated,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const HEADER_MAX_HEIGHT = 70
const HEADER_MIN_HEIGHT = 30
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

type CollapsibleHeaderParams = {
    LargeTitle: string
    SmallTitle: string
    ScrollableContent: React.ReactElement[]
}

const CollapsibleHeader = (props: CollapsibleHeaderParams) => {
    const scrollY = new Animated.Value(0)

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    })

    const titleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 0.5, 0],
        extrapolate: 'clamp'
    })

    const smallTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0.5, 1],
        extrapolate: 'clamp'
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { height: headerHeight }]}>
                <Animated.Text
                    style={[styles.headerTitle, { opacity: titleOpacity }]}
                >
                    {props.LargeTitle}
                </Animated.Text>
            </Animated.View>

            <Animated.View
                style={[styles.smallHeader, { opacity: smallTitleOpacity }]}
            >
                <Text style={styles.smallHeaderTitle}>{props.SmallTitle}</Text>
            </Animated.View>

            <ScrollView
                style={{ marginTop: '11%', }}
                contentContainerStyle={styles.scrollContent}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                <TouchableOpacity>
                    {
                        [...Array(props.ScrollableContent.length)].map((_, index) => (
                            <TouchableOpacity key={index} style={{ padding: 10}}>
                            </TouchableOpacity>
                        ))
                    }
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    headerTitle: {
        fontSize: 24,
        color: '#FC6C85',
        fontWeight: 'bold'
    },
    smallHeader: {
        position: 'absolute',
        top: HEADER_MIN_HEIGHT - 50,
        marginVertical: '5%',
        zIndex: 2,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.25,
        width: '100%',
    },
    smallHeaderTitle: {
        marginLeft: '5%',
        marginBottom: '5%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FC6C85',
    },
    scrollContent: { marginTop: '5%',},
    content: { backgroundColor: '#f8f8f8', },
})

export default CollapsibleHeader
