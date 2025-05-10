for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", gotClicked)

    function gotClicked() {
        var buttonId = this.id;
        switch(buttonId) {
            case "doh":
              var doh = new Audio("./audio/note-do.mp3");
              doh.play()
              break;
            case "mih":
                var mih = new Audio("./audio/note-mi.mp3");
                mih.play()
              break;
            case "reh":
                var reh = new Audio("./audio/note-re.mp3");
                reh.play()
              break;
            default:
              // code block
          }  
    }
}


