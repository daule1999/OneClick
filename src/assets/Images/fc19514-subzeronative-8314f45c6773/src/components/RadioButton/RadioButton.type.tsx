export interface RadioButtonProps {
    radioList?: { key: string, label: string, active?: boolean }[];
    heading?: string;
    radio?: { key: string, label?: string };
    onRadioChange?: (radioChecked: { key: string | undefined, label?: string }) => void;
    cs?: {
        root?: { [key: string]: string | number },
        heading?: { [key: string]: string | number },
        buttonLabel?: { [key: string]: string | number },
        outerRadioCircle?: { [key: string]: string | number },
        innerRadioCircle?: { [key: string]: string | number },
    }
};