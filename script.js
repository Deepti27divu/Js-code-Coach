
//console.log(quiz_data[0].quizzes[3].question_data.options[0].data);
//🤣😂🤣🤣🤣😂🤣😂
const dom={};
var editor;
var activeIndex ;
var activeQuizIndex;
var counter =0;
var solved_problem = [];
var points=0;
var easy_problem_points= 10;
var medium_problem_points=50;
var hard_problem_points=100;
var quiz_no=0;
var quiz_ans ="";
const HIDDEN = `
<span class="fa fa-lock"></span>
This test case is hidden
`;
function id(_){
    return document.getElementById(_);
}
function clas(_){
    return document.getElementsByClassName(_);
}
window.onload = init;
function init(){
    var menu = document.querySelector('.menu');
        var back = document.querySelector('.back');
  menu.addEventListener("click",function(){
    document.querySelector(".navitems").style.left = "0vw";
});
back.addEventListener("click",function(){
    document.querySelector(".navitems").style.left = "-100vw";
});
  setTimeout(()=>{ 
    id("loading").classList.add("remove");
   for(var i=0;i<clas("difficulty").length;i++){
   clas("difficulty")[i].innerText=codes[i].level;
} 
    
   },1000);
   
var items = document.getElementsByClassName("item");
document.getElementById("indicator").style.width = 100/items.length + "%";        
    for(var i = 0; i<items.length; i++){    
      if(items[i].id == "active"){
document.getElementById("indicator").style.left = 100/items.length*i + "%" ;
      }
    }      
  
   
}
function items(e){
var items = document.getElementsByClassName("item");    
    for(var i = 0; i<items.length; i++){      
      items[i].id = ""
    } 
    e.id = "active";            
document.getElementById("indicator").style.width = 100/items.length + "%";        
    for(var i = 0; i<items.length; i++){     
      if(items[i].id == "active"){            
document.getElementById("indicator").style.left = 100/items.length*i + "%" ;
      }
    }
          
}


function top_rankers(e){
    items(e);
    clas("main-heading")[0].innerHTML ="Top Learners";
    clas("course")[0].style.visibility="hidden";
    clas("course")[0].style.opacity="0";  
    clas("code-coach")[0].style.visibility="hidden";
    clas("code-coach")[0].style.opacity="0";
    clas("user-leaderboard")[0].style.visibility="hidden";
    clas("user-leaderboard")[0].style.opacity="0";
    
    clas("top-learner")[0].style.visibility="visible";
    clas("top-learner")[0].style.opacity="1";
    clas("setting-page")[0].style.visibility="hidden";
    clas("setting-page")[0].style.opacity="0";
    
}

function setting_page(e){
    items(e);
    clas("main-heading")[0].innerHTML ="Setting";
    clas("course")[0].style.visibility="hidden";
    clas("course")[0].style.opacity="0";  
    clas("code-coach")[0].style.visibility="hidden";
    clas("code-coach")[0].style.opacity="0";
    clas("user-leaderboard")[0].style.visibility="hidden";
    clas("user-leaderboard")[0].style.opacity="0";
    
    
    clas("top-learner")[0].style.visibility="hidden";
    clas("top-learner")[0].style.opacity="0";
    clas("setting-page")[0].style.visibility="visible";
    clas("setting-page")[0].style.opacity="1";
}
function js_course(e){
    items(e);
    back_course();
    quiz_no =0;
    show_points();
    clas("main-heading")[0].innerHTML ="JavaScript Course";
    clas("course")[0].style.visibility="visible";
    clas("course")[0].style.opacity="1";  
    clas("code-coach")[0].style.visibility="hidden";
    clas("code-coach")[0].style.opacity="0";
    clas("user-leaderboard")[0].style.visibility="hidden";
    clas("user-leaderboard")[0].style.opacity="0";
    
    clas("top-learner")[0].style.visibility="hidden";
    clas("top-learner")[0].style.opacity="0";
    clas("setting-page")[0].style.visibility="hidden";
    clas("setting-page")[0].style.opacity="0";
    
}
function coach(e){
    items(e);
    back_course()
    quiz_no =0;
    show_points()
 clas("main-heading")[0].innerHTML ="Code Coach Playground";
 clas("code-coach")[0].style.visibility="visible";
    clas("code-coach")[0].style.opacity="1";
    
 clas("course")[0].style.visibility="hidden";
    clas("course")[0].style.opacity="0";
    clas("user-leaderboard")[0].style.visibility="hidden";
    clas("user-leaderboard")[0].style.opacity="0";
    
    clas("top-learner")[0].style.visibility="hidden";
    clas("top-learner")[0].style.opacity="0";
    clas("setting-page")[0].style.visibility="hidden";
    clas("setting-page")[0].style.opacity="0";
    
}
function leaderboard(e){
    items(e);
    back_course()
    quiz_no =0;
    show_points()
    clas("main-heading")[0].innerHTML ="Leaderboard";
    clas("user-leaderboard")[0].style.visibility="visible";
    clas("user-leaderboard")[0].style.opacity="1";
    
    clas("code-coach")[0].style.visibility="hidden";
    clas("code-coach")[0].style.opacity="0";
    clas("course")[0].style.visibility="hidden";
    clas("course")[0].style.opacity="0";

    clas("top-learner")[0].style.visibility="hidden";
    clas("top-learner")[0].style.opacity="0";
    clas("setting-page")[0].style.visibility="hidden";
    clas("setting-page")[0].style.opacity="0";
}



