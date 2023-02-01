import {Activity} from "./Activity.js"

export class Ihm {
    constructor (validateBtn, inputTitle, inputContent, inputSearch, searchBtn, tableContent) {
        this.activities = [];
        this.validateBtn = validateBtn;
        this.inputTitle = inputTitle;
        this.inputContent =  inputContent;
        this.inputSearch = inputSearch;
        this.searchBtn = searchBtn;
        this.tableContent = tableContent;
    }

    addNewActivity () {
        this.validateBtn.addEventListener('click', () => {
            const newTitle = this.inputTitle.value;
            const newContent = this.inputContent.value;
            const id = this.activities.length+1;
            const activity = new Activity (id, newTitle, newContent);
            this.activities.push(activity);
            console.table(this.activities);
            this.display();
        }) 
    }

    display () {
        this.tableContent.innerHTML ="";
        for (let activity of this.activities) {
            this.tableContent.innerHTML += `<tr><td>${activity.id}</td><td>${activity.title}</td><td>${activity.content}</td><td><button type="button" class="btn btn-danger m-1" onclick="deleteActivity(${activity.id})"><i class="bi bi-trash"></i></button><button type="button" class="btn btn-warning"><i class="bi bi-clock"></i></button></td></tr>`
        }
    }

    deleteActivity (id) {
        const index=id-1
        this.activities.splice(index, 1);
        this.display()
        console.table(this.activities)
    }

    selectActivity () {

    }
}