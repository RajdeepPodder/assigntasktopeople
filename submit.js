function getTxt () {
    const name = document.getElementById('name').value; 
    const task = document.getElementById('task').value;
    localStorage.setItem("passName",name);
    localStorage.setItem("passTask",task);
}