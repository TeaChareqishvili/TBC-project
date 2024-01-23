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
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
  {
    title: "React",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course2.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
  {
    title: "Intro to Python",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course3.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
  {
    title: "Advanced Python",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course4.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
  {
    title: "Advanced Cybersecurity Course",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course5.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
  {
    title: "ToT - Training of Trainers",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course6.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
  {
    title: "Blockchain",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course7.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
  {
    title: "DevOps",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course8.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
  {
    title: "Information Security Governance",
    registration: "რეგისტრაცია დასრულებულია",
    details: "კურსის დეტალები",
    image: "./images/course9.png",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" fill="none" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
];

// render data for training course

const trainingCoursesSection = document.getElementById(
  "training-course-container"
);

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

// frequent questions data

const question = [
  {
    question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    arrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#f4f4f4" stroke-width="2" stroke-linecap="round" cursor="pointer" stroke-linejoin="round"><path d="M19 9l-7 7-7-7"></path></svg>',
    answers: [
      {
        about: "კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:",
        answer:
          "I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე. III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს. IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.",
        PS: "* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.",
      },
    ],
  },

  {
    question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    arrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#f4f4f4" stroke-width="2" cursor="pointer" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9l-7 7-7-7"></path></svg>',
    answer:
      "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
  },
  {
    question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
    arrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#f4f4f4" stroke-width="2" cursor="pointer" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9l-7 7-7-7"></path></svg>',
    answer:
      "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.",
  },
];

// render data for frequent questions

const frequentQuestionSection = document.getElementById("questions");

question.map((info) => {
  if (info.hasOwnProperty("answers")) {
    frequentQuestionSection.innerHTML += `
     
        <div class='question'>
          <p>${info.question}</p>
         ${info.arrow}
        </div>
        <div class="border"></div>
        <div class="answer hide">
        ${info.answers
          .map(
            (answerInfo) => `
        <p>${answerInfo.about}></p>
        <p>${answerInfo.answer}</p>
        <p>${answerInfo.PS}</p>
      `
          )
          .join("")}
        </div>
       
      `;
  } else {
    frequentQuestionSection.innerHTML += `
   
        <div class="question">
          <p>${info.question}</p>
          ${info.arrow}
        </div>
        <div class="border"></div>
        <div class="answer hide">
           <p>${info.answer}</p>
        </div>
   
       
      `;
  }
});
