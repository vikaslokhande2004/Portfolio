function Profile_secation(){
    const profile_name = {
        name:"Vikas Lokhande",
        gamil:"vikaslokhande@gmail.com",
        about:"I am a dedicated Full Stack Developer with a strong focus on front-end development. My expertise spans across HTML, CSS, Tailwind CSS, JavaScript, and React.js, enabling me to build dynamic and responsive web applications. I am passionate about creating seamless user experiences and constantly staying updated with the latest industry trends and technologies."
 }
     document.querySelector(".profile-box-left-name h1").innerHTML = profile_name.name;
     document.querySelector(".profile-box-left-name p").innerHTML = profile_name.gamil;
     document.querySelector(".profile-box-right-about").innerHTML = profile_name.about;
}
Profile_secation();


function Name_tatile(){
const tatileName = {
    projectNmae:"Projects Section",
    skillName:"What I Know"
}
document.querySelector(".project-box-name h1").innerHTML = tatileName.projectNmae;
document.querySelector(".skill-name h1").innerHTML = tatileName.skillName;
}
Name_tatile();

function Project_seaction(){
    const prject = [
        {
            project_tatile:"OCHI Web Clone",
            project_Name:"Developed ochi website clone a bulit a website using React, Tailwind CSS, and Framer Motion for animations.",
            projectImg:"https://vikaslokhande2004.github.io/Portfolio/ochi.webp"
          },
        {
            project_tatile:"Soptify Clone",
            project_Name:"Developed a responsive music streaming site with HTML, CSS and JavaScript, including play,pause, and playlist featureds.",
            projectImg:"https://vikaslokhande2004.github.io/Portfolio/Spotify.webp"
          },
          {
            project_tatile:"Weather App",
            project_Name:"Built a responsive weather app using HTML, CSS and JavaScript, integrating real-time data via API.",
            projectImg:"https://vikaslokhande2004.github.io/Portfolio/weather-app.webp"
          },
          {
            project_tatile:"Flipkart Clone",
            project_Name:"Built a Flipkart e-commerce site with HTML, CSS, and JavaScript, featuring product listings.",
            projectImg:"https://vikaslokhande2004.github.io/Portfolio/Flipkart.webp"
          }
]
console.log(prject[0].project_tatile)

            let project_all_box = document.querySelector(".project-box");
            let projectBoxs = "";
            for(let i = 0;i<prject.length;i++){
                projectBoxs += `   <div class="swiper-slide">
                <div class="swiper-box">
                    <div class="swiper-box-img"><img src="${prject[i].projectImg}" alt=""></div>
                    <div class="swiper-box-about">
                        <div>
                            <p>${prject[i].project_tatile}</p>
                            <p>${prject[i].project_Name}</p>
                        </div>
                    </div>
                </div>
            </div>`;
            project_all_box.innerHTML = projectBoxs;
            }

}
Project_seaction();


