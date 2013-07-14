function TalksCtrl($scope, $resource) {
	var talk = $resource('http://localhost:8888/talk')
	$scope.talks = talk.get();
	/*[ 
		{ title:"Meta-Presenting", speaker:"Tatham Oddie", isLive:false},
		{ title:"PowerShell v4.0", speaker:"Jason Stangroome", isLive:true},
		{ title:"Something, something javascript", speaker: "Aaron Powell", isLive:false}];*/
};

function MediaCtrl($scope) {
	$scope.talk =  {
		title: "PowerShell v4.0", 
		speaker: "Jason Stangroome", 
		isLive:true
	};
};