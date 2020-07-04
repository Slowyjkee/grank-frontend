import React from "react";
import {Panel} from "rsuite";
import {ReusableImage} from "./ReusableImage";
import {ReusableButton} from "./ReusableButton";

export const ReusableCard = (props) => {
    const {
        width,
        height,
        link,
        title,
        id,
        description,
        buttonTitle='Подробнее',
        onClickButton
    } = props;

    const fixedLenghtDescription = description.slice(0, 75) + '...';

    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, padding:'10px' }}>
            <ReusableImage width={width} height={height} link={link}/>
            <Panel header={title}>
                <p style={{marginBottom:'10px'}}>
                    <small>{fixedLenghtDescription}</small>
                </p>
                <ReusableButton title={buttonTitle} onPress={() => onClickButton(id)}/>
            </Panel>
        </Panel>
    );
};
