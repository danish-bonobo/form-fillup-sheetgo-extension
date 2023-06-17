const myIntervel = setInterval(clickSaveButton, 1000)
const formInterval = setInterval(openForm, 1000)

 setTimeout(() => {
  clearInterval(openForm)
  
 }, 30000);


 function openForm() {
  var save_button = document.getElementsByClassName("MuiButtonBase-root-395 MuiButton-root-368 MuiButton-contained-376 jss364 jss341 MuiButton-containedSizeLarge-386 MuiButton-sizeLarge-388")[0]
  var another_button = document.getElementsByClassName("MuiButtonBase-root-593 MuiButton-root-566 MuiButton-contained-574 jss562 jss546 MuiButton-containedSizeLarge-584 MuiButton-sizeLarge-586")[0]
  var login_button = document.getElementsByClassName("LgbsSe-bN97Pc")[0]

  if(login_button){
    login_button.click()
  }
  if(save_button){
    console.log(save_button)
    save_button.click()
  }

  if(another_button){
    const response = chrome.runtime.sendMessage({iframe: "", req_type : "create_form"});
    console.log(response)

  }
 }

function clickSaveButton(){
  var iframe = document.getElementsByClassName("jss4")[0]
  
  if(iframe){
    console.log(iframe)
    console.log(typeof(iframe.src))
    const response = chrome.runtime.sendMessage({iframe: iframe.src, req_type : "create_iframe"});
    console.log(response)
    clearInterval(myIntervel)
  }
}







  