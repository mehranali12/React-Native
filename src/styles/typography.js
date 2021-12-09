import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

export default StyleSheet.create({
  textBlue: {
    color: COLORS.blue,
  },
  textBlackDark: {
    color: COLORS.black
  },
  textPrimary: {
    color: COLORS.primary,
  },
  textSecondary: {
    color: COLORS.secondary,
  },
  textDanger: {
    color: COLORS.danger,
  },
  textBlueDark: {
    color: '#0840AA',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textGray: {
    color: '#8F8D93',
  },
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textShadow: {
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  textSemiBold: {
    fontWeight: '600',
  },
  t8: {
    fontSize: 8,
  },
  textlarg: {
    fontSize: 32,
    lineHeight: 48,
  },
  t12: {
    fontSize: 20,
    lineHeight: 30,
  },
  t13: {
    fontSize: 16,
    lineHeight: 24,
  },
  t14: {
    fontSize: 18,
    lineHeight: 27,
  },
  t16: {
    fontSize: 14,
    lineHeight: 21,
  },
  fontNormal: {
    fontStyle: 'normal',
  },
  poppinsBold: {
    fontFamily: FONTS.poppinsBold,
  },
  poppinsMedium: {
    fontFamily: FONTS.poppinsMedium,
  },
  poppinsSemiBold: {
    fontFamily: FONTS.poppinsSemiBold,
  },
  poppins: {
    fontFamily: FONTS.poppins,
  },
});
