import Global from '../Global.module.css';
import Style from './ProjectsPage.module.css';

const ProjectFeatured = ({ project, desc, href, vid, tools }) => {
    return (
        <div className={Style.ProjectsPageContentCardFeatured}>
            <div className={Global.Card}>
                { /* Image */ }
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <video
                        src={vid}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={Global.AlcarodianImage}
                    />
                </a>

                { /* Content */ }
                <div className={Style.ProjectsPageContentCarddesc}>
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

export default ProjectFeatured;