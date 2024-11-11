import Global from '../Global.module.css';
import Style from './AuthorPage.module.css';

const AuthorCard = ({img}) => {
    return (
        <div className={[Global.Card, Style.AuthorPageContentCard].join(' ')}>
            { /* Image */ }
            <img className={Global.AuthorImage} src={img} alt="" />
        </div>
    );
};

export default AuthorCard;