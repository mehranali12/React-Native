import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

const GolbalStyle = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#F2F1F2",
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 32,
    lineHeight: 48,
    fontStyle: 'normal',
    textAlign: 'center'
  },
  paragrap: {
    fontFamily: FONTS.poppins,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center'
  },
  bainer: {
    position: 'relative',
    height: 150,
    width: '100%',
    marginTop: 16,
},
big:{
  fontSize: 32,
  lineHeight: 48,
  fontFamily: FONTS.poppinsMedium,
},
buttonText: {
  fontFamily: FONTS.poppins,
  fontSize: 16,
  lineHeight: 24,
  fontStyle: 'normal',
  paddingHorizontal: 16,
  paddingVertical: 5,
},
centerIcon: {
  paddingHorizontal: 70,
  marginTop: 90,
},
loginButton: {
  borderWidth: 1,
  borderRadius: 10,
  marginLeft: 50,
  marginRight: 50,
  height: 48,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: COLORS.blue,
},
header: {
  height: 70,
  backgroundColor: COLORS.white,
  flexDirection: 'row',
  paddingHorizontal: 16,
  alignItems: 'center',
},
headertext: {
  color: COLORS.black,
  fontFamily: FONTS.poppinsMedium,
  fontSize: 20,
  lineHeight: 30,
  fontStyle: 'normal',
},
TopMenuButtonDiv: {
  backgroundColor: COLORS.white,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 16,
},
TopMenuButtonDivText: {
  padding: "5%",
  borderRadius: 15,
  backgroundColor: COLORS.gray,
  color: COLORS.blue,
  fontSize: 18,
  fontFamily: FONTS.poppins,
  fontStyle: 'normal',
  textAlign: 'center',
  alignContent: "center"
},

});
export { GolbalStyle, };