document.addEventListener('DOMContentLoaded', function () {
    const assignButton = document.getElementById('assign-button');
    const taskTable = document.getElementById('task-table').getElementsByTagName('tbody')[0];

    assignButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const taskname = document.getElementById('taskname').value;
        const taskdesc = document.getElementById('taskdesc').value;
        const assignee = document.getElementById('assignee').value;

        if (username && taskname && taskdesc && assignee) {
            const newRow = taskTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);

            cell1.innerHTML = username;
            cell2.innerHTML = taskname;
            cell3.innerHTML = taskdesc;
            cell4.innerHTML = assignee;

            const doneButton = document.createElement('button');
            doneButton.textContent = 'Done';
            doneButton.className = 'done-button';

            doneButton.addEventListener('click', function () {
                // Remove the row when the Done button is clicked
                taskTable.deleteRow(newRow.rowIndex);

                // Check if there are no more rows and display "No Pending Task" with animation
                if (taskTable.rows.length === 0) {
                    const noPendingTask = document.createElement('div');
                    noPendingTask.textContent = 'No Pending Task';
                    noPendingTask.className = 'no-pending-task';
                    document.body.appendChild(noPendingTask);

                    setTimeout(function () {
                        document.body.removeChild(noPendingTask);
                    }, 3000); // Remove the message after 3 seconds
                }
            });

            cell5.appendChild(doneButton);

            // Clear input fields
            document.getElementById('username').value = '';
            document.getElementById('taskname').value = '';
            document.getElementById('taskdesc').value = '';
            document.getElementById('assignee').value = '';
        }
    });

    // Add event delegation to handle "Done" button clicks for all rows
    document.addEventListener('click', function (event) {
        if (event.target && event.target.className === 'done-button') {
            const row = event.target.parentNode.parentNode;
            taskTable.deleteRow(row.rowIndex);

            // Check if there are no more rows and display "No Pending Task" with animation
            if (taskTable.rows.length === 0) {
                const noPendingTask = document.createElement('div');
                noPendingTask.textContent = 'No Pending Task';
                noPendingTask.className = 'no-pending-task';
                document.body.appendChild(noPendingTask);

                setTimeout(function () {
                    document.body.removeChild(noPendingTask);
                }, 3000); // Remove the message after 3 seconds
            }
        }
    });
});
