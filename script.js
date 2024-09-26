let currentLevel = 1;
let score = 0;
let wrongAnswerCount = 0;
let hasSubmitted = false;
const maxWrongAnswers = 7;
const totalQuestions = 10;
let participantName = "";

// Questions for each level with explanations
const allQuestions = {
    level1: [
        {
            question: "What is the primary focus of Lean in Lean Six Sigma?",
            options: ["Reducing waste", "Maximizing output", "Improving profitability", "Reducing headcount"],
            correct: 0,
            explanation: "Lean focuses on reducing waste to improve efficiency and value."
        },
        {
            question: "Which of the following is NOT a phase in DMAIC?",
            options: ["Design", "Measure", "Control", "Analyze"],
            correct: 0,
            explanation: "'Design' is part of DMADV, not DMAIC, which stands for Define, Measure, Analyze, Improve, Control."
        },
        {
            question: "What does 'Kaizen' stand for in Lean?",
            options: ["Continuous improvement", "Quick fix", "Root cause analysis", "Elimination of defects"],
            correct: 0,
            explanation: "Kaizen is a Japanese term meaning continuous improvement."
        },
        {
            question: "Which tool is used to map a process from suppliers to customers?",
            options: ["SIPOC", "Fishbone Diagram", "Control Chart", "Pareto Chart"],
            correct: 0,
            explanation: "SIPOC (Suppliers, Inputs, Process, Outputs, Customers) is a tool used to map processes from suppliers to customers."
        },
        {
            question: "What is the main goal of Six Sigma?",
            options: ["Reducing defects to near-zero levels", "Increasing profits", "Improving employee satisfaction", "Reducing inventory"],
            correct: 0,
            explanation: "Six Sigma aims to reduce defects to near-zero, focusing on quality improvement."
        },
        {
            question: "Which of the following is NOT one of the 8 wastes in Lean?",
            options: ["Overproduction", "Defects", "Waiting", "Employee training"],
            correct: 3,
            explanation: "Employee training is not one of the 8 wastes in Lean. The 8 wastes include overproduction, defects, waiting, etc."
        },
        {
            question: "In the 'Define' phase of DMAIC, what is the primary objective?",
            options: ["To identify the problem and set project goals", "To improve the process", "To control the process", "To implement new tools"],
            correct: 0,
            explanation: "In the Define phase, the main goal is to identify the problem and set clear project goals."
        },
        {
            question: "Which of the following is NOT a key Lean Six Sigma metric?",
            options: ["Lead time", "Cycle time", "Customer satisfaction", "Marketing expenditure"],
            correct: 3,
            explanation: "Marketing expenditure is not a metric used in Lean Six Sigma. Key metrics include lead time and cycle time."
        },
        {
            question: "What does the 5S system help improve?",
            options: ["Workplace organization", "Customer engagement", "Process profitability", "Product innovation"],
            correct: 0,
            explanation: "5S is a system focused on improving workplace organization."
        },
        {
            question: "What is the significance of 99.99966% in Six Sigma?",
            options: ["It refers to a defect rate of 3.4 defects per million opportunities", "It represents a process failure rate", "It represents the project success rate", "It is an efficiency threshold for DMAIC projects"],
            correct: 0,
            explanation: "99.99966% refers to the Six Sigma defect rate, which is 3.4 defects per million opportunities."
        }
    ],
    level2: [
        {
            question: "Which tool is used to identify and prioritize potential causes of problems?",
            options: ["Pareto Chart", "Kanban Board", "Control Chart", "Flowchart"],
            correct: 0,
            explanation: "A Pareto Chart helps identify and prioritize the most significant problems using the 80/20 rule."
        },
        {
            question: "In the 'Measure' phase of DMAIC, which tool is commonly used to display data trends over time?",
            options: ["Control Chart", "Fishbone Diagram", "SIPOC", "5 Whys"],
            correct: 0,
            explanation: "A Control Chart is used in the Measure phase to monitor data trends over time."
        },
        {
            question: "What is the purpose of a Value Stream Map?",
            options: ["To visualize the flow of materials and information in a process", "To control costs", "To manage inventory", "To forecast market trends"],
            correct: 0,
            explanation: "Value Stream Mapping visualizes the flow of materials and information in a process to identify inefficiencies."
        },
        {
            question: "A team is consistently missing deadlines in their project. What Lean tool would you use to visualize work in progress and identify bottlenecks?",
            options: ["Kanban", "5S", "Control Chart", "Pareto Chart"],
            correct: 0,
            explanation: "Kanban helps visualize work in progress and identify bottlenecks in production."
        },
        {
            question: "In the 'Analyze' phase, which tool is used to investigate the root cause of a problem?",
            options: ["Fishbone Diagram", "Control Chart", "Gantt Chart", "Histogram"],
            correct: 0,
            explanation: "Fishbone Diagrams (Ishikawa) help investigate root causes of problems during the Analyze phase."
        },
        {
            question: "Which Six Sigma methodology is best for improving processes that are already established but need refinement?",
            options: ["DMAIC", "DMADV", "Kanban", "Poka-Yoke"],
            correct: 0,
            explanation: "DMAIC is used for improving existing processes, while DMADV is used for creating new processes."
        },
        {
            question: "In a Six Sigma project, a process has a Cp of 1.5. What does this indicate?",
            options: ["The process is capable and exceeds the required specification limits", "The process is stable but does not meet specifications", "The process has a high defect rate", "The process is performing at the Six Sigma level"],
            correct: 0,
            explanation: "A Cp of 1.5 means the process is capable and exceeds specification limits."
        },
        {
            question: "What is a key principle of Lean when addressing inefficiencies?",
            options: ["Focus on reducing non-value-added activities", "Prioritize revenue growth", "Maximize resource usage", "Increase product variety"],
            correct: 0,
            explanation: "Lean focuses on reducing non-value-added activities to improve process efficiency."
        },
        {
            question: "A control chart shows several points outside the control limits. What action should be taken?",
            options: ["Investigate potential special causes of variation", "Redesign the entire process", "Reduce the control limits", "Ignore the outliers"],
            correct: 0,
            explanation: "Points outside control limits indicate special causes that require investigation."
        },
        {
            question: "In a Lean Six Sigma project, a team decides to use FMEA. What is the primary objective of this tool?",
            options: ["To identify potential failure modes and assess their impact", "To assess the financial performance of the process", "To determine the team's performance", "To map out the current state of the process"],
            correct: 0,
            explanation: "Failure Mode and Effects Analysis (FMEA) is used to identify and assess the impact of potential failure modes."
        }
    ],
    level3: [
        {
            question: "A manufacturing process has been improved using Lean Six Sigma, but defects are still occurring sporadically. What tool would you use to monitor process stability over time?",
            options: ["Control Chart", "Gantt Chart", "Pareto Chart", "Value Stream Mapping"],
            correct: 0,
            explanation: "Control Charts are used to monitor process stability over time."
        },
        {
            question: "Your team has reduced lead time by 20%, but the process is still facing customer complaints about inconsistent quality. What Lean Six Sigma tool can help you identify the cause?",
            options: ["Fishbone Diagram", "Control Chart", "Kanban", "Process Map"],
            correct: 0,
            explanation: "Fishbone Diagrams help identify the root causes of inconsistent quality."
        },
        {
            question: "In a project involving multiple departments, delays are frequently occurring due to poor handoffs between teams. What Lean tool can best address this issue?",
            options: ["Value Stream Mapping", "5 Whys", "Kaizen", "Kanban"],
            correct: 0,
            explanation: "Value Stream Mapping can help visualize and optimize cross-department processes."
        },
        {
            question: "A company is launching a new product, and they want to ensure the design meets customer needs while maintaining high quality. Which Six Sigma methodology should be used?",
            options: ["DMADV", "DMAIC", "Poka-Yoke", "Kaizen"],
            correct: 0,
            explanation: "DMADV is used to design new processes or products that meet customer needs and high-quality standards."
        },
        {
            question: "After implementing a series of process improvements, your team notices that productivity has increased, but waste levels are still high. What Lean Six Sigma technique should be applied to reduce waste?",
            options: ["Kaizen", "Kanban", "Poka-Yoke", "FMEA"],
            correct: 0,
            explanation: "Kaizen focuses on continuous improvement and waste reduction."
        },
        {
            question: "A process improvement has been implemented, and the team is ready to hand it over to the operations department. What phase of DMAIC focuses on maintaining the improvement over time?",
            options: ["Control", "Improve", "Analyze", "Measure"],
            correct: 0,
            explanation: "The Control phase ensures the improvements are sustained over time."
        },
        {
            question: "A customer reports that deliveries from your team are consistently delayed. You have data showing that production time has been reduced, but transportation issues are still occurring. What Lean tool should you use to address the problem?",
            options: ["Value Stream Mapping", "Control Chart", "5S", "FMEA"],
            correct: 0,
            explanation: "Value Stream Mapping can be used to visualize and optimize the entire process, including transportation."
        },
        {
            question: "During an improvement project, your team finds that a significant amount of time is wasted during changeovers between production runs. What Lean tool can help reduce this time?",
            options: ["SMED (Single-Minute Exchange of Dies)", "Control Chart", "5 Whys", "Gemba Walk"],
            correct: 0,
            explanation: "SMED is a Lean technique aimed at reducing changeover times."
        },
        {
            question: "In a process where defects have been reduced significantly, but there are still occasional outliers, what should be your next step to further stabilize the process?",
            options: ["Conduct a root cause analysis for the outliers", "Redesign the entire process", "Increase production capacity", "Use FMEA to forecast future issues"],
            correct: 0,
            explanation: "Conducting a root cause analysis for the outliers will help stabilize the process further."
        },
        {
            question: "Your team has implemented a continuous flow in a manufacturing process, but you're still noticing inefficiencies related to uneven workload distribution. Which Lean tool can help visualize and balance the workload?",
            options: ["Heijunka (Leveling)", "Poka-Yoke", "Kanban", "5S"],
            correct: 0,
            explanation: "Heijunka, or workload leveling, helps balance the workload to reduce inefficiencies."
        }
    ]
};

