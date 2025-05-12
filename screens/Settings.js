import React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import ContactRow from "../components/ContactRows";
import Separator from "../components/Separtor";
import { colors } from "../config/constants";
import {Ionicons} from '@expo/vector-icons'
import Cell from "../components/Cell";

const Settings =() =>{
    return(
        <View>
            <ContactRow
                name="Ömer KAHRAMAN"
                subtitle="omer@gmail.com"
                style={styles.ContactRow}
            /> 

            <Separator/>
            <Cell
                title="Logout"
                icon="log-out-outline"
                tintColor={colors.lila}
                onPress={() =>{
                    alert('dont touch me again');
                }}            
            />
             <Cell
                title="Tell a friend"
                icon="heart-outline"
                tintColor={colors.pink}
                onPress={() =>{
                    alert('dont touch me again');
                }}
                                style={{marginTop:20}}              
            />
             <Cell
                title="Help"
                icon="information-outline"
                tintColor={colors.blue}
                onPress={() =>{
                    alert('dont touch me again');
                }}          
            />

                          
        </View>
    )
}


const styles = StyleSheet.create({
    ContactRow:{
        backgroundColor:'white',
        marginTop:16,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor:colors.border
    },
    
})
export default Settings;