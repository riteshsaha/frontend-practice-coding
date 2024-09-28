// Event Listeners
function attachEventListener() {
  var count = 0;
  document.getElementById("btn-click").addEventListener("click", function () {
    console.log("Button Clicked ", ++count, " times!");
  });
}
attachEventListener();

// Event Listener will store the content even when the call stack is empty and do not allow freeing up memory vi Garbage Collection.
// Hence its recommended to removeEventListeners when its no longer required.
