import Style from './AboutPage.module.css';

const AboutPage = () => {
    return (
        <div>
            <div className={Style.AboutPageBackground}></div>

            {/* Content here */}
            <div className={Style.AboutPage}>
                <h2> Content </h2>
            </div>
        </div>
    );
};

export default AboutPage;