import Style from './AboutPage.module.css';
import AboutCard from './AboutCard';
import { new_world_data, new_world_years, old_world_data, old_world_years } from "./AboutData"
import { Chrono } from "react-chrono";

const AboutPage = () => {
    return (
        <div className={Style.AboutPage}>
            <div className={Style.TimelineHeader}>
                <h1 className={Style.TimelineTitle}>THE END OF ALCARODIA</h1>
            </div>

            <div className={Style.Timeline}>
                <Chrono
                    items={new_world_years}
                    mode="VERTICAL_ALTERNATING"
                    activeItemIndex="999"   // ? Prevents loading the first item when loading (Check 'Props' at https://www.npmjs.com/package/react-chrono?activeTab=readme)
                    disableToolbar="true"
                    borderLessCards="true"
                    cardHeight="600"        // ? Disables scrollbar on the cards, turns them into display:flex
                    classNames={{
                        card: Style.Card,
                        cardMedia: '',
                        cardSubTitle: '',
                        cardText: '',
                        cardTitle: '',
                        controls: '',
                        title: Style.CardTitle,
                    }}
                    theme={{
                        primary: 'white',
                        secondary: '',
                        cardBgColor: '',
                        titleColor: 'white',
                        titleColorActive: '',
                    }}
                    fontSizes={{
                        cardSubtitle: '0.85rem',
                        cardText: '0.8rem',
                        cardTitle: '1rem',
                        title: '1rem',
                    }}
                    mediaSettings={{
                        fit: 'contain'
                    }}
                    style={{
                        padding: "0px",
                    }}
                >
                    {new_world_data.map((item) => (
                        <AboutCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </Chrono>
            </div>

            <div className={Style.TimelineHeader}>
                <h1 className={Style.TimelineTitle}>THE GREAT DIVINE WAR</h1>
            </div>

            <div className={Style.Timeline}>
                <Chrono
                    items={old_world_years}
                    flipLayout="false"  // Broken ? Nothing changes if set to true
                    mode="VERTICAL_ALTERNATING"
                    activeItemIndex="999"
                    disableToolbar="true"
                    borderLessCards="true"
                    cardHeight="600"
                    classNames={{
                        card: Style.Card,
                        cardMedia: '',
                        cardSubTitle: '',
                        cardText: '',
                        cardTitle: '',
                        controls: '',
                        title: Style.CardTitle,
                    }}
                    theme={{
                        primary: 'white',
                        secondary: '',
                        cardBgColor: '',
                        titleColor: 'white',
                        titleColorActive: '',
                    }}
                    fontSizes={{
                        cardSubtitle: '0.85rem',
                        cardText: '0.8rem',
                        cardTitle: '1rem',
                        title: '1rem',
                    }}
                    mediaSettings={{
                        fit: 'contain'
                    }}
                >
                    {old_world_data.map((item) => (
                        <AboutCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </Chrono>
            </div>

            <div className={Style.TimelineHeader}>
                <h1 className={Style.TimelineTitle}>THE BIRTH OF ALCARODIA</h1>
            </div>
        </div>
    );
};

export default AboutPage;
