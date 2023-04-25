import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router'


const jobTypes=["Full-Time","Part-Time","Contractor"]
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router=useRouter();
  const [activeJob,setActiveJob]=useState('Full-Time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Alamin ! </Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder='What Are You Looking For'
            value={searchTerm}
            onChangeText={(text)=>setSearchTerm(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            style={styles.searchBtnImage}
            resizeMode='contain'
            source={icons.search}
            
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity
            style={styles.tab(activeJob,item)}
            onPress={()=>{
              setActiveJob(item)
              router.push(`/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeJob,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome