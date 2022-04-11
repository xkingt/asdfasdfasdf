
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

function updateUserScore() {
  if (!table || !table.length) return;
  for (var i = 0; i < table.length; i++) {
    if (table[i].current) {
      userScore = table[i].score;
      return;
    }
  }
}

function sendScore() {
  if (!curData) {
    ge('updating').style.display = 'none';
    return;
  }
  post('/api/setScore', {
    data: curData,
    score: score || 0
  }, function(result) {
    table = result.scores
    updateUserScore();
    updateTable();
    ge('updating').style.display = 'none';
    if (result.new) {
      ge('score_share').className = 'score_share shown';
    }
  }, function() {
    ge('updating').style.display = 'none';
  })
}

function getHighScores() {
  if (!curData) return;
  post('/api/getHighScores', {
    data: curData
  }, function(result) {
    table = result.scores
    updateUserScore();
    updateTable();
  })
}
