

const a :Project = new Project('pro');

/**
 *  Add a project in the homePage
 */
const btn = document.querySelector('button[type=submit]') as HTMLButtonElement;
btn.addEventListener('click',function() {
    let input = document.querySelector('#addTitleP') as HTMLInputElement;
    console.log("project : " + input.value);

})

