const questionsOriginal = [
        {
          question: "Before European contact, which of the following best describes Native American society in North America?",
          options: {
            A: "They lacked sophisticated social structures and were mostly nomadic",
            B: "They created varying different cultures that were adapted to their surroundings",
            C: "They all resided in big towns and engaged in sedentary agriculture",
            D: "Their main source of survival was European goods",
          },
          answer: "B",
        },
        {
          question: "Who is the best at AP Physics 1: Algebra Based",
          options: {
            A: "Aditya Vikram Shirgur",
            B: "Robin Tobias Janssen",
            C: "Christopher Huy Trinh",
            D: "None of the Above",
          },
          answer: "D",
        },
        {
          question: "Which of the following was a direct result of initial European contact with the Americas?",
          options: {
            A: "Native Americans immediately gave up their cultures to accommodate for a more European lifestyle ",
            B: "Avi finally got his license and a j*b",
            C: "Many Native Americans contracted European diseases which their bodies had no immunities to and died",
            D: "European settlers began to use the land for large plantations in which they would grow cash crops using African Slaves",
          },
          answer: "C",
        },
        {
          question: "Which of the following developments was a significant reason for the success/survival of Jamestown?",
          options: {
            A: "The discovery of growing cash crops such as tobacco",
            B: "The people who moved to Jamestown were experienced men who knew how to survive in the wilderness",
            C: "The people were able to get the local Natives to work for them",
            D: "The people were able to find gold which they sold for resources from neighboring colonies",
          },
          answer: "A",
        },
        {
          question: "In what ways did the New England colonies differ from the Southern colonies?",
          options: {
            A: "The New England colonies relied heavily on slavery, unlike the Southern colonies",
            B: "The New England colonies had more fertile land than the South",
            C: "The Southern colonies emphasized education more than the North",
            D: "The New England colonies were centered around small towns and commerce; the Southern colonies focused on plantations and cash crops",
          },
          answer: "D",
        },
        {
          question: "What was one long-term result of Bacon's Rebellion in 1676?",
          options: {
            A: "The rebellion successfully ended Native attacks in Virginia",
            B: "Planters turned increasingly to enslaved Africans instead of indentured servants",
            C: "The colonial government reduced taxes on poor farmers",
            D: "Virginia granted voting rights to all male colonists",
          },
          answer: "B",
        },
        {
          question: "What was the significance of the Pueblo Revolt of 1680?",
          options: {
            A: "It led to more lenient Spanish policies toward Native religion and governance",
            B: "It resulted in the permanent expulsion of the Spanish from the Southwest",
            C: "It was the first Native uprising in North America",
            D: "It caused a major alliance between Native tribes and British settlers",
          },
          answer: "A",
        },
        {
          question: "What was a major consequence of the French and Indian War (1754–1763)?",
          options: {
            A: "France gained territory west of the Mississippi River",
            B: "The colonies were granted full independence",
            C: "Britain gained control of Canada but went into deep debt, leading to colonial taxation",
            D: "The war ended all Native resistance in the Ohio Valley",
          },
          answer: "C",
        },
        {
          question: "What was the primary colonial objection to British taxation after 1763?",
          options: {
            A: "It was too high to afford",
            B: "Taxes were based on class and income",
            C: "It included taxes on religious activity",
            D: "The colonies had no representation in Parliament",
          },
          answer: "D",
        },
        {
          question: "Which Enlightenment principle most influenced revolutionary thinking in the colonies?",
          options: {
            A: "The divine right of kings",
            B: "Natural rights to life, liberty, and property",
            C: "The importance of a monarchy",
            D: "The necessity of a national religion",
          },
          answer: "B",
        },
        {
          question: "What was a key weakness of the Articles of Confederation?",
          options: {
            A: "It lacked the ability to tax or regulate commerce",
            B: "It gave too much power to the federal government",
            C: "It allowed the president to declare war unilaterally",
            D: "It let Avi be Supreme Ruler of the United States",
          },
          answer: "A",
        },
        {
          question: "What major compromise was made at the Constitutional Convention regarding representation?",
          options: {
            A: "The Three-Fifths Compromise, counting all free people but no slaves",
            B: "The Federalist Compromise, limiting state sovereignty",
            C: "The Great Compromise, creating a bicameral legislature",
            D: "The Electoral Compromise, giving each state equal votes",
          },
          answer: "C",
        },
        {
          question: "What advice did George Washington give in his Farewell Address?",
          options: {
            A: "To form permanent alliances with strong nations",
            B: "To expand westward at all costs",
            C: "To avoid political parties and foreign entanglements",
            D: "To grant independence to southern territories",
          },
          answer: "C",
        },
        {
          question: "What was one major result of the Market Revolution in the early 19th century?",
          options: {
            A: "The collapse of Southern agriculture",
            B: "Increased regional interdependence and the growth of factories",
            C: "The abolition of slavery across the North",
            D: "The removal of Native Americans from the Midwest",
          },
          answer: "B",
        },
        {
          question: "How did the Second Great Awakening influence American society?",
          options: {
            A: "It increased support for monarchy and the Church of England",
            B: "It led to religious skepticism and a decline in church membership",
            C: "It encouraged states to limit religious freedom",
            D: "It inspired social reforms such as temperance and abolition",
          },
          answer: "D",
        },
        {
          question: "What caused the forced relocation of Native Americans along the Trail of Tears?",
          options: {
            A: "Andrew Jackson's enforcement of the Indian Removal Act",
            B: "A treaty negotiated by all tribes",
            C: "The Supreme Court's ruling in Worcester v. Georgia",
            D: "Western tribes requesting land in Oklahoma",
          },
          answer: "A",
        },
        {
          question: "What issue was at the center of the Nullification Crisis of 1832?",
          options: {
            A: "Opposition to the Second Bank of the United States",
            B: "Disputes over western land claims",
            C: "Resistance to federal tariffs by South Carolina",
            D: "Efforts to end slavery in Northern states",
          },
          answer: "C",
        },
        {
          question: "What was the purpose of the Missouri Compromise of 1820?",
          options: {
            A: "To abolish slavery in the United States",
            B: "To establish popular sovereignty in all new territories",
            C: "To admit California as a free state",
            D: "To maintain the balance of power between free and slave states",
          },
          answer: "D",
        },
        {
          question: "Which development most contributed to rising sectionalism in the antebellum period?",
          options: {
            A: "Debates over tariffs and slavery in new territories",
            B: "The rise of the Whig Party",
            C: "Expansion of the national bank",
            D: "Westward movement of Native American tribes",
          },
          answer: "A",
        },
        {
          question: "How did Jacksonian Democracy expand political participation?",
          options: {
            A: "By creating a hereditary ruling class",
            B: "By extending suffrage to more white males",
            C: "By allowing women to vote",
            D: "By eliminating the Electoral College",
          },
          answer: "B",
        },
        {
          question: "What was the primary motivation behind Manifest Destiny in the 19th century?",
          options: {
            A: "To stop the spread of slavery into new territories",
            B: "To develop stronger relations with European powers",
            C: "To justify westward expansion as a divine right and duty",
            D: "To limit immigration from Asia",
          },
          answer: "C",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "D",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "B",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "A",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "D",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "C",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "B",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "C",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "C",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "D",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "A",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "B",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "D",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "D",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "C",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "A",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "B",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "B",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "A",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "C",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "D",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "B",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "D",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "B",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "C",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "A",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "D",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "B",
        },
        {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "C",
        },
        {
          question: "Which of the following best describes the impact of the Watergate scandal on American politics?",
          options: {
            A: "It led to the resignation of President Nixon and increased public cynicism toward government",
            B: "It resulted in the expansion of presidential powers",
            C: "It strengthened public trust in the executive branch",
            D: "It caused the immediate impeachment and removal of President Nixon by Congress",
          },
          answer: "A",
        },
        {
          question: "What key factor contributed most to the end of the cold war?",
          options: {
            A: "The election of Jimmy Carter and his human rights policy",
            B: "Gorbachev’s reforms and easing of tensions with the west",
            C: "The U.S. invasion of the Soviet Union",
            D: "The collapse of the European Union",
          },
          answer: "B",
        },
        {
          question: "Which of the following best reflects the goals of Reagan conservatism in the 1980s?",
          options: {
            A: "Expanding government social programs and increasing taxes",
            B: "Reducing government regulation and promoting free-market policies",
            C: "Increasing federal control of education and healthcare",
            D: "Promoting isolationism in foreign policy",
          },
          answer: "B",
        },
      ];

      function shuffleArray(array) {
        const arr = array.slice();
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }
      let questions = shuffleArray(questionsOriginal);
      let currentQuestionIndex = 0;
      let selectedOption = null;
      let spinInProgress = false;
      let money = 100;
      let incorrectCount = 0;
      const symbols = ["🍒", "🍋", "🔔", "💎", "7️⃣"];
      const wrongMessages = [
        "Study some more buckaroo",
        "You are as gifted as Henry Clay (when it comes to winning presidential elections)",
        "Try again!",
        "wrong.",
        "That was almost as bad as the Trail of Tears",
        "Even Herbert Hoover would've solved that problem",
        "That answer’s as shaky as the Missouri Compromise",
        "This is why John Adams didn't support expanding suffrage",
        "You just nullified that question like Calhoun",
        "Even Benedict Arnold wouldn’t betray the facts like that"
        "I'm feeling a Great Depression from your score"
      ];
      const questionText = document.getElementById("question-text");
      const optionsDiv = document.getElementById("options");
      const submitBtn = document.getElementById("submit-answer");
      const spinBtn = document.getElementById("spin-button");
      const resultDiv = document.getElementById("result");
      const moneyBar = document.getElementById("money-bar");

      function updateMoney(amountChange) {
        money += amountChange;
        moneyBar.textContent = `Money: $${money}`;
        if (money > 0) {
          moneyBar.classList.add("money-positive");
          moneyBar.classList.remove("money-negative");
        } else {
          moneyBar.classList.add("money-negative");
          moneyBar.classList.remove("money-positive");
        }
      }
      function loadQuestion(index) {
        selectedOption = null;
        submitBtn.disabled = true;
        spinBtn.disabled = true;
        resultDiv.textContent = "";
        questionText.textContent = questions[index].question;
        optionsDiv.innerHTML = "";
        for (const [key, text] of Object.entries(questions[index].options)) {
          const opt = document.createElement("div");
          opt.textContent = `${key}) ${text}`;
          opt.className = "option";
          opt.tabIndex = 0;
          opt.addEventListener("click", () => selectOption(opt, key));
          opt.addEventListener("keypress", e => {
            if (e.key === "Enter") selectOption(opt, key);
          });
          optionsDiv.appendChild(opt);
        }
        [...optionsDiv.children].forEach(opt => (opt.style.pointerEvents = "auto"));
      }
      function selectOption(element, optionKey) {
        [...optionsDiv.children].forEach(opt => opt.classList.remove("selected"));
        element.classList.add("selected");
        selectedOption = optionKey;
        submitBtn.disabled = false;
        resultDiv.textContent = "";
      }
      submitBtn.addEventListener("click", () => {
        if (!selectedOption) return;

        const correctAnswer = questions[currentQuestionIndex].answer.toUpperCase();
        if (selectedOption.toUpperCase() === correctAnswer) {
          resultDiv.textContent = "✅ Correct! You can now spin.";
          spinBtn.disabled = false;
          submitBtn.disabled = true;
          [...optionsDiv.children].forEach(opt => (opt.style.pointerEvents = "none"));
        } else {
          incorrectCount++;
          const randomMsg = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
          resultDiv.textContent = "❌ " + randomMsg;

          if (incorrectCount % 20 === 0) {
            setTimeout(() => {
              alert("💀 yeah you're gonna get a 1 on the AP exam");
            }, 100);
          }
        }
      });
      spinBtn.addEventListener("click", () => {
        if (spinInProgress) return;
        spinInProgress = true;
        spinBtn.disabled = true;
        submitBtn.disabled = true;
        resultDiv.textContent = "";
        updateMoney(-50); // $50 per spin
        const slot1 = document.getElementById("slot1");
        const slot2 = document.getElementById("slot2");
        const slot3 = document.getElementById("slot3");
        let count = 0;
        const maxSpins = 20;
        const spinInterval = setInterval(() => {
          slot1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
          slot2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
          slot3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
          count++;
          if (count >= maxSpins) {
            clearInterval(spinInterval);
            showSpinResult(slot1.textContent, slot2.textContent, slot3.textContent);
          }
        }, 100);
      });
      function showSpinResult(s1, s2, s3) {
        if (s1 === s2 && s2 === s3) {
          updateMoney(100);
          resultDiv.textContent = `🎉 JACKPOT! Three ${s1}! You won $100!`;
        } else if (s1 === s2 || s2 === s3 || s1 === s3) {
          updateMoney(10);
          resultDiv.textContent = `✨ Nice Match! Two matching symbols! You won $10!`;
        } else {
          resultDiv.textContent = "😞 No match this time. Try again!";
        }
        spinInProgress = false;
        setTimeout(loadNextQuestion, 2500);
      }
      function loadNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
          currentQuestionIndex = 0;
          questions = shuffleArray(questionsOriginal);
        }
        loadQuestion(currentQuestionIndex);
      }
      loadQuestion(currentQuestionIndex);
      updateMoney(0);
