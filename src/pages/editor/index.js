import { useState, useEffect } from 'react';
import Button from '@components/button';
import FileUploader from '@components/fileUploader';
import { addUnitInfo, getCategories } from '@api';
import classes from './index.module.scss';
import styled from 'styled-components';

const PageView = styled.div`
    border: 1px solid red;
    flex-grow: 1;
    position: relative;
    padding-bottom: 60px;
    .pageview__footer {
        position: absolute;
        height: 40px;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid #999;
        background-color: #fff;
    }
`;

export default function EditorPage() {
    const [title, setTitle] = useState('');
    const [breif, setBreif] = useState('');
    const [detail, setDetail] = useState('');
    const [cate, setCate] = useState();
    const [categories, setCategories] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const onAddClick = async () => {
        try {
            const response = await addUnitInfo({
                title,
                breif,
                detail,
                cate,
                imageUrl
            });
            console.log(response);
        } catch(e) {
            console.log(e);
        }
        
    };
    const onResetClick = () => {
        setTitle('');
        setBreif('');
        setDetail('');
        setCate('');
        setImageUrl('');
    };

    useEffect(()=>{
        async function fetchData() {
            const result = await getCategories();
            setCategories(result.data.categories);
        }
        fetchData();
    }, []);

    return (
        <PageView>
            <div className={classes.pageForm}>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>名称</div>    
                    <div className={classes.pageForm__row__td}><input type="text" value={title}  onChange={(value)=>{setTitle(value.target.value)}}/></div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>简介</div>    
                    <div className={classes.pageForm__row__td}><input type="text" value={breif}  onChange={(value)=>{setBreif(value.target.value)}}/></div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>详情</div>    
                    <div className={classes.pageForm__row__td}>
                        <textarea type="text" value={detail} onChange={(value)=>{setDetail(value.target.value)}}></textarea>
                    </div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>类别</div>    
                    <div className={classes.pageForm__row__td}>
                        <select value={cate} onChange={ (result) => { setCate(result.target.value) } }>
                            {
                                categories.map(({label, value}) => {
                                    return (<option key={`key_option_${value}`} value={value}>{label}</option>)
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>图片</div>    
                    <div className={classes.pageForm__row__td}>
                        <FileUploader value={imageUrl} onChange={(value)=>{setImageUrl(value)}}/>
                    </div>
                </div>
            </div>
            <div className="pageview__footer">
                <Button text="添加" onClick={onAddClick}/>
                <Button text="取消" onClick={onResetClick}/>
            </div>
        </PageView>
    );
}