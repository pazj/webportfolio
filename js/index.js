const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//define language reload anchors
var dataReload = document.querySelectorAll("[data-Reload]"); 
//language translations
var language = {
    eng: {
        //titulo: "Hi World! , I am Paz Jimenez",
        carrera: "Software Engineer",
        trabajos: "What i do",
        experiencia: "Mobile app dev",
        appdescrip: "Experienced in creating, maintaining and implementing the source code to develop mobile apps and programs that meet the needs and requirements of the clients using computer programming languages such as Java, python, React Native and Flutter DART.",
        webdevelop: "Web Development",
        webdescrip: "I am qualified and have experience in designing, coding and modifying websites, from layout to function and according to a client's specifications. I strive to create visually appealing sites that feature user-friendly design and clear navigation. I have a deep understanding and hands on experience with Web Applications and programming languages such as HTML, CSS, JavaScript, JQuery and API's.",
        learningdesc: "Skilled in the design and development of machine learning and deep learning systems, have a bast knowledge on different machine learning algorithms. Currently working in the development of a programm to identify cancer sub-types using CNN and clustering algorithms.",
        uidesign: "UI Designer & Dev",
        uidescription: " Experienced in the design and coding of user interface for websites and mobile application. Skilled in graphic development, using Adobe Illustrator, Adobe XD and Photoshop.",
        botontrabajo: "My Work",
        skills: "Skills",
        myself: "Who i am",
        myselftitle: "Software engineer base in Paraguay",
        medescription: "I am a software engineer graduated from Hanyang University. I specialize in building applications specific to the business needs of the clients. I have done work in software development, mobile app creation,front-end/back-end web, database/server management, and graphic design.",
        megusta: "My life's passions are to read, travel, exercise and a good wine!",
        descarga: "Donwload CV",
        jobs: "My Work",
        jobrange: "A selection of my range of work"
        
    },
    es:{
        //titulo: "Hola mundo!, Soy Paz Jimenez",
        carrera: "Ingeniera de Software",
        trabajos: "Lo que hago",
        experiencia: "Desarrollo de Aplicaciones Mobiles",
        appdescrip: "Experiencia en la creaci??n, mantenimiento e implementaci??n del c??digo fuente para desarrollar aplicaciones y programas m??viles que satisfagan las necesidades y requisitos de los clientes utilizando lenguajes de programaci??n inform??tica como Java, python, React Native y Flutter DART.",
        webdevelop: "Desarrollo Web",
        webdescrip: "Estoy calificado y tengo experiencia en el dise??o, codificaci??n y modificaci??n de sitios web, desde el dise??o hasta la funci??n y seg??n las especificaciones del cliente. Me esfuerzo por crear sitios visualmente atractivos que tengan un dise??o f??cil de usar y una navegaci??n clara. Tengo un profundo conocimiento y experiencia pr??ctica con aplicaciones web y lenguajes de programaci??n como HTML, CSS, JavaScript, JQuery y API.",
        learningdesc: "Experto en el dise??o y desarrollo de sistemas de aprendizaje autom??tico y aprendizaje profundo, con conocimiento b??sico sobre diferentes algoritmos de aprendizaje autom??tico. Actualmente trabajando en el desarrollo de un programa para identificar subtipos de c??ncer usando CNN y algoritmos de agrupamiento.",
        uidesign: "Dise??o y Desarrollo de UI",
        uidescription: "Experiencia en el dise??o y codificaci??n de interfaz de usuario para sitios web y aplicaciones m??viles. Experto en desarrollo gr??fico, utilizando Adobe Illustrator, Adobe XD y Photoshop.",
        botontrabajo: "Mi Trabajo",
        skills:"Habilidades",
        myself: "Quien soy",
        myselftitle: "Ingeniera de Software residiendo en Paraguay",
        medescription: "Soy Ingeniera de software graduada de la Universidad de Hanyang. Me especializo en la construcci??n de aplicaciones espec??ficas para las necesidades comerciales de los clientes. He trabajado en desarrollo de software, creaci??n de aplicaciones m??viles, web front-end / back-end, gesti??n de bases de datos / servidores y dise??o gr??fico.",
        megusta: "Las pasiones de mi vida son leer, viajar, hacer ejercicio y ??un buen vino!",
        descarga: "Descargar CV",
        jobs: "Mi Trabajo",
        jobrange: "Una selecci??n de mi rango de trabajo"
        
    }
};

//define language via window hash
if(window.location.hash){
    if(window.location.hash === "#es"){
       // head.textContent = language.es.titulo;
        profesion.textContent = language.es.carrera;
        job.textContent = language.es.trabajos;
        appdev.textContent = language.es.experiencia;
        appdesc.textContent = language.es.appdescrip;
        webdev.textContent = language.es.webdevelop;
        webdesc.textContent = language.es.webdescrip;
        servdesc.textContent = language.es.learningdesc;
        uititle.textContent = language.es.uidesign;
        uidesc.textContent = language.es.uidescription;
        trabajo.textContent = language.es.botontrabajo;
        habil.textContent = language.es.skills;
        me.textContent = language.es.myself;
        metitle.textContent = language.es.myselftitle;
        medesc.textContent = language.es.medescription;
        likes.textContent = language.es.megusta;
        descargar.textContent = language.es.descarga;
        mitrabajo.textContent = language.es.jobs;
        trabajotitle.textContent = language.es.jobrange;
        

        
    }
}

//define language reload onclick illiteration
for(i = 0; i <= dataReload.length - 1; i++){
    dataReload[i].onclick = function(){
        setTimeout(function(){
            location.reload();

        }, 150)
       
    }

}

//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

//SCROLL HOME
sr.reveal( '.section__title--intro', {});
sr.reveal('.language-btn',{delay: 200});
sr.reveal('.section__subtitle--intro',{delay: 200});
sr.reveal('.intro__img', {delay: 400});

//SCROLL SERVICES
sr.reveal('.section__title--services', {});
sr.reveal('.service', {delay:400});
sr.reveal('.btn', {delay:800});

//SCROLL SKILLS
sr.reveal('.section__title--skills', {});
sr.reveal('.skill-box', {interval: 200});

//SCROLL ABOUT ME
sr.reveal('.section__title--about', {});
sr.reveal('.section__subtitle--about', {delay: 200});
sr.reveal('.about-me__img',{delay:400});
sr.reveal('.about-me__body', {delay: 500});

//SCROLL WORK
sr.reveal('.section__title--work', {});
sr.reveal('.section__subtitle--work', {delay: 200});
sr.reveal('.portfolio', {interval: 400});
