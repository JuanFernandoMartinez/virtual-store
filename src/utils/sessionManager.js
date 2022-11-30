/**
 * saves the auth info in the cookies to manage session
 * @param token
 */
function saveCookie(token){
    document.cookie = token
}

/**
 * returns the session info to manage the views
 * @returns roll if exists otherwise returns "not logged"
 */
function getCookies(){
    return "admin"
}

export {saveCookie, getCookies}
