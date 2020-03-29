import React from 'react';
import {Layer} from 'react-konva';
import {Node} from "./node";


export function SkillmapLayer(props) {
    return (
        <Layer>
            {/* lineVisibleを使って、rootノードから生成される余計なLineを非表示にしている */}
            <Node data={props.data} lineVisible={false}/>
        </Layer>
    );
}