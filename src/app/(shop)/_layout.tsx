import { StyleSheet } from 'react-native';
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={14} {...props} style={{ color: '#1BC464' }} />;
}

export default function TabsLayout() {
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#1BC464',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: { fontSize: 16 },
                    tabBarStyle: {
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        paddingTop: 10
                    },
                    headerShown: false
                }}
            >
                <Tabs.Screen
                    name='index'
                    options={{
                        title: 'shop',
                        tabBarIcon(props) {
                            return <TabBarIcon {...props} name='shopping-cart' />
                        }
                    }} />

                <Tabs.Screen
                    name='orders'
                    options={{
                        title: 'orders',
                        tabBarIcon(props) {
                            return <TabBarIcon {...props} name='book' />
                        }
                    }} />
            </Tabs>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
})