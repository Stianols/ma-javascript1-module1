// Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");

function changeHeading() {
  heading.innerHTML = "Updated heading";
}

changeHeading();

// Question 3

function changeSize() {
  heading.style.fontSize = "2em";
}

changeSize();

// Question 4

function addSubHeading() {
  heading.className = "subheading";
}

addSubHeading();

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function kittens(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

kittens(cats);

// Question 8

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
  }
}

createCats(cats);
