import { Stack, useRouter } from "expo-router"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { COLORS, SIZES, icons, images } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"
import { useState } from "react"

const Home = () => {
    const [searchTerm,setSearchTerm]=useState('')
    const router=useRouter()
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                ),
                headerTitle:"",
                headerShadowVisible:false
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex:1,
                    padding:SIZES.medium
                }}
                >
                    <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={()=>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                    />
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home