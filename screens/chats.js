import React from "react";
import { View,SafeAreaView ,StyleSheet} from "react-native";
import ContactRow from "../components/ContactRows";

const Chats = () =>{
    return (
        <SafeAreaView>
            <ContactRow/>
            <View style={styles.serprator}></View>   

            <ContactRow/>
            <View style={styles.serprator}></View>  

            <ContactRow/>
            <View style={styles.serprator}></View>  
                    
                 
        </SafeAreaView>
    );
};


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
    },
    serprator:{
        height: StyleSheet.hairlineWidth,
        backgroundColor:'gray',
        marginStart:16
    }
})



export default Chats;
