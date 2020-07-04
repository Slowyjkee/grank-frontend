import React, {useState} from "react";
import {Icon} from "rsuite";
import {ReusableModal} from "./ReusableModal";


export const ReusableImage = (props) => {
    const {
        width,
        height,
        link,
        fromServer = true,
        overlay=false,
        withZoom = true,
        title = '',
        overlayOpacity = 0.6,
        withModal = true,
        objectFit = 'contain'
    } = props;
    const overlayStyle = {
        opacity:overlayOpacity
    };
    const [visible, setVisible] = useState(false);
    const [modal, setModal] = useState(false);

    const zoomBlock =
        withZoom && visible &&
        <div className="icon-block absolute-centered">
            <Icon icon='search-plus'  size="3x"/>
        </div>;
    const overlayBlock =
        overlay && !visible && <div className='overlay' style={overlayStyle} />;

    const titleBlock =
        !visible && <h4 className='absolute-centered z-index-10' style={{color:"#ffffff"}}>{title}</h4>;

    const modalBlock =
        withModal && modal &&
        <ReusableModal show={modal} onHide={ () => setModal(false)}>
            <img src={fromServer ? process.env.REACT_APP_ASSETS_URL + link  : link}
                 width={ '100%' }
                 height={ 500 }
            />
        </ReusableModal>;


    return (
        <div className='reusable-image relative flex-align-center'
             style={{transition:300}}
             onMouseOver={() => setVisible(true)}
             onMouseLeave={() => setVisible(false)}
             onClick={() => setModal(!modal)}
        >
            <img src={fromServer ? process.env.REACT_APP_ASSETS_URL + link  : link}
                 style={{objectFit:objectFit}}
                 width={ width }
                 height={ height }
            />
            {titleBlock}
            {modalBlock}
            {zoomBlock}
            {overlayBlock}
        </div>
    );
};
