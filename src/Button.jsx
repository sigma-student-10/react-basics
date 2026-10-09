function printHello() {
    console.log("Hello");
}

function printBye() {
    console.log("bye");
}
function onDobleClick() {
    console.log("Double clicked");
}

export default function Button(){
    return (
    <div>
        <button onClick={printHello}>Click me</button>
        <p onMouseOver={printBye}>hi i am a root for bye</p>
        <button onDoubleClick={onDobleClick}>Double click me</button>
    </div>
   
    ); 
}