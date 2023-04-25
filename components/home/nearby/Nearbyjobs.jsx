import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import { FlatList } from 'react-native-gesture-handler'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hook/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router'

const Nearbyjobs = () => {
  const {data,isLoading,error}=useFetch("search",{
    
      query: 'React Developer',
      page: '1',
      num_pages: '1'
    
  })
  const router=useRouter()
  // console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      {
        isLoading?(<ActivityIndicator size="large" color={COLORS.primary}/>):error?<Text>Something went wrong</Text>:
        data?.map((job)=>(
          <NearbyJobCard 
          key={`nearby-jobs-${job.job_id}`}
          job={job}
          handleNavigate={()=>router.push(`/job-details/${job.job_id}`)}
          />
        ))
      }
      </View>
      
      
    </View>
  )
}

export default Nearbyjobs