import {styled} from "styled-components";

import Colors from "../../constants/colors";

export const Card = styled.div`
  background-color: ${Colors.WHITE};
  width: 180px;
  padding: 2px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 10px;
  
  border: 2px solid ${Colors.WHITEANDGRAY};
  align-items: center;
  justify-content: center;
  font-size: 12px;
  .footer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
`;
export const FavBlock = styled.div`
  align-self: flex-start;
  width: 32px;
  height: 32px;
  background-image: url(deactiveFav.png) !important;
  
  //background: url("activeFav.png") red;
  //background-color: red;
  //&>button{
  //  background: url("activeFav.png");
  //}
 x
`;
export const ImgBlock = styled.div`
  img,.skelet{
    max-width: 50px;
    max-height: 90px;
  }
  
`;
export const DesBlock = styled.div`
`;
export const CategoryBlock = styled.div`
`;
export const PriceBlock = styled.div`
`;
export const AddButton = styled.div`
`;