import React from 'react';
import Styled from 'styled-components';

import Img from './Img';

function HeaderComponent(props) {
  return (
    <Header>
      <Logo>
        <Img src="https://i.ibb.co/D977Lg8/codemi.png" />
      </Logo>
      <NavbarMenu>
        <i className="fas fa-fw fa-lg fa-bell cp">
          <NotificationLabel>{props.notificationCount}</NotificationLabel>
        </i>
        <Avatar>
          <Img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" />
        </Avatar>
        <i className="fas fa-fw fa-xs fa-chevron-down cp" />
      </NavbarMenu>
    </Header>
  );
}

const Header = Styled.div`
  height:50px;
  display:flex;
  align-items:center;
  padding:0 1rem;
  box-shadow: 0px 2px 4px -1px rgba(143,137,143,1);
  z-index:1;
  background-color:#FAFAFA;
`;
const Avatar = Styled.div`
  background-color:#CCC;
  width:40px;
  height:40px;
  border-radius:50%;
  overflow:hidden;
  margin-left:1rem;
  cursor:pointer;
`;
const Logo = Styled.div`
  width:9%
`;
const NavbarMenu = Styled.div`
  margin-left:auto;
  display:flex;
  align-items:center;
`;
const NotificationLabel = Styled.div`
  font-size: 9px;
  position: absolute;
  top: 10px;
  right: 88px;
  z-index: 99;
  color: #FFF;
  border-radius: 2px;
  background-color: #FA0A5B;
  height: 14px;
  width: 11px;
`;

export default HeaderComponent;
