{
  document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    if (!checkCookie("langRedirected")) {
      let userLanguage = window.navigator.userLanguage || window.navigator.language;
      document.cookie = "langRedirected=true;path=/";
      if (userLanguage.includes('en')) {
        let newPath = document.querySelector('#languageSelector .language-english').getAttribute('href');
        window.location.href = newPath;
      } else if (userLanguage.includes('de')) {
        let newPath = document.querySelector('#languageSelector .language-deutsch').getAttribute('href');
        window.location.href = newPath;
      }
    }

  });

  function checkCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  }
}
