

const Navbar : React.FC = () =>{
    return (
        <div className="fixed top-0 left-0 w-full z-20">
            <div className="max-w-7xl mx-auto text-neutral-400 flex items-center h-16">
                <div className="flex justify-center space-x-10 w-full gap-2"> 
                    <div className="hover:text-white cursor-pointer transition-colors duration-200" >Introduction</div> 
             
                
                    <div className="hover:text-white cursor-pointer transition-colors duration-200">Resources</div> 
             
                
                    <div className="hover:text-white cursor-pointer transition-colors duration-200">Innovation</div> 
             
                
                    <div className="hover:text-white cursor-pointer transition-colors duration-200">Participate</div> 
             
               
                    <div className="hover:text-white cursor-pointer transition-colors duration-200">FAQs</div> 
             </div>
            </div>

        </div>
    )
}

export default Navbar;