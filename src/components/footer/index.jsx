export const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white text-center text-lg-start">
                <div className="container p-4">

                    <div className="row">

                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Footer Content</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'center',}}> <a href="https://www.starwars.com/" className="text-white" target={'_blank'}>Main site</a>
                        <p style={{marginLeft: '5px', marginRight: '5px'}}>|</p>
                        <a href="https://en.wikipedia.org/wiki/Star_Wars" className="text-white" target={'_blank'}>More about us</a></div>
                       
                        

                    </div>

                </div>
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
    >© 2022 Incubator:<a className="text-white" style={{marginLeft: 5, textDecoration: 'none'}} href="https://www.nfactorial.school/">nfactorial.school.com</a></div>
            </footer>
        </>
    );
};
