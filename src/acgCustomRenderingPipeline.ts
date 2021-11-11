import { Camera, Engine, EngineStore, PostProcessRenderPipeline, Scene } from "@babylonjs/core";

export class ACGCustomRenderingPipeline extends PostProcessRenderPipeline {
    private _scene: Scene;
    private _camerasToBeAttached: Array<Camera> = [];
    constructor(name: string = "", scene: Scene = EngineStore.LastCreatedScene!, cameras?: Camera[]) {
        super(scene.getEngine(), name);
    }
}