// Shuffle function for answers only
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    participantName = document.getElementById("participantName").value.trim();
    if (!participantName) {
        alert("Please enter your name to start.");
        return;
    }

    resetQuizState();
    document.getElementById("intro").style.display = "none";
    document.getElementById("questionnaire").style.display = "block";
    updateHeader();
    loadQuestions(currentLevel);
}

function updateHeader() {
    const headerElement = document.getElementById("mainHeader");
    headerElement.innerText = `Welcome, ${participantName}! You are on Level ${currentLevel}. Good luck!`;
}

function loadQuestions(level) {
    const questionContainers = document.querySelectorAll('.quiz-level');
    questionContainers.forEach(container => container.style.display = 'none');

    const questionContainer = document.getElementById(`level${level}`);
    questionContainer.innerHTML = "";
    let questionSet = allQuestions[`level${level}`];

    questionSet.forEach((q, index) => {
        let shuffledOptions = shuffle([...q.options]);

        let questionElement = document.createElement("div");
        questionElement.classList.add('question-container'); // Adding class for spacing
        questionElement.innerHTML = `<h4>${index + 1}. ${q.question}</h4>`;
        shuffledOptions.forEach((option, optIndex) => {
            questionElement.innerHTML += `
                <input type="radio" name="q${index}" value="${optIndex}">
                <label for="q${index}">${option}</label><br>
            `;
        });
        questionContainer.appendChild(questionElement);

        // Store the correct answer index after shuffling for each question
        q.shuffledCorrectIndex = shuffledOptions.indexOf(q.options[q.correct]);
    });

    questionContainer.style.display = "block";
}

