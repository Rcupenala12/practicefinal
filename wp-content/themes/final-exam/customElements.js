class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class RenetteWasHere extends HTMLElement{
	  connectedCallback(){
		  this.innerHTML="Renette was here"; 
			  
		  }
}

customElements.define("x-renette" ,RenetteWasHere);

class TwoSidedMarket extends HTMLElement{
	 connectedCallback(){
		 this.innerHTML= `<a href="side a">odd jobs</a>&nbsp;<a href="side b">products</a>`;
			 
	 }
}
	
	customElements.define("x-twosided", TwoSidedMarket);