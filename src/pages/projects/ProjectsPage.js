import Style from './ProjectsPage.module.css';
import ProjectCard from './ProjectCard';
import FeaturedProjectCard from './FeaturedProjectCard';
import { featured_project, projects } from './ProjectsData';

const ProjectsPage = () => {
    return (
        <div className={Style.ProjectsPage}>

            <div className={Style.ProjectsPageContentCardRowFeatured}>
                <FeaturedProjectCard
                    key={featured_project.id}
                    project={featured_project.project}
                    description={featured_project.description}
                    href={featured_project.href}
                    videoSrc={featured_project.videoSrc}
                    toolIcons={featured_project.toolIcons}
                />
            </div>

            <div className={Style.ProjectsPageContentCardRow}>
                {projects.map((item) => (
                    <ProjectCard
                        key={item.id} // Unique key for each card
                        project={item.project}
                        description={item.description}
                        href={item.href}
                        imageSrc={item.imageSrc}
                        toolIcons={item.toolIcons}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProjectsPage;