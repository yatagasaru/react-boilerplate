import React from 'react';
import Styled from 'styled-components';

import H6 from '../H6/index';

function SideBarComponent() {
  return (
    <SideBar>
      <SideBarItems>
        <h5 className="cp itemActive">HOME</h5>
      </SideBarItems>
      <SideBarItems>
        <h5>LEARNING</h5>
        <Item>
          <H6>
            <i className="far fa-fw fa-gem" /> Courses
          </H6>
          <CoursesLabel>21</CoursesLabel>
        </Item>
        <Item>
          <H6>
            <i className="fab fa-fw fa-usb" /> Learning plans
          </H6>
        </Item>
      </SideBarItems>
      <SideBarItems>
        <h5>MANAGE</h5>
        <Item>
          <H6>
            <i className="fas fa-fw fa-user" /> Users
          </H6>
        </Item>
        <Item>
          <H6>
            <i className="fas fa-fw fa-certificate" /> Skills
          </H6>
        </Item>
        <Item>
          <H6>
            <i className="fas fa-fw fa-chart-area" /> Reports
          </H6>
        </Item>
        <Item>
          <H6>
            <i className="fas fa-fw fa-chart-line" /> Analytics
          </H6>
        </Item>
        <Item>
          <H6>
            <i className="fas fa-fw fa-bullhorn" /> Announcements
          </H6>
        </Item>
      </SideBarItems>
      <SideBarItems>
        <h5>CONFIGURE</h5>
        <Item>
          <H6>
            <i className="fas fa-fw fa-star-half-alt" /> Points
          </H6>
        </Item>
        <Item>
          <H6>
            <i className="fas fa-fw fa-certificate" /> Reward
          </H6>
        </Item>
        <Item>
          <H6>
            <i className="far fa-fw fa-envelope" /> Email templates
          </H6>
        </Item>
        <Item>
          <H6>
            <i className="fas fa-fw fa-info-circle" /> Company info
          </H6>
        </Item>
        <Item>
          <H6>
            <i className="fas fa-fw fa-user" /> Billings
          </H6>
        </Item>
      </SideBarItems>
    </SideBar>
  );
}

const SideBar = Styled.div`
    width:240px;
    min-height:calc(100vh - 50px);
    background-color:#FAFAFA;
    box-shadow: 0px 4px 5px -1px rgba(143,137,143,1);
`;
const SideBarItems = Styled.div.attrs({
  className: 'sideBarItems',
})`border-bottom: 3px solid #F2F2F2;padding: 0 1.5rem`;

const Item = Styled.div`
    margin:22px 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const CoursesLabel = Styled.div`
    background-color:#FA0A5B;
    border-radius: 5px;
    font-size: 10px;
    padding-left: 4px;
    padding-right: 4px;
    color:#FFF;
`;
export default SideBarComponent;
