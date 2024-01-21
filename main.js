// header scroll effect

window.addEventListener("scroll", function () {
  let header = document.getElementById("tbc-header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// learning courses data

const courses = [
  {
    title: "iOS Development",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course1.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
  {
    title: "React",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course2.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
  {
    title: "Intro to Python",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course3.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
  {
    title: "Advanced Python",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course4.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
  {
    title: "Advanced Cybersecurity Course",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course5.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
  {
    title: "ToT - Training of Trainers",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course6.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
  {
    title: "Blockchain",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course7.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
  {
    title: "DevOps",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course8.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
  {
    title: "Information Security Governance",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course9.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>'
  },
];

// render data for training course

const trainingCoursesSection = document.getElementById("training-course-container");

courses.map((course) => {
  trainingCoursesSection.innerHTML += `
   
        <div class="training-course-data">
            <div class="training-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="training-course-registration">
                <p class="training-title">${course.title}</p>
                <p class="training-registration">${course.registration}</p>
            </div>
            <div class="training-course-details">
              <span>${course.svg}</span>
              <span class="course-details">${course.details}</span>
            </div>    
        </div>
   
    `;
});
