import NoOrderCard from "../no-order-card/no-order-card.component";
import Card from "../utils/card/card.component";
import OrderCard from "../utils/order-card/order-card.component";
import "./orders.styles.css";

const Orders = () => {
  const orders = [{ name: "sample" }];
  return (
    <>
      {orders.length ? (
        <div>
          <Card title="Your Orders">
            <div className="orders-container container">
              <OrderCard />
              <OrderCard />
            </div>
          </Card>
        </div>
      ) : (
        <NoOrderCard />
      )}
    </>
  );
};

export default Orders;
