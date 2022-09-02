import { useEffect } from "react";
import { ORDERS } from "../../utils/constants";
import NoOrderCard from "../no-order-card/no-order-card.component";
import Card from "../utils/card/card.component";
import OrderCard from "../utils/order-card/order-card.component";
import "./orders.styles.css";

const Orders = ({ handleTitle }) => {
  useEffect(() => {
    handleTitle("");
  });

  return (
    <>
      {ORDERS.length ? (
        <Card title="Your Orders">
          <div className="orders-container container">
            {ORDERS.map((order) => {
              return <OrderCard order={order} key={order.productId} />;
            })}
          </div>
        </Card>
      ) : (
        <NoOrderCard />
      )}
    </>
  );
};

export default Orders;
