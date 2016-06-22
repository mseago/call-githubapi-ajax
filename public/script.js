'use strict';
if (this.GithubApp === undefined) this.GithubApp = {};


(function (context) {

var searchInput = document.querySelector('#search-input');
var resultsOfSearch = document.querySelector('#results');

  function start(){
    searchInput.addEventListener('keyup', function(evt){
      if(evt.keyCode === 13) {
        $.ajax("https://api.github.com/search/users?q=" + searchInput.value)
        .done(function(data){
          console.log(data);
          results.innerHTML = "";
          data.items.forEach(function(obj){
            var listItem = document.createElement('li');
            resultsOfSearch.appendChild(listItem);
            listItem.textContent = obj.login;
          })
        })
      }
    })

  }

window.GithubApp.start = start;

})(window.GithubApp);
