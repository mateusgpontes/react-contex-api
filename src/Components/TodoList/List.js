import React from 'react';
import styled from 'styled-components';

const StyleList = styled.ul `
    background: #333;
    color: #FFF;
`;

const List = () => (
    <StyleList>
        <li>Leite</li>
        <li>Café</li>
        <li>Açúcar</li>
    </StyleList>
);

export default List;