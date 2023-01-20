import { Fonts } from "../../styles";

export const getFontStyle = (variant: string) => {
    if(variant === 'h1') {
        return Fonts.h1;
    } else if (variant === 'h2') {
        return Fonts.h2;
    } else if (variant === 'h3') {
        return Fonts.h3;
    } else if (variant === 'h4') {
        return Fonts.h4;
    } else if (variant === 'h5') {
        return Fonts.h5;
    } else if (variant === 'h6') {
        return Fonts.h6;
    } else if (variant === 'body-1') {
        return Fonts.body1;
    } else if (variant === 'body-2') {
        return Fonts.body2;
    } else if (variant === 'body-3') {
        return Fonts.body3;
    } else if (variant === 'subheading') {
        return Fonts.subheading;
    } else if (variant === 'subtitle') {
        return Fonts.subtitle;
    } else if (variant === 'textbutton') {
        return Fonts.textbutton;
    } else if (variant === 'helper') {
        return Fonts.helper;
    } else if (variant === 'caption') {
        return Fonts.caption;
    } else if (variant === 'info-1') {
        return Fonts.info1;
    } else if (variant === 'info-2') {
        return Fonts.info2;
    } else if (variant === 'body-bold-1') {
        return Fonts.bodybold1;
    } else if (variant === 'body-bold-2') {
        return Fonts.bodybold2;
    } else if (variant === 'body-bold-3') {
        return Fonts.bodybold3;
    } else if (variant === 'label-1') {
        return Fonts.label1;
    }  else if (variant === 'label-2') {
        return Fonts.label2;
    }  else if (variant === 'link') {
        return Fonts.link;
    } 
}