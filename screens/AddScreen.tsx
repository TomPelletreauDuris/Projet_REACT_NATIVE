  import React, { useState, useEffect } from 'react';
  import { Button, Image, View, Platform } from 'react-native';
  import * as ImagePicker from 'expo-image-picker';
  
  export default function ImagePickerExample() {
    const [image, setImage] = useState(null);
  
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') { alert('Désolé, nous avons besoin de la permission dutilisation de la camérapour faire fonctionner cette belle app!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Importer une image" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