function activateQuiz(no){
    show_points()
var quizhtml = clas("course_quiz_info")[0]; 
quizhtml.innerHTML=" ";
  var quizName = quiz_data[no].name;
  //console.log(quizName);
  var quizLen = quiz_data[no].totalQuiz;
quizhtml.innerHTML+=`
<div class="quizzes_header">
<div class="quizzes_name"><span class="quizzes_back fa fa-angle-left" onclick="back_course()"></span><p class="name_quiz">${quizName}</p></div>
</div>
<main>
         <div class="quizzes_course_questions">
          <p class="quizzes_course_question"></p>
          <div class="quizzes_course_answers">
            <div class="quizzes_course_answer" onclick="slctAns(${0})"><p class="quizzes_course_opt"></p></div>
            <div class="quizzes_course_answer" onclick="slctAns(${1})"><p class="quizzes_course_opt"></p></div>
            <div class="quizzes_course_answer" onclick="slctAns(${2})"><p class="quizzes_course_opt"></p></div>
            <div class="quizzes_course_answer" onclick="slctAns(${3})"><p class="quizzes_course_opt"></p></div>
          </div>
        </div>
        <div>
    <button id="checkButton" onclick="check(${no})">Check</button>
          <div class="quizzes_result_box"><p>Good Luck for Solving Quizzes</p></div>
        </div>
        </main> 
`;

  clas("course_quiz_info")[0].style.visibility ="visible";
    clas("course_quiz_info")[0].style.opacity ="1";
    clas("course_info")[0].style.visibility ="hidden";
    clas("course_info")[0].style.opacity ="0";
    clas("course")[0].style.visibility ="hidden";
    clas("course")[0].style.opacity ="0";
  for(var i = 0;i<quizLen;i++){
  var quizQues = quiz_data[no].quizzes[quiz_no].question_data.question;
 
 clas("quizzes_course_question")[0].innerText =quizQues;
 var quizLen =quiz_data[no].quizzes[quiz_no].question_data.options;
  for(var i = 0;i<quizLen.length;i++){
    clas("quizzes_course_opt")[i].textContent = quizLen[i].data;
  }
  
    }
}


function back_course(){
    clas("course_quiz_info")[0].style.visibility ="hidden";
    clas("course_quiz_info")[0].style.opacity ="0";
    clas("course_info")[0].style.visibility ="hidden";
    clas("course_info")[0].style.opacity ="0";
    clas("course")[0].style.visibility ="visible";
    clas("course")[0].style.opacity ="1";    
    quiz_no =0;
}

function slctAns(k){
var ans = clas("quizzes_course_opt")[k].textContent;
   quiz_ans = ans;
}
function check(no){
    //console.log(no)
var quizAns = quiz_data[no].quizzes[quiz_no].question_data.answer;
var correctAns =quiz_data[no].quizzes[quiz_no].question_data.options[quizAns].data;
if(correctAns == quiz_ans){
var quizLen = quiz_data[no].totalQuiz;
if(quiz_no !== quizLen-1){
    quiz_no++;
    activateQuiz(no);
}
else{
    back_course()
}
clas("quizzes_result_box")[0].innerText="Congratulations for solving previous quiz";
} 
else{
     clas("quizzes_result_box")[0].innerText="Try Again";  
   
}
}


function show_points(){
      solved_problem.forEach(function(data){
    clas("solvedInfo")[data].innerText="Solved"; 
     counter =0;
  clas("user-points")[0].innerText ="Points : "+points;  
   });
}



function initDom(){
    
    dom.codeTitle = clas("code-title")[activeIndex];
    dom.codeLevel = id("code-level");
    dom.codeDescription = id("code-description");    
    dom.error = id("error");    
    dom.cases = id("cases");
    
}



function init1(){
    initDom();    
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setValue(codes[activeIndex].code);
    
}

function getEvaluatedValue(value){
    try{
        return eval(value) || value;
    } catch(e){}
    
    return value;
}



function evaluateCode(){
var codeSchema = codes[activeIndex];
    
    dom.cases.innerHTML = "";
    editor.container.style.pointerEvents = "none";
    let solved = true;
    
    for(let testCase of codeSchema.testCases) {
        // add a call to the function with the test value to the user function
        var testCode = editor.getValue() + `${testCase.run}`;
    
        // evaluate the result
        const yourOutput = eval(testCode);
        const expectedOutput = getEvaluatedValue(testCase.expected);
    
        
        const yourText = ` Your Output: ${yourOutput}`;
        const expectedText = testCase.hidden ? HIDDEN : ` Expected Output: ${expectedOutput}`;
    
        const info = `${yourText}<br/>${expectedText}`;
    
    
    if(yourOutput==expectedOutput){
            counter++;
        }
    
        // compare the output to the expected output
        

        const result = yourOutput == expectedOutput ? "Passed":"Failed";
        
        if(!result){
            solved = false;
        }
        dom.cases.innerHTML +=`<div  id='k'class='cases-test''>
            <div>${info}</div>
            <div class='${result ? "green":"red"}'>${result}</div>
        </div>`;
    }
    
    
    editor.container.style.pointerEvents = "unset";
    codeSchema.solved = solved;
    codeSchema.code = editor.getValue();
    
      if(counter==codes[activeIndex].testCases.length){
solved_problem.push(activeIndex);
 if(codes[activeIndex].level=="Easy"){
    points+=easy_problem_points;
       
}
else if(codes[activeIndex].level=="Medium"){
    points+= medium_problem_points;
        
}
else if(codes=[activeIndex].level=="Hard"){
    points+= hard_problem_points;
    
}
  
 if(codes[activeIndex].isSolved==false){
 var data_info = `
  <div onclick="activate_ground(${activeIndex})" class="code-title">${codes[activeIndex].title}
            <div class="problemInfo"><span class="difficulty">${codes[activeIndex].level}</span><span class="solvedInfo">UnSolved</span></div>
            </div>
  `;
 clas("solved_problems")[0].innerHTML +=  data_info;
 codes[activeIndex].isSolved = true;
   };
}
        
}

