import React from 'react';
import styled from 'styled-components';

const StyleList = styled.ul `
    background: ${props => props.theme.theme.backgroud};
    color: ${props => props.theme.theme.color};
    font-size: 18px;

    li {
        line-height: 36px;
    }
`;

const List = () => (
    <StyleList>
        <li>Leite</li>
        <li>Café</li>
        <li>Açúcar</li>
    </StyleList>
);

export default List;