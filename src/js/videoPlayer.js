const videoPlayer = () => {
    const projectDiv = document.getElementById('project'); // find the project div in the html
    projectDiv.innerHTML = "";
    const h3Element = document.createElement('h3');
    h3Element.innerHTML = 'Mini Project';
    h3Element.classList.add('text-center');

    const currentRectangle = projectDiv.getBoundingClientRect(); // current div size attributes
    console.log(currentRectangle.width)
    const videoWidth = currentRectangle.width * 0.8;
    const videoHeight = 400;

    const videoElement = document.createElement('video');
    videoElement.width = videoWidth;
    videoElement.height = videoHeight;
    videoElement.style.paddingLeft = currentRectangle.width * 0.1.toString() + 'px';
    videoElement.setAttribute('controls', true);

    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', './videos/DBS%20project.mp4');
    sourceElement.setAttribute('type', 'video/mp4');

    const textNode = document.createTextNode('Your browser does not support the video tag');

    const descElement = document.createElement('p');
    descElement.innerHTML = 'Using C++ and Oracle SQL scripts, our group develop a simple Seneca Library System Database Application. Based on different user demands, we design a series of reports to check and return the status of users login information, books, fine, etc., for every user.'
    descElement.classList.add('text-left')

    videoElement.appendChild(sourceElement);
    videoElement.appendChild(textNode);

    projectDiv.appendChild(h3Element);
    projectDiv.appendChild(videoElement);
    projectDiv.appendChild(descElement)


}