import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView, ScrollView, StyleSheet, View,
} from 'react-native';
import { Colors } from './src/styles';
import Button from './src/components/Button/Button';
import Typography from './src/components/Typography/Typography';
import RadioButton from './src/components/RadioButton/RadioButton';
import DigitInput from './src/components/DigitInput/DigitInput';
import TextField from './src/components/TextField/TextField';

const App = () => {
  const [secure, setSecure] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Type : Text, Value : Passed</Typography>
          <TextField label="First Name" value="Ganesh" placeholder="First Name" />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Type : Text, Value : Empty</Typography>
          <TextField label="Last Name" value="" placeholder="Last Name" />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Type : Text, Value : Empty, Error : True</Typography>
          <TextField label="Email" value="" placeholder="Email ID" error />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Type : Number, InputPrefix : ₹ </Typography>
          <TextField label="Amount" value="" placeholder="Enter Amount"  inputType="number" inputPrefix="₹" />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Type : Text, Disabled : True </Typography>
          <TextField label="Disabled" value="" placeholder="Enter Amount"  disabled />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Type : Password, Value : Passed </Typography>
          <TextField label="Password" value="123456" placeholder="Enter Password"  inputType="password" />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Type : text, onInputChange Callback Function </Typography>
          <TextField label="Name" value="" placeholder="Enter Name" onInputChange={(e) => console.log(e)}/>
        </View>
        <View style={styles.sectionContainer}>
          <Button label="Primary button" />
        </View>
        <View style={styles.sectionContainer}>
          <Button label="Secondary Button" variant="secondary" />
        </View>
        <View style={styles.sectionContainer}>
          <Button label="Primary Disabled" disabled />
        </View>
        <View style={styles.sectionContainer}>
          <Button label="Secondary Disabled" disabled variant="secondary" />
        </View>
        <View style={styles.sectionContainer}>
          <Button label="Custom Button" cs={{
            root: {
              width: 250,
              height: 60,
              backgroundColor: Colors.purple,
            },
            lablel: {
              fontSize: 20,
            }
          }} />
        </View>
        <View style={styles.sectionContainer}>
          <Button label="CTA Button" onClick={() => Alert.alert('Action Called')} />
        </View>
        <View style={styles.sectionContainer}>
          <Button label="Text Button" onClick={() => Alert.alert('Text Button Called')} variant="text" />
        </View>
        <View style={styles.sectionContainer}>
          <Button label="Flushed Button" type="flushed" />
        </View>
        <View style={styles.sectionContainer}>
          <Button label="Flushed Button" type="flushed" variant="secondary" />
        </View>
        <View style={styles.sectionContainer}>
          <Typography
            title="Heading 1"
          />
        </View>
        <View style={styles.sectionContainer}>
          <Typography
            title="Text Button"
            variant="textbutton"
          />
        </View>
        <View style={styles.sectionContainer}>
          <Typography
            title="Label 1"
            variant="label-1"
          />
        </View>
        <View style={styles.sectionContainer}>
          <Typography
            title="Caption"
            variant="caption"
          />
        </View>
        <View style={styles.sectionContainer}>
          <RadioButton
            heading="Radio Group Heading"
            radioList={[
              {
                key: 'samsung',
                label: 'Samsung',
              },
              {
                key: 'apple',
                label: 'Apple',
              }]}
          />
        </View>
        <View style={styles.sectionContainer}>
          <RadioButton
            radio={{
              key: 'samsung'
            }}
          />
        </View>
        <View style={styles.sectionContainer}>
          <RadioButton
            radio={{
              key: 'samsung',
              label: 'samsung'
            }}
            onRadioChange={(obj) => Alert.alert(obj.key || '')}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Variant : Small, Default Otp : 123456</Typography>
          <DigitInput defaultOtp={123456} />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Variant : Medium, Length : 4</Typography>
          <DigitInput variant="md" numberOfInputs={4} />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Variant : Large, Length : 3</Typography>
          <DigitInput variant="lg" numberOfInputs={3} />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Variant : Small, Default Otp : 123456, Secured : true</Typography>
          <DigitInput defaultOtp={123456} secureTextEntry={true} />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Variant : Small, State : Error</Typography>
          <DigitInput error />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Variant : Small, State : Disabled </Typography>
          <DigitInput disabled />
        </View>
        <View style={styles.sectionContainer}>
          <Typography variant="subheading">Variant : Small, Children : Text Button Passed </Typography>
          <DigitInput secureTextEntry={secure} >
            <Button label="View Pin" variant="text" onClick={() => setSecure(!secure)} />
          </DigitInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
});

