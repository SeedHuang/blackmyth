import { useState, useEffect } from 'react';
import Button from '@components/button';
import FileUploader from '@components/fileUploader';
import { addUnitInfo, getCategories } from '@api';
import PageView from '@components/pageView';
import classes from './index.module.scss';

export default function EditorPage(props) {
    const {onConfirmClick, onCancelClick} = props;
    const [title, setTitle] = useState('');
    const [breif, setBreif] = useState('');
    const [detail, setDetail] = useState('');
    const [cate, setCate] = useState('');
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
            onConfirmClick(response);
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
        onCancelClick();
    };

    useEffect(()=>{
        async function fetchData() {
            const result = await getCategories();
            setCategories(result.data.categories);
        }
        fetchData();
    }, []);
    
    return (
        <PageView footer={
            [
                (<Button text="添加" key="key__button__add" onClick={onAddClick}/>),
                (<Button text="取消" key="key__button__reset" onClick={onResetClick}/>)
            ]
        }>
            <div className={classes.pageForm}>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>名称</div>    
                    <div className={classes.pageForm__row__td}><input type="text" value={title}  onChange={(value)=>{setTitle(value.target.value)}}/></div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>简介</div>    
                    <div className={classes.pageForm__row__td}>
                        <textarea value={breif} style={{height: '100px'}}onChange={(value)=>{setBreif(value.target.value)}}></textarea>
                    </div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>详情</div>    
                    <div className={classes.pageForm__row__td}>
                        <textarea value={detail} onChange={(value)=>{setDetail(value.target.value)}}></textarea>
                    </div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>类别</div>    
                    <div className={classes.pageForm__row__td}>
                        <select value={cate}  onChange={ (result) => { setCate(result.target.value) } }>
                            {
                                categories.map(({label, value}, index) => {
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
        </PageView>
    );
}