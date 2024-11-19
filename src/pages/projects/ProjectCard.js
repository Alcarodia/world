import Global from '../Global.module.css';
import Style from './ProjectsPage.module.css';

const ProjectCard = ({ project, desc, href, img, tools }) => {
    return (
        <div className={Style.ProjectsPageContentCard}>
            <div className={Global.Card}>
                { /* Image */ }
                {href !== "" ?
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <img className={[Global.AlcarodianImage, Global.BorderTopFull].join(' ')} src={img} alt="" />
                    </a>
                    : /* ELSE */
                    <img className={[Global.AlcarodianImage, Global.BorderTopFull].join(' ')} src={img} alt="" />
                }

                { /* Content */ }
                <div className={Style.ProjectsPageContentCardDescription}>
                    { /* Title */ }
                    <div className={Global.AlcarodianTitle}>
                        <h1 className={Global.NoMarginBlock}>
                            {project}
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

                    { /* Tools Bar */ }
                    <div>
                        <p className={`${Global.NoMarginBlockStart} ${Global.AlcarodianTitle} ${Style.ToolsBar}`}>
                            {tools.map((icon, index) => (
                                <img className={`${Global.ToolIcon}`} key={index} src={icon} alt={`icon-${index}`} />
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;