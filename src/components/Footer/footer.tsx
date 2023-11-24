import AppOptions from "../nav/app-options" 
import AppLogo from "../nav/appLogo"
export default function Footer() {
    return (<>
                <footer  data-aos="zoom-in" className="footer">
          <AppOptions />
          <div className="social-media">
            <AppLogo />
          <div className="icons">
            {/* {/* <ion-icon name="logo-instagram"></ion-icon> */}
            {/* {/* <ion-icon name="logo-linkedin"></ion-icon> */} 
            {/* {/* <ion-icon name="logo-twitter"></ion-icon> */} 
          </div>
          </div>
          {/* <span className="creator">Created By <a href="https://github.com/CH19/">CH19</a> - <a href="devchallenges.io">devchallenges.io</a></span> */}
        </footer>

    
    </>)
}