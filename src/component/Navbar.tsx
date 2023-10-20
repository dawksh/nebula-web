
import Image from 'next/image';
import { ConnectKitButton } from 'connectkit';

const Navbar = () => {
    return (
        <nav className="bg-black" style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
            <div className='mr-4'>
                <Image src={"/assets/logo.png"} alt='Logo' height={100} width={100}></Image>
            </div>
            <div>
                <span className="text-white px-4 py-2"><ConnectKitButton /></span>
            </div>
        </nav>
    );
};

export default Navbar;