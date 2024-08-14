
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral mx-auto text-neutral-content p-10 mt-16 ">
                <nav>
                    <h6 className="footer-title">Address</h6>
                    <a className="link link-hover">Sarishabari, Jamalpur</a>
                    <a className="link link-hover">Dhaka, Bangladesh</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Email</h6>
                    <a className="link link-hover">jihadh32978@gmail.com</a>
                    <h6 className="footer-title">Phone</h6>
                    <a className="link link-hover">+8801776332978</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Access</h6>
                    <a href="#skills" className="link link-hover">Skills</a>
                    <a href="#projects" className="link link-hover">Projects</a>
                    <a href="#contact" className="link link-hover">Contact</a>
                </nav>
            </footer>


            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Saidul Hasan Jihad</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;