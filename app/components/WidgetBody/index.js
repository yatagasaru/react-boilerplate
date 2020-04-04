import React from 'react';
import Styled from 'styled-components';

const WidgetBody = Styled.div`
    background-color:${props => props.backgroundColor || '#FFF'};
    display:flex;
    flex-direction:column;
    padding: 1rem 1rem .5rem;
    flex:1;
    box-shadow: 0px 2px 4px -1px rgba(143,137,143,1);
`;

export default WidgetBody;
