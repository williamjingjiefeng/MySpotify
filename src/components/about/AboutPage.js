import React, { useEffect } from "react";
import { PreferenceDemo } from "../../redux/dispatch/Demo/PreferenceDemo";

const AboutPage = () => {

    useEffect(() => {
        PreferenceDemo();
    }, []);

    return (
        <div>
            <h2>About</h2>
            <p>
                This application uses React, Redux, Redux thunk, React context provider for global data management,
                React Router, and many other helpful libraries. In addition, we are using ThemeProvider and styled components
                to build a theme of your choice and apply it to the rest of application on top of predefined sets of themes.

                Typescript is deployed to render all queued albums related pages, so coexistence of Babel and Typescript loaders
                is a feature of the entire application.
            </p>
        </div>
    );
};

export default AboutPage;
