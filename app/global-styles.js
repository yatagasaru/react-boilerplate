import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin:0;
    padding:0;
    height: 100vh;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color:#8F8F8F;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100vh;
    min-width: 100%;
  }

  .flex{
    display:flex;
  }
  .align-self-end{
    align-self:flex-end;
  }
  .justify-content-between{
    justify-content:space-between;
  }
  .m-0{
    margin:0
  }
  .p-0{
    padding:0
  }
  .mt-1{
    margin-top:.5rem;
  }
  .cp{
    cursor:pointer
  }
  .itemActive{
    color:#74C97E;
  }
  td, th{
    padding-top:8px;
    padding-left:8px;
    padding-right:8px;
    padding-bottom:15px;
  }
  tr{
    border-bottom:1px solid #00000014;
  }
`;

export default GlobalStyle;
