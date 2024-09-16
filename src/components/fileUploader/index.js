import styled from 'styled-components';
import { useRef, useState } from 'react';
import axios from 'axios';
const Container = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    .fileUploader {
        &__url {
            flex-grow: 1;
            color: #999;
            background-color: #eee;
            border: 1px solid #999;
        }
        &__button {
            flex-basis: 100px;
            border: 1px solid #999;
            text-align: center;
        }
        &__hidden {
            width: 0;
            height: 0;
            overflow: hidden;
        }
    }
`;



const FileUploader = (props) => {
    const fileRef = useRef(null);
    const onBrowserClick = () => {
        fileRef.current.click();
    };
    const { value } = props;
    const [ url, setUrl ] = useState(value);
    const onUploadChange = (obj) => {
        if(obj.target.files) {
            const file = obj.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            axios.post('//localhost:4000/write/uploadimage', formData).then((response) => {
                if(response.data.code === 200) {
                    const fileUrl = response.data.data.filename;
                    setUrl(fileUrl);
                    props.onChange(fileUrl);
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    return (
        <Container>
            <input type="text" readOnly="readonly" className="fileUploader__url" value={url}></input>
            <div className="fileUploader__button" onClick={onBrowserClick}>浏览文件...</div>
            <div className="fileUploader__hidden">
                <input ref={fileRef} type="file" accept="image/*" onChange={onUploadChange}/>
            </div>
        </Container>
    );
};

export default FileUploader;