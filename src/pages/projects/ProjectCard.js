import Global from '../Global.module.css';
import Style from './ProjectsPage.module.css';

const ProjectCard = ({ project, description, href, imageSrc, toolIcons }) => {
    return (
        <div className={[Global.Card, Style.ProjectsPageContentCard].join(' ')}>
            { /* Image */ }
            {href !== "" ?
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <img className={Global.AlcarodianImage} src={imageSrc} alt="" />
                </a>
                : /* ELSE */
                <img className={Global.AlcarodianImage} src={imageSrc} alt="" />
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
                        {description}
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
                        {toolIcons.map((icon, index) => (
                            <img className={`${Global.ToolIcon}`} key={index} src={icon} alt={`icon-${index}`} />
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;