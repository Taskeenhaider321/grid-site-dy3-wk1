const colorVariables = {
    neutral: {
        backgroundColor: 'white',
        textColor: '#003b46',
        navBackground: '#626d71',
        mainBackground: '#CDCDC0',
        sidebarBackground: '#626d71',
        content1Background: '#ddbc95',
        content2Background: '#ddbc95',
        content3Background: '#ddbc95',
        footerBackground: '#b38867',
        buttonBackground: '#cdcdc0',
        buttonBorderColor: '#ddbc95',
        buttonTextColor: '#b38867',
        buttonHoverBackground: '#626d71',
    },
    modern: {
        backgroundColor: '#cdcdc0',
        textColor: '#003b46',
        navBackground: '#0f1b07',
        mainBackground: '#ffffff',
        sidebarBackground: '#0f1b07',
        content1Background: '#5c821a',
        content2Background: '#5c821a',
        content3Background: '#5c821a',
        footerBackground: '#c6d166',
        buttonBackground: '#ffffff',
        buttonBorderColor: '#5c821a',
        buttonTextColor: '#c6d166',
        buttonHoverBackground: '#0f1b07',
    },
    dark: {
        backgroundColor: '#ffffff',
        textColor: 'wheat',
        navBackground: '#46211a',
        mainBackground: '#693d3d',
        sidebarBackground: '#46211a',
        content1Background: '#ba5536',
        content2Background: '#ba5536',
        content3Background: '#ba5536',
        footerBackground: '#a44820',
        buttonBackground: '#693d3d',
        buttonBorderColor: '#ba5536',
        buttonTextColor: '#a44820',
        buttonHoverBackground: '#46211a',
    },

    crispy: {
        backgroundColor: 'whitesmoke',
        textColor: 'rgba(255, 253, 253, 0.795)',
        navBackground: '#258039',
        mainBackground: '#f5be41',
        sidebarBackground: '#258039',
        content1Background: '#31a9b8',
        content2Background: '#31a9b8',
        content3Background: '#31a9b8',
        footerBackground: '#cf3721',
        buttonBackground: '#f5be41',
        buttonBorderColor: '#31a9b8',
        buttonTextColor: '#cf3721',
        buttonHoverBackground: '#258039',
    },
    cool: {
        backgroundColor: 'rgba(255, 253, 253, 0.795)',
        textColor: '#003b46',
        navBackground: '#003b46',
        mainBackground: '#07575b',
        sidebarBackground: '#003b46',
        content1Background: '#66a5ad',
        content2Background: '#66a5ad',
        content3Background: '#66a5ad',
        footerBackground: '#c4dfe6',
        buttonBackground: '#07575b',
        buttonBorderColor: '#66a5ad',
        buttonTextColor: '#c4dfe6',
        buttonHoverBackground: '#003b46',
    },
};

function setTheme(theme) {
    const colors = colorVariables[theme];

    document.body.className = theme;

    // Apply dynamic styles
    Object.keys(colors).forEach((property) => {
        document.body.style.setProperty(`--${property}`, colors[property]);
    });
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// Set neutral theme by default
setTheme('neutral');