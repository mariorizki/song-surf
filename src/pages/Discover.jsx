import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

const Discover = () => (
  <div className="flex flex-col">
    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10"></div>
    <h2 className="font-bold text-3xl text-white text-center">Discover</h2>
    <select onChange={() => {}} value="" className="bg-black"></select>
  </div>
);

export default Discover;
