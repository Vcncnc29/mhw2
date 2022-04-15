/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const check="images/checked.png";
const uncheck="images/unchecked.png";


function onclick(event){
  const im=event.currentTarget;
  const a=im.querySelector('.checkbox');
  const b=document.querySelectorAll('[data-question-id="one"]');
  const c=document.querySelectorAll('[data-question-id="two"]');
  const f=document.querySelectorAll('[data-question-id="three"]');
  for(const i of b){
    if(i===im && im.dataset.questionId==="one"){     
      i.classList.add('premuto');
      i.classList.remove('no_premuto');
      a.src=check;       
      count4[0]=1;     
      list[0]=im.dataset.choiceId;
    }  
    else if (i!==im && im.dataset.questionId==="one"){
      i.classList.remove('premuto');
      i.classList.add('no_premuto');
      const h=i.querySelector('.checkbox');
      h.src=uncheck;
    }
  }
  for(const i of c){
    if(i===im && im.dataset.questionId==="two"){
      i.classList.add('premuto');
      i.classList.remove('no_premuto');
      a.src=check;      
      count4[1]=1;      
      list[1]=(im.dataset.choiceId);
      
    }
    else if(i!==im && im.dataset.questionId==="two"){
      i.classList.remove('premuto');
      i.classList.add('no_premuto');
      const h=i.querySelector('.checkbox');
      h.src=uncheck;
    }
  }
  for(const i of f){
    if(i===im && im.dataset.questionId==="three"){
      i.classList.add('premuto');
      i.classList.remove('no_premuto');
      a.src=check; 
      count4[2]=1;         
      list[2]=im.dataset.choiceId;  
      
    }
    else if(i!==im && im.dataset.questionId==="three"){
      i.classList.remove('premuto');
      i.classList.add('no_premuto');
      const h=i.querySelector('.checkbox');
      h.src=uncheck;
    }
    
  }

 
  if(count4[0]==1 && count4[1]==1 && count4[2]==1){
    risp.classList.remove('hidden');
    
    if(list[0]!==undefined && (list[0]===list[1] || list[0]===list[2]) ||(list[0]!==undefined &&(list[0]!==list[1] || list[0]!==list[2]))){
      let titl=document.querySelector('.t');
      let contenuto=document.querySelector('#contenuto'); 
      titl.textContent=RESULTS_MAP[list[0]].title; 
      contenuto.textContent=RESULTS_MAP[list[0]].contents;
      errore.classList.add('hidden');
      
      for(const j of uno){
        j.removeEventListener('click',onclick);
      }
    }

  }
  else if(count4[0]!=1 || count4[1]!=1 || count4[2]!=1){    
    errore.textContent="Non sono state selezionate alcune le risposte";
  }
  
}
function ricomincia_quiz(){
  const y=document.querySelectorAll('.choice-grid div,.checkbox');
  for(const z of y){
    z.classList.remove('premuto');
    z.classList.remove('no_premuto');
    z.src=uncheck;
    list=[];
    count4=[];
    errore.classList.remove('hidden');
    
    for(const j of uno){
      j.addEventListener('click',onclick);
    }
  }

  risp.classList.add('hidden');
  
}

let count4=[];
let list=[];
const risp=document.querySelector('#risposta');
const errore=document.querySelector('.error');
risp.classList.add('hidden');
const uno=document.querySelectorAll('.choice-grid div');

for (const box of uno)
{
  box.addEventListener('click', onclick); 
}
const button=document.querySelector('button');
button.addEventListener('click',ricomincia_quiz);