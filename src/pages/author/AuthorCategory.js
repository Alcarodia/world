import AuthorCard from './AuthorCard';
import Style from './AuthorPage.module.css';

const AuthorCategory = ({ title, data }) => {
  return (
    <div>
        <h1 className={Style.CategoryTitle}>{title}</h1>
        <div className={Style.AuthorPageContentCardRow}>
            {data.map((item) => (
                <AuthorCard
                    key={item.id} // Unique key for each card
                    img={item.img}
                />
            ))}
        </div>
    </div>
  );
};

export default AuthorCategory;