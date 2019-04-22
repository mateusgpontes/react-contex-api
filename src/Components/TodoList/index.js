import React from 'react';
import styled from 'styled-components';

const StyleList = styled.ul `
    background: #333;
    color: #FFF;
    font-size: 18px;

    li {
        line-height: 36px;
    }
`;

const List = (theme) => (
    <StyleList>
        { console.log(theme) }
        <li>Leite</li>
        <li>Café</li>
        <li>Açúcar</li>
    </StyleList>
);

export default List;