function submitQuiz() {
    if (hasSubmitted) {
        alert("You cannot resubmit.");
        return;
    }

    let levelScore = 0;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";

    let currentLevelDiv = document.getElementById(`level${currentLevel}`);
    let questions = currentLevelDiv.querySelectorAll("input[type='radio']:checked");

    if (questions.length < totalQuestions) {
        alert("Please answer all questions.");
        return;
    }

    let correctAnswers = allQuestions[`level${currentLevel}`].map(q => q.shuffledCorrectIndex);
    questions.forEach((question, index) => {
        let correctAnswer = correctAnswers[index];
        let explanation = allQuestions[`level${currentLevel}`][index].explanation;

        if (parseInt(question.value) === correctAnswer) {
            levelScore++;
            resultElement.innerHTML += `<p>Question ${index + 1}: Correct! <br> ${explanation}</p>`;
        } else {
            wrongAnswerCount++;
            resultElement.innerHTML += `<p>Question ${index + 1}: Incorrect. Correct answer: "${allQuestions[`level${currentLevel}`][index].options[correctAnswer]}". <br> ${explanation}</p>`;
        }
    });

    score += levelScore;
    hasSubmitted = true;

    if (wrongAnswerCount >= maxWrongAnswers) {
        alert("Too many wrong answers. Please try again.");
        document.getElementById("restartButton").style.display = "block";
        return;
    }

    if (levelScore >= 5) {
        if (currentLevel < 3) {
            document.getElementById("nextLevelButton").style.display = "block";
        } else {
            document.getElementById("finishButton").style.display = "block";
        }
    } else {
        resultElement.innerHTML += "<p>You did not pass. Please restart.</p>";
        document.getElementById("restartButton").style.display = "block";
    }
}

