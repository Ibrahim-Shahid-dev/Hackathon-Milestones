// importing data from html file
var formData = document.getElementById('user-input');
var finalResume = document.getElementById('display-resume');
// submission
formData.addEventListener('submit', function (event) {
    event.preventDefault();
    // assigning input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var workExperience = document.getElementById('work-experience').value;
    // Dynamically generating resume content 
    var resumeHtml = "\n    <h2><b> Editable Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>Phone NO:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n     <p><b>Email Address:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n     <h3>Education</h3>\n     <p contenteditable=\"true\">").concat(education, "</p>\n     <h3>Skills</h3>\n     <p contenteditable=\"true\">").concat(skills, "</p>\n     Work Experience\n     <p contenteditable=\"true\">").concat(workExperience, "</p>\n     ");
    //  Displaying Generated Resume
    if (finalResume) {
        finalResume.innerHTML = resumeHtml;
    }
    else {
        console.error('Some Information is missing Please fill form again.');
    }
});
