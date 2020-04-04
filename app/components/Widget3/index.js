import React from 'react';
import Styled from 'styled-components';

import WidgetContainer from '../WidgetContainer/index';
import WidgetBody from '../WidgetBody/index';
import P from '../P/index';
import ListHeader from '../ListHeader/index';
import { Td, Th, Tr } from '../Table/index';

function Widget3() {
  const dummyData = [
    {
      courses: 'Digital Marketing for Sales Person',
      completed: '15,423',
      completetion: '86,5%',
    },
    {
      courses: 'Getting Started with Microsoft Office 2016',
      completed: '14,143',
      completetion: '80,5%',
    },
    {
      courses: 'Marketing Fundamental',
      completed: '13,243',
      completetion: '76,5%',
    },
    {
      courses: 'Know Your Customer',
      completed: '10,243',
      completetion: '36,5%',
    },
    {
      courses: 'Excel Data Analysis for Dummies',
      completed: '9,243',
      completetion: '6,5%',
    },
    {
      courses: 'Excel 2016 - The Complete Excel',
      completed: '1,243',
      completetion: '5%',
    },
  ];
  return (
    <WidgetContainer width="50%">
      <p>What courses do your users visit?</p>
      <WidgetBody>
        <table width="100%">
          <tbody>
            <tr>
              <Th>Courses</Th>
              <Th align="right">Completed</Th>
              <Th align="right">Completetion %</Th>
            </tr>
            {dummyData.map((data, index) => (
              <Tr key={index}>
                <Td color="#74C97E">{data.courses}</Td>
                <Td align="right">{data.completed}</Td>
                <Td align="right">{data.completetion}</Td>
              </Tr>
            ))}
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

export default Widget3;
