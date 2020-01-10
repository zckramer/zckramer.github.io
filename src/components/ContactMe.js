const Deact = require('../../libs/deact')

function ContactMe () {
    return Deact.create("ul", {class: "main__contact-me", id: "main__contact-me"}, [
            Deact.create("li", {class: "contact-me__git-hub"}, ContactLink("GitHub", "github-link", "https://github.com/zckramer")),
            Deact.create("li", {class: "contact-me__twitter"}, ContactLink("Twitter", "twitter-link", "https://twitter.com/ZCGAMER83")),
            Deact.create("li", {class: "contact-me__linked-in"}, ContactLink("LinkedIn", "linkedin-link", "https://www.linkedin.com/in/zckramer/")),
            Deact.create("li", {class: "contact-me__email"}, "zckramer83@gmail.com")
        ]
    )
}

function ContactLink (textContent, idToAdd, url) {
    const link = Deact.create("a" , {class: "contact-link", id: `${idToAdd}`, value: `${url}`}, `${textContent}`)
    link.addEventListener("click", () => {
        openContactTab(url);
    })
    return link;
}

function openContactTab (url) {
    window.open(url, '_blank', false)
}

module.exports = ContactMe