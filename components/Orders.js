import OrderBox from './OrderBox'

const Orders = ({orders}) => {
    return (
        <div className="flex gap-2 justify-between w-full">
            {Object.entries(orders[0]).map((entry) => (
             <OrderBox state={entry[0]} numOrders={entry[1]}/>
        ))}
        </div>
    )
}

export default Orders;