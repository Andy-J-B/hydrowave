import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const InfoCard = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>InfoCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});

//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//       padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
//       child: AspectRatio(
//         // Size of image
//         aspectRatio: 16 / 30,
//         child: ClipRRect(
//           // Curved border
//           borderRadius: BorderRadius.circular(16),

//           child: Stack(
//             children: [
//               _buildParallaxBackground(context),
//               _buildDescription(),
//             ],
//           ),
//         ),
//       ),
//     );
//   }

//   //
//   Widget _buildParallaxBackground(BuildContext context) {
//     return Positioned.fill(
//         bottom: 200,
//         child: Builder(builder: (context) {
//           if (id == 7) {
//             return Container(
//               color: Colors.white,
//               child: Image(
//                 image: AssetImage(imageUrl),
//                 fit: BoxFit.fitWidth,
//               ),
//             );
//           } else {
//             return Image(
//               image: AssetImage(imageUrl),
//               fit: BoxFit.cover,
//             );
//           }
//         }));
//   }

//   // Background for text and subtitles
//   Widget _buildDescription() {
//     return Positioned(
//         bottom: 0,
//         right: 0,
//         left: 0,
//         height: 213,
//         child: ClipRRect(
//           borderRadius: BorderRadius.circular(16),
//           child: Container(

//               // height: 213,
//               color: Colors.white,
//               child: _buildTitleAndSubtitle()),
//         ));
//   }

//   // Text and subtitles
//   Widget _buildTitleAndSubtitle() {
//     return Padding(
//       padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
//       child: Column(
//         mainAxisSize: MainAxisSize.max,
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           Text(
//             name,
//             style: const TextStyle(
//               color: Color.fromRGBO(3, 78, 142, 1),
//               fontSize: 18,
//               fontWeight: FontWeight.bold,
//             ),
//           ),
//           Text(
//             country,
//             style: const TextStyle(
//               color: Color.fromRGBO(3, 78, 142, 1),
//               fontSize: 12,
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }
