// get refrence to the form and display area 

const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement;

// handle form submission
form.addEventListener(`submit`, (event: Event)=>{
  event.preventDefault();   //prevent page reloard

  //collect input value
  const name = (document.getElementById(`name`)as HTMLInputElement).value
  const email = (document.getElementById(`email`)as HTMLInputElement).value
  const phone = (document.getElementById(`Phone`)as HTMLInputElement).value
  const education = (document.getElementById(`education`)as HTMLTextAreaElement).value
  const Skills = (document.getElementById(`Skills`)as HTMLTextAreaElement).value
  const experience = (document.getElementById(`experience`)as HTMLTextAreaElement).value

  //generated the resume content dynamically

  const resumeHTML = `
  <h2><b> Editable Resume</b></h2>
  <h3>personal information</h3>
  <p><b>Name:<b><span contenteditable = "true">${name}</span></p>
   <p><b>Email:<b><span contenteditable = "true">${email}</span></p>
    <p><b>Phone:<b><span contenteditable = "true">${phone}</span></p>

 <h3>Education</h3>
 <p>${education}</p>
 
 <h3>Experience</h3>
 <p>${experience}</p>

 <h3>Skills</h3>
 <p>${Skills}</p>

  `;

  //display generated resume resume
  if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
  }else {
    console.error(`the resume display element is missing..`)
    
  }
});