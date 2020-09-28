const QuestionsLst = [
    {
        id: 1,
        text: 'Чому вирішили піти в IT-галузь?',
        answer: false
    },
    {
        id: 2,
        text: 'Які ваші ТОП3 soft skills',
        answer: false
    },
    {
        id: 3,
        text: 'Які ваші ТОП3 hard skills?',
        answer: false
    },
    {
        id: 4,
        text: 'Якщо не IT, то що?',
        answer: false
    },
    {
        id: 5,
        text: 'Який ваш проект мрії?',
        answer: false
    },
    {
        id: 6,
        text: 'Що найбільше цінуєте в колег по команді?',
        answer: false
    },
    {
        id: 7,
        text: 'Якщо буде вибір працювати в чоловічій, жіночій команді, яку виберете ви?',
        answer: false
    },
    {
        id: 8,
        text: 'Frontend чи Backend?',
        answer: false
    },
    {
        id: 9,
        text: 'Яке ваше хобі?',
        answer: false
    },
    {
        id: 10,
        text: 'Якщо ви будете керівником команди, яке кредо(принцип) буде в команди?',
        answer: false
    },
    {
        id: 11,
        text: 'Яка ваша команда мрії?',
        answer: false
    },
    {
        id: 12,
        text: 'Чи готові ви поставити цілі команди вище своїх принципів? Чи готові піти на компроміс?',
        answer: false
    },
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
        let max = 12;

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
