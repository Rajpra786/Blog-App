export const getTitle = (category) => {
	if (category === 'science-and-space')
		return 'Space & Science';
	else if (category === 'computer-science')
		return 'Computer Science';
	else if (category === 'react-and-ui')
		return 'React & UI';
	else if (category === 'engineering')
		return 'Engineering';

	else
		return category;
};
