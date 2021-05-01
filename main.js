import { Scene, WebGLRenderer, AxesHelper,
         PerspectiveCamera, Mesh, BoxBufferGeometry,
         MeshNormalMaterial, Points, PointsMaterial } from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
const renderer = new WebGLRenderer({
  antialias: true,
  });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

// control the vue in debug
const controls = new OrbitControls(camera, renderer.domElement);


//make a cube

const cubeGeometry = new BoxBufferGeometry(1, 1, 1);
const pointMaterial = new PointsMaterial({
  color: 0xff0000,
  size: 0.1,
})
const points = new Points(cubeGeometry, pointMaterial);

// const cube = new Mesh(
//     new BoxBufferGeometry(1, 1, 1),
//     new MeshNormalMaterial()
//   )


scene.add(points);

//make constant render
// and render the scene this the camera
function tick() {
  renderer.render(scene, camera);
  controls.update();
//  camera.position.x += 0.01;
  requestAnimationFrame(tick);
}

tick();

// resize the screen following the change of window

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  //update the camera
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

