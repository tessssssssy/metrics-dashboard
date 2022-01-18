const OrderBox = ({state, numOrders}) => {
    return (
        <div className="h-60 min-w-fit w-96 flex flex-col justify-center items-center bg-purple">
            <p className="px-5 text-white text-3xl" >Todays Orders</p>
            <h3 className="p-5 text-orange font-bold text-5xl">{numOrders}</h3>
            <p className="px-5 text-white font-bold text-3xl">{state}</p>
        </div>
    )
}

export default OrderBox;
