import React from 'react';
import ReactGoogleAuth from 'react-google-auth';

function Example(props) {
    console.log("gapi exists", gapi);
    return <div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={props.onSignOutClick}>Sign out</button>
    </div>;
}

function Loader(props) {
    return <div>Loading...</div>;
}

function SignIn(props) {
    if(props.initializing) {
        return <div className="Text Text-emphasis">Initializing...</div>;
    }
    if(props.error) {
        console.log('Error', props.error);
        return <div className="Text Text-strong">Error!</div>;
    }
    return <div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={props.onSignInClick}>Sign in</button>
        {props.signingIn && <div>Signing in...</div>}
    </div>;
}

export default ReactGoogleAuth({
    clientId: "828692616521-a30cidgltv5cfhg8fbi344i9sqquj138.apps.googleusercontent.com",
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    loader: Loader,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    signIn: SignIn
})(Example);