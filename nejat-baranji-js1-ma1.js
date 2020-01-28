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
// question 7, 8, 9 and 10
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

function printName(catArray) {
  let catInfo = "";
  let newHTML = "";
  let catAge = "";
  for (let i = 0; i < catArray.length; i++) {
    let catAge = catArray[i].age;
    if (catAge) {
      catArray[i].age;
    } else {
      catAge = "Age is unknown";
    }
    catInfo = `<div>
                <h5>${catArray[i].name}</h5>
                <p>${catAge}</p>
              </div>`;
    newHTML += catInfo;
  }
  return newHTML;
}
printName(cats);
resultsContainer.innerHTML = printName(cats);
