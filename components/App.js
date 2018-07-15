var contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Kowalski',
		email: 'jan.Kowalski@example.com',
	},

	{
		id: 2,
		firstName: 'Mateusz',
		lastName: 'Kucharczyk',
		email: 'm.Kucharczyk@example.com',
	},

	{
		id: 3,
		firstName: 'George',
		lastName: 'Smith',
		email: 'george552@example.com',
		}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};




var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'App'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {item: contacts}, {})

			)
		);
	}
});
