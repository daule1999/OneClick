import { ReactNode } from "react";

export interface DigitInputProps {
    numberOfInputs?: number;
    variant?: 'sm' | 'md' | 'lg';
    defaultOtp?: number;
    children?: ReactNode;
    disabled?: boolean;
    error?: boolean;
    secureTextEntry?: boolean;
    onOtpChange?: (value: string) => void;
    onOtpComplete?: (otp: number) => void;
    cs?: {
        root?: { [key: string]: string | number },
        container?: { [key: string]: string | number },
        inputRoot?: { [key: string]: string | number },
        focusState?: { [key: string]: string | number },
        errorState?: { [key: string]: string | number },
        disabledState?: { [key: string]: string | number },
        childrenRoot?: { [key: string]: string | number },
    }
};