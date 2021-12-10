const questions = [
    {
        question: "What is the size of your team?",
        optionA: "Less than 4 people",
        optionB: "4-6 people",
        optionC: "7-10 people",
        optionD: "More than 10 people",
        optionE: "",
        optionF: "",
    },

    {
        question: "What is your team's average performance? You can use the burnout chart to help you decide.",
        optionA: "Underperforming (most of the time tasks are left unfinished)",
        optionB: "Low performance",
        optionC: "Varied a lot from Sprint to Sprint",
        optionD: "Expected performance (exactly what they commit to)",
        optionE: "High Performance",
        optionF: "Overperforming (do more than expected)"
    },

    {
        question: "What is the level of collaboration in the team?",
        optionA: "Regular collaboration happening between all",
        optionB: "High collaboration between SOME members",
        optionC: "Average collaboration (when needed)",
        optionD: "Low collaboration (hassle to get internal help)",
        optionE: "No collaboration",
        optionF: "",
    },
    
    {
        question: "Are members usually being late from meetings?",
        optionA: "Yes",
        optionB: "No",
        optionC: "",
        optionD: "",
        optionE: "",
        optionF: "",
    },
    
    {
        question: "How often are user stories added to backlog?",
        optionA: "As needed",
        optionB: "Once new project is assigned",
        optionC: "In a constant time (e.g., once a week)",
        optionD: "Regularly (a lot)",
        optionE: "",
        optionF: "",
    },
    
    {
        question: "How often are user stories discussed and edited?",
        optionA: "In every grooming session before Stroy Points are estimated",
        optionB: "Before every grooming session before Story Points are estimated",
        optionC: "In a constant time (e.g., once a week)",
        optionD: "Regularly (a lot)",
        optionE: "Never, after writing",
        optionF: "As needed (no structure in place)",
    },

    {
        question: "How many times grooming session happens?",
        optionA: "Twice a week for 2-week Sprint",
        optionB: "Once a week for 2-week Sprint",
        optionC: "Once a Sprint during Planning",
        optionD: "Once a Sprint before Planning",
        optionE: "Never",
        optionF: "Other",
    },

    {
        question: "What is the timebox used for Daily Scrum?",
        optionA: "15 minutes",
        optionB: "30 minutes",
        optionC: "60 minutes",
        optionD: "None",
        optionE: "",
        optionF: "",
    },
    
    {
        question: "What is the timebox used for Sprint Planning?",
        optionA: "Less than 2 hours",
        optionB: "2-4 hours",
        optionC: "5-6 hours",
        optionD: "7-8 hours",
        optionE: "More than 8 hours",
        optionF: "None",
    },

    {
        question: "What is the timebox used for The Sprint?",
        optionA: "Daily (less than a week)",
        optionB: "1 week",
        optionC: "2 weeks",
        optionD: "3 weeks",
        optionE: "4 weeks",
        optionF: "More than 4 weeks",
    },
    
    {
        question: "What is the timebox used for Sprint Review?",
        optionA: "30 minutes",
        optionB: "60 minutes",
        optionC: "90 minutes",
        optionD: "120 minutes",
        optionE: "180 minutes",
        optionF: "None",
    },
    
    {
        question: "What is the overall length of the Project?",
        optionA: "Small daily deliverable projects",
        optionB: "Short term (1-4 months)",
        optionC: "Moderate (4-8 months)",
        optionD: "Long term (8-12 months)",
        optionE: "Indefinite",
        optionF: "",
    },

    {
        question: "Are there a lot of uncertainties and external dependencies?",
        optionA: "A lot (almost all story tickets)",
        optionB: "Moderate (about half of stories)",
        optionC: "Low (almost never)",
        optionD: "",
        optionE: "",
        optionF: "",
    },
    
    {
        question: "Are there a lot of risks?",
        optionA: "A lot (almost all story tickets)",
        optionB: "Moderate (about half of stories)",
        optionC: "Low (almost never)",
        optionD: "",
        optionE: "",
        optionF: "",
    },

    
    {
        question: "Does managers have regular 1:1s?",
        optionA: "Yes",
        optionB: "No",
        optionC: "",
        optionD: "",
        optionE: "",
        optionF: "",
    },
        
    {
        question: "Are there 1-2 actionable items from Retro. meetings?",
        optionA: "Yes",
        optionB: "No",
        optionC: "",
        optionD: "",
        optionE: "",
        optionF: "",
    },
        
    {
        question: "Do stakeholders and product owners attend review meetings?",
        optionA: "Yes",
        optionB: "No",
        optionC: "",
        optionD: "",
        optionE: "",
        optionF: "",
    },
        
    {
        question: "How well prepared members are for Daily Scrum",
        optionA: "Very Low",
        optionB: "Low",
        optionC: "Normal",
        optionD: "High",
        optionE: "Very High",
        optionF: "None",
    },
        
    {
        question: "How well prepared members are for Sprint Planning",
        optionA: "Very Low",
        optionB: "Low",
        optionC: "Normal",
        optionD: "High",
        optionE: "Very High",
        optionF: "None",
    },
        
    {
        question: "How well prepared members are for Sprint Review",
        optionA: "Very Low",
        optionB: "Low",
        optionC: "Normal",
        optionD: "High",
        optionE: "Very High",
        optionF: "None",
    },
        
    {
        question: "How well prepared members are for Retrospective",
        optionA: "Very Low",
        optionB: "Low",
        optionC: "Normal",
        optionD: "High",
        optionE: "Very High",
        optionF: "None",
    },
]


