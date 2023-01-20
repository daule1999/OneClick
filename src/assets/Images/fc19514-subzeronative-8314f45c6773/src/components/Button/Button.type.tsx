import { ReactNode } from "react";

export interface ButtonProps {
    label?: string;
    variant?: 'primary' | 'secondary' | 'text';
    type?: 'flushed' | 'default';
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    cs?: {
        root?: { [key: string]: string | number },
        lablel?: { [key: string]: string | number },
        textButton?: { [key: string]: string | number },
    }
};
