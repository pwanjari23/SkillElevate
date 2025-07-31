import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='font-serif cursor-pointer '>
            <div className='bg-blue-950 text-white px-6 py-6 font-serif'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-md'>
                    <ul>
                        <p className='font-semibold mb-2 text-lg'>About</p>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/careers">Career</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/blogs">Blog</Link></li>
                        <li><Link to="/investors">Investors</Link></li>
                    </ul>

                    <ul>
                        <p className='font-semibold mb-2 text-lg'>Discover LMS</p>
                        <li><Link to="/plans">Plans & Pricing</Link></li>
                        <li><Link to="/teach">Teach on LMS</Link></li>
                        <li><Link to="/support">Help and Support</Link></li>
                    </ul>

                    <ul>
                        <p className='font-semibold mb-2 text-lg'>LMS Business</p>
                        <li><Link to="/business">LMS Business</Link></li>
                    </ul>

                    <ul>
                        <p className='font-semibold mb-2 text-lg'>Legal & Accessibility</p>
                        <li><Link to="/accessibility">Accessibility Statement</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/sitemap">Sitemap</Link></li>
                        <li><Link to="/terms">Terms</Link></li>
                    </ul>
                </div>

                <div className='flex flex-col md:flex-row items-start md:items-center mt-6 px-2 bg-blue-950 text-white'>
                    <div className="text-3xl font-bold mt-2 md:mt-0 md:px-4">LMS</div>
                    <span className="ml-0 md:ml-2 mt-1 md:mt-0 text-sm">&copy; 2025 LMS, Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
