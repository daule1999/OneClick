import React, { ReactNode } from 'react';
import { View } from 'react-native';
import {style} from './CenterView.style';

interface Props {
    children: ReactNode;
}

export default function CenterView({ children }: Props) {
    return <View style={style.main as any}>{children}</View>;
};