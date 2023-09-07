chrome.runtime.onMessage.addListener((message, callback) => {
  const tabId = getForegroundTabId();
  if (message.data === "setAlarm") {
    chrome.alarms.create({delayInMinutes: 5})
  } else if (message.data === "runLogic") {
    chrome.scripting.executeScript({file: 'logic.js', tabId});
  } else if (message.data === "changeColor") {
    chrome.scripting.executeScript(
        {func: () => document.body.style.backgroundColor="orange", tabId});
  };
});