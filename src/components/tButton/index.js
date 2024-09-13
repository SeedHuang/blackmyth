import styled from 'styled-components'

const Button = styled.div`
    border:1px solid #999;
    padding: 10px 20px;
    color: #999;
    font-size: 14px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
`;

export default function StyledButton(props) {
    return <Button onClick={props.onClick}>{props.text}</Button>
}