function activate_ground(no){
   activeIndex = no;
   //console.log(no)
   init1();
   clas("code-container")[0].style.visibility = "hidden";
   clas("code-container")[0].style.opacity= "0";
   id("editor-container").style.visibility ="visible";
   id("editor-container").style.opacity ="1";
   id("controls-container").style.visibility = "visible";
   id("controls-container").style.opacity= "1";
   id("cases").style.visibility ="visible";
   id("cases").style.opacity ="1";
   dom.cases.innerHTML = "";
   show_problem()
   activeIndex = no;
}


function show_problem(){
 dom.cases.innerHTML = 
`<div class="problem-detail">

<h2 class="heading1">${codes[activeIndex].title}</h2>
<div class="intro">${codes[activeIndex].description}</div>

<h3 class="heading2">Task</h3>
<div class="task">${codes[activeIndex].task}</div>

<h3 class="heading2">Input Format</h3>
<div class="inputFormat">${codes[activeIndex].input_format}</div>
<h3 class="heading2">Output Format</h3>
<div class="outputFormat">${codes[activeIndex].output_format}</div>

<h3 class="heading2">Input Sample</h3>
<div class="inputDemo">${codes[activeIndex].input_demo}</div>
<h3 class="heading2">Output Sample</h3>
<div class="outputDemo">${codes[activeIndex].output_demo}</div>

</div><br><br><br><br>`;
 
 
}


function back_home(){
    clas("code-container")[0].style.visibility = "visible";
   clas("code-container")[0].style.opacity= "1";
   id("editor-container").style.visibility ="hidden";
   id("editor-container").style.opacity ="0";
   id("controls-container").style.visibility = "hidden";
   id("controls-container").style.opacity= "0";
   id("cases").style.visibility ="hidden";
   id("cases").style.opacity ="0";
   dom.cases.innerHTML ="";
   show_points();
}

