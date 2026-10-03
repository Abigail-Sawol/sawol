import "./style.css"

export const MainPage = () => {
    return (
        <div>
            <div className="header-container">
                <strong className="header-main-text">SAWEENIE</strong>
                <div className="navigation-links-container">
                    <a onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about-container')?.scrollIntoView({behavior: 'smooth'});
                    }}>
                       ABOUT
                    </a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('my-services-container')?.scrollIntoView({behavior: 'smooth'});
                    }}>
                       MY SERVICES
                    </a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact-container')?.scrollIntoView({behavior: 'smooth'});
                    }}>
                       CONTACT
                    </a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('book-container')?.scrollIntoView({behavior: 'smooth'});
                    }}>
                       BOOK
                    </a>
                </div>
            </div>
            <div className="main-page-banner">
                <div className="placeholder-image"></div>
                <div className="main-page-scrolling-text-wrapper">

                    <div className="main-page-scrolling-text-container">
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>HOLISTIC PRACTITIONER</strong>
                        <img src="/assets/Star.png" alt="*" />
                        <strong>INDIAN HEAD MASSAGE</strong>
                        <img src="/assets/Star.png" alt="*" />
                    </div>
                </div>
            </div>
            <div className="test"></div>
            <div id="about-container"></div>
            <div className="test"></div>
        </div>
    )
}