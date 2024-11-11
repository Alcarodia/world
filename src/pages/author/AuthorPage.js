import Style from './AuthorPage.module.css';
import AuthorCard from './AuthorCard';
import FeaturedAuthorCard from './FeaturedAuthorCard';
import { featured, videogames, movies, anime_movies, animated_movies, tv, anime, cartoons } from './AuthorData';

const AuthorPage = () => {
    return (
        <div className={Style.AuthorPage}>

            <div className={Style.AuthorPageContentCardRowFeatured}>
                <FeaturedAuthorCard
                    key={featured.id}
                    author={featured.author}
                    desc={featured.desc}
                    href={featured.href}
                    img={featured.img}
                    socials={featured.socials}
                />
            </div>

            <h1 className={Style.CategoryTitle}>FAVORITE VIDEOGAMES</h1>
            <div className={Style.AuthorPageContentCardRow}>
                {videogames.map((item) => (
                    <AuthorCard
                        key={item.id} // Unique key for each card
                        author={item.author}
                        desc={item.desc}
                        href={item.href}
                        img={item.img}
                    />
                ))}
            </div>

            <h1 className={Style.CategoryTitle}>FAVORITE MOVIES</h1>
            <div className={Style.AuthorPageContentCardRow}>
                {movies.map((item) => (
                    <AuthorCard
                        key={item.id}
                        author={item.author}
                        desc={item.desc}
                        href={item.href}
                        img={item.img}
                    />
                ))}
            </div>

            <h1 className={Style.CategoryTitle}>FAVORITE ANIME MOVIES</h1>
            <div className={Style.AuthorPageContentCardRow}>
                {anime_movies.map((item) => (
                    <AuthorCard
                        key={item.id}
                        author={item.author}
                        desc={item.desc}
                        href={item.href}
                        img={item.img}
                    />
                ))}
            </div>

            <h1 className={Style.CategoryTitle}>FAVORITE ANIMATED MOVIES</h1>
            <div className={Style.AuthorPageContentCardRow}>
                {animated_movies.map((item) => (
                    <AuthorCard
                        key={item.id}
                        author={item.author}
                        desc={item.desc}
                        href={item.href}
                        img={item.img}
                    />
                ))}
            </div>

            <h1 className={Style.CategoryTitle}>FAVORITE TV SHOWS</h1>
            <div className={Style.AuthorPageContentCardRow}>
                {tv.map((item) => (
                    <AuthorCard
                        key={item.id}
                        author={item.author}
                        desc={item.desc}
                        href={item.href}
                        img={item.img}
                    />
                ))}
            </div>

            <h1 className={Style.CategoryTitle}>FAVORITE ANIME</h1>
            <div className={Style.AuthorPageContentCardRow}>
                {anime.map((item) => (
                    <AuthorCard
                        key={item.id}
                        author={item.author}
                        desc={item.desc}
                        href={item.href}
                        img={item.img}
                    />
                ))}
            </div>

            <h1 className={Style.CategoryTitle}>FAVORITE CARTOONS</h1>
            <div className={Style.AuthorPageContentCardRow}>
                {cartoons.map((item) => (
                    <AuthorCard
                        key={item.id}
                        author={item.author}
                        desc={item.desc}
                        href={item.href}
                        img={item.img}
                    />
                ))}
            </div>

        </div>
    );
};

export default AuthorPage;