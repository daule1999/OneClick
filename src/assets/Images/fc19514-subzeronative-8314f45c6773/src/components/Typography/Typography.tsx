import React from 'react';
import { Text } from 'react-native';
import styles from './Typography.style';
import { TypographyProps } from './Typography.type';
import { getFontStyle } from './Typography.utils';

const Typography: React.FC<TypographyProps> = ({title, children, variant = 'h1', cs}) => {
  return (
    <>
      <Text style={[styles.root, getFontStyle(variant), cs?.root]}>{children || title}</Text>
    </>
  );
};

export default Typography;
