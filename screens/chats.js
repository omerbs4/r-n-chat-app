import React, {useEffect} from "react";
import { View,SafeAreaView ,StyleSheet} from "react-native";
import ContactRow from "../components/ContactRows";
import Separator from "../components/Separtor";


const Chats = ({navigation}) =>{

    useEffect(()=>{
        const isLoggdIn = false;
        if(!isLoggdIn){
            navigation.navigate("Signup");
        }
    },[]);
    return (
        <SafeAreaView>
            <ContactRow           
                name="Ömer KAHRAMAN"
                subtitle="React NATIVE"
                onPress={() =>{
                    navigation.navigate('Chat');
                }}           
            />
           <Separator/>  

            <ContactRow            
                name="Dilara Bulut"
                subtitle="React NATIVE"
                onPress={() =>{
                    navigation.navigate('Chat');
                }}
            />
            <Separator/>                  
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({    
    serprator:{
        height: StyleSheet.hairlineWidth,
        backgroundColor:'gray',
        marginStart:16
    }
})
export default Chats;
