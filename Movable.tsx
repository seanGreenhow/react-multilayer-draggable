import * as React from "react"
import { DraggableProps, Draggable } from ".";

interface MovableProps {
    dragStyle?: React.CSSProperties
}

export default class Movable extends React.Component<MovableProps & DraggableProps>{
    render() {
        const { onDrag, onDragStart, onDragEnd, ...rest } = this.props
        return (
            <Draggable
                onDragStart={ev => this.dragStart(ev, onDragStart)}
                onDragEnd={ev => this.dragEnd(ev, onDragStart)}
                onDrag={ev => this.drag(ev, onDragStart)}
                {...rest} />
        )
    }

    dragStart(ev: DragEvent, callback?: (e: DragEvent) => void) {
        CurrentMove.target = ev.target as HTMLElement

        CurrentMove.startPos = {
            x: CurrentMove.target.getBoundingClientRect().top + window.scrollY,
            y: CurrentMove.target.getBoundingClientRect().left + window.scrollX
        }

        CurrentMove.mouseOffset = {
            x: ev.pageX - CurrentMove.startPos.x,
            y: ev.pageY - CurrentMove.startPos.y
        }

        CurrentMove.currentPos = {
            x: CurrentMove.startPos.x,
            y: CurrentMove.startPos.y
        }

        //Add to DragLayer
    }

    drag(ev: DragEvent, callback?: (e: DragEvent) => void) {


    }

    dragEnd(ev: DragEvent, callback?: (e: DragEvent) => void) {
        CurrentMove.target = undefined
        CurrentMove.startPos = undefined
        CurrentMove.mouseOffset = undefined
    }
}

interface Vector2D {
    x: number,
    y: number
}

namespace CurrentMove {
    export let target: HTMLElement
    export let startPos: Vector2D
    export let mouseOffset: Vector2D
    export let currentPos: Vector2D
}