import { ReactNode } from "react";

export interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    | 'subheading'
    | 'body-1' | 'body-2' | 'body-3'
    | 'body-bold-1' | 'body-bold-2' | 'body-bold-3'
    | 'subtitle' | 'caption' | 'helper'
    | 'label-1' | 'lable-2' | 'textbutton' | 'link'
    | 'info-1' | 'info-2';
    title?: string;
    children?: ReactNode;
    cs?: {
        root?: { [key: string]: string | number }
    };
}