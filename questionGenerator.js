const QuestionsLst = [
    {
        id: 1,
        text: 'Чому вирішили піти в IT-галузь?',
        answer: false
    },
    {
        id: 2,
        text: 'Ваші ТОП3 софт скіли',
        answer: false
    },
    {
        id: 3,
        text: 'Ваші ТОП3 хард скіли',
        answer: false
    },
    {
        id: 4,
        text: 'Якщо не IT, то що?',
        answer: false
    },
    {
        id: 5,
        text: 'Проект мрії?',
        answer: false
    }
]



const QuestionGenerator = (function(){

    function getRandomQuestion(){

        let isNotAnswerQuestion = false; //free question
        QuestionsLst.forEach((question, index) =>{
            if(question.answer == false){
                isNotAnswerQuestion = true;
            }
        });

        if(!isNotAnswerQuestion)
            return false;

        let min = 1;
        let max = 5;

        let rand = 0;
        let randNum = true;
        while(randNum){
            rand = Math.floor(min + Math.random()*(max+1-min));
            QuestionsLst.forEach((question, index) =>{
                if(question.id ==rand && !question.answer)
                    randNum = false;
            });
        }

        let questionText = "";
        console.log(`rand - ${rand}`);
        QuestionsLst.forEach((question, index) => {
            if(question.id == rand){
                questionText = question.text;
                question.answer = true;
            }
        });

        return questionText;
    }

    return {
        listen: function(){
            let btn=document.querySelector('.generetor__btn--next');
            let questionField = document.querySelector('.generator__question-field');

            btn.addEventListener('click', e=>{
                let questionText = getRandomQuestion();
                if(!questionText)
                    alert('Питань більше немає');
                else{
                    console.log(questionText);
                    questionField.innerHTML = `<p>${questionText}</p>`
                }
            });
        }
    }
})();
QuestionGenerator.listen();
