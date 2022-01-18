import moment from 'moment'

const Header = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return (
        <header className="font-bold text-4xl flex justify-between w-full my-10">
        <h1>GETTER SALES</h1>
        <h1>{today.toDateString()} @ {moment().format('LT')}</h1>
      </header>
    )
}

export default Header