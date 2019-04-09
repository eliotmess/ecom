import React from 'react';
import { find } from 'lodash';

const CartSummary = (props) => {
    
    return (
        <table className="CartContentSummaryTable table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col">title</th>
                    <th scope="col">qty</th>
                    <th scope="col">price</th>
                </tr>
            </thead>
            <tbody>
                {props.productsInCart.map(product =>
                    <tr
                        key={product.id}
                        className="CartContentSummaryTableRow"
                    >
                        <td className="CartContentSummaryTableTitle">
                            {find(props.products, { 'id': product.id }).title}
                        </td>
                        <td className="CartContentSummaryTableQuantity">
                            {product.quantity}
                        </td>
                        <td className="CartContentSummaryTablePrice">
                            $ {product.price.toFixed(2)}
                        </td>
                    </tr>
                )}
                <tr
                    className="CartContentSummaryTableRow"
                >
                    <td className="CartContentSummaryTableTitle">
                        Shipping price:
                    </td>
                    <td className="CartContentSummaryTableQuantity">
                    </td>
                    <td className="CartContentSummaryTablePrice">
                        $ {props.shippingPrice.toFixed(2)}
                    </td>
                </tr>
                <tr
                    className="CartContentSummaryTableRow"
                >
                    <td className="CartContentSummaryTableTitle">
                        Subtotal price:
                    </td>
                    <td className="CartContentSummaryTableQuantity">
                    </td>
                    <td className="CartContentSummaryTablePrice">
                        $ {(props.valueInCart + props.shippingPrice).toFixed(2)}
                    </td>
                </tr>
            </tbody>
        </table>
    )   
}

export default CartSummary;