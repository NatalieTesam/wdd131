const patternsSection = document.getElementById("patterns-section-output");
var patterns;

const patternsJson = fetch("./scripts/crochet-patterns.json")
  .then((response) => response.json())
  .then((data) => {
    obj = data;
  })
  .then(() => {
    console.log(obj);
  });

function populatePatterns(patterns) {
  for (pattern in patterns) {
    console.log(pattern);
  }
}

populatePatterns(patterns);
