import Style from './AuthorPage.module.css';
import AuthorCategory from './AuthorCategory';
import AuthorFeatured from './AuthorFeatured';
import { featured, videogames, movies, anime_movies, animated_movies, tv, anime, cartoons } from './AuthorData';

const AuthorPage = () => {
    return (
        <div className={Style.AuthorPage}>

            <div className={Style.AuthorPageContentCardRowFeatured}>
                <AuthorFeatured
                    key={featured.id}
                    author={featured.author}
                    desc={featured.desc}
                    img={featured.img}
                    socials={featured.socials}
                />
            </div>

            <AuthorCategory title="FAVORITE VIDEOGAMES" data={videogames} />
            <AuthorCategory title="FAVORITE MOVIES" data={movies} />
            <AuthorCategory title="FAVORITE ANIME MOVIES" data={anime_movies} />
            <AuthorCategory title="FAVORITE ANIMATED MOVIES" data={animated_movies} />
            <AuthorCategory title="FAVORITE TV SHOWS" data={tv} />
            <AuthorCategory title="FAVORITE ANIME" data={anime} />
            <AuthorCategory title="FAVORITE CARTOONS" data={cartoons} />

        </div>
    );
};

export default AuthorPage;