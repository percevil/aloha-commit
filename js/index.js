document.addEventListener("DOMContentLoaded", function() { 

  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
  });


/* MESSAGE POP UP SECTION FOR EMAIL */
  
  const messageForm = document.getElementById("message-form");
  // define other variables here if needed
  const messages = document.getElementById("messages");
  
  // add the line below
  const messageInput = document.getElementById("message");
  
  messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    // add the line below
    const messageValue = messageInput.value;
  
    if (messageValue !== "") {
      const listItem = document.createElement("li");
      listItem.innerText = messageValue;
      messages.append(listItem);
      messageInput.value = "";
    } else {
      alert('please enter a value');
    }
  });

});
