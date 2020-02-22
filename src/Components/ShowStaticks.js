// ,linear-gradient(97.65deg,#57cdcf .28%,#6ce9c0)
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
	root: {
		background: 'linear-gradient(87.07deg,#ff985f .3%,#ffd15b 99.55%)',
		borderRadius: 13.5,
		border: 0,
		color: 'white',
		height: 51,
		padding: '5px 100px 1px 100px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		marginRight: '5px',
		marginTop: '10px',

		color: '#244A58',
		width: '70%',

		fontSize: '22px',
		fontWeight: 700,
		justifyContent: 'center'
	}
};

function ShowStatics(props) {
	const { classes, children, className, ...other } = props;

	return (
		<Button className={clsx(classes.root, className)} {...other}>
			{children || 'Show Statistics'}
		</Button>
	);
}

ShowStatics.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string
};

export default withStyles(styles)(ShowStatics);
