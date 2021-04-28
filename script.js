function scrollFct() {
    const myButton = document.getElementById("scrollBtn");
    if (window.pageYOffset > 300) {
      myButton.style.display = "block";
    }
    else {
      myButton.style.display = "none";
    }
  }
  
  // cand se apasa butonul, se revine sus in pagina
  function topFct(){
    window.scrollTo(0, 0);
  }

  function proiecteFct(){
    window.scrollTo(0, 750);
  }

  function despreFct(){
    window.scrollTo(0, 1510);
  }

