let scene, camera, renderer, cube; 

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    //const geometry = new THREE.BoxGeometry(2, 2, 2 );
    const geometry = new THREE.RingGeometry( 1, 2, 20 );
    //const material = new THREE.MeshBasicMaterial({color: 0x0000ff});

const texture = new THREE.TextureLoader().load('textures/ice.jpg')
const material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});

    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    const controls = new OrbitControls(camera, renderer.domElement);
    
    camera.position.z = 5;

    window.addEventListener( 'resize', onWindowResize, false );
}


function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

init(); 
animate();

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';