import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Top() {
  return (
    <View
        style={{
            flexDirection:"row",
            justifyContent:'space-around',
            alignItems:'center',
            paddingVertical:20,
            flex:0.1
        }}
    >
       
      <View>
        <Text 
          style={{
              textAlign:'center',
              fontWeight:"bold",
              fontSize:18
          }}>Hi Rahul!</Text>
        <Text style={{textAlign:'center',color:"grey"}}>You have 7 stock outlets</Text>
      </View>

      <TouchableOpacity>
        <AntDesign name="bells" size={30}/>
      </TouchableOpacity>
      
    </View>
  )
}