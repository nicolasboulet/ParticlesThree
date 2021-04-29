import { Scene, WebGLRenderer, AxesHelper,
PerspectiveCamera } from "three";
import './style.css'

const scene = new Scene();

//create axes :
scene.add(new AxesHelper());

//create camera and position on z
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight
, 0.01, 1000 )

camera.position.z = 2;
camera.position.x = 0.5;
camera.position.y = 0.5;

//add camera to scene

scene.add(camera);

// render
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

//render the scene this the camera

//make constant render
const tick = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();
