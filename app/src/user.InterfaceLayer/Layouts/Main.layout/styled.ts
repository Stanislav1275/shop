import {styled} from "styled-components";

import Colors from "../../constants/colors";


export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1080px;
  //padding: 30px;
  background-color: ${Colors.DIRTYWHITE};
  margin: 0 auto;
  border-radius: 10px;
  &>div{
    padding: 30px;
  }
  
`;