import { RadioButtonProps } from "../types.ts";

export const RadioButton = (props: RadioButtonProps) => {
    const {button, selectedValue, handleSelect} = props;

    return (
        <label>
            {button}
         <input
           type="radio"
           id={button}
           name={button}
           value={button}
           checked={button === selectedValue}
           onChange={handleSelect}
         />
        </label>
    )
}