import {styled} from "styled-components";

import Colors from "../../../../constants/colors";
import BreakPoints from "../../../../constants/breakPoints";

export const Header = styled.div`
  flex: 0 1 auto;
  break-before: column;
  position: relative;
  padding: 30px;
  display: flex;
  //flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  
  &:before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: ${Colors.GRAY};
  }
  .logoBlock{
    justify-content: center;
    width: 245px;
    gap: 10px;
  }
  .profileBlock{
    width: 196px;
    &>button{
    }
  }
  @media (max-width: ${BreakPoints.MOBILE}px) {
    flex-direction: column !important;
  }
  @media (max-width: ${BreakPoints.SMALL_MOBILE}px) {
    & .profileBlock{
      width: calc(100% + 30px);
      &>button{
      }
    }
  }
`;