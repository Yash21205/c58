import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import BasicButton from './components/BasicButton';
export default function Media(){

  const [image,setImage]=useState(null);
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);


    async function handlepick(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            setImage(result.uri);
          }
      
    }
    return(
        <ScrollView>
           <BasicButton 
           text="Pick a Image " onPress={handlepick}
           >

           </BasicButton>
           {
             image?<>
             <Image source={{uri:Image}} style={StyleSheet.pics}>
              
             </Image>
             </>: null


           }
             </ScrollView>
    );
}

const style=StyleSheet.create({

  pics:{
    width:"100%",
    height:"100%",
    alignSelf:'center',


  }


});