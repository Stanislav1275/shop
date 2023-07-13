import React, {FC} from "react";
import ContentLoader from "react-content-loader";

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
    thumbnail: string,
    id:string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card: FC<Props> = ({id,isGreenBtnSelected, isFavorite, category, description, price, thumbnail}) => {
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
export const SkeletonCard:FC = () => {
    return (
        <ST.Card>
            <ContentLoader
                speed={2}
                width={187}
                height={170}
                viewBox="0 0 187 170"
                backgroundColor="#f3f3f3"
                foregroundColor="#c9c9c9"
            >
                <rect x="28" y="7" rx="17" ry="17" width="150" height="91" />
                <rect x="29" y="105" rx="3" ry="3" width="150" height="15" />
                <rect x="29" y="125" rx="3" ry="3" width="93" height="15" />
                <rect x="28" y="144" rx="3" ry="3" width="80" height="19" />
                <rect x="146" y="130" rx="3" ry="3" width="32" height="32" />
            </ContentLoader>
        </ST.Card>
    );
};