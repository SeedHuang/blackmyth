import { useState, useRef } from 'react';
import Button from '@components/tButton';
import FileUploader from '@components/fileUploader';
import { addUnitInfo } from '@api';
import axios from 'axios';
import classes from './index.module.scss';
import styled from 'styled-components';
import classNames from 'classnames';

const PageView = styled.div`
    border: 1px solid red;
    .pageForm__conetnt {

    }
    .pageview__footer {
    padding: 10px;
        display: flex;
        justify-content: flex-end;
    }
`;

export default function EditorPage() {
    const [title, setTitle] = useState('狼刺客');
    const [breif, setBreif] = useState('本性如山水，善意似草木。');
    const [detail, setDetail] = useState(
        `旧时，有只小狼随大苍狼学习捕猎，他聪明勤勉，却总也捉不到食物。这日，大苍狼下令让小狼独自觅食，否则就得挨饿。小狼返回山场，潜在暗处，不久就逮到了只兔子。不想，那小狼并未立刻扑食，反倒小心翼翼地收敛着气力，帮兔子舔伤止血。
兔子见状，挣扎着逃脱了，小狼又疾奔去追。兔子慌不择路，跌入塘中，它扑腾着想游回岸上，却被追来的小狼一爪摁回水中。须臾，眼瞧兔子就要溺死，小狼又急急将其捞起，不断轻蹭它的脑袋，帮它缓过气来。兔子醒转，正不明所以，暗处忽传来大苍狼的呼嚎，小狼张皇失措，伸爪按住兔子，可用力太甚，只听咔嚓一响，抬爪再看，兔子已七窍喷红，死透了。
小狼伤心地啜泣不已，大苍狼上前一问，这才明白：原是小狼不忍杀兔子，所以屡次饶它性命，可又担心自己挨饿，始终也不愿放过它。听罢，大苍狼道：“你以为自己心慈手软，其实给自己和兔子都平添许多苦痛，思前想后，翻来覆去，倒不如从开始，就给彼此一个痛快。”
小狼似是从这话中悟出别番道理，后来他自创了一手扔镖暗杀的把式，又快又狠，自认这是给对手最大的仁慈。`);
    const [cate, setCate] = useState('unit');
    const [image, setImage] = useState('');
    const inputFile = useRef(null);
    const onAddClick = () => {
        addUnitInfo({
            title,
            breif,
            detail,
            cate,
            image
        })
    };
    const onResetClick = () => {
        setTitle('');
        setBreif('');
        setDetail('');
        setCate('');
    }
    
    const onUploadChange = (value) => {
        if(value.target.files) {
            const file = value.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            axios.post('//localhost:4000/write/uploadimage', formData).then((response) => {
                console.log('图片上传成功');
            }).catch((error) => {
                console.log(error);
            });
        }
    };

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
                    <div className={classes.pageForm__row__td}><input type="text" value={cate} onChange={(value)=>{setCate(value.target.value)}}/></div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>图片</div>    
                    <div className={classes.pageForm__row__td}>
                        <FileUploader/>
                        {/* <input type="text" value={image}/>
                        <input ref={inputFile} type="file" name="image" accept="image/*" onChange={onUploadChange}/>  */}
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