
// let URL = "./scripts/crochet-patterns.json"
// const patterns = $.getJSON( URL );
// console.log(patterns);

const patternSection = document.getElementById("patterns-section-output")
const experienceSelect = document.getElementById("experience-select")
const patternCards = document.getElementsByClassName("pattern-card")

const patterns = [
    {
      "id": 0,
      "name": "Chicken",
      "difficulty": "beginner",
      "image": "images/chickens.jpg",
      "imageAlt": "various colors of round shaped yarn crochet chickens",
      "pattern": {
        "Body": [
          "1. 6 Sc in MR (6)",
          "2. [Inc] x 6 (12)",
          "3. [Sc, Inc] x 6 (18)",
          "4. [2 Sc, Inc] x 6 (24)",
          "5. [7 Sc, Inc] x 3 (27)",
          "6-7. Sc in each St around (27)",
          "8. [ 8 Sc, Inc] x 3 (30)",
          "9. 19 Sc, Inc, 10 Sc (31)",
          "10. 20 Sc, Inc, 10 Sc (32)",
          "11. 19 Sc, 2 Dec, 9 Sc (30)",
          "12. [3 Sc, Dec] x 6 (24)",
          "13. [2 Sc, Dec] x 6 (18)",
          "14. [Sc, Dec] x 6 (12)",
          "15. [Dec] x 6 (6)",
          "Finish off."
        ],
        "Wings": [
          "1. Ch 6, Sc, dc Inc, dc, dc Inc, Sc (7)",
          "Finish off with long tail to sew to body."
        ],
        "Comb": [
          "1. Ch 10, [Sc, dc Inc, Sl-St] x 3 (12)",
          "Finish off with long tail to sew to body."
        ]
      }
    },
    {
      "id": 1,
      "name": "Pig",
      "difficulty": "intermediate",
      "image": "images/placeholder.jpg",
      "imageAlt": "round hot pink yarn crochet pig",
      "pattern": {
        "Body": [
          "1. 6 Sc in MR (6)",
          "2. [Inc] x 6 (12)",
          "3. [Sc, Inc] x 6 (18)",
          "4. [2 Sc, Inc] x 6 (24)",
          "5. [7 Sc, Inc] x 3 (27)",
          "6-15. Sc in each St around (27)",
          "16. [3 Sc, Dec] x 6 (24)",
          "17. [2 Sc, Dec] x 6 (18)",
          "18. [Sc, Dec] x 6 (12)",
          "19. [Dec] x 6 (6)",
          "Finish off."
        ],
        "Snout": [
          "1. 6 Sc in MR (6)",
          "2. [Inc] x 6 (12)",
          "3. BLO Sc in each St around (12)",
          "Finish off with long tail to sew to face."
        ],
        "Ears (Make 2)": [
          "1. 4 Sc in MR (4)",
          "2. [Sc Inc] x 2 (6)",
          "3. [2 Sc, Inc] x 2 (8)",
          "4. Sc in each St around (8) – Row 5",
          "Finish off with long tail to sew to head."
        ],
        "Feet (Make 4)": [
          "1. 4 Sc in MR (4)",
          "2. [Inc] x 4 (8)",
          "3. Sc in each St around (8)",
          "Finish off with long tail to sew to body."
        ],
        "Tail": [
          "1. Ch 8, Inc across Chain (14)",
          "Finish off with long tail to sew to back."
        ],
        "Notes": [
          "Eyes:Between Rows 3 & 4, 8 St apart on row 3, 9 on row 4.",
          "Nose:covers rows 1 & 2",
          "Tail:row 16"
        ]
      }
    },
    {
      "id": 2,
      "name": "Bald Eagle",
      "difficulty": "hard",
      "image": "images/placeholder.jpg",
      "imageAlt": "Brown and White with yellow beak yarn crochet Bald Eagle",
      "pattern": {
        "Head": [
          "Start with white.",
          "1. Sc 6 in MR (6)",
          "2. [Inc] x 6 (12)",
          "3. [Sc, Inc] x 6 (18)",
          "4. [2 Sc, Inc] x 6 (24)",
          "5. [3 Sc, Inc] x 6 (30)",
          "6. Sc in each St around (30) – Row 10",
          "11. FLO [Sl-St, (3 Hdc), Sl-St] x 10 (50)",
          "Fasten off then switch to brown.",
          "BLO Sc in each St around (30)",
          "12. Sc in each St around (30) – Row 15",
          "16. [3 Sc, Dec] x 6 (24)",
          "17. [2 Sc, Dec] x 6 (18)",
          "18. [Sc, Dec] x 6 (12)",
          "19. [Dec] x 6 (6)",
          "Finish off."
        ],
        "Tail": [
          "Start with white.",
          "1. 6 sc in MR (6)",
          "2. [Sc, Inc] x 3 (9)",
          "3. Sc in each St around (9)",
          "Finish off with long tail to sew to body."
        ],
        "Beak": [
          "Start with yellow.",
          "1. 3 Sc in MR (3)",
          "2. [Inc] x 3 (6)",
          "3. [Sc, Inc] x 3 (9)",
          "Finish off with long tail to sew to head."
        ],
        "Wings (Make 2)": [
          "Start with brown.",
          "1. 6 Sc in MR (6)",
          "2. [Inc] x 6 (12)",
          "3. [3 Sc, Inc] x 3 (15)",
          "4. Sc in each St around (15) – Row 8",
          "Finish off with long tail to sew to body."
        ],
        "Notes": [
          "Eyes:Row 8 stitch 7, Row 8 stitch 13/14, each eye 2 away from nose.",
          "Tail:Top between 14 & 15, bottom between 16& 17.",
          "Beak:Top between 5 & 6, bottom between 9 & 9.",
          "Wings:About 7 away from middle (beak) stitch on each side sewn horizontally to Row 11."
        ]
      }
    },
    {
      "id": 3,
      "name": "Placeholder",
      "difficulty": "beginner",
      "image": "images/placeholder.jpg",
      "imageAlt": "placeholder",
      "pattern": {}
    },
    {
      "id": 4,
      "name": "Placeholder",
      "difficulty": "intermediate",
      "image": "images/placeholder.jpg",
      "imageAlt": "placeholder",
      "pattern": {}
    },
    {
      "id": 5,
      "name": "Placeholder",
      "difficulty": "hard",
      "image": "images/placeholder.jpg",
      "imageAlt": "placeholder",
      "pattern": {}
    }
  ]
  


  function createPatternCards(patternsList) {
    for (let i; i < patternsList.length; i++) {
        console.log(pattern.name);
        const card = createPatternCard(pattern);
        patternSection.appendChild(card);
    }}; 


    function createPatternCard(pattern) {
        // Create the card container
        const card = document.createElement("div")
        card.setAttribute("class", "pattern-card")

        // Create the heading element
        const name = document.createElement("h3");
        name.innerHTML = pattern.name;

        // Create the image element
        const image = document.createElement("img");
        image.setAttribute("src", pattern.image);
        image.setAttribute("alt", pattern.imageAlt);

        // Create the difficulty element
        const difficulty = document.createElement("p")
        difficulty.innerHTML = pattern.difficulty

        //Put them all in one another
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(difficulty);

        return
    }

createPatternCards(patterns);


// Create elements via loop
// Get innerhtml "name"
// 