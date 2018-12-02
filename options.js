function saveOptions(e) {
  localStorage.setItem({
    keyWord: document.querySelector("value").value
  });
}
function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("value").value = result.keyWord;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = localStorage.getItem("keyWord");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").submit(handler("submit", saveOptions));
