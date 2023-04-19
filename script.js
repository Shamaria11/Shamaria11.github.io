/*Shamaria JavaScript Project*/
/*Index*/
function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  let dots = document.getElementById("dots1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("myBtn1");

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}
function showVideo(){
  let video=document.getElementById("vid");
  video.classList.remove("hidden");
}
function slideShow(){
  var temp=document.getElementById("pic1").src;
  document.getElementById("pic1").src=document.getElementById("pic2").src;
  document.getElementById("pic2").src=document.getElementById("pic3").src;
  document.getElementById("pic3").src=document.getElementById("pic4").src;
  document.getElementById("pic4").src=temp;
}
setInterval(slideShow, 5000);
  
/*Quiz*/
function showResults(){
  let quizResult=document.getElementById("quiz-result");
  let question1 =document.getElementById("ques-txt").value;
  let question2 =document.getElementById("next-txt").value;
  let question3 =document.getElementById("after-txt").value;
  let question4 =document.getElementById("last-txt").value;
  let section=document.getElementById("result");

  let result1=document.getElementById("line1");
  let result2=document.getElementById("line2");
  let result3=document.getElementById("line3");
  let result4=document.getElementById("line4");
  let score=document.getElementById("line5");
  let total=0;

  section.classList.remove("hidden");
  //Question 1 Result//
  if(question1== "<span>"){
    result1.innerHTML="Question 1- Correct !";
    total+=1;
  }
  else{
  result1.innerHTML="Question 1- Incorrect !";
  total+=0;
  }
  
  //Question 2 Result//
  if(question2=='<link rel="stylesheet" href="styles.css">'){
    result2.innerHTML="Question 2- Correct !";
    total+=1;
  }
  else{
  result2.innerHTML="Question 2- Incorrect !";
  total+=0;
  }

  //Question 3 Result//
  if(question3=='alert("Hello World");'){
    result3.innerHTML="Question 3- Correct !";
    total+=1;
  }
  else{
  result3.innerHTML="Question 3- Incorrect !";
  total+=0;
  }
 
  //Question 4 Result//
  if(question4=="body{color:black;}"){
    result4.innerHTML="Question 4- Correct !";
    total+=1;
  }
  else{
  result4.innerHTML="Question 4- Incorrect !";
  total+=0;
  }

  
score.innerHTML="<p>"+"Your Score:"+" "+total+"/4"  + "</p>"

}


/*Contact*/
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
