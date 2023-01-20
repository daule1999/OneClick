import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './Button.type';
import styles from './Button.style';

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  label,
  variant = "primary",
  disabled = false,
  type = 'default',
  cs,
}) => {

  const conatinerStyle = [];
  const labelStyle = [];

  if (variant === 'primary') {
    conatinerStyle.push(styles.bgprimary);
    labelStyle.push(styles.textprimary);
    type === 'flushed' && conatinerStyle.push(styles.flushButton);
  } else if (variant === 'secondary') {
    conatinerStyle.push(styles.bgsecondary);
    labelStyle.push(styles.textsecondary);
    type === 'flushed' && conatinerStyle.push(styles.flushButton);
  };

  if (disabled) {
    conatinerStyle.push(variant === 'primary' ? styles.bgprimarydisabled : styles.bgsecondarydisabled);
  }

  return (
    <>
      {variant !== 'text' ?
        <TouchableOpacity
          disabled={disabled}
          onPress={onClick}
          style={[styles.container, ...conatinerStyle, cs?.root]}
          activeOpacity={.8}
        >
          {children || <Text style={[styles.text, ...labelStyle, cs?.lablel]}>{label}</Text>}
        </TouchableOpacity>
        : <Text onPress={onClick} style={[styles.textButton, cs?.textButton]}>{label}</Text>
      }
    </>
  );
};

export default Button;
