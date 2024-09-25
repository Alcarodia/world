import Global from './Global.module.css';
import Style from './AuthorPage.module.css';

const AuthorPage = () => {
    return (
        <div>
            { /* Content here */ }
            <div className={Style.AuthorPage}>
                <div className={Style.AuthorPageContent}>
                    <img className={Global.AlcarodianImage} src="images/author/Ca.png" alt="Ca, the father of Alcarodia" />
                    
                    <div className={Style.AuthorDescription}>
                        <div className={Global.AlcarodianTitle}>
                            <h1 className={Global.NoMarginBlock}>
                                { /* The span styles below are needed to remove a tiny space after the last letter caused by letter-spacing */ }
                                C<span style={{ letterSpacing: '0px' }}>A</span>
                            </h1>
                            <p className={Global.NoMarginBlockStart}>
                                TH<span style={{ letterSpacing: '0px' }}>E</span> FATHE<span style={{ letterSpacing: '0px' }}>R</span> O<span style={{ letterSpacing: '0px' }}>F</span> ALCARODI<span style={{ letterSpacing: '0px' }}>A</span>
                            </p>
                        </div>

                        <div className={Global.Separator}>
                            <img className={Global.LeftArrow} src="arrow.svg" alt="Left arrow" />
                            <img className={Global.RightArrow} src="arrow.svg" alt="Right arrow" />
                        </div>

                        <div>
                            <p className={`${Global.NoMarginBlockStart} ${Global.AlcarodianTitle}`}>
                                THE GO<span style={{ letterSpacing: '0px' }}>D</span> O<span style={{ letterSpacing: '0px' }}>F</span> CREATIO<span style={{ letterSpacing: '0px' }}>N</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorPage;