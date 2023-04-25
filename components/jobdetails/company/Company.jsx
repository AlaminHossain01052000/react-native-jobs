import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { isImage } from '../../../utils'
import { icons } from '../../../constants'

const Company = ({companyLogo,companyName,jobTitle,location}) => {
  return (
    <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image
          source={{
            uri:isImage(companyLogo)?companyLogo:"https://media.istockphoto.com/id/1310981636/photo/thug-life-meme-glasses-pixel-art-modern-iconic-3d-object.jpg?b=1&s=170667a&w=0&k=20&c=HxFJS9rhT7-GgRCzjlZxtvhTTd2jFGIXtAMdcNJaxIU="
          }}
          style={styles.logoImage}
          />
        </View>
        <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
        </View>
        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName} / </Text>
          <View style={styles.locationBox}>
            <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
            />
            <Text style={styles.locationName}>{location}</Text>
          </View>
        </View>
    </View>
  )
}

export default Company