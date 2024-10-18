// get refrence to the form and display area 
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reloard
    //collect input value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("Phone").value;
    var education = document.getElementById("education").value;
    var Skills = document.getElementById("Skills").value;
    var experience = document.getElementById("experience").value;
    //generated the resume content dynamically
    var resumeHTML = "\n  <h2><b> Editable Resume</b></h2>\n  <h3>personal information</h3>\n  <p><b>Name:<b><span contenteditable = \"true\">".concat(name, "</span></p>\n   <p><b>Email:<b><span contenteditable = \"true\">").concat(email, "</span></p>\n    <p><b>Phone:<b><span contenteditable = \"true\">").concat(phone, "</span></p>\n\n <h3>Education</h3>\n <p>").concat(education, "</p>\n \n <h3>Experience</h3>\n <p>").concat(experience, "</p>\n\n <h3>Skills</h3>\n <p>").concat(Skills, "</p>\n\n  ");
    //display generated resume resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("the resume display element is missing..");
    }
});
