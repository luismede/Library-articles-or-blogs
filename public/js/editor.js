const artigoTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');
const autorField = document.querySelector('.autor');

// BANNER
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

// PUBLISH BUTTON & IMAGE UPLOAD ARTICLE TEXT
const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})

// UPLOAD IMAGE 

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if(file && file.type.includes("image")){
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data => {
            if(uploadType == "image"){
                addImage(data, file.name);
            } else{
                bannerPath = `${location.origin}/${data}`;
                banner.style.backgroundImage = `url("${bannerPath}")`;
            }
        })
    } else{
        alert("upload Image only");
    }
}

const addImage = (imagepath, alt) => {
    let curPos = articleFeild.selectionStart && autorFeild.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    articleFeild.value = articleFeild.value.slice(0, curPos) + textToInsert + articleFeild.value.slice(curPos);
    autorField.value = autorField.value.slice(0, curPos) + textToInsert + autorField.value.slice(curPos);
}

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', () => {
    if (articleFeild.value.length && artigoTitleField.value.length && autorField.value.length){
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let artigoTitle = artigoTitleField.value.split(" ", "?", ":", ",", ".", "#", "/", "%", '""', "''",
            "!", "$", "*", "+", "-", "@",
            "=", "<", ">", "^", "~", "[", "]", "`", "{").join("-");
        let id = '';
        for(let i = 0; i < 4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        let docName = `${artigoTitle}-${id}`;
        let date = new Date();

        db.collection("artigos").doc(docName).set({
            title: artigoTitleField.value,
            article: articleFeild.value,
            autor: autorField.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
        .then(() => {
            location.href = `/${docName}`;
        })
        .catch((err) => {
            console.error(err);
        })
    }
})