let questionNumber = 1
let indexNumber = 0
const dict = {};


// function for displaying next question in the array to dom
function NextQuestion(index) {
    const currentQuestion = questions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    document.getElementById("option-five-label").innerHTML = currentQuestion.optionE;
    document.getElementById("option-six-label").innerHTML = currentQuestion.optionF;

}


function checkForAnswer() {
    const currentQuestion = questions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false && options[4].checked == false && options[5].checked == false ) {
        document.getElementById('option-modal').style.display = "flex"
    }
    

    if (options[0].checked === true) {
        //alert(document.getElementById("option-one-label").innerHTML)
        dict[questionNumber] = document.getElementById("option-one-label").innerHTML
        indexNumber++
        //set to delay question number till when next question loads
        setTimeout(() => {
            questionNumber++
        }, 1000)
    }
    if (options[1].checked === true) {
        //alert(document.getElementById("option-two-label").innerHTML)
        dict[questionNumber] = document.getElementById("option-two-label").innerHTML
        indexNumber++
        //set to delay question number till when next question loads
        setTimeout(() => {
            questionNumber++
        }, 1000)
    }
    if (options[2].checked === true) {
        //alert(document.getElementById("option-three-label").innerHTML)
        dict[questionNumber] = document.getElementById("option-three-label").innerHTML
        indexNumber++
        //set to delay question number till when next question loads
        setTimeout(() => {
            questionNumber++
        }, 1000)
    }
    if (options[3].checked === true) {
        //alert(document.getElementById("option-four-label").innerHTML)
        dict[questionNumber] = document.getElementById("option-four-label").innerHTML
        indexNumber++
        //set to delay question number till when next question loads
        setTimeout(() => {
            questionNumber++
        }, 1000)
    }
    if (options[4].checked === true) {
        //alert(document.getElementById("option-four-label").innerHTML)
        dict[questionNumber] = document.getElementById("option-five-label").innerHTML
        indexNumber++
        //set to delay question number till when next question loads
        setTimeout(() => {
            questionNumber++
        }, 1000)
    }
    if (options[5].checked === true) {
        //alert(document.getElementById("option-four-label").innerHTML)
        dict[questionNumber] = document.getElementById("option-six-label").innerHTML
        indexNumber++
        //set to delay question number till when next question loads
        setTimeout(() => {
            questionNumber++
        }, 1000)
    }
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber < 21) {
            NextQuestion(indexNumber)
        } else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let daily_scrum = ""
    let sprint_planning = ""
    let the_sprint = ""
    let sprint_review = ""
    let retrospective = ""
    let text = "Click Here!"
    let values = []
    for (var key in dict) {
        var value = dict[key]
        values.push(value)
        
        if(values[0]=="4-6 people" || values[0]=="Less than 4 people"){
            daily_scrum = "15-30 minute meetings every other day";
        } else if(values[0]=="7-10 people"){
            daily_scrum = "15-30 minute meeting every day. Can be skipped once in a while.";
        } else if(values[0]=="More than 10 people"){
            daily_scrum = "Split into two groups and have 15 minute meeting for each team";
        }else if(values[7]=="None"){
            daily_scrum = "Run only in emergency cases";
        } else if((values[1]=="High Performance" || values[1]=="Overperforming (do more than expected)") && (values[2]=="Regular collaboration happening between all" || values[2]=="High collaboration between SOME members") && values[3] == "Yes" && (values[17]=="Very Low" || values[17]=="Low" || values[17]=="None" || values[17]=="Normal") ){
            daily_scrum = "Mostly skip the meetings - they seem to be not effective for your team";
        } else {
            daily_scrum = "Keep whatever you are doing!";
        }
        
        
        
        if( (values[0]=="4-6 people" || values[0]=="Less than 4 people") && (values[5]=="Never, after writing" || values[5]== "In a constant time (e.g., once a week)" || values[5] =="As needed (no structure in place)") && (values[6]=="Once a Sprint during Planning" || values[6]== "Once a Sprint before Planning") && (values[11]=="Less than 2 hours" || values[8]== "2-4 hours" || values[8] == "5-6 hours" || values[8] =="None") && (values[11]=="Moderate (4-8 months)" || values[11]=="Long term (8-12 months)" || values[11]=="Indefinite") && (values[7]=="As needed" || values[4]=="Once new project is assigned" || values[4]=="In a constant time (e.g., once a week)") && (values[1]=="Underperforming (most of the time tasks are left unfinished)" || values[1]=="Low performance" || values[1]=="Varied a lot from Sprint to Sprint") && (values[18]=="Very Low" || values[18]=="Low" || values[18]=="None" || values[18]=="Normal")){
            sprint_planning = "Keep it under 6 hours. Consider asking for more preparation and increase time schedule another call next day if time exceeds 8 hours.";
        } else if( (values[0]=="7-10 people" || values[0]=="More than 10 people") && (values[5]=="Never, after writing" || values[5]== "In a constant time (e.g., once a week)" || values[5] =="As needed (no structure in place)") && (values[6]=="Once a Sprint during Planning" || values[6]== "Once a Sprint before Planning") && (values[8]=="7-8 hours" || values[8]== "More than 8 hours" || values[8] =="None") && (values[11]=="Moderate (4-8 months)" || values[11]=="Long term (8-12 months)" || values[11]=="Indefinite") && (values[4]=="As needed" || values[4]=="Once new project is assigned" || values[4]=="In a constant time (e.g., once a week)") && (values[1]=="Underperforming (most of the time tasks are left unfinished)" || values[1]=="Low performance" || values[1]=="Varied a lot from Sprint to Sprint") && (values[18]=="Very Low" || values[18]=="Low" || values[18]=="None" || values[18]=="Normal")){
            sprint_planning = "Keep it under 8 hours. Consider asking for more preparation and increase time to schedule another call the next day if time exceeds 8 hours.";
        } else {
            sprint_planning = "Keep whatever you are doing!";
        }
        
        
        
        if( (values[12]=="A lot (almost all story tickets)" || values[13]=="A lot (almost all story tickets)") && (values[11]=="Moderate (4-8 months)" || values[11]=="Short term (1-4 months)" || values[11]=="Small daily deliverable projects") && (values[9] != "4 weeks" && values[9] != "More than 4 weeks") &&  (values[4] != "Regularly (a lot)") && (values[5] != "In every grooming session before Stroy Points are estimated" && values[5] != "Before every grooming session before Story Points are estimated") && (values[6] == "Once a Sprint before Planning" || values[6] == "Once a Sprint during Planning")){
            the_sprint = "1-week Sprints are good option for you";
        } else if( (values[12]!="A lot (almost all story tickets)" || values[13]!="A lot (almost all story tickets)") && (values[11]!="Moderate (4-8 months)" && values[11]!="Short term (1-4 months)" || values[11]!="Small daily deliverable projects") && (values[9] == "4 weeks" || values[9] == "More than 4 weeks") &&  (values[4] == "Regularly (a lot)") && (values[5] == "In every grooming session before Stroy Points are estimated" || values[5] == "Before every grooming session before Story Points are estimated") && (values[6] != "Once a Sprint before Planning" || values[6] != "Once a Sprint during Planning") ){
            the_sprint = "3 or 4-week Sprints are good option for you.";
        } else {
            the_sprint = "2-week Sprints are good option for you";
        }
      
            
        if((values[0]=="Less than 4 people" || values[0]=="4-6 people") && (values[1]!="Underperforming (most of the time tasks are left unfinished)" && values[1]!="Low performance") && values[10]=="30 minutes" && (values[11]=="Small daily deliverable projects" || values[11]=="Short term (1-4 months)") && values[12]!="Low (almost never)" && values[13]!="Low (almost never)" && (values[19]=="Low" || values[19]=="Very Low")){
            sprint_review = "Sprint Reviews are not effective, you can skip them.";
        } else if(values[14]=="Yes" && (values[10]=="60 minutes" || values[10]=="90 minutes" || values[10]=="120 minutes" ) && values[19]=="Normal" && (values[4]=="As needed" || values[4]=="In a constant time (e.g., once a week)" || values[4]=="Regularly (a lot)") && (values[5]!="Never, after writing" && values[5]!="As needed (no structure in place)") && (values[2]=="Regular collaboration happening between all" || values[2]=="High collaboration between SOME members" || values[2]=="Average collaboration (when needed)")){
            sprint_review = "Keep the meetings informal.";
        } else if(values[16]=="No") {
            sprint_review = "Make stakeholders  and Product Owner attend."
        }else {
            sprint_review = "Keep what you are doing!";
        }
      
    
        if((values[20]=="Very Low" || values[20]=="Low" || values[20]=="Normal") && values[12]=="Low (almost never)" && values[13] =="Low (almost never)" && (values[11]=="Small daily deliverable projects" || values[11]=="Short term (1-4 months)" || values[11]=="Moderate (4-8 months)") && vales[5]!=="Never" && (values[1]=="Overperforming (do more than expected)" || values[1]=="High Performance" || values[1]=="Expected performance (exactly what they commit to)")  ){
            retrospective = "Retrospectives are NOT Necessary";
        } else {
            retrospective = "Have them and keep 1 hour for 1-week Sprint ratio.";
        }
        
        if (values[15]=="No"){
            retrospective = retrospective + " Have 1-2 actionable items after meeting.";
        }
      
        
    }
    
    //data to display to score board
    document.getElementById('score-modal').style.display = "flex"
    document.getElementById('daily-scrum').innerHTML = daily_scrum
    document.getElementById('sprint-planning').innerHTML = sprint_planning
    document.getElementById('the-sprint').innerHTML = the_sprint
    document.getElementById('sprint-review').innerHTML = sprint_review
    document.getElementById('retrospective').innerHTML = retrospective
}


//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    indexNumber = 0
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
