// header scroll effect

window.addEventListener('scroll', function() {
    let header = document.getElementById('tbc-header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// learning courses data 

const courses = [
    {
        title:"iOS Development",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course1.png"
    },
    {
        title:"React",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course2.png"
    },
    {
        title:"Intro to Python",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course3.png"
    },
    {
        title:"Advanced Python",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course4.png"
    },
    {
        title:"Advanced Cybersecurity Course",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course5.png"
    },
    {
        title:"ToT - Training of Trainers",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course6.png"
    },
    {
        title:"Blockchain",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course7.png"
    },
    {
        title:"DevOps",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course8.png"
    },
    {
        title:"Information Security Governance",
        registration:"რეგისტრაცია დასრულებულია",
        details: "კურსის დეტალები",
        image:"./images/course9.png"
    },
]

// render data for training course 

const trainingCoursesSection = document.getElementById('training-courses');

courses.map(course => {
    trainingCoursesSection.innerHTML += `
        <div class="training-course-container">
            <div class="training-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div>
                <p>${course.title}</p>
                <p>${course.description}</p>
            </div>
            <span>${course.details}</span>
        </div>
    `;
});