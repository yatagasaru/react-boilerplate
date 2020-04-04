import React from 'react';
import Styled from 'styled-components';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, VerticalBarSeries } from 'react-vis';

import WidgetContainer from '../WidgetContainer/index';
import ListHeader from '../ListHeader/index';
import WidgetBody from '../WidgetBody/index';
import P from '../P/index';

function Widget2(props) {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 12 },
    { x: 10, y: 8 },
    { x: 11, y: 5 },
    { x: 12, y: 4 },
    { x: 13, y: 9 },
    { x: 14, y: 1 },
    { x: 15, y: 7 },
    { x: 16, y: 6 },
    { x: 17, y: 3 },
    { x: 18, y: 2 },
    { x: 19, y: 13 },
    { x: 20, y: 8 },
    { x: 21, y: 5 },
    { x: 22, y: 4 },
    { x: 23, y: 9 },
    { x: 24, y: 1 },
    { x: 25, y: 7 },
    { x: 26, y: 6 },
    { x: 27, y: 3 },
    { x: 28, y: 2 },
    { x: 29, y: 14 },
  ];
  return (
    <WidgetContainer width="30%">
      <WidgetBody backgroundColor="#4184F4">
        <P fontSize="12px">Active Users right now</P>
        <P fontSize="50px">{props.activeUsers}</P>
        <ListHeader>
          <P fontSize="12px">Active views per minute</P>
        </ListHeader>
        <XYPlot height={150} width={300} color="#8FB9FB">
          <VerticalBarSeries data={data} />
        </XYPlot>
        <ListHeader>
          <P fontSize="12px" header>
            Top Active Pages
          </P>
          <P fontSize="12px" header>
            Active User
          </P>
        </ListHeader>
        <ListHeader>
          <P fontSize="12px" header>
            /#/
          </P>
          <P fontSize="12px" header>
            65
          </P>
        </ListHeader>
        <ListHeader>
          <P fontSize="12px" header>
            /#/
          </P>
          <P fontSize="12px" header>
            65
          </P>
        </ListHeader>
        <ListHeader>
          <P fontSize="12px" header>
            /#/
          </P>
          <P fontSize="12px" header>
            65
          </P>
        </ListHeader>
        <ListHeader>
          <P fontSize="12px" header>
            /#/
          </P>
          <P fontSize="12px" header>
            65
          </P>
        </ListHeader>
        <ListHeader>
          <P fontSize="12px">/#/</P>
          <P fontSize="12px" last>
            65
          </P>
        </ListHeader>
        <P className="align-self-end mt-1 cp" fontSize="12px">
          REAL-TIME REPORT <i className="fas fa-fw fa-chevron-right" />
        </P>
      </WidgetBody>
    </WidgetContainer>
  );
}

export default Widget2;
