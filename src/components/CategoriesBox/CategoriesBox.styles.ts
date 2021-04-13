import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1 1 auto;
  width: 350px;
  min-height: 350px;
  margin: 0 32px 48px 32px;
  background: ${(props): string => props.theme.boxBgColor};
  box-shadow: 0px 0px 5px 1px gray;
  /* border-width: 1px 2px;
  border-style: solid;
  border-color: #393838;
  transition: border-color; */
  transition: transform 500ms, box-shadow 500ms;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px red;
    /* border-color: red; */
    transform: scale(1.06);
  }
`;

const IconWrapper = styled.div`
  padding: 12px;
  width: 24px;
  height: 24px;
  border: 1px solid ${(props): string => props.theme.primaryTextColor};
  border-radius: 50%;
  color: ${(props): string => props.theme.primaryTextColor};

  ${(props): string => props.theme.breakpoints.small} {
    padding: 12px;
    width: 22px;
    height: 22px;    
  }
`;

const Icon = styled.div`
  height: 24px;
  width: 24px;

  ${(props): string => props.theme.breakpoints.small} {
    width: 22px;
    height: 22px;
  }
`;

const Title = styled.h4`
  margin: 0 1rem;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: ${(props): string => props.theme.tertiaryTextColor};

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 18px;
  }
`;

const DescriptionWrapper = styled.div`
  min-height: 40px;
`;

const Description = styled.p`
  margin: 0 1rem;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${(props): string => props.theme.quaternaryTextColor};


  ${(props): string => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const Check = styled.span`
  font-size: 16px;
  margin: 0 12px;
  font-weight: 300;
  text-align: center;
  transform: translateY(-2.5px);
  color: ${(props): string => props.theme.quaternaryTextColor};

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 14px;
  }
`;

export {
  Wrapper,
  IconWrapper,
  Icon,
  Title,
  DescriptionWrapper,
  Description,
  Check
};