const codes = [
     
     
//Even Number Code coach challenge          
     
     {
        title: "Even Number",
        level: "Easy",
        description: `A Number Which is Divisble By 2 is Even Number`,
        input_format:`A Number which is odd or Even`,
        task:`Show that A Number is Even`,
        output_format:`If a Number is Even then it show "Even" OtherWise It show "Not Even"`,
        input_demo:3,
        output_demo:"Not Even",
        isSolved : false,
        code: `function isEven(input){
    // your code goes here
    
    
}`,
        testCases:  [
            {run: "isEven(2)", expected: "Even",hidden:false},
            {run: "isEven(3)", expected: "Not Even",hidden:false},
            {run: "isEven(6)", expected: "Even", hidden: true},
        ] 
    },
    
    
    
//Odd Number Code Coach Challenge    
    
    
     {
        title: "Odd Number",
        level: "Easy",
        description: `A Number Which is not Divisble By 2 is Odd Number`,
        task:`Show that the number is Odd`,
       input_format:`A Number which is odd or Even`,
        output_format:`If a Number is Odd then it show "Odd" OtherWise It show "Not Odd"`,
        input_demo:7,
        output_demo:"Odd",
        isSolved : false,
        code: `function isOdd(input){
    // your code goes here
    
    
}`,
        testCases:  [
            {run: "isOdd(3)", expected: "Odd" ,hidden:false},
            {run: "isOdd(8)", expected: "Not Odd",hidden:false},
            {run: "isOdd(9)", expected: "Odd", hidden: true},
        ] 
    },
    
    
    
    
    
//Pig Latin Code Coach Challenge    
    
     {
        title: "Pig Latin",
        level: "Medium",
        description: `You have two friends who are speaking Pig Latin to each other! Pig Latin is the same words in the same order except that you take the first letter of each word and put it on the end, then you add 'ay' to the end of that.`,
        task:`Your task is to take a sentence in English and turn it into the same sentence in Pig Latin! `,
        input_format:`A string of the sentence in English that you need to translate into Pig Latin. (no punctuation or capitalization)`,
        output_format:`A string of the same sentence in Pig Latin.`,
        input_demo:"wow",
        output_demo:"owway",
        isSolved : false,
        code: `function pigLatin(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "pigLatin('how are you')", expected: "owhay reaay ouyay" ,hidden:false},
            {run: "pigLatin('go to home')", expected: "ogay otay omehay",hidden:false},
            {run: "pigLatin('ive got it')", expected: "veiay otgay tiay", hidden: true},
            {run: "pigLatin('cool')", expected: "oolay", hidden: true},
        ] 
    },
    
    
    
//Gotham City Code coach Problem  
    
     {
        title: "Gotham City",
        level: "Easy",
        description: `You are a police officer, and you get a report of criminal activity! Should you go on your own, or should you call a superhero to help you fight the crime? If there are less than 5, you can handle this on your own, if there are 5-10, you will want to go with Batman for backup, and if there are more than 10, you should stay where it is safe and let Batman handle this on his own.`,
        task:`Determine whether you need to call backup based on the total number of criminals being reported.`,
        input_format:`An integer that represents the total number of criminals present at the scene.`,
        output_format:`A string that says 'I got this!', 'Help me Batman', or 'Good Luck out there!' depending on the scenario`,
        input_demo:"7",
        output_demo:"Help me Batman",
        isSolved : false,
        code: `function gothamCity(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "gothamCity(1)", expected: "I got this!" ,hidden:false},
            {run: "gothamCity(5)", expected: "Help me Batman",hidden:false},
            {run: "gothamCity(2)", expected: "I got this!", hidden: true},
            {run: "gothamCity(6)", expected: "Help me Batman", hidden: true},
        ] 
    },
    
    
 //Secret Message Code coach Problem
    {
        title: "Secret Message",
        level: "Medium",
        description: `You are trying to send a secret message, and you've decided to encode it by replacing every letter in your message with its corresponding letter in a backwards version of the alphabet.`,
        task:`Create a program that replaces each letter in a message with its corresponding letter in a backwards version of the English alphabet.`,
        input_format:`A string of your message in its normal form.`,
        output_format:`A string of your message once you have encoded it (all lower case).`,
        input_demo:"Hello World",
        output_demo:"svool dliow",
        isSolved : false,
        code: `function secretMsg(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "secretMsg('Sololearn')", expected: "hlolovzim" ,hidden:false},
            {run: "secretMsg('Vegetable Pizza')", expected: "evtvgzyov kraaz",hidden:false},
            {run: "secretMsg('World')", expected: "dliow", hidden: true},
            {run: "secretMsg('Hello')", expected: "svool", hidden: true},
            {run: "secretMsg('Pizza')", expected: "kraaz", hidden: true},
        ] 
    },
    


//Hallowen Candy Code Coach Problem

{
        title: "Hallowen Candy",
        level: "Easy",
        description: `You go trick or treating with a friend and all but three of the houses that you visit are giving out candy. One house that you visit is giving out toothbrushes and two houses are giving out dollar bills. `,
        task:``,
        input_format:`An integer (>=3) representing the total number of houses that you visited.`,
        output_format:`A percentage value rounded up to the nearest whole number.`,
        input_demo:"4",
        output_demo:"50",
        isSolved : false,
        code: `function hallowenCandy(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "hallowenCandy(3)", expected: "67" ,hidden:false},
            {run: "hallowenCandy(10)", expected: "20",hidden:true},
            {run: "hallowenCandy(4)", expected: "50", hidden: true},
        ] 
    },
    


//Dega Vu Js Code coach Problem

   {
        title: "Dega Vu",
        level: "Hard",
        description: `You aren't paying attention and you accidentally type a bunch of random letters on your keyboard. You want to know if you ever typed the same letter twice, or if they are all unique letters.`,
        task:`If you are given a string of random letters, your task is to evaluate whether any letter is repeated in the string or if you only hit unique keys while you typing.`,
        input_format:`A string of random letter characters (no numbers or other buttons were pressed).`,
        output_format:`A string that says 'Deja Vu' if any letter is repeated in the input string, or a string that says 'Unique' if there are no repeats.
`,
        input_demo:"cooddddeeee",
        output_demo:"Deja Vu",
        isSolved : false,
        code: `function degaVu(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "degaVu('bbllam')", expected: "Deja Vu" ,hidden:false},
            {run: "degaVu('coder')", expected: "Unique",hidden:false},
            {run: "degaVu('booootttt')", expected: "Deja Vu", hidden: true},
            {run: "degaVu('got')", expected: "Unique", hidden: true},
            {run: "degaVu('gooootttt')", expected: "Deja Vu", hidden: true},
        ] 
    },
    
//Extra Trestial Js Code Coach Problem    
    
    {
        title: "Extra-Terrestrials",
        level: "Easy",
        description: `You meet a group of aliens, and their language is just like English except that they say every word backwards. 
How will you learn to communicate with them?`,
        task:`Take a word in English that you would like to say, and turn it into language that these aliens will understand.`,
        input_format:`A string of a word in English.`,
        output_format:`A string of the reversed word that represents the original word translated into alien language.`,
        input_demo:"code",
        output_demo:"edoc",
        isSolved : false,
        code: `function rverse(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "rverse('ballon')", expected: "nollab" ,hidden:false},
            {run: "rverse('coder')", expected: "redor",hidden:false},
            {run: "rverse('sololearn')", expected: "nraelolos", hidden: true},
            {run: "rverse('got')", expected: "log", hidden: true},
            {run: "rverse('eatttt')", expected: "ttttae", hidden: true},
        ] 
    },
 
 
 
 
 
 
    
