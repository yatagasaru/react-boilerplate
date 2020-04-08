import React from 'react';
import Styled from 'styled-components';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from 'react-vis';

import WidgetContainer from '../WidgetContainer/index';
import WidgetBody from '../WidgetBody/index';
import P from '../P/index';
import ListHeader from '../ListHeader/index';
import SelectableHeader from '../SelectableHeader/index';

function Widget5() {
  const greenData = [
    { x: '08 Mar', y: 25000 },
    { x: '09', y: 20000 },
    { x: '10', y: 18000 },
    { x: '11', y: 15000 },
    { x: '12', y: 10000 },
    { x: '13', y: 5000 },
    { x: '14', y: 0 },
  ];

  const blueData = [
    { x: '08 Mar', y: 25000 },
    { x: '09', y: 20000 },
    { x: '10', y: 18000 },
    { x: '11', y: 15000 },
    { x: '12', y: 10000 },
    { x: '13', y: 5000 },
    { x: '14', y: 0 },
  ];

  return (
    <WidgetContainer width="100%">
      <p>How's your social learning activity?</p>
      <WidgetBody>
        <div className="flex">
          <SelectableHeader>Discussion</SelectableHeader>
          <SelectableHeader>Blog Post</SelectableHeader>
          <SelectableHeader active>Questions & Answers</SelectableHeader>
        </div>
        <XYPlot xType="ordinal" width={900} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            className="vertical-bar-series-example"
            data={greenData}
          />
          <VerticalBarSeries data={blueData} />
        </XYPlot>
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

export default Widget5;
