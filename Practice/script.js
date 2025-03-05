function task1(callback){
    setInterval(() => {
        console.log("Tast 1 complete");
        callback();
    }, 2000);

}

function task2(callback){
    setTimeout(() => {
        console.log("task 2 completed")
        callback();
    }, 1000);
}

task1(() => {task2()});
task2();