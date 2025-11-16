function welcome() {
    var message = document.getElementById("welcome");

    message.firstChild.nodeValue = "Let's get ready to play the new Call of Duty game!";

    message.style.color = "#E50114";

    message.style.fontSize = "2em";
/*
    message.innerHTML = '<span style="color: #E50114; font-size: 2em;">Let\'s get ready to play some games!</span>';
*/
}

function gameParty(){
	const today = new Date();
	const event_date = new Date("2025-11-25");
	
	/* get the difference between dates  in milliseconds */
	   const diff = event_date.getTime() - today.getTime();
	
	/* convert those milliseconds to days */
	   const one_day = 24*60*60*1000;
	   
    /* get number of days */
	   const days = Math.round(diff/one_day);
	   
	/* display the value */
      let announcement = document.getElementById("party");
	  announcement.innerHTML = "<h2 style=\"color:#E50114\">There are " + days + " days until the new Call of Duty game party!</h2>";
}

function showLastModified() {
  const lastModDate = document.lastModified;

  const div = document.getElementById("lastModified");

  div.innerHTML = "This page was last modified on: " + lastModDate;
}

window.onload = showLastModified;