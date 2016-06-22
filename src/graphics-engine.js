import THREE from 'three';
import '../node_modules/three/examples/js/renderers/CanvasRenderer.js';
import '../node_modules/three/examples/js/controls/OrbitControls.js';

class GraphicsEngine {
    constructor (options) {
        options = options || {};

        const w = GraphicsEngine.WindowWidth;
        const h = GraphicsEngine.WindowHeight;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(15, w / h, 0.1, Number.MAX_SAFE_INTEGER);
        this.camera.position.set(10, 15, 100);
        this.scene.add(this.camera);

        this.lookAt = new THREE.Object3D();
        this.scene.add(this.lookAt);
        this.lookAt.add(this.camera);
        this.camera.lookAt(this.lookAt.position);

        if (GraphicsEngine.isWebglAvailable()) {
            this.renderer = new THREE.WebGLRenderer(options);
        } else {
            this.renderer = new THREE.CanvasRenderer(options);
        }
        this.renderer.setSize(w, h);
        this.renderer.shadowMapEnabled = true;

        var geometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
        var material = new THREE.MeshLambertMaterial({
            color: new THREE.Color(0, 0, 1)
        });
        var ground = new THREE.Mesh(geometry, material);
        ground.rotation.x = THREE.Math.degToRad(-90);
        ground.receiveShadow = true;
        this.scene.add(ground);

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.enableZoom = true;

        geometry = new THREE.BoxGeometry(10, 10, 10);
        var cube = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
            color: new THREE.Color(0, 1, 0),
            side: THREE.DoubleSide
        }));
        cube.position.y = 5;
        cube.castShadow = true;
        this.scene.add(cube);
        this.cube = cube;

        var ambientLight = new THREE.AmbientLight('#666');
        this.scene.add(ambientLight);

        var pointLight1 = new THREE.PointLight('#ffffff');
        pointLight1.position.set(10, 20, 30);
        pointLight1.intensity = 0.8;
        pointLight1.castShadow = true;
        this.scene.add(pointLight1);

        this.isAnimating = true;
    }
    static isWebglAvailable () {
        try {
            var canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext
            && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }
    static get WindowWidth () {
        // in case we are in an iframe
        return top.innerWidth;
    }
    static get WindowHeight () {
        // in case we are in an iframe
        return top.innerHeight;
    }
    start () {
        this.isAnimating = true;
        this.render();
    }
    stop () {
        this.isAnimating = false;
    }
    render () {
        this.renderer.render(this.scene, this.camera);
        this.animate();
        if (this.isAnimating) {
            requestAnimationFrame(this.render.bind(this));
        }
    }
    animate () {
        var deg = THREE.Math.radToDeg(this.lookAt.rotation.y);
        this.lookAt.rotation.y = THREE.Math.degToRad(deg - 0.2);
    }

    setCameraFOV (fov, z) {
        this.camera.fov = fov;
        this.camera.position.z = z || this.camera.position.z;
        this.camera.updateProjectionMatrix();
    }
}

export default GraphicsEngine;