//Password Validator Js code Coach Problem   
     
     
      {
        title: "Password Validator",
        level: "Hard",
        description: `You're interviewing to join a security team. They want to see you build a password evaluator for your technical interview to validate the input.`,
        
        task:`Write a program that takes in a string as input and evaluates it as a valid password. The password is valid if it has at a minimum 2 numbers, 2 of the following special characters ('!', '@', '#', '$', '%', '&', '*'), and a length of at least 7 characters.
If the password passes the check, output 'Strong', else output 'Weak'.`,

        input_format:`A string representing the password to evaluate.
`,

        output_format:`A string that says 'Strong' if the input meets the requirements, or 'Weak', if not.`,
        
        input_demo:"Hello@$World19",
        output_demo:"Strong",
        isSolved : false,
        code: `function validate(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "validate('hello')", expected: "Weak",hidden:false},
            {run: "validate('coderCode$@89')", expected: "Strong",hidden:false},
            {run: "validate('12345678')", expected: "Weak", hidden: true},
            {run: "validate('Sololearn&@&@&@&@12345678')", expected: "Strong", hidden: true}, 
        ] 
    },
     









//Jungle Camping Js code Coach Problem   


{
        title: "Jungle Camping",
        level: "Easy",
        description: `You are camping alone out in the jungle and you hear some animals in the dark nearby. Based on the noise they make, determine which animals they are.`,
        
        task:`You are given the noises made by different animals that you can hear in the dark, evaluate each noise to determine which animal it belongs to. Lions say 'Grr', Tigers say 'Rawr', Snakes say 'Ssss', and Birds say 'Chirp'.`,
        input_format:`A string that represent the noises that you hear with a space between them.`,
        output_format:`A string that includes each animal that you hear with a space after each one. (animals can repeat)
`,
        input_demo:"Rawr Chirp Ssss",
        output_demo:"Tiger Bird Snake",
        isSolved : false,
        code: `function jungle(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "jungle('Chirp Ssss Rawr')", expected: "Bird Snake Tiger" ,hidden:false},
            {run: "jungle('Ssss')", expected: "Snake",hidden:false},
            {run: "jungle('Rawr Ssss')", expected: "Tiger Snake", hidden: true},
        ] 
    },
 








//Vowel Counter Js Code Coach Problem

{
        title: "Vowel Counter",
        level: "Easy",
        description: `You are in an English class, your teacher tells the class that vowels are the glue that hold words and sentences together. 
They want to make sure you understand the importance of vowels in a sentence.  
You are given example sentences and are to give a total amount of vowels that are in each sentence.
`,

        task:`Write a program that takes in a string as input, counts and outputs the number of vowels (A, E, I, O, U).`,
        
        input_format:`A string (letters can be both uppercase or lowercase).`,
        
        output_format:`A number which represents the total number of vowels in the string.
`,
        input_demo:"this is a sentence",
        output_demo:"6",
        isSolved : false,
        code: `function vowelCounter(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "vowelCounter('coder')", expected: "2" ,hidden:false},
            {run: "vowelCounter('Sololearn is best')", expected: "6",hidden:false},
            {run: "vowelCounter('tiger')", expected: "2", hidden: true},
        ] 
    },


//Fruit Bowl Js code Coach Problem

{
        title: "Fruit Bowl",
        level: "Easy",
        description: `You have a bowl on your counter with an even number of pieces of fruit in it. Half of them are bananas, and the other half are apples. You need 3 apples to make a pie.`,

        task:`Your task is to evaluate the total number of pies that you can make with the apples that are in your bowl given to total amount of fruit in the bowl.
`,
        
        input_format:`An integer that represents the total amount of fruit in the bowl.`,
        
        output_format:`An integer representing the total number of whole apple pies that you can make.
`,
        input_demo:"26",
        output_demo:"4",
        isSolved : false,
        code: `function fruitBowl(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "fruitBowl(4)", expected: "0" ,hidden:false},
            {run: "fruitBowl(12)", expected: "2",hidden:false},
            {run: "fruitBowl(6)", expected: "1", hidden: true},
        ] 
    },






//Security Js Code coach Problem

