import { block, flex, font, widthHeight } from 'helpers/mixins';
import styled from 'styled-components';

export const Friends = styled.ul`
  width: calc(100% / 3);
  ${block};
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const FriendItem = styled.li`
  ${flex({ jc: 'flex-start' })};
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(3)};
  gap: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.spacing(1)};
  box-shadow: ${props => props.theme.colors.boxShadow};
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(5)};
  }
`;

const Status = styled.span`
  ${widthHeight(12, 12)};
  border-radius: 50%;
`;

export const Online = styled(Status)`
  background-color: ${props => props.theme.colors.green};
`;

export const Offline = styled(Status)`
  background-color: ${props => props.theme.colors.red};
`;

export const Avatar = styled.img`
  border-radius: 10%;
  overflow: hidden;
  background: ${props => props.theme.colors.greyBg};
`;

export const UserName = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  ${font({ fs: 24, fw: 600, lh: 28 })};
  color: ${props => props.theme.colors.secondaryText};
`;
