let qa = new Vue({
  el: '#qa',
  data: {
    question_index: 0,
    question_items: [
      {
        title: '哪項不是流感的傳播途徑？',
        img: 'images/qa_1.png',
        answers: [
          {
            title: '飛沫傳染',
            score: 0,
            msg: '流感的傳染途徑以「飛沫傳染」為主，由於病毒可以在寒冷低溼度的環境中存活數小時，也有可能經由「間接接觸」傳染，在空氣不流通的密閉空間中，最容易感染流感！',
            head: '答錯了！正解：食物污染',
          },
          {
            title: '接觸傳染',
            score: 0,
            msg: '流感的傳染途徑以「飛沫傳染」為主，由於病毒可以在寒冷低溼度的環境中存活數小時，也有可能經由「間接接觸」傳染，在空氣不流通的密閉空間中，最容易感染流感！',
            head: '答錯了！正解：食物污染',
          },
          {
            title: '食物污染',
            score: 1,
            msg: '流感的傳染途徑以「飛沫傳染」為主，由於病毒可以在寒冷低溼度的環境中存活數小時，也有可能經由「間接接觸」傳染，在空氣不流通的密閉空間中，最容易感染流感！',
            head: '答對囉！',
          },
          {
            title: '以上皆非',
            score: 0,
            msg: '流感的傳染途徑以「飛沫傳染」為主，由於病毒可以在寒冷低溼度的環境中存活數小時，也有可能經由「間接接觸」傳染，在空氣不流通的密閉空間中，最容易感染流感！',
            head: '答錯了！正解：食物污染',
          }
        ]
      },
      {
        title: '哪項不是流感的主要症狀？',
        img: 'images/qa_2.png',
        answers: [
          {
            title: '發高燒',
            score: 0,
            msg: '嗅覺或味覺喪失是新冠肺炎常見的症狀，但並非流感常見症狀。',
            head: '答錯了！正解：嗅覺或味覺喪失',
          },
          {
            title: '肌肉痠痛',
            score: 0,
            msg: '嗅覺或味覺喪失是新冠肺炎常見的症狀，但並非流感常見症狀。',
            head: '答錯了！正解：嗅覺或味覺喪失',
          },
          {
            title: '嗅覺或味覺喪失',
            score: 1,
            msg: '嗅覺或味覺喪失是新冠肺炎常見的症狀，但並非流感常見症狀。',
            head: '答對囉！',
          },
          {
            title: '以上皆是',
            score: 0,
            msg: '嗅覺或味覺喪失是新冠肺炎常見的症狀，但並非流感常見症狀。',
            head: '答錯了！正解：嗅覺或味覺喪失',
          }
        ]
      },
      {
        title: '誰可能感染流感病毒？',
        img: 'images/qa_3.png',
        answers: [
          {
            title: '35歲，熱愛運動、健身的上班族小明',
            score: 0,
            msg: '任何人都有可能感染流感，即便是健康、抵抗力佳的成人也有感染流感的風險，還可能成為把病毒從外界帶回家的媒介。',
            head: '答錯了！正解：以上皆有可能',
          },
          {
            title: '58歲，有糖尿病的吳阿姨',
            score: 0,
            msg: '任何人都有可能感染流感，即便是健康、抵抗力佳的成人也有感染流感的風險，還可能成為把病毒從外界帶回家的媒介。',
            head: '答錯了！正解：以上皆有可能',
          },
          {
            title: '14歲，常感冒的國中生花花',
            score: 0,
            msg: '任何人都有可能感染流感，即便是健康、抵抗力佳的成人也有感染流感的風險，還可能成為把病毒從外界帶回家的媒介。',
            head: '答錯了！正解：以上皆有可能',
          },
          {
            title: '以上皆有可能',
            score: 1,
            msg: '任何人都有可能感染流感，即便是健康、抵抗力佳的成人也有感染流感的風險，還可能成為把病毒從外界帶回家的媒介。',
            head: '答對囉！',
          }
        ]
      },
      {
        title: '哪些人是流感的高風險族群？',
        img: 'images/qa_4.png',
        answers: [
          {
            title: '65歲以上成人',
            score: 0,
            msg: '50歲以上成人、孕婦、未滿五歲嬰幼兒、肥胖(BMI>=30)、慢性病（如：氣喘、糖尿病、心血管疾病、肝硬化、腎臟病等)或罕見疾病患者、免疫功能不全者都是感染流感的高風險族群。',
            head: '答錯了！正解：以上皆是',
          },
          {
            title: '三高患者',
            score: 0,
            msg: '50歲以上成人、孕婦、未滿五歲嬰幼兒、肥胖(BMI>=30)、慢性病（如：氣喘、糖尿病、心血管疾病、肝硬化、腎臟病等)或罕見疾病患者、免疫功能不全者都是感染流感的高風險族群。',
            head: '答錯了！正解：以上皆是',
          },
          {
            title: '幼稚園孩童',
            score: 0,
            msg: '50歲以上成人、孕婦、未滿五歲嬰幼兒、肥胖(BMI>=30)、慢性病（如：氣喘、糖尿病、心血管疾病、肝硬化、腎臟病等)或罕見疾病患者、免疫功能不全者都是感染流感的高風險族群。',
            head: '答錯了！正解：以上皆是',
          },
          {
            title: '以上皆是',
            score: 1,
            msg: '50歲以上成人、孕婦、未滿五歲嬰幼兒、肥胖(BMI>=30)、慢性病（如：氣喘、糖尿病、心血管疾病、肝硬化、腎臟病等)或罕見疾病患者、免疫功能不全者都是感染流感的高風險族群。',
            head: '答對囉！',
          }
        ]
      },
      {
        title: '哪項無法有效預防流感？',
        img: 'images/qa_5.png',
        answers: [
          {
            title: '多喝水',
            score: 1,
            msg: '施打流感疫苗、戴口罩、勤洗手、少進出人多的場所、保持室內空氣流通才是正確預防流感才是正確有效預防流感的方式。',
            head: '答對囉！',
          },
          {
            title: '佩戴口罩',
            score: 0,
            msg: '施打流感疫苗、戴口罩、勤洗手、少進出人多的場所、保持室內空氣流通才是正確預防流感才是正確有效預防流感的方式。',
            head: '答錯了！正解：多喝水',
          },
          {
            title: '勤洗手',
            score: 0,
            msg: '施打流感疫苗、戴口罩、勤洗手、少進出人多的場所、保持室內空氣流通才是正確預防流感才是正確有效預防流感的方式。',
            head: '答錯了！正解：多喝水',
          },
          {
            title: '施打疫苗',
            score: 0,
            msg: '施打流感疫苗、戴口罩、勤洗手、少進出人多的場所、保持室內空氣流通才是正確預防流感才是正確有效預防流感的方式。',
            head: '答錯了！正解：多喝水',
          }
        ]
      },
      {
        title: '哪些人不適合施打流感疫苗呢？',
        img: 'images/qa_6.png',
        answers: [
          {
            title: '慢性病患者',
            score: 0,
            msg: '未滿六歲的嬰兒、對疫苗成分過敏、曾發嚴重疫苗不良反應者不適合施打疫苗，有過敏體質者，應告知醫生，由醫師評估是否施打。有發燒或其他急性疾病者，建議等病情穩定後再進行接種。',
            head: '答錯了！正解：未滿6個月嬰兒',
          },
          {
            title: '孕婦',
            score: 0,
            msg: '未滿六歲的嬰兒、對疫苗成分過敏、曾發嚴重疫苗不良反應者不適合施打疫苗，有過敏體質者，應告知醫生，由醫師評估是否施打。有發燒或其他急性疾病者，建議等病情穩定後再進行接種。',
            head: '答錯了！正解：未滿6個月嬰兒',
          },
          {
            title: '未滿6個月嬰兒',
            score: 1,
            msg: '未滿六歲的嬰兒、對疫苗成分過敏、曾發嚴重疫苗不良反應者不適合施打疫苗，有過敏體質者，應告知醫生，由醫師評估是否施打。有發燒或其他急性疾病者，建議等病情穩定後再進行接種。',
            head: '答對囉！',
          },
          {
            title: '以上皆是',
            score: 0,
            msg: '未滿六歲的嬰兒、對疫苗成分過敏、曾發嚴重疫苗不良反應者不適合施打疫苗，有過敏體質者，應告知醫生，由醫師評估是否施打。有發燒或其他急性疾病者，建議等病情穩定後再進行接種。',
            head: '答錯了！正解：未滿6個月嬰兒',
          }
        ]
      },
      {
        title: '流感疫苗建議接種頻率為何？',
        img: 'images/qa_7.png',
        answers: [
          {
            title: '接種一次終生有效',
            score: 0,
            msg: '流感疫苗的保護效力有時限，且每年流行的病毒株不同，建議每年都要定期接種流感疫苗。',
            head: '答錯了！正解：每年接種一次',
          },
          {
            title: '半年接種一次',
            score: 0,
            msg: '流感疫苗的保護效力有時限，且每年流行的病毒株不同，建議每年都要定期接種流感疫苗。',
            head: '答錯了！正解：每年接種一次',
          },
          {
            title: '每年接種一次',
            score: 1,
            msg: '流感疫苗的保護效力有時限，且每年流行的病毒株不同，建議每年都要定期接種流感疫苗。',
            head: '答對囉！',
          },
          {
            title: '三年接種一次',
            score: 0,
            msg: '流感疫苗的保護效力有時限，且每年流行的病毒株不同，建議每年都要定期接種流感疫苗。',
            head: '答錯了！正解：每年接種一次',
          }
        ]
      },
      {
        title: '請問以下敘述是否正確？打流感疫苗有副作用，所以有風險的人施打就好。',
        img: 'images/qa_8.png',
        answers: [
          {
            title: 'Yes',
            score: 0,
            msg: '流感疫苗常見副作用有注射部位紅腫和注射部位痠痛，少數人會出現發燒、頭痛、肌肉痠痛、噁心等症狀，但一般再發生後1-2天內會自然恢復。引發嚴重副作用發生機率非常低，若對接種疫苗有疑慮，可以請醫師協助評估。',
            head: '答錯了！',
          },
          {
            title: 'No',
            score: 1,
            msg: '流感疫苗常見副作用有注射部位紅腫和注射部位痠痛，少數人會出現發燒、頭痛、肌肉痠痛、噁心等症狀，但一般再發生後1-2天內會自然恢復。引發嚴重副作用發生機率非常低，若對接種疫苗有疑慮，可以請醫師協助評估。',
            head: '答對囉！',
          }
        ]
      },
      {
        title: '請問以下敘述是否正確？打了新冠肺炎疫苗，就可以不用打流感疫苗。',
        img: 'images/qa_9.png',
        answers: [
          {
            title: 'Yes',
            score: 0,
            msg: '流感和新冠肺炎屬於不同的病毒類型，目前並無足夠研究資料證實新冠肺炎疫苗對流感有交叉保護的效果。請遵循政府政策及醫師專業建議，評估接種新冠肺炎疫苗及流感疫苗。',
            head: '答錯了！',
          },
          {
            title: 'No',
            score: 1,
            msg: '流感和新冠肺炎屬於不同的病毒類型，目前並無足夠研究資料證實新冠肺炎疫苗對流感有交叉保護的效果。請遵循政府政策及醫師專業建議，評估接種新冠肺炎疫苗及流感疫苗。',
            head: '答對囉！',
          }
        ]
      },
      {
        title: '請問以下敘述是否正確？若是身邊的人都接種流感疫苗，就能達到群體免疫的效果，自己就不需要施打疫苗。',
        img: 'images/qa_10.png',
        answers: [
          {
            title: 'Yes',
            score: 0,
            msg: '流感疫苗最重要的功能是「避免造成死亡的重症與併發症發生」，提高自身保護力，也能避免將病毒帶回家傳染給家人。',
            head: '答錯了！',
          },
          {
            title: 'No',
            score: 1,
            msg: '流感疫苗最重要的功能是「避免造成死亡的重症與併發症發生」，提高自身保護力，也能避免將病毒帶回家傳染給家人。',
            head: '答對囉！',
          }
        ]
      },
    ],
    total: 0,
    answer_count: 0,
    showAnswer: false,
    answerResult: {},
    modal_btn: '下一題',
    answers: [
      // 從最高分往下放
      {
        max_score: 10,
        info: 'WOW！流感防疫小尖兵就是你！往下看更多：',
        image: 'images/result_a.jpg',
        shareLink:{
          line: 'https://line.me/R/msg/text/?https://cathchou.github.io/test/0910/qa-result-a.html',
          facebook: 'https://www.facebook.com/sharer/sharer.php?u=https://cathchou.github.io/test/0909/qa-result-a.html'
        }
      },
      {
        max_score: 7,
        info: '唉啊！差一點！馬上查看流感懶人包，看看有什麼事你不知道的吧！',
        image: 'images/result_b.jpg',
        shareLink:{
          line: 'https://line.me/R/msg/text/?https://cathchou.github.io/test/0910/qa-result-b.html',
          facebook: 'https://www.facebook.com/sharer/sharer.php?u=https://cathchou.github.io/test/0909/qa-result-b.html'
        }
      },
      {
        max_score: 4,
        info: '馬上查看流感小學堂，讓我們一起更了解流感吧！',
        image: 'images/result_c.jpg',
        shareLink:{
          line: 'https://line.me/R/msg/text/?https://cathchou.github.io/test/0910/qa-result-c.html',
          facebook: 'https://www.facebook.com/sharer/sharer.php?u=https://cathchou.github.io/test/0909/qa-result-c.html'
        }
      },
    ],
  },
  watch: {
    total: function () {
      let item = this.answers[0];
      for (let i in this.answers) {
        if (this.total <= this.answers[i].max_score) {
          item = this.answers[i];
        }
      }
      this.result = item;
    }
  },
  computed: {
    now_question: function () {
      return this.question_items[this.question_index];
    },
    progress: function () {
      return (100 / this.question_items.length).toFixed(2) * (this.question_index + 1);
    },
    total_length: function () {
      return this.question_items.length - 1;
    }
  },
  methods: {
    answerQA: function (item) {
      this.total += item.score;
      this.answerResult = item;
      this.showAnswer = true
       if( item.score !== 0){
        this.answer_count++
      }
      if (this.question_index >= this.total_length) {
        this.modal_btn = '看結果';
      }

    },
    next_qa: function(){
      this.showAnswer = false
      this.question_index += 1
    }
  }
});