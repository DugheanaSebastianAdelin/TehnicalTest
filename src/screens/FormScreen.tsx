import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import * as ImagePicker from 'react-native-image-picker';
import {ImagePickerResponse} from 'react-native-image-picker';
import {getTimeZone} from 'react-native-localize';
import styles from '../styles/FormStyle';

const FormScreen: React.FC = ({}) => {
  const [pickerResponse, setPickerResponse] = useState<ImagePickerResponse>();
  const [date, setDate] = useState<Date>();
  const [dateToShow, setDateToShow] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [middleName, setMiddleName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [ssn, setSsn] = useState<string>('');
  const [personalEmail, setPersonalEmail] = useState<string>('');
  const [primaryPhone, setPrimaryPhone] = useState<string>('');
  const [mobilePhone, setMobilePhone] = useState<string>('');
  const [emergencyName, setEmergencyName] = useState<string>('');
  const [emergencyPhone, setEmergencyPhone] = useState<string>('');
  const [employeeId, setEmployeeId] = useState<string>('');
  const timeZoneFromDevice = getTimeZone();
  const [timeZone, setTimezone] = useState<string>(timeZoneFromDevice);

  const navigation = useNavigation();

  const onCameraPress = () => {
    ImagePicker.launchCamera(
      {cameraType: 'front', mediaType: 'photo'},
      setPickerResponse,
    );
  };

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  const renderImage = () => {
    if (uri) {
      return <Image source={{uri: uri}} style={styles.addPhotoImg} />;
    } else {
      return (
        <TouchableOpacity onPress={onCameraPress}>
          <Text style={styles.addPhotoText}>ADD PHOTO</Text>
        </TouchableOpacity>
      );
    }
  };

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      gender: gender,
      ssn: ssn,
      birthDate: dateToShow,
    }),
  };

  const postData = async () => {
    try {
      await fetch(
        'https://6391dd0db750c8d178cfb0b6.mockapi.io/tehnical/post',
        requestOptions,
      ).then(response => {
        response.json().then(data => {
          console.log('post', data);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  const verifyData = () => {
    if (
      firstName !== '' &&
      middleName !== '' &&
      lastName !== '' &&
      gender !== '' &&
      ssn !== '' &&
      dateToShow?.length > 0 &&
      emergencyName !== '' &&
      emergencyPhone !== '' &&
      timeZone !== ''
    ) {
      if (uri) {
        postData();
        navigation.navigate('SuccessScreen');
      } else {
        onCameraPress();
      }
    } else {
      Alert.alert('Please complete all required fields!');
    }
  };

  useEffect(() => {
    if (date) {
      const formattedDate =
        date?.getFullYear() +
        '-' +
        (date?.getMonth() + 1) +
        '-' +
        date?.getDate();

      const JsonToString = JSON.stringify(formattedDate).replace(/\"/g, '');
      setDateToShow(JsonToString);
    }
  }, [date]);

  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.footerMargin}>
        <View style={styles.header}>
          <View></View>
          <View>
            <Text style={styles.onboarding}>Onboarding</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={verifyData}>
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.frame}>
          <Image source={require('../../assets/images/Frame.png')} />
        </View>
        <View style={styles.generalInformation}>
          <Text style={styles.generalInformationText}>General Information</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            Carefully check the information we identified from your documents
            and correct any wrong details.
          </Text>
        </View>
        <TouchableOpacity style={styles.imageContainer}>
          {renderImage()}
        </TouchableOpacity>
        <View style={styles.margin16}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.inputText}>First name</Text>
              <View style={styles.require}>
                <Image source={require('../../assets/images/require.png')} />
              </View>
            </View>

            <TextInput
              placeholder="Michael"
              style={styles.inputStyle}
              onChangeText={newText => setFirstName(newText)}
              defaultValue={firstName}
            />
          </View>
          <View style={styles.marginTop}>
            <View style={styles.row}>
              <Text style={styles.inputText}>Middle name</Text>
              <View style={styles.require}>
                <Image source={require('../../assets/images/require.png')} />
              </View>
            </View>
            <TextInput
              placeholder="Type middle name..."
              style={styles.inputStyle}
              onChangeText={newText => setMiddleName(newText)}
              defaultValue={middleName}
            />
          </View>
          <View style={styles.marginTop}>
            <View style={styles.row}>
              <Text style={styles.inputText}>Last name</Text>
              <View style={styles.require}>
                <Image source={require('../../assets/images/require.png')} />
              </View>
            </View>
            <TextInput
              placeholder="Dietschy"
              style={styles.inputStyle}
              onChangeText={newText => setLastName(newText)}
              defaultValue={lastName}
            />
          </View>
        </View>
        <View style={styles.margin16}>
          <View style={styles.marginTop}>
            <View style={styles.row}>
              <Text style={styles.inputText}>
                Gender (as assigned at birth)
              </Text>
              <View style={styles.require}>
                <Image source={require('../../assets/images/require.png')} />
              </View>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={[
                  styles.maleGender,
                  {borderColor: gender === 'Male' ? '#007BFF' : '#E6E7E9'},
                ]}
                onPress={() => setGender('Male')}>
                <Text>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.maleGender,
                  {
                    borderColor: gender === 'Female' ? '#007BFF' : '#E6E7E9',
                    marginLeft: 12,
                    width: 85,
                  },
                ]}
                onPress={() => setGender('Female')}>
                <Text>Female</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.marginTop}>
            <View style={styles.row}>
              <Text style={styles.inputText}>SSN</Text>
              <View style={styles.require}>
                <Image source={require('../../assets/images/require.png')} />
              </View>
            </View>
            <TextInput
              maxLength={9}
              keyboardType="numeric"
              placeholder="123 12 1234"
              style={styles.inputStyle}
              onChangeText={newText => setSsn(newText)}
              defaultValue={ssn}
            />
          </View>
          <DatePicker
            modal
            open={open}
            date={new Date()}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <View style={styles.marginTop}>
            <View style={styles.row}>
              <Text style={styles.inputText}>Birth date</Text>
              <View style={styles.require}>
                <Image source={require('../..//assets/images/require.png')} />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.birthDate}>
              <View style={{}}></View>

              <View>
                <Text>{dateToShow}</Text>
              </View>
              <View style={{}}>
                <Image source={require('../..//assets/images/calendar.png')} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.marginTop}>
            <Text style={styles.inputText}>Personal email</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="example@email.com"
              style={styles.inputStyle}
              onChangeText={newText => setPersonalEmail(newText)}
              defaultValue={personalEmail}
            />
          </View>
          <View style={styles.marginTop}>
            <Text style={styles.inputText}>Primary phone</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Type primary phone..."
              style={styles.inputStyle}
              onChangeText={newText => setPrimaryPhone(newText)}
              defaultValue={primaryPhone}
            />
          </View>
          <View style={styles.marginTop}>
            <Text style={styles.inputText}>Mobile phone</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Type mobile phone..."
              style={styles.inputStyle}
              onChangeText={newText => setMobilePhone(newText)}
              defaultValue={mobilePhone}
            />
          </View>
          <View style={styles.marginTop}>
            <View style={styles.row}>
              <Text style={styles.inputText}>Time zone</Text>
              <View style={styles.require}>
                <Image source={require('../..//assets/images/require.png')} />
              </View>
            </View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={newText => setTimezone(newText)}
              defaultValue={timeZone}
            />
          </View>
          <View style={styles.marginTop}>
            <View style={styles.row}>
              <Text style={styles.inputText}>Emergency contact name</Text>
              <View style={styles.require}>
                <Image source={require('../..//assets/images/require.png')} />
              </View>
            </View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={newText => setEmergencyName(newText)}
              defaultValue={emergencyName}
            />
          </View>
          <View style={styles.marginTop}>
            <View style={styles.row}>
              <Text style={styles.inputText}>Emergency contact phone</Text>
              <View style={styles.require}>
                <Image source={require('../..//assets/images/require.png')} />
              </View>
            </View>
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              onChangeText={newText => setEmergencyPhone(newText)}
              defaultValue={emergencyPhone}
            />
          </View>
          <View style={styles.marginTop}>
            <Text style={styles.inputText}>Employee ID (client system)</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={newText => setEmployeeId(newText)}
              defaultValue={employeeId}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FormScreen;
