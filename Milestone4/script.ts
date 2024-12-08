// importing data from html file
const formData = document.getElementById('user-input') as HTMLFormElement;
const finalResume = document.getElementById('display-resume') as HTMLDivElement;
// submission
formData.addEventListener('submit',(event : Event)=>{
    event.preventDefault();
    // assigning input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value
    // Dynamically generating resume content 
    const resumeHtml = `
    <h2><b> Editable Resume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name:</b><span contenteditable="true">${name}</span></p>
     <p><b>Phone NO:</b><span contenteditable="true">${phone}</span></p>
     <p><b>Email Address:</b><span contenteditable="true">${email}</span></p>
     <h3>Education</h3>
     <p contenteditable="true">${education}</p>
     <h3>Skills</h3>
     <p contenteditable="true">${skills}</p>
     Work Experience
     <p contenteditable="true">${workExperience}</p>
     `;
    //  Displaying Generated Resume
     if(finalResume){
        finalResume.innerHTML = resumeHtml;
     }else{
        console.error('Some Information is missing Please fill form again.');
     }
});