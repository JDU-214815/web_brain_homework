let browser = "edge";

switch (browser) {
    case 'edge':
        alert("you have gotten the edge!");
        break;

    case 'chrome':
    case 'firefox':
    case 'safari':            
    case 'opera':
        alert("you have got the " + browser + "!");
        break;

     default:
        alert("I don't know that browser!");   
}