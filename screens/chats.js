import React from "react";
import { View,SafeAreaView ,StyleSheet} from "react-native";
import ContactRow from "../components/ContactRows";
import Separator from "../components/Separtor";


const Chats = () =>{
    return (
        <SafeAreaView>
            <ContactRow
            
                name="Ömer KAHRAMAN"
                subtitle="React NATIVE"
                onPress={() =>{
                    alert('Hi, Ömer KAHRAMAN')
                }}
            
            />
           <Separator/>  

            <ContactRow
            
                name="Dilara Bulut"
                subtitle="React NATIVE"
                onPress={() =>{
                    alert('Hi, Dilara Bulut')
                }}
                
                

            />
            <Separator/>  

            <ContactRow
            
                name="Aysegul Saygi"
                subtitle="React NATIVE"
                onPress={() =>{
                    alert('Hi, Aysegul Saygi')
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
