const rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== 'range') {
    target = document.getElementById('range');
  } 
  const min = target.min;
  const max = target.max;
  const val = target.value;
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
})

//MVC
// This is the View Section of the code.
function renderPrice(sliders){
  document.getElementById("price").innerHTML = "&#36;" + Number(sliders).toFixed(2);
}
function renderViews(views){
  document.getElementById("pageviews").innerHTML = views;
}
function renderCalender(calender){
  document.getElementById("duration").innerHTML ="/ " + calender;
}



// This is the Control/Model Section of the code
function rangeUpdate(){
  let slider = document.getElementById("range").value;

    if (slider == 100){
      let sliders = 36.00;
      let views ="1M";
      renderPrice(sliders);
      renderViews(views);
      
      return 36;

    } else if(slider == 75){
      let sliders = 24.00;
      let views ="500K";
      renderPrice(sliders);
      renderViews(views);
      
      return 24;

    } else if (slider == 50){
      let sliders = 16.00;
      let views ="100K";
      renderPrice(sliders);
      renderViews(views);
      
      return 16;

    } else if (slider == 25){
      let sliders = 12.00;
      let views ="50K";
      renderPrice(sliders);
      renderViews(views);
      
      return 12;

    } else {
      let sliders = 8.00;
      let views ="10k";
      renderPrice(sliders);
      renderViews(views);
      
      return 8;
    }
}

function discountCal(){
  let listPrice = rangeUpdate() * 12;
  let discountPercentage = 0.25;
  let toPay = listPrice - (listPrice * discountPercentage);
  renderPrice(toPay);

}

function validate() {
  if (document.getElementById('accept').checked) {
    discountCal();
    let calender = "yearly";
    renderCalender(calender);
  } else {
    rangeUpdate();
    let calender = "monthly";
    renderCalender(calender);
  }
 
}