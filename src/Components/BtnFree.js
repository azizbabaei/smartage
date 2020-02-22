import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
	root: {
		background: 'linear-gradient(270deg, #FE5193 0%, #F77062 99.79%)',
		borderRadius: 25,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 20px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
	}
};

function BtnFree(props) {
	const { classes, children, className, ...other } = props;

	return (
		<Button className={clsx(classes.root, className)} {...other}>
			{children || 'Try To Free'}
		</Button>
	);
}

BtnFree.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string
};

export default withStyles(styles)(BtnFree);
