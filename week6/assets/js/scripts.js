function sendAjaxRequest(form){
    var xhr = new XMLHttpRequest(),
        url = "https://script.google.com/macros/s/AKfycbxM3EIF1R7CX5BG4WIadKlEeclUByFgCzkk-YG40MnD3EsdTnYO/exec";
  
    var params = [].filter.call(form.elements, function (el) {
        return (el.type != 'checkbox' && el.type != 'radio') || el.checked;
      }).filter(function(el) { return !!el.name; }) //Nameless elements die.
      .filter(function(el) { return !el.disabled; }) //Disabled elements die.
      .map(function(el) {
        return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
      }).join('&');	
  
    console.log(params);
  
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
  
    xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(xhr.readyState === 4 && xhr.status === 200) { //submission in order 
  
      }
    }
    xhr.send(params);
  }
  
  document.querySelectorAll("form").forEach(function(el){
    el.setAttribute("novalidate", true);
  
    el.oninvalid = function(e){
      e.preventDefault();
    }
  
    el.querySelectorAll("[required]").forEach(function(input){
      input.addEventListener('blur', function (event) {   
        var error = hasError(event.target);
        if (error) {
          showError(event.target, error);
          return;
        }
        removeError(event.target);
      }, true);
    });
  
    function hasError(field){
      // Don't validate submits, buttons, file + reset inputs, and disabled fields
      if (field.disabled || field.type === 'reset' || field.type === 'submit' 
      || field.type === 'button' || field.type === 'hidden') return;
  
      var validity = field.validity;
  
      // If valid, return null
      if (validity.valid) return;
  
      return field.getAttribute("data-error"); 
    }
  
    function showError(field,error){
      field.classList.add('error');
      var id = field.id || field.name;
      if (!id) return;
    
      var message = field.form.querySelector('.error-message#error-for-' + id );
      if (!message) {
          message = document.createElement('small');
          message.className = 'error-message';
          message.id = 'error-for-' + id;
          field.nextSibling.insertAdjacentElement( 'beforeend',message );
      }
    
      field.setAttribute('aria-describedby', 'error-for-' + id);
      message.innerHTML = error;
      message.style.display = 'inline';
      message.style.visibility = 'visible';
    }
  
    function removeError(field){
      field.classList.remove('error');
      field.removeAttribute('aria-describedby');
  
      var id = field.id || field.name;
      if (!id) return;
  
      var message = field.form.querySelector('.error-message#error-for-' + id);
      if (!message) return;
  
      // If so, hide it
      message.innerHTML = '';
      message.style.display = 'none';
      message.style.visibility = 'hidden';
    }
    
    el.addEventListener("submit", function(e){
      var inputFields = el.querySelectorAll('[required]');
      var error, hasErrors;
      inputFields.forEach(inputFields, function(elm, i){
        error = hasError(elm);
        if (error) {
          showError(elm, error);
          if (!hasErrors)
            hasErrors = elm;
        }
      });
      if (hasErrors) {
        event.preventDefault();
        hasErrors.focus();
      } else {
        event.preventDefault();
        sendAjaxRequest(el);
      }
    }, true);
  });
  (function() {
    "use strict";
  
    let messages = [
      "Willkommen",
      "خوش آمدید",
      "Bixêrhatin",
      "So dhawaaw",
      "أهلاً بكم",
      "HOŞGELDİNİZ",
      "Bienvenue",
      "እንቋዕ ብድሓን መጻእኩም",
      "خوش کلیبسیز",
      "Ashamaa",
      "བཀྲ་ཤིས་བདེ་ལེགས།",
      "Bem-vindo",
      "မင်္ဂလာပါ",
      "ΚΑΛΩΣ ΗΡΘΑΤΕ",
      "Bienvenidos",
      "khush kelibsiz"
    ];
  
    let msgContainer = document.querySelector("header h3");
    var counter = 0;
    setInterval(animateMsg, 1500);
  
    function animateMsg() {
      msgContainer.innerHTML = messages[counter];
      counter++;
      if (counter >= messages.length) {
        counter = 0;
      }
    }
    /*
    window.addEventListener("load",function(){
      animateMsg(counter);
    });
    function animateMsg(){
      if(counter<messages.length){
        counter++;
      } else {
        counter = 0;
      }
      msgContainer.innerHTML = messages[counter];
      setTimeout(animateMsg, 1500);
    }*/
  
    /* check if section is in viewport and then change the url in the address bar */
    let sections = document.querySelectorAll("section");
    sections.forEach(function(el){
      if(elementInViewport(el,0)){
        let url = "#"+el.id;
        history.pushState('','',url);
      }
    });
  
  })();