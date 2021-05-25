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
        appdescrip: "Experiencia en la creación, mantenimiento e implementación del código fuente para desarrollar aplicaciones y programas móviles que satisfagan las necesidades y requisitos de los clientes utilizando lenguajes de programación informática como Java, python, React Native y Flutter DART.",
        webdevelop: "Desarrollo Web",
        webdescrip: "Estoy calificado y tengo experiencia en el diseño, codificación y modificación de sitios web, desde el diseño hasta la función y según las especificaciones del cliente. Me esfuerzo por crear sitios visualmente atractivos que tengan un diseño fácil de usar y una navegación clara. Tengo un profundo conocimiento y experiencia práctica con aplicaciones web y lenguajes de programación como HTML, CSS, JavaScript, JQuery y API.",
        learningdesc: "Experto en el diseño y desarrollo de sistemas de aprendizaje automático y aprendizaje profundo, con conocimiento básico sobre diferentes algoritmos de aprendizaje automático. Actualmente trabajando en el desarrollo de un programa para identificar subtipos de cáncer usando CNN y algoritmos de agrupamiento.",
        uidesign: "Diseño y Desarrollo de UI",
        uidescription: "Experiencia en el diseño y codificación de interfaz de usuario para sitios web y aplicaciones móviles. Experto en desarrollo gráfico, utilizando Adobe Illustrator, Adobe XD y Photoshop.",
        botontrabajo: "Mi Trabajo",
        skills:"Habilidades",
        myself: "Quien soy",
        myselftitle: "Ingeniera de Software residiendo en Paraguay",
        medescription: "Soy Ingeniera de software graduada de la Universidad de Hanyang. Me especializo en la construcción de aplicaciones específicas para las necesidades comerciales de los clientes. He trabajado en desarrollo de software, creación de aplicaciones móviles, web front-end / back-end, gestión de bases de datos / servidores y diseño gráfico.",
        megusta: "Las pasiones de mi vida son leer, viajar, hacer ejercicio y ¡un buen vino!",
        descarga: "Descargar CV",
        jobs: "Mi Trabajo",
        jobrange: "Una selección de mi rango de trabajo"
        
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