{
        title: "Security",
        level: "Hard",
        description: `You are in an English class, your teacher tells the class that vowels are the glue that hold words and sentences together. 
They want to make sure you understand the importance of vowels in a sentence.  
You are given example sentences and are to give a total amount of vowels that are in each sentence.
`,

        task:`Evaluate a given floor of the casino to determine if there is a guard between the money and the thief, if there is not, you will sound an alarm.`,
        
        input_format:`A string of characters that includes $ (money), T (thief), and G (guard), that represents the layout of the casino floor.  
Space on the casino floor that is not occupied by either money, the thief, or a guard is represented by the character x.`,
        
        output_format:`A string that says 'ALARM' if the money is in danger or 'quiet' if the money is safe.
`,
        input_demo:"xxxxxGxx$xxxT",
        output_demo:"ALARM",
        isSolved : false,
        code: `function security(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "security('xxxxxGxx$xGxT')", expected: "quiet" ,hidden:false},
            {run: "security('xxxxxTxx$xxxG')", expected: "ALARM",hidden:false},
            {run: "security('Gxxxxxxx$xxxT')", expected: "ALARM", hidden: true},
           {run: "security('Gxxxxxxx$xGxT')", expected: "quiet", hidden: true},
            {run: "security('GxxxxGxx$xxxT')", expected: "ALARM", hidden: true},
              
        ] 
    },

//Land Ho! Js Code coach Problem

{
        title: "Land Ho!",
        level: "Easy",
        description: `You are on a large ship and you put down anchor near a beautiful beach. There is a small boat ferrying passengers back and forth, and you get in line for it. How long will you have to wait to get to the beach? You know that 20 people can fit on the boat and each trip to shore takes 10 minutes each way.
`,
        
        task:`Determine your wait time if you know the total number of people ahead of you in line.`,
        input_format:`An integer that represents the total number of people ahead of you in line.`,
        output_format:`An integer that represents the number of minutes that you will have to wait until you are standing on the beach.`,
        input_demo:"15",
        output_demo:"10",
        isSolved : false,
        code: `function landHo(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "landHo(1)", expected: "10" ,hidden:false},
            {run: "landHo(80)", expected: "90",hidden:false},
            {run: "landHo(15)", expected: "10", hidden: true},
        ] 
    },
 
//Izzy The lgauna Js Code Coach Problem

{
        title: "Izzy lgauna",
        level: "Easy",
        description: `Your pet Iguana has run away, and you found it up in a tree! It will come down right away if you brought the right snacks, but if you don't have enough, you will have to wait. You need 10 total snack points to bring it down. Lettuce is worth 5, Carrot is worth 4, Mango is worth 9, and Cheeseburger is worth 0.
`,
        
        task:`Evaluate whether or not you have enough snack points to convince your iguana to come down.`,
        input_format:`Your input is a string that represents the snacks that you have. Snacks are separated by spaces, you can have any number of snacks, and they can repeat.
`,
        output_format:`A string that says 'Come on Down!' if you have enough points, or 'Time to wait' if you do not.`,
        input_demo:"Mango Cheeseburger Carrot",
        output_demo:"Come on Down!",
        isSolved : false,
        code: `function izzy(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "izzy('Cheeseburger')", expected: "Time to wait" ,hidden:false},
            {run: "izzy('Carrot Carrot Carrot')", expected: "Come on Down!",hidden:false},
            {run: "izzy('Mango')", expected: "Time to wait", hidden: true},
        ] 
    },
 
//Road Runner Js Code Coach Problem


{
        title: "Road Runner",
        level: "Medium",
        description: `A coyote is chasing a roadrunner and they start out 50 feet apart. If you know how fast they are both traveling, and how far the roadrunner is from safety, determine whether or not the coyote is able to catch the roadrunner. 
Both animals and the roadrunner's safe place are on a straight line.
`,
        
        task:`Determine whether or not the roadrunner made it to safety.`,
        input_format:`Three integer values, the first value represents the distance the roadrunner is from safety, then the roadrunner's speed (feet/second) and then the coyote's speed (feet/second).
`,
        output_format:`A string that says 'Meep Meep' if the roadrunner made it, or 'Yum' if the coyote caught up to the roadrunner.`,
        input_demo:"10 5 20",
        output_demo:"Meep Meep",
        isSolved : false,
        code: `function run(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "run('100 5 20')", expected: "Yum" ,hidden:false},
            {run: "run('10 5 20')", expected: "Meep Meep",hidden:false},
            {run: "run('5 5 20')", expected: "Yum", hidden: true},
        ] 
    },

 
//How Far? Js code coach Problem

