import React, {FC} from "react";

import activeFav from "./activeFav.png";
import deactiveFav from "./deactiveFav.png";
import added from "./added.svg";
import unadded from "./unadded.svg";
import * as ST from "./styled";
// import fav  from "../../Layouts/Main.layout/general.components/Header/assets/favorite.svg";

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
                <button>
                    {isFavorite?
                        <img src={activeFav} alt=""/>:
                        <img src={deactiveFav} alt=""/>
                    }
                </button>

            </ST.FavBlock>
            <ST.ImgBlock>
                <img src={thumbnail} alt=""/>
            </ST.ImgBlock>
            <ST.CategoryBlock>
                {category}
            </ST.CategoryBlock>
            <ST.DesBlock>
                {description}
            </ST.DesBlock>
            <div className="footer">
                <ST.PriceBlock>
                    <h6>Цена</h6>
                    <h6>
                        {price} руб.

                    </h6>
                </ST.PriceBlock>
                <ST.AddButton>
                    <button>
                        {isGreenBtnSelected?
                            <img src={added} alt=""/>:
                            <img src={unadded} alt=""/>
                        }
                    </button>
                </ST.AddButton>
            </div>

        </ST.Card>
    );
};
export default Card;