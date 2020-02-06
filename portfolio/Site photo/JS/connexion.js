$(function () {
//Création du cookie
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    if ('btoa' in window) {
      cvalue = btoa(cvalue);
    }
    document.cookie = cname + "=" + cvalue + "; " + expires + ';path=/';
  }


//Fonction pour transmettre le cookie aux fonctions
  function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
        end = dc.length;
      }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
  }

  
//Supprimer le cookie
function deleteCookie(name) { setCookie(name, '', -1); }



//Affichage erreur connexion
function sendURL(dataText){
  if (window.location.hash === dataText){
    $('.msgCoErr').css('visibility', 'visible');
  }
}
sendURL("#plsConnect");


//Comportement du bouton connexion/deconexion
  var cookieSession = getCookie('session');
  if (cookieSession == null) {
    $('#btnConnexion').html('Connexion');
    $('#confirm-command').html('Me connecter pour valider ma commande')
  } else {
    $('#btnConnexion').html('Déconnexion');
    $('#bvn').html('Connexion effectuée, vous pouvez valider votre commande');
  }


//Click bouton connexion/deconnexion
  $('#btnConnexion').click(function () {
    var cookieSession = getCookie('session');
    if (cookieSession == null) {
      console.log('debug if');
      window.location.replace('../HTML/connexion.html');
    } else {
      console.log('debug else');
      deleteCookie('session');
      window.location.replace('../HTML/site_photo.html');;
    }
  });


//Click bouton commande
  $('#confirm-command').click(function(){
    var cookieSession = getCookie('session');
    if (cookieSession == null){
      window.location.replace('connexion.html#plsConnect');
    } else {
      window.location.replace('validation.html');
    }
  });


//Connexion
  $("#sub-form").submit(function (e) {
    const x = $('#pseudo').val();
    const z = $('#pwd').val();
    if (x == "" || z == "") {
      $('.msgErr').css('visibility', 'visible');
      return false;
    } else {
      if(window.location.hash === '#plsConnect'){
      e.preventDefault();
      window.location.replace('panier.html?pseudo='+x);
      setCookie('session', x);
      } else {
      e.preventDefault();
      window.location.replace('../HTML/site_photo.html?pseudo='+x);
      setCookie('session', x);
      }
  }
  });


});