function Profilepicture(){

    const immageurl = './src/assets/profile.jpg';

    const handleclick = (e) => e.target.style.display ="none";

    return(

        <img onClick={(e) => handleclick(e)} src={immageurl}></img>

    );

}

export default Profilepicture