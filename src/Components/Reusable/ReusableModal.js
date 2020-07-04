import {Modal} from "rsuite";
import React from "react";


export const ReusableModal = (props) => {
    const {show, onHide, title, children} = props;
    return (
        <Modal show={show} onHide={() => onHide()}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
};
