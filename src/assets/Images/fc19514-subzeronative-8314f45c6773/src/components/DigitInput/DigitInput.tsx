import React, { useCallback, useEffect, useState } from 'react';
import { Platform, TextInput, View } from 'react-native';
import { DigitInputProps } from './DigitInput.type';
import styles from './DigitInput.style';
import { Colors } from '../../styles';

const DigitInput: React.FC<DigitInputProps> = ({
  numberOfInputs = 6,
  defaultOtp,
  variant = 'md',
  children,
  disabled = false,
  error = false,
  secureTextEntry = false,
  onOtpChange,
  onOtpComplete,
  cs,
}) => {
  const [focusIndex, setFocusIndex] = useState(0);
  const [otpValue, setOtpValue] = useState<any>([]);
  let inputRefList: any = [];

  const majorVersionIOS: number = parseInt(`${Platform.Version}`, 10);
  const isOTPSupported: boolean = Platform.OS === 'ios' && majorVersionIOS >= 12;

  useEffect(() => {
    if (defaultOtp?.toString()?.length === numberOfInputs) {
      inputRefList?.[numberOfInputs - 1].focus();
      !disabled && setFocusIndex(numberOfInputs - 1);
      setOtpValue(defaultOtp.toString().split(''));
      onOtpComplete && onOtpComplete(defaultOtp);
    } else {
      inputRefList?.[0].focus();
      !disabled && setFocusIndex(0);
    }

    return () => {
      setOtpValue([]);
      setFocusIndex(0);
    }
  }, []);

  const setOtpInput = useCallback(
    () => {
      const otpInput = new Array(numberOfInputs);
      otpInput.fill('');
      const arrOtp = getOtp();
      arrOtp.forEach((v: string, i: number) => {
        otpInput[i] = v;
      });
      return otpInput;
    },
    [defaultOtp, numberOfInputs],
  );

  const getOtp = () => {
    if (defaultOtp && (defaultOtp + '').length > 0 && (defaultOtp + '').length <= Number(numberOfInputs)) {
      return (defaultOtp + '').split('');
    }
    return [];
  };

  const handleInputRef = (ref: any, index: number) => {
    let refs = [...inputRefList];
    refs[index] = ref;
    inputRefList = refs;
  };

  const focusNext = (index: number, value: string) => {
    if (index < inputRefList.length - 1 && value) {
      inputRefList?.[index + 1].focus();
      setFocusIndex(index + 1);
    }
    if (index === inputRefList.length - 1) {
      inputRefList?.[index].blur();
      setFocusIndex(index);
    }
    const otp: any = [...otpValue];
    otp[index] = value;
    setOtpValue(otp);
    onOtpChange && onOtpChange(value);
    if (numberOfInputs === otp.length && onOtpComplete) {
      onOtpComplete(otp.join(''));
    }
  };

  const focusPrevious = (key: string, index: number) => {
    if (key === 'Backspace' && index !== 0) {
      inputRefList?.[index - 1].focus();
      setFocusIndex(index - 1);
    } else {
      setFocusIndex(0);
    }
  };

  return (
    <>
      <View style={[styles.root, cs?.root]}>
        <View style={[styles.conatiner, cs?.container]}>
          {setOtpInput().map((i, index) => (
            <TextInput
              key={index}
              autoFocus={index === focusIndex && !disabled}
              ref={(ref: any) => handleInputRef(ref, index)}
              style={[
                styles.inputRoot,
                (index === focusIndex && {...styles.focusState, ...cs?.focusState}),
                (variant === 'sm' && styles.inputSizeSm),
                (variant === 'md' && styles.inputSizeMd),
                (variant === 'lg' && styles.inputSizeLg),
                (disabled && {...styles.disabledState, ...cs?.disabledState}),
                (error && {...styles.errorState, ...cs?.errorState}),
                cs?.inputRoot,
              ]}
              defaultValue={i || ''}
              selectionColor={Colors.charcoal}
              textAlign="center"
              keyboardType="numeric"
              maxLength={1}
              onFocus={() => !disabled && setFocusIndex(index)}
              onChangeText={(e) => !disabled && focusNext(index, e)}
              onKeyPress={(e) => !disabled && focusPrevious(e.nativeEvent.key, index)}
              textContentType={isOTPSupported ? 'oneTimeCode' : 'none'}
              secureTextEntry={secureTextEntry}
              editable={!disabled}
            />
          ))}
        </View>
        {children && 
        <View style={[styles.childrenContainer, cs?.childrenRoot]}>
          {children}
        </View>
        }
      </View>
    </>
  );
};

export default DigitInput;
