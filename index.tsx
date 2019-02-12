import * as React from "react"
import { Hoverable } from "react-multilayer"
import { HoverableProps } from "react-multilayer/Hoverable";

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;


interface DragProps {
    onDrag?: (arg0: DragEvent) => void,
    onDragStart?: (arg0: DragEvent) => void,
    onDragEnd?: (arg0: DragEvent) => void,
}

export type DraggableProps = DragProps & Without<HoverableProps, keyof DragProps>

export class Draggable extends React.Component<DraggableProps>{
    zone = React.createRef<Hoverable>()

    drag = (e: DragEvent) => this.props.onDrag && this.props.onDrag(e)
    dragstart = (e: DragEvent) => this.props.onDragStart && this.props.onDragStart(e)
    dragend = (e: DragEvent) => this.props.onDragEnd && this.props.onDragEnd(e)

    componentDidMount() {
        this.zone.current.ref.current.addEventListener('drag', this.drag)
        this.zone.current.ref.current.addEventListener('dragstart', this.dragstart)
        this.zone.current.ref.current.addEventListener('dragend', this.dragend)
    }

    componentWillUnmount() {
        this.zone.current.ref.current.removeEventListener('drag', this.drag)
        this.zone.current.ref.current.removeEventListener('dragstart', this.dragstart)
        this.zone.current.ref.current.removeEventListener('dragend', this.dragend)
    }

    render() {
        const { onDrag, onDragStart, onDragEnd, children, ...rest } = this.props
        return (
            <Hoverable ref={this.zone} {...rest} draggable>
                {children}
            </Hoverable>
        )
    }
}




interface DropzoneProps {
    onDragEnter?: (arg0: DragEvent) => void,
    onDragLeave?: (arg0: DragEvent) => void,
    onDragExit?: (arg0: DragEvent) => void,
    onDragOver?: (arg0: DragEvent) => void,
    onDrop?: (arg0: DragEvent) => void
}

export class Dropzone extends React.Component<DropzoneProps & Without<HoverableProps, keyof DropzoneProps>>{
    zone = React.createRef<Hoverable>()

    dragenter = (e: DragEvent) => this.props.onDragEnter && this.props.onDragEnter(e)
    dragleave = (e: DragEvent) => this.props.onDragLeave && this.props.onDragLeave(e)
    dragover = (e: DragEvent) => this.props.onDragOver && this.props.onDragOver(e)
    dragexit = (e: DragEvent) => this.props.onDragExit && this.props.onDragExit(e)
    drop = (e: DragEvent) => this.props.onDrop && this.props.onDrop(e)

    componentDidMount() {
        this.zone.current.ref.current.addEventListener('dragenter', this.dragenter)
        this.zone.current.ref.current.addEventListener('dragleave', this.dragleave)
        this.zone.current.ref.current.addEventListener('dragover', this.dragover)
        this.zone.current.ref.current.addEventListener('dragexit', this.dragexit)
        this.zone.current.ref.current.addEventListener('drop', this.drop)
    }

    componentWillUnmount() {
        this.zone.current.ref.current.removeEventListener('dragenter', this.dragenter)
        this.zone.current.ref.current.removeEventListener('dragleave', this.dragleave)
        this.zone.current.ref.current.removeEventListener('dragover', this.dragover)
        this.zone.current.ref.current.removeEventListener('dragexit', this.dragexit)
        this.zone.current.ref.current.removeEventListener('drop', this.drop)
    }

    render() {
        const { onDragEnter, onDragLeave, onDragExit, onDragOver, onDrop, children, ...rest } = this.props
        return (
            <Hoverable ref={this.zone} {...rest}>
                {children}
            </Hoverable>
        )
    }
}