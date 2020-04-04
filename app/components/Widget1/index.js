import React from 'react';
import { curveCatmullRom } from 'd3-shape';
import Styled from 'styled-components';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

import WidgetContainer from '../WidgetContainer/index';
import WidgetBody from '../WidgetBody/index';
import SelectableHeader from '../SelectableHeader/index';
import P from '../P/index';
import ListHeader from '../ListHeader/index';

function Widget1() {
  return (
    <WidgetContainer width="70%">
      <WidgetBody>
        <div className="flex">
          <SelectableHeader>
            Users
            <P color="#8F8F8F" fontSize="30px">
              58K
            </P>
            <P color="green">
              <i className="fas fa-long-arrow-alt-up" /> 0.2%
            </P>
            <div>vs last 7 days</div>
          </SelectableHeader>
          <SelectableHeader>
            Course Completed
            <P color="#8F8F8F" fontSize="30px">
              5,700
            </P>
            <P color="green">
              <i className="fas fa-long-arrow-alt-up" /> 0.2%
            </P>
          </SelectableHeader>
          <SelectableHeader active>
            Learning Plan Completed
            <P color="#000" fontSize="30px">
              1,120
            </P>
            <P color="red">
              <i className="fas fa-long-arrow-alt-down" /> 0.4%
            </P>
          </SelectableHeader>
          <SelectableHeader>
            Learning Hour
            <P color="#8F8F8F" fontSize="30px">
              22m 40s
            </P>
            <P color="green">
              <i className="fas fa-long-arrow-alt-up" /> 0.2%
            </P>
          </SelectableHeader>
        </div>
        <XYPlot width={700} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <ChartLabel
            text="X Axis"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.025}
            yPercent={1.01}
          />

          <ChartLabel
            text="Y Axis"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: 'rotate(-90)',
              textAnchor: 'end',
            }}
          />
          <LineSeries
            className="first-series"
            data={[
              { x: 1, y: 3 },
              { x: 2, y: 5 },
              { x: 3, y: 15 },
              { x: 4, y: 12 },
            ]}
          />
          <LineSeries className="second-series" data={null} />
          <LineSeries
            className="third-series"
            curve="curveMonotoneX"
            data={[
              { x: 1, y: 10 },
              { x: 2, y: 4 },
              { x: 3, y: 2 },
              { x: 4, y: 15 },
            ]}
            strokeDasharray="7, 3"
          />
          <LineSeries
            className="fourth-series"
            curve={curveCatmullRom.alpha(0.5)}
            style={{
              strokeDasharray: '2 2',
            }}
            data={[
              { x: 1, y: 7 },
              { x: 2, y: 11 },
              { x: 3, y: 9 },
              { x: 4, y: 2 },
            ]}
          />
        </XYPlot>
        <ListHeader borderless>
          <P fontSize="13px" color="#8F8F8F">
            Last 7 days
          </P>
        </ListHeader>
      </WidgetBody>
    </WidgetContainer>
  );
}

export default Widget1;
