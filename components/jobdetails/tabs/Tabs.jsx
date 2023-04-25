import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'
import { ScrollView } from 'react-native-gesture-handler'
const TabButton=({name,activeTab,onHandleSearchType})=>(
  <TouchableOpacity
  style={styles.btn(name,activeTab)}
  onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name,activeTab)}>{name}</Text>
  </TouchableOpacity>
)
const Tabs = ({activeTab,setActiveTab,tabs}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={tabs}
      renderItem={({item})=>(
      <TabButton
        name={item}
        activeTab={activeTab}
        onHandleSearchType={()=>setActiveTab(item)}
      />)}
      keyExtractor={item=>item}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{columnGap:SIZES.small/2}}
      />
    </View>
  )
}

export default Tabs