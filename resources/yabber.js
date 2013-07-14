function TalksCtrl($scope, $resource) {
	$scope.talks = [ 
		{ title:"Meta-Presenting", speaker:"Tatham Oddie", isLive:false},
		{ title:"PowerShell v4.0", speaker:"Jason Stangroome", isLive:true},
		{ title:"Something, something javascript", speaker: "Aaron Powell", isLive:false}];
};

function MediaCtrl($scope) {
	$scope.talk =  {
		title: "PowerShell v4.0", 
		speaker: "Jason Stangroome", 
		isLive:true
	};
};