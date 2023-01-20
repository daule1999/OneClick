import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Typography from '../Typography/Typography';
import styles from './RadioButton.style';
import { RadioButtonProps } from './RadioButton.type';

const RadioButton: React.FC<RadioButtonProps> = ({ radioList = [], heading, radio, onRadioChange, cs }) => {
	const [value, setValue] = useState<string | undefined>('');

	const handleRadioChange = (key: string | undefined, label?: string | undefined) => {
		setValue(key);
		onRadioChange && onRadioChange({key, label});
	};

	return (
		<>
			{radioList.length !== 0 ?
				<>
					{heading && <Typography cs={{ root: {...styles.heading, ...cs?.heading}}} title={heading} variant="body-3" />}
					<View>
						{radioList.map(({ key, label }) => {
							return (
								<View key={key} style={[styles.container, cs?.root]}>
									<TouchableOpacity
										activeOpacity={1}
										style={[styles.radioCircle, cs?.outerRadioCircle]}
										onPress={() => { handleRadioChange(key, label) }}>
										{(value === key) && <View style={[styles.selectedRb, cs?.innerRadioCircle]} />}
									</TouchableOpacity>
									<Text style={[styles.radioText, cs?.buttonLabel]}>{label}</Text>
								</View>
							);
						})}
					</View>
				</>
				:
				<View key={radio?.key} style={[styles.container, cs?.root]}>
					<TouchableOpacity
						activeOpacity={1}
						style={[styles.radioCircle, cs?.outerRadioCircle]}
						onPress={() => { handleRadioChange(radio?.key) }}>
						{value === radio?.key && <View style={[styles.selectedRb, cs?.innerRadioCircle]} />}
					</TouchableOpacity>
					{radio?.label && <Text style={[styles.radioText, cs?.buttonLabel]}>{radio?.label}</Text>}
				</View>
			}
		</>
	);
};

export default RadioButton;
