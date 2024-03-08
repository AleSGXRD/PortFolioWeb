import './CardProfile.css'
import profileIMG from '../assets/profile.jpg'

function CardProfile(){
    return(
        <>
          <div className='card-profile'>
            <div className="profile-shape">
              <div className='profile-shape-rombo'>
                <img src={profileIMG} alt="" />
              </div>
            </div>
            <p className='profile-name'>Alejandro Sanchez</p>
            <p className='profile-role'>Frontend Developer</p>
            <div className='profile-social-media'>
              <a href="https://github.com/AleSGXRD" target="_blank" rel="noopener noreferrer">
                <div className='site'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#IconifyId18d0a0f21deba06161)"><path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clipRule="evenodd"/></g><defs><clipPath id="IconifyId18d0a0f21deba06161"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/alexrd-s%C3%A1nchez-4ab950284/" target="_blank" rel="noopener noreferrer">
                <div className='site'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" >
                <div className='site'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M3.39.787A2.604 2.604 0 0 0 .786 3.39v6.944a2.604 2.604 0 0 0 2.604 2.604h6.944a2.604 2.604 0 0 0 2.603-2.604V3.39A2.604 2.604 0 0 0 10.334.787zm7.693 2.607a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.22 1.388a2.08 2.08 0 1 0 0 4.16a2.08 2.08 0 0 0 0-4.16m-3.081 2.08a3.08 3.08 0 1 1 6.16 0a3.08 3.08 0 0 1-6.16 0" clipRule="evenodd"/></svg>

                </div>
              </a>
            </div>
          </div>
        </>
    );
}
export default CardProfile;