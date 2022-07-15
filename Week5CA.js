//Jair Alcon
//Week 5 Coding Assignment

/*
1.	Create a menu app as seen in this week's video. What you create is up to you as long as it meets the following requirements.
    a.	Use at least one array.
    b.	Use at least two classes.
    c.	Your menu should have the options to create, view, and delete elements.
*/

// creating class for Phone which assigns a name
class Phone {
    constructor(name, storage) {
        this.name = name;
        this.storage = storage;
    }
}


class Menu {
    constructor() {
        this.phones = [];
    }

    //* entry point to application
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPhone();
                    break;                
                case '2':
                    this.deletePhone();
                    break;
                case '3':
                    this.displayPhones();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    //showing UI on the screen to receive input 0-3
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new phone
            2) delete phone
            3) display phone list
        `);
    }

    //
    createPhone() {
        // requesting user to enter both data types in separate prompts
        let name = prompt('Enter name of phone');
        let storage = prompt('Enter name storage size of phone (GB)');
        // after data is entered, then it's pushed into phones array
        this.phones.push(new Phone(name, storage));
        //logging what createPhone pushed into "phones" array"
        console.log(`This phone was just added to the phones array:`, new Phone(name, storage));
    }

    //created a method that returns a list of available phones
    availablePhones() {
        let phoneNamesList = '';
        // for loop to iterate through current array of available phones
        for (let index = 0; index < this.phones.length; index++) {
            // assigning iteration to new variable
            phoneNamesList += `\n Phone ${index} is: ${this.phones[index].name} - ${this.phones[index].storage}GB`
        }
        // returning created data to new data
        return phoneNamesList;
    }

    // working on displaying available data within phones array
    deletePhone() {
        let index = prompt (`Enter the index of the phone you wish to delete: ${this.availablePhones()}`);
        // index is grabbing/finding data based off input
        if (index > -1 && index < this.phones.length) {
            // once data is found, then log in console/alert 
            console.log(`${this.phones[index].name} - ${this.phones[index].storage}GB phone was deleted.`);
            alert(`${this.phones[index].name} - ${this.phones[index].storage}GB phone was deleted.`);
            // after log/alert, then delete data/perform code
            this.phones.splice(index, 1);
        }

        else {
            console.log(`Entered invalid index: ${this.phones.length} exist(s) \n
            Try again but enter ${this.phones.length - 1} or 0`);
            alert (`You can only delete a phone that exists: ${this.phones.length} exist(s) \n
            Try again but enter ${this.phones.length - 1} or 0`);
        }
    }

    // method to display current phones in "phones" array
    displayPhones() {
        let phoneString = '';
        for (let i = 0; i < this.phones.length; i++) {
            phoneString += `${i}) ${this.phones[i].name} - ${this.phones[i].storage}GB \n`;
        }
        alert(phoneString);
        // displays current data that has been added
        console.log(phoneString);
    }
}

//to start menu in browser
let menu = new Menu();
// menu.start();


// testing code
// let test = new Phone('iPhone', 250);
// console.log(test);