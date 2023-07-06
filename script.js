
  var contactButton = document.getElementById("contact-button");
  var contactIcon = document.getElementById("contact-icon");
  var contactOverlay = document.getElementById("contact-overlay");
  var closeButton = document.getElementById("close-button");

  contactButton.addEventListener("click", function() {
    if (contactOverlay.style.display === "none") {
      contactIcon.src = "./images/close-icon.png";
      contactOverlay.style.display = "block";
      contactOverlay.classList.add("slide-in"); // Thêm class slide-in
    } else {
      contactIcon.src = "./images/contact-icon.png";
      contactOverlay.style.display = "none";
      contactOverlay.classList.remove("slide-in"); // Xóa class slide-in
    }
  });

  closeButton.addEventListener("click", function() {
    contactIcon.src = "./images/contact-icon.png";
    contactOverlay.style.display = "none";
    contactOverlay.classList.remove("slide-in"); // Xóa class slide-in
  });
