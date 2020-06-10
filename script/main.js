window.onload = function () {
    const welcomeMessage = new Vue({
        el: '#welcome-message',
        data: {
        message: 'I am software developer that believes in the KISS (Keep It Simple Stupid) principle.'
        }
    });
    
    const projectMyLibrary = new Vue({
        el: '#project-mylibrary',
        data : {
            name: 'MyLibrary',
            techs: ['jQuery', 'Bootstrap', 'JavaScript', 'CSS', 'HTML', 'Mocha', 'Chai', 'Firebase'],
        }
    });

    const projectBlog = new Vue({
        el: '#project-blog',
        data : {
            name: 'Software KISS (Blog)',
            techs: ['JavaScript', 'CSS', 'HTML', 'Heroku', 'Express', 'PostgreSQL'],
           
        }
    });

    const projectSurveyForm = new Vue({
        el: '#project-survey-form',
        data : {
            name: 'Survey Form',
            techs: ['JavaScript', 'CSS', 'HTML'],
           
        }
    });

    const projectTechDocPage = new Vue({
        el: '#project-technical-documentation-page',
        data : {
            name: 'Technical Documentation Page',
            techs: ['Bootstrap', 'CSS', 'HTML'],
           
        }
    });

    const projectRandomQuoteMachine = new Vue({
        el: '#project-random-quote-machine',
        data : {
            name: 'Random Quote Machine',
            techs: ['React', 'Bootstrap', 'JavaScript', 'CSS', 'HTML'],
           
        }
    });

    const projectMarkdownPreviewer = new Vue({
        el: '#project-markdown-previewer',
        data : {
            name: 'Markdown Previewer',
            techs: ['React', 'Bootstrap', 'JavaScript', 'CSS', 'HTML'],
           
        }
    });

}