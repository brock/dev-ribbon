(function (){
    function showRibbonIfMatchesHostname(hostname) {
        var ribbon;
        switch (true) {
          case /localhost/.test(hostname):
          case /.*\.dev$/.test(hostname):
          case /.*\.local$/.test(hostname):
            ribbon = 'localhost';
            break;
          case /^dev./.test(hostname):
          case /^test./.test(hostname):
          case /^stage./.test(hostname):
          case /^preview./.test(hostname):
            ribbon = 'development';
            break;
          default:
            break;
        }
        if (ribbon!==undefined){
            document.body.innerHTML += "<div id='dev-ribbon' class='top-left "+ribbon+"'>"+ribbon+"</div>";
        }
    }

    showRibbonIfMatchesHostname(window.location.hostname);
})();
