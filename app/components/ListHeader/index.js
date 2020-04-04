import React from 'react';
import Styled from 'styled-components';

const ListHeader = Styled.div.attrs({
  className: 'flex justify-content-between',
})`
    border-bottom:${props => (props.borderless ? '' : '1px solid #F8F8F82E')};
    padding: .5rem 0 .25rem;
    margin-top:auto;
`;

export default ListHeader;
