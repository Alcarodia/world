import Style from './ContactPage.module.css';

const ContactPage = () => {
    return (
        <div>
            <div className={Style.ContactPageBackground}></div>

            {/* Content here */}
            <div className={Style.ContactPage}>
                <h2> Content </h2>
            </div>
        </div>
    );
};

export default ContactPage;