import styled from 'styled-components';
import { Link } from 'react-router';

const Wrapper = styled(Link)`
  margin: 0 16px 48px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 350px;
  width: 350px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
	background: black;
  transition: transform 500ms;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  ${(props) => props.theme.breakpoints.small} {
    margin: 0 64px 48px 64px;
  }
`;

const IconWrapper = styled.div`
  padding: 12px;
  width: 24px;
  height: 24px;
  border: 1px solid var(--font-color);
  border-radius: 50%;
  color: var(--font-color);

  ${(props) => props.theme.breakpoints.small} {
    padding: 12px;
    width: 22px;
    height: 22px;    
  }
`;

const Icon = styled.div`
  height: 24px;
  width: 24px;

  ${(props) => props.theme.breakpoints.small} {
    width: 22px;
    height: 22px;
  }
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: var(--font-color);

  ${(props) => props.theme.breakpoints.small} {
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
  color: var(--font-color);


  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 70%;
  margin-right: 8px;
  font-weight: 300;
  text-align: center;
  transform: translateY(-2.5px);
  color: var(--font-color);

  ${(props) => props.theme.breakpoints.small} {
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
  Text
}