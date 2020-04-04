import React from 'react';
import Styled from 'styled-components';

import WidgetContainer from '../WidgetContainer/index';
import WidgetBody from '../WidgetBody/index';
import ListHeader from '../ListHeader/index';
import P from '../P/index';
import { Th, Td, Tr } from '../Table/index';

function Widget4(props) {
  return (
    <WidgetContainer width="50%">
      <p>Who is your most active user?</p>
      <WidgetBody>
        <table width="100%">
          <tbody>
            <tr>
              <Th>Users</Th>
              <Th align="right">Completed</Th>
              <Th align="right">Points</Th>
            </tr>
            {props.users
              ? props.users.slice(0, 5).map((data, index) => (
                  <Tr key={index}>
                    <Td color="#74C97E">{data.name}</Td>
                    <Td align="right">{data.height}</Td>
                    <Td align="right">{data.mass}</Td>
                  </Tr>
                )) :
              : null}
          </tbody>
        </table>
        <ListHeader borderless>
          <P fontSize="13px" color="#8F8F8F" className="cp">
            Last 7 days <i className="fas fa-fw fa-xs fa-chevron-down" />
          </P>
          <P className="align-self-end cp" fontSize="12px" color="#74C97E">
            COURSE REPORT <i className="fas fa-fw fa-chevron-right" />
          </P>
        </ListHeader>
      </WidgetBody>
    </WidgetContainer>
  );
}

export default Widget4;
