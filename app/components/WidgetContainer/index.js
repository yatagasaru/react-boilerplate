import React from 'react';
import Styled from 'styled-components';

const WidgetContainerComponent = Styled.div`
    width:${props => props.width};
    height:${props => props.height};
    margin:.5rem;
    display:flex;
    flex-direction:column;
`;

export default WidgetContainerComponent;
