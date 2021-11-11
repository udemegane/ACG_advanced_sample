import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { ACGCustomRenderingPipeline } from "./acgCustomRenderingPipeline"
import {
    Engine,
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    Mesh,
    MeshBuilder,
    PostProcessRenderPipelineManager
} from "@babylonjs/core";

class Main {
    constructor() {
        const canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "appCanvas";
        document.body.appendChild(canvas);

        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2.0, Math.PI / 2.0, 2.0, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        const light1: HemisphericLight = new HemisphericLight("Light1", new Vector3(1, 1, 0), scene);
        const sphere: Mesh = MeshBuilder.CreateSphere("Sphere", { diameter: 1 }, scene);

        const pipeline = new ACGCustomRenderingPipeline("renderingPipeline", scene, [camera]);

        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}