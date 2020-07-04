import React from "react";
import {Button} from "rsuite";

export const ReusableButton = (props) => {
    const {title, onPress} = props;

    return (
        <Button onClick={() => onPress()}>
            {title}
        </Button>
    );
};
