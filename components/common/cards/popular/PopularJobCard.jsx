import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import { isImage } from '../../../../utils'


const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
  // console.log(item)
  return (
    <TouchableOpacity
     style={styles.container(selectedJob,item)}
     onPress={()=>handleCardPress(item)}
     >
      <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
        <Image
        source={{uri:isImage(item?.employer_logo)?item.employer_logo:"https://media.istockphoto.com/id/1310981636/photo/thug-life-meme-glasses-pixel-art-modern-iconic-3d-object.jpg?b=1&s=170667a&w=0&k=20&c=HxFJS9rhT7-GgRCzjlZxtvhTTd2jFGIXtAMdcNJaxIU="}}
        resizeMode='contain'
        style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item?.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard