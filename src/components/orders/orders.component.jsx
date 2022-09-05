import { useContext } from "react";
import { useEffect } from "react";
import { OrdersContext } from "../../contexts/orders.context";
import { TEXT } from "../../utils/constants";
import NoOrderCard from "../no-order-card/no-order-card.component";
import Card from "../utils/card/card.component";
import OrderCard from "../utils/order-card/order-card.component";
import "./orders.styles.css";

const Orders = ({ handleTitle }) => {
  const orders = Object.values(useContext(OrdersContext));

  useEffect(() => {
    handleTitle("");
  });

  return (
    <>
      {orders.length ? (
        <Card title={TEXT.cardOrders}>
          <div className="orders-container container">
            {orders.map((order) => {
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
