// importing data from html file
var formData = document.getElementById('user-input');
var finalResume = document.getElementById('display-resume');
var shareableLinkcontainer = document.getElementById('shareable-linkcontainer');
var shareableLinkelement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('dowmload-button');
// submission
formData.addEventListener('submit', function (event) {
    event.preventDefault();
    // assigning input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var workExperience = document.getElementById('work-experience').value;
    // Saving form data in localStorage
    var resumeData = {
        name: name,
        phone: phone,
        email: email,
        education: education,
        skills: skills,
        workExperience: workExperience
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Dynamically generating resume content 
    var resumeHtml = "\n    <h2><b> Editable Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name:-</b> <span contenteditable =\"true\">".concat(name, "</span></p>\n     <p><b>Phone NO:-</b> <span contenteditable =\"true\">").concat(phone, "</span></p>\n     <p><b>Email Address:-</b> <span contenteditable =\"true\">").concat(email, "</span></p>\n     <h3>Education:-</h3>\n     <p contenteditable =\"true\">").concat(education, "</p>\n     <h3>Skills:-</h3>\n     <p contenteditable =\"true\">").concat(skills, "</p>\n     <h3>Work Experience:-</h3>\n     <p contenteditable=\"true\">").concat(workExperience, "</p>\n     ");
    //  Displaying Generated Resume
    if (finalResume) {
        finalResume.innerHTML = resumeHtml;
    }
    else {
        console.error('Some Information is missing Please fill form again.');
    }
    // for shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkcontainer.style.display = 'block';
    shareableLinkelement.href = shareableURL;
    shareableLinkelement.textContent = shareableURL;
});
// to download in PDF format
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
