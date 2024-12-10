import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../components/firebaseConfig";
import React from "react";

export function SignIn() {
    return React.createElement(
        "button",
        { onClick: () => signInWithPopup(auth, new GoogleAuthProvider()) },
        "Sign In"
    );
}

export function SignOut() {
    return React.createElement(
        "div",
        null,
        `Hello, ${auth.currentUser.displayName} `,
        React.createElement(
            "button",
            { onClick: () => signOut(auth) },
            "Sign Out"
        )
    );
}

export function useAuthentication() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        return auth.onAuthStateChanged((user) => {
            user ? setUser(user) : setUser(null);
        });
    }, []);
    return user;
}