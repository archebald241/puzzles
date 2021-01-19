let answers = ['подушка','падушка'];
let correct = 0;
let incorrect = 0;
document.getElementById('cor-ans').innerHTML = correct;
document.getElementById('incor-ans').innerHTML = incorrect;
function btnClick(){
  let text1 = "";
  let text2 = "";
  text1 = document.form.answer.value;
  text2 = text1.toLowerCase();
  let obj = answers.indexOf(text2);
  document.getElementById('mod-ans').innerHTML = "";
  document.getElementById('mod-img').innerHTML = "";
  if (obj >= 0) {
    document.getElementById('mod-content').innerHTML = "<h2>Правильно! Поздравляю!</h2><p>Ваш ответ: <b>" + text1 + "</b> верный!</p>";
    showImg()
    correct += 1;
  }
  else {
    document.getElementById('mod-content').innerHTML = "<h2>Неправильно! </h2><p>Ваш ответ:<b> " + text1 + "</b> неверный!</p>";
    incorrect += 1;
  }
  document.form.answer.value = '';
  document.getElementById('cor-ans').innerHTML = correct;
  document.getElementById('incor-ans').innerHTML = incorrect;
};
function getRiddle(){
  if (document.form.riddle[0].checked){
    document.getElementById('textRiddle').innerHTML = "<p>Четыре уха и два брюха. Что это?</p>";
    answers.splice(0,answers.length,'подушка','падушка');
  }
  else if (document.form.riddle[1].checked){
    document.getElementById('textRiddle').innerHTML = "<p>Зимой и летом одним цветом. Что это?</p>";
    answers.splice(0,answers.length,'ёлка','елка','ель');
  }
  else if (document.form.riddle[2].checked){
    document.getElementById('textRiddle').innerHTML = "<p>Висит груша нельзя скушать. Что это?</p>";
    answers.splice(0,answers.length,'лампочка','лампачка','лампа');
  }
};
function showAns(){
  document.getElementById('mod-ans').innerHTML = "<p>Правильный ответ: <b>" + answers[0] + "</b>!</p>";
  showImg()
};
function showImg(){
  if (document.form.riddle[0].checked) document.getElementById('mod-img').innerHTML = "<img src='img1.png' alt=''>"
  else if (document.form.riddle[1].checked) document.getElementById('mod-img').innerHTML = "<img src='img2.png' alt=''>"
  else if (document.form.riddle[2].checked) document.getElementById('mod-img').innerHTML = "<img src='img3.png' alt=''>"
}
