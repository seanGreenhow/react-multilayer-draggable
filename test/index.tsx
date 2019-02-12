import * as React from "react"
import * as ReactDOM from "react-dom"
import { Layer, Multilayer } from "react-multilayer";
import { Dropzone, Draggable } from "..";
import Movable from "../Movable";

let currentDragObject

function dragStart(ev: DragEvent) {
    currentDragObject = ev.target
    ev.dataTransfer.setData("text/plain", (ev.target as any));
}

function drag(ev: DragEvent) {
    //console.log(ev)
}

function dragEnd(ev: DragEvent) {
    let currentDragObject = undefined
}

function drop(ev: DragEvent) {
    ev.preventDefault();
    if (ev.target != currentDragObject && !(ev.target as any).contains(currentDragObject)) {
        (ev.target as any).appendChild(currentDragObject)
    }
}


window.onload = async () => {
    ReactDOM.render((
        <div style={{ height: '100%' }}>
            <Multilayer id="Multilayer 1">
                <Layer id="Layer 1" style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255,0,0,0.5)"
                }}>
                    <button style={{ position: 'relative', background: 'rgb(255,255,255)', top: '33%' }}
                        onClick={(e) => console.log('Button on Layer 1')}
                    >Layer 1</button>
                </Layer>


                <Layer id="Layer 4"
                    style={{
                        width: "25%",
                        backgroundColor: "rgba(255,0,0,0.5)"
                    }}
                >
                    DragLayer
                    <Dropzone id="dropzone1" onDrop={drop}
                        onDragEnter={() => console.log('entered drag zone')}
                        onDragLeave={() => console.log('left drag zone')}
                        onDragOver={() => console.log('over drag zone')}
                        onDragExit={() => console.log('exit drag zone')}
                        style={{ width: 100, height: 100, background: 'gray', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <Draggable
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            style={{ background: 'blue' }} onDrag={drag} >
                            Dragable
                        </Draggable>
                    </Dropzone>
                    <Dropzone id="dropzone2" onDrop={drop}
                        onDragEnter={() => console.log('entered drag zone')}
                        onDragLeave={() => console.log('left drag zone')}
                        onDragOver={() => console.log('over drag zone')}
                        onDragExit={() => console.log('exit drag zone')}
                        style={{ width: 100, height: 100, background: 'gray', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    </Dropzone>
                </Layer>


                <Multilayer id="Multilayer 2">
                    <Layer id="Layer 2"
                        style={{
                            width: "50%",
                            backgroundColor: "rgba(255,0,0,0.5)"
                        }}
                    >
                        <button style={{ position: 'relative', background: 'rgb(255,255,255)', top: '66%' }} onClick={(e) => console.log('Button on Layer 2')}
                        >Layer 2</button>
                    </Layer>
                    <Layer id="Layer 3"
                        style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: "rgba(255,0,0,0.5)"
                        }}
                    >
                        <button
                            style={{ position: 'relative', background: 'rgb(255,255,255)', top: '33%' }}
                            onClick={(e) => console.log('Button on Layer 3')}
                            onMouseEnter={() => console.log('MouseEnter Button Layer 3')}
                        >Layer 3</button>
                    </Layer>
                    <Layer id="Layer 5"
                        style={{
                            top: '75%',
                            width: "25%",
                            backgroundColor: "rgba(255,0,0,0.5)"
                        }}
                    >
                        NestedDragLayer
                        <Dropzone id="dropzone3" onDrop={drop}
                            onDragEnter={() => console.log('entered NestedDrag zone')}
                            onDragLeave={() => console.log('left NestedDrag zone')}
                            onDragOver={() => console.log('over NestedDrag zone')}
                            onDragExit={() => console.log('exit NestedDrag zone')}
                            onMouseEnter={() => console.log('MouseEnter NestedDrag zone')}
                            style={{ width: 100, height: 100, background: 'gray', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}>
                            <Movable id="drag2"
                                onDragStart={dragStart}
                                onDragEnd={() => console.log('i just got dragged!')}
                                style={{ background: 'green' }}>
                                Nested
                            </Movable>
                        </Dropzone>
                        <Dropzone id="dropzone4" onDrop={drop}
                            onDragEnter={() => console.log('entered NestedDrag zone')}
                            onDragLeave={() => console.log('left NestedDrag zone')}
                            onDragOver={() => console.log('over NestedDrag zone')}
                            onDragExit={() => console.log('exit NestedDrag zone')}
                            style={{ width: 100, height: 100, background: 'gray', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}>

                        </Dropzone>
                    </Layer>
                </Multilayer>

            </Multilayer>
        </div>
    ), document.getElementById("root"))
}