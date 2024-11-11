import Style from './ProjectsPage.module.css';
import ProjectCard from './ProjectCard';
import ProjectFeatured from './ProjectFeatured';
import { featured, projects } from './ProjectsData';

const ProjectsPage = () => {
    return (
        <div className={Style.ProjectsPage}>

            <div className={Style.ProjectsPageContentCardRowFeatured}>
                <ProjectFeatured
                    key={featured.id}
                    project={featured.project}
                    desc={featured.desc}
                    href={featured.href}
                    vid={featured.vid}
                    tools={featured.tools}
                />
            </div>

            <div className={Style.ProjectsPageContentCardRow}>
                {projects.map((item) => (
                    <ProjectCard
                        key={item.id} // Unique key for each card
                        project={item.project}
                        desc={item.desc}
                        href={item.href}
                        img={item.img}
                        tools={item.tools}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProjectsPage;