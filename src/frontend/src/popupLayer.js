import React from 'react';
import {Layer, Rect} from 'react-konva';


export function PopupLayer() {
    return (
        <Layer>
            <Rect
                fill={"black"}
                width={200}
                height={200}
                >
            </Rect>
        </Layer>
    );
}