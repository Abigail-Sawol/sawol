import "./style.css"

export const MainPage = () => {
    return (
        <div>
            <div className="header-container">
                <strong className="header-main-text">SAWOL</strong>
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
            <div className="main-page-image-and-marquee">
                <div className="placeholder-image"></div>
                <div className="main-page-marquee-wrapper">
                    <div className="main-page-marquee-container">
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
                    </div>
                </div>
            </div>
            <div id="about-container">
                <div></div>
                <div>
                    <h3>HI, I'M ABIGAIL</h3>
                    <p>A holistic practitioner who believes strongly in the healing power of touch. My treatments combine clinical knowledge with a holistic lens and are fully tailored to you. I incorporate sound healing, aromatherapy and crystal healing alongside intentional touch, to bring you back to a place of peace.</p>
                    <p>I work hard to ensure that the treatments I provide are accessible to all; unlike traditional massage therapies, Indian Head Massage does not require clothing to be removed, and as it is performed in a seated position, the treatment can be completed in spaces that would not traditionally accommodate a massage table.</p>
                    <p>Not everyone is comfortable in a salon environment, and not everyone is able to access these, which is why my treatments have been designed to bring stillness and calm to you, wherever you feel most comfortable.</p>
                </div>
            </div>
            <div id="contact-container">
                <h1>CONTACT ME</h1>
                <span>Whether you have a question about a treatment, are interested in working together, or just want to know a little more about the services I provide, fill out the form and I'll be in touch.</span>
                <div className="contact-form-container"></div>
                <img src="./assets/Logo with Name Transparent.png" alt="Sāwol" />
            </div>
        </div>
    )
}