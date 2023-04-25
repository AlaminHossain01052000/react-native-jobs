import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import { FlatList } from 'react-native-gesture-handler'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hook/useFetch'
import { useRouter } from 'expo-router'

const Popularjobs = () => {
  const {data,isLoading,error}=useFetch("search",{
    
      query: 'React Developer',
      page: '1',
      num_pages: '1'
    
  })
  const router=useRouter()
  const [selectedJob,setSelectedJob]=useState()
  const handleCardPress=(item)=>{
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item?.job_id)
  }
  // console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      {
        isLoading?(<ActivityIndicator size="large" color={COLORS.primary}/>):error?<Text>Something went wrong</Text>:
        <FlatList
        data={data}
        keyExtractor={item=>item?.job_id}
        renderItem={({item})=>{
          return <PopularJobCard item={item} handleCardPress={handleCardPress} selectedJob={selectedJob}/>
        }}
        contentContainerStyle={{columnGap:SIZES.medium}}
        horizontal
        />
      }
      </View>
      
      
    </View>
  )
}

export default Popularjobs