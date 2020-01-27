// question 1
const cat = {
  complain: function logCatSound() {
    console.log("Meow!");
  }
};
// question 2
const heading = document.querySelector("h3");
// question 3
heading.style.fontSize = "2em";
// question 4
heading.classList.add("subheading");
// question 5
const paragraphs = document.querySelectorAll("p");
// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
// question 7
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];
function catArrayFunction(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}
catArrayFunction(cats);
// question 8
function wrapNames(catNames) {
    let newHTML = "";
    for (let i = 0; i < catNames.length; i++) {
        let newElement = catNames[i];
        newHTML+=`<h5>${newElement.name}</h5>`;
        }
        return newHTML;
  }
// question 9
wrapNames(cats);
function wrapNames(catNames) {
    let newHTML = "";
    for (let i = 0; i < catNames.length; i++) {
        let newElement = catNames[i];
        newHTML+=`<h5>${newElement.name}</h5>`;
        }
        newHTML = resultsContainer.innerHTML;
        return newHTML;
  }
// question 10 

// question
// question
