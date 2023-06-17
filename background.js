chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    
    if (request.iframe == "" && request.req_type === "create_form"){
      chrome.storage.local.get(["form_url"]).then((result) => {
        var form_url_ = result.form_url != null ? result.form_url : "https://www.google.com"
        chrome.tabs.create({url : form_url_, active: true})
        chrome.tabs.remove(sender.tab.id, function() { });
      });
      sendResponse({farewell: "Form Created"});
    }

    if (request.iframe != "" && request.req_type === "create_iframe"){
      chrome.tabs.create({url : request.iframe, active: true})
      sendResponse({farewell: "Iframe Created"});
      chrome.tabs.remove(sender.tab.id, function() { });
    }

    
  }
);  

chrome.commands.onCommand.addListener(function (command) {
  if (command === "trigger_form") {
    chrome.storage.local.get(["form_url"]).then((result) => {
      var form_url_ = result.form_url != null ? result.form_url : "https://www.google.com"
      chrome.tabs.create({url : form_url_, active: true})
      // chrome.tabs.remove(sender.tab.id, function() { });
    });  
  }
});



