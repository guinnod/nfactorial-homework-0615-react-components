
import { useEffect } from "react";
import { useState } from "react";




export const Footer = ({theme}) => {
   
    const [first, setF] = useState("bg-dark text-white text-center text-lg-start");
    const [second, setS] = useState("rgba(0, 0, 0, 0.2)");
    const [third, setT] = useState("text-white");
    const [third2, setT2] = useState("");
    const [third3, setT3] = useState("text-white text-center p-3");
    
    useEffect(() => {
        if (theme) {
            setF("bg-dark text-white text-center text-lg-start");
            setS("rgba(0, 0, 0, 0.2)");
            setT("text-white");
            setT2("");
            setT3("text-white text-center p-3");
            
        }
        else {
            setF("bg-light text-black text-center text-lg-start");
            setS("rgba(1, 1, 1, 0.1)");
            setT("text-black");
            setT2("white");
            setT3("text-black text-center p-3");
        }
    }, [theme]);
    return (
        <>
            <footer className={first}>
                <div className="container p-4">

                    <div className="rowconsole.log('change' + first);">

                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Footer Content</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', }}> <a href="https://www.starwars.com/" className={third} target={'_blank'}>Main site</a>
                            <p style={{ marginLeft: '5px', marginRight: '5px' }}>|</p>
                            <a href="https://en.wikipedia.org/wiki/Star_Wars" className={third} target={'_blank'}>More about us</a></div>



                    </div>

                </div>
                <div className={third3} style={{ backgroundColor: second, color: third2 }}
                >© 2022 Incubator:<a className={third} style={{ marginLeft: 5, textDecoration: 'none' }} href="https://www.nfactorial.school/">nfactorial.school.com</a></div>
            </footer>
        </>
    );
};
