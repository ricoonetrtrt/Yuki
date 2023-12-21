const questions = [
      {
        question: 'ما هو الشيء الذي يمشي بأربع قدم في الصباح وثلاث قدم في المساء؟',
        answer: 'الإنسان'
},
{
        question: 'ما هو الشيء الذي يأخذك إلى داخله عندما تدخل إلى داخله، ويطردك عندما تخرج منه؟',
        answer: 'الباب'
},
{
        question: 'ما هو الشيء الذي يوجد في كل شيء، ولا يوجد في شيء، وهو أساس كل شيء؟',
        answer: 'الفراغ'
},
{
        question: 'ما هو الشيء الذي يمكن أن تقطعه فقط من نهايةه، ولا يمكن قطعه من منتصفه؟',
        answer: 'الحبل'
},
      {
        question: 'ما هو الشيء الذي يمكن أن تأخذه ولكنك لا تستطيع أن تعطيه',
        answer: 'الصورة'
      },
      {
        question: '. ما هو الشيء الذي يأتي في الليل ويختفي في الصباح، ولا يمكن رؤيته ولكن يمكن سماعه؟',
        answer: 'الصوت'
      },
      {
        question: 'ماهو شيء الذي يمشي بلا رجلين ويبكي بلا عينين?',
        answer: 'سحابة'
      },
      {
        question: '',
        answer: ''
      },
      {
        question: 'ما هو الشيء الذي يكبر كلما قطعته؟',
        answer: 'الطريق'
      },
      {
        question: 'ما هو الشيء الذي لا يمكنك رميه ما لم تمسك به أولاً؟',
        answer: 'الظل'
      },
      {
        question: '. ما هو الشيء الذي يكون أكثر ضوءًا بدون شمعة أو كهرباء؟',
        answer: 'ضوء نهار'
      },
      {
        question: 'ما هو الشيء الذي إذا أخذت منه يزداد؟',
        answer: 'الحفرة'
      },
      {
        question: 'عضو من حرفين لو قلبت الاسم بيطلع اسم عضو تاني؟؟🤔',
        answer: 'فك'
      },
      {
        question: 'ما هي الكلمه التي يبطل معناها إذا نطقنا بها ؟',
        answer: 'الصمت'
      },
      {
        question: 'ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟',
        answer: 'الابره'
      },,
      {
        question: 'كلمة مكونة من 5 أحرف إذا حذفنا منها حرفان تبقى من الكلمة حرف فقط ما هي الكلمة؟؟؟',
        answer: 'حرفان'
      },
      {
        question: 'من هو الذي مات ولم يولد ؟',
            answer: 'ادم'
          },
          {
            question: 'ما هي التي تأكـل ولا تـشــبع ؟',
            answer: 'النار'
          },
          {
            question: 'يسير بلا رجلين ولا يدخل إلا في الأذنين ماهو ؟',
            answer: 'الصوت'
          },
          {
            question: 'ابن أمك و ابن أبيك، و ليس بأختك و لا بأخيك .. فمن يكون؟',
            answer: 'انا'
          },
          {
            question: 'ما هو الحيوان المائى الذى له 3 قلوب ؟',
            answer: 'الاخطبوط'
          }
        ];

module.exports = {
 config: {
  name: 'حزورة',
  category: 'ألعاب',
  role: 0,
  reward: 50,
  price: 0,
  countDown: 10,
  description: "جاوب و إربح نقود",
  guide: '{pn}'
  },
  
atCall: async function({ event, message, commandName, reward }) {
  const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    await message.reply(randomQuestion.question);
  
  const answer = randomQuestion.answer;
  const KEY = generateRandomNumber();
global.YukiBot.onListen.set(KEY, {
      condition: `event.body.toLowerCase() == "${answer || answer.toLowerCase()}"`,
      result: `async () => {
      await message.reply('صحيح لقد ربحت 50 عملة | ✅');
      await usersData.addMoney(event.senderID, ${reward});
      }`
    });

  }
};
  
   async function generateRandomNumber() {
  let number = '';
  for (let i = 0; i < 15; i++) {
    number += Math.floor(Math.random() * 10);
  }
  return number;
}
