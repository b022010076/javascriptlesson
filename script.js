// console.log('Hello World')

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) return "rock";
    if (choice == 1) return "paper";
    if (choice == 2) return "scissors";
};

console.log(getComputerChoice());