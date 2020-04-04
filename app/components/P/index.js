import React from 'react';
import Styled from 'styled-components';

const P = Styled.div`
    font-size:${props => (props.fontSize ? props.fontSize : '15px')};
    color:${props => (props.color ? props.color : '#FFF')};
    margin-bottom:${props => (props.last ? '1rem' : '')};
`;

export default P;
