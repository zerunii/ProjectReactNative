import React from 'react'
import { View, Text } from 'react-native'

const Logo = () => {
    const title = "TNI"
    const isTitle = true;
    const showData =()=><Text>Hello December</Text>


    return (
        <View>
            <Text style={{color:'blue',fontSize:20}}>Thai-Nichi </Text>
            {
                isTitle === true && <Text>{title} </Text>
            } 
            {
                isTitle === true
                ?<Text>{title}</Text> //condition true
                :<Text>Thai-Nichi</Text> // condiiton false
            }
            {showData()}

        </View>
    )
}

export default Logo