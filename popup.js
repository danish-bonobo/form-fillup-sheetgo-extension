// When the button is clicked, inject setPageBackgroundColor into current page
let saveUrl = document.getElementById("save-form-url");

chrome.storage.local.get("form_url", ({ form_url }) => {
  document.getElementById("form-url").value = form_url
})

let form_ = document.getElementById("form-url");
saveUrl.addEventListener("click", async () => { 
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setPageBackgroundColor,
  // });
  var url = document.getElementById("form-url").value
  chrome.storage.local.set({ "form_url" : url }).then(() => {
    console.log(url)
  });

  chrome.storage.local.get(["form_url"]).then((result) => {
    console.log("Value currently is " + result.form_url);
  });
  
  // console.log(chrome.storage.local.get("form_url"))

  document.getElementById("form-url").value = ""
    
});