window.onload = function () {
    const welcomeMessage = new Vue({
        el: '#welcome-message',
        data: {
        message: 'I design, build, and test software.'
        }
    });
    
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

    const projectSurveyForm = new Vue({
        el: '#project-survey-form',
        data : {
            name: 'Survey Form',
            description: 'A survey form.',
            techs: ['JavaScript', 'CSS', 'HTML'],
           
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

}