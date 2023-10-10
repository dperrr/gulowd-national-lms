import LoginImage from "../images/LoginImage.jpg";
import Logo from "../images/GNHS_LOGO.png";

const Login = () => {
    return (
        <>
            <div className="flex h-screen">  
                <div className="flex-none w-8/12 text-center" style={{background:`url(${LoginImage})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                <div className="flex-none w-4/12 flex flex-col items-center bg-lightBrown">
                    <div className="flex flex-col items-center justify-center mt-16">
                        <img src={Logo} width="200rem" alt="GNHS Logo"/>
                        <h1 className="text-6xl text-center my-2 font-extrabold">Gulod National High School</h1>
                        <p>Learning Management System</p>
                    </div>
                    <form className="mt-7 w-80">
                        <div className="flex border-2 border-gray mb-3">
                            <span className="w-10 flex items-center justify-center bg-white" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" fill="none">
                                    <g filter="url(#filter0_d_2334_17)">
                                    <mask id="mask0_2334_17" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="2" y="0" width="24" height="24">
                                    <rect x="2" width="24" height="24" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_2334_17)">
                                    <path d="M7.85 17.1C8.7 16.45 9.65 15.9375 10.7 15.5625C11.75 15.1875 12.85 15 14 15C15.15 15 16.25 15.1875 17.3 15.5625C18.35 15.9375 19.3 16.45 20.15 17.1C20.7333 16.4167 21.1875 15.6417 21.5125 14.775C21.8375 13.9083 22 12.9833 22 12C22 9.78333 21.2208 7.89583 19.6625 6.3375C18.1042 4.77917 16.2167 4 14 4C11.7833 4 9.89583 4.77917 8.3375 6.3375C6.77917 7.89583 6 9.78333 6 12C6 12.9833 6.1625 13.9083 6.4875 14.775C6.8125 15.6417 7.26667 16.4167 7.85 17.1ZM14 13C13.0167 13 12.1875 12.6625 11.5125 11.9875C10.8375 11.3125 10.5 10.4833 10.5 9.5C10.5 8.51667 10.8375 7.6875 11.5125 7.0125C12.1875 6.3375 13.0167 6 14 6C14.9833 6 15.8125 6.3375 16.4875 7.0125C17.1625 7.6875 17.5 8.51667 17.5 9.5C17.5 10.4833 17.1625 11.3125 16.4875 11.9875C15.8125 12.6625 14.9833 13 14 13ZM14 22C12.6167 22 11.3167 21.7375 10.1 21.2125C8.88333 20.6875 7.825 19.975 6.925 19.075C6.025 18.175 5.3125 17.1167 4.7875 15.9C4.2625 14.6833 4 13.3833 4 12C4 10.6167 4.2625 9.31667 4.7875 8.1C5.3125 6.88333 6.025 5.825 6.925 4.925C7.825 4.025 8.88333 3.3125 10.1 2.7875C11.3167 2.2625 12.6167 2 14 2C15.3833 2 16.6833 2.2625 17.9 2.7875C19.1167 3.3125 20.175 4.025 21.075 4.925C21.975 5.825 22.6875 6.88333 23.2125 8.1C23.7375 9.31667 24 10.6167 24 12C24 13.3833 23.7375 14.6833 23.2125 15.9C22.6875 17.1167 21.975 18.175 21.075 19.075C20.175 19.975 19.1167 20.6875 17.9 21.2125C16.6833 21.7375 15.3833 22 14 22ZM14 20C14.8833 20 15.7167 19.8708 16.5 19.6125C17.2833 19.3542 18 18.9833 18.65 18.5C18 18.0167 17.2833 17.6458 16.5 17.3875C15.7167 17.1292 14.8833 17 14 17C13.1167 17 12.2833 17.1292 11.5 17.3875C10.7167 17.6458 10 18.0167 9.35 18.5C10 18.9833 10.7167 19.3542 11.5 19.6125C12.2833 19.8708 13.1167 20 14 20ZM14 11C14.4333 11 14.7917 10.8583 15.075 10.575C15.3583 10.2917 15.5 9.93333 15.5 9.5C15.5 9.06667 15.3583 8.70833 15.075 8.425C14.7917 8.14167 14.4333 8 14 8C13.5667 8 13.2083 8.14167 12.925 8.425C12.6417 8.70833 12.5 9.06667 12.5 9.5C12.5 9.93333 12.6417 10.2917 12.925 10.575C13.2083 10.8583 13.5667 11 14 11Z" fill="#1C1B1F"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_2334_17" x="0" y="2" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2334_17"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2334_17" result="shape"/>
                                    </filter>
                                    </defs>
                                    </svg>
                            </span>
                            <input type="text" className="w-full focus:outline-none" />   
                        </div>
                        <div className="flex border-2 border-gray mb-3">
                            <span className="w-10 flex justify-center items-center bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" fill="none">
                                <mask id="mask0_2334_30" style={{masktype:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_2334_30)">
                                <path transform="translate(2,0)" d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H7V6C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="#1C1B1F"/>
                                </g>
                                </svg>
                            </span>
                            <input type="text" className="w-full focus:outline-none" />
                        </div>
                        <div className="text-right my-3">
                            <a href="#!" className="text-lightGreen">Forgot password</a>
                        </div>
                        <button className="border rounded-3xl w-full py-2 bg-lightGreen text-white">Log In</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;