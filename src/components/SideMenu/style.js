import styled from 'styled-components';
import AntMenu from 'antd/lib/menu';
import { colors } from '../../style/constants';

export const Menu = styled(AntMenu)`
  width: 256px;
  background-color: ${colors.main};
  min-height: 100vh;
`;

export const MenuItem = styled(AntMenu.Item)`
  padding-left: 70px !important;
`;

export const AppLogoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 70px;
  margin-top: 30px;
`;

export const AppLogo = styled.img`
  width: 50px;
  height: 60px;
`;
