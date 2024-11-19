import Global from '../Global.module.css';

const AuthorCard = ({img}) => {
    return (
        <div className={Global.Card}>
            { /* Image */ }
            <img className={Global.AlcarodianImage} src={img} alt="" />
        </div>
    );
};

export default AuthorCard;