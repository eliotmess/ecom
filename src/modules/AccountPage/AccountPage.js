import React from 'react';
import { isEmpty, map } from 'lodash';
import PreviousOrder from './PreviousOrder';
import './AccountPage.styles.scss';
import PropTypes from 'prop-types';

const AccountPage = (props) => {
    return (
        <div className="AccountPage">
            <div className="d-flex AccountPageHeader">
                <h1 className="AccountPageHeaderText">My account</h1>
            </div>
            <div className="AccountPageOrdersWrapper">
                <h4 className="AccountPageOrdersHeader">My orders history:</h4>
                <div className="d-flex flex-column-reverse AccountPageOrdersList">
                    {isEmpty(props.orders) ? (
                        <h2>You have not placed any orders yet.</h2>
                    ) : (
                        map(props.orders, ((order) => {
                            return <PreviousOrder
                                key={order.id}
                                order={order}
                                products={props.products}
                            />
                        }))
                    )}
                </div>
            </div>
        </div>
    )
}

AccountPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    // orders: PropTypes.arrayOf(PropTypes.object)
}

export default AccountPage;