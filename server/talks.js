var talks = [ 
		{ title:"Meta-Presenting", speaker:"Tatham Oddie", isLive:false},
		{ title:"PowerShell v4.0", speaker:"Jason Stangroome", isLive:true},
		{ title:"Something, something javascript", speaker: "Aaron Powell", isLive:false}];

exports.talks = function() {
	return talks;
};

exports.talk = function(talkId) {
	if ((talkId == undefined) || (talkId == null)) {
		return null;
	}

	if (talkId > talks.length) {
		return null;
	}

	return talks[talkId];
};