import NoOrderCard from "../no-order-card/no-order-card.component";
import Card from "../utils/card/card.component";
import OrderCard from "../utils/order-card/order-card.component";
import "./orders.styles.css";

const ORDERS = [
  {
    productId: 1,
    productName: "Asus VivoBook 15- QHD 240Hz RTX 3070 i5 quadcore",
    paymentCycleDone: 2,
    paymentCycleTotal: 3,
    nextDue: "1660102588000",
    monthlyRental: 902,
    insurance: 100,
    gst: 18,
    productQuantity: 1,
    startDate: "1659918056000",
    endDate: "1667792188000",
  },
  {
    productId: 2,
    productName: "Dell Inspiron 15- QHD 240Hz RTX 3070 i5 quadcore",
    paymentCycleDone: 3,
    paymentCycleTotal: 6,
    nextDue: "1661818856000",
    monthlyRental: 9020,
    insurance: 100,
    gst: 18,
    productQuantity: 1,
    startDate: "1656560188000",
    endDate: "1672457788000",
  },
];

const Orders = () => {
  return (
    <>
      {ORDERS.length ? (
        <div>
          <Card title="Your Orders">
            <div className="orders-container container">
              {ORDERS.map((order) => {
                return <OrderCard order={order} key={order.productId} />;
              })}
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
