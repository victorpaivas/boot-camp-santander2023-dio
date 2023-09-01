class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymus")

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("url-link")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);
        newsImage.src = this.getAttribute("photo") || "assets/default-photo.jpg"
        newsImage.alt = "Foto Da Noticia"

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `
        
.card{ 
    width: 500px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    box-shadow: 11px 10px 10px -10px rgba(0,0,0,0.68);
-webkit-box-shadow: 11px 14px 37px -14px rgba(0,0,0,0.68);
-moz-box-shadow: 11px 10px 10px -10px rgba(0,0,0,0.68);
justify-content: space-between;
}

.card__right > img{ 
    max-width: 300px;
    display: flex;
    justify-content: center;
}

.card__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}
.card__left > span {
    font-weight: 500;
}

.card__left > a {
    color: black;
    text-decoration: none;
    font-weight: bolder;
    margin-top: 15px;
    font-size: 25px;
}

.card__left > p {
    color: rgb(108, 108, 108);
}
        `;

        return style
    }
}

customElements.define("card-news", CardNews)