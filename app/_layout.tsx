import { Stack } from "expo-router";

export default function UnauthenticatedRoot() {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false, }}/>
        </Stack>
    )
}