function nextLevel() {
    document.getElementById(`level${currentLevel}`).style.display = "none";
    currentLevel++;
    loadQuestions(currentLevel);
    document.getElementById("result").innerHTML = "";
    document.getElementById("nextLevelButton").style.display = "none";
    hasSubmitted = false;
    updateHeader();
}

function displayFinalScore() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Congratulations, ${participantName}! You scored ${score} out of 30.</p>`;
    displayCustomFeedback(score);
    document.getElementById("thankYouPage").style.display = "block";
    document.getElementById("questionnaire").style.display = "none";
}

// Function to display custom feedback based on the final score
function displayCustomFeedback(finalScore) {
    const feedbackElement = document.getElementById("feedback");

    if (finalScore <= 10) {
        feedbackElement.innerHTML = `
            <p><strong>Score Range: 1-10 (Needs Significant Improvement)</strong></p>
            <p>Your current score suggests there are major areas for improvement in applying Lean Six Sigma principles. Here are some recommended actions:</p>
            <ul>
                <li><strong>Understanding of Lean Six Sigma Concepts:</strong> Review core concepts like DMAIC and the focus on eliminating waste and reducing variation.</li>
                <li><strong>Project Identification:</strong> Start with smaller, simpler projects to build confidence.</li>
                <li><strong>Data-Driven Decision Making:</strong> Focus on collecting and analyzing data using tools like control charts, histograms, and Pareto charts.</li>
                <li><strong>Collaboration and Communication:</strong> Work on team-building and fostering communication.</li>
                <li><strong>Action Plan:</strong> Consider enrolling in additional training or workshops to reinforce your foundational knowledge.</li>
            </ul>`;
    } else if (finalScore <= 20) {
        feedbackElement.innerHTML = `
            <p><strong>Score Range: 11-20 (Moderate Understanding and Application)</strong></p>
            <p>Your score shows that you have a basic understanding of Lean Six Sigma but may face challenges in effectively applying the methodology. Here’s some feedback for improvement:</p>
            <ul>
                <li><strong>Project Execution:</strong> Focus on breaking down projects into smaller phases and ensuring you follow the DMAIC process thoroughly.</li>
                <li><strong>Problem-Solving Tools:</strong> Improve your use of tools like fishbone diagrams and value stream mapping.</li>
                <li><strong>Focus on Waste Reduction:</strong> Sharpen your focus on identifying and eliminating waste in processes.</li>
                <li><strong>Process Control and Improvement:</strong> Emphasize sustaining improvements through control mechanisms.</li>
                <li><strong>Action Plan:</strong> Work with a mentor to guide your projects and improve your use of tools and techniques.</li>
            </ul>`;
    } else if (finalScore <= 24) {
        feedbackElement.innerHTML = `
            <p><strong>Score Range: 21-24 (Good Understanding with Room for Refinement)</strong></p>
            <p>Your score indicates a strong grasp of Lean Six Sigma principles. However, there’s still room for refining your skills:</p>
            <ul>
                <li><strong>Advanced Problem-Solving:</strong> Explore more advanced techniques like DOE and FMEA to improve solutions.</li>
                <li><strong>Leadership and Mentorship:</strong> Focus on leading initiatives and mentoring others to reinforce your knowledge.</li>
                <li><strong>Continuous Improvement Culture:</strong> Work on embedding Lean Six Sigma principles into the organization's culture.</li>
                <li><strong>Sustainability of Improvements:</strong> Ensure that process improvements are sustained over time with strong monitoring and control plans.</li>
                <li><strong>Action Plan:</strong> Challenge yourself with more complex projects and engage in cross-functional collaboration.</li>
            </ul>`;
    } else {
        feedbackElement.innerHTML = `
            <p><strong>Score Range: 25-30 (Excellent Understanding and Application)</strong></p>
            <p>Congratulations! Your score reflects an excellent understanding and application of Lean Six Sigma principles. You are well on your way to mastering these skills:</p>
            <ul>
                <li><strong>Mastery of Lean Six Sigma Tools:</strong> You have a solid command of tools like DMAIC, control charts, and process mapping. Continue refining your use of these tools to solve increasingly complex problems.</li>
                <li><strong>Leadership in Process Improvement:</strong> Focus on leading high-impact initiatives and sharing your expertise with others in the organization.</li>
                <li><strong>Strategic Thinking:</strong> You should now concentrate on aligning your projects with the overall business strategy to maximize their impact.</li>
                <li><strong>Continuous Learning:</strong> Even with your strong foundation, continuous improvement is key. Engage in advanced training and stretch your capabilities by tackling cross-functional projects.</li>
                <li><strong>Action Plan:</strong> Take on leadership roles in Lean Six Sigma initiatives, mentor others, and drive a culture of continuous improvement within your team.</li>
            </ul>`;
    }
}

function sendEmail() {
    const email = document.getElementById("email").value.trim();
    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }

    const templateParams = {
        participant_name: participantName,
        participant_email: email,
        score: score,
        feedback: document.getElementById("feedback").innerHTML, // Custom feedback based on their score
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
            alert("Results sent successfully to " + email);
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.log("EmailJS error: ", error);
        });
}


function resetQuizState() {
    currentLevel = 1;
    score = 0;
    wrongAnswerCount = 0;
    hasSubmitted = false;
    document.getElementById("participantName").value = "";
}

function restartQuiz() {
    resetQuizState();
    document.getElementById("intro").style.display = "block";
    document.getElementById("questionnaire").style.display = "none";
    document.getElementById("result").innerHTML = "";
    document.getElementById("nextLevelButton").style.display = "none";
    document.getElementById("finishButton").style.display = "none";
    document.getElementById("thankYouPage").style.display = "none";
    document.getElementById("goodbyePage").style.display = "none";
}

function leaveQuiz() {
    document.getElementById("thankYouPage").style.display = "none";
    document.getElementById("goodbyePage").style.display = "block";
}

function returnToMain() {
    restartQuiz();
}

// Restart the quiz if the user leaves the tab
window.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        restartQuiz();
        alert("Quiz has been reset due to leaving the tab.");
    }
});

window.addEventListener("beforeunload", function () {
    restartQuiz();
});