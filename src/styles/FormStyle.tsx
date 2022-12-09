import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
  onboarding: {
    fontSize: 14,
    fontFamily: 'PoppinsSemiBold',
    color: '#010101',
  },
  next: {
    color: '#007BFF',
    fontSize: 14,
  },
  frame: {
    marginTop: 16,
    marginHorizontal: 30,
  },
  generalInformation: {
    marginLeft: 16,
    marginTop: 35,
  },
  generalInformationText: {
    fontSize: 28,
    fontFamily: 'PoppinsSemiBold',
    color: '#010101',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 33,
    marginTop: 21,
  },
  contentText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
  },
  imageContainer: {
    marginHorizontal: 16,
    height: 111,
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    borderColor: '#E6E7E9',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 41,
  },
  addPhotoText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'PoppinsSemiBold',
    color: '#010101',
  },
  addPhotoImg: {
    width: 144,
    height: 83,
    alignSelf: 'center',
    borderRadius: 8,
  },
  inputStyle: {
    backgroundColor: '#FBFBFC',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6E7E9',
    paddingHorizontal: 16,
  },
  inputText: {
    paddingBottom: 4,
    fontFamily: 'PoppinsSemiBold',
    color: '#010101',
    fontSize: 14,
  },
  margin16: {
    marginHorizontal: 16,
  },
  marginTop: {
    marginTop: 16,
  },
  require: {
    paddingTop: 4,
    paddingLeft: 3,
  },
  row: {
    flexDirection: 'row',
  },
  maleGender: {
    backgroundColor: '#FBFBFC',
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 12,
    height: 44,
    width: 67,
    alignItems: 'center',
    marginTop: 12,
  },
  birthDate: {
    backgroundColor: '#FBFBFC',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6E7E9',
    paddingHorizontal: 16,
    height: 48,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  footerMargin: {
    marginBottom: 45,
  },
});
