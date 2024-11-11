import Global from '../Global.module.css';
import Style from './AuthorPage.module.css';

const FeaturedAuthorCard = ({ author, desc, href, img, socials }) => {
    return (
        <div className={[Global.Card, Style.AuthorPageContentCardFeatured].join(' ')}>
            { /* Image */ }
            {href !== "" ?
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <img className={Global.AlcarodianImage} src={img} alt="" />
                </a>
                : /* ELSE */
                <img className={Global.AlcarodianImage} src={img} alt="" />
            }

            { /* Content */ }
            <div className={Style.AuthorPageContentCardDescription}>
                { /* Title */ }
                <div className={Style.AuthorTitle}>
                    <h1 className={Global.NoMarginBlock}>
                        {author}
                    </h1>
                    { /* Description */ }
                    <p className={Global.NoMarginBlockStart}>
                        {desc}
                    </p>
                </div>

                { /* Separator */ }
                <div className={Global.Separator}>
                    <img className={Global.LeftArrow} src="arrow.svg" alt="Left arrow" />
                    <img className={Global.RightArrow} src="arrow.svg" alt="Right arrow" />
                </div>

                { /* Socials Bar */ }
                <div>
                    <p className={`${Global.NoMarginBlockStart} ${Global.AlcarodianTitle} ${Style.SocialsBar}`}>
                        {socials.map((icon, index) => (
                            icon[1] !== "" ?
                                <a href={icon[1]} target="_blank" rel="noopener noreferrer">
                                    <img className={`${Global.ToolIcon}`} key={index} src={icon[0]} alt={`icon-${index}`} />
                                </a>
                                : /* ELSE */
                                <img className={`${Global.ToolIcon}`} key={index} src={icon[0]} alt={`icon-${index}`} />
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedAuthorCard;