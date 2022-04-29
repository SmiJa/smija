import Me from './../images/profile2.png';

export default function Header() {
    return (
        <div className="" id="">
            <p className="">Profile</p>
            <div className="">
                <div className="">
                    <img className="" src={Me} alt="" />
                </div>
                <div className="">
                <p className="">Personal Summary</p>
                <p>
                    As a paid apprentice working with React and React Native I have worked on some amazing projects. I'm a self motivated front-end developer that thrives on learning new technologies.
                </p>
                </div>
            </div>
            
            <p className="">Skills</p>
            <div className="">
                <i className="fab fa-html5 p-2"></i>
                <i className="fab fa-css3-alt p-2"></i>
                <i className="fab fa-js p-2"></i>
                <i className="fab fa-react p-2"></i>
                <i className="fab fa-bootstrap p-2"></i>
                <i className="fab fa-git-alt p-2"></i>
                <i className="fab fa-npm p-2"></i>
                <i className="fab fa-python p-2"></i>
            </div>
            <div className="">
                <a className="" href="#nav">
                    <i className=""></i>
                </a>
            </div>
        </div>
    );
}