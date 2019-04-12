import React from 'react';
import { isEmpty } from 'lodash';
import PreviousOrder from './PreviousOrder';
import './AccountPage.styles.scss';

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
                        props.orders.map((order) => (
                            <PreviousOrder
                                key={order.id}
                                order={order}
                                products={props.products}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default AccountPage;