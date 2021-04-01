import React from 'react';
import { connect } from 'react-redux';

import { CustomButton } from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cart }) => (
	<div className="cart-dropdown">
		<div className="cart-items"></div>
		<CustomButton>Go TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = state => ({
	cart: state.cart,
});

export default connect(mapStateToProps)(CartDropdown);
