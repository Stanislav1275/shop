import React, {FC} from "react";

import * as ST from "./styled";


type Props = {
    isGreenBtnSelected: boolean,
    isFavorite: boolean,
    category: string,
    description: string,
    price: number,
    thumbnail: string
}
const Card: FC<Props> = ({isGreenBtnSelected, isFavorite, category, description, price, thumbnail}) => {
    return (
        <ST.Card>
            <ST.FavBlock>
                {isFavorite}
            </ST.FavBlock>
            <ST.ImgBlock>
                {thumbnail}
            </ST.ImgBlock>
            <ST.CategoryBlock>
                {category}
            </ST.CategoryBlock>
            <ST.DesBlock>
                {description}
            </ST.DesBlock>
            <div>
                <ST.PriceBlock>
                    {price} руб.
                </ST.PriceBlock>
                <ST.AddButton>
                    {isGreenBtnSelected}
                </ST.AddButton>
            </div>

        </ST.Card>
    );
};
export default Card;