import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { CardComponent } from './classes/cardComponent.js';
window.customElements.define('card-quote', CardComponent);

const element = document.createElement( 'card-quote' );
const element2 = document.createElement( 'card-quote' );

let section = document.querySelector('ul') as HTMLElement;
console.log(element, section)
element2.setAttribute("data-settings", "Pedro Rogriguez")
element.setAttribute("data-settings", "Juan Luis Guerra");
section.appendChild(element);
section.appendChild(element2);