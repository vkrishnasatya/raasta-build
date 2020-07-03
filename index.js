
var app = window.document

class Component extends HTMLTemplateElement {
    constructor() {


    }
}

class AppElement extends HTMLElement {
    constructor(data) {
        const shadowRoot = this.attachShadow({mode: 'open'});
	shadowRoot.appendChild(fetch(data));
    }
}

 

function format(o) {
    return      
}

function assign(o) {
    return  
}

function fetch(data) {
    assign(format(data))
}  
