const template = document.createElement( 'template' );
template.innerHTML = `
    <style>
        h1 { color: red; }
    </style>
    <div>
        <h1> Welcome guys! </h1>
    </div>
`;

export class CardComponent extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild( template.content.cloneNode(true))
        
    }

    connectedCallback() {
        this.shadowRoot.querySelector('h1').innerHTML = this.getAttribute('data-settings')!
    }
}

