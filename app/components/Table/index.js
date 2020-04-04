import React from 'react';
import Styled from 'styled-components';

const Th = Styled.th`
    font-size: 13px;
    font-weight: normal;
    text-align: ${props => props.align || 'left'};
`;
const Td = Styled.td`
    color:${props => props.color || ''};
    text-align:${props => props.align || 'left'};
    margin-bottom:5px;
`;
const Tr = Styled.tr`
    font-size: 12px;
    font-weight: normal;
`;

export { Th, Td, Tr };
