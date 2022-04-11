


const scriptsInEvents = {

		async Game_over_events_Event1_Act3(runtime, localVars)
		{
			console.log(runtime.globalVars.Score);
			
			var xmlhttp = new XMLHttpRequest();
			
			var url = "http://185.170.214.209:2803/animals/" + runtime.globalVars.Score  +
			"?id=" + 12312321;
			xmlhttp.open("GET", url);
			xmlhttp.send();
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

