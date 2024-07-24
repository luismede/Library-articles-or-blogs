# 📖 Library Online

![Overview project](https://github.com/user-attachments/assets/a6876e91-5f21-4f58-8fc8-1c18e73a73b6)


# About this project
The website ideia is: "How about bringing together multiple articles, blogs, news, troubleshooting and more on one site?"

**Note:** The website code is unlimited! I chose articles as the main topic. But if you wish, you can change it to your theme.

The site was not hosted on any hosting. But for testing I started the server on my localhost and started ngrok to have a public link.

#### Important observations:
**1** - I did not program the password recovery option, although it appears in the login option. 😉

**2** - The image upload is not connected to firebase storage, so the images are being uploaded on your machine in the uploads/ folder. 🗂️

---

# Website operation 👇
**Obs:** I don't know how to make good diagrams, I TRIED!
If you use a light theme color, the dark diagram is on the readme page.

<img src="./readme/diagram-library.svg"></img>



# Future implementations
- Comment system
- Search by filter

---
# Getting started
**Prerequisites**
To use this project I used npm and firebase.
You must enter your API KEY and information in **firebase-init.js**

**Clonning the repository**
```
$ git clone https://github.com/luismede/Library-articles-or-blogs/

$ cd Library-articles-or-blogs
```
**Installing dependencies**
```
$ npm install
```
#### Don't forget, change your firebase-init.js
```js

const firebaseConfig = {
    
    // YOUR FIREBASE HERE
     apiKey: "",
     authDomain: "",
     projectId: "",
     storageBucket: "",
     messagingSenderId: "",
     appId: ""
};

```


**Booting the server**
```
$ npm start
```
---

# ⚙️ Configuring Firebase

## Fist Authentication

**ADD Provider EMAIL & PASSWORD**
<img src="readme/Captura de tela 2024-07-21 135720.png">

---

**ADD new user**
<img src="readme/Captura de tela 2024-07-21 135911.png">


https://github.com/user-attachments/assets/835ef28e-6723-40cf-8428-ff0d9f7efbad

<img src="readme/Captura de tela 2024-07-21 135941.png">

---

### Register
https://github.com/user-attachments/assets/9f05dcc1-d156-491b-a226-fa38dc920d3f

<img src="readme/Captura de tela 2024-07-21 140420.png">

---

## Firestore Database
![Captura de tela 2024-07-21 144259](https://github.com/user-attachments/assets/bedd7c79-b981-4b3f-855b-5b3ef42132f3)
![Captura de tela 2024-07-21 144449](https://github.com/user-attachments/assets/2c45fa17-c39b-47ce-9c6b-78e92d6786fa)
![Captura de tela 2024-07-21 144506](https://github.com/user-attachments/assets/053f6283-bbe3-4d84-b0eb-555a2a700af2)

---

# Contributing with me
If you are interested in the project and think you can contribute in some way to correcting or improving something. this is my contact:

📬 E-mail: luishenrique23h@hotmail.com </br>
Discord: _luismede(Preferably)

**And of course, feel free to submit your PRs**

Thanks

### License
MIT License - 2024
