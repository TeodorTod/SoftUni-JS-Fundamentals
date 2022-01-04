function solve(arr) {
    arr.pop();
    let chat = [];

    for (let i = 0; i < arr.length; i++) {
        let currMessage = arr[i].split(" ");
        let command = currMessage[0];
        if (command === "Chat") {
            let message = currMessage[1];
            chat.push(message);
        } else if (command === "Delete") {
            let insideMessage = currMessage[1];
            for (let index = 0; index < chat.length; index++) {
                let currText = chat[index];
                if (currText === insideMessage) {
                    let removeIndex = chat.indexOf(currText);
                    chat.splice(removeIndex, 1);
                }

            }

        } else if (command === "Edit") {
            let message1 = currMessage[1];
            let editedVersion = currMessage[2];
            let indexOfMessage = chat.indexOf(message1);
            if (chat.includes(message1)) {
                chat.splice(indexOfMessage, 1, editedVersion);
            }

        } else if (command === "Pin") {
            let pinnedMessage = currMessage[1];
            if (chat.includes(pinnedMessage)) {
                let indexOfPin = chat.indexOf(pinnedMessage);
                chat.splice(indexOfPin, 1);
                chat.push(pinnedMessage);
            }
        } else if (command === "Spam") {
            let spamL = currMessage.length;
            for (let k = 1; k < spamL; k++) {
                let currMess = currMessage[k];
                chat.push(currMess);

            }
        }

    }
    console.log(chat.join("\n"));

}
// solve((["Chat Hello",
//         "Chat darling",
//         "Edit darling Darling",
//         "Spam how are you",
//         "Delete Darling",
//         "end"
//     ])
// );


solve((["Hello",
"Delete John",
"Pin Hi",
"end"])
);


// solve((["Chat John",
// "Spam Let's go to the zoo",
// "Edit zoo cinema",
// "Chat tonight",
// "Pin John",
// "end"])
// );