// import React, { useState } from 'react';
// import { Image, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { FontAwesome } from '@expo/vector-icons';
// import { t } from 'react-native-tailwindcss';
// export default function ImagePickerExample({ buttonStyle }) {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   return (
//     <>
//       <FontAwesome
//         name="photo"
//         size={32}
//         color={t.bgGray600}
//         onPress={pickImage}
//       />
//       {image && (
//         <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//       )}
//     </>
//   );
// }
