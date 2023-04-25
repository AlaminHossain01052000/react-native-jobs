import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { isImage } from '../../../../utils'


const NearbyJobCard = ({job,handleNavigate}) => {
  // console.log(item)
  return (
    <TouchableOpacity
     style={styles.container}
     onPress={handleNavigate}
     >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
        source={{uri:isImage(job?.employer_logo)?job.employer_logo:"https://media.istockphoto.com/id/1310981636/photo/thug-life-meme-glasses-pixel-art-modern-iconic-3d-object.jpg?b=1&s=170667a&w=0&k=20&c=HxFJS9rhT7-GgRCzjlZxtvhTTd2jFGIXtAMdcNJaxIU="}}
        resizeMode='contain'
        style={styles.logoImage}
        />
      </TouchableOpacity>
      {/* <Text style={styles.companyName} numberOfLines={1}>{job?.employer_name}</Text> */}
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {job.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard