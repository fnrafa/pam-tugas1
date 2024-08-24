import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';

function App(): React.JSX.Element {
    const systemColorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

    useEffect(() => {
        const getTheme = async () => {
            const theme = await AsyncStorage.getItem('theme');
            if (theme === 'dark') {
                setIsDarkMode(true);
            } else {
                setIsDarkMode(systemColorScheme === 'dark');
            }
        };
        getTheme().then();
    }, [systemColorScheme]);

    const toggleTheme = async () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const backgroundStyle = tw`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} flex-1`;

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? '#1a202c' : '#f7fafc'}
            />
            <View style={tw`flex-1 items-center justify-center`}>
                <Text style={tw`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold`}>
                    Fikri Noor Arafah
                </Text>
                <Text style={tw`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                    225150400111018
                </Text>
                <TouchableOpacity
                    onPress={toggleTheme}
                    style={tw`mt-6 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
                >
                    <Text style={tw`${isDarkMode ? 'text-white' : 'text-black'} text-lg`}>
                        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default App;
