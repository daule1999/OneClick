import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, Image } from 'react-native';
import { TextFieldProps } from './TextField.type';
import styles from './TextField.style';
import { Colors } from '../../styles';

const TextField: React.FC<TextFieldProps> = ({
    value = '',
    inputPrefix,
    label = 'Label',
    inputType = 'number',
    onInputChange,
    placeholder = 'Placeholder text',
    error = false,
    disabled = false,
    children,
    endInputImage,
    cs,
    ...props
}) => {
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value);

    useEffect(() => {
       if(value){
           setInputFocus(true);
           setInputValue(value);
       }
    }, [value])

    const handleInputChange = (value: string) => {
        setInputValue(value);
        onInputChange && onInputChange(value);
    };

    const handleFocus = () => inputValue === '' && setInputFocus(true);
    const handleBlur = () => inputValue === '' && setInputFocus(false);

    return (
        <>
            <View style={[styles.container, cs?.conatiner]}>
                <Text
                    style={[
                        styles.inputLabel,
                        {
                            transform: [{ translateY: inputFocus ? inputPrefix ? 55 : 30 : inputPrefix ? 40 : 40 }, { translateX: 16 }],
                        },
                        (inputFocus && styles.inputLabelFocused),
                        (error && inputFocus && styles.inputErrorLabel),
                        cs?.inputLabel,
                    ]}>
                    {label}
                </Text>
                {inputFocus && inputPrefix && <Text style={[styles.inputPrefix, cs?.inputPrefix]}>{inputPrefix}</Text>}
                <TextInput
                    style={[
                        styles.inputRoot,
                        inputFocus && styles.inputFocused,
                        disabled &&  styles.inputDisabled,
                        { paddingLeft: inputPrefix ? 30 : 16 },
                        (error && styles.inputError),
                        cs?.inputRoot
                    ]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={e => handleInputChange(e)}
                    selectionColor={Colors.charcoal}
                    placeholder={
                        inputFocus
                            ? ` ${placeholder}`
                            : null
                    }
                    placeholderTextColor={Colors.grey[70]}
                    value={inputValue}
                    underlineColorAndroid="transparent"
                    secureTextEntry={inputType === 'password'}
                    // keyboardType={inputType !== 'number' ? 'default' : 'numeric'}
                    editable={!disabled}
                    {...props}
                />
                {endInputImage && inputFocus && <Image
                    style={[styles.endInputIcon, cs?.endInputIcon]}
                    source={{
                        width: 20,
                        height: 20,
                        uri: endInputImage,
                    }}
                />}
                {children && <View style={[styles.childrenContainer, cs?.childrenContainer]}>
                    {children}
                </View>}
            </View>
        </>
    );
};

export default TextField;
