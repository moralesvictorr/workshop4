
export const correctQuestionsToLs = () => {
    if(localStorage.getItem("correctQuestions") != null ){
        const number = localStorage.getItem("correctQuestions");
        localStorage.setItem("correctQuestions", JSON.stringify(parseInt(number) + 1));
    }else{
        localStorage.setItem("correctQuestions", JSON.stringify(1));
    }
}

export const incorrectQuestionsToLs = () => {
    if(localStorage.getItem("incorrectQuestions") != null ){
        const number = localStorage.getItem("incorrectQuestions");
        localStorage.setItem("incorrectQuestions", JSON.stringify(parseInt(number) + 1));
    }else{
        localStorage.setItem("incorrectQuestions", JSON.stringify(1));
    }
}

export const timeToLs = (number) => {
    localStorage.setItem("time", JSON.stringify(number));
}

export const totalQuestionsToLs = () => {
    if(localStorage.getItem("totalQuestions") != null ){
        const number = localStorage.getItem("totalQuestions");
        localStorage.setItem("totalQuestions", JSON.stringify(parseInt(number) + 1));
    }else{
        localStorage.setItem("totalQuestions", JSON.stringify(1));
    }
}