function TalksCtrl($scope) {
	$scope.talks = [ 
		{ title:"Meta-Presenting", speaker:"Tatham Oddie", isLive:false},
		{ title:"PowerShell v4.0", speaker:"Jason Stangroome", isLive:true},
		{ title:"Something, something javascript", speaker: "Aaron Powell", isLive:false}];

	$scope.video = function() {

	};

	$scope.currentTalk = function() {
		$scope.talks.forEach(function(item, index, array){
			if (item.isLive) {
				return item;
			}
		});
	};
}