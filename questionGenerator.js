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
    {
        id: 13,
        text: 'Якої цілі ти хочеш досягнути за наступні 5 років?',
        answer: false
    },
    {
        id: 14,
        text: 'Твій талант, по який ніхто не знає?',
        answer: false
    },
    {
        id: 15,
        text: 'Що для тебе гірше: бути 2 роки зовсім без роботи, але потім отримати дуже хорошу вакансію; 10 років працювати на низькокваліфікованій роботі, а потім отримати хорошу вакансію; чи все життя працювати із середньою заробітньою платою (по Україні)? Чому?',
        answer: false
    },
    {
        id: 16,
        text: 'Чи розглядали ви можливість вступити до якогось іншого вузу? Якщо так, то до якого і чому?',
        answer: false
    },
    {
        id: 17,
        text: 'Який ваш кумир?',
        answer: false
    },
    {
        id: 18,
        text: 'Які ваші 3 основні правила на життя, які ви ніколи не порушите?',
        answer: false
    },
    {
        id: 19,
        text: '3 поради, які б ви дали своїм дітям',
        answer: false
    },
    {
        id: 20,
        text: 'Ваш ідеальний відпочинок буде…',
        answer: false
    },
    {
        id: 21,
        text: 'Якби у вас було 30 секунд, коли б весь світ вас чув, то що б ви сказали?',
        answer: false
    },
    {
        id: 22,
        text: 'Чому ви обрали роботу у команді саме із вашим партнером?',
        answer: false
    },
    {
        id: 23,
        text: 'Що б ви розробили, якби у вас була власна ІТ-компанія?',
        answer: false
    },
    {
        id: 24,
        text: 'Яку б компанію ви обрали, якби був вибір між великою та малою ІТ-компанією?',
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
        let max = 24;

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
