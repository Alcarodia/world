import Style from './AboutPage.module.css';

const AboutBook = ({ content }) => {
    return (
        <div>
            <li className={[Style.screen, Style.active].join(' ')}>
                { /* Emblem */ }
                <div className={[Style.media, Style.logo].join(' ')}>
                    <img className={[Style.logo].join(' ')} src='alcarodia.svg' alt='' style={{ filter:content.emblemColor }} />
                </div>

                { /* Title */ }
                <h3 style={{ color:content.textColor }}>
                    {content.title}
                    <br/>{content.subtitle}
                </h3>

                { /* Separator */ }
                <div className={Style.Separator}>
                    <img className={Style.LeftArrow} src='arrow.svg' alt='Left arrow' style={{ filter:content.emblemColor }} />
                    <img className={Style.RightArrow} src='arrow.svg' alt='Right arrow' style={{ filter:content.emblemColor }} />
                </div>

                { /* Summary */ }
                <p className={Style.BookSummary} style={{ color:content.textColor }}> {content.summary} </p>
            </li>
        </div>
    );
};

export default AboutBook;