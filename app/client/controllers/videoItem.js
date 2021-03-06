Template.videoItem.helpers({
	'formatTime': function(){
		var timestamp = this.timestamp;
		return moment.unix(timestamp).calendar();
	},

	'formatAddress': function(){
		var address = this.address[0];

		return address.streetName + "\n" + address.city + (address.stateCode ? ', ' + address.stateCode : '') + ", " + address.country
	}
});

Template.videoItem.events({
	'click .video-list-item': function(){
		Session.set('currentVideo', this);
		$('.selected-video-source').attr('src', '/videos/' + this.filename);
		$('.selected-video-frame').load();
		$('.video-modal').openModal();
	}
});
