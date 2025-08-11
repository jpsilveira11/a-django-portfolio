const home=document.getElementById('home');
const skills=document.getElementById('skills');
const projects=document.getElementById('projects');
const github=document.getElementById('github');
const contact=document.getElementById('contact');
const about=document.getElementById('about');
const themes=document.getElementById('themes');


function toHome(){
    home.style.display='block';
    homeBtn.classList.add('sidebar-active');
    skills.style.display='none';
    skillsBtn.classList.remove('sidebar-active');
    projects.style.display='none';
    projectsBtn.classList.remove('sidebar-active');
    github.style.display='none';
    githubBtn.classList.remove('sidebar-active');
    contact.style.display='none';
    contactBtn.classList.remove('sidebar-active');
    about.style.display='none';
    aboutBtn.classList.remove('sidebar-active');
    themes.style.display='none';
    themesBtn.classList.remove('sidebar-active');
}
const homeBtn=document.getElementById('to-home');
homeBtn.addEventListener('click',toHome);

function toSkills(){
    home.style.display='none';
    homeBtn.classList.remove('sidebar-active');
    skills.style.display='block';
    skillsBtn.classList.add('sidebar-active');
    projects.style.display='none';
    projectsBtn.classList.remove('sidebar-active');
    github.style.display='none';
    githubBtn.classList.remove('sidebar-active');
    contact.style.display='none';
    contactBtn.classList.remove('sidebar-active');
    about.style.display='none';
    aboutBtn.classList.remove('sidebar-active');
    themes.style.display='none';
    themesBtn.classList.remove('sidebar-active');
}
const skillsBtn=document.getElementById('to-skills');
skillsBtn.addEventListener('click',toSkills);

function toProjects(){
    home.style.display='none';
    homeBtn.classList.remove('sidebar-active');
    skills.style.display='none';
    skillsBtn.classList.remove('sidebar-active');
    projects.style.display='block';
    projectsBtn.classList.add('sidebar-active');
    github.style.display='none';
    githubBtn.classList.remove('sidebar-active');
    contact.style.display='none';
    contactBtn.classList.remove('sidebar-active');
    about.style.display='none';
    aboutBtn.classList.remove('sidebar-active');
    themes.style.display='none';
    themesBtn.classList.remove('sidebar-active');
}
const projectsBtn=document.getElementById('to-projects');
projectsBtn.addEventListener('click',toProjects);

function toGithub(){
    home.style.display='none';
    homeBtn.classList.remove('sidebar-active');
    skills.style.display='none';
    skillsBtn.classList.remove('sidebar-active');
    projects.style.display='none';
    projectsBtn.classList.remove('sidebar-active');
    github.style.display='block';
    githubBtn.classList.add('sidebar-active');
    contact.style.display='none';
    contactBtn.classList.remove('sidebar-active');
    about.style.display='none';
    aboutBtn.classList.remove('sidebar-active');
    themes.style.display='none';
    themesBtn.classList.remove('sidebar-active');
}
const githubBtn=document.getElementById('to-github');
githubBtn.addEventListener('click',toGithub);

function toContact(){
    home.style.display='none';
    homeBtn.classList.remove('sidebar-active');
    skills.style.display='none';
    skillsBtn.classList.remove('sidebar-active');
    projects.style.display='none';
    projectsBtn.classList.remove('sidebar-active');
    github.style.display='none';
    githubBtn.classList.remove('sidebar-active');
    contact.style.display='block';
    contactBtn.classList.add('sidebar-active');
    about.style.display='none';
    aboutBtn.classList.remove('sidebar-active');
    themes.style.display='none';
    themesBtn.classList.remove('sidebar-active');
}
const contactBtn=document.getElementById('to-contact');
contactBtn.addEventListener('click',toContact);

function toAbout(){
    home.style.display='none';
    homeBtn.classList.remove('sidebar-active');
    skills.style.display='none';
    skillsBtn.classList.remove('sidebar-active');
    projects.style.display='none';
    projectsBtn.classList.remove('sidebar-active');
    github.style.display='none';
    githubBtn.classList.remove('sidebar-active');
    contact.style.display='none';
    contactBtn.classList.remove('sidebar-active');
    about.style.display='block';
    aboutBtn.classList.add('sidebar-active');
    themes.style.display='none';
    themesBtn.classList.remove('sidebar-active');
}
const aboutBtn=document.getElementById('to-about');
aboutBtn.addEventListener('click',toAbout);

function toThemes(){
    home.style.display='none';
    homeBtn.classList.remove('sidebar-active');
    skills.style.display='none';
    skillsBtn.classList.remove('sidebar-active');
    projects.style.display='none';
    projectsBtn.classList.remove('sidebar-active');
    github.style.display='none';
    githubBtn.classList.remove('sidebar-active');
    contact.style.display='none';
    contactBtn.classList.remove('sidebar-active');
    about.style.display='none';
    aboutBtn.classList.remove('sidebar-active');
    themes.style.display='block';
    themesBtn.classList.add('sidebar-active');
}
const themesBtn=document.getElementById('to-themes');
themesBtn.addEventListener('click',toThemes);