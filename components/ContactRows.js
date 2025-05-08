import React from "react";
import { Text,StyleSheet,View,TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons'

const ContactRow = () =>{
    return(
        <TouchableOpacity style={styles.row}>

                <View style={styles.avatar}>
                    <Text style={styles.avatarLabel}>UN</Text>
                </View>
                <View style={styles.textsContainer}>
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.subtitle}>Hi, I am waiting for you for dinner!</Text> 
                </View>
                


                <Ionicons name="chevron-forward-outline " size={20}/>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        paddingVertical:20
        
    },
    avatar:{
        width:56,
        height:56,
        backgroundColor:'#7C4DFF',
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center'
    },
    avatarLabel:{
        fontSize:20,
        color:'white'
    },
    textsContainer:{
        flex:1,
        marginStart:16
       
    },
    name:{
        fontSize:16,

    },
    subtitle:{
        marginTop:2,
        color:'#565656'
    }
})


export default ContactRow;