{
        title: "How Far?",
        level: "Medium",
        description: `You are walking from your house to a pond that is down your street. 
How many blocks over will you have to walk until you get to the pond?
`,
        
        task:`Evaluate how many blocks you will have to walk if you are given a representation of your street where H represents your house, P represents the pond, and every B represents a block in between the two.`,
        input_format:`A string of letters representing your house, the pond, and blocks on your street.
`,
        output_format:`An integer value that represents the number of blocks between your house and the pond.`,
        input_demo:"BBHBBBBPBBB",
        output_demo:"4",
        isSolved : false,
        code: `function far(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "far('BBBBHBBPBB')", expected: "2" ,hidden:false},
            {run: "far('BBHBBBBPBBB')", expected: "4",hidden:false},
            {run: "far('HBBBBBPB')", expected: "5", hidden: true},
        ] 
    },






         
];













//Js quizzes Data

const quiz_data =[

//OverView Quiz Data For Js Course 
{
   name : "OverView Quiz",
   totalQuiz:5, 
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"Chose the Correct Option",
     options:[
     {data:"JavaScript Is Server-Side Language Only"},
     {data:"JavaScript Is Used to Create Web Apps Only"},
     {data:"JavaScript Is Used to Create Intractive Web Elements"},
     {data:"None of these"},
     ],
     answer:2,
     }
   },
   {     
    question_data:{
     question:"Which Tag Contain the JavaScript Code?",
     options:[
     {data:"script"},
     {data:"style"},
     {data:"code"},
     {data:"design"},
     ],
     answer:0,
     }   
   },
      
    {     
    question_data:{
     question:"Where the script tag typically placed?",
     options:[
     {data:"Before Creating Html Tag"},
     {data:"After Closing Html Tag"},
     {data:"In Both Body And Head Tag"},
     {data:"None of these"},
     ],
     answer:2,
     }   
   },
   
   {     
    question_data:{
     question:"How Single Line Comment Looks Like?",
     options:[
     {data:"**This is an Comment"},
     {data:"//This is an Comment"},
     {data:"<!--This is and Comment-->"},
     {data:"##None of these"},
     ],
     answer:1,
    }   
   },
   {
     question_data:{
     question:"Why Does the script tag is mostly Placed Before Closing the body tag?",
     options:[
     {data:"To make the Web Code Fully Loaded in Browser Window"},
     {data:"To Run with Standard"},
     {data:"This is only a Possible Way"},
     {data:"None of these"},
     ],
     answer:0,
    },        
   }],  
},



//Basic Quiz Data For Js Course

{
   name : "Basic Quiz",
   totalQuiz:5,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"Which Character cannot be used in variable name?",
     options:[
     {data:"Special Symbols"},
     {data:"Letters"},
     {data:"Underscore Sign"},
     {data:"Numbers"},
     ],
     answer:0,
     }
   },
   {
     question_data:{
     question:"A floating point number:",
     options:[
     {data:"is always smaller then 0"},
     {data:"is always positive"},
     {data:"is allowed to have a decimal place"},
     {data:"None of these"},
     ],
     answer:2,
     }
   },
    {
     question_data:{
     question:"Increament and decrement are used for:",
     options:[
     {data:"to get the remainder of the division of two numbers"},
     {data:"Addung or Subtracting from a number"},
     {data:"to change the sign of the number to'+' or '_'"},
     {data:"All of these"},
     ],
     answer:1,
     }
   },
   
    {
     question_data:{
     question:"Logical AND(&&) returns true if:",
     options:[
     {data:"one of operands is true,but not both"},
     {data:"both operands are true"},
     {data:"if only one of the operands is true"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   
   
    {
     question_data:{
     question:"Logical NOT return true if",
     options:[
     {data:"the operand is true"},
     {data:"the operand is false"},
     {data:"none of these"},
     {data:"All of these"},
     ],
     answer:1,
     }
   },
    
   ]
    
},





//Loop and Conditonal Statement Quizzes
{
    name : "Loop And Conditional Statement Quiz",
   totalQuiz:7,   
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"What happens if the tested condition is false?",
     options:[
     {data:"Code in the braces is executed any way"},
     {data:"Code does nothing and moves to the next section"},
     {data:"Code execution will be stopped"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   
   
   {
     question_data:{
     question:"The 'else' statement is created to :",
     options:[
     {data:"Tells JavaScript To do something if the condition is false"},
     {data:"Test a new condition for true or false"},
     {data:"Ignore the condition testing"},
     {data:"None of these"},
     ],
     answer:0,
     }
   },
   
   {
     question_data:{
     question:"Which keyword is used to end the else if statement?",
     options:[
     {data:"else"},
     {data:"stop"},
     {data:"end"},
     {data:"None of these"},
     ],
     answer:0,
     }
   },
   
   {
     question_data:{
     question:"The Switch statement can be used to replace :",
     options:[
     {data:"comments"},
     {data:"multiple if else statements"},
     {data:"varible declaration"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   
   {
     question_data:{
     question:"Classic 'for' loop consist of how many components",
     options:[
     {data:"1"},
     {data:"2"},
     {data:"3"},
     {data:"4"},
     ],
     answer:2,
     }
   },
   
   {
     question_data:{
     question:"The result of condition statement is always:",
     options:[
     {data:"A String Value"},
     {data:"A Boolean Value"},
     {data:"A Numerical Value"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   
   
   {
     question_data:{
     question:"The Break Statement:",
     options:[
     {data:"Ends the Execution Of Loop"},
     {data:"Stops the whole script"},
     {data:"Ignores the current iteration and passes to the text"},
     {data:"Break the whole Code"},
     
     ],
     answer:0,
     }
   }]
   
},


//Js function Quizzes
{
   name : "Js Function Quiz",
   totalQuiz:5,   
   solvedQuiz:[],
    quizzes:[
   {
     question_data:{
     question:"What is Function?",
     options:[
     {data:"Prefessions"},
     {data:"A reused code that can use again and agian"},
     {data:"Operators"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   {     
     question_data:{
     question:"What do you need to create a Function Parameters?",
     options:[
     {data:"Use 'var' keyword"},
     {data:"Use 'params' keyword"},
     {data:"Write A Variable name in Parantheses"},
     {data:"None of these"},
     ],
     answer:2,
     }  
   },
   {
    question_data:{
     question:"Which Parameter is used to separate function from each other?",
     options:[
     {data:";"},
     {data:","},
     {data:"#"},
     {data:"&"},
     ],
     answer:1,
     }     
   },
   {
     question_data:{
     question:"Where is 'return' statement placed?",
     options:[
     {data:"In End of function"},
     {data:"Out side the function"},
     {data:"In the starting of function"},
     {data:"No need to place it"},
     ],
     answer:0,
     }       
   },
   {
     question_data:{
     question:"How many parameters can be accepted by alert box?",
     options:[
     {data:"3"},
     {data:"1"},
     {data:"4"},
     {data:"No Parameters"},
     ],
     answer:1,
     }     
   },
   ]
},



//Js Object Quizzes
{
   name : "Js Object Quiz",
   totalQuiz:5,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"In reference to an object , color, height , weight and name are all examples of :",
     options:[
     {data:"Variables"},
     {data:"Nouns"},
     {data:"Properties"},
     {data:"Methods"},
     ],
     answer:2,
     }
   },
   {
     question_data:{
     question:"What keyword is used for creating a instance of an object?",
     options:[
     {data:"make"},
     {data:"new"},
     {data:"var"},
     {data:"int"},
     ],
     answer:1,
     }  
   },
   {
     question_data:{
     question:"What built-in property is used to count the number of characters in an object is property?",
     options:[
     {data:"write"},
     {data:"size"},
     {data:"width"},
     {data:"length"},
     ],
     answer:3,
     }  
   },
   {
      question_data:{
     question:"The 'this' keyword in the method means :",
     options:[
     {data:"The name of webpage"},
     {data:"The current object"},
     {data:"The name of the given method"},
     {data:"None of these"},
     ],
     answer:1,
     } 
   },
   {
       question_data:{
     question:"In order to use the objects  properties with a function, we use :",
     options:[
     {data:"The function name"},
     {data:"Just the name of Property"},
     {data:"The 'this' keyword"},
     {data:"The 'var' keyword"},
     ],
     answer:2,
     }
   }
   ]  
},

//Js Core-Object Quizzes
{
   name : "Js Core-Object Quiz",
   totalQuiz:6,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"What is the result of trying to reference an array member which does not exits ?",
     options:[
     {data:"null"},
     {data:"0"},
     {data:"false"},
     {data:"undefined"},
     ],
     answer:3,
     }
   },
   {
       question_data:{
     question:"By entering var example = new Array(); we create an empty array which can be filled :",
     options:[
     {data:"anytime later"},
     {data:"never more"},
     {data:"just after it"},
     {data:"all of these"},
     ],
     answer:0,
     } 
   },
   {
      question_data:{
     question:"'concat' method takes two arrays and ",
     options:[
     {data:"combines them in one new array"},
     {data:"compares their members"},
     {data:"output them to the screen"},
     {data:"It does nothings"},
     ],
     answer:0,
     }  
   },
   {
        question_data:{
     question:"In associative arrays , index numbers are replaced with :",
     options:[
     {data:"constants"},
     {data:"strings"},
     {data:"variables"},
     {data:"functions"},
     ],
     answer:1,
     }
   },
   {
      question_data:{
     question:"In Math Object , Which of the following constants does not exist ?",
     options:[
     {data:"Math.ABC"},
     {data:"Math.E"},
     {data:"Math.PI"},
     {data:"Math.ceil"},
     ],
     answer:0,
     }  
   },
   {
      question_data:{
     question:"What information results from creating a Date Object ?",
     options:[
     {data:"The date when the web page was hosted"},
     {data:"No empty String"},
     {data:"The current time and date"},
     {data:"All of these"},
     ],
     answer:2,
     }  
   }, 
   ]
},

//Js Dom Event Quizzes
{
   name : "Js Dom Event Quiz",
   totalQuiz:5,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"What is DOM ?",
     options:[
     {data:"Document Object Model"},
     {data:"Document Orientation Model"},
     {data:"Definitive Object Model"},
     {data:"Disk Operating Model"},
     ],
     answer:0,
     }
   },
   {
     question_data:{
     question:"The type of function that executes when an event occurs is called ?",
     options:[
     {data:"Event Description"},
     {data:"Event Handler"},
     {data:"Event Function"},
     {data:"Event Name"},
     ],
     answer:1,
     }  
   },
   {
      question_data:{
     question:"To create an animation relative to a container the position of attribute for the container should be set to :",
     options:[
     {data:"box"},
     {data:"absolute"},
     {data:"relative"},
     {data:"fixed"},
     ],
     answer:2,
     } 
   },
   {
      question_data:{
     question:"For making paragraph click event first event to be handled first done by using :",
     options:[
     {data:"Handling"},
     {data:"Capturing"},
     {data:"Nothing"},
     {data:"Bubbling"},
     ],
     answer:3,
     } 
   },
   {
       question_data:{
     question:"Which function is used to stop setInterval ?",
     options:[
     {data:"StopTimer"},
     {data:"StopInterval"},
     {data:"ClearInterval"},
     {data:"ClearTimer"},
     ],
     answer:2,
     }
   }
   ]
   
},

//Js ES6 Quizzes
{
   name : "ECMAScript 6 Quiz",
   totalQuiz:3,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"Which of these are js variables ?",
     options:[
     {data:"let"},
     {data:"var"},
     {data:"const"},
     {data:"All of these"},
     ],
     answer:3,
     }
   },
   {
     question_data:{
     question:"Which of the following is not one of the new ES6 features?",
     options:[
     {data:"Hoisting"},
     {data:"Modules"},
     {data:"Template Literals"},
     {data:"Object Destructing"},
     ],
     answer:0,
     }  
   },
   {
       question_data:{
     question:"Which of these is not an ES6 variable ?",
     options:[
     {data:"let"},
     {data:"var"},
     {data:"const"},
     {data:"All of these"},
     ],
     answer:1,
     }
   }
   ]
},
];



