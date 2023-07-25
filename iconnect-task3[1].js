const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

function getUniqueUsersList1() {
    const uniqueUsersList1 = list1.filter(user => !list2.includes(user));
    displayOutput(uniqueUsersList1, 'output1');
}

function getUniqueUsersList2() {
    const uniqueUsersList2 = list2.filter(user => !list1.includes(user));
    displayOutput(uniqueUsersList2, 'output2');
}

function getCommonUsers() {
    const commonUsers = list1.filter(user => list2.includes(user));
    displayOutput(commonUsers, 'output3');
}

function displayOutput(users, outputDivId) {
    const outputDiv = document.getElementById(outputDivId);
    const outputList = document.createElement('ul');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user;
        outputList.appendChild(listItem);
    });
    outputDiv.innerHTML = '';
    outputDiv.appendChild(outputList);
}