window.onload = function () {
    const projectMyLibrary = new Vue({
        el: '#project-mylibrary',
        data : {
            name: 'MyLibrary',
            description: 'A web application to keep a record of my book collection.',
            techs: ['jQuery', 'Bootstrap', 'JavaScript', 'CSS', 'HTML', 'Mocha', 'Chai', 'Firebase'],
        }
    });

    const projectBlog = new Vue({
        el: '#project-blog',
        data : {
            name: 'Software KISS (Blog)',
            description: 'A blog to keep track of my learning and exposure to software-related technologies',
            techs: ['JavaScript', 'CSS', 'HTML', 'Heroku', 'Express', 'PostgreSQL'],
           
        }
    });

    const projectTechDocPage = new Vue({
        el: '#project-technical-documentation-page',
        data : {
            name: 'Technical Documentation Page',
            description: 'A technical documentation page about Bootstrap.',
            techs: ['Bootstrap', 'CSS', 'HTML'],
           
        }
    });

    const projectRandomQuoteMachine = new Vue({
        el: '#project-random-quote-machine',
        data : {
            name: 'Random Quote Machine',
            description: 'A random quote machine.',
            techs: ['React', 'Bootstrap', 'JavaScript', 'CSS', 'HTML'],
           
        }
    });

    const projectMarkdownPreviewer = new Vue({
        el: '#project-markdown-previewer',
        data : {
            name: 'Markdown Previewer',
            description: 'A markdown previewer.',
            techs: ['React', 'Bootstrap', 'JavaScript', 'CSS', 'HTML'],
        }
    });

    const projectDebris = new Vue({
        el: '#project-debris',
        data : {
            name: 'Debris',
            description: 'An outerspace game.',
            techs: ['PhaserJS (Phaser3)', 'jQuery','JavaScript', 'CSS', 'HTML'],
        }
    });

    const projectPortfolioWebpage = new Vue({
        el: '#project-portfolio-webpage',
        data : {
            name: 'Portfolio Webpage',
            description: 'This webpage that you are seeing right now',
            techs: ['Vue', 'Bootstrap', 'jQuery', 'JavaScript', 'CSS', 'HTML'],
        }
    });

}


function triggerDelayText(){
    document.getElementById('show-text').style.visibility = 'visible';
    // Delays the text in increments of 1 second
    for (let i = 1; i <=9; i++) {
        setTimeout(
            () => {document.getElementById('delayed-text-'+ i).style.visibility = 'visible';},
            i * 1000);
    }
}