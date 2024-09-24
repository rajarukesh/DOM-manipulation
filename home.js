
// JavaScript DOM Manipulation


let  fileChange = (event) => {
    let file = event.target.files[0]
   
    let fileReader = new FileReader();
    fileReader.onload = function (event) {

        // Twiiter
        let twitterImage = document.getElementById('twitterImage')
        twitterImage.setAttribute('src', event.target.result)
    
        //Slack
        let slackImage = document.getElementById('slackImage')
        slackImage.setAttribute('src', event.target.result)

        let imagePreview = document.getElementById('imagePreview');
        
        imagePreview.style.backgroundImage = `url(${event.target.result})`;
    }
    
    fileReader.readAsDataURL(file);

};


document.getElementById('titleInput').addEventListener('input', function () {
    let title = this.value;
    document.getElementById('googleTitle').textContent = title;
    document.getElementById('twitterTitle').textContent = title;
    document.getElementById('slackTitle').textContent = title;
    // document.getElementById('googleDescription').textContent = title;
});

document.getElementById('descriptionInput').addEventListener('input', function () {
    let input = this.value;
    document.getElementById('googleDescription').textContent = input;
    document.getElementById('twitterDescription').textContent = input;
    document.getElementById('slackDescription').textContent = input;
});

document.getElementById('meta-search-link').addEventListener('input', function () {
    let input = this.value;
    document.getElementById('meta-link').textContent = input;
});


document.getElementById('titleInput').addEventListener('input', function () {
    let text = this.value;
    document.getElementById('title_text_count').innerText = text.length;

});

document.getElementById('descriptionInput').addEventListener('input', function () {
    let count = this.value;
    document.getElementById('description_text_count').innerText = count.length;
});




    






