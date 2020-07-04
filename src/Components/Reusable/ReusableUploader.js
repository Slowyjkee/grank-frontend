import {Uploader, Icon, Loader} from "rsuite";
import React from "react";


function previewFile(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
}

export const ReusableUploader = ({ onUpload, link}) => {
    const imagePreview = link ? process.env.REACT_APP_ASSETS_URL + link : null;

    const [uploading, setUploading] = React.useState(false);
    const [fileInfo, setFileInfo] = React.useState(imagePreview);

    return (
        <Uploader
            fileListVisible={false}
            listType="picture"
            onUpload={file => {
                setUploading(true);
                previewFile(file.blobFile, value => {
                    setFileInfo(value);
                });
                onUpload(file.blobFile)
            }}
            onSuccess={(response, file) => {
                setUploading(false);
            }}
            onError={() => {
                setUploading(false);

            }}
        >
            <button >
                {uploading && <Loader backdrop center />}
                {fileInfo ? (
                    <img src={fileInfo} width="100%" height="100%" />
                ) : (
                    <Icon icon="picture" size="5x" />
                )}
            </button>
        </Uploader>
    );
};
