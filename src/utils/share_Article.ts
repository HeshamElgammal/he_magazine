import dynamicLinks from '@react-native-firebase/dynamic-links';
import { Platform, Share } from 'react-native';

const generateLink = async (id: any, type?: any) => {
  try {
    const link = await dynamicLinks().buildShortLink({
      link: `https://hemagazine.page.link/vgNL?article=${id}&type=${type}`,
      domainUriPrefix: 'https://hemagazine.page.link',
      android: {
        packageName: 'com.he_magazine',
      },
      ios: {
        appStoreId: '6461512486',
        bundleId: 'heMagazine',
      },
    })
    console.log('link:', link)
    return link
  } catch (error) {
    console.log('Generating Link Error:', error)
  }
}

export const onSharePressed = async (id: any, type?: any) => {
  const getLink = await generateLink(id, type)
  try {
    Share.share({
      message: getLink,
    });
  } catch (error) {
    console.log('Sharing Error:', error)
  }
}
// export const onSharePressed = (id: any, ) => {
//   dynamicLinks()
//     .buildLink({
//       link: `https://hemagazine.app?article=${id}`,
//       domainUriPrefix: 'https://hemagazine.page.link',
//       android: {
//         packageName: 'com.he_magazine',
//       },
//       ios: {
//         bundleId: 'heMagazine',
//         appStoreId: '6461512486',
//       },
//     })
//     .then((res: any) => {
//       Share.share(
//         Platform.OS === 'ios'
//           ? {
//               url: res,
//               message: `\nArticle${id} \n\n\n${res}`,
//             }
//           : {message: ``},
//       );
//     })
//     .catch(err => console.log(err));
// };
