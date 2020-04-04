import React from 'react';
import Styled from 'styled-components';

const SelectableHeader = Styled.div`
    padding:.5rem;
    margin:0 1.5rem;
    border-top:${props =>
    props.active && !props.borderless
      ? '2px solid #21B631'
      : '2px solid transparent'};
    font-size:13px;
    cursor:pointer;
    color:${props => (props.active ? '#000' : '')};
    font-weight:${props => (props.active ? 'bold' : '')};
`;

export default SelectableHeader;
