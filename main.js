// ✅ Initial progress (0%)
let progress = 0;

// ✅ Function to handle enrollment
function enroll(course) {
  alert(`🎉 You enrolled in ${course}`);
  updateProgress(); // update progress bar
}

// ✅ Function to update progress bar
function updateProgress() {
  if (progress < 100) {
    progress += 33; // increase progress by 33% (3 courses = 100%)
    let bar = document.getElementById("progress-fill");
    bar.style.width = progress + "%";
    bar.textContent = progress + "%";
  } else {
    alert("✅ You have completed all courses!");
  }
}
