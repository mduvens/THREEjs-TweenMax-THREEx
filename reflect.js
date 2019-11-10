let renderer, camera,scene;
let viewAngle = 45;
let near = 1;
let far = 10000;
let aspect = window.innerWidth / window.innerHeight;

renderer = new THREE.WebGLRenderer();
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(viewAngle, aspect,near,far);

//+++++++LIGHTS
const ambientLight = new THREE.AmbientLight(0xffffff, 1 , 500);
//*****BACKGROUND */
let backG = [
    'posx.jpg','negx.jpg',
    'posy.jpg','negy.jpg',
    'posz.jpg','negz.jpg',
]
let bLoader = new THREE.CubeTextureLoader();
scene.background = bLoader.load(backG)
//*****OBJECTS */
let sphereCamera = new THREE.CubeCamera(1,1000,500); //reflexion
let geo = new THREE.SphereGeometry(20,32,32)
let material = new THREE.MeshBasicMaterial({envMap: sphereCamera.renderTarget})
let sphere = new THREE.Mesh(geo,material)



function init(){

    scene.add(camera)
    camera.position.set(0,35,100)
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    scene.add(sphere)
    sphere.position.set(0,10,0)
    scene.add(sphereCamera)
    sphere.position.set(0,10,0)

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
    controls.update()
    renderer.render(scene, camera)
}
function animate(){
    requestAnimationFrame(animate)
    sphereCamera.updateCubeMap(renderer,scene)
    controls.update()
    renderer.render(scene, camera)
}
init();
animate();

