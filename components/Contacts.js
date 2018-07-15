var Contacts = React.createClass({
	propTypes: {
		item: React.PropTypes.array.isRequired,
	},

	render: function() {
		var contacts = this.props.item.map(function(contact) {
			return React.createElement(Contact, {item: contact, key: contact.id});

		});
		return (
			React.createElement('ul', {clasName: 'contactsList'}, contacts)
		);
	}
});
