// importing data from html file
const formData = document.getElementById('user-input') as HTMLFormElement;
const finalResume = document.getElementById('display-resume') as HTMLDivElement;
const shareableLinkcontainer = document.getElementById('shareable-linkcontainer') as HTMLDivElement;
const shareableLinkelement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('dowmload-button') as HTMLButtonElement;
// submission
formData.addEventListener('submit',(event : Event) => {
    event.preventDefault();
    // assigning input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    // Saving form data in localStorage
    const resumeData = {
      name,
      phone,
      email,
      education,
      skills,
      workExperience
   };
   localStorage.setItem(username, JSON.stringify(resumeData));
    // Dynamically generating resume content 
    const resumeHtml = `
    <h2><b> Editable Resume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name:-</b> <span contenteditable ="true">${name}</span></p>
     <p><b>Phone NO:-</b> <span contenteditable ="true">${phone}</span></p>
     <p><b>Email Address:-</b> <span contenteditable ="true">${email}</span></p>
     <h3>Education:-</h3>
     <p contenteditable ="true">${education}</p>
     <h3>Skills:-</h3>
     <p contenteditable ="true">${skills}</p>
     <h3>Work Experience:-</h3>
     <p contenteditable="true">${workExperience}</p>
     `;
   //  Displaying Generated Resume
     if(finalResume){
        finalResume.innerHTML = resumeHtml;
     }else{
        console.error('Some Information is missing Please fill form again.');
     }
     // for shareable URL with the username only
     const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
   // Display the shareable link
     shareableLinkcontainer.style.display = 'block';
     shareableLinkelement.href = shareableURL;
     shareableLinkelement.textContent = shareableURL;
});
// to download in PDF format
downloadPdfButton.addEventListener('click', () => {
   window.print();
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
   const urlParams = new URLSearchParams(window.location.search);
   const username = urlParams.get('username');
   if (username) {
   const savedResumeData = localStorage.getItem(username);
   if (savedResumeData) {
   const resumeData = JSON.parse(savedResumeData);
   (document.getElementById('username') as HTMLInputElement).value = username;
   (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
   (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
   (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
   (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
   (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
   (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
   }}
   });