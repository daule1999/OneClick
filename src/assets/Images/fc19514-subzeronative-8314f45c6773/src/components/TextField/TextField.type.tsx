import { ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface TextFieldProps extends TextInputProps {
    value?: string;
    placeholder?: string;
    label?: string;
    error?: boolean;
    inputPrefix?: string;
    onInputChange?: (value: string) => void;
    inputType?: 'text' | 'password' | 'number';
    disabled?: boolean;
    children?: ReactNode;
    endInputImage?: string;
    cs?: {
        conatiner?: { [key: string]: string | number },
        inputRoot?: { [key: string]: string | number },
        inputLabel?: { [key: string]: string | number },
        inputPrefix?: { [key: string]: string | number },
        inputError?: { [key: string]: string | number },
        endInputIcon?: { [key: string]: string | number },
        childrenContainer?: { [key: string]: string | number },
    }
};