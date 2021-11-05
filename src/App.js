import "./App.css";
import {GiAirplaneArrival} from "react-icons/all";


const App = () => {
    return (
        <div>
            <header className="flex justify-between bg-custom-header px-4 border-b-2 border-gray-700">
                <div className="flex items-center">
                    <GiAirplaneArrival className="h-12 w-12 text-yellow-900"/>
                <p className="hidden md:inline-block text-3xl text-custom-text p-4 uppercase">Puerto Rico Airlines</p>
                </div>
                <div className="flex my-4 space-x-4 text-white">
                    <button className="rounded bg-custom-button p-1">Home</button>
                    <button className="rounded bg-custom-button p-1">Flights</button>
                    <button className="rounded bg-custom-button p-1">Support</button>
                    <button className="rounded bg-custom-button p-1">Login</button>
                </div>
            </header>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-24  my-8 justify-evenly m x-12">
                    <div className='flex flex-col bg-white rounded shadow-lg h-48 justify-between p-3'>
                        <div className="space-y-2">
                            <p className='text-center font-bold text-xl'>Flights</p>
                            <p>Come check out our sweet flights! Direct flights available daily!</p>
                        </div>
                        <button className=" hover:bg-yellow-800 bg-custom-button text-white py-3 font-bold text-lg">Lets go</button>
                    </div>
                    <div className='flex flex-col bg-white rounded shadow-lg h-48 justify-between p-3'>
                        <div className="space-y-2">
                            <p className='text-center font-bold text-xl'>Group Trips</p>
                            <p>Come check out our sweet flights! Direct flights available daily!</p>
                        </div>
                        <button className=" hover:bg-yellow-800 bg-custom-button text-white py-3 font-bold text-lg">Lets go</button>
                    </div>
                    <div className='flex flex-col bg-white rounded shadow-lg h-48 justify-between p-3'>
                        <div className="space-y-2">
                            <p className='text-center font-bold text-xl'>Flights</p>
                            <p>Come check out our sweet flights! Direct flights available daily!</p>
                        </div>
                        <button className=" hover:bg-yellow-800 bg-custom-button text-white py-3 font-bold text-lg">Lets go</button>
                    </div>

                </div>

                <div className='flex flex-col bg-white rounded shadow-lg h-48 justify-between p-3'>
                    <div className="space-y-2">
                        <p className='text-center font-bold text-xl'>About Us</p>
                        <p>Come check out our sweet flights! Direct flights available daily!</p>
                    </div>
                    <button className=" hover:bg-yellow-800 bg-custom-button text-white py-3 font-bold text-lg">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default App;
