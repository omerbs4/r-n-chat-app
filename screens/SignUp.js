import React from "react";
import { colors } from "../config/constants";
import { Text ,View,SafeAreaView,StyleSheet,TextInput} from "react-native";
import Button from "../components/Button";


const Signup =() =>{
    return (
        <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.contentContainer}>              
                <Text style={styles.title}>Create New Account</Text>  
                <TextInput style={styles.input} placeholder="Enter your name"/>  
                <TextInput style={styles.input} placeholder="Enter your email"/>
                <TextInput style={styles.input} placeholder="Enter your password"/>

                <View style={styles.buttonsContainer}> 

                <Button title="Sign In" varient="secondary"/>
                <Button title="Sign Up" varient="primary"/>
                

                </View>
                
             </View>
        </SafeAreaView>
        </View>
    )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.lila,
    },
     contentContainer:{
        padding:20,
        marginTop:32

    },
    title:{
        fontSize:24,
        color:'black',
        fontWeight:'800',
        marginBottom:16
    },
    input:{
        backgroundColor:'white',
        fontSize:15,
        marginTop:16,
        paddingHorizontal:16,
        paddingVertical:12,
        borderRadius:12,


    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:32,


    },
   
   
});
export default Signup; 