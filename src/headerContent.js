const getHeader = (logo, socialIcons,contact) => {
  return `
<header>
    ${logo}
    
    <nav>
        <ul class="main-nav">
            <li data-index="1" >
                <div data-index="2">
                    <a class="home-second-btn" href="#"  >02</a>      
                </div>

                <div data-is-active="active" data-index="1">
                    <a class="home-first-btn" href="#"  >01 Home</a>
                </div>   
                
                <div data-index="3">
                    <a class="home-third-btn" href="#">03</a>
                </div>
               
            </li>
            <li data-index="2">
                <div data-index="2">
                    <a class="home-second-btn" href="#"  >05</a>      
                </div>

                <div data-index="1">
                    <a class="home-first-btn" href="#" >04 About</a>
                </div>   
                
                <div data-index="3">
                    <a class="home-third-btn" href="#">06</a>
                </div>
            
            </li>
            <li data-index="3">
                <div data-index="2">
                    <a class="home-second-btn" href="#"  >08</a>      
                </div>

                <div data-index="1">
                    <a class="home-first-btn" href="#" >07 Work</a>
                </div>   
                
                <div data-index="3">
                    <a class="home-third-btn" href="#">09</a>
                </div>
            
            </li>
            
        </ul>
    </nav>
    ${socialIcons}
    ${contact}
</header>
`.trim();
};
